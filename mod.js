// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,f;if(null==r)return t.call(r);n=r[o],f=o,e=null!=(u=r)&&i.call(u,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var s,l="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p=s,v="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null;var y,d="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(v&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=y,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var A=m,_="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var U,k="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(_&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var I,S={uint16:U,uint8:A};(I=new S.uint16(1))[0]=4660;var x=52===new S.uint8(I.buffer)[0],F=!0===x?1:0,j=new h(1),T=new p(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===x?0:1,$=new h(1),G=new p($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}function W(r,e,n){var t,i,a,o,u,f,c,s,l;return(i=2147483647&(t=O(r))|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=.7853981633974483-r)+(s=3061616997868383e-32-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((u=l*r)*(o+c)+e),s=r+(o+=.3333333333333341*u),i>=1072010280?(1-(t>>30&2))*((c=n)-2*(r-(s*s/(s+c)-o))):1===n?s:(c=o-((l=H(s,0))-r),(f=H(a=-1/s,0))+a*((u=1+f*l)+f*c))}var C,L,P=!0===x?0:1,M=new h(1),R=new p(M.buffer);!0===x?(C=1,L=0):(C=0,L=1);var Z={HIGH:C,LOW:L},X=new h(1),Y=new p(X.buffer),q=Z.HIGH,z=Z.LOW;function B(r,e){return Y[q]=r,Y[z]=e,X[0]}var D=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY;function K(r){return r===D||r===J}var Q="function"==typeof Object.defineProperty?Object.defineProperty:null;var rr=Object.defineProperty;function er(r){return"number"==typeof r}function nr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function tr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+nr(i):nr(i)+r,t&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!er(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=tr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=tr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ar.call(r.specifier)?ar.call(n):ir.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function ur(r){return"string"==typeof r}var fr=Math.abs,cr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,vr=/e-(\d)$/,gr=/^(\d+)$/,yr=/^(\d+)e/,dr=/\.0$/,hr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":fr(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=lr.call(n,wr,"$1e"),n=lr.call(n,hr,"e"),n=lr.call(n,dr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=lr.call(n,pr,"e+0$1"),n=lr.call(n,vr,"e-0$1"),r.alternate&&(n=lr.call(n,gr,"$1."),n=lr.call(n,yr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===sr.call(r.specifier)?sr.call(n):cr.call(n)}function mr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Nr(r,e,n){var t=e-r.length;return t<0?r:r=n?r+mr(t):mr(t)+r}var Ar=String.fromCharCode,_r=isNaN,Er=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function kr(r){var e,n,t,i,a,o,u,f,c;if(!Er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(ur(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=Ur(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,_r(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,_r(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=or(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!_r(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_r(a)?String(t.arg):Ar(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=br(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=tr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Nr(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var Ir=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xr(r){var e,n,t,i;for(n=[],i=0,t=Ir.exec(r);t;)(e=r.slice(i,Ir.lastIndex-t[0].length)).length&&n.push(e),n.push(Sr(t)),i=Ir.lastIndex,t=Ir.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Fr(r){return"string"==typeof r}function jr(r){var e,n;if(!Fr(r))throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[xr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return kr.apply(null,e)}var Tr=Object.prototype,Or=Tr.toString,Vr=Tr.__defineGetter__,$r=Tr.__defineSetter__,Gr=Tr.__lookupGetter__,Hr=Tr.__lookupSetter__;var Wr,Cr,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Or.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Or.call(n))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Gr.call(r,e)||Hr.call(r,e)?(t=r.__proto__,r.__proto__=Tr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Vr&&Vr.call(r,e,n.get),o&&$r&&$r.call(r,e,n.set),r};function Pr(r,e,n){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===x?(Wr=1,Cr=0):(Wr=0,Cr=1);var Mr={HIGH:Wr,LOW:Cr},Rr=new h(1),Zr=new p(Rr.buffer),Xr=Mr.HIGH,Yr=Mr.LOW;function qr(r,e,n,t){return Rr[0]=r,e[t]=Zr[Xr],e[t+n]=Zr[Yr],e}function zr(r){return qr(r,[0,0],1,0)}Pr(zr,"assign",qr);var Br=[0,0];function Dr(r,e){var n,t;return zr.assign(r,Br,1,0),n=Br[0],n&=2147483647,t=O(e),B(n|=t&=2147483648,Br[1])}function Jr(r){return Math.abs(r)}function Kr(e,n,t,i){return r(e)||K(e)?(n[i]=e,n[i+t]=0,n):0!==e&&Jr(e)<22250738585072014e-324?(n[i]=4503599627370496*e,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Pr((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=[0,0],re=[0,0];function ee(e,n){var t,i;return 0===n||0===e||r(e)||K(e)?e:(Kr(e,Qr,1,0),n+=Qr[1],n+=function(r){var e=O(r);return(e=(2146435072&e)>>>20)-1023|0}(e=Qr[0]),n<-1074?Dr(0,e):n>1023?e<0?J:D:(n<=-1023?(n+=52,i=2220446049250313e-31):i=1,zr.assign(e,re,1,0),t=re[0],t&=2148532223,i*B(t|=n+1023<<20,re[1])))}function ne(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ae=5.960464477539063e-8,oe=ne(20),ue=ne(20),fe=ne(20),ce=ne(20);function se(r,n,t,i,a,o,u,f,c){var s,l,p,v,g,y,d,h,w;for(v=o,w=i[t],h=t,g=0;h>0;g++)l=ae*w|0,ce[g]=w-16777216*l|0,w=i[h-1]+l,h-=1;if(w=ee(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=g=ce[t-1]>>24-a,ce[t-1]-=g<<24-a,p=ce[t-1]>>23-a):0===a?p=ce[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=ce[g],0===s?0!==h&&(s=1,ce[g]=16777216-h):ce[g]=16777215-h;if(a>0)switch(a){case 1:ce[t-1]&=8388607;break;case 2:ce[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ee(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=ce[g];if(0===h){for(y=1;0===ce[o-y];y++);for(g=t+1;g<=t+y;g++){for(c[f+g]=te[u+g],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(g-h)];i[g]=l}return se(r,n,t+=y,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===ce[t];)t-=1,a-=24;else(w=ee(w,-a))>=16777216?(l=ae*w|0,ce[t]=w-16777216*l|0,a+=24,ce[t+=1]=l):ce[t]=0|w;for(l=ee(1,a),g=t;g>=0;g--)i[g]=l*ce[g],l*=ae;for(g=t;g>=0;g--){for(l=0,y=0;y<=v&&y<=t-g;y++)l+=ie[y]*i[g+y];fe[t-g]=l}for(l=0,g=t;g>=0;g--)l+=fe[g];for(n[0]=0===p?l:-l,l=fe[0]-l,g=1;g<=t;g++)l+=fe[g];return n[1]=0===p?l:-l,7&d}function le(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)oe[f]=c<0?0:te[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*oe[o+(f-c)];ue[f]=i}return 4,se(r,e,4,ue,u,4,a,o,oe)}var pe=Math.round;function ve(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=pe(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(O(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(O(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ge=1.5707963267341256,ye=6077100506506192e-26,de=2*ye,he=4*ye,we=[0,0,0],be=[0,0];function me(r,e){var n,t,i,a,o,u,f;if((i=2147483647&O(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ve(r,i,e):i<=1073928572?r>0?(f=r-ge,e[0]=f-ye,e[1]=f-e[0]-ye,1):(f=r+ge,e[0]=f+ye,e[1]=f-e[0]+ye,-1):r>0?(f=r-2*ge,e[0]=f-de,e[1]=f-e[0]-de,2):(f=r+2*ge,e[0]=f+de,e[1]=f-e[0]+de,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ve(r,i,e):r>0?(f=r-3*ge,e[0]=f-1.8231301519518578e-10,e[1]=f-e[0]-1.8231301519518578e-10,3):(f=r+3*ge,e[0]=f+1.8231301519518578e-10,e[1]=f-e[0]+1.8231301519518578e-10,-3):1075388923===i?ve(r,i,e):r>0?(f=r-4*ge,e[0]=f-he,e[1]=f-e[0]-he,4):(f=r+4*ge,e[0]=f+he,e[1]=f-e[0]+he,-4);if(i<1094263291)return ve(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return M[0]=r,R[P]}(r),f=B(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)we[o]=0|f,f=16777216*(f-we[o]);for(we[2]=f,a=3;0===we[a-1];)a-=1;return u=le(we,be,t,a),r<0?(e[0]=-be[0],e[1]=-be[1],-u):(e[0]=be[0],e[1]=be[1],u)}var Ne=[0,0];var Ae=3.141592653589793,_e=!0===x?1:0,Ee=new h(1),Ue=new p(Ee.buffer);function ke(r,e){return Ee[0]=r,Ue[_e]=e>>>0,Ee[0]}var Ie=.6931471803691238,Se=1.9082149292705877e-10;function xe(e){var n,t,i,a,o,u,f,c,s,l,p,v;return 0===e?J:r(e)||e<0?NaN:(o=0,(t=O(e))<1048576&&(o-=54,t=O(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-1023|0,o+=(c=(t&=1048575)+614244&1048576|0)>>20|0,f=(e=ke(e,t|1072693248^c))-1,(1048575&2+t)<3?0===f?0===o?0:o*Ie+o*Se:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*Ie-(u-o*Se-f)):(c=t-398458|0,s=440401-t|0,a=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*Ie-(n-(l*(n+u)+o*Se)-f)):0===o?f-l*(f-u):o*Ie-(l*(f-u)-o*Se-f))))}function Fe(n){var t,i;if(r(n)||0===n)return NaN;if(n<=-1){if((t=(n=1-n)-e(n))>.5&&(t-=1),0===t)return NaN;i=Ae/function(r){var e,n;return e=O(r),(e&=2147483647)<=1072243195?e<1044381696?r:W(r,0,1):e>=2146435072?NaN:(n=me(r,Ne),W(Ne[0],Ne[1],1-((1&n)<<1)))}(Ae*t)}else i=0;if(n>=10)return i+=function(r){var e;return xe(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(n),i;for(;n>2;)i+=1/(n-=1);for(;n<1;)i-=1/n,n+=1;return i+=function(r){var e,n;return e=r-1.4616321446374059,e-=3.309564688275257e-10,e-=9.016312093258695e-20,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),.9955816268920898*e+e*n}(n),i}var je=Math.ceil;function Te(r){return r<0?je(r):e(r)}function Oe(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Ve=-.16666666666666632;function $e(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Ve+i*n):r-(i*(.5*e-t*n)-e-t*Ve)}var Ge=[0,0];function He(r){var e;if(e=O(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Oe(r,0);if(e>=2146435072)return NaN;switch(3&me(r,Ge)){case 0:return Oe(Ge[0],Ge[1]);case 1:return-$e(Ge[0],Ge[1]);case 2:return-Oe(Ge[0],Ge[1]);default:return $e(Ge[0],Ge[1])}}var We=[0,0];function Ce(r){var e;if(e=O(r),(e&=2147483647)<=1072243195)return e<1045430272?r:$e(r,0);if(e>=2146435072)return NaN;switch(3&me(r,We)){case 0:return $e(We[0],We[1]);case 1:return Oe(We[0],We[1]);case 2:return-$e(We[0],We[1]);default:return-Oe(We[0],We[1])}}var Le=1.4616321449683622,Pe=1.4616321449683622;function Me(e){var n,t,i,a,o,u,f,c,s,l,p,v,g;if(r(e)||K(e))return e;if(0===e)return D;if(e<0?(n=!0,e=-e):n=!1,e<8470329472543003e-37)return-xe(e);if(n){if(e>=4503599627370496)return D;if(s=function(e){var n,t;return r(e)||K(e)?NaN:0===(n=Jr(t=e%2))||1===n?Dr(0,t):n<.25?Ce(Ae*t):n<.75?Dr(He(Ae*(n=.5-n)),t):n<1.25?(t=Dr(1,t)-t,Ce(Ae*t)):n<1.75?-Dr(He(Ae*(n-=1.5)),t):(t-=Dr(2,t),Ce(Ae*t))}(e),0===s)return D;t=xe(Ae/Jr(s*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(g=-xe(e),e>=Le-1+.27?(p=1-e,i=0):e>=Le-1-.27?(p=e-(Pe-1),i=1):(p=e,i=2)):(g=0,e>=Le+.27?(p=2-e,i=0):e>=Le-.27?(p=e-Pe,i=1):(p=e-1,i=2)),i){case 0:u=.07721566490153287+(v=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),o=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),g+=(f=p*u+o)-.5*p;break;case 1:u=.48383612272381005+(l=(v=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,a=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),g+=-.12148629053584961+(f=v*u-(-3638676997039505e-33-l*(o+p*a)));break;case 2:u=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),o=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),g+=-.5*p+u/o}else if(e<8)switch(f=(p=e-(i=Te(e)))*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),c=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),g=.5*p+f/c,v=1,i){case 7:v*=p+6;case 6:v*=p+5;case 5:v*=p+4;case 4:v*=p+3;case 3:g+=xe(v*=p+2)}else e<0x400000000000000?(s=xe(e),l=.4189385332046727+(v=1/e)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=v*v),g=(e-.5)*(s-1)+l):g=e*(xe(e)-1);return n&&(g=t-g),g}var Re=.6931471803691238,Ze=1.9082149292705877e-10;function Xe(e){var n,t,i,a,o,u,f,c,s,l;if(e<-1||r(e))return NaN;if(-1===e)return J;if(e===D)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<.41421356237309503){if(i<1.862645149230957e-9)return i<5551115123125783e-32?e:e-e*e*.5;e>-.2928932188134525&&(l=0,a=e,t=1)}return 0!==l&&(i<9007199254740992?(o=(l=((t=O(s=1+e))>>20)-1023)>0?1-(s-e):e-(s-1),o/=s):(l=((t=O(s=e))>>20)-1023,o=0),(t&=1048575)<434334?s=ke(s,1072693248|t):(l+=1,s=ke(s,1071644672|t),t=1048576-t>>2),a=s-1),n=.5*a*a,0===t?0===a?l*Re+(o+=l*Ze):l*Re-((c=n*(1-.6666666666666666*a))-(l*Ze+o)-a):(c=(f=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?a-(n-u*(n+c)):l*Re-(n-(u*(n+c)+(l*Ze+o))-a))}function Ye(r){return e(r)===r}function qe(r){return 0===r&&1/r===J}function ze(r){return Ye(r/2)}function Be(r){return ze(r>0?r-1:r+1)}var De=Math.sqrt;function Je(r){return 0|r}var Ke=[1,1.5],Qe=[0,.5849624872207642],rn=[0,1.350039202129749e-8];var en=1e300,nn=1e-300,tn=[0,0],an=[0,0];function on(e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d;if(r(e)||r(n))return NaN;if(zr.assign(n,tn,1,0),u=tn[0],0===tn[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return De(e);if(-.5===n)return 1/De(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(K(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(e===D)?0:D}(e,n)}if(zr.assign(e,tn,1,0),o=tn[0],0===tn[1]){if(0===o)return function(r,e){return e===J?D:e===D?0:e>0?Be(e)?r:0:Be(e)?Dr(D,r):D}(e,n);if(1===e)return 1;if(-1===e&&Be(n))return-1;if(K(e))return e===J?on(-0,-n):n<0?0:D}if(e<0&&!1===Ye(n))return(e-e)/(e-e);if(a=Jr(e),t=2147483647&o|0,i=2147483647&u|0,c=u>>>31|0,f=(f=o>>>31|0)&&Be(n)?-1:1,i>1105199104){if(i>1139802112)return function(r,e){return(2147483647&O(r))<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(t<1072693247)return 1===c?f*en*en:f*nn*nn;if(t>1072693248)return 0===c?f*en*en:f*nn*nn;v=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=H(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(an,a)}else v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,n<1048576&&(m-=53,n=O(e*=9007199254740992)),m+=(n>>20)-1023|0,n=1072693248|(N=1048575&n|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=1048576),o=H(i=(w=(e=ke(e,n))-(c=Ke[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=ke(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=H(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),y=(v=-7.028461650952758e-9*(l=H(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+rn[A])-((g=H(g=(p=.9617967009544373*l)+v+(s=Qe[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(an,a,t);if(g=(p=(n-(s=H(n,0)))*v[0]+n*v[1])+(l=s*v[0]),zr.assign(g,tn,1,0),y=Je(tn[0]),d=Je(tn[1]),y>=1083179008){if(0!=(y-1083179008|d))return f*en*en;if(p+8008566259537294e-32>g-l)return f*en*en}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|d))return f*nn*nn;if(p<=g-l)return f*nn*nn}return g=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),e-=a=ke(0,t)),r=Je(r=O(c=1-((c=(o=.6931471824645996*(a=H(a=n+e,0)))+(u=.6931471805599453*(n-(a-e))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?ee(c,s):ke(c,r)}(y,l,p),f*g}function un(e){var n;return r(e)||e===D?e:e===J?0:e>709.782712893384?D:e<-745.1332191019411?0:e>-3.725290298461914e-9&&e<3.725290298461914e-9?1+e:function(r,e,n){var t,i,a,o;return ee(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-.6931471803691238*(n=Te(e<0?1.4426950408889634*e-.5:1.4426950408889634*e+.5)),1.9082149292705877e-10*n,n)}function fn(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=un(r),2.5066282746310007*(n=r>143.01608?(t=on(r,.5*r-.25))*(t/n):on(r,r-.5)/n)*e}function cn(r,e){return e/((1+.5772156649015329*r)*r)}function sn(n){var t,i,a,o;if(Ye(n)&&n<0||n===J||r(n))return NaN;if(0===n)return qe(n)?J:D;if(n>171.61447887182297)return D;if(n<-170.5674972726612)return 0;if((i=Jr(n))>33)return n>=0?fn(n):(t=0==(1&(a=e(i)))?-1:1,(o=i-a)>.5&&(o=i-(a+=1)),o=i*Ce(Ae*o),t*Ae/(Jr(o)*fn(i)));for(o=1;n>=3;)o*=n-=1;for(;n<0;){if(n>-1e-9)return cn(n,o);o/=n,n+=1}for(;n<2;){if(n<1e-9)return cn(n,o);o/=n,n+=1}return 2===n?o:o*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(n-=2)}function ln(e,n){return r(e)||r(n)?NaN:e===D||n===D?D:e===n&&0===e?function(r){return 0===r&&1/r===D}(e)?e:n:e>n?e:n}var pn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],vn=pn.length;function gn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<vn;a++)n=t,i=e*(t=i)-n+pn[a];return.5*(i-n)}(2*on(10/r,2)-1)/r:1/(12*r)}function yn(e,n){var t,i,a,o,u;return u=n,i=r(o=e)||r(u)?NaN:o===J||u===J?J:o===u&&0===o?qe(o)?o:u:o<u?o:u,a=ln(e,n),i<0?NaN:0===i?D:a===D?J:i>=10?(t=gn(i)+gn(a)-gn(i+a),-.5*xe(a)+.9189385332046728+t+(i-.5)*xe(i/(i+a))+a*Xe(-i/(i+a))):a>=10?(t=gn(a)-gn(i+a),Me(i)+t+i-i*xe(i+a)+(a-.5)*Xe(-i/(i+a))):xe(sn(i)*(sn(a)/sn(i+a)))}function dn(r,e){var n;return r<=0||e<=0?NaN:(n=yn(r,e),n-=(r-1)*Fe(r),n-=(e-1)*Fe(e),n+=(r+e-2)*Fe(r+e))}export{dn as default};
//# sourceMappingURL=mod.js.map
