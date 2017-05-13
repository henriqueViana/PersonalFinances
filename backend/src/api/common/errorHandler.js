const _ = require('lodash');

const parseErrors = (restfulErrors) => {
  const errors = [];
  _.forIn(restfulErrors, error => errors.push(error.message));
  return errors;
}

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;

  if(bundle.errors) {
    const errors = parseErrors(bundle.errors);
    res.status(500).json({errors});
  } else {
    next();
  }
}