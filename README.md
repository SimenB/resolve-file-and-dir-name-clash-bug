1. Use Node 12 or newer (due to usage of `createRequire`)
1. `yarn`
1. `node test`

This should pass, but fails. Remove `foo.js` from the root directory, and the test passes. Note that doing `require.resolve` from within the `foo` directory works the same as the `createRequire` approach I used in `test.js`.
