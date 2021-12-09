class MissingArgsError extends Error {
  constructor(usage) {
    super(`please provide data with this format : ${usage}`);
    this.name = "MissingArgsError";
  }
}

module.exports = MissingArgsError;
