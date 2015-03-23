ti-validator
=============

[![Build Status](https://img.shields.io/travis/manumaticx/ti-validator.svg?style=flat-square)](https://travis-ci.org/manumaticx/ti-validator)
[![Available on NPM](https://img.shields.io/npm/v/ti-validator.svg?style=flat-square)](https://www.npmjs.org/package/ti-validator)
[![Available on gitTio](https://img.shields.io/badge/available_on-gitTio-00B4CC.svg?style=flat-square)](http://gitt.io/component/validator)

String validation and sanitization

This is a [titaniumified][ti] version of [validator](https://github.com/chriso/validator.js).

[ti]: https://github.com/smclab/titaniumifier

### Installation

With **gitTio** for  **Titanium SDK** you can easily install it with

    $ gittio install validator

If you are instead
- porting with [*titaniumifier*][ti] a Node.js module to Titanium, and it uses *validator*;
- or building CommonJS module using *titaniumifier* and you want to have a reliable, stable, tested HTTPClient;

then you can install this module with

    $ npm install --save validator ti-validator

In your `package.json` add

```js
{
  "name": "...",
  "version": "...",
  // ...
  "titanium": {
    "validator": "ti-validator"
  }
}
```

This will tell *titaniumifier* that when your code requires `validator`, `ti-validator` is served instead.

Usage overview
--------------

For the full documentation head over the [original repository](https://github.com/chriso/validator.js).

```js
var validator = require('validator');

validator.isEmail('foo@bar.com'); //=> true
```

Credits
-------

* [@chriso](https://github.com/fb55) for [validator](https://github.com/chriso/validator.js)
* [@smclab](https://github.com/smclab/titaniumifier) for [titaniumifier](https://github.com/smclab/titaniumifier)


License
-------

  The MIT License (MIT)

  Copyright (c) 2015 Manuel Lehner

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.