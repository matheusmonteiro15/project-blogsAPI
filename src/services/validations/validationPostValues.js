const { Category, BlogPost } = require('../../models');

const ensureCategories = async (categoryIds) => {
  const promises = categoryIds.map(async (id) => Category.findByPk(id));
  const categories = await Promise.all(promises);
  if (categories.includes(null)) {
    return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }
};

const ensurePostValidity = async (post) => {
  const { title, content, categoryIds } = post;

  if (!title || !content) {
    return { status: 'BAD_REQUEST', message: 'Some required fields are missing' };
  }

  if (!categoryIds || categoryIds.length === 0) {
    return { status: 'BAD_REQUEST', message: 'one or more "categoryIds" not found' };
  }

  return ensureCategories(categoryIds);
};

const ensurePostUpdatePermission = async (id, post, userId) => {
    const { title, content } = post;
  
    if (!title || !content) {
      return { status: 'BAD_REQUEST', message: 'Some required fields are missing' };
    }
  
    const blogPublication = await BlogPost.findByPk(id);
  
    if (blogPublication && blogPublication.userId !== userId) {
      return { status: 'PERMISSION_DENIED', message: 'Unauthorized user' };
    }
  };

module.exports = {
  ensurePostValidity,
  ensurePostUpdatePermission,
};