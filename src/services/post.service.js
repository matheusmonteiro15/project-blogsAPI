const validation = require('./validations/validationPostValues');
const { sequelize, BlogPost, PostCategory, User, Category } = require('../models');
const { queryBlogPosts } = require('./searchPostFunction');

const create = async (payload, post) => {
  const error = await validation.ensurePostValidity(post);
  if (error) return { status: error.status, data: { message: error.message } };
  const { userId } = payload;
  const { title, content, categoryIds } = post;
  const result = await sequelize.transaction(async (t) => {
  const blogPost = await BlogPost.create({ title, content, userId }, { transaction: t });
  const postCategories = categoryIds.map((categoryId) => ({
    postId: blogPost.id,
    categoryId,
    }));
    await PostCategory.bulkCreate(postCategories, { transaction: t });
    return blogPost;
  });
  return { status: 'CREATED', data: result };
};
const retrieveAllRecords = async () => {
  const publications = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    });
    return { status: 'SUCCESSFUL', data: publications };
  };
const retrieveByID = async (id) => {
  const publication = await BlogPost.findByPk(id, {
    include: [
    { model: User, as: 'user', attributes: { exclude: 'password' } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    });
    if (!publication) return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
    return { status: 'SUCCESSFUL', data: publication };
  };
const editPost = async (postId, post, userId) => {
  const error = await validation.ensurePostUpdatePermission(postId, post, userId);
  if (error) return { status: error.status, data: { message: error.message } };
  const { title, content } = post;
  await BlogPost.update(
    { title, content },
    { where: { id: postId } },
    );
    return retrieveByID(postId);
  };
module.exports = {
  create,
  retrieveAllRecords,
  retrieveByID,
  editPost,
  queryBlogPosts,
};