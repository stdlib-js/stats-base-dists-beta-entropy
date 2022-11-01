// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n,t=Math.floor,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,f=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"";n=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,a;if(null==r)return u.call(r);t=r[i],a=i,n=null!=(o=r)&&f.call(o,a);try{r[i]=void 0}catch(n){return u.call(r)}return e=u.call(r),n?r[i]=t:delete r[i],e}:function(r){return u.call(r)};var o,a=n,c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,v="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var r,n,t;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?v:function(){throw new Error("not implemented")};var y,p=o,s="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(s&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var w,d=y,h="function"==typeof Uint8Array,A="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;w=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,256,257]),t=n,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,U=w,g="function"==typeof Uint16Array,j="function"==typeof Uint16Array?Uint16Array:null,I="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(g&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:m,uint8:U};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,T=new d(1),H=new p(T.buffer);function G(r){return T[0]=r,H[F]}var P=!0===E?0:1,k=new d(1),x=new p(k.buffer);function M(r,n){return k[0]=r,x[P]=n>>>0,k[0]}function L(r,n,t){var e,u,f,i,o,a,c,l,v;return(u=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(v=.7853981633974483-r)+(l=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(l=(v=r*r)*v),c=v*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(l),i=n+v*((o=v*r)*(i+c)+n),l=r+(i+=.3333333333333341*o),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(l*l/(l+c)-i))):1===t?l:(M(v=l,0),c=i-(v-r),M(a=f=-1/l,0),a+f*((o=1+a*v)+a*c))}var V,W,Y=!0===E?0:1,q=new d(1),C=new p(q.buffer);!0===E?(V=1,W=0):(V=0,W=1);var z={HIGH:V,LOW:W},B=new d(1),D=new p(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY,rr=1023;function nr(r){return r===Z||r===$}!0===E?(R=1,X=0):(R=0,X=1);var tr={HIGH:R,LOW:X},er=new d(1),ur=new p(er.buffer),fr=tr.HIGH,ir=tr.LOW;function or(r,n){return er[0]=n,r[0]=ur[fr],r[1]=ur[ir],r}function ar(r,n){return 1===arguments.length?or([0,0],r):or(r,n)}var cr=[0,0];function lr(r,n){var t,e;return ar(cr,r),t=cr[0],t&=2147483647,e=G(n),Q(t|=e&=2147483648,cr[1])}var vr,yr="function"==typeof Object.defineProperty?Object.defineProperty:null,pr=Object.defineProperty,sr=Object.prototype,br=sr.toString,Nr=sr.__defineGetter__,wr=sr.__defineSetter__,dr=sr.__lookupGetter__,hr=sr.__lookupSetter__;function Ar(r){return Math.abs(r)}function _r(n,t,e,u){return r(n)||nr(n)?(t[u]=n,t[u+e]=0,t):0!==n&&Ar(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+e]=-52,t):(t[u]=n,t[u+e]=0,t)}vr=function(){try{return yr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,n,t){var e,u,f,i;if("object"!=typeof r||null===r||"[object Array]"===br.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===br.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(dr.call(r,n)||hr.call(r,n)?(e=r.__proto__,r.__proto__=sr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),f="get"in t,i="set"in t,u&&(f||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&Nr&&Nr.call(r,n,t.get),i&&wr&&wr.call(r,n,t.set),r},vr((function(r){return _r(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:_r});var mr=[0,0],Ur=[0,0];function gr(n,t){var e,u;return 0===t||0===n||r(n)||nr(n)?n:(_r(n,mr,1,0),t+=mr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-rr|0}(n=mr[0]),t<-1074?lr(0,n):t>1023?n<0?$:Z:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,ar(Ur,n),e=Ur[0],e&=2148532223,u*Q(e|=t+rr<<20,Ur[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ir=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Or=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Sr=16777216,Er=5.960464477539063e-8,Fr=jr(20),Tr=jr(20),Hr=jr(20),Gr=jr(20);function Pr(r,n,e,u,f,i,o,a,c){var l,v,y,p,s,b,N,w,d;for(p=i,d=u[e],w=e,s=0;w>0;s++)v=Er*d|0,Gr[s]=d-Sr*v|0,d=u[w-1]+v,w-=1;if(d=gr(d,f),d-=8*t(.125*d),d-=N=0|d,y=0,f>0?(N+=s=Gr[e-1]>>24-f,Gr[e-1]-=s<<24-f,y=Gr[e-1]>>23-f):0===f?y=Gr[e-1]>>23:d>=.5&&(y=2),y>0){for(N+=1,l=0,s=0;s<e;s++)w=Gr[s],0===l?0!==w&&(l=1,Gr[s]=16777216-w):Gr[s]=16777215-w;if(f>0)switch(f){case 1:Gr[e-1]&=8388607;break;case 2:Gr[e-1]&=4194303}2===y&&(d=1-d,0!==l&&(d-=gr(1,f)))}if(0===d){for(w=0,s=e-1;s>=i;s--)w|=Gr[s];if(0===w){for(b=1;0===Gr[i-b];b++);for(s=e+1;s<=e+b;s++){for(c[a+s]=Ir[o+s],v=0,w=0;w<=a;w++)v+=r[w]*c[a+(s-w)];u[s]=v}return Pr(r,n,e+=b,u,f,i,o,a,c)}}if(0===d)for(e-=1,f-=24;0===Gr[e];)e-=1,f-=24;else(d=gr(d,-f))>=Sr?(v=Er*d|0,Gr[e]=d-Sr*v|0,f+=24,Gr[e+=1]=v):Gr[e]=0|d;for(v=gr(1,f),s=e;s>=0;s--)u[s]=v*Gr[s],v*=Er;for(s=e;s>=0;s--){for(v=0,b=0;b<=p&&b<=e-s;b++)v+=Or[b]*u[s+b];Hr[e-s]=v}for(v=0,s=e;s>=0;s--)v+=Hr[s];for(n[0]=0===y?v:-v,v=Hr[0]-v,s=1;s<=e;s++)v+=Hr[s];return n[1]=0===y?v:-v,7&N}function kr(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Fr[a]=c<0?0:Ir[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Fr[i+(a-c)];Tr[a]=u}return Pr(r,n,4,Tr,o,4,f,i,Fr)}var xr=Math.round;function Mr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=xr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(G(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(G(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,Yr=3*Vr,qr=4*Vr,Cr=[0,0,0],zr=[0,0];function Br(r,n){var t,e,u,f,i,o,a;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Mr(r,u,n):u<=1073928572?r>0?(a=r-Lr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Lr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Lr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Lr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Mr(r,u,n):r>0?(a=r-3*Lr,n[0]=a-Yr,n[1]=a-n[0]-Yr,3):(a=r+3*Lr,n[0]=a+Yr,n[1]=a-n[0]+Yr,-3):1075388923===u?Mr(r,u,n):r>0?(a=r-4*Lr,n[0]=a-qr,n[1]=a-n[0]-qr,4):(a=r+4*Lr,n[0]=a+qr,n[1]=a-n[0]+qr,-4);if(u<1094263291)return Mr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Cr[i]=0|a,a=16777216*(a-Cr[i]);for(Cr[2]=a,f=3;0===Cr[f-1];)f-=1;return o=kr(Cr,zr,e,f),r<0?(n[0]=-zr[0],n[1]=-zr[1],-o):(n[0]=zr[0],n[1]=zr[1],o)}var Dr=[0,0],Jr=3.141592653589793,Kr=!0===E?1:0,Qr=new d(1),Rr=new p(Qr.buffer);function Xr(r,n){return Qr[0]=r,Rr[Kr]=n>>>0,Qr[0]}var Zr=.6931471803691238,$r=1.9082149292705877e-10,rn=1048575;function nn(n){var t,e,u,f,i,o,a,c,l,v,y,p;return 0===n?$:r(n)||n<0?NaN:(i=0,(e=G(n))<1048576&&(i-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(i+=(e>>20)-rr|0,i+=(c=614244+(e&=rn)&1048576|0)>>20|0,a=(n=Xr(n,e|1072693248^c))-1,(rn&2+e)<3?0===a?0===i?0:i*Zr+i*$r:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*Zr-(o-i*$r-a)):(c=e-398458|0,l=440401-e|0,f=(y=(p=(v=a/(2+a))*v)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=u+f,(c|=l)>0?(t=.5*a*a,0===i?a-(t-v*(t+o)):i*Zr-(t-(v*(t+o)+i*$r)-a)):0===i?a-v*(a-o):i*Zr-(v*(a-o)-i*$r-a))))}function tn(n){var e,u;if(r(n)||0===n)return NaN;if(n<=-1){if((e=(n=1-n)-t(n))>.5&&(e-=1),0===e)return NaN;u=Jr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:L(r,0,1):n>=2146435072?NaN:(t=Br(r,Dr),L(Dr[0],Dr[1],1-((1&t)<<1)))}(Jr*e)}else u=0;if(n>=10)return u+=function(r){var n;return nn(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(n),u;for(;n>2;)u+=1/(n-=1);for(;n<1;)u-=1/n,n+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(n),u}var en=Math.ceil;function un(r){return r<0?en(r):t(r)}function fn(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var on=-.16666666666666632;function an(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(on+u*t):r-(u*(.5*n-e*t)-n-e*on)}var cn=[0,0];function ln(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1044381696?1:fn(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,cn)){case 0:return fn(cn[0],cn[1]);case 1:return-an(cn[0],cn[1]);case 2:return-fn(cn[0],cn[1]);default:return an(cn[0],cn[1])}}var vn=[0,0];function yn(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:an(r,0);if(n>=2146435072)return NaN;switch(3&Br(r,vn)){case 0:return an(vn[0],vn[1]);case 1:return fn(vn[0],vn[1]);case 2:return-an(vn[0],vn[1]);default:return-fn(vn[0],vn[1])}}var pn=1.4616321449683622,sn=1.4616321449683622;function bn(n){var t,e,u,f,i,o,a,c,l,v,y,p,s;if(r(n)||nr(n))return n;if(0===n)return Z;if(n<0?(t=!0,n=-n):t=!1,n<8470329472543003e-37)return-nn(n);if(t){if(n>=4503599627370496)return Z;if(l=function(n){var t,e;return r(n)||nr(n)?NaN:0===(t=Ar(e=n%2))||1===t?lr(0,e):t<.25?yn(Jr*e):t<.75?lr(ln(Jr*(t=.5-t)),e):t<1.25?(e=lr(1,e)-e,yn(Jr*e)):t<1.75?-lr(ln(Jr*(t-=1.5)),e):(e-=lr(2,e),yn(Jr*e))}(n),0===l)return Z;e=nn(Jr/Ar(l*n))}if(1===n||2===n)return 0;if(n<2)switch(n<=.9?(s=-nn(n),n>=pn-1+.27?(y=1-n,u=0):n>=pn-1-.27?(y=n-(sn-1),u=1):(y=n,u=2)):(s=0,n>=pn+.27?(y=2-n,u=0):n>=pn-.27?(y=n-sn,u=1):(y=n-1,u=2)),u){case 0:o=.07721566490153287+(p=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),i=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),s+=(a=y*o+i)-.5*y;break;case 1:o=.48383612272381005+(v=(p=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),i=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,f=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),s+=(a=p*o-(-3638676997039505e-33-v*(i+y*f)))-.12148629053584961;break;case 2:o=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),i=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),s+=-.5*y+o/i}else if(n<8)switch(a=(y=n-(u=un(n)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),c=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),s=.5*y+a/c,p=1,u){case 7:p*=y+6;case 6:p*=y+5;case 5:p*=y+4;case 4:p*=y+3;case 3:s+=nn(p*=y+2)}else n<0x400000000000000?(l=nn(n),v=.4189385332046727+(p=1/n)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=p*p),s=(n-.5)*(l-1)+v):s=n*(nn(n)-1);return t&&(s=e-s),s}var Nn=.6931471803691238,wn=1.9082149292705877e-10;function dn(n){var t,e,u,f,i,o,a,c,l,v;if(n<-1||r(n))return NaN;if(-1===n)return $;if(n===Z)return n;if(0===n)return n;if(v=1,(u=n<0?-n:n)<.41421356237309503){if(u<1.862645149230957e-9)return u<5551115123125783e-32?n:n-n*n*.5;n>-.2928932188134525&&(v=0,f=n,e=1)}return 0!==v&&(u<9007199254740992?(i=(v=((e=G(l=1+n))>>20)-rr)>0?1-(l-n):n-(l-1),i/=l):(v=((e=G(l=n))>>20)-rr,i=0),(e&=1048575)<434334?l=Xr(l,1072693248|e):(v+=1,l=Xr(l,1071644672|e),e=1048576-e>>2),f=l-1),t=.5*f*f,0===e?0===f?v*Nn+(i+=v*wn):v*Nn-((c=t*(1-.6666666666666666*f))-(v*wn+i)-f):(c=(a=(o=f/(2+f))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(a),0===v?f-(t-o*(t+c)):v*Nn-(t-(o*(t+c)+(v*wn+i))-f))}function hn(r){return t(r)===r}function An(r){return 0===r&&1/r===$}function _n(r){return hn(r/2)}function mn(r){return _n(r>0?r-1:r+1)}var Un=Math.sqrt;function gn(r){return 0|r}var jn=1048576,In=[1,1.5],On=[0,.5849624872207642],Sn=[0,1.350039202129749e-8],En=2147483647,Fn=1048575,Tn=1048576,Hn=2147483647,Gn=1083179008,Pn=1e300,kn=1e-300,xn=[0,0],Mn=[0,0];function Ln(n,t){var e,u,f,i,o,a,c,l,v,y,p,s,b,N;if(r(n)||r(t))return NaN;if(ar(xn,t),o=xn[0],0===xn[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Un(n);if(-.5===t)return 1/Un(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(nr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ar(r)<1==(n===Z)?0:Z}(n,t)}if(ar(xn,n),i=xn[0],0===xn[1]){if(0===i)return function(r,n){return n===$?Z:n===Z?0:n>0?mn(n)?r:0:mn(n)?lr(Z,r):Z}(n,t);if(1===n)return 1;if(-1===n&&mn(t))return-1;if(nr(n))return n===$?Ln(-0,-t):t<0?0:Z}if(n<0&&!1===hn(t))return(n-n)/(n-n);if(f=Ar(n),e=i&Hn|0,u=o&Hn|0,c=o>>>31|0,a=(a=i>>>31|0)&&mn(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*Pn*Pn:a*kn*kn;if(e>1072693248)return 0===c?a*Pn*Pn:a*kn*kn;p=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=M(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Mn,f)}else p=function(r,n,t){var e,u,f,i,o,a,c,l,v,y,p,s,b,N,w,d,h,A,_,m,U;return A=0,t<jn&&(A-=53,t=G(n*=9007199254740992)),A+=(t>>20)-rr|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=jn),i=M(u=(d=(n=Xr(n,t))-(c=In[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=Xr(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=M(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(v=M(v=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(v-d))+Sn[m])-((s=M(s=(y=.9617967009544373*v)+p+(l=On[m])+(N=A),0))-N-l-y),r[0]=s,r[1]=b,r}(Mn,f,e);if(y=(t-(l=M(t,0)))*p[0]+t*p[1],v=l*p[0],ar(xn,s=y+v),b=gn(xn[0]),N=gn(xn[1]),b>=Gn){if(0!=(b-Gn|N))return a*Pn*Pn;if(y+8008566259537294e-32>s-v)return a*Pn*Pn}else if((b&Hn)>=1083231232){if(0!=(b-3230714880|N))return a*kn*kn;if(y<=s-v)return a*kn*kn}return s=function(r,n,t){var e,u,f,i,o,a,c,l,v,y;return v=((l=r&En|0)>>20)-rr|0,c=0,l>1071644672&&(u=Xr(0,((c=r+(Tn>>v+1)>>>0)&~(Fn>>(v=((c&En)>>20)-rr|0)))>>>0),c=(c&Fn|Tn)>>20-v>>>0,r<0&&(c=-c),n-=u),r=gn(r=G(a=1-((a=(f=.6931471824645996*(u=M(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(y=u)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?gr(a,c):Xr(a,r)}(b,v,y),a*s}var Vn=1.4426950408889634,Wn=1/(1<<28);function Yn(n){var t;return r(n)||n===Z?n:n===$?0:n>709.782712893384?Z:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Wn?1+n:function(r,n,t){var e,u,f,i;return gr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(n-.6931471803691238*(t=un(n<0?Vn*n-.5:Vn*n+.5)),1.9082149292705877e-10*t,t)}function qn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Yn(r),2.5066282746310007*(t=r>143.01608?(e=Ln(r,.5*r-.25))*(e/t):Ln(r,r-.5)/t)*n}function Cn(r,n){return n/((1+.5772156649015329*r)*r)}function zn(n){var e,u,f,i;if(hn(n)&&n<0||n===$||r(n))return NaN;if(0===n)return An(n)?$:Z;if(n>171.61447887182297)return Z;if(n<-170.5674972726612)return 0;if((u=Ar(n))>33)return n>=0?qn(n):(e=0==(1&(f=t(u)))?-1:1,(i=u-f)>.5&&(i=u-(f+=1)),i=u*yn(Jr*i),e*Jr/(Ar(i)*qn(u)));for(i=1;n>=3;)i*=n-=1;for(;n<0;){if(n>-1e-9)return Cn(n,i);i/=n,n+=1}for(;n<2;){if(n<1e-9)return Cn(n,i);i/=n,n+=1}return 2===n?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(n-=2)}function Bn(r){return 0===r&&1/r===Z}var Dn=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],Jn=Dn.length;function Kn(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<Jn;f++)t=e,u=n*(e=u)-t+Dn[f];return.5*(u-t)}(2*Ln(10/r,2)-1)/r:1/(12*r)}function Qn(n,t){var e,u,f;return u=function(n,t){var e,u,f,i;if(2===(e=arguments.length))return r(n)||r(t)?NaN:n===$||t===$?$:n===t&&0===n?An(n)?n:t:n<t?n:t;for(u=Z,i=0;i<e;i++){if(r(f=arguments[i])||f===$)return f;(f<u||f===u&&0===f&&An(f))&&(u=f)}return u}(n,t),f=function(n,t){var e,u,f,i;if(2===(e=arguments.length))return r(n)||r(t)?NaN:n===Z||t===Z?Z:n===t&&0===n?Bn(n)?n:t:n>t?n:t;for(u=$,i=0;i<e;i++){if(r(f=arguments[i])||f===Z)return f;(f>u||f===u&&0===f&&Bn(f))&&(u=f)}return u}(n,t),u<0?NaN:0===u?Z:f===Z?$:u>=10?(e=Kn(u)+Kn(f)-Kn(u+f),-.5*nn(f)+.9189385332046728+e+(u-.5)*nn(u/(u+f))+f*dn(-u/(u+f))):f>=10?(e=Kn(f)-Kn(u+f),bn(u)+e+u-u*nn(u+f)+(f-.5)*dn(-u/(u+f))):nn(zn(u)*(zn(f)/zn(u+f)))}return function(r,n){var t;return r<=0||n<=0?NaN:(t=Qn(r,n),t-=(r-1)*tn(r),t-=(n-1)*tn(n),t+=(r+n-2)*tn(r+n))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=n();
//# sourceMappingURL=index.js.map
