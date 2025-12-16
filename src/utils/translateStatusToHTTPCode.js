const mapaDeStatusHTTP = {
    SUCCESSFUL: 200,
    CREATED: 201,
    TERMINATED: 204,
    BAD_REQUEST: 400,
    PERMISSION_DENIED: 401,
    NOT_FOUND: 404,
    DISPUTE: 409,
  };
  
  const translateStatusToHTTPCode = (status) => mapaDeStatusHTTP[status] || 500;
  
  module.exports = translateStatusToHTTPCode;
