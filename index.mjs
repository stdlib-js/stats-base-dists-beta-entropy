// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-digamma@v0.3.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betaln@v0.2.2-esm/index.mjs";function e(e,a){var i;return e<=0||a<=0?NaN:(i=t(e,a),i-=(e-1)*s(e),i-=(a-1)*s(a),i+=(e+a-2)*s(e+a))}export{e as default};
//# sourceMappingURL=index.mjs.map
