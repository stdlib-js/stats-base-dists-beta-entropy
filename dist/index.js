"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=s(function(q,n){
var u=require('@stdlib/math-base-special-digamma/dist'),o=require('@stdlib/math-base-special-betaln/dist');function v(e,r){var i;return e<=0||r<=0?NaN:(i=o(e,r),i-=(e-1)*u(e),i-=(r-1)*u(r),i+=(e+r-2)*u(e+r),i)}n.exports=v
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
