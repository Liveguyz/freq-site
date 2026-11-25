(()=>{var ut=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var kx=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Dx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function om(){let s=pa("canvas");return s.style.display="block",s}function _o(...s){let e="THREE."+s.shift();ma?ma("log",e,...s):console.log(e,...s)}function lm(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qe(...s){s=lm(s);let e="THREE."+s.shift();if(ma)ma("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rt(...s){s=lm(s);let e="THREE."+s.shift();if(ma)ma("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function gr(...s){let e=s.join(" ");e in Fp||(Fp[e]=!0,Qe(...s))}function cm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _i(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Jf(s,e){return(s%e+e)%e}function Nx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Ux(s,e,t){return s!==e?(t-s)/(e-s):0}function go(s,e,t){return(1-t)*s+t*e}function zx(s,e,t,n){return go(s,e,1-Math.exp(-t*n))}function Bx(s,e=1){return e-Math.abs(Jf(s,e*2)-e)}function Hx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ox(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vx(s,e){return s+Math.random()*(e-s)}function Wx(s){return s*(.5-Math.random())}function qx(s){s!==void 0&&(Np=s);let e=Np+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xx(s){return s*mo}function Kx(s){return s*vr}function jx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Yx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zx(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $x(){let s={enabled:!0,workingColorSpace:Tt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Gt&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Gt&&(i.r=ha(i.r),i.g=ha(i.g),i.b=ha(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xt?vo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return gr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return gr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Tt]:{primaries:e,whitePoint:n,transfer:vo,toXYZ:zp,fromXYZ:Bp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:zp,fromXYZ:Bp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),s}function us(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}function Vu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Zu(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fr.fromArray(s,r);let o=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function lv(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function cv(s){Math.abs(s)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),s=vt(s,-65504,65504),hs.floatView[0]=s;let e=hs.uint32View[0],t=e>>23&511;return hs.baseTable[t]+((e&8388607)>>hs.shiftTable[t])}function hv(s){let e=s>>10;return hs.uint32View[0]=hs.mantissaTable[hs.offsetTable[e]+(s&1023)]+hs.exponentTable[e],hs.floatView[0]}function Gl(s,e,t,n,i,r){ra.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(oo.x=r*ra.x-i*ra.y,oo.y=i*ra.x+r*ra.y):oo.copy(ra),s.copy(e),s.x+=oo.x,s.y+=oo.y,s.applyMatrix4(fm)}function bv(s,e,t,n,i,r,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===$n,o),l===null)return null;Zl.copy(o),Zl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Zl);return c<t.near||c>t.far?null:{distance:c,point:Zl.clone(),object:s}}function $l(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Kl),s.getVertexPosition(l,jl),s.getVertexPosition(c,Yl);let h=bv(s,e,t,n,Kl,jl,Yl,Qp);if(h){let u=new R;cs.getBarycoord(Qp,Kl,jl,Yl,u),i&&(h.uv=cs.getInterpolatedAttribute(i,o,l,c,u,new ye)),r&&(h.uv1=cs.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=cs.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new R,materialIndex:0};cs.getNormal(Kl,jl,Yl,f.normal),h.face=f,h.barycoord=u}return h}function ic(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Ec.fromBufferAttribute(o,i),Sc.fromBufferAttribute(o,r),t.distanceSqToSegment(Ec,Sc,of,l0)>n)return;of.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(of);if(!(c<e.near||c>e.far))return{distance:c,point:l0.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}function f0(s,e,t,n,i,r,a){let o=xf.distanceSqToPoint(s);if(o<t){let l=new R;xf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Zf(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}function m0(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Mv(s,e){let t=1-s;return t*t*e}function Ev(s,e){return 2*(1-s)*s*e}function Sv(s,e){return s*s*e}function bo(s,e,t,n){return Mv(s,e)+Ev(s,t)+Sv(s,n)}function Tv(s,e){let t=1-s;return t*t*t*e}function wv(s,e){let t=1-s;return 3*t*t*s*e}function Rv(s,e){return 3*(1-s)*s*s*e}function Av(s,e){return s*s*s*e}function xo(s,e,t,n,i){return Tv(s,e)+wv(s,t)+Rv(s,n)+Av(s,i)}function Cv(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=dm(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Dv(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return zo(r,a,t,o,l,c,0),a}function dm(s,e,t,n,i){let r;if(i===qv(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=g0(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=g0(a/n|0,s[a],s[a+1],r);return r&&Ea(r,r.next)&&(Ho(r),r=r.next),r}function Er(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ea(t,t.next)||nn(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Bv(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Iv(s,n,i,r):Pv(s)){e.push(l.i,s.i,c.i),Ho(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Lv(Er(s),e),zo(s,e,t,n,i,r,2)):a===2&&kv(s,e,t,n,i,r):zo(Er(s),e,t,n,i,r,1);break}}}function Pv(s){let e=s.prev,t=s,n=s.next;if(nn(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),f=Math.max(i,r,a),d=Math.max(o,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&po(i,o,r,l,a,c,p.x,p.y)&&nn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Iv(s,e,t,n){let i=s.prev,r=s,a=s.next;if(nn(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),b=Math.max(o,l,c),m=Math.max(h,u,f),g=vf(d,p,e,t,n),_=vf(b,m,e,t,n),E=s.prevZ,x=s.nextZ;for(;E&&E.z>=g&&x&&x.z<=_;){if(E.x>=d&&E.x<=b&&E.y>=p&&E.y<=m&&E!==i&&E!==a&&po(o,h,l,u,c,f,E.x,E.y)&&nn(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=b&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&po(o,h,l,u,c,f,x.x,x.y)&&nn(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=b&&E.y>=p&&E.y<=m&&E!==i&&E!==a&&po(o,h,l,u,c,f,E.x,E.y)&&nn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=b&&x.y>=p&&x.y<=m&&x!==i&&x!==a&&po(o,h,l,u,c,f,x.x,x.y)&&nn(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Lv(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Ea(n,i)&&mm(n,t,t.next,i)&&Bo(n,i)&&Bo(i,n)&&(e.push(n.i,t.i,i.i),Ho(t),Ho(t.next),t=s=i),t=t.next}while(t!==s);return Er(t)}function kv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Gv(a,o)){let l=gm(a,o);a=Er(a,a.next),l=Er(l,l.next),zo(a,e,t,n,i,r,0),zo(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Dv(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=dm(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ov(c))}i.sort(Fv);for(let r=0;r<i.length;r++)t=Nv(i[r],t);return t}function Fv(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Nv(s,e){let t=Uv(s,e);if(!t)return e;let n=gm(t,s);return Er(n,n.next),Er(t,t.next)}function Uv(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Ea(s,t))return t;do{if(Ea(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pm(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Bo(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&zv(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function zv(s,e){return nn(s.prev,s,e.prev)<0&&nn(e.next,s,s.next)<0}function Bv(s,e,t,n){let i=s;do i.z===0&&(i.z=vf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Hv(i)}function Hv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function vf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ov(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function pm(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function po(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&pm(s,e,t,n,i,r,a,o)}function Gv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Vv(s,e)&&(Bo(s,e)&&Bo(e,s)&&Wv(s,e)&&(nn(s.prev,s,e.prev)||nn(s,e.prev,e))||Ea(s,e)&&nn(s.prev,s,s.next)>0&&nn(e.prev,e,e.next)>0)}function nn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ea(s,e){return s.x===e.x&&s.y===e.y}function mm(s,e,t,n){let i=oc(nn(s,e,t)),r=oc(nn(s,e,n)),a=oc(nn(t,n,s)),o=oc(nn(t,n,e));return!!(i!==r&&a!==o||i===0&&ac(s,t,e)||r===0&&ac(s,n,e)||a===0&&ac(t,s,n)||o===0&&ac(t,e,n))}function ac(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function oc(s){return s>0?1:s<0?-1:0}function Vv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&mm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Bo(s,e){return nn(s.prev,s,s.next)<0?nn(s,e,s.next)>=0&&nn(s,s.prev,e)>=0:nn(s,e,s.prev)<0||nn(s,s.next,e)<0}function Wv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function gm(s,e){let t=_f(s.i,s.x,s.y),n=_f(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function g0(s,e,t,n){let i=_f(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ho(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _f(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}function b0(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function x0(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}function Kv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ir(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(v0(i))i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(v0(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Xn(s){let e={};for(let t=0;t<s.length;t++){let n=Ir(s[t]);for(let i in n)e[i]=n[i]}return e}function v0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function jv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $f(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}function Ns(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function fc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Zv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _0(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function $v(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function bm(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Qv(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function e_(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=bm(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Qv(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function y0(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}function t_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return Vo;case"quaternion":return gs;case"bool":case"boolean":return ps;case"string":return bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function n_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=t_(s.type);if(s.times===void 0){let n=[],i=[];$v(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),fc(s.settings)&&(t.settings={inTangents:Ns(s.settings.inTangents,Float32Array),outTangents:Ns(s.settings.outTangents,Float32Array)}),t}function M0(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function A0(s,e){return s.distance-e.distance}function Rf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Rf(r[a],e,t,!0)}}function td(s,e,t,n){let i=u_(n);switch(t){case qf:return s*e;case Zc:return s*e/i.components*i.byteLength;case $c:return s*e/i.components*i.byteLength;case Zs:return s*e*2/i.components*i.byteLength;case Qc:return s*e*2/i.components*i.byteLength;case Xf:return s*e*3/i.components*i.byteLength;case gi:return s*e*4/i.components*i.byteLength;case eh:return s*e*4/i.components*i.byteLength;case el:case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:case sh:return Math.max(s,16)*Math.max(e,8)/4;case th:case ih:return Math.max(s,8)*Math.max(e,8)/2;case rh:case ah:case lh:case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oh:case sl:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ph:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Th:case wh:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ah:case Ch:return Math.ceil(s/4)*Math.ceil(e/4)*8;case rl:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u_(s){switch(s){case En:case Of:return{byteLength:1,components:1};case Aa:case Gf:case xn:return{byteLength:2,components:1};case Yc:case Jc:return{byteLength:2,components:4};case Pi:case jc:case qn:return{byteLength:4,components:1};case Vf:case Wf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var C0,Cf,P0,Ar,I0,Ta,$n,Pn,Ct,ji,js,kt,Pf,If,Wc,_s,L0,k0,D0,F0,N0,Zo,U0,z0,Lf,kf,B0,H0,O0,G0,V0,W0,q0,X0,K0,dc,pc,mc,ua,gc,bc,xc,vc,qc,j0,Y0,li,Df,Ff,Nf,$o,Uf,zf,Bf,df,J0,Hf,Ys,Cr,wa,Xc,Qo,Gn,bn,fa,fn,Kc,Pr,bt,Ra,en,En,Of,Gf,Aa,jc,Pi,qn,xn,Yc,Jc,Ca,Vf,Wf,qf,Xf,gi,Gi,Js,Zc,$c,Zs,Qc,eh,el,tl,nl,il,th,nh,ih,sh,rh,ah,oh,lh,ch,sl,hh,uh,fh,dh,ph,mh,gh,bh,xh,vh,_h,yh,Mh,Eh,Sh,Th,wh,Rh,Ah,Ch,rl,Ph,br,xr,hc,pf,mf,gf,bf,Z0,Kf,al,Pa,$0,ol,Q0,Xt,ot,Tt,vo,Gt,uc,em,tm,nm,im,Ih,sm,rm,Lh,am,jf,Qn,Yf,Ri,da,Fp,ma,hm,Vi,Hn,Np,mo,vr,Vt,nd,ye,$t,id,R,zu,Up,sd,pt,Bu,zp,Bp,Mt,Xr,_c,Qx,ga,ev,Ou,yn,rd,Bt,yc,an,yo,Mc,Vc,Pe,Kr,Ei,tv,nv,Is,kl,fi,Hp,Op,Wi,ba,iv,Gp,jr,is,Dl,no,sv,rv,Vp,Wp,qp,Xp,av,Yr,Gu,It,lt,ov,xa,um,Ls,Fl,we,On,Mo,fs,Si,ss,Wu,rs,Jr,Zr,Kp,qu,Xu,Ku,ju,Yu,Ju,cs,on,as,Ti,Nl,$r,Qr,ea,ks,Ds,ur,io,Ul,zl,fr,hs,Us,gn,Bl,uv,ct,Eo,So,ft,fv,so,$u,Vn,dv,vi,Qu,ta,di,ro,An,ht,_r,Zn,zs,ef,pv,mv,pi,gv,Wn,Cn,na,ao,ia,sa,ra,oo,fm,Hl,lo,Ol,jp,tf,Yp,Dn,Vl,Jp,To,os,nf,Wl,ql,Bs,it,Zp,dr,Xl,$p,Kl,jl,Yl,sf,Jl,Qp,Zl,Q,co,e0,t0,xv,n0,Ql,rf,i0,af,wo,va,Hs,s0,vv,Ro,ai,aa,r0,ec,a0,_v,ho,uo,Lt,pr,yv,tc,Os,_a,Ec,Sc,o0,fo,nc,of,l0,yr,c0,h0,Mr,Ao,ya,u0,xf,sc,rc,Gs,Co,Ft,Vs,Tc,Po,He,Io,qi,Nt,ds,mi,Ma,wc,d0,p0,lf,cf,hf,Ws,Lo,Rc,ko,Ac,Do,Fo,No,Cc,Pc,Uo,qs,yf,mr,Sr,Xv,st,Mn,Ai,Oo,Lr,Yv,Jv,Et,Ic,Ne,sn,Go,Lc,kc,Xi,Dc,Fc,Nc,Uc,oi,ps,Vo,ms,zc,gs,bs,Xs,Wo,Oi,Bc,xm,Ci,ls,Mf,Tr,oa,Hc,qo,wr,Rr,Xo,uf,E0,S0,Sa,lc,cc,Hi,Ko,Fs,T0,w0,rn,Ef,xs,Sf,Fn,Ki,Tf,Ks,vs,jo,ff,Yo,la,ca,Oc,Gc,Qf,i_,ed,s_,r_,a_,o_,l_,c_,h_,wf,Yt,bw,R0,Jo,ad,Af,od=ut(()=>{C0=0,Cf=1,P0=2,Ar=1,I0=2,Ta=3,$n=0,Pn=1,Ct=2,ji=0,js=1,kt=2,Pf=3,If=4,Wc=5,_s=100,L0=101,k0=102,D0=103,F0=104,N0=200,Zo=201,U0=202,z0=203,Lf=204,kf=205,B0=206,H0=207,O0=208,G0=209,V0=210,W0=211,q0=212,X0=213,K0=214,dc=0,pc=1,mc=2,ua=3,gc=4,bc=5,xc=6,vc=7,qc=0,j0=1,Y0=2,li=0,Df=1,Ff=2,Nf=3,$o=4,Uf=5,zf=6,Bf=7,df="attached",J0="detached",Hf=300,Ys=301,Cr=302,wa=303,Xc=304,Qo=306,Gn=1e3,bn=1001,fa=1002,fn=1003,Kc=1004,Pr=1005,bt=1006,Ra=1007,en=1008,En=1009,Of=1010,Gf=1011,Aa=1012,jc=1013,Pi=1014,qn=1015,xn=1016,Yc=1017,Jc=1018,Ca=1020,Vf=35902,Wf=35899,qf=1021,Xf=1022,gi=1023,Gi=1026,Js=1027,Zc=1028,$c=1029,Zs=1030,Qc=1031,eh=1033,el=33776,tl=33777,nl=33778,il=33779,th=35840,nh=35841,ih=35842,sh=35843,rh=36196,ah=37492,oh=37496,lh=37488,ch=37489,sl=37490,hh=37491,uh=37808,fh=37809,dh=37810,ph=37811,mh=37812,gh=37813,bh=37814,xh=37815,vh=37816,_h=37817,yh=37818,Mh=37819,Eh=37820,Sh=37821,Th=36492,wh=36494,Rh=36495,Ah=36283,Ch=36284,rl=36285,Ph=36286,br=2300,xr=2301,hc=2302,pf=2303,mf=2400,gf=2401,bf=2402,Z0=2500,Kf=0,al=1,Pa=2,$0=3200,ol=0,Q0=1,Xt="",ot="srgb",Tt="srgb-linear",vo="linear",Gt="srgb",uc=7680,em=519,tm=512,nm=513,im=514,Ih=515,sm=516,rm=517,Lh=518,am=519,jf=35044,Qn=35048,Yf="300 es",Ri=2e3,da=2001;Fp={},ma=null;hm={[dc]:pc,[mc]:xc,[gc]:vc,[ua]:bc,[pc]:dc,[xc]:mc,[vc]:gc,[bc]:ua},Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Np=1234567,mo=Math.PI/180,vr=180/Math.PI;Vt={DEG2RAD:mo,RAD2DEG:vr,generateUUID:_i,clamp:vt,euclideanModulo:Jf,mapLinear:Nx,inverseLerp:Ux,lerp:go,damp:zx,pingpong:Bx,smoothstep:Hx,smootherstep:Ox,randInt:Gx,randFloat:Vx,randFloatSpread:Wx,seededRandom:qx,degToRad:Xx,radToDeg:Kx,isPowerOfTwo:jx,ceilPowerOfTwo:Yx,floorPowerOfTwo:Jx,setQuaternionFromProperEuler:Zx,normalize:qt,denormalize:wi},nd=class nd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};nd.prototype.isVector2=!0;ye=nd,$t=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],p=r[a+2],b=r[a+3];if(u!==b||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*b;m<0&&(f=-f,d=-d,p=-p,b=-b,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),E=Math.sin(_);g=Math.sin(g*_)/E,o=Math.sin(o*_)/E,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+b*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+b*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},id=class id{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Up.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Up.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};id.prototype.isVector3=!0;R=id,zu=new R,Up=new $t,sd=class sd{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],b=i[0],m=i[3],g=i[6],_=i[1],E=i[4],x=i[7],M=i[2],v=i[5],S=i[8];return r[0]=a*b+o*_+l*M,r[3]=a*m+o*E+l*v,r[6]=a*g+o*x+l*S,r[1]=c*b+h*_+u*M,r[4]=c*m+h*E+u*v,r[7]=c*g+h*x+u*S,r[2]=f*b+d*_+p*M,r[5]=f*m+d*E+p*v,r[8]=f*g+d*x+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return e[0]=u*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=d*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return gr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,t)),this}rotate(e){return gr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,t){return gr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sd.prototype.isMatrix3=!0;pt=sd,Bu=new pt,zp=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bp=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Mt=$x();_c=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xr===void 0&&(Xr=pa("canvas")),Xr.width=e.width,Xr.height=e.height;let i=Xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Xr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=us(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(us(t[n]/255)*255):t[n]=us(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qx=0,ga=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=_i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Hu(i[a].image)):r.push(Hu(i[a]))}else r=Hu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};ev=0,Ou=new R,yn=class s extends Vi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=bn,i=bn,r=bt,a=en,o=gi,l=En,c=s.DEFAULT_ANISOTROPY,h=Xt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=_i(),this.name="",this.source=new ga(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Hf;yn.DEFAULT_ANISOTROPY=1;rd=class rd{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],b=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,x=(d+1)/2,M=(g+1)/2,v=(h+f)/4,S=(u+b)/4,y=(p+m)/4;return E>x&&E>M?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=v/n,r=S/n):x>M?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=v/i,r=y/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=S/r,i=y/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-b)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rd.prototype.isVector4=!0;Bt=rd,yc=class extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new yn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ga(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},yo=class extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Mc=class extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Vc=class Vc{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,p,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,p,b,m)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,p,b,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Kr.setFromMatrixColumn(e,0).length(),r=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,p=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,b=c*u;t[0]=f+b*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,b=c*u;t[0]=f-b*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,p=o*h,b=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+b,t[1]=l*u,t[5]=b*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,p=o*l,b=o*c;t[0]=l*h,t[4]=b-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*l,d=a*c,p=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+b,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tv,e,nv)}lookAt(e,t,n){let i=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Is.crossVectors(n,fi),Is.lengthSq()===0&&(Math.abs(n.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Is.crossVectors(n,fi)),Is.normalize(),kl.crossVectors(fi,Is),i[0]=Is.x,i[4]=kl.x,i[8]=fi.x,i[1]=Is.y,i[5]=kl.y,i[9]=fi.y,i[2]=Is.z,i[6]=kl.z,i[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],b=n[6],m=n[10],g=n[14],_=n[3],E=n[7],x=n[11],M=n[15],v=i[0],S=i[4],y=i[8],w=i[12],P=i[1],I=i[5],D=i[9],H=i[13],C=i[2],U=i[6],L=i[10],B=i[14],N=i[3],z=i[7],W=i[11],Y=i[15];return r[0]=a*v+o*P+l*C+c*N,r[4]=a*S+o*I+l*U+c*z,r[8]=a*y+o*D+l*L+c*W,r[12]=a*w+o*H+l*B+c*Y,r[1]=h*v+u*P+f*C+d*N,r[5]=h*S+u*I+f*U+d*z,r[9]=h*y+u*D+f*L+d*W,r[13]=h*w+u*H+f*B+d*Y,r[2]=p*v+b*P+m*C+g*N,r[6]=p*S+b*I+m*U+g*z,r[10]=p*y+b*D+m*L+g*W,r[14]=p*w+b*H+m*B+g*Y,r[3]=_*v+E*P+x*C+M*N,r[7]=_*S+E*I+x*U+M*z,r[11]=_*y+E*D+x*L+M*W,r[15]=_*w+E*H+x*B+M*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],b=e[7],m=e[11],g=e[15],_=l*d-c*f,E=o*d-c*u,x=o*f-l*u,M=a*d-c*h,v=a*f-l*h,S=a*u-o*h;return t*(b*_-m*E+g*x)-n*(p*_-m*M+g*v)+i*(p*E-b*M+g*S)-r*(p*x-b*v+m*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],b=e[13],m=e[14],g=e[15],_=t*o-n*a,E=t*l-i*a,x=t*c-r*a,M=n*l-i*o,v=n*c-r*o,S=i*c-r*l,y=h*b-u*p,w=h*m-f*p,P=h*g-d*p,I=u*m-f*b,D=u*g-d*b,H=f*g-d*m,C=_*H-E*D+x*I+M*P-v*w+S*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(o*H-l*D+c*I)*U,e[1]=(i*D-n*H-r*I)*U,e[2]=(b*S-m*v+g*M)*U,e[3]=(f*v-u*S-d*M)*U,e[4]=(l*P-a*H-c*w)*U,e[5]=(t*H-i*P+r*w)*U,e[6]=(m*x-p*S-g*E)*U,e[7]=(h*S-f*x+d*E)*U,e[8]=(a*D-o*P+c*y)*U,e[9]=(n*P-t*D-r*y)*U,e[10]=(p*v-b*x+g*_)*U,e[11]=(u*x-h*v-d*_)*U,e[12]=(o*w-a*I-l*y)*U,e[13]=(t*I-n*w+i*y)*U,e[14]=(b*E-p*M-m*_)*U,e[15]=(h*M-u*E+f*_)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,b=a*h,m=a*u,g=o*u,_=l*c,E=l*h,x=l*u,M=n.x,v=n.y,S=n.z;return i[0]=(1-(b+g))*M,i[1]=(d+x)*M,i[2]=(p-E)*M,i[3]=0,i[4]=(d-x)*v,i[5]=(1-(f+g))*v,i[6]=(m+_)*v,i[7]=0,i[8]=(p+E)*S,i[9]=(m-_)*S,i[10]=(1-(f+b))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Kr.set(i[0],i[1],i[2]).length(),o=Kr.set(i[4],i[5],i[6]).length(),l=Kr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Ei.copy(this);let c=1/a,h=1/o,u=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,t.setFromRotationMatrix(Ei),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Ri,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,b;if(l)p=r/(a-r),b=a*r/(a-r);else if(o===Ri)p=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===da)p=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ri,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,b;if(l)p=1/(a-r),b=a/(a-r);else if(o===Ri)p=-2/(a-r),b=-(a+r)/(a-r);else if(o===da)p=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vc.prototype.isMatrix4=!0;Pe=Vc,Kr=new R,Ei=new Pe,tv=new R(0,0,0),nv=new R(1,1,1),Is=new R,kl=new R,fi=new R,Hp=new Pe,Op=new $t,Wi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},iv=0,Gp=new R,jr=new $t,is=new Pe,Dl=new R,no=new R,sv=new R,rv=new $t,Vp=new R(1,0,0),Wp=new R(0,1,0),qp=new R(0,0,1),Xp={type:"added"},av={type:"removed"},Yr={type:"childadded",child:null},Gu={type:"childremoved",child:null},It=class s extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Wi,n=new $t,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new pt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Wp,e)}rotateZ(e){return this.rotateOnAxis(qp,e)}translateOnAxis(e,t){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Wp,e)}translateZ(e){return this.translateOnAxis(qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dl.copy(e):Dl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(no,Dl,this.up):is.lookAt(Dl,no,this.up),this.quaternion.setFromRotationMatrix(is),i&&(is.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(is),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(av),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,sv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new R(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;lt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},ov={type:"move"},xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),g=this._getHandJoint(c,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Fl={h:0,s:0,l:0};we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Jf(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vu(a,r,e+1/3),this.g=Vu(a,r,e),this.b=Vu(a,r,e-1/3)}return Mt.colorSpaceToWorking(this,i),this}setStyle(e,t=ot){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return Mt.workingToColorSpace(On.copy(this),e),Math.round(vt(On.r*255,0,255))*65536+Math.round(vt(On.g*255,0,255))*256+Math.round(vt(On.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(On.copy(this),t);let n=On.r,i=On.g,r=On.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ot){Mt.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,i=On.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(Fl);let n=go(Ls.h,Fl.h,t),i=go(Ls.s,Fl.s,t),r=go(Ls.l,Fl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new we;we.NAMES=um;Mo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},fs=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Si=new R,ss=new R,Wu=new R,rs=new R,Jr=new R,Zr=new R,Kp=new R,qu=new R,Xu=new R,Ku=new R,ju=new Bt,Yu=new Bt,Ju=new Bt,cs=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Si.subVectors(e,t),i.cross(Si);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Si.subVectors(i,t),ss.subVectors(n,t),Wu.subVectors(e,t);let a=Si.dot(Si),o=Si.dot(ss),l=Si.dot(Wu),c=ss.dot(ss),h=ss.dot(Wu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,rs.x),l.addScaledVector(a,rs.y),l.addScaledVector(o,rs.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return ju.setScalar(0),Yu.setScalar(0),Ju.setScalar(0),ju.fromBufferAttribute(e,t),Yu.fromBufferAttribute(e,n),Ju.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ju,r.x),a.addScaledVector(Yu,r.y),a.addScaledVector(Ju,r.z),a}static isFrontFacing(e,t,n,i){return Si.subVectors(n,t),ss.subVectors(e,t),Si.cross(ss).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Si.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Jr.subVectors(i,n),Zr.subVectors(r,n),qu.subVectors(e,n);let l=Jr.dot(qu),c=Zr.dot(qu);if(l<=0&&c<=0)return t.copy(n);Xu.subVectors(e,i);let h=Jr.dot(Xu),u=Zr.dot(Xu);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Jr,a);Ku.subVectors(e,r);let d=Jr.dot(Ku),p=Zr.dot(Ku);if(p>=0&&d<=p)return t.copy(r);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zr,o);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Kp.subVectors(r,i),o=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Kp,o);let g=1/(m+b+f);return a=b*g,o=f*g,t.copy(n).addScaledVector(Jr,a).addScaledVector(Zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},on=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ti):Ti.fromBufferAttribute(r,a),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Nl.copy(n.boundingBox)),Nl.applyMatrix4(e.matrixWorld),this.union(Nl)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ul.subVectors(this.max,io),$r.subVectors(e.a,io),Qr.subVectors(e.b,io),ea.subVectors(e.c,io),ks.subVectors(Qr,$r),Ds.subVectors(ea,Qr),ur.subVectors($r,ea);let t=[0,-ks.z,ks.y,0,-Ds.z,Ds.y,0,-ur.z,ur.y,ks.z,0,-ks.x,Ds.z,0,-Ds.x,ur.z,0,-ur.x,-ks.y,ks.x,0,-Ds.y,Ds.x,0,-ur.y,ur.x,0];return!Zu(t,$r,Qr,ea,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Zu(t,$r,Qr,ea,Ul))?!1:(zl.crossVectors(ks,Ds),t=[zl.x,zl.y,zl.z],Zu(t,$r,Qr,ea,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(as),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},as=[new R,new R,new R,new R,new R,new R,new R,new R],Ti=new R,Nl=new on,$r=new R,Qr=new R,ea=new R,ks=new R,Ds=new R,ur=new R,io=new R,Ul=new R,zl=new R,fr=new R;hs=lv();Us=class{static toHalfFloat(e){return cv(e)}static fromHalfFloat(e){return hv(e)}},gn=new R,Bl=new ye,uv=0,ct=class extends Vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jf,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bl.fromBufferAttribute(this,t),Bl.applyMatrix3(e),this.setXY(t,Bl.x,Bl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Eo=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}},So=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ft=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},fv=new on,so=new R,$u=new R,Vn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);let t=so.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(so,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add($u)),this.expandByPoint(so.copy(e.center).sub($u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dv=0,vi=new Pe,Qu=new It,ta=new R,di=new on,ro=new on,An=new R,ht=class s extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dx(e)?So:Eo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ta).negate(),this.translate(ta.x,ta.y,ta.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];di.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ro.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(di.min,ro.min),di.expandByPoint(An),An.addVectors(di.max,ro.max),di.expandByPoint(An)):(di.expandByPoint(ro.min),di.expandByPoint(ro.max))}di.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)An.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(An));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)An.fromBufferAttribute(o,c),l&&(ta.fromBufferAttribute(e,c),An.add(ta)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new R,l[y]=new R;let c=new R,h=new R,u=new R,f=new ye,d=new ye,p=new ye,b=new R,m=new R;function g(y,w,P){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,P),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(b.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),o[y].add(b),o[w].add(b),o[P].add(b),l[y].add(m),l[w].add(m),l[P].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let P=_[y],I=P.start,D=P.count;for(let H=I,C=I+D;H<C;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let E=new R,x=new R,M=new R,v=new R;function S(y){M.fromBufferAttribute(i,y),v.copy(M);let w=o[y];E.copy(w),E.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(v,w);let I=x.dot(l[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,I)}for(let y=0,w=_.length;y<w;++y){let P=_[y],I=P.start,D=P.count;for(let H=I,C=I+D;H<C;H+=3)S(e.getX(H+0)),S(e.getX(H+1)),S(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new ct(f,h,u)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},_r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jf,this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Zn=new R,zs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=qt(t,this.array),n=qt(n,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_o("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_o("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ef=new R,pv=new R,mv=new pt,pi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ef.subVectors(n,t).cross(pv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(ef),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||mv.getNormalMatrix(e),i=this.coplanarPoint(ef).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gv=0,Wn=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=js,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lf,this.blendDst=kf,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uc,this.stencilZFail=uc,this.stencilZPass=uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new pi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ao=new R,ia=new R,sa=new R,ra=new ye,oo=new ye,fm=new Pe,Hl=new R,lo=new R,Ol=new R,jp=new ye,tf=new ye,Yp=new ye,Dn=class extends It{constructor(e=new Cn){if(super(),this.isSprite=!0,this.type="Sprite",na===void 0){na=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _r(t,5);na.setIndex([0,1,2,0,2,3]),na.setAttribute("position",new zs(n,3,0,!1)),na.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=na,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ia.setFromMatrixScale(this.matrixWorld),fm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ia.multiplyScalar(-sa.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Gl(Hl.set(-.5,-.5,0),sa,a,ia,i,r),Gl(lo.set(.5,-.5,0),sa,a,ia,i,r),Gl(Ol.set(.5,.5,0),sa,a,ia,i,r),jp.set(0,0),tf.set(1,0),Yp.set(1,1);let o=e.ray.intersectTriangle(Hl,lo,Ol,!1,ao);if(o===null&&(Gl(lo.set(-.5,.5,0),sa,a,ia,i,r),tf.set(0,1),o=e.ray.intersectTriangle(Hl,Ol,lo,!1,ao),o===null))return;let l=e.ray.origin.distanceTo(ao);l<e.near||l>e.far||t.push({distance:l,point:ao.clone(),uv:cs.getInterpolation(ao,Hl,lo,Ol,jp,tf,Yp,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Vl=new R,Jp=new R,To=class extends It{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Vl.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Vl);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Vl.setFromMatrixPosition(e.matrixWorld),Jp.setFromMatrixPosition(this.matrixWorld);let n=Vl.distanceTo(Jp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},os=new R,nf=new R,Wl=new R,ql=new R,Bs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){nf.copy(e).add(t).multiplyScalar(.5),Wl.copy(t).sub(e).normalize(),ql.copy(this.origin).sub(nf);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wl),o=ql.dot(this.direction),l=-ql.dot(Wl),c=ql.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let b=1/h;u*=b,f*=b,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(nf).addScaledVector(Wl,f),d}intersectSphere(e,t){if(e.radius<0)return null;os.subVectors(e.center,this.origin);let n=os.dot(this.direction),i=os.dot(os)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,b=t.y-a.y,m=t.z-a.z,g=n.x-a.x,_=n.y-a.y,E=n.z-a.z,x=Math.abs(l),M=Math.abs(c),v=Math.abs(h),S,y,w,P,I,D,H,C,U,L,B,N;if(x>=M&&x>=v?(w=l,D=u,U=p,N=g,l>=0?(S=c,y=h,P=f,I=d,H=b,C=m,L=_,B=E):(S=h,y=c,P=d,I=f,H=m,C=b,L=E,B=_)):M>=v?(w=c,D=f,U=b,N=_,c>=0?(S=h,y=l,P=d,I=u,H=m,C=p,L=E,B=g):(S=l,y=h,P=u,I=d,H=p,C=m,L=g,B=E)):(w=h,D=d,U=m,N=E,h>=0?(S=l,y=c,P=u,I=f,H=p,C=b,L=g,B=_):(S=c,y=l,P=f,I=u,H=b,C=p,L=_,B=g)),w===0)return null;let z=S/w,W=y/w,Y=1/w,ae=P-z*D,he=I-W*D,ce=H-z*U,_e=C-W*U,$e=L-z*N,ne=B-W*N,oe=$e*_e-ne*ce,Te=ae*ne-he*$e,ke=ce*he-_e*ae;if(i){if(oe<0||Te<0||ke<0)return null}else if((oe<0||Te<0||ke<0)&&(oe>0||Te>0||ke>0))return null;let de=oe+Te+ke;if(de===0)return null;let Oe=Y*(oe*D+Te*U+ke*N);return(de>0?Oe<0:Oe>0)?null:this.at(Oe/de,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zp=new Pe,dr=new Bs,Xl=new Vn,$p=new R,Kl=new R,jl=new R,Yl=new R,sf=new R,Jl=new R,Qp=new R,Zl=new R,Q=class extends It{constructor(e=new ht,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Jl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(sf.fromBufferAttribute(u,e),a?Jl.addScaledVector(sf,h):Jl.addScaledVector(sf.sub(t),h))}t.add(Jl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xl.copy(n.boundingSphere),Xl.applyMatrix4(r),dr.copy(e.ray).recast(e.near),!(Xl.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Xl,$p)===null||dr.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(Zp.copy(r).invert(),dr.copy(e.ray).applyMatrix4(Zp),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=a[m.materialIndex],_=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,M=E;x<M;x+=3){let v=o.getX(x),S=o.getX(x+1),y=o.getX(x+2);i=$l(this,g,e,n,c,h,u,v,S,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let _=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);i=$l(this,a,e,n,c,h,u,_,E,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,b=f.length;p<b;p++){let m=f[p],g=a[m.materialIndex],_=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=_,M=E;x<M;x+=3){let v=x,S=x+1,y=x+2;i=$l(this,g,e,n,c,h,u,v,S,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=p,g=b;m<g;m+=3){let _=m,E=m+1,x=m+2;i=$l(this,a,e,n,c,h,u,_,E,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};co=new Bt,e0=new Bt,t0=new Bt,xv=new Bt,n0=new Pe,Ql=new R,rf=new Vn,i0=new Pe,af=new Bs,wo=class extends Q{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=df,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ql),this.boundingBox.expandByPoint(Ql)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ql),this.boundingSphere.expandByPoint(Ql)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rf.copy(this.boundingSphere),rf.applyMatrix4(i),e.ray.intersectsSphere(rf)!==!1&&(i0.copy(i).invert(),af.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&af.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,af)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===J0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;e0.fromBufferAttribute(i.attributes.skinIndex,e),t0.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(co.copy(t),t.set(0,0,0,0)):(co.set(...t,1),t.set(0,0,0)),co.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=t0.getComponent(r);if(a!==0){let o=e0.getComponent(r);n0.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(xv.copy(co).applyMatrix4(n0),a)}}return t.isVector4&&(t.w=co.w),t.applyMatrix4(this.bindMatrixInverse)}},va=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},Hs=class extends yn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=fn,h=fn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},s0=new Pe,vv=new Pe,Ro=class s{constructor(e=[],t=[]){this.uuid=_i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:vv;s0.multiplyMatrices(o,t[r]),s0.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Hs(t,e,e,gi,qn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Qe("Skeleton: No bone found with UUID:",r),a=new va),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ai=class extends ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},aa=new Pe,r0=new Pe,ec=[],a0=new on,_v=new Pe,ho=new Q,uo=new Vn,Lt=class extends Q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ai(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_v)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,aa),a0.copy(e.boundingBox).applyMatrix4(aa),this.boundingBox.union(a0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,aa),uo.copy(e.boundingSphere).applyMatrix4(aa),this.boundingSphere.union(uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uo.copy(this.boundingSphere),uo.applyMatrix4(n),e.ray.intersectsSphere(uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,aa),r0.multiplyMatrices(n,aa),ho.matrixWorld=r0,ho.raycast(e,ec);for(let a=0,o=ec.length;a<o;a++){let l=ec[a];l.instanceId=r,l.object=this,t.push(l)}ec.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ai(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hs(new Float32Array(i*this.count),i,this.count,Zc,qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pr=new Vn,yv=new ye(.5,.5),tc=new R,Os=class{constructor(e=new pi,t=new pi,n=new pi,i=new pi,r=new pi,a=new pi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ri,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],b=r[9],m=r[10],g=r[11],_=r[12],E=r[13],x=r[14],M=r[15];if(i[0].setComponents(c-a,d-h,g-p,M-_).normalize(),i[1].setComponents(c+a,d+h,g+p,M+_).normalize(),i[2].setComponents(c+o,d+u,g+b,M+E).normalize(),i[3].setComponents(c-o,d-u,g-b,M-E).normalize(),n)i[4].setComponents(l,f,m,x).normalize(),i[5].setComponents(c-l,d-f,g-m,M-x).normalize();else if(i[4].setComponents(c-l,d-f,g-m,M-x).normalize(),t===Ri)i[5].setComponents(c+l,d+f,g+m,M+x).normalize();else if(t===da)i[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);let t=yv.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(tc.x=i.normal.x>0?e.max.x:e.min.x,tc.y=i.normal.y>0?e.max.y:e.min.y,tc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_a=class extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ec=new R,Sc=new R,o0=new Pe,fo=new Bs,nc=new Vn,of=new R,l0=new R,yr=class extends It{constructor(e=new ht,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ec.fromBufferAttribute(t,i-1),Sc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ec.distanceTo(Sc);e.setAttribute("lineDistance",new ft(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(i),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;o0.copy(i).invert(),fo.copy(e.ray).applyMatrix4(o0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=d,m=p-1;b<m;b+=c){let g=h.getX(b),_=h.getX(b+1),E=ic(this,e,fo,l,g,_,b);E&&t.push(E)}if(this.isLineLoop){let b=h.getX(p-1),m=h.getX(d),g=ic(this,e,fo,l,b,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let b=d,m=p-1;b<m;b+=c){let g=ic(this,e,fo,l,b,b+1,b);g&&t.push(g)}if(this.isLineLoop){let b=ic(this,e,fo,l,p-1,d,p-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};c0=new R,h0=new R,Mr=class extends yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)c0.fromBufferAttribute(t,i),h0.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+c0.distanceTo(h0);e.setAttribute("lineDistance",new ft(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ao=class extends yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ya=class extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},u0=new Pe,xf=new Bs,sc=new Vn,rc=new R,Gs=class extends It{constructor(e=new ht,t=new ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=r,e.ray.intersectsSphere(sc)===!1)return;u0.copy(i).invert(),xf.copy(e.ray).applyMatrix4(u0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,b=d;p<b;p++){let m=c.getX(p);rc.fromBufferAttribute(u,m),f0(rc,m,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,b=d;p<b;p++)rc.fromBufferAttribute(u,p),f0(rc,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Co=class extends yn{constructor(e=[],t=Ys,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ft=class extends yn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vs=class extends yn{constructor(e,t,n=Pi,i,r,a,o=fn,l=fn,c,h=Gi,u=1){if(h!==Gi&&h!==Js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ga(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Tc=class extends Vs{constructor(e,t=Pi,n=Ys,i,r,a=fn,o=fn,l,c=Gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Po=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},He=class s extends ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function p(b,m,g,_,E,x,M,v,S,y,w){let P=x/S,I=M/y,D=x/2,H=M/2,C=v/2,U=S+1,L=y+1,B=0,N=0,z=new R;for(let W=0;W<L;W++){let Y=W*I-H;for(let ae=0;ae<U;ae++){let he=ae*P-D;z[b]=he*_,z[m]=Y*E,z[g]=C,c.push(z.x,z.y,z.z),z[b]=0,z[m]=0,z[g]=v>0?1:-1,h.push(z.x,z.y,z.z),u.push(ae/S),u.push(1-W/y),B+=1}}for(let W=0;W<y;W++)for(let Y=0;Y<S;Y++){let ae=f+Y+U*W,he=f+Y+U*(W+1),ce=f+(Y+1)+U*(W+1),_e=f+(Y+1)+U*W;l.push(ae,he,_e),l.push(he,ce,_e),N+=6}o.addGroup(d,N,w),d+=N,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Io=class s extends ht{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,b=i+1,m=new R,g=new R;for(let _=0;_<=p;_++){let E=0,x=0,M=0,v=0;if(_<=n){let w=_/n,P=w*Math.PI/2;x=-h-e*Math.cos(P),M=e*Math.sin(P),v=-e*Math.cos(P),E=w*u}else if(_<=n+r){let w=(_-n)/r;x=-h+w*t,M=e,v=0,E=u+w*f}else{let w=(_-n-r)/n,P=w*Math.PI/2;x=h+e*Math.sin(P),M=e*Math.cos(P),v=e*Math.sin(P),E=u+f+w*u}let S=Math.max(0,Math.min(1,E/d)),y=0;_===0?y=.5/i:_===p&&(y=-.5/i);for(let w=0;w<=i;w++){let P=w/i,I=P*Math.PI*2,D=Math.sin(I),H=Math.cos(I);g.x=-M*H,g.y=x,g.z=M*D,o.push(g.x,g.y,g.z),m.set(-M*H,v,M*D),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+y,S)}if(_>0){let w=(_-1)*b;for(let P=0;P<i;P++){let I=w+P,D=w+P+1,H=_*b+P,C=_*b+P+1;a.push(I,D,H),a.push(D,C,H)}}}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},qi=class s extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new R,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Nt=class s extends ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,b=[],m=n/2,g=0;_(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function _(){let x=new R,M=new R,v=0,S=(t-e)/n;for(let y=0;y<=r;y++){let w=[],P=y/r,I=P*(t-e)+e;for(let D=0;D<=i;D++){let H=D/i,C=H*l+o,U=Math.sin(C),L=Math.cos(C);M.x=I*U,M.y=-P*n+m,M.z=I*L,u.push(M.x,M.y,M.z),x.set(U,S,L).normalize(),f.push(x.x,x.y,x.z),d.push(H,1-P),w.push(p++)}b.push(w)}for(let y=0;y<i;y++)for(let w=0;w<r;w++){let P=b[w][y],I=b[w+1][y],D=b[w+1][y+1],H=b[w][y+1];(e>0||w!==0)&&(h.push(P,I,H),v+=3),(t>0||w!==r-1)&&(h.push(I,D,H),v+=3)}c.addGroup(g,v,0),g+=v}function E(x){let M=p,v=new ye,S=new R,y=0,w=x===!0?e:t,P=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*P,0),f.push(0,P,0),d.push(.5,.5),p++;let I=p;for(let D=0;D<=i;D++){let C=D/i*l+o,U=Math.cos(C),L=Math.sin(C);S.x=w*L,S.y=m*P,S.z=w*U,u.push(S.x,S.y,S.z),f.push(0,P,0),v.x=U*.5+.5,v.y=L*.5*P+.5,d.push(v.x,v.y),p++}for(let D=0;D<i;D++){let H=M+D,C=I+D;x===!0?h.push(C,C+1,H):h.push(C+1,C,H),y+=3}c.addGroup(g,y,x===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ds=class s extends Nt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ye:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],a=[],o=new R,l=new Pe;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(vt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(vt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ma=class extends mi{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wc=class extends Ma{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};d0=new R,p0=new R,lf=new Zf,cf=new Zf,hf=new Zf,Ws=class extends mi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(p0.subVectors(i[0],i[1]).add(i[0]),c=p0);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(d0.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=d0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),b=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);b<1e-4&&(b=1),p<1e-4&&(p=b),m<1e-4&&(m=b),lf.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,b,m),cf.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,b,m),hf.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,b,m)}else this.curveType==="catmullrom"&&(lf.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),cf.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hf.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(lf.calc(l),cf.calc(l),hf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Lo=class extends mi{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xo(e,i.x,r.x,a.x,o.x),xo(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rc=class extends mi{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xo(e,i.x,r.x,a.x,o.x),xo(e,i.y,r.y,a.y,o.y),xo(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ko=class extends mi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends mi{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Do=class extends mi{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(bo(e,i.x,r.x,a.x),bo(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends mi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(bo(e,i.x,r.x,a.x),bo(e,i.y,r.y,a.y),bo(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(m0(o,l.x,c.x,h.x,u.x),m0(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ye().fromArray(i))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:wc,CatmullRomCurve3:Ws,CubicBezierCurve:Lo,CubicBezierCurve3:Rc,EllipseCurve:Ma,LineCurve:ko,LineCurve3:Ac,QuadraticBezierCurve:Do,QuadraticBezierCurve3:Fo,SplineCurve:No}),Pc=class extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Cc[i.type]().fromJSON(i))}return this}},Uo=class extends Pc{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ko(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Do(this.currentPoint.clone(),new ye(e,t),new ye(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Lo(this.currentPoint.clone(),new ye(e,t),new ye(n,i),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new No(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Ma(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qs=class extends Uo{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Uo().fromJSON(i))}return this}};yf=class{static triangulate(e,t,n=2){return Cv(e,t,n)}},mr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];b0(e),x0(n,e);let a=e.length;t.forEach(b0);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,x0(n,t[l]);let o=yf.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Sr=class s extends ht{constructor(e=new qs([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ft(i,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Xv,E,x=!1,M,v,S,y;if(g){E=g.getSpacedPoints(h),x=!0,f=!1;let le=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,le),v=new R,S=new R,y=new R}f||(m=0,d=0,p=0,b=0);let w=o.extractPoints(c),P=w.shape,I=w.holes;if(!mr.isClockWise(P)){P=P.reverse();for(let le=0,fe=I.length;le<fe;le++){let ve=I[le];mr.isClockWise(ve)&&(I[le]=ve.reverse())}}function H(le){let ve=10000000000000001e-36,be=le[0];for(let Se=1;Se<=le.length;Se++){let je=Se%le.length,ze=le[je],et=ze.x-be.x,ie=ze.y-be.y,F=et*et+ie*ie,Fe=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(be.x),Math.abs(be.y)),Xe=ve*Fe*Fe;if(F<=Xe){le.splice(je,1),Se--;continue}be=ze}}H(P),I.forEach(H);let C=I.length,U=P;for(let le=0;le<C;le++){let fe=I[le];P=P.concat(fe)}function L(le,fe,ve){return fe||rt("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(fe,ve)}let B=P.length;function N(le,fe,ve){let be,Se,je,ze=le.x-fe.x,et=le.y-fe.y,ie=ve.x-le.x,F=ve.y-le.y,Fe=ze*ze+et*et,Xe=ze*F-et*ie;if(Math.abs(Xe)>Number.EPSILON){let k=Math.sqrt(Fe),T=Math.sqrt(ie*ie+F*F),j=fe.x-et/k,Z=fe.y+ze/k,V=ve.x-F/T,q=ve.y+ie/T,$=((V-j)*F-(q-Z)*ie)/(ze*F-et*ie);be=j+ze*$-le.x,Se=Z+et*$-le.y;let K=be*be+Se*Se;if(K<=2)return new ye(be,Se);je=Math.sqrt(K/2)}else{let k=!1;ze>Number.EPSILON?ie>Number.EPSILON&&(k=!0):ze<-Number.EPSILON?ie<-Number.EPSILON&&(k=!0):Math.sign(et)===Math.sign(F)&&(k=!0),k?(be=-et,Se=ze,je=Math.sqrt(Fe)):(be=ze,Se=et,je=Math.sqrt(Fe/2))}return new ye(be/je,Se/je)}let z=[];for(let le=0,fe=U.length,ve=fe-1,be=le+1;le<fe;le++,ve++,be++)ve===fe&&(ve=0),be===fe&&(be=0),z[le]=N(U[le],U[ve],U[be]);let W=[],Y,ae=z.concat();for(let le=0,fe=C;le<fe;le++){let ve=I[le];Y=[];for(let be=0,Se=ve.length,je=Se-1,ze=be+1;be<Se;be++,je++,ze++)je===Se&&(je=0),ze===Se&&(ze=0),Y[be]=N(ve[be],ve[je],ve[ze]);W.push(Y),ae=ae.concat(Y)}let he;if(m===0)he=mr.triangulateShape(U,I);else{let le=[],fe=[];for(let ve=0;ve<m;ve++){let be=ve/m,Se=d*Math.cos(be*Math.PI/2),je=p*Math.sin(be*Math.PI/2)+b;for(let ze=0,et=U.length;ze<et;ze++){let ie=L(U[ze],z[ze],je);Te(ie.x,ie.y,-Se),be===0&&le.push(ie)}for(let ze=0,et=C;ze<et;ze++){let ie=I[ze];Y=W[ze];let F=[];for(let Fe=0,Xe=ie.length;Fe<Xe;Fe++){let k=L(ie[Fe],Y[Fe],je);Te(k.x,k.y,-Se),be===0&&F.push(k)}be===0&&fe.push(F)}}he=mr.triangulateShape(le,fe)}let ce=he.length,_e=p+b;for(let le=0;le<B;le++){let fe=f?L(P[le],ae[le],_e):P[le];x?(S.copy(M.normals[0]).multiplyScalar(fe.x),v.copy(M.binormals[0]).multiplyScalar(fe.y),y.copy(E[0]).add(S).add(v),Te(y.x,y.y,y.z)):Te(fe.x,fe.y,0)}for(let le=1;le<=h;le++)for(let fe=0;fe<B;fe++){let ve=f?L(P[fe],ae[fe],_e):P[fe];x?(S.copy(M.normals[le]).multiplyScalar(ve.x),v.copy(M.binormals[le]).multiplyScalar(ve.y),y.copy(E[le]).add(S).add(v),Te(y.x,y.y,y.z)):Te(ve.x,ve.y,u/h*le)}for(let le=m-1;le>=0;le--){let fe=le/m,ve=d*Math.cos(fe*Math.PI/2),be=p*Math.sin(fe*Math.PI/2)+b;for(let Se=0,je=U.length;Se<je;Se++){let ze=L(U[Se],z[Se],be);Te(ze.x,ze.y,u+ve)}for(let Se=0,je=I.length;Se<je;Se++){let ze=I[Se];Y=W[Se];for(let et=0,ie=ze.length;et<ie;et++){let F=L(ze[et],Y[et],be);x?Te(F.x,F.y+E[h-1].y,E[h-1].x+ve):Te(F.x,F.y,u+ve)}}}$e(),ne();function $e(){let le=i.length/3;if(f){let fe=0,ve=B*fe;for(let be=0;be<ce;be++){let Se=he[be];ke(Se[2]+ve,Se[1]+ve,Se[0]+ve)}fe=h+m*2,ve=B*fe;for(let be=0;be<ce;be++){let Se=he[be];ke(Se[0]+ve,Se[1]+ve,Se[2]+ve)}}else{for(let fe=0;fe<ce;fe++){let ve=he[fe];ke(ve[2],ve[1],ve[0])}for(let fe=0;fe<ce;fe++){let ve=he[fe];ke(ve[0]+B*h,ve[1]+B*h,ve[2]+B*h)}}n.addGroup(le,i.length/3-le,0)}function ne(){let le=i.length/3,fe=0;oe(U,fe),fe+=U.length;for(let ve=0,be=I.length;ve<be;ve++){let Se=I[ve];oe(Se,fe),fe+=Se.length}n.addGroup(le,i.length/3-le,1)}function oe(le,fe){let ve=le.length;for(;--ve>=0;){let be=ve,Se=ve-1;Se<0&&(Se=le.length-1);for(let je=0,ze=h+m*2;je<ze;je++){let et=B*je,ie=B*(je+1),F=fe+be+et,Fe=fe+Se+et,Xe=fe+Se+ie,k=fe+be+ie;de(F,Fe,Xe,k)}}}function Te(le,fe,ve){l.push(le),l.push(fe),l.push(ve)}function ke(le,fe,ve){Oe(le),Oe(fe),Oe(ve);let be=i.length/3,Se=_.generateTopUV(n,i,be-3,be-2,be-1);gt(Se[0]),gt(Se[1]),gt(Se[2])}function de(le,fe,ve,be){Oe(le),Oe(fe),Oe(be),Oe(fe),Oe(ve),Oe(be);let Se=i.length/3,je=_.generateSideWallUV(n,i,Se-6,Se-3,Se-2,Se-1);gt(je[0]),gt(je[1]),gt(je[3]),gt(je[1]),gt(je[2]),gt(je[3])}function Oe(le){i.push(l[le*3+0]),i.push(l[le*3+1]),i.push(l[le*3+2])}function gt(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Cc[i.type]().fromJSON(i)),new s(n,e.options)}},Xv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],b=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(f,1-p),new ye(b,1-g)]:[new ye(o,1-l),new ye(h,1-u),new ye(d,1-p),new ye(m,1-g)]}};st=class s extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],b=[],m=[];for(let g=0;g<h;g++){let _=g*f-a;for(let E=0;E<c;E++){let x=E*u-r;p.push(x,-_,0),b.push(0,0,1),m.push(E/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let E=_+c*g,x=_+c*(g+1),M=_+1+c*(g+1),v=_+1+c*g;d.push(E,x,v),d.push(x,M,v)}this.setIndex(d),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(b,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Mn=class s extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,f=new R,d=[],p=[],b=[],m=[];for(let g=0;g<=n;g++){let _=[],E=g/n,x=a+E*o,M=e*Math.cos(x),v=Math.sqrt(e*e-M*M),S=0;g===0&&a===0?S=.5/t:g===n&&l===Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){let w=y/t,P=i+w*r;u.x=-v*Math.cos(P),u.y=M,u.z=v*Math.sin(P),p.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),m.push(w+S,1-E),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let E=h[g][_+1],x=h[g][_],M=h[g+1][_],v=h[g+1][_+1];(g!==0||a>0)&&d.push(E,x,v),(g!==n-1||l<Math.PI)&&d.push(x,M,v)}this.setIndex(d),this.setAttribute("position",new ft(p,3)),this.setAttribute("normal",new ft(b,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ai=class s extends ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new R,d=new R,p=new R;for(let b=0;b<=n;b++){let m=a+b/n*o;for(let g=0;g<=i;g++){let _=g/i*r;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=i;m++){let g=(i+1)*b+m-1,_=(i+1)*(b-1)+m-1,E=(i+1)*(b-1)+m,x=(i+1)*b+m;l.push(g,_,x),l.push(_,E,x)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Oo=class s extends ht{constructor(e=new Fo(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new ye,h=new R,u=[],f=[],d=[],p=[];b(),this.setIndex(p),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function b(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),_(),g()}function m(E){h=e.getPointAt(E/t,h);let x=a.normals[E],M=a.binormals[E];for(let v=0;v<=i;v++){let S=v/i*Math.PI*2,y=Math.sin(S),w=-Math.cos(S);l.x=w*x.x+y*M.x,l.y=w*x.y+y*M.y,l.z=w*x.z+y*M.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let E=1;E<=t;E++)for(let x=1;x<=i;x++){let M=(i+1)*(E-1)+(x-1),v=(i+1)*E+(x-1),S=(i+1)*E+x,y=(i+1)*(E-1)+x;p.push(M,v,y),p.push(v,S,y)}}function _(){for(let E=0;E<=t;E++)for(let x=0;x<=i;x++)c.x=E/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Cc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};Lr={clone:Ir,merge:Xn},Yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yv,this.fragmentShader=Jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new we().setHex(i.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new pt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ic=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Ne{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Go=class extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=qc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lc=class extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kc=class extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Xi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dc=class extends Xi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mf,endingEnd:mf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case gf:r=e,o=2*t-n;break;case bf:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gf:a=e,l=2*n-t;break;case bf:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),b=p*p,m=b*p,g=-f*m+2*f*b-f*p,_=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*p+1,E=(-1-d)*m+(1.5+d)*b+.5*p,x=d*m-d*b;for(let M=0;M!==o;++M)r[M]=g*a[h+M]+_*a[c+M]+E*a[l+M]+x*a[u+M];return r}},Fc=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Nc=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Uc=class extends Xi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),b=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*b+a[l+m]*p;return r}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let b=a[c+p],m=a[l+p],g=d*f+p*2,_=u[g],E=u[g+1],x=e*f+p*2,M=h[x],v=h[x+1],S=e_(n,t,_,M,i);r[p]=bm(S,b,E,v,m)}return r}};oi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),fc(e.settings)&&(n.settings={inTangents:Ns(e.settings.inTangents,Array),outTangents:Ns(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Uc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break;case pf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return hc;case this.InterpolantFactoryMethodBezier:return pf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;fc(this.settings)&&(y0(this.settings.inTangents,e),y0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Fx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let b=t[u+p];if(b!==t[f+p]||b!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,fc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};oi.prototype.ValueTypeName="";oi.prototype.TimeBufferType=Float32Array;oi.prototype.ValueBufferType=Float32Array;oi.prototype.DefaultInterpolation=xr;ps=class extends oi{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=br;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;Vo=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};Vo.prototype.ValueTypeName="color";ms=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};ms.prototype.ValueTypeName="number";zc=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},gs=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;bs=class extends oi{constructor(e,t,n){super(e,t,n)}};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=br;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;Xs=class extends oi{constructor(e,t,n,i){super(e,t,n,i)}};Xs.prototype.ValueTypeName="vector";Wo=class{constructor(e="",t=-1,n=[],i=Z0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=_i(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(n_(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(oi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Zv(l);l=_0(l,1,h),c=_0(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ms(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Oi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(M0(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!M0(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};Bc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xm=new Bc,Ci=class{constructor(e){this.manager=e!==void 0?e:xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";ls={},Mf=class extends Error{constructor(e,t){super(e),this.response=t}},Tr=class extends Ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Oi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:i});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ls[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,b=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:E,value:x})=>{if(E)g.close();else{b+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:p,loaded:b,total:d});for(let v=0,S=h.length;v<S;v++){let y=h[v];y.onProgress&&y.onProgress(M)}g.enqueue(x),_()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Mf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Oi.add(`file:${e}`,c);let h=ls[e];delete ls[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=ls[e];if(h===void 0)throw this.manager.itemError(e),c;delete ls[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},oa=new WeakMap,Hc=class extends Ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Oi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=oa.get(a);u===void 0&&(u=[],oa.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=pa("img");function l(){h(),t&&t(this);let u=oa.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}oa.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Oi.remove(`image:${e}`);let f=oa.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}oa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Oi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},qo=class extends Ci{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Hs,o=new Tr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):rt(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){let t=new Hs;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:bn,e.wrapT=t.wrapT!==void 0?t.wrapT:bn,e.magFilter=t.magFilter!==void 0?t.magFilter:bt,e.minFilter=t.minFilter!==void 0?t.minFilter:bt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=en),t.mipmapCount===1&&(e.minFilter=bt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},wr=class extends Ci{constructor(e){super(e)}load(e,t,n,i){let r=new yn,a=new Hc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Rr=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xo=class extends Rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uf=new Pe,E0=new R,S0=new R,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;E0.setFromMatrixPosition(e.matrixWorld),t.position.copy(E0),S0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){uf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===da||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lc=new R,cc=new $t,Hi=new R,Ko=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lc,cc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lc,cc,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lc,cc,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new R,T0=new ye,w0=new ye,rn=class extends Ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vr*2*Math.atan(Math.tan(mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,T0,w0),t.subVectors(w0,T0)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ef=class extends Sa{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=vr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},xs=class extends Rr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ef}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Sf=class extends Sa{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},Fn=class extends Rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ki=class extends Ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tf=class extends Sa{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ks=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},vs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},jo=class extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ff=new WeakMap,Yo=class extends Ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Oi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{ff.has(a)===!0?(i&&i(ff.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Oi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ff.set(l,c),Oi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Oi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},la=-90,ca=1,Oc=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new rn(la,ca,e,t);i.layers=this.layers,this.add(i);let r=new rn(la,ca,e,t);r.layers=this.layers,this.add(r);let a=new rn(la,ca,e,t);a.layers=this.layers,this.add(a);let o=new rn(la,ca,e,t);o.layers=this.layers,this.add(o);let l=new rn(la,ca,e,t);l.layers=this.layers,this.add(l);let c=new rn(la,ca,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Gc=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Qf="\\[\\]\\.:\\/",i_=new RegExp("["+Qf+"]","g"),ed="[^"+Qf+"]",s_="[^"+Qf.replace("\\.","")+"]",r_=/((?:WC+[\/:])*)/.source.replace("WC",ed),a_=/(WCOD+)?/.source.replace("WCOD",s_),o_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ed),l_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ed),c_=new RegExp("^"+r_+a_+o_+l_+"$"),h_=["material","materials","bones","map"],wf=class{constructor(e,t,n){let i=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(i_,"")}static parseTrackName(e){let t=c_.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);h_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=wf;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];bw=new Float32Array(1),R0=new Pe,Jo=class{constructor(e,t,n=0,i=1/0){this.ray=new Bs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return R0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R0),this}intersectObject(e,t=!0,n=[]){return Rf(e,this,n,t),n.sort(A0),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Rf(e[i],this,n,t);return n.sort(A0),n}};ad=class ad{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};ad.prototype.isMatrix2=!0;Af=ad;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Hm(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function d_(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];s.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function Yy(s,e,t,n,i,r){let a=new we(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let x=_.backgroundBlurriness>0;E=e.get(E,x)}return E}function p(_){let E=!1,x=d(_);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(_,E){let x=d(E);x&&(x.isCubeTexture||x.mapping===Qo)?(c===void 0&&(c=new Q(new He(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:Ir(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,v,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jy.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Om),c.material.toneMapped=Mt.getTransfer(x.colorSpace)!==Gt,(h!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Q(new st(2,2),new Et({name:"BackgroundMaterial",uniforms:Ir(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(x.colorSpace)!==Gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,E){_.getRGB(kh,$f(s)),t.buffers.color.setClear(kh.r,kh.g,kh.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,E=1){a.set(_),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:b,dispose:g}}function Jy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(I,D,H,C,U){let L=!1,B=u(I,C,H,D);r!==B&&(r=B,c(r.object)),L=d(I,C,H,U),L&&p(I,C,H,U),U!==null&&e.update(U,s.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,x(I,D,H,C),U!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,D,H,C){let U=C.wireframe===!0,L=n[D.id];L===void 0&&(L={},n[D.id]=L);let B=I.isInstancedMesh===!0?I.id:0,N=L[B];N===void 0&&(N={},L[B]=N);let z=N[H.id];z===void 0&&(z={},N[H.id]=z);let W=z[U];return W===void 0&&(W=f(l()),z[U]=W),W}function f(I){let D=[],H=[],C=[];for(let U=0;U<t;U++)D[U]=0,H[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:C,object:I,attributes:{},index:null}}function d(I,D,H,C){let U=r.attributes,L=D.attributes,B=0,N=H.getAttributes();for(let z in N)if(N[z].location>=0){let Y=U[z],ae=L[z];if(ae===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),Y===void 0||Y.attribute!==ae||ae&&Y.data!==ae.data)return!0;B++}return r.attributesNum!==B||r.index!==C}function p(I,D,H,C){let U={},L=D.attributes,B=0,N=H.getAttributes();for(let z in N)if(N[z].location>=0){let Y=L[z];Y===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));let ae={};ae.attribute=Y,Y&&Y.data&&(ae.data=Y.data),U[z]=ae,B++}r.attributes=U,r.attributesNum=B,r.index=C}function b(){let I=r.newAttributes;for(let D=0,H=I.length;D<H;D++)I[D]=0}function m(I){g(I,0)}function g(I,D){let H=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;H[I]=1,C[I]===0&&(s.enableVertexAttribArray(I),C[I]=1),U[I]!==D&&(s.vertexAttribDivisor(I,D),U[I]=D)}function _(){let I=r.newAttributes,D=r.enabledAttributes;for(let H=0,C=D.length;H<C;H++)D[H]!==I[H]&&(s.disableVertexAttribArray(H),D[H]=0)}function E(I,D,H,C,U,L,B){B===!0?s.vertexAttribIPointer(I,D,H,U,L):s.vertexAttribPointer(I,D,H,C,U,L)}function x(I,D,H,C){b();let U=C.attributes,L=H.getAttributes(),B=D.defaultAttributeValues;for(let N in L){let z=L[N];if(z.location>=0){let W=U[N];if(W===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let Y=W.normalized,ae=W.itemSize,he=e.get(W);if(he===void 0)continue;let ce=he.buffer,_e=he.type,$e=he.bytesPerElement,ne=_e===s.INT||_e===s.UNSIGNED_INT||W.gpuType===jc;if(W.isInterleavedBufferAttribute){let oe=W.data,Te=oe.stride,ke=W.offset;if(oe.isInstancedInterleavedBuffer){for(let de=0;de<z.locationSize;de++)g(z.location+de,oe.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let de=0;de<z.locationSize;de++)m(z.location+de);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let de=0;de<z.locationSize;de++)E(z.location+de,ae/z.locationSize,_e,Y,Te*$e,(ke+ae/z.locationSize*de)*$e,ne)}else{if(W.isInstancedBufferAttribute){for(let oe=0;oe<z.locationSize;oe++)g(z.location+oe,W.meshPerAttribute);I.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let oe=0;oe<z.locationSize;oe++)m(z.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let oe=0;oe<z.locationSize;oe++)E(z.location+oe,ae/z.locationSize,_e,Y,ae*$e,ae/z.locationSize*oe*$e,ne)}}else if(B!==void 0){let Y=B[N];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(z.location,Y);break;case 3:s.vertexAttrib3fv(z.location,Y);break;case 4:s.vertexAttrib4fv(z.location,Y);break;default:s.vertexAttrib1fv(z.location,Y)}}}}_()}function M(){w();for(let I in n){let D=n[I];for(let H in D){let C=D[H];for(let U in C){let L=C[U];for(let B in L)h(L[B].object),delete L[B];delete C[U]}}delete n[I]}}function v(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let H in D){let C=D[H];for(let U in C){let L=C[U];for(let B in L)h(L[B].object),delete L[B];delete C[U]}}delete n[I.id]}function S(I){for(let D in n){let H=n[D];for(let C in H){let U=H[C];if(U[I.id]===void 0)continue;let L=U[I.id];for(let B in L)h(L[B].object),delete L[B];delete U[I.id]}}}function y(I){for(let D in n){let H=n[D],C=I.isInstancedMesh===!0?I.id:0,U=H[C];if(U!==void 0){for(let L in U){let B=U[L];for(let N in B)h(B[N].object),delete B[N];delete U[L]}delete H[C],Object.keys(H).length===0&&delete n[D]}}}function w(){P(),a=!0,r!==i&&(r=i,c(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfObject:y,releaseStatesOfProgram:S,initAttributes:b,enableAttribute:m,disableUnusedAttributes:_}}function Zy(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $y(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==gi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let y=S===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==En&&S!==qn&&!y&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),v=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:x,maxSamples:M,samples:v}}function Qy(s){let e=this,t=null,n=0,i=!1,r=!1,a=new pi,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,E=_*4,x=g.clippingState||null;l.value=x,x=h(p,f,E,d);for(let M=0;M!==E;++M)x[M]=t[M];g.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,p!==!0||m===null){let g=d+b*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,x=d;E!==b;++E,x+=4)a.copy(u[E]).applyMatrix4(_,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function sM(s){let e=[],t=[],n=s,i=s-La+1+eM;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let g=0;g<u;g++){let _=g%3*2/3-1,E=g>2?0:-1,x=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];p.set(x,d*f*g);for(let M=0;M<f;M++){let v=h[M*2]*2-1,S=h[M*2+1]*2-1;g===0?kr.set(1,S,v):g===1?kr.set(-v,1,-S):g===2?kr.set(-v,S,1):g===3?kr.set(-1,S,-v):g===4?kr.set(-v,-1,S):kr.set(v,S,-1),kr.toArray(b,(g*f+M)*d)}}let m=new ht;m.setAttribute("position",new ct(p,d)),m.setAttribute("outputDirection",new ct(b,d)),t.push(new Q(m,null)),n>La&&n--}return{lodMeshes:t,sizeLods:e}}function _m(s,e,t){let n=new an(s,e,t);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function rM(s,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function aM(s,e,t){return new Et({name:"SphericalGaussianBlur",defines:{SAMPLES:tM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function ym(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Mm(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Uh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function oM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===wa||d===Xc)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let b=new Fh(p.height);return b.fromEquirectangularTexture(s,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,p=d===wa||d===Xc,b=d===Ys||d===Cr;if(p||b){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Dr(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return p&&_&&_.height>0||b&&_&&l(_)?(n===null&&(n=new Dr(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===wa?f.mapping=Ys:d===Xc&&(f.mapping=Cr),f}function l(f){let d=0,p=6;for(let b=0;b<p;b++)f[b]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function lM(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&gr("WebGLRenderer: "+n+" extension not supported."),i}}}function cM(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let _=d.array;b=d.version;for(let E=0,x=_.length;E<x;E+=3){let M=_[E+0],v=_[E+1],S=_[E+2];f.push(M,v,v,S,S,M)}}else{let _=p.array;b=p.version;for(let E=0,x=_.length/3-1;E<x;E+=3){let M=E+0,v=E+1,S=E+2;f.push(M,v,v,S,S,M)}}let m=new(p.count>=65535?So:Eo)(f,1);m.version=b;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function hM(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let b=0;for(let m=0;m<d;m++)b+=f[m];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function uM(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fM(s,e,t){let n=new WeakMap,i=new Bt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let w=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),b===!0&&(E=3);let x=o.attributes.position.count*E,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let v=new Float32Array(x*M*4*u),S=new yo(v,x,M,u);S.type=qn,S.needsUpdate=!0;let y=E*4;for(let P=0;P<u;P++){let I=m[P],D=g[P],H=_[P],C=x*M*4*P;for(let U=0;U<I.count;U++){let L=U*y;d===!0&&(i.fromBufferAttribute(I,U),v[C+L+0]=i.x,v[C+L+1]=i.y,v[C+L+2]=i.z,v[C+L+3]=0),p===!0&&(i.fromBufferAttribute(D,U),v[C+L+4]=i.x,v[C+L+5]=i.y,v[C+L+6]=i.z,v[C+L+7]=0),b===!0&&(i.fromBufferAttribute(H,U),v[C+L+8]=i.x,v[C+L+9]=i.y,v[C+L+10]=i.z,v[C+L+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new ye(x,M)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function dM(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function mM(s,e,t,n,i,r){let a=new an(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ht;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let h=new Ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Q(c,h),f=new Ki(-1,1,1,-1,0,1),d=null,p=null,b=!1,m,g=null,_=[],E=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let v=0;v<_.length;v++){let S=_[v];S.setSize&&S.setSize(x,M)}},this.setEffects=function(x){_=x,E=_.length>0&&_[0].isRenderPass===!0;let M=a.width,v=a.height;_.length>0&&o===null&&(o=new an(M,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new an(M,v,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<_.length;S++){let y=_[S];y.setSize&&y.setSize(M,v)}},this.begin=function(x,M){if(b||x.toneMapping===li&&_.length===0)return!1;if(g=M,M!==null){let v=M.width,S=M.height;(a.width!==v||a.height!==S)&&this.setSize(v,S)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=li,!0},this.hasRenderPass=function(){return E},this.end=function(x,M){x.toneMapping=m,b=!0;let v=a,S=o;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(x,S,v,M),w.needsSwap!==!1&&(v=S,S=S===o?l:o))}if(d!==x.outputColorSpace||p!==x.toneMapping){d=x.outputColorSpace,p=x.toneMapping,h.defines={},Mt.getTransfer(d)===Gt&&(h.defines.SRGB_TRANSFER="");let y=pM[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(g),x.render(u,f),g=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Da(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Em[i];if(r===void 0&&(r=new Float32Array(i),Em[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function zh(s,e){let t=Sm[e];t===void 0&&(t=new Int32Array(e),Sm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function gM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function xM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function vM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function _M(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Rm.set(n),s.uniformMatrix2fv(this.addr,!1,Rm),Tn(t,n)}}function yM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;wm.set(n),s.uniformMatrix3fv(this.addr,!1,wm),Tn(t,n)}}function MM(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;Tm.set(n),s.uniformMatrix4fv(this.addr,!1,Tm),Tn(t,n)}}function EM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function TM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function wM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function RM(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function AM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function CM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function PM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function IM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(pd.compareFunction=t.isReversedDepthBuffer()?Lh:Ih,r=pd):r=Gm,t.setTexture2D(e||r,i)}function LM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Wm,i)}function kM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||qm,i)}function DM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Vm,i)}function FM(s){switch(s){case 5126:return gM;case 35664:return bM;case 35665:return xM;case 35666:return vM;case 35674:return _M;case 35675:return yM;case 35676:return MM;case 5124:case 35670:return EM;case 35667:case 35671:return SM;case 35668:case 35672:return TM;case 35669:case 35673:return wM;case 5125:return RM;case 36294:return AM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return IM;case 35679:case 36299:case 36307:return LM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return DM}}function NM(s,e){s.uniform1fv(this.addr,e)}function UM(s,e){let t=Da(e,this.size,2);s.uniform2fv(this.addr,t)}function zM(s,e){let t=Da(e,this.size,3);s.uniform3fv(this.addr,t)}function BM(s,e){let t=Da(e,this.size,4);s.uniform4fv(this.addr,t)}function HM(s,e){let t=Da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OM(s,e){let t=Da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function GM(s,e){let t=Da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function VM(s,e){s.uniform1iv(this.addr,e)}function WM(s,e){s.uniform2iv(this.addr,e)}function qM(s,e){s.uniform3iv(this.addr,e)}function XM(s,e){s.uniform4iv(this.addr,e)}function KM(s,e){s.uniform1uiv(this.addr,e)}function jM(s,e){s.uniform2uiv(this.addr,e)}function YM(s,e){s.uniform3uiv(this.addr,e)}function JM(s,e){s.uniform4uiv(this.addr,e)}function ZM(s,e,t){let n=this.cache,i=e.length,r=zh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=pd:a=Gm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function $M(s,e,t){let n=this.cache,i=e.length,r=zh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Wm,r[a])}function QM(s,e,t){let n=this.cache,i=e.length,r=zh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||qm,r[a])}function eE(s,e,t){let n=this.cache,i=e.length,r=zh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Vm,r[a])}function tE(s){switch(s){case 5126:return NM;case 35664:return UM;case 35665:return zM;case 35666:return BM;case 35674:return HM;case 35675:return OM;case 35676:return GM;case 5124:case 35670:return VM;case 35667:case 35671:return WM;case 35668:case 35672:return qM;case 35669:case 35673:return XM;case 5125:return KM;case 36294:return jM;case 36295:return YM;case 36296:return JM;case 35678:case 36198:case 36298:case 36306:case 35682:return ZM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return eE}}function Am(s,e){s.seq.push(e),s.map[e.id]=e}function nE(s,e,t){let n=s.name,i=n.length;for(fd.lastIndex=0;;){let r=fd.exec(n),a=fd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Am(t,c===void 0?new md(o,s,e):new gd(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new bd(o),Am(t,u)),t=u}}}function Cm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function rE(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function aE(s){Mt._getMatrix(Pm,Mt.workingColorSpace,s);let e=`mat3( ${Pm.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(s)){case vo:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Im(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+rE(s.getShaderSource(e),o)}else return r}function oE(s,e){let t=aE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cE(s,e){let t=lE[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hE(){Mt.getLuminanceCoefficients(Dh);let s=Dh.x.toFixed(4),e=Dh.y.toFixed(4),t=Dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function fE(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dE(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function hl(s){return s!==""}function Lm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function xd(s){return s.replace(pE,gE)}function gE(s,e){let t=_t[e];if(t===void 0){let n=mE.get(e);if(n!==void 0)t=_t[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xd(t)}function Dm(s){return s.replace(bE,xE)}function xE(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _E(s){return vE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function ME(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":yE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}function SE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":EE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function wE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":TE[s.combine]||"ENVMAP_BLENDING_NONE"}function RE(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function AE(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_E(t),c=ME(t),h=SE(t),u=wE(t),f=RE(t),d=uE(t),p=fE(r),b=i.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(hl).join(`
`),g.length>0&&(g+=`
`)):(m=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),g=[Fm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?_t.tonemapping_pars_fragment:"",t.toneMapping!==li?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),hE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hl).join(`
`)),a=xd(a),a=Lm(a,t),a=km(a,t),o=xd(o),o=Lm(o,t),o=km(o,t),a=Dm(a),o=Dm(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Yf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=_+m+a,x=_+g+o,M=Cm(i,i.VERTEX_SHADER,E),v=Cm(i,i.FRAGMENT_SHADER,x);i.attachShader(b,M),i.attachShader(b,v),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function S(I){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(b)||"",H=i.getShaderInfoLog(M)||"",C=i.getShaderInfoLog(v)||"",U=D.trim(),L=H.trim(),B=C.trim(),N=!0,z=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,M,v);else{let W=Im(i,M,"vertex"),Y=Im(i,v,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+W+`
`+Y)}else U!==""?Qe("WebGLProgram: Program Info Log:",U):(L===""||B==="")&&(z=!1);z&&(I.diagnostics={runnable:N,programLog:U,vertexShader:{log:L,prefix:m},fragmentShader:{log:B,prefix:g}})}i.deleteShader(M),i.deleteShader(v),y=new ka(i,b),w=dE(i,b)}let y;this.getUniforms=function(){return y===void 0&&S(this),y};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(b,iE)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=v,this}function PE(s){return s===Zs||s===sl||s===rl}function IE(s,e,t,n,i,r){let a=new ba,o=new vd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function b(y,w,P,I,D,H){let C=I.fog,U=D.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||L,B),z=N&&N.mapping===Qo?N.image.height:null,W=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Qe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ae=Y!==void 0?Y.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let ce,_e,$e,ne;if(W){let Ae=Ji[W];ce=Ae.vertexShader,_e=Ae.fragmentShader}else{ce=y.vertexShader,_e=y.fragmentShader;let Ae=o.getVertexShaderStage(y),qe=o.getFragmentShaderStage(y);o.update(y,Ae,qe),$e=Ae.id,ne=qe.id}let oe=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,de=D.isBatchedMesh===!0,Oe=!!y.map,gt=!!y.matcap,le=!!N,fe=!!y.aoMap,ve=!!y.lightMap,be=!!y.bumpMap&&y.wireframe===!1,Se=!!y.normalMap,je=!!y.displacementMap,ze=!!y.emissiveMap,et=!!y.metalnessMap,ie=!!y.roughnessMap,F=y.anisotropy>0,Fe=y.clearcoat>0,Xe=y.dispersion>0,k=y.retroreflectivity>0,T=y.iridescence>0,j=y.sheen>0,Z=y.transmission>0,V=F&&!!y.anisotropyMap,q=Fe&&!!y.clearcoatMap,$=Fe&&!!y.clearcoatNormalMap,K=Fe&&!!y.clearcoatRoughnessMap,J=T&&!!y.iridescenceMap,me=T&&!!y.iridescenceThicknessMap,Ee=j&&!!y.sheenColorMap,pe=j&&!!y.sheenRoughnessMap,xe=!!y.specularMap,Ce=!!y.specularColorMap,Ze=!!y.specularIntensityMap,Ie=Z&&!!y.transmissionMap,O=Z&&!!y.thicknessMap,Me=!!y.gradientMap,ue=!!y.alphaMap,Re=y.alphaTest>0,De=!!y.alphaHash,ge=!!y.extensions,G=li;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(G=s.toneMapping);let se={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:ce,fragmentShader:_e,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:de,batchingColor:de&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Oe,matcap:gt,envMap:le,envMapMode:le&&N.mapping,envMapCubeUVHeight:z,aoMap:fe,lightMap:ve,bumpMap:be,normalMap:Se,displacementMap:je,emissiveMap:ze,normalMapObjectSpace:Se&&y.normalMapType===Q0,normalMapTangentSpace:Se&&y.normalMapType===ol,packedNormalMap:Se&&y.normalMapType===ol&&PE(y.normalMap.format),metalnessMap:et,roughnessMap:ie,anisotropy:F,anisotropyMap:V,clearcoat:Fe,clearcoatMap:q,clearcoatNormalMap:$,clearcoatRoughnessMap:K,dispersion:Xe,retroreflection:k,iridescence:T,iridescenceMap:J,iridescenceThicknessMap:me,sheen:j,sheenColorMap:Ee,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:Ce,specularIntensityMap:Ze,transmission:Z,transmissionMap:Ie,thicknessMap:O,gradientMap:Me,opaque:y.transparent===!1&&y.blending===js&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Re,alphaHash:De,combine:y.combine,mapUv:Oe&&p(y.map.channel),aoMapUv:fe&&p(y.aoMap.channel),lightMapUv:ve&&p(y.lightMap.channel),bumpMapUv:be&&p(y.bumpMap.channel),normalMapUv:Se&&p(y.normalMap.channel),displacementMapUv:je&&p(y.displacementMap.channel),emissiveMapUv:ze&&p(y.emissiveMap.channel),metalnessMapUv:et&&p(y.metalnessMap.channel),roughnessMapUv:ie&&p(y.roughnessMap.channel),anisotropyMapUv:V&&p(y.anisotropyMap.channel),clearcoatMapUv:q&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:$&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:me&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:pe&&p(y.sheenRoughnessMap.channel),specularMapUv:xe&&p(y.specularMap.channel),specularColorMapUv:Ce&&p(y.specularColorMap.channel),specularIntensityMapUv:Ze&&p(y.specularIntensityMap.channel),transmissionMapUv:Ie&&p(y.transmissionMap.channel),thicknessMapUv:O&&p(y.thicknessMap.channel),alphaMapUv:ue&&p(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Se||F),vertexNormals:!!U.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Oe||ue),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||U.attributes.normal===void 0&&Se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:he,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:G,decodeVideoTexture:Oe&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===Gt,decodeVideoTextureEmissive:ze&&y.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(y.emissiveMap.colorSpace)===Gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ct,flipSided:y.side===Pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ge&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&y.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)w.push(P),w.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(g(w,y),_(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let w=d[y.type],P;if(w){let I=Ji[w];P=Lr.clone(I.uniforms)}else P=y.uniforms;return P}function x(y,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new AE(s,w,y,i),c.push(P),h.set(w,P)),P}function M(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function v(y){o.remove(y)}function S(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:M,releaseShaderCache:v,programs:c,dispose:S}}function LE(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function kE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,b,m,g){let _=s[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:m,group:g},s[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=a(f),_.groupOrder=b,_.renderOrder=f.renderOrder,_.z=m,_.group=g),e++,_}function l(f,d,p,b,m,g,_){_.reversedDepth===!0&&(m=-m);let E=o(f,d,p,b,m,g);p.transmission>0?n.push(E):p.transparent===!0?i.push(E):t.push(E)}function c(f,d,p,b,m,g){let _=o(f,d,p,b,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function h(f,d){t.length>1&&t.sort(f||kE),n.length>1&&n.sort(d||Nm),i.length>1&&i.sort(d||Nm)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function DE(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Um,s.set(n,[a])):i>=r.length?(a=new Um,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function FE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new we};break;case"SpotLight":t={position:new R,direction:new R,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function NE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function zE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function BE(s){let e=new FE,t=NE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Pe,a=new Pe;function o(c){let h=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let d=0,p=0,b=0,m=0,g=0,_=0,E=0,x=0,M=0,v=0,S=0,y=0,w=0,P=0;c.sort(zE);for(let D=0,H=c.length;D<H;D++){let C=c[D],U=C.color,L=C.intensity,B=C.distance,N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zs?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=U.r*L,u+=U.g*L,f+=U.b*L;else if(C.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(C.sh.coefficients[z],L);P++}else if(C.isSunLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,Y=t.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=N;let ae=W.getViewportCount();for(let he=0;he<ae;he++)n.sunShadowMatrix[b+he]=W.getMatrix(he),n.sunShadowCascade[b+he]=W._cascadeData[he];b+=ae,p++}n.sun[d]=z,d++}else if(C.isDirectionalLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let W=C.shadow,Y=t.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=z,m++}else if(C.isSpotLight){let z=e.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(U).multiplyScalar(L),z.distance=B,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,n.spot[_]=z;let W=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,W.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,C.castShadow){let Y=t.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=N,S++}_++}else if(C.isRectAreaLight){let z=e.get(C);z.color.copy(U).multiplyScalar(L),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),n.rectArea[E]=z,E++}else if(C.isPointLight){let z=e.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){let W=C.shadow,Y=t.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=z,g++}else if(C.isHemisphereLight){let z=e.get(C);z.skyColor.copy(C.color).multiplyScalar(L),z.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[x]=z,x++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==E||I.hemiLength!==x||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==v||I.numSpotShadows!==S||I.numSpotMaps!==y||I.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=_,n.rectArea.length=E,n.point.length=g,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,I.sunLength=d,I.directionalLength=m,I.pointLength=g,I.spotLength=_,I.rectAreaLength=E,I.hemiLength=x,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=v,I.numSpotShadows=S,I.numSpotMaps=y,I.numLightProbes=P,n.version=UE++)}function l(c,h){let u=0,f=0,d=0,p=0,b=0,m=0,g=h.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){let x=c[_];if(x.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(x.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),p++}else if(x.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:n}}function zm(s){let e=new BE(s),t=[],n=[],i=[];function r(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function HE(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new zm(s),e.set(i,[o])):r>=a.length?(o=new zm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function qE(s,e,t){let n=new Os,i=new ye,r=new ye,a=new Bt,o=new Lc,l=new kc,c={},h=t.maxTextureSize,u={[$n]:Pn,[Pn]:$n,[Ct]:Ct},f=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:OE,fragmentShader:GE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ht;p.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Q(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let g=this.type;this.render=function(v,S,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===I0&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let w=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),D=s.state;D.setBlending(ji),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=g!==this.type;H&&S.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=v.length;C<U;C++){let L=v[C],B=L.shadow;if(B===void 0){Qe("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let N=B.getFrameExtents();i.multiply(N),r.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/N.x),i.x=r.x*N.x,B.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/N.y),i.y=r.y*N.y,B.mapSize.y=r.y));let z=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=z,B.map===null||H===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ta){if(L.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new an(i.x,i.y,{format:Zs,type:xn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new Vs(i.x,i.y,qn),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=Gi,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn}else L.isPointLight?(B.map=new Fh(i.x),B.map.depthTexture=new Tc(i.x,Pi)):(B.map=new an(i.x,i.y),B.map.depthTexture=new Vs(i.x,i.y,Pi)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=Gi,this.type===Ar?(B.map.depthTexture.compareFunction=z?Lh:Ih,B.map.depthTexture.minFilter=bt,B.map.depthTexture.magFilter=bt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=fn,B.map.depthTexture.magFilter=fn);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==i.x||B.map.height!==i.y)&&B.map.setSize(i.x,i.y);let W=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();L.isPointLight!==!0&&B.updateMatrices(L,y);for(let Y=0;Y<W;Y++){let ae=B.getCamera(Y);if(L.isPointLight){let he=B.camera,ce=B.matrix,_e=L.distance||he.far;_e!==he.far&&(he.far=_e,he.updateProjectionMatrix()),cl.setFromMatrixPosition(L.matrixWorld),he.position.copy(cl),dd.copy(he.position),dd.add(VE[Y]),he.up.copy(WE[Y]),he.lookAt(dd),he.updateMatrixWorld(),ce.makeTranslation(-cl.x,-cl.y,-cl.z),Bm.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Bm,he.coordinateSystem,he.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,Y),s.clear();else{Y===0&&(s.setRenderTarget(B.map),s.clear());let he=B.getViewport(Y);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),D.viewport(a)}n=B.getFrustum(Y),x(S,y,ae,L,this.type)}B.isPointLightShadow!==!0&&this.type===Ta&&_(B,y),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(w,P,I)};function _(v,S){let y=e.update(b);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new an(i.x,i.y,{format:Zs,type:xn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),f.uniforms.shadow_pass.value=v.map.depthTexture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(S,null,y,f,b,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(S,null,y,d,b,null)}function E(v,S,y,w){let P=null,I=y.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)P=I;else if(P=y.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let D=P.uuid,H=S.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let U=C[H];U===void 0&&(U=P.clone(),C[H]=U,S.addEventListener("dispose",M)),P=U}if(P.visible=S.visible,P.wireframe=S.wireframe,w===Ta?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:u[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let D=s.properties.get(P);D.light=y}return P}function x(v,S,y,w,P){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===Ta)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,v.matrixWorld);let H=e.update(v),C=v.material;if(Array.isArray(C)){let U=H.groups;for(let L=0,B=U.length;L<B;L++){let N=U[L],z=C[N.materialIndex];if(z&&z.visible){let W=E(v,z,w,P);v.onBeforeShadow(s,v,S,y,H,W,N),s.renderBufferDirect(y,null,H,W,v,N),v.onAfterShadow(s,v,S,y,H,W,N)}}}else if(C.visible){let U=E(v,C,w,P);v.onBeforeShadow(s,v,S,y,H,U,null),s.renderBufferDirect(y,null,H,U,v,null),v.onAfterShadow(s,v,S,y,H,U,null)}}let D=v.children;for(let H=0,C=D.length;H<C;H++)x(D[H],S,y,w,P)}function M(v){v.target.removeEventListener("dispose",M);for(let y in c){let w=c[y],P=v.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function XE(s,e){function t(){let O=!1,Me=new Bt,ue=null,Re=new Bt(0,0,0,0);return{setMask:function(De){ue!==De&&!O&&(s.colorMask(De,De,De,De),ue=De)},setLocked:function(De){O=De},setClear:function(De,ge,G,se,Ae){Ae===!0&&(De*=se,ge*=se,G*=se),Me.set(De,ge,G,se),Re.equals(Me)===!1&&(s.clearColor(De,ge,G,se),Re.copy(Me))},reset:function(){O=!1,ue=null,Re.set(-1,0,0,0)}}}function n(){let O=!1,Me=!1,ue=null,Re=null,De=null;return{setReversed:function(ge){if(Me!==ge){let G=e.get("EXT_clip_control");ge?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT),Me=ge;let se=De;De=null,this.setClear(se)}},getReversed:function(){return Me},setTest:function(ge){ge?oe(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(ge){ue!==ge&&!O&&(s.depthMask(ge),ue=ge)},setFunc:function(ge){if(Me&&(ge=hm[ge]),Re!==ge){switch(ge){case dc:s.depthFunc(s.NEVER);break;case pc:s.depthFunc(s.ALWAYS);break;case mc:s.depthFunc(s.LESS);break;case ua:s.depthFunc(s.LEQUAL);break;case gc:s.depthFunc(s.EQUAL);break;case bc:s.depthFunc(s.GEQUAL);break;case xc:s.depthFunc(s.GREATER);break;case vc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=ge}},setLocked:function(ge){O=ge},setClear:function(ge){De!==ge&&(De=ge,Me&&(ge=1-ge),s.clearDepth(ge))},reset:function(){O=!1,ue=null,Re=null,De=null,Me=!1}}}function i(){let O=!1,Me=null,ue=null,Re=null,De=null,ge=null,G=null,se=null,Ae=null;return{setTest:function(qe){O||(qe?oe(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(qe){Me!==qe&&!O&&(s.stencilMask(qe),Me=qe)},setFunc:function(qe,St,Ht){(ue!==qe||Re!==St||De!==Ht)&&(s.stencilFunc(qe,St,Ht),ue=qe,Re=St,De=Ht)},setOp:function(qe,St,Ht){(ge!==qe||G!==St||se!==Ht)&&(s.stencilOp(qe,St,Ht),ge=qe,G=St,se=Ht)},setLocked:function(qe){O=qe},setClear:function(qe){Ae!==qe&&(s.clearStencil(qe),Ae=qe)},reset:function(){O=!1,Me=null,ue=null,Re=null,De=null,ge=null,G=null,se=null,Ae=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,_=null,E=null,x=null,M=null,v=null,S=null,y=new we(0,0,0),w=0,P=!1,I=null,D=null,H=null,C=null,U=null,L=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,N=0,z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=N>=1):z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=N>=2);let W=null,Y={},ae=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),ce=new Bt().fromArray(ae),_e=new Bt().fromArray(he);function $e(O,Me,ue,Re){let De=new Uint8Array(4),ge=s.createTexture();s.bindTexture(O,ge),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let G=0;G<ue;G++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Re,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Me+G,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return ge}let ne={};ne[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(ua),be(!1),Se(Cf),oe(s.CULL_FACE),fe(ji);function oe(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Te(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function ke(O,Me){return f[O]!==Me?(s.bindFramebuffer(O,Me),f[O]=Me,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Me),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function de(O,Me){let ue=p,Re=!1;if(O){ue=d.get(Me),ue===void 0&&(ue=[],d.set(Me,ue));let De=O.textures;if(ue.length!==De.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,G=De.length;ge<G;ge++)ue[ge]=s.COLOR_ATTACHMENT0+ge;ue.length=De.length,Re=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Re=!0);Re&&s.drawBuffers(ue)}function Oe(O){return b!==O?(s.useProgram(O),b=O,!0):!1}let gt={[_s]:s.FUNC_ADD,[L0]:s.FUNC_SUBTRACT,[k0]:s.FUNC_REVERSE_SUBTRACT};gt[D0]=s.MIN,gt[F0]=s.MAX;let le={[N0]:s.ZERO,[Zo]:s.ONE,[U0]:s.SRC_COLOR,[Lf]:s.SRC_ALPHA,[V0]:s.SRC_ALPHA_SATURATE,[O0]:s.DST_COLOR,[B0]:s.DST_ALPHA,[z0]:s.ONE_MINUS_SRC_COLOR,[kf]:s.ONE_MINUS_SRC_ALPHA,[G0]:s.ONE_MINUS_DST_COLOR,[H0]:s.ONE_MINUS_DST_ALPHA,[W0]:s.CONSTANT_COLOR,[q0]:s.ONE_MINUS_CONSTANT_COLOR,[X0]:s.CONSTANT_ALPHA,[K0]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(O,Me,ue,Re,De,ge,G,se,Ae,qe){if(O===ji){m===!0&&(Te(s.BLEND),m=!1);return}if(m===!1&&(oe(s.BLEND),m=!0),O!==Wc){if(O!==g||qe!==P){if((_!==_s||M!==_s)&&(s.blendEquation(s.FUNC_ADD),_=_s,M=_s),qe)switch(O){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFunc(s.ONE,s.ONE);break;case Pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case If:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rt("WebGLState: Invalid blending: ",O);break}else switch(O){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case kt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Pf:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",O);break}E=null,x=null,v=null,S=null,y.set(0,0,0),w=0,g=O,P=qe}return}De=De||Me,ge=ge||ue,G=G||Re,(Me!==_||De!==M)&&(s.blendEquationSeparate(gt[Me],gt[De]),_=Me,M=De),(ue!==E||Re!==x||ge!==v||G!==S)&&(s.blendFuncSeparate(le[ue],le[Re],le[ge],le[G]),E=ue,x=Re,v=ge,S=G),(se.equals(y)===!1||Ae!==w)&&(s.blendColor(se.r,se.g,se.b,Ae),y.copy(se),w=Ae),g=O,P=!1}function ve(O,Me){O.side===Ct?Te(s.CULL_FACE):oe(s.CULL_FACE);let ue=O.side===Pn;Me&&(ue=!ue),be(ue),O.blending===js&&O.transparent===!1?fe(ji):fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let Re=O.stencilWrite;o.setTest(Re),Re&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ze(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(O){I!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),I=O)}function Se(O){O!==C0?(oe(s.CULL_FACE),O!==D&&(O===Cf?s.cullFace(s.BACK):O===P0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),D=O}function je(O){O!==H&&(B&&s.lineWidth(O),H=O)}function ze(O,Me,ue){O?(oe(s.POLYGON_OFFSET_FILL),(C!==Me||U!==ue)&&(C=Me,U=ue,a.getReversed()&&(Me=-Me),s.polygonOffset(Me,ue))):Te(s.POLYGON_OFFSET_FILL)}function et(O){O?oe(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function ie(O){O===void 0&&(O=s.TEXTURE0+L-1),W!==O&&(s.activeTexture(O),W=O)}function F(O,Me,ue){ue===void 0&&(W===null?ue=s.TEXTURE0+L-1:ue=W);let Re=Y[ue];Re===void 0&&(Re={type:void 0,texture:void 0},Y[ue]=Re),(Re.type!==O||Re.texture!==Me)&&(W!==ue&&(s.activeTexture(ue),W=ue),s.bindTexture(O,Me||ne[O]),Re.type=O,Re.texture=Me)}function Fe(){let O=Y[W];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Xe(){try{s.compressedTexImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function T(){try{s.texSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function j(){try{s.texSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function Z(){try{s.compressedTexSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function V(){try{s.compressedTexSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function q(){try{s.texStorage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function $(){try{s.texStorage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function K(){try{s.texImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function J(){try{s.texImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function me(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function Ee(O,Me){u[O]!==Me&&(s.pixelStorei(O,Me),u[O]=Me)}function pe(O){ce.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function xe(O){_e.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),_e.copy(O))}function Ce(O,Me){let ue=c.get(Me);ue===void 0&&(ue=new WeakMap,c.set(Me,ue));let Re=ue.get(O);Re===void 0&&(Re=s.getUniformBlockIndex(Me,O.name),ue.set(O,Re))}function Ze(O,Me){let Re=c.get(Me).get(O);l.get(Me)!==Re&&(s.uniformBlockBinding(Me,Re,O.__bindingPointIndex),l.set(Me,Re))}function Ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,Y={},f={},d=new WeakMap,p=[],b=null,m=!1,g=null,_=null,E=null,x=null,M=null,v=null,S=null,y=new we(0,0,0),w=0,P=!1,I=null,D=null,H=null,C=null,U=null,ce.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:ke,drawBuffers:de,useProgram:Oe,setBlending:fe,setMaterial:ve,setFlipSided:be,setCullFace:Se,setLineWidth:je,setPolygonOffset:ze,setScissorTest:et,activeTexture:ie,bindTexture:F,unbindTexture:Fe,compressedTexImage2D:Xe,compressedTexImage3D:k,texImage2D:K,texImage3D:J,pixelStorei:Ee,getParameter:me,updateUBOMapping:Ce,uniformBlockBinding:Ze,texStorage2D:q,texStorage3D:$,texSubImage2D:T,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:V,scissor:pe,viewport:xe,reset:Ie}}function KE(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,T){return p?new OffscreenCanvas(k,T):pa("canvas")}function m(k,T,j){let Z=1,V=Xe(k);if((V.width>j||V.height>j)&&(Z=j/Math.max(V.width,V.height)),Z<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){let q=Math.floor(Z*V.width),$=Math.floor(Z*V.height);f===void 0&&(f=b(q,$));let K=T?b(q,$):f;return K.width=q,K.height=$,K.getContext("2d").drawImage(k,0,0,q,$),Qe("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+q+"x"+$+")."),K}else return"data"in k&&Qe("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),k;return k}function g(k){return k.generateMipmaps}function _(k){s.generateMipmap(k)}function E(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(k,T,j,Z,V,q=!1){if(k!==null){if(s[k]!==void 0)return s[k];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let $;Z&&($=e.get("EXT_texture_norm16"),$||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===s.RED&&(j===s.FLOAT&&(K=s.R32F),j===s.HALF_FLOAT&&(K=s.R16F),j===s.UNSIGNED_BYTE&&(K=s.R8),j===s.UNSIGNED_SHORT&&$&&(K=$.R16_EXT),j===s.SHORT&&$&&(K=$.R16_SNORM_EXT)),T===s.RED_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.R8UI),j===s.UNSIGNED_SHORT&&(K=s.R16UI),j===s.UNSIGNED_INT&&(K=s.R32UI),j===s.BYTE&&(K=s.R8I),j===s.SHORT&&(K=s.R16I),j===s.INT&&(K=s.R32I)),T===s.RG&&(j===s.FLOAT&&(K=s.RG32F),j===s.HALF_FLOAT&&(K=s.RG16F),j===s.UNSIGNED_BYTE&&(K=s.RG8),j===s.UNSIGNED_SHORT&&$&&(K=$.RG16_EXT),j===s.SHORT&&$&&(K=$.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.RG8UI),j===s.UNSIGNED_SHORT&&(K=s.RG16UI),j===s.UNSIGNED_INT&&(K=s.RG32UI),j===s.BYTE&&(K=s.RG8I),j===s.SHORT&&(K=s.RG16I),j===s.INT&&(K=s.RG32I)),T===s.RGB_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.RGB8UI),j===s.UNSIGNED_SHORT&&(K=s.RGB16UI),j===s.UNSIGNED_INT&&(K=s.RGB32UI),j===s.BYTE&&(K=s.RGB8I),j===s.SHORT&&(K=s.RGB16I),j===s.INT&&(K=s.RGB32I)),T===s.RGBA_INTEGER&&(j===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),j===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),j===s.UNSIGNED_INT&&(K=s.RGBA32UI),j===s.BYTE&&(K=s.RGBA8I),j===s.SHORT&&(K=s.RGBA16I),j===s.INT&&(K=s.RGBA32I)),T===s.RGB&&(j===s.UNSIGNED_SHORT&&$&&(K=$.RGB16_EXT),j===s.SHORT&&$&&(K=$.RGB16_SNORM_EXT),j===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),j===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),T===s.RGBA){let J=q?vo:Mt.getTransfer(V);j===s.FLOAT&&(K=s.RGBA32F),j===s.HALF_FLOAT&&(K=s.RGBA16F),j===s.UNSIGNED_BYTE&&(K=J===Gt?s.SRGB8_ALPHA8:s.RGBA8),j===s.UNSIGNED_SHORT&&$&&(K=$.RGBA16_EXT),j===s.SHORT&&$&&(K=$.RGBA16_SNORM_EXT),j===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),j===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(k,T){let j;return k?T===null||T===Pi||T===Ca?j=s.DEPTH24_STENCIL8:T===qn?j=s.DEPTH32F_STENCIL8:T===Aa&&(j=s.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pi||T===Ca?j=s.DEPTH_COMPONENT24:T===qn?j=s.DEPTH_COMPONENT32F:T===Aa&&(j=s.DEPTH_COMPONENT16),j}function v(k,T){return g(k)===!0||k.isFramebufferTexture&&k.minFilter!==fn&&k.minFilter!==bt?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function S(k){let T=k.target;T.removeEventListener("dispose",S),w(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function y(k){let T=k.target;T.removeEventListener("dispose",y),I(T)}function w(k){let T=n.get(k);if(T.__webglInit===void 0)return;let j=k.source,Z=d.get(j);if(Z){let V=Z[T.__cacheKey];V.usedTimes--,V.usedTimes===0&&P(k),Object.keys(Z).length===0&&d.delete(j)}n.remove(k)}function P(k){let T=n.get(k);s.deleteTexture(T.__webglTexture);let j=k.source,Z=d.get(j);delete Z[T.__cacheKey],a.memory.textures--}function I(k){let T=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let V=0;V<T.__webglFramebuffer[Z].length;V++)s.deleteFramebuffer(T.__webglFramebuffer[Z][V]);else s.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)s.deleteFramebuffer(T.__webglFramebuffer[Z]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let j=k.textures;for(let Z=0,V=j.length;Z<V;Z++){let q=n.get(j[Z]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(j[Z])}n.remove(k)}let D=0;function H(){D=0}function C(){return D}function U(k){D=k}function L(){let k=D;return k>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+(k+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,k}function B(k){let T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function N(k,T){let j=n.get(k);if(k.isVideoTexture&&F(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&j.__version!==k.version){let Z=k.image;if(Z===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(j,k,T);return}}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,j.__webglTexture,s.TEXTURE0+T)}function z(k,T){let j=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){Te(j,k,T);return}else k.isExternalTexture&&(j.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,j.__webglTexture,s.TEXTURE0+T)}function W(k,T){let j=n.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&j.__version!==k.version){Te(j,k,T);return}t.bindTexture(s.TEXTURE_3D,j.__webglTexture,s.TEXTURE0+T)}function Y(k,T){let j=n.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&j.__version!==k.version){ke(j,k,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture,s.TEXTURE0+T)}let ae={[Gn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},he={[fn]:s.NEAREST,[Kc]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[bt]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[en]:s.LINEAR_MIPMAP_LINEAR},ce={[tm]:s.NEVER,[am]:s.ALWAYS,[nm]:s.LESS,[Ih]:s.LEQUAL,[im]:s.EQUAL,[Lh]:s.GEQUAL,[sm]:s.GREATER,[rm]:s.NOTEQUAL};function _e(k,T){if(T.type===qn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bt||T.magFilter===Ra||T.magFilter===Pr||T.magFilter===en||T.minFilter===bt||T.minFilter===Ra||T.minFilter===Pr||T.minFilter===en)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ae[T.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,he[T.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,he[T.minFilter]),T.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==Pr&&T.minFilter!==en||T.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function $e(k,T){let j=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",S));let Z=T.source,V=d.get(Z);V===void 0&&(V={},d.set(Z,V));let q=B(T);if(q!==k.__cacheKey){V[q]===void 0&&(V[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,j=!0),V[q].usedTimes++;let $=V[k.__cacheKey];$!==void 0&&(V[k.__cacheKey].usedTimes--,$.usedTimes===0&&P(T)),k.__cacheKey=q,k.__webglTexture=V[q].texture}return j}function ne(k,T,j){return Math.floor(Math.floor(k/j)/T)}function oe(k,T,j,Z){let q=k.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,j,Z,T.data);else{q.sort((Ee,pe)=>Ee.start-pe.start);let $=0;for(let Ee=1;Ee<q.length;Ee++){let pe=q[$],xe=q[Ee],Ce=pe.start+pe.count,Ze=ne(xe.start,T.width,4),Ie=ne(pe.start,T.width,4);xe.start<=Ce+1&&Ze===Ie&&ne(xe.start+xe.count-1,T.width,4)===Ze?pe.count=Math.max(pe.count,xe.start+xe.count-pe.start):(++$,q[$]=xe)}q.length=$+1;let K=t.getParameter(s.UNPACK_ROW_LENGTH),J=t.getParameter(s.UNPACK_SKIP_PIXELS),me=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,pe=q.length;Ee<pe;Ee++){let xe=q[Ee],Ce=Math.floor(xe.start/4),Ze=Math.ceil(xe.count/4),Ie=Ce%T.width,O=Math.floor(Ce/T.width),Me=Ze,ue=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,Ie,O,Me,ue,j,Z,T.data)}k.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,J),t.pixelStorei(s.UNPACK_SKIP_ROWS,me)}}function Te(k,T,j){let Z=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=s.TEXTURE_3D);let V=$e(k,T),q=T.source;t.bindTexture(Z,k.__webglTexture,s.TEXTURE0+j);let $=n.get(q);if(q.version!==$.__version||V===!0){if(t.activeTexture(s.TEXTURE0+j),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ue=Mt.getPrimaries(Mt.workingColorSpace),Re=T.colorSpace===Xt?null:Mt.getPrimaries(T.colorSpace),De=T.colorSpace===Xt||ue===Re?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let J=m(T.image,!1,i.maxTextureSize);J=Fe(T,J);let me=r.convert(T.format,T.colorSpace),Ee=r.convert(T.type),pe=x(T.internalFormat,me,Ee,T.normalized,T.colorSpace,T.isVideoTexture);_e(Z,T);let xe,Ce=T.mipmaps,Ze=T.isVideoTexture!==!0,Ie=$.__version===void 0||V===!0,O=q.dataReady,Me=v(T,J);if(T.isDepthTexture)pe=M(T.format===Js,T.type),Ie&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,pe,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,pe,J.width,J.height,0,me,Ee,null));else if(T.isDataTexture)if(Ce.length>0){Ze&&Ie&&t.texStorage2D(s.TEXTURE_2D,Me,pe,Ce[0].width,Ce[0].height);for(let ue=0,Re=Ce.length;ue<Re;ue++)xe=Ce[ue],Ze?O&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,xe.width,xe.height,me,Ee,xe.data):t.texImage2D(s.TEXTURE_2D,ue,pe,xe.width,xe.height,0,me,Ee,xe.data);T.generateMipmaps=!1}else Ze?(Ie&&t.texStorage2D(s.TEXTURE_2D,Me,pe,J.width,J.height),O&&oe(T,J,me,Ee)):t.texImage2D(s.TEXTURE_2D,0,pe,J.width,J.height,0,me,Ee,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,pe,Ce[0].width,Ce[0].height,J.depth);for(let ue=0,Re=Ce.length;ue<Re;ue++)if(xe=Ce[ue],T.format!==gi)if(me!==null)if(Ze){if(O)if(T.layerUpdates.size>0){let De=td(xe.width,xe.height,T.format,T.type);for(let ge of T.layerUpdates){let G=xe.data.subarray(ge*De/xe.data.BYTES_PER_ELEMENT,(ge+1)*De/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,ge,xe.width,xe.height,1,me,G)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,xe.width,xe.height,J.depth,me,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,pe,xe.width,xe.height,J.depth,0,xe.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,xe.width,xe.height,J.depth,me,Ee,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,pe,xe.width,xe.height,J.depth,0,me,Ee,xe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ze&&Ie&&t.texStorage2D(s.TEXTURE_2D,Me,pe,Ce[0].width,Ce[0].height);for(let ue=0,Re=Ce.length;ue<Re;ue++)xe=Ce[ue],T.format!==gi?me!==null?Ze?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,xe.width,xe.height,me,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,pe,xe.width,xe.height,0,xe.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?O&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,xe.width,xe.height,me,Ee,xe.data):t.texImage2D(s.TEXTURE_2D,ue,pe,xe.width,xe.height,0,me,Ee,xe.data)}else if(T.isDataArrayTexture)if(Ze){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,pe,J.width,J.height,J.depth),O)if(T.layerUpdates.size>0){let ue=td(J.width,J.height,T.format,T.type);for(let Re of T.layerUpdates){let De=J.data.subarray(Re*ue/J.data.BYTES_PER_ELEMENT,(Re+1)*ue/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Re,J.width,J.height,1,me,Ee,De)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,me,Ee,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,me,Ee,J.data);else if(T.isData3DTexture)Ze?(Ie&&t.texStorage3D(s.TEXTURE_3D,Me,pe,J.width,J.height,J.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,me,Ee,J.data)):t.texImage3D(s.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,me,Ee,J.data);else if(T.isFramebufferTexture){if(Ie)if(Ze)t.texStorage2D(s.TEXTURE_2D,Me,pe,J.width,J.height);else{let ue=J.width,Re=J.height;for(let De=0;De<Me;De++)t.texImage2D(s.TEXTURE_2D,De,pe,ue,Re,0,me,Ee,null),ue>>=1,Re>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ue=s.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),J.parentNode!==ue){ue.appendChild(J),u.add(T),ue.onpaint=Re=>{let De=Re.changedElements;for(let ge of u)De.includes(ge.image)&&(ge.needsUpdate=!0)},ue.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,J);else{let De=s.RGBA,ge=s.RGBA,G=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,ge,G,J)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ze&&Ie){let ue=Xe(Ce[0]);t.texStorage2D(s.TEXTURE_2D,Me,pe,ue.width,ue.height)}for(let ue=0,Re=Ce.length;ue<Re;ue++)xe=Ce[ue],Ze?O&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,me,Ee,xe):t.texImage2D(s.TEXTURE_2D,ue,pe,me,Ee,xe);T.generateMipmaps=!1}else if(Ze){if(Ie){let ue=Xe(J);t.texStorage2D(s.TEXTURE_2D,Me,pe,ue.width,ue.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,Ee,J)}else t.texImage2D(s.TEXTURE_2D,0,pe,me,Ee,J);g(T)&&_(Z),$.__version=q.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function ke(k,T,j){if(T.image.length!==6)return;let Z=$e(k,T),V=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+j);let q=n.get(V);if(V.version!==q.__version||Z===!0){t.activeTexture(s.TEXTURE0+j);let $=Mt.getPrimaries(Mt.workingColorSpace),K=T.colorSpace===Xt?null:Mt.getPrimaries(T.colorSpace),J=T.colorSpace===Xt||$===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let me=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,pe=[];for(let ge=0;ge<6;ge++)!me&&!Ee?pe[ge]=m(T.image[ge],!0,i.maxCubemapSize):pe[ge]=Ee?T.image[ge].image:T.image[ge],pe[ge]=Fe(T,pe[ge]);let xe=pe[0],Ce=r.convert(T.format,T.colorSpace),Ze=r.convert(T.type),Ie=x(T.internalFormat,Ce,Ze,T.normalized,T.colorSpace),O=T.isVideoTexture!==!0,Me=q.__version===void 0||Z===!0,ue=V.dataReady,Re=v(T,xe);_e(s.TEXTURE_CUBE_MAP,T);let De;if(me){O&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Ie,xe.width,xe.height);for(let ge=0;ge<6;ge++){De=pe[ge].mipmaps;for(let G=0;G<De.length;G++){let se=De[G];T.format!==gi?Ce!==null?O?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G,0,0,se.width,se.height,Ce,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G,Ie,se.width,se.height,0,se.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G,0,0,se.width,se.height,Ce,Ze,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G,Ie,se.width,se.height,0,Ce,Ze,se.data)}}}else{if(De=T.mipmaps,O&&Me){De.length>0&&Re++;let ge=Xe(pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,Ie,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Ee){O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,pe[ge].width,pe[ge].height,Ce,Ze,pe[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ie,pe[ge].width,pe[ge].height,0,Ce,Ze,pe[ge].data);for(let G=0;G<De.length;G++){let Ae=De[G].image[ge].image;O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G+1,0,0,Ae.width,Ae.height,Ce,Ze,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G+1,Ie,Ae.width,Ae.height,0,Ce,Ze,Ae.data)}}else{O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ce,Ze,pe[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Ie,Ce,Ze,pe[ge]);for(let G=0;G<De.length;G++){let se=De[G];O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G+1,0,0,Ce,Ze,se.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,G+1,Ie,Ce,Ze,se.image[ge])}}}g(T)&&_(s.TEXTURE_CUBE_MAP),q.__version=V.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function de(k,T,j,Z,V,q){let $=r.convert(j.format,j.colorSpace),K=r.convert(j.type),J=x(j.internalFormat,$,K,j.normalized,j.colorSpace),me=n.get(T),Ee=n.get(j);if(Ee.__renderTarget=T,!me.__hasExternalTextures){let pe=Math.max(1,T.width>>q),xe=Math.max(1,T.height>>q);V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?t.texImage3D(V,q,J,pe,xe,T.depth,0,$,K,null):t.texImage2D(V,q,J,pe,xe,0,$,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),ie(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,V,Ee.__webglTexture,0,et(T)):(V===s.TEXTURE_2D||V>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,V,Ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Oe(k,T,j){if(s.bindRenderbuffer(s.RENDERBUFFER,k),T.depthBuffer){let Z=T.depthTexture,V=Z&&Z.isDepthTexture?Z.type:null,q=M(T.stencilBuffer,V),$=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ie(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et(T),q,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,et(T),q,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,q,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,k)}else{let Z=T.textures;for(let V=0;V<Z.length;V++){let q=Z[V],$=r.convert(q.format,q.colorSpace),K=r.convert(q.type),J=x(q.internalFormat,$,K,q.normalized,q.colorSpace);ie(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et(T),J,T.width,T.height):j?s.renderbufferStorageMultisample(s.RENDERBUFFER,et(T),J,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,J,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(k,T,j){let Z=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V=n.get(T.depthTexture);if(V.__renderTarget=T,(!V.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(V.__webglInit===void 0&&(V.__webglInit=!0,T.depthTexture.addEventListener("dispose",S)),V.__webglTexture===void 0){V.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),_e(s.TEXTURE_CUBE_MAP,T.depthTexture);let me=r.convert(T.depthTexture.format),Ee=r.convert(T.depthTexture.type),pe;T.depthTexture.format===Gi?pe=s.DEPTH_COMPONENT24:T.depthTexture.format===Js&&(pe=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,T.width,T.height,0,me,Ee,null)}}else N(T.depthTexture,0);let q=V.__webglTexture,$=et(T),K=Z?s.TEXTURE_CUBE_MAP_POSITIVE_X+j:s.TEXTURE_2D,J=T.depthTexture.format===Js?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Gi)ie(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,J,K,q,0);else if(T.depthTexture.format===Js)ie(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,K,q,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,J,K,q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(k){let T=n.get(k),j=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){let Z=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let V=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",V)};Z.addEventListener("dispose",V),T.__depthDisposeCallback=V}T.__boundDepthTexture=Z}if(k.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let Z=0;Z<6;Z++)gt(T.__webglFramebuffer[Z],k,Z);else{let Z=k.texture.mipmaps;Z&&Z.length>0?gt(T.__webglFramebuffer[0],k,0):gt(T.__webglFramebuffer,k,0)}else if(j){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=s.createRenderbuffer(),Oe(T.__webglDepthbuffer[Z],k,!1);else{let V=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,q)}}else{let Z=k.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Oe(T.__webglDepthbuffer,k,!1);else{let V=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,V,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(k,T,j){let Z=n.get(k);T!==void 0&&de(Z.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),j!==void 0&&le(k)}function ve(k){let T=k.texture,j=n.get(k),Z=n.get(T);k.addEventListener("dispose",y);let V=k.textures,q=k.isWebGLCubeRenderTarget===!0,$=V.length>1;if($||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=T.version,a.memory.textures++),q){j.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[K]=[];for(let J=0;J<T.mipmaps.length;J++)j.__webglFramebuffer[K][J]=s.createFramebuffer()}else j.__webglFramebuffer[K]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)j.__webglFramebuffer[K]=s.createFramebuffer()}else j.__webglFramebuffer=s.createFramebuffer();if($)for(let K=0,J=V.length;K<J;K++){let me=n.get(V[K]);me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture(),a.memory.textures++)}if(k.samples>0&&ie(k)===!1){j.__webglMultisampledFramebuffer=s.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let K=0;K<V.length;K++){let J=V[K];j.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,j.__webglColorRenderbuffer[K]);let me=r.convert(J.format,J.colorSpace),Ee=r.convert(J.type),pe=x(J.internalFormat,me,Ee,J.normalized,J.colorSpace,k.isXRRenderTarget===!0),xe=et(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,pe,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,j.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(j.__webglDepthRenderbuffer=s.createRenderbuffer(),Oe(j.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),_e(s.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)de(j.__webglFramebuffer[K][J],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,J);else de(j.__webglFramebuffer[K],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(T)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let K=0,J=V.length;K<J;K++){let me=V[K],Ee=n.get(me),pe=s.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(pe=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,Ee.__webglTexture),_e(pe,me),de(j.__webglFramebuffer,k,me,s.COLOR_ATTACHMENT0+K,pe,0),g(me)&&_(pe)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(K=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,Z.__webglTexture),_e(K,T),T.mipmaps&&T.mipmaps.length>0)for(let J=0;J<T.mipmaps.length;J++)de(j.__webglFramebuffer[J],k,T,s.COLOR_ATTACHMENT0,K,J);else de(j.__webglFramebuffer,k,T,s.COLOR_ATTACHMENT0,K,0);g(T)&&_(K),t.unbindTexture()}k.depthBuffer&&le(k)}function be(k){let T=k.textures;for(let j=0,Z=T.length;j<Z;j++){let V=T[j];if(g(V)){let q=E(k),$=n.get(V).__webglTexture;t.bindTexture(q,$),_(q),t.unbindTexture()}}}let Se=[],je=[];function ze(k){if(k.samples>0){if(ie(k)===!1){let T=k.textures,j=k.width,Z=k.height,V=s.COLOR_BUFFER_BIT,q=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=n.get(k),K=T.length>1;if(K)for(let me=0;me<T.length;me++)t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);let J=k.texture.mipmaps;J&&J.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let me=0;me<T.length;me++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(V|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(V|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$.__webglColorRenderbuffer[me]);let Ee=n.get(T[me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,j,Z,0,0,j,Z,V,s.NEAREST),l===!0&&(Se.length=0,je.length=0,Se.push(s.COLOR_ATTACHMENT0+me),k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&(Se.push(q),je.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,je)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let me=0;me<T.length;me++){t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,$.__webglColorRenderbuffer[me]);let Ee=n.get(T[me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.storeMultisampledDepthBuffer===!1&&l){let T=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function et(k){return Math.min(i.maxSamples,k.samples)}function ie(k){let T=n.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(k){let T=a.render.frame;h.get(k)!==T&&(h.set(k,T),k.update())}function Fe(k,T){let j=k.colorSpace,Z=k.format,V=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||j!==Tt&&j!==Xt&&(Mt.getTransfer(j)===Gt?(Z!==gi||V!==En)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",j)),T}function Xe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(c.width=k.naturalWidth||k.width,c.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(c.width=k.displayWidth,c.height=k.displayHeight):(c.width=k.width,c.height=k.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=H,this.getTextureUnits=C,this.setTextureUnits=U,this.setTexture2D=N,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=fe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jE(s,e){function t(n,i=Xt){let r,a=Mt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Yc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Wf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Of)return s.BYTE;if(n===Gf)return s.SHORT;if(n===Aa)return s.UNSIGNED_SHORT;if(n===jc)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===qn)return s.FLOAT;if(n===xn)return s.HALF_FLOAT;if(n===qf)return s.ALPHA;if(n===Xf)return s.RGB;if(n===gi)return s.RGBA;if(n===Gi)return s.DEPTH_COMPONENT;if(n===Js)return s.DEPTH_STENCIL;if(n===Zc)return s.RED;if(n===$c)return s.RED_INTEGER;if(n===Zs)return s.RG;if(n===Qc)return s.RG_INTEGER;if(n===eh)return s.RGBA_INTEGER;if(n===el||n===tl||n===nl||n===il)if(a===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===el)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===el)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===nh||n===ih||n===sh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===th)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===ah||n===oh||n===lh||n===ch||n===sl||n===hh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rh||n===ah)return a===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===lh)return r.COMPRESSED_R11_EAC;if(n===ch)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sl)return r.COMPRESSED_RG11_EAC;if(n===hh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===bh||n===xh||n===vh||n===_h||n===yh||n===Mh||n===Eh||n===Sh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ph)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_h)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Th||n===wh||n===Rh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Th)return a===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Ch||n===rl||n===Ph)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ah)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ph)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ca?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function $E(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$f(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,E,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,x)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),b(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),E=_.envMap,x=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function QE(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let v=M.program;n.uniformBlockBinding(x,v)}function c(x,M){let v=i[x.id];v===void 0&&(m(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",_));let S=M.program;n.updateUBOMapping(x,S);let y=e.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function h(x){let M=u();x.__bindingPointIndex=M;let v=s.createBuffer(),S=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let M=i[x.id],v=x.uniforms,S=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let y=0,w=v.length;y<w;y++){let P=v[y];if(Array.isArray(P))for(let I=0,D=P.length;I<D;I++)d(P[I],y,I,S);else d(P,y,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,M,v,S){if(b(x,M,v,S)===!0){let y=x.__offset,w=x.value;if(Array.isArray(w)){let P=0;for(let I=0;I<w.length;I++){let D=w[I],H=g(D);p(D,x.__data,P),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function p(x,M,v){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,v)}function b(x,M,v,S){let y=x.value,w=M+"_"+v;if(S[w]===void 0)return typeof y=="number"||typeof y=="boolean"?S[w]=y:ArrayBuffer.isView(y)?S[w]=y.slice():S[w]=y.clone(),!0;{let P=S[w];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return S[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(x){let M=x.uniforms,v=0,S=16;for(let w=0,P=M.length;w<P;w++){let I=Array.isArray(M[w])?M[w]:[M[w]];for(let D=0,H=I.length;D<H;D++){let C=I[D],U=Array.isArray(C.value)?C.value:[C.value];for(let L=0,B=U.length;L<B;L++){let N=U[L],z=g(N),W=v%S,Y=W%z.boundary,ae=W+Y;v+=Y,ae!==0&&S-ae<z.storage&&(v+=S-ae),C.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=v,v+=z.storage}}}let y=v%S;return y>0&&(v+=S-y),x.__size=v,x.__cache={},this}function g(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",x),M}function _(x){let M=x.target;M.removeEventListener("dispose",_);let v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function E(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:E}}function tS(){return Yi===null&&(Yi=new Hs(eS,16,16,Zs,xn),Yi.name="DFG_LUT",Yi.minFilter=bt,Yi.magFilter=bt,Yi.wrapS=bn,Yi.wrapT=bn,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var p_,m_,g_,b_,x_,v_,__,y_,M_,E_,S_,T_,w_,R_,A_,C_,P_,I_,L_,k_,D_,F_,N_,U_,z_,B_,H_,O_,G_,V_,W_,q_,X_,K_,j_,Y_,J_,Z_,$_,Q_,e1,t1,n1,i1,s1,r1,a1,o1,l1,c1,h1,u1,f1,d1,p1,m1,g1,b1,x1,v1,_1,y1,M1,E1,S1,T1,w1,R1,A1,C1,P1,I1,L1,k1,D1,F1,N1,U1,z1,B1,H1,O1,G1,V1,W1,q1,X1,K1,j1,Y1,J1,Z1,$1,Q1,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,fy,dy,py,my,gy,by,xy,vy,_y,yy,My,Ey,Sy,Ty,wy,Ry,Ay,Cy,Py,Iy,Ly,ky,Dy,Fy,Ny,Uy,zy,By,Hy,Oy,Gy,Vy,Wy,qy,Xy,Ky,_t,Le,Ji,kh,jy,Om,La,eM,tM,nM,ll,vm,ld,cd,hd,ud,iM,kr,Dr,Fh,pM,Gm,pd,Vm,Wm,qm,Em,Sm,Tm,wm,Rm,md,gd,bd,fd,ka,iE,sE,Pm,lE,Dh,pE,mE,bE,vE,yE,EE,TE,CE,vd,_d,UE,OE,GE,VE,WE,Bm,cl,dd,YE,JE,yd,Md,ZE,Xm,eS,Yi,Nh,Pt=ut(()=>{od();od();p_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,m_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,E_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,A_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,k_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,D_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,U_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,z_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,B_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,W_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,X_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,a1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,f1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,b1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,S1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,T1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,z1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,H1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,W1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Q1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ey=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ty=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ny=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ry=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ay=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ly=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,my=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,My=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ty=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ry=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ky=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ny=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,By=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:p_,alphahash_pars_fragment:m_,alphamap_fragment:g_,alphamap_pars_fragment:b_,alphatest_fragment:x_,alphatest_pars_fragment:v_,aomap_fragment:__,aomap_pars_fragment:y_,batching_pars_vertex:M_,batching_vertex:E_,begin_vertex:S_,beginnormal_vertex:T_,bsdfs:w_,iridescence_fragment:R_,bumpmap_pars_fragment:A_,clipping_planes_fragment:C_,clipping_planes_pars_fragment:P_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:L_,color_fragment:k_,color_pars_fragment:D_,color_pars_vertex:F_,color_vertex:N_,common:U_,cube_uv_reflection_fragment:z_,defaultnormal_vertex:B_,displacementmap_pars_vertex:H_,displacementmap_vertex:O_,emissivemap_fragment:G_,emissivemap_pars_fragment:V_,colorspace_fragment:W_,colorspace_pars_fragment:q_,envmap_fragment:X_,envmap_common_pars_fragment:K_,envmap_pars_fragment:j_,envmap_pars_vertex:Y_,envmap_physical_pars_fragment:a1,envmap_vertex:J_,fog_vertex:Z_,fog_pars_vertex:$_,fog_fragment:Q_,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:s1,lights_pars_begin:r1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:h1,lights_physical_fragment:u1,lights_physical_pars_fragment:f1,lights_fragment_begin:d1,lights_fragment_maps:p1,lights_fragment_end:m1,lightprobes_pars_fragment:g1,logdepthbuf_fragment:b1,logdepthbuf_pars_fragment:x1,logdepthbuf_pars_vertex:v1,logdepthbuf_vertex:_1,map_fragment:y1,map_pars_fragment:M1,map_particle_fragment:E1,map_particle_pars_fragment:S1,metalnessmap_fragment:T1,metalnessmap_pars_fragment:w1,morphinstance_vertex:R1,morphcolor_vertex:A1,morphnormal_vertex:C1,morphtarget_pars_vertex:P1,morphtarget_vertex:I1,normal_fragment_begin:L1,normal_fragment_maps:k1,normal_pars_fragment:D1,normal_pars_vertex:F1,normal_vertex:N1,normalmap_pars_fragment:U1,clearcoat_normal_fragment_begin:z1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:H1,iridescence_pars_fragment:O1,opaque_fragment:G1,packing:V1,premultiplied_alpha_fragment:W1,project_vertex:q1,dithering_fragment:X1,dithering_pars_fragment:K1,roughnessmap_fragment:j1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:J1,shadowmap_pars_vertex:Z1,shadowmap_vertex:$1,shadowmask_pars_fragment:Q1,skinbase_vertex:ey,skinning_pars_vertex:ty,skinning_vertex:ny,skinnormal_vertex:iy,specularmap_fragment:sy,specularmap_pars_fragment:ry,tonemapping_fragment:ay,tonemapping_pars_fragment:oy,transmission_fragment:ly,transmission_pars_fragment:cy,uv_pars_fragment:hy,uv_pars_vertex:uy,uv_vertex:fy,worldpos_vertex:dy,background_vert:py,background_frag:my,backgroundCube_vert:gy,backgroundCube_frag:by,cube_vert:xy,cube_frag:vy,depth_vert:_y,depth_frag:yy,distance_vert:My,distance_frag:Ey,equirect_vert:Sy,equirect_frag:Ty,linedashed_vert:wy,linedashed_frag:Ry,meshbasic_vert:Ay,meshbasic_frag:Cy,meshlambert_vert:Py,meshlambert_frag:Iy,meshmatcap_vert:Ly,meshmatcap_frag:ky,meshnormal_vert:Dy,meshnormal_frag:Fy,meshphong_vert:Ny,meshphong_frag:Uy,meshphysical_vert:zy,meshphysical_frag:By,meshtoon_vert:Hy,meshtoon_frag:Oy,points_vert:Gy,points_frag:Vy,shadow_vert:Wy,shadow_frag:qy,sprite_vert:Xy,sprite_frag:Ky},Le={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ji={basic:{uniforms:Xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Xn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Xn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Xn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new we(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Xn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Xn([Le.points,Le.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Xn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Xn([Le.common,Le.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Xn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Xn([Le.sprite,Le.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:Xn([Le.common,Le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:Xn([Le.lights,Le.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ji.physical={uniforms:Xn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};kh={r:0,b:0,g:0},jy=new Pe,Om=new pt;Om.set(-1,0,0,0,1,0,0,0,1);La=4,eM=6,tM=20,nM=256,ll=new Ki,vm=new we,ld=null,cd=0,hd=0,ud=!1,iM=new R,kr=new R,Dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=iM}=r;ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,hd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:xn,format:gi,colorSpace:Tt,depthBuffer:!1},i=_m(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sM(r)),this._blurMaterial=aM(r,e,t),this._ggxMaterial=rM(r,e,t)}return i}_compileMaterial(e){let t=new Q(new ht,e);this._renderer.compile(t,ll)}_sceneToCubeUV(e,t,n,i,r){let l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(vm),u.toneMapping=li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Q(new He,new it({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,g=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(vm),g=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):x===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let M=this._cubeSize;Ia(i,x*M,E>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(b,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ys||e.mapping===Cr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ym());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ll)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,b=this._sizeLods[n],m=3*b*(n>p-La?n-p+La:0),g=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Ia(r,m,g,3*b,2*b),i.setRenderTarget(r),i.render(o,ll),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ia(e,m,g,3*b,2*b),i.setRenderTarget(e),i.render(o,ll)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-La?i-this._lodMax+La:0),f=4*(this._cubeSize-h);Ia(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,ll)}};Fh=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new He(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:ji});r.uniforms.tEquirect.value=t;let a=new Q(i,r),o=t.minFilter;return t.minFilter===en&&(t.minFilter=bt),new Oc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};pM={[Df]:"LINEAR_TONE_MAPPING",[Ff]:"REINHARD_TONE_MAPPING",[Nf]:"CINEON_TONE_MAPPING",[$o]:"ACES_FILMIC_TONE_MAPPING",[zf]:"AGX_TONE_MAPPING",[Bf]:"NEUTRAL_TONE_MAPPING",[Uf]:"CUSTOM_TONE_MAPPING"};Gm=new yn,pd=new Vs(1,1),Vm=new yo,Wm=new Mc,qm=new Co,Em=[],Sm=[],Tm=new Float32Array(16),wm=new Float32Array(9),Rm=new Float32Array(4);md=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=FM(t.type)}},gd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tE(t.type)}},bd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},fd=/(\w+)(\])?(\[|\.)?/g;ka=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nE(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};iE=37297,sE=0;Pm=new pt;lE={[Df]:"Linear",[Ff]:"Reinhard",[Nf]:"Cineon",[$o]:"ACESFilmic",[zf]:"AgX",[Bf]:"Neutral",[Uf]:"Custom"};Dh=new R;pE=/^[ \t]*#include +<([\w\d./]+)>/gm;mE=new Map;bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;vE={[Ar]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};yE={[Ys]:"ENVMAP_TYPE_CUBE",[Cr]:"ENVMAP_TYPE_CUBE",[Qo]:"ENVMAP_TYPE_CUBE_UV"};EE={[Cr]:"ENVMAP_MODE_REFRACTION"};TE={[qc]:"ENVMAP_BLENDING_MULTIPLY",[j0]:"ENVMAP_BLENDING_MIX",[Y0]:"ENVMAP_BLENDING_ADD"};CE=0,vd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _d(e),t.set(e,n)),n}},_d=class{constructor(e){this.id=CE++,this.code=e,this.usedTimes=0}};UE=0;OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,VE=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],WE=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Bm=new Pe,cl=new R,dd=new R;YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Po(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:YE,fragmentShader:JE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Q(new st(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Md=class extends Vi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,b=typeof XRWebGLBinding<"u",m=new yd,g={},_=t.getContextAttributes(),E=null,x=null,M=[],v=[],S=new ye,y=null,w=null,P=new rn;P.viewport=new Bt;let I=new rn;I.viewport=new Bt;let D=[P,I],H=new Gc,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=M[ne];return oe===void 0&&(oe=new xa,M[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=M[ne];return oe===void 0&&(oe=new xa,M[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=M[ne];return oe===void 0&&(oe=new xa,M[ne]=oe),oe.getHandSpace()};function L(ne){let oe=v.indexOf(ne.inputSource);if(oe===-1)return;let Te=M[oe];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,c||a),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function B(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",N);for(let ne=0;ne<M.length;ne++){let oe=v[ne];oe!==null&&(v[ne]=null,M[ne].disconnect(oe))}C=null,U=null,m.reset();for(let ne in g)delete g[ne];if(e.setRenderTarget(E),d=null,f=null,u=null,i=null,x=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(S.width,S.height,!1),w!==null){let ne=w.camera;ne.fov=w.fov,ne.zoom=w.zoom,ne.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",B),i.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(S),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,ke=null,de=null;_.depth&&(de=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=_.stencil?Js:Gi,ke=_.stencil?Ca:Pi);let Oe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Oe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new an(f.textureWidth,f.textureHeight,{format:gi,type:En,depthTexture:new Vs(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new an(d.framebufferWidth,d.framebufferHeight,{format:gi,type:En,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(ne){for(let oe=0;oe<ne.removed.length;oe++){let Te=ne.removed[oe],ke=v.indexOf(Te);ke>=0&&(v[ke]=null,M[ke].disconnect(Te))}for(let oe=0;oe<ne.added.length;oe++){let Te=ne.added[oe],ke=v.indexOf(Te);if(ke===-1){for(let Oe=0;Oe<M.length;Oe++)if(Oe>=v.length){v.push(Te),ke=Oe;break}else if(v[Oe]===null){v[Oe]=Te,ke=Oe;break}if(ke===-1)break}let de=M[ke];de&&de.connect(Te)}}let z=new R,W=new R;function Y(ne,oe,Te){z.setFromMatrixPosition(oe.matrixWorld),W.setFromMatrixPosition(Te.matrixWorld);let ke=z.distanceTo(W),de=oe.projectionMatrix.elements,Oe=Te.projectionMatrix.elements,gt=de[14]/(de[10]-1),le=de[14]/(de[10]+1),fe=(de[9]+1)/de[5],ve=(de[9]-1)/de[5],be=(de[8]-1)/de[0],Se=(Oe[8]+1)/Oe[0],je=gt*be,ze=gt*Se,et=ke/(-be+Se),ie=et*-be;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ie),ne.translateZ(et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),de[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let F=gt+et,Fe=le+et,Xe=je-ie,k=ze+(ke-ie),T=fe*le/Fe*F,j=ve*le/Fe*F;ne.projectionMatrix.makePerspective(Xe,k,T,j,F,Fe),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ae(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let oe=ne.near,Te=ne.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),H.near=I.near=P.near=oe,H.far=I.far=P.far=Te,(C!==H.near||U!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),C=H.near,U=H.far),H.layers.mask=ne.layers.mask|6,P.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let ke=ne.parent,de=H.cameras;ae(H,ke);for(let Oe=0;Oe<de.length;Oe++)ae(de[Oe],ke);de.length===2?Y(H,P,I):H.projectionMatrix.copy(P.projectionMatrix),w===null&&ne.isPerspectiveCamera&&(w={camera:ne,fov:ne.fov,zoom:ne.zoom}),he(ne,H,ke)};function he(ne,oe,Te){Te===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=vr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(ne){return g[ne]};let ce=null;function _e(ne,oe){if(h=oe.getViewerPose(c||a),p=oe,h!==null){let Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ke=!1;Te.length!==H.cameras.length&&(H.cameras.length=0,ke=!0);for(let le=0;le<Te.length;le++){let fe=Te[le],ve=null;if(d!==null)ve=d.getViewport(fe);else{let Se=u.getViewSubImage(f,fe);ve=Se.viewport,le===0&&(e.setRenderTargetTextures(x,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(x))}let be=D[le];be===void 0&&(be=new rn,be.layers.enable(le),be.viewport=new Bt,D[le]=be),be.matrix.fromArray(fe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(fe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ve.x,ve.y,ve.width,ve.height),le===0&&(H.matrix.copy(be.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ke===!0&&H.cameras.push(be)}let de=i.enabledFeatures;if(de&&de.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let le=u.getDepthInformation(Te[0]);le&&le.isValid&&le.texture&&m.init(le,i.renderState)}if(de&&de.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let le=0;le<Te.length;le++){let fe=Te[le].camera;if(fe){let ve=g[fe];ve||(ve=new Po,g[fe]=ve);let be=u.getCameraImage(fe);ve.sourceTexture=be}}}}for(let Te=0;Te<M.length;Te++){let ke=v[Te],de=M[Te];ke!==null&&de!==void 0&&de.update(ke,oe,c||a)}ce&&ce(ne,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}let $e=new Hm;$e.setAnimationLoop(_e),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}},ZE=new Pe,Xm=new pt;Xm.set(-1,0,0,0,1,0,0,0,1);eS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;Nh=class{constructor(e={}){let{canvas:t=om(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let b=d,m=new Set([eh,Qc,$c]),g=new Set([En,Pi,Aa,Ca,Yc,Jc]),_=new Uint32Array(4),E=new Int32Array(4),x=new R,M=null,v=null,S=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,D=null,H=null,C=null,U=null;this._outputColorSpace=ot;let L=0,B=0,N=null,z=-1,W=null,Y=new Bt,ae=new Bt,he=null,ce=new we(0),_e=0,$e=t.width,ne=t.height,oe=1,Te=null,ke=null,de=new Bt(0,0,$e,ne),Oe=new Bt(0,0,$e,ne),gt=!1,le=new Os,fe=!1,ve=!1,be=new Pe,Se=new R,je=new Bt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},et=!1;function ie(){return N===null?oe:1}let F=n;function Fe(A,X){return t.getContext(A,X)}let Xe,k,T,j,Z,V,q,$,K,J,me,Ee,pe,xe,Ce,Ze,Ie,O,Me,ue,Re,De,ge;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",St,!1),F===null){let X="webgl2";if(F=Fe(X,A),F===null)throw Fe(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}G()}catch(A){throw t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",St,!1),rt("WebGLRenderer: "+A.message),A}function G(){Xe=new lM(F),Xe.init(),Re=new jE(F,Xe),k=new $y(F,Xe,e,Re),T=new XE(F,Xe),k.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),H=F.createFramebuffer(),C=F.createFramebuffer(),U=F.createFramebuffer(),j=new uM(F),Z=new LE,V=new KE(F,Xe,T,Z,k,Re,j),q=new oM(P),$=new d_(F),De=new Jy(F,$),K=new cM(F,$,j,De),J=new dM(F,K,$,De,j),O=new fM(F,k,V),Ce=new Qy(Z),me=new IE(P,q,Xe,k,De,Ce),Ee=new $E(P,Z),pe=new DE,xe=new HE(Xe),Ie=new Yy(P,q,T,J,p,l),Ze=new qE(P,J,k),ge=new QE(F,j,k,T),Me=new Zy(F,Xe,j),ue=new hM(F,Xe,j),j.programs=me.programs,P.capabilities=k,P.extensions=Xe,P.properties=Z,P.renderLists=pe,P.shadowMap=Ze,P.state=T,P.info=j}b!==En&&(w=new mM(b,t.width,t.height,o,i,r));let se=new Md(P,F);this.xr=se,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=Xe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Xe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize($e,ne,!1))},this.getSize=function(A){return A.set($e,ne)},this.setSize=function(A,X,re=!0){if(se.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=A,ne=X,t.width=Math.floor(A*oe),t.height=Math.floor(X*oe),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set($e*oe,ne*oe).floor()},this.setDrawingBufferSize=function(A,X,re){$e=A,ne=X,oe=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(b===En){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(de)},this.setViewport=function(A,X,re,ee){A.isVector4?de.set(A.x,A.y,A.z,A.w):de.set(A,X,re,ee),T.viewport(Y.copy(de).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(Oe)},this.setScissor=function(A,X,re,ee){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,X,re,ee),T.scissor(ae.copy(Oe).multiplyScalar(oe).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){T.setScissorTest(gt=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){ke=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let ee=0;if(A){let te=!1;if(N!==null){let Be=N.texture.format;te=m.has(Be)}if(te){let Be=N.texture.type,We=g.has(Be),Ue=Ie.getClearColor(),Ye=Ie.getClearAlpha(),tt=Ue.r,xt=Ue.g,At=Ue.b;We?(_[0]=tt,_[1]=xt,_[2]=At,_[3]=Ye,F.clearBufferuiv(F.COLOR,0,_)):(E[0]=tt,E[1]=xt,E[2]=At,E[3]=Ye,F.clearBufferiv(F.COLOR,0,E))}else ee|=F.COLOR_BUFFER_BIT}X&&(ee|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Ie.dispose(),pe.dispose(),xe.dispose(),Z.dispose(),q.dispose(),J.dispose(),De.dispose(),ge.dispose(),me.dispose(),se.dispose(),se.removeEventListener("sessionstart",dt),se.removeEventListener("sessionend",Jt),kn.stop()};function Ae(A){A.preventDefault(),_o("WebGLRenderer: Context Lost."),I=!0}function qe(){_o("WebGLRenderer: Context Restored."),I=!1;let A=j.autoReset,X=Ze.enabled,re=Ze.autoUpdate,ee=Ze.needsUpdate,te=Ze.type;G(),j.autoReset=A,Ze.enabled=X,Ze.autoUpdate=re,Ze.needsUpdate=ee,Ze.type=te}function St(A){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ht(A){let X=A.target;X.removeEventListener("dispose",Ht),zn(X)}function zn(A){Mi(A),Z.remove(A)}function Mi(A){let X=Z.get(A).programs;X!==void 0&&(X.forEach(function(re){me.releaseProgram(re)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,ee,te,Be){X===null&&(X=ze);let We=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ue=Px(A,X,re,ee,te);T.setMaterial(ee,We);let Ye=re.index,tt=1;if(ee.wireframe===!0){if(Ye=K.getWireframeAttribute(re),Ye===void 0)return;tt=2}let xt=re.drawRange,At=re.attributes.position,Je=xt.start*tt,Ot=(xt.start+xt.count)*tt;Be!==null&&(Je=Math.max(Je,Be.start*tt),Ot=Math.min(Ot,(Be.start+Be.count)*tt)),Ye!==null?(Je=Math.max(Je,0),Ot=Math.min(Ot,Ye.count)):At!=null&&(Je=Math.max(Je,0),Ot=Math.min(Ot,At.count));let mn=Ot-Je;if(mn<0||mn===1/0)return;De.setup(te,ee,Ue,re,Ye);let Qt,jt=Me;if(Ye!==null&&(Qt=$.get(Ye),jt=ue,jt.setIndex(Qt)),te.isMesh)ee.wireframe===!0?(T.setLineWidth(ee.wireframeLinewidth*ie()),jt.setMode(F.LINES)):jt.setMode(F.TRIANGLES);else if(te.isLine){let Bn=ee.linewidth;Bn===void 0&&(Bn=1),T.setLineWidth(Bn*ie()),te.isLineSegments?jt.setMode(F.LINES):te.isLineLoop?jt.setMode(F.LINE_LOOP):jt.setMode(F.LINE_STRIP)}else te.isPoints?jt.setMode(F.POINTS):te.isSprite&&jt.setMode(F.TRIANGLES);if(te.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))jt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Bn=te._multiDrawStarts,Ge=te._multiDrawCounts,Jn=te._multiDrawCount,Ut=Ye?$.get(Ye).bytesPerElement:1,xi=Z.get(ee).currentProgram.getUniforms();for(let Bi=0;Bi<Jn;Bi++)xi.setValue(F,"_gl_DrawID",Bi),jt.render(Bn[Bi]/Ut,Ge[Bi])}else if(te.isInstancedMesh)jt.renderInstances(Je,mn,te.count);else if(re.isInstancedBufferGeometry){let Bn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,Bn);jt.renderInstances(Je,mn,Ge)}else jt.render(Je,mn)};function hn(A,X,re,ee){D!==null&&A.isNodeMaterial&&D.setObject(ee,A),fe===!0&&Ce.setState(A,re,!1),A.transparent===!0&&A.side===Ct&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Ll(A,X,ee),A.side=$n,A.needsUpdate=!0,Ll(A,X,ee),A.side=Ct):Ll(A,X,ee)}this.compile=function(A,X,re=null){re===null&&(re=A),D!==null&&D.renderStart(A,X,re),v=xe.get(re),v.init(X),y.push(v),re.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(v.pushLight(te),te.castShadow&&v.pushShadow(te))}),A!==re&&A.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(v.pushLight(te),te.castShadow&&v.pushShadow(te))}),v.setupLights(),D!==null&&D.updateLights(v.state.lightsArray),ve=this.localClippingEnabled,fe=Ce.init(this.clippingPlanes,ve),fe===!0&&Ce.setGlobalState(this.clippingPlanes,X),D!==null&&Ze.render(v.state.shadowsArray,re,X);let ee=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Be=te.material;if(Be)if(Array.isArray(Be))for(let We=0;We<Be.length;We++){let Ue=Be[We];hn(Ue,re,X,te),ee.add(Ue)}else hn(Be,re,X,te),ee.add(Be)}),v=y.pop(),D!==null&&D.renderEnd(),ee},this.compileAsync=function(A,X,re=null){let ee=this.compile(A,X,re);return new Promise(te=>{function Be(){if(ee.forEach(function(We){let Ye=Z.get(We).currentProgram;(Ye===void 0||Ye.isReady())&&ee.delete(We)}),ee.size===0){te(A);return}setTimeout(Be,10)}Xe.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Yn=null;function Ve(A){Yn&&Yn(A)}function dt(){kn.stop()}function Jt(){kn.start()}let kn=new Hm;kn.setAnimationLoop(Ve),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){Yn=A,se.setAnimationLoop(A),A===null?kn.stop():kn.start()},se.addEventListener("sessionstart",dt),se.addEventListener("sessionend",Jt),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(A,X);let re=se.enabled===!0&&se.isPresenting===!0,ee=w!==null&&(N===null||re)&&w.begin(P,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,X,N),v=xe.get(A,y.length),v.init(X),v.state.textureUnits=V.getTextureUnits(),y.push(v),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),le.setFromProjectionMatrix(be,Ri,X.reversedDepth),ve=this.localClippingEnabled,fe=Ce.init(this.clippingPlanes,ve),M=pe.get(A,S.length),M.init(),S.push(M),se.enabled===!0&&se.isPresenting===!0){let We=P.xr.getDepthSensingMesh();We!==null&&si(We,X,-1/0,P.sortObjects)}si(A,X,0,P.sortObjects),M.finish(),D!==null&&D.updateLights(v.state.lightsArray),P.sortObjects===!0&&M.sort(Te,ke),et=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,et&&Ie.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ce.beginShadows();let te=v.state.shadowsArray;if(Ze.render(te,A,X),fe===!0&&Ce.endShadows(),(ee&&w.hasRenderPass())===!1){let We=M.opaque,Ue=M.transmissive;if(v.setupLights(),X.isArrayCamera){let Ye=X.cameras;if(Ue.length>0)for(let tt=0,xt=Ye.length;tt<xt;tt++){let At=Ye[tt];hr(We,Ue,A,At)}et&&Ie.render(A);for(let tt=0,xt=Ye.length;tt<xt;tt++){let At=Ye[tt];ri(M,A,At,At.viewport)}}else Ue.length>0&&hr(We,Ue,A,X),et&&Ie.render(A),ri(M,A,X)}N!==null&&B===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),ee&&w.end(P),A.isScene===!0&&A.onAfterRender(P,A,X),De.resetDefaultState(),z=-1,W=null,y.pop(),y.length>0?(v=y[y.length-1],V.setTextureUnits(v.state.textureUnits),fe===!0&&Ce.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,S.pop(),S.length>0?M=S[S.length-1]:M=null,D!==null&&D.renderEnd()};function si(A,X,re,ee){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(le)){ee&&je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);let We=J.update(A),Ue=A.material;Ue.visible&&M.push(A,We,Ue,re,je.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(le))){let We=J.update(A),Ue=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),je.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),je.copy(We.boundingSphere.center)),je.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Ue)){let Ye=We.groups;for(let tt=0,xt=Ye.length;tt<xt;tt++){let At=Ye[tt],Je=Ue[At.materialIndex];Je&&Je.visible&&M.push(A,We,Je,re,je.z,At,X)}}else Ue.visible&&M.push(A,We,Ue,re,je.z,null,X)}}let Be=A.children;for(let We=0,Ue=Be.length;We<Ue;We++)si(Be[We],X,re,ee)}function ri(A,X,re,ee){let{opaque:te,transmissive:Be,transparent:We}=A;v.setupLightsView(re),fe===!0&&Ce.setGlobalState(P.clippingPlanes,re),ee&&T.viewport(Y.copy(ee)),te.length>0&&zi(te,X,re),Be.length>0&&zi(Be,X,re),We.length>0&&zi(We,X,re),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function hr(A,X,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[ee.id]===void 0){let Je=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[ee.id]=new an(1,1,{generateMipmaps:!0,type:Je?xn:En,minFilter:en,samples:Math.max(4,k.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}let Be=v.state.transmissionRenderTarget[ee.id],We=ee.viewport||Y;Be.setSize(We.z*P.transmissionResolutionScale,We.w*P.transmissionResolutionScale);let Ue=P.getRenderTarget(),Ye=P.getActiveCubeFace(),tt=P.getActiveMipmapLevel();P.setRenderTarget(Be),P.getClearColor(ce),_e=P.getClearAlpha(),_e<1&&P.setClearColor(16777215,.5),P.clear(),et&&Ie.render(re);let xt=P.toneMapping;P.toneMapping=li;let At=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),v.setupLightsView(ee),fe===!0&&Ce.setGlobalState(P.clippingPlanes,ee),zi(A,re,ee),V.updateMultisampleRenderTarget(Be),V.updateRenderTargetMipmap(Be),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ot=0,mn=X.length;Ot<mn;Ot++){let Qt=X[Ot],{object:jt,geometry:Bn,material:Ge,group:Jn}=Qt;if(Ge.side===Ct&&jt.layers.test(ee.layers)){let Ut=Ge.side;Ge.side=Pn,Ge.needsUpdate=!0,ns(jt,re,ee,Bn,Ge,Jn),Ge.side=Ut,Ge.needsUpdate=!0,Je=!0}}Je===!0&&(V.updateMultisampleRenderTarget(Be),V.updateRenderTargetMipmap(Be))}P.setRenderTarget(Ue,Ye,tt),P.setClearColor(ce,_e),At!==void 0&&(ee.viewport=At),P.toneMapping=xt}function zi(A,X,re){let ee=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Be=A.length;te<Be;te++){let We=A[te],{object:Ue,geometry:Ye,group:tt}=We,xt=We.material;xt.allowOverride===!0&&ee!==null&&(xt=ee),Ue.layers.test(re.layers)&&ns(Ue,X,re,Ye,xt,tt)}}function ns(A,X,re,ee,te,Be){D!==null&&te.isNodeMaterial&&D.setObject(A,te),A.onBeforeRender(P,X,re,ee,te,Be),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(P,X,re,ee,A,Be),te.transparent===!0&&te.side===Ct&&te.forceSinglePass===!1?(te.side=Pn,te.needsUpdate=!0,P.renderBufferDirect(re,X,ee,te,A,Be),te.side=$n,te.needsUpdate=!0,P.renderBufferDirect(re,X,ee,te,A,Be),te.side=Ct):P.renderBufferDirect(re,X,ee,te,A,Be),A.onAfterRender(P,X,re,ee,te,Be)}function Ll(A,X,re){X.isScene!==!0&&(X=ze);let ee=Z.get(A),te=v.state.lights,Be=v.state.shadowsArray,We=te.state.version,Ue=me.getParameters(A,te.state,Be,X,re,v.state.lightProbeGridArray),Ye=me.getProgramCacheKey(Ue),tt=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;let xt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=q.get(A.envMap||ee.environment,xt),ee.envMapRotation=ee.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",Ht),tt=new Map,ee.programs=tt);let At=tt.get(Ye);if(At!==void 0){if(ee.currentProgram===At&&ee.lightsStateVersion===We)return Lp(A,Ue),At}else Ue.uniforms=me.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,re,Ue),A.onBeforeCompile(Ue,P),At=me.acquireProgram(Ue,Ye),tt.set(Ye,At),ee.uniforms=Ue.uniforms;let Je=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ce.uniform),Lp(A,Ue),ee.needsLights=Lx(A),ee.lightsStateVersion=We,ee.needsLights&&(Je.ambientLightColor.value=te.state.ambient,Je.lightProbe.value=te.state.probe,Je.sunLights.value=te.state.sun,Je.sunLightShadows.value=te.state.sunShadow,Je.directionalLights.value=te.state.directional,Je.directionalLightShadows.value=te.state.directionalShadow,Je.spotLights.value=te.state.spot,Je.spotLightShadows.value=te.state.spotShadow,Je.rectAreaLights.value=te.state.rectArea,Je.ltc_1.value=te.state.rectAreaLTC1,Je.ltc_2.value=te.state.rectAreaLTC2,Je.pointLights.value=te.state.point,Je.pointLightShadows.value=te.state.pointShadow,Je.hemisphereLights.value=te.state.hemi,Je.sunShadowMatrix.value=te.state.sunShadowMatrix,Je.sunShadowCascade.value=te.state.sunShadowCascade,Je.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Je.spotLightMatrix.value=te.state.spotLightMatrix,Je.spotLightMap.value=te.state.spotLightMap,Je.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=v.state.lightProbeGridArray.length>0,ee.currentProgram=At,ee.uniformsList=null,At}function Ip(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=ka.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Lp(A,X){let re=Z.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Cx(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(X.matrixWorld);for(let re=0,ee=A.length;re<ee;re++){let te=A[re];if(te.texture!==null&&te.boundingBox.containsPoint(x))return te}return null}function Px(A,X,re,ee,te){X.isScene!==!0&&(X=ze),V.resetTextureUnits();let Be=X.fog,We=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,Ue=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Mt.workingColorSpace,Ye=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,tt=q.get(ee.envMap||We,Ye),xt=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,At=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Je=!!re.morphAttributes.position,Ot=!!re.morphAttributes.normal,mn=!!re.morphAttributes.color,Qt=li;ee.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Qt=P.toneMapping);let jt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bn=jt!==void 0?jt.length:0,Ge=Z.get(ee),Jn=v.state.lights;if(fe===!0&&(ve===!0||A!==W)){let Zt=A===W&&ee.id===z;Ce.setState(ee,A,Zt)}let Ut=!1;ee.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Jn.state.version||Ge.outputColorSpace!==Ue||te.isBatchedMesh&&Ge.batching===!1||!te.isBatchedMesh&&Ge.batching===!0||te.isBatchedMesh&&Ge.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ge.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ge.instancing===!1||!te.isInstancedMesh&&Ge.instancing===!0||te.isSkinnedMesh&&Ge.skinning===!1||!te.isSkinnedMesh&&Ge.skinning===!0||te.isInstancedMesh&&Ge.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ge.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ge.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ge.instancingMorph===!1&&te.morphTexture!==null||Ge.envMap!==tt||ee.fog===!0&&Ge.fog!==Be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Ce.numPlanes||Ge.numIntersection!==Ce.numIntersection)||Ge.vertexAlphas!==xt||Ge.vertexTangents!==At||Ge.morphTargets!==Je||Ge.morphNormals!==Ot||Ge.morphColors!==mn||Ge.toneMapping!==Qt||Ge.morphTargetsCount!==Bn||!!Ge.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Ut=!0):(Ut=!0,Ge.__version=ee.version);let xi=Ge.currentProgram;Ut===!0&&(xi=Ll(ee,X,te),D&&ee.isNodeMaterial&&D.onUpdateProgram(ee,xi,Ge));let Bi=!1,As=!1,Wr=!1,Kt=xi.getUniforms(),un=Ge.uniforms;if(T.useProgram(xi.program)&&(Bi=!0,As=!0,Wr=!0),ee.id!==z&&(z=ee.id,As=!0),Ge.needsLights){let Zt=Cx(v.state.lightProbeGridArray,te);Ge.lightProbeGrid!==Zt&&(Ge.lightProbeGrid=Zt,As=!0)}if(Bi||W!==A){T.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Kt.setValue(F,"projectionMatrix",A.projectionMatrix),Kt.setValue(F,"viewMatrix",A.matrixWorldInverse);let Ps=Kt.map.cameraPosition;Ps!==void 0&&Ps.setValue(F,Se.setFromMatrixPosition(A.matrixWorld)),k.logarithmicDepthBuffer&&Kt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Kt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,As=!0,Wr=!0)}if(Ge.needsLights&&(Jn.state.sunShadowMap.length>0&&Kt.setValue(F,"sunShadowMap",Jn.state.sunShadowMap,V),Jn.state.directionalShadowMap.length>0&&Kt.setValue(F,"directionalShadowMap",Jn.state.directionalShadowMap,V),Jn.state.spotShadowMap.length>0&&Kt.setValue(F,"spotShadowMap",Jn.state.spotShadowMap,V),Jn.state.pointShadowMap.length>0&&Kt.setValue(F,"pointShadowMap",Jn.state.pointShadowMap,V)),te.isSkinnedMesh){Kt.setOptional(F,te,"bindMatrix"),Kt.setOptional(F,te,"bindMatrixInverse");let Zt=te.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Kt.setValue(F,"boneTexture",Zt.boneTexture,V))}te.isBatchedMesh&&(Kt.setOptional(F,te,"batchingTexture"),Kt.setValue(F,"batchingTexture",te._matricesTexture,V),Kt.setOptional(F,te,"batchingIdTexture"),Kt.setValue(F,"batchingIdTexture",te._indirectTexture,V),Kt.setOptional(F,te,"batchingColorTexture"),te._colorsTexture!==null&&Kt.setValue(F,"batchingColorTexture",te._colorsTexture,V));let Cs=re.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&O.update(te,re,xi),(As||Ge.receiveShadow!==te.receiveShadow)&&(Ge.receiveShadow=te.receiveShadow,Kt.setValue(F,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=tS()),As){if(Kt.setValue(F,"toneMappingExposure",P.toneMappingExposure),Ge.needsLights&&Ix(un,Wr),Be&&ee.fog===!0&&Ee.refreshFogUniforms(un,Be),Ee.refreshMaterialUniforms(un,ee,oe,ne,v.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){let Zt=Ge.lightProbeGrid;un.probesSH.value=Zt.texture,un.probesMin.value.copy(Zt.boundingBox.min),un.probesMax.value.copy(Zt.boundingBox.max),un.probesResolution.value.copy(Zt.resolution)}ka.upload(F,Ip(Ge),un,V)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ka.upload(F,Ip(Ge),un,V),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Kt.setValue(F,"center",te.center),Kt.setValue(F,"modelViewMatrix",te.modelViewMatrix),Kt.setValue(F,"normalMatrix",te.normalMatrix),Kt.setValue(F,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let Zt=ee.uniformsGroups;for(let Ps=0,qr=Zt.length;Ps<qr;Ps++){let Dp=Zt[Ps];ge.update(Dp,xi),ge.bind(Dp,xi)}}return xi}function Ix(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Lx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,X,re){let ee=Z.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=X,Z.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let re=Z.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,re=0){N=A,L=X,B=re;let ee=null,te=!1,Be=!1;if(A){let Ue=Z.get(A);if(Ue.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,Ue.__webglFramebuffer),Y.copy(A.viewport),ae.copy(A.scissor),he=A.scissorTest,T.viewport(Y),T.scissor(ae),T.setScissorTest(he),z=-1;return}else if(Ue.__webglFramebuffer===void 0)V.setupRenderTarget(A);else if(Ue.__hasExternalTextures)V.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xt=A.depthTexture;if(Ue.__boundDepthTexture!==xt){if(xt!==null&&Z.has(xt)&&(A.width!==xt.image.width||A.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(A)}}let Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Be=!0);let tt=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?ee=tt[X][re]:ee=tt[X],te=!0):A.samples>0&&V.useMultisampledRTT(A)===!1?ee=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?ee=tt[re]:ee=tt,Y.copy(A.viewport),ae.copy(A.scissor),he=A.scissorTest}else Y.copy(de).multiplyScalar(oe).floor(),ae.copy(Oe).multiplyScalar(oe).floor(),he=gt;if(re!==0&&(ee=H),T.bindFramebuffer(F.FRAMEBUFFER,ee)&&T.drawBuffers(A,ee),T.viewport(Y),T.scissor(ae),T.setScissorTest(he),te){let Ue=Z.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,re)}else if(Be){let Ue=X;for(let Ye=0;Ye<A.textures.length;Ye++){let tt=Z.get(A.textures[Ye]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ye,tt.__webglTexture,re,Ue)}}else if(A!==null&&re!==0){let Ue=Z.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ue.__webglTexture,re)}z=-1};function kp(A){let X=Z.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=k.textureFormatReadable(A.format),X.__typeReadable=k.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,re,ee,te,Be,We,Ue=0){if(!(A&&A.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){T.bindFramebuffer(F.FRAMEBUFFER,Ye);try{let tt=A.textures[Ue],xt=tt.format,At=tt.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ue);let Je=kp(tt);if(Je.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ee&&re>=0&&re<=A.height-te&&F.readPixels(X,re,ee,te,Re.convert(xt),Re.convert(At),Be)}finally{let tt=N!==null?Z.get(N).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,ee,te,Be,We,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye)if(X>=0&&X<=A.width-ee&&re>=0&&re<=A.height-te){T.bindFramebuffer(F.FRAMEBUFFER,Ye);let tt=A.textures[Ue],xt=tt.format,At=tt.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ue);let Je=kp(tt);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ot=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ot),F.bufferData(F.PIXEL_PACK_BUFFER,Be.byteLength,F.STREAM_READ),F.readPixels(X,re,ee,te,Re.convert(xt),Re.convert(At),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let mn=N!==null?Z.get(N).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,mn);let Qt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await cm(F,Qt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ot),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Be),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ot),F.deleteSync(Qt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){let ee=Math.pow(2,-re),te=Math.floor(A.image.width*ee),Be=Math.floor(A.image.height*ee),We=X!==null?X.x:0,Ue=X!==null?X.y:0;V.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,re,0,0,We,Ue,te,Be),T.unbindTexture()},this.copyTextureToTexture=function(A,X,re=null,ee=null,te=0,Be=0){let We,Ue,Ye,tt,xt,At,Je,Ot,mn,Qt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(re!==null)We=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Ye=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,xt=re.min.y,At=re.isBox3?re.min.z:0;else{let un=Math.pow(2,-te);We=Math.floor(Qt.width*un),Ue=Math.floor(Qt.height*un),A.isDataArrayTexture?Ye=Qt.depth:A.isData3DTexture?Ye=Math.floor(Qt.depth*un):Ye=1,tt=0,xt=0,At=0}ee!==null?(Je=ee.x,Ot=ee.y,mn=ee.z):(Je=0,Ot=0,mn=0);let jt=Re.convert(X.format),Bn=Re.convert(X.type),Ge;X.isData3DTexture?(V.setTexture3D(X,0),Ge=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(V.setTexture2DArray(X,0),Ge=F.TEXTURE_2D_ARRAY):(V.setTexture2D(X,0),Ge=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let Jn=T.getParameter(F.UNPACK_ROW_LENGTH),Ut=T.getParameter(F.UNPACK_IMAGE_HEIGHT),xi=T.getParameter(F.UNPACK_SKIP_PIXELS),Bi=T.getParameter(F.UNPACK_SKIP_ROWS),As=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Qt.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qt.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,tt),T.pixelStorei(F.UNPACK_SKIP_ROWS,xt),T.pixelStorei(F.UNPACK_SKIP_IMAGES,At);let Wr=A.isDataArrayTexture||A.isData3DTexture,Kt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let un=Z.get(A),Cs=Z.get(X),Zt=Z.get(un.__renderTarget),Ps=Z.get(Cs.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,Zt.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let qr=0;qr<Ye;qr++)Wr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,te,At+qr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Z.get(X).__webglTexture,Be,mn+qr)),F.blitFramebuffer(tt,xt,We,Ue,Je,Ot,We,Ue,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||Z.has(A)){let un=Z.get(A),Cs=Z.get(X);T.bindFramebuffer(F.READ_FRAMEBUFFER,C),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let Zt=0;Zt<Ye;Zt++)Wr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,te,At+Zt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,te),Kt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Cs.__webglTexture,Be,mn+Zt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Cs.__webglTexture,Be),te!==0?F.blitFramebuffer(tt,xt,We,Ue,Je,Ot,We,Ue,F.COLOR_BUFFER_BIT,F.NEAREST):Kt?F.copyTexSubImage3D(Ge,Be,Je,Ot,mn+Zt,tt,xt,We,Ue):F.copyTexSubImage2D(Ge,Be,Je,Ot,tt,xt,We,Ue);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ge,Be,Je,Ot,mn,We,Ue,Ye,jt,Bn,Qt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Ge,Be,Je,Ot,mn,We,Ue,Ye,jt,Qt.data):F.texSubImage3D(Ge,Be,Je,Ot,mn,We,Ue,Ye,jt,Bn,Qt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Be,Je,Ot,We,Ue,jt,Bn,Qt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Be,Je,Ot,Qt.width,Qt.height,jt,Qt.data):F.texSubImage2D(F.TEXTURE_2D,Be,Je,Ot,We,Ue,jt,Bn,Qt);T.pixelStorei(F.UNPACK_ROW_LENGTH,Jn),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut),T.pixelStorei(F.UNPACK_SKIP_PIXELS,xi),T.pixelStorei(F.UNPACK_SKIP_ROWS,Bi),T.pixelStorei(F.UNPACK_SKIP_IMAGES,As),Be===0&&X.generateMipmaps&&F.generateMipmap(Ge),T.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&V.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),T.unbindTexture()},this.resetState=function(){L=0,B=0,N=null,T.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}});var nS,iS,Bh,sS,rS,aS,oS,Hh,Km=ut(()=>{Pt();nS=!0,iS=4,Bh="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",sS=`
precision highp float;
uniform sampler2D t; uniform vec2 texel; uniform float schwelle, knie, deckel; uniform int vorfilter;
varying vec2 vUv;
// Deckel im ersten Schritt: ein einzelnes, extrem helles Pixel (fernes Laternenlicht, das zwischen
// den Abtastpunkten flackert) darf die Mip-Kette nicht zu einem riesigen Fleck aufblasen
vec3 s(vec2 uv){ vec3 c = texture2D(t, uv).rgb; return vorfilter == 1 ? min(c, vec3(deckel)) : c; }
vec3 sieb(vec3 c){
  float br = max(c.r, max(c.g, c.b));
  float sw = clamp(br - schwelle + knie, 0.0, 2.0 * knie);
  sw = sw * sw / (4.0 * knie + 1e-4);
  float m = max(sw, br - schwelle) / max(br, 1e-4);
  return c * max(m, 0.0);
}
void main(){
  vec2 uv = vUv; vec2 o = texel;
  vec3 a = s(uv + o * vec2(-2.0, -2.0)), b = s(uv + o * vec2(0.0, -2.0)), c = s(uv + o * vec2(2.0, -2.0));
  vec3 d = s(uv + o * vec2(-2.0, 0.0)),  e = s(uv),                       f = s(uv + o * vec2(2.0, 0.0));
  vec3 g = s(uv + o * vec2(-2.0, 2.0)),  h = s(uv + o * vec2(0.0, 2.0)),  i = s(uv + o * vec2(2.0, 2.0));
  vec3 j = s(uv + o * vec2(-1.0, -1.0)), k = s(uv + o * vec2(1.0, -1.0)), l = s(uv + o * vec2(-1.0, 1.0)), m = s(uv + o * vec2(1.0, 1.0));
  vec3 col = e * 0.125 + (a + c + g + i) * 0.03125 + (b + d + f + h) * 0.0625 + (j + k + l + m) * 0.125;
  if (vorfilter == 1) col = sieb(col);
  gl_FragColor = vec4(col, 1.0);
}`,rS=`
precision highp float;
uniform sampler2D t; uniform vec2 texel; uniform float radius;
varying vec2 vUv;
void main(){
  vec2 o = texel * radius;
  vec3 c = texture2D(t, vUv + vec2(-o.x, -o.y)).rgb + 2.0 * texture2D(t, vUv + vec2(0.0, -o.y)).rgb + texture2D(t, vUv + vec2(o.x, -o.y)).rgb
         + 2.0 * texture2D(t, vUv + vec2(-o.x, 0.0)).rgb + 4.0 * texture2D(t, vUv).rgb + 2.0 * texture2D(t, vUv + vec2(o.x, 0.0)).rgb
         + texture2D(t, vUv + vec2(-o.x, o.y)).rgb + 2.0 * texture2D(t, vUv + vec2(0.0, o.y)).rgb + texture2D(t, vUv + vec2(o.x, o.y)).rgb;
  gl_FragColor = vec4(c / 16.0, 1.0);
}`,aS=`
precision highp float;
uniform sampler2D tSzene, tBloom;
uniform float bloom, tempo, aberration, glitch, zeit, belichtung, korn, blende, vignette;
varying vec2 vUv;
vec3 aces(vec3 x){ const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14; return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0); }
float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main(){
  vec2 uv = vUv;
  // Glitch beim Kapitelwechsel: einzelne B\xE4nder springen zur Seite, kurze Farbtrennung
  if (glitch > 0.001) {
    float band = floor(uv.y * 28.0);
    float takt = floor(zeit * 24.0);
    float an = step(1.0 - glitch * 0.55, hash(vec2(band, takt)));
    uv.x += (hash(vec2(band * 3.1, takt)) - 0.5) * 0.09 * glitch * an;
  }
  vec2 c = uv - 0.5;
  float r2 = dot(c, c);
  // Tempo-Streifen (radiale Unsch\xE4rfe nach au\xDFen) und chromatische Aberration in einer Schleife
  float streif = tempo * (0.02 + r2 * 0.25);
  // Farbtrennung: im Stand kaum (0,04 % der Breite in den Ecken; vorher 1,2 % \u2013 rot-blaue R\xE4nder an jeder Kante,
  // Luka 22.10., Punkt 19), beim schnellen Scrollen und im Glitch etwas mehr
  float ca = (0.0006 + aberration * 0.006 + glitch * 0.02) * (0.3 + r2 * 1.6);
  vec3 col = vec3(0.0);
  if (tempo < 0.004) {
    // im Stand und beim langsamen Scrollen: eine Abtastung (die Tempo-Streifen gibt es nur beim schnellen Scrollen;
    // sechs Abtastungen auf 2160\xD71350 kosteten rund 20 ms je Bild)
    col.r = texture2D(tSzene, uv + c * ca).r;
    col.g = texture2D(tSzene, uv).g;
    col.b = texture2D(tSzene, uv - c * ca).b;
  } else {
    for (int i = 0; i < TAPS; i++) {
      float f = TAPS > 1 ? (float(i) / float(TAPS - 1) - 0.5) * streif : 0.0;
      vec2 p = uv + c * f;
      col.r += texture2D(tSzene, p + c * ca).r;
      col.g += texture2D(tSzene, p).g;
      col.b += texture2D(tSzene, p - c * ca).b;
    }
    col /= float(TAPS);
  }
  col += texture2D(tBloom, uv).rgb * bloom;
  col *= belichtung;
  // Filmische Farbgebung: Schatten ins tiefe Blau, Lichter leicht warm, etwas satter
  col += vec3(0.003, 0.005, 0.012);
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, col * vec3(1.06, 1.0, 0.9), smoothstep(0.3, 1.5, lum));
  col = mix(vec3(lum), col, 1.16);
  col = aces(col);
  float rv = length(vec2(c.x, c.y * 1.2)) * 2.0;
  col *= mix(1.0, smoothstep(1.5, 0.45, rv), vignette);
  col *= blende;
  // sRGB
  col = mix(col * 12.92, 1.055 * pow(max(col, 0.0), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, col));
  col += (hash(uv * vec2(1931.0, 1087.0) + fract(zeit * 0.731)) - 0.5) * korn;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,oS=`
precision highp float;
uniform sampler2D t; uniform vec2 texel;
varying vec2 vUv;
const float KANTE_REL = 0.125;     // Mindestkontrast relativ zur hellsten Nachbarin
const float KANTE_MIN = 0.0625;    // absoluter Mindestkontrast (Korn und dunkles Rauschen bleiben unber\xFChrt)
const float SUBPIX = 0.75;         // St\xE4rke gegen Ein-Pixel-Punkte (Lampen in der Ferne)
const float SCHRITT[8] = float[8](1.0, 1.0, 1.0, 1.5, 2.0, 2.0, 4.0, 8.0);
float lu(vec2 p){ return dot(texture2D(t, p).rgb, vec3(0.299, 0.587, 0.114)); }
void main(){
  vec2 uv = vUv;
  vec4 mitte = texture2D(t, uv);
  float lM = dot(mitte.rgb, vec3(0.299, 0.587, 0.114));
  float lN = lu(uv + vec2(0.0, texel.y)), lS = lu(uv - vec2(0.0, texel.y));
  float lE = lu(uv + vec2(texel.x, 0.0)), lW = lu(uv - vec2(texel.x, 0.0));
  float lMax = max(max(lN, lS), max(max(lE, lW), lM));
  float lMin = min(min(lN, lS), min(min(lE, lW), lM));
  float spanne = lMax - lMin;
  if (spanne < max(KANTE_MIN, lMax * KANTE_REL)) { gl_FragColor = vec4(mitte.rgb, 1.0); return; }

  float lNW = lu(uv + vec2(-texel.x, texel.y)), lNE = lu(uv + vec2(texel.x, texel.y));
  float lSW = lu(uv + vec2(-texel.x, -texel.y)), lSE = lu(uv + vec2(texel.x, -texel.y));
  float lNS = lN + lS, lWE = lW + lE;
  float ecken = lNW + lNE + lSW + lSE;

  // Anteil gegen Punkte kleiner als ein Pixel: Abweichung vom gewichteten Mittel der Umgebung
  float mittel = (2.0 * (lNS + lWE) + ecken) * (1.0 / 12.0);
  float sp = clamp(abs(mittel - lM) / spanne, 0.0, 1.0);
  sp = sp * sp * (3.0 - 2.0 * sp);
  float subpix = sp * sp * SUBPIX;

  // Richtung der Kante: waagerecht oder senkrecht, je nach der st\xE4rkeren zweiten Ableitung
  float kanteH = abs(lNW + lSW - 2.0 * lW) + 2.0 * abs(lNS - 2.0 * lM) + abs(lNE + lSE - 2.0 * lE);
  float kanteV = abs(lNW + lNE - 2.0 * lN) + 2.0 * abs(lWE - 2.0 * lM) + abs(lSW + lSE - 2.0 * lS);
  bool waag = kanteH >= kanteV;

  // Quer zur Kante: welche Seite hat das steilere Gef\xE4lle?
  float lA = waag ? lN : lE;
  float lB = waag ? lS : lW;
  float gA = lA - lM, gB = lB - lM;
  bool seiteA = abs(gA) >= abs(gB);
  float gefaelle = max(abs(gA), abs(gB));
  float quer = waag ? texel.y : texel.x;
  if (!seiteA) quer = -quer;
  float lMitteKante = 0.5 * (seiteA ? lA : lB) + 0.5 * lM;   // Helligkeit auf der Kante selbst

  vec2 pos = uv;
  if (waag) pos.y += quer * 0.5; else pos.x += quer * 0.5;
  vec2 laengs = waag ? vec2(texel.x, 0.0) : vec2(0.0, texel.y);
  float ziel = gefaelle * 0.25;

  // Kantensuche in beide Richtungen, bis die Helligkeit auf der Kante um ein Viertel des Gef\xE4lles abweicht
  vec2 posN = pos - laengs * SCHRITT[0], posP = pos + laengs * SCHRITT[0];
  float eN = lu(posN) - lMitteKante, eP = lu(posP) - lMitteKante;
  bool fN = abs(eN) >= ziel, fP = abs(eP) >= ziel;
  for (int i = 1; i < 8; i++) {
    if (fN && fP) break;
    if (!fN) posN -= laengs * SCHRITT[i];
    if (!fP) posP += laengs * SCHRITT[i];
    if (!fN) { eN = lu(posN) - lMitteKante; fN = abs(eN) >= ziel; }
    if (!fP) { eP = lu(posP) - lMitteKante; fP = abs(eP) >= ziel; }
  }

  float dN = waag ? uv.x - posN.x : uv.y - posN.y;
  float dP = waag ? posP.x - uv.x : posP.y - uv.y;
  bool nah = dN < dP;
  float eEnde = nah ? eN : eP;
  float laenge = dN + dP;
  float d = min(dN, dP);
  // Nur versetzen, wenn das Kantenende auf der \u201Erichtigen\u201C Seite liegt (sonst w\xE4re es keine Treppe)
  bool mitteDunkler = (lM - lMitteKante) < 0.0;
  bool gut = (eEnde < 0.0) != mitteDunkler;
  float versatz = gut ? (0.5 - d / laenge) : 0.0;
  versatz = max(versatz, subpix);
  if (waag) uv.y += versatz * quer; else uv.x += versatz * quer;
  gl_FragColor = vec4(texture2D(t, uv).rgb, 1.0);
}`,Hh=class{constructor(e){this.renderer=e,this.szeneRT=null,this.fxaaRT=null,this.mips=[],this.stufen=5,this.samples=0,this.w=2,this.h=2,this.quadSzene=new fs,this.quadKamera=new Ki(-1,1,1,-1,0,1),this.quad=new Q(new st(2,2),null),this.quad.frustumCulled=!1,this.quadSzene.add(this.quad),this.runter=new Et({uniforms:{t:{value:null},texel:{value:new ye},schwelle:{value:.9},knie:{value:.5},vorfilter:{value:0},deckel:{value:6}},vertexShader:Bh,fragmentShader:sS,depthTest:!1,depthWrite:!1}),this.rauf=new Et({uniforms:{t:{value:null},texel:{value:new ye},radius:{value:1}},vertexShader:Bh,fragmentShader:rS,depthTest:!1,depthWrite:!1,blending:Wc,blendSrc:Zo,blendDst:Zo,blendEquation:_s,transparent:!0}),this.fxaa=new Et({uniforms:{t:{value:null},texel:{value:new ye}},vertexShader:Bh,fragmentShader:oS,depthTest:!1,depthWrite:!1}),this.abschluss=null,this.taps=6,this.uniforms={tSzene:{value:null},tBloom:{value:null},bloom:{value:.22},tempo:{value:0},aberration:{value:0},glitch:{value:0},zeit:{value:0},belichtung:{value:1.25},korn:{value:.018},blende:{value:1},vignette:{value:1}},this.setzeTaps(6)}setzeTaps(e){this.abschluss&&this.taps===e||(this.taps=e,this.abschluss&&this.abschluss.dispose(),this.abschluss=new Et({uniforms:this.uniforms,defines:{TAPS:e},vertexShader:Bh,fragmentShader:aS,depthTest:!1,depthWrite:!1}))}groesse(e,t,n,i){if(e=Math.max(2,Math.floor(e)),t=Math.max(2,Math.floor(t)),this.szeneRT&&this.w===e&&this.h===t&&this.samples===n&&this.stufen===i)return;this.w=e,this.h=t,this.samples=n,this.stufen=i,this.entsorgen(),this.szeneRT=new an(e,t,{type:this.schlank?En:xn,samples:n,depthBuffer:!0,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:Xt}),nS&&n<iS&&(this.fxaaRT=new an(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:Xt}),this.fxaa.uniforms.texel.value.set(1/e,1/t)),this.mips=[];let r=e,a=t;for(let o=0;o<i;o++)r=Math.max(1,Math.floor(r/2)),a=Math.max(1,Math.floor(a/2)),this.mips.push(new an(r,a,{type:xn,depthBuffer:!1,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:Xt}))}entsorgen(){this.szeneRT&&this.szeneRT.dispose(),this.fxaaRT&&this.fxaaRT.dispose();for(let e of this.mips)e.dispose();this.szeneRT=null,this.fxaaRT=null,this.mips=[]}durchgang(e,t,n=!0){let i=this.renderer;this.quad.material=e,i.setRenderTarget(t),n&&i.clear(),i.render(this.quadSzene,this.quadKamera)}setzeSchlank(e){e=!!e,e!==this.schlank&&(this.schlank=e,this.entsorgen())}abschliessen(){let e=this.renderer,t=e.autoClear;if(e.autoClear=!1,this.schlank){this.uniforms.tSzene.value=this.szeneRT.texture,this.uniforms.tBloom.value=this.szeneRT.texture;let r=this.uniforms.bloom.value;this.uniforms.bloom.value=0,this.durchgang(this.abschluss,null),this.uniforms.bloom.value=r,e.autoClear=t;return}let n=this.mips,i=this.szeneRT;for(let r=0;r<n.length;r++)this.runter.uniforms.t.value=i.texture,this.runter.uniforms.texel.value.set(1/i.width,1/i.height),this.runter.uniforms.vorfilter.value=r===0?1:0,this.durchgang(this.runter,n[r]),i=n[r];for(let r=n.length-2;r>=0;r--)this.rauf.uniforms.t.value=n[r+1].texture,this.rauf.uniforms.texel.value.set(1/n[r+1].width,1/n[r+1].height),this.durchgang(this.rauf,n[r],!1);this.uniforms.tSzene.value=this.szeneRT.texture,this.uniforms.tBloom.value=n[0].texture,this.fxaaRT?(this.durchgang(this.abschluss,this.fxaaRT),this.fxaa.uniforms.t.value=this.fxaaRT.texture,this.durchgang(this.fxaa,null)):this.durchgang(this.abschluss,null),e.autoClear=t}}});function Oh(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function ei(s=128){let[e,t]=Oh(s,s),n=t.createImageData(s,s),i=s/2;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=Math.hypot(o+.5-i,a+.5-i)/i,c=Math.exp(-(l*2.3)*(l*2.3))*(1-Math.min(1,l)),h=(a*s+o)*4;n.data[h]=n.data[h+1]=n.data[h+2]=255,n.data[h+3]=255*c}t.putImageData(n,0,0);let r=new Ft(e);return r.colorSpace=Xt,r}function jm(s=256,e=32){let[t,n]=Oh(s,e),i=n.createImageData(s,e);for(let a=0;a<e;a++)for(let o=0;o<s;o++){let l=Math.abs((o+.5)/s-.5)*2,c=Math.abs((a+.5)/e-.5)*2,h=Math.pow(Math.max(0,1-l),2.2)*Math.pow(Math.max(0,1-c),1.2),u=(a*s+o)*4;i.data[u]=i.data[u+1]=i.data[u+2]=255,i.data[u+3]=255*h}n.putImageData(i,0,0);let r=new Ft(t);return r.colorSpace=Xt,r}function Ym(s,e,t=0,n=1){let[i,r]=Oh(s,s),a=r.createImageData(s,s);for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=c/s,u=l/s,f=.5+.25*Math.sin(h*31.4+1.3)*Math.sin(u*20.1+.4)+.15*Math.sin(h*97+u*61)+.1*(e()-.5);f=Math.min(1,Math.max(0,f));let d=(t+(n-t)*f)*255,p=(l*s+c)*4;a.data[p]=a.data[p+1]=a.data[p+2]=d,a.data[p+3]=255}r.putImageData(a,0,0);let o=new Ft(i);return o.wrapS=o.wrapT=Gn,o.colorSpace=Xt,o}function Gh(s=128,e=.72,t=.9){let[n,i]=Oh(s,s),r=i.createImageData(s,s),a=s/2;for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=Math.hypot(c+.5-a,l+.5-a)/a,u=h<e?0:h<(e+t)/2?(h-e)/((t-e)/2):h<t?(t-h)/((t-e)/2):0,f=(l*s+c)*4;r.data[f]=r.data[f+1]=r.data[f+2]=255,r.data[f+3]=255*Math.pow(u,.8)}i.putImageData(r,0,0);let o=new Ft(n);return o.colorSpace=Xt,o}function Ke(s,e,t){return new we().setRGB(s,e,t,Tt)}var ti=ut(()=>{Pt()});var Dt,Jm,Zm,Vh,ni=ut(()=>{Pt();ti();Dt=1,Jm=`
uniform mat4 textureMatrix;
varying vec4 vSp; varying vec3 vW; varying vec2 vUv; varying vec3 vV;
#include <fog_pars_vertex>
void main(){
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz; vUv = uv;
  vSp = textureMatrix * w;
  vec4 mvPosition = viewMatrix * w;
  vV = -mvPosition.xyz;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,Zm=`
precision highp float;
uniform sampler2D tSpiegel, tNass, tFarbe, tNormal, tRauheit, tMarkierung;
uniform float spiegelStaerke, breite, laenge, zeit;
uniform vec2 randAus, randAus2;
uniform vec3 laternen[6];
uniform vec3 laternenFarbe;
uniform vec3 scheinwerfer[2];
uniform vec3 scheinwerferRichtung;
uniform float scheinwerferStaerke;
uniform vec3 extraLicht; uniform vec3 extraFarbe; uniform float extraStaerke;
varying vec4 vSp; varying vec3 vW; varying vec2 vUv; varying vec3 vV;
#include <fog_pars_fragment>
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main(){
  // Pf\xFCtzen und K\xF6rnung
  vec2 q = vec2(vW.x * 0.35, vW.z * 0.08);
  float nass = texture2D(tNass, q).r;
  float korn = hash(floor(vW.xz * 40.0)) * 0.08;
  vec3 albedo = vec3(0.05, 0.052, 0.06) * (0.8 + korn);
  vec3 N = vec3(0.0, 1.0, 0.0);
  float rau = 0.55;
  #if TEXTUREN
  // Asphalt aus Fototextur (ambientCG, CC0): Farbe, Normale, Rauheit; 4 m Kachel
  vec2 tuv = vW.xz * 0.25;
  vec2 tuv2 = vec2(vW.x * 0.83 - vW.z * 0.56, vW.x * 0.56 + vW.z * 0.83) * 0.113;   // zweite, gedrehte und gr\xF6\xDFere Abtastung: bricht das 4-m-Karomuster
  vec3 tf = mix(texture2D(tFarbe, tuv).rgb, texture2D(tFarbe, tuv2).rgb, 0.5);
  albedo = tf * 0.42 + vec3(0.01, 0.011, 0.014);
  vec3 tn = mix(texture2D(tNormal, tuv).xyz, texture2D(tNormal, tuv2).xyz, 0.5) * 2.0 - 1.0;
  N = normalize(vec3(tn.x * 0.6, tn.z, tn.y * 0.6));
  rau = mix(texture2D(tRauheit, tuv).r, texture2D(tRauheit, tuv2).r, 0.5);
  nass = clamp(nass * 1.1 - rau * 0.25 + 0.1, 0.0, 1.0);
  #endif
  // Markierungen: Randlinien durchgezogen (in der Ausfahrt-Zone rechts gestrichelt), Mittellinie 6 m Strich, 12 m L\xFCcke
  float ax = abs(vW.x);
  float rand = smoothstep(0.08, 0.06, abs(ax - 3.55));
  if (vW.x < 0.0 && ((vW.z > randAus.x && vW.z < randAus.y) || (vW.z > randAus2.x && vW.z < randAus2.y))) rand *= step(mod(vW.z, 6.0), 3.0);
  float mitte = smoothstep(0.08, 0.06, ax) * step(mod(vW.z + 3.0, 18.0), 6.0);
  float linie = max(rand, mitte);
  #if MARKIERUNG
  linie = texture2D(tMarkierung, vUv).r;
  #endif
  albedo = mix(albedo, vec3(0.55, 0.55, 0.5), linie * 0.9);
  // Bestrahlung: Mond und Himmel (schwach), Laternen von oben (warm), Scheinwerfer des ersten Autos nach vorn
  vec3 licht = vec3(0.09, 0.11, 0.16);
  for (int i = 0; i < 6; i++) {
    vec3 d = vW - laternen[i];
    float dist = length(d);
    float kegel = smoothstep(0.45, 0.95, -d.y / max(dist, 0.01));
    float nl = max(dot(N, normalize(-d)), 0.0);
    licht += laternenFarbe * kegel * (0.5 + 0.5 * nl) * 2.2 / (1.0 + dist * dist * 0.08);
  }
  for (int i = 0; i < 2; i++) {
    vec3 d = vW - scheinwerfer[i];
    float dist = length(d);
    float c = dot(normalize(d), scheinwerferRichtung);
    float kegel = smoothstep(0.93, 0.995, c);
    licht += vec3(0.9, 0.95, 1.0) * kegel * scheinwerferStaerke * 1.4 / (1.0 + dist * dist * 0.02);
  }
  {
    vec3 d = vW - extraLicht;
    float dist = length(d);
    licht += extraFarbe * extraStaerke * 0.6 / (1.0 + dist * dist * 0.2);
  }
  vec3 col = albedo * licht * 2.4;
  // Spiegelung: senkrecht verwischt, in Pf\xFCtzen klar, auf Asphalt matt
  #if SPIEGEL
  vec2 p = vSp.xy / vSp.w + N.xz * 0.02;
  float fres = pow(1.0 - max(dot(normalize(vV), vec3(0.0, 1.0, 0.0)), 0.0), 1.6);
  float unsch = mix(0.014, 0.002, nass) * (0.6 + rau * 0.8);
  vec3 sp = vec3(0.0);
  float ws = 0.0;
  for (int i = -4; i <= 4; i++) {
    float w = 1.0 - abs(float(i)) / 5.0;
    sp += texture2D(tSpiegel, p + vec2(0.0, float(i) * unsch)).rgb * w; ws += w;
  }
  sp /= ws;
  sp = min(sp, vec3(2.5));
  float a = spiegelStaerke * (0.1 + 0.9 * fres) * (0.2 + 0.8 * nass) * (1.0 - linie * 0.7) * 0.7;
  // Die Spiegelung gilt f\xFCr die Ebene y = 0. Fahrbahnen, die dar\xFCber ansteigen (die Landstra\xDFe hinter der Ausfahrt), griffen
  // sonst in den gespiegelten Himmel und standen hell wie eine Schanze im Hang: mit der H\xF6he klingt sie ab
  a *= 1.0 - 0.85 * smoothstep(0.06, 0.9, vW.y);
  col += sp * a;
  #endif
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,Vh=class{constructor(e,t){this.z0=t.z0,this.z1=t.z1,this.spiegelAn=t.spiegel;let n=Ym(256,t.rnd,0,1);this.uniforms={tSpiegel:{value:null},tNass:{value:n},textureMatrix:{value:new Pe},spiegelStaerke:{value:1},breite:{value:8.2},laenge:{value:t.z1-t.z0},zeit:{value:0},laternen:{value:Array.from({length:6},()=>new R(0,-100,0))},laternenFarbe:{value:new we(1,.66,.34)},scheinwerfer:{value:[new R(0,-100,0),new R(0,-100,0)]},scheinwerferRichtung:{value:new R(0,-.08,1)},scheinwerferStaerke:{value:1},extraLicht:{value:new R(0,-100,0)},extraFarbe:{value:new we(.2,.8,1)},extraStaerke:{value:0},tFarbe:{value:null},tNormal:{value:null},tRauheit:{value:null},tMarkierung:{value:null},randAus:{value:new ye(1e9,1e9)},randAus2:{value:new ye(1e9,1e9)},...Lr.clone(Le.fog)},this.material=new Et({uniforms:this.uniforms,vertexShader:Jm,fragmentShader:Zm,fog:!0,defines:{SPIEGEL:t.spiegel?1:0,TEXTUREN:0,MARKIERUNG:0}}),this.zusatz=[];let i=new st(8.2,t.z1-t.z0,1,64);i.rotateX(-Math.PI/2),this.mesh=new Q(i,this.material),this.mesh.position.set(0,0,(t.z0+t.z1)/2),this.mesh.frustumCulled=!1,e.add(this.mesh),this.bankettMaterial=new Ne({color:658188,roughness:1,metalness:0});let r=new Q(new st(14,t.z1-t.z0,1,64),this.bankettMaterial);r.rotation.x=-Math.PI/2,r.position.set(0,-.015,(t.z0+t.z1)/2),e.add(r),this.bodenMaterial=new Ne({color:395018,roughness:1,metalness:0});let a=new Q(new st(900,t.z1-t.z0+600,1,1),this.bodenMaterial);a.rotation.x=-Math.PI/2,a.position.set(0,-.3,(t.z0+t.z1)/2),e.add(a),this.bankettLaenge=t.z1-t.z0,this.bankett=r,this.boden=a,this.rt=null,this.virtuell=new rn,this.virtuell.layers.set(Dt),this._ebene=new pi,this._normal=new R(0,1,0),this._blick=new R,this._ziel=new R,this._rot=new Pe,this._clip=new Bt,this._q=new Bt}setzeSpiegel(e){if(this.spiegelAn!==e){this.spiegelAn=e;for(let t of[this.material,...this.zusatz])t.defines.SPIEGEL=e?1:0,t.needsUpdate=!0}}setzeTexturen(e,t,n){if(!(!e||!t||!n)){this.uniforms.tFarbe.value=e,this.uniforms.tNormal.value=t,this.uniforms.tRauheit.value=n;for(let i of[this.material,...this.zusatz])i.defines.TEXTUREN=1,i.needsUpdate=!0}}zusatzMaterial(e){let t=new Et({uniforms:{...this.uniforms,tMarkierung:{value:e}},vertexShader:Jm,fragmentShader:Zm,fog:!0,defines:{SPIEGEL:this.spiegelAn?1:0,TEXTUREN:this.material.defines.TEXTUREN,MARKIERUNG:1}});return this.zusatz.push(t),t}groesse(e,t){this.rt&&this.rt.dispose(),this.rt=new an(Math.max(2,Math.floor(e/3)),Math.max(2,Math.floor(t/3)),{type:xn,depthBuffer:!0,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:Xt}),this.uniforms.tSpiegel.value=this.rt.texture}spiegeln(e,t,n,i){if(!this.spiegelAn||!this.rt||(this.spiegelBild=(this.spiegelBild|0)+1,this.spiegelBild%2))return;let r=this.virtuell,a=this._normal,o=n.position;this._blick.copy(o),this._blick.y=-this._blick.y,this._rot.extractRotation(n.matrixWorld),this._ziel.set(0,0,-1).applyMatrix4(this._rot).add(o),this._ziel.y=-this._ziel.y,r.position.copy(this._blick),r.up.set(0,1,0).applyMatrix4(this._rot),r.up.y=-r.up.y,r.lookAt(this._ziel),r.near=n.near,r.far=n.far,r.fov=n.fov,r.aspect=n.aspect,r.zoom=1,r.updateProjectionMatrix(),r.zoom=.25,r.updateMatrixWorld(),this.uniforms.textureMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),this._ebene.setFromNormalAndCoplanarPoint(a,this.mesh.position).applyMatrix4(r.matrixWorldInverse);let l=this._clip.set(this._ebene.normal.x,this._ebene.normal.y,this._ebene.normal.z,this._ebene.constant),c=r.projectionMatrix,h=this._q;h.x=(Math.sign(l.x)+c.elements[8])/c.elements[0],h.y=(Math.sign(l.y)+c.elements[9])/c.elements[5],h.z=-1,h.w=(1+c.elements[10])/c.elements[14],l.multiplyScalar(2/l.dot(h)),c.elements[2]=l.x,c.elements[6]=l.y,c.elements[10]=l.z+1-.003,c.elements[14]=l.w;let u=e.getRenderTarget();this.mesh.visible=!1,e.setRenderTarget(this.rt),e.setClearColor(i,1),e.clear(),e.render(t,r),this.mesh.visible=!0,e.setRenderTarget(u)}}});function Fr(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=$m(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let b=0;b<a[h].length;++b)d.push(a[h][b][f]);let p=$m(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function $m(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new ct(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let b=h.getComponent(f,p);o.setComponent(f+u,p,b)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Ed(s,e){if(e===Kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Pa||e===al){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Pa)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Wh=ut(()=>{Pt()});async function Ur(s,e,t=0,n=2){let i=await Promise.all([0,1,2].map(o=>o>=t&&o<=n?s.glb(`welt/modelle/${e}_lod${o}.glb`):Promise.resolve(null))),r=i.find(o=>o),a=r?{...r.scene.userData||{}}:{};return{name:e,stufen:i,extras:a,da:!!r}}function zr(s){let e=[];return s.traverse(t=>{t.name&&t.name.startsWith("anker_licht")&&e.push(t)}),e}function Fa(s,e=16769720){let t=s.userData&&s.userData.farbe;return new we(typeof t=="string"&&/^#[0-9a-f]{6}$/i.test(t)?t:e)}function Sd(s,{schattenWerfen:e=!1,schattenEmpfangen:t=!1}={}){return s.traverse(n=>{n.isMesh&&(n.frustumCulled=!1,n.layers.enable(Dt),n.castShadow=e,n.receiveShadow=t)}),s}function qh(s,e=1,t={}){let n=new To,i=!0;return s.stufen.forEach((r,a)=>{if(!r)return;let o=Sd(r.scene.clone(!0),t);n.addLevel(o,i?0:Nr[a]*e),i=!1}),n.autoUpdate=!0,n}function lS(s,e){let t=new ht;for(let n of e){let i=s.attributes[n],r=new Float32Array(i.count*i.itemSize);for(let a=0;a<i.count;a++)for(let o=0;o<i.itemSize;o++)r[a*i.itemSize+o]=i.getComponent(a,o);t.setAttribute(n,new ct(r,i.itemSize))}return t.setIndex(s.index.clone()),t}function Ii(s,{behalten:e=/^$/}={}){s.updateMatrixWorld(!0);let t=new Map;s.traverse(a=>{if(!a.isMesh||a.isSkinnedMesh||a.isInstancedMesh||a.children.length||Array.isArray(a.material)||a.morphTargetInfluences||!a.geometry.index)return;for(let l=a;l&&l!==s;l=l.parent)if(e.test(l.name||""))return;let o=t.get(a.material)||[];o.push(a),t.set(a.material,o)});let n=new Pe().copy(s.matrixWorld).invert(),i=new Pe,r=0;for(let[a,o]of t){if(o.length<2)continue;let l=["position","normal","uv","uv1"].filter(f=>o.every(d=>d.geometry.attributes[f]));if(!l.includes("position"))continue;let c=o.map(f=>lS(f.geometry,l).applyMatrix4(i.multiplyMatrices(n,f.matrixWorld))),h=null;try{h=Fr(c,!1)}catch{h=null}if(!h)continue;for(let f of o)f.parent.remove(f);let u=new Q(h,a);u.name="verschmolzen:"+(a.name||""),u.frustumCulled=!1,u.castShadow=o[0].castShadow,u.receiveShadow=o[0].receiveShadow,u.layers.mask=o[0].layers.mask,u.renderOrder=o[0].renderOrder,s.add(u),r+=o.length}return r}var Nr,$s=ut(()=>{Pt();Wh();ni();Nr=[0,30,95]});function ii(s){let e=s.length,t=s.map(a=>a[0]),n=s.map(a=>a[1]),i=new Array(e);if(e===1)return()=>n[0];let r=new Array(e-1);for(let a=0;a<e-1;a++)r[a]=(n[a+1]-n[a])/(t[a+1]-t[a]);i[0]=r[0],i[e-1]=r[e-2];for(let a=1;a<e-1;a++)i[a]=r[a-1]*r[a]<=0?0:.5*(r[a-1]+r[a]);for(let a=0;a<e-1;a++){if(r[a]===0){i[a]=0,i[a+1]=0;continue}let o=i[a]/r[a],l=i[a+1]/r[a],c=o*o+l*l;if(c>9){let h=3/Math.sqrt(c);i[a]=h*o*r[a],i[a+1]=h*l*r[a]}}return a=>{if(a<=t[0])return n[0];if(a>=t[e-1])return n[e-1];let o=0;for(;a>t[o+1];)o++;let l=t[o+1]-t[o],c=(a-t[o])/l,h=c*c,u=h*c,f=2*u-3*h+1,d=u-2*h+c,p=-2*u+3*h,b=u-h;return f*n[o]+d*l*i[o]+p*n[o+1]+b*l*i[o+1]}}function Br(s){let e=ii(s.map(i=>[i[0],i[1][0]])),t=ii(s.map(i=>[i[0],i[1][1]])),n=ii(s.map(i=>[i[0],i[1][2]]));return(i,r)=>r.set(e(i),t(i),n(i))}function Na(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var at,Wt,yt,mt,Zi,ln=ut(()=>{at=(s,e=0,t=1)=>s<e?e:s>t?t:s,Wt=(s,e,t)=>s+(e-s)*t,yt=(s,e,t)=>{let n=at((t-s)/(e-s));return n*n*(3-2*n)},mt=(s,e,t,n,i)=>yt(e,t,s)*(1-yt(n,i,s));Zi=(s,e)=>1-Math.exp(-s/e)});var rA,Qm,cS,Xh,eg=ut(()=>{Pt();$s();ln();rA=new R,Qm=new R,cS=.03,Xh=class s{constructor(e,t={}){this.szene=e,this.renderer=t.renderer||null,this.eintraege=[],this.lichter=[],this.anzahl=0,this.schatten=!1,this.schattenWeite=40,this.tau=.22,this._kand=[],this._gewaehlt=new Set,t.stufe&&this.setzeStufe(t.stufe)}anmelden(e,{prioritaet:t=1}={}){if(!e)return null;let n=e.userData||{},i=Math.min(170,Math.max(6,+n.winkel||90)),r={anker:e,prioritaet:Math.max(.05,t),pos:new R,dir:new R(0,-1,0),farbe:Fa(e),typ:n.typ==="punkt"?"punkt":"spot",winkel:Vt.degToRad(i)/2,reichweite:Math.max(2,+n.reichweite||20),candela:Math.max(5,(+n.staerke||600)*cS),d:1e9,slot:-1,an:!0};return this.eintraege.push(r),r}abmelden(e){let t=this.eintraege.findIndex(i=>i===e||i.anker===e);if(t<0)return;let n=this.eintraege[t];if(n.slot>=0){let i=this.lichter[n.slot];i.soll=0,i.frei=!0,n.slot=-1}this.eintraege.splice(t,1)}setzeStufe(e){let t=Math.max(0,e.lichter|0);for(this.schatten=!!e.schatten&&!!this.renderer;this.lichter.length<t;){let n=new xs(16777215,0,10,Math.PI/4,.45,2);n.layers.enable(1),n.name="lichtpool_"+this.lichter.length,n.castShadow=!1,n.shadow.mapSize.set(512,512),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.shadow.camera.near=.5,n.shadow.camera.far=40,n.position.set(0,-100,0);let i=new It;i.position.set(0,-110,0),n.target=i,this.szene.add(n,i),this.lichter.push({licht:n,ziel:i,eintrag:null,ist:0,soll:0,frei:!0})}for(;this.lichter.length>t;){let n=this.lichter.pop();n.eintrag&&(n.eintrag.slot=-1),this.szene.remove(n.licht,n.ziel),n.licht.dispose()}this.anzahl=t;for(let n=0;n<this.lichter.length;n++)this.lichter[n].licht.castShadow=this.schatten&&n===0;if(this.renderer){let n=this.renderer.shadowMap;n.enabled!==this.schatten&&(n.enabled=this.schatten,n.type=Ar,n.autoUpdate=!1,n.needsUpdate=!0)}}static sichtbar(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}_stelle(e){let t=e.eintrag,n=e.licht;t&&(n.color.copy(t.farbe),n.angle=Math.min(Math.PI/2-.02,t.winkel),n.distance=t.reichweite,n.penumbra=.45,n.decay=2,n.shadow.camera.far=Math.max(10,t.reichweite),n.shadow.camera.updateProjectionMatrix())}_tausche(e,t){let n=this.lichter[e],i=this.lichter[t];for(let r of["eintrag","ist","soll","frei"]){let a=n[r];n[r]=i[r],i[r]=a}n.eintrag&&(n.frei||(n.eintrag.slot=e),this._stelle(n)),i.eintrag&&(i.frei||(i.eintrag.slot=t),this._stelle(i))}update(e,t=1/60){if(!this.anzahl)return;let n=e.position,i=this._kand;i.length=0;for(let l of this.eintraege)l.an=s.sichtbar(l.anker),l.an&&(l.anker.getWorldPosition(l.pos),l.d=l.pos.distanceTo(n)/l.prioritaet,l.d<220&&i.push(l));i.sort((l,c)=>l.d-c.d);let r=this._gewaehlt;r.clear();for(let l=0;l<i.length&&l<this.anzahl;l++)r.add(i[l]);let a=Zi(t,this.tau);for(let l=0;l<this.lichter.length;l++){let c=this.lichter[l];c.eintrag&&!c.frei&&(c.soll=r.has(c.eintrag)?1:0),c.eintrag&&c.soll===0&&c.ist<.03&&(c.eintrag.slot=-1,c.eintrag=null,c.frei=!0,c.ist=0)}let o=this.lichter.length;for(let l=0;l<i.length&&l<this.anzahl;l++){let c=i[l];if(c.slot>=0)continue;let h=-1;for(let f=0;f<o;f++){let d=this.schatten&&l!==0?(f+1)%o:f;if(this.lichter[d].frei){h=d;break}}if(h<0)continue;let u=this.lichter[h];u.frei=!1,u.eintrag=c,c.slot=h,u.soll=1,u.ist=0,this._stelle(u),h===0&&(this.schattenIst=0)}if(this.schatten&&o){let l=this.lichter[0],c=i.length?i[0]:null,h=!!c&&!l.frei&&l.eintrag===c;this.schattenIst=(this.schattenIst||0)+((h?1:0)-(this.schattenIst||0))*a,!h&&this.schattenIst<.03&&c&&c.slot>0&&(this._tausche(0,c.slot),this.schattenIst=0),l.licht.shadow.intensity=this.schattenIst}for(let l of this.lichter){let c=l.eintrag;if(l.ist+=(l.soll-l.ist)*a,!c){l.licht.intensity=0;continue}c.anker.getWorldDirection(Qm),l.licht.position.copy(c.pos),l.ziel.position.copy(c.pos).addScaledVector(Qm,Math.max(1,c.reichweite*.5)),l.licht.intensity=c.candela*l.ist}if(this.schatten&&this.renderer){let l=this.lichter[0],c=l?l.eintrag:null;(!this._schattenPos||this._schattenPos.distanceToSquared(e.position)>.09||c!==this._schattenAnker||l&&Math.abs(l.ist-l.soll)>.05)&&(this.renderer.shadowMap.needsUpdate=!0,this._schattenPos=(this._schattenPos||new R).copy(e.position),this._schattenAnker=c)}}}});function ng(s,e){let t=new It;return t.name=s.name,t.userData={...s.userData||{}},t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,s.updateWorldMatrix(!0,!1),t.matrix.multiplyMatrices(e,s.matrixWorld),t.matrixWorld.copy(t.matrix),t}var tg,$i,hS,uS,fS,Hr,Td=ut(()=>{Pt();ni();$s();tg=new Pe,$i=new R,hS=2.2,uS=Math.cos(Vt.degToRad(2)),fS=Vt.degToRad(15),Hr=class{constructor(e,t,n,i={}){for(this.eltern=e,this.plaetze=n,this.n=n.length,this.aktiv=this.n,this.weiten=i.weiten||Nr,this.lodWeite=i.lodWeite??1,this.maxWeite=i.maxWeite??900,this.takt=i.takt||6,this.letzte=new R(1e9,0,0),this.letzteRichtung=new R,this.kegel=i.blickKegel||null,this.sanft=!1,this.bild=i.versatz||0,this.sichtbar=!0,this.erzwingen=!0,this.positionen=n.map(r=>new R().setFromMatrixPosition(r)),this.zuordnung=new Int8Array(this.n).fill(-2),this.an=new Uint8Array(this.n),this.stufen=[],this.geladen=-1,this.groebste=-1,t.stufen.forEach((r,a)=>{if(!r){this.stufen.push(null);return}r.scene.updateMatrixWorld(!0);let o=[];r.scene.traverse(l=>{if(!l.isMesh)return;let c=l.material;i.material&&(c=i.material(c,l,a)||c);let h=new Lt(l.geometry,c,this.n);h.name=(i.name||t.name||"instanzen")+":"+l.name+":"+a,h.count=0,h.frustumCulled=!1;let u=i.schatten?!!i.schatten(l,a):!1;h.castShadow=u&&!!i.schattenAn,h.receiveShadow=!1,(typeof i.spiegel=="function"?i.spiegel(l):i.spiegel!==!1)&&h.layers.enable(Dt),h.instanceMatrix.setUsage(Qn),e.add(h),o.push({im:h,lokal:l.matrixWorld.clone(),schatten:u})}),this.stufen.push({teile:o}),this.geladen<0&&(this.geladen=a),this.groebste=a}),this.feinste=Math.max(this.geladen,i.feinste??0),this.feinste>this.groebste&&(this.feinste=this.groebste);this.feinste<this.groebste&&!this.stufen[this.feinste];)this.feinste++}stufeFuer(e,t){let n=this.feinste;for(let i=this.feinste+1;i<=this.groebste;i++){if(!this.stufen[i])continue;let r=this.weiten[i]*this.lodWeite*(t>=0&&t<i?1.05:.95);e>=r&&(n=i)}return n}setzeStufe(e){this.lodWeite=e.lodWeite??1;let t=Math.max(this.geladen,e.lod??0);for(t>this.groebste&&(t=this.groebste);t<this.groebste&&!this.stufen[t];)t++;this.feinste=t;for(let n of this.stufen)if(n)for(let i of n.teile)i.im.castShadow=i.schatten&&!!e.schatten;this.erzwingen=!0}setzeAnzahl(e){let t=Math.max(0,Math.min(this.n,e|0));t!==this.aktiv&&this.zuordnung.some(n=>n>=0)&&(this.sanft=!0),this.aktiv=t,this.erzwingen=!0}setzeSichtbar(e){this.sichtbar=e;for(let t of this.stufen)if(t)for(let n of t.teile)n.im.visible=e}update(e,t=0){if(!this.sichtbar)return;this.bild++;let n=e.position;e.getWorldDirection?e.getWorldDirection($i):$i.set(0,0,1);let i=n.distanceToSquared(this.letzte)>4||this.kegel&&$i.dot(this.letzteRichtung)<uS;if(!this.erzwingen&&!i&&this.bild%this.takt!==0)return;this.erzwingen=!1,this.letzte.copy(n),this.letzteRichtung.copy($i);let r=t>0?Math.min(this.maxWeite,hS/t):this.maxWeite,a=this.kegel,o=a?Math.atan(Math.tan(Vt.degToRad(e.fov||60)/2)*Math.sqrt(1+(e.aspect||1)**2))+fS:0,l=this.zuordnung,c=this.an,h=0,u=!1;for(let f=0;f<this.n;f++){let d=this.positionen[f],p=d.x-n.x,b=d.y-n.y,m=d.z-n.z,g=Math.sqrt(p*p+b*b+m*m),_=f<this.aktiv?1:0;if(c[f]!==_){let x=g<r&&p*$i.x+b*$i.y+m*$i.z>-.3*g;!this.sanft||!x||_===0&&l[f]<0?c[f]=_:u=!0}let E=c[f]&&g<r?this.stufeFuer(g,l[f]):-1;if(E>=0&&a){let x=b+a.mitte,M=Math.sqrt(p*p+x*x+m*m);if(M>a.radius*2.5){let v=(p*$i.x+x*$i.y+m*$i.z)/M;Math.acos(v<-1?-1:v>1?1:v)>o+Math.atan(a.radius/M)&&(E=-1)}}l[f]!==E&&(l[f]>=0&&(h|=1<<l[f]),E>=0&&(h|=1<<E),l[f]=E)}if(this.sanft=u,!!h)for(let f=0;f<this.stufen.length;f++){let d=this.stufen[f];if(!d||!(h&1<<f))continue;let p=0;for(let b=0;b<this.n;b++)if(l[b]===f){for(let m of d.teile)tg.multiplyMatrices(this.plaetze[b],m.lokal),m.im.setMatrixAt(p,tg);p++}for(let b of d.teile){let m=b.im.instanceMatrix;b.im.count=p,m.clearUpdateRanges(),m.addUpdateRange(0,p*16),m.needsUpdate=!0}}}entsorgen(){for(let e of this.stufen)if(e)for(let t of e.teile)this.eltern.remove(t.im),t.im.dispose();this.stufen=[]}}});function jh(s,e){return e.copy(s.position),s.parent&&s.parent.localToWorld(e),e}function rg(s){return dS.copy(s.matrixWorld).invert()}function Cd(s){let e=s.userData;e.geschoben&&s.position.equals(e.geschoben)?s.position.copy(e.heim):(e.heim||(e.heim=new R)).copy(s.position)}function ys(s,e,t=.9,n=.72,i=null){if(!s.visible)return;let a=e.aspect<.9?Math.min(t,.84):t,o=rg(e);if(Cd(s),jh(s,dn).applyMatrix4(o),dn.z>=-.1)return;Ad.copy(s.scale);let l=Math.tan(Vt.DEG2RAD*e.fov*.5),c=l*e.aspect,h=Math.max(0,-dn.z*c*a-Ad.x*.5),u=-dn.z*l*n-Ad.y*.5,f=0,d=0;if(dn.x<-h?f=-h-dn.x:dn.x>h&&(f=h-dn.x),dn.y>u&&(d=u-dn.y),f===0&&d===0){s.userData.geschoben=null;return}if(sg(s,e,o,f,d),(s.userData.geschoben||(s.userData.geschoben=new R)).copy(s.position),i)for(let p of i)p!==s&&sg(p,e,o,f,d)}function Qs(s,e,t=.045,n=.09){s.userData.grundSkala||(s.userData.grundSkala=s.scale.clone());let i=s.userData.grundSkala;if(!s.visible){s.scale.copy(i);return}if(Cd(s),jh(s,dn).applyMatrix4(rg(e)),dn.z>=-.1){s.scale.copy(i);return}let r=Math.tan(Vt.DEG2RAD*e.fov*.5),a=2*-dn.z*r,o=t*a/i.y,l=n*a/i.y,c=a*e.aspect,h=.78*c/i.x,u=Math.min(Math.max(1,o),l,h);return s.scale.set(i.x*u,i.y*u,1),o}function Li(s,e,t=3.5,n=.08){if(!s.visible)return;Cd(s),jh(s,dn);let i=dn.distanceTo(e.position),r=Math.min(1,Math.max(0,(i-t)/t));if(s.material.opacity*=r*r*(3-2*r),s.material.opacity<.01){s.visible=!1;return}if(s.userData.tiefe===void 0&&(s.userData.tiefe=s.material.depthTest),s.material.depthTest=e.aspect<.9?!1:s.userData.tiefe,e.aspect<.9){let a=Qs(s,e,Yh,Jh);if(a>ig){let o=1-Math.min(1,(a-ig)/1);if(s.material.opacity*=o,s.material.opacity<.01){s.visible=!1;return}}}else Qs(s,e,0,n);ys(s,e)}function sg(s,e,t,n,i){jh(s,dn).applyMatrix4(t),dn.x+=n,dn.y+=i,dn.applyMatrix4(e.matrixWorld),s.parent&&s.parent.worldToLocal(dn),s.position.copy(dn)}function Zh(s,e){let t=null;if(s.scene.traverse(i=>{!t&&i.name===e&&(t=i)}),!t)return null;let n=t.clone(!0);return n.traverse(i=>{i.isMesh&&(i.frustumCulled=!1,i.layers.enable(Dt))}),n}function Pd(s,e){e.aspect>=.9||!s.visible||(Qs(s,e,Yh,Jh),ys(s,e))}var Ua,wt,za,ul,dA,wd,Rd,Nn,Kh,wn,In,tn,dn,Ad,dS,Yh,Jh,ig,ci=ut(()=>{Pt();ti();ni();Ua=150,wt=s=>(s+.5)*Ua,za=9,ul=new we().setRGB(.17,.72,.89,Tt),dA=new R(0,1,0),wd=null,Rd=null,Nn=(s,e)=>{wd=wd||ei(128);let t=new Dn(new Cn({map:wd,color:s,blending:kt,depthWrite:!1,transparent:!0,fog:!1}));return t.scale.set(e,e,1),t.layers.enable(Dt),t},Kh=s=>{Rd=Rd||Gh(128,.8,.92);let e=new Q(new st(1,1),new it({map:Rd,color:s,blending:kt,depthWrite:!1,transparent:!0,fog:!1,side:Ct}));return e.layers.enable(Dt),e},wn=s=>new it({color:s}),In=new Ne({color:2764340,roughness:.7,metalness:.3}),tn=(s,e)=>{s.material.opacity=e,s.visible=e>.01},dn=new R,Ad=new R,dS=new Pe;Yh=.034,Jh=.042,ig=2.6});function lg(){return[[-13.5,cn+95],[-18,cn+125],[-24,cn+160],[-34,cn+195],[-50,cn+225],[-70,cn+248],[-92,cn+262],[-112,cn+270]]}function pS(s){let e=ag.get(s);if(e)return e;e=[1/0,-1/0,1/0,-1/0];for(let[t,n]of s.punkte)e[0]=Math.min(e[0],t),e[1]=Math.max(e[1],t),e[2]=Math.min(e[2],n),e[3]=Math.max(e[3],n);return ag.set(s,e),e}function hg(s,e,t,n){let i=pS(s),r=s.breite*.5+n;if(e<i[0]-r||e>i[1]+r||t<i[2]-r||t>i[3]+r)return 1/0;let a=s.punkte,o=1/0;for(let l=0;l+1<a.length;l++){let c=a[l][0],h=a[l][1],u=a[l+1][0],f=a[l+1][1],d=u-c,p=f-h,b=d*d+p*p||1e-6,m=Math.max(0,Math.min(1,((e-c)*d+(t-h)*p)/b)),g=Math.hypot(e-(c+d*m),t-(h+p*m))-s.breite*.5;g<o&&(o=g)}return o}function Ba(s,e){let t=1/0;for(let n of Qh){let i=hg(n,s,e,60);i<t&&(t=i)}return t}function ug(s,e){let t=0;for(let n of Qh){if(n.flach===!1)continue;let i=n.rand??8,r=hg(n,s,e,i);if(r>=i)continue;let a=Math.max(0,r)/i;t=Math.max(t,1-a*a*(3-2*a))}return t}function Ha(s,e,t=0){for(let[n,i,r,a]of Id)if(e>=n-t&&e<=i+t&&s>=r-t&&s<=a+t)return!0;return!1}var cn,Qi,hi,$h,Id,og,Qh,cg,ag,fl=ut(()=>{ci();cn=wt(4),Qi=wt(5),hi=wt(6),$h=wt(8),Id=[[cn-75,cn+100,-20,0],[hi-62,hi+76,-50,0],[Qi+14,Qi+48,-20,0],[Qi+58,Qi+80,-15,0],[$h-48,$h-24,-20,0]],og=[[$h-50,$h-22,-24.5,0]],Qh=[{punkte:[[-4.6,cn-68],[-5.6,cn-45],[-5.6,cn+30]],breite:4.4},{punkte:[[-9.6,cn-64],[6.6,cn-64]],breite:3},{punkte:[[-11.5,cn-12],[-11.5,cn-4]],breite:6},{punkte:[[-5.85,cn-5],[-6.33,cn+24.9],[-7.76,cn+51.5],[-10.15,cn+74.8],[-13.5,cn+95]],breite:8},{punkte:lg(),breite:9,flach:!1,profil:!0},{punkte:[[-3,Qi+19],[-4.1,Qi+21],[-8.5,Qi+27],[-12,Qi+35]],breite:13},{punkte:[[-12,Qi+35],[-16,Qi+44]],breite:10,flach:!1},{punkte:[[-5.4,hi-128],[-5.4,hi-58]],breite:4.4},{punkte:[[-5.4,hi-58],[-6.9,hi-50],[-9.4,hi-40],[-10.2,hi-30.5]],breite:8},{punkte:[[-10.2,hi+44.5],[-9.4,hi+54],[-6.9,hi+63],[-5.4,hi+70]],breite:8},{punkte:[[-5.4,hi+70],[-5.4,hi+150]],breite:4.4}];cg=lg(),ag=new WeakMap});function eu(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function mS(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=eu(t,n),c=eu(t+1,n),h=eu(t,n+1),u=eu(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function Kn(s,e,t=4,n=2.07,i=.5){let r=0,a=.5,o=1,l=0;for(let c=0;c<t;c++)r+=a*mS(s*o+c*17.3,e*o-c*9.1),l+=a,a*=i,o*=n;return r/l}function tu(s,e){let t=ug(s,e);for(let[n,i,r,a]of gS){let o=Math.min(e-n,i-e),l=Math.min(s-r,a-s),c=Math.min(o,l);c>-6&&(t=Math.max(t,Or(-6,0,c)))}return t}function gg(s,e){return Or(nu,nu+mg,Math.abs(s))*(1-tu(s,e))}function bS(s,e){let t=gg(s,e);if(t<=0)return fg;let n=Kn(s*.018+11,e*.018+5,4),i=Kn(s*.07,e*.07+2,2),r=.3+6.6*n*n+1.2*i;return fg+t*r}function bg(s,e){let t=0;for(let[n,i,r,a,o]of xS){let l=s-n,c=e-i;if(Math.abs(l)>r*1.3||Math.abs(c)>r*1.3)continue;let h=Math.hypot(l,c),u=Math.atan2(c,l),f=Math.cos(u),d=Math.sin(u),p=.72+.56*Kn(f*2.2+o*3.7,d*2.2+o*1.3,3),b=h/(r*p);if(b>=1)continue;let m=1-b,g=(Kn(u*1.9+o,m*3+o*2,3)-.5)*.5,_=(Kn(u*7+o*1.7,m*11+o,3)-.5)*.14,E=a*Math.pow(m,1.15)*(1+g*(1-m*.6)+_*(.5+.5*m))+(Kn(f*3.1+o*5+20,d*3.1+o*2,4)-.5)*8*m*(1-m);E>t&&(t=E)}return t}function vS(s,e){let t=Math.abs(s);if(t<dg)return 0;let n=(t-dg)/190,i=n<1?Math.pow(n,1.5):Math.max(.15,1-(n-1)*.3),r=75+95*Kn(e*.0045+3.1,t*.0025+(s<0?40:0),3),a=(Kn(t*.011+7,e*.011,4)-.5)*2*32,o=(Kn(t*.05,e*.05+9,3)-.5)*2*7;return Math.max(0,i*(r+a)+o*Math.min(1,n*2))}function yS(s,e){if(e<iu)return 0;let t=Math.abs(s),n=(e-iu)/230,i=n<1?Math.pow(n,1.6):Math.max(.4,1-(n-1)*.8),r=.28+.72*Or(25,160,t),a=55+75*Kn(s*.006+13,2.1,3)+(Kn(s*.013+3,e*.013,4)-.5)*2*22,o=i*r*a,l=(e-_S)/240;if(l>0){let c=150+100*Kn(s*.0042-7,5.3,3)+(Kn(s*.016,e*.016+4,3)-.5)*2*18;o=Math.max(o,Math.pow(Math.min(1,l),1.25)*c)}return Math.max(0,o)}function vg(s,e){return bS(s,e)+Math.max(vS(s,e),yS(s,e),bg(s,e)*gg(s,e))}function MS(){su=[];for(let s of Qh){if(!s.profil)continue;let e=s.punkte,t=[],n=0;for(let c=0;c+1<e.length;c++){let[h,u]=e[c],[f,d]=e[c+1],p=Math.hypot(f-h,d-u),b=Math.max(1,Math.ceil(p/4));for(let m=0;m<b;m++){let g=m/b;t.push({s:n+p*g,x:h+(f-h)*g,z:u+(d-u)*g})}n+=p}t.push({s:n,x:e[e.length-1][0],z:e[e.length-1][1]});let i=t.map(c=>vg(c.x,c.z)),r=i.map((c,h)=>{let u=0,f=0;for(let d=0;d<i.length;d++)Math.abs(t[d].s-t[h].s)<=25&&(u+=i[d],f++);return u/f});for(let c=0;c<r.length;c++){let h=tu(t[c].x,t[c].z);h>0&&(r[c]+=(i[c]-r[c])*h)}let a=.1,o=c=>c<12?0:c<52?.06*(c-12)*(c-12)/80:1.2+.06*(c-52),l=r[0];for(let c=0;c<r.length;c++)r[c]=Math.min(r[c],l+o(t[c].s));for(let c=1;c<r.length;c++)r[c]=Math.min(r[c],r[c-1]+a*(t[c].s-t[c-1].s));for(let c=r.length-2;c>=0;c--)r[c]=Math.min(r[c],r[c+1]+a*(t[c+1].s-t[c].s));for(let c=0;c<2;c++){let h=r.slice();for(let u=1;u<r.length-1;u++){if(tu(t[u].x,t[u].z)>0)continue;let f=0,d=0;for(let p=Math.max(0,u-2);p<=Math.min(r.length-1,u+2);p++)f+=h[p],d++;r[u]=f/d}}su.push({s,proben:t,h:r,rand:s.rand??8})}}function ES(s,e,t){su||MS();let n=t;for(let i of su){let r=i.s.breite*.5,a=i.rand,o=1/0,l=0;for(let d=0;d<i.proben.length;d++){let p=i.proben[d],b=(p.x-s)*(p.x-s)+(p.z-e)*(p.z-e);b<o&&(o=b,l=d)}let c=i.h[l],h=o;for(let d of[l-1,l]){if(d<0||d+1>=i.proben.length)continue;let p=i.proben[d],b=i.proben[d+1],m=b.x-p.x,g=b.z-p.z,_=m*m+g*g||1e-6,E=Math.max(0,Math.min(1,((s-p.x)*m+(e-p.z)*g)/_)),x=p.x+m*E-s,M=p.z+g*E-e,v=x*x+M*M;v<=h&&(h=v,c=i.h[d]+(i.h[d+1]-i.h[d])*E)}let u=Math.sqrt(h)-r;if(u>=a)continue;let f=u<=0?1:1-u/a*(u/a)*(3-2*u/a);c>n&&(f*=(1-tu(s,e))*Or(nu,nu+mg,Math.abs(s))),n=n+(c-n)*f}return n}function ki(s,e){return ES(s,e,vg(s,e))}function Mg(s,e,t=13,n=-.015){yg={z0:s,z1:e,bis:t,y:n}}function Ms(s,e){let t=_g;if(!t)return ki(s,e);let{xs:n,nx:i,z0:r,schritt:a,nz:o,pos:l}=t;if(s<n[0]||s>n[i-1]||e<r||e>r+(o-1)*a)return ki(s,e);let c=0,h=i-2;for(;c<h;){let S=c+h+1>>1;n[S]<=s?c=S:h=S-1}let u=c,f=Math.min(o-2,Math.max(0,Math.floor((e-r)/a))),d=(s-n[u])/(n[u+1]-n[u]),p=(e-r-f*a)/a,b=f*i+u,m=b+1,g=b+i,_=g+1,E=l[b*3+1],x=l[m*3+1],M=l[g*3+1],v=l[_*3+1];return d+p<=1?E+(x-E)*d+(M-E)*p:v+(M-v)*(1-d)+(x-v)*(1-p)}function Di(s,e){let t=Ms(s,e),n=yg,i=Math.abs(s)<n.bis&&e>=n.z0&&e<=n.z1?n.y:SS;return t>i?t:i}function TS(s={}){let e=new Ne({color:3816762,roughness:1,metalness:0,...s.material||{}}),t={felsFarbe:{value:new we(.055,.07,.095)},schneeFarbe:{value:new we(.62,.68,.8)},schneeHoehe:{value:pg.hoehe},schneeWeich:{value:pg.weich},nebelBerg:{value:.2},waldBoden:{value:new we(.42,.56,.44)}};return e.userData.uniforms=t,e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fels; varying float vFels; varying vec3 vWp;`).replace("#include <project_vertex>",`#include <project_vertex>
vFels = fels; vWp = (modelMatrix * vec4(transformed, 1.0)).xyz;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        uniform vec3 felsFarbe, schneeFarbe, waldBoden; uniform float schneeHoehe, schneeWeich, nebelBerg;
        varying float vFels; varying vec3 vWp;
        float gHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float gNoise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(gHash(i), gHash(i + vec2(1.0, 0.0)), u.x), mix(gHash(i + vec2(0.0, 1.0)), gHash(i + vec2(1.0, 1.0)), u.x), u.y); }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        // Waldboden: abseits der Stra\xDFe dunkler und gr\xFCner (Nadelstreu unter den B\xE4umen), fleckig; dazu Gras-
        // und Erdflecken in zwei Ma\xDFst\xE4ben, damit der Boden nicht \xFCberall gleich grau ist (Luka 22.10., Punkt 13)
        float gWald = smoothstep(14.0, 30.0, abs(vWp.x)) * (1.0 - vFels);
        {
          float fl = gNoise(vWp.xz * 0.018) * 0.6 + gNoise(vWp.xz * 0.09) * 0.4;
          float gras = smoothstep(0.38, 0.62, gNoise(vWp.xz * 0.05 + 3.0) * 0.55 + gNoise(vWp.xz * 0.23 + 7.0) * 0.45);
          float erde = smoothstep(0.55, 0.8, gNoise(vWp.xz * 0.031 - 5.0));
          vec3 boden = mix(vec3(1.0), vec3(0.78, 1.06, 0.7), gras * (1.0 - vFels));          // Grasflecken: gr\xFCner
          boden = mix(boden, vec3(0.9, 0.8, 0.66), erde * (1.0 - gras) * (1.0 - vFels) * 0.6);   // Erde, Kies: brauner
          boden *= mix(vec3(1.0), waldBoden, gWald * smoothstep(0.25, 0.6, fl));
          diffuseColor.rgb *= boden;
        }
        if (vFels > 0.001) {
          // Berge: Fels mit Relief (gest\xF6rte Normale aus einem H\xF6henfeld), Schichtung, Ger\xF6llhalden, Schnee auf
          // flachen Lagen \xFCber der Schneegrenze (verwehte Kante, Rinnen) und Wald am Fu\xDF bis zur Baumgrenze
          // (Luka 22.10., Punkt 8: \u201Eglatte graue Fl\xE4chen wie Plastik\u201C)
          vec3 wN = inverseTransformDirection(normal, viewMatrix);
          float ent = length(vViewPosition);
          float fein = smoothstep(900.0, 120.0, ent);                       // feines Relief nur in der N\xE4he (kein Flimmern)
          // H\xF6henfeld des Reliefs (Welt-xz, dazu Schichten \xFCber y)
          vec2 q = vWp.xz;
          float r1 = gNoise(q * 0.045), r2 = gNoise(q * 0.19 + 11.0), r3 = gNoise(q * 0.8 + 3.0);
          float relief = r1 * 0.55 + r2 * 0.3 + r3 * 0.15 * fein;
          // Gradient des Reliefs (zentrale Differenzen) \u2192 gest\xF6rte Normale
          float e1 = 0.9;
          vec3 wNp = wN;
          if (ent < 700.0) {   // Relief (Gradient aus 8 weiteren Rauschaufrufen) nur, wo man es sieht
            float e2 = 4.0;   // mittlere Oktave (80-m-Wellen): Rinnen und Rippen, die man auch von 100 m sieht
            float hx = (gNoise((q + vec2(e1, 0.0)) * 0.19 + 11.0) - gNoise((q - vec2(e1, 0.0)) * 0.19 + 11.0)) * 0.3
                     + (gNoise((q + vec2(e1, 0.0)) * 0.045) - gNoise((q - vec2(e1, 0.0)) * 0.045)) * 0.55
                     + (gNoise((q + vec2(e2, 0.0)) * 0.012 + 5.0) - gNoise((q - vec2(e2, 0.0)) * 0.012 + 5.0)) * 1.4;
            float hz = (gNoise((q + vec2(0.0, e1)) * 0.19 + 11.0) - gNoise((q - vec2(0.0, e1)) * 0.19 + 11.0)) * 0.3
                     + (gNoise((q + vec2(0.0, e1)) * 0.045) - gNoise((q - vec2(0.0, e1)) * 0.045)) * 0.55
                     + (gNoise((q + vec2(0.0, e2)) * 0.012 + 5.0) - gNoise((q - vec2(0.0, e2)) * 0.012 + 5.0)) * 1.4;
            float staerke = 2.2 * (0.35 + 0.65 * fein) * vFels * smoothstep(700.0, 400.0, ent);
            wNp = normalize(wN + vec3(-hx * staerke, 0.0, -hz * staerke));
          }
          float hang = smoothstep(0.42, 0.78, wNp.y);                                    // 1 = flach
          float schicht = gNoise(vec2(vWp.y * 0.33 + relief * 2.5, dot(q, vec2(0.7, 0.7)) * 0.012));   // Gesteinsschichten
          float hoch = smoothstep(schneeHoehe - schneeWeich, schneeHoehe + schneeWeich, vWp.y + (relief - 0.5) * 2.0 * schneeWeich);
          float rinne = smoothstep(0.55, 0.3, r2);                                        // Mulden: dort bleibt Schnee tiefer liegen
          float gSchnee = clamp(hoch * hang + hoch * rinne * 0.6 * smoothstep(0.3, 0.6, wNp.y), 0.0, 1.0);
          // Fels: dunkles Blaugrau, Schichten, hier und da Ocker; steile W\xE4nde dunkler
          vec3 fels = felsFarbe * (0.6 + 0.8 * relief) * (0.75 + 0.5 * schicht) * (0.7 + 0.3 * smoothstep(0.2, 0.9, wNp.y));
          fels = mix(fels, vec3(0.085, 0.075, 0.055) * (0.6 + 0.8 * relief), smoothstep(0.55, 0.8, gNoise(q * 0.011 + 21.0)) * 0.6);
          // Ger\xF6llhalden: mittlere H\xE4nge unter der Schneegrenze, k\xF6rnig und heller
          float geroell = smoothstep(0.5, 0.75, wNp.y) * (1.0 - hoch) * smoothstep(0.42, 0.68, gNoise(q * 0.03 + 9.0));
          vec3 halde = vec3(0.1, 0.105, 0.115) * (0.7 + 0.6 * r3) * (0.8 + 0.4 * r2);
          fels = mix(fels, halde, geroell * 0.8);
          // Wald am Fu\xDF: bis zur Baumgrenze (\u2248 40 m, verwehte Kante), nicht an steilen W\xE4nden
          float baumgrenze = 40.0 + (gNoise(q * 0.02 + 1.0) - 0.5) * 18.0;
          float wald = smoothstep(baumgrenze + 6.0, baumgrenze - 10.0, vWp.y) * smoothstep(0.35, 0.6, wNp.y);
          float korn = gNoise(q * 1.7 + 5.0) * 0.6 + gNoise(q * 0.5 + 2.0) * 0.4;             // Kronen: k\xF6rnig, mondseitig heller
          vec3 waldFarbe = vec3(0.03, 0.055, 0.036) * (0.45 + 1.1 * korn * fein + 0.5 * (1.0 - fein) * (r2 * 0.5 + r3 * 0.5));
          vec3 berg = mix(fels, waldFarbe, wald * 0.85);
          berg = mix(berg, schneeFarbe * (0.8 + 0.2 * relief) * (0.85 + 0.15 * r3), gSchnee);
          diffuseColor.rgb = mix(diffuseColor.rgb, berg, vFels);
          roughnessFactor = mix(roughnessFactor, mix(0.95, 0.7, gSchnee), vFels);
          normal = normalize(mix(normal, (viewMatrix * vec4(wNp, 0.0)).xyz, vFels));
        }`).replace("#include <fog_fragment>",`
        #ifdef USE_FOG
          #ifdef FOG_EXP2
            float gF = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth * mix(1.0, nebelBerg, vFels));
          #else
            float gF = smoothstep(fogNear, fogFar, vFogDepth) * mix(1.0, nebelBerg, vFels);
          #endif
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, gF);
        #endif`)},e.customProgramCacheKey=()=>"gelaende-fels-schnee-6",e}function Eg(s,e,t={}){let n=t.schritt||6,i=t.grob?Ld.filter((m,g)=>g%2===0||g===Ld.length-1):Ld,r=[];for(let m=i.length-1;m>=1;m--)r.push(-i[m]);for(let m=0;m<i.length;m++)r.push(i[m]);let a=Math.ceil((e-s)/n)+1,o=r.length,l=new Float32Array(o*a*3),c=new Float32Array(o*a*2),h=new Float32Array(o*a),u=0;for(let m=0;m<a;m++){let g=s+m*n;for(let _=0;_<o;_++,u++){let E=r[_];l[u*3]=E,l[u*3+1]=ki(E,g),l[u*3+2]=g,c[u*2]=E/4.5,c[u*2+1]=g/4.5,h[u]=Math.max(Or(150,235,Math.abs(E)),Or(iu+60,iu+230,g),Or(4,14,bg(E,g)))}}let f=new Uint32Array((o-1)*(a-1)*6),d=0;for(let m=0;m<a-1;m++)for(let g=0;g<o-1;g++){let _=m*o+g,E=_+1,x=_+o,M=x+1;f[d++]=_,f[d++]=x,f[d++]=E,f[d++]=E,f[d++]=x,f[d++]=M}let p=new ht;p.setAttribute("position",new ct(l,3)),p.setAttribute("uv",new ct(c,2)),p.setAttribute("fels",new ct(h,1)),p.setIndex(new ct(f,1)),p.computeVertexNormals(),_g={xs:r,nx:o,z0:s,schritt:n,nz:a,pos:l};let b=new Q(p,t.material||TS());return b.name="gelaende",b.frustumCulled=!1,b.receiveShadow=!0,b}var Or,gS,nu,mg,fg,dg,er,xS,xg,iu,_S,su,_g,yg,SS,pg,Ld,tr=ut(()=>{fl();Pt();ci();Or=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},gS=[...Id,...og];nu=7.5,mg=8.5,fg=-.05,dg=170;er=wt(5),xS=[[-130,er+70,75,88,.5],[140,er+50,88,105,1.87],[-230,er+200,120,138,3.24],[120,er+215,105,148,4.61],[-160,er-80,98,94,5.98],[-230,er+480,165,162,7.35],[240,er+500,165,175,8.72],[-170,er+150,98,125,10.09]];xg=wt(8),iu=xg+600,_S=xg+930;su=null;_g=null,yg={z0:-1/0,z1:1/0,bis:13,y:-.015},SS=-.3;pg={hoehe:72,weich:22};Ld=[0,4,7,9,11,13,15.5,18.5,22,26,31,37,44,52,61,71,82,94,106,118,130,142,154,166,178,190,202,214,226,238,250,262,275,288,302,316,330,350,375,405,440,485,540]});function IS(s,e){return Kn(s*.011+5.3,e*.011-2.1,3)<.34}function LS(s,e){let t=wt(2);return s<0?e>t-95&&e<t+55&&s>-30:e>t-70&&e<t+45&&s<17}function kS(s=3){let e=new Map,t=(n,i)=>n*1048576+i;return{frei(n,i,r){let a=Math.floor((n-r)/s),o=Math.floor((n+r)/s),l=Math.floor((i-r)/s),c=Math.floor((i+r)/s);for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){let f=e.get(t(h,u));if(f){for(let d of f)if((d[0]-n)**2+(d[1]-i)**2<(r+d[2])**2)return!1}}return!0},setze(n,i,r){let a=t(Math.floor(n/s),Math.floor(i/s)),o=e.get(a);o?o.push([n,i,r]):e.set(a,[[n,i,r]])}}}function Ag(s,e,t,n,i=2600){let r=[],a=kS(),o=(d,p,b,m,g)=>{let _=Math.abs(d);if(m==="laub"&&_<AS&&(m="nadel"),_<(m==="busch"?Tg:Sg)||_>kd+4)return!1;let E=(m==="laub"?6.9:m==="busch"?2.5:5)*g;if(m!=="busch"&&_-E<CS||Ba(d,p)<E||Ha(d,p,E)||m!=="busch"&&LS(d,p)||n&&!n(p,b,"baum",d))return!1;let x=m==="busch"?1*g:1.35*g;return a.frei(d,p,x)?(a.setze(d,p,x),r.push({x:d,z:p,y:Di(d,p)-.03,s:g,drehung:t()*Math.PI*2,neigung:t()*.07,neigAchse:t()*Math.PI*2,art:m}),!0):!1},l=()=>.7+Math.pow(t(),.8)*.7,c=()=>s-40+t()*(e-s+80),h=Math.round(i*.16);for(let d=0;d<h;d++){let p=t()<.5?-1:1,b=p*(12.5+Math.pow(t(),1.1)*(kd-10)),m=c();if(IS(b,m))continue;let g=3+Math.floor(t()*8),_=3.5+t()*7,E=t()<.15;for(let M=0;M<g;M++){let v=t()*Math.PI*2,S=Math.sqrt(t())*_;o(b+Math.cos(v)*S,m+Math.sin(v)*S,p,E||t()<.08?"laub":"nadel",l())}let x=Math.floor(t()*3);for(let M=0;M<x;M++){let v=t()*Math.PI*2,S=_+1+t()*3;o(b+Math.cos(v)*S-p*t()*3,m+Math.sin(v)*S,p,"busch",.6+t()*.6)}}let u=Math.round(i*.18);for(let d=0;d<u;d++){let p=t()<.5?-1:1;o(p*(Sg+Math.pow(t(),1.4)*26),c(),p,t()<.12?"laub":"nadel",l())}let f=Math.round(i*.12);for(let d=0;d<f;d++){let p=t()<.5?-1:1;o(p*(Tg+Math.pow(t(),1.6)*14),c(),p,"busch",.55+t()*.7)}for(let d=r.length-1;d>0;d--){let p=Math.floor(t()*(d+1)),b=r[d];r[d]=r[p],r[p]=b}return r}function DS(s,e,t,n,i=260){let r=[],a=Math.round((e-s)/100*i);for(let o=0;o<a;o++){let l=t()<.5?-1:1,h=t()<.3?150+t()*90:kd+Math.pow(t(),.9)*102,u=l*h,f=s+t()*(e-s);Kn(u*.008-1.7,f*.008+4.4,3)<.32||ki(u,f)>PS*(.8+.4*t())||Ha(u,f,6)||Ba(u,f)<6||n&&!n(f,l,"baum",u)||r.push([u,Di(u,f)-.04,f,.8+t()*.6,t()*Math.PI*2,t()<.15?1:0])}return r}function FS(s){return ru.set(s.x,s.y,s.z),dl.setFromAxisAngle(Cg,s.drehung),Rg.set(Math.cos(s.neigAchse||0),0,Math.sin(s.neigAchse||0)),wg.setFromAxisAngle(Rg,s.neigung||0),dl.premultiply(wg),au.setScalar(s.s),new Pe().compose(ru,dl,au)}var wS,RS,Sg,AS,Tg,CS,kd,PS,ru,dl,wg,au,Cg,Rg,ou,Pg=ut(()=>{Pt();Td();tr();fl();ci();wS=[0,30,85],RS=[0,0,24],Sg=10.5,AS=14,Tg=9.6,CS=6,kd=48,PS=38;ru=new R,dl=new $t,wg=new $t,au=new R,Cg=new R(0,1,0),Rg=new R;ou=class s{constructor(e,t,n){this.szene=e,this.plaetze=t,this.fern=n,this.instanzen=[],this.fernMeshes=[],this.geladen=!1,this.dichte=1}async laden(e,t){let n=null;try{let v=await fetch((e.basis||"")+"welt/modelle/baeume.json",{cache:"no-cache"});v.ok&&(n=await v.json())}catch{n=null}if(!Array.isArray(n)||!n.length)return!1;let i=t.stufe;this.dichte=i.baumDichte??1;let r=i.lod===0,a=v=>v&&v.dateien&&v.art,o=n.filter(v=>a(v)&&/busch/.test(v.name)),l=n.filter(v=>a(v)&&v.art==="nadel"&&!/busch/.test(v.name)),c=n.filter(v=>a(v)&&v.art==="laub"&&(v.breite_m||0)<16),h=[...l.slice(0,5).map(v=>[v,"nadel"]),...c.slice(0,2).map(v=>[v,"laub"]),...o.slice(0,1).map(v=>[v,"busch"])];if(!h.length)return!1;let u=new Set(r?l.slice(0,1).map(v=>v.name):[]),f=r?0:i.lichter>0?1:2,d=(await Promise.all(h.map(async([v,S])=>{let y=v.dateien,w=await Promise.all([0,1,2].map(P=>P>=f&&y["lod"+P]&&(P!==0||u.has(v.name))?e.glb("welt/modelle/"+y["lod"+P]):Promise.resolve(null)));return w.forEach((P,I)=>{P&&s.fussNormieren(P.scene,v.name+" LOD"+I)}),{name:v.name,art:S,hoehe:+v.hoehe_m||14,stufen:w,da:w.some(P=>!!P)}}))).filter(v=>v.da),p=new Map(d.map(v=>[v.name,v])),b=(v,S,y)=>{let w=null,P=v&&v.stufen[S];return P&&P.scene.traverse(I=>{if(!(w||!I.isMesh)){for(let D of Array.isArray(I.material)?I.material:[I.material])if(D&&D.name===y){w=D;break}}}),w};for(let[v]of h){let S=p.get(v.name);if(!(!v.texturen_von||!S))for(let[y,w]of Object.entries(v.texturen_von)){let P=+y.slice(3);if(S.stufen[P])for(let[I,D]of Object.entries(w)){let H=b(S,P,I);if(H)for(let[C,[U,L,B]]of Object.entries(D)){let N=b(p.get(U),P,L);N&&N[B]?(H[C]=N[B],C==="normalMap"&&N.normalScale&&H.normalScale.copy(N.normalScale),H.needsUpdate=!0):console.warn("Baum-Textur fehlt:",v.name,I,C,"\u2190",U)}}}}let m=v=>d.filter(S=>S.art===v),g=m("nadel"),_=m("laub"),E=m("busch");if(!g.length&&!_.length)return!1;let x=d.map(()=>[]),M={nadel:0,laub:0,busch:0};for(let v of this.plaetze){let S=v.art==="busch"?E:v.art==="laub"&&_.length?_:g.length?g:_;if(!S.length)continue;let y=S[M[v.art]++%S.length];x[d.indexOf(y)].push(v)}return d.forEach((v,S)=>{let y=x[S];if(!y.length)return;let w=v.art==="busch",P=new Hr(this.szene,v,y.map(FS),{name:v.name,weiten:w?RS:wS,lodWeite:i.lodWeite,maxWeite:1e3,takt:8,versatz:S,feinste:i.lod,blickKegel:w?{mitte:1.5,radius:3}:{mitte:v.hoehe*.45,radius:v.hoehe*.6},spiegel:!1,schatten:I=>!w&&s.istStamm(I),schattenAn:!!i.schatten,material:(I,D,H)=>s.material(I,D,H)});P.setzeAnzahl(Math.round(y.length*this.dichte)),this.instanzen.push(P)}),this.fernBauen(g.length?g.slice(0,4):_,_),this.geladen=this.instanzen.length>0,this.geladen}fernBauen(e,t){let n=p=>{let b=p.stufen[2];if(!b)return null;b.scene.updateMatrixWorld(!0);let m=null;return b.scene.traverse(g=>{!m&&g.isMesh&&(m=g)}),m?{mesh:m,material:s.material(m.material,m,2)}:null},i={0:e.map(n).filter(Boolean),1:t.map(n).filter(Boolean)};if(i[0].length||(i[0]=i[1]),i[1].length||(i[1]=i[0]),!i[0].length)return;let{z0:r,z1:a,rnd:o,frei:l}=this.fern,c=DS(r,a,o,l,this.dichte<.5?130:260),h=Math.round(c.length*this.dichte);this.fernPlaetze=c.slice(0,h).map(p=>({x:p[0],y:p[1],z:p[2]}));let u=new Map,f=[0,0];for(let p=0;p<h;p++){let b=c[p],m=i[b[5]][f[b[5]]++%i[b[5]].length];u.has(m)||u.set(m,[]),u.get(m).push(b)}let d=new Pe;for(let[p,b]of u){let m=new Lt(p.mesh.geometry,p.material,b.length);m.name="fernwald:"+p.mesh.name,b.forEach((g,_)=>{ru.set(g[0],g[1],g[2]),dl.setFromAxisAngle(Cg,g[4]),au.setScalar(g[3]),m.setMatrixAt(_,d.compose(ru,dl,au).multiply(p.mesh.matrixWorld))}),m.frustumCulled=!1,m.castShadow=!1,m.receiveShadow=!1,this.szene.add(m),this.fernMeshes.push(m)}}static fussNormieren(e,t){e.updateMatrixWorld(!0);let n=new on,i=new on,r=null;if(e.traverse(h=>{!h.isMesh||!h.geometry||(h.geometry.boundingBox||h.geometry.computeBoundingBox(),i.copy(h.geometry.boundingBox).applyMatrix4(h.matrixWorld),n.union(i),s.istStamm(h)&&(r?r.union(i):r=i.clone()))}),n.isEmpty())return;let a=r||n,o=(a.min.x+a.max.x)/2,l=(a.min.z+a.max.z)/2,c=a.min.y;(Math.hypot(o,l)>.1||Math.abs(c)>.1)&&console.warn(`Baum ${t}: Fu\xDF um (${o.toFixed(2)}, ${c.toFixed(2)}, ${l.toFixed(2)}) verschoben \u2013 in den Ursprung ger\xFCckt`),e.position.x-=o,e.position.y-=c,e.position.z-=l,e.updateMatrixWorld(!0)}static istStamm(e){let t=e.material&&e.material.name||"";return/rinde|stamm|trunk|bark/i.test(t)||/stamm|trunk/i.test(e.name||"")}static material(e,t,n){if(!e)return e;let i=e.name||"";if(/blaetter|nadeln|billboard|leaf|leaves|needle/i.test(i)||e.alphaTest>0){if(e.userData.freqLaub)return e;e.userData.freqLaub=!0,e.side=Ct,e.transparent=!1,e.depthWrite=!0,e.alphaTest=n===0?.42:n===1?.33:.28,e.alphaToCoverage=!0,e.roughness=1,e.metalness=0,"envMapIntensity"in e&&(e.envMapIntensity=.3),e.color&&e.color.multiply(new we(.78,.8,.74)),e.isMeshStandardMaterial&&(e.onBeforeCompile=r=>{r.fragmentShader=r.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
            reflectedLight.directDiffuse *= 0.55;
            reflectedLight.directSpecular *= 0.2;`)},e.customProgramCacheKey=()=>"freq-laub-1"),e.needsUpdate=!0}return e}setzeStufe(e){this.dichte=e.baumDichte??1;for(let t of this.instanzen)t.setzeStufe(e),t.setzeAnzahl(Math.round(t.n*this.dichte))}update(e,t){for(let n of this.instanzen)n.update(e,t)}}});function Fd(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e;let i=n.getContext("2d");t(i,s,e);let r=new Ft(n);return r.colorSpace=ot,r.wrapS=r.wrapT=bn,r.anisotropy=4,r}function Dd(s,e=0){return Fd(256,256,(t,n,i)=>{t.lineCap="round";let r=e===1?14:e===2?55:70;for(let a=0;a<r;a++){let o=(s()-.5)*(e===1?2.4:2.1),l=i*(e===2?.55+s()*.45:.45+s()*.5),c=n/2+(s()-.5)*40,h=c+Math.sin(o)*l,u=i-Math.cos(o)*l*.95,f=t.createLinearGradient(c,i,h,u),d=e===2?48+s()*18:e===1?105+s()*25:95+s()*35,p=e===2?30+s()*20:25+s()*25,b=e===1?16+s()*10:e===2?26+s()*16:22+s()*14;if(f.addColorStop(0,`hsl(${d}, ${p}%, ${e===2?12:9}%)`),f.addColorStop(1,`hsl(${d-15}, ${p+10}%, ${b}%)`),t.strokeStyle=f,t.lineWidth=e===1?5+s()*4:e===2?1.2+s()*2:2+s()*3.5,t.beginPath(),t.moveTo(c,i),t.quadraticCurveTo(c+Math.sin(o)*l*.3,i-l*.6,h,u),t.stroke(),e===1){t.lineWidth=1.5;for(let m=.25;m<1;m+=.12){let g=c+(h-c)*m,_=i+(u-i)*m,E=(1-m)*14+3;t.beginPath(),t.moveTo(g-E,_+3),t.lineTo(g,_),t.lineTo(g+E,_+3),t.stroke()}}}})}function Ig(s,e=0){let t=e===1?30:110,n=e===1?.49:.42,i=e===1?.6:.8;return Fd(256,256,(r,a,o)=>{let l=r.createRadialGradient(a/2,o,10,a/2,o,o*.9);l.addColorStop(0,`hsl(${t+5}, 26%, 15%)`),l.addColorStop(.85,`hsl(${t}, 28%, 19%)`),l.addColorStop(1,`hsla(${t}, 28%, 19%, 0)`),r.fillStyle=l,r.beginPath(),r.ellipse(a/2,o,a*n,o*i,0,Math.PI,0),r.fill();for(let c=0;c<1100;c++){let h=s()*Math.PI,u=Math.sqrt(s()),f=a/2+Math.cos(h)*u*a*(n+.04)*(s()<.5?-1:1),d=o-Math.sin(h)*u*o*(i+.1),p=15+u*12+s()*12;r.fillStyle=`hsl(${t-15+s()*40}, ${24+s()*20}%, ${p}%)`,r.beginPath(),r.ellipse(f,d,3+s()*5,2+s()*3,s()*Math.PI,0,Math.PI*2),r.fill()}})}function NS(s){return Fd(1024,256,(e,t,n)=>{for(let i=0;i<2;i++){let r=-20;for(;r<t+20;){let a=n*(i?.55+s()*.3:.7+s()*.3),o=a*(.28+s()*.1),l=i?10+s()*4:6+s()*4;e.fillStyle=`hsl(${130+s()*30}, ${18+s()*12}%, ${l}%)`,e.beginPath(),e.moveTo(r,n-a);let c=7;for(let h=1;h<=c;h++){let u=h/c;e.lineTo(r+o*u*(.8+s()*.4),n-a+a*u*.92),e.lineTo(r+o*u*.6,n-a+a*u*.92+2)}e.lineTo(r+o,n),e.lineTo(r-o,n);for(let h=c;h>=1;h--){let u=h/c;e.lineTo(r-o*u*.6,n-a+a*u*.92+2),e.lineTo(r-o*u*(.8+s()*.4),n-a+a*u*.92)}e.closePath(),e.fill(),r+=o*(.7+s()*.6)}}e.fillStyle="hsl(140, 20%, 6%)",e.fillRect(0,n*.82,t,n*.18)})}function pl(s,e){let t=[0,1,2].map(l=>new st(s,e).translate(0,e/2,0).rotateY(l*Math.PI/3)),n=[],i=[],r=[],a=0;for(let l of t){n.push(...l.attributes.position.array),i.push(...l.attributes.uv.array);let c=l.index.array;for(let h of c)r.push(h+a);for(let h=0;h<c.length;h+=3)r.push(c[h]+a,c[h+2]+a,c[h+1]+a);a+=l.attributes.position.count,l.dispose()}let o=new ht;return o.setAttribute("position",new ft(n,3)),o.setAttribute("uv",new ft(i,2)),o.setAttribute("normal",new ft(new Float32Array(n.length).map((l,c)=>c%3===1?1:0),3)),o.setIndex(r),o}var Oa,lu,Lg=ut(()=>{Pt();tr();fl();ln();Oa=s=>{let e=new Ne({map:s,roughness:1,metalness:0,alphaTest:.4,alphaToCoverage:!0,side:$n,envMapIntensity:.3});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      reflectedLight.directDiffuse *= 0.6;
      reflectedLight.directSpecular *= 0.2;`)},e.customProgramCacheKey=()=>"freq-bewuchs-1",e},lu=class{constructor(e,t){this.szene=e,this.o=t,this.meshes=[]}bauen(e,t){if(this.meshes.length)return;let n=Na(53),i=t==="niedrig"?0:(e.baumDichte??1)*(t==="mittel"?.75:1);i>0&&(this.unterwuchs(n,pl(1.1,.8),Oa(Dd(n,0)),Math.round(1900*i),"bueschel"),this.unterwuchs(n,pl(1.3,.9),Oa(Dd(n,1)),Math.round(700*i),"bueschel"),this.unterwuchs(n,pl(1,1),Oa(Dd(n,2)),Math.round(900*i),"bueschel"),this.unterwuchs(n,pl(1.9,1.3),Oa(Ig(n,0)),Math.round(750*i),"strauch"),this.unterwuchs(n,pl(2.2,1),Oa(Ig(n,1)),Math.round(400*i),"strauch")),this.kulisse(n)}boden(e,t){return Di(e,t)-.03}unterwuchs(e,t,n,i,r){let{z0:a,z1:o,frei:l}=this.o,c=r==="strauch",h=[],u=0;for(;h.length<i&&u++<i*4;){let f=e()<.5?-1:1,d=c?10.2+Math.pow(e(),1.3)*32:9.6+Math.pow(e(),1.8)*30,p=f*d,b=a+e()*(o-a),m=c?1.4:.7;if(Ba(p,b)<m+.5||Ha(p,b,m)||c&&l&&!l(b,f,"baum",p))continue;let g=c?.6+e()*.8:.6+e()*.9;if(h.push([p,this.boden(p,b),b,g,e()*Math.PI*2]),c&&e()<.6)for(let _=0;_<2;_++){let E=p+(e()-.5)*5,x=b+(e()-.5)*5;Math.abs(E)<10.2||Ba(E,x)<m+.5||Ha(E,x,m)||h.push([E,this.boden(E,x),x,.5+e()*.6,e()*Math.PI*2])}}this.instanziere(t,n,h,r)}kulisse(e){let{kz0:t,kz1:n}=this.o,i=new st(70,24).translate(0,12,0);i.setAttribute("normal",new ft(new Float32Array(i.attributes.position.count*3).map((o,l)=>l%3===1?1:0),3));let r=Oa(NS(e)),a=[];for(let o of[-1,1])for(let[l,c]of[[118,25],[160,35]]){let h=t+e()*30;for(;h<n;){let u=o*(l+e()*c),f=Math.min(ki(u,h-30),ki(u,h),ki(u,h+30))-2.5,d=-o*Math.PI/2+(e()-.5)*.42;a.push([u,f,h,.85+e()*.35,d,e()<.5?-1:1]),h+=38+e()*18}}this.instanziere(i,r,a,"kulisse")}instanziere(e,t,n,i){if(!n.length)return;let r=new Lt(e,t,n.length);r.name="bewuchs:"+i;let a=new Pe,o=new R,l=new $t,c=new R,h=new R(0,1,0);n.forEach((u,f)=>{o.set(u[0],u[1],u[2]),l.setFromAxisAngle(h,u[4]),c.set(u[3]*(u[5]||1),u[3],u[3]),r.setMatrixAt(f,a.compose(o,l,c))}),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,this.szene.add(r),this.meshes.push(r)}}});function HS(s=4){let e=[[-.02,.86],[.03,.835],[.065,.8],[.03,.765],[0,.745],[.03,.725],[.065,.69],[.03,.655],[-.02,.63]],t=e.length,n=[],i=[],r=[],a=[];for(let h=0;h<t;h++){let[u,f]=e[h],[d,p]=e[Math.min(t-1,h+1)],[b,m]=e[Math.max(0,h-1)],g=d-b,_=p-m,E=Math.hypot(g,_)||1,x=_/E,M=-g/E;for(let v of[-s/2,s/2])n.push(u,f,v),i.push(x,M,0),r.push((v+s/2)/s,h/(t-1))}for(let h=0;h<t-1;h++){let u=h*2,f=u+1,d=u+2,p=u+3;a.push(u,f,d,f,p,d)}let o=new ht;o.setAttribute("position",new ft(n,3)),o.setAttribute("normal",new ft(i,3)),o.setAttribute("uv",new ft(r,2)),o.setIndex(a);let l=new He(.06,.74,.12).translate(-.075,.37,0),c=new He(.01,.05,.08).translate(.07,.745,.6);return{blech:o,pfosten:l,reflektor:c}}var kg,Dg,Nd,US,Fg,hu,zS,BS,cu,Ud=ut(()=>{Pt();ti();ni();eg();Td();$s();tr();Pg();ln();Lg();kg=34,Dg=280,Nd=700,US=6.6,Fg=5.2,hu=(s,e=1,t=[0,0,0],n=1.5,i=5,r=!1)=>new Et({transparent:!0,blending:kt,depthWrite:!1,side:Ct,fog:!1,defines:r?{JE_INSTANZ:1}:{},uniforms:{farbe:{value:s},staerke:{value:e},zeit:{value:0},kamera:{value:new R(0,-1e3,0)},spitze:{value:new R(...t)},nah:{value:n},fern:{value:i}},vertexShader:`
    uniform vec3 kamera, spitze; uniform float nah, fern;
    varying float vA; varying vec3 vN; varying vec3 vV; varying vec3 vW; varying float vFade;
    #ifdef JE_INSTANZ
    attribute float iWert; varying float vWert;
    #endif
    void main(){
      #ifdef JE_INSTANZ
      vWert = iWert;
      #endif
      #ifdef USE_INSTANCING
      mat4 im = modelMatrix * instanceMatrix;
      #else
      mat4 im = modelMatrix;
      #endif
      vA = 1.0 - uv.y;
      vec4 w = im * vec4(position, 1.0);
      vW = w.xyz;
      vec4 mv = viewMatrix * w;
      vN = normalize(mat3(viewMatrix) * mat3(im) * normal);
      vV = normalize(-mv.xyz);
      // Steht die Kamera im Kegel, blendet er aus (sonst f\xFCllt er den Schirm)
      vec3 sp = (im * vec4(spitze, 1.0)).xyz;
      vFade = smoothstep(nah, fern, distance(kamera, sp));
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    precision highp float;
    uniform vec3 farbe; uniform float staerke, zeit; varying float vA; varying vec3 vN; varying vec3 vV; varying vec3 vW; varying float vFade;
    #ifdef JE_INSTANZ
    varying float vWert;
    #endif
    void main(){
      float nd = abs(dot(normalize(vN), normalize(vV)));
      float staub = 0.75 + 0.25 * sin(vW.x * 7.0 + vW.y * 5.0 + zeit * 1.7) * sin(vW.z * 6.0 - vW.y * 4.0 + zeit * 1.1);
      #ifdef JE_INSTANZ
      float st = vWert;
      #else
      float st = staerke;
      #endif
      float a = pow(clamp(1.0 - vA, 0.0, 1.0), 2.0) * pow(clamp(nd, 0.0, 1.0), 1.1) * st * staub * vFade;
      gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),zS=(s,e)=>new Et({transparent:!0,blending:kt,depthWrite:!1,fog:!1,uniforms:{t:{value:s},farbe:{value:e},groesse:{value:1.6}},vertexShader:`
    uniform float groesse; varying vec2 vUv;
    void main(){
      vUv = uv;
      #ifdef USE_INSTANCING
      vec4 mv = modelViewMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      #else
      vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      #endif
      mv.xy += position.xy * groesse;
      gl_Position = projectionMatrix * mv;
    }`,fragmentShader:`
    precision highp float;
    uniform sampler2D t; uniform vec3 farbe; varying vec2 vUv;
    void main(){ float a = texture2D(t, vUv).a; gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),BS=`
  precision highp float;
  uniform vec3 oben, horizont, glut, mondRichtung; uniform float zeit, sterne, aurora, warnung, mond; varying vec3 vP;
  float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y); }
  void main(){
    vec3 d = normalize(vP); float h = d.y;
    float a = smoothstep(-0.02, 0.4, h);
    vec3 c = mix(horizont, oben, a);
    c += glut * (1.0 - smoothstep(0.0, 0.12, abs(h))) * 0.7;
    // Sterne: feines Gitter aus Zellen, in wenigen davon ein kleiner Punkt; wenige hell, viele schwach,
    // leicht verschieden in der Farbe, leises Flackern
    vec2 sp = vec2(atan(d.z, d.x) * 78.0, asin(clamp(h, -1.0, 1.0)) * 90.0);
    vec2 cell = floor(sp); vec2 f = fract(sp);
    float s = hash(cell);
    vec2 pos = vec2(hash(cell + 1.3), hash(cell + 7.1)) * 0.8 + 0.1;
    float dist = length(f - pos);
    float hell = pow(hash(cell + 3.7), 3.0);
    float stern = smoothstep(0.075 + hell * 0.07, 0.0, dist) * step(0.84, s) * (0.65 + 0.35 * sin(zeit * (1.0 + s * 3.0) + s * 60.0)) * (0.3 + 1.5 * hell);
    vec3 sternFarbe = mix(vec3(0.72, 0.84, 1.0), vec3(1.0, 0.9, 0.74), hash(cell + 9.2));
    c += sternFarbe * stern * sterne * smoothstep(0.02, 0.25, h);
    // Milchstra\xDFe: ein blasses Band
    c += vec3(0.08, 0.1, 0.16) * exp(-pow(d.x * 0.9 + d.y * 0.4 - 0.2, 2.0) * 9.0) * smoothstep(0.05, 0.4, h) * sterne;
    // Cyanes Leuchten (Finale)
    c += vec3(0.05, 0.42, 0.55) * aurora * (0.55 + 0.45 * sin(d.x * 6.0 + d.z * 2.0 + zeit * 0.25)) * exp(-pow(h - 0.6, 2.0) * 60.0);
    // Mond: Scheibe mit Randverdunklung, dunklen Meeren und weichem Terminator, dazu ein weiter Hof
    vec3 mq = normalize(mondRichtung);
    float md = distance(d, mq);
    float R = 0.026;
    if (md < R * 1.5) {
      vec3 mu = normalize(cross(mq, vec3(0.0, 1.0, 0.0))); vec3 mv = cross(mq, mu);
      vec2 mp = vec2(dot(d, mu), dot(d, mv)) / R;
      float rr = dot(mp, mp);
      float rand = sqrt(max(0.0, 1.0 - rr));
      float meere = 1.0 - 0.38 * smoothstep(0.45, 0.62, noise(mp * 2.6 + 4.0) * 0.6 + noise(mp * 6.0 + 1.0) * 0.4);
      float terminator = 0.12 + 0.88 * smoothstep(-0.95, -0.35, mp.x);
      float scheibe = smoothstep(R, R * 0.9, md);
      c += vec3(0.92, 0.93, 0.98) * (0.5 + 0.5 * rand) * meere * terminator * mond * scheibe * 2.4;
    }
    c += vec3(0.6, 0.7, 0.92) * mond * (exp(-md * md * 700.0) * 0.45 + exp(-md * md * 40.0) * 0.08);
    // Wetterfront (Berge): orangefarbener Saum am Horizont, breit und weich, vor allem voraus (+z); die Berge
    // davor schneiden ihn mit ihrer Silhouette (kein Sprite mehr, das war eine Fl\xE4che mit harter Kante)
    float wf = warnung * smoothstep(-0.5, 0.7, d.z);
    c += vec3(0.9, 0.42, 0.08) * wf * (0.3 * exp(-pow(h - 0.03, 2.0) * 90.0) + 0.13 * exp(-pow(h - 0.09, 2.0) * 22.0)) * (0.75 + 0.25 * sin(d.x * 3.0 + d.z * 1.5 + zeit * 0.4));
    gl_FragColor = vec4(c, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;cu=class{constructor(e,t){this.szene=e,this.z0=t.z0,this.z1=t.z1,this.frei=t.frei||null,this.renderer=t.renderer||null;let n=t.rnd;this.flareT=ei(128),this.stufe={lichter:0,schatten:!1,lod:1,lodWeite:1,baumDichte:1,kegel:!0},this.himmelUniforms={oben:{value:new we(132366)},horizont:{value:new we(924206)},glut:{value:new we(3810838)},zeit:{value:0},sterne:{value:.6},aurora:{value:0},warnung:{value:0},mond:{value:0},mondRichtung:{value:new R(.3,.3,.9)}};let i=new Q(new Mn(1100,32,16),new Et({side:Pn,depthWrite:!1,fog:!1,uniforms:this.himmelUniforms,vertexShader:"varying vec3 vP; void main(){ vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_Position.z = gl_Position.w; }",fragmentShader:BS}));i.frustumCulled=!1,i.layers.enable(Dt),e.add(i),this.himmel=i;{let r=new Dr(t.renderer),a=new fs;a.add(new Q(new He(60,30,60),new it({color:197900,side:Pn})));let o=(l,c,h,u,f,d,p,b,m)=>{let g=new Q(new st(l,c),new it({color:Ke(b[0]*m,b[1]*m,b[2]*m)}));g.position.set(h,u,f),g.rotation.set(d,p,0),a.add(g)};o(40,1,0,14,0,Math.PI/2,0,[.85,.92,1],9),o(30,.5,4,9,0,Math.PI/2,0,[1,.68,.38],7),o(30,.3,-6,11,0,Math.PI/2,0,[1,.72,.45],4),o(12,5,-29,5,0,0,Math.PI/2,[.35,.55,.9],1.6),o(12,5,29,5,0,0,-Math.PI/2,[.95,.55,.3],1.3),this.envMap=r.fromScene(a,.04).texture,r.dispose()}e.add(new Xo(1714762,0,.6)),this.mond=new Ks(4874120,1),this.mond.position.set(-60,90,-40),e.add(this.mond),this.fuell=new Ks(10335999,.5),this.fuell.target=new It,e.add(this.fuell,this.fuell.target),this.laternenLicht=new Fn(16757866,260,46,2),e.add(this.laternenLicht),this.lichtPool=new Xh(e,{renderer:t.renderer}),this._o=t}bauenGelaende(){let e=this._o,t=this.szene;Mg(e.z0,e.z1,7,-.015),this.gelaende=Eg(e.z0-300,e.z1+Nd,e.grob?{schritt:12,grob:!0}:{}),t.add(this.gelaende),this.bergMaterial=this.gelaende.material}bauenRest(){let e=this._o,t=this.szene,n=e.rnd;this.laternenPlaetze=[];{let i=Math.ceil((e.z1-e.z0)/kg);for(let r=0;r<i;r++){let a=r%2===0?-1:1,o=e.z0+r*kg+11;e.frei&&!e.frei(o,a,"laterne")||this.laternenPlaetze.push({z:o,seite:a})}}this.laternen=[],this.leuchten=null,this.baueLaternenRueckfall();{let i=new He(.1,1,.07);i.translate(0,.5,0);let r=new He(.06,.05,.02),a=Math.ceil((e.z1-e.z0)/33),o=new Lt(i,new Ne({color:12105904,roughness:.6}),a*2),l=new Lt(r,new it({color:Ke(5,1.6,.3)}),a),c=new Lt(r,new it({color:Ke(4,4,4)}),a),h=new Pe,u=0,f=0,d=0;for(let p=0;p<a;p++){let b=e.z0+p*33+7;(!e.frei||e.frei(b,-1,"leitpfosten"))&&(h.makeTranslation(-4.5,0,b),o.setMatrixAt(u++,h),h.makeTranslation(-4.5,.9,b+.045),l.setMatrixAt(f++,h)),(!e.frei||e.frei(b,1,"leitpfosten"))&&(h.makeTranslation(4.5,0,b),o.setMatrixAt(u++,h),h.makeTranslation(4.5,.9,b+.045),c.setMatrixAt(d++,h))}o.count=u,l.count=f,c.count=d;for(let p of[o,l,c])p.frustumCulled=!1,t.add(p)}this.leitplankenPlaetze=[];{let r=Math.ceil((e.z1-e.z0)/4);for(let _=0;_<r;_++){let E=e.z0+(_+.5)*4;for(let x of[-1,1])e.frei&&!e.frei(E,x,"leitplanke")||this.leitplankenPlaetze.push({z:E,seite:x})}let{blech:a,pfosten:o,reflektor:l}=HS(4),c=new Ne({color:10133155,roughness:.5,metalness:.85,side:Ct}),h=new Ne({color:7304056,roughness:.6,metalness:.8}),u=new it({color:Ke(4,4,4)}),f=Math.max(1,this.leitplankenPlaetze.length),d=new Lt(a,c,f),p=new Lt(o,h,f),b=new Lt(l,u,f),m=new Pe,g=new Pe;this.leitplankenPlaetze.forEach((_,E)=>{m.makeTranslation(_.seite*Fg,0,_.z),_.seite>0&&m.multiply(g.makeRotationY(Math.PI)),d.setMatrixAt(E,m),p.setMatrixAt(E,m),b.setMatrixAt(E,m)}),d.count=p.count=b.count=this.leitplankenPlaetze.length;for(let _ of[d,p,b])_.frustumCulled=!1,t.add(_);this.leitplankenRueckfall=[d,p,b]}this.baumPlaetze=Ag(e.z0,e.z1+Dg,n,e.frei);{let i=new ds(2.4,6.5,7);i.translate(0,3.25,0);let r=new ds(1.6,5.5,7);r.translate(0,7.2,0);let a=new Go({color:661521}),o=Math.max(1,this.baumPlaetze.length),l=new Lt(i,a,o),c=new Lt(r,a,o),h=new Pe,u=new R,f=new $t,d=new R,p=new R(0,1,0),b=this.baumPlaetze.filter(m=>m.art!=="busch");b.forEach((m,g)=>{u.set(m.x,m.y,m.z),f.setFromAxisAngle(p,m.drehung),d.set(m.s*1.05,m.s*1.1,m.s*1.05),h.compose(u,f,d),l.setMatrixAt(g,h),c.setMatrixAt(g,h)}),l.count=c.count=b.length,l.frustumCulled=!1,c.frustumCulled=!1,t.add(l,c),this.kegelBaeume=[l,c]}this.baeume=new ou(t,this.baumPlaetze,{z0:e.z0-300,z1:e.z1+Nd-180,rnd:Na(31),frei:e.frei}),this.bewuchs=new lu(t,{z0:e.z0-40,z1:e.z1+Dg,kz0:e.z0-300,kz1:e.z1+Nd-180,frei:e.frei,strasseBis:e.z1}),this._sort=[],this._v=new R,this.tAlt=null}baueLeuchten(e,t,n){if(this.leuchten)for(let h of this.leuchten)this.szene.remove(h),h.dispose();let i=Math.max(1,e.length),r=new st(1,1),a=new Lt(r,zS(this.flareT,Ke(2.4,1.5,.65)),i),o=new Nt(.32,5.6,n,18,1,!0);o.translate(0,t-n/2,0),this.kegelLaterne=hu(new we().setRGB(1,.62,.3,Tt),.065,[0,t,0],7,18);let l=new Lt(o,this.kegelLaterne,i),c=new Pe;e.forEach((h,u)=>{a.setMatrixAt(u,c.makeTranslation(h.x,h.y-.08,h.z)),l.setMatrixAt(u,c.makeTranslation(h.x,h.y-t,h.z))}),a.count=l.count=e.length;for(let h of[a,l])h.frustumCulled=!1,this.szene.add(h);a.layers.enable(Dt),l.visible=this.stufe.kegel!==!1,this.kegelInstanzen=l,this.glowInstanzen=a,this.leuchten=[a,l],this.laternen=e.map(h=>({z:h.z,kopf:h.clone()}))}baueLaternenRueckfall(){let e=Math.max(1,this.laternenPlaetze.length),t=new Nt(.09,.13,9,10);t.translate(0,4.5,0);let n=new Nt(.06,.06,2.6,8);n.rotateZ(Math.PI/2),n.translate(1.3,8.9,0);let i=new Nt(.16,.42,.26,20);i.translate(2.5,8.98,0);let r=new Mn(.2,14,10);r.translate(2.5,8.78,0);let a=new Ne({color:1778217,roughness:.7,metalness:.4}),o=new it({color:Ke(10,6,2.4)}),l=[t,n,i,r].map((f,d)=>new Lt(f,d===3?o:a,e)),c=new Pe,h=new Pe,u=[];this.laternenPlaetze.forEach((f,d)=>{c.makeTranslation(f.seite*5.4,0,f.z),f.seite>0&&c.multiply(h.makeRotationY(Math.PI));for(let p of l)p.setMatrixAt(d,c);u.push(new R(f.seite*2.9,8.8,f.z))});for(let f of l)f.count=this.laternenPlaetze.length,f.frustumCulled=!1,this.szene.add(f);l[3].layers.enable(Dt),this.laternenRueckfall=l,this.baueLeuchten(u,8.85,9.2)}setzeLaternenModell(e){let t=e.stufen.find(c=>c);if(!t)return!1;t.scene.updateMatrixWorld(!0);let n=[];t.scene.traverse(c=>{/^leuchte_\d+$/.test(c.name)&&n.push(new R().setFromMatrixPosition(c.matrixWorld))}),n.length||n.push(new R(-1.9,9.3,0),new R(1.9,9.3,0));let i=zr(t.scene),r=this.laternenPlaetze.map(c=>new Pe().makeTranslation(c.seite*US,0,c.z));if(!(this.welt&&this.welt.aus&&this.welt.aus.has("laterne")))for(let c of e.stufen)c&&Ii(c.scene);this.laternenInstanzen=new Hr(this.szene,e,r,{name:"laterne",weiten:[0,30,95],lodWeite:this.stufe.lodWeite,maxWeite:900,takt:4,feinste:this.stufe.lod,spiegel:c=>!!(c.material&&c.material.name==="licht_laterne")});let a=[],o=new R;r.forEach(c=>{for(let h of n)a.push(o.copy(h).applyMatrix4(c).clone());for(let h of i)this.lichtPool.anmelden(ng(h,c),{prioritaet:1})});let l=n[0].y-.12;this.baueLeuchten(a,l,l);for(let c of this.laternenRueckfall)c.visible=!1;return this.laternenInstanzen.update({position:new R(0,3,0)}),!0}setzeLeitplankenModell(e){let t=Math.max(1,+e.extras.laenge_m||4),n=Math.ceil((this.z1-this.z0)/t),i=[],r=new R,a=new $t,o=new R(1,1,1),l=new R(0,1,0);for(let c=0;c<n;c++){let h=this.z0+(c+.5)*t;for(let u of[-1,1])this.frei&&!this.frei(h,u,"leitplanke")||(r.set(u*Fg,0,h),a.setFromAxisAngle(l,u<0?Math.PI/2:-Math.PI/2),i.push(new Pe().compose(r,a,o)))}if(!i.length)return!1;this.leitplankenInstanzen=new Hr(this.szene,e,i,{name:"leitplanke",weiten:[0,25,80],lodWeite:this.stufe.lodWeite,maxWeite:600,takt:6,versatz:2,feinste:this.stufe.lod,spiegel:!1});for(let c of this.leitplankenRueckfall)c.visible=!1;return!0}async ladeModelle(e,t){this.welt=t,this.stufe=t.stufe;let n=t.stufe.lod,i=async(r,a)=>{try{return await a()}catch(o){return console.warn("Umgebung",r,o),null}};await i("Laternen",async()=>{let r=await Ur(e,"laterne_duo",n);r.da&&this.setzeLaternenModell(r)}),await i("B\xE4ume",async()=>{if(await this.baeume.laden(e,t)){for(let a of this.kegelBaeume)a.visible=!1;this.echteBaeume=this.baeume.instanzen,this.baeume.setzeStufe(t.stufe)}}),await i("Bewuchs",async()=>this.bewuchs.bauen(t.stufe,t.stufeName)),await i("Leitplanken",async()=>{let r=await Ur(e,"leitplanke",n);r.da&&this.setzeLeitplankenModell(r)})}leiheLicht(e,t,n,i){if(!(n>5e-4))return;let r=this._leiheMerk||(this._leiheMerk={ort:new R,farbe:new we,staerke:0,weite:0});r.ort.copy(e),r.farbe.copy(t),r.staerke=n,r.weite=i,this._leihe=r}setzeStufe(e,t){this.stufe=e,this.lichtPool.setzeStufe(e),this.laternenLicht.intensity=this._laterneStaerke=this.lichtPool.anzahl>0||t==="niedrig"?0:260,this.laternenLicht.visible=this.lichtPool.anzahl>0||this._laterneStaerke>0,this.kegelInstanzen&&(this.kegelInstanzen.visible=e.kegel!==!1);for(let n of[this.laternenInstanzen,this.leitplankenInstanzen])n&&n.setzeStufe(e);this.baeume.setzeStufe(e),this.gelaende&&(this.gelaende.receiveShadow=!!e.schatten)}setzeHdri(e,t){if(!t)return;let n=new Dr(e),i=n.fromEquirectangular(t).texture;return n.dispose(),t.dispose(),this.envMap=i,this.szene.environment=i,this.szene.environmentIntensity=.5,i}setzeBaeume(e,t,n,i){if(!e||this.baeume.geladen)return;let r=[];if(e.scene.traverse(g=>{g.name&&/^Baum\d$/.test(g.name)&&r.push(g)}),!r.length)return;let a=new Ne({color:9075306,roughness:.95,map:t||null,normalMap:n||null}),o=new Ne({color:12108976,roughness:.95,map:i||null,alphaTest:.4,side:Ct,transparent:!1}),l=new Ne({color:1450266,roughness:1});i&&(i.colorSpace=ot,i.wrapS=i.wrapT=bn,i.flipY=!1,i.needsUpdate=!0),t&&(t.colorSpace=ot,t.wrapS=t.wrapT=Gn);let c=this.baumPlaetze||[],h=r.map(()=>[]);c.forEach((g,_)=>h[_%r.length].push(g));let u=new Pe,f=new R,d=new $t,p=new R,b=new R(0,1,0),m=[];if(r.forEach((g,_)=>{let E=h[_];g.traverse(x=>{if(!x.isMesh)return;let M=x.material&&x.material.name==="Rinde"||/^Stamm/.test(x.name),v=x.material&&x.material.name==="Kern"||/^Kern/.test(x.name),S=new Lt(x.geometry,M?a:v?l:o,Math.max(1,E.length));E.forEach((y,w)=>{f.set(y.x,y.y,y.z),d.setFromAxisAngle(b,y.drehung),p.set(y.s*1.2,y.s*1.15,y.s*1.2),u.compose(f,d,p),S.setMatrixAt(w,u)}),S.count=E.length,S.frustumCulled=!1,S.castShadow=M&&!!this.stufe.schatten,this.szene.add(S),m.push(S)})}),this.kegelBaeume)for(let g of this.kegelBaeume)g.visible=!1;this.echteBaeume=m}setzeBoden(e,t,n){if(e){e.colorSpace=ot;for(let[i,r]of[[n.bankettMaterial,[3.2,n.bankettLaenge/4]],[n.bodenMaterial,[200,600]],[this.gelaende&&this.gelaende.material,[1,1]]]){if(!i)continue;let a=e.clone();if(a.repeat.set(r[0],r[1]),a.needsUpdate=!0,i.map=a,t){let o=t.clone();o.repeat.set(r[0],r[1]),o.needsUpdate=!0,i.normalMap=o,i.normalScale.set(.8,.8)}i.color.setHex(3816762),i.needsUpdate=!0}n.bankett&&(n.bankett.receiveShadow=!0)}}hoehe(e,t){return ki(e,t)}update(e,t,n){let i=this.tAlt==null?.016666666666666666:Math.min(.1,Math.max(.001,e-this.tAlt));this.tAlt=e,this.himmelUniforms.zeit.value=e,this.kegelLaterne.uniforms.zeit.value=e,this.kegelLaterne.uniforms.kamera.value.copy(t.position),this.himmel.position.copy(t.position),this.himmel.updateMatrixWorld();let r=t.position.z,a=this._sort;a.length=0;for(let u of this.laternen){let f=Math.abs(u.z-r);f<140&&a.push({l:u,d:f})}a.sort((u,f)=>u.d-f.d);let o=n.uniforms.laternen.value;for(let u=0;u<o.length;u++)u<a.length?o[u].copy(a[u].l.kopf):o[u].set(0,-100,0);let l=this.laternenLicht,c=this._leihe;this._leihe=null,c&&this._laterneStaerke===0&&this.lichtPool.anzahl>0?(l.position.copy(c.ort),l.color.copy(c.farbe),l.intensity=c.staerke,l.distance=c.weite,this._verliehen=!0):(this._verliehen&&(l.color.setHex(16757866),l.distance=46,l.intensity=this._laterneStaerke||0,this._verliehen=!1),a.length?l.position.copy(a[0].l.kopf):l.position.set(0,-100,0)),this.fuell.position.copy(t.position).add(this._v.set(2,6,0)),this.lichtPool.update(t,i);let h=this.szene.fog&&this.szene.fog.density?this.szene.fog.density:0;this.laternenInstanzen&&this.laternenInstanzen.update(t,h),this.leitplankenInstanzen&&this.leitplankenInstanzen.update(t,h),this.baeume.update(t,h)}}});function Ng(s){let e=new Map,t=new Map,n=s.clone();return Ug(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Ug(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Ug(s.children[n],e.children[n],t)}var zg=ut(()=>{});function OS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function pn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function WS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),s.DefaultMaterial}function Gr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function es(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function XS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function KS(s){let e,t=s.extensions&&s.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hd(t.attributes):e=s.indices+":"+Hd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Hd(s.targets[n]);return e}function Hd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function hp(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function JS(s,e,t){let n=e.attributes,i=new on;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=hp(Ga[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let b=hp(Ga[f.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Vn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Gg(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=cp[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Mt.workingColorSpace!==Tt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),es(s,e),JS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qS(s,e.targets,t):s})}var Va,Rt,Od,Gd,Vd,Wd,qd,Xd,Kd,jd,Yd,Jd,Zd,$d,Qd,ep,tp,np,uu,ip,Vg,ml,Bg,sp,rp,ap,op,fu,GS,lp,yi,Ga,Hg,Og,zd,cp,nr,VS,Bd,YS,up,fp=ut(()=>{Pt();Wh();zg();Va=class extends Ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Wd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new ep(t)}),this.register(function(t){return new tp(t)}),this.register(function(t){return new np(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new jd(t)}),this.register(function(t){return new Yd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new uu(t,Rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new uu(t,Rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new ip(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=vs.extractUrlBase(e);a=vs.resolveURL(c,this.path)}else a=vs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Tr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vg){try{a[Rt.KHR_BINARY_GLTF]=new sp(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new up(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Rt.KHR_MATERIALS_UNLIT:a[u]=new Gd;break;case Rt.KHR_DRACO_MESH_COMPRESSION:a[u]=new rp(r,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:a[u]=new ap;break;case Rt.KHR_MESH_QUANTIZATION:a[u]=new op;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Od=class{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Tt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ks(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fn(h),c.distance=u;break;case"spot":c=new xs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),es(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Gd=class{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return it}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,ot))}return Promise.all(i)}},Vd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Wd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(r,r)}return Promise.all(i)}},qd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Xd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Kd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Tt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ot)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},jd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Yd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],Tt),Promise.all(i)}},Jd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Zd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(r[0],r[1],r[2],Tt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ot)),Promise.all(i)}},$d=class{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Qd=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},ep=class{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},tp=class{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},np=class{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},uu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},ip=class{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==yi.TRIANGLES&&c.mode!==yi.TRIANGLE_STRIP&&c.mode!==yi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let b=new Pe,m=new R,g=new $t,_=new R(1,1,1),E=new Lt(p.geometry,p.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,M),l.SCALE&&_.fromBufferAttribute(l.SCALE,M),E.setMatrixAt(M,b.compose(m,g,_));let x=null;for(let M in l)if(M==="_COLOR_0"){let v=l[M];E.instanceColor=new ai(v.array,v.itemSize,v.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(x===null){let S=E.geometry;x=new ht,x.name=S.name;for(let y in S.attributes)x.setAttribute(y,S.attributes[y]);for(let y in S.morphAttributes)x.morphAttributes[y]=S.morphAttributes[y];S.index!==null&&x.setIndex(S.index),x.morphTargetsRelative=S.morphTargetsRelative;for(let y of S.groups)x.addGroup(y.start,y.count,y.materialIndex);S.boundingBox!==null&&(x.boundingBox=S.boundingBox.clone()),S.boundingSphere!==null&&(x.boundingSphere=S.boundingSphere.clone()),x.drawRange.start=S.drawRange.start,x.drawRange.count=S.drawRange.count,x.userData=Object.assign({},S.userData),E.geometry=x}let v=l[M];x.setAttribute(M,new ai(v.array,v.itemSize,v.normalized))}It.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),d.push(E)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Vg="glTF",ml=12,Bg={JSON:1313821514,BIN:5130562},sp=class{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ml),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ml,r=new DataView(e,ml),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Bg.JSON){let c=new Uint8Array(e,ml+a,o);this.content=n.decode(c)}else if(l===Bg.BIN){let c=ml+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},rp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=cp[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=cp[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Ga[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let b=d.attributes[p],m=l[p];m!==void 0&&(b.normalized=m)}u(d)},o,c,Tt,f)})})}},ap=class{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},op=class{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}},fu=class extends Xi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,b=p-c,m=-2*d+3*f,g=d-f,_=1-m,E=g-f+u;for(let x=0;x!==o;x++){let M=a[b+x+o],v=a[b+x+l]*h,S=a[p+x+o],y=a[p+x]*h;r[x]=_*M+E*v+m*S+g*y}return r}},GS=new $t,lp=class extends fu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return GS.fromArray(r).normalize().toArray(r),r}},yi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ga={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hg={9728:fn,9729:bt,9984:Kc,9985:Ra,9986:Pr,9987:en},Og={33071:bn,33648:fa,10497:Gn},zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VS={CUBICSPLINE:void 0,LINEAR:xr,STEP:br},Bd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};YS=new Pe,up=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new OS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new wr(this.options.manager):this.textureLoader=new Yo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Gr(r,o,i),es(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(vs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=zd[i.type],o=Ga[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ct(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=zd[i.type],c=Ga[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,b,m;if(d&&d!==u){let g=Math.floor(f/d),_="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,E=t.cache.get(_);E||(b=new c(o,g*d,i.count*d/h),E=new _r(b,d/h),t.cache.add(_,E)),m=new zs(E,l,f%d/h,p)}else o===null?b=new c(i.count*l):b=new c(o,f,i.count*l),m=new ct(b,l,p);if(i.sparse!==void 0){let g=zd.SCALAR,_=Ga[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,M=new _(a[1],E,i.sparse.count*g),v=new c(a[2],x,i.sparse.count*l);o!==null&&(m=new ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,y=M.length;S<y;S++){let w=M[S];if(m.setX(w,v[S*l]),l>=2&&m.setY(w,v[S*l+1]),l>=3&&m.setZ(w,v[S*l+2]),l>=4&&m.setW(w,v[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Hg[f.magFilter]||bt,h.minFilter=Hg[f.minFilter]||en,h.wrapS=Og[f.wrapS]||Gn,h.wrapT=Og[f.wrapT]||Gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==fn&&h.minFilter!==bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(b){let m=new yn(b);m.needsUpdate=!0,f(m)}),t.load(vs.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),es(u,a),u.userData.mimeType=a.mimeType||jS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ya,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new _a,Wn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ne}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Rt.KHR_MATERIALS_UNLIT]){let u=i[Rt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Tt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,ot)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ct);let h=r.alphaMode||Bd.OPAQUE;if(h===Bd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Bd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==it&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==it&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==it){let u=r.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],Tt)}return r.emissiveTexture!==void 0&&a!==it&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ot)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),es(u,r),t.associations.set(u,{materials:e}),r.extensions&&Gr(i,u,r),u})}createUniqueName(e){let t=Yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gg(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=KS(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Gg(new ht,c,t),c.mode===yi.TRIANGLE_STRIP?f=f.then(d=>Ed(d,al)):c.mode===yi.TRIANGLE_FAN&&(f=f.then(d=>Ed(d,Pa))),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?WS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let b=h[d],m=a[d],g,_=c[d];if(m.mode===yi.TRIANGLES||m.mode===yi.TRIANGLE_STRIP||m.mode===yi.TRIANGLE_FAN||m.mode===void 0){let E=r.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");E&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&x?new wo(b,_):new Q(b,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===yi.LINES)g=new Mr(b,_);else if(m.mode===yi.LINE_STRIP)g=new yr(b,_);else if(m.mode===yi.LINE_LOOP)g=new Ao(b,_);else if(m.mode===yi.POINTS)g=new Gs(b,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&XS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),es(g,r),m.extensions&&Gr(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Gr(i,u[0],r),u[0];let f=new lt;r.extensions&&Gr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(Vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ki(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),es(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Pe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ro(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],b=d.target,m=b.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,_=i.parameters!==void 0?i.parameters[p.output]:p.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],b=u[3],m=u[4],g=[];for(let E=0,x=f.length;E<x;E++){let M=f[E],v=d[E],S=p[E],y=b[E],w=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let P=n._createAnimationTracks(M,v,S,y,w);if(P)for(let I=0;I<P.length;I++)g.push(P[I])}let _=new Wo(r,void 0,g);return es(_,i),_})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,YS)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new R().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new va:c.length>1?h=new lt:c.length===1?h=c[0]:h=new It,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),es(h,r),r.extensions&&Gr(n,h,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new lt;n.name&&(r.name=i.createUniqueName(n.name)),es(r,n),n.extensions&&Gr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Ng(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Wn||f instanceof yn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}nr[r.path]===nr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(nr[r.path]){case nr.weights:h=ms;break;case nr.rotation:h=gs;break;case nr.translation:case nr.scale:h=Xs;break;default:n.itemSize===1?h=ms:h=Xs;break}let u=i.interpolation!==void 0?VS[i.interpolation]:xr,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let b=new h(l[d]+"."+nr[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=hp(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof gs?lp:fu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var dp,ZS,Wg,$S,pp,ui,du,gl,Wa,qa,QS,ir,Es,pu,mp=ut(()=>{ln();dp=-1.75,ZS=1.75,Wg=150,$S=60,pp=48,ui=dp,du=ZS,gl=-pp,Wa=-2*pp,qa=-3*pp,QS=[0,-78,-26,-52],ir=[{x:[[0,ui],[9,ui]],dz:[[0,0],[3.42,0],[3.55,-5],[3.7,-7],[3.78,-7],[3.86,-14],[3.95,-21],[4.05,-23],[4.6,0],[9,0]]},{x:[[0,ui],[9,ui]],dz:[[0,gl],[.3,-50],[.8,-62],[1.3,-78],[1.9,-90],[2.6,Wa],[3.42,Wa],[3.55,-99],[3.7,-104],[3.78,-103],[3.86,-103.5],[3.95,-105],[4.05,-106.5],[4.6,Wa],[5.85,Wa],[6.5,-110],[7,-126],[7.6,-140],[8.2,qa],[9,qa]]},{x:[[0,ui],[.36,ui],[.76,du],[1.05,du],[1.45,ui],[9,ui]],dz:[[0,-98],[.1,-98],[.36,-91],[.8,-62],[1.05,-52],[1.4,gl],[3.42,gl],[3.55,-49],[3.7,-54],[3.78,-54],[3.86,-55],[3.95,-58],[4.05,-60],[4.6,gl],[9,gl]]},{x:[[0,ui],[1.25,ui],[1.6,-1.25],[1.95,ui],[6.05,ui],[6.45,du],[6.75,du],[7.15,ui],[9,ui]],dz:[[0,-150],[1,-147],[1.8,qa],[3.42,qa],[3.55,-147],[3.7,-152],[3.78,-151],[3.86,-151],[3.95,-151.5],[4.05,-152.5],[4.6,qa],[5.8,qa],[6.05,-139],[6.5,-110],[6.75,-100],[7.1,Wa],[9,Wa]]}],Es=.01,pu=class{constructor(){this.choreo=ir.map(e=>({x:ii(e.x),dz:ii(e.dz)})),this.anzahl=ir.length,this.zustaende=ir.map(()=>({vx:0,vz:0,ax:0,az:0,erst:!0})),this.tempoAlt=null,this.beschl=0,this.davon=0,this.vorsprung=0}beginne(e,t,n,i,r=0){let a=this.tempoAlt===null?0:(i-this.tempoAlt)/Math.max(n,.001);this.tempoAlt=i,this.beschl+=(at(a,-40,40)-this.beschl)*Zi(n,.45);let o=Math.max(at(r),yt(8.12,8.75,e));this.davon+=(o-this.davon)*Zi(n,.6);let l=this.davon*this.davon*(3-2*this.davon);this.vorsprung=$S*l,this._e=l}pose(e,t,n,i,r,a){let o=this.choreo[e],l=this.zustaende[e],c=Math.abs(r),h=this._e||0,u=o.x(t),f=o.x(t+Es),d=o.x(t-Es),p=o.dz(t),b=o.dz(t+Es),m=(f-u)/Es,g=(f-2*u+d)/(Es*Es),_=(b-p)/Es,E=r/Wg,x=m*E,M=_*E;l.erst&&(l.vx=x,l.vz=M,l.erst=!1);let v=Zi(i,.3),S=(x-l.vx)/Math.max(i,.001),y=(M-l.vz)/Math.max(i,.001);l.ax+=(at(S,-12,12)-l.ax)*v,l.az+=(at(y,-25,25)-l.az)*v,l.vx=x,l.vz=M;let w=e===0?0:1.2*Math.sin(t*1.3+e*1.7)+.4*Math.sin(n*.21+e*2.1)*at(c/5),P=Wt(p,QS[e]||0,h)+w*(1-h*.5);a.x=u,a.dz=P+this.vorsprung,a.vz=M;let I=Math.max(30,Wg+_),D=m/I;a.gier=Math.atan(D),a.kruemmung=g/(I*I)/Math.pow(1+D*D,1.5);let H=(l.az+this.beschl)*at(c/6);a.nick=-at(H/18,-1,1)*.016;let C=at(a.kruemmung*c*c+l.ax*.3,-6,6);a.roll=C*.006;let U=at(-l.az/2.5)*at(c/6),L=at(-this.beschl/10)*at(c/6);a.brems=Math.max(U,L*.8);let B=(o.x(t+.08)-o.x(t+.08-Es))/Es,N=Math.abs(m)>.8?m:Math.abs(B)>.8?B:0;return a.blinker=N>0?"L":N<0?"R":null,a}}});function Xg(s){for(let e=s;e;e=e.parent)if(!e.visible)return!1;return!0}function Kg(s){return s.layers.mask=eT,s}var eT,bl,gp,qg,Xa,Ka,jg=ut(()=>{Pt();ni();eT=0,bl=new R,gp=new Pe,qg=new Pe;Xa=class{constructor(e,t,{tiefe:n=!1,spiegel:i=!1,max:r=16,renderOrder:a=10,name:o="stapel:flecke"}={}){this.max=r,this.liste=[];let l=new jo,c=new st(1,1);l.index=c.index,l.setAttribute("position",c.attributes.position),l.setAttribute("uv",c.attributes.uv),this.ort=new ai(new Float32Array(r*3),3).setUsage(Qn),this.mass=new ai(new Float32Array(r*2),2).setUsage(Qn),this.farbe=new ai(new Float32Array(r*4),4).setUsage(Qn),l.setAttribute("iOrt",this.ort),l.setAttribute("iMass",this.mass),l.setAttribute("iFarbe",this.farbe),l.instanceCount=0;let h=new Et({transparent:!0,blending:kt,depthWrite:!1,depthTest:n,fog:!1,uniforms:{t:{value:t}},vertexShader:`
        attribute vec3 iOrt; attribute vec2 iMass; attribute vec4 iFarbe; varying vec2 vUv; varying vec4 vFarbe;
        void main(){ vUv = uv; vFarbe = iFarbe; vec4 mv = viewMatrix * vec4(iOrt, 1.0); mv.xy += position.xy * iMass; gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        precision highp float;
        uniform sampler2D t; varying vec2 vUv; varying vec4 vFarbe;
        void main(){ vec4 tx = texture2D(t, vUv); gl_FragColor = vec4(vFarbe.rgb * tx.rgb, vFarbe.a * tx.a);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new Q(l,h),this.mesh.name=o,this.mesh.frustumCulled=!1,this.mesh.renderOrder=a,i&&this.mesh.layers.enable(Dt),e.add(this.mesh)}nimm(e){return this.liste.length<this.max?(this.liste.push(Kg(e)),!0):!1}entferne(e){let t=this.liste.indexOf(e);t>=0&&this.liste.splice(t,1)}abgleich(){let e=0,t=this.ort.array,n=this.mass.array,i=this.farbe.array;for(let r of this.liste){let a=r.material;a.opacity<=.002||!Xg(r)||(bl.copy(r.position),r.parent&&bl.applyMatrix4(r.parent.matrixWorld),t[e*3]=bl.x,t[e*3+1]=bl.y,t[e*3+2]=bl.z,n[e*2]=r.scale.x,n[e*2+1]=r.scale.y,i[e*4]=a.color.r,i[e*4+1]=a.color.g,i[e*4+2]=a.color.b,i[e*4+3]=a.opacity,e++)}this.mesh.geometry.instanceCount=e,this.mesh.visible=e>0,e&&(this.ort.needsUpdate=!0,this.mass.needsUpdate=!0,this.farbe.needsUpdate=!0)}},Ka=class{constructor(e,t,n,{max:i=8,spiegel:r=!1,renderOrder:a=0,wert:o=null,name:l="stapel:meshes"}={}){this.max=i,this.liste=[],this.wert=o,this.mesh=new Lt(t,n,i),this.mesh.instanceMatrix.setUsage(Qn),o&&(this.werte=new ai(new Float32Array(i),1).setUsage(Qn),this.mesh.geometry.setAttribute("iWert",this.werte)),this.mesh.count=0,this.mesh.name=l,this.mesh.frustumCulled=!1,this.mesh.renderOrder=a,r&&this.mesh.layers.enable(Dt),e.add(this.mesh)}nimm(e){return this.liste.length<this.max?(this.liste.push(Kg(e)),!0):!1}entferne(e){let t=this.liste.indexOf(e);t>=0&&this.liste.splice(t,1)}abgleich(){let e=0;for(let t of this.liste){if(!Xg(t))continue;if(this.wert){let i=this.wert(t);if(!(i>5e-4))continue;this.werte.array[e]=i}t.updateMatrix(),gp.multiplyMatrices(t.parent?t.parent.matrixWorld:qg.identity(),t.matrix);let n=t.userData.mass;n&&gp.multiply(qg.makeScale(n[0],n[1],n[2]||1)),this.mesh.setMatrixAt(e,gp),e++}this.mesh.count=e,this.mesh.visible=e>0,e&&(this.mesh.instanceMatrix.needsUpdate=!0,this.werte&&(this.werte.needsUpdate=!0))}}});function Qg(){return ja||(ja=new Nt(.09,2.8,26,20,1,!0),ja.rotateX(-Math.PI/2),ja.translate(0,0,13),ja)}function tb(){return Ya||(Ya=new st(1,1),Ya.translate(0,-.5,0),Ya.rotateX(Math.PI/2),Ya)}function nb(){if(vl)return vl;let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(128,64,10,128,64,120);return t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.45,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.scale(1,.5),e.fillStyle=t,e.fillRect(0,0,256,256),vl=new Ft(s),vl.colorSpace=Xt,vl}function dT(){if(_l)return _l;let s=128,e=document.createElement("canvas");e.width=e.height=s;let t=e.getContext("2d"),n=t.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,0.75)"),n.addColorStop(.45,"rgba(255,255,255,0.35)"),n.addColorStop(.74,"rgba(255,255,255,0.95)"),n.addColorStop(.86,"rgba(255,255,255,0.3)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,s,s),_l=new Ft(e),_l.colorSpace=Xt,_l}function ib(s,e){let t=Wt(s.normal,s.brems,e);s.art==="basic"?s.m.color.copy(s.basis).multiplyScalar(t):s.m.emissiveIntensity=t}function pT(s,e){s.art==="basic"?s.m.color.setRGB(.35+e*8,.16+e*3.2,.05+e*.5,Tt):s.m.emissiveIntensity=e*sT}function rb(s){if(s.isMeshPhysicalMaterial)return s.clone();let e=new sn({map:s.map||null,normalMap:s.normalMap||null,roughnessMap:s.roughnessMap||null,metalnessMap:s.metalnessMap||null,aoMap:s.aoMap||null});return s.normalScale&&e.normalScale.copy(s.normalScale),e}function ab(s){for(let e of s)e.rotation.order="YXZ",e.userData.basis=e.position.clone()}var Ln,Vr,Yg,Ss,Jg,mu,tT,nT,iT,sT,xl,rT,gu,Zg,aT,oT,bp,lT,$g,cT,hT,uT,fT,ja,eb,Ya,vl,_l,sb,bu,sr=ut(()=>{Pt();fp();ti();Ud();ni();ln();$s();mp();jg();Ln=dp,Vr=[{modell:"auto_goblin",lack:1450810},{modell:"auto_coupe_suv",lack:9343899},{modell:"auto_cyber",lack:7214628},{modell:"auto_goblin",lack:14474720}],Yg=Vr.map(s=>s.lack),Ss=1,Jg=Vr.length,mu=["auto_goblin","auto_coupe_suv","auto_cyber","auto_freq_caravan"],tT={99:"auto_coupe_suv",98:"auto_freq_caravan"},nT=[0,28,80],iT=7,sT=9,xl={farbe:[1,.025,.012],normal:1.4,brems:3.6},rT={farbe:[1,.02,.01],normal:0,brems:3.2},gu=[1.2,.03,.015],Zg=[1,.035,.018],aT=160,oT=.044,bp=2*Math.PI*1.1,lT=.55,$g=Vt.degToRad(25),cT=.6,hT=new R(0,0,1),uT=s=>new Et({transparent:!0,blending:kt,depthWrite:!1,depthTest:!0,side:Ct,fog:!1,uniforms:{farbe:{value:s},staerke:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    precision highp float;
    uniform vec3 farbe; uniform float staerke; varying vec2 vUv;
    void main(){ float l = pow(clamp(vUv.y, 0.0, 1.0), 1.9); float b = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 1.6); float a = l * b * staerke;
      gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),fT=s=>new Et({transparent:!0,blending:kt,depthWrite:!1,depthTest:!0,side:Ct,fog:!1,uniforms:{farbe:{value:s}},vertexShader:"attribute float iWert; varying vec2 vUv; varying float vWert; void main(){ vUv = uv; vWert = iWert; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }",fragmentShader:`
    precision highp float;
    uniform vec3 farbe; varying vec2 vUv; varying float vWert;
    void main(){ float l = pow(clamp(vUv.y, 0.0, 1.0), 1.9); float b = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 1.6); float a = l * b * vWert;
      gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),ja=null;eb=()=>new we().setRGB(.9,.97,1.1,Tt),Ya=null;vl=null;_l=null;sb=()=>({hinten:[],brems:[],blinkerL:[],blinkerR:[]});bu=class{constructor(e,t){this.szene=e,this.envMap=t,this.flareT=ei(128),this.streakT=jm(256,32),this.autos=[],this.geparkt=[],this.bremse=0,this.sanftBremse=0,this.innenGlas=0,this.davonfahren=0,this.vorsprung=0,this.fertig=!1,this.eigeneModelle=!1,this.stufe={lod:0,lodWeite:1,lichter:6,schatten:!1,kegel:!0},this.stufeName="hoch",this._p=new R,this._z=new R,this._d=new R,this._q=new $t,this._k=new R,this._inv=new Pe,this._fuehrung=new R(Ln,0,0),this._fuehrungEcht=new R(Ln,0,0),this.abfahrt=null,this._ab={aktiv:!1,dz:0,licht:1,blinker:null,brems:0,x:0,y:0,z:0,gier:0,kruemmung:0,hang:0,roll:0,s:0},this._pose={x:Ln,dz:0,vz:0,gier:0,kruemmung:0,nick:0,roll:0,brems:0,blinker:null},this._weiten=[0,0,0],this.envMaterialien=[],this.fahrt=new pu,this.vorlagen=[],this.spots=[],this._bremseAlt=0,this._pulsZeit=-1,this._pv=new Pe,this._bild=new Os,this._kugel=new Vn(new R,30)}async laden(e,t){let n=new Va,i=null;try{i=await n.loadAsync(e)}catch(a){console.warn("Automodell fehlt, Ersatz",a),i=await n.loadAsync(t)}this.vorlageAlt=i.scene;let r=this.envMap;this.materialienAlt={Lack:a=>new sn({color:a,metalness:.75,roughness:.3,clearcoat:1,clearcoatRoughness:.05,envMap:r,envMapIntensity:1.6}),Glas:()=>new sn({color:395535,metalness:.9,roughness:.05,clearcoat:1,clearcoatRoughness:.03,envMap:r,envMapIntensity:2,transparent:!0,opacity:1}),Zierleiste:()=>new Ne({color:328966,roughness:.45,metalness:.2,envMap:r,envMapIntensity:.6}),Kunststoff:()=>new Ne({color:723982,roughness:.75,metalness:0}),Lampenglas:()=>new sn({color:460810,metalness:.6,roughness:.08,clearcoat:1,envMap:r,envMapIntensity:1.5}),Reifen:()=>new Ne({color:657931,roughness:.92}),Felge:()=>new Ne({color:6975094,roughness:.28,metalness:.95,envMap:r,envMapIntensity:1.2}),Bremse:()=>new Ne({color:3815996,roughness:.5,metalness:.9}),Chrom:()=>new Ne({color:12633290,roughness:.15,metalness:1,envMap:r,envMapIntensity:1.4}),Kennzeichen:()=>new Ne({color:14211288,roughness:.5}),Scheinwerfer:()=>new it({color:Ke(9,9.5,11)}),LED:()=>new it({color:Ke(6,7,9)}),Ruecklicht:()=>new it({color:Ke(...xl.farbe)}),RuecklichtBlock:()=>new it({color:Ke(...xl.farbe)}),Blinker:()=>new it({color:Ke(.35,.16,.05)})};for(let a=0;a<Jg;a++)this.autos.push(this.autoBauen(Yg[a],a,!0));this.fertig=!0}async starten(e,t,n,i,r=null){let a=!1;try{a=await this.vorlagenLaden(e,t,r)}catch(o){console.warn("Automodelle",o),a=!1}if(!a)return await this.laden(n,i),!1;for(let o=0;o<Jg;o++)this.autos.push(this.autoBauen(Yg[o],o,!0)),r&&await r();return this.eigeneModelle=!0,this.fertig=!0,!0}async vorlagenLaden(e,t,n=null){t&&t.stufe&&(this.stufe=t.stufe,this.stufeName=t.stufeName||this.stufeName);let i=at(this.stufe.lod|0,0,2),r=await Promise.all(mu.map(o=>Ur(e,o,i,i===0?0:2).catch(l=>(console.warn("Automodell",o,l),null)))),a=[];for(let o=0;o<mu.length;o++){let l=r[o];if(!l||!l.da){console.warn("Automodell fehlt, das Auto nimmt ein anderes Modell:",mu[o]);continue}try{a.push(this.vorlageBauen(l))}catch(c){console.warn("Automodell unbrauchbar",mu[o],c)}n&&await n()}return a.length?(this.vorlagen=a,!0):!1}async ladeModelle(e,t){if(this.eigeneModelle)return!0;if(!await this.vorlagenLaden(e,t))return!1;for(let n=0;n<this.autos.length;n++)this.umbauen(this.autos[n],n,!0,!1);for(let n of this.geparkt)this.umbauen(n,n.kennzahl||99,!1,!0);return this.eigeneModelle=!0,!0}vorlageBauen(e){let n=e.stufen.find(I=>I).scene;n.updateMatrixWorld(!0);let i=new on().setFromObject(n,!0),r=i.getSize(new R),a=i.getCenter(new R),o=r.z>.5?r.z:4.6,l=r.x>.3?r.x:1.9,c=r.y>.3?r.y:1.4,h=!/^auto_freq_/.test(e.name)&&(o<3.8||o>5.2)?4.6/o:1,u=-i.min.y*h,f=I=>{let D=null;return n.traverse(H=>{!D&&H.name===I&&(D=H)}),D},d=I=>I.set(-I.x*h,I.y*h+u,-I.z*h),p=(I,D)=>{let H=f(I),C=new R;return H?H.getWorldPosition(C):C.copy(D),d(C)},b={vornL:p("anker_licht_vorn_L",new R(a.x-l*.32,i.min.y+c*.42,i.min.z+.08)),vornR:p("anker_licht_vorn_R",new R(a.x+l*.32,i.min.y+c*.42,i.min.z+.08)),hintenL:p("anker_licht_hinten_L",new R(a.x-l*.33,i.min.y+c*.6,i.max.z-.06)),hintenR:p("anker_licht_hinten_R",new R(a.x+l*.33,i.min.y+c*.6,i.max.z-.06)),bremsMitte:f("anker_bremslicht_mitte")?p("anker_bremslicht_mitte",new R):null},m=f("anker_licht_vorn_L")||f("anker_licht_vorn_R"),g=new R(0,-.035,1);m&&(m.getWorldDirection(g),g.set(-g.x,g.y,-g.z),g.z<.5&&g.set(0,-.035,1)),g.normalize();let _=m&&m.userData&&m.userData.winkel?at(+m.userData.winkel||60,20,120):60,E=m?Fa(m,16054527):new we(16054527),x=f("Rad_VL")||f("Rad_VR")||f("Rad_HL"),M=.35;if(x){let I=new R;x.getWorldPosition(I),M=Math.max(.22,(I.y-i.min.y)*h)}let v=(I,D,H)=>{let C=f(I),U=f(D);if(!C||!U)return H;let L=new R,B=new R;return C.getWorldPosition(L),U.getWorldPosition(B),d(L.add(B).multiplyScalar(.5)).z},S=v("Rad_HL","Rad_HR",-.3*o*h),y=v("Rad_VL","Rad_VR",.28*o*h),w=Math.max(.5,-S),P=at(y-S,2,3.4);return{name:e.name,stufen:e.stufen,extras:e.extras,skal:h,dy:u,laenge:o*h,breite:l*h,hoehe:c*h,pos:b,richtung:g,winkel:_,farbe:E,radRadius:M,hinterachse:w,radstand:P}}vorlageFuer(e){let t=this.vorlagen.length;if(!t)return null;let n=tT[e]||Vr[e]&&Vr[e].modell;return this.vorlagen.find(i=>i.name===n)||this.vorlagen[e%t]}autoBauen(e,t,n=!0,i=null,r=!1){let a=this.vorlageFuer(t);i=i||new lt,i.rotation.order="YXZ";let o=a?this.autoNeu(a,e,t,n,i,r):this.autoAlt(e,t,n,i);return o.nickB=0,o.nickV=0,i.parent||this.szene.add(i),o}autoAlt(e,t,n,i){let r=this.vorlageAlt.clone(!0);r.rotation.y=Math.PI;let a={},o=[],l=[],c=[],h=[],u=sb();r.traverse(d=>{if(d.isMesh){let p=d.material?.name||"Lack";if(p==="Blinker"){let b=/Blinker_[VH]L/.test(d.name)?"L":"R",m=this.materialienAlt.Blinker();m.name="Blinker",d.material=m,u["blinker"+b].push({m,art:"basic"}),h.push(m)}else{if(!a[p]){let b=this.materialienAlt[p]?this.materialienAlt[p](e):new Ne({color:3355443});b.name=p,a[p]=b,h.push(b),!n&&(p==="Scheinwerfer"||p==="LED"||p==="Ruecklicht"||p==="RuecklichtBlock")&&b.color.setRGB(.08,.08,.09),n&&(p==="Ruecklicht"||p==="RuecklichtBlock")&&u.hinten.push({m:b,art:"basic",basis:b.color.clone(),normal:xl.normal,brems:xl.brems}),"envMap"in b&&this.envMaterialien.push(b),p==="Lack"&&l.push(b),p==="Glas"&&c.push(b)}d.material=a[p]}d.layers.enable(Dt),d.frustumCulled=!1}d.name&&d.name.startsWith("Rad_")&&o.push(d)}),i.add(r),ab(o);let f={g:i,modell:r,stufen:[r],lodAktiv:0,raeder:o,vorderraeder:o.filter(d=>/^Rad_V/.test(d.name)),radRadius:.35,radWinkel:0,leuchten:u,lackMats:l,glasMats:c,eigene:[r],eigeneMats:h,index:t,lack:e,bremsLicht:0,sw:[],rl:[],rotLicht:null,puls:null,laenge:4.9,breite:2,hinterachse:1.45,radstand:2.8,pos:{vornL:new R(.6,.65,2.4),vornR:new R(-.6,.65,2.4),hintenL:new R(.62,.9,-2.46),hintenR:new R(-.62,.9,-2.46),bremsMitte:null},richtung:new R(0,-.035,1).normalize(),winkel:60,farbeVorn:new we(16054527)};return this.ausstatten(f,n),f}autoNeu(e,t,n,i,r,a){let o=new lt;o.rotation.y=Math.PI,o.scale.setScalar(e.skal),o.position.y=e.dy;let l=Vr[n]&&Vr[n].modell===e.name&&Vr[n].versatz||0;o.position.z=l;let c=new Map,h=[],u=[],f=[],d=[],p=sb(),b=[null,null,null],m=a?e.stufen[1]?1:e.stufen[2]?2:0:-1,g=!!this.stufe.schatten,_=e.stufen.findIndex(M=>M);for(let M=0;M<3;M++){let v=e.stufen[M];if(!v||a&&M!==m)continue;let S=(a||M===2&&_<2)&&!(this.aus&&this.aus.has("fern")),y=v.scene.clone(!0);y.traverse(w=>{if(w.isMesh){let I=(Array.isArray(w.material)?w.material:[w.material]).map(D=>this.materialFuerAuto(D,w,{lack:t,index:n,mitLichtern:i,matMap:c,eigeneMats:h,leuchten:p,lackMats:f,glasMats:d}));w.material=Array.isArray(w.material)?I:I[0]}!S&&w.name&&/^Rad_[VH][LR]$/.test(w.name)&&u.push(w)}),Sd(y,{schattenWerfen:g&&n===0}),Ii(y,{behalten:S?/^anker_/i:/^Rad_|^anker_/i}),y.visible=!1,o.add(y),b[M]=y}r.add(o),ab(u);let E=at(this.stufe.lod|0,0,2);for(;E<3&&!b[E];)E++;if(E>2)for(E=2;E>0&&!b[E];)E--;b[E]&&(b[E].visible=!0);let x={g:r,modell:o,stufen:b,lodAktiv:E,raeder:u,vorderraeder:u.filter(M=>/^Rad_V/.test(M.name)),radRadius:e.radRadius,radWinkel:0,leuchten:p,lackMats:f,glasMats:d,eigene:[o],eigeneMats:h,index:n,lack:t,bremsLicht:0,sw:[],rl:[],rotLicht:null,puls:null,laenge:e.laenge,breite:e.breite,hinterachse:e.hinterachse-l,radstand:e.radstand,versatz:l,pos:l?Object.fromEntries(Object.entries(e.pos).map(([M,v])=>[M,v&&v.clone().setZ(v.z+l)])):e.pos,richtung:e.richtung,winkel:e.winkel,farbeVorn:e.farbe};return this.ausstatten(x,i),x}materialFuerAuto(e,t,n){if(!e)return e;let i=e.name||"",r=i==="blinker"||/^blinker_/i.test(t.name||""),a=e.uuid,o=null;if(r&&(o=/^blinker_[vh]l$/i.test(t.name)?"L":/^blinker_[vh]r$/i.test(t.name)?"R":/_l$/i.test(t.name)?"L":"R",a+=":"+o),n.matMap.has(a))return n.matMap.get(a);let l=e,c=n.mitLichtern;if(i==="Lack")l=this.lackMaterial(e,n.lack,n.index===0),n.lackMats.push(l);else if(i==="Glas")l=this.glasMaterial(e,n.index===0),n.glasMats.push(l);else if(i==="Chrom"||i==="Felge"||i==="Rad")l=e.clone(),l.envMap=this.envMap,l.envMapIntensity=1.3,this.envMaterialien.push(l);else if(i==="Kunststoff"&&e.map)l=e.clone(),l.color.setRGB(.42,.43,.46),l.roughness=Math.max(l.roughness,.6);else if(r)l=e.clone(),l.emissive.setRGB(1,.45,.1),l.emissiveMap=null,l.emissiveIntensity=0,n.leuchten["blinker"+o].push({m:l,art:"emissiv"});else if(i==="licht_vorn")l=e.clone(),l.emissive.getHex()===0&&l.emissive.setRGB(1,.97,.92),l.emissiveIntensity=c?iT:0;else if(i==="licht_hinten"||i==="bremslicht"){let h=i==="licht_hinten"?xl:rT;l=e.clone(),l.emissive.setRGB(...h.farbe,Tt),l.emissiveMap=null;let u={m:l,art:"emissiv",normal:c?h.normal:0,brems:c?h.brems:0};l.emissiveIntensity=u.normal,n.leuchten[i==="licht_hinten"?"hinten":"brems"].push(u)}else return n.matMap.set(a,e),e;return l.name=i,n.matMap.set(a,l),n.eigeneMats.push(l),l}lackMaterial(e,t,n){let i=rb(e);i.color.setHex(t);let r=i.color.r+i.color.g+i.color.b>1.2;return i.metalness=r?.35:.75,i.roughness=r?.34:.3,i.clearcoat=1,i.clearcoatRoughness=.05,i.envMap=this.envMap,i.envMapIntensity=1.6,i.transmission=0,i.transparent=!1,i.opacity=1,i.side=n?Ct:$n,this.envMaterialien.push(i),i}glasMaterial(e,t){let n=rb(e);return n.color.setHex(395535),n.map=null,n.alphaMap=null,n.metalness=.9,n.roughness=.05,n.clearcoat=1,n.clearcoatRoughness=.03,n.envMap=this.envMap,n.envMapIntensity=2,n.transmission=0,n.transparent=!0,n.opacity=1,n.depthWrite=!0,n.side=t?Ct:$n,this.envMaterialien.push(n),n}ausstatten(e,t){let{g:n,pos:i}=e,r=new Q(new st(e.laenge+.7,e.breite+.6),new it({map:nb(),transparent:!0,depthWrite:!1,color:0,opacity:.85}));r.rotation.order="ZXY",r.rotation.x=-Math.PI/2,r.position.set(0,.012,e.versatz||0),r.renderOrder=1,n.add(r),e.eigene.push(r),e.schatten=r;let a=this.stapelHolen();if(a&&(r.userData.mass=[e.laenge+.7,e.breite+.6,1],r.geometry.dispose(),r.geometry=a.einheit,a.schatten.nimm(r)),!t)return;let o=e.richtung;for(let u of[i.vornL,i.vornR]){let f=new Q(Qg(),hu(eb(),.07,[0,0,0],1.2,4));f.position.copy(u),f.quaternion.setFromUnitVectors(hT,o),f.frustumCulled=!1,f.visible=this.stufe.kegel!==!1,n.add(f);let d=new Dn(new Cn({map:this.flareT,color:Ke(2.6,2.7,3),blending:kt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));d.position.copy(u).addScaledVector(o,.03);let p=new Dn(new Cn({map:this.streakT,color:Ke(1.6,1.8,2.4),blending:kt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));p.position.copy(d.position),d.layers.enable(Dt),n.add(d,p),e.sw.push({fl:d,st:p,kg:f}),e.eigene.push(f,d,p),a&&(a.kegel.nimm(f),a.vorn.nimm(d),a.streifen.nimm(p))}for(let u of[i.hintenL,i.hintenR]){let f=new Dn(new Cn({map:this.flareT,color:Ke(...gu),blending:kt,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1}));f.position.copy(u),f.layers.enable(Dt),n.add(f);let d=new Q(tb(),uT(new we().setRGB(...Zg,Tt)));d.position.copy(u),d.scale.x=.24,d.frustumCulled=!1,d.layers.enable(Dt),n.add(d),e.rl.push({fl:f,basis:u.clone(),spur:d}),e.eigene.push(f,d),a&&(a.hinten.nimm(f),a.spur.nimm(d))}if(e.index!==0)return;let l=(this.stufe.lichter|0)>0,c=new Fn(16718348,4,12,2);c.position.set((i.hintenL.x+i.hintenR.x)/2,(i.hintenL.y+i.hintenR.y)/2,Math.min(i.hintenL.z,i.hintenR.z)-.25),c.visible=l,n.add(c),e.rotLicht=c,e.eigene.push(c);let h=new Dn(new Cn({map:dT(),color:Ke(2.6,.05,.025),blending:kt,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1,opacity:0}));h.position.set(c.position.x,c.position.y,c.position.z-.15),h.visible=!1,h.renderOrder=2,n.add(h),e.puls=h,e.eigene.push(h),this.spots=[];for(let u of[i.vornL,i.vornR]){let f=new xs(e.farbeVorn,aT,45,Vt.degToRad(e.winkel/2),.5,2);f.position.copy(u),f.target.position.copy(u).addScaledVector(o,30),f.target.position.y-=.4,f.visible=l,f.castShadow=!1,f.shadow.mapSize.set(1024,1024),f.shadow.camera.near=.5,f.shadow.camera.far=45,f.shadow.bias=-4e-4,f.shadow.normalBias=.02,n.add(f,f.target),this.spots.push(f),e.eigene.push(f,f.target)}}stapelHolen(){if(this.aus&&this.aus.has("stapel"))return null;if(this.stapel)return this.stapel;let e=this.szene;this.stapel={einheit:new st(1,1),schatten:null,kegel:null,vorn:null,streifen:null,hinten:null,spur:null};let t=this.stapel;return t.schatten=new Ka(e,t.einheit,new it({map:nb(),transparent:!0,depthWrite:!1,color:0,opacity:.85}),{max:10,renderOrder:1,name:"stapel:schatten"}),t.kegelMat=hu(eb(),1,[0,0,0],1.2,4,!0),t.kegel=new Ka(e,Qg(),t.kegelMat,{max:8,wert:n=>n.material.uniforms.staerke.value,name:"stapel:kegel"}),t.vorn=new Xa(e,this.flareT,{tiefe:!1,spiegel:!0,max:8,name:"stapel:blendflecke"}),t.streifen=new Xa(e,this.streakT,{tiefe:!1,spiegel:!1,max:8,name:"stapel:blendstreifen"}),t.hinten=new Xa(e,this.flareT,{tiefe:!0,spiegel:!0,max:8,name:"stapel:ruecklichter"}),t.spur=new Ka(e,tb(),fT(new we().setRGB(...Zg,Tt)),{max:8,spiegel:!0,wert:n=>n.material.uniforms.staerke.value,name:"stapel:lichtspuren"}),t}stapelAbgleich(e,t){let n=this.stapel;if(n){n.kegelMat.uniforms.zeit.value=e,n.kegelMat.uniforms.kamera.value.copy(t.position);for(let i of[n.schatten,n.kegel,n.vorn,n.streifen,n.hinten,n.spur])i.abgleich()}}umbauen(e,t,n,i){let r=e.g;if(this.stapel)for(let l of e.eigene)for(let c of[this.stapel.schatten,this.stapel.kegel,this.stapel.vorn,this.stapel.streifen,this.stapel.hinten,this.stapel.spur])c.entferne(l);for(let l of e.eigene)r.remove(l);let a=new Set(e.eigeneMats);this.envMaterialien=this.envMaterialien.filter(l=>!a.has(l));for(let l of e.eigeneMats)l&&l.dispose&&l.dispose();let o=this.autoBauen(e.lack,t,n,r,i);Object.assign(e,o)}parkendesAuto(e,t,n,i=99){let r=this.autoBauen(e,i,!1,null,!0);return r.kennzahl=i,r.g.position.copy(t),r.g.rotation.y=n,r.g.updateMatrixWorld(),this.geparkt.push(r),r}setzeEnv(e){this.envMap=e;for(let t of this.envMaterialien)t.envMap=e,t.needsUpdate=!0}setzeStufe(e,t){if(!e)return;this.stufe=e,this.stufeName=t||this.stufeName;let n=(e.lichter|0)>0;for(let r of this.spots)r.visible=n,r.castShadow=!1;let i=!!e.schatten;for(let r of[...this.autos,...this.geparkt]){r.rotLicht&&(r.rotLicht.visible=n);for(let{kg:a}of r.sw)a.visible=e.kegel!==!1&&r.imBild!==!1;for(let a of r.stufen)a&&a.traverse(o=>{o.isMesh&&(o.castShadow=i&&r.index===0)})}}lodWaehlen(e,t,n){if(e.stufen.length<2)return;let i=e.lodAktiv;for(;i<2&&t>n[i+1];)i++;for(;i>0&&t<n[i]*.8;)i--;let r=at(this.stufe.lod|0,0,2);i<r&&(i=r);let a=i;for(;a<3&&!e.stufen[a];)a++;if(a>2)for(a=i;a>=0&&!e.stufen[a];)a--;if(!(a<0||a===e.lodAktiv)){for(let o of e.stufen)o&&(o.visible=!1);e.stufen[a].visible=!0,e.lodAktiv=a}}update(e,t,n,i,r,a,o=0){if(!this.fertig)return;let l=Math.abs(i),c=r.position,h=this.stufe,u=this.fahrt;u.beginne(o,e,t,i,this.davonfahren),this.davonfahren=0,this.vorsprung=u.vorsprung;let f=Wt(1.6,22,at(l/45)),d=Wt(.25,.7,at(l/30)),p=Math.floor(e*3)%2===0?1:.12,b=Math.floor(e*2.6)%2===0?1:.12,m=this._weiten;for(let v=0;v<3;v++)m[v]=nT[v]*(h.lodWeite||1);let g=at(l/20),_=this.bremse;_>.2&&this._bremseAlt<=.2?this._pulsZeit=0:this._pulsZeit>=0&&(this._pulsZeit+=t),_<.02&&(this._pulsZeit=-1),this._bremseAlt=_;let E=Math.min(t,.05);for(let v=0;v<this.autos.length;v++){let S=this.autos[v],y=u.pose(v,o,e,t,i,this._pose),w=.1*Math.sin(2*Math.PI*.42*e+v*1.9)*g+.02*Math.sin(2*Math.PI*.9*e+v),P=y.gier+.012*Math.cos(2*Math.PI*.42*e+v)*g,I=.012*Math.sin(2*Math.PI*2.3*e+v)*g,D=n+y.dz-S.hinterachse;S.g.position.set(y.x+w+S.hinterachse*Math.sin(P),I,D+S.hinterachse*Math.cos(P)),S.g.rotation.y=P;let H=y.roll-.01*Math.cos(2*Math.PI*.42*e+v)*g,C=0;if(v===0){this._fuehrung.set(S.g.position.x,S.g.position.y,S.g.position.z-this.vorsprung);let ce=this.abfahrt?this.abfahrt.pose(o,D,l,this._ab):null;if(ce&&ce.aktiv){let _e=ce.gier+.012*Math.cos(2*Math.PI*.42*e)*g;S.g.position.set(ce.x+w*Math.cos(_e)+S.hinterachse*Math.sin(_e),ce.y+I,ce.z-w*Math.sin(_e)+S.hinterachse*Math.cos(_e)),S.g.rotation.y=_e,C=ce.hang,H+=ce.roll,y.kruemmung=ce.kruemmung}else ce&&ce.dz&&(S.g.position.z+=ce.dz);ce&&(ce.blinker&&(y.blinker=ce.blinker),y.brems=Math.max(y.brems,ce.brems)),a.uniforms.scheinwerferStaerke.value=ce?ce.licht:1}S.g.rotation.z=H;let U=Math.max(y.brems,this.sanftBremse*.7,_);S.bremsLicht+=(U-S.bremsLicht)*at(t*8);let L=oT*_*(v===0?1:.85);S.nickV+=(bp*bp*(L-S.nickB)-2*lT*bp*S.nickV)*E,S.nickB+=S.nickV*E;let B=y.nick+S.nickB;S.g.rotation.x=B-C,S.schatten.rotation.set(-Math.PI/2-B,0,-H);let N=v===0&&_>.3;for(let ce of["L","R"]){let _e=N?b:y.blinker===ce?p:0;for(let $e of S.leuchten["blinker"+ce])pT($e,_e)}S.radWinkel+=(i+y.vz)*t/S.radRadius;let z=at(Math.atan(S.radstand*y.kruemmung),-$g,$g);for(let ce of S.raeder){let _e=ce.userData.basis;ce.rotation.x=-S.radWinkel,ce.position.y=_e.y-(_e.z-(S.versatz||0))*B+_e.x*H}for(let ce of S.vorderraeder)ce.rotation.y=z;S.g.updateMatrixWorld(),this.lodWaehlen(S,S.g.position.distanceTo(c),m);let W=this._d.set(0,0,1).applyQuaternion(S.g.getWorldQuaternion(this._q));for(let{fl:ce,st:_e,kg:$e}of S.sw){ce.getWorldPosition(this._p);let ne=this._z.copy(c).sub(this._p),oe=ne.length();ne.normalize();let Te=Math.max(0,ne.dot(W)),ke=Vt.smoothstep(oe,2.5,16),de=Math.pow(Te,5)*ke,Oe=.32+oe*.02;ce.scale.set(Oe,Oe,1),ce.material.opacity=Math.min(1,de*.95),_e.scale.set(Oe*5*(.4+Te),Oe*.3,1),_e.material.opacity=Math.min(1,de*.5),$e.material.uniforms.staerke.value=.075*Vt.smoothstep(oe,2,14),$e.material.uniforms.zeit.value=e,$e.material.uniforms.kamera.value.copy(c)}let Y=1+S.bremsLicht*1.4,ae=this._inv.copy(S.g.matrixWorld).invert(),he=this._k.copy(c).applyMatrix4(ae);for(let{fl:ce,basis:_e,spur:$e}of S.rl){this._p.copy(_e).applyMatrix4(S.g.matrixWorld);let ne=this._z.copy(c).sub(this._p),oe=ne.length();ne.normalize();let Te=Math.max(0,-ne.dot(W));this._p.addScaledVector(ne,Math.min(.3,oe*.5)),ce.position.copy(this._p).applyMatrix4(ae);let ke=(.09+oe*.0025)*(1+S.bremsLicht*.4);ce.scale.set(ke,ke,1),ce.material.color.setRGB(gu[0]*Y,gu[1]*Y,gu[2]*Y,Tt),ce.material.opacity=Math.min(1,Math.pow(Te,1.5)*.55*Vt.smoothstep(oe,.6,2.5)),$e.rotation.z=Math.atan2(-(he.x-_e.x),he.y-_e.y),$e.scale.z=f,$e.material.uniforms.staerke.value=d*Y}for(let ce of S.leuchten.hinten)ib(ce,S.bremsLicht);for(let ce of S.leuchten.brems)ib(ce,S.bremsLicht);if(v===0){if(S.rotLicht&&(S.rotLicht.intensity=1.6+S.bremsLicht*9),S.puls){let ce=this._pulsZeit>=0?this._pulsZeit/cT:2,_e=ce<1?Math.min(1,ce/.12)*Math.pow(1-ce,1.6):0;S.puls.visible=_e>.005;let $e=.8+2.4*(1-Math.pow(1-Math.min(ce,1),2.2));S.puls.scale.set($e,$e,1),S.puls.material.opacity=_e*.5}for(let ce of S.glasMats)ce.opacity=1-this.innenGlas*.72,ce.envMapIntensity=2*(1-this.innenGlas),ce.clearcoat=Math.max(.02,1-this.innenGlas),ce.roughness=.05+this.innenGlas*.6,ce.metalness=.9-this.innenGlas*.8}}let x=this.autos[0],M=a.uniforms.scheinwerfer.value;M[0].copy(x.pos.vornL).applyMatrix4(x.g.matrixWorld),M[1].copy(x.pos.vornR).applyMatrix4(x.g.matrixWorld),a.uniforms.scheinwerferRichtung.value.set(0,-.06,1).applyQuaternion(x.g.getWorldQuaternion(this._q)).normalize(),this._fuehrungEcht.set(x.g.position.x,x.g.position.y,x.g.position.z-this.vorsprung)}sichtbarkeit(e){if(!(this.aus&&this.aus.has("bild"))){this._pv.multiplyMatrices(e.projectionMatrix,this._inv.copy(e.matrixWorld).invert()),this._bild.setFromProjectionMatrix(this._pv);for(let t=1;t<this.autos.length;t++){let n=this.autos[t];this._kugel.center.copy(n.g.position);let i=this._bild.intersectsSphere(this._kugel);if(i!==n.imBild){n.imBild=i,n.modell.visible=i,n.schatten.visible=i;for(let{fl:r,st:a,kg:o}of n.sw)r.visible=i,a.visible=i,o.visible=i&&this.stufe.kegel!==!1;for(let{fl:r,spur:a}of n.rl)r.visible=i,a.visible=i}}}}get fuehrung(){return this._fuehrung}get fuehrungEcht(){return this._fuehrungEcht}get zweites(){let e=null,t=-1e9,n=this.autos[0].g.position.z;for(let i=1;i<this.autos.length;i++){let r=this.autos[i],a=r.g.position.z;this.imConvoy(r)&&a<n&&a>t&&(t=a,e=r)}return e||this.autos[0]}get letztes(){let e=null,t=1e9;for(let n=1;n<this.autos.length;n++){let i=this.autos[n],r=i.g.position.z;this.imConvoy(i)&&r<t&&(t=r,e=i)}return e||this.autos[0]}imConvoy(e){let t=e.g.position,n=this.autos[0].g.position;return e.g.visible!==!1&&Math.abs(t.z-n.z)<200&&Math.abs(t.x)<30}}});var xu,vu,yl,ob=ut(()=>{Pt();ti();xu=class{constructor(e,t,n){this.anzahl=t;let i=new Float32Array(t*2*3),r=new Float32Array(t*2),a=new Float32Array(t*2);for(let c=0;c<t;c++){let h=n()*60-30,u=n()*30,f=n()*70-35,d=n();for(let p=0;p<2;p++)i[(c*2+p)*3]=h,i[(c*2+p)*3+1]=u,i[(c*2+p)*3+2]=f,r[c*2+p]=p,a[c*2+p]=d}let o=new ht;o.setAttribute("position",new ct(i,3)),o.setAttribute("ende",new ct(r,1)),o.setAttribute("phase",new ct(a,1)),this.uniforms={zeit:{value:0},mitte:{value:new R},staerke:{value:1},wind:{value:0},laenge:{value:.5}};let l=new Et({transparent:!0,blending:kt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
        uniform float zeit, wind, laenge; uniform vec3 mitte;
        attribute float ende, phase;
        varying float vA;
        void main(){
          float tempo = 18.0 + phase * 10.0;
          vec3 p = position;
          p.y = mod(p.y - zeit * tempo, 30.0);
          p.x = mod(p.x - mitte.x + 30.0 + zeit * wind * tempo * 0.08, 60.0) - 30.0 + mitte.x;
          p.z = mod(p.z - mitte.z + 35.0, 70.0) - 35.0 + mitte.z;
          p.y += ende * laenge * (tempo / 24.0);
          p.x += ende * laenge * wind * 0.2;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float d = -mv.z;
          vA = (0.35 + 0.65 * phase) * smoothstep(60.0, 20.0, d) * smoothstep(0.5, 3.0, d);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        precision highp float;
        uniform float staerke; varying float vA;
        void main(){ float a = vA * staerke * 0.35; gl_FragColor = vec4(vec3(0.75, 0.85, 1.0) * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.mesh=new Mr(o,l),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n){this.uniforms.zeit.value=e,this.uniforms.mitte.value.copy(t),this.uniforms.staerke.value=n,this.mesh.visible=n>.01}setzeAnzahl(e){this.mesh.geometry.setDrawRange(0,Math.min(this.anzahl,e)*2)}},vu=class{constructor(e,t,n){this.anzahl=t;let i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++)i[l*3]=n()*80-40,i[l*3+1]=n()*30,i[l*3+2]=n()*90-45,r[l]=n();let a=new ht;a.setAttribute("position",new ct(i,3)),a.setAttribute("phase",new ct(r,1)),this.uniforms={zeit:{value:0},mitte:{value:new R},staerke:{value:0},t:{value:ei(64)},dpr:{value:1}};let o=new Et({transparent:!0,blending:kt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
        uniform float zeit, dpr; uniform vec3 mitte; attribute float phase; varying float vA;
        void main(){
          vec3 p = position;
          float tempo = 1.2 + phase * 1.4;
          p.y = mod(p.y - zeit * tempo, 30.0);
          p.x = mod(p.x - mitte.x + 40.0 + sin(zeit * 0.6 + phase * 20.0) * 1.5, 80.0) - 40.0 + mitte.x;
          p.z = mod(p.z - mitte.z + 45.0 + cos(zeit * 0.5 + phase * 13.0) * 1.0, 90.0) - 45.0 + mitte.z;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float d = -mv.z;
          vA = smoothstep(70.0, 25.0, d) * smoothstep(0.5, 2.5, d) * (0.5 + 0.5 * phase);
          gl_PointSize = (18.0 + phase * 26.0) * dpr / max(d, 1.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        precision highp float;
        uniform sampler2D t; uniform float staerke; varying float vA;
        void main(){ float a = texture2D(t, gl_PointCoord).a * vA * staerke * 0.9; gl_FragColor = vec4(vec3(0.85, 0.92, 1.0) * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.mesh=new Gs(a,o),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n,i){this.uniforms.zeit.value=e,this.uniforms.mitte.value.copy(t),this.uniforms.staerke.value=n,this.uniforms.dpr.value=i,this.mesh.visible=n>.01}},yl=class{constructor(e,t,n){let i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++){let c=6+n()*30,h=n()*Math.PI*2,u=n()*2-1;i[l*3]=Math.cos(h)*c,i[l*3+1]=u*14,i[l*3+2]=Math.sin(h)*c,r[l]=n()}let a=new ht;a.setAttribute("position",new ct(i,3)),a.setAttribute("phase",new ct(r,1)),this.uniforms={zeit:{value:0},staerke:{value:0},t:{value:ei(64)},dpr:{value:1}};let o=new Et({transparent:!0,blending:kt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
        uniform float zeit, dpr; attribute float phase; varying float vA;
        void main(){
          vec3 p = position;
          p.y += sin(zeit * (0.3 + phase) + phase * 40.0) * 1.5;
          p.x += cos(zeit * 0.2 + phase * 30.0) * 1.0;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          float d = -mv.z;
          vA = (0.4 + 0.6 * sin(zeit * (1.0 + phase * 2.0) + phase * 90.0)) * smoothstep(80.0, 10.0, d);
          gl_PointSize = (50.0 + phase * 110.0) * dpr / max(d, 1.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        precision highp float;
        uniform sampler2D t; uniform float staerke; varying float vA;
        void main(){ float a = texture2D(t, gl_PointCoord).a * max(vA, 0.0) * staerke; gl_FragColor = vec4(vec3(0.3, 0.9, 1.0) * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        }`});this.mesh=new Gs(a,o),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}update(e,t,n,i){this.uniforms.zeit.value=e,this.uniforms.staerke.value=n,this.uniforms.dpr.value=i,this.mesh.position.copy(t),this.mesh.visible=n>.01}}});function ub(s=.01){let e=(u,f)=>lb[u[0]]&&lb[u[0]][f]||u[f+1],t=Br(_u.map(u=>[u[0],e(u,0)])),n=Br(_u.map(u=>[u[0],e(u,1)])),i=_u[_u.length-1][0],r=new R,a=new R,o=[],l=ii(ir[0].dz),c=ir.map(u=>ii(u.x)),h=ir.map(u=>ii(u.dz));for(let u=0;u<=i+1e-6;u+=s){t(u,r),n(u,a);let f=u*150+l(u),d=ir.map((p,b)=>[c[b](u),1.2,u*150+h[b](u)]);o.push({g:u,p:[r.x,r.y,r.z+f],z:[a.x,a.y,a.z+f],autos:d})}return o}var Ml,cb,mT,gT,hb,rr,_u,bT,xT,vT,lb,yu,fb=ut(()=>{Pt();ln();sr();mp();Ml=([s,e,t,n,i])=>[s,[Ln+(e[0]-Ln)*Ss,e[1]*Ss,e[2]*Ss],[Ln+(t[0]-Ln)*Ss,t[1]*Ss,t[2]*Ss],n,i],cb=[[0,[2.9,1.5,30],[-1.6,.5,-3],42,0],[.3,[3.2,.9,14],[-1.6,.72,-2],48,0],[.5,[3.9,.86,2.5],[-1.75,.72,-5],70,-5],[.7,[3.2,1.8,-38],[-.5,.9,-64],54,2],[.85,[2,2.8,-100],[-1,.8,-126],52,0],[1,[-1,8,-168],[20,2,-200],50,0],[1.12,[-3,17,-178],[36,4,-176],50,0],[1.24,[1,25,-172],[14,2,-128],50,0],[1.3,[4,30,-168],[10,2,-100],50,0],[1.38,[7,34,-165],[-1.2,0,-55],50,0],[1.7,[-12,40,-185],[-.5,0,-60],46,0],[2,[-8.5,6,-22],[-1.75,1,0],50,0],[2.3,[-8.5,6.5,-18],[-3.2,.8,4],52,0,{hoch:[[-6.6,4.6,-10.5],[-2.5,.8,4]]}],[2.7,[-8.5,6.5,-66],[-3.2,.8,-44],52,0,{hoch:[[-6.6,4.6,-58.5],[-2.5,.8,-44]]}],[2.88,[-4,5,-50],[-2.5,1,-10],54,0],[3,[3.6,1.4,-12],[-1.75,1,18],54,0],[3.25,[3.2,2.3,-10],[-1.75,1.5,14],56,0,{hoch:[[1,2.6,-11],[-1.75,1.5,14]]}],[3.55,[3.4,2,-7],[-2.8,1.6,22],54,0,{hoch:[[1.2,2.4,-9.5],[-2.4,1.6,22]]}],[3.8,[3.4,3.2,-60],[-1.75,1,-12],50,0,{hoch:[[.8,3,-62],[-1.75,1,-12]]}],[3.92,[3,3,-55],[-1.75,1,-10],50,0,{hoch:[[.6,2.9,-59],[-1.75,1,-10]]}],[4,[1.4,3.8,-30],[-1.75,1,10],50,0]],mT=[[4.3,[1.5,3.2,-26],[-3.5,1.4,30],50,0],[4.7,[5,2.6,2],[-5,1.2,46],56,0],[5,[-5,6,-12],[-1.75,2,34],48,0]],gT=[[4.3,[1.5,3.2,-26],[-3.5,1.4,30],50,0,{hoch:[[.6,4.2,-17],[-2,0,-5.1]]}],[4.5,[-.6,3.6,-19],[-7.6,.2,6],52,0,{hoch:[[-3.4,4.4,-16.5],[-5.4,0,-3.9]]}],[4.72,[-1,3.4,-22],[-8.6,.2,4],52,0,{hoch:[[-3.8,4.4,-20.5],[-5.9,0,-7.9]]}],[4.92,[-1.2,4.4,-27],[-10.8,.2,-2],52,0,{hoch:[[-4.6,4.6,-24.5],[-7.4,0,-11.4]]}],[5.08,[-2.5,7.5,-30],[-9,4,6],50,0,{hoch:[[-3.5,8,-30],[-7.5,3,-4]]}]],hb=[[5.3,[-4,14,-36],[1,24,60],46,0,{hoch:[[-4,14,-36],[0,9,60]]}],[5.55,[3,3.2,2],[-2.6,5.2,24],54,0],[5.85,[2.2,3,-5],[-7.4,3.3,14],52,0,{hoch:[[2.6,3,-7],[-7,3.6,14]]}],[6,[6.5,3,-16],[-4,1.5,20],52,0],[6.25,[9,7.5,-40],[-12,1.5,6],60,0,{hoch:[[.5,5.5,-22],[-14,1.5,8]]}],[6.55,[-6.5,3.4,-9],[-14,1.3,9],58,0,{hoch:[[-5.5,3.4,-12],[-15.5,1.3,8]]}],[6.72,[-6,4.2,8],[-12,1.5,30],58,0,{hoch:[[-4,3.9,-25],[-13.5,1.5,-6]]}],[6.86,[-2,3.5,20],[-4,1.2,52],56,0,{hoch:[[-2,3.5,6],[-3.2,1.2,44]]}],[7,[-1.3,1.55,-6.5],[-1.6,1,12],54,0],Ml([7.07,[-1.48,1,.1],[-2.05,.8,2.4],70,0]),Ml([7.18,[-1.48,.99,.1],[-2.05,.78,1.9],68,0]),Ml([7.4,[-1.49,.97,.14],[-1.64,.79,.56],58,0]),Ml([7.62,[-1.49,.97,.14],[-1.64,.79,.56],58,0]),Ml([7.75,[-1.46,.98,.12],[-1.75,.86,10],60,0]),[7.9,[-.9,1.25,3.4],[-.3,1.5,30],58,0],[8,[1.5,2.8,-6],[-3,2.2,40],56,0],[8.08,[-.5,2.6,4],[-12,1.4,28],56,0,{hoch:[[.5,2.8,2],[-12,1.4,28]]}],[8.17,[1.5,3.4,-2],[-12,1.2,14.5],54,0,{hoch:[[2.2,3.6,-3],[-12,1.2,14.5]]}],[8.26,[3.2,4.6,-9],[-12,1,1],54,0,{hoch:[[3.6,4.8,-10],[-12,1,1]]}],[8.36,[1.5,3.4,-10],[-3,2.4,40],54,0],[8.45,[2.5,6.5,-24],[-1.75,1.5,60],50,0],[8.62,[.5,24,-46],[-1.75,8,70],48,0],[8.82,[0,54,-50],[0,64,60],48,0],[9,[0,74,-40],[0,116,50],46,0]],rr=[...cb,...gT,...hb],_u=[...cb,...mT,...hb],bT=s=>s[5]&&s[5].hoch?s[5].hoch[1]:[Ln+(s[2][0]-Ln)*.55,s[2][1],s[2][2]],xT=s=>s[5]&&s[5].hoch?s[5].hoch[0]:s[1],vT=ii([[0,.34],[.85,.34],[1,.12],[1.24,.12],[1.38,.3],[1.7,.3],[2,.34],[6.92,.34],[7.07,0],[7.78,0],[7.95,.34],[8.45,.34],[8.62,0],[9,0]]),lb={5.55:[null,[-11,1.6,24]],5.85:[null,[-5,3.2,14]],8.08:[null,[-10.5,4,27]],8.17:[[-2.6,3,9],[-9.5,4,32]],8.26:[[-1,3.2,2],[-6,3,36]]};yu=class{constructor(e){this.kamera=e,this.pos=Br(rr.map(t=>[t[0],t[1]])),this.ziel=Br(rr.map(t=>[t[0],t[2]])),this.posHoch=Br(rr.map(t=>[t[0],xT(t)])),this.zielHoch=Br(rr.map(t=>[t[0],bT(t)])),this.fovH=ii(rr.map(t=>[t[0],t[3]])),this.roll=ii(rr.map(t=>[t[0],t[4]])),this.maus=new ye,this.mausIst=new ye,this.anker=null,this.ankerMisch=0,this._p=new R,this._z=new R,this._f=new R,this.gMax=rr[rr.length-1][0]}update(e,t,n,i,r){let a=this.kamera,o=Math.min(this.gMax,Math.max(0,e));if(n<.9?(this.posHoch(o,this._p),this.zielHoch(o,this._z)):(this.pos(o,this._p),this.ziel(o,this._z)),this._f.set(t.x-Ln,0,t.z),this.anker&&this.ankerMisch>0){let d=Math.min(1,this.ankerMisch);this._f.x+=(this.anker.x-Ln-this._f.x)*d,this._f.z+=(this.anker.z-this._f.z)*d}this._p.add(this._f),this._z.add(this._f),this._p.y+=.04*Math.sin(r*.9),this._p.x+=.03*Math.sin(r*.7+1);let l=1-mt(o,6.96,7.06,7.78,7.9);this.mausFrei=l;let c=Zi(i,.35);this.mausIst.x+=(this.maus.x*l-this.mausIst.x)*c,this.mausIst.y+=(this.maus.y*l-this.mausIst.y)*c,a.position.copy(this._p),a.up.set(0,1,0),a.lookAt(this._z);let h=this.fovH(o);a.fov=2*Math.atan(Math.tan(Vt.degToRad(h)/2)/n)*180/Math.PI,a.fov=Math.min(72,Math.max(28,a.fov)),a.updateProjectionMatrix(),n<.9&&a.rotateX(-Math.atan(vT(o)*Math.tan(Vt.degToRad(a.fov)/2))),a.rotateZ(Vt.degToRad(this.roll(o)));let u=this.mausIst.x*l,f=this.mausIst.y*l;a.rotateY(-u*.028),a.rotateX(-f*.02),a.translateX(u*.18),a.translateY(-f*.1),a.updateMatrixWorld()}}});var Mu,Eu,Su=ut(()=>{Pt();Mu=class{constructor(e={}){this.uniforms={a:{value:new R},b:{value:new R},c:{value:new R},breite:{value:e.breite||.6},zeit:{value:0},fluss:{value:e.fluss?1:0},hoehe:{value:e.hoehe||.06},farbe:{value:e.farbe||new we(.17,.72,.89)},staerke:{value:1},laenge:{value:60},...Lr.clone(Le.fog)};let t=e.additiv!==!1;this.material=new Et({uniforms:this.uniforms,transparent:!0,depthWrite:!t,side:Ct,fog:!0,blending:t?kt:js,vertexShader:`
        uniform vec3 a, b, c; uniform float breite, hoehe;
        varying vec2 vUv;
        #include <fog_pars_vertex>
        void main(){
          float s = uv.x;
          vec3 p = (1.0 - s) * (1.0 - s) * a + 2.0 * (1.0 - s) * s * b + s * s * c;
          vec3 d = normalize(2.0 * (1.0 - s) * (b - a) + 2.0 * s * (c - b) + vec3(0.0, 0.0, 1e-4));
          vec3 n = normalize(cross(vec3(0.0, 1.0, 0.0), d));
          p += n * (uv.y - 0.5) * breite;
          p.y += hoehe;
          vUv = uv;
          vec4 mvPosition = viewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        precision highp float;
        uniform vec3 farbe; uniform float zeit, fluss, staerke, laenge;
        varying vec2 vUv;
        #include <fog_pars_fragment>
        void main(){
          float kante = pow(clamp(1.0 - abs(vUv.y - 0.5) * 2.0, 0.0, 1.0), ADDITIV == 1 ? 0.7 : 0.08);
          float strom = mix(1.0, 0.45 + 0.55 * smoothstep(0.25, 0.55, fract(vUv.x * laenge * 0.12 - zeit * 0.9)), fluss);
          float a = kante * strom * staerke * smoothstep(1.0, 0.82, vUv.x) * smoothstep(0.0, 0.04, vUv.x);   // Enden weich (das Ende stand als heller Balken am Horizont)
          #if ADDITIV
          gl_FragColor = vec4(farbe * a, a);
          #else
          gl_FragColor = vec4(farbe, a);
          #endif
          #ifdef USE_FOG
          float ff = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
          #if ADDITIV
          gl_FragColor.rgb *= 1.0 - ff; // Leuchtendes wird im Dunst nur schw\xE4cher, nie heller
          #else
          gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, ff);
          #endif
          #endif
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,defines:{ADDITIV:t?1:0}});let n=new st(1,1,e.segmente||48,1);this.mesh=new Q(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?5:1}setze(e,t,n){this.uniforms.a.value.copy(e),this.uniforms.b.value.copy(t),this.uniforms.c.value.copy(n),this.uniforms.laenge.value=e.distanceTo(t)+t.distanceTo(n)}},Eu=class{constructor(e,t={}){let n=e.length,i=(t.breite||.7)/2,r=t.hoehe??.08,a=new Float32Array(n*6),o=new Float32Array(n*4),l=[];for(let u=0;u<n;u++){let f=e[u],d=e[Math.max(0,u-1)],p=e[Math.min(n-1,u+1)],b=Math.hypot(p.x-d.x,p.z-d.z)||1,m=(p.z-d.z)/b,g=-(p.x-d.x)/b;if(a.set([f.x+m*i,f.y+r,f.z+g*i,f.x-m*i,f.y+r,f.z-g*i],u*6),o.set([f.s,0,f.s,1],u*4),u<n-1){let _=u*2;l.push(_,_+1,_+2,_+1,_+3,_+2)}}let c=new ht;c.setAttribute("position",new ct(a,3)),c.setAttribute("uv",new ct(o,2)),c.setIndex(l);let h=e[n-1].s;this.uniforms={farbe:{value:t.farbe||new we(.17,.72,.89)},zeit:{value:0},staerke:{value:1},ab:{value:e[0].s},ende:{value:new ye(h-(t.endeWeich??40),h)},...Lr.clone(Le.fog)},this.material=new Et({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Ct,fog:!0,blending:kt,vertexShader:`
        varying vec2 vUv;
        #include <fog_pars_vertex>
        void main(){
          vUv = uv;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        precision highp float;
        uniform vec3 farbe; uniform float zeit, staerke, ab; uniform vec2 ende;
        varying vec2 vUv;
        #include <fog_pars_fragment>
        void main(){
          float kante = pow(clamp(1.0 - abs(vUv.y - 0.5) * 2.0, 0.0, 1.0), 0.7);
          float strom = 0.45 + 0.55 * smoothstep(0.25, 0.55, fract(vUv.x * 0.12 - zeit * 0.9));
          float a = kante * strom * staerke * smoothstep(ab, ab + 2.5, vUv.x) * (1.0 - smoothstep(ende.x, ende.y, vUv.x));
          gl_FragColor = vec4(farbe * a, a);
          #ifdef USE_FOG
          float ff = 1.0 - exp(-fogDensity * fogDensity * vFogDepth * vFogDepth);
          gl_FragColor.rgb *= 1.0 - ff;
          #endif
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`}),this.mesh=new Q(c,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}}});function mb(s){let e=new Ft(s);return e.colorSpace=ot,e.anisotropy=4,e.minFilter=en,e}function El(s,e,t){return s.userData.varianten=e.map((n,i)=>{if(i===0)return{map:s.material.map,skala:s.scale.clone()};let r=t(n),a={map:r.material.map,skala:r.scale.clone()};return r.material.dispose(),a}),s.userData.varianteNr=0,s}function Sl(s,e){let t=s.userData.varianten;return t?(e=Math.max(0,Math.min(t.length-1,e|0)),s.userData.varianteNr!==e&&(s.userData.varianteNr=e,s.material.map=t[e].map,s.material.needsUpdate=!0,s.userData.grundSkala=t[e].skala.clone()),t[e].skala):s.scale}function Tl(s,e,t={}){let n=mb(s),i=new Cn({map:n,transparent:!0,depthWrite:!1,depthTest:t.depthTest!==!1,fog:!1,opacity:1}),r=new Dn(i);return r.scale.set(e*s.width/s.height,e,1),r.renderOrder=10,r}function Ja(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.arcTo(e+n,t,e+n,t+r,r),s.lineTo(e+n,t+i-r),s.arcTo(e+n,t+i,e+n-r,t+i,r),s.lineTo(e+r,t+i),s.arcTo(e,t+i,e,t+i-r,r),s.lineTo(e,t+r),s.arcTo(e,t,e+r,t,r),s.closePath()}function vn(s,e={}){let t=e.hoehe||.5,n=2,i=34*n,r=22*n,a=e.punkt?14*n:0,o=64*n,l=document.createElement("canvas").getContext("2d");l.font=`600 ${i}px ${nt}`;let h=Math.ceil(l.measureText(s).width)+r*2+(a?a+10*n:0),u=document.createElement("canvas");u.width=h+8*n,u.height=o+8*n;let f=u.getContext("2d");f.translate(4*n,4*n),Ja(f,0,0,h,o,o/2),f.fillStyle=e.hintergrund||"rgba(28,28,30,0.94)",f.fill(),f.lineWidth=2*n,f.strokeStyle=e.rand||"rgba(255,255,255,0.16)",f.stroke();let d=r;return e.punkt&&(f.fillStyle=e.punkt==="rot"?pb:e.punkt==="gruen"?"#30d158":e.punkt==="orange"?"#ff9f0a":db,f.beginPath(),f.arc(d+a/2,o/2,a/2,0,Math.PI*2),f.fill(),d+=a+10*n),f.font=`600 ${i}px ${nt}`,f.fillStyle=e.farbe||"#ffffff",f.textBaseline="middle",f.fillText(s,d,o/2+1*n),Tl(u,t,e)}function xp(s,e,t={}){let n=t.hoehe||.9,i=2,r=36*i,a=28*i,o=24*i,l=14*i,c=104*i,h=document.createElement("canvas").getContext("2d");h.font=`700 ${r}px ${nt}`;let u=h.measureText(s).width;h.font=`400 ${a}px ${nt}`;let f=h.measureText(e).width,d=Math.ceil(Math.max(u,f))+o*2+l+12*i,p=document.createElement("canvas");p.width=d+8*i,p.height=c+8*i;let b=p.getContext("2d");b.translate(4*i,4*i),Ja(b,0,0,d,c,22*i),b.fillStyle=t.hintergrund||"rgba(28,28,30,0.95)",b.fill(),b.lineWidth=2*i,b.strokeStyle=t.rand||"rgba(255,255,255,0.16)",b.stroke(),b.fillStyle=t.punkt==="rot"?pb:t.punkt==="orange"?"#ff9f0a":db,b.beginPath(),b.arc(o+l/2,c/2,l/2,0,Math.PI*2),b.fill();let m=o+l+12*i;return b.fillStyle="#ffffff",b.textBaseline="middle",b.font=`700 ${r}px ${nt}`,b.fillText(s,m,c*.34),b.fillStyle="rgba(235,235,245,0.78)",b.font=`400 ${a}px ${nt}`,b.fillText(e,m,c*.72),Tl(p,n,t)}function gb(s,e=.9){let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d");return i.beginPath(),i.arc(256/2,256/2,256/2-4,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=26,i.strokeStyle="#d0021b",i.beginPath(),i.arc(256/2,256/2,256/2-17,0,Math.PI*2),i.stroke(),i.fillStyle="#101010",i.font=`700 ${256*.42}px ${nt}`,i.textAlign="center",i.textBaseline="middle",i.fillText(String(s),256/2,256/2+256*.02),Tl(n,e)}function bb(s,e,t=1.3,n=.62,i=!1){let a=document.createElement("canvas");a.width=a.height=320;let o=a.getContext("2d");o.beginPath(),o.arc(320/2,320/2,320/2-6,0,Math.PI*2),o.fillStyle="rgba(28,28,30,0.94)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(255,255,255,0.16)",o.stroke();let l=320/2-18,c=Math.PI*.75,h=Math.PI*2.25;o.lineCap="round",o.lineWidth=9,o.strokeStyle="rgba(255,255,255,0.12)",o.beginPath(),o.arc(320/2,320/2,l,c,h),o.stroke(),o.strokeStyle=i?"#ff6961":"#ffffff",o.beginPath(),o.arc(320/2,320/2,l,c,c+(h-c)*n),o.stroke(),o.fillStyle=i?"#ff6961":"#ffffff",o.font=`700 ${320*.34}px ${nt}`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(s),320/2,320/2-320*.03);let u=typeof e=="object",f=u?e.text:e;return o.fillStyle=u?"#ff6961":"rgba(235,235,245,0.75)",o.font=`${u?600:400} ${320*(u?.12:.1)}px ${nt}`,o.fillText(f,320/2,320/2+320*.2),Tl(a,t)}function xb(s,e=.5){let o=document.createElement("canvas").getContext("2d");o.font=`600 68px ${nt}`;let c=Math.ceil(o.measureText(s).width)+88+88+24,h=document.createElement("canvas");h.width=c+16,h.height=144;let u=h.getContext("2d");u.translate(8,8),Ja(u,0,0,c,128,128/2),u.fillStyle="rgba(28,28,30,0.94)",u.fill(),u.lineWidth=4,u.strokeStyle="rgba(255,255,255,0.16)",u.stroke();let f=44,d=128/2-22,p=72,b=44;return u.lineWidth=2.5*2,u.strokeStyle="rgba(255,255,255,0.8)",Ja(u,f,d,p,b,10),u.stroke(),u.fillStyle="rgba(255,255,255,0.8)",u.fillRect(f+p+6,d+12,8,b-24),u.fillStyle="#ff453a",Ja(u,f+8,d+8,(p-16)*.15,b-16,6),u.fill(),u.font=`600 68px ${nt}`,u.fillStyle="#ffffff",u.textBaseline="middle",u.fillText(s,f+88+24,128/2+2),Tl(h,e)}function vp(s,e={}){let t=e.breite||1024,n=e.hoehe||400,i=document.createElement("canvas");i.width=t,i.height=n;let r=i.getContext("2d");Ja(r,4,4,t-8,n-8,36),r.fillStyle=e.hintergrund||"#163a7a",r.fill(),r.lineWidth=10,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textBaseline="middle";let a=n/(s.length+1);for(let c of s){if(r.font=`${c.fett?700:600} ${c.groesse||110}px ${nt}`,r.textAlign=c.ausrichtung||"left",r.fillText(c.text,c.ausrichtung==="center"?t/2:70,a),c.pfeil){r.lineWidth=22,r.lineCap="round",r.lineJoin="round",r.strokeStyle="#fff";let h=t-150,u=a;r.beginPath(),r.moveTo(h-80,u+40),r.lineTo(h,u-40),r.stroke(),r.beginPath(),r.moveTo(h-60,u-46),r.lineTo(h+4,u-44),r.lineTo(h,u+20),r.stroke()}a+=n/(s.length+1)}let o=mb(i);return new Q(new st((e.meter||4)*t/n,e.meter||4),new it({map:o,transparent:!1,fog:!0}))}function ts(s,e){if(!s||!s.initTexture||!e)return;let t=new Set,n=i=>{if(!(!i||!i.isTexture||i.isRenderTargetTexture||t.has(i))){t.add(i);try{s.initTexture(i)}catch{}}};e.traverse(i=>{let r=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let a of r){for(let o of["map","lightMap","emissiveMap","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"])n(a[o]);if(a.uniforms)for(let o of Object.values(a.uniforms))o&&o.value&&n(o.value)}})}var nt,db,pb,Fi,Ni=ut(()=>{Pt();nt='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',db="#2cb8e3",pb="#ff453a";Fi=(s,e)=>s.replace(/(\d+)(\s*(m|Meter|Metern|metres|meters|ft)\b)/,(t,n,i)=>e+i)});function _T(s,e=256){let t=vb[s%vb.length],n=document.createElement("canvas");n.width=n.height=e;let i=n.getContext("2d"),r=e,a=r/2,o=["#2f4a63","#4a3f2f","#3a4a3f","#4a2f3f"][s%4];if(i.fillStyle=o,i.fillRect(0,0,r,r),i.save(),i.beginPath(),i.arc(a,a,a,0,Math.PI*2),i.clip(),i.fillStyle=["#27c4e8","#e8c547","#ff6961","#7ad7ef"][s%4],i.beginPath(),i.ellipse(a,r*1.02,r*.42,r*.26,0,0,Math.PI*2),i.fill(),i.fillStyle=t.haut,i.fillRect(a-r*.08,r*.62,r*.16,r*.2),i.fillStyle=t.haar,t.frisur==="lang"&&(i.beginPath(),i.ellipse(a,r*.5,r*.3,r*.38,0,0,Math.PI*2),i.fill()),t.frisur==="locken")for(let l=0;l<10;l++){let c=l/10*Math.PI*2;i.beginPath(),i.arc(a+Math.cos(c)*r*.24,r*.4+Math.sin(c)*r*.22,r*.08,0,Math.PI*2),i.fill()}i.fillStyle=t.haut,i.beginPath(),i.ellipse(a,r*.44,r*.22,r*.26,0,0,Math.PI*2),i.fill(),i.fillStyle=t.haar,(t.frisur==="kurz"||t.frisur==="locken")&&(i.beginPath(),i.ellipse(a,r*.3,r*.23,r*.14,0,Math.PI,Math.PI*2),i.fill()),t.frisur==="lang"&&(i.beginPath(),i.ellipse(a,r*.28,r*.24,r*.13,0,Math.PI,Math.PI*2),i.fill()),t.frisur==="dutt"&&(i.beginPath(),i.ellipse(a,r*.29,r*.24,r*.12,0,Math.PI,Math.PI*2),i.fill(),i.beginPath(),i.arc(a,r*.16,r*.09,0,Math.PI*2),i.fill()),i.fillStyle="#1b1b1f";for(let l of[-.08,.08])i.beginPath(),i.ellipse(a+l*r,r*.45,r*.022,r*.03,0,0,Math.PI*2),i.fill(),i.fillRect(a+l*r-r*.045,r*.385,r*.09,r*.012);if(i.strokeStyle="#8a4a3a",i.lineWidth=r*.014,i.lineCap="round",i.beginPath(),i.arc(a,r*.53,r*.06,.15*Math.PI,.85*Math.PI),i.stroke(),t.extra==="brille"){i.strokeStyle="#222",i.lineWidth=r*.012;for(let l of[-.08,.08])i.beginPath(),i.arc(a+l*r,r*.45,r*.055,0,Math.PI*2),i.stroke();i.beginPath(),i.moveTo(a-r*.025,r*.45),i.lineTo(a+r*.025,r*.45),i.stroke()}if(t.extra==="bart"&&(i.fillStyle=t.haar,i.globalAlpha=.7,i.beginPath(),i.ellipse(a,r*.6,r*.17,r*.1,0,0,Math.PI),i.fill(),i.globalAlpha=1),t.extra==="ohrringe"){i.fillStyle="#ffd60a";for(let l of[-.215,.215])i.beginPath(),i.arc(a+l*r,r*.5,r*.018,0,Math.PI*2),i.fill()}return i.restore(),n}function _b(s,e,t="#30d158",n=1.5,i=!1){let a=document.createElement("canvas");a.width=320,a.height=320*1.3;let o=a.getContext("2d"),l=320/2,c=320*.36,h=320*.4;o.beginPath(),o.arc(l,h,c+14,0,Math.PI*2),o.fillStyle="#000",o.fill(),o.beginPath(),o.arc(l,h,c+9,0,Math.PI*2),o.fillStyle=t,o.fill(),o.beginPath(),o.arc(l,h,c,0,Math.PI*2),o.fillStyle="#000",o.fill(),o.save(),o.beginPath(),o.arc(l,h,c-3,0,Math.PI*2),o.clip(),o.drawImage(_T(s,256),l-(c-3),h-(c-3),(c-3)*2,(c-3)*2),o.restore(),i&&yb(o,320),o.font=`600 ${320*.13}px ${nt}`;let u=o.measureText(e).width,f=u+320*.14,d=320*.2,p=320*.86;((_,E,x,M,v)=>{o.beginPath(),o.moveTo(_+v,E),o.lineTo(_+x-v,E),o.arcTo(_+x,E,_+x,E+v,v),o.lineTo(_+x,E+M-v),o.arcTo(_+x,E+M,_+x-v,E+M,v),o.lineTo(_+v,E+M),o.arcTo(_,E+M,_,E+M-v,v),o.lineTo(_,E+v),o.arcTo(_,E,_+v,E,v),o.closePath()})(l-f/2,p,f,d,d/2),o.fillStyle="rgba(0,0,0,0.85)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(255,255,255,0.18)",o.stroke(),o.fillStyle="#fff",o.textAlign="center",o.textBaseline="middle",o.fillText(e,l,p+d/2+2);let m=new Ft(a);m.colorSpace=ot,m.anisotropy=4;let g=new Dn(new Cn({map:m,transparent:!0,depthWrite:!1,fog:!1}));return g.scale.set(n/1.3,n,1),g.renderOrder=10,g.userData.leinwand=a,g.userData.name=e,g.userData.index=s,g.userData.admin=i,g}function yb(s,e){let t=e/2,n=e*.36,i=e*.4,r=t+n*.72,a=i+n*.72,o=e*.075;s.beginPath(),s.arc(r,a,o+3,0,Math.PI*2),s.fillStyle="#000",s.fill(),s.beginPath(),s.arc(r,a,o,0,Math.PI*2),s.fillStyle="#ffd60a",s.fill(),s.fillStyle="#1b1b1f",s.beginPath(),s.moveTo(r-o*.55,a+o*.4),s.lineTo(r-o*.62,a-o*.3),s.lineTo(r-o*.25,a+o*.02),s.lineTo(r,a-o*.55),s.lineTo(r+o*.25,a+o*.02),s.lineTo(r+o*.62,a-o*.3),s.lineTo(r+o*.55,a+o*.4),s.closePath(),s.fill()}function Mb(s,e){if(s.userData.ring===e)return;s.userData.ring=e;let t=s.userData.leinwand,n=t.getContext("2d"),i=t.width,r=i/2,a=i*.36,o=i*.4;n.save(),n.beginPath(),n.arc(r,o,a+9,0,Math.PI*2),n.arc(r,o,a,0,Math.PI*2,!0),n.clip(),n.fillStyle=e,n.fillRect(0,0,i,i),n.restore(),s.userData.admin&&yb(n,i),s.material.map.needsUpdate=!0}var vb,Tu=ut(()=>{Pt();Ni();vb=[{haut:"#e8b89a",haar:"#3a2a1e",frisur:"lang",extra:"ohrringe"},{haut:"#c98f6b",haar:"#1c1a1a",frisur:"kurz",extra:"bart"},{haut:"#f0cdb0",haar:"#b5642a",frisur:"dutt",extra:"brille"},{haut:"#9c6a48",haar:"#111",frisur:"locken",extra:""}]});function ar(s,e,t=64){let n=new Float32Array((t+1)*2*3),i=new Float32Array((t+1)*2*2),r=new Float32Array((t+1)*2*3),a=[];for(let l=0;l<=t;l++){let c=l/t,h=s(c),u=e(c);if(n.set([h.x,h.y,h.z],l*6),n.set([u.x,u.y,u.z],l*6+3),i.set([c,0],l*4),i.set([c,1],l*4+2),r.set([0,1,0,0,1,0],l*6),l<t){let f=l*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}let o=new ht;return o.setAttribute("position",new ct(n,3)),o.setAttribute("uv",new ct(i,2)),o.setAttribute("normal",new ct(r,3)),o.setIndex(a),o}function Ts(s,e=1024,t=256){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,e,t),i.fillStyle="#fff",i.strokeStyle="#fff",s(i,e,t);let r=new Ft(n);return r.colorSpace=Xt,r.wrapS=r.wrapT=bn,r.anisotropy=8,r}function _p(s,e=3,t=null){let n=(t?[t,...s]:s).map(([d,p])=>new R(d,0,p)),i=new Ws(n,!1,"centripetal"),r=t?1/(n.length-1):0,a=[],o=40*(n.length-1),l=0,c=null;for(let d=0;d<=o;d++){let p=i.getPoint(r+(1-r)*d/o);c&&(l+=p.distanceTo(c)),c=p,a.push({p,s:l})}let h=Math.max(2,Math.ceil(l/e)),u=[],f=0;for(let d=0;d<=h;d++){let p=l*d/h;for(;f<a.length-2&&a[f+1].s<p;)f++;let b=a[f],m=a[f+1],g=(p-b.s)/Math.max(1e-6,m.s-b.s);u.push({x:b.p.x+(m.p.x-b.p.x)*g,z:b.p.z+(m.p.z-b.p.z)*g,s:p,tx:0,tz:1})}for(let d=0;d<=h;d++){let p=u[Math.max(0,d-1)],b=u[Math.min(h,d+1)],m=Math.hypot(b.x-p.x,b.z-p.z)||1;u[d].tx=(b.x-p.x)/m,u[d].tz=(b.z-p.z)/m}return u}function Eb(s,e,t,n=3,i=7,r={}){let a=r.linie||_p(s,n),o=a.length-1,l=typeof e=="function"?e:()=>e,c=new Float32Array((o+1)*6),h=new Float32Array((o+1)*4),u=[],f=[];for(let b=0;b<=o;b++){let m=a[b],g=l(m.s),_=m.tz,E=-m.tx,x=-1/0;for(let M of[-1,-.5,0,.5,1])for(let v of[-.5,0,.5]){let S=m.x+_*g*M+m.tx*n*v,y=m.z+E*g*M+m.tz*n*v;x=Math.max(x,t(S,y))}f.push(x+.06)}let d=f.map((b,m)=>Math.max(b,(f[Math.max(0,m-1)]+b+f[Math.min(o,m+1)])/3));for(let b=0;b<=o;b++){let m=a[b],g=l(m.s),_=d[b],E=m.tz,x=-m.tx;if(c.set([m.x+E*g,_,m.z+x*g,m.x-E*g,_,m.z-x*g],b*6),h.set([m.s/i,0,m.s/i,1],b*4),b<o){let M=b*2;u.push(M,M+1,M+2,M+1,M+3,M+2)}r.zeilen&&r.zeilen.push({x:m.x,z:m.z,s:m.s,y:_})}let p=new ht;return p.setAttribute("position",new ct(c,3)),p.setAttribute("uv",new ct(h,2)),p.setIndex(u),p.computeVertexNormals(),p}var Sb,bi,wl=ut(()=>{Pt();Sb=(s,e,t)=>{let n=new R;return i=>n.set((1-i)*(1-i)*s[0]+2*(1-i)*i*e[0]+i*i*t[0],0,(1-i)*(1-i)*s[1]+2*(1-i)*i*e[1]+i*i*t[1]).clone()},bi=(s,e)=>t=>new R(s[0]+(e[0]-s[0])*t,0,s[1]+(e[1]-s[1])*t)});function Tb(s,e){let t=wt(1),n=new Q(new st(170,220),new Et({transparent:!0,blending:kt,depthWrite:!1,fog:!1,uniforms:{zeit:{value:0},staerke:{value:0},mitte:{value:new R},farbe:{value:ul}},vertexShader:"varying vec3 vW; void main(){ vW = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      precision highp float;
      uniform float zeit, staerke; uniform vec3 mitte, farbe; varying vec3 vW;
      void main(){
        vec2 p = vW.xz;
        vec2 gf = abs(fract(p / 8.0) - 0.5);
        float gitter = max(smoothstep(0.035, 0.0, gf.x), smoothstep(0.035, 0.0, gf.y)) * 0.28;
        float s1 = smoothstep(0.9, 0.0, abs(p.x * 0.6 + p.y * 0.3 - 40.0)) * 0.5;
        float s2 = smoothstep(0.9, 0.0, abs(p.x * 0.8 - p.y * 0.25 + 60.0)) * 0.5;
        float s3 = smoothstep(0.7, 0.0, abs(p.x + 22.0)) * 0.35 + smoothstep(0.7, 0.0, abs(p.x - 26.0)) * 0.35;
        float d = length(p - mitte.xz);
        float fade = smoothstep(95.0, 20.0, d) * smoothstep(4.0, 9.0, abs(p.x));
        float puls = 0.85 + 0.15 * sin(zeit * 1.5 - d * 0.12);
        float a = (gitter + s1 + s2 + s3 + 0.02) * fade * staerke * puls;
        gl_FragColor = vec4(farbe * a, a);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));n.rotation.x=-Math.PI/2,n.position.y=.03,n.frustumCulled=!1,e.add(n);let i=new lt;i.position.set(Ln,0,70);let r=wn(Ke(.6,2.8,3.5)),a=new Q(new Mn(.72,28,20),r);a.position.y=3.3,i.add(a);let o=new Q(new ds(.64,1.7,28).rotateX(Math.PI).translate(0,2.5,0),r);i.add(o);let l=new Q(new Mn(.26,16,12),wn(Ke(7,7,7.5)));l.position.set(0,3.3,-.62),i.add(l),i.add(new Q(new Ai(2.4,.07,8,48).rotateX(Math.PI/2).translate(0,.08,0),wn(Ke(.6,2.6,3.2))));let c=Kh(Ke(.8,3,3.6));c.rotation.x=-Math.PI/2,c.position.y=.1,i.add(c);let h=Nn(Ke(.6,2.4,3),5);h.position.y=3.3,i.add(h),e.add(i);let u=(s.woerter.namen||"Anna,Ben,Mia,Tom").split(",").map(g=>g.trim()),f=["#30d158","#30d158","#30d158","#30d158"];s.marker={liste:[],ringe:f,sicht:0,sprecher:-1,glut:[]};for(let g=0;g<4;g++){let _=_b(g,u[g]||"?",f[g],2.1,g===0);_.visible=!1,s.szene.add(_),s.marker.liste.push(_);let E=Nn(Ke(.5,2.4,3),2.6);E.visible=!1,s.szene.add(E),s.marker.glut.push(E)}let d=[0,1,2,3].map(()=>{let g=new Mu({farbe:ul,breite:.55,fluss:!0,hoehe:.06});return e.add(g.mesh),g}),p=new R,b=new R,m=new R(Ln,0,t+70);return{update(g,_,E,x,M){n.material.uniforms.zeit.value=E,n.material.uniforms.staerke.value=_*mt(g,-.2,.15,.85,1.2),n.material.uniforms.mitte.value.copy(M.lead);let v=E*.45%1;c.scale.setScalar(1+v*7),c.material.opacity=(1-v)*.9*_;let S=.2*Math.sin(E*2);a.position.y=3.3+S,o.position.y=S,l.position.y=3.3+S,h.position.y=3.3+S,i.rotation.y=E*.6;let y=1-yt(.72,.9,g);i.scale.setScalar(Math.max(.001,y)),i.visible=y>.01;let w=_*mt(g,-.1,.12,.9,1.15);s.marker.sicht=Math.max(s.marker.sicht,w);for(let P=0;P<4;P++){let I=M.autos[P];p.set(I.x,0,I.z),b.set(Wt(I.x,Ln,.5)+(P-1.5)*1.6,0,Wt(I.z,m.z,.5)),d[P].setze(p,b,m),d[P].uniforms.zeit.value=E,d[P].uniforms.staerke.value=w*.9,d[P].mesh.visible=w>.01}}}}function yp(s,e,t){let n=s.marker;if(!n)return;let i=.5+.5*Math.sin(t*6);for(let r=0;r<n.liste.length;r++){let a=n.liste[r],o=n.glut[r],l=e.autos[r];a.position.set(l.x,2.9+.08*Math.sin(t*1.6+r),l.z),tn(a,n.sicht),e.kamera&&Qs(a,e.kamera,.075,.14);let c=n.sprecher===r;Mb(a,c?i>.5?"#2cb8e3":"#8fe0f5":n.ringe[r]),o.position.set(l.x,3.15,l.z-.01),o.scale.setScalar(2.2+i*.8),tn(o,c?n.sicht*(.45+.35*i):0)}}var wb=ut(()=>{Pt();Su();Ni();ti();ni();sr();Tu();wl();ln();ci()});function Rb(s,e){let t=wt(2),n=Gh(128,.88,.94),i=[0,1,2,3].map(()=>{let r=new Q(new st(1,1),new it({map:n,color:Ke(.45,2,2.6),blending:kt,depthWrite:!1,transparent:!0,fog:!1,side:Ct}));return e.add(r),r});return{update(r,a,o,l,c){let h=a*mt(r,-.15,.1,.8,.95);s.marker.sicht=Math.max(s.marker.sicht,h);let u=r<.5?0:1;h>.3&&(s.marker.sprecher=u);let f=c.autos[u];for(let d=0;d<i.length;d++){let p=(o*.45+d%2*.5)%1,b=d<2?-1:1,m=i[d];m.position.set(f.x,1.25,f.z+b*(1.2+p*14)-t),m.scale.setScalar(1.2+p*3),m.material.opacity=(1-p)*p*1.1*h}}}}var Ab=ut(()=>{Pt();Su();Ni();ti();ni();sr();Tu();wl();ln();ci()});function ST(s,e,t){let n=new qs,i=-s/2,r=-e/2;return n.moveTo(i+t,r),n.lineTo(i+s-t,r),n.absarc(i+s-t,r+t,t,-Math.PI/2,0,!1),n.lineTo(i+s,r+e-t),n.absarc(i+s-t,r+e-t,t,0,Math.PI/2,!1),n.lineTo(i+t,r+e),n.absarc(i+t,r+e-t,t,Math.PI/2,Math.PI,!1),n.lineTo(i,r+t),n.absarc(i+t,r+t,t,Math.PI,Math.PI*1.5,!1),n.closePath(),n}function wu(s,e,t,n=.03,i=.012){let r=new Sr(ST(s,e,n),{depth:t-2*i,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:6});return r.rotateX(-Math.PI/2),r.translate(0,i,0),r.computeVertexNormals(),r}function Pb(s=.009){let e=new lt;return e.add(new Q(new Nt(s,s,.005,10).rotateX(Math.PI/2),$a)),e.add(new Q(new He(s*1.4,s*.4,.002).translate(0,0,.003),Rl)),e}function TT(){let s=document.createElement("canvas");s.width=256,s.height=64;let e=s.getContext("2d");e.fillStyle="#e8e8e4",e.fillRect(0,0,256,64),e.fillStyle="#c4161c";for(let n=-64;n<256;n+=64)e.beginPath(),e.moveTo(n,64),e.lineTo(n+32,64),e.lineTo(n+64,0),e.lineTo(n+32,0),e.closePath(),e.fill();let t=new Ft(s);return t.colorSpace=ot,t.wrapS=t.wrapT=Gn,t.anisotropy=4,t}function wT(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#f2f2ee",t.fillRect(0,0,256,256),t.lineWidth=14,t.strokeStyle="#17181c",t.strokeRect(7,7,242,242),t.fillStyle="#17181c",t.beginPath(),t.roundRect(48,92,160,100,14),t.fill(),t.beginPath(),t.roundRect(96,70,64,30,8),t.fill(),t.fillStyle="#f2f2ee",t.beginPath(),t.arc(128,142,34,0,Math.PI*2),t.fill(),t.fillStyle="#17181c",t.beginPath(),t.arc(128,142,22,0,Math.PI*2),t.fill(),t.fillStyle="#f2f2ee",t.beginPath(),t.arc(136,134,7,0,Math.PI*2),t.fill();let n=new Ft(e);return n.colorSpace=ot,n.anisotropy=4,n}function RT(s){let e=new lt,t=.42,n=2.55,i=.038,r=n+t+.08;e.add(new Q(new Nt(i,i,r,14).translate(0,r/2,.07),Mp)),e.add(new Q(new Nt(i+.02,i+.03,.3,14).translate(0,.15,.07),Ru)),e.add(new Q(new Mn(i+.004,12,8,0,Math.PI*2,0,Math.PI/2).translate(0,r,.07),Mp));let a=gb(s,1),o=new it({map:a.material.map});a.material.dispose(),e.add(new Q(new Nt(t,t,.014,48).rotateX(Math.PI/2).translate(0,n,0),Mp));let l=new Q(new qi(t-.004,48),o);l.rotation.y=Math.PI,l.position.set(0,n,-.0075),e.add(l);let c=new Q(new qi(t-.004,48),new Ne({color:9343641,roughness:.5,metalness:.6}));c.position.set(0,n,.0075),e.add(c);for(let h of[-.25,.25]){e.add(new Q(new Ai(i+.012,.011,8,24).rotateX(Math.PI/2).translate(0,n+h,.07),$a)),e.add(new Q(new He(.08,.04,.06).translate(0,n+h,.035),$a));let u=Pb(.007);u.position.set(.05,n+h,.072),u.rotation.y=Math.PI/2,e.add(u)}return e.traverse(h=>{h.isMesh&&(h.frustumCulled=!1,h.layers.enable(Dt))}),e}function AT(){let s=new lt,e=.2,t=.44,n=.32,i=2,r=.52,a=.4,o=.78,l=e+i;s.add(new Q(wu(.76,.6,e,.04,.015),yT));let c=new Q(wu(t,n,i+.02,.05),Ru);c.position.y=e-.01,s.add(c);let h=new Q(wu(r,a,o,.05),Ru);h.position.y=l,s.add(h);let u=new Q(wu(r+.03,a+.03,.05,.06,.01),Rl);u.position.y=l+o-.005,s.add(u);let f=a/2+.002,d=(S,y,w,P)=>{let I=new Q(new He(S,y,.02),P);return I.position.set(0,w,f-.004),s.add(I),I},p=(S,y,w)=>{let P=new Q(new He(S+.03,y+.03,.012),Rl);P.position.set(0,w,f-.006),s.add(P)};p(.3,.17,l+o-.17);let b=d(.3,.17,l+o-.17,MT);p(.24,.24,l+o*.5),d(.24,.24,l+o*.5,Cb);let m=new Q(new Mn(.052,24,16,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),ET);m.position.set(0,l+o*.5,f-.01),s.add(m),s.add(new Q(new Ai(.06,.008,8,32).translate(0,l+o*.5,f+.004),$a)),p(.3,.1,l+.1),d(.3,.1,l+.1,Cb);for(let[S,y]of[[-.22,l+.05],[.22,l+.05],[-.22,l+o-.05],[.22,l+o-.05]]){let w=Pb();w.position.set(S,y,f+.002),s.add(w)}let g=new Q(new Mn(.014,10,8),wn(Ke(3,.2,.15)));g.position.set(.2,l+o*.5,f+.01),s.add(g);let _=-n/2-.002,E=new Q(new He(.3,1.2,.012),Rl);E.position.set(0,e+1,_),s.add(E);let x=new Q(new He(.27,1.17,.012),Ru);x.position.set(0,e+1,_-.004),s.add(x),s.add(new Q(new Nt(.014,.014,.01,12).rotateX(Math.PI/2).translate(.09,e+1,_-.012),$a));for(let S of[e+.5,e+1.5])s.add(new Q(new He(.02,.08,.02).translate(-.145,S,_-.006),$a));let M=new Q(new He(t+.012,.26,n+.012),new Ne({map:TT(),roughness:.55,metalness:.1}));M.position.y=e+.42,s.add(M);let v=new Q(new st(.26,.26),new it({map:wT()}));return v.position.set(0,e+i-.3,n/2+.004),s.add(v),s.add(new Q(new He(.28,.28,.006).translate(0,e+i-.3,n/2+.001),Rl)),s.traverse(S=>{S.isMesh&&(S.frustumCulled=!1,S.layers.enable(Dt),S.castShadow=!0)}),{g:s,led:g,linse:m,blitzFenster:b,kopfY:l,kopfH:o}}function Ib(s,e){let t=wt(3),n=s.woerter,i=RT(70);i.position.set(-5.6,0,-30),e.add(i);let r=new lt;r.position.set(-5.4,0,40),r.rotation.y=Math.PI-.3;let a=AT();r.add(a.g);let o=new Q(new st(4.2,4.2),new it({map:ei(128),color:Ke(2.2,.2,.14),blending:kt,depthWrite:!1,transparent:!0,fog:!1,opacity:0}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,.6),o.layers.enable(Dt),r.add(o);let l=new Q(new Ai(1.5,.035,8,48).rotateX(Math.PI/2).translate(0,.05,.6),wn(Ke(2.2,.2,.14)));r.add(l);let c=Kh(Ke(3,.3,.22));c.rotation.x=-Math.PI/2,c.position.set(0,.07,.6),r.add(c);let h=Nn(Ke(1.2,1.3,1.6),.26);h.position.set(.02,a.kopfY+a.kopfH*.5+.02,.26),r.add(h);let u=Nn(Ke(3,.3,.2),.5);u.position.copy(a.led.position).z+=.03,r.add(u);let f=new It;f.name="anker_licht_blitzer",f.userData={typ:"punkt",farbe:"#ff2a1a",reichweite:6,staerke:6,hinweis:"roter Halo am Blitzer, dezent"},f.position.set(0,1.1,.7),r.add(f);let d=null,p=!1,b=(s.welt&&s.welt.stufe?s.welt.stufe.lichter|0:6)>0,m=()=>{if(p)return!0;let N=s.umgebung&&s.umgebung.lichtPool;if(!N||typeof N.anmelden!="function")return!1;try{N.anmelden(f,{prioritaet:1}),p=!0}catch{return!1}return d&&(r.remove(d),d=null),!0};e.add(r);let g=new Map,_=null,E=(N,z,W,Y)=>{let ae=`${N}|${typeof z=="object"?z.text:z}|${W}`;if(!g.has(ae)){let he=bb(N,z,1.6,Y,W);he.visible=!1,e.add(he),g.set(ae,he)}return g.get(ae)},x=n.vorschau||"70 in 400 m",M=vn(x,{punkt:"cyan",hoehe:.6});e.add(M),El(M,[x,Fi(x,300),Fi(x,200)],N=>vn(N,{punkt:"cyan",hoehe:.6}));let v=n.blitzer||"Blitzer \xB7 800 m",S=xp(v,n.blitzerTempo||"Tempo 70",{punkt:"rot",hoehe:1});e.add(S),El(S,[v,Fi(v,600),Fi(v,400)],N=>xp(N,n.blitzerTempo||"Tempo 70",{punkt:"rot",hoehe:1}));let y=n.radar||"800 m",w=vn(n.gefahr||"Gefahr gemeldet",{punkt:"rot",hoehe:.8});w.position.set(-5.2,2.4,95),e.add(w);let P=Nn(Ke(3,.4,.25),6);P.position.set(-3.5,.3,95),e.add(P);let I=vn(n.vollbremsung||"Vollbremsung im Convoy",{punkt:"rot",hoehe:.6});e.add(I);let D=xb(n.akku||"15 %",.6);e.add(D);for(let N of[I,D])N.material.depthTest=!1,N.renderOrder=20;let H=new R,C=new R,U=M.scale.clone(),L=S.scale.clone(),B=new R(1.6,1.6,1);return{eigeneModelle:!0,setzeBlitzer(){},async ladeModelle(N,z){z&&z.stufe&&(b=(z.stufe.lichter|0)>0),!m()&&!d&&(d=new Fn(16722458,0,6,2),d.position.copy(f.position),r.add(d))},setzeStufe(N){b=(N.lichter|0)>0},update(N,z,W,Y,ae){let he=ae.lead,ce=W*.72%1<.12?1:.18,_e=.75+.25*Math.sin(W*2.2);a.led.material.color.setRGB(1.5+ce*4.5,.15,.1,Tt),u.material.opacity=(.15+.7*ce)*z,o.material.opacity=.32*_e*z,l.material.color.setRGB(1.6+_e*1.2,.16,.12,Tt);let $e=W*.45%1;c.scale.setScalar(1+$e*4),c.material.opacity=(1-$e)*.4*z,p||m(),d&&(d.intensity=b?(1.6+1.2*ce)*z:0),a.linse.getWorldPosition(C),H.copy(ae.kamera.position).sub(C);let ne=H.length();H.normalize();let oe=Math.max(0,-H.z*.95+H.x*.3);h.material.opacity=Math.pow(oe,3)*Vt.smoothstep(ne,3,12)*(1-Vt.smoothstep(ne,40,70))*z;let Te=n.einheit||"km/h",ke=!1,de=78,Oe=.68;if(N<.3)de=78;else if(N<.42)de=78,ke=!0;else{let Fe=yt(.45,.6,N);de=Math.round(Wt(78,68,Fe)),ke=de>70,N<.75&&(Te={text:Fi(y,N<.5?800:N<.6?600:400)}),Oe=Wt(.68,.58,Fe)}let gt=z*mt(N,-.1,.06,.74,.84),le=E(de,Te,ke,Oe);_&&_!==le&&(_.visible=!1),_=le;let fe=ae.kamera.aspect<.9,ve=fe?1.7:0,be=fe?.7:1;le.scale.copy(B).multiplyScalar(be),le.position.set(he.x+ve,(fe?2.9:3.2)+.05*Math.sin(W*1.7),he.z-t),tn(le,gt);let Se=z*mt(N,-.1,.06,.16,.22);M.scale.copy(Sl(M,N<.02?0:N<.1?1:2)).multiplyScalar(be),M.position.set(he.x+ve,fe?3.9:4.4,he.z-t),tn(M,Se);let je=z*mt(N,.4,.46,.68,.76);S.scale.copy(Sl(S,N<.5?0:N<.6?1:2)).multiplyScalar(be),S.position.set(he.x+ve,fe?4.1:4.7,he.z-t),tn(S,je),S.visible?ys(S,ae.kamera,.9,.72,[M,le]):M.visible?ys(M,ae.kamera,.9,.72,[le]):ys(le,ae.kamera),s.convoy.sanftBremse=Math.max(s.convoy.sanftBremse,z*mt(N,.43,.48,.58,.68));let ze=z*mt(N,.3,.42,.7,.8);tn(w,ze),P.material.opacity=ze*(.5+.5*_e);let et=mt(N,.78,.83,.9,.97)*z;s.convoy.bremse=Math.max(s.convoy.bremse,et);let ie=s.convoy.zweites.g.position;I.position.set(ie.x,2.7+.05*Math.sin(W*2.1),ie.z-t),tn(I,z*mt(N,.8,.84,.95,1.05)),Pd(I,ae.kamera);let F=s.convoy.letztes.g.position;D.position.set(F.x,2.6+.05*Math.sin(W*1.9),F.z-t),tn(D,z*mt(N,.84,.9,1.1,1.3)),Pd(D,ae.kamera)}}}var Mp,Ru,Rl,yT,$a,Cb,MT,ET,Lb=ut(()=>{Pt();Ni();ti();ni();ln();ci();Mp=new Ne({color:5922662,roughness:.42,metalness:.7}),Ru=new Ne({color:3882821,roughness:.5,metalness:.55}),Rl=new Ne({color:1382170,roughness:.6,metalness:.3}),yT=new Ne({color:3816511,roughness:.95,metalness:0}),$a=new Ne({color:10133158,roughness:.35,metalness:.9}),Cb=new sn({color:461068,roughness:.06,metalness:.2,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2}),MT=new sn({color:1705481,roughness:.08,metalness:.1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:2}),ET=new sn({color:263434,roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:0,envMapIntensity:3,ior:1.6})});function Db({z0:s,rampe:e,land:t}){let n=[];for(let x=-66;x<-7;x+=1){let M=(x- -66)/59,v=M*M*M*(M*(6*M-15)+10);n.push([Au+(kb-Au)*v,x,0])}for(let x=-7;x<-5;x+=1)n.push([kb,x,0]);let a=n.length;for(let x=0;x<=100;x++){let M=e(x/100);n.push([M.x,M.z,0])}let o=n.length-1;for(let x=1;x<t.length;x++){let M=t[x-1],v=t[x],S=Math.hypot(v.x-M.x,v.z-M.z)||1,y=(v.x-M.x)/S,w=(v.z-M.z)/S,P=1.3*yt(8,60,v.s);n.push([v.x-w*P,v.z+y*P,v.y])}let l=[0];for(let x=1;x<n.length;x++)l.push(l[x-1]+Math.hypot(n[x][0]-n[x-1][0],n[x][1]-n[x-1][1]));let c=Math.floor(l[l.length-1]),h=new Float32Array(c+1),u=new Float32Array(c+1),f=new Float32Array(c+1);for(let x=0,M=0;x<=c;x++){for(;M<n.length-2&&l[M+1]<x;)M++;let v=at((x-l[M])/Math.max(1e-6,l[M+1]-l[M]));h[x]=n[M][0]+(n[M+1][0]-n[M][0])*v,u[x]=n[M][1]+(n[M+1][1]-n[M][1])*v,f[x]=n[M][2]+(n[M+1][2]-n[M][2])*v}let d=(x,M)=>{let v=new Float32Array(x.length);for(let S=0;S<x.length;S++){if(S<M||S>=x.length-M){v[S]=x[S];continue}let y=0;for(let w=-M;w<=M;w++)y+=x[S+w];v[S]=y/(2*M+1)}return v};for(let x=0;x<2;x++)h=d(h,5),f=d(f,4);let p=new Float32Array(c+1),b=new Float32Array(c+1),m=new Float32Array(c+1);for(let x=0;x<=c;x++){let M=Math.max(0,x-1),v=Math.min(c,x+1);p[x]=Math.atan2(h[v]-h[M],u[v]-u[M]),m[x]=Math.atan2(f[v]-f[M],Math.hypot(h[v]-h[M],u[v]-u[M]))}p[0]=0;for(let x=0;x<=c;x++){let M=Math.max(0,x-2),v=Math.min(c,x+2);b[x]=(p[v]-p[M])/Math.max(1,v-M)}let g=(x,M)=>{let v=Math.min(c-1,Math.max(0,Math.floor(M))),S=at(M-v);return x[v]+(x[v+1]-x[v])*S},_=ii([[0,0],[52,0],[110,6],[175,16],[270,30]]),E=s+-66;return{L:c,zAnfang:E,punkt(x,M={}){return M.x=g(h,x),M.y=g(f,x),M.z=s+g(u,x),M},sRampe:l[a],sLand:l[o],pose(x,M,v,S){let y=M-E;if(S.licht=1-yt(or-.07,or-.01,x)*(1-yt(or+.01,or+.13,x)),S.blinker=null,S.brems=0,S.dz=0,S.s=0,y<=0||x>=or)return S.aktiv=!1,x>=or&&(S.dz=-PT*(1-yt(or,CT,x))),y>-25&&x<or&&(S.blinker="R"),S;let w=Math.min(c-1,y-_(y));return S.aktiv=!0,S.s=w,S.x=g(h,w),S.y=g(f,w),S.z=s+g(u,w),S.gier=g(p,w),S.kruemmung=g(b,w),S.hang=g(m,w),S.roll=at(S.kruemmung*v*v,-6,6)*.006,S.blinker=w<l[o]-12?"R":null,S.brems=yt(60,75,y)*(1-yt(150,175,y))*.55,S}}}var Au,kb,or,CT,PT,Fb=ut(()=>{ln();Au=-1.75,kb=-5.85,or=5.27,CT=5.52,PT=30});function Nb(s,e){let t=wt(4),n=s.woerter,i=bi([-3.62,t-70],[-3.62,t+30]),r=C=>C<.3?bi([-3.62,t-70],[-7.6,t-40])(C/.3):bi([-7.6,t-40],[-7.6,t+30])((C-.3)/.7),a=Sb([-5.85,t-5],[-5.85,t+58],[-13.5,t+95]),o=C=>U=>{let L=Math.min(U,.99),B=a(U),z=a(L+.01).clone().sub(a(L)).normalize(),W=new R(z.z,0,-z.x);return B.add(W.multiplyScalar(C*1.75))},l=o(-1),c=o(1),h=c,u=l,f=C=>C<.22?bi([-4.75,t+30],[-3.62,t+38])(C/.22):bi([-3.62,t+38],[-3.62,t+66])((C-.22)/.78),d=C=>c(.3+.37*C),p=Ts((C,U,L)=>{C.lineWidth=6,C.beginPath(),C.moveTo(0,L-5),C.lineTo(U,L-5),C.stroke()}),b=Ts((C,U,L)=>{C.lineWidth=6,C.beginPath(),C.moveTo(0,L-5),C.lineTo(U,L-5),C.stroke(),C.beginPath(),C.moveTo(U*.3,5),C.lineTo(U,5),C.stroke(),C.setLineDash([24,24]),C.beginPath(),C.moveTo(0,5),C.lineTo(U*.3,5),C.stroke()}),m=Ts((C,U,L)=>{C.lineWidth=6,C.beginPath(),C.moveTo(0,5),C.lineTo(U,5),C.moveTo(0,L-5),C.lineTo(U,L-5),C.stroke(),C.lineWidth=7;for(let B=-8;B<40;B++)C.beginPath(),C.moveTo(B*40,L),C.lineTo(B*40+120,0),C.stroke()}),g=[[ar(i,r,48),p,.012],[ar(h,u,64),b,.014],[ar(f,d,40),m,.013]].map(([C,U,L])=>{let B=new Q(C,s.strasse.zusatzMaterial(U));return B.position.y=L,B.frustumCulled=!1,B.name="fahrbahn:ausfahrt",s.szene.add(B),B});s.strasse.uniforms.randAus.value.set(t-70,t+62);let _=[];{let C=Ts((W,Y,ae)=>{W.lineWidth=5,W.beginPath(),W.moveTo(0,5),W.lineTo(Y,5),W.moveTo(0,ae-5),W.lineTo(Y,ae-5),W.stroke()}),U=a(.8),L=_p(cg.map(([W,Y])=>[W,Y-t]),3,[U.x,U.z-t]),N=Eb(null,W=>Wt(1.75,3,yt(0,45,W)),(W,Y)=>Ms(W,Y+t),3,7,{linie:L,zeilen:_}),z=new Q(N,s.strasse.zusatzMaterial(C));z.frustumCulled=!1,z.name="fahrbahn:landstrasse",e.add(z),g.push(z)}let E=Db({z0:t,rampe:C=>{let U=a(C);return{x:U.x,z:U.z-t}},land:_});s.convoy.abfahrt=E;let x="#1a4f9c",M=new Ne({color:1777187,roughness:.7,metalness:.3}),v=(C,U,L,B,N)=>(C.position.set(U,L,B),C.rotation.y=N,C);{let U=new lt;U.position.z=-64;let L=-9.6,B=6.6,N=(L+B)/2,z=7.2;for(let ae of[L,B]){let he=Di(ae,t+-64);U.add(new Q(new He(.42,z+.2-he,.42).translate(ae,(z+.2+he)/2,0),In)),U.add(new Q(new He(.95,.18,.95).translate(ae,he+.09,0),In))}U.add(new Q(new He(B-L+.5,.55,.5).translate(N,z,0),In));let W=vp([{text:n.schildOben||"A1",groesse:150,fett:!0},{text:(n.schildUnten||"Ausfahrt 12")+" \xB7 300 m",groesse:104,pfeil:!0}],{breite:1400,hoehe:400,meter:1.9,hintergrund:x});v(W,-3,z-1.45,-.3,Math.PI);let Y=new Q(new He(6.8,2,.08).translate(-3,z-1.45,-.24),M);U.add(Y,W);for(let ae of[-5.4,-.6])U.add(new Q(new He(.12,.72,.12).translate(ae,z-.62,-.12),In));e.add(U)}{let L=new lt;L.position.set(-11.5,Di(-11.5,t+-8),-8),L.rotation.y=-.12;for(let N of[-1.6,1.6])L.add(new Q(new Nt(.06,.07,3.6,10).translate(N,1.8,.16),In));let B=vp([{text:n.schildOben||"A1",groesse:150,fett:!0},{text:n.schildUnten||"Ausfahrt 12",groesse:104,pfeil:!0}],{breite:1400,hoehe:400,meter:1.5,hintergrund:x});v(B,0,3,-.07,Math.PI),L.add(B,new Q(new He(5.3,1.6,.08).translate(0,3,0),M)),e.add(L)}let S=150,y=[];for(let C=-S;C<0;C+=3)y.push({x:Au,y:0,z:E.zAnfang+C,s:C});{let C={};for(let U=0;U<=Math.min(E.L-1,E.sLand+120);U+=1.5)E.punkt(U,C),y.push({x:C.x,y:C.y,z:C.z,s:U})}let w=new Eu(y,{farbe:ul,breite:.7,hoehe:.085,endeWeich:60});s.szene.add(w.mesh);let P=n.ansage||"In 300 Metern rechts abbiegen",I=n.ansageJetzt||"Ausfahrt nehmen",D=vn(P,{punkt:"cyan",hoehe:.6});e.add(D),El(D,[P,Fi(P,200),Fi(P,100),I],C=>vn(C,{punkt:"cyan",hoehe:.6})),D.material.depthTest=!1,D.renderOrder=20;let H=vn(n.landstrasse||"Ohne Autobahn",{punkt:"cyan",hoehe:.85});return H.position.set(-15.6,4.2,112),e.add(H),{update(C,U,L,B,N){let z=s.convoy.fuehrungEcht,W=s.convoy._ab,Y=U*mt(C,-.15,.1,1.05,1.22);w.uniforms.zeit.value=L,w.uniforms.staerke.value=Y,w.mesh.visible=Y>.01,w.uniforms.ab.value=(W.aktiv?W.s:Math.max(-S,z.z-E.zAnfang-1.4))+4.2;for(let he of g)he.visible=U>.01;let ae=U*mt(C,-.05,.06,.52,.6);Sl(D,C<.08?0:C<.17?1:C<.28?2:3),D.position.set(z.x,z.y+2.6+.06*Math.sin(L*2),z.z-t),tn(D,ae),N.kamera.aspect<.9&&Qs(D,N.kamera,Yh,Jh),ys(D,N.kamera),tn(H,U*mt(C,.5,.62,1,1.12)),Qs(H,N.kamera,.034,.07),ys(H,N.kamera)}}}var Ub=ut(()=>{Pt();Su();Ni();ti();ni();sr();Tu();wl();Fb();ln();tr();ci();fl()});function Qa(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+r,t,r),s.closePath()}function IT(){let t=document.createElement("canvas");t.width=1024,t.height=320;let n=t.getContext("2d");Qa(n,5,5,1014,310,34),n.fillStyle="#1a4f9c",n.fill(),n.lineWidth=10,n.strokeStyle="#ffffff",n.stroke(),n.fillStyle="#ffffff",Qa(n,70,112,170,118,18),n.fill(),Qa(n,118,86,70,36,10),n.fill(),n.fillStyle="#1a4f9c",n.beginPath(),n.arc(155,171,40,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(155,171,24,0,Math.PI*2),n.fill(),n.font=`700 92px ${nt}`,n.textBaseline="middle",n.textAlign="left",n.fillText("SECTION",300,112),n.fillText("CONTROL",300,214);let i=new Ft(t);return i.colorSpace=ot,i.anisotropy=8,i.minFilter=en,i}function LT(s){let n=document.createElement("canvas");n.width=880,n.height=600;let i=n.getContext("2d");Qa(i,4,4,872,592,44),i.fillStyle="#0d1116",i.fill(),i.lineWidth=6,i.strokeStyle="rgba(44,184,227,0.75)",i.stroke();let r=String(s.titel).toUpperCase();i.fillStyle="rgba(235,235,245,0.82)",i.textBaseline="middle",i.textAlign="center";let a=46;try{i.letterSpacing="5px"}catch{}for(i.font=`600 ${a}px ${nt}`;i.measureText(r).width>770&&a>28;)a-=2,i.font=`600 ${a}px ${nt}`;i.fillText(r,880/2,74);try{i.letterSpacing="0px"}catch{}i.fillStyle=zb,i.font=`700 92px ${nt}`,i.fillText(`\xD8 ${s.schnitt}`,196,208),i.beginPath(),i.arc(196,366,84,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.beginPath(),i.arc(196,366,72,0,Math.PI*2),i.lineWidth=20,i.strokeStyle="#d61f26",i.stroke(),i.fillStyle="#101010",i.font=`700 76px ${nt}`,i.fillText(String(s.limit),196,370);let o=602,l=290,c=168;i.lineCap="round",i.lineWidth=15,i.strokeStyle="rgba(255,255,255,0.12)",i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.stroke();let h=-Math.PI/2+.5,u=Math.PI*2*at(s.tempo/s.limit,0,1)*.92;i.strokeStyle=zb,i.beginPath(),i.arc(o,l,c,h,h+u),i.stroke(),i.fillStyle="#ffffff",i.font=`700 150px ${nt}`,i.fillText(String(s.tempo),o,l-12),i.fillStyle="rgba(235,235,245,0.75)",i.font=`400 42px ${nt}`,i.fillText(s.einheit,o,l+84);let f=54,d=496,p=772,b=66;Qa(i,f,d,p,b,b/2),i.fillStyle="rgba(255,255,255,0.13)",i.fill(),i.save(),Qa(i,f,d,p,b,b/2),i.clip(),i.fillStyle="rgba(44,184,227,0.5)",i.fillRect(f,d,p*at(s.anteil,.06,1),b),i.restore(),i.fillStyle="#ffffff",i.font=`600 44px ${nt}`,i.fillText(s.rest,880/2,d+b/2+2);let m=new Ft(n);return m.colorSpace=ot,m.anisotropy=8,m.minFilter=en,m}function kT(s,e){return String(s).replace(/\d+([.,])\d+/,(t,n)=>e.toFixed(1).replace(".",n))}function zT(s){let e=new lt,t=DT,n=new lt;n.rotation.x=.22,n.add(new Q(new He(.36,.3,.74),t)),n.add(new Q(new He(.42,.04,.84).translate(0,.17,.03),s)),n.add(new Q(new Nt(.1,.12,.14,18).rotateX(Math.PI/2).translate(0,-.01,.42),FT)),n.add(new Q(new qi(.075,16).translate(0,-.01,.492),NT)),n.position.y=-.42,e.add(n),e.add(new Q(new He(.08,.42,.08).translate(0,-.14,0),s));let i=new lt;i.position.set(.52,-.4,.05),i.rotation.x=.22,i.add(new Q(new He(.34,.24,.16),s)),i.add(new Q(new st(.28,.18).translate(0,0,.082),UT)),e.add(i),e.add(new Q(new He(.06,.4,.06).translate(.52,-.14,0),s));let r=Nn(Ke(3,.3,.2),.34);return r.position.set(.12,-.3,.3),e.add(r),e.traverse(a=>{a.isMesh&&(a.frustumCulled=!1,a.layers.enable(Dt))}),{g:e,led:r}}function Bb(s,e){let t=wt(5),n=s.woerter,i=new Ne({color:9146777,roughness:.46,metalness:.55}),r=new lt;r.position.z=Cu;let a=new lt;r.add(a);let o=-6.9,l=6.9,c=.9,h=.62;for(let N of[o,l]){let z=Di(N,t+Cu),W=ws+c/2+.1;for(let Y of[-h/2,h/2])a.add(new Q(new He(.2,W-z,.2).translate(N,(W+z)/2,Y),i));for(let Y=z+.9;Y<ws-c/2;Y+=1.15)a.add(new Q(new He(.09,.09,h).translate(N,Y,0),i));a.add(new Q(new He(1,.22,1.2).translate(N,z+.11,0),i))}let u=l-o+.2,f=(l+o)/2,d=10,p=(l-o)/d;for(let N of[-h/2,h/2]){for(let z of[-c/2,c/2])a.add(new Q(new He(u,.13,.13).translate(f,ws+z,N),i));for(let z=0;z<=d;z++)a.add(new Q(new He(.08,c,.08).translate(o+z*p,ws,N),i));for(let z=0;z<d;z++){let W=new Q(new He(Math.hypot(p,c),.06,.06),i);W.position.set(o+(z+.5)*p,ws,N),W.rotation.z=(z%2?-1:1)*Math.atan2(c,p),a.add(W)}}for(let N=0;N<=d;N++)for(let z of[-c/2,c/2])a.add(new Q(new He(.06,.06,h).translate(o+N*p,ws+z,0),i));a.traverse(N=>{N.isMesh&&(N.frustumCulled=!1,N.layers.enable(Dt))});let b=[];for(let[N,z]of[[-1.75,Math.PI],[1.75,0]]){let W=zT(i);W.g.position.set(N,ws-c/2,0),W.g.rotation.y=z,r.add(W.g),b.push(W)}let m=3.5,g=m*320/1024,_=-4.6,E=ws+.05,x=new Q(new st(m,g),new it({map:IT(),fog:!0}));x.position.set(_,E,-h/2-.13),x.rotation.y=Math.PI,x.layers.enable(Dt),r.add(x),r.add(new Q(new He(m+.08,g+.08,.06).translate(_,E,-h/2-.09),In));let M=Di(o-1.3,t+Cu);r.add(new Q(new He(.8,1.35,.5).translate(o-1.3,M+.675,.1),new Ne({color:10133672,roughness:.55,metalness:.3}))),r.add(new Q(new He(.9,.08,.6).translate(o-1.3,M+1.39,.1),In)),r.traverse(N=>{N.name||(N.name="bruecke")}),Ii(r),e.add(r);let v=vn(n.abschnittBeginn||"Beginn Abschnittskontrolle",{punkt:"cyan",hoehe:.8});v.position.set(-3.4,ws+2.1,Cu),e.add(v);let S=n.abschnitt||"Abschnittskontrolle",y=n.abschnittRest||"noch 2,4 km",w=n.einheit||"km/h",I=[{km:2.4,schnitt:76,tempo:78,anteil:.2},{km:2,schnitt:76,tempo:79,anteil:.34},{km:1.6,schnitt:77,tempo:78,anteil:.48},{km:1.2,schnitt:77,tempo:79,anteil:.62}].map(N=>LT({titel:S,schnitt:N.schnitt,tempo:N.tempo,limit:80,rest:kT(y,N.km),anteil:N.anteil,einheit:w})),D=new lt;D.position.set(...Ep),D.rotation.y=2.6;let H=new it({map:I[0]}),C=new Q(new st(4.4,3),H);D.add(C),D.add(new Q(new He(4.5,3.1,.08).translate(0,0,-.06),In));for(let N of[-1.9,1.9])D.add(new Q(new Nt(.07,.08,2.15,10).translate(N,-2.5,-.12),In));D.add(new Q(new He(4.5,.1,.14).translate(0,-1.55,-.1),In)),e.add(D);let U=vn(n.amtlich||"Amtliche Daten \xB7 \xD6sterreich",{punkt:"cyan",hoehe:.8});U.position.set(Ep[0],5.7,Ep[2]),e.add(U);let L=s.welt&&s.welt.renderer;if(ts(L,e),L&&L.initTexture)for(let N of I)try{L.initTexture(N)}catch{}let B=0;return{update(N,z,W,Y,ae){s.umgebung.himmelUniforms.mond.value=Math.max(s.umgebung.himmelUniforms.mond.value,z),s.schnee.staerke=Math.max(s.schnee.staerke,z*.7);let he=W*.9%1<.5?1:.25;for(let _e of b)_e.led.material.opacity=(.35+.65*he)*z;tn(v,z*mt(N,.36,.44,.55,.6)),Li(v,ae.kamera);let ce=Math.max(0,Math.min(I.length-1,Math.floor(at((N-.6)/.4)*I.length)));ce!==B&&(B=ce,H.map=I[ce]),tn(U,z*mt(N,.78,.84,.94,1)),Li(U,ae.kamera)}}}var Cu,ws,Ep,zb,DT,FT,NT,UT,Hb=ut(()=>{Pt();Ni();ti();ni();ln();$s();ci();tr();Cu=30,ws=6.9,Ep=[-9.4,3.55,64],zb="#2cb8e3";DT=new Ne({color:13225686,roughness:.42,metalness:.35}),FT=new Ne({color:658189,roughness:.25,metalness:.7}),NT=new it({color:Ke(.05,.12,.3)}),UT=new it({color:Ke(.18,.02,.03)})});function to(s){if(!s||s.attributes.uv||!s.attributes.position)return!1;let e=s.attributes.position,t=s.attributes.normal,n=new R(0,0,1);if(t){n.set(0,0,0);for(let m=0;m<t.count;m++)n.x+=t.getX(m),n.y+=t.getY(m),n.z+=t.getZ(m);n.lengthSq()<1e-8&&n.set(0,0,1),n.normalize()}let i=Math.abs(n.x),r=Math.abs(n.y),a=Math.abs(n.z);i>=r&&i>=a?n.set(Math.sign(n.x)||1,0,0):r>=a?n.set(0,Math.sign(n.y)||1,0):n.set(0,0,Math.sign(n.z)||1);let o=r>i&&r>a?new R(0,0,-1):new R(0,1,0),l=new R().crossVectors(o,n);s.computeBoundingBox();let c=s.boundingBox,h=c.getCenter(new R),u=c.getSize(new R),f=Math.max(1e-6,Math.abs(l.dot(u))),d=Math.max(1e-6,Math.abs(o.dot(u))),p=new Float32Array(e.count*2),b=new R;for(let m=0;m<e.count;m++)b.set(e.getX(m),e.getY(m),e.getZ(m)).sub(h),p[m*2]=b.dot(l)/f+.5,p[m*2+1]=b.dot(o)/d+.5;return s.setAttribute("uv",new ct(p,2)),!0}function eo(s,e,t,n){let i=s.attributes.position.count,r=new Float32Array(i*3);for(let a=0;a<i;a++)r[a*3]=e,r[a*3+1]=t,r[a*3+2]=n;return s.setAttribute("color",new ct(r,3)),s}function Sp(s,e){let t=new qs;t.moveTo(s[0][0],s[0][1]);for(let i=1;i<s.length;i++)t.lineTo(s[i][0],s[i][1]);t.closePath();let n=new Sr(t,{depth:e,bevelEnabled:!1,curveSegments:1});return n.translate(0,0,-e/2),n.rotateY(-Math.PI/2),n}function BT(){let e=Sp([[-2.1,.3],[-2.16,.62],[-1.98,.88],[-1.25,.93],[-.72,1.27],[.32,1.29],[.98,.95],[1.98,.8],[2.16,.56],[2.1,.3]],1.78),t=[.025,.035,.05],n=[.012,.012,.014],i=[];i.push(eo(Ui(Sp([[-.66,.98],[-.5,1.21],[.27,1.23],[.78,.99]],1.78+.012)),...t));let r=(a,o)=>{let l=o[0]-a[0],c=o[1]-a[1],h=Math.hypot(l,c),u=-c/h,f=l/h,d=f<0?-1:1,p=(b,m,g)=>[b[0]+l*m+u*d*g,b[1]+c*m+f*d*g];return Sp([p(a,.1,.012),p(a,.9,.012),p(a,.9,-.02),p(a,.1,-.02)],1.78-.3)};i.push(eo(Ui(r([.98,.95],[.32,1.29])),...t)),i.push(eo(Ui(r([-1.25,.93],[-.72,1.27])),...t));for(let[a,o]of[[-.8,1.32],[.8,1.32],[-.8,-1.3],[.8,-1.3]])i.push(eo(Ui(new Nt(.34,.34,.26,12).rotateZ(Math.PI/2).translate(a,.34,o)),...n));for(let a of[-.58,.58])i.push(eo(Ui(new He(.36,.1,.05).translate(a,.66,2.15)),7,6.4,5)),i.push(eo(Ui(new He(.46,.08,.05).translate(a,.74,-2.15)),6,.25,.15));return{rumpf:e,details:Fr(i,!1)}}function HT(){let s=[];for(let e of[-.09,.09])s.push(Ui(new Nt(.078,.062,.84,6).translate(e,.42,0)));s.push(Ui(new Io(.17,.36,2,8).scale(1.12,1,.74).translate(0,1.12,0)));for(let e of[-1,1])s.push(Ui(new Nt(.052,.044,.6,5).rotateZ(e*.13).translate(e*.265,1.1,0)));return{koerper:Fr(s,!1),kopf:new Mn(.118,8,6).translate(0,1.6,0)}}function OT(s){let e=s>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function VT(s){let e=new ht,t=s.geometry;for(let n of["position","normal","color"]){let i=t.attributes[n];if(!i)continue;let r=new Float32Array(i.count*3);for(let a=0;a<i.count;a++)r[a*3]=i.getX(a),r[a*3+1]=i.getY(a),r[a*3+2]=i.getZ(a);e.setAttribute(n,new ct(r,3))}return t.index&&e.setIndex(t.index.clone()),e.applyMatrix4(s.matrixWorld),e.rotateY(Math.PI),e}function Ob(s,e){let t=s.woerter,n=OT(20261111),i=new lt,r=-20,a=-48,o=-24,l=-6.4,c=.04,h=(G,se)=>Ms(G,e+se)>0,u=G=>{for(let se=r;se<=l;se+=.5)if(h(se,G))return!0;return!1};for(;a<-44&&u(a);)a+=.4;for(;o>-28&&u(o);)o-=.4;let f=G=>{for(let se=a;se<=o;se+=.5)if(h(G,se))return!0;return!1};for(;r<-15&&f(r);)r+=.4;let d=l-r,p=o-a,b=new R(l-5.6,c,o-11),m=2.5,g=14278115,_=9182488,E=1798035,x=1316378,M=9409949,v=2303531,S=15330028,y=13083162,w=998476,P=2930915,I=[],D=(G,se,Ae,qe,St)=>I.push({t:G,x:se,z:Ae,d:qe+(n()-.5)*.06,f:St});[["sport",g],["car",_],["sport",E]].forEach(([G,se],Ae)=>D(G,l-1.9-Ae*2.8,a+2.5,0,se)),[["car",x],["sport",M],["van",v]].forEach(([G,se],Ae)=>D(G,l-1.9-Ae*2.8,o-(G==="van"?2.95:2.5),Math.PI,se)),d>11.5&&(D("caravan",r+2.1,a+4.6,0,S),D("sport",r+2.5,o-5.2,Math.PI/2,y),D("car",r+2.5,o-2.2,Math.PI/2,w)),[[l-1.3,a+6.6,P],[l-1.5,o-6.4,_]].forEach(([G,se,Ae])=>D("bike",G,se,Math.atan2(b.x-G,b.z-se),Ae));let H=G=>{let[se,Ae]=GT[G.t],qe=Math.abs(Math.sin(G.d)),St=Math.abs(Math.cos(G.d));return[(se*qe+Ae*St)/2,(se*St+Ae*qe)/2]},C=2,U=C+I.length,L=40,B=Math.round(d*L),N=Math.round(p*L),z=(G,se)=>[(G-r)*L,(se-a)*L],W=[a+.8,o-.8],Y=document.createElement("canvas");Y.width=B,Y.height=N;{let G=Y.getContext("2d");G.fillStyle="#17191d",G.fillRect(0,0,B,N);for(let qe=0;qe<2600;qe++)G.fillStyle=n()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.16)",G.fillRect(n()*B,n()*N,1+n()*2.5,1+n()*2.5);G.strokeStyle="rgba(232,236,240,0.62)",G.lineWidth=4;for(let qe of[a+.3,o-5])for(let St=0;St<=3;St++){let[Ht,zn]=z(l-.5-St*2.8,qe);G.beginPath(),G.moveTo(Ht,zn),G.lineTo(Ht,zn+4.7*L),G.stroke()}for(let qe of I){let[St,Ht]=z(qe.x,qe.z),[zn,Mi]=H(qe),hn=zn*L*1.25,Yn=Mi*L*1.2;G.save(),G.translate(St,Ht),G.scale(1,Yn/hn);let Ve=G.createRadialGradient(0,0,0,0,0,hn);Ve.addColorStop(0,"rgba(0,0,0,0.74)"),Ve.addColorStop(.72,"rgba(0,0,0,0.5)"),Ve.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=Ve,G.fillRect(-hn,-hn,2*hn,2*hn),G.restore()}let[se,Ae]=z(b.x,b.z);G.lineCap="round";for(let qe=0;qe<9;qe++){G.strokeStyle=`rgba(0,0,0,${.22+n()*.22})`,G.lineWidth=5+n()*7;let St=(m+.5+(n()-.5)*1.5)*L,Ht=n()*6.28,zn=2.5+n()*3.7;G.beginPath(),G.ellipse(se+(n()-.5)*22,Ae+(n()-.5)*22,St,St*(.93+n()*.12),n()*3.1,Ht,Ht+zn),G.stroke()}}let ae=document.createElement("canvas");ae.width=B,ae.height=N;{let G=ae.getContext("2d");G.fillStyle="#05070a",G.fillRect(0,0,B,N),G.globalCompositeOperation="lighter";let se=(Ae,qe,St,Ht)=>{let[zn,Mi]=z(Ae,qe),hn=G.createRadialGradient(zn,Mi,0,zn,Mi,St*L);hn.addColorStop(0,Ht),hn.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=hn,G.fillRect(0,0,B,N)};for(let Ae of W)se(r+2.2,Ae+(Ae<b.z?3:-3),13,"rgba(255,226,186,0.6)");se(b.x,b.z,7.5,"rgba(60,200,235,0.42)");for(let Ae of I)Math.abs(Ae.d-Math.PI)<.2&&se(Ae.x,Ae.z-4.6,3.6,"rgba(255,240,214,0.34)");G.globalCompositeOperation="multiply",G.drawImage(Y,0,0),G.globalCompositeOperation="lighter",G.globalAlpha=.5,G.drawImage(ae,0,0),G.globalAlpha=1}let he=G=>{let se=new Ft(G);return se.colorSpace=ot,se.anisotropy=8,se.minFilter=en,se},ce=new Q(new st(d,p).rotateX(-Math.PI/2),new Ne({map:he(Y),emissive:16777215,emissiveMap:he(ae),emissiveIntensity:1.5,roughness:.86,metalness:0}));ce.position.set((r+l)/2,c,(a+o)/2),ce.name="boden:treffen",ce.frustumCulled=!1,i.add(ce);let _e=new Pe,$e=new $t,ne=new R,oe=new R(1,1,1),Te=new R(0,1,0),ke=new we,de=(G,se,Ae)=>_e.compose(ne.set(G,c,se),$e.setFromAxisAngle(Te,Ae),oe.set(1,1,1)),Oe=new Ne({color:16777215,roughness:.34,metalness:.55,envMapIntensity:1.6}),gt=[15330028,9182488],le=BT(),fe=[new Lt(le.rumpf,Oe,U),new Lt(le.details,new it({vertexColors:!0}),U)],ve=fe.slice(),be=(G,se,Ae,qe)=>{de(se,Ae,qe);for(let St of fe)St.setMatrixAt(G,_e)};I.forEach((G,se)=>{de(G.x,G.z,G.d);for(let Ae of fe)Ae.setMatrixAt(C+se,_e);fe[0].setColorAt(C+se,ke.setHex(G.f))}),gt.forEach((G,se)=>fe[0].setColorAt(se,ke.setHex(G))),be(0,b.x,b.z+m,Math.PI/2),be(1,b.x,b.z-m,-Math.PI/2);for(let G of fe)G.frustumCulled=!1,G.instanceMatrix.setUsage(Qn),i.add(G);let Se=[],je=(G,se)=>G>r+.5&&G<l-.4&&se>a+.5&&se<o-.5&&!I.some(Ae=>{let[qe,St]=H(Ae);return Math.abs(Ae.x-G)<qe+.4&&Math.abs(Ae.z-se)<St+.4}),ze=(G,se)=>{je(G,se)&&Se.push({x:G,z:se,g:.9+n()*.18,ph:n()*6.28})};for(let G=0;G<9;G++)ze(b.x-5.3-n()*.5,b.z-4.4+G*1.02+(n()-.5)*.4);for(let G=0;G<6;G++)ze(b.x-6.5-n()*.6,b.z-3.2+G*1.25+(n()-.5)*.5);for(let G=0;G<8;G++)ze(b.x-4.4+G*1.1+(n()-.5)*.4,b.z-5.2-n()*.9);for(let G=0;G<8;G++)ze(b.x-4.4+G*1.1+(n()-.5)*.4,b.z+5+n()*.8);for(let G=0;G<5;G++)ze(l-.8-n()*.5,b.z-3.6+G*1.8+(n()-.5)*.6);for(let G=0;G<6;G++)ze(r+1.2+n()*(d-2.4),(n()<.5?a+5.3:o-5.3)+(n()-.5)*.8);let et=HT(),ie=new Lt(et.koerper,new Ne({color:16777215,roughness:.9,metalness:0}),Se.length),F=new Lt(et.kopf,new Ne({color:16777215,roughness:.8,metalness:0}),Se.length),Fe=[1842982,2764602,1381914,3883602,998476,4857628,14278115,2930915,2303531,5922664],Xe=[15251866,13209451,9263675,15780784,7031350],k=(G,se)=>{let Ae=Se[G];_e.compose(ne.set(Ae.x,c+se,Ae.z),$e.setFromAxisAngle(Te,Math.atan2(b.x-Ae.x,b.z-Ae.z)),oe.set(Ae.g,Ae.g,Ae.g)),ie.setMatrixAt(G,_e),F.setMatrixAt(G,_e)};Se.forEach((G,se)=>{k(se,0),ie.setColorAt(se,ke.setHex(Fe[Math.floor(n()*Fe.length)])),F.setColorAt(se,ke.setHex(Xe[Math.floor(n()*Xe.length)]))});for(let G of[ie,F])G.frustumCulled=!1,G.instanceMatrix.setUsage(Qn),i.add(G);let T=Se.map((G,se)=>se).filter(G=>G%4===1),j=Se.map((G,se)=>se).filter(G=>G%5===2).slice(0,8),Z=[],V=[];for(let G of W){Z.push(Ui(new Nt(.07,.1,6.4,8).translate(r+.6,3.2,G))),Z.push(Ui(new He(1.6,.09,.14).translate(r+1.3,6.35,G)));let se=new It;se.name="anker_licht_treffen",se.position.set(r+2,6.2,G),se.userData={typ:"spot",farbe:"#ffe6c2",winkel:105,reichweite:26,staerke:420},i.add(se),V.push(se)}let q=new Q(Fr(Z,!1),In);q.frustumCulled=!1,i.add(q);let $=22,K=2+j.length+$,J=ei(64),me=()=>new it({map:J,transparent:!0,blending:kt,depthWrite:!1,fog:!1}),Ee=new Lt(new st(1,1),me(),K);Ee.frustumCulled=!1,Ee.instanceMatrix.setUsage(Qn),Ee.renderOrder=6,i.add(Ee);let pe=[];for(let G=0;G<$;G++)pe.push({alter:G/$,x:b.x,y:c,z:b.z,dx:0,dz:0});for(let G=0;G<K;G++)Ee.setMatrixAt(G,_e.identity()),Ee.setColorAt(G,ke.setRGB(0,0,0));let xe=I.map((G,se)=>G.t==="sport"?se:-1).filter(G=>G>=0).filter((G,se)=>se%2===1).slice(0,2),Ce=new Lt(new st(1,1).rotateX(-Math.PI/2),me(),C+xe.length);Ce.frustumCulled=!1,Ce.instanceMatrix.setUsage(Qn),Ce.renderOrder=5,i.add(Ce);let Ze=Ke(.25,1.5,1.9);for(let G=0;G<C+xe.length;G++)Ce.setMatrixAt(G,_e.identity()),Ce.setColorAt(G,ke.setRGB(0,0,0));xe.forEach((G,se)=>{let Ae=I[G];_e.compose(ne.set(Ae.x,c+.03,Ae.z),$e.setFromAxisAngle(Te,Ae.d),oe.set(3.4,1,6.6)),Ce.setMatrixAt(C+se,_e)});let Ie=vn(t.treffen||"Car-Meet \xB7 12 fahren hin",{punkt:"cyan",hoehe:.8});Ie.position.set(b.x,4.4,b.z),i.add(Ie);let O=vn(t.treffenWaren||"25+ FREQ-Fahrer waren dort",{punkt:"gruen",hoehe:.8});O.position.set(b.x-1.5,4,b.z+4.5),i.add(O);let Me={hin:Ie.position.clone(),dort:O.position.clone()};ts(s.welt&&s.welt.renderer,i);let ue=!1,Re=-1,De=()=>{if(ue)return;let G=s.umgebung&&s.umgebung.lichtPool;if(!(!G||typeof G.anmelden!="function")){i.updateMatrixWorld(!0);try{for(let se of V)se.lookAt(i.localToWorld(new R(b.x,0,se.position.z+(b.z-se.position.z)*.6))),G.anmelden(se,{prioritaet:2});ue=!0}catch{}}},ge=new R;return{gruppe:i,mitte:b,async ladeModelle(G){let se=!(s.welt&&s.welt.stufeName&&s.welt.stufeName!=="hoch"),Ae=G&&await G.glb(se?"welt/modelle/fahrzeuge.glb":"welt/modelle/fahrzeuge_leicht.glb");if(!Ae)return!1;Ae.scene.updateMatrixWorld(!0);let qe={};if(Ae.scene.traverse(Ve=>{if(Ve.isMesh){let[dt,Jt]=Ve.name.split("_");(qe[dt]=qe[dt]||{})[Jt]=VT(Ve)}}),!["car","sport","van","caravan","bike"].every(Ve=>qe[Ve]&&qe[Ve].lack&&qe[Ve].rest&&qe[Ve].licht))return!1;let St={lack:[],rest:[],licht:[]};for(let Ve of I){de(Ve.x,Ve.z,Ve.d);for(let dt of["lack","rest","licht"]){let Jt=qe[Ve.t][dt].clone().applyMatrix4(_e);if(dt==="lack"){ke.setHex(Ve.f);let kn=Jt.attributes.position.count,si=new Float32Array(kn*3);for(let ri=0;ri<kn;ri++)si[ri*3]=ke.r,si[ri*3+1]=ke.g,si[ri*3+2]=ke.b;Jt.setAttribute("color",new ct(si,3))}St[dt].push(Jt)}}let Ht=new Ne({vertexColors:!0,roughness:.34,metalness:.55,envMapIntensity:1.6}),zn=new Ne({vertexColors:!0,roughness:.42,metalness:.3,envMapIntensity:1.2}),Mi=new it({vertexColors:!0,color:Ke(6,6,6)}),hn=[["lack",Ht],["rest",zn],["licht",Mi]].map(([Ve,dt])=>{let Jt=new Q(Fr(St[Ve],!1),dt);return Jt.frustumCulled=!1,Jt.name="treffen:"+Ve,Jt}),Yn=[new Lt(qe.sport.lack,Oe,C),new Lt(qe.sport.rest,zn,C),new Lt(qe.sport.licht,Mi,C)];for(let Ve of Yn){Ve.frustumCulled=!1,Ve.instanceMatrix.setUsage(Qn);for(let dt=0;dt<C;dt++)Ve.setMatrixAt(dt,_e.identity())}gt.forEach((Ve,dt)=>Yn[0].setColorAt(dt,ke.setHex(Ve)));for(let Ve of[...hn,...Yn])i.add(Ve);for(let Ve of ve)i.remove(Ve),Ve.geometry.dispose();return ve=[],fe=Yn,be(0,b.x,b.z+m,Math.PI/2),be(1,b.x,b.z-m,-Math.PI/2),this.dreiecke=[...hn,...Yn].reduce((Ve,dt)=>Ve+(dt.geometry.index?dt.geometry.index.count:dt.geometry.attributes.position.count)/3*(dt.isInstancedMesh?C:1),0),!0},update(G,se,Ae,qe,St){De();let Ht=se*mt(G,-.5,-.42,.7,.9),zn=Ae*1.25+G*10;for(let Ve=0;Ve<C;Ve++){let dt=zn+Ve*Math.PI,Jt=Math.sin(dt),kn=Math.cos(dt),si=b.x+m*Jt,ri=b.z+m*kn;ge.set(Math.cos(dt)*.814-Jt*.581,0,-Math.sin(dt)*.814-kn*.581);let hr=Math.atan2(ge.x,ge.z);be(Ve,si,ri,hr),_e.compose(ne.set(si,c+.03,ri),$e.setFromAxisAngle(Te,hr),oe.set(3.6,1,7)),Ce.setMatrixAt(Ve,_e),Ce.setColorAt(Ve,ke.copy(Ze).multiplyScalar(.55*Ht));for(let zi=Ve;zi<$;zi+=C){let ns=pe[zi];(ns.alter>=1||Re<0)&&(Re>=0&&(ns.alter=0),ns.x=si-ge.x*1.5+Math.sin(zi*12.9+Ae)*.3,ns.z=ri-ge.z*1.5+Math.cos(zi*7.3+Ae)*.3,ns.dx=Jt*.5,ns.dz=kn*.5)}}xe.forEach((Ve,dt)=>Ce.setColorAt(C+dt,ke.copy(Ze).multiplyScalar((.34+.06*Math.sin(Ae*2+dt))*Ht)));let Mi=Re<0?0:Math.min(.1,Math.max(0,Ae-Re));Re=Ae;let hn=0,Yn=(Ve,dt,Jt,kn,si,ri,hr)=>{_e.compose(ne.set(Ve,dt,Jt),St.quaternion,oe.set(kn,kn,1)),Ee.setMatrixAt(hn,_e),Ee.setColorAt(hn,ke.setRGB(si,ri,hr,Tt)),hn++};for(let Ve of V)Yn(Ve.position.x,Ve.position.y,Ve.position.z,1.7,2.6*Ht,2.2*Ht,1.7*Ht);for(let Ve of j){let dt=Se[Ve],Jt=(.7+.3*Math.sin(Ae*5+dt.ph))*Ht;Yn(dt.x+(b.x-dt.x)*.05,c+1.78*dt.g,dt.z+(b.z-dt.z)*.05,.3,1.5*Jt,1.7*Jt,2*Jt)}for(let Ve of pe){Ve.alter+=Mi/1.5;let dt=Math.min(1,Ve.alter),Jt=Math.pow(1-dt,1.4)*Math.min(1,dt*8)*.34*Ht;Yn(Ve.x+Ve.dx*dt,c+.35+dt*1.3,Ve.z+Ve.dz*dt,1+dt*3.2,Jt,Jt*1.04,Jt*1.1)}Ee.count=hn;for(let Ve of T)k(Ve,Math.abs(Math.sin(Ae*3.1+Se[Ve].ph))*.1);for(let Ve of[...fe,ie,F,Ee,Ce])Ve.instanceMatrix.needsUpdate=!0;Ee.instanceColor.needsUpdate=!0,Ce.instanceColor.needsUpdate=!0,Ie.position.copy(Me.hin),O.position.copy(Me.dort),tn(Ie,se*mt(G,0,.05,.1,.13)),Li(Ie,St),tn(O,se*mt(G,.15,.19,.26,.31)),Li(O,St)}}}function Gb(s,e){let t=new lt,n=Nn(Ke(1.6,.9,.5),1);n.scale.set(900,150,1),n.position.set(80,70,e+1350),t.add(n);let i=Nn(Ke(.5,1.6,2),1);i.scale.set(560,100,1),i.position.set(-60,45,e+1250),t.add(i);let r=[],a=(o,l)=>s.umgebung&&s.umgebung.hoehe?s.umgebung.hoehe(o,wt(8)+l):0;for(let o=0;o<16;o++){let l=Nn(Ke(1.4,1.2,.9),1);l.scale.set(5+o%3*3,3+o%2*2,1);let c=-70+o*9+o*7%5*2,h=e+650+o%4*18;l.position.set(c,a(c,h-e)+1.5+o%3*.8,h),t.add(l),r.push(l)}return{gruppe:t,update(o,l){n.material.opacity=.5*o,i.material.opacity=.35*o;for(let c=0;c<r.length;c++)r[c].material.opacity=o*(.5+.2*Math.sin(l*1.3+c*2.1));t.visible=o>.01}}}var lr,Ui,GT,Pu=ut(()=>{Pt();Ni();Wh();ti();ln();ci();tr();lr={TREFFEN:.28,WEITE_AN:.28,WEITE_VOLL:.6,ANKER_AN:.3,ANKER_VOLL:.45,LOGO:.62};Ui=s=>s.index?s.toNonIndexed():s;GT={car:[4.3,1.95],sport:[4.5,2.15],van:[5.35,2.2],caravan:[6.65,2.25],bike:[2.1,.8]}});function qb(s){return Ts((e,t,n)=>{let i=e.createLinearGradient(0,0,t,0),[r,a,o,l]=s?["#000","#000","#fff","#fff"]:["#fff","#fff","#000","#000"];i.addColorStop(0,r),i.addColorStop(s?.06:.7,a),i.addColorStop(s?.3:.94,o),i.addColorStop(1,l),e.strokeStyle=i,e.lineWidth=5,e.beginPath(),e.moveTo(0,6),e.lineTo(t,6),e.moveTo(0,n-6),e.lineTo(t,n-6),e.stroke()})}function jT(s,e=.22){let t=s.length,n=[],i=[];for(let a=0;a<t;a++){let o=s[Math.max(0,a-1)],l=s[Math.min(t-1,a+1)],c=l[0]-o[0],h=l[1]-o[1],u=Math.hypot(c,h)||1;c/=u,h/=u;let f=h*e/2,d=-c*e/2,p=s[a][2],[b,m]=s[a];n.push(b+f,-.02,m+d,b+f,p,m+d,b-f,p,m-d,b-f,-.02,m-d)}for(let a=0;a+1<t;a++){let o=a*4,l=o+4;for(let[c,h]of[[0,1],[1,2],[2,3]])i.push(o+c,o+h,l+c,o+h,l+h,l+c)}let r=new ht;return r.setAttribute("position",new ft(n,3)),r.setIndex(i),r.computeVertexNormals(),r}function Xb(s,e){let i=document.createElement("canvas");i.width=512,i.height=368;let r=i.getContext("2d");r.fillStyle="#06090d",r.fillRect(0,0,512,368);let a=r.createLinearGradient(0,0,0,368);a.addColorStop(0,"rgba(44,184,227,0.14)"),a.addColorStop(1,"rgba(44,184,227,0)"),r.fillStyle=a,r.fillRect(0,0,512,368);let o=e?"#ff453a":"#30d158";r.beginPath(),r.arc(44,46,12,0,Math.PI*2),r.fillStyle=o,r.fill(),r.fillStyle="#fff",r.font=`700 40px ${nt}`,r.textAlign="left",r.textBaseline="middle",r.fillText(s,70,46),r.fillStyle="#fff",r.font=`700 110px ${nt}`,r.textAlign="center",r.fillText(e?"48":"22",256,170),r.fillStyle="rgba(235,235,245,0.75)",r.font=`600 34px ${nt}`,r.fillText("kW",256,240),e?(r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(48,296,416,22),r.fillStyle="#2cb8e3",r.fillRect(48,296,416*.64,22),r.fillStyle="rgba(235,235,245,0.85)",r.font=`600 30px ${nt}`,r.textAlign="right",r.fillText("64 %",464,344)):(r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=4,r.strokeRect(206,290,100,50),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(306,305,8,20),r.fillStyle="#30d158",r.fillRect(212,296,88,38));let l=new Ft(i);return l.colorSpace=ot,l.anisotropy=4,l.minFilter=en,l}function YT(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#1b4f9c",t.fillRect(0,0,256,256),t.strokeStyle="#fff",t.lineWidth=10,t.strokeRect(10,10,236,236),t.fillStyle="#fff",t.strokeStyle="#fff",t.lineWidth=12,t.lineCap="round",t.fillRect(60,130,136,14),t.fillRect(118,144,20,60),t.fillRect(40,176,50,12),t.fillRect(166,176,50,12),t.beginPath(),t.moveTo(56,188),t.lineTo(56,212),t.moveTo(200,188),t.lineTo(200,212),t.stroke(),t.beginPath(),t.moveTo(128,112),t.lineTo(92,112),t.lineTo(128,40),t.lineTo(164,112),t.closePath(),t.fill();let n=new Ft(e);return n.colorSpace=ot,n.anisotropy=4,n}async function Kb(s,e,t){let n=await Promise.all([0,1,2].map(r=>t.includes(r)?s.glb(`welt/modelle/${e}_lod${r}.glb`):Promise.resolve(null))),i=n.find(r=>r);return{name:e,stufen:n,extras:i?{...i.scene.userData||{}}:{},da:!!i}}function jb(s,e){let t=wt(6),n=s.woerter,i=new Q(new st(25+Tp,82),s.strasse.zusatzMaterial(Ts(()=>{},64,64)));i.rotation.x=-Math.PI/2,i.position.set((Tp-25)/2,.004,7),i.name="boden:vorplatz",e.add(i);let r=Iu(WT),a=Iu(qT),o=Iu(XT),l=Iu(KT),c=new Q(ar(r,a,48),s.strasse.zusatzMaterial(qb(!0))),h=new Q(ar(o,l,48),s.strasse.zusatzMaterial(qb(!1)));for(let V of[c,h])V.position.y=.012,V.frustumCulled=!1,V.name="fahrbahn:tankstelle",e.add(V);{let V=Ts((Ie,O,Me)=>{Ie.lineWidth=6,Ie.beginPath(),Ie.moveTo(0,Me-5),Ie.lineTo(O,Me-5),Ie.stroke(),Ie.setLineDash([24,24]),Ie.beginPath(),Ie.moveTo(0,5),Ie.lineTo(O,5),Ie.stroke()}),[q,$,K]=Vb.ein,[J,me,Ee]=Vb.aus,pe=bi([-3.62,q],[-3.62,K]),xe=Ie=>{let O=q+(K-q)*Ie;return O<$?bi([-3.62,q],[-7.1,$])((O-q)/($-q)):bi([-7.1,$],[-7.1,K])((O-$)/(K-$))},Ce=bi([-3.62,J],[-3.62,Ee]),Ze=Ie=>{let O=J+(Ee-J)*Ie;return O<me?bi([-7.1,J],[-7.1,me])((O-J)/(me-J)):bi([-7.1,me],[-3.62,Ee])((O-me)/(Ee-me))};for(let[Ie,O]of[[pe,xe],[Ce,Ze]]){let Me=new Q(ar(Ie,O,48),s.strasse.zusatzMaterial(V));Me.position.y=.012,Me.frustumCulled=!1,Me.name="fahrbahn:tankstelle",e.add(Me)}s.strasse.uniforms.randAus2.value.set(t+q,t+Ee)}{let V=(K,J,me)=>Array.from({length:J+1},(Ee,pe)=>{let xe=pe/J,Ce=K(xe);return[Ce.x,Ce.z,Wb*me(xe)]}),q=new Ne({color:7369850,roughness:.88,side:Ct}),$=[...V(r,16,K=>yt(0,.32,K)),[Tp,22,Wb],...V(o,16,K=>yt(1,.68,K))];for(let K of[$,V(a,16,J=>yt(0,.35,J)*yt(1,.82,J)),V(l,16,J=>yt(0,.18,J)*yt(1,.65,J))]){let J=new Q(jT(K),q);J.frustumCulled=!1,e.add(J)}}let u=new it({color:10132640});for(let V of[-1,5,11,17]){let q=new Q(new st(5,.12),u);q.rotation.x=-Math.PI/2,q.position.set(-13.4,.01,V),e.add(q)}let d=[[-16.8,2,"frei"],[-16.8,8,"frei"],[-16.8,14,"belegt"]].map(([V,q,$])=>{let K=new lt;K.position.set(V,0,q),K.rotation.y=Math.PI/2;let J=new Q(new He(.46,1.7,.3).translate(0,.85,0),new Ne({color:12567238,roughness:.6}));K.add(J);let me=$==="belegt"?Ke(4,.35,.25):Ke(.35,4,1.2),Ee=Nn(me,1.8);return Ee.position.set(0,1.2,-.3),K.add(Ee),e.add(K),{s:K,vorl:J,glut:Ee,art:$,aktuell:J,modell:null}}),p=vn(n.frei||"Frei",{punkt:"gruen",hoehe:.8});p.position.set(-16.8,2.9,2),e.add(p);let b=vn(n.belegt||"Belegt",{punkt:"rot",hoehe:.8});b.position.set(-16.8,2.9,14),e.add(b);let m=Xb(n.frei||"Frei",!1),g=Xb(n.belegt||"Belegt",!0),_=wn(Ke(.4,4.5,1.4)),E=wn(Ke(5,.45,.3)),x=-15.5,M=14,v=s.convoy.parkendesAuto(2768174,new R(x+2.3,0,t+M),-Math.PI/2),S=new lt;S.add(new Q(new He(.13,.03,.17),new Ne({color:723982,roughness:.4,metalness:.5})));let y=new Q(new Mn(.012,8,6),wn(Ke(.3,3,4)));y.position.set(0,.02,.05),S.add(y),v.g.add(S);let w=new Ne({color:657930,roughness:.9}),P=new Q(new ht,w);P.frustumCulled=!1,s.szene.add(P),e.updateMatrixWorld(!0),e.attach(v.g),e.attach(P);let I=new R(-16.68,.82,t+M),D=new R,H=()=>{let V=v.laenge||4.6,q=v.pos&&v.pos.vornL?v.pos.vornL:null;v.g.position.x=x+V/2,S.position.set(q?q.x*.55:.5,q?Math.max(.6,q.y+.3):.66,V/2-.5),S.rotation.x=-.12,v.g.updateMatrixWorld(!0),S.getWorldPosition(D);let $=[];for(let K=0;K<=5;K++){let J=K/5,me=Math.sin(Math.PI*J);$.push(new R(Wt(I.x,D.x,J),Wt(I.y,D.y,J)-.5*me,Wt(I.z,D.z,J)+.07*Math.sin(J*7)))}P.geometry.dispose(),P.geometry=new Oo(new Ws($),24,.018,8,!1)};H();let C=new Fn(14217471,0,9,2);C.position.set(-15.6,2.2,8),e.add(C);let U=new lt;U.position.set(-14.5,0,32);for(let[V,q]of[[-3.2,-3.2],[3.2,-3.2],[-3.2,3.2],[3.2,3.2]])U.add(new Q(new Nt(.2,.22,5.2,12).translate(V,2.6,q),In));U.add(new Q(new He(11,.5,9.5).translate(0,5.45,0),new Ne({color:2369582,roughness:.6,metalness:.2})));let L=wn(Ke(.6,2.2,2.8));U.add(new Q(new He(11,.4,.08).translate(0,5.2,4.75),L)),U.add(new Q(new He(.08,.4,9.5).translate(5.5,5.2,0),L)),U.add(new Q(new He(.08,.4,9.5).translate(-5.5,5.2,0),L));for(let[V,q]of[[-2.6,-2.4],[0,-2.4],[2.6,-2.4],[-2.6,2.4],[0,2.4],[2.6,2.4]]){let $=new Q(new st(1.8,.6),wn(Ke(7,7,8)));$.rotation.x=Math.PI/2,$.position.set(V,5.18,q),U.add($)}let B=[[-1.8,0],[1.8,0]].map(([V,q])=>{let $=new lt;$.position.set(V,0,q),$.rotation.y=Math.PI/2;let K=new Q(new He(.7,1.6,.5).translate(0,.8,0),new Ne({color:13159117,roughness:.5}));return $.add(K),U.add($),{h:$,vorl:K}}),N=new Fn(14674175,0,30,2);N.position.set(0,4.7,0),U.add(N),e.add(U);let z=new lt;z.position.set(-8.8,0,24),z.rotation.y=Math.PI/2+.25;let W=(()=>{let V=document.createElement("canvas");V.width=512,V.height=640;let q=V.getContext("2d");q.fillStyle="#0d1116",q.fillRect(0,0,512,640);let[$,K,J]=(n.preise||"Diesel,Super,Preise live in FREQ").split(",");q.fillStyle="#2cb8e3",q.fillRect(0,0,512,110),q.fillStyle="#06252d",q.font=`700 54px ${nt}`,q.textAlign="center",q.textBaseline="middle",q.beginPath(),q.moveTo(256,20),q.quadraticCurveTo(300,70,256,92),q.quadraticCurveTo(212,70,256,20),q.fill(),q.fillStyle="#fff",q.font=`600 46px ${nt}`,q.textAlign="left";for(let Ee=0;Ee<2;Ee++)q.fillStyle="rgba(255,255,255,0.08)",q.fillRect(24,150+Ee*170,464,130),q.fillStyle="#fff",q.fillText([$,K][Ee].trim(),44,215+Ee*170),q.fillStyle="#ffd60a",q.font=`700 58px ${nt}`,q.textAlign="right",q.fillText("\u2014,\u2014\u2014",468,215+Ee*170),q.font=`600 46px ${nt}`,q.textAlign="left";q.fillStyle="#2cb8e3",q.font=`600 34px ${nt}`,q.textAlign="center",q.fillText((J||"Preise live in FREQ").trim(),256,560);let me=new Ft(V);return me.colorSpace=ot,me.anisotropy=4,me.minFilter=en,me})(),Y=new it({map:W}),ae=new Q(new st(1.44,1.84),Y);ae.position.set(0,3.4,0),z.add(ae),z.add(new Q(new Nt(.08,.08,2.4,12).translate(0,1.2,0),In)),e.add(z);let he=vn(n.offen||"Offen bis 22:00",{punkt:"gruen",hoehe:.95});he.position.set(-9,6.6,32),e.add(he);let ce=new lt;ce.position.set(-22,0,-18);let _e=new Q(new qi(4.2,28),new Ne({color:2369323,roughness:1}));_e.rotation.x=-Math.PI/2,_e.position.set(-.4,.008,.2),ce.add(_e);let $e=new Ne({color:5914410,roughness:.82}),ne=new Ne({color:3811352,roughness:.9});for(let[V,q]of[[-.7,.42],[0,.8],[.7,.42]]){let $=q>.5?4:2,K=q/$;for(let J=0;J<$;J++)ce.add(new Q(new He(1.8,.05,K-.02).translate(0,V===0?.76:.48,V-q/2+K*(J+.5)),$e))}for(let V of[-.7,.7]){ce.add(new Q(new He(.08,.74,.08).translate(V,.37,0),ne)),ce.add(new Q(new He(.08,.06,1.7).translate(V,.44,0),ne));for(let q of[-.7,.7])ce.add(new Q(new He(.08,.46,.08).translate(V,.23,q),ne))}let oe=new Ne({color:3817029,roughness:.55,metalness:.6});ce.add(new Q(new Nt(.04,.05,2.6,10).translate(-1.6,1.3,.8),oe));let Te=new Q(new Mn(.14,14,10),wn(Ke(8,5,2)));Te.position.set(-1.6,2.62,.8),ce.add(Te);let ke=Nn(Ke(2.6,1.6,.6),3);ke.position.copy(Te.position),ce.add(ke);let de=new Fn(16757866,0,10,2);de.position.copy(Te.position),ce.add(de);let Oe=new lt;Oe.position.set(1.7,0,-1.3),Oe.add(new Q(new Nt(.2,.18,.9,16).translate(0,.45,0),new Ne({color:2046762,roughness:.6,metalness:.3}))),Oe.add(new Q(new Nt(.22,.22,.08,16).translate(0,.94,0),new Ne({color:1452574,roughness:.5,metalness:.4}))),Oe.add(new Q(new He(.18,.08,.05).translate(0,.8,.2),new Ne({color:329223}))),ce.add(Oe);let gt=new lt;gt.position.set(5.2,0,5.5),gt.rotation.y=Math.PI/2+.3,gt.add(new Q(new Nt(.035,.035,2.2,10).translate(0,1.1,0),oe));let le=new Q(new st(.6,.6),new Ne({map:YT(),roughness:.5,side:Ct}));le.position.set(0,2.25,.02),gt.add(le),ce.add(gt),ce.traverse(V=>{V.isMesh&&V.layers.enable(Dt)}),e.add(ce);let fe=vn(n.pause||"Pause? Rastplatz in 2 km",{punkt:"cyan",hoehe:.85});fe.position.set(-22,2.6,-18),e.add(fe);let ve=s.convoy.parkendesAuto(15000026,new R(wp.x,0,t+wp.z),wp.drehung,98);e.updateMatrixWorld(!0),e.attach(ve.g);let be=new Q(new ht,wn(Ke(1.5,.95,.42)));{let V=(q,$,K)=>{let J=2.1-K/2,me=2.1+K/2,Ee=q-$/2,pe=q+$/2,xe=1.116;return[xe,J,pe,xe,J,Ee,xe,me,Ee,xe,J,pe,xe,me,Ee,xe,me,pe]};be.geometry.setAttribute("position",new ft([...V(-.3,1.04,.54),...V(-2.2,.74,.54)],3))}be.visible=!1,be.frustumCulled=!1,be.layers.enable(Dt),ve.g.add(be);let Se=[];for(let[V,q]of[[-7.75,-16],[-7.75,30]]){e.add(new Q(new Nt(.05,.07,4.2,8).translate(V,2.1,q),In));let $=new Q(new Mn(.16,12,8),wn(Ke(8,8,9)));$.position.set(V,4.25,q),e.add($);let K=Nn(Ke(2.2,2.3,2.6),1.1);K.position.copy($.position),e.add(K),Se.push(K)}let je=[],ze=[],et=0,ie=!1,F=!1,Fe=1,Xe=()=>{if(!F||!je.length)return;let V=s.umgebung&&s.umgebung.lichtPool;if(!(!V||typeof V.anmelden!="function"))try{let q=je.slice().sort(($,K)=>K.prioritaet-$.prioritaet).slice(0,et);for(let $=ze.length-1;$>=0;$--)q.includes(ze[$].a)||(V.abmelden(ze[$].eintrag),ze.splice($,1));for(let $ of q)ze.some(K=>K.a===$)||ze.push({a:$,eintrag:V.anmelden($.objekt,{prioritaet:$.prioritaet})});ie=q.length>0,F=!1}catch{}},k=[],T=(V,q)=>{let $=qh(V,q);return k.push({lod:$,indizes:V.stufen.map((K,J)=>K?J:-1).filter(K=>K>=0)}),$},j=!1,Z=!1;return ts(s.welt&&s.welt.renderer,e),{eigeneModelle:!1,async ladeModelle(V,q){let $=q.stufeName||"hoch",K=$==="hoch"?[1,2]:$==="mittel"?[1,2]:[2],[J,me,Ee]=await Promise.all([Kb(V,"ladesaeule",[at(q.stufe.lod|0,0,2)]),Kb(V,"tankstelle",K),$==="hoch"?V.textur("welt/modelle/tankstelle_lightmap.webp",{srgb:!0,wiederholen:!1}):Promise.resolve(null)]);if(J&&J.da){for(let pe of d){let xe=T(J,q.stufe.lodWeite),Ce=pe.art==="belegt";xe.traverse(Ie=>{if(!Ie.isMesh)return;let O=Ie.material&&Ie.material.name||"";Ie.name==="ladesaeule_display"||O==="licht_ladesaeule_display"?Ie.material=new it({map:Ce?g:m}):(Ie.name==="ladesaeule_status"||O==="licht_ladesaeule_status")&&(Ie.material=Ce?E:_)});for(let Ie of xe.levels)Ii(Ie.object);pe.s.remove(pe.aktuell),pe.s.add(xe),pe.aktuell=xe,pe.modell=xe,pe.glut.scale.setScalar(1.1),pe.glut.position.set(0,1.26,.2);let Ze=xe.levels[0]&&xe.levels[0].object;if(Ze)for(let Ie of zr(Ze))je.push({objekt:Ie,prioritaet:Ce?2:1})}j=!0}if(me&&me.da){let pe=T(me,q.stufe.lodWeite),xe=me.extras||{},Ce=!1;if(pe.traverse(Me=>{if(!Me.isMesh)return;let ue=Me.material&&Me.material.name||"";(/^preistafel_flaeche/.test(Me.name)||ue==="licht_preistafel")&&(Me.material=Y,Ce=!0)}),Ee&&me.stufen[0]){Ee.flipY=!1,Ee.channel=1,Ee.colorSpace=ot;let Me=pe.levels[0]&&pe.levels[0].object;Me&&Me.traverse(ue=>{if(!ue.isMesh)return;let Re=Array.isArray(ue.material)?ue.material:[ue.material];for(let De of Re)De&&De.isMeshStandardMaterial&&ue.geometry.attributes.uv1&&(De.lightMap=Ee,De.lightMapIntensity=13,De.needsUpdate=!0)})}for(let Me of pe.levels)Ii(Me.object);let Ze=N.parent===U;U.clear(),Ze&&U.add(N),U.add(pe),pe.rotation.y=Math.PI/2;let Ie=typeof xe.tiefe_m=="number"?xe.tiefe_m:9.5;U.position.x=-(8.8+Ie/2),N.position.set(0,Math.max(3,(typeof xe.dach_hoehe_m=="number"?xe.dach_hoehe_m:5)-.6),0),Ce&&(z.visible=!1,he.position.set(U.position.x+5,Math.max(7.5,(typeof xe.hoehe_m=="number"?xe.hoehe_m:5.5)+2.2),32));let O=pe.levels[0]&&pe.levels[0].object;if(O)for(let Me of zr(O))je.push({objekt:Me,prioritaet:/dach/.test(Me.name)?2:1});Z=!0}j&&Z&&(this.eigeneModelle=!0),H(),be.visible=(ve.laenge||0)>6,F=!0,Xe(),ts(q.renderer,e)},setzeRequisiten(V){if(!j)for(let q of d){let $=Zh(V,q.art==="belegt"?"Ladesaeule_belegt":"Ladesaeule_frei");$&&(q.s.remove(q.aktuell),q.s.add($),q.aktuell=$,$.traverse(K=>{K.isMesh&&/^Display/.test(K.name)&&(to(K.geometry),K.material=new it({map:q.art==="belegt"?g:m}))}))}if(!Z){for(let $ of B){let K=Zh(V,"Zapfsaeule");K&&($.h.remove($.vorl),$.h.add(K))}let q=Zh(V,"Preistafel");q&&(z.clear(),z.add(q),q.traverse($=>{$.isMesh&&$.name==="Tafel"&&(to($.geometry),$.material=Y)}))}},setzeStufe(V){for(let{lod:q,indizes:$}of k)q.levels.forEach((K,J)=>{K.distance=J===0?0:Nr[$[J]]*V.lodWeite});Fe=V.lichter>0?1:0,et=V.lichter|0,F=!0},update(V,q,$,K,J){P.visible=v.g.visible=q>.01,Xe(),N.intensity=(ie&&Z?30:110)*q*Fe,!N.parent&&e.visible&&s.umgebung&&s.umgebung.leiheLicht&&(U.updateWorldMatrix(!0,!1),s.umgebung.leiheLicht(JT.copy(N.position).applyMatrix4(U.matrixWorld),N.color,N.intensity,N.distance)),de.intensity=16*q*Fe,C.intensity=(j&&!ie?14:0)*q*Fe;for(let pe=0;pe<d.length;pe++)d[pe].glut.material.opacity=(.45+.2*Math.sin($*2+pe))*q*(j?.5:1);ke.material.opacity=(.7+.1*Math.sin($*7.3)*Math.sin($*3.1))*q;for(let pe of Se)pe.material.opacity=.45*q;let me=J.kamera.aspect<.9;tn(fe,q*(me?mt(V,-.1,.08,.3,.38):mt(V,-.1,.08,.4,.5))),Li(fe,J.kamera);let Ee=q*(me?mt(V,.4,.46,.55,.61):mt(V,.1,.22,.66,.78));tn(p,Ee),tn(b,Ee),Li(p,J.kamera),Li(b,J.kamera),tn(he,q*mt(V,.35,.48,.6,.68)),Li(he,J.kamera)}}}var WT,qT,XT,KT,Vb,Tp,Wb,Iu,wp,JT,Yb=ut(()=>{Pt();Ni();ti();ni();$s();ln();ci();Pu();wl();WT=[[-3.62,-58],[-3.62,-46],[-5.6,-36],[-7.2,-30]],qT=[[-7.1,-58],[-8.6,-50],[-12.2,-40],[-13.2,-31]],XT=[[-7.2,44],[-5.6,50],[-3.62,58],[-3.62,70]],KT=[[-13.2,45],[-12.2,54],[-8.6,62],[-7.1,70]],Vb={ein:[-128,-100,-58],aus:[70,115,150]},Tp=-7.2,Wb=.13,Iu=([s,e,t,n])=>i=>{let r=1-i;return new R(r*r*r*s[0]+3*r*r*i*e[0]+3*r*i*i*t[0]+i*i*i*n[0],0,r*r*r*s[1]+3*r*r*i*e[1]+3*r*i*i*t[1]+i*i*i*n[1])};wp={x:-26.4,z:-17.4,drehung:.08};JT=new R});function ZT(s){let n=document.createElement("canvas");n.width=1024,n.height=384;let i=n.getContext("2d");i.fillStyle="#05070a",i.fillRect(0,0,1024,384);let r=i.createLinearGradient(0,0,0,384);r.addColorStop(0,"rgba(44,184,227,0.10)"),r.addColorStop(1,"rgba(44,184,227,0)"),i.fillStyle=r,i.fillRect(0,0,1024,384);let a=(l,c,h,u,f,d,p)=>{let b=Math.PI*.75,m=Math.PI*2.25;i.lineCap="round",i.lineWidth=10,i.strokeStyle="rgba(255,255,255,0.10)",i.beginPath(),i.arc(l,c,h,b,m),i.stroke(),i.strokeStyle="#2cb8e3",i.beginPath(),i.arc(l,c,h,b,b+(m-b)*u),i.stroke(),i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=3;for(let g=0;g<=p;g++){let _=b+(m-b)*g/p;i.beginPath(),i.moveTo(l+Math.cos(_)*(h-18),c+Math.sin(_)*(h-18)),i.lineTo(l+Math.cos(_)*(h-30),c+Math.sin(_)*(h-30)),i.stroke()}i.fillStyle="#fff",i.font=`700 88px ${nt}`,i.textAlign="center",i.textBaseline="middle",i.fillText(f,l,c-6),i.fillStyle="rgba(235,235,245,0.7)",i.font=`500 26px ${nt}`,i.fillText(d,l,c+56)};a(230,190,150,.34,"68",s.einheit||"km/h",10),a(794,190,150,.26,"2.1","\xD7 1000",8),i.strokeStyle="#fff",i.lineWidth=9,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(484,150),i.lineTo(484,104),i.lineTo(516,104),i.stroke(),i.beginPath(),i.moveTo(500,88),i.lineTo(520,104),i.lineTo(500,120),i.stroke(),i.fillStyle="#fff",i.font=`700 40px ${nt}`,i.textAlign="center",i.textBaseline="middle",i.fillText(s.abstand||"350 m",512,190),i.strokeStyle="rgba(255,255,255,0.75)",i.lineWidth=3,i.strokeRect(440,236,132,44),i.fillStyle="rgba(255,255,255,0.75)",i.fillRect(572,248,6,20),i.fillStyle="#30d158",i.fillRect(446,242,120*.82,32),i.fillStyle="rgba(235,235,245,0.85)",i.font=`600 28px ${nt}`,i.fillText("82 %",512,314);let o=new Ft(n);return o.colorSpace=ot,o.anisotropy=4,o.minFilter=en,o}function Jb(s,e){let t=s.convoy.autos[0],n=s.woerter,i=new lt,r=new Ne({color:1316120,roughness:.85});i.add(new Q(new He(1.76,.24,.6).translate(0,.76,.98),r)),i.add(new Q(new He(.42,.42,1).translate(0,.38,.5),r));let a=new it({map:s.carplay.textur,side:Ct}),o=new Q(new st(.66,.31),a);o.position.set(-.08,1,.74),o.rotation.set(.2,Math.PI,0),i.add(o);let l=new Q(new Ai(.19,.022,10,36),new Ne({color:1710879,roughness:.6}));l.position.set(.4,.86,.58),l.rotation.x=-1.25,i.add(l);let c=new lt;c.add(i),c.visible=!1;let h=new Fn(2930915,0,2.5,2);h.position.set(-.08,1,.6),c.add(h),t.g.add(c),ts(s.welt&&s.welt.renderer,c);let u=ZT(n),f=new it({map:u,side:Ct}),d=wn(Ke(.22,.8,1.05)),p=i,b=null,m=[],g=!1,_=null,E=1,x=new R(.37,1.1,.134),M=[],v=new R,S=wn(Ke(.12,.3,.4)),y=new Set,w=(L,B)=>{if(!y.has(L)){if(y.add(L),L.emissive){let N=L.emissive,z=N.r<N.g&&N.r<N.b&&N.g+N.b>.6;N.setHex(z?668480:0),L.emissiveIntensity=1}/^Leder/.test(B)?(L.color.setHex(1974308),L.roughness=.62,L.metalness=0):/Alcantara|Teppich/.test(B)?(L.color.setHex(723983),L.roughness=.95,L.metalness=0):/Metall|Chrom/.test(B)?(L.color.setHex(3816772),L.roughness=.35,L.metalness=.85):/Naht/.test(B)?(L.color.setHex(2930915),L.emissive&&L.emissive.setHex(866888),L.roughness=.6):/Glas/.test(B)?(L.color.setHex(7243672),L.transparent=!0,L.opacity=.045,L.roughness=.12,L.metalness=0,L.depthWrite=!1,L.envMapIntensity=.05,L.side=Ct):/Display_Rahmen/.test(B)?(L.color.setHex(329223),L.roughness=.5):(L.color.setHex(1184534),L.roughness=.8,L.metalness=.05),L.map&&(L.map=null),L.needsUpdate=!0}},P=L=>{let B=null;if(L.traverse(_e=>{!B&&_e.isMesh&&(_e.name==="Instrumente"||_e.material&&_e.material.name==="Instrumente")&&(B=_e)}),!B)return;B.geometry.computeBoundingBox();let N=B.geometry.boundingBox,z=N.getSize(new R),W=N.getCenter(new R),Y=Math.max(.2,z.x*.92),ae=Y*.42,he=new Q(new st(Y,ae),f);he.position.set(W.x,N.max.y+ae*.36,N.max.z-.02),he.rotation.x=-.14,he.frustumCulled=!1;let ce=new Q(new He(Y*1.1,ae*1.16,.03),new Ne({color:526603,roughness:.55,metalness:.1}));ce.position.set(0,0,-.018),he.add(ce),B.add(he),B.material=new Ne({color:658189,roughness:.6})},I=L=>{L.traverse(B=>{if(!B.isMesh)return;B.frustumCulled=!1,B.layers.disable(Dt);let N=B.material&&B.material.name||"";/Glas/.test(N)&&(B.castShadow=!1,B.receiveShadow=!1,B.renderOrder=4,B.visible=!1),B.name==="Display"||N==="display"||N==="Display"?(to(B.geometry),B.material=a):B.name==="Instrumente"||N==="Instrumente"?(to(B.geometry),B.material=f):N==="licht_ambiente"?B.material=d:N==="Bildschirm_klein"?B.material=S:B.material&&B.material.isMeshStandardMaterial&&(w(B.material,N),B.material.envMapIntensity=.8)})},D=0,H=!1,C=[],U=()=>{if(!H||!m.length)return;let L=s.umgebung&&s.umgebung.lichtPool;if(!(!L||typeof L.anmelden!="function"))try{for(let B of C.splice(0))L.abmelden(B);for(let B of m.slice(0,D))B.userData.staerke=Math.min(+B.userData.staerke||3,1.8),C.push(L.anmelden(B,{prioritaet:2}));g=C.length>0,H=!1}catch{}};return{innen:c,eigeneModelle:!1,get masse(){return _},get skala(){return E},get augen(){return x},async ladeModelle(L,B){let N=at(Math.max(1,B.stufe.lod|0),1,2),z=await Ur(L,"innenraum",N,N);if(!z||!z.da)return;_=z.extras||null,b=qh(z,B.stufe.lodWeite),M=z.stufen.map((he,ce)=>he?ce:-1).filter(he=>he>=0),b.rotation.y=Math.PI;let W=typeof _.hoehe_m=="number"?_.hoehe_m:1.6,Y=new on;try{Y.setFromObject(t.modell)}catch{Y.makeEmpty()}let ae=Y.isEmpty()?1.2:Y.max.y-Y.min.y;E=at((ae-.03)/W,.55,1),ae>1.1&&ae<1.45&&Math.abs(W-1.6)<.2&&(E=.815*Ss),b.scale.setScalar(E),I(b),P(b),m=zr(b);for(let he of b.levels)Ii(he.object,{behalten:/^(Display|Instrumente|licht_ambiente)$/});typeof _.augenpunkt_x_m=="number"&&x.set(-_.augenpunkt_x_m*E,(_.augenpunkt_z_m||1.1)*E,(_.augenpunkt_y_m||.134)*E),c.remove(p),c.add(b),p=b,m[0]&&(m[0].getWorldPosition(h.position),c.worldToLocal(h.position),h.color.copy(Fa(m[0],2930915))),this.eigeneModelle=!0,H=!0,U(),ts(B.renderer,c)},setzeInnenraum(L){if(b||!L)return;let B=L.scene.clone(!0);B.rotation.y=Math.PI,I(B),c.remove(p),c.add(B),p=B},setzeStufe(L){h.userData.stufeAn=L.lichter>0,h.userData.an=h.userData.stufeAn&&!g,D=L.lichter>=6?2:L.lichter>=3?1:0,H=!0,b&&b.levels.forEach((B,N)=>{B.distance=N===0?0:Nr[M[N]]*L.lodWeite})},update(L,B,N,z,W){c.visible=B>.02,v.copy(W.kamera.position),t.g.worldToLocal(v),t.modell.visible=!(B>.05&&Math.abs(v.x)<.95&&v.y>.3&&v.y<1.4&&v.z>-1.3&&v.z<3),U(),h.intensity=(!g&&h.userData.stufeAn!==!1?.5:0)*B,s.convoy.innenGlas=Math.max(s.convoy.innenGlas,B*mt(L,-.2,.05,.86,.97)),B>.05&&s.carplay.zeichne(L,W.g,N)}}}var Zb=ut(()=>{Pt();Ni();ti();ni();$s();ln();ci();sr();Pu()});function $b(s,e){let t=wt(8),n=new R,i=Ob(s,t);e.add(i.gruppe);let r=Gb(s,0);e.add(r.gruppe);let a=new R(Ln,0,(8+lr.ANKER_AN)*150);return{eigeneModelle:!0,async ladeModelle(o){this.eigeneFahrzeuge=await i.ladeModelle(o)},update(o,l,c,h,u){let f=s.umgebung.himmelUniforms,d=mt(o,lr.WEITE_AN-.05,lr.WEITE_VOLL,2,3);f.aurora.value=Math.max(f.aurora.value,.16*l*mt(o,.35,.65,2,3)),f.sterne.value=Math.max(f.sterne.value,.6+l*mt(o,.25,.6,2,3)*.7),i.update(o,l,c,h,u.kamera),r.update(l*mt(o,-.3,.1,2,3)*(.5+.5*d),c),"davonfahren"in s.convoy&&(s.convoy.davonfahren=Math.max(s.convoy.davonfahren||0,l*yt(lr.WEITE_AN,lr.WEITE_VOLL,o)));let p=s.welt&&s.welt.fahrt;p&&(p.anker=a,p.ankerMisch=l*yt(lr.ANKER_AN,lr.ANKER_VOLL,o)),n.set(0,0,-30).applyMatrix4(u.kamera.matrixWorld),s.funken.update(c,n,l*mt(o,.55,.75,2,3),u.dpr)}}}var Qb=ut(()=>{Pt();sr();ln();ci();Pu()});async function ex(s,e=null){let t=[null,Tb,Rb,Ib,Nb,Bb,jb,Jb,$b],n=[];for(let i=0;i<za;i++){let r=new lt;r.position.z=wt(i),s.szene.add(r);let a=t[i]?t[i](s,r):{update(){}};a.gruppe=r,n.push(a),e&&await e()}return n}function tx(s,e){let t=Math.max(0,Math.abs(e-(s+.5))-.5);return at(1-t/.5)}var nx=ut(()=>{Pt();ln();ci();wb();Ab();Lb();Ub();Hb();Yb();Zb();Qb()});var Lu,ix=ut(()=>{Pt();Lu=class extends qo{constructor(e){super(e),this.type=xn}parse(e){let a=function(y,w){switch(y){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},u=function(y,w,P){w=w||1024;let D=y.pos,H=-1,C=0,U="",L=String.fromCharCode.apply(null,new Uint16Array(y.subarray(D,D+128)));for(;0>(H=L.indexOf(`
`))&&C<w&&D<y.byteLength;)U+=L,C+=L.length,D+=128,L=String.fromCharCode.apply(null,new Uint16Array(y.subarray(D,D+128)));return-1<H?(P!==!1&&(y.pos+=C+H+1),U+L.slice(0,H)):!1},f=function(y){let w=/^#\?(\S+)/,P=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,L;for((y.pos>=y.byteLength||!(U=u(y)))&&a(1,"no header found"),(L=U.match(w))||a(3,"bad initial token"),C.valid|=1,C.programtype=L[1],C.string+=U+`
`;U=u(y),U!==!1;){if(C.string+=U+`
`,U.charAt(0)==="#"){C.comments+=U+`
`;continue}if((L=U.match(P))&&(C.gamma=parseFloat(L[1])),(L=U.match(I))&&(C.exposure=parseFloat(L[1])),(L=U.match(D))&&(C.valid|=2,C.format=L[1]),(L=U.match(H))&&(C.valid|=4,C.height=parseInt(L[1],10),C.width=parseInt(L[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},d=function(y,w,P){let I=w;if(I<8||I>32767||y[0]!==2||y[1]!==2||y[2]&128)return new Uint8Array(y);I!==(y[2]<<8|y[3])&&a(3,"wrong scanline width");let D=new Uint8Array(4*w*P);D.length||a(4,"unable to allocate buffer space");let H=0,C=0,U=4*I,L=new Uint8Array(4),B=new Uint8Array(U),N=P;for(;N>0&&C<y.byteLength;){C+4>y.byteLength&&a(1),L[0]=y[C++],L[1]=y[C++],L[2]=y[C++],L[3]=y[C++],(L[0]!=2||L[1]!=2||(L[2]<<8|L[3])!=I)&&a(3,"bad rgbe scanline format");let z=0,W;for(;z<U&&C<y.byteLength;){W=y[C++];let ae=W>128;if(ae&&(W-=128),(W===0||z+W>U)&&a(3,"bad scanline data"),ae){let he=y[C++];for(let ce=0;ce<W;ce++)B[z++]=he}else B.set(y.subarray(C,C+W),z),z+=W,C+=W}let Y=I;for(let ae=0;ae<Y;ae++){let he=0;D[H]=B[ae+he],he+=I,D[H+1]=B[ae+he],he+=I,D[H+2]=B[ae+he],he+=I,D[H+3]=B[ae+he],H+=4}N--}return D},p=function(y,w,P,I){let D=y[w+3],H=Math.pow(2,D-128)/255;P[I+0]=y[w+0]*H,P[I+1]=y[w+1]*H,P[I+2]=y[w+2]*H,P[I+3]=1},b=function(y,w,P,I){let D=y[w+3],H=Math.pow(2,D-128)/255;P[I+0]=Us.toHalfFloat(Math.min(y[w+0]*H,65504)),P[I+1]=Us.toHalfFloat(Math.min(y[w+1]*H,65504)),P[I+2]=Us.toHalfFloat(Math.min(y[w+2]*H,65504)),P[I+3]=Us.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let g=f(m),_=g.width,E=g.height,x=d(m.subarray(m.pos),_,E),M,v,S;switch(this.type){case qn:S=x.length/4;let y=new Float32Array(S*4);for(let P=0;P<S;P++)p(x,P*4,y,P*4);M=y,v=qn;break;case xn:S=x.length/4;let w=new Uint16Array(S*4);for(let P=0;P<S;P++)b(x,P*4,w,P*4);M=w,v=xn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:_,height:E,data:M,header:g.string,gamma:g.gamma,exposure:g.exposure,type:v,colorSpace:Tt,minFilter:bt,magFilter:bt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});var Rp,sx=ut(()=>{Rp=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var _=new Uint8Array(g.length),E=0;E<g.length;++E){var x=g.charCodeAt(E);_[E]=x>96?x-97:x>64?x-39:x+4}for(var M=0,E=0;E<g.length;++E)_[M++]=_[E]<60?n[_[E]]:(_[E]-60)*64+_[++E];return _.buffer.slice(0,M)}function l(g,_,E,x,M,v,S){var y=g.exports.sbrk,w=x+3&-4,P=y(w*M),I=y(v.length),D=new Uint8Array(g.exports.memory.buffer);D.set(v,I);var H=_(P,x,M,I,v.length);if(H==0&&S&&S(P,w,M),E.set(D.subarray(P,P+x*M)),y(P-y(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(g){var _={object:new Worker(g),pending:0,requests:{}};return _.object.onmessage=function(E){var x=E.data;_.pending-=x.count,_.requests[x.id][x.action](x.value),delete _.requests[x.id]},_}function p(g){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),E=new Blob([_],{type:"text/javascript"}),x=URL.createObjectURL(E),M=u.length;M<g;++M)u[M]=d(x);for(var M=g;M<u.length;++M)u[M].object.postMessage({});u.length=g,URL.revokeObjectURL(x)}function b(g,_,E,x,M){for(var v=u[0],S=1;S<u.length;++S)u[S].pending<v.pending&&(v=u[S]);return new Promise(function(y,w){var P=new Uint8Array(E),I=++f;v.pending+=g,v.requests[I]={resolve:y,reject:w},v.object.postMessage({id:I,count:g,size:_,source:P,mode:x,filter:M},[P.buffer])})}function m(g){var _=g.data;self.ready.then(function(E){if(!_.id)return self.close();try{var x=new Uint8Array(_.count*_.size);l(E,E.exports[_.mode],x,_.count,_.size,_.source,E.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:x},[x.buffer])}catch(M){self.postMessage({id:_.id,count:_.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,_,E,x,M){l(r,r.exports.meshopt_decodeVertexBuffer,g,_,E,x,r.exports[c[M]])},decodeIndexBuffer:function(g,_,E,x){l(r,r.exports.meshopt_decodeIndexBuffer,g,_,E,x)},decodeIndexSequence:function(g,_,E,x){l(r,r.exports.meshopt_decodeIndexSequence,g,_,E,x)},decodeGltfBuffer:function(g,_,E,x,M,v){l(r,r.exports[h[M]],g,_,E,x,r.exports[c[v]])},decodeGltfBufferAsync:function(g,_,E,x,M){return u.length>0?b(g,_,E,h[x],c[M]):a.then(function(){var v=new Uint8Array(g*_);return l(r,r.exports[h[x]],v,g,_,E,r.exports[c[M]]),v})}}})()});var $T,QT,ku,rx=ut(()=>{Pt();fp();ix();sx();$T=new Set(["welt/texturen/boden_farbe.webp","welt/texturen/boden_normal.webp","welt/texturen/asphalt_rauheit.webp","welt/texturen/nacht.hdr","welt/modelle/auto_cyber_lod1.glb","welt/modelle/ladesaeule_lod1.glb"]),QT={webp:"image/webp",png:"image/png",jpg:"image/jpeg",glb:"model/gltf-binary",hdr:"application/octet-stream",json:"application/json"},ku=class{constructor(e,t=""){this.basis=e||"",this.version=t||"",this.gltf=new Va;try{Rp.useWorkers(2)}catch{}this.gltf.setMeshoptDecoder(Rp),this.tex=new wr,this.rgbe=new Lu,this.bericht={},this.klein=!1,this.etappe="basis",this.angefragt=[],this.speicher=new Map,this.fortschritt={geladen:0,gesamt:0,dateien:0,fertig:0}}url(e){return this.basis+e+(this.version?(e.includes("?")?"&":"?")+"v="+this.version:"")}async listen(e){try{let t=await fetch(this.url("welt/vorab.json"));if(!t.ok)return null;let n=await t.json(),i=n&&n.stufen&&n.stufen[e];return i&&!Array.isArray(i)?i:null}catch{return null}}vorab(e){if(!Array.isArray(e)||!e.length)return Promise.resolve(!1);let t=this.fortschritt,n=[];for(let[i,r]of e){if(this.speicher.has(i))continue;t.gesamt+=r|0,t.dateien++;let a=(async()=>{try{let o=await fetch(this.url(i),{priority:"low"});if(!o.ok)throw new Error("HTTP "+o.status);let l=await o.blob(),c=l.type?l:new Blob([l],{type:QT[i.split(".").pop()]||""});return t.geladen+=r|0,t.fertig++,URL.createObjectURL(c)}catch(o){return t.gesamt-=r|0,t.fertig++,console.warn("Vorab fehlgeschlagen, l\xE4dt sp\xE4ter direkt",i,o),null}})();this.speicher.set(i,a),n.push(a)}return Promise.all(n).then(()=>!0)}pfad(e){return this.klein&&$T.has(e)?e.replace(/^(welt\/(?:texturen|modelle)\/)/,"$1klein/"):e}async quelle(e){this.angefragt.some(i=>i[0]===e)||this.angefragt.push([e,this.etappe]);let t=this.speicher.get(e);return(t?await t:null)||this.url(e)}freigeben(){for(let e of this.speicher.values())e.then(t=>{t&&URL.revokeObjectURL(t)});this.speicher.clear()}async textur(e,{srgb:t=!1,wiederholen:n=!0}={}){return e=this.pfad(e),this.tex.loadAsync(await this.quelle(e)).then(i=>(i.colorSpace=t?ot:Xt,n&&(i.wrapS=i.wrapT=Gn),i.anisotropy=8,this.bericht[e]="ok",i)).catch(i=>(this.bericht[e]="fehlt",console.warn("Textur fehlt",e,i),null))}async glb(e){return e=this.pfad(e),this.gltf.loadAsync(await this.quelle(e)).then(t=>(this.bericht[e]="ok",t)).catch(t=>(this.bericht[e]="fehlt",console.warn("Modell fehlt",e,t),null))}async hdr(e){return e=this.pfad(e),this.rgbe.loadAsync(await this.quelle(e)).then(t=>(t.mapping=wa,this.bericht[e]="ok",t)).catch(t=>(this.bericht[e]="fehlt",console.warn("HDRI fehlt",e,t),null))}}});function iw(s,e){let t=/(\d{1,2}):(\d{2})/.exec(String(s||"")),n=/(\d+)\s*min/i.exec(String(e||""));if(!t||!n)return"21:42";let i=parseInt(t[1],10)*60+parseInt(t[2],10)-parseInt(n[1],10);return i=(i%1440+1440)%1440,`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}var Al,ax,ox,ew,tw,lx,cx,Rn,Un,jn,_n,Rs,nw,Du,hx=ut(()=>{Pt();Ni();ln();Al="#2cb8e3",ax="#ff453a",ox="#5ac8fa",ew="#d61f26",tw="rgba(28,28,30,0.92)",lx="rgba(235,235,245,0.75)",cx="rgba(255,255,255,0.14)",Rn=1280,Un=600,jn=112,_n=700,Rs=392,nw=160,Du=class{constructor(e,t){this.w=e||{},this.logo=t||null,this.c=document.createElement("canvas"),this.c.width=Rn,this.c.height=Un,this.x=this.c.getContext("2d"),this.textur=new Ft(this.c),this.textur.colorSpace=ot,this.textur.anisotropy=4,this.textur.minFilter=bt,this.textur.magFilter=bt,this.textur.generateMipmaps=!1,this.schluessel="",this.zuletzt=-1,this.namen=(this.w.namen||"Anna,Ben,Mia,Tom").split(",").map(i=>i.trim()),this.uhr=iw(this.w.ankunft,this.w.rest);let n=String(this.w.blitzer||"Blitzer \xB7 800 m").split("\xB7");this.blitzerWeit=(n[1]||"800 m").trim(),this.raster(this.x,0),this.textur.needsUpdate=!0}zeichne(e,t,n){let i=e<.2?0:e<.3?1:2,r,a=!!(this.logo&&this.logo.complete&&this.logo.naturalWidth),o=0,l=1,c=0,h=0,u=0;i<2?(o=i===1?Math.round(yt(.2,.3,e)*60)/60:0,r=`${i}|${o.toFixed(3)}|${a?1:0}`):(l=Math.round(yt(.3,.37,e)*24)/24,c=Math.round((t-7)*nw/2)*2,h=Math.round(mt(e,.44,.49,.7,.76)*12)/12,u=e<.52?0:e<.6?1:2,r=`2|${l.toFixed(3)}|${c}|${h.toFixed(3)}|${u}`),r!==this.schluessel&&(n-this.zuletzt<(i<2?.08:.16)&&n>=this.zuletzt||(this.zuletzt=n,this.schluessel=r,i<2?this.raster(this.x,o):this.karte(this.x,c,l,h,u),this.textur.needsUpdate=!0))}kapsel(e,t,n,i,r,a){a=Math.min(a,i/2,r/2),e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.arcTo(t+i,n,t+i,n+a,a),e.lineTo(t+i,n+r-a),e.arcTo(t+i,n+r,t+i-a,n+r,a),e.lineTo(t+a,n+r),e.arcTo(t,n+r,t,n+r-a,a),e.lineTo(t,n+a),e.arcTo(t,n,t+a,n,a),e.closePath()}tafel(e,t,n,i,r,a){this.kapsel(e,t,n,i,r,a),e.fillStyle=tw,e.fill(),e.lineWidth=2,e.strokeStyle=cx,e.stroke()}breite(e,t,n){return e.font=n,e.measureText(t).width}seitenleiste(e,t){e.fillStyle=t?"rgba(14,14,18,0.82)":"#121216",e.fillRect(0,0,jn,Un),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(jn-1,0,1,Un),e.fillStyle="#fff",e.font=`700 34px ${nt}`,e.textAlign="center",e.textBaseline="middle",e.fillText(this.uhr,jn/2,44),e.fillStyle="rgba(255,255,255,0.85)";for(let n=0;n<4;n++)e.fillRect(jn/2-30+n*9,92-n*4,6,10+n*4);e.strokeStyle="rgba(255,255,255,0.7)",e.lineWidth=2,this.kapsel(e,jn/2+10,82,24,13,3),e.stroke(),e.fillStyle="rgba(255,255,255,0.7)",e.fillRect(jn/2+35,86,2,5),e.fillRect(jn/2+13,85,15,7),e.fillStyle="rgba(255,255,255,0.9)";for(let[n,i]of[[-15,-15],[3,-15],[-15,3],[3,3]])this.kapsel(e,jn/2+n,Un-58+i,12,12,3),e.fill();for(let n=0;n<3;n++){let i=[14,24,10][n];e.fillRect(jn/2-14+n*11,Un-124-i/2,6,i)}}raster(e,t){let n=e.createRadialGradient(Rn*.75,Un*.1,40,Rn*.6,Un*.4,900);n.addColorStop(0,"#18213a"),n.addColorStop(.55,"#0c0f18"),n.addColorStop(1,"#07080c"),e.fillStyle=n,e.fillRect(0,0,Rn,Un),this.seitenleiste(e,!1);let i=String(this.w.apps||"Telefon,Musik,Karten,Nachrichten,Podcasts,FREQ,Radio,Einstellungen").split(",").map(p=>p.trim()),r=["#1f8f7a","#d9522c","#2a5fa8","#5a63d6","#9a4a6e","#0b0d10","#b8761c","#4f5663"],a=150,o=270,l=252,c=jn+40+(o-a)/2,h=52,u=Math.max(0,i.findIndex(p=>/freq/i.test(p))),f=null,d=!!(this.logo&&this.logo.complete&&this.logo.naturalWidth);if(i.slice(0,8).forEach((p,b)=>{let m=c+b%4*o,g=h+Math.floor(b/4)*l,_=b===u,x=1-(_?yt(.05,.45,t)*(1-yt(.55,.9,t)):0)*.09;_&&(f=[m,g,a,a]),e.save(),e.translate(m+a/2,g+a/2),e.scale(x,x),e.translate(-a/2,-a/2);let M=e.createLinearGradient(0,0,0,a);M.addColorStop(0,"rgba(255,255,255,0.16)"),M.addColorStop(1,"rgba(0,0,0,0.12)"),this.kapsel(e,0,0,a,a,46),e.fillStyle=r[b%r.length],e.fill(),e.fillStyle=M,e.fill(),_&&(e.lineWidth=2,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke()),e.strokeStyle="#fff",e.fillStyle="#fff",e.lineWidth=11,e.lineCap="round",e.lineJoin="round";let v=a/2;switch(b){case 0:e.lineWidth=9,e.save(),e.translate(v,v),e.rotate(-.6),e.beginPath(),e.moveTo(-40,-14),e.quadraticCurveTo(-42,36,10,40),e.quadraticCurveTo(40,42,42,14),e.lineTo(30,4),e.lineTo(20,16),e.quadraticCurveTo(-8,10,-16,-20),e.lineTo(-6,-30),e.lineTo(-16,-42),e.closePath(),e.stroke(),e.restore();break;case 1:e.lineWidth=11;for(let S=0;S<5;S++){let y=[22,46,70,38,54][S];e.beginPath(),e.moveTo(v-44+S*22,v+y/2),e.lineTo(v-44+S*22,v-y/2),e.stroke()}break;case 2:e.lineWidth=10,e.beginPath(),e.moveTo(v,v+46),e.quadraticCurveTo(v-44,v-6,v-30,v-26),e.arc(v,v-18,30,Math.PI*1.2,Math.PI*1.8),e.quadraticCurveTo(v+44,v-6,v,v+46),e.closePath(),e.stroke(),e.beginPath(),e.arc(v,v-16,10,0,Math.PI*2),e.fill();break;case 3:e.lineWidth=9,this.kapsel(e,v-46,v-32,92,64,10),e.stroke(),e.beginPath(),e.moveTo(v-44,v-26),e.lineTo(v,v+6),e.lineTo(v+44,v-26),e.stroke();break;case 4:e.beginPath(),e.arc(v,v+6,9,0,Math.PI*2),e.fill(),e.lineWidth=8;for(let S of[26,44])e.beginPath(),e.arc(v,v+6,S,Math.PI*1.2,Math.PI*1.8),e.stroke(),e.beginPath(),e.arc(v,v+6,S,Math.PI*.2,Math.PI*.8),e.stroke();break;case 5:d?(this.logoC||(this.logoC=document.createElement("canvas"),this.logoC.width=this.logoC.height=216,this.logoC.getContext("2d").drawImage(this.logo,0,0,216,216)),e.drawImage(this.logoC,v-54,v-54,108,108)):(e.strokeStyle=Al,e.lineWidth=12,e.beginPath(),e.arc(v,v,40,Math.PI*.6,Math.PI*1.9),e.stroke());break;case 6:e.lineWidth=8,this.kapsel(e,v-44,v-10,88,54,12),e.stroke(),e.beginPath(),e.moveTo(v-20,v-10),e.lineTo(v+30,v-46),e.stroke(),e.beginPath(),e.arc(v-20,v+17,12,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(v+4,v+8),e.lineTo(v+34,v+8),e.moveTo(v+4,v+26),e.lineTo(v+34,v+26),e.stroke();break;default:e.lineWidth=8;for(let S=0;S<3;S++){let y=v-30+S*30,w=[v+14,v-18,v+4][S];e.beginPath(),e.moveTo(v-44,y),e.lineTo(v+44,y),e.stroke(),e.beginPath(),e.arc(w,y,11,0,Math.PI*2),e.fillStyle=r[b],e.fill(),e.stroke(),e.fillStyle="#fff"}}e.restore(),e.fillStyle=_?"#fff":"rgba(255,255,255,0.88)",e.font=`${_?600:500} 23px ${nt}`,e.textAlign="center",e.textBaseline="top",e.fillText(p,m+a/2,g+a+14)}),t>0&&f){let[p,b,m,g]=f,_=mt(t,0,.12,.6,.85);if(_>0){let x=34+yt(.05,.45,t)*10;e.beginPath(),e.arc(p+m*.6,b+g*.62,x,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.28*_})`,e.fill(),e.lineWidth=3,e.strokeStyle=`rgba(255,255,255,${.55*_})`,e.stroke()}let E=yt(.62,1,t);if(E>0){let x=Wt(p,0,E),M=Wt(b,0,E),v=Wt(m,Rn,E),S=Wt(g,Un,E);this.kapsel(e,x,M,v,S,Wt(36,0,E)),e.fillStyle=`rgba(12,13,16,${.65+.35*E})`,e.fill()}}}netz(e,t,n){e.fillStyle="#131519",e.fillRect(0,0,Rn,Un);let i=600,r=(t%i+i)%i;e.save(),e.beginPath(),e.rect(0,0,Rn,Un),e.clip(),this.kachelC||(this.kachelC=document.createElement("canvas"),this.kachelC.width=Rn,this.kachelC.height=i,this.kachelZeichnen(this.kachelC.getContext("2d"),i));for(let a=-1;a<=1;a++)e.drawImage(this.kachelC,0,r+a*i);for(let[a,o]of[[30,"#0f1114"],[22,"#363a41"]])e.strokeStyle=o,e.lineWidth=a,e.lineCap="round",e.beginPath(),e.moveTo(_n,-20),e.lineTo(_n,Un+20),e.stroke(),e.beginPath(),e.moveTo(_n-420,n+30),e.lineTo(_n,n),e.lineTo(Rn+20,n-26),e.stroke();e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=2,e.setLineDash([14,14]),e.beginPath(),e.moveTo(_n,-20),e.lineTo(_n,Un+20),e.stroke(),e.beginPath(),e.moveTo(_n,n),e.lineTo(Rn+20,n-26),e.stroke(),e.setLineDash([]),e.restore()}kachelZeichnen(e,t){e.fillStyle="#1b1e23";let i=[[150,20,150,90],[340,20,190,120],[560,60,110,60],[760,30,180,100],[980,20,140,120],[1150,40,120,80],[180,190,120,110],[360,230,170,70],[540,200,120,130],[770,190,200,70],[1e3,220,110,110],[1150,190,130,90],[160,380,150,90],[360,350,140,130],[560,420,100,90],[780,360,150,90],[990,380,120,100],[1160,330,110,120]];for(let[a,o,l,c]of i)this.kapsel(e,a,0+o,l,c,6),e.fill();e.fillStyle="#152219",e.beginPath(),e.ellipse(430,520,120,60,.2,0,Math.PI*2),e.fill(),e.fillStyle="#0e1724",e.beginPath(),e.moveTo(1040,480),e.bezierCurveTo(1120,450,1200,520,1290,470),e.lineTo(1290,560),e.bezierCurveTo(1180,600,1100,540,1040,580),e.closePath(),e.fill();let r=[[0,160,Rn,150],[0,330,Rn,345],[0,560,1040,540],[330,0,330,t],[1e3,0,1e3,t],[150,0,150,t],[1130,0,1130,t],[560,160,780,330]];for(let a of[18,12]){e.strokeStyle=a===18?"#0f1114":"#2a2d33",e.lineWidth=a,e.lineCap="round";for(let[o,l,c,h]of r)e.beginPath(),e.moveTo(o,0+l),e.lineTo(c,0+h),e.stroke()}}karte(e,t,n,i,r){let a=this.w,o=150+t;this.netz(e,t,o);let l=()=>{e.beginPath(),e.moveTo(_n,Rs),e.lineTo(_n,o+44),e.quadraticCurveTo(_n,o,_n+44,o-2),e.lineTo(Rn+20,o-26)};if(e.lineCap="round",e.lineJoin="round",l(),e.strokeStyle="rgba(0,0,0,0.9)",e.lineWidth=18,e.stroke(),l(),e.strokeStyle=Al,e.lineWidth=11,e.stroke(),i>0){let W=Rs-[150,112,74][r];e.save(),e.globalAlpha=i,e.beginPath(),e.moveTo(_n,Rs),e.lineTo(_n,W),e.strokeStyle=ax,e.lineWidth=11,e.stroke(),e.beginPath(),e.arc(_n,W,11,0,Math.PI*2),e.fillStyle=ax,e.fill(),e.lineWidth=3.5,e.strokeStyle="#fff",e.stroke(),e.restore()}let c=(W,Y,ae,he,ce,_e)=>{e.save(),_e&&(e.globalAlpha=.4),e.beginPath(),e.arc(W,Y,ae,0,Math.PI*2),e.fillStyle="#000",e.fill(),e.beginPath(),e.arc(W,Y,ae*.74,0,Math.PI*2),e.fillStyle=ce?"#3a3a3e":"#2c2c2e",e.fill(),ce&&(e.beginPath(),e.arc(W,Y,ae*.88,0,Math.PI*2),e.lineWidth=ae*.2,e.strokeStyle=Al,e.stroke()),e.fillStyle="#fff",e.font=`600 ${Math.round(ae*.78)}px ${nt}`,e.textAlign="center",e.textBaseline="middle",e.fillText(he,W,Y+ae*.04),e.restore()},h=[this.namen[1]||"Ben",this.namen[2]||"Mia",this.namen[3]||"Tom"].map(W=>W.charAt(0).toUpperCase());[[_n+6,Rs+60],[_n-5,Rs+118],[_n+4,Rs+176]].forEach(([W,Y],ae)=>c(W,Y,19,h[ae],ae===1,!1)),this.kapsel(e,_n-11,Rs-17,22,34,7),e.fillStyle=Al,e.fill(),e.lineWidth=3,e.strokeStyle="#fff",e.stroke(),e.fillStyle="rgba(6,37,45,0.85)",this.kapsel(e,_n-7,Rs-10,14,7,2),e.fill(),this.kapsel(e,_n-7,Rs+6,14,5,2),e.fill(),this.seitenleiste(e,!0),e.fillStyle="rgba(16,16,20,0.9)",e.fillRect(jn,0,Rn-jn,72);let u=`500 31px ${nt}`,f=a.ziel||"Ziel",d=this.breite(e,f,u)+26;this.kapsel(e,jn+20,10,d,54,10),e.fillStyle=ox,e.fill(),e.font=u,e.textBaseline="middle",e.textAlign="left",e.fillStyle="#06141a",e.fillText(f,jn+33,38),e.fillStyle=ox,e.fillText(a.convoy||"Convoy",jn+20+d+22,38),e.textAlign="right";let p=a.ruhe||"Ruhe";e.fillText(p,Rn-28,38),e.fillText(a.sprechen||"Sprechen",Rn-28-this.breite(e,p,u)-26,38);let b=a.abstand||"350 m",m=a.strasse||"Hauptstra\xDFe",g=jn+16,_=88,E=Math.max(330,30+Math.max(98+this.breite(e,b,`700 40px ${nt}`),this.breite(e,m,`600 29px ${nt}`))+30);this.kapsel(e,g,_,E,106,18),e.fillStyle="rgba(0,0,0,0.84)",e.fill(),e.strokeStyle="#fff",e.lineWidth=9,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(g+36,_+52),e.lineTo(g+36,_+38),e.quadraticCurveTo(g+36,_+28,g+48,_+28),e.lineTo(g+74,_+28),e.stroke(),e.beginPath(),e.moveTo(g+62,_+15),e.lineTo(g+76,_+28),e.lineTo(g+62,_+41),e.stroke(),e.fillStyle="#fff",e.font=`700 40px ${nt}`,e.textAlign="left",e.textBaseline="middle",e.fillText(b,g+100,_+34),e.fillStyle="rgba(235,235,245,0.62)",e.font=`600 29px ${nt}`,e.fillText(m,g+28,_+78),h.forEach((W,Y)=>c(g+E+44+Y*64,_+30,29,W,Y===1,!1));let x=200,M=Rn-16-x,v=88,S=30*i,y=42*i,w=132+S+y;this.kapsel(e,M,v,x,w,22),e.fillStyle="rgba(28,28,30,0.94)",e.fill(),e.lineWidth=2,e.strokeStyle=cx,e.stroke();let P=v+S+66;if(i>0){e.save(),e.globalAlpha=i,e.fillStyle="rgba(235,235,245,0.8)",e.textAlign="center",e.textBaseline="middle";let W=String(a.blitzerFest||"Fester Blitzer").toUpperCase(),Y=16;e.font=`600 ${Y}px ${nt}`;try{e.letterSpacing="1.5px"}catch{}for(;this.breite(e,W,`600 ${Y}px ${nt}`)>x-20&&Y>11;)Y--;e.fillText(W,M+x/2,v+24);try{e.letterSpacing="0px"}catch{}let ae=M+12,he=v+w-40,ce=x-24,_e=28;this.kapsel(e,ae,he,ce,_e,14),e.fillStyle="rgba(255,255,255,0.14)",e.fill(),e.save(),this.kapsel(e,ae,he,ce,_e,14),e.clip(),e.fillStyle="rgba(44,184,227,0.5)",e.fillRect(ae,he,ce*[.25,.45,.65][r],_e),e.restore(),e.fillStyle="#fff",e.font=`600 19px ${nt}`,e.fillText(Fi(this.blitzerWeit,[800,600,400][r]),M+x/2,he+_e/2+1),e.restore()}let I=M+40,D=M+128;e.beginPath(),e.arc(I,P,27,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(I,P,23,0,Math.PI*2),e.lineWidth=6.5,e.strokeStyle=ew,e.stroke(),e.fillStyle="#000",e.font=`700 23px ${nt}`,e.textAlign="center",e.textBaseline="middle",e.fillText("70",I,P+1),e.lineCap="round",e.lineWidth=6,e.strokeStyle="rgba(255,255,255,0.12)",e.beginPath(),e.arc(D,P,54,0,Math.PI*2),e.stroke(),e.strokeStyle=Al,e.beginPath(),e.arc(D,P,54,-Math.PI/2+.5,-Math.PI/2+.5+Math.PI*2*.9),e.stroke(),e.fillStyle="#fff",e.font=`700 46px ${nt}`,e.fillText("68",D,P-5),e.fillStyle=lx,e.font=`400 16px ${nt}`,e.fillText(a.einheit||"km/h",D,P+26);let H=String(a.rest||"12 km \xB7 14 min"),C=(/(\d+(?:[.,]\d+)?)\s*km/i.exec(H)||[])[1]||"12",U=(/(\d+)\s*min/i.exec(H)||[])[1]||"14",L=400,B=Un-34-86;this.kapsel(e,g,B,L,86,18),e.fillStyle="rgba(0,0,0,0.84)",e.fill(),[[a.ankunft||"21:56",a.ankunftWort||"Ankunft",.2],[U,a.minWort||"Min.",.54],[C,"km",.82]].forEach(([W,Y,ae])=>{e.fillStyle="#fff",e.textAlign="center",e.font=`700 25px ${nt}`,e.fillText(W,g+L*ae,B+30),e.font=`400 23px ${nt}`,e.fillText(Y,g+L*ae,B+60)}),e.fillStyle=lx,e.font=`400 16px ${nt}`,e.textAlign="left",e.fillText("\xA9 OpenStreetMap",g+6,Un-17);let N=Rn-16-30;e.strokeStyle="#fff",e.fillStyle="#fff",e.lineWidth=4,e.lineCap="round",e.lineJoin="round";let z=Un-16-60-148;e.beginPath(),e.moveTo(N-20,z-7),e.lineTo(N-11,z-7),e.lineTo(N-1,z-16),e.lineTo(N-1,z+16),e.lineTo(N-11,z+7),e.lineTo(N-20,z+7),e.closePath(),e.fill(),e.beginPath(),e.arc(N,z,11,-.9,.9),e.stroke(),e.beginPath(),e.arc(N,z,20,-.9,.9),e.stroke(),z+=74,e.beginPath(),e.arc(N-4,z-4,15,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(N+7,z+7),e.lineTo(N+18,z+18),e.moveTo(N-11,z-4),e.lineTo(N+3,z-4),e.moveTo(N-4,z-11),e.lineTo(N-4,z+3),e.stroke(),z+=74,e.beginPath(),e.arc(N,z,28,0,Math.PI*2),e.fillStyle="#e0352b",e.fill(),e.lineWidth=3,e.stroke(),e.fillStyle="#fff",e.beginPath(),e.moveTo(N-14,z-4),e.lineTo(N-6,z-4),e.lineTo(N+10,z-13),e.lineTo(N+10,z+11),e.lineTo(N-6,z+3),e.lineTo(N-14,z+3),e.closePath(),e.fill(),e.lineWidth=3,e.beginPath(),e.moveTo(N-9,z+5),e.lineTo(N-6,z+14),e.stroke(),n<1&&(e.fillStyle=`rgba(12,13,16,${1-n})`,e.fillRect(0,0,Rn,Un))}}});function lw(){if(cr)return cr;cr=new Map;let s=ub(.004),e=(t,n)=>{let i=Math.floor(t/10);cr.has(i)||cr.set(i,[]),cr.get(i).push(n)};for(let t of s)for(let n of[0,5,10]){let[i,r,a]=t.p,[o,l,c]=t.z,h=a+n,u=c+n,f=Math.hypot(o-i,u-h)||1,d={px:i,py:r,pz:h,zx:o,zy:l,zz:u,fx:(o-i)/f,fz:(u-h)/f},p=Math.min(h-Cl,u-Cp),b=Math.max(h+Cl,u+Cp);for(let m=Math.floor(p/10);m<=Math.floor(b/10);m++)e(m*10,d);if(t.g>=.95&&t.g<=3.05&&t.autos)for(let[m,g,_]of t.autos){let E=_+n,x=Math.hypot(m-i,E-h)||1,M={px:i,py:r,pz:h,zx:m,zy:g,zz:E,fx:(m-i)/x,fz:(E-h)/x,nurSicht:!0,sicht:Ap},v=Math.min(h,E)-Ap,S=Math.max(h,E)+Ap;for(let y=Math.floor(v/10);y<=Math.floor(S/10);y++)e(y*10,M)}}for(let t of cr.values()){let n=1/0,i=-1/0;for(let r of t)n=Math.min(n,r.px,r.zx),i=Math.max(i,r.px,r.zx);t.x0=n-Cl-.5,t.x1=i+Cl+.5}return cr}function cw(s,e){let t=lw().get(Math.floor(e/10));if(!t||s<t.x0||s>t.x1)return!1;for(let n of t){if(!n.nurSicht&&n.py<dx){let c=s-n.px,h=e-n.pz,u=Math.hypot(c,h);if(u<aw||u<Cl&&(c*n.fx+h*n.fz)/u>ow)return!0}let i=n.zx-n.px,r=n.zz-n.pz,a=i*i+r*r||1e-6,o=Math.max(0,Math.min(1,((s-n.px)*i+(e-n.pz)*r)/a));if(n.py+(n.zy-n.py)*o<dx&&Math.hypot(s-(n.px+i*o),e-(n.pz+r*o))<(n.sicht||Cp))return!0}return!1}function hw(s,e,t,n){if(t==="baum"&&n!==void 0&&cw(n,s))return!1;let i=wt(4),r=wt(5),a=wt(6),o=wt(7),l=wt(3),c=wt(8);if(t==="leitplanke"||t==="leitpfosten")return!(t==="leitplanke"&&s>c-20||e<0&&s>i-80&&s<i+100||e<0&&s>a-132&&s<a+154||e<0&&s>l+34&&s<l+48);if(s>c-60&&t==="laterne"||t==="laterne"&&s>i-74&&s<i-54||t==="laterne"&&e<0&&s>wt(2)-100&&s<wt(2)+45||t==="laterne"&&e<0&&s>i-78&&s<i+100||t==="laterne"&&e<0&&s>a-132&&s<a+154)return!1;if(s>c-5&&t==="baum")return n!==void 0&&Math.abs(n)>=16;if(e<0&&s>c-42&&s<c-16&&t==="baum"&&n!==void 0&&n>-22)return!1;if(e<0){if(s>i-30&&s<i+95)return t==="baum"?n===void 0||n<-22:!1;if(s>a-132&&s<a+154)return t==="baum"?n===void 0||n<(s>a-60&&s<a+75?-26:-12):!1;if(s>r+18&&s<r+60)return t==="baum"?n===void 0||n<(s>r+40?-13:-22):!1;if(s>r+56&&s<r+82)return t==="baum"?n===void 0||n<-17:!1;if(s>l+30&&s<l+52&&(t==="laterne"||t==="baum"&&(n===void 0||n>-16)))return!1}return!0}var Pl,sw,rw,ux,fx,Fu,aw,Cp,Ap,dx,Cl,ow,cr,px=ut(()=>{Pt();Km();ni();Ud();sr();ob();fb();nx();rx();hx();ln();ti();Pl={hoch:{dpr:1.5,samples:2,spiegel:!0,regen:2600,bloom:5,taps:6,kegel:!0,lod:0,lichter:4,schatten:!0,ao:!0,baumDichte:1,lodWeite:.85},mittel:{dpr:1.5,samples:0,spiegel:!0,regen:1400,bloom:4,taps:4,kegel:!0,lod:1,lichter:2,schatten:!1,ao:!1,baumDichte:.6,lodWeite:.7},niedrig:{dpr:.75,samples:0,spiegel:!1,regen:300,bloom:2,taps:1,kegel:!1,lod:2,lichter:0,schatten:!1,ao:!1,baumDichte:.3,lodWeite:.5,direkt:!0}},sw={mittel:{regen:900},niedrig:{}},rw={spiegel:!1,regen:400,bloom:3},ux=(s,e)=>e.handy?{...Pl[s],...sw[s]||{},...e.spar&&s==="mittel"?rw:{},...e.ios&&s==="niedrig"?{direkt:!1}:{},...e.test||{}}:Pl[s],fx=[[.012,461588,1.25,.26,1,1],[.006,395538,1.2,.22,.6,.9],[.01,461588,1.25,.26,.8,1],[.01,592402,1.25,.26,.9,1],[.008,461588,1.25,.24,.7,1],[.0045,725536,1.15,.22,0,1],[.009,461588,1.25,.26,.5,1],[.01,461588,1.3,.3,.8,1.1],[.002,197900,1.05,.3,0,.9]],Fu=class{constructor(e,t){this.canvas=e,this.woerter=t.woerter||{},this.basis=t.basis||"",this.version=t.version||"",this.logoMarke=t.logoMarke||null,this.carplay=new Du(this.woerter,this.logoMarke),this.stufeName=t.stufe||"hoch",this.handy=!!t.handy,this.ios=!!t.ios,this.spar=!1,this.test=t.test||null,this.aus=new Set(String(t.aus||"").split(",").filter(Boolean)),this.stufe=ux(this.stufeName,this),this.renderer=new Nh({canvas:e,context:t.context||void 0,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.toneMapping=li,this.renderer.outputColorSpace=Tt,this.renderer.autoClear=!1,this.szene=new fs,this.nebelFarbe=new we(461588),this.szene.fog=new Mo(461588,.011),this.kamera=new rn(60,1,.2,1500),this.szene.add(this.kamera),this.rnd=Na(7),this.t=0,this.zc=0,this.kriech=0,this.glitch=0,this.letztesKapitel=-1,this.post=new Hh(this.renderer),this.fertig=!1,this.basisFertig=!1,this.bereitBis=-1,this.ladeStand={schritt:"start",aufwaermen:0,bauen:0},this.bilder=0,this._sprung=!0,this.w=2,this.h=2,this.dpr=1,this._v=new R,this._v2=new R,this._autos=[new R,new R,new R,new R];let n=-320,i=za*Ua+420,r=performance.now();this.bauZeiten={},this.strasse=new Vh(this.szene,{z0:n,z1:i,rnd:this.rnd,spiegel:this.stufe.spiegel}),this.bauZeiten.strasse=Math.round(performance.now()-r),this.umgebung=new cu(this.szene,{z0:n,z1:i,rnd:this.rnd,renderer:this.renderer,frei:hw,grob:this.stufeName==="niedrig"}),this.bauZeiten.umgebung=Math.round(performance.now()-r),this.convoy=new bu(this.szene,this.umgebung.envMap),this.convoy.aus=this.aus,this.fahrt=new yu(this.kamera),this.kapitel=null,this.webcamRT=new an(256,144,{type:En,depthBuffer:!0,minFilter:bt,magFilter:bt,colorSpace:Xt}),this.komet=new lt,this.kamera.add(this.komet);let a=ei(128);this.kometKopf=new Dn(new Cn({map:a,color:Ke(1.6,4.5,5.5),blending:kt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1})),this.komet.add(this.kometKopf),this.kometSchweif=[],this._hochgeladen=new Set;for(let o=0;o<30;o++){let l=new Dn(new Cn({map:a,color:Ke(.5,2.2,2.8),blending:kt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));this.komet.add(l),this.kometSchweif.push(l)}this.komet.visible=!1,this.bauZeiten.gesamt=Math.round(performance.now()-r)}bauenTeilchen(){this.regen=new xu(this.szene,2600,this.rnd),this.regen.setzeAnzahl(this.stufe.regen),this.schnee=new vu(this.szene,1500,this.rnd),this.schnee.staerke=0,this.funken=new yl(this.szene,500,this.rnd),this.kometFunken=new yl(this.komet,160,this.rnd),this.kometFunken.mesh.scale.setScalar(.04)}async laden(e={}){let t=e.pause||(()=>new Promise(E=>setTimeout(E,0))),n=e.ruhe||t,i=e.etappe||(()=>{}),r=this.lader=new ku(this.basis,this.version);r.klein=this.handy&&!this.aus.has("klein");let a=async(E,x)=>{try{return await x()}catch(M){return console.warn("Laden",E,M),null}},o=performance.now(),l=this.ladeZeiten={},c=E=>{l[E]=Math.round(performance.now()-o)};this.ladeStand.schritt="modelle";let h=await r.listen(this.stufeName+(r.klein?"-handy":""))||await r.listen(this.stufeName),u={};h&&(u.basis=r.vorab(h.basis)),r.etappe="basis",await t(),this.umgebung.bauenGelaende(),await t(),this.umgebung.bauenRest(),this.bauenTeilchen(),c("umgebung"),await t();let f=await r.hdr("welt/texturen/nacht.hdr");if(f){let E=this.umgebung.setzeHdri(this.renderer,f);E&&this.convoy.setzeEnv(E)}await t();let[d,p,b]=await Promise.all([r.textur("welt/texturen/asphalt_farbe.webp",{srgb:!0}),r.textur("welt/texturen/asphalt_normal.webp"),r.textur("welt/texturen/asphalt_rauheit.webp")]);this.strasse.setzeTexturen(d,p,b),await t(),await this.convoy.starten(r,this,this.basis+"welt/auto2.glb",this.basis+"welt/auto.glb",t),c("autos"),this.kw={szene:this.szene,convoy:this.convoy,umgebung:this.umgebung,strasse:this.strasse,woerter:this.woerter,rnd:this.rnd,schnee:this.schnee,funken:this.funken,carplay:this.carplay,logoMarke:this.logoMarke,welt:this,lader:r},this.kapitel=await ex(this.kw,t);let m=this.kapitel[5];m.schirm&&(m.schirm.material.uniforms.t.value=this.webcamRT.texture),this.setzeStufe(this.stufeName),this.verankereLichter();for(let E of this.kapitel)E.gruppe.visible=!1;if(c("kapitel"),await t(),this.umgebung.ladeModelle&&await a("Umgebung",()=>this.umgebung.ladeModelle(r,this)),!this.umgebung.echteBaeume){let[E,x,M,v]=await Promise.all([r.glb("welt/baeume.glb"),r.textur("welt/texturen/rinde_farbe.webp",{srgb:!0}),r.textur("welt/texturen/rinde_normal.webp"),r.textur("welt/texturen/nadeln.png",{srgb:!0,wiederholen:!1})]);this.umgebung.setzeBaeume(E,x,M,v)}await t();let[g,_]=await Promise.all([r.textur("welt/texturen/boden_farbe.webp",{srgb:!0}),r.textur("welt/texturen/boden_normal.webp")]);this.umgebung.setzeBoden(g,_,this.strasse),this.szene.updateMatrixWorld(!0);for(let E=0;E<=5;E++){let x=this.kapitel[E];x.ladeModelle&&await a("Kapitel "+E,()=>x.ladeModelle(r,this))}if(!this.kapitel[3].eigeneModelle){let E=await r.glb("welt/requisiten.glb");E&&this.kapitel[3].setzeBlitzer&&this.kapitel[3].setzeBlitzer(E)}if(this.verankereLichter(),u.basis&&await u.basis,c("dateien"),h)for(let E of["k6","k7","k8"])u[E]=r.vorab(h[E]);await this.nachkompilieren([0,1,2,3,4,5],t),this.fertig=!0,this.basisFertig=!0,this.bereitBis=5,c("basis"),i(5);for(let E of[6,7,8]){r.etappe="k"+E;let x=this.kapitel[E];if(u["k"+E]&&await u["k"+E],await n(),x.ladeModelle&&await a("Kapitel "+E,()=>x.ladeModelle(r,this)),E===7&&!x.eigeneModelle){let M=await r.glb("welt/innenraum.glb");M&&x.setzeInnenraum&&x.setzeInnenraum(M)}if(E!==7&&!x.eigeneModelle){let M=this._requisiten||(this._requisiten=await r.glb("welt/requisiten.glb"));M&&(E===6&&x.setzeRequisiten&&x.setzeRequisiten(M),E===8&&x.setzePlakatwand&&x.setzePlakatwand(M))}this.verankereLichter(),await n(),await this.nachkompilieren([E],n,x),this.bereitBis=E,c("k"+E),i(E)}r.freigeben(),this.allesGeladen=!0,this.ladeStand.schritt="fertig"}async nachkompilieren(e,t,n=null){let i=this.renderer;t=t||(()=>new Promise(u=>requestAnimationFrame(u))),this.ladeStand.schritt="grafik";let r=n?[n.gruppe,n.innen].filter(Boolean):[this.szene],a=[],o=()=>{for(let u of this.kapitel)for(let f of[u.gruppe,u.innen])f&&(a.push([f,f.visible]),f.visible=!0)},l=()=>{for(let[u,f]of a.splice(0))u.visible=f};try{if(i.compileAsync&&i.extensions.has("KHR_parallel_shader_compile")){o();let u=Promise.all(r.map(f=>i.compileAsync(f,this.kamera,this.szene)));l(),await u}else{o();let u=new Set,f=[];for(let p of r)p.traverse(b=>{if(b.isMesh||b.isSprite||b.isPoints||b.isLine)for(let m of Array.isArray(b.material)?b.material:[b.material]){if(!m)continue;let g=m.uuid+(b.isInstancedMesh?"I":"")+(b.isSkinnedMesh?"S":"")+(b.receiveShadow?"R":"")+(b.geometry?Object.keys(b.geometry.attributes).sort().join():"");if(!u.has(g)){u.add(g),f.push(b);break}}});l();let d=performance.now();for(let p of f)i.compile(p,this.kamera,this.szene),performance.now()-d>12&&(await t(),d=performance.now())}}catch(u){console.warn("Shader vorbauen",u),l()}await t();let c=new Set;this.szene.traverse(u=>{let f=u.material?Array.isArray(u.material)?u.material:[u.material]:[];for(let d of f)for(let p of["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","lightMap","alphaMap"])d[p]&&d[p].isTexture&&!d[p].isRenderTargetTexture&&c.add(d[p])});let h=0;for(let u of c)if(!this._hochgeladen.has(u)){this._hochgeladen.add(u);try{i.initTexture(u)}catch{}++h%(n?1:3)===0&&await t()}for(let u of e){await t();try{this.aufwaermenStation(u,n)}catch(f){console.warn("Aufw\xE4rmen",u,f)}}if(e.includes(7))for(let u of[0,1]){await t();try{this.aufwaermenInnen(u)}catch(f){console.warn("Aufw\xE4rmen innen",f)}}i.setScissorTest(!1),i.setRenderTarget(null)}aufwaermenStation(e,t=null){let n=this.renderer,i=this.kamera,r=[],a=(_,E,x)=>{_[E]!==x&&(r.push([_,E,_[E]]),_[E]=x)},o=t?new Set:null;if(t)for(let _ of[t.gruppe,t.innen])_&&_.traverse(E=>o.add(E));for(let _ of this.kapitel)for(let E of[_.gruppe,_.innen])E&&a(E,"visible",!0);if(this.szene.traverse(_=>{if(_.isMesh||_.isSprite||_.isPoints||_.isLine){if(o&&!o.has(_)){a(_,"visible",!1);return}a(_,"frustumCulled",!1)}if(_.isLOD&&(!o||o.has(_))){a(_,"autoUpdate",!1);for(let E of _.levels)a(E.object,"visible",!0)}}),!o)for(let _ of[...this.convoy.autos,...this.convoy.geparkt||[]])for(let E of _.stufen||[])E&&a(E,"visible",!0);if(!o)for(let _ of[this.schnee&&this.schnee.mesh,this.funken&&this.funken.mesh,this.komet,this.kometFunken&&this.kometFunken.mesh])_&&a(_,"visible",!0);let l=i.position.clone(),c=i.quaternion.clone(),h=i.fov,u=this.kapitel[5],f=this.strasse.virtuell,d=!!this.stufe.direkt,p=[[d?null:this.post.szeneRT,i,!0],[this.strasse.spiegelAn?this.strasse.rt:null,f],[this.webcamRT,u&&u.webcamKamera]].filter(_=>(_[2]||_[0])&&_[1]);f.near=i.near,f.far=i.far,f.fov=60,f.aspect=i.aspect,f.zoom=1,f.updateProjectionMatrix();let b=this.umgebung.lichtPool,m=b&&b.lichter[0],g=wt(e);n.setScissorTest(!0);try{i.position.set(2,4,g-30),i.lookAt(0,1,g+60),i.updateMatrixWorld(),f.position.copy(i.position),f.quaternion.copy(i.quaternion),f.updateMatrixWorld();let _=null,E=null;u&&u.webcamKamera&&(_=u.webcamKamera.position.clone(),E=u.webcamKamera.quaternion.clone(),u.webcamKamera.position.copy(i.position),u.webcamKamera.quaternion.copy(i.quaternion),u.webcamKamera.updateMatrixWorld()),m&&m.licht.castShadow&&(m.licht.position.set(3,9,g-12),m.ziel.position.set(0,0,g+12),m.licht.intensity=Math.max(m.licht.intensity,1));for(let[x,M]of p)n.setRenderTarget(x),n.setScissor(0,0,4,4),M===i&&(n.shadowMap.needsUpdate=!0),n.setClearColor(this.nebelFarbe,1),n.clear(),n.render(this.szene,M);n.setScissor(0,0,4,4),this.strasse.spiegeln(n,this.szene,i,this.nebelFarbe),this.strasse.spiegeln(n,this.szene,i,this.nebelFarbe),_&&(u.webcamKamera.position.copy(_),u.webcamKamera.quaternion.copy(E),u.webcamKamera.updateMatrixWorld())}finally{n.setScissorTest(!1),n.setRenderTarget(null);for(let _=r.length-1;_>=0;_--){let[E,x,M]=r[_];E[x]=M}i.position.copy(l),i.quaternion.copy(c),i.fov=h,i.updateProjectionMatrix(),i.updateMatrixWorld(),d&&this.nachzeichnen()}}nachzeichnen(){if(!(!this.fertig||!this._zuletzt))try{this.bild(1/240,this._zuletzt)}catch{}}aufwaermenInnen(e){let t=this.renderer,n=this.kamera,i=this.kapitel[7],r=this.convoy.autos[0];if(!i||!i.innen||!r)return;let a=n.position.clone(),o=n.quaternion.clone(),l=n.fov,c=i.augen||new R(.3,.95,.1),h=r.modell.visible,u=this.convoy.innenGlas,f=i.innen.visible,d=i.gruppe.visible,[p,b]=e===0?[new R(-.6,.2,20),70]:[new R(-.3,-.25,.45),58];try{r.modell.visible=!1,this.convoy.innenGlas=1,i.innen.visible=!0,i.gruppe.visible=!0,r.g.updateMatrixWorld(!0),n.position.copy(c).applyMatrix4(r.g.matrixWorld),n.position.y=Math.max(n.position.y,.95),n.lookAt(p.clone().applyMatrix4(r.g.matrixWorld)),n.fov=b,n.updateProjectionMatrix(),n.updateMatrixWorld(),t.setScissorTest(!1),t.setRenderTarget(this.stufe.direkt?null:this.post.szeneRT),t.setClearColor(this.nebelFarbe,1),t.clear(),t.render(this.szene,n)}finally{t.setRenderTarget(null),r.modell.visible=h,this.convoy.innenGlas=u,i.innen.visible=f,i.gruppe.visible=d,n.position.copy(a),n.quaternion.copy(o),n.fov=l,n.updateProjectionMatrix(),n.updateMatrixWorld(),this.stufe.direkt&&this.nachzeichnen()}}verankereLichter(){this.szene.traverse(t=>{t.isLight&&t.layers.enable(Dt)});let e=t=>{let n=[];t.traverse(i=>{i.isLight&&!i.isAmbientLight&&!i.isHemisphereLight&&n.push(i)});for(let i of n)i.userData.verankert=!0,i.intensity=0,i.parent&&i.parent.remove(i)};for(let t of this.kapitel||[])for(let n of[t.gruppe,t.innen])n&&e(n)}sprung(){this._sprung=!0}setzeStufe(e,t){Pl[e]||(e="hoch"),t!==void 0&&(this.spar=!!t);let n=ux(e,this);this.stufeName=e,this.stufe=n,this.strasse.setzeSpiegel(n.spiegel),this.regen.setzeAnzahl(n.regen),this.post.setzeTaps(n.taps),this.post.setzeSchlank(e==="niedrig"),this.renderer.toneMapping=n.direkt?$o:li,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=n.direkt?ot:Tt,this.umgebung.kegelInstanzen&&(this.umgebung.kegelInstanzen.visible=n.kegel);for(let i of[this.umgebung,this.convoy,this.post,this.strasse,...this.kapitel||[]])i&&typeof i.setzeStufe=="function"&&i.setzeStufe(n,e);this.groesse(this.w,this.h,this.dprWunsch||1,!0)}groesse(e,t,n,i=!1){this.dprWunsch=n,n=Math.min(n,this.dprStufe||this.stufe.dpr,this.dprDeckel||9),!(!i&&e===this.w&&t===this.h&&n===this.dpr)&&(this.w=e,this.h=t,this.dpr=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.kamera.aspect=e/t,this.kamera.updateProjectionMatrix(),this.post.groesse(e*n,t*n,this.stufe.samples,this.stufe.bloom),this.strasse.groesse(e*n,t*n))}bild(e,t){if(!this.fertig)return;this._zuletzt=t;let n=this.zeitAlt!=null?Math.min(.5,Math.max(0,t.zeit-this.zeitAlt)):e;this.zeitAlt=t.zeit,e=Math.min(e,.05),this.t+=e,this.tFest!=null&&(this.t=this.tFest,this.kriech=0,e=1/60);let i=this.t,r=t.g;this.gAktuell=r;let a=t.v*Ua;if(this.tFest!=null?this.kriech=0:Math.abs(a)<.4?this.kriech=Math.min(10,this.kriech+.5*e):this.kriech=Math.max(0,this.kriech-Math.abs(a)*e*.25),this._sprung){this.kriech=0,this.glitch=0,this.schnell=0,this.letztesKapitel=Math.floor(r),this.convoy.fahrt.tempoAlt=null,this.convoy.fahrt.beschl=0;for(let S of this.convoy.fahrt.zustaende)S.erst=!0}let o=r*Ua+this.kriech,l=this._sprung?0:(o-this.zc)/e;this._sprung=!1,this.zc=o,this.convoy.bremse=0,this.convoy.sanftBremse=0,this.convoy.innenGlas=0,this.fahrt.ankerMisch=0,this.kw&&this.kw.marker&&(this.kw.marker.sicht=0,this.kw.marker.sprecher=-1),this.schnee.staerke=0;let c=this.umgebung.himmelUniforms;c.warnung.value=0,c.aurora.value=0,c.sterne.value=.6,c.mond.value=.25;let h={lead:this.convoy.fuehrung,autos:this._autos,kamera:this.kamera,tempo:l,dpr:this.dpr,g:r};for(let S=0;S<this.convoy.autos.length;S++)this._autos[S].copy(this.convoy.autos[S].g.position);for(let S=0;S<this.kapitel.length;S++){let y=this.kapitel[S],w=tx(S,r);y.gruppe.visible=w>.002&&S<=this.bereitBis,w>.002?(y.update(at(r-S,-.5,1.5),w,i,e,h),S>this.bereitBis&&y.innen&&(y.innen.visible=!1)):y.innen&&y.innen.visible&&(y.innen.visible=!1,this.convoy.autos[0]&&this.convoy.autos[0].modell&&(this.convoy.autos[0].modell.visible=!0))}yp(this.kw,h,i),this.convoy.update(i,e,this.zc,l,this.kamera,this.strasse,r),this.fahrt.maus.set(t.maus.x,t.maus.y),this.fahrt.update(r,this.convoy.fuehrung,this.kamera.aspect,e,i),this.convoy.sichtbarkeit(this.kamera),this.convoy.stapelAbgleich(i,this.kamera),this.tFest!=null&&(this.umgebung.tAlt=i-1/60),this.umgebung.update(i,this.kamera,this.strasse);let u=at(r-.5,0,za-1),f=Math.floor(u),d=Math.min(za-1,f+1),p=u-f,b=fx[f],m=fx[d];this.szene.fog.density=Wt(b[0],m[0],p),this._farbe2||(this._farbe2=new we),this._farbe2.setHex(m[1]),this.nebelFarbe.setHex(b[1]).lerp(this._farbe2,p),this.szene.fog.color.copy(this.nebelFarbe),this.post.uniforms.belichtung.value=Wt(b[2],m[2],p),this.post.uniforms.bloom.value=Wt(b[3],m[3],p)/this.stufe.bloom*5,this.post.uniforms.vignette.value=Wt(b[5],m[5],p);let g=Wt(b[4],m[4],p);this.regen.update(i,this.kamera.position,g),this.schnee.update(i,this.kamera.position,this.schnee.staerke,this.dpr);let _=Math.floor(r);this.letztesKapitel>=0&&_!==this.letztesKapitel&&Math.abs(t.v)>1.1&&(this.glitch=1),this.letztesKapitel=_,this.glitch=Math.max(0,this.glitch-n*3.2);let E=at((Math.abs(a)-55)/130);this.schnell=(this.schnell||0)+(E-(this.schnell||0))*Zi(Math.max(n,.001),E>(this.schnell||0)?.16:.3);let x=this.schnell<.004?0:this.schnell;this.post.uniforms.glitch.value=this.glitch*this.glitch,this.post.uniforms.tempo.value=x,this.post.uniforms.aberration.value=x*.8,this.post.uniforms.zeit.value=i,this.post.uniforms.blende.value=1,this.kometUpdate(r,t.logoRect,i,t.komet);let M=this.renderer,v=this.kapitel[5];v.webcamBild&&v.schirm&&(v.schirm.visible=!1,M.setRenderTarget(this.webcamRT),M.setClearColor(this.nebelFarbe,1),M.clear(),M.render(this.szene,v.webcamKamera),v.schirm.visible=!0),this.strasse.spiegeln(M,this.szene,this.kamera,this.nebelFarbe),this.stufe.direkt?(M.setRenderTarget(null),M.setClearColor(this.nebelFarbe,1),M.clear(),M.render(this.szene,this.kamera)):(M.setRenderTarget(this.post.szeneRT),M.setClearColor(this.nebelFarbe,1),M.clear(),M.render(this.szene,this.kamera),this.post.abschliessen()),this.bilder++}kometUpdate(e,t,n,i){let r=e-8,a=i!==void 0,o=a?i==null?0:i*i*(3-2*i):yt(.68,.95,r),l=!!t&&t.width>10&&(a?i!=null&&i>0&&i<1:r>.62);if(this.komet.visible=l,this.logoBogen=0,!l)return;let c=372*o;this.logoBogen=c;let h=Vt.degToRad(this.kamera.fov),u=8,d=2*u*Math.tan(h/2)/this.h,p=t.left+t.width*.519,b=t.top+t.height*.48,m=t.width*.472,g=a?yt(.9,1,i):yt(.955,.99,r),_=a?yt(0,.06,i):yt(.62,.7,r),E=Vt.degToRad(180+c),x=(v,S)=>{let y=p+m*Math.sin(v),w=b-m*Math.cos(v);return S.set((y-this.w/2)*d,-(w-this.h/2)*d,-u),S};x(E,this.kometKopf.position);let M=t.width*.2*d*(1-g*.6);this.kometKopf.scale.set(M,M,1),this.kometKopf.material.opacity=(1-g)*_;for(let v=0;v<this.kometSchweif.length;v++){let S=this.kometSchweif[v],y=(v+1)/this.kometSchweif.length,w=E-Vt.degToRad(y*40*(.3+.7*at(c/60)));x(w,S.position);let P=t.width*.13*d*(1-y*.8)*(.8+.2*Math.sin(n*9+v));S.scale.set(P,P,1),S.material.opacity=(1-y)*.7*(1-g)*_}this.kometFunken.mesh.position.copy(this.kometKopf.position),this.kometFunken.update(n,this.kometKopf.position,(1-g)*.8,this.dpr)}},aw=7,Cp=4,Ap=5.5,dx=18,Cl=22,ow=Math.cos(Vt.degToRad(46)),cr=null});function gx(s,e=1/0){let t=[],n=Math.min(s.count,e);for(let i=0;i<n;i++)s.getMatrixAt(i,mx),Il.setFromMatrixPosition(mx),t.push({x:Il.x,y:Il.y,z:Il.z});return t}function uw(s){let e=[],t=s.umgebung,n=s.strasse;return t&&t.gelaende&&e.push(t.gelaende),n&&(n.bankett&&e.push(n.bankett),n.boden&&e.push(n.boden),n.mesh&&e.push(n.mesh)),s.szene.traverse(i=>{i.isMesh&&/^(boden:|fahrbahn:)/.test(i.name||"")&&e.push(i)}),e}function fw(s,e,t,n){s.set(Il.set(t,400,n),new R(0,-1,0));let i=null;for(let r of e){let a=r.visible;r.visible=!0;let o=s.intersectObject(r,!1);r.visible=a;for(let l of o)(i===null||l.point.y>i)&&(i=l.point.y)}return i}function bx(s,e={}){let t=e.toleranz??.05,n=e.stichprobe??1200,i=new Jo,r=uw(s),a=s.umgebung,o=[],l=(u,f,d=.03)=>{let p=f.length>n?f.length/n:1,b=[],m=0;for(let g=0;g<f.length;g+=p){let _=f[Math.floor(g)],E=fw(i,r,_.x,_.z);if(m++,E===null){b.push({x:+_.x.toFixed(1),z:+_.z.toFixed(1),y:+_.y.toFixed(2),boden:null});continue}let x=_.y-(E-d);Math.abs(x)>t&&b.push({x:+_.x.toFixed(1),z:+_.z.toFixed(1),y:+_.y.toFixed(2),boden:+E.toFixed(2),d:+x.toFixed(2)})}o.push({name:u,geprueft:m,verstoesse:b.length,beispiele:b.slice(0,6)})};if(a){if(a.baumPlaetze&&l("B\xE4ume nah",a.baumPlaetze,.03),a.baeume&&a.baeume.fernPlaetze&&l("B\xE4ume fern (Billboards)",a.baeume.fernPlaetze,.04),a.bewuchs&&a.bewuchs.meshes)for(let u of a.bewuchs.meshes)/kulisse/.test(u.name)||l(u.name,gx(u),.03);a.laternenPlaetze&&l("Laternen",a.laternenPlaetze.map(u=>({x:u.seite*5.8,y:0,z:u.z})),0),a.leitplankenPlaetze&&l("Leitplanken",a.leitplankenPlaetze.map(u=>({x:u.seite*5.2,y:0,z:u.z})),0)}let c=o.reduce((u,f)=>u+f.verstoesse,0),h=o.reduce((u,f)=>u+f.geprueft,0);return c?console.warn("Bodenpr\xFCfung (Strahl): "+c+" von "+h+" nicht am Boden",o.filter(u=>u.verstoesse)):console.info("Bodenpr\xFCfung (Strahl): alle "+h+" Instanzen am Boden (|\u0394| \u2264 "+t+" m)"),{gruppen:o,verstoesse:c,geprueft:h}}function xx(s,e,t,n,i){let r=s.umgebung,a=[];if(!r)return a;for(let o of r.baumPlaetze||[])o.z>=e&&o.z<=t&&o.x>=n&&o.x<=i&&a.push({art:o.art,x:+o.x.toFixed(1),z:+o.z.toFixed(1),s:+o.s.toFixed(2)});if(r.bewuchs&&r.bewuchs.meshes){for(let o of r.bewuchs.meshes)if(!/kulisse/.test(o.name))for(let l of gx(o))l.z>=e&&l.z<=t&&l.x>=n&&l.x<=i&&a.push({art:o.name,x:+l.x.toFixed(1),z:+l.z.toFixed(1)})}return a}function vx(s,e={}){let t=e.toleranz??.01,n=[],i={},r=0,a=(u,f,d,p,b)=>{i[u]=(i[u]||0)+1,n.push({wo:u,x:+f.toFixed(1),z:+d.toFixed(1),gelaende:+p.toFixed(2),flaeche:+b.toFixed(2)})},o=e.z0??-150,l=e.z1??1500;for(let u=o;u<=l;u+=2)for(let f of[-6.9,-6,-5,-4,-2,0,2,4,5,6,6.9]){let d=Ms(f,u),p=Math.abs(f)<=4.1?0:-.015;r++,d>p+t&&a("Hauptstra\xDFe",f,u,d,p)}let c=new R,h=new on;return s.szene.traverse(u=>{if(!u.isMesh||!/^(fahrbahn:|boden:)/.test(u.name||""))return;u.updateWorldMatrix(!0,!1);let f=u.geometry.attributes.position;if(f.count<40){h.setFromBufferAttribute(f).applyMatrix4(u.matrixWorld);for(let p=0;p<=16;p++)for(let b=0;b<=16;b++){let m=h.min.x+(h.max.x-h.min.x)*p/16,g=h.min.z+(h.max.z-h.min.z)*b/16,_=Ms(m,g);r++,_>h.max.y+t&&a(u.name,m,g,_,h.max.y)}return}let d=Math.max(1,Math.floor(f.count/600));for(let p=0;p<f.count;p+=d){c.fromBufferAttribute(f,p).applyMatrix4(u.matrixWorld);let b=Ms(c.x,c.z);r++,b>c.y+t&&a(u.name,c.x,c.z,b,c.y)}}),n.length&&console.warn("Stra\xDFenpr\xFCfung: Gel\xE4nde ragt an "+n.length+" von "+r+" Punkten durch",i),{geprueft:r,verstoesse:n.length,jeFlaeche:i,beispiele:n.slice(0,16)}}var mx,Il,_x=ut(()=>{Pt();tr();mx=new Pe,Il=new R});var Pp,yx=ut(()=>{Pp={hoch:[[0,.051,.1006,.1485,.1951,.2391,.2802,.3183,.3536,.387,.4191,.4483,.4716,.4906,.5116,.5476,.5674,.5858,.6066,.6323,.6628,.6945,.7214,.7414,.7581,.7694,.7864,.8069,.8268,.8463,.8635,.8773,.8896,.9011,.9124,.9227,.9326,.9444,.9594,.9777,1],[0,.0212,.0367,.0492,.06,.0698,.079,.088,.0968,.1055,.1145,.1235,.1325,.1413,.1502,.1593,.1687,.1788,.19,.2031,.2186,.2399,.2752,.3223,.3876,.4691,.5441,.6234,.7127,.7662,.8015,.833,.8557,.8779,.8977,.9131,.9299,.9471,.9633,.9799,1],[0,.0227,.0457,.0689,.0921,.1156,.1395,.1642,.1899,.217,.2451,.2743,.3045,.3372,.3764,.4346,.4981,.5719,.6344,.6725,.7046,.7289,.7503,.7718,.7943,.8173,.8399,.8611,.8826,.8986,.9102,.9196,.9276,.9351,.9425,.9498,.9573,.9651,.9737,.9838,1],[0,.0254,.0522,.0781,.1034,.1284,.1534,.1788,.205,.2323,.261,.2895,.3176,.3453,.3727,.3999,.4277,.4597,.4969,.5352,.5724,.6093,.6393,.6683,.699,.7309,.7634,.8167,.8709,.9099,.9306,.9404,.9475,.9534,.9586,.9635,.9686,.9741,.9807,.9887,1],[0,.0203,.0419,.0644,.0872,.1098,.1322,.1541,.1758,.1972,.2184,.2392,.2595,.2793,.2983,.3171,.3368,.3575,.3785,.399,.4195,.4403,.4619,.4847,.5089,.535,.5633,.5943,.6275,.6608,.6939,.7264,.7593,.7915,.8236,.8559,.8874,.9169,.9448,.9722,1],[0,.0285,.0577,.0875,.1152,.1438,.1777,.2192,.2695,.323,.3599,.3912,.4164,.4366,.4526,.4681,.4843,.4993,.5137,.5284,.5451,.5656,.5865,.6072,.628,.6492,.6707,.6929,.7155,.7388,.7622,.7838,.8047,.8275,.852,.8767,.8988,.92,.9424,.968,1],[0,.045,.084,.1195,.1547,.1911,.2308,.2722,.3031,.3314,.358,.3828,.4062,.4284,.45,.4718,.494,.5166,.5399,.566,.6055,.6581,.6956,.7194,.7335,.7434,.7519,.7595,.7675,.7766,.7869,.7971,.8058,.8131,.8206,.831,.8457,.8729,.9332,.9553,1],[0,.0144,.0258,.0356,.0454,.0554,.0659,.0925,.1563,.2357,.2814,.3115,.3341,.3532,.3724,.4106,.478,.5381,.593,.6225,.6293,.6341,.6387,.6434,.6491,.6564,.6674,.687,.7296,.7911,.8374,.8552,.8682,.8812,.8945,.9089,.9268,.9471,.967,.9859,1],[0,.0233,.0404,.0551,.0687,.082,.0955,.1101,.1282,.1512,.1758,.2014,.2276,.2519,.2711,.2902,.3102,.3313,.3536,.3776,.4016,.4207,.434,.4448,.4545,.4641,.4739,.4842,.4962,.5117,.5364,.5833,.6233,.6546,.6778,.7133,.7653,.8136,.851,.9175,1],[0,.0471,.086,.1201,.1513,.1806,.2083,.235,.2608,.286,.3107,.335,.3592,.3832,.4073,.4316,.4561,.4811,.5068,.5331,.5594,.5851,.6101,.6346,.6584,.6817,.7044,.7266,.7483,.7696,.7907,.8113,.8317,.8518,.8717,.8914,.9112,.9318,.9537,.9767,1]],quer:[[0,.0529,.1028,.1491,.1927,.2333,.2714,.308,.3428,.3765,.4099,.4432,.4737,.497,.5239,.5547,.5751,.5965,.6211,.6492,.6808,.7126,.736,.7511,.7603,.7676,.7768,.8043,.8304,.8548,.8727,.887,.8995,.9101,.9183,.9255,.9341,.9484,.9649,.9828,1],[0,.0159,.0295,.0419,.0537,.0654,.0771,.0892,.1015,.1142,.1267,.1385,.1493,.1593,.1689,.1781,.1873,.1966,.2065,.2173,.2296,.2446,.2634,.2856,.3082,.3303,.36,.4345,.5182,.6022,.6903,.7565,.7975,.8275,.8576,.8811,.9007,.9253,.9482,.9709,1],[0,.025,.051,.0778,.1054,.1339,.1635,.1945,.2265,.2596,.2937,.328,.3636,.4058,.4572,.5106,.5706,.5941,.6257,.6641,.7002,.7246,.7427,.7591,.7751,.7912,.8074,.8235,.8387,.8572,.8787,.8975,.9126,.9258,.9375,.9482,.9579,.9671,.9762,.9861,1],[0,.0198,.041,.0629,.0854,.1088,.1332,.1589,.186,.2147,.2452,.2761,.3054,.3333,.3603,.3866,.4126,.4395,.4699,.5037,.5399,.5676,.5864,.6049,.6251,.6481,.6748,.7071,.7412,.7589,.794,.8441,.8935,.925,.9387,.9474,.9537,.9603,.9685,.9815,1],[0,.0278,.058,.0898,.1228,.1566,.1894,.2207,.2499,.2779,.3054,.3325,.3586,.3816,.4015,.4196,.4363,.4524,.4685,.4856,.5056,.5285,.5529,.5781,.6041,.6305,.6568,.6836,.7112,.7407,.7699,.7975,.8245,.8519,.8799,.9058,.9283,.9488,.9676,.9846,1],[0,.0159,.0305,.0441,.057,.0694,.0812,.0928,.1049,.1174,.1307,.1451,.1614,.1804,.2035,.234,.2835,.3607,.4119,.4507,.4808,.5053,.5279,.5553,.5877,.6192,.6508,.684,.7199,.7578,.7916,.8204,.8462,.866,.8811,.896,.9115,.9282,.9471,.97,1],[0,.0454,.0889,.1344,.1846,.2401,.293,.3363,.3728,.4041,.4313,.4551,.4762,.4951,.5147,.5337,.5512,.568,.5846,.6006,.6157,.6304,.6448,.6594,.6741,.6892,.7048,.7209,.7365,.7517,.7669,.7827,.7996,.8184,.8404,.8706,.9126,.943,.9672,.979,1],[0,.019,.0323,.0432,.0542,.0662,.099,.1657,.2289,.2709,.2996,.3207,.3378,.3527,.3673,.3851,.4379,.4917,.5386,.5817,.6175,.6264,.6317,.6362,.6409,.6461,.6527,.6622,.6785,.7133,.7741,.8299,.8549,.869,.8835,.8988,.9168,.9393,.9661,.9819,1],[0,.024,.0415,.0591,.0754,.0912,.1081,.1296,.1587,.1899,.2228,.256,.2875,.3142,.3322,.349,.368,.3904,.4174,.4341,.4446,.4532,.4611,.4688,.4767,.485,.4944,.5053,.5192,.5382,.5661,.6051,.6462,.667,.6874,.7317,.7809,.8197,.8713,.9302,1],[0,.0477,.0861,.1197,.1503,.1789,.206,.232,.2572,.2817,.3057,.3295,.353,.3765,.4,.4235,.4473,.4715,.4966,.5225,.5487,.5745,.5998,.6245,.6487,.6726,.6962,.7193,.7422,.7646,.7868,.8087,.8304,.8519,.8732,.8944,.9155,.9366,.9577,.9788,1]]}});var dw,Nu,Mx=ut(()=>{ln();yx();dw=.07,Nu=class{constructor(e,t,n="quer"){this.abschnitte=e,this.setzeAnker(t,n),this.y=[],this.yg=[],this.hoehe=[],this.g=t[0],this.ziel=t[0],this.v=0,this.yIst=-1,this.bewegt=!1,this.fest=null,this.messen(),this.ziel=this.weg(window.scrollY),this.g=this.ziel}setzeAnker(e,t){this.anker=e,this.format=t,this.tabellen=Pp&&Pp[t]||[]}messen(){let e=window.scrollY,t=[],n=[];for(let a of this.abschnitte){let o=a.getBoundingClientRect();t.push(Math.round(o.top+e)),n.push(o.height)}for(let a=1;a<t.length;a++)t[a]<=t[a-1]&&(t[a]=t[a-1]+1);this.y=t,this.hoehe=n,this.ende=t.length?t[t.length-1]+n[n.length-1]:0;let i=t.length,r=i>1?Math.min(n[i-1],n[i-2]):n[0]||1;this.fahrtEnde=i?t[i-1]+Math.max(1,r):0,this.yg=this.anker.length>i?[...t,this.fahrtEnde]:t}weg(e){let t=this.yg,n=this.anker,i=Math.min(t.length,n.length);if(!i)return 0;if(e<=t[0])return n[0];if(e>=t[i-1])return n[i-1];let r=0;for(;r<i-2&&e>=t[r+1];)r++;let a=at((e-t[r])/(t[r+1]-t[r]));return n[r]+(n[r+1]-n[r])*this.gleich(r,a)}stand(e){let t=this.yg,n=this.anker,i=Math.min(t.length,n.length);if(!i)return 0;if(e<=n[0])return t[0];if(e>=n[i-1])return t[i-1]-(t===this.y?0:2);let r=0;for(;r<i-2&&e>=n[r+1];)r++;let a=at((e-n[r])/(n[r+1]-n[r])),o=0,l=1;for(let c=0;c<24;c++){let h=(o+l)/2;this.gleich(r,h)<a?o=h:l=h}return t[r]+(t[r+1]-t[r])*(o+l)/2}gleich(e,t){let n=this.tabellen[e];if(!n||n.length<2)return t;let i=t*(n.length-1),r=Math.min(n.length-2,Math.floor(i));return n[r]+(n[r+1]-n[r])*(i-r)}abschnitt(e=window.scrollY){let t=this.y,n=0;for(;n<t.length-1&&e>=t[n+1];)n++;return n}stelle(){this.yIst=window.scrollY,this.ziel=this.weg(this.yIst),this.g=this.ziel,this.v=0}update(e){if(this.fest!=null)return this.g=this.ziel=this.fest,this.v=0,this.bewegt=!0,this;let t=window.scrollY;this.bewegt=t!==this.yIst,this.yIst=t,this.ziel=this.weg(t);let n=this.g,i=this.ziel-this.g;Math.abs(i)<4e-4?this.g=this.ziel:(this.g+=i*(1-Math.exp(-e/dw)),this.bewegt=!0);let r=e>0?(this.g-n)/e:0;return this.v+=(r-this.v)*(1-Math.exp(-e/.08)),Math.abs(this.v)<1e-5&&(this.v=0),this}}});var Uu,Ex,Sx,Tx=ut(()=>{Uu={quer:[0,1,2,3,4,5,6,7,8,8.62,9],hoch:[0,1,2,3,4,5,6,7,8,8.62,9]},Ex={quer:[0,1.5,2.36,3.5,4.55,5.82,6.5,7.5,8.2,9],hoch:[0,1.5,2.32,3.5,4.5,5.72,6.5,7.5,8.2,9]},Sx=s=>Math.min(8,s)});function wx(s,e=!1){let t=document.createElement("pre");t.style.cssText="position:fixed;left:8px;top:calc(56px + env(safe-area-inset-top));z-index:99;margin:0;padding:8px 10px;border-radius:10px;background:rgba(0,0,0,.82);color:#7ff;max-width:calc(100vw - 16px);overflow:hidden;font:11px/1.35 ui-monospace,Menlo,monospace;pointer-events:none;white-space:pre-wrap",document.body.appendChild(t);let n=()=>{let c=document.getElementById("welt"),h=c?c.getBoundingClientRect():{width:0,height:0,left:0},u=document.createElement("div");u.style.cssText="position:fixed;left:0;right:0;top:0;height:100lvh;visibility:hidden;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",document.body.appendChild(u);let f=getComputedStyle(u),d=`innen ${window.innerWidth}\xD7${window.innerHeight}  html ${document.documentElement.clientWidth}\xD7${document.documentElement.clientHeight}  vv ${window.visualViewport?Math.round(window.visualViewport.width)+"\xD7"+Math.round(window.visualViewport.height):"\u2013"}
fest ${u.offsetWidth}\xD7${u.offsetHeight}  Rand l${parseInt(f.paddingLeft)} r${parseInt(f.paddingRight)} o${parseInt(f.paddingTop)} u${parseInt(f.paddingBottom)}  Leinwand ${Math.round(h.width)}\xD7${Math.round(h.height)} ab ${Math.round(h.left)}  Puffer ${c?c.width+"\xD7"+c.height:"\u2013"}`;return u.remove(),d};t.textContent=`Messung wartet auf \u201EBereit\u201C \u2026
`+n(),window.addEventListener("resize",()=>{s.bereit||(t.textContent=`Messung wartet auf \u201EBereit\u201C \u2026
`+n())}),setTimeout(()=>{s.bereit||(t.textContent=`Messung wartet auf \u201EBereit\u201C \u2026
`+n())},1500);let i=()=>{let c=s.welt,h=s.schaerfe,u=(s.probe||[]).map(d=>`${d.stufe}@${d.dpr} ${d.arbeit!=null?d.arbeit+" ms Arbeit, ":""}Abstand ${d.median} ms`).join(" | "),f=c.ladeZeiten||{};return`Stufe ${c.stufeName}${c.spar?" sparsam":""}  Pixeldichte ${+c.dpr.toFixed(2)}${c.handy&&h?` (${+h.unten.toFixed(2)}\u2013${+h.oben.toFixed(2)})`:""}  ${s.fpsDeckel?"Deckel "+s.fpsDeckel+"/s  ":""}Kerne ${navigator.hardwareConcurrency||"?"}
${s.grund||"ohne R\xFCckstufung"}
Welt zeigt nach ${((s.bereitNach||0)/1e3).toFixed(1)} s (ab Start des B\xFCndels); Etappen ms: ${Object.entries(f).map(([d,p])=>d+" "+p).join(", ")}${u?`
Probe: `+u:""}`},r=()=>{let c=0,h=performance.now(),u=()=>{c++,requestAnimationFrame(u)};requestAnimationFrame(u),setInterval(()=>{let f=performance.now(),d=s.arbeitLauf||{n:0,summe:0},p=`g ${s.rollen.g.toFixed(2)}  Schirm ${Math.round(1e3*c/(f-h))}/s  gezeichnet ${Math.round(1e3*d.n/(f-h))}/s  Arbeit ${d.n?(d.summe/d.n).toFixed(1):"\u2013"} ms  Aufrufe ${s.welt.renderer.info.render.calls}  Dreiecke ${Math.round(s.welt.renderer.info.render.triangles/1e3)}k`;c=0,h=f,d.n=0,d.summe=0,t.textContent=`${n()}
${i()}
${p}`},1e3)},a=async()=>{let c=s.welt,h=s.arbeitLauf,u=x=>new Promise(M=>setTimeout(M,x)),f=x=>{c.dprDeckel=x,c.groesse(c.w,c.h,c.dprWunsch,!0)},d=(x,M)=>{c.post.setzeSchlank(x),c.post.groesse(c.w*c.dpr,c.h*c.dpr,0,M)},p=c.dpr,b=[];c.szene.traverse(x=>{x.material&&x.material.uniforms===c.umgebung.himmelUniforms&&b.push(x)});let m=(x,M)=>{for(let v of x)v.visible=M},g=c.convoy.autos.map(x=>x.g),_=[["alles",()=>{},()=>{}],["Pixeldichte 1",()=>f(1),()=>f(p)],["Pixeldichte 2",()=>f(2),()=>f(p)],["ohne Stra\xDFe",()=>{c.strasse.mesh.visible=!1},()=>{c.strasse.mesh.visible=!0}],["ohne Spiegel",()=>c.strasse.setzeSpiegel(!1),()=>c.strasse.setzeSpiegel(!0)],["ohne Regen",()=>c.regen.setzeAnzahl(0),()=>c.regen.setzeAnzahl(c.stufe.regen)],["ohne Gel\xE4nde",()=>{c.umgebung.gelaende.visible=!1},()=>{c.umgebung.gelaende.visible=!0}],["ohne Himmel",()=>m(b,!1),()=>m(b,!0)],["ohne Autos",()=>m(g,!1),()=>m(g,!0)],["ohne Bloom/FXAA",()=>d(!0,c.stufe.bloom),()=>d(!1,c.stufe.bloom)],["Szene leer",()=>{c.szene.visible=!1},()=>{c.szene.visible=!0}],["alles (Kontrolle)",()=>{},()=>{}]],E=[i()];for(let[x,M,v]of _){try{M()}catch{E.push(x+" Fehler");continue}await u(700),h.summe=0,h.n=0,await u(1600),E.push(`${x.padEnd(18)} ${h.n?(h.summe/h.n).toFixed(1):"\u2013"} ms  (${h.n} Bilder)`);try{v()}catch{}t.textContent=E.join(`
`)}E.push("fertig"),t.textContent=E.join(`
`)},o=()=>{s.bereit&&(e===2||s.allesGeladen)?setTimeout(e===3?a:e?r:l,1500):setTimeout(o,200)},l=()=>{let c=Math.max(1,document.documentElement.scrollHeight-window.innerHeight),h=[["vor",0,c,25e3],["zur\xFCck",c,0,1e4],["vor 2",0,c,25e3]],u=[],f=0,d=0,p=0,b=[],m=[],g=_=>{let[E,x,M,v]=h[f];if(!d)d=_,p=_,b=[],m=[];else{let D=_-p;b.push(D),D>50&&m.push(s.rollen.g.toFixed(1)),p=_}let S=Math.min(1,(_-d)/v);if(window.scrollTo(0,x+(M-x)*S),t.textContent=`Messung: ${E} ${Math.round(S*100)} %`,S<1){requestAnimationFrame(g);return}let y=b.filter(D=>D>0),w=[...y].sort((D,H)=>D-H);if(u.push({name:E,bilder:y.length,ueber50:y.filter(D=>D>50).length,ueber33:y.filter(D=>D>34).length,max:Math.round(w[w.length-1]||0),orte:m.slice(0,14).join(" "),fps:Math.round(1e3*y.length/y.reduce((D,H)=>D+H,0))}),f++,d=0,f<h.length){requestAnimationFrame(g);return}let P=(performance.getEntriesByType("resource").reduce((D,H)=>D+(H.transferSize||H.encodedBodySize||0),0)/1e6).toFixed(1),I=[`FREQ Messung  ${new Date().toLocaleTimeString()}`,n(),i(),`bereit nach ${((s.bereitNach||0)/1e3).toFixed(1)} s, ${P} MB`];for(let D of u)I.push(`${D.name.padEnd(7)} ${D.fps} fps  >50ms: ${D.ueber50}  >33ms: ${D.ueber33}  max ${D.max} ms`,D.orte?`  bei g ${D.orte}`:"");t.textContent=I.join(`
`),s.messung=u,console.log("FREQ Messung",JSON.stringify(u))};requestAnimationFrame(g)};o()}var Rx=ut(()=>{});var mw=kx(()=>{px();_x();Mx();Tx();ln();Rx();function pw(s){let e="";try{let o=s.getExtension("WEBGL_debug_renderer_info");e=o?String(s.getParameter(o.UNMASKED_RENDERER_WEBGL)):""}catch{}let t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform),n=/iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform),i=navigator.hardwareConcurrency||4,r="hoch",a=/SwiftShader|llvmpipe|Software|Basic Render/i.test(e);return a?r="niedrig":t?r=(n||i>=6)&&!(navigator.deviceMemory&&navigator.deviceMemory<=2)?"mittel":"niedrig":i<=2&&(r="niedrig"),{stufe:r,renderer:e,mobil:t,software:a,ios:n,handy:t&&!a}}function Ax(){let s=document.documentElement,e=document.getElementById("welt"),t=document.querySelector("main"),n=Array.from(document.querySelectorAll("main .kapitel")),i=window.FREQ=Object.assign(window.FREQ||{},{bereit:!1,allesGeladen:!1,fps:0,stufe:"",grund:""});if(!e||!t||n.length===0)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){s.classList.add("ruhig"),i.grund="reduzierte Bewegung";return}let r=null;try{r=e.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch{r=null}if(!r){s.classList.add("ohne-webgl"),i.grund="kein WebGL2";return}let a=performance.now(),o={};for(let ie of n)for(let[F,Fe]of Object.entries(ie.dataset))if(F.startsWith("w")){let Xe=F.slice(1);o[Xe.charAt(0).toLowerCase()+Xe.slice(1)]=Fe}let l=document.body.dataset.basis||"",c=pw(r),h=new URLSearchParams(location.search),u=Pl[h.get("stufe")]?h.get("stufe"):c.stufe,f=c.handy,d=document.querySelector(".marke img"),p=document.querySelector('script[src*="welt.js"]'),b=(p&&p.getAttribute("src")||"").split("?v=")[1]||document.body.dataset.version||"",m=new Fu(e,{woerter:o,stufe:u,basis:l,context:r,logoMarke:d,version:b,handy:f,ios:c.ios,test:h.get("test")?JSON.parse(h.get("test")):null,aus:h.get("aus")||""}),g={oben:2,unten:1.5,scharf:!1,fest:!1},_=parseFloat(h.get("dpr"))||0;f&&(m.dprStufe=2);let E=()=>window.innerWidth/Math.max(1,window.innerHeight)<.9,x=E()?"hoch":"quer",M=new Nu(n,Uu[x],x),v=s.classList.contains("buehne"),S=document.querySelector(".finale-logo"),y=document.getElementById("neigung");Object.assign(i,{welt:m,rollen:M,info:c,stufe:u,schaerfe:g,grenzen:Uu,standbild:Ex,fpsDeckel:parseFloat(h.get("deckel"))||0}),s.classList.add("welt-laedt");let w={x:0,y:0},P=null,I=0;window.addEventListener("pointermove",ie=>{ie.pointerType==="mouse"&&(w.x=(ie.clientX/window.innerWidth-.5)*2,w.y=(ie.clientY/window.innerHeight-.5)*2,I=performance.now())},{passive:!0});let D=()=>{window.addEventListener("deviceorientation",ie=>{if(ie.gamma==null||ie.beta==null)return;let F=Math.abs(window.orientation||screen.orientation&&screen.orientation.angle||0)===90,Fe=F?ie.beta:ie.gamma,Xe=F?ie.gamma:ie.beta;P={x:at(Fe/28,-1,1),y:at((Xe-(F?0:48))/28,-1,1)}},{passive:!0})};if(y){let ie=window.DeviceOrientationEvent;ie&&typeof ie.requestPermission=="function"&&c.mobil?y.addEventListener("click",async()=>{try{await ie.requestPermission()==="granted"&&(D(),y.setAttribute("aria-pressed","true"),y.classList.add("an"))}catch{}}):ie&&c.mobil&&D()}let H=document.createElement("div");H.setAttribute("aria-hidden","true"),H.style.cssText="position:fixed;left:0;right:0;top:0;height:100vh;height:100lvh;visibility:hidden;pointer-events:none;z-index:-1",document.body.appendChild(H);let C=0,U=()=>{let ie=Math.max(window.innerWidth,H.clientWidth),F=Math.max(window.innerHeight,H.clientHeight);e.style.width=ie+"px",e.style.height=F+"px";let Fe=window.devicePixelRatio||1;f&&(g.oben=Math.min(Fe,2,Math.sqrt(32e5/Math.max(1,ie*F))),g.unten=Math.min(Fe,1.5,g.oben),m.dprDeckel=_||(g.scharf?g.oben:g.unten)),m.groesse(ie,F,Math.min(Fe,c.software?.35:2));let Xe=E()?"hoch":"quer",k=M.y.join()+"|"+x;if(Xe!==x&&(x=Xe,M.setzeAnker(Uu[Xe],Xe)),M.messen(),M.y.join()+"|"+x!==k){let T=M.g;M.stelle(),Math.abs(M.g-T)>.02&&m.sprung()}I=performance.now()};if(window.addEventListener("resize",U),window.ResizeObserver){let ie=new ResizeObserver(()=>U());ie.observe(H),ie.observe(t)}window.visualViewport&&window.visualViewport.addEventListener("resize",U),window.addEventListener("orientationchange",()=>{setTimeout(U,250),setTimeout(U,900)}),U();let L={start:0,fertig:!1,anteil:1,bereit:!1},B=2600,N=n[n.length-1],z=ie=>{if(v)return(N._s||0)>ie;let F=S.getBoundingClientRect();return F.width>10&&F.top<m.h*.72&&F.bottom>m.h*.2},W=()=>{L.bereit||!S||(L.bereit=!0,z(.05)?L.fertig=!0:(L.anteil=0,L._gesetzt=0,S.style.setProperty("--bogen","0deg")))},Y=-1,ae=!1,he=!1,ce=n.map(()=>!1),_e=()=>{for(let ie=0;ie<n.length;ie++){let F=!he&&Math.min(8,Sx(ie)+1)<=Y;if(F===ce[ie])continue;ce[ie]=F;let Fe=n[ie];Fe.classList.toggle("live",F),F?setTimeout(()=>{ce[ie]&&Fe.classList.add("nur-welt")},1100):Fe.classList.remove("nur-welt"),ie===n.length-1&&(F?W():S&&(S.style.setProperty("--bogen","372deg"),L.fertig=!0))}},$e=()=>{let ie=M.yIst<0?window.scrollY:M.yIst,F=m.h||window.innerHeight;for(let Fe=0;Fe<n.length;Fe++)if(ce[Fe]&&M.y[Fe]<ie+F&&M.y[Fe]+M.hoehe[Fe]>ie)return!0;return!1},ne=[],oe=0;window.addEventListener("scroll",()=>{oe=performance.now()},{passive:!0});let Te=()=>new Promise(ie=>{let F=performance.now(),Fe=()=>{let Xe=performance.now();Xe-oe<220&&Xe-F<4e3?setTimeout(Fe,80):ie()};setTimeout(Fe,0)}),ke=()=>ae?new Promise(ie=>ne.push(ie)):Te(),de={n:0,zeit:0,start:0,langsam:0,flott:0,arbeit:0},Oe=(ie,F,Fe,Xe)=>{if(!Fe){de.n=0,de.zeit=0,de.start=0,de.arbeit=0;return}if(de.start||(de.start=F),de.n++,de.zeit+=ie,de.arbeit+=Xe,F-de.start<1200||de.n<12)return;let k=de.n/de.zeit,T=de.arbeit/de.n;i.fps=Math.round(k),i.arbeit=+T.toFixed(1),de.n=0,de.zeit=0,de.start=0,de.arbeit=0;let j=i.fpsDeckel||60;k<j*.7?(de.langsam++,de.flott=0):(de.langsam=Math.max(0,de.langsam-1),k>j*.92&&T<7&&de.flott++),h.get("fest")!=="1"&&(de.langsam>=2?(de.langsam=0,f?g.scharf&&!_?(g.scharf=!1,g.fest=!0,C=1,i.grund=(i.grund?i.grund+"; ":"")+"langsam "+Math.round(k)+" fps: Pixeldichte "+g.unten):i.fpsDeckel||(i.fpsDeckel=30,g.fest=!0,i.grund=(i.grund?i.grund+"; ":"")+"langsam "+Math.round(k)+" fps: 30 Bilder/s"):m.dpr>1&&!m.dprDeckel&&(C=2,i.grund="langsam "+Math.round(k)+" fps: Pixeldichte 1")):f&&de.flott>=2&&!g.scharf&&!g.fest&&!i.fpsDeckel&&g.oben>g.unten+.05&&!_&&(de.flott=0,g.scharf=!0,g.fest=!0,C=1,i.grund=(i.grund?i.grund+"; ":"")+"l\xE4uft m\xFChelos: Pixeldichte "+ +g.oben.toFixed(2)))},gt=performance.now(),le=0,fe=0,ve=i.arbeitLauf={an:/^[23]$/.test(h.get("messen")||""),summe:0,n:0},be=new Uint8Array(4),Se=ie=>{requestAnimationFrame(Se);let F=(ie-gt)/1e3;gt=ie,(F<=0||F>.5)&&(F=1/60),M.update(F),M.bewegt&&(I=ie);let Fe=ie-I<300,Xe=ae&&$e();if(ne.length&&(!Fe||!Xe)&&ne.shift()(),!Xe&&!fe){le=0;return}!Fe&&C&&(C===2&&(m.dprDeckel=1),C=0,U());let k=Fe?i.fpsDeckel||(f?60:0):f?30:0;if(k&&le&&ie-le<1e3/k-3&&!fe)return;let T=le?(ie-le)/1e3:F;(T<=0||T>.5)&&(T=1/60),le=ie,fe&&fe--;let j=M.g,Z=Math.min(8,Math.max(0,Math.floor(j))),V=null;S&&L.bereit&&j>8.55&&(V=S.getBoundingClientRect(),!L.fertig&&!L.start&&z(.55)&&(L.start=ie),L.start&&!L.fertig&&(L.anteil=at((ie-L.start)/B),L.anteil>=1&&(L.fertig=!0)),L._gesetzt!==L.anteil&&(L._gesetzt=L.anteil,S.style.setProperty("--bogen",(372*(L.fertig?1:L.anteil*L.anteil*(3-2*L.anteil))).toFixed(1)+"deg")));let q={g:j,v:M.v,kapitel:Z,u:j-Z,maus:P||w,logoRect:V,zeit:ie/1e3,komet:L.start&&!L.fertig?L.anteil:null},$=performance.now();if(m.bild(T,q),ve.an)try{r.readPixels(0,0,1,1,r.RGBA,r.UNSIGNED_BYTE,be)}catch{}let K=performance.now()-$;ve.an&&(ve.summe+=K,ve.n++),Oe(T,ie,Fe,K)};requestAnimationFrame(Se);let je=async ie=>{Y=ie,i.bereitBis=ie,ae||(M.messen(),M.stelle(),m.sprung(),ae=!0,fe=4,await new Promise(F=>{let Fe=()=>fe>0?requestAnimationFrame(Fe):F();requestAnimationFrame(Fe)}),s.classList.remove("welt-laedt"),s.classList.add("welt-an"),i.bereit=!0,i.bereitNach=Math.round(performance.now()-a),y&&window.DeviceOrientationEvent&&typeof window.DeviceOrientationEvent.requestPermission=="function"&&c.mobil&&(y.hidden=!1)),_e(),I=performance.now()};m.laden({pause:Te,ruhe:ke,etappe:je}).then(()=>{if(i.allesGeladen=!0,navigator.serviceWorker&&navigator.serviceWorker.ready&&m.lader){let ie=[p&&p.src,...m.lader.angefragt.map(F=>new URL(m.lader.url(F[0]),location.href).href),new URL(m.lader.url("welt/vorab.json"),location.href).href].filter(Boolean);navigator.serviceWorker.ready.then(F=>{F.active&&F.active.postMessage({merken:ie})}).catch(()=>{})}}).catch(ie=>{console.error("Welt konnte nicht laden",ie),he=!0,_e(),s.classList.remove("welt-laedt","welt-an"),s.classList.add("ohne-webgl"),i.grund="Laden fehlgeschlagen: "+(ie&&ie.message)}),e.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),he=!0,ae=!1,_e(),s.classList.remove("welt-an","welt-laedt"),s.classList.add("ohne-webgl"),i.grund=i.grund&&/Zwischenspeicher/.test(i.grund)?i.grund:"Grafikkontext verloren",i.bereit=!1});let ze=()=>{try{let ie=history.state||{},F=ie.weltNeu||0;return F>=2?!1:(history.replaceState({...ie,weltNeu:F+1},""),!0)}catch{return!1}};window.addEventListener("pagehide",ie=>{if(!(!ie.persisted||he)){i.grund="im Zwischenspeicher: Grafik freigegeben";try{let F=r.getExtension("WEBGL_lose_context");F&&F.loseContext()}catch{}}});let et=()=>{he&&document.visibilityState==="visible"&&ze()&&location.reload()};window.addEventListener("pageshow",ie=>{ie.persisted&&et()}),document.addEventListener("visibilitychange",et),i.setze=ie=>{window.scrollTo(0,M.stand(ie)),M.stelle(),Math.abs(M.g-ie)>.002&&(M.g=ie),m.sprung(),fe=Math.max(fe,3),I=performance.now()},i.zeigeG=ie=>{M.fest=ie,fe=Math.max(fe,3)},i.live=()=>ce.slice(),/^[123]$/.test(h.get("messen")||"")&&wx(i,+h.get("messen")>1?+h.get("messen"):!1),i.bodenPruefen=ie=>bx(m,ie),i.baeumeBei=(ie,F,Fe,Xe)=>xx(m,ie,F,Fe,Xe),i.strassePruefen=ie=>vx(m,ie),i.gewicht=()=>performance.getEntriesByType("resource").reduce((ie,F)=>ie+(F.transferSize||F.encodedBodySize||0),0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ax):Ax()});mw();})();
