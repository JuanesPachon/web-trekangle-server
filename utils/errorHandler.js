function handleError(res, statusCode, message) {
  res.status(statusCode).json({ error: message });
}

function handleAuthError(res) {
  handleError(res, 403, "You do not have permission to perform this action");
}

function handleValidationError(res) {
  handleError(res, 400, "Invalid input data");
}

function handleServerError(res) {
  handleError(res, 500, "The server encountered an error");
}

function handleNotFoundError(res, resource = "Resource") {
  handleError(res, 404, `${resource} not found`);
}

function handleDuplicateError(res, message = "The resource already exists") {
  handleError(res, 409, message);
}

export default {
  handleError,
  handleAuthError,
  handleValidationError,
  handleServerError,
  handleNotFoundError,
  handleDuplicateError,
};
