'use strict';
const test = require('tape');

const restfulQueryParser = require('./');

test('it returns a generator function.', t => {
  const subject = restfulQueryParser();

  t.ok(isGeneratorFn(subject), 'it should be a generator function.');

  t.end();
});

function isGeneratorFn(fn) {
  return fn && fn.constructor.name === 'GeneratorFunction';
}
