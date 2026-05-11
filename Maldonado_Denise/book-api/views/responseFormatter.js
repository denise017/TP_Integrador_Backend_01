function successResponse(message, data) {
  return JSON.stringify(
    {
      status: "success",
      message,
      data,
    },
    null,
    2,
  );
}

function errorResponse(message) {
  return JSON.stringify(
    {
      status: "error",
      message,
    },
    null,
    2,
  );
}

module.exports = {
  successResponse,
  errorResponse,
};
