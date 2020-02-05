'use strict';

const path = require('path');
const assert = require('assert');
const { createRequire } = require('module');

const resolve = require('resolve');

const fooRoot = path.resolve(__dirname, './foo');
const indexFile = path.resolve(fooRoot, './index.js');

const requireFromFoo = createRequire(indexFile);

console.log(indexFile)

const requireWithSlash = requireFromFoo.resolve('./');
const requireWithDot = requireFromFoo.resolve('.');

const resolveWithSlash = resolve.sync('./', { basedir: fooRoot });
const resolveWithDot = resolve.sync('.', { basedir: fooRoot });

assert.equal(requireWithSlash, indexFile);
assert.equal(requireWithDot, indexFile);
assert.equal(resolveWithSlash, indexFile);
assert.equal(resolveWithDot, indexFile);
