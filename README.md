# invalidate-assets-list-webpack-plugin

[![npm version](https://badge.fury.io/js/invalidate-assets-list-webpack-plugin.svg)](https://badge.fury.io/js/invalidate-assets-list-webpack-plugin)
[![Build Status](https://travis-ci.org/zyml/invalidate-assets-list-webpack-plugin.svg?branch=master)](https://travis-ci.org/zyml/invalidate-assets-list-webpack-plugin)
[![Test Coverage](https://codeclimate.com/github/zyml/invalidate-assets-list-webpack-plugin/badges/coverage.svg)](https://codeclimate.com/github/zyml/invalidate-assets-list-webpack-plugin/coverage)
[![Dependency Status](https://gemnasium.com/zyml/invalidate-assets-list-webpack-plugin.svg)](https://gemnasium.com/zyml/invalidate-assets-list-webpack-plugin)

> Generate (selectively) a list of asset paths to a JSON file for cache invalidation.

## Installation

```sh
npm i --save-dev invalidate-assets-list-webpack-plugin
```

## Usage

```js
// webpack.config.js
var InvalidateAssetsListPlugin = require('invalidate-assets-list-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new InvalidateAssetsListPlugin()
  ],
  // ...
};
```

## Options

```js
new InvalidateAssetsListPlugin(options)
```

### options.filename

Exported JSON filename.

* Default: `invalidate-assets.json`


### options.hash

Appends hash as a query string to files that do not contain them:
(e.g. `helloWorld.js` to `helloWorld.js?1455678`)

* Default: `false`

### options.ignore

List of glob patterns to ignore. Can be a String or an Array of Strings.

* Default: `[]`
* Accepts patterns from [`minimatch`](https://github.com/isaacs/minimatch)

### options.matchOptions

Options object for `options.ignore` glob patterns.

* Default: `{ dot: true, matchBase: true }`
* Accepts options from [`minimatch`](https://github.com/isaacs/minimatch#options)

### options.path

Path of the exported JSON.

* Default: `''`
