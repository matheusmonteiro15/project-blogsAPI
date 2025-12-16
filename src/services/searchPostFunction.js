const { Sequelize } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const queryBlogPosts = async (query) => {
    const { Op } = Sequelize;
  
    const publications = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${query}%` } },
          { content: { [Op.like]: `%${query}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
  
    return { status: 'SUCCESSFUL', data: publications };
  };

module.exports = {
    queryBlogPosts,
};
