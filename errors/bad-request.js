import CustomAPIError from "./custom-api.js";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}

export default BadRequestError;
