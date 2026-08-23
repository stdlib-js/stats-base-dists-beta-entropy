"use strict";var o=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var t=o(function(f,s){
var n=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-special-digamma/dist'),v=require('@stdlib/math-base-special-betaln/dist');function q(i,r){var e;return n(i)||i<=0||n(r)||r<=0?NaN:(e=v(i,r),e-=(i-1)*u(i),e-=(r-1)*u(r),e+=(i+r-2)*u(i+r),e)}s.exports=q
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
