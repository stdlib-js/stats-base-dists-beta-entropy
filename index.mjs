// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaln@esm/index.mjs";var e=s,a=t;var i=function(s,t){var i;return s<=0||t<=0?NaN:(i=a(s,t),i-=(s-1)*e(s),i-=(t-1)*e(t),i+=(s+t-2)*e(s+t))};export{i as default};
//# sourceMappingURL=index.mjs.map
