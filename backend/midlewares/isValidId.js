const { isValidObjectId } = require('mongoose');
const { HttpError } = require('../helpers');

const isValidId = idName => {
  const func = (req, res, next) => {
    const { [idName]: id } = req.params;
    if (!isValidObjectId(id)) {
      next(HttpError(404, 'Invalid id'));
    }
    next();
  };
  return func;
};

module.exports = isValidId;
