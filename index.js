'use strict';
const parseRESTfulQuery = require('restful-qs');

function restfulQueryParser(options) {
  options = options || {};

  const parse = options.parse || parseRESTfulQuery;

  return function* parseRESTfulQueryMiddleware(next) {
    this.state.restfulQuery = parse(this.request.query);
    yield next;
  };
}

module.exports = restfulQueryParser;
