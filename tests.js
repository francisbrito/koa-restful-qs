'use strict';
const spy = require('spy');
const test = require('tape');

const restfulQueryParser = require('./');

test('it returns a generator function.', t => {
  const subject = restfulQueryParser();

  t.ok(isGeneratorFn(subject), 'it should be a generator function.');

  t.end();
});

test('it calls RESTful query parser with `context.query`', t => {
  const expectedQuery = {
    age: '29',
    name: 'sabrina',
  };
  const context = {
    state: {},
    request: {
      query: expectedQuery,
    },
  };
  const parse = spy();
  const subject = restfulQueryParser({ parse }).call(context);

  subject.next();

  t.ok(parse.called, 'should have called `parse`.');
  t.ok(parse.calledWith(expectedQuery), 'should have called `parse` with expected query.');

  t.end();
});

function isGeneratorFn(fn) {
  return fn && fn.constructor.name === 'GeneratorFunction';
}
