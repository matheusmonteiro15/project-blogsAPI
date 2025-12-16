const { postManagerService } = require('../services');
const translateStatusToHTTPCode = require('../utils/translateStatusToHTTPCode');

const create = async (req, res) => {
  const { status, data } = await postManagerService.create(req.user, req.body);

  res.status(translateStatusToHTTPCode(status)).json(data);
};

const retrieveAllRecords = async (req, res) => {
    const { status, data } = await postManagerService.retrieveAllRecords();
  
    res.status(translateStatusToHTTPCode(status)).json(data);
  };

const retrieveByID = async (req, res) => {
    const { id } = req.params;
    const { status, data } = await postManagerService.retrieveByID(id);
  
    res.status(translateStatusToHTTPCode(status)).json(data);
  };

const editPost = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;
  
    const { status, data } = await postManagerService.editPost(id, req.body, userId);

    res.status(translateStatusToHTTPCode(status)).json(data);
};

  const queryBlogPosts = async (req, res) => {
    const { q } = req.query;
  
    const { status, data } = await postManagerService.queryBlogPosts(q);
  
    res.status(translateStatusToHTTPCode(status)).json(data);
  };

module.exports = {
  create,
  retrieveAllRecords,
  retrieveByID,
  editPost,
  queryBlogPosts,
};
