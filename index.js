// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e,n=Math.floor,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"",f=t&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,o,f;if(null==r)return i.call(r);n=r[u],f=u,e=null!=(o=r)&&a.call(o,f);try{r[u]=void 0}catch(e){return i.call(r)}return t=i.call(r),e?r[u]=n:delete r[u],t}:function(r){return i.call(r)},c="function"==typeof Uint32Array,s="function"==typeof Uint32Array?Uint32Array:null,l="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var r,e,n;if("function"!=typeof s)return!1;try{e=new s(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(c&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p,v=e,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(y&&n instanceof Float64Array||"[object Float64Array]"===f(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,w=p,b="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,n;if("function"!=typeof m)return!1;try{e=new m(e=[1,3.14,-3.14,256,257]),n=e,r=(b&&n instanceof Uint8Array||"[object Uint8Array]"===f(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?N:function(){throw new Error("not implemented")};var A,_=h,E="function"==typeof Uint16Array,U="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,e,n;if("function"!=typeof U)return!1;try{e=new U(e=[1,3.14,-3.14,65536,65537]),n=e,r=(E&&n instanceof Uint16Array||"[object Uint16Array]"===f(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,I={uint16:A,uint8:_};(x=new I.uint16(1))[0]=4660;var S=52===new I.uint8(x.buffer)[0],F=!0===S?1:0,j=new w(1),T=new v(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===S?0:1,$=new w(1),G=new v($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=.7853981633974483,C=3061616997868383e-32,L=.3333333333333341,P=2147483647;function M(r,e,n){var t,i,a,o,u,f,c,s,l;return(i=(t=O(r))&P|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=W-r)+(s=C-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((u=l*r)*(o+c)+e),s=r+(o+=L*u),i>=1072010280?(1-(t>>30&2))*((c=n)-2*(r-(s*s/(s+c)-o))):1===n?s:(c=o-((l=H(s,0))-r),(f=H(a=-1/s,0))+a*((u=1+f*l)+f*c))}var R,Z,X=2147483647,Y=2146435072,q=1048575,z=!0===S?0:1,B=new w(1),D=new v(B.buffer);!0===S?(R=1,Z=0):(R=0,Z=1);var J={HIGH:R,LOW:Z},K=new w(1),Q=new v(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return Q[rr]=r,Q[er]=e,K[0]}var tr=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY,ar=1023,or=1023,ur=-1023,fr=-1074;function cr(r){return r===tr||r===ir}var sr=2147483648,lr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty;function vr(r){return"number"==typeof r}function yr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function gr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+yr(i):yr(i)+r,t&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function wr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!vr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=gr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=gr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===hr.call(r.specifier)?hr.call(n):dr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var br=Math.abs,mr=String.prototype.toLowerCase,Nr=String.prototype.toUpperCase,Ar=String.prototype.replace,_r=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,kr=/^(\d+)e/,xr=/\.0$/,Ir=/\.0*e/,Sr=/(\..*[^0])0*e/;function Fr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!vr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":br(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=Ar.call(n,Sr,"$1e"),n=Ar.call(n,Ir,"e"),n=Ar.call(n,xr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Ar.call(n,_r,"e+0$1"),n=Ar.call(n,Er,"e-0$1"),r.alternate&&(n=Ar.call(n,Ur,"$1."),n=Ar.call(n,kr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Nr.call(r.specifier)?Nr.call(n):mr.call(n)}function jr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Tr=String.fromCharCode,Or=isNaN,Vr=Array.isArray;function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(!Vr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if("string"==typeof(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=$r(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Or(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Or(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=wr(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Or(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Or(a)?String(t.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Fr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=gr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+jr(v):jr(v)+s)),o+=t.arg||"",u+=1}return o}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,n,t,i;for(n=[],i=0,t=Hr.exec(r);t;)(e=r.slice(i,Hr.lastIndex-t[0].length)).length&&n.push(e),n.push(Wr(t)),i=Hr.lastIndex,t=Hr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Lr(r){var e,n;if("string"!=typeof r)throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Gr.apply(null,e)}var Pr,Mr,Rr=Object.prototype,Zr=Rr.toString,Xr=Rr.__defineGetter__,Yr=Rr.__defineSetter__,qr=Rr.__lookupGetter__,zr=Rr.__lookupSetter__,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Zr.call(r))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Zr.call(n))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(qr.call(r,e)||zr.call(r,e)?(t=r.__proto__,r.__proto__=Rr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Xr&&Xr.call(r,e,n.get),o&&Yr&&Yr.call(r,e,n.set),r};function Dr(r,e,n){Br(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===S?(Pr=1,Mr=0):(Pr=0,Mr=1);var Jr={HIGH:Pr,LOW:Mr},Kr=new w(1),Qr=new v(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function ne(r,e,n,t){return Kr[0]=r,e[t]=Qr[re],e[t+n]=Qr[ee],e}function te(r){return ne(r,[0,0],1,0)}Dr(te,"assign",ne);var ie=[0,0];function ae(r,e){var n,t;return te.assign(r,ie,1,0),n=ie[0],n&=X,t=O(e),nr(n|=t&=sr,ie[1])}var oe=22250738585072014e-324;function ue(r){return Math.abs(r)}var fe=4503599627370496;function ce(e,n,t,i){return r(e)||cr(e)?(n[i]=e,n[i+t]=0,n):0!==e&&ue(e)<oe?(n[i]=e*fe,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Dr((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=2220446049250313e-31,le=2148532223,pe=[0,0],ve=[0,0];function ye(e,n){var t,i;return 0===n||0===e||r(e)||cr(e)?e:(ce(e,pe,1,0),e=pe[0],n+=pe[1],n+=function(r){var e=O(r);return(e=(e&Y)>>>20)-ar|0}(e),n<fr?ae(0,e):n>or?e<0?ir:tr:(n<=ur?(n+=52,i=se):i=1,te.assign(e,ve,1,0),t=ve[0],t&=le,i*nr(t|=n+ar<<20,ve[1])))}function ge(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],he=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],we=16777216,be=5.960464477539063e-8,me=ge(20),Ne=ge(20),Ae=ge(20),_e=ge(20);function Ee(r,e,t,i,a,o,u,f,c){var s,l,p,v,y,g,d,h,w;for(v=o,w=i[t],h=t,y=0;h>0;y++)l=be*w|0,_e[y]=w-we*l|0,w=i[h-1]+l,h-=1;if(w=ye(w,a),w-=8*n(.125*w),w-=d=0|w,p=0,a>0?(d+=y=_e[t-1]>>24-a,_e[t-1]-=y<<24-a,p=_e[t-1]>>23-a):0===a?p=_e[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,y=0;y<t;y++)h=_e[y],0===s?0!==h&&(s=1,_e[y]=16777216-h):_e[y]=16777215-h;if(a>0)switch(a){case 1:_e[t-1]&=8388607;break;case 2:_e[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ye(1,a)))}if(0===w){for(h=0,y=t-1;y>=o;y--)h|=_e[y];if(0===h){for(g=1;0===_e[o-g];g++);for(y=t+1;y<=t+g;y++){for(c[f+y]=de[u+y],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(y-h)];i[y]=l}return Ee(r,e,t+=g,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===_e[t];)t-=1,a-=24;else(w=ye(w,-a))>=we?(l=be*w|0,_e[t]=w-we*l|0,a+=24,_e[t+=1]=l):_e[t]=0|w;for(l=ye(1,a),y=t;y>=0;y--)i[y]=l*_e[y],l*=be;for(y=t;y>=0;y--){for(l=0,g=0;g<=v&&g<=t-y;g++)l+=he[g]*i[y+g];Ae[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Ae[y];for(e[0]=0===p?l:-l,l=Ae[0]-l,y=1;y<=t;y++)l+=Ae[y];return e[1]=0===p?l:-l,7&d}function Ue(r,e,n,t){var i,a,o,u,f,c,s;for((a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)me[f]=c<0?0:de[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*me[o+(f-c)];Ne[f]=i}return Ee(r,e,4,Ne,u,4,a,o,me)}var ke=Math.round,xe=.6366197723675814,Ie=1.5707963267341256,Se=6077100506506192e-26,Fe=6077100506303966e-26,je=20222662487959506e-37,Te=20222662487111665e-37,Oe=84784276603689e-45,Ve=2047;function $e(r,e,n){var t,i,a,o,u;return a=r-(t=ke(r*xe))*Ie,o=t*Se,u=e>>20|0,n[0]=a-o,u-(O(n[0])>>20&Ve)>16&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o,u-(O(n[0])>>20&Ve)>49&&(o=t*Oe-((i=a)-(a=i-(o=t*Te))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ge=0,He=16777216,We=1.5707963267341256,Ce=6077100506506192e-26,Le=2*Ce,Pe=3*Ce,Me=4*Ce,Re=598523,Ze=1072243195,Xe=1073928572,Ye=1074752122,qe=1074977148,ze=1075183036,Be=1075388923,De=1075594811,Je=1094263291,Ke=[0,0,0],Qe=[0,0];function rn(r,e){var n,t,i,a,o,u,f;if((i=O(r)&X|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Ye)return(i&q)===Re?$e(r,i,e):i<=Xe?r>0?(f=r-We,e[0]=f-Ce,e[1]=f-e[0]-Ce,1):(f=r+We,e[0]=f+Ce,e[1]=f-e[0]+Ce,-1):r>0?(f=r-2*We,e[0]=f-Le,e[1]=f-e[0]-Le,2):(f=r+2*We,e[0]=f+Le,e[1]=f-e[0]+Le,-2);if(i<=De)return i<=ze?i===qe?$e(r,i,e):r>0?(f=r-3*We,e[0]=f-Pe,e[1]=f-e[0]-Pe,3):(f=r+3*We,e[0]=f+Pe,e[1]=f-e[0]+Pe,-3):i===Be?$e(r,i,e):r>0?(f=r-4*We,e[0]=f-Me,e[1]=f-e[0]-Me,4):(f=r+4*We,e[0]=f+Me,e[1]=f-e[0]+Me,-4);if(i<Je)return $e(r,i,e);if(i>=Y)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return B[0]=r,D[z]}(r),f=nr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ke[o]=0|f,f=(f-Ke[o])*He;for(Ke[2]=f,a=3;Ke[a-1]===Ge;)a-=1;return u=Ue(Ke,Qe,t,a),r<0?(e[0]=-Qe[0],e[1]=-Qe[1],-u):(e[0]=Qe[0],e[1]=Qe[1],u)}var en=[0,0],nn=2147483647,tn=1072243195,an=2146435072,on=1044381696,un=3.141592653589793,fn=!0===S?1:0,cn=new w(1),sn=new v(cn.buffer);function ln(r,e){return cn[0]=r,sn[fn]=e>>>0,cn[0]}var pn=.6931471803691238,vn=1.9082149292705877e-10,yn=0x40000000000000,gn=.3333333333333333,dn=1048575,hn=2146435072,wn=1048576,bn=1072693248;function mn(e){var n,t,i,a,o,u,f,c,s,l,p,v;return 0===e?ir:r(e)||e<0?NaN:(o=0,(t=O(e))<wn&&(o-=54,t=O(e*=yn)),t>=hn?e+e:(o+=(t>>20)-ar|0,o+=(c=614244+(t&=dn)&1048576|0)>>20|0,f=(e=ln(e,t|c^bn))-1,(dn&2+t)<3?0===f?0===o?0:o*pn+o*vn:(u=f*f*(.5-gn*f),0===o?f-u:o*pn-(u-o*vn-f)):(c=t-398458|0,s=440401-t|0,a=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*pn-(n-(l*(n+u)+o*vn)-f)):0===o?f-l*(f-u):o*pn-(l*(f-u)-o*vn-f))))}var Nn=1.4616321446374059,An=3.309564688275257e-10,_n=9.016312093258695e-20,En=.9955816268920898,Un=10;function kn(e){var t,i;if(r(e)||0===e)return NaN;if(e<=-1){if((t=(e=1-e)-n(e))>.5&&(t-=1),0===t)return NaN;i=un/function(r){var e,n;return e=O(r),(e&=nn)<=tn?e<on?r:M(r,0,1):e>=an?NaN:(n=rn(r,en),M(en[0],en[1],1-((1&n)<<1)))}(un*t)}else i=0;if(e>=Un)return i+=function(r){var e;return mn(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(e),i;for(;e>2;)i+=1/(e-=1);for(;e<1;)i-=1/e,e+=1;return i+=function(r){var e,n;return e=r-Nn,e-=An,e-=_n,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),e*En+e*n}(e),i}var xn=Math.ceil;function In(r){return r<0?xn(r):n(r)}function Sn(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Fn=-.16666666666666632,jn=.00833333333332249,Tn=-.0001984126982985795,On=27557313707070068e-22,Vn=-2.5050760253406863e-8,$n=1.58969099521155e-10;function Gn(r,e){var n,t,i;return n=jn+(i=r*r)*(Tn+i*On)+i*(i*i)*(Vn+i*$n),t=i*r,0===e?r+t*(Fn+i*n):r-(i*(.5*e-t*n)-e-t*Fn)}var Hn=[0,0],Wn=2147483647,Cn=1072243195,Ln=1044381696,Pn=2146435072;function Mn(r){var e;if(e=O(r),(e&=Wn)<=Cn)return e<Ln?1:Sn(r,0);if(e>=Pn)return NaN;switch(3&rn(r,Hn)){case 0:return Sn(Hn[0],Hn[1]);case 1:return-Gn(Hn[0],Hn[1]);case 2:return-Sn(Hn[0],Hn[1]);default:return Gn(Hn[0],Hn[1])}}var Rn=1072243195,Zn=1045430272,Xn=[0,0];function Yn(r){var e;if(e=O(r),(e&=X)<=Rn)return e<Zn?r:Gn(r,0);if(e>=Y)return NaN;switch(3&rn(r,Xn)){case 0:return Gn(Xn[0],Xn[1]);case 1:return Sn(Xn[0],Xn[1]);case 2:return-Gn(Xn[0],Xn[1]);default:return-Sn(Xn[0],Xn[1])}}var qn=.07721566490153287,zn=.3224670334241136,Bn=1,Dn=-.07721566490153287,Jn=.48383612272381005,Kn=-.1475877229945939,Qn=.06462494023913339,rt=-.07721566490153287,et=1,nt=.4189385332046727,tt=1.4616321449683622,it=4503599627370496,at=0x400000000000000,ot=8470329472543003e-37,ut=1.4616321449683622,ft=-.12148629053584961,ct=-3638676997039505e-33;function st(e){var n,t,i,a,o,u,f,c,s,l,p,v,y;if(r(e)||cr(e))return e;if(0===e)return tr;if(e<0?(n=!0,e=-e):n=!1,e<ot)return-mn(e);if(n){if(e>=it)return tr;if(s=function(e){var n,t;return r(e)||cr(e)?NaN:0===(n=ue(t=e%2))||1===n?ae(0,t):n<.25?Yn(un*t):n<.75?ae(Mn(un*(n=.5-n)),t):n<1.25?(t=ae(1,t)-t,Yn(un*t)):n<1.75?-ae(Mn(un*(n-=1.5)),t):(t-=ae(2,t),Yn(un*t))}(e),0===s)return tr;t=mn(un/ue(s*e))}if(1===e||2===e)return 0;if(e<2)switch(e<=.9?(y=-mn(e),e>=tt-1+.27?(p=1-e,i=0):e>=tt-1-.27?(p=e-(ut-1),i=1):(p=e,i=2)):(y=0,e>=tt+.27?(p=2-e,i=0):e>=tt-.27?(p=e-ut,i=1):(p=e-1,i=2)),i){case 0:u=qn+(v=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),o=v*(zn+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),y+=(f=p*u+o)-.5*p;break;case 1:u=Jn+(l=(v=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),o=Kn+l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l),a=Qn+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),y+=ft+(f=v*u-(ct-l*(o+p*a)));break;case 2:u=p*(rt+p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)),o=et+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),y+=-.5*p+u/o}else if(e<8)switch(f=(p=e-(i=In(e)))*(Dn+p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)),c=Bn+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),y=.5*p+f/c,v=1,i){case 7:v*=p+6;case 6:v*=p+5;case 5:v*=p+4;case 4:v*=p+3;case 3:y+=mn(v*=p+2)}else e<at?(s=mn(e),l=nt+(v=1/e)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=v*v),y=(e-.5)*(s-1)+l):y=e*(mn(e)-1);return n&&(y=t-y),y}var lt=.6931471803691238,pt=1.9082149292705877e-10,vt=.41421356237309503,yt=-.2928932188134525,gt=1.862645149230957e-9,dt=5551115123125783e-32,ht=9007199254740992,wt=.6666666666666666;function bt(e){var n,t,i,a,o,u,f,c,s,l;if(e<-1||r(e))return NaN;if(-1===e)return ir;if(e===tr)return e;if(0===e)return e;if(l=1,(i=e<0?-e:e)<vt){if(i<gt)return i<dt?e:e-e*e*.5;e>yt&&(l=0,a=e,t=1)}return 0!==l&&(i<ht?(o=(l=((t=O(s=1+e))>>20)-ar)>0?1-(s-e):e-(s-1),o/=s):(l=((t=O(s=e))>>20)-ar,o=0),(t&=1048575)<434334?s=ln(s,1072693248|t):(l+=1,s=ln(s,1071644672|t),t=1048576-t>>2),a=s-1),n=.5*a*a,0===t?0===a?l*lt+(o+=l*pt):l*lt-((c=n*(1-wt*a))-(l*pt+o)-a):(c=(f=(u=a/(2+a))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?a-(n-u*(n+c)):l*lt-(n-(u*(n+c)+(l*pt+o))-a))}function mt(r){return n(r)===r}function Nt(r){return 0===r&&1/r===ir}var At=2.5066282746310007;function _t(r){return mt(r/2)}function Et(r){return _t(r>0?r-1:r+1)}var Ut=Math.sqrt;function kt(r){return 0|r}var xt=1072693247,It=1e300,St=1e-300,Ft=1048575,jt=1048576,Tt=1072693248,Ot=536870912,Vt=524288,$t=20,Gt=9007199254740992,Ht=.9617966939259756,Wt=.9617967009544373,Ct=-7.028461650952758e-9,Lt=[1,1.5],Pt=[0,.5849624872207642],Mt=[0,1.350039202129749e-8],Rt=1.4426950408889634,Zt=1.4426950216293335,Xt=1.9259629911266175e-8,Yt=.6931471805599453,qt=1048576,zt=1071644672,Bt=20,Dt=.6931471824645996,Jt=-1.904654299957768e-9,Kt=1072693247,Qt=1105199104,ri=1139802112,ei=1083179008,ni=1072693248,ti=1083231232,ii=3230714880,ai=31,oi=1e300,ui=1e-300,fi=8008566259537294e-32,ci=[0,0],si=[0,0];function li(e,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d;if(r(e)||r(n))return NaN;if(te.assign(n,ci,1,0),u=ci[0],0===ci[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return Ut(e);if(-.5===n)return 1/Ut(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(cr(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ue(r)<1==(e===tr)?0:tr}(e,n)}if(te.assign(e,ci,1,0),o=ci[0],0===ci[1]){if(0===o)return function(r,e){return e===ir?tr:e===tr?0:e>0?Et(e)?r:0:Et(e)?ae(tr,r):tr}(e,n);if(1===e)return 1;if(-1===e&&Et(n))return-1;if(cr(e))return e===ir?li(-0,-n):n<0?0:tr}if(e<0&&!1===mt(n))return(e-e)/(e-e);if(a=ue(e),t=o&X|0,i=u&X|0,c=u>>>ai|0,f=(f=o>>>ai|0)&&Et(n)?-1:1,i>Qt){if(i>ri)return function(r,e){return(O(r)&X)<=xt?e<0?It*It:St*St:e>0?It*It:St*St}(e,n);if(t<Kt)return 1===c?f*oi*oi:f*ui*ui;if(t>ni)return 0===c?f*oi*oi:f*ui*ui;v=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Xt-a*Rt)-((t=H(t=(o=Zt*i)+u,0))-o),r[0]=t,r[1]=n,r}(si,a)}else v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,n<jt&&(m-=53,n=O(e*=Gt)),m+=(n>>$t)-ar|0,n=(N=n&Ft|0)|Tt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,n-=jt),o=H(i=(w=(e=ln(e,n))-(c=Lt[A]))*(b=1/(e+c)),0),t=(n>>1|Ot)+Vt,f=ln(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=H(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=H(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Wt*l,g=(v=Ct*l+(b-(l-w))*Ht+Mt[A])-((y=H(y=p+v+(s=Pt[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(si,a,t);if(y=(p=(n-(s=H(n,0)))*v[0]+n*v[1])+(l=s*v[0]),te.assign(y,ci,1,0),g=kt(ci[0]),d=kt(ci[1]),g>=ei){if(0!=(g-ei|d))return f*oi*oi;if(p+fi>y-l)return f*oi*oi}else if((g&X)>=ti){if(0!=(g-ii|d))return f*ui*ui;if(p<=y-l)return f*ui*ui}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&X|0)>>Bt)-ar|0,c=0,s>zt&&(i=ln(0,((c=r+(qt>>l+1)>>>0)&~(q>>(l=((c&X)>>Bt)-ar|0)))>>>0),c=(c&q|qt)>>Bt-l>>>0,r<0&&(c=-c),e-=i),r=kt(r=O(f=1-((f=(a=(i=H(i=n+e,0))*Dt)+(o=(n-(i-e))*Yt+i*Jt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Bt>>>0)>>Bt<=0?ye(f,c):ln(f,r)}(g,l,p),f*y}var pi=.6931471803691238,vi=1.9082149292705877e-10,yi=1.4426950408889634,gi=709.782712893384,di=-745.1332191019411,hi=1/(1<<28),wi=-hi;function bi(e){var n;return r(e)||e===tr?e:e===ir?0:e>gi?tr:e<di?0:e>wi&&e<hi?1+e:function(r,e,n){var t,i,a,o;return ye(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-(n=In(e<0?yi*e-.5:yi*e+.5))*pi,n*vi,n)}var mi=143.01608;function Ni(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=bi(r),n=r>mi?(t=li(r,.5*r-.25))*(t/n):li(r,r-.5)/n,At*n*e}var Ai=.5772156649015329;function _i(r,e){return e/((1+Ai*r)*r)}function Ei(e){var t,i,a,o;if(mt(e)&&e<0||e===ir||r(e))return NaN;if(0===e)return Nt(e)?ir:tr;if(e>171.61447887182297)return tr;if(e<-170.5674972726612)return 0;if((i=ue(e))>33)return e>=0?Ni(e):(t=0==(1&(a=n(i)))?-1:1,(o=i-a)>.5&&(o=i-(a+=1)),o=i*Yn(un*o),t*un/(ue(o)*Ni(i)));for(o=1;e>=3;)o*=e-=1;for(;e<0;){if(e>-1e-9)return _i(e,o);o/=e,e+=1}for(;e<2;){if(e<1e-9)return _i(e,o);o/=e,e+=1}return 2===e?o:o*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(e-=2)}function Ui(e,n){return r(e)||r(n)?NaN:e===tr||n===tr?tr:e===n&&0===e?function(r){return 0===r&&1/r===tr}(e)?e:n:e>n?e:n}var ki=.9189385332046728,xi=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Ii=xi.length,Si=94906265.62425156,Fi=3745194030963158e291;function ji(r){return r<10?NaN:r>=Fi?0:r<Si?function(r){var e,n,t,i,a;if(r<-1.1||r>1.1)return NaN;for(t=0,i=0,e=2*r,a=0;a<Ii;a++)n=t,i=e*(t=i)-n+xi[a];return.5*(i-n)}(2*li(10/r,2)-1)/r:1/(12*r)}function Ti(e,n){var t,i,a,o,u;return u=n,i=r(o=e)||r(u)?NaN:o===ir||u===ir?ir:o===u&&0===o?Nt(o)?o:u:o<u?o:u,a=Ui(e,n),i<0?NaN:0===i?tr:a===tr?ir:i>=10?(t=ji(i)+ji(a)-ji(i+a),-.5*mn(a)+ki+t+(i-.5)*mn(i/(i+a))+a*bt(-i/(i+a))):a>=10?(t=ji(a)-ji(i+a),st(i)+t+i-i*mn(i+a)+(a-.5)*bt(-i/(i+a))):mn(Ei(i)*(Ei(a)/Ei(i+a)))}return function(r,e){var n;return r<=0||e<=0?NaN:(n=Ti(r,e),n-=(r-1)*kn(r),n-=(e-1)*kn(e),n+=(r+e-2)*kn(r+e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=e();
//# sourceMappingURL=index.js.map
