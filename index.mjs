// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@v0.3.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaln@v0.3.1-esm/index.mjs";function a(a,i){var m;return s(a)||a<=0||s(i)||i<=0?NaN:(m=e(a,i),m-=(a-1)*t(a),m-=(i-1)*t(i),m+=(a+i-2)*t(a+i))}export{a as default};
//# sourceMappingURL=index.mjs.map
