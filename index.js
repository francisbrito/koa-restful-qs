'use strict';
const parseRESTfulQuery = require('restful-qs');

function restfulQueryParser(options) {
  options = options || {};

  const key = options.key || 'restfulQuery';
  const parse = options.parse || parseRESTfulQuery;

  return function* parseRESTfulQueryMiddleware(next) {
    this.state[key] = parse(this.request.query);

    yield next;
  };
}

module.exports = restfulQueryParser;
