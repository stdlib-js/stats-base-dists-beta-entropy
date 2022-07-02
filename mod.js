// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return r!=r},n=Math.floor;var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var e=function(){return t&&"symbol"==typeof Symbol.toStringTag},u=Object.prototype.toString,f=u;var i=function(r){return f.call(r)},a=Object.prototype.hasOwnProperty;var o=function(r,n){return null!=r&&a.call(r,n)},c="function"==typeof Symbol?Symbol.toStringTag:"",v=o,y=c,l=u;var N=i,s=function(r){var n,t,e;if(null==r)return l.call(r);t=r[y],n=v(r,y);try{r[y]=void 0}catch(n){return l.call(r)}return e=l.call(r),n?r[y]=t:delete r[y],e},w=e()?s:N,p=w,A="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,h=function(r){return A&&r instanceof Uint32Array||"[object Uint32Array]"===p(r)},U=b;var m=function(){var r,n;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),r=h(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var d="function"==typeof Uint32Array?Uint32Array:void 0,I=function(){throw new Error("not implemented")},g=m()?d:I,F=w,S="function"==typeof Float64Array;var H="function"==typeof Float64Array?Float64Array:null,O=function(r){return S&&r instanceof Float64Array||"[object Float64Array]"===F(r)},E=H;var j=function(){var r,n;if("function"!=typeof E)return!1;try{n=new E([1,3.14,-3.14,NaN]),r=O(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var T="function"==typeof Float64Array?Float64Array:void 0,G=function(){throw new Error("not implemented")},M=j()?T:G,L=w,W="function"==typeof Uint8Array;var k="function"==typeof Uint8Array?Uint8Array:null,x=function(r){return W&&r instanceof Uint8Array||"[object Uint8Array]"===L(r)},P=k;var V=function(){var r,n;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=x(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},q=V()?Y:_,z=w,B="function"==typeof Uint16Array;var C="function"==typeof Uint16Array?Uint16Array:null,D=function(r){return B&&r instanceof Uint16Array||"[object Uint16Array]"===z(r)},J=C;var K=function(){var r,n;if("function"!=typeof J)return!1;try{n=new J(n=[1,3.14,-3.14,65536,65537]),r=D(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Q,R="function"==typeof Uint16Array?Uint16Array:void 0,X=function(){throw new Error("not implemented")},Z={uint16:K()?R:X,uint8:q};(Q=new Z.uint16(1))[0]=4660;var $=52===new Z.uint8(Q.buffer)[0],rr=g,nr=!0===$?1:0,tr=new M(1),er=new rr(tr.buffer);var ur=function(r){return tr[0]=r,er[nr]},fr=g,ir=!0===$?0:1,ar=new M(1),or=new fr(ar.buffer);var cr=function(r,n){return ar[0]=r,or[ir]=n>>>0,ar[0]},vr=cr;var yr=ur,lr=vr,Nr=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))},sr=function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))};var wr=function(r,n,t){var e,u,f,i,a,o,c,v,y;return(u=2147483647&(e=yr(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(y=.7853981633974483-r)+(v=3061616997868383e-32-n),n=0),i=n+(y=r*r)*((a=y*r)*((i=Nr(v=y*y))+(c=y*sr(v)))+n),v=r+(i+=.3333333333333341*a),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(v*v/(v+c)-i))):1===t?v:(lr(y=v,0),c=i-(y-r),lr(o=f=-1/v,0),o+f*((a=1+o*y)+o*c))},pr=g,Ar=!0===$?0:1,br=new M(1),hr=new pr(br.buffer);var Ur,mr,dr=function(r){return br[0]=r,hr[Ar]};!0===$?(Ur=1,mr=0):(Ur=0,mr=1);var Ir=g,gr={HIGH:Ur,LOW:mr},Fr=new M(1),Sr=new Ir(Fr.buffer),Hr=gr.HIGH,Or=gr.LOW;var Er=function(r,n){return Sr[Hr]=r,Sr[Or]=n,Fr[0]},jr=Er,Tr=Number.POSITIVE_INFINITY,Gr=Number.NEGATIVE_INFINITY,Mr=Tr,Lr=Gr;var Wr,kr,xr=function(r){return r===Mr||r===Lr};!0===$?(Wr=1,kr=0):(Wr=0,kr=1);var Pr=g,Vr={HIGH:Wr,LOW:kr},Yr=new M(1),_r=new Pr(Yr.buffer),qr=Vr.HIGH,zr=Vr.LOW;var Br=function(r,n){return Yr[0]=n,r[0]=_r[qr],r[1]=_r[zr],r};var Cr=function(r,n){return 1===arguments.length?Br([0,0],r):Br(r,n)},Dr=Cr,Jr=ur,Kr=jr,Qr=[0,0];var Rr=function(r,n){var t,e;return Dr(Qr,r),t=Qr[0],t&=2147483647,e=Jr(n),Kr(t|=e&=2147483648,Qr[1])};var Xr=function(r){return Math.abs(r)},Zr=xr,$r=r,rn=Xr;var nn=function(r,n){return $r(n)||Zr(n)?(r[0]=n,r[1]=0,r):0!==n&&rn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var tn=ur;var en=function(r){var n=tn(r);return(n=(2146435072&n)>>>20)-1023|0},un=Tr,fn=Gr,an=r,on=xr,cn=Rr,vn=function(r,n){return 1===arguments.length?nn([0,0],r):nn(r,n)},yn=en,ln=Cr,Nn=jr,sn=[0,0],wn=[0,0];var pn=function(r,n){var t,e;return 0===n||0===r||an(r)||on(r)?r:(vn(sn,r),n+=sn[1],(n+=yn(r=sn[0]))<-1074?cn(0,r):n>1023?r<0?fn:un:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ln(wn,r),t=wn[0],t&=2148532223,e*Nn(t|=n+1023<<20,wn[1])))},An=pn;var bn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var hn=n,Un=An,mn=function(r){return bn(0,r)},dn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],In=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],gn=5.960464477539063e-8,Fn=mn(20),Sn=mn(20),Hn=mn(20),On=mn(20);function En(r,n,t,e,u,f,i,a,o){var c,v,y,l,N,s,w,p,A;for(l=f,A=e[t],p=t,N=0;p>0;N++)v=gn*A|0,On[N]=A-16777216*v|0,A=e[p-1]+v,p-=1;if(A=Un(A,u),A-=8*hn(.125*A),A-=w=0|A,y=0,u>0?(w+=N=On[t-1]>>24-u,On[t-1]-=N<<24-u,y=On[t-1]>>23-u):0===u?y=On[t-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,N=0;N<t;N++)p=On[N],0===c?0!==p&&(c=1,On[N]=16777216-p):On[N]=16777215-p;if(u>0)switch(u){case 1:On[t-1]&=8388607;break;case 2:On[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Un(1,u)))}if(0===A){for(p=0,N=t-1;N>=f;N--)p|=On[N];if(0===p){for(s=1;0===On[f-s];s++);for(N=t+1;N<=t+s;N++){for(o[a+N]=dn[i+N],v=0,p=0;p<=a;p++)v+=r[p]*o[a+(N-p)];e[N]=v}return En(r,n,t+=s,e,u,f,i,a,o)}}if(0===A)for(t-=1,u-=24;0===On[t];)t-=1,u-=24;else(A=Un(A,-u))>=16777216?(v=gn*A|0,On[t]=A-16777216*v|0,u+=24,On[t+=1]=v):On[t]=0|A;for(v=Un(1,u),N=t;N>=0;N--)e[N]=v*On[N],v*=gn;for(N=t;N>=0;N--){for(v=0,s=0;s<=l&&s<=t-N;s++)v+=In[s]*e[N+s];Hn[t-N]=v}for(v=0,N=t;N>=0;N--)v+=Hn[N];for(n[0]=0===y?v:-v,v=Hn[0]-v,N=1;N<=t;N++)v+=Hn[N];return n[1]=0===y?v:-v,7&w}var jn=function(r,n,t,e){var u,f,i,a,o,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),a=t-24*(f+1),c=f-(i=e-1),v=i+4,o=0;o<=v;o++)Fn[o]=c<0?0:dn[c],c+=1;for(o=0;o<=4;o++){for(u=0,c=0;c<=i;c++)u+=r[c]*Fn[i+(o-c)];Sn[o]=u}return 4,En(r,n,4,Sn,a,4,f,i,Fn)},Tn=Math.round,Gn=ur;var Mn=ur,Ln=dr,Wn=jr,kn=jn,xn=function(r,n,t){var e,u,f,i,a;return f=r-1.5707963267341256*(e=Tn(.6366197723675814*r)),i=6077100506506192e-26*e,a=n>>20|0,t[0]=f-i,a-(Gn(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,a-(Gn(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},Pn=1.5707963267341256,Vn=6077100506506192e-26,Yn=2*Vn,_n=4*Vn,qn=[0,0,0],zn=[0,0];var Bn=function(r,n){var t,e,u,f,i,a,o;if((u=2147483647&Mn(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?xn(r,u,n):u<=1073928572?r>0?(o=r-Pn,n[0]=o-Vn,n[1]=o-n[0]-Vn,1):(o=r+Pn,n[0]=o+Vn,n[1]=o-n[0]+Vn,-1):r>0?(o=r-2*Pn,n[0]=o-Yn,n[1]=o-n[0]-Yn,2):(o=r+2*Pn,n[0]=o+Yn,n[1]=o-n[0]+Yn,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?xn(r,u,n):r>0?(o=r-3*Pn,n[0]=o-1.8231301519518578e-10,n[1]=o-n[0]-1.8231301519518578e-10,3):(o=r+3*Pn,n[0]=o+1.8231301519518578e-10,n[1]=o-n[0]+1.8231301519518578e-10,-3):1075388923===u?xn(r,u,n):r>0?(o=r-4*Pn,n[0]=o-_n,n[1]=o-n[0]-_n,4):(o=r+4*Pn,n[0]=o+_n,n[1]=o-n[0]+_n,-4);if(u<1094263291)return xn(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=Ln(r),o=Wn(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)qn[i]=0|o,o=16777216*(o-qn[i]);for(qn[2]=o,f=3;0===qn[f-1];)f-=1;return a=kn(qn,zn,e,f),r<0?(n[0]=-zn[0],n[1]=-zn[1],-a):(n[0]=zn[0],n[1]=zn[1],a)},Cn=Bn,Dn=ur,Jn=wr,Kn=Cn,Qn=[0,0];var Rn=function(r){var n,t;return n=Dn(r),(n&=2147483647)<=1072243195?n<1044381696?r:Jn(r,0,1):n>=2146435072?NaN:(t=Kn(r,Qn),Jn(Qn[0],Qn[1],1-((1&t)<<1)))},Xn=3.141592653589793,Zn=g,$n=!0===$?1:0,rt=new M(1),nt=new Zn(rt.buffer);var tt=function(r,n){return rt[0]=r,nt[$n]=n>>>0,rt[0]},et=tt;var ut=ur,ft=et,it=r,at=Gr,ot=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},ct=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},vt=.6931471803691238,yt=1.9082149292705877e-10;var lt=function(r){var n,t,e,u,f,i,a,o,c,v,y;return 0===r?at:it(r)||r<0?NaN:(u=0,(t=ut(r))<1048576&&(u-=54,t=ut(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(a=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=ft(r,t|1072693248^a))-1,(1048575&2+t)<3?0===i?0===u?0:u*vt+u*yt:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*vt-(f-u*yt-i)):(a=t-398458|0,o=440401-t|0,e=(v=(y=(c=i/(2+i))*c)*y)*ot(v),f=y*ct(v)+e,(a|=o)>0?(n=.5*i*i,0===u?i-(n-c*(n+f)):u*vt-(n-(c*(n+f)+u*yt)-i)):0===u?i-c*(i-f):u*vt-(c*(i-f)-u*yt-i))))};var Nt=lt,st=function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)};var wt=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)};var pt=r,At=n,bt=Rn,ht=Xn,Ut=function(r){var n;return Nt(r-=1)+1/(2*r)-(n=1/(r*r))*st(n)},mt=function(r){var n;return n=r-1.4616321446374059,n-=3.309564688275257e-10,.9955816268920898*(n-=9.016312093258695e-20)+n*wt(r-1)};var dt=function(r){var n,t;if(pt(r)||0===r)return NaN;if(r<=-1){if((n=(r=1-r)-At(r))>.5&&(n-=1),0===n)return NaN;t=ht/bt(ht*n)}else t=0;if(r>=10)return t+=Ut(r);for(;r>2;)t+=1/(r-=1);for(;r<1;)t-=1/r,r+=1;return t+=mt(r)},It=Math.ceil,gt=n,Ft=It;var St=function(r){return r<0?Ft(r):gt(r)};var Ht=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Ot=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Et=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*Ht(f),e+=u*u*Ot(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},jt=-.16666666666666632;var Tt=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(jt+u*t):r-(u*(.5*n-e*t)-n-e*jt)},Gt=ur,Mt=Et,Lt=Tt,Wt=Cn,kt=[0,0];var xt=ur,Pt=Et,Vt=Tt,Yt=Cn,_t=[0,0];var qt=function(r){var n;if(n=xt(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Vt(r,0);if(n>=2146435072)return NaN;switch(3&Yt(r,_t)){case 0:return Vt(_t[0],_t[1]);case 1:return Pt(_t[0],_t[1]);case 2:return-Vt(_t[0],_t[1]);default:return-Pt(_t[0],_t[1])}},zt=r,Bt=xr,Ct=function(r){var n;if(n=Gt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Mt(r,0);if(n>=2146435072)return NaN;switch(3&Wt(r,kt)){case 0:return Mt(kt[0],kt[1]);case 1:return-Lt(kt[0],kt[1]);case 2:return-Mt(kt[0],kt[1]);default:return Lt(kt[0],kt[1])}},Dt=qt,Jt=Xr,Kt=Rr,Qt=Xn;var Rt=r,Xt=xr,Zt=Xr,$t=lt,re=St,ne=function(r){var n,t;return zt(r)||Bt(r)?NaN:0===(n=Jt(t=r%2))||1===n?Kt(0,t):n<.25?Dt(Qt*t):n<.75?Kt(Ct(Qt*(n=.5-n)),t):n<1.25?(t=Kt(1,t)-t,Dt(Qt*t)):n<1.75?-Kt(Ct(Qt*(n-=1.5)),t):(t-=Kt(2,t),Dt(Qt*t))},te=Tr,ee=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},ue=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},fe=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},ie=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},ae=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},oe=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},ce=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},ve=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},ye=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},le=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},Ne=1.4616321449683622,se=1.4616321449683622;var we=function(r){var n,t,e,u,f,i,a,o;if(Rt(r)||Xt(r))return r;if(0===r)return te;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-$t(r);if(n){if(r>=4503599627370496)return te;if(0===(u=ne(r)))return te;t=$t(3.141592653589793/Zt(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(o=-$t(r),r>=Ne-1+.27?(i=1-r,e=0):r>=Ne-1-.27?(i=r-(se-1),e=1):(i=r,e=2)):(o=0,r>=Ne+.27?(i=2-r,e=0):r>=Ne-.27?(i=r-se,e=1):(i=r-1,e=2)),e){case 0:o+=i*(.07721566490153287+(a=i*i)*ee(a))+a*(.3224670334241136+a*ue(a))-.5*i;break;case 1:o+=-.12148629053584961+((a=i*i)*(.48383612272381005+(f=a*i)*ae(f))-(-3638676997039505e-33-f*(f*oe(f)-.1475877229945939+i*(.06462494023913339+f*ce(f)))));break;case 2:o+=-.5*i+i*(i*ve(i)-.07721566490153287)/(1+i*ye(i))}else if(r<8)switch(o=.5*(i=r-(e=re(r)))+i*(i*ie(i)-.07721566490153287)/(1+i*fe(i)),a=1,e){case 7:a*=i+6;case 6:a*=i+5;case 5:a*=i+4;case 4:a*=i+3;case 3:o+=$t(a*=i+2)}else o=r<0x400000000000000?(r-.5)*((u=$t(r))-1)+(f=.4189385332046727+(a=1/r)*le(i=a*a)):r*($t(r)-1);return n&&(o=t-o),o};var pe=r,Ae=ur,be=et,he=Tr,Ue=Gr,me=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},de=.6931471803691238,Ie=1.9082149292705877e-10;var ge=function(r){var n,t,e,u,f,i,a,o,c,v;if(r<-1||pe(r))return NaN;if(-1===r)return Ue;if(r===he)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=Ae(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=Ae(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=be(c,1072693248|t):(v+=1,c=be(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*de+(f+=v*Ie):v*de-((o=n*(1-.6666666666666666*u))-(v*Ie+f)-u):(o=(a=(i=u/(2+u))*i)*me(a),0===v?u-(n-i*(n+o)):v*de-(n-(i*(n+o)+(v*Ie+f))-u))},Fe=n;var Se=function(r){return Fe(r)===r},He=Gr;var Oe=function(r){return 0===r&&1/r===He},Ee=Se;var je=function(r){return Ee(r/2)};var Te=function(r){return je(r>0?r-1:r+1)},Ge=Math.sqrt;var Me=function(r){return 0|r},Le=Te,We=Rr,ke=Gr,xe=Tr;var Pe=ur;var Ve=Xr,Ye=Tr;var _e=ur,qe=vr,ze=et,Be=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Ce=[1,1.5],De=[0,.5849624872207642],Je=[0,1.350039202129749e-8];var Ke=vr,Qe=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Re=ur,Xe=et,Ze=vr,$e=Me,ru=An,nu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var tu=r,eu=Te,uu=xr,fu=Se,iu=Ge,au=Xr,ou=Cr,cu=vr,vu=Me,yu=Gr,lu=Tr,Nu=function(r,n){return n===ke?xe:n===xe?0:n>0?Le(n)?r:0:Le(n)?We(xe,r):xe},su=function(r,n){return(2147483647&Pe(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},wu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ve(r)<1==(n===Ye)?0:Ye},pu=function(r,n,t){var e,u,f,i,a,o,c,v,y,l,N,s,w,p,A,b,h,U,m,d;return U=0,t<1048576&&(U-=53,t=_e(n*=9007199254740992)),U+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?d=0:m<767610?d=1:(d=0,U+=1,t-=1048576),e=524288+(t>>1|536870912),a=(h=1/((n=ze(n,t))+(c=Ce[d])))*((b=n-c)-(i=qe(u=b*h,0))*(o=ze(0,e+=d<<18))-i*(n-(o-c))),A=(f=u*u)*f*Be(f),o=qe(o=3+(f=i*i)+(A+=a*(i+u)),0),w=(N=-7.028461650952758e-9*(y=qe(y=(b=i*o)+(h=a*o+(A-(o-3-f))*u),0))+.9617966939259756*(h-(y-b))+Je[d])-((s=qe(s=(l=.9617967009544373*y)+N+(v=De[d])+(p=U),0))-p-v-l),r[0]=s,r[1]=w,r},Au=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*Qe(u)))-((e=Ke(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},bu=function(r,n,t){var e,u,f,i,a,o,c,v,y,l;return l=((y=2147483647&r|0)>>20)-1023|0,v=0,y>1071644672&&(e=((v=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-l>>>0,r<0&&(v=-v),n-=f=Xe(0,e)),o=(a=.6931471805599453*(t-((f=Ze(f=t+n,0))-n))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+a)-i),u=c-(f=c*c)*nu(f),r=Re(c=1-(c*u/(u-2)-(o+c*o)-c)),r=$e(r),c=(r+=v<<20>>>0)>>20<=0?ru(c,v):Xe(c,r)},hu=1e300,Uu=1e-300,mu=[0,0],du=[0,0];var Iu=function r(n,t){var e,u,f,i,a,o,c,v,y,l,N,s,w,p;if(tu(n)||tu(t))return NaN;if(ou(mu,t),a=mu[0],0===mu[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return iu(n);if(-.5===t)return 1/iu(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(uu(t))return wu(n,t)}if(ou(mu,n),i=mu[0],0===mu[1]){if(0===i)return Nu(n,t);if(1===n)return 1;if(-1===n&&eu(t))return-1;if(uu(n))return n===yu?r(-0,-t):t<0?0:lu}if(n<0&&!1===fu(t))return(n-n)/(n-n);if(f=au(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,o=(o=i>>>31|0)&&eu(t)?-1:1,u>1105199104){if(u>1139802112)return su(n,t);if(e<1072693247)return 1===c?o*hu*hu:o*Uu*Uu;if(e>1072693248)return 0===c?o*hu*hu:o*Uu*Uu;N=Au(du,f)}else N=pu(du,f,e);if(l=(t-(v=cu(t,0)))*N[0]+t*N[1],y=v*N[0],ou(mu,s=l+y),w=vu(mu[0]),p=vu(mu[1]),w>=1083179008){if(0!=(w-1083179008|p))return o*hu*hu;if(l+8008566259537294e-32>s-y)return o*hu*hu}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|p))return o*Uu*Uu;if(l<=s-y)return o*Uu*Uu}return o*(s=bu(w,y,l))};var gu=An,Fu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Su=r,Hu=St,Ou=Gr,Eu=Tr,ju=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*Fu(u),gu(1-(n-e*f/(2-f)-r),t)};var Tu=Iu,Gu=function(r){var n;return Su(r)||r===Eu?r:r===Ou?0:r>709.782712893384?Eu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Hu(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),ju(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Mu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Lu=r,Wu=Se,ku=Oe,xu=Xr,Pu=n,Vu=qt,Yu=Tr,_u=Gr,qu=Xn,zu=function(r){var n,t,e;return n=1+(n=1/r)*Mu(n),t=Gu(r),2.5066282746310007*(t=r>143.01608?(e=Tu(r,.5*r-.25))*(e/t):Tu(r,r-.5)/t)*n},Bu=function(r,n){return n/((1+.5772156649015329*r)*r)},Cu=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var Du=Tr;var Ju=function(r){return 0===r&&1/r===Du},Ku=r,Qu=Gr,Ru=Tr;var Xu=Oe,Zu=r,$u=Gr,rf=Tr;var nf=[1276642195630063e-46,-3.401102254316749e-30,1025680058010471e-43,-35475981581010704e-43,14292273559424982e-41,-6831888753985767e-39,39628370610464347e-38,-2.868042435334643e-20,2683181998482699e-33,-3399615005417722e-31,6221098041892606e-29,-1809129475572494e-26,9.81082564692473e-9,-1384948176067564e-20,.16663894804518634],tf=nf.length;var ef=Iu,uf=function(r){var n,t,e,u,f;if(r<-1.1||r>1.1)return NaN;for(e=0,u=0,n=2*r,f=0;f<tf;f++)t=e,u=n*(e=u)-t+nf[f];return.5*(u-t)};var ff=we,af=ge,of=function(r){var n,t,e,u;if(Wu(r)&&r<0||r===_u||Lu(r))return NaN;if(0===r)return ku(r)?_u:Yu;if(r>171.61447887182297)return Yu;if(r<-170.5674972726612)return 0;if((t=xu(r))>33)return r>=0?zu(r):(n=0==(1&(e=Pu(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Vu(qu*u),n*qu/(xu(u)*zu(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Bu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Bu(r,u);u/=r,r+=1}return 2===r?u:u*Cu(r-=2)},cf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Ku(r)||Ku(n)?NaN:r===Ru||n===Ru?Ru:r===n&&0===r?Ju(r)?r:n:r>n?r:n;for(e=Qu,f=0;f<t;f++){if(Ku(u=arguments[f])||u===Ru)return u;(u>e||u===e&&0===u&&Ju(u))&&(e=u)}return e},vf=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Zu(r)||Zu(n)?NaN:r===$u||n===$u?$u:r===n&&0===r?Xu(r)?r:n:r<n?r:n;for(e=rf,f=0;f<t;f++){if(Zu(u=arguments[f])||u===$u)return u;(u<e||u===e&&0===u&&Xu(u))&&(e=u)}return e},yf=lt,lf=Gr,Nf=Tr,sf=function(r){return r<10?NaN:r>=3745194030963158e291?0:r<94906265.62425156?uf(2*ef(10/r,2)-1)/r:1/(12*r)};var wf=function(r,n){var t,e,u;return e=vf(r,n),u=cf(r,n),e<0?NaN:0===e?Nf:u===Nf?lf:e>=10?(t=sf(e)+sf(u)-sf(e+u),-.5*yf(u)+.9189385332046728+t+(e-.5)*yf(e/(e+u))+u*af(-e/(e+u))):u>=10?(t=sf(u)-sf(e+u),ff(e)+t+e-e*yf(e+u)+(u-.5)*af(-e/(e+u))):yf(of(e)*(of(u)/of(e+u)))};function pf(r,n){var t;return r<=0||n<=0?NaN:(t=wf(r,n),t-=(r-1)*dt(r),t-=(n-1)*dt(n),t+=(r+n-2)*dt(r+n))}export{pf as default};
//# sourceMappingURL=mod.js.map
