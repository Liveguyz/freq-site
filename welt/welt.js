(()=>{var lt=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var Ob=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function Gb(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vb(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Im(){let s=Xr("canvas");return s.style.display="block",s}function Ja(...s){let e="THREE."+s.shift();Kr?Kr("log",e,...s):console.log(e,...s)}function Lm(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ke(...s){s=Lm(s);let e="THREE."+s.shift();if(Kr)Kr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function tt(...s){s=Lm(s);let e="THREE."+s.shift();if(Kr)Kr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ws(...s){let e=s.join(" ");e in rp||(rp[e]=!0,Ke(...s))}function km(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ai(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function gf(s,e){return(s%e+e)%e}function Wb(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qb(s,e,t){return s!==e?(t-s)/(e-s):0}function Xa(s,e,t){return(1-t)*s+t*e}function Xb(s,e,t,n){return Xa(s,e,1-Math.exp(-t*n))}function Kb(s,e=1){return e-Math.abs(gf(s,e*2)-e)}function jb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Yb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Jb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Zb(s,e){return s+Math.random()*(e-s)}function $b(s){return s*(.5-Math.random())}function Qb(s){s!==void 0&&(ap=s);let e=ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ex(s){return s*qa}function tx(s){return s*Ks}function nx(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ix(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function sx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function rx(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ax(){let s={enabled:!0,workingColorSpace:wt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ft&&(i.r=Yi(i.r),i.g=Yi(i.g),i.b=Yi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ft&&(i.r=Gr(i.r),i.g=Gr(i.g),i.b=Gr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bt?Ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[wt]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:e,whitePoint:n,transfer:Ft,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),s}function Yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function ru(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Jl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}function lu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function gu(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Hs.fromArray(s,r);let o=i.x*Math.abs(Hs.x)+i.y*Math.abs(Hs.y)+i.z*Math.abs(Hs.z),l=e.dot(Hs),c=t.dot(Hs),h=n.dot(Hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function gx(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function bx(s){Math.abs(s)>65504&&Ke("DataUtils.toHalfFloat(): Value out of range."),s=mt(s,-65504,65504),ji.floatView[0]=s;let e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function xx(s){let e=s>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(s&1023)]+ji.exponentTable[e],ji.floatView[0]}function xl(s,e,t,n,i,r){Ur.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ba.x=r*Ur.x-i*Ur.y,Ba.y=i*Ur.x+r*Ur.y):Ba.copy(Ur),s.copy(e),s.x+=Ba.x,s.y+=Ba.y,s.applyMatrix4(Nm)}function Tx(s,e,t,n,i,r,a,o){let l;if(e.side===wn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===zn,o),l===null)return null;Rl.copy(o),Rl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:s}}function Al(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,El),s.getVertexPosition(l,Sl),s.getVertexPosition(c,Tl);let h=Tx(s,e,t,n,El,Sl,Tl,Ep);if(h){let u=new w;Ki.getBarycoord(Ep,El,Sl,Tl,u),i&&(h.uv=Ki.getInterpolatedAttribute(i,o,l,c,u,new me)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,o,l,c,u,new me)),a&&(h.normal=Ki.getInterpolatedAttribute(a,o,l,c,u,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new w,materialIndex:0};Ki.getNormal(El,Sl,Tl,f.normal),h.face=f,h.barycoord=u}return h}function kl(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Ql.fromBufferAttribute(o,i),ec.fromBufferAttribute(o,r),t.distanceSqToSegment(Ql,ec,Tu,Lp)>n)return;Tu.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Tu);if(!(c<e.near||c>e.far))return{distance:c,point:Lp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}function Np(s,e,t,n,i,r,a){let o=Nu.distanceSqToPoint(s);if(o<t){let l=new w;Nu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function bf(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}function zp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Px(s,e){let t=1-s;return t*t*e}function Ix(s,e){return 2*(1-s)*s*e}function Lx(s,e){return s*s*e}function Ka(s,e,t,n){return Px(s,e)+Ix(s,t)+Lx(s,n)}function kx(s,e){let t=1-s;return t*t*t*e}function Dx(s,e){let t=1-s;return 3*t*t*s*e}function Fx(s,e){return 3*(1-s)*s*s*e}function Nx(s,e){return s*s*s*e}function ja(s,e,t,n,i){return kx(s,e)+Dx(s,t)+Fx(s,n)+Nx(s,i)}function Ux(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Um(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gx(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let f=t;f<i;f+=t){let d=s[f],m=s[f+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return po(r,a,t,o,l,c,0),a}function Um(s,e,t,n,i){let r;if(i===Qx(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Hp(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Hp(a/n|0,s[a],s[a+1],r);return r&&na(r,r.next)&&(go(r),r=r.next),r}function Zs(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(na(t,t.next)||Zt(t.prev,t,t.next)===0)){if(go(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function po(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Kx(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?zx(s,n,i,r):Bx(s)){e.push(l.i,s.i,c.i),go(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Hx(Zs(s),e),po(s,e,t,n,i,r,2)):a===2&&Ox(s,e,t,n,i,r):po(Zs(s),e,t,n,i,r,1);break}}}function Bx(s){let e=s.prev,t=s,n=s.next;if(Zt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),f=Math.max(i,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Wa(i,o,r,l,a,c,m.x,m.y)&&Zt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function zx(s,e,t,n){let i=s.prev,r=s,a=s.next;if(Zt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,l,c),m=Math.min(h,u,f),b=Math.max(o,l,c),p=Math.max(h,u,f),g=Uu(d,m,e,t,n),y=Uu(b,p,e,t,n),M=s.prevZ,x=s.nextZ;for(;M&&M.z>=g&&x&&x.z<=y;){if(M.x>=d&&M.x<=b&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&Wa(o,h,l,u,c,f,M.x,M.y)&&Zt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=d&&x.x<=b&&x.y>=m&&x.y<=p&&x!==i&&x!==a&&Wa(o,h,l,u,c,f,x.x,x.y)&&Zt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=b&&M.y>=m&&M.y<=p&&M!==i&&M!==a&&Wa(o,h,l,u,c,f,M.x,M.y)&&Zt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=b&&x.y>=m&&x.y<=p&&x!==i&&x!==a&&Wa(o,h,l,u,c,f,x.x,x.y)&&Zt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Hx(s,e){let t=s;do{let n=t.prev,i=t.next.next;!na(n,i)&&zm(n,t,t.next,i)&&mo(n,i)&&mo(i,n)&&(e.push(n.i,t.i,i.i),go(t),go(t.next),t=s=i),t=t.next}while(t!==s);return Zs(t)}function Ox(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jx(a,o)){let l=Hm(a,o);a=Zs(a,a.next),l=Zs(l,l.next),po(a,e,t,n,i,r,0),po(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Gx(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Um(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Yx(c))}i.sort(Vx);for(let r=0;r<i.length;r++)t=Wx(i[r],t);return t}function Vx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Wx(s,e){let t=qx(s,e);if(!t)return e;let n=Hm(t,s);return Zs(n,n.next),Zs(t,t.next)}function qx(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(na(s,t))return t;do{if(na(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Bm(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);mo(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Xx(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Xx(s,e){return Zt(s.prev,s,e.prev)<0&&Zt(e.next,s,s.next)<0}function Kx(s,e,t,n){let i=s;do i.z===0&&(i.z=Uu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,jx(i)}function jx(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function Uu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Yx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Bm(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Wa(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Bm(s,e,t,n,i,r,a,o)}function Jx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Zx(s,e)&&(mo(s,e)&&mo(e,s)&&$x(s,e)&&(Zt(s.prev,s,e.prev)||Zt(s,e.prev,e))||na(s,e)&&Zt(s.prev,s,s.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function na(s,e){return s.x===e.x&&s.y===e.y}function zm(s,e,t,n){let i=Ul(Zt(s,e,t)),r=Ul(Zt(s,e,n)),a=Ul(Zt(t,n,s)),o=Ul(Zt(t,n,e));return!!(i!==r&&a!==o||i===0&&Nl(s,t,e)||r===0&&Nl(s,n,e)||a===0&&Nl(t,s,n)||o===0&&Nl(t,e,n))}function Nl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ul(s){return s>0?1:s<0?-1:0}function Zx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&zm(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function mo(s,e){return Zt(s.prev,s,s.next)<0?Zt(s,e,s.next)>=0&&Zt(s,s.prev,e)>=0:Zt(s,e,s.prev)<0||Zt(s,s.next,e)<0}function $x(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Hm(s,e){let t=Bu(s.i,s.x,s.y),n=Bu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hp(s,e,t,n){let i=Bu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function go(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qx(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}function Op(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Gp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}function tv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Vp(i))i.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Vp(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Fn(s){let e={};for(let t=0;t<s.length;t++){let n=rr(s[t]);for(let i in n)e[i]=n[i]}return e}function Vp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}function gs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Gl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function rv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Wp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function av(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function Om(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function ov(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function lv(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Om(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=ov(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function qp(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}function cv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return Ss;case"color":return _o;case"quaternion":return ts;case"bool":case"boolean":return Qi;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cv(s.type);if(s.times===void 0){let n=[],i=[];av(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Gl(s.settings)&&(t.settings={inTangents:gs(s.settings.inTangents,Float32Array),outTangents:gs(s.settings.outTangents,Float32Array)}),t}function Xp(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function $p(s,e){return s.distance-e.distance}function qu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)qu(r[a],e,t,!0)}}function yf(s,e,t,n){let i=vv(n);switch(t){case hf:return s*e;case Ac:return s*e/i.components*i.byteLength;case Cc:return s*e/i.components*i.byteLength;case Cs:return s*e*2/i.components*i.byteLength;case Pc:return s*e*2/i.components*i.byteLength;case uf:return s*e*3/i.components*i.byteLength;case Qn:return s*e*4/i.components*i.byteLength;case Ic:return s*e*4/i.components*i.byteLength;case Po:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lo:case ko:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kc:case Fc:return Math.max(s,16)*Math.max(e,8)/4;case Lc:case Dc:return Math.max(s,8)*Math.max(e,8)/2;case Nc:case Uc:case zc:case Hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bc:case Do:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nh:case ih:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rh:case ah:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Fo:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(s){switch(s){case _n:case af:return{byteLength:1,components:1};case oa:case of:case gn:return{byteLength:2,components:1};case wc:case Rc:return{byteLength:2,components:4};case xi:case Tc:case Dn:return{byteLength:4,components:1};case lf:case cf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var Qp,Ku,em,nr,tm,sa,zn,wn,Rt,ki,ws,Nt,ju,Yu,yc,rs,nm,im,sm,rm,am,Ro,om,lm,Ju,Zu,cm,hm,um,fm,dm,pm,mm,gm,bm,Vl,Wl,ql,Vr,Xl,Kl,jl,Yl,Mc,xm,vm,Wn,$u,Qu,ef,Ao,tf,nf,sf,Iu,_m,rf,Rs,ir,ra,Ec,Co,Sn,dn,Wr,sn,Sc,sr,ft,aa,Jt,_n,af,of,oa,Tc,xi,Dn,gn,wc,Rc,la,lf,cf,hf,uf,Qn,wi,As,Ac,Cc,Cs,Pc,Ic,Po,Io,Lo,ko,Lc,kc,Dc,Fc,Nc,Uc,Bc,zc,Hc,Do,Oc,Gc,Vc,Wc,qc,Xc,Kc,jc,Yc,Jc,Zc,$c,Qc,eh,th,nh,ih,sh,rh,ah,Fo,oh,qs,Xs,Hl,Lu,ku,Du,Fu,ym,ff,No,ca,Mm,Uo,Em,Bt,nt,wt,Ya,Ft,Ol,Sm,Tm,wm,Rm,lh,Am,Cm,ch,Pm,df,pf,mf,mi,qr,rp,Kr,Dm,Ri,In,ap,qa,Ks,zt,Mf,me,Ot,Ef,w,iu,op,Sf,ut,su,lp,cp,bt,Sr,Jl,ox,jr,lx,au,xn,Tf,Ct,Zl,en,Za,$l,_c,Pe,Tr,ui,cx,hx,us,cl,Yn,hp,up,Ai,Yr,ux,fp,wr,Oi,hl,ka,fx,dx,dp,pp,mp,gp,px,Rr,ou,St,it,mx,Jr,Fm,fs,ul,_e,Ln,$a,Ji,fi,Gi,cu,Vi,Ar,Cr,bp,hu,uu,fu,du,pu,mu,Ki,pn,Wi,di,fl,Pr,Ir,Lr,ds,ps,zs,Da,dl,pl,Hs,ji,bs,fn,ml,vx,at,Qa,eo,ct,_x,Fa,bu,Gn,yx,ri,xu,kr,Jn,Na,En,ht,js,Bn,xs,vu,Mx,Ex,Zn,Sx,kn,Tn,Dr,Ua,Fr,Nr,Ur,Ba,Nm,gl,za,bl,xp,_u,vp,An,vl,_p,to,qi,yu,_l,yl,vs,st,yp,Os,Ml,Mp,El,Sl,Tl,Mu,wl,Ep,Rl,J,Ha,Sp,Tp,wx,wp,Cl,Eu,Rp,Su,no,Zr,_s,Ap,Rx,io,Zi,Br,Cp,Pl,Pp,Ax,Oa,Ga,Kt,Gs,Cx,Il,$r,Qr,Ql,ec,Ip,Va,Ll,Tu,Lp,Ys,kp,Dp,Js,so,ea,Fp,Nu,Dl,Fl,ys,ro,Mt,Ms,tc,ao,Ve,Ci,xt,$i,nc,$n,ta,ic,Up,Bp,wu,Ru,Au,Pi,oo,sc,lo,rc,co,ho,uo,ac,oc,fo,Es,zu,Vs,$s,ev,bo,ot,mn,gi,xo,ha,iv,sv,Et,lc,Le,$t,vo,cc,hc,Ii,uc,fc,dc,pc,Vn,Qi,_o,es,mc,ts,ns,Ss,yo,Ti,gc,Gm,bi,Xi,Hu,Qs,zr,bc,Mo,er,tr,Eo,Cu,Kp,jp,ia,Bl,zl,Si,So,ms,Yp,Jp,Yt,Ou,is,Gu,vn,Li,Vu,Ts,ss,Pu,To,Hr,Or,xc,vc,vf,uv,_f,fv,dv,pv,mv,gv,bv,xv,Wu,Wt,gT,Zp,wo,wf,Xu,Rf=lt(()=>{Qp=0,Ku=1,em=2,nr=1,tm=2,sa=3,zn=0,wn=1,Rt=2,ki=0,ws=1,Nt=2,ju=3,Yu=4,yc=5,rs=100,nm=101,im=102,sm=103,rm=104,am=200,Ro=201,om=202,lm=203,Ju=204,Zu=205,cm=206,hm=207,um=208,fm=209,dm=210,pm=211,mm=212,gm=213,bm=214,Vl=0,Wl=1,ql=2,Vr=3,Xl=4,Kl=5,jl=6,Yl=7,Mc=0,xm=1,vm=2,Wn=0,$u=1,Qu=2,ef=3,Ao=4,tf=5,nf=6,sf=7,Iu="attached",_m="detached",rf=300,Rs=301,ir=302,ra=303,Ec=304,Co=306,Sn=1e3,dn=1001,Wr=1002,sn=1003,Sc=1004,sr=1005,ft=1006,aa=1007,Jt=1008,_n=1009,af=1010,of=1011,oa=1012,Tc=1013,xi=1014,Dn=1015,gn=1016,wc=1017,Rc=1018,la=1020,lf=35902,cf=35899,hf=1021,uf=1022,Qn=1023,wi=1026,As=1027,Ac=1028,Cc=1029,Cs=1030,Pc=1031,Ic=1033,Po=33776,Io=33777,Lo=33778,ko=33779,Lc=35840,kc=35841,Dc=35842,Fc=35843,Nc=36196,Uc=37492,Bc=37496,zc=37488,Hc=37489,Do=37490,Oc=37491,Gc=37808,Vc=37809,Wc=37810,qc=37811,Xc=37812,Kc=37813,jc=37814,Yc=37815,Jc=37816,Zc=37817,$c=37818,Qc=37819,eh=37820,th=37821,nh=36492,ih=36494,sh=36495,rh=36283,ah=36284,Fo=36285,oh=36286,qs=2300,Xs=2301,Hl=2302,Lu=2303,ku=2400,Du=2401,Fu=2402,ym=2500,ff=0,No=1,ca=2,Mm=3200,Uo=0,Em=1,Bt="",nt="srgb",wt="srgb-linear",Ya="linear",Ft="srgb",Ol=7680,Sm=519,Tm=512,wm=513,Rm=514,lh=515,Am=516,Cm=517,ch=518,Pm=519,df=35044,pf=35048,mf="300 es",mi=2e3,qr=2001;rp={},Kr=null;Dm={[Vl]:Wl,[ql]:jl,[Xl]:Yl,[Vr]:Kl,[Wl]:Vl,[jl]:ql,[Yl]:Xl,[Kl]:Vr},Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ap=1234567,qa=Math.PI/180,Ks=180/Math.PI;zt={DEG2RAD:qa,RAD2DEG:Ks,generateUUID:ai,clamp:mt,euclideanModulo:gf,mapLinear:Wb,inverseLerp:qb,lerp:Xa,damp:Xb,pingpong:Kb,smoothstep:jb,smootherstep:Yb,randInt:Jb,randFloat:Zb,randFloatSpread:$b,seededRandom:Qb,degToRad:ex,radToDeg:tx,isPowerOfTwo:nx,ceilPowerOfTwo:ix,floorPowerOfTwo:sx,setQuaternionFromProperEuler:rx,normalize:Ut,denormalize:pi},Mf=class Mf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mf.prototype.isVector2=!0;me=Mf,Ot=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],b=r[a+3];if(u!==b||l!==f||c!==d||h!==m){let p=l*f+c*d+h*m+u*b;p<0&&(f=-f,d=-d,m=-m,b=-b,p=-p);let g=1-o;if(p<.9995){let y=Math.acos(p),M=Math.sin(y);g=Math.sin(g*y)/M,o=Math.sin(o*y)/M,l=l*g+f*o,c=c*g+d*o,h=h*g+m*o,u=u*g+b*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+m*o,u=u*g+b*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-o*d,e[t+2]=c*m+h*d+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ef=class Ef{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(op.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ef.prototype.isVector3=!0;w=Ef,iu=new w,op=new Ot,Sf=class Sf{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],b=i[0],p=i[3],g=i[6],y=i[1],M=i[4],x=i[7],E=i[2],v=i[5],T=i[8];return r[0]=a*b+o*y+l*E,r[3]=a*p+o*M+l*v,r[6]=a*g+o*x+l*T,r[1]=c*b+h*y+u*E,r[4]=c*p+h*M+u*v,r[7]=c*g+h*x+u*T,r[2]=f*b+d*y+m*E,r[5]=f*p+d*M+m*v,r[8]=f*g+d*x+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=d*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(su.makeScale(e,t)),this}rotate(e){return Ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(su.makeRotation(-e)),this}translate(e,t){return Ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sf.prototype.isMatrix3=!0;ut=Sf,su=new ut,lp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt=ax();Jl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=Xr("canvas")),Sr.width=e.width,Sr.height=e.height;let i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Yi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yi(t[n]/255)*255):t[n]=Yi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ox=0,jr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ru(i[a].image)):r.push(ru(i[a]))}else r=ru(i);n.url=r}return t||(e.images[this.uuid]=n),n}};lx=0,au=new w,xn=class s extends Ri{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=dn,i=dn,r=ft,a=Jt,o=Qn,l=_n,c=s.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=ai(),this.name="",this.source=new jr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=rf;xn.DEFAULT_ANISOTROPY=1;Tf=class Tf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],b=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,x=(d+1)/2,E=(g+1)/2,v=(h+f)/4,T=(u+b)/4,_=(m+p)/4;return M>x&&M>E?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=v/n,r=T/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=v/i,r=_/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=T/r,i=_/r),this.set(n,i,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-b)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Tf.prototype.isVector4=!0;Ct=Tf,Zl=class extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new xn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new jr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Za=class extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},$l=class extends xn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=sn,this.minFilter=sn,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},_c=class _c{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,m,b,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,b,p)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,b,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=b,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _c().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),a=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-b*c,t[9]=-o*l,t[2]=b-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,b=c*u;t[0]=f+b*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=b+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,b=c*u;t[0]=f-b*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+b,t[1]=l*u,t[5]=b*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-b*u}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+b,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cx,e,hx)}lookAt(e,t,n){let i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),us.crossVectors(n,Yn),us.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),us.crossVectors(n,Yn)),us.normalize(),cl.crossVectors(Yn,us),i[0]=us.x,i[4]=cl.x,i[8]=Yn.x,i[1]=us.y,i[5]=cl.y,i[9]=Yn.y,i[2]=us.z,i[6]=cl.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],b=n[6],p=n[10],g=n[14],y=n[3],M=n[7],x=n[11],E=n[15],v=i[0],T=i[4],_=i[8],R=i[12],C=i[1],I=i[5],B=i[9],G=i[13],k=i[2],z=i[6],N=i[10],L=i[14],O=i[3],U=i[7],q=i[11],j=i[15];return r[0]=a*v+o*C+l*k+c*O,r[4]=a*T+o*I+l*z+c*U,r[8]=a*_+o*B+l*N+c*q,r[12]=a*R+o*G+l*L+c*j,r[1]=h*v+u*C+f*k+d*O,r[5]=h*T+u*I+f*z+d*U,r[9]=h*_+u*B+f*N+d*q,r[13]=h*R+u*G+f*L+d*j,r[2]=m*v+b*C+p*k+g*O,r[6]=m*T+b*I+p*z+g*U,r[10]=m*_+b*B+p*N+g*q,r[14]=m*R+b*G+p*L+g*j,r[3]=y*v+M*C+x*k+E*O,r[7]=y*T+M*I+x*z+E*U,r[11]=y*_+M*B+x*N+E*q,r[15]=y*R+M*G+x*L+E*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],b=e[7],p=e[11],g=e[15],y=l*d-c*f,M=o*d-c*u,x=o*f-l*u,E=a*d-c*h,v=a*f-l*h,T=a*u-o*h;return t*(b*y-p*M+g*x)-n*(m*y-p*E+g*v)+i*(m*M-b*E+g*T)-r*(m*x-b*v+p*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],b=e[13],p=e[14],g=e[15],y=t*o-n*a,M=t*l-i*a,x=t*c-r*a,E=n*l-i*o,v=n*c-r*o,T=i*c-r*l,_=h*b-u*m,R=h*p-f*m,C=h*g-d*m,I=u*p-f*b,B=u*g-d*b,G=f*g-d*p,k=y*G-M*B+x*I+E*C-v*R+T*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/k;return e[0]=(o*G-l*B+c*I)*z,e[1]=(i*B-n*G-r*I)*z,e[2]=(b*T-p*v+g*E)*z,e[3]=(f*v-u*T-d*E)*z,e[4]=(l*C-a*G-c*R)*z,e[5]=(t*G-i*C+r*R)*z,e[6]=(p*x-m*T-g*M)*z,e[7]=(h*T-f*x+d*M)*z,e[8]=(a*B-o*C+c*_)*z,e[9]=(n*C-t*B-r*_)*z,e[10]=(m*v-b*x+g*y)*z,e[11]=(u*x-h*v-d*y)*z,e[12]=(o*R-a*I-l*_)*z,e[13]=(t*I-n*R+i*_)*z,e[14]=(b*M-m*E-p*y)*z,e[15]=(h*E-u*M+f*y)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,b=a*h,p=a*u,g=o*u,y=l*c,M=l*h,x=l*u,E=n.x,v=n.y,T=n.z;return i[0]=(1-(b+g))*E,i[1]=(d+x)*E,i[2]=(m-M)*E,i[3]=0,i[4]=(d-x)*v,i[5]=(1-(f+g))*v,i[6]=(p+y)*v,i[7]=0,i[8]=(m+M)*T,i[9]=(p-y)*T,i[10]=(1-(f+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Tr.set(i[0],i[1],i[2]).length(),o=Tr.set(i[4],i[5],i[6]).length(),l=Tr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,h=1/o,u=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=mi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,b;if(l)m=r/(a-r),b=a*r/(a-r);else if(o===mi)m=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===qr)m=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,b;if(l)m=1/(a-r),b=a/(a-r);else if(o===mi)m=-2/(a-r),b=-(a+r)/(a-r);else if(o===qr)m=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};_c.prototype.isMatrix4=!0;Pe=_c,Tr=new w,ui=new Pe,cx=new w(0,0,0),hx=new w(1,1,1),us=new w,cl=new w,Yn=new w,hp=new Pe,up=new Ot,Ai=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return up.setFromEuler(this),this.setFromQuaternion(up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";Yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ux=0,fp=new w,wr=new Ot,Oi=new Pe,hl=new w,ka=new w,fx=new w,dx=new Ot,dp=new w(1,0,0),pp=new w(0,1,0),mp=new w(0,0,1),gp={type:"added"},px={type:"removed"},Rr={type:"childadded",child:null},ou={type:"childremoved",child:null},St=class s extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new Ai,n=new Ot,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ut}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,t){return fp.copy(e).applyQuaternion(this.quaternion),this.position.add(fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hl.copy(e):hl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(ka,hl,this.up):Oi.lookAt(hl,ka,this.up),this.quaternion.setFromRotationMatrix(Oi),i&&(Oi.extractRotation(i.matrixWorld),wr.setFromRotationMatrix(Oi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(px),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),Rr.child=e,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,fx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};St.DEFAULT_UP=new w(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;it=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},mx={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let p=t.getJointPose(b,n),g=this._getHandJoint(c,b);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},ul={h:0,s:0,l:0};_e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=gf(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lu(a,r,e+1/3),this.g=lu(a,r,e),this.b=lu(a,r,e-1/3)}return bt.colorSpaceToWorking(this,i),this}setStyle(e,t=nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Fm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return bt.workingToColorSpace(Ln.copy(this),e),Math.round(mt(Ln.r*255,0,255))*65536+Math.round(mt(Ln.g*255,0,255))*256+Math.round(mt(Ln.b*255,0,255))}getHexString(e=nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,i=Ln.g,r=Ln.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=nt){bt.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,i=Ln.b;return e!==nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+t,fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fs),e.getHSL(ul);let n=Xa(fs.h,ul.h,t),i=Xa(fs.s,ul.s,t),r=Xa(fs.l,ul.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new _e;_e.NAMES=Fm;$a=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ji=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},fi=new w,Gi=new w,cu=new w,Vi=new w,Ar=new w,Cr=new w,bp=new w,hu=new w,uu=new w,fu=new w,du=new Ct,pu=new Ct,mu=new Ct,Ki=class s{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),fi.subVectors(e,t),i.cross(fi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){fi.subVectors(i,t),Gi.subVectors(n,t),cu.subVectors(e,t);let a=fi.dot(fi),o=fi.dot(Gi),l=fi.dot(cu),c=Gi.dot(Gi),h=Gi.dot(cu),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(du,r.x),a.addScaledVector(pu,r.y),a.addScaledVector(mu,r.z),a}static isFrontFacing(e,t,n,i){return fi.subVectors(n,t),Gi.subVectors(e,t),fi.cross(Gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),fi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Ar.subVectors(i,n),Cr.subVectors(r,n),hu.subVectors(e,n);let l=Ar.dot(hu),c=Cr.dot(hu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,i);let h=Ar.dot(uu),u=Cr.dot(uu);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ar,a);fu.subVectors(e,r);let d=Ar.dot(fu),m=Cr.dot(fu);if(m>=0&&d<=m)return t.copy(r);let b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Cr,o);let p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return bp.subVectors(r,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(bp,o);let g=1/(p+b+f);return a=b*g,o=f*g,t.copy(n).addScaledVector(Ar,a).addScaledVector(Cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,di):di.fromBufferAttribute(r,a),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fl.copy(n.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),dl.subVectors(this.max,Da),Pr.subVectors(e.a,Da),Ir.subVectors(e.b,Da),Lr.subVectors(e.c,Da),ds.subVectors(Ir,Pr),ps.subVectors(Lr,Ir),zs.subVectors(Pr,Lr);let t=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-zs.z,zs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,zs.z,0,-zs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-zs.y,zs.x,0];return!gu(t,Pr,Ir,Lr,dl)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,Pr,Ir,Lr,dl))?!1:(pl.crossVectors(ds,ps),t=[pl.x,pl.y,pl.z],gu(t,Pr,Ir,Lr,dl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wi=[new w,new w,new w,new w,new w,new w,new w,new w],di=new w,fl=new pn,Pr=new w,Ir=new w,Lr=new w,ds=new w,ps=new w,zs=new w,Da=new w,dl=new w,pl=new w,Hs=new w;ji=gx();bs=class{static toHalfFloat(e){return bx(e)}static fromHalfFloat(e){return xx(e)}},fn=new w,ml=new me,vx=0,at=class extends Ri{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=df,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},Qa=class extends at{constructor(e,t,n){super(new Uint16Array(e),t,n)}},eo=class extends at{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ct=class extends at{constructor(e,t,n){super(new Float32Array(e),t,n)}},_x=new pn,Fa=new w,bu=new w,Gn=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_x.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);let t=Fa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(bu)),this.expandByPoint(Fa.copy(e.center).sub(bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yx=0,ri=new Pe,xu=new St,kr=new w,Jn=new pn,Na=new pn,En=new w,ht=class s extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gb(e)?eo:Qa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,n){return ri.makeTranslation(e,t,n),this.applyMatrix4(ri),this}scale(e,t,n){return ri.makeScale(e,t,n),this.applyMatrix4(ri),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(Jn.min,Na.min),Jn.expandByPoint(En),En.addVectors(Jn.max,Na.max),Jn.expandByPoint(En)):(Jn.expandByPoint(Na.min),Jn.expandByPoint(Na.max))}Jn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)En.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(En));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)En.fromBufferAttribute(o,c),l&&(kr.fromBufferAttribute(e,c),En.add(kr)),i=Math.max(i,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new at(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new w,l[_]=new w;let c=new w,h=new w,u=new w,f=new me,d=new me,m=new me,b=new w,p=new w;function g(_,R,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,R),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),o[_].add(b),o[R].add(b),o[C].add(b),l[_].add(p),l[R].add(p),l[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,R=y.length;_<R;++_){let C=y[_],I=C.start,B=C.count;for(let G=I,k=I+B;G<k;G+=3)g(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let M=new w,x=new w,E=new w,v=new w;function T(_){E.fromBufferAttribute(i,_),v.copy(E);let R=o[_];M.copy(R),M.sub(E.multiplyScalar(E.dot(R))).normalize(),x.crossVectors(v,R);let I=x.dot(l[_])<0?-1:1;a.setXYZW(_,M.x,M.y,M.z,I)}for(let _=0,R=y.length;_<R;++_){let C=y[_],I=C.start,B=C.count;for(let G=I,k=I+B;G<k;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new w,r=new w,a=new w,o=new w,l=new w,c=new w,h=new w,u=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),b=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let b=0,p=l.length;b<p;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new at(f,h,u)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},js=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=df,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Bn=new w,xs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),r=Ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},vu=new w,Mx=new w,Ex=new ut,Zn=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vu.subVectors(n,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ex.getNormalMatrix(e),i=this.coplanarPoint(vu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sx=0,kn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ws,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ju,this.blendDst=Zu,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ol,this.stencilZFail=Ol,this.stencilZPass=Ol,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new _e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Zn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends kn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ua=new w,Fr=new w,Nr=new w,Ur=new me,Ba=new me,Nm=new Pe,gl=new w,za=new w,bl=new w,xp=new me,_u=new me,vp=new me,An=class extends St{constructor(e=new Tn){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new js(t,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new xs(n,3,0,!1)),Dr.setAttribute("uv",new xs(n,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new me(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fr.setFromMatrixScale(this.matrixWorld),Nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fr.multiplyScalar(-Nr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;xl(gl.set(-.5,-.5,0),Nr,a,Fr,i,r),xl(za.set(.5,-.5,0),Nr,a,Fr,i,r),xl(bl.set(.5,.5,0),Nr,a,Fr,i,r),xp.set(0,0),_u.set(1,0),vp.set(1,1);let o=e.ray.intersectTriangle(gl,za,bl,!1,Ua);if(o===null&&(xl(za.set(-.5,.5,0),Nr,a,Fr,i,r),_u.set(0,1),o=e.ray.intersectTriangle(gl,bl,za,!1,Ua),o===null))return;let l=e.ray.origin.distanceTo(Ua);l<e.near||l>e.far||t.push({distance:l,point:Ua.clone(),uv:Ki.getInterpolation(Ua,gl,za,bl,xp,_u,vp,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};vl=new w,_p=new w,to=class extends St{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){vl.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(vl);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){vl.setFromMatrixPosition(e.matrixWorld),_p.setFromMatrixPosition(this.matrixWorld);let n=vl.distanceTo(_p)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},qi=new w,yu=new w,_l=new w,yl=new w,vs=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),yl.copy(this.origin).sub(yu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_l),o=yl.dot(this.direction),l=-yl.dot(_l),c=yl.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let b=1/h;u*=b,f*=b,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yu).addScaledVector(_l,f),d}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,m=t.x-a.x,b=t.y-a.y,p=t.z-a.z,g=n.x-a.x,y=n.y-a.y,M=n.z-a.z,x=Math.abs(l),E=Math.abs(c),v=Math.abs(h),T,_,R,C,I,B,G,k,z,N,L,O;if(x>=E&&x>=v?(R=l,B=u,z=m,O=g,l>=0?(T=c,_=h,C=f,I=d,G=b,k=p,N=y,L=M):(T=h,_=c,C=d,I=f,G=p,k=b,N=M,L=y)):E>=v?(R=c,B=f,z=b,O=y,c>=0?(T=h,_=l,C=d,I=u,G=p,k=m,N=M,L=g):(T=l,_=h,C=u,I=d,G=m,k=p,N=g,L=M)):(R=h,B=d,z=p,O=M,h>=0?(T=l,_=c,C=u,I=f,G=m,k=b,N=g,L=y):(T=c,_=l,C=f,I=u,G=b,k=m,N=y,L=g)),R===0)return null;let U=T/R,q=_/R,j=1/R,oe=C-U*B,Q=I-q*B,Ee=G-U*z,Se=k-q*z,je=N-U*O,ne=L-q*O,le=je*Se-ne*Ee,be=oe*ne-Q*je,Ge=Ee*Q-Se*oe;if(i){if(le<0||be<0||Ge<0)return null}else if((le<0||be<0||Ge<0)&&(le>0||be>0||Ge>0))return null;let Y=le+be+Ge;if(Y===0)return null;let fe=j*(le*B+be*z+Ge*O);return(Y>0?fe<0:fe>0)?null:this.at(fe/Y,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yp=new Pe,Os=new vs,Ml=new Gn,Mp=new w,El=new w,Sl=new w,Tl=new w,Mu=new w,wl=new w,Ep=new w,Rl=new w,J=class extends St{constructor(e=new ht,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){wl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Mu.fromBufferAttribute(u,e),a?wl.addScaledVector(Mu,h):wl.addScaledVector(Mu.sub(t),h))}t.add(wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(r),Os.copy(e.ray).recast(e.near),!(Ml.containsPoint(Os.origin)===!1&&(Os.intersectSphere(Ml,Mp)===null||Os.origin.distanceToSquared(Mp)>(e.far-e.near)**2))&&(yp.copy(r).invert(),Os.copy(e.ray).applyMatrix4(yp),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){let p=f[m],g=a[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,E=M;x<E;x+=3){let v=o.getX(x),T=o.getX(x+1),_=o.getX(x+2);i=Al(this,g,e,n,c,h,u,v,T,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let p=m,g=b;p<g;p+=3){let y=o.getX(p),M=o.getX(p+1),x=o.getX(p+2);i=Al(this,a,e,n,c,h,u,y,M,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=f.length;m<b;m++){let p=f[m],g=a[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,E=M;x<E;x+=3){let v=x,T=x+1,_=x+2;i=Al(this,g,e,n,c,h,u,v,T,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let p=m,g=b;p<g;p+=3){let y=p,M=p+1,x=p+2;i=Al(this,a,e,n,c,h,u,y,M,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};Ha=new Ct,Sp=new Ct,Tp=new Ct,wx=new Ct,wp=new Pe,Cl=new w,Eu=new Gn,Rp=new Pe,Su=new vs,no=class extends J{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cl),this.boundingBox.expandByPoint(Cl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cl),this.boundingSphere.expandByPoint(Cl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eu.copy(this.boundingSphere),Eu.applyMatrix4(i),e.ray.intersectsSphere(Eu)!==!1&&(Rp.copy(i).invert(),Su.copy(e.ray).applyMatrix4(Rp),!(this.boundingBox!==null&&Su.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Su)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ct,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_m?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Sp.fromBufferAttribute(i.attributes.skinIndex,e),Tp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ha.copy(t),t.set(0,0,0,0)):(Ha.set(...t,1),t.set(0,0,0)),Ha.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Tp.getComponent(r);if(a!==0){let o=Sp.getComponent(r);wp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(wx.copy(Ha).applyMatrix4(wp),a)}}return t.isVector4&&(t.w=Ha.w),t.applyMatrix4(this.bindMatrixInverse)}},Zr=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},_s=class extends xn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=sn,h=sn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ap=new Pe,Rx=new Pe,io=class s{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Rx;Ap.multiplyMatrices(o,t[r]),Ap.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _s(t,e,e,Qn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ke("Skeleton: No bone found with UUID:",r),a=new Zr),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Zi=class extends at{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new Pe,Cp=new Pe,Pl=[],Pp=new pn,Ax=new Pe,Oa=new J,Ga=new Gn,Kt=class extends J{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ax)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Pp.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Ga.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Oa.geometry=this.geometry,Oa.material=this.material,Oa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(n),e.ray.intersectsSphere(Ga)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Br),Cp.multiplyMatrices(n,Br),Oa.matrixWorld=Cp,Oa.raycast(e,Pl);for(let a=0,o=Pl.length;a<o;a++){let l=Pl[a];l.instanceId=r,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _s(new Float32Array(i*this.count),i,this.count,Ac,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gs=new Gn,Cx=new me(.5,.5),Il=new w,$r=class{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],b=r[9],p=r[10],g=r[11],y=r[12],M=r[13],x=r[14],E=r[15];if(i[0].setComponents(c-a,d-h,g-m,E-y).normalize(),i[1].setComponents(c+a,d+h,g+m,E+y).normalize(),i[2].setComponents(c+o,d+u,g+b,E+M).normalize(),i[3].setComponents(c-o,d-u,g-b,E-M).normalize(),n)i[4].setComponents(l,f,p,x).normalize(),i[5].setComponents(c-l,d-f,g-p,E-x).normalize();else if(i[4].setComponents(c-l,d-f,g-p,E-x).normalize(),t===mi)i[5].setComponents(c+l,d+f,g+p,E+x).normalize();else if(t===qr)i[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let t=Cx.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Il.x=i.normal.x>0?e.max.x:e.min.x,Il.y=i.normal.y>0?e.max.y:e.min.y,Il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Qr=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ql=new w,ec=new w,Ip=new Pe,Va=new vs,Ll=new Gn,Tu=new w,Lp=new w,Ys=class extends St{constructor(e=new ht,t=new Qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ql.fromBufferAttribute(t,i-1),ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ql.distanceTo(ec);e.setAttribute("lineDistance",new ct(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(i),Ll.radius+=r,e.ray.intersectsSphere(Ll)===!1)return;Ip.copy(i).invert(),Va.copy(e.ray).applyMatrix4(Ip);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=d,p=m-1;b<p;b+=c){let g=h.getX(b),y=h.getX(b+1),M=kl(this,e,Va,l,g,y,b);M&&t.push(M)}if(this.isLineLoop){let b=h.getX(m-1),p=h.getX(d),g=kl(this,e,Va,l,b,p,m-1);g&&t.push(g)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let b=d,p=m-1;b<p;b+=c){let g=kl(this,e,Va,l,b,b+1,b);g&&t.push(g)}if(this.isLineLoop){let b=kl(this,e,Va,l,m-1,d,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};kp=new w,Dp=new w,Js=class extends Ys{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)kp.fromBufferAttribute(t,i),Dp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kp.distanceTo(Dp);e.setAttribute("lineDistance",new ct(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},so=class extends Ys{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ea=class extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fp=new Pe,Nu=new vs,Dl=new Gn,Fl=new w,ys=class extends St{constructor(e=new ht,t=new ea){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(i),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;Fp.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(Fp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,b=d;m<b;m++){let p=c.getX(m);Fl.fromBufferAttribute(u,p),Np(Fl,p,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,b=d;m<b;m++)Fl.fromBufferAttribute(u,m),Np(Fl,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};ro=class extends xn{constructor(e=[],t=Rs,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mt=class extends xn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ms=class extends xn{constructor(e,t,n=xi,i,r,a,o=sn,l=sn,c,h=wi,u=1){if(h!==wi&&h!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},tc=class extends Ms{constructor(e,t=xi,n=Rs,i,r,a=sn,o=sn,l,c=wi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ao=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ve=class s extends ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2));function m(b,p,g,y,M,x,E,v,T,_,R){let C=x/T,I=E/_,B=x/2,G=E/2,k=v/2,z=T+1,N=_+1,L=0,O=0,U=new w;for(let q=0;q<N;q++){let j=q*I-G;for(let oe=0;oe<z;oe++){let Q=oe*C-B;U[b]=Q*y,U[p]=j*M,U[g]=k,c.push(U.x,U.y,U.z),U[b]=0,U[p]=0,U[g]=v>0?1:-1,h.push(U.x,U.y,U.z),u.push(oe/T),u.push(1-q/_),L+=1}}for(let q=0;q<_;q++)for(let j=0;j<T;j++){let oe=f+j+z*q,Q=f+j+z*(q+1),Ee=f+(j+1)+z*(q+1),Se=f+(j+1)+z*q;l.push(oe,Q,Se),l.push(Q,Ee,Se),O+=6}o.addGroup(d,O,R),d+=O,f+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ci=class s extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new w,h=new me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xt=class s extends ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,b=[],p=n/2,g=0;y(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function y(){let x=new w,E=new w,v=0,T=(t-e)/n;for(let _=0;_<=r;_++){let R=[],C=_/r,I=C*(t-e)+e;for(let B=0;B<=i;B++){let G=B/i,k=G*l+o,z=Math.sin(k),N=Math.cos(k);E.x=I*z,E.y=-C*n+p,E.z=I*N,u.push(E.x,E.y,E.z),x.set(z,T,N).normalize(),f.push(x.x,x.y,x.z),d.push(G,1-C),R.push(m++)}b.push(R)}for(let _=0;_<i;_++)for(let R=0;R<r;R++){let C=b[R][_],I=b[R+1][_],B=b[R+1][_+1],G=b[R][_+1];(e>0||R!==0)&&(h.push(C,I,G),v+=3),(t>0||R!==r-1)&&(h.push(I,B,G),v+=3)}c.addGroup(g,v,0),g+=v}function M(x){let E=m,v=new me,T=new w,_=0,R=x===!0?e:t,C=x===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,p*C,0),f.push(0,C,0),d.push(.5,.5),m++;let I=m;for(let B=0;B<=i;B++){let k=B/i*l+o,z=Math.cos(k),N=Math.sin(k);T.x=R*N,T.y=p*C,T.z=R*z,u.push(T.x,T.y,T.z),f.push(0,C,0),v.x=z*.5+.5,v.y=N*.5*C+.5,d.push(v.x,v.y),m++}for(let B=0;B<i;B++){let G=E+B,k=I+B;x===!0?h.push(k,k+1,G):h.push(k+1,k,G),_+=3}c.addGroup(g,_,x===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$i=class s extends xt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nc=class s extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let M=new w,x=new w,E=new w;for(let v=0;v<t.length;v+=3)d(t[v+0],M),d(t[v+1],x),d(t[v+2],E),l(M,x,E,y)}function l(y,M,x,E){let v=E+1,T=[];for(let _=0;_<=v;_++){T[_]=[];let R=y.clone().lerp(x,_/v),C=M.clone().lerp(x,_/v),I=v-_;for(let B=0;B<=I;B++)B===0&&_===v?T[_][B]=R:T[_][B]=R.clone().lerp(C,B/I)}for(let _=0;_<v;_++)for(let R=0;R<2*(v-_)-1;R++){let C=Math.floor(R/2);R%2===0?(f(T[_][C+1]),f(T[_+1][C]),f(T[_][C])):(f(T[_][C+1]),f(T[_+1][C+1]),f(T[_+1][C]))}}function c(y){let M=new w;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){let y=new w;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];let x=p(y)/2/Math.PI+.5,E=g(y)/Math.PI+.5;a.push(x,1-E)}m(),u()}function u(){for(let y=0;y<a.length;y+=6){let M=a[y+0],x=a[y+2],E=a[y+4],v=Math.max(M,x,E),T=Math.min(M,x,E);v>.9&&T<.1&&(M<.2&&(a[y+0]+=1),x<.2&&(a[y+2]+=1),E<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){let x=y*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function m(){let y=new w,M=new w,x=new w,E=new w,v=new me,T=new me,_=new me;for(let R=0,C=0;R<r.length;R+=9,C+=6){y.set(r[R+0],r[R+1],r[R+2]),M.set(r[R+3],r[R+4],r[R+5]),x.set(r[R+6],r[R+7],r[R+8]),v.set(a[C+0],a[C+1]),T.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),E.copy(y).add(M).add(x).divideScalar(3);let I=p(E);b(v,C+0,y,I),b(T,C+2,M,I),b(_,C+4,x,I)}}function b(y,M,x,E){E<0&&y.x===1&&(a[M]=y.x-1),x.x===0&&x.z===0&&(a[M]=E/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}},$n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new me:new w);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new w,i=[],r=[],a=[],o=new w,l=new Pe;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new w)}r[0]=new w,a[0]=new w;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(mt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(mt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ta=class extends $n{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ic=class extends ta{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Up=new w,Bp=new w,wu=new bf,Ru=new bf,Au=new bf,Pi=class extends $n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Bp.subVectors(i[0],i[1]).add(i[0]),c=Bp);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Up.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Up),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),b=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);b<1e-4&&(b=1),m<1e-4&&(m=b),p<1e-4&&(p=b),wu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,b,p),Ru.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,b,p),Au.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,b,p)}else this.curveType==="catmullrom"&&(wu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ru.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Au.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(wu.calc(l),Ru.calc(l),Au.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};oo=class extends $n{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ja(e,i.x,r.x,a.x,o.x),ja(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sc=class extends $n{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ja(e,i.x,r.x,a.x,o.x),ja(e,i.y,r.y,a.y,o.y),ja(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lo=class extends $n{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rc=class extends $n{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends $n{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ka(e,i.x,r.x,a.x),Ka(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends $n{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ka(e,i.x,r.x,a.x),Ka(e,i.y,r.y,a.y),Ka(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends $n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(zp(o,l.x,c.x,h.x,u.x),zp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new me().fromArray(i))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:ic,CatmullRomCurve3:Pi,CubicBezierCurve:oo,CubicBezierCurve3:sc,EllipseCurve:ta,LineCurve:lo,LineCurve3:rc,QuadraticBezierCurve:co,QuadraticBezierCurve3:ho,SplineCurve:uo}),oc=class extends $n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ac[i.type]().fromJSON(i))}return this}},fo=class extends oc{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new lo(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new co(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new oo(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new uo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new ta(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Es=class extends fo{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new fo().fromJSON(i))}return this}};zu=class{static triangulate(e,t,n=2){return Ux(e,t,n)}},Vs=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Op(e),Gp(n,e);let a=e.length;t.forEach(Op);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Gp(n,t[l]);let o=zu.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};$s=class s extends ht{constructor(e=new Es([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ct(i,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:ev,M,x=!1,E,v,T,_;if(g){M=g.getSpacedPoints(h),x=!0,f=!1;let V=g.isCatmullRomCurve3?g.closed:!1;E=g.computeFrenetFrames(h,V),v=new w,T=new w,_=new w}f||(p=0,d=0,m=0,b=0);let R=o.extractPoints(c),C=R.shape,I=R.holes;if(!Vs.isClockWise(C)){C=C.reverse();for(let V=0,ee=I.length;V<ee;V++){let ce=I[V];Vs.isClockWise(ce)&&(I[V]=ce.reverse())}}function G(V){let ce=10000000000000001e-36,he=V[0];for(let de=1;de<=V.length;de++){let Re=de%V.length,De=V[Re],Ue=De.x-he.x,Ye=De.y-he.y,H=Ue*Ue+Ye*Ye,et=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(he.x),Math.abs(he.y)),rt=ce*et*et;if(H<=rt){V.splice(Re,1),de--;continue}he=De}}G(C),I.forEach(G);let k=I.length,z=C;for(let V=0;V<k;V++){let ee=I[V];C=C.concat(ee)}function N(V,ee,ce){return ee||tt("ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(ee,ce)}let L=C.length;function O(V,ee,ce){let he,de,Re,De=V.x-ee.x,Ue=V.y-ee.y,Ye=ce.x-V.x,H=ce.y-V.y,et=De*De+Ue*Ue,rt=De*H-Ue*Ye;if(Math.abs(rt)>Number.EPSILON){let P=Math.sqrt(et),S=Math.sqrt(Ye*Ye+H*H),F=ee.x-Ue/P,D=ee.y+De/P,W=ce.x-H/S,se=ce.y+Ye/S,ae=((W-F)*H-(se-D)*Ye)/(De*H-Ue*Ye);he=F+De*ae-V.x,de=D+Ue*ae-V.y;let te=he*he+de*de;if(te<=2)return new me(he,de);Re=Math.sqrt(te/2)}else{let P=!1;De>Number.EPSILON?Ye>Number.EPSILON&&(P=!0):De<-Number.EPSILON?Ye<-Number.EPSILON&&(P=!0):Math.sign(Ue)===Math.sign(H)&&(P=!0),P?(he=-Ue,de=De,Re=Math.sqrt(et)):(he=De,de=Ue,Re=Math.sqrt(et/2))}return new me(he/Re,de/Re)}let U=[];for(let V=0,ee=z.length,ce=ee-1,he=V+1;V<ee;V++,ce++,he++)ce===ee&&(ce=0),he===ee&&(he=0),U[V]=O(z[V],z[ce],z[he]);let q=[],j,oe=U.concat();for(let V=0,ee=k;V<ee;V++){let ce=I[V];j=[];for(let he=0,de=ce.length,Re=de-1,De=he+1;he<de;he++,Re++,De++)Re===de&&(Re=0),De===de&&(De=0),j[he]=O(ce[he],ce[Re],ce[De]);q.push(j),oe=oe.concat(j)}let Q;if(p===0)Q=Vs.triangulateShape(z,I);else{let V=[],ee=[];for(let ce=0;ce<p;ce++){let he=ce/p,de=d*Math.cos(he*Math.PI/2),Re=m*Math.sin(he*Math.PI/2)+b;for(let De=0,Ue=z.length;De<Ue;De++){let Ye=N(z[De],U[De],Re);be(Ye.x,Ye.y,-de),he===0&&V.push(Ye)}for(let De=0,Ue=k;De<Ue;De++){let Ye=I[De];j=q[De];let H=[];for(let et=0,rt=Ye.length;et<rt;et++){let P=N(Ye[et],j[et],Re);be(P.x,P.y,-de),he===0&&H.push(P)}he===0&&ee.push(H)}}Q=Vs.triangulateShape(V,ee)}let Ee=Q.length,Se=m+b;for(let V=0;V<L;V++){let ee=f?N(C[V],oe[V],Se):C[V];x?(T.copy(E.normals[0]).multiplyScalar(ee.x),v.copy(E.binormals[0]).multiplyScalar(ee.y),_.copy(M[0]).add(T).add(v),be(_.x,_.y,_.z)):be(ee.x,ee.y,0)}for(let V=1;V<=h;V++)for(let ee=0;ee<L;ee++){let ce=f?N(C[ee],oe[ee],Se):C[ee];x?(T.copy(E.normals[V]).multiplyScalar(ce.x),v.copy(E.binormals[V]).multiplyScalar(ce.y),_.copy(M[V]).add(T).add(v),be(_.x,_.y,_.z)):be(ce.x,ce.y,u/h*V)}for(let V=p-1;V>=0;V--){let ee=V/p,ce=d*Math.cos(ee*Math.PI/2),he=m*Math.sin(ee*Math.PI/2)+b;for(let de=0,Re=z.length;de<Re;de++){let De=N(z[de],U[de],he);be(De.x,De.y,u+ce)}for(let de=0,Re=I.length;de<Re;de++){let De=I[de];j=q[de];for(let Ue=0,Ye=De.length;Ue<Ye;Ue++){let H=N(De[Ue],j[Ue],he);x?be(H.x,H.y+M[h-1].y,M[h-1].x+ce):be(H.x,H.y,u+ce)}}}je(),ne();function je(){let V=i.length/3;if(f){let ee=0,ce=L*ee;for(let he=0;he<Ee;he++){let de=Q[he];Ge(de[2]+ce,de[1]+ce,de[0]+ce)}ee=h+p*2,ce=L*ee;for(let he=0;he<Ee;he++){let de=Q[he];Ge(de[0]+ce,de[1]+ce,de[2]+ce)}}else{for(let ee=0;ee<Ee;ee++){let ce=Q[ee];Ge(ce[2],ce[1],ce[0])}for(let ee=0;ee<Ee;ee++){let ce=Q[ee];Ge(ce[0]+L*h,ce[1]+L*h,ce[2]+L*h)}}n.addGroup(V,i.length/3-V,0)}function ne(){let V=i.length/3,ee=0;le(z,ee),ee+=z.length;for(let ce=0,he=I.length;ce<he;ce++){let de=I[ce];le(de,ee),ee+=de.length}n.addGroup(V,i.length/3-V,1)}function le(V,ee){let ce=V.length;for(;--ce>=0;){let he=ce,de=ce-1;de<0&&(de=V.length-1);for(let Re=0,De=h+p*2;Re<De;Re++){let Ue=L*Re,Ye=L*(Re+1),H=ee+he+Ue,et=ee+de+Ue,rt=ee+de+Ye,P=ee+he+Ye;Y(H,et,rt,P)}}}function be(V,ee,ce){l.push(V),l.push(ee),l.push(ce)}function Ge(V,ee,ce){fe(V),fe(ee),fe(ce);let he=i.length/3,de=y.generateTopUV(n,i,he-3,he-2,he-1);ke(de[0]),ke(de[1]),ke(de[2])}function Y(V,ee,ce,he){fe(V),fe(ee),fe(he),fe(ee),fe(ce),fe(he);let de=i.length/3,Re=y.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);ke(Re[0]),ke(Re[1]),ke(Re[3]),ke(Re[1]),ke(Re[2]),ke(Re[3])}function fe(V){i.push(l[V*3+0]),i.push(l[V*3+1]),i.push(l[V*3+2])}function ke(V){r.push(V.x),r.push(V.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return tv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ac[i.type]().fromJSON(i)),new s(n,e.options)}},ev={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new me(r,a),new me(o,l),new me(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],b=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-u),new me(f,1-m),new me(b,1-g)]:[new me(o,1-l),new me(h,1-u),new me(d,1-m),new me(p,1-g)]}};bo=class s extends nc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ot=class s extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],m=[],b=[],p=[];for(let g=0;g<h;g++){let y=g*f-a;for(let M=0;M<c;M++){let x=M*u-r;m.push(x,-y,0),b.push(0,0,1),p.push(M/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){let M=y+c*g,x=y+c*(g+1),E=y+1+c*(g+1),v=y+1+c*g;d.push(M,x,v),d.push(x,E,v)}this.setIndex(d),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(b,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},mn=class s extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new w,f=new w,d=[],m=[],b=[],p=[];for(let g=0;g<=n;g++){let y=[],M=g/n,x=a+M*o,E=e*Math.cos(x),v=Math.sqrt(e*e-E*E),T=0;g===0&&a===0?T=.5/t:g===n&&l===Math.PI&&(T=-.5/t);for(let _=0;_<=t;_++){let R=_/t,C=i+R*r;u.x=-v*Math.cos(C),u.y=E,u.z=v*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),b.push(f.x,f.y,f.z),p.push(R+T,1-M),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let M=h[g][y+1],x=h[g][y],E=h[g+1][y],v=h[g+1][y+1];(g!==0||a>0)&&d.push(M,x,v),(g!==n-1||l<Math.PI)&&d.push(x,E,v)}this.setIndex(d),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(b,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},gi=class s extends ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new w,d=new w,m=new w;for(let b=0;b<=n;b++){let p=a+b/n*o;for(let g=0;g<=i;g++){let y=g/i*r;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(g/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let p=1;p<=i;p++){let g=(i+1)*b+p-1,y=(i+1)*(b-1)+p-1,M=(i+1)*(b-1)+p,x=(i+1)*b+p;l.push(g,y,x),l.push(y,M,x)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},xo=class s extends ht{constructor(e=new ho(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new w,l=new w,c=new me,h=new w,u=[],f=[],d=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function b(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),y(),g()}function p(M){h=e.getPointAt(M/t,h);let x=a.normals[M],E=a.binormals[M];for(let v=0;v<=i;v++){let T=v/i*Math.PI*2,_=Math.sin(T),R=-Math.cos(T);l.x=R*x.x+_*E.x,l.y=R*x.y+_*E.y,l.z=R*x.z+_*E.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let x=1;x<=i;x++){let E=(i+1)*(M-1)+(x-1),v=(i+1)*M+(x-1),T=(i+1)*M+x,_=(i+1)*(M-1)+x;m.push(E,v,_),m.push(v,T,_)}}function y(){for(let M=0;M<=t;M++)for(let x=0;x<=i;x++)c.x=M/t,c.y=x/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};ha={clone:rr,merge:Fn},iv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Et=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iv,this.fragmentShader=sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new _e().setHex(i.value);break;case"v2":this.uniforms[n].value=new me().fromArray(i.value);break;case"v3":this.uniforms[n].value=new w().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ct().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},lc=class extends Et{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Le=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$t=class extends Le{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},vo=class extends kn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uo,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Mc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cc=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hc=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ii=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},uc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Du:r=e,o=2*t-n;break;case Fu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Du:a=e,l=2*n-t;break;case Fu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),b=m*m,p=b*m,g=-f*p+2*f*b-f*m,y=(1+f)*p+(-1.5-2*f)*b+(-.5+f)*m+1,M=(-1-d)*p+(1.5+d)*b+.5*m,x=d*p-d*b;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+y*a[c+E]+M*a[l+E]+x*a[u+E];return r}},fc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},dc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},pc=class extends Ii{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),b=1-m;for(let p=0;p!==o;++p)r[p]=a[c+p]*b+a[l+p]*m;return r}let f=o*2,d=e-1;for(let m=0;m!==o;++m){let b=a[c+m],p=a[l+m],g=d*f+m*2,y=u[g],M=u[g+1],x=e*f+m*2,E=h[x],v=h[x+1],T=lv(n,t,y,E,i);r[m]=Om(T,b,M,v,p)}return r}};Vn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Gl(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case Xs:t=this.InterpolantFactoryMethodLinear;break;case Hl:t=this.InterpolantFactoryMethodSmooth;break;case Lu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Xs;case this.InterpolantFactoryMethodSmooth:return Hl;case this.InterpolantFactoryMethodBezier:return Lu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Gl(this.settings)&&(qp(this.settings.inTangents,e),qp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){tt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Vb(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[f+m]||b!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Gl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=Xs;Qi=class extends Vn{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=qs;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;_o=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}};_o.prototype.ValueTypeName="color";es=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}};es.prototype.ValueTypeName="number";mc=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},ts=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;ns=class extends Vn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=qs;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;Ss=class extends Vn{constructor(e,t,n,i){super(e,t,n,i)}};Ss.prototype.ValueTypeName="vector";yo=class{constructor(e="",t=-1,n=[],i=ym){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hv(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=rv(l);l=Wp(l,1,h),c=Wp(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new es(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Xp(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Xp(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};gc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gm=new gc,bi=class{constructor(e){this.manager=e!==void 0?e:Gm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bi.DEFAULT_MATERIAL_NAME="__DEFAULT";Xi={},Hu=class extends Error{constructor(e,t){super(e),this.response=t}},Qs=class extends bi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ti.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:i});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Xi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,b=0,p=new ReadableStream({start(g){y();function y(){u.read().then(({done:M,value:x})=>{if(M)g.close();else{b+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:d});for(let v=0,T=h.length;v<T;v++){let _=h[v];_.onProgress&&_.onProgress(E)}g.enqueue(x),y()}},M=>{g.error(M)})}}});return new Response(p)}else throw new Hu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Ti.add(`file:${e}`,c);let h=Xi[e];delete Xi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Xi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},zr=new WeakMap,bc=class extends bi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=zr.get(a);u===void 0&&(u=[],zr.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Xr("img");function l(){h(),t&&t(this);let u=zr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}zr.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ti.remove(`image:${e}`);let f=zr.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}zr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ti.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Mo=class extends bi{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new _s,o=new Qs(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):tt(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){let t=new _s;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:dn,e.wrapT=t.wrapT!==void 0?t.wrapT:dn,e.magFilter=t.magFilter!==void 0?t.magFilter:ft,e.minFilter=t.minFilter!==void 0?t.minFilter:ft,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Jt),t.mipmapCount===1&&(e.minFilter=ft),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},er=class extends bi{constructor(e){super(e)}load(e,t,n,i){let r=new xn,a=new bc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},tr=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Eo=class extends tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Cu=new Pe,Kp=new w,jp=new w,ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Cu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Cu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===qr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Cu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bl=new w,zl=new Ot,Si=new w,So=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Bl,zl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Bl,zl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bl,zl,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new w,Yp=new me,Jp=new me,Yt=class extends So{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Yp,Jp),t.subVectors(Jp,Yp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ou=class extends ia{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ks*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},is=class extends tr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gu=class extends ia{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}},vn=class extends tr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends So{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vu=class extends ia{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ts=class extends tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Vu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Pu=new WeakMap,To=class extends bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{Pu.has(a)===!0?(i&&i(Pu.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Pu.set(l,c),Ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Hr=-90,Or=1,xc=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(Hr,Or,e,t);i.layers=this.layers,this.add(i);let r=new Yt(Hr,Or,e,t);r.layers=this.layers,this.add(r);let a=new Yt(Hr,Or,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Hr,Or,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Hr,Or,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Hr,Or,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},vc=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},vf="\\[\\]\\.:\\/",uv=new RegExp("["+vf+"]","g"),_f="[^"+vf+"]",fv="[^"+vf.replace("\\.","")+"]",dv=/((?:WC+[\/:])*)/.source.replace("WC",_f),pv=/(WCOD+)?/.source.replace("WCOD",fv),mv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),bv=new RegExp("^"+dv+pv+mv+gv+"$"),xv=["material","materials","bones","map"],Wu=class{constructor(e,t,n){let i=n||Wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(e){let t=bv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wt.Composite=Wu;Wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Wt.prototype.GetterByBindingType=[Wt.prototype._getValue_direct,Wt.prototype._getValue_array,Wt.prototype._getValue_arrayElement,Wt.prototype._getValue_toArray];Wt.prototype.SetterByBindingTypeAndVersioning=[[Wt.prototype._setValue_direct,Wt.prototype._setValue_direct_setNeedsUpdate,Wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_array,Wt.prototype._setValue_array_setNeedsUpdate,Wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_arrayElement,Wt.prototype._setValue_arrayElement_setNeedsUpdate,Wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wt.prototype._setValue_fromArray,Wt.prototype._setValue_fromArray_setNeedsUpdate,Wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gT=new Float32Array(1),Zp=new Pe,wo=class{constructor(e,t,n=0,i=1/0){this.ray=new vs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zp),this}intersectObject(e,t=!0,n=[]){return qu(e,this,n,t),n.sort($p),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)qu(e[i],this,n,t);return n.sort($p),n}};wf=class wf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};wf.prototype.isMatrix2=!0;Xu=wf;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function h0(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function yv(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],b=u[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let b=u[d];s.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function i1(s,e,t,n,i,r){let a=new _e(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){let x=y.backgroundBlurriness>0;M=e.get(M,x)}return M}function m(y){let M=!1,x=d(y);x===null?p(a,o):x&&x.isColor&&(p(x,1),M=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(y,M){let x=d(M);x&&(x.isCubeTexture||x.mapping===Co)?(c===void 0&&(c=new J(new Ve(1,1,1),new Et({name:"BackgroundCubeMaterial",uniforms:rr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(M.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(u0),c.material.toneMapped=bt.getTransfer(x.colorSpace)!==Ft,(h!==x||u!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new J(new ot(2,2),new Et({name:"BackgroundMaterial",uniforms:rr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=bt.getTransfer(x.colorSpace)!==Ft,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||u!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,u=x.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,M){y.getRGB(hh,xf(s)),t.buffers.color.setClear(hh.r,hh.g,hh.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,p(a,o)},render:m,addToRenderList:b,dispose:g}}function s1(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(I,B,G,k,z){let N=!1,L=u(I,k,G,B);r!==L&&(r=L,c(r.object)),N=d(I,k,G,z),N&&m(I,k,G,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,x(I,B,G,k),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,B,G,k){let z=k.wireframe===!0,N=n[B.id];N===void 0&&(N={},n[B.id]=N);let L=I.isInstancedMesh===!0?I.id:0,O=N[L];O===void 0&&(O={},N[L]=O);let U=O[G.id];U===void 0&&(U={},O[G.id]=U);let q=U[z];return q===void 0&&(q=f(l()),U[z]=q),q}function f(I){let B=[],G=[],k=[];for(let z=0;z<t;z++)B[z]=0,G[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:k,object:I,attributes:{},index:null}}function d(I,B,G,k){let z=r.attributes,N=B.attributes,L=0,O=G.getAttributes();for(let U in O)if(O[U].location>=0){let j=z[U],oe=N[U];if(oe===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),j===void 0||j.attribute!==oe||oe&&j.data!==oe.data)return!0;L++}return r.attributesNum!==L||r.index!==k}function m(I,B,G,k){let z={},N=B.attributes,L=0,O=G.getAttributes();for(let U in O)if(O[U].location>=0){let j=N[U];j===void 0&&(U==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),U==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let oe={};oe.attribute=j,j&&j.data&&(oe.data=j.data),z[U]=oe,L++}r.attributes=z,r.attributesNum=L,r.index=k}function b(){let I=r.newAttributes;for(let B=0,G=I.length;B<G;B++)I[B]=0}function p(I){g(I,0)}function g(I,B){let G=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;G[I]=1,k[I]===0&&(s.enableVertexAttribArray(I),k[I]=1),z[I]!==B&&(s.vertexAttribDivisor(I,B),z[I]=B)}function y(){let I=r.newAttributes,B=r.enabledAttributes;for(let G=0,k=B.length;G<k;G++)B[G]!==I[G]&&(s.disableVertexAttribArray(G),B[G]=0)}function M(I,B,G,k,z,N,L){L===!0?s.vertexAttribIPointer(I,B,G,z,N):s.vertexAttribPointer(I,B,G,k,z,N)}function x(I,B,G,k){b();let z=k.attributes,N=G.getAttributes(),L=B.defaultAttributeValues;for(let O in N){let U=N[O];if(U.location>=0){let q=z[O];if(q===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){let j=q.normalized,oe=q.itemSize,Q=e.get(q);if(Q===void 0)continue;let Ee=Q.buffer,Se=Q.type,je=Q.bytesPerElement,ne=Se===s.INT||Se===s.UNSIGNED_INT||q.gpuType===Tc;if(q.isInterleavedBufferAttribute){let le=q.data,be=le.stride,Ge=q.offset;if(le.isInstancedInterleavedBuffer){for(let Y=0;Y<U.locationSize;Y++)g(U.location+Y,le.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Y=0;Y<U.locationSize;Y++)p(U.location+Y);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let Y=0;Y<U.locationSize;Y++)M(U.location+Y,oe/U.locationSize,Se,j,be*je,(Ge+oe/U.locationSize*Y)*je,ne)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<U.locationSize;le++)g(U.location+le,q.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<U.locationSize;le++)p(U.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ee);for(let le=0;le<U.locationSize;le++)M(U.location+le,oe/U.locationSize,Se,j,oe*je,oe/U.locationSize*le*je,ne)}}else if(L!==void 0){let j=L[O];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(U.location,j);break;case 3:s.vertexAttrib3fv(U.location,j);break;case 4:s.vertexAttrib4fv(U.location,j);break;default:s.vertexAttrib1fv(U.location,j)}}}}y()}function E(){R();for(let I in n){let B=n[I];for(let G in B){let k=B[G];for(let z in k){let N=k[z];for(let L in N)h(N[L].object),delete N[L];delete k[z]}}delete n[I]}}function v(I){if(n[I.id]===void 0)return;let B=n[I.id];for(let G in B){let k=B[G];for(let z in k){let N=k[z];for(let L in N)h(N[L].object),delete N[L];delete k[z]}}delete n[I.id]}function T(I){for(let B in n){let G=n[B];for(let k in G){let z=G[k];if(z[I.id]===void 0)continue;let N=z[I.id];for(let L in N)h(N[L].object),delete N[L];delete z[I.id]}}}function _(I){for(let B in n){let G=n[B],k=I.isInstancedMesh===!0?I.id:0,z=G[k];if(z!==void 0){for(let N in z){let L=z[N];for(let O in L)h(L[O].object),delete L[O];delete z[N]}delete G[k],Object.keys(G).length===0&&delete n[B]}}}function R(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:p,disableUnusedAttributes:y}}function r1(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function a1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Qn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==_n&&T!==Dn&&!_&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ke("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),v=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,maxSamples:E,samples:v}}function o1(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Zn,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?h(null):c();else{let y=r?0:n,M=y*4,x=g.clippingState||null;l.value=x,x=h(m,f,M,d);for(let E=0;E!==M;++E)x[E]=t[E];g.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let b=u!==null?u.length:0,p=null;if(b!==0){if(p=l.value,m!==!0||p===null){let g=d+b*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,x=d;M!==b;++M,x+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function f1(s){let e=[],t=[],n=s,i=s-fa+1+l1;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),b=new Float32Array(d*f*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,M=g>2?0:-1,x=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];m.set(x,d*f*g);for(let E=0;E<f;E++){let v=h[E*2]*2-1,T=h[E*2+1]*2-1;g===0?ar.set(1,T,v):g===1?ar.set(-v,1,-T):g===2?ar.set(-v,T,1):g===3?ar.set(-1,T,-v):g===4?ar.set(-v,-1,T):ar.set(v,T,-1),ar.toArray(b,(g*f+E)*d)}}let p=new ht;p.setAttribute("position",new at(m,d)),p.setAttribute("outputDirection",new at(b,d)),t.push(new J(p,null)),n>fa&&n--}return{lodMeshes:t,sizeLods:e}}function Wm(s,e,t){let n=new en(s,e,t);return n.texture.mapping=Co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function d1(s,e,t){return new Et({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function p1(s,e,t){return new Et({name:"SphericalGaussianBlur",defines:{SAMPLES:c1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function qm(){return new Et({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Xm(){return new Et({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function ph(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function m1(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ra||d===Ec)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let b=new fh(m.height);return b.fromEquirectangularTexture(s,f),e.set(f,b),f.addEventListener("dispose",c),o(b.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===ra||d===Ec,b=d===Rs||d===ir;if(m||b){let p=t.get(f),g=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new or(s)),p=m?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let y=f.image;return m&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new or(s)),p=m?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",h),p.texture):null}}}return f}function o(f,d){return d===ra?f.mapping=Rs:d===Ec&&(f.mapping=ir),f}function l(f){let d=0,m=6;for(let b=0;b<m;b++)f[b]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function g1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ws("WebGLRenderer: "+n+" extension not supported."),i}}}function b1(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(d!==null){let y=d.array;b=d.version;for(let M=0,x=y.length;M<x;M+=3){let E=y[M+0],v=y[M+1],T=y[M+2];f.push(E,v,v,T,T,E)}}else{let y=m.array;b=m.version;for(let M=0,x=y.length/3-1;M<x;M+=3){let E=M+0,v=M+1,T=M+2;f.push(E,v,v,T,T,E)}}let p=new(m.count>=65535?eo:Qa)(f,1);p.version=b;let g=r.get(u);g&&e.remove(g),r.set(u,p)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function x1(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let b=0;for(let p=0;p<d;p++)b+=f[p];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function v1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _1(s,e,t){let n=new WeakMap,i=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let R=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",R)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],M=0;d===!0&&(M=1),m===!0&&(M=2),b===!0&&(M=3);let x=o.attributes.position.count*M,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let v=new Float32Array(x*E*4*u),T=new Za(v,x,E,u);T.type=Dn,T.needsUpdate=!0;let _=M*4;for(let C=0;C<u;C++){let I=p[C],B=g[C],G=y[C],k=x*E*4*C;for(let z=0;z<I.count;z++){let N=z*_;d===!0&&(i.fromBufferAttribute(I,z),v[k+N+0]=i.x,v[k+N+1]=i.y,v[k+N+2]=i.z,v[k+N+3]=0),m===!0&&(i.fromBufferAttribute(B,z),v[k+N+4]=i.x,v[k+N+5]=i.y,v[k+N+6]=i.z,v[k+N+7]=0),b===!0&&(i.fromBufferAttribute(G,z),v[k+N+8]=i.x,v[k+N+9]=i.y,v[k+N+10]=i.z,v[k+N+11]=G.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new me(x,E)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function y1(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function E1(s,e,t,n,i,r){let a=new en(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ht;c.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ct([0,2,0,0,2,0],2));let h=new lc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new J(c,h),f=new Li(-1,1,1,-1,0,1),d=null,m=null,b=!1,p,g=null,y=[],M=!1;this.setSize=function(x,E){a.setSize(x,E),o!==null&&o.setSize(x,E),l!==null&&l.setSize(x,E);for(let v=0;v<y.length;v++){let T=y[v];T.setSize&&T.setSize(x,E)}},this.setEffects=function(x){y=x,M=y.length>0&&y[0].isRenderPass===!0;let E=a.width,v=a.height;y.length>0&&o===null&&(o=new en(E,v,{type:gn,depthBuffer:!1,stencilBuffer:!1}),l=new en(E,v,{type:gn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let _=y[T];_.setSize&&_.setSize(E,v)}},this.begin=function(x,E){if(b||x.toneMapping===Wn&&y.length===0)return!1;if(g=E,E!==null){let v=E.width,T=E.height;(a.width!==v||a.height!==T)&&this.setSize(v,T)}return M===!1&&x.setRenderTarget(a),p=x.toneMapping,x.toneMapping=Wn,!0},this.hasRenderPass=function(){return M},this.end=function(x,E){x.toneMapping=p,b=!0;let v=a,T=o;for(let _=0;_<y.length;_++){let R=y[_];R.enabled!==!1&&(R.render(x,T,v,E),R.needsSwap!==!1&&(v=T,T=T===o?l:o))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,h.defines={},bt.getTransfer(d)===Ft&&(h.defines.SRGB_TRANSFER="");let _=M1[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(g),x.render(u,f),g=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function pa(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Km[i];if(r===void 0&&(r=new Float32Array(i),Km[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function yn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function mh(s,e){let t=jm[e];t===void 0&&(t=new Int32Array(e),jm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function S1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function T1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function w1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function R1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function A1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;Zm.set(n),s.uniformMatrix2fv(this.addr,!1,Zm),Mn(t,n)}}function C1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;Jm.set(n),s.uniformMatrix3fv(this.addr,!1,Jm),Mn(t,n)}}function P1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(yn(t,n))return;Ym.set(n),s.uniformMatrix4fv(this.addr,!1,Ym),Mn(t,n)}}function I1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function L1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function k1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function D1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function F1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function N1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function U1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function B1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function z1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?ch:lh,r=Df):r=f0,t.setTexture2D(e||r,i)}function H1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||p0,i)}function O1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||m0,i)}function G1(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||d0,i)}function V1(s){switch(s){case 5126:return S1;case 35664:return T1;case 35665:return w1;case 35666:return R1;case 35674:return A1;case 35675:return C1;case 35676:return P1;case 5124:case 35670:return I1;case 35667:case 35671:return L1;case 35668:case 35672:return k1;case 35669:case 35673:return D1;case 5125:return F1;case 36294:return N1;case 36295:return U1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return G1}}function W1(s,e){s.uniform1fv(this.addr,e)}function q1(s,e){let t=pa(e,this.size,2);s.uniform2fv(this.addr,t)}function X1(s,e){let t=pa(e,this.size,3);s.uniform3fv(this.addr,t)}function K1(s,e){let t=pa(e,this.size,4);s.uniform4fv(this.addr,t)}function j1(s,e){let t=pa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Y1(s,e){let t=pa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function J1(s,e){let t=pa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Z1(s,e){s.uniform1iv(this.addr,e)}function $1(s,e){s.uniform2iv(this.addr,e)}function Q1(s,e){s.uniform3iv(this.addr,e)}function eM(s,e){s.uniform4iv(this.addr,e)}function tM(s,e){s.uniform1uiv(this.addr,e)}function nM(s,e){s.uniform2uiv(this.addr,e)}function iM(s,e){s.uniform3uiv(this.addr,e)}function sM(s,e){s.uniform4uiv(this.addr,e)}function rM(s,e,t){let n=this.cache,i=e.length,r=mh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Df:a=f0;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function aM(s,e,t){let n=this.cache,i=e.length,r=mh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||p0,r[a])}function oM(s,e,t){let n=this.cache,i=e.length,r=mh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||m0,r[a])}function lM(s,e,t){let n=this.cache,i=e.length,r=mh(t,i);yn(n,r)||(s.uniform1iv(this.addr,r),Mn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||d0,r[a])}function cM(s){switch(s){case 5126:return W1;case 35664:return q1;case 35665:return X1;case 35666:return K1;case 35674:return j1;case 35675:return Y1;case 35676:return J1;case 5124:case 35670:return Z1;case 35667:case 35671:return $1;case 35668:case 35672:return Q1;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return lM}}function $m(s,e){s.seq.push(e),s.map[e.id]=e}function hM(s,e,t){let n=s.name,i=n.length;for(Lf.lastIndex=0;;){let r=Lf.exec(n),a=Lf.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){$m(t,c===void 0?new Ff(o,s,e):new Nf(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Uf(o),$m(t,u)),t=u}}}function Qm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function dM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function pM(s){bt._getMatrix(e0,bt.workingColorSpace,s);let e=`mat3( ${e0.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case Ya:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function t0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+dM(s.getShaderSource(e),o)}else return r}function mM(s,e){let t=pM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bM(s,e){let t=gM[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xM(){bt.getLuminanceCoefficients(uh);let s=uh.x.toFixed(4),e=uh.y.toFixed(4),t=uh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function _M(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ho(s){return s!==""}function n0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Bf(s){return s.replace(MM,SM)}function SM(s,e){let t=gt[e];if(t===void 0){let n=EM.get(e);if(n!==void 0)t=gt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bf(t)}function s0(s){return s.replace(TM,wM)}function wM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function r0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function AM(s){return RM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function PM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":CM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}function LM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function DM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":kM[s.combine]||"ENVMAP_BLENDING_NONE"}function FM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function NM(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=AM(t),c=PM(t),h=LM(t),u=DM(t),f=FM(t),d=vM(t),m=_M(r),b=i.createProgram(),p,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ho).join(`
`),g.length>0&&(g+=`
`)):(p=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),g=[r0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?gt.tonemapping_pars_fragment:"",t.toneMapping!==Wn?bM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,mM("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),a=Bf(a),a=n0(a,t),a=i0(a,t),o=Bf(o),o=n0(o,t),o=i0(o,t),a=s0(a),o=s0(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=y+p+a,x=y+g+o,E=Qm(i,i.VERTEX_SHADER,M),v=Qm(i,i.FRAGMENT_SHADER,x);i.attachShader(b,E),i.attachShader(b,v),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function T(I){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(b)||"",G=i.getShaderInfoLog(E)||"",k=i.getShaderInfoLog(v)||"",z=B.trim(),N=G.trim(),L=k.trim(),O=!0,U=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,E,v);else{let q=t0(i,E,"vertex"),j=t0(i,v,"fragment");tt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+q+`
`+j)}else z!==""?Ke("WebGLProgram: Program Info Log:",z):(N===""||L==="")&&(U=!1);U&&(I.diagnostics={runnable:O,programLog:z,vertexShader:{log:N,prefix:p},fragmentShader:{log:L,prefix:g}})}i.deleteShader(E),i.deleteShader(v),_=new da(i,b),R=yM(i,b)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let R;this.getAttributes=function(){return R===void 0&&T(this),R};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(b,uM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fM++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=v,this}function BM(s){return s===Cs||s===Do||s===Fo}function zM(s,e,t,n,i,r){let a=new Yr,o=new zf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,R,C,I,B,G){let k=I.fog,z=B.geometry,N=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||N,L),U=O&&O.mapping===Co?O.image.height:null,q=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let j=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,oe=j!==void 0?j.length:0,Q=0;z.morphAttributes.position!==void 0&&(Q=1),z.morphAttributes.normal!==void 0&&(Q=2),z.morphAttributes.color!==void 0&&(Q=3);let Ee,Se,je,ne;if(q){let qt=Fi[q];Ee=qt.vertexShader,Se=qt.fragmentShader}else{Ee=_.vertexShader,Se=_.fragmentShader;let qt=o.getVertexShaderStage(_),kt=o.getFragmentShaderStage(_);o.update(_,qt,kt),je=qt.id,ne=kt.id}let le=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ge=B.isInstancedMesh===!0,Y=B.isBatchedMesh===!0,fe=!!_.map,ke=!!_.matcap,V=!!O,ee=!!_.aoMap,ce=!!_.lightMap,he=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,Re=!!_.displacementMap,De=!!_.emissiveMap,Ue=!!_.metalnessMap,Ye=!!_.roughnessMap,H=_.anisotropy>0,et=_.clearcoat>0,rt=_.dispersion>0,P=_.retroreflectivity>0,S=_.iridescence>0,F=_.sheen>0,D=_.transmission>0,W=H&&!!_.anisotropyMap,se=et&&!!_.clearcoatMap,ae=et&&!!_.clearcoatNormalMap,te=et&&!!_.clearcoatRoughnessMap,ie=S&&!!_.iridescenceMap,ge=S&&!!_.iridescenceThicknessMap,Ae=F&&!!_.sheenColorMap,ve=F&&!!_.sheenRoughnessMap,ye=!!_.specularMap,xe=!!_.specularColorMap,Te=!!_.specularIntensityMap,Ze=D&&!!_.transmissionMap,K=D&&!!_.thicknessMap,Me=!!_.gradientMap,ue=!!_.alphaMap,Ce=_.alphaTest>0,Ne=!!_.alphaHash,pe=!!_.extensions,$e=Wn;_.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&($e=s.toneMapping);let Xe={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Ee,fragmentShader:Se,defines:_.defines,customVertexShaderID:je,customFragmentShaderID:ne,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Y,batchingColor:Y&&B._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&B.instanceColor!==null,instancingMorph:Ge&&B.morphTexture!==null,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:fe,matcap:ke,envMap:V,envMapMode:V&&O.mapping,envMapCubeUVHeight:U,aoMap:ee,lightMap:ce,bumpMap:he,normalMap:de,displacementMap:Re,emissiveMap:De,normalMapObjectSpace:de&&_.normalMapType===Em,normalMapTangentSpace:de&&_.normalMapType===Uo,packedNormalMap:de&&_.normalMapType===Uo&&BM(_.normalMap.format),metalnessMap:Ue,roughnessMap:Ye,anisotropy:H,anisotropyMap:W,clearcoat:et,clearcoatMap:se,clearcoatNormalMap:ae,clearcoatRoughnessMap:te,dispersion:rt,retroreflection:P,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:F,sheenColorMap:Ae,sheenRoughnessMap:ve,specularMap:ye,specularColorMap:xe,specularIntensityMap:Te,transmission:D,transmissionMap:Ze,thicknessMap:K,gradientMap:Me,opaque:_.transparent===!1&&_.blending===ws&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ce,alphaHash:Ne,combine:_.combine,mapUv:fe&&m(_.map.channel),aoMapUv:ee&&m(_.aoMap.channel),lightMapUv:ce&&m(_.lightMap.channel),bumpMapUv:he&&m(_.bumpMap.channel),normalMapUv:de&&m(_.normalMap.channel),displacementMapUv:Re&&m(_.displacementMap.channel),emissiveMapUv:De&&m(_.emissiveMap.channel),metalnessMapUv:Ue&&m(_.metalnessMap.channel),roughnessMapUv:Ye&&m(_.roughnessMap.channel),anisotropyMapUv:W&&m(_.anisotropyMap.channel),clearcoatMapUv:se&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ve&&m(_.sheenRoughnessMap.channel),specularMapUv:ye&&m(_.specularMap.channel),specularColorMapUv:xe&&m(_.specularColorMap.channel),specularIntensityMapUv:Te&&m(_.specularIntensityMap.channel),transmissionMapUv:Ze&&m(_.transmissionMap.channel),thicknessMapUv:K&&m(_.thicknessMap.channel),alphaMapUv:ue&&m(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(de||H),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(fe||ue),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Q,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,decodeVideoTexture:fe&&_.map.isVideoTexture===!0&&bt.getTransfer(_.map.colorSpace)===Ft,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&bt.getTransfer(_.emissiveMap.colorSpace)===Ft,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rt,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Y)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)R.push(C),R.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(g(R,_),y(R,_),R.push(s.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function g(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function y(_,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let R=d[_.type],C;if(R){let I=Fi[R];C=ha.clone(I.uniforms)}else C=_.uniforms;return C}function x(_,R){let C=h.get(R);return C!==void 0?++C.usedTimes:(C=new NM(s,R,_,i),c.push(C),h.set(R,C)),C}function E(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function T(){o.dispose()}return{getParameters:b,getProgramCacheKey:p,getUniforms:M,acquireProgram:x,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:T}}function HM(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function OM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function a0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function o0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,b,p,g){let y=s[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:b,renderOrder:f.renderOrder,z:p,group:g},s[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=m,y.materialVariant=a(f),y.groupOrder=b,y.renderOrder=f.renderOrder,y.z=p,y.group=g),e++,y}function l(f,d,m,b,p,g,y){y.reversedDepth===!0&&(p=-p);let M=o(f,d,m,b,p,g);m.transmission>0?n.push(M):m.transparent===!0?i.push(M):t.push(M)}function c(f,d,m,b,p,g){let y=o(f,d,m,b,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||OM),n.length>1&&n.sort(d||a0),i.length>1&&i.sort(d||a0)}function u(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function GM(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new o0,s.set(n,[a])):i>=r.length?(a=new o0,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function VM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new w,color:new _e};break;case"SpotLight":t={position:new w,direction:new w,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function WM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function XM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KM(s){let e=new VM,t=WM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new w);let i=new w,r=new Pe,a=new Pe;function o(c){let h=0,u=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,m=0,b=0,p=0,g=0,y=0,M=0,x=0,E=0,v=0,T=0,_=0,R=0,C=0;c.sort(XM);for(let B=0,G=c.length;B<G;B++){let k=c[B],z=k.color,N=k.intensity,L=k.distance,O=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Cs?O=k.shadow.map.texture:O=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=z.r*N,u+=z.g*N,f+=z.b*N;else if(k.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(k.sh.coefficients[U],N);C++}else if(k.isSunLight){let U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let q=k.shadow,j=t.get(k);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=O;let oe=q.getViewportCount();for(let Q=0;Q<oe;Q++)n.sunShadowMatrix[b+Q]=q.getMatrix(Q),n.sunShadowCascade[b+Q]=q._cascadeData[Q];b+=oe,m++}n.sun[d]=U,d++}else if(k.isDirectionalLight){let U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let q=k.shadow,j=t.get(k);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=k.shadow.matrix,E++}n.directional[p]=U,p++}else if(k.isSpotLight){let U=e.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(z).multiplyScalar(N),U.distance=L,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,n.spot[y]=U;let q=k.shadow;if(k.map&&(n.spotLightMap[_]=k.map,_++,q.updateMatrices(k),k.castShadow&&R++),n.spotLightMatrix[y]=q.matrix,k.castShadow){let j=t.get(k);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=O,T++}y++}else if(k.isRectAreaLight){let U=e.get(k);U.color.copy(z).multiplyScalar(N),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),n.rectArea[M]=U,M++}else if(k.isPointLight){let U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),U.distance=k.distance,U.decay=k.decay,k.castShadow){let q=k.shadow,j=t.get(k);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=k.shadow.matrix,v++}n.point[g]=U,g++}else if(k.isHemisphereLight){let U=e.get(k);U.skyColor.copy(k.color).multiplyScalar(N),U.groundColor.copy(k.groundColor).multiplyScalar(N),n.hemi[x]=U,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==p||I.pointLength!==g||I.spotLength!==y||I.rectAreaLength!==M||I.hemiLength!==x||I.numSunShadows!==m||I.numDirectionalShadows!==E||I.numPointShadows!==v||I.numSpotShadows!==T||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=M,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-R,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,I.sunLength=d,I.directionalLength=p,I.pointLength=g,I.spotLength=y,I.rectAreaLength=M,I.hemiLength=x,I.numSunShadows=m,I.numDirectionalShadows=E,I.numPointShadows=v,I.numSpotShadows=T,I.numSpotMaps=_,I.numLightProbes=C,n.version=qM++)}function l(c,h){let u=0,f=0,d=0,m=0,b=0,p=0,g=h.matrixWorldInverse;for(let y=0,M=c.length;y<M;y++){let x=c[y];if(x.isSunLight){let E=n.sun[u];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(g),u++}else if(x.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),f++}else if(x.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let E=n.rectArea[b];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:n}}function l0(s){let e=new KM(s),t=[],n=[],i=[];function r(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function jM(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new l0(s),e.set(i,[o])):r>=a.length?(o=new l0(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function QM(s,e,t){let n=new $r,i=new me,r=new me,a=new Ct,o=new cc,l=new hc,c={},h=t.maxTextureSize,u={[zn]:wn,[wn]:zn,[Rt]:Rt},f=new Et({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:YM,fragmentShader:JM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new J(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let g=this.type;this.render=function(v,T,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;this.type===tm&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let R=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ki),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=g!==this.type;G&&T.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(z=>z.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,z=v.length;k<z;k++){let N=v[k],L=N.shadow;if(L===void 0){Ke("WebGLShadowMap:",N,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let O=L.getFrameExtents();i.multiply(O),r.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/O.x),i.x=r.x*O.x,L.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/O.y),i.y=r.y*O.y,L.mapSize.y=r.y));let U=s.state.buffers.depth.getReversed();if(L.camera._reversedDepth=U,L.map===null||G===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===sa){if(N.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new en(i.x,i.y,{format:Cs,type:gn,minFilter:ft,magFilter:ft,generateMipmaps:!1}),L.map.texture.name=N.name+".shadowMap",L.map.depthTexture=new Ms(i.x,i.y,Dn),L.map.depthTexture.name=N.name+".shadowMapDepth",L.map.depthTexture.format=wi,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=sn,L.map.depthTexture.magFilter=sn}else N.isPointLight?(L.map=new fh(i.x),L.map.depthTexture=new tc(i.x,xi)):(L.map=new en(i.x,i.y),L.map.depthTexture=new Ms(i.x,i.y,xi)),L.map.depthTexture.name=N.name+".shadowMap",L.map.depthTexture.format=wi,this.type===nr?(L.map.depthTexture.compareFunction=U?ch:lh,L.map.depthTexture.minFilter=ft,L.map.depthTexture.magFilter=ft):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=sn,L.map.depthTexture.magFilter=sn);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==i.x||L.map.height!==i.y)&&L.map.setSize(i.x,i.y);let q=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();N.isPointLight!==!0&&L.updateMatrices(N,_);for(let j=0;j<q;j++){let oe=L.getCamera(j);if(N.isPointLight){let Q=L.camera,Ee=L.matrix,Se=N.distance||Q.far;Se!==Q.far&&(Q.far=Se,Q.updateProjectionMatrix()),zo.setFromMatrixPosition(N.matrixWorld),Q.position.copy(zo),kf.copy(Q.position),kf.add(ZM[j]),Q.up.copy($M[j]),Q.lookAt(kf),Q.updateMatrixWorld(),Ee.makeTranslation(-zo.x,-zo.y,-zo.z),c0.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),L._frustum.setFromProjectionMatrix(c0,Q.coordinateSystem,Q.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)s.setRenderTarget(L.map,j),s.clear();else{j===0&&(s.setRenderTarget(L.map),s.clear());let Q=L.getViewport(j);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),B.viewport(a)}n=L.getFrustum(j),x(T,_,oe,N,this.type)}L.isPointLightShadow!==!0&&this.type===sa&&y(L,_),L.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(R,C,I)};function y(v,T){let _=e.update(b);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null?v.mapPass=new en(i.x,i.y,{format:Cs,type:gn}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),f.uniforms.shadow_pass.value=v.map.depthTexture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(T,null,_,f,b,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(T,null,_,d,b,null)}function M(v,T,_,R){let C=null,I=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let B=C.uuid,G=T.uuid,k=c[B];k===void 0&&(k={},c[B]=k);let z=k[G];z===void 0&&(z=C.clone(),k[G]=z,T.addEventListener("dispose",E)),C=z}if(C.visible=T.visible,C.wireframe=T.wireframe,R===sa?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:u[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=s.properties.get(C);B.light=_}return C}function x(v,T,_,R,C){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===sa)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let G=e.update(v),k=v.material;if(Array.isArray(k)){let z=G.groups;for(let N=0,L=z.length;N<L;N++){let O=z[N],U=k[O.materialIndex];if(U&&U.visible){let q=M(v,U,R,C);v.onBeforeShadow(s,v,T,_,G,q,O),s.renderBufferDirect(_,null,G,q,v,O),v.onAfterShadow(s,v,T,_,G,q,O)}}}else if(k.visible){let z=M(v,k,R,C);v.onBeforeShadow(s,v,T,_,G,z,null),s.renderBufferDirect(_,null,G,z,v,null),v.onAfterShadow(s,v,T,_,G,z,null)}}let B=v.children;for(let G=0,k=B.length;G<k;G++)x(B[G],T,_,R,C)}function E(v){v.target.removeEventListener("dispose",E);for(let _ in c){let R=c[_],C=v.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}function eE(s,e){function t(){let K=!1,Me=new Ct,ue=null,Ce=new Ct(0,0,0,0);return{setMask:function(Ne){ue!==Ne&&!K&&(s.colorMask(Ne,Ne,Ne,Ne),ue=Ne)},setLocked:function(Ne){K=Ne},setClear:function(Ne,pe,$e,Xe,qt){qt===!0&&(Ne*=Xe,pe*=Xe,$e*=Xe),Me.set(Ne,pe,$e,Xe),Ce.equals(Me)===!1&&(s.clearColor(Ne,pe,$e,Xe),Ce.copy(Me))},reset:function(){K=!1,ue=null,Ce.set(-1,0,0,0)}}}function n(){let K=!1,Me=!1,ue=null,Ce=null,Ne=null;return{setReversed:function(pe){if(Me!==pe){let $e=e.get("EXT_clip_control");pe?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Me=pe;let Xe=Ne;Ne=null,this.setClear(Xe)}},getReversed:function(){return Me},setTest:function(pe){pe?le(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!K&&(s.depthMask(pe),ue=pe)},setFunc:function(pe){if(Me&&(pe=Dm[pe]),Ce!==pe){switch(pe){case Vl:s.depthFunc(s.NEVER);break;case Wl:s.depthFunc(s.ALWAYS);break;case ql:s.depthFunc(s.LESS);break;case Vr:s.depthFunc(s.LEQUAL);break;case Xl:s.depthFunc(s.EQUAL);break;case Kl:s.depthFunc(s.GEQUAL);break;case jl:s.depthFunc(s.GREATER);break;case Yl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ce=pe}},setLocked:function(pe){K=pe},setClear:function(pe){Ne!==pe&&(Ne=pe,Me&&(pe=1-pe),s.clearDepth(pe))},reset:function(){K=!1,ue=null,Ce=null,Ne=null,Me=!1}}}function i(){let K=!1,Me=null,ue=null,Ce=null,Ne=null,pe=null,$e=null,Xe=null,qt=null;return{setTest:function(kt){K||(kt?le(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(kt){Me!==kt&&!K&&(s.stencilMask(kt),Me=kt)},setFunc:function(kt,hi,Mi){(ue!==kt||Ce!==hi||Ne!==Mi)&&(s.stencilFunc(kt,hi,Mi),ue=kt,Ce=hi,Ne=Mi)},setOp:function(kt,hi,Mi){(pe!==kt||$e!==hi||Xe!==Mi)&&(s.stencilOp(kt,hi,Mi),pe=kt,$e=hi,Xe=Mi)},setLocked:function(kt){K=kt},setClear:function(kt){qt!==kt&&(s.clearStencil(kt),qt=kt)},reset:function(){K=!1,Me=null,ue=null,Ce=null,Ne=null,pe=null,$e=null,Xe=null,qt=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],b=null,p=!1,g=null,y=null,M=null,x=null,E=null,v=null,T=null,_=new _e(0,0,0),R=0,C=!1,I=null,B=null,G=null,k=null,z=null,N=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,U=s.getParameter(s.VERSION);U.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=O>=1):U.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=O>=2);let q=null,j={},oe=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),Ee=new Ct().fromArray(oe),Se=new Ct().fromArray(Q);function je(K,Me,ue,Ce){let Ne=new Uint8Array(4),pe=s.createTexture();s.bindTexture(K,pe),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<ue;$e++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(Me,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Me+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return pe}let ne={};ne[s.TEXTURE_2D]=je(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=je(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=je(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=je(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(s.DEPTH_TEST),a.setFunc(Vr),he(!1),de(Ku),le(s.CULL_FACE),ee(ki);function le(K){h[K]!==!0&&(s.enable(K),h[K]=!0)}function be(K){h[K]!==!1&&(s.disable(K),h[K]=!1)}function Ge(K,Me){return f[K]!==Me?(s.bindFramebuffer(K,Me),f[K]=Me,K===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Me),K===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Me),!0):!1}function Y(K,Me){let ue=m,Ce=!1;if(K){ue=d.get(Me),ue===void 0&&(ue=[],d.set(Me,ue));let Ne=K.textures;if(ue.length!==Ne.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,$e=Ne.length;pe<$e;pe++)ue[pe]=s.COLOR_ATTACHMENT0+pe;ue.length=Ne.length,Ce=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,Ce=!0);Ce&&s.drawBuffers(ue)}function fe(K){return b!==K?(s.useProgram(K),b=K,!0):!1}let ke={[rs]:s.FUNC_ADD,[nm]:s.FUNC_SUBTRACT,[im]:s.FUNC_REVERSE_SUBTRACT};ke[sm]=s.MIN,ke[rm]=s.MAX;let V={[am]:s.ZERO,[Ro]:s.ONE,[om]:s.SRC_COLOR,[Ju]:s.SRC_ALPHA,[dm]:s.SRC_ALPHA_SATURATE,[um]:s.DST_COLOR,[cm]:s.DST_ALPHA,[lm]:s.ONE_MINUS_SRC_COLOR,[Zu]:s.ONE_MINUS_SRC_ALPHA,[fm]:s.ONE_MINUS_DST_COLOR,[hm]:s.ONE_MINUS_DST_ALPHA,[pm]:s.CONSTANT_COLOR,[mm]:s.ONE_MINUS_CONSTANT_COLOR,[gm]:s.CONSTANT_ALPHA,[bm]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(K,Me,ue,Ce,Ne,pe,$e,Xe,qt,kt){if(K===ki){p===!0&&(be(s.BLEND),p=!1);return}if(p===!1&&(le(s.BLEND),p=!0),K!==yc){if(K!==g||kt!==C){if((y!==rs||E!==rs)&&(s.blendEquation(s.FUNC_ADD),y=rs,E=rs),kt)switch(K){case ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nt:s.blendFunc(s.ONE,s.ONE);break;case ju:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:tt("WebGLState: Invalid blending: ",K);break}else switch(K){case ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ju:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yu:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",K);break}M=null,x=null,v=null,T=null,_.set(0,0,0),R=0,g=K,C=kt}return}Ne=Ne||Me,pe=pe||ue,$e=$e||Ce,(Me!==y||Ne!==E)&&(s.blendEquationSeparate(ke[Me],ke[Ne]),y=Me,E=Ne),(ue!==M||Ce!==x||pe!==v||$e!==T)&&(s.blendFuncSeparate(V[ue],V[Ce],V[pe],V[$e]),M=ue,x=Ce,v=pe,T=$e),(Xe.equals(_)===!1||qt!==R)&&(s.blendColor(Xe.r,Xe.g,Xe.b,qt),_.copy(Xe),R=qt),g=K,C=!1}function ce(K,Me){K.side===Rt?be(s.CULL_FACE):le(s.CULL_FACE);let ue=K.side===wn;Me&&(ue=!ue),he(ue),K.blending===ws&&K.transparent===!1?ee(ki):ee(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),a.setFunc(K.depthFunc),a.setTest(K.depthTest),a.setMask(K.depthWrite),r.setMask(K.colorWrite);let Ce=K.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(K.stencilWriteMask),o.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),o.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),De(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(K){I!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),I=K)}function de(K){K!==Qp?(le(s.CULL_FACE),K!==B&&(K===Ku?s.cullFace(s.BACK):K===em?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),B=K}function Re(K){K!==G&&(L&&s.lineWidth(K),G=K)}function De(K,Me,ue){K?(le(s.POLYGON_OFFSET_FILL),(k!==Me||z!==ue)&&(k=Me,z=ue,a.getReversed()&&(Me=-Me),s.polygonOffset(Me,ue))):be(s.POLYGON_OFFSET_FILL)}function Ue(K){K?le(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function Ye(K){K===void 0&&(K=s.TEXTURE0+N-1),q!==K&&(s.activeTexture(K),q=K)}function H(K,Me,ue){ue===void 0&&(q===null?ue=s.TEXTURE0+N-1:ue=q);let Ce=j[ue];Ce===void 0&&(Ce={type:void 0,texture:void 0},j[ue]=Ce),(Ce.type!==K||Ce.texture!==Me)&&(q!==ue&&(s.activeTexture(ue),q=ue),s.bindTexture(K,Me||ne[K]),Ce.type=K,Ce.texture=Me)}function et(){let K=j[q];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(K){tt("WebGLState:",K)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(K){tt("WebGLState:",K)}}function S(){try{s.texSubImage2D(...arguments)}catch(K){tt("WebGLState:",K)}}function F(){try{s.texSubImage3D(...arguments)}catch(K){tt("WebGLState:",K)}}function D(){try{s.compressedTexSubImage2D(...arguments)}catch(K){tt("WebGLState:",K)}}function W(){try{s.compressedTexSubImage3D(...arguments)}catch(K){tt("WebGLState:",K)}}function se(){try{s.texStorage2D(...arguments)}catch(K){tt("WebGLState:",K)}}function ae(){try{s.texStorage3D(...arguments)}catch(K){tt("WebGLState:",K)}}function te(){try{s.texImage2D(...arguments)}catch(K){tt("WebGLState:",K)}}function ie(){try{s.texImage3D(...arguments)}catch(K){tt("WebGLState:",K)}}function ge(K){return u[K]!==void 0?u[K]:s.getParameter(K)}function Ae(K,Me){u[K]!==Me&&(s.pixelStorei(K,Me),u[K]=Me)}function ve(K){Ee.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),Ee.copy(K))}function ye(K){Se.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),Se.copy(K))}function xe(K,Me){let ue=c.get(Me);ue===void 0&&(ue=new WeakMap,c.set(Me,ue));let Ce=ue.get(K);Ce===void 0&&(Ce=s.getUniformBlockIndex(Me,K.name),ue.set(K,Ce))}function Te(K,Me){let Ce=c.get(Me).get(K);l.get(Me)!==Ce&&(s.uniformBlockBinding(Me,Ce,K.__bindingPointIndex),l.set(Me,Ce))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},q=null,j={},f={},d=new WeakMap,m=[],b=null,p=!1,g=null,y=null,M=null,x=null,E=null,v=null,T=null,_=new _e(0,0,0),R=0,C=!1,I=null,B=null,G=null,k=null,z=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:be,bindFramebuffer:Ge,drawBuffers:Y,useProgram:fe,setBlending:ee,setMaterial:ce,setFlipSided:he,setCullFace:de,setLineWidth:Re,setPolygonOffset:De,setScissorTest:Ue,activeTexture:Ye,bindTexture:H,unbindTexture:et,compressedTexImage2D:rt,compressedTexImage3D:P,texImage2D:te,texImage3D:ie,pixelStorei:Ae,getParameter:ge,updateUBOMapping:xe,uniformBlockBinding:Te,texStorage2D:se,texStorage3D:ae,texSubImage2D:S,texSubImage3D:F,compressedTexSubImage2D:D,compressedTexSubImage3D:W,scissor:ve,viewport:ye,reset:Ze}}function tE(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,S){return m?new OffscreenCanvas(P,S):Xr("canvas")}function p(P,S,F){let D=1,W=rt(P);if((W.width>F||W.height>F)&&(D=F/Math.max(W.width,W.height)),D<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let se=Math.floor(D*W.width),ae=Math.floor(D*W.height);f===void 0&&(f=b(se,ae));let te=S?b(se,ae):f;return te.width=se,te.height=ae,te.getContext("2d").drawImage(P,0,0,se,ae),Ke("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+se+"x"+ae+")."),te}else return"data"in P&&Ke("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),P;return P}function g(P){return P.generateMipmaps}function y(P){s.generateMipmap(P)}function M(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(P,S,F,D,W,se=!1){if(P!==null){if(s[P]!==void 0)return s[P];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;D&&(ae=e.get("EXT_texture_norm16"),ae||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=S;if(S===s.RED&&(F===s.FLOAT&&(te=s.R32F),F===s.HALF_FLOAT&&(te=s.R16F),F===s.UNSIGNED_BYTE&&(te=s.R8),F===s.UNSIGNED_SHORT&&ae&&(te=ae.R16_EXT),F===s.SHORT&&ae&&(te=ae.R16_SNORM_EXT)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(te=s.R8UI),F===s.UNSIGNED_SHORT&&(te=s.R16UI),F===s.UNSIGNED_INT&&(te=s.R32UI),F===s.BYTE&&(te=s.R8I),F===s.SHORT&&(te=s.R16I),F===s.INT&&(te=s.R32I)),S===s.RG&&(F===s.FLOAT&&(te=s.RG32F),F===s.HALF_FLOAT&&(te=s.RG16F),F===s.UNSIGNED_BYTE&&(te=s.RG8),F===s.UNSIGNED_SHORT&&ae&&(te=ae.RG16_EXT),F===s.SHORT&&ae&&(te=ae.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(te=s.RG8UI),F===s.UNSIGNED_SHORT&&(te=s.RG16UI),F===s.UNSIGNED_INT&&(te=s.RG32UI),F===s.BYTE&&(te=s.RG8I),F===s.SHORT&&(te=s.RG16I),F===s.INT&&(te=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(te=s.RGB8UI),F===s.UNSIGNED_SHORT&&(te=s.RGB16UI),F===s.UNSIGNED_INT&&(te=s.RGB32UI),F===s.BYTE&&(te=s.RGB8I),F===s.SHORT&&(te=s.RGB16I),F===s.INT&&(te=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(te=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(te=s.RGBA16UI),F===s.UNSIGNED_INT&&(te=s.RGBA32UI),F===s.BYTE&&(te=s.RGBA8I),F===s.SHORT&&(te=s.RGBA16I),F===s.INT&&(te=s.RGBA32I)),S===s.RGB&&(F===s.UNSIGNED_SHORT&&ae&&(te=ae.RGB16_EXT),F===s.SHORT&&ae&&(te=ae.RGB16_SNORM_EXT),F===s.UNSIGNED_INT_5_9_9_9_REV&&(te=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(te=s.R11F_G11F_B10F)),S===s.RGBA){let ie=se?Ya:bt.getTransfer(W);F===s.FLOAT&&(te=s.RGBA32F),F===s.HALF_FLOAT&&(te=s.RGBA16F),F===s.UNSIGNED_BYTE&&(te=ie===Ft?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT&&ae&&(te=ae.RGBA16_EXT),F===s.SHORT&&ae&&(te=ae.RGBA16_SNORM_EXT),F===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function E(P,S){let F;return P?S===null||S===xi||S===la?F=s.DEPTH24_STENCIL8:S===Dn?F=s.DEPTH32F_STENCIL8:S===oa&&(F=s.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===la?F=s.DEPTH_COMPONENT24:S===Dn?F=s.DEPTH_COMPONENT32F:S===oa&&(F=s.DEPTH_COMPONENT16),F}function v(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==ft?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){let S=P.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function _(P){let S=P.target;S.removeEventListener("dispose",_),I(S)}function R(P){let S=n.get(P);if(S.__webglInit===void 0)return;let F=P.source,D=d.get(F);if(D){let W=D[S.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(P),Object.keys(D).length===0&&d.delete(F)}n.remove(P)}function C(P){let S=n.get(P);s.deleteTexture(S.__webglTexture);let F=P.source,D=d.get(F);delete D[S.__cacheKey],a.memory.textures--}function I(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let D=0;D<6;D++){if(Array.isArray(S.__webglFramebuffer[D]))for(let W=0;W<S.__webglFramebuffer[D].length;W++)s.deleteFramebuffer(S.__webglFramebuffer[D][W]);else s.deleteFramebuffer(S.__webglFramebuffer[D]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[D])}else{if(Array.isArray(S.__webglFramebuffer))for(let D=0;D<S.__webglFramebuffer.length;D++)s.deleteFramebuffer(S.__webglFramebuffer[D]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let D=0;D<S.__webglColorRenderbuffer.length;D++)S.__webglColorRenderbuffer[D]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[D]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=P.textures;for(let D=0,W=F.length;D<W;D++){let se=n.get(F[D]);se.__webglTexture&&(s.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(F[D])}n.remove(P)}let B=0;function G(){B=0}function k(){return B}function z(P){B=P}function N(){let P=B;return P>=i.maxTextures&&Ke("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,P}function L(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function O(P,S){let F=n.get(P);if(P.isVideoTexture&&H(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&F.__version!==P.version){let D=P.image;if(D===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(D.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{be(F,P,S);return}}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function U(P,S){let F=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){be(F,P,S);return}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function q(P,S){let F=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){be(F,P,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function j(P,S){let F=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&F.__version!==P.version){Ge(F,P,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}let oe={[Sn]:s.REPEAT,[dn]:s.CLAMP_TO_EDGE,[Wr]:s.MIRRORED_REPEAT},Q={[sn]:s.NEAREST,[Sc]:s.NEAREST_MIPMAP_NEAREST,[sr]:s.NEAREST_MIPMAP_LINEAR,[ft]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[Jt]:s.LINEAR_MIPMAP_LINEAR},Ee={[Tm]:s.NEVER,[Pm]:s.ALWAYS,[wm]:s.LESS,[lh]:s.LEQUAL,[Rm]:s.EQUAL,[ch]:s.GEQUAL,[Am]:s.GREATER,[Cm]:s.NOTEQUAL};function Se(P,S){if(S.type===Dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===ft||S.magFilter===aa||S.magFilter===sr||S.magFilter===Jt||S.minFilter===ft||S.minFilter===aa||S.minFilter===sr||S.minFilter===Jt)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,oe[S.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,oe[S.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,oe[S.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Q[S.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===sn||S.minFilter!==sr&&S.minFilter!==Jt||S.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(P,S){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));let D=S.source,W=d.get(D);W===void 0&&(W={},d.set(D,W));let se=L(S);if(se!==P.__cacheKey){W[se]===void 0&&(W[se]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),W[se].usedTimes++;let ae=W[P.__cacheKey];ae!==void 0&&(W[P.__cacheKey].usedTimes--,ae.usedTimes===0&&C(S)),P.__cacheKey=se,P.__webglTexture=W[se].texture}return F}function ne(P,S,F){return Math.floor(Math.floor(P/F)/S)}function le(P,S,F,D){let se=P.updateRanges;if(se.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,F,D,S.data);else{se.sort((Ae,ve)=>Ae.start-ve.start);let ae=0;for(let Ae=1;Ae<se.length;Ae++){let ve=se[ae],ye=se[Ae],xe=ve.start+ve.count,Te=ne(ye.start,S.width,4),Ze=ne(ve.start,S.width,4);ye.start<=xe+1&&Te===Ze&&ne(ye.start+ye.count-1,S.width,4)===Te?ve.count=Math.max(ve.count,ye.start+ye.count-ve.start):(++ae,se[ae]=ye)}se.length=ae+1;let te=t.getParameter(s.UNPACK_ROW_LENGTH),ie=t.getParameter(s.UNPACK_SKIP_PIXELS),ge=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,ve=se.length;Ae<ve;Ae++){let ye=se[Ae],xe=Math.floor(ye.start/4),Te=Math.ceil(ye.count/4),Ze=xe%S.width,K=Math.floor(xe/S.width),Me=Te,ue=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,K),t.texSubImage2D(s.TEXTURE_2D,0,Ze,K,Me,ue,F,D,S.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,te),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(s.UNPACK_SKIP_ROWS,ge)}}function be(P,S,F){let D=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(D=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(D=s.TEXTURE_3D);let W=je(P,S),se=S.source;t.bindTexture(D,P.__webglTexture,s.TEXTURE0+F);let ae=n.get(se);if(se.version!==ae.__version||W===!0){if(t.activeTexture(s.TEXTURE0+F),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ue=bt.getPrimaries(bt.workingColorSpace),Ce=S.colorSpace===Bt?null:bt.getPrimaries(S.colorSpace),Ne=S.colorSpace===Bt||ue===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=p(S.image,!1,i.maxTextureSize);ie=et(S,ie);let ge=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type),ve=x(S.internalFormat,ge,Ae,S.normalized,S.colorSpace,S.isVideoTexture);Se(D,S);let ye,xe=S.mipmaps,Te=S.isVideoTexture!==!0,Ze=ae.__version===void 0||W===!0,K=se.dataReady,Me=v(S,ie);if(S.isDepthTexture)ve=E(S.format===As,S.type),Ze&&(Te?t.texStorage2D(s.TEXTURE_2D,1,ve,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,ve,ie.width,ie.height,0,ge,Ae,null));else if(S.isDataTexture)if(xe.length>0){Te&&Ze&&t.texStorage2D(s.TEXTURE_2D,Me,ve,xe[0].width,xe[0].height);for(let ue=0,Ce=xe.length;ue<Ce;ue++)ye=xe[ue],Te?K&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,ge,Ae,ye.data):t.texImage2D(s.TEXTURE_2D,ue,ve,ye.width,ye.height,0,ge,Ae,ye.data);S.generateMipmaps=!1}else Te?(Ze&&t.texStorage2D(s.TEXTURE_2D,Me,ve,ie.width,ie.height),K&&le(S,ie,ge,Ae)):t.texImage2D(s.TEXTURE_2D,0,ve,ie.width,ie.height,0,ge,Ae,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Te&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,ve,xe[0].width,xe[0].height,ie.depth);for(let ue=0,Ce=xe.length;ue<Ce;ue++)if(ye=xe[ue],S.format!==Qn)if(ge!==null)if(Te){if(K)if(S.layerUpdates.size>0){let Ne=yf(ye.width,ye.height,S.format,S.type);for(let pe of S.layerUpdates){let $e=ye.data.subarray(pe*Ne/ye.data.BYTES_PER_ELEMENT,(pe+1)*Ne/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,pe,ye.width,ye.height,1,ge,$e)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,ie.depth,ge,ye.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,ve,ye.width,ye.height,ie.depth,0,ye.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Te?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ye.width,ye.height,ie.depth,ge,Ae,ye.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,ve,ye.width,ye.height,ie.depth,0,ge,Ae,ye.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Te&&Ze&&t.texStorage2D(s.TEXTURE_2D,Me,ve,xe[0].width,xe[0].height);for(let ue=0,Ce=xe.length;ue<Ce;ue++)ye=xe[ue],S.format!==Qn?ge!==null?Te?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,ve,ye.width,ye.height,0,ye.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Te?K&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ye.width,ye.height,ge,Ae,ye.data):t.texImage2D(s.TEXTURE_2D,ue,ve,ye.width,ye.height,0,ge,Ae,ye.data)}else if(S.isDataArrayTexture)if(Te){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,ve,ie.width,ie.height,ie.depth),K)if(S.layerUpdates.size>0){let ue=yf(ie.width,ie.height,S.format,S.type);for(let Ce of S.layerUpdates){let Ne=ie.data.subarray(Ce*ue/ie.data.BYTES_PER_ELEMENT,(Ce+1)*ue/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,ie.width,ie.height,1,ge,Ae,Ne)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ve,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(S.isData3DTexture)Te?(Ze&&t.texStorage3D(s.TEXTURE_3D,Me,ve,ie.width,ie.height,ie.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ae,ie.data)):t.texImage3D(s.TEXTURE_3D,0,ve,ie.width,ie.height,ie.depth,0,ge,Ae,ie.data);else if(S.isFramebufferTexture){if(Ze)if(Te)t.texStorage2D(s.TEXTURE_2D,Me,ve,ie.width,ie.height);else{let ue=ie.width,Ce=ie.height;for(let Ne=0;Ne<Me;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,ve,ue,Ce,0,ge,Ae,null),ue>>=1,Ce>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let ue=s.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),ie.parentNode!==ue){ue.appendChild(ie),u.add(S),ue.onpaint=Ce=>{let Ne=Ce.changedElements;for(let pe of u)Ne.includes(pe.image)&&(pe.needsUpdate=!0)},ue.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ie);else{let Ne=s.RGBA,pe=s.RGBA,$e=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ne,pe,$e,ie)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Te&&Ze){let ue=rt(xe[0]);t.texStorage2D(s.TEXTURE_2D,Me,ve,ue.width,ue.height)}for(let ue=0,Ce=xe.length;ue<Ce;ue++)ye=xe[ue],Te?K&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ge,Ae,ye):t.texImage2D(s.TEXTURE_2D,ue,ve,ge,Ae,ye);S.generateMipmaps=!1}else if(Te){if(Ze){let ue=rt(ie);t.texStorage2D(s.TEXTURE_2D,Me,ve,ue.width,ue.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ge,Ae,ie)}else t.texImage2D(s.TEXTURE_2D,0,ve,ge,Ae,ie);g(S)&&y(D),ae.__version=se.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ge(P,S,F){if(S.image.length!==6)return;let D=je(P,S),W=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+F);let se=n.get(W);if(W.version!==se.__version||D===!0){t.activeTexture(s.TEXTURE0+F);let ae=bt.getPrimaries(bt.workingColorSpace),te=S.colorSpace===Bt?null:bt.getPrimaries(S.colorSpace),ie=S.colorSpace===Bt||ae===te?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ge=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let pe=0;pe<6;pe++)!ge&&!Ae?ve[pe]=p(S.image[pe],!0,i.maxCubemapSize):ve[pe]=Ae?S.image[pe].image:S.image[pe],ve[pe]=et(S,ve[pe]);let ye=ve[0],xe=r.convert(S.format,S.colorSpace),Te=r.convert(S.type),Ze=x(S.internalFormat,xe,Te,S.normalized,S.colorSpace),K=S.isVideoTexture!==!0,Me=se.__version===void 0||D===!0,ue=W.dataReady,Ce=v(S,ye);Se(s.TEXTURE_CUBE_MAP,S);let Ne;if(ge){K&&Me&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,Ze,ye.width,ye.height);for(let pe=0;pe<6;pe++){Ne=ve[pe].mipmaps;for(let $e=0;$e<Ne.length;$e++){let Xe=Ne[$e];S.format!==Qn?xe!==null?K?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,0,0,Xe.width,Xe.height,xe,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,Ze,Xe.width,Xe.height,0,Xe.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,0,0,Xe.width,Xe.height,xe,Te,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e,Ze,Xe.width,Xe.height,0,xe,Te,Xe.data)}}}else{if(Ne=S.mipmaps,K&&Me){Ne.length>0&&Ce++;let pe=rt(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,Ze,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ae){K?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ve[pe].width,ve[pe].height,xe,Te,ve[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ze,ve[pe].width,ve[pe].height,0,xe,Te,ve[pe].data);for(let $e=0;$e<Ne.length;$e++){let qt=Ne[$e].image[pe].image;K?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,0,0,qt.width,qt.height,xe,Te,qt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,Ze,qt.width,qt.height,0,xe,Te,qt.data)}}else{K?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,xe,Te,ve[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ze,xe,Te,ve[pe]);for(let $e=0;$e<Ne.length;$e++){let Xe=Ne[$e];K?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,0,0,xe,Te,Xe.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,$e+1,Ze,xe,Te,Xe.image[pe])}}}g(S)&&y(s.TEXTURE_CUBE_MAP),se.__version=W.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Y(P,S,F,D,W,se){let ae=r.convert(F.format,F.colorSpace),te=r.convert(F.type),ie=x(F.internalFormat,ae,te,F.normalized,F.colorSpace),ge=n.get(S),Ae=n.get(F);if(Ae.__renderTarget=S,!ge.__hasExternalTextures){let ve=Math.max(1,S.width>>se),ye=Math.max(1,S.height>>se);W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?t.texImage3D(W,se,ie,ve,ye,S.depth,0,ae,te,null):t.texImage2D(W,se,ie,ve,ye,0,ae,te,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,D,W,Ae.__webglTexture,0,Ue(S)):(W===s.TEXTURE_2D||W>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,D,W,Ae.__webglTexture,se),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(P,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,P),S.depthBuffer){let D=S.depthTexture,W=D&&D.isDepthTexture?D.type:null,se=E(S.stencilBuffer,W),ae=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ye(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue(S),se,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue(S),se,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,se,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ae,s.RENDERBUFFER,P)}else{let D=S.textures;for(let W=0;W<D.length;W++){let se=D[W],ae=r.convert(se.format,se.colorSpace),te=r.convert(se.type),ie=x(se.internalFormat,ae,te,se.normalized,se.colorSpace);Ye(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue(S),ie,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue(S),ie,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ie,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(P,S,F){let D=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(S.depthTexture);if(W.__renderTarget=S,(!W.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D){if(W.__webglInit===void 0&&(W.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),W.__webglTexture===void 0){W.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Se(s.TEXTURE_CUBE_MAP,S.depthTexture);let ge=r.convert(S.depthTexture.format),Ae=r.convert(S.depthTexture.type),ve;S.depthTexture.format===wi?ve=s.DEPTH_COMPONENT24:S.depthTexture.format===As&&(ve=s.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ve,S.width,S.height,0,ge,Ae,null)}}else O(S.depthTexture,0);let se=W.__webglTexture,ae=Ue(S),te=D?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,ie=S.depthTexture.format===As?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===wi)Ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,te,se,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,ie,te,se,0);else if(S.depthTexture.format===As)Ye(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,te,se,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,ie,te,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function V(P){let S=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let D=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),D){let W=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,D.removeEventListener("dispose",W)};D.addEventListener("dispose",W),S.__depthDisposeCallback=W}S.__boundDepthTexture=D}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(F)for(let D=0;D<6;D++)ke(S.__webglFramebuffer[D],P,D);else{let D=P.texture.mipmaps;D&&D.length>0?ke(S.__webglFramebuffer[0],P,0):ke(S.__webglFramebuffer,P,0)}else if(F){S.__webglDepthbuffer=[];for(let D=0;D<6;D++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[D]),S.__webglDepthbuffer[D]===void 0)S.__webglDepthbuffer[D]=s.createRenderbuffer(),fe(S.__webglDepthbuffer[D],P,!1);else{let W=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[D];s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,se)}}else{let D=P.texture.mipmaps;if(D&&D.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),fe(S.__webglDepthbuffer,P,!1);else{let W=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,se),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,se)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ee(P,S,F){let D=n.get(P);S!==void 0&&Y(D.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&V(P)}function ce(P){let S=P.texture,F=n.get(P),D=n.get(S);P.addEventListener("dispose",_);let W=P.textures,se=P.isWebGLCubeRenderTarget===!0,ae=W.length>1;if(ae||(D.__webglTexture===void 0&&(D.__webglTexture=s.createTexture()),D.__version=S.version,a.memory.textures++),se){F.__webglFramebuffer=[];for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[te]=[];for(let ie=0;ie<S.mipmaps.length;ie++)F.__webglFramebuffer[te][ie]=s.createFramebuffer()}else F.__webglFramebuffer[te]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let te=0;te<S.mipmaps.length;te++)F.__webglFramebuffer[te]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ae)for(let te=0,ie=W.length;te<ie;te++){let ge=n.get(W[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture(),a.memory.textures++)}if(P.samples>0&&Ye(P)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let te=0;te<W.length;te++){let ie=W[te];F.__webglColorRenderbuffer[te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[te]);let ge=r.convert(ie.format,ie.colorSpace),Ae=r.convert(ie.type),ve=x(ie.internalFormat,ge,Ae,ie.normalized,ie.colorSpace,P.isXRRenderTarget===!0),ye=Ue(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ve,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+te,s.RENDERBUFFER,F.__webglColorRenderbuffer[te])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(F.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture),Se(s.TEXTURE_CUBE_MAP,S);for(let te=0;te<6;te++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)Y(F.__webglFramebuffer[te][ie],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,ie);else Y(F.__webglFramebuffer[te],P,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(S)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let te=0,ie=W.length;te<ie;te++){let ge=W[te],Ae=n.get(ge),ve=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ve=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ae.__webglTexture),Se(ve,ge),Y(F.__webglFramebuffer,P,ge,s.COLOR_ATTACHMENT0+te,ve,0),g(ge)&&y(ve)}t.unbindTexture()}else{let te=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(te,D.__webglTexture),Se(te,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)Y(F.__webglFramebuffer[ie],P,S,s.COLOR_ATTACHMENT0,te,ie);else Y(F.__webglFramebuffer,P,S,s.COLOR_ATTACHMENT0,te,0);g(S)&&y(te),t.unbindTexture()}P.depthBuffer&&V(P)}function he(P){let S=P.textures;for(let F=0,D=S.length;F<D;F++){let W=S[F];if(g(W)){let se=M(P),ae=n.get(W).__webglTexture;t.bindTexture(se,ae),y(se),t.unbindTexture()}}}let de=[],Re=[];function De(P){if(P.samples>0){if(Ye(P)===!1){let S=P.textures,F=P.width,D=P.height,W=s.COLOR_BUFFER_BIT,se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(P),te=S.length>1;if(te)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ie=P.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(W|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(W|=s.STENCIL_BUFFER_BIT)),te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);let Ae=n.get(S[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,F,D,0,0,F,D,W,s.NEAREST),l===!0&&(de.length=0,Re.length=0,de.push(s.COLOR_ATTACHMENT0+ge),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(de.push(se),Re.push(se),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Re)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,ae.__webglColorRenderbuffer[ge]);let Ae=n.get(S[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let S=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ue(P){return Math.min(i.maxSamples,P.samples)}function Ye(P){let S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function H(P){let S=a.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function et(P,S){let F=P.colorSpace,D=P.format,W=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==wt&&F!==Bt&&(bt.getTransfer(F)===Ft?(D!==Qn||W!==_n)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",F)),S}function rt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=G,this.getTextureUnits=k,this.setTextureUnits=z,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=ee,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function nE(s,e){function t(n,i=Bt){let r,a=bt.getTransfer(i);if(n===_n)return s.UNSIGNED_BYTE;if(n===wc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===af)return s.BYTE;if(n===of)return s.SHORT;if(n===oa)return s.UNSIGNED_SHORT;if(n===Tc)return s.INT;if(n===xi)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===gn)return s.HALF_FLOAT;if(n===hf)return s.ALPHA;if(n===uf)return s.RGB;if(n===Qn)return s.RGBA;if(n===wi)return s.DEPTH_COMPONENT;if(n===As)return s.DEPTH_STENCIL;if(n===Ac)return s.RED;if(n===Cc)return s.RED_INTEGER;if(n===Cs)return s.RG;if(n===Pc)return s.RG_INTEGER;if(n===Ic)return s.RGBA_INTEGER;if(n===Po||n===Io||n===Lo||n===ko)if(a===Ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Lc||n===kc||n===Dc||n===Fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nc||n===Uc||n===Bc||n===zc||n===Hc||n===Do||n===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Nc||n===Uc)return a===Ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===zc)return r.COMPRESSED_R11_EAC;if(n===Hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Do)return r.COMPRESSED_RG11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gc||n===Vc||n===Wc||n===qc||n===Xc||n===Kc||n===jc||n===Yc||n===Jc||n===Zc||n===$c||n===Qc||n===eh||n===th)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$c)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qc)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===eh)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===th)return a===Ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nh||n===ih||n===sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nh)return a===Ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ih)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rh||n===ah||n===Fo||n===oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ah)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===la?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function aE(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,xf(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,y,M,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),b(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,y,M):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===wn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===wn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),M=y.envMap,x=y.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(x)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(g0),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,y,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=M*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function b(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oE(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){let v=E.program;n.uniformBlockBinding(x,v)}function c(x,E){let v=i[x.id];v===void 0&&(p(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",y));let T=E.program;n.updateUBOMapping(x,T);let _=e.render.frame;r[x.id]!==_&&(f(x),r[x.id]=_)}function h(x){let E=u();x.__bindingPointIndex=E;let v=s.createBuffer(),T=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let E=i[x.id],v=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let _=0,R=v.length;_<R;_++){let C=v[_];if(Array.isArray(C))for(let I=0,B=C.length;I<B;I++)d(C[I],_,I,T);else d(C,_,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,E,v,T){if(b(x,E,v,T)===!0){let _=x.__offset,R=x.value;if(Array.isArray(R)){let C=0;for(let I=0;I<R.length;I++){let B=R[I],G=g(B);m(B,x.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(R,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function m(x,E,v){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,v)}function b(x,E,v,T){let _=x.value,R=E+"_"+v;if(T[R]===void 0)return typeof _=="number"||typeof _=="boolean"?T[R]=_:ArrayBuffer.isView(_)?T[R]=_.slice():T[R]=_.clone(),!0;{let C=T[R];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return T[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function p(x){let E=x.uniforms,v=0,T=16;for(let R=0,C=E.length;R<C;R++){let I=Array.isArray(E[R])?E[R]:[E[R]];for(let B=0,G=I.length;B<G;B++){let k=I[B],z=Array.isArray(k.value)?k.value:[k.value];for(let N=0,L=z.length;N<L;N++){let O=z[N],U=g(O),q=v%T,j=q%U.boundary,oe=q+j;v+=j,oe!==0&&T-oe<U.storage&&(v+=T-oe),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=U.storage}}}let _=v%T;return _>0&&(v+=T-_),x.__size=v,x.__cache={},this}function g(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",x),E}function y(x){let E=x.target;E.removeEventListener("dispose",y);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function M(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:M}}function cE(){return Di===null&&(Di=new _s(lE,16,16,Cs,gn),Di.name="DFG_LUT",Di.minFilter=ft,Di.magFilter=ft,Di.wrapS=dn,Di.wrapT=dn,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var Mv,Ev,Sv,Tv,wv,Rv,Av,Cv,Pv,Iv,Lv,kv,Dv,Fv,Nv,Uv,Bv,zv,Hv,Ov,Gv,Vv,Wv,qv,Xv,Kv,jv,Yv,Jv,Zv,$v,Qv,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,f_,d_,p_,m_,g_,b_,x_,v_,__,y_,M_,E_,S_,T_,w_,R_,A_,C_,P_,I_,L_,k_,D_,F_,N_,U_,B_,z_,H_,O_,G_,V_,W_,q_,X_,K_,j_,Y_,J_,Z_,$_,Q_,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,fy,dy,py,my,gy,by,xy,vy,_y,yy,My,Ey,Sy,Ty,wy,Ry,Ay,Cy,Py,Iy,Ly,ky,Dy,Fy,Ny,Uy,By,zy,Hy,Oy,Gy,Vy,Wy,qy,Xy,Ky,jy,Yy,Jy,Zy,$y,Qy,e1,t1,gt,we,Fi,hh,n1,u0,fa,l1,c1,h1,Bo,Vm,Af,Cf,Pf,If,u1,ar,or,fh,M1,f0,Df,d0,p0,m0,Km,jm,Ym,Jm,Zm,Ff,Nf,Uf,Lf,da,uM,fM,e0,gM,uh,MM,EM,TM,RM,CM,IM,kM,UM,zf,Hf,qM,YM,JM,ZM,$M,c0,zo,kf,iE,sE,Of,Gf,rE,g0,lE,Di,dh,Tt=lt(()=>{Rf();Rf();Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ev=`#ifdef USE_ALPHAHASH
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
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
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
#endif`,Cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pv=`#ifdef USE_BATCHING
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
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fv=`#ifdef USE_IRIDESCENCE
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
#endif`,Nv=`#ifdef USE_BUMPMAP
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
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qv=`#define PI 3.141592653589793
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
} // validated`,Xv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kv=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s_=`#ifdef USE_ENVMAP
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
#endif`,r_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c_=`#ifdef USE_GRADIENTMAP
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
}`,h_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v_=`PhysicalMaterial material;
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
#endif`,__=`uniform sampler2D dfgLUT;
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
}`,y_=`
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L_=`#if defined( USE_POINTS_UV )
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
#endif`,k_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B_=`#ifdef USE_MORPHTARGETS
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
#endif`,z_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,j_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,by=`#ifdef USE_TRANSMISSION
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ey=`uniform sampler2D t2D;
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ry=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ay=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ky=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`uniform float scale;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Uy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,Hy=`#define MATCAP
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
}`,Oy=`#define MATCAP
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
}`,Gy=`#define NORMAL
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
}`,Vy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Ky=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,Yy=`#define TOON
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
}`,Jy=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,$y=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,e1=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,gt={alphahash_fragment:Mv,alphahash_pars_fragment:Ev,alphamap_fragment:Sv,alphamap_pars_fragment:Tv,alphatest_fragment:wv,alphatest_pars_fragment:Rv,aomap_fragment:Av,aomap_pars_fragment:Cv,batching_pars_vertex:Pv,batching_vertex:Iv,begin_vertex:Lv,beginnormal_vertex:kv,bsdfs:Dv,iridescence_fragment:Fv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Bv,clipping_planes_pars_vertex:zv,clipping_planes_vertex:Hv,color_fragment:Ov,color_pars_fragment:Gv,color_pars_vertex:Vv,color_vertex:Wv,common:qv,cube_uv_reflection_fragment:Xv,defaultnormal_vertex:Kv,displacementmap_pars_vertex:jv,displacementmap_vertex:Yv,emissivemap_fragment:Jv,emissivemap_pars_fragment:Zv,colorspace_fragment:$v,colorspace_pars_fragment:Qv,envmap_fragment:e_,envmap_common_pars_fragment:t_,envmap_pars_fragment:n_,envmap_pars_vertex:i_,envmap_physical_pars_fragment:p_,envmap_vertex:s_,fog_vertex:r_,fog_pars_vertex:a_,fog_fragment:o_,fog_pars_fragment:l_,gradientmap_pars_fragment:c_,lightmap_pars_fragment:h_,lights_lambert_fragment:u_,lights_lambert_pars_fragment:f_,lights_pars_begin:d_,lights_toon_fragment:m_,lights_toon_pars_fragment:g_,lights_phong_fragment:b_,lights_phong_pars_fragment:x_,lights_physical_fragment:v_,lights_physical_pars_fragment:__,lights_fragment_begin:y_,lights_fragment_maps:M_,lights_fragment_end:E_,lightprobes_pars_fragment:S_,logdepthbuf_fragment:T_,logdepthbuf_pars_fragment:w_,logdepthbuf_pars_vertex:R_,logdepthbuf_vertex:A_,map_fragment:C_,map_pars_fragment:P_,map_particle_fragment:I_,map_particle_pars_fragment:L_,metalnessmap_fragment:k_,metalnessmap_pars_fragment:D_,morphinstance_vertex:F_,morphcolor_vertex:N_,morphnormal_vertex:U_,morphtarget_pars_vertex:B_,morphtarget_vertex:z_,normal_fragment_begin:H_,normal_fragment_maps:O_,normal_pars_fragment:G_,normal_pars_vertex:V_,normal_vertex:W_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:K_,clearcoat_pars_fragment:j_,iridescence_pars_fragment:Y_,opaque_fragment:J_,packing:Z_,premultiplied_alpha_fragment:$_,project_vertex:Q_,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:hy,skinnormal_vertex:uy,specularmap_fragment:fy,specularmap_pars_fragment:dy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:by,uv_pars_fragment:xy,uv_pars_vertex:vy,uv_vertex:_y,worldpos_vertex:yy,background_vert:My,background_frag:Ey,backgroundCube_vert:Sy,backgroundCube_frag:Ty,cube_vert:wy,cube_frag:Ry,depth_vert:Ay,depth_frag:Cy,distance_vert:Py,distance_frag:Iy,equirect_vert:Ly,equirect_frag:ky,linedashed_vert:Dy,linedashed_frag:Fy,meshbasic_vert:Ny,meshbasic_frag:Uy,meshlambert_vert:By,meshlambert_frag:zy,meshmatcap_vert:Hy,meshmatcap_frag:Oy,meshnormal_vert:Gy,meshnormal_frag:Vy,meshphong_vert:Wy,meshphong_frag:qy,meshphysical_vert:Xy,meshphysical_frag:Ky,meshtoon_vert:jy,meshtoon_frag:Yy,points_vert:Jy,points_frag:Zy,shadow_vert:$y,shadow_frag:Qy,sprite_vert:e1,sprite_frag:t1},we={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Fi={basic:{uniforms:Fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new _e(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Fn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Fn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Fn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new _e(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Fn([we.points,we.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Fn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Fn([we.common,we.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Fn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Fn([we.sprite,we.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Fn([we.common,we.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Fn([we.lights,we.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};Fi.physical={uniforms:Fn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};hh={r:0,b:0,g:0},n1=new Pe,u0=new ut;u0.set(-1,0,0,0,1,0,0,0,1);fa=4,l1=6,c1=20,h1=256,Bo=new Li,Vm=new _e,Af=null,Cf=0,Pf=0,If=!1,u1=new w,ar=new w,or=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=u1}=r;Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Cf,Pf),this._renderer.xr.enabled=If,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Cf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),If=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:gn,format:Qn,colorSpace:wt,depthBuffer:!1},i=Wm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=f1(r)),this._blurMaterial=p1(r,e,t),this._ggxMaterial=d1(r,e,t)}return i}_compileMaterial(e){let t=new J(new ht,e);this._renderer.compile(t,Bo)}_sceneToCubeUV(e,t,n,i,r){let l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Vm),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new J(new Ve,new st({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,p=b.material,g=!1,y=e.background;y?y.isColor&&(p.color.copy(y),e.background=null,g=!0):(p.color.copy(Vm),g=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let E=this._cubeSize;ua(i,x*E,M>2?E:0,E,E),u.setRenderTarget(i),g&&u.render(b,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Rs||e.mapping===ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ua(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Bo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,b=this._sizeLods[n],p=3*b*(n>m-fa?n-m+fa:0),g=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,ua(r,p,g,3*b,2*b),i.setRenderTarget(r),i.render(o,Bo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,ua(e,p,g,3*b,2*b),i.setRenderTarget(e),i.render(o,Bo)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-fa?i-this._lodMax+fa:0),f=4*(this._cubeSize-h);ua(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,Bo)}};fh=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ro(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ve(5,5,5),r=new Et({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:ki});r.uniforms.tEquirect.value=t;let a=new J(i,r),o=t.minFilter;return t.minFilter===Jt&&(t.minFilter=ft),new xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};M1={[$u]:"LINEAR_TONE_MAPPING",[Qu]:"REINHARD_TONE_MAPPING",[ef]:"CINEON_TONE_MAPPING",[Ao]:"ACES_FILMIC_TONE_MAPPING",[nf]:"AGX_TONE_MAPPING",[sf]:"NEUTRAL_TONE_MAPPING",[tf]:"CUSTOM_TONE_MAPPING"};f0=new xn,Df=new Ms(1,1),d0=new Za,p0=new $l,m0=new ro,Km=[],jm=[],Ym=new Float32Array(16),Jm=new Float32Array(9),Zm=new Float32Array(4);Ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}},Nf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cM(t.type)}},Uf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Lf=/(\w+)(\])?(\[|\.)?/g;da=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);hM(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};uM=37297,fM=0;e0=new ut;gM={[$u]:"Linear",[Qu]:"Reinhard",[ef]:"Cineon",[Ao]:"ACESFilmic",[nf]:"AgX",[sf]:"Neutral",[tf]:"Custom"};uh=new w;MM=/^[ \t]*#include +<([\w\d./]+)>/gm;EM=new Map;TM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;RM={[nr]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};CM={[Rs]:"ENVMAP_TYPE_CUBE",[ir]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE_UV"};IM={[ir]:"ENVMAP_MODE_REFRACTION"};kM={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[xm]:"ENVMAP_BLENDING_MIX",[vm]:"ENVMAP_BLENDING_ADD"};UM=0,zf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hf(e),t.set(e,n)),n}},Hf=class{constructor(e){this.id=UM++,this.code=e,this.usedTimes=0}};qM=0;YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
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
}`,ZM=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],$M=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],c0=new Pe,zo=new w,kf=new w;iE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sE=`
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

}`,Of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ao(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Et({vertexShader:iE,fragmentShader:sE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new J(new ot(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gf=class extends Ri{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,b=typeof XRWebGLBinding<"u",p=new Of,g={},y=t.getContextAttributes(),M=null,x=null,E=[],v=[],T=new me,_=null,R=null,C=new Yt;C.viewport=new Ct;let I=new Yt;I.viewport=new Ct;let B=[C,I],G=new vc,k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=E[ne];return le===void 0&&(le=new Jr,E[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=E[ne];return le===void 0&&(le=new Jr,E[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=E[ne];return le===void 0&&(le=new Jr,E[ne]=le),le.getHandSpace()};function N(ne){let le=v.indexOf(ne.inputSource);if(le===-1)return;let be=E[le];be!==void 0&&(be.update(ne.inputSource,ne.frame,c||a),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function L(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",O);for(let ne=0;ne<E.length;ne++){let le=v[ne];le!==null&&(v[ne]=null,E[ne].disconnect(le))}k=null,z=null,p.reset();for(let ne in g)delete g[ne];if(e.setRenderTarget(M),d=null,f=null,u=null,i=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(T.width,T.height,!1),R!==null){let ne=R.camera;ne.fov=R.fov,ne.zoom=R.zoom,ne.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",L),i.addEventListener("inputsourceschange",O),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Ge=null,Y=null;y.depth&&(Y=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=y.stencil?As:wi,Ge=y.stencil?la:xi);let fe={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(fe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new en(f.textureWidth,f.textureHeight,{format:Qn,type:_n,depthTexture:new Ms(f.textureWidth,f.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let be={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,be),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new en(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(ne){for(let le=0;le<ne.removed.length;le++){let be=ne.removed[le],Ge=v.indexOf(be);Ge>=0&&(v[Ge]=null,E[Ge].disconnect(be))}for(let le=0;le<ne.added.length;le++){let be=ne.added[le],Ge=v.indexOf(be);if(Ge===-1){for(let fe=0;fe<E.length;fe++)if(fe>=v.length){v.push(be),Ge=fe;break}else if(v[fe]===null){v[fe]=be,Ge=fe;break}if(Ge===-1)break}let Y=E[Ge];Y&&Y.connect(be)}}let U=new w,q=new w;function j(ne,le,be){U.setFromMatrixPosition(le.matrixWorld),q.setFromMatrixPosition(be.matrixWorld);let Ge=U.distanceTo(q),Y=le.projectionMatrix.elements,fe=be.projectionMatrix.elements,ke=Y[14]/(Y[10]-1),V=Y[14]/(Y[10]+1),ee=(Y[9]+1)/Y[5],ce=(Y[9]-1)/Y[5],he=(Y[8]-1)/Y[0],de=(fe[8]+1)/fe[0],Re=ke*he,De=ke*de,Ue=Ge/(-he+de),Ye=Ue*-he;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ye),ne.translateZ(Ue),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Y[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let H=ke+Ue,et=V+Ue,rt=Re-Ye,P=De+(Ge-Ye),S=ee*V/et*H,F=ce*V/et*H;ne.projectionMatrix.makePerspective(rt,P,S,F,H,et),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let le=ne.near,be=ne.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(be=p.depthFar)),G.near=I.near=C.near=le,G.far=I.far=C.far=be,(k!==G.near||z!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,z=G.far),G.layers.mask=ne.layers.mask|6,C.layers.mask=G.layers.mask&-5,I.layers.mask=G.layers.mask&-3;let Ge=ne.parent,Y=G.cameras;oe(G,Ge);for(let fe=0;fe<Y.length;fe++)oe(Y[fe],Ge);Y.length===2?j(G,C,I):G.projectionMatrix.copy(C.projectionMatrix),R===null&&ne.isPerspectiveCamera&&(R={camera:ne,fov:ne.fov,zoom:ne.zoom}),Q(ne,G,Ge)};function Q(ne,le,be){be===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ks*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(ne){return g[ne]};let Ee=null;function Se(ne,le){if(h=le.getViewerPose(c||a),m=le,h!==null){let be=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let Ge=!1;be.length!==G.cameras.length&&(G.cameras.length=0,Ge=!0);for(let V=0;V<be.length;V++){let ee=be[V],ce=null;if(d!==null)ce=d.getViewport(ee);else{let de=u.getViewSubImage(f,ee);ce=de.viewport,V===0&&(e.setRenderTargetTextures(x,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(x))}let he=B[V];he===void 0&&(he=new Yt,he.layers.enable(V),he.viewport=new Ct,B[V]=he),he.matrix.fromArray(ee.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(ee.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(ce.x,ce.y,ce.width,ce.height),V===0&&(G.matrix.copy(he.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ge===!0&&G.cameras.push(he)}let Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let V=u.getDepthInformation(be[0]);V&&V.isValid&&V.texture&&p.init(V,i.renderState)}if(Y&&Y.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let V=0;V<be.length;V++){let ee=be[V].camera;if(ee){let ce=g[ee];ce||(ce=new ao,g[ee]=ce);let he=u.getCameraImage(ee);ce.sourceTexture=he}}}}for(let be=0;be<E.length;be++){let Ge=v[be],Y=E[be];Ge!==null&&Y!==void 0&&Y.update(Ge,le,c||a)}Ee&&Ee(ne,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}let je=new h0;je.setAnimationLoop(Se),this.setAnimationLoop=function(ne){Ee=ne},this.dispose=function(){}}},rE=new Pe,g0=new ut;g0.set(-1,0,0,0,1,0,0,0,1);lE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;dh=class{constructor(e={}){let{canvas:t=Im(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=d,p=new Set([Ic,Pc,Cc]),g=new Set([_n,xi,oa,la,wc,Rc]),y=new Uint32Array(4),M=new Int32Array(4),x=new w,E=null,v=null,T=[],_=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,B=null,G=null,k=null,z=null;this._outputColorSpace=nt;let N=0,L=0,O=null,U=-1,q=null,j=new Ct,oe=new Ct,Q=null,Ee=new _e(0),Se=0,je=t.width,ne=t.height,le=1,be=null,Ge=null,Y=new Ct(0,0,je,ne),fe=new Ct(0,0,je,ne),ke=!1,V=new $r,ee=!1,ce=!1,he=new Pe,de=new w,Re=new Ct,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function Ye(){return O===null?le:1}let H=n;function et(A,X){return t.getContext(A,X)}let rt,P,S,F,D,W,se,ae,te,ie,ge,Ae,ve,ye,xe,Te,Ze,K,Me,ue,Ce,Ne,pe;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",qt,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",hi,!1),H===null){let X="webgl2";if(H=et(X,A),H===null)throw et(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(A){throw t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),tt("WebGLRenderer: "+A.message),A}function $e(){rt=new g1(H),rt.init(),Ce=new nE(H,rt),P=new a1(H,rt,e,Ce),S=new eE(H,rt),P.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),G=H.createFramebuffer(),k=H.createFramebuffer(),z=H.createFramebuffer(),F=new v1(H),D=new HM,W=new tE(H,rt,S,D,P,Ce,F),se=new m1(C),ae=new yv(H),Ne=new s1(H,ae),te=new b1(H,ae,F,Ne),ie=new y1(H,te,ae,Ne,F),K=new _1(H,P,W),xe=new o1(D),ge=new zM(C,se,rt,P,Ne,xe),Ae=new aE(C,D),ve=new GM,ye=new jM(rt),Ze=new i1(C,se,S,ie,m,l),Te=new QM(C,ie,P),pe=new oE(H,F,P,S),Me=new r1(H,rt,F),ue=new x1(H,rt,F),F.programs=ge.programs,C.capabilities=P,C.extensions=rt,C.properties=D,C.renderLists=ve,C.shadowMap=Te,C.state=S,C.info=F}b!==_n&&(R=new E1(b,t.width,t.height,o,i,r));let Xe=new Gf(C,H);this.xr=Xe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=rt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=rt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(A){A!==void 0&&(le=A,this.setSize(je,ne,!1))},this.getSize=function(A){return A.set(je,ne)},this.setSize=function(A,X,re=!0){if(Xe.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}je=A,ne=X,t.width=Math.floor(A*le),t.height=Math.floor(X*le),re===!0&&(t.style.width=A+"px",t.style.height=X+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(je*le,ne*le).floor()},this.setDrawingBufferSize=function(A,X,re){je=A,ne=X,le=re,t.width=Math.floor(A*re),t.height=Math.floor(X*re),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(b===_n){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Y)},this.setViewport=function(A,X,re,Z){A.isVector4?Y.set(A.x,A.y,A.z,A.w):Y.set(A,X,re,Z),S.viewport(j.copy(Y).multiplyScalar(le).round())},this.getScissor=function(A){return A.copy(fe)},this.setScissor=function(A,X,re,Z){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,X,re,Z),S.scissor(oe.copy(fe).multiplyScalar(le).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(A){S.setScissorTest(ke=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Ge=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,re=!0){let Z=0;if(A){let $=!1;if(O!==null){let Fe=O.texture.format;$=p.has(Fe)}if($){let Fe=O.texture.type,He=g.has(Fe),Ie=Ze.getClearColor(),We=Ze.getClearAlpha(),Je=Ie.r,pt=Ie.g,yt=Ie.b;He?(y[0]=Je,y[1]=pt,y[2]=yt,y[3]=We,H.clearBufferuiv(H.COLOR,0,y)):(M[0]=Je,M[1]=pt,M[2]=yt,M[3]=We,H.clearBufferiv(H.COLOR,0,M))}else Z|=H.COLOR_BUFFER_BIT}X&&(Z|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(Z|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&H.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),B=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",hi,!1),Ze.dispose(),ve.dispose(),ye.dispose(),D.dispose(),se.dispose(),ie.dispose(),Ne.dispose(),pe.dispose(),ge.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Jd),Xe.removeEventListener("sessionend",Zd),Bs.stop()};function qt(A){A.preventDefault(),Ja("WebGLRenderer: Context Lost."),I=!0}function kt(){Ja("WebGLRenderer: Context Restored."),I=!1;let A=F.autoReset,X=Te.enabled,re=Te.autoUpdate,Z=Te.needsUpdate,$=Te.type;$e(),F.autoReset=A,Te.enabled=X,Te.autoUpdate=re,Te.needsUpdate=Z,Te.type=$}function hi(A){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Mi(A){let X=A.target;X.removeEventListener("dispose",Mi),Db(X)}function Db(A){Fb(A),D.remove(A)}function Fb(A){let X=D.get(A).programs;X!==void 0&&(X.forEach(function(re){ge.releaseProgram(re)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,re,Z,$,Fe){X===null&&(X=De);let He=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ie=Bb(A,X,re,Z,$);S.setMaterial(Z,He);let We=re.index,Je=1;if(Z.wireframe===!0){if(We=te.getWireframeAttribute(re),We===void 0)return;Je=2}let pt=re.drawRange,yt=re.attributes.position,qe=pt.start*Je,Dt=(pt.start+pt.count)*Je;Fe!==null&&(qe=Math.max(qe,Fe.start*Je),Dt=Math.min(Dt,(Fe.start+Fe.count)*Je)),We!==null?(qe=Math.max(qe,0),Dt=Math.min(Dt,We.count)):yt!=null&&(qe=Math.max(qe,0),Dt=Math.min(Dt,yt.count));let un=Dt-qe;if(un<0||un===1/0)return;Ne.setup($,Z,Ie,re,We);let jt,Vt=Me;if(We!==null&&(jt=ae.get(We),Vt=ue,Vt.setIndex(jt)),$.isMesh)Z.wireframe===!0?(S.setLineWidth(Z.wireframeLinewidth*Ye()),Vt.setMode(H.LINES)):Vt.setMode(H.TRIANGLES);else if($.isLine){let Pn=Z.linewidth;Pn===void 0&&(Pn=1),S.setLineWidth(Pn*Ye()),$.isLineSegments?Vt.setMode(H.LINES):$.isLineLoop?Vt.setMode(H.LINE_LOOP):Vt.setMode(H.LINE_STRIP)}else $.isPoints?Vt.setMode(H.POINTS):$.isSprite&&Vt.setMode(H.TRIANGLES);if($.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Vt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Pn=$._multiDrawStarts,Be=$._multiDrawCounts,Un=$._multiDrawCount,At=We?ae.get(We).bytesPerElement:1,si=D.get(Z).currentProgram.getUniforms();for(let Ei=0;Ei<Un;Ei++)si.setValue(H,"_gl_DrawID",Ei),Vt.render(Pn[Ei]/At,Be[Ei])}else if($.isInstancedMesh)Vt.renderInstances(qe,un,$.count);else if(re.isInstancedBufferGeometry){let Pn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Be=Math.min(re.instanceCount,Pn);Vt.renderInstances(qe,un,Be)}else Vt.render(qe,un)};function Yd(A,X,re,Z){B!==null&&A.isNodeMaterial&&B.setObject(Z,A),ee===!0&&xe.setState(A,re,!1),A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=wn,A.needsUpdate=!0,ll(A,X,Z),A.side=zn,A.needsUpdate=!0,ll(A,X,Z),A.side=Rt):ll(A,X,Z)}this.compile=function(A,X,re=null){re===null&&(re=A),B!==null&&B.renderStart(A,X,re),v=ye.get(re),v.init(X),_.push(v),re.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),A!==re&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights(),B!==null&&B.updateLights(v.state.lightsArray),ce=this.localClippingEnabled,ee=xe.init(this.clippingPlanes,ce),ee===!0&&xe.setGlobalState(this.clippingPlanes,X),B!==null&&Te.render(v.state.shadowsArray,re,X);let Z=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Fe=$.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){let Ie=Fe[He];Yd(Ie,re,X,$),Z.add(Ie)}else Yd(Fe,re,X,$),Z.add(Fe)}),v=_.pop(),B!==null&&B.renderEnd(),Z},this.compileAsync=function(A,X,re=null){let Z=this.compile(A,X,re);return new Promise($=>{function Fe(){if(Z.forEach(function(He){let We=D.get(He).currentProgram;(We===void 0||We.isReady())&&Z.delete(He)}),Z.size===0){$(A);return}setTimeout(Fe,10)}rt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let tu=null;function Nb(A){tu&&tu(A)}function Jd(){Bs.stop()}function Zd(){Bs.start()}let Bs=new h0;Bs.setAnimationLoop(Nb),typeof self<"u"&&Bs.setContext(self),this.setAnimationLoop=function(A){tu=A,Xe.setAnimationLoop(A),A===null?Bs.stop():Bs.start()},Xe.addEventListener("sessionstart",Jd),Xe.addEventListener("sessionend",Zd),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(A,X);let re=Xe.enabled===!0&&Xe.isPresenting===!0,Z=R!==null&&(O===null||re)&&R.begin(C,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(X),X=Xe.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,O),v=ye.get(A,_.length),v.init(X),v.state.textureUnits=W.getTextureUnits(),_.push(v),he.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),V.setFromProjectionMatrix(he,mi,X.reversedDepth),ce=this.localClippingEnabled,ee=xe.init(this.clippingPlanes,ce),E=ve.get(A,T.length),E.init(),T.push(E),Xe.enabled===!0&&Xe.isPresenting===!0){let He=C.xr.getDepthSensingMesh();He!==null&&nu(He,X,-1/0,C.sortObjects)}nu(A,X,0,C.sortObjects),E.finish(),B!==null&&B.updateLights(v.state.lightsArray),C.sortObjects===!0&&E.sort(be,Ge),Ue=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ue&&Ze.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&xe.beginShadows();let $=v.state.shadowsArray;if(Te.render($,A,X),ee===!0&&xe.endShadows(),(Z&&R.hasRenderPass())===!1){let He=E.opaque,Ie=E.transmissive;if(v.setupLights(),X.isArrayCamera){let We=X.cameras;if(Ie.length>0)for(let Je=0,pt=We.length;Je<pt;Je++){let yt=We[Je];Qd(He,Ie,A,yt)}Ue&&Ze.render(A);for(let Je=0,pt=We.length;Je<pt;Je++){let yt=We[Je];$d(E,A,yt,yt.viewport)}}else Ie.length>0&&Qd(He,Ie,A,X),Ue&&Ze.render(A),$d(E,A,X)}O!==null&&L===0&&(W.updateMultisampleRenderTarget(O),W.updateRenderTargetMipmap(O)),Z&&R.end(C),A.isScene===!0&&A.onAfterRender(C,A,X),Ne.resetDefaultState(),U=-1,q=null,_.pop(),_.length>0?(v=_[_.length-1],W.setTextureUnits(v.state.textureUnits),ee===!0&&xe.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,B!==null&&B.renderEnd()};function nu(A,X,re,Z){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(V)){Z&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);let He=ie.update(A),Ie=A.material;Ie.visible&&E.push(A,He,Ie,re,Re.z,null,X)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(V))){let He=ie.update(A),Ie=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Re.copy(He.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(Ie)){let We=He.groups;for(let Je=0,pt=We.length;Je<pt;Je++){let yt=We[Je],qe=Ie[yt.materialIndex];qe&&qe.visible&&E.push(A,He,qe,re,Re.z,yt,X)}}else Ie.visible&&E.push(A,He,Ie,re,Re.z,null,X)}}let Fe=A.children;for(let He=0,Ie=Fe.length;He<Ie;He++)nu(Fe[He],X,re,Z)}function $d(A,X,re,Z){let{opaque:$,transmissive:Fe,transparent:He}=A;v.setupLightsView(re),ee===!0&&xe.setGlobalState(C.clippingPlanes,re),Z&&S.viewport(j.copy(Z)),$.length>0&&ol($,X,re),Fe.length>0&&ol(Fe,X,re),He.length>0&&ol(He,X,re),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Qd(A,X,re,Z){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[Z.id]===void 0){let qe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[Z.id]=new en(1,1,{generateMipmaps:!0,type:qe?gn:_n,minFilter:Jt,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:bt.workingColorSpace})}let Fe=v.state.transmissionRenderTarget[Z.id],He=Z.viewport||j;Fe.setSize(He.z*C.transmissionResolutionScale,He.w*C.transmissionResolutionScale);let Ie=C.getRenderTarget(),We=C.getActiveCubeFace(),Je=C.getActiveMipmapLevel();C.setRenderTarget(Fe),C.getClearColor(Ee),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),Ue&&Ze.render(re);let pt=C.toneMapping;C.toneMapping=Wn;let yt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),v.setupLightsView(Z),ee===!0&&xe.setGlobalState(C.clippingPlanes,Z),ol(A,re,Z),W.updateMultisampleRenderTarget(Fe),W.updateRenderTargetMipmap(Fe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Dt=0,un=X.length;Dt<un;Dt++){let jt=X[Dt],{object:Vt,geometry:Pn,material:Be,group:Un}=jt;if(Be.side===Rt&&Vt.layers.test(Z.layers)){let At=Be.side;Be.side=wn,Be.needsUpdate=!0,ep(Vt,re,Z,Pn,Be,Un),Be.side=At,Be.needsUpdate=!0,qe=!0}}qe===!0&&(W.updateMultisampleRenderTarget(Fe),W.updateRenderTargetMipmap(Fe))}C.setRenderTarget(Ie,We,Je),C.setClearColor(Ee,Se),yt!==void 0&&(Z.viewport=yt),C.toneMapping=pt}function ol(A,X,re){let Z=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Fe=A.length;$<Fe;$++){let He=A[$],{object:Ie,geometry:We,group:Je}=He,pt=He.material;pt.allowOverride===!0&&Z!==null&&(pt=Z),Ie.layers.test(re.layers)&&ep(Ie,X,re,We,pt,Je)}}function ep(A,X,re,Z,$,Fe){B!==null&&$.isNodeMaterial&&B.setObject(A,$),A.onBeforeRender(C,X,re,Z,$,Fe),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(C,X,re,Z,A,Fe),$.transparent===!0&&$.side===Rt&&$.forceSinglePass===!1?($.side=wn,$.needsUpdate=!0,C.renderBufferDirect(re,X,Z,$,A,Fe),$.side=zn,$.needsUpdate=!0,C.renderBufferDirect(re,X,Z,$,A,Fe),$.side=Rt):C.renderBufferDirect(re,X,Z,$,A,Fe),A.onAfterRender(C,X,re,Z,$,Fe)}function ll(A,X,re){X.isScene!==!0&&(X=De);let Z=D.get(A),$=v.state.lights,Fe=v.state.shadowsArray,He=$.state.version,Ie=ge.getParameters(A,$.state,Fe,X,re,v.state.lightProbeGridArray),We=ge.getProgramCacheKey(Ie),Je=Z.programs;Z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,Z.fog=X.fog;let pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Z.envMap=se.get(A.envMap||Z.environment,pt),Z.envMapRotation=Z.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Je===void 0&&(A.addEventListener("dispose",Mi),Je=new Map,Z.programs=Je);let yt=Je.get(We);if(yt!==void 0){if(Z.currentProgram===yt&&Z.lightsStateVersion===He)return np(A,Ie),yt}else Ie.uniforms=ge.getUniforms(A),B!==null&&A.isNodeMaterial&&B.build(A,re,Ie),A.onBeforeCompile(Ie,C),yt=ge.acquireProgram(Ie,We),Je.set(We,yt),Z.uniforms=Ie.uniforms;let qe=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=xe.uniform),np(A,Ie),Z.needsLights=Hb(A),Z.lightsStateVersion=He,Z.needsLights&&(qe.ambientLightColor.value=$.state.ambient,qe.lightProbe.value=$.state.probe,qe.sunLights.value=$.state.sun,qe.sunLightShadows.value=$.state.sunShadow,qe.directionalLights.value=$.state.directional,qe.directionalLightShadows.value=$.state.directionalShadow,qe.spotLights.value=$.state.spot,qe.spotLightShadows.value=$.state.spotShadow,qe.rectAreaLights.value=$.state.rectArea,qe.ltc_1.value=$.state.rectAreaLTC1,qe.ltc_2.value=$.state.rectAreaLTC2,qe.pointLights.value=$.state.point,qe.pointLightShadows.value=$.state.pointShadow,qe.hemisphereLights.value=$.state.hemi,qe.sunShadowMatrix.value=$.state.sunShadowMatrix,qe.sunShadowCascade.value=$.state.sunShadowCascade,qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,qe.spotLightMatrix.value=$.state.spotLightMatrix,qe.spotLightMap.value=$.state.spotLightMap,qe.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.lightProbeGrid=v.state.lightProbeGridArray.length>0,Z.currentProgram=yt,Z.uniformsList=null,yt}function tp(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=da.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function np(A,X){let re=D.get(A);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Ub(A,X){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(X.matrixWorld);for(let re=0,Z=A.length;re<Z;re++){let $=A[re];if($.texture!==null&&$.boundingBox.containsPoint(x))return $}return null}function Bb(A,X,re,Z,$){X.isScene!==!0&&(X=De),W.resetTextureUnits();let Fe=X.fog,He=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?X.environment:null,Ie=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:bt.workingColorSpace,We=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Je=se.get(Z.envMap||He,We),pt=Z.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,yt=!!re.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),qe=!!re.morphAttributes.position,Dt=!!re.morphAttributes.normal,un=!!re.morphAttributes.color,jt=Wn;Z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(jt=C.toneMapping);let Vt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Pn=Vt!==void 0?Vt.length:0,Be=D.get(Z),Un=v.state.lights;if(ee===!0&&(ce===!0||A!==q)){let Xt=A===q&&Z.id===U;xe.setState(Z,A,Xt)}let At=!1;Z.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Un.state.version||Be.outputColorSpace!==Ie||$.isBatchedMesh&&Be.batching===!1||!$.isBatchedMesh&&Be.batching===!0||$.isBatchedMesh&&Be.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Be.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Be.instancing===!1||!$.isInstancedMesh&&Be.instancing===!0||$.isSkinnedMesh&&Be.skinning===!1||!$.isSkinnedMesh&&Be.skinning===!0||$.isInstancedMesh&&Be.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Be.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Be.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Be.instancingMorph===!1&&$.morphTexture!==null||Be.envMap!==Je||Z.fog===!0&&Be.fog!==Fe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==xe.numPlanes||Be.numIntersection!==xe.numIntersection)||Be.vertexAlphas!==pt||Be.vertexTangents!==yt||Be.morphTargets!==qe||Be.morphNormals!==Dt||Be.morphColors!==un||Be.toneMapping!==jt||Be.morphTargetsCount!==Pn||!!Be.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Be.__version=Z.version);let si=Be.currentProgram;At===!0&&(si=ll(Z,X,$),B&&Z.isNodeMaterial&&B.onUpdateProgram(Z,si,Be));let Ei=!1,ls=!1,Mr=!1,Ht=si.getUniforms(),nn=Be.uniforms;if(S.useProgram(si.program)&&(Ei=!0,ls=!0,Mr=!0),Z.id!==U&&(U=Z.id,ls=!0),Be.needsLights){let Xt=Ub(v.state.lightProbeGridArray,$);Be.lightProbeGrid!==Xt&&(Be.lightProbeGrid=Xt,ls=!0)}if(Ei||q!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ht.setValue(H,"projectionMatrix",A.projectionMatrix),Ht.setValue(H,"viewMatrix",A.matrixWorldInverse);let hs=Ht.map.cameraPosition;hs!==void 0&&hs.setValue(H,de.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ht.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ht.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,ls=!0,Mr=!0)}if(Be.needsLights&&(Un.state.sunShadowMap.length>0&&Ht.setValue(H,"sunShadowMap",Un.state.sunShadowMap,W),Un.state.directionalShadowMap.length>0&&Ht.setValue(H,"directionalShadowMap",Un.state.directionalShadowMap,W),Un.state.spotShadowMap.length>0&&Ht.setValue(H,"spotShadowMap",Un.state.spotShadowMap,W),Un.state.pointShadowMap.length>0&&Ht.setValue(H,"pointShadowMap",Un.state.pointShadowMap,W)),$.isSkinnedMesh){Ht.setOptional(H,$,"bindMatrix"),Ht.setOptional(H,$,"bindMatrixInverse");let Xt=$.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Ht.setValue(H,"boneTexture",Xt.boneTexture,W))}$.isBatchedMesh&&(Ht.setOptional(H,$,"batchingTexture"),Ht.setValue(H,"batchingTexture",$._matricesTexture,W),Ht.setOptional(H,$,"batchingIdTexture"),Ht.setValue(H,"batchingIdTexture",$._indirectTexture,W),Ht.setOptional(H,$,"batchingColorTexture"),$._colorsTexture!==null&&Ht.setValue(H,"batchingColorTexture",$._colorsTexture,W));let cs=re.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&K.update($,re,si),(ls||Be.receiveShadow!==$.receiveShadow)&&(Be.receiveShadow=$.receiveShadow,Ht.setValue(H,"receiveShadow",$.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&X.environment!==null&&(nn.envMapIntensity.value=X.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=cE()),ls){if(Ht.setValue(H,"toneMappingExposure",C.toneMappingExposure),Be.needsLights&&zb(nn,Mr),Fe&&Z.fog===!0&&Ae.refreshFogUniforms(nn,Fe),Ae.refreshMaterialUniforms(nn,Z,le,ne,v.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.lightProbeGrid){let Xt=Be.lightProbeGrid;nn.probesSH.value=Xt.texture,nn.probesMin.value.copy(Xt.boundingBox.min),nn.probesMax.value.copy(Xt.boundingBox.max),nn.probesResolution.value.copy(Xt.resolution)}da.upload(H,tp(Be),nn,W)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(da.upload(H,tp(Be),nn,W),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ht.setValue(H,"center",$.center),Ht.setValue(H,"modelViewMatrix",$.modelViewMatrix),Ht.setValue(H,"normalMatrix",$.normalMatrix),Ht.setValue(H,"modelMatrix",$.matrixWorld),Z.uniformsGroups!==void 0){let Xt=Z.uniformsGroups;for(let hs=0,Er=Xt.length;hs<Er;hs++){let sp=Xt[hs];pe.update(sp,si),pe.bind(sp,si)}}return si}function zb(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Hb(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,X,re){let Z=D.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=X,D.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:re,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let re=D.get(A);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,re=0){O=A,N=X,L=re;let Z=null,$=!1,Fe=!1;if(A){let Ie=D.get(A);if(Ie.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(H.FRAMEBUFFER,Ie.__webglFramebuffer),j.copy(A.viewport),oe.copy(A.scissor),Q=A.scissorTest,S.viewport(j),S.scissor(oe),S.setScissorTest(Q),U=-1;return}else if(Ie.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Ie.__hasExternalTextures)W.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let pt=A.depthTexture;if(Ie.__boundDepthTexture!==pt){if(pt!==null&&D.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}let We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);let Je=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[X])?Z=Je[X][re]:Z=Je[X],$=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?Z=D.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?Z=Je[re]:Z=Je,j.copy(A.viewport),oe.copy(A.scissor),Q=A.scissorTest}else j.copy(Y).multiplyScalar(le).floor(),oe.copy(fe).multiplyScalar(le).floor(),Q=ke;if(re!==0&&(Z=G),S.bindFramebuffer(H.FRAMEBUFFER,Z)&&S.drawBuffers(A,Z),S.viewport(j),S.scissor(oe),S.setScissorTest(Q),$){let Ie=D.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie.__webglTexture,re)}else if(Fe){let Ie=X;for(let We=0;We<A.textures.length;We++){let Je=D.get(A.textures[We]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+We,Je.__webglTexture,re,Ie)}}else if(A!==null&&re!==0){let Ie=D.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ie.__webglTexture,re)}U=-1};function ip(A){let X=D.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=P.textureFormatReadable(A.format),X.__typeReadable=P.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,re,Z,$,Fe,He,Ie=0){if(!(A&&A.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We){S.bindFramebuffer(H.FRAMEBUFFER,We);try{let Je=A.textures[Ie],pt=Je.format,yt=Je.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie);let qe=ip(Je);if(qe.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-Z&&re>=0&&re<=A.height-$&&H.readPixels(X,re,Z,$,Ce.convert(pt),Ce.convert(yt),Fe)}finally{let Je=O!==null?D.get(O).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(A,X,re,Z,$,Fe,He,Ie=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(We=We[He]),We)if(X>=0&&X<=A.width-Z&&re>=0&&re<=A.height-$){S.bindFramebuffer(H.FRAMEBUFFER,We);let Je=A.textures[Ie],pt=Je.format,yt=Je.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ie);let qe=ip(Je);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Dt),H.bufferData(H.PIXEL_PACK_BUFFER,Fe.byteLength,H.STREAM_READ),H.readPixels(X,re,Z,$,Ce.convert(pt),Ce.convert(yt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let un=O!==null?D.get(O).__webglFramebuffer:null;S.bindFramebuffer(H.FRAMEBUFFER,un);let jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await km(H,jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Dt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Fe),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(Dt),H.deleteSync(jt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,re=0){let Z=Math.pow(2,-re),$=Math.floor(A.image.width*Z),Fe=Math.floor(A.image.height*Z),He=X!==null?X.x:0,Ie=X!==null?X.y:0;W.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,He,Ie,$,Fe),S.unbindTexture()},this.copyTextureToTexture=function(A,X,re=null,Z=null,$=0,Fe=0){let He,Ie,We,Je,pt,yt,qe,Dt,un,jt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(re!==null)He=re.max.x-re.min.x,Ie=re.max.y-re.min.y,We=re.isBox3?re.max.z-re.min.z:1,Je=re.min.x,pt=re.min.y,yt=re.isBox3?re.min.z:0;else{let nn=Math.pow(2,-$);He=Math.floor(jt.width*nn),Ie=Math.floor(jt.height*nn),A.isDataArrayTexture?We=jt.depth:A.isData3DTexture?We=Math.floor(jt.depth*nn):We=1,Je=0,pt=0,yt=0}Z!==null?(qe=Z.x,Dt=Z.y,un=Z.z):(qe=0,Dt=0,un=0);let Vt=Ce.convert(X.format),Pn=Ce.convert(X.type),Be;X.isData3DTexture?(W.setTexture3D(X,0),Be=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),Be=H.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),Be=H.TEXTURE_2D),S.activeTexture(H.TEXTURE0),S.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);let Un=S.getParameter(H.UNPACK_ROW_LENGTH),At=S.getParameter(H.UNPACK_IMAGE_HEIGHT),si=S.getParameter(H.UNPACK_SKIP_PIXELS),Ei=S.getParameter(H.UNPACK_SKIP_ROWS),ls=S.getParameter(H.UNPACK_SKIP_IMAGES);S.pixelStorei(H.UNPACK_ROW_LENGTH,jt.width),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,jt.height),S.pixelStorei(H.UNPACK_SKIP_PIXELS,Je),S.pixelStorei(H.UNPACK_SKIP_ROWS,pt),S.pixelStorei(H.UNPACK_SKIP_IMAGES,yt);let Mr=A.isDataArrayTexture||A.isData3DTexture,Ht=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let nn=D.get(A),cs=D.get(X),Xt=D.get(nn.__renderTarget),hs=D.get(cs.__renderTarget);S.bindFramebuffer(H.READ_FRAMEBUFFER,Xt.__webglFramebuffer),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Er=0;Er<We;Er++)Mr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,D.get(A).__webglTexture,$,yt+Er),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,D.get(X).__webglTexture,Fe,un+Er)),H.blitFramebuffer(Je,pt,He,Ie,qe,Dt,He,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||D.has(A)){let nn=D.get(A),cs=D.get(X);S.bindFramebuffer(H.READ_FRAMEBUFFER,k),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,z);for(let Xt=0;Xt<We;Xt++)Mr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,nn.__webglTexture,$,yt+Xt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,nn.__webglTexture,$),Ht?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,cs.__webglTexture,Fe,un+Xt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,cs.__webglTexture,Fe),$!==0?H.blitFramebuffer(Je,pt,He,Ie,qe,Dt,He,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):Ht?H.copyTexSubImage3D(Be,Fe,qe,Dt,un+Xt,Je,pt,He,Ie):H.copyTexSubImage2D(Be,Fe,qe,Dt,Je,pt,He,Ie);S.bindFramebuffer(H.READ_FRAMEBUFFER,null),S.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ht?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Be,Fe,qe,Dt,un,He,Ie,We,Vt,Pn,jt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,Fe,qe,Dt,un,He,Ie,We,Vt,jt.data):H.texSubImage3D(Be,Fe,qe,Dt,un,He,Ie,We,Vt,Pn,jt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Fe,qe,Dt,He,Ie,Vt,Pn,jt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Fe,qe,Dt,jt.width,jt.height,Vt,jt.data):H.texSubImage2D(H.TEXTURE_2D,Fe,qe,Dt,He,Ie,Vt,Pn,jt);S.pixelStorei(H.UNPACK_ROW_LENGTH,Un),S.pixelStorei(H.UNPACK_IMAGE_HEIGHT,At),S.pixelStorei(H.UNPACK_SKIP_PIXELS,si),S.pixelStorei(H.UNPACK_SKIP_ROWS,Ei),S.pixelStorei(H.UNPACK_SKIP_IMAGES,ls),Fe===0&&X.generateMipmaps&&H.generateMipmap(Be),S.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){N=0,L=0,O=null,S.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}});var hE,uE,gh,fE,dE,pE,mE,bh,b0=lt(()=>{Tt();hE=!0,uE=4,gh="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fE=`
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
}`,dE=`
precision highp float;
uniform sampler2D t; uniform vec2 texel; uniform float radius;
varying vec2 vUv;
void main(){
  vec2 o = texel * radius;
  vec3 c = texture2D(t, vUv + vec2(-o.x, -o.y)).rgb + 2.0 * texture2D(t, vUv + vec2(0.0, -o.y)).rgb + texture2D(t, vUv + vec2(o.x, -o.y)).rgb
         + 2.0 * texture2D(t, vUv + vec2(-o.x, 0.0)).rgb + 4.0 * texture2D(t, vUv).rgb + 2.0 * texture2D(t, vUv + vec2(o.x, 0.0)).rgb
         + texture2D(t, vUv + vec2(-o.x, o.y)).rgb + 2.0 * texture2D(t, vUv + vec2(0.0, o.y)).rgb + texture2D(t, vUv + vec2(o.x, o.y)).rgb;
  gl_FragColor = vec4(c / 16.0, 1.0);
}`,pE=`
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
}`,mE=`
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
}`,bh=class{constructor(e){this.renderer=e,this.szeneRT=null,this.fxaaRT=null,this.mips=[],this.stufen=5,this.samples=0,this.w=2,this.h=2,this.quadSzene=new Ji,this.quadKamera=new Li(-1,1,1,-1,0,1),this.quad=new J(new ot(2,2),null),this.quad.frustumCulled=!1,this.quadSzene.add(this.quad),this.runter=new Et({uniforms:{t:{value:null},texel:{value:new me},schwelle:{value:.9},knie:{value:.5},vorfilter:{value:0},deckel:{value:6}},vertexShader:gh,fragmentShader:fE,depthTest:!1,depthWrite:!1}),this.rauf=new Et({uniforms:{t:{value:null},texel:{value:new me},radius:{value:1}},vertexShader:gh,fragmentShader:dE,depthTest:!1,depthWrite:!1,blending:yc,blendSrc:Ro,blendDst:Ro,blendEquation:rs,transparent:!0}),this.fxaa=new Et({uniforms:{t:{value:null},texel:{value:new me}},vertexShader:gh,fragmentShader:mE,depthTest:!1,depthWrite:!1}),this.abschluss=null,this.taps=6,this.uniforms={tSzene:{value:null},tBloom:{value:null},bloom:{value:.22},tempo:{value:0},aberration:{value:0},glitch:{value:0},zeit:{value:0},belichtung:{value:1.25},korn:{value:.018},blende:{value:1},vignette:{value:1}},this.setzeTaps(6)}setzeTaps(e){this.abschluss&&this.taps===e||(this.taps=e,this.abschluss&&this.abschluss.dispose(),this.abschluss=new Et({uniforms:this.uniforms,defines:{TAPS:e},vertexShader:gh,fragmentShader:pE,depthTest:!1,depthWrite:!1}))}groesse(e,t,n,i){if(e=Math.max(2,Math.floor(e)),t=Math.max(2,Math.floor(t)),this.szeneRT&&this.w===e&&this.h===t&&this.samples===n&&this.stufen===i)return;this.w=e,this.h=t,this.samples=n,this.stufen=i,this.entsorgen(),this.szeneRT=new en(e,t,{type:this.schlank?_n:gn,samples:n,depthBuffer:!0,stencilBuffer:!1,minFilter:ft,magFilter:ft,colorSpace:Bt}),hE&&n<uE&&(this.fxaaRT=new en(e,t,{type:_n,depthBuffer:!1,stencilBuffer:!1,minFilter:ft,magFilter:ft,colorSpace:Bt}),this.fxaa.uniforms.texel.value.set(1/e,1/t)),this.mips=[];let r=e,a=t;for(let o=0;o<i;o++)r=Math.max(1,Math.floor(r/2)),a=Math.max(1,Math.floor(a/2)),this.mips.push(new en(r,a,{type:gn,depthBuffer:!1,stencilBuffer:!1,minFilter:ft,magFilter:ft,colorSpace:Bt}))}entsorgen(){this.szeneRT&&this.szeneRT.dispose(),this.fxaaRT&&this.fxaaRT.dispose();for(let e of this.mips)e.dispose();this.szeneRT=null,this.fxaaRT=null,this.mips=[]}durchgang(e,t,n=!0){let i=this.renderer;this.quad.material=e,i.setRenderTarget(t),n&&i.clear(),i.render(this.quadSzene,this.quadKamera)}setzeSchlank(e){e=!!e,e!==this.schlank&&(this.schlank=e,this.entsorgen())}abschliessen(){let e=this.renderer,t=e.autoClear;if(e.autoClear=!1,this.schlank){this.uniforms.tSzene.value=this.szeneRT.texture,this.uniforms.tBloom.value=this.szeneRT.texture;let r=this.uniforms.bloom.value;this.uniforms.bloom.value=0,this.durchgang(this.abschluss,null),this.uniforms.bloom.value=r,e.autoClear=t;return}let n=this.mips,i=this.szeneRT;for(let r=0;r<n.length;r++)this.runter.uniforms.t.value=i.texture,this.runter.uniforms.texel.value.set(1/i.width,1/i.height),this.runter.uniforms.vorfilter.value=r===0?1:0,this.durchgang(this.runter,n[r]),i=n[r];for(let r=n.length-2;r>=0;r--)this.rauf.uniforms.t.value=n[r+1].texture,this.rauf.uniforms.texel.value.set(1/n[r+1].width,1/n[r+1].height),this.durchgang(this.rauf,n[r],!1);this.uniforms.tSzene.value=this.szeneRT.texture,this.uniforms.tBloom.value=n[0].texture,this.fxaaRT?(this.durchgang(this.abschluss,this.fxaaRT),this.fxaa.uniforms.t.value=this.fxaaRT.texture,this.durchgang(this.fxaa,null)):this.durchgang(this.abschluss,null),e.autoClear=t}}});function xh(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function ei(s=128){let[e,t]=xh(s,s),n=t.createImageData(s,s),i=s/2;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=Math.hypot(o+.5-i,a+.5-i)/i,c=Math.exp(-(l*2.3)*(l*2.3))*(1-Math.min(1,l)),h=(a*s+o)*4;n.data[h]=n.data[h+1]=n.data[h+2]=255,n.data[h+3]=255*c}t.putImageData(n,0,0);let r=new Mt(e);return r.colorSpace=Bt,r}function x0(s=256,e=32){let[t,n]=xh(s,e),i=n.createImageData(s,e);for(let a=0;a<e;a++)for(let o=0;o<s;o++){let l=Math.abs((o+.5)/s-.5)*2,c=Math.abs((a+.5)/e-.5)*2,h=Math.pow(Math.max(0,1-l),2.2)*Math.pow(Math.max(0,1-c),1.2),u=(a*s+o)*4;i.data[u]=i.data[u+1]=i.data[u+2]=255,i.data[u+3]=255*h}n.putImageData(i,0,0);let r=new Mt(t);return r.colorSpace=Bt,r}function v0(s,e,t=0,n=1){let[i,r]=xh(s,s),a=r.createImageData(s,s);for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=c/s,u=l/s,f=.5+.25*Math.sin(h*31.4+1.3)*Math.sin(u*20.1+.4)+.15*Math.sin(h*97+u*61)+.1*(e()-.5);f=Math.min(1,Math.max(0,f));let d=(t+(n-t)*f)*255,m=(l*s+c)*4;a.data[m]=a.data[m+1]=a.data[m+2]=d,a.data[m+3]=255}r.putImageData(a,0,0);let o=new Mt(i);return o.wrapS=o.wrapT=Sn,o.colorSpace=Bt,o}function vh(s=128,e=.72,t=.9){let[n,i]=xh(s,s),r=i.createImageData(s,s),a=s/2;for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=Math.hypot(c+.5-a,l+.5-a)/a,u=h<e?0:h<(e+t)/2?(h-e)/((t-e)/2):h<t?(t-h)/((t-e)/2):0,f=(l*s+c)*4;r.data[f]=r.data[f+1]=r.data[f+2]=255,r.data[f+3]=255*Math.pow(u,.8)}i.putImageData(r,0,0);let o=new Mt(n);return o.colorSpace=Bt,o}function Oe(s,e,t){return new _e().setRGB(s,e,t,wt)}var Hn=lt(()=>{Tt()});var It,_0,y0,_h,qn=lt(()=>{Tt();Hn();It=1,_0=`
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
}`,y0=`
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
  col += sp * a;
  #endif
  gl_FragColor = vec4(col, 1.0);
  #include <fog_fragment>
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,_h=class{constructor(e,t){this.z0=t.z0,this.z1=t.z1,this.spiegelAn=t.spiegel;let n=v0(256,t.rnd,0,1);this.uniforms={tSpiegel:{value:null},tNass:{value:n},textureMatrix:{value:new Pe},spiegelStaerke:{value:1},breite:{value:8.2},laenge:{value:t.z1-t.z0},zeit:{value:0},laternen:{value:Array.from({length:6},()=>new w(0,-100,0))},laternenFarbe:{value:new _e(1,.66,.34)},scheinwerfer:{value:[new w(0,-100,0),new w(0,-100,0)]},scheinwerferRichtung:{value:new w(0,-.08,1)},scheinwerferStaerke:{value:1},extraLicht:{value:new w(0,-100,0)},extraFarbe:{value:new _e(.2,.8,1)},extraStaerke:{value:0},tFarbe:{value:null},tNormal:{value:null},tRauheit:{value:null},tMarkierung:{value:null},randAus:{value:new me(1e9,1e9)},randAus2:{value:new me(1e9,1e9)},...ha.clone(we.fog)},this.material=new Et({uniforms:this.uniforms,vertexShader:_0,fragmentShader:y0,fog:!0,defines:{SPIEGEL:t.spiegel?1:0,TEXTUREN:0,MARKIERUNG:0}}),this.zusatz=[];let i=new ot(8.2,t.z1-t.z0,1,64);i.rotateX(-Math.PI/2),this.mesh=new J(i,this.material),this.mesh.position.set(0,0,(t.z0+t.z1)/2),this.mesh.frustumCulled=!1,e.add(this.mesh),this.bankettMaterial=new Le({color:658188,roughness:1,metalness:0});let r=new J(new ot(14,t.z1-t.z0,1,64),this.bankettMaterial);r.rotation.x=-Math.PI/2,r.position.set(0,-.015,(t.z0+t.z1)/2),e.add(r),this.bodenMaterial=new Le({color:395018,roughness:1,metalness:0});let a=new J(new ot(900,t.z1-t.z0+600,1,1),this.bodenMaterial);a.rotation.x=-Math.PI/2,a.position.set(0,-.3,(t.z0+t.z1)/2),e.add(a),this.bankettLaenge=t.z1-t.z0,this.bankett=r,this.boden=a,this.rt=null,this.virtuell=new Yt,this.virtuell.layers.set(It),this._ebene=new Zn,this._normal=new w(0,1,0),this._blick=new w,this._ziel=new w,this._rot=new Pe,this._clip=new Ct,this._q=new Ct}setzeSpiegel(e){if(this.spiegelAn!==e){this.spiegelAn=e;for(let t of[this.material,...this.zusatz])t.defines.SPIEGEL=e?1:0,t.needsUpdate=!0}}setzeTexturen(e,t,n){if(!(!e||!t||!n)){this.uniforms.tFarbe.value=e,this.uniforms.tNormal.value=t,this.uniforms.tRauheit.value=n;for(let i of[this.material,...this.zusatz])i.defines.TEXTUREN=1,i.needsUpdate=!0}}zusatzMaterial(e){let t=new Et({uniforms:{...this.uniforms,tMarkierung:{value:e}},vertexShader:_0,fragmentShader:y0,fog:!0,defines:{SPIEGEL:this.spiegelAn?1:0,TEXTUREN:this.material.defines.TEXTUREN,MARKIERUNG:1}});return this.zusatz.push(t),t}groesse(e,t){this.rt&&this.rt.dispose(),this.rt=new en(Math.max(2,Math.floor(e/3)),Math.max(2,Math.floor(t/3)),{type:gn,depthBuffer:!0,stencilBuffer:!1,minFilter:ft,magFilter:ft,colorSpace:Bt}),this.uniforms.tSpiegel.value=this.rt.texture}spiegeln(e,t,n,i){if(!this.spiegelAn||!this.rt||(this.spiegelBild=(this.spiegelBild|0)+1,this.spiegelBild%2))return;let r=this.virtuell,a=this._normal,o=n.position;this._blick.copy(o),this._blick.y=-this._blick.y,this._rot.extractRotation(n.matrixWorld),this._ziel.set(0,0,-1).applyMatrix4(this._rot).add(o),this._ziel.y=-this._ziel.y,r.position.copy(this._blick),r.up.set(0,1,0).applyMatrix4(this._rot),r.up.y=-r.up.y,r.lookAt(this._ziel),r.near=n.near,r.far=n.far,r.fov=n.fov,r.aspect=n.aspect,r.zoom=1,r.updateProjectionMatrix(),r.zoom=.25,r.updateMatrixWorld(),this.uniforms.textureMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),this._ebene.setFromNormalAndCoplanarPoint(a,this.mesh.position).applyMatrix4(r.matrixWorldInverse);let l=this._clip.set(this._ebene.normal.x,this._ebene.normal.y,this._ebene.normal.z,this._ebene.constant),c=r.projectionMatrix,h=this._q;h.x=(Math.sign(l.x)+c.elements[8])/c.elements[0],h.y=(Math.sign(l.y)+c.elements[9])/c.elements[5],h.z=-1,h.w=(1+c.elements[10])/c.elements[14],l.multiplyScalar(2/l.dot(h)),c.elements[2]=l.x,c.elements[6]=l.y,c.elements[10]=l.z+1-.003,c.elements[14]=l.w;let u=e.getRenderTarget();this.mesh.visible=!1,e.setRenderTarget(this.rt),e.setClearColor(i,1),e.clear(),e.render(t,r),this.mesh.visible=!0,e.setRenderTarget(u)}}});function E0(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=M0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let b=0;b<a[h].length;++b)d.push(a[h][b][f]);let m=M0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function M0(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new at(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let b=h.getComponent(f,m);o.setComponent(f+u,m,b)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Vf(s,e){if(e===ff)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ca||e===No){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===ca)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Wf=lt(()=>{Tt()});async function cr(s,e,t=0,n=2){let i=await Promise.all([0,1,2].map(o=>o>=t&&o<=n?s.glb(`welt/modelle/${e}_lod${o}.glb`):Promise.resolve(null))),r=i.find(o=>o),a=r?{...r.scene.userData||{}}:{};return{name:e,stufen:i,extras:a,da:!!r}}function hr(s){let e=[];return s.traverse(t=>{t.name&&t.name.startsWith("anker_licht")&&e.push(t)}),e}function ma(s,e=16769720){let t=s.userData&&s.userData.farbe;return new _e(typeof t=="string"&&/^#[0-9a-f]{6}$/i.test(t)?t:e)}function qf(s,{schattenWerfen:e=!1,schattenEmpfangen:t=!1}={}){return s.traverse(n=>{n.isMesh&&(n.frustumCulled=!1,n.layers.enable(It),n.castShadow=e,n.receiveShadow=t)}),s}function yh(s,e=1,t={}){let n=new to,i=!0;return s.stufen.forEach((r,a)=>{if(!r)return;let o=qf(r.scene.clone(!0),t);n.addLevel(o,i?0:lr[a]*e),i=!1}),n.autoUpdate=!0,n}function gE(s,e){let t=new ht;for(let n of e){let i=s.attributes[n],r=new Float32Array(i.count*i.itemSize);for(let a=0;a<i.count;a++)for(let o=0;o<i.itemSize;o++)r[a*i.itemSize+o]=i.getComponent(a,o);t.setAttribute(n,new at(r,i.itemSize))}return t.setIndex(s.index.clone()),t}function ur(s,{behalten:e=/^$/}={}){s.updateMatrixWorld(!0);let t=new Map;s.traverse(a=>{if(!a.isMesh||a.isSkinnedMesh||a.isInstancedMesh||a.children.length||Array.isArray(a.material)||a.morphTargetInfluences||!a.geometry.index)return;for(let l=a;l&&l!==s;l=l.parent)if(e.test(l.name||""))return;let o=t.get(a.material)||[];o.push(a),t.set(a.material,o)});let n=new Pe().copy(s.matrixWorld).invert(),i=new Pe,r=0;for(let[a,o]of t){if(o.length<2)continue;let l=["position","normal","uv","uv1"].filter(f=>o.every(d=>d.geometry.attributes[f]));if(!l.includes("position"))continue;let c=o.map(f=>gE(f.geometry,l).applyMatrix4(i.multiplyMatrices(n,f.matrixWorld))),h=null;try{h=E0(c,!1)}catch{h=null}if(!h)continue;for(let f of o)f.parent.remove(f);let u=new J(h,a);u.name="verschmolzen:"+(a.name||""),u.frustumCulled=!1,u.castShadow=o[0].castShadow,u.receiveShadow=o[0].receiveShadow,u.layers.mask=o[0].layers.mask,u.renderOrder=o[0].renderOrder,s.add(u),r+=o.length}return r}var lr,fr=lt(()=>{Tt();Wf();qn();lr=[0,30,95]});function oi(s){let e=s.length,t=s.map(a=>a[0]),n=s.map(a=>a[1]),i=new Array(e);if(e===1)return()=>n[0];let r=new Array(e-1);for(let a=0;a<e-1;a++)r[a]=(n[a+1]-n[a])/(t[a+1]-t[a]);i[0]=r[0],i[e-1]=r[e-2];for(let a=1;a<e-1;a++)i[a]=r[a-1]*r[a]<=0?0:.5*(r[a-1]+r[a]);for(let a=0;a<e-1;a++){if(r[a]===0){i[a]=0,i[a+1]=0;continue}let o=i[a]/r[a],l=i[a+1]/r[a],c=o*o+l*l;if(c>9){let h=3/Math.sqrt(c);i[a]=h*o*r[a],i[a+1]=h*l*r[a]}}return a=>{if(a<=t[0])return n[0];if(a>=t[e-1])return n[e-1];let o=0;for(;a>t[o+1];)o++;let l=t[o+1]-t[o],c=(a-t[o])/l,h=c*c,u=h*c,f=2*u-3*h+1,d=u-2*h+c,m=-2*u+3*h,b=u-h;return f*n[o]+d*l*i[o]+m*n[o+1]+b*l*i[o+1]}}function Oo(s){let e=oi(s.map(i=>[i[0],i[1][0]])),t=oi(s.map(i=>[i[0],i[1][1]])),n=oi(s.map(i=>[i[0],i[1][2]]));return(i,r)=>r.set(e(i),t(i),n(i))}function ga(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Qe,Gt,Lt,dt,ti,Qt=lt(()=>{Qe=(s,e=0,t=1)=>s<e?e:s>t?t:s,Gt=(s,e,t)=>s+(e-s)*t,Lt=(s,e,t)=>{let n=Qe((t-s)/(e-s));return n*n*(3-2*n)},dt=(s,e,t,n,i)=>Lt(e,t,s)*(1-Lt(n,i,s));ti=(s,e)=>1-Math.exp(-s/e)});var sR,S0,bE,Mh,T0=lt(()=>{Tt();fr();Qt();sR=new w,S0=new w,bE=.03,Mh=class s{constructor(e,t={}){this.szene=e,this.renderer=t.renderer||null,this.eintraege=[],this.lichter=[],this.anzahl=0,this.schatten=!1,this.schattenWeite=40,this.tau=.22,this._kand=[],this._gewaehlt=new Set,t.stufe&&this.setzeStufe(t.stufe)}anmelden(e,{prioritaet:t=1}={}){if(!e)return null;let n=e.userData||{},i=Math.min(170,Math.max(6,+n.winkel||90)),r={anker:e,prioritaet:Math.max(.05,t),pos:new w,dir:new w(0,-1,0),farbe:ma(e),typ:n.typ==="punkt"?"punkt":"spot",winkel:zt.degToRad(i)/2,reichweite:Math.max(2,+n.reichweite||20),candela:Math.max(5,(+n.staerke||600)*bE),d:1e9,slot:-1,an:!0};return this.eintraege.push(r),r}abmelden(e){let t=this.eintraege.findIndex(i=>i===e||i.anker===e);if(t<0)return;let n=this.eintraege[t];if(n.slot>=0){let i=this.lichter[n.slot];i.soll=0,i.frei=!0,n.slot=-1}this.eintraege.splice(t,1)}setzeStufe(e){let t=Math.max(0,e.lichter|0);for(this.schatten=!!e.schatten&&!!this.renderer;this.lichter.length<t;){let n=new is(16777215,0,10,Math.PI/4,.45,2);n.layers.enable(1),n.name="lichtpool_"+this.lichter.length,n.castShadow=!1,n.shadow.mapSize.set(512,512),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.shadow.camera.near=.5,n.shadow.camera.far=40,n.position.set(0,-100,0);let i=new St;i.position.set(0,-110,0),n.target=i,this.szene.add(n,i),this.lichter.push({licht:n,ziel:i,eintrag:null,ist:0,soll:0,frei:!0})}for(;this.lichter.length>t;){let n=this.lichter.pop();n.eintrag&&(n.eintrag.slot=-1),this.szene.remove(n.licht,n.ziel),n.licht.dispose()}this.anzahl=t;for(let n=0;n<this.lichter.length;n++)this.lichter[n].licht.castShadow=this.schatten&&n===0;if(this.renderer){let n=this.renderer.shadowMap;n.enabled!==this.schatten&&(n.enabled=this.schatten,n.type=nr,n.autoUpdate=!1,n.needsUpdate=!0)}}static sichtbar(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}update(e,t=1/60){if(!this.anzahl)return;let n=e.position,i=this._kand;i.length=0;for(let o of this.eintraege)o.an=s.sichtbar(o.anker),o.an&&(o.anker.getWorldPosition(o.pos),o.d=o.pos.distanceTo(n)/o.prioritaet,o.d<220&&i.push(o));i.sort((o,l)=>o.d-l.d);let r=this._gewaehlt;r.clear();for(let o=0;o<i.length&&o<this.anzahl;o++)r.add(i[o]);let a=ti(t,this.tau);for(let o=0;o<this.lichter.length;o++){let l=this.lichter[o];l.eintrag&&(!r.has(l.eintrag)||o===0&&this.schatten&&l.eintrag!==i[0])&&(l.soll=0),l.eintrag&&l.soll===0&&l.ist<.03&&(l.eintrag.slot=-1,l.eintrag=null,l.frei=!0,l.ist=0)}for(let o=0;o<i.length&&o<this.anzahl;o++){let l=i[o];if(l.slot>=0)continue;let c=-1;for(let f=0;f<this.lichter.length;f++)if(this.lichter[f].frei&&!(f===0&&this.schatten&&o!==0)){c=f;break}if(c<0)continue;let h=this.lichter[c];h.frei=!1,h.eintrag=l,l.slot=c,h.soll=1,h.ist=0;let u=h.licht;u.color.copy(l.farbe),u.angle=Math.min(Math.PI/2-.02,l.winkel),u.distance=l.reichweite,u.penumbra=.45,u.decay=2,u.shadow.camera.far=Math.max(10,l.reichweite),u.shadow.camera.updateProjectionMatrix()}for(let o of this.lichter){let l=o.eintrag;if(o.ist+=(o.soll-o.ist)*a,!l){o.licht.intensity=0;continue}l.anker.getWorldDirection(S0),o.licht.position.copy(l.pos),o.ziel.position.copy(l.pos).addScaledVector(S0,Math.max(1,l.reichweite*.5)),o.licht.intensity=l.candela*o.ist}if(this.schatten&&this.renderer){let o=this.lichter[0],l=o?o.eintrag:null;(!this._schattenPos||this._schattenPos.distanceToSquared(e.position)>.09||l!==this._schattenAnker||o&&Math.abs(o.ist-o.soll)>.05)&&(this.renderer.shadowMap.needsUpdate=!0,this._schattenPos=(this._schattenPos||new w).copy(e.position),this._schattenAnker=l)}}}});function R0(s,e){let t=new St;return t.name=s.name,t.userData={...s.userData||{}},t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,s.updateWorldMatrix(!0,!1),t.matrix.multiplyMatrices(e,s.matrixWorld),t.matrixWorld.copy(t.matrix),t}var w0,Ni,xE,vE,_E,dr,Xf=lt(()=>{Tt();qn();fr();w0=new Pe,Ni=new w,xE=2.2,vE=Math.cos(zt.degToRad(2)),_E=zt.degToRad(15),dr=class{constructor(e,t,n,i={}){for(this.eltern=e,this.plaetze=n,this.n=n.length,this.aktiv=this.n,this.weiten=i.weiten||lr,this.lodWeite=i.lodWeite??1,this.maxWeite=i.maxWeite??900,this.takt=i.takt||6,this.letzte=new w(1e9,0,0),this.letzteRichtung=new w,this.kegel=i.blickKegel||null,this.sanft=!1,this.bild=i.versatz||0,this.sichtbar=!0,this.erzwingen=!0,this.positionen=n.map(r=>new w().setFromMatrixPosition(r)),this.zuordnung=new Int8Array(this.n).fill(-2),this.an=new Uint8Array(this.n),this.stufen=[],this.geladen=-1,this.groebste=-1,t.stufen.forEach((r,a)=>{if(!r){this.stufen.push(null);return}r.scene.updateMatrixWorld(!0);let o=[];r.scene.traverse(l=>{if(!l.isMesh)return;let c=l.material;i.material&&(c=i.material(c,l,a)||c);let h=new Kt(l.geometry,c,this.n);h.name=(i.name||t.name||"instanzen")+":"+l.name+":"+a,h.count=0,h.frustumCulled=!1;let u=i.schatten?!!i.schatten(l,a):!1;h.castShadow=u&&!!i.schattenAn,h.receiveShadow=!1,(typeof i.spiegel=="function"?i.spiegel(l):i.spiegel!==!1)&&h.layers.enable(It),h.instanceMatrix.setUsage(pf),e.add(h),o.push({im:h,lokal:l.matrixWorld.clone(),schatten:u})}),this.stufen.push({teile:o}),this.geladen<0&&(this.geladen=a),this.groebste=a}),this.feinste=Math.max(this.geladen,i.feinste??0),this.feinste>this.groebste&&(this.feinste=this.groebste);this.feinste<this.groebste&&!this.stufen[this.feinste];)this.feinste++}stufeFuer(e,t){let n=this.feinste;for(let i=this.feinste+1;i<=this.groebste;i++){if(!this.stufen[i])continue;let r=this.weiten[i]*this.lodWeite*(t>=0&&t<i?1.05:.95);e>=r&&(n=i)}return n}setzeStufe(e){this.lodWeite=e.lodWeite??1;let t=Math.max(this.geladen,e.lod??0);for(t>this.groebste&&(t=this.groebste);t<this.groebste&&!this.stufen[t];)t++;this.feinste=t;for(let n of this.stufen)if(n)for(let i of n.teile)i.im.castShadow=i.schatten&&!!e.schatten;this.erzwingen=!0}setzeAnzahl(e){let t=Math.max(0,Math.min(this.n,e|0));t!==this.aktiv&&this.zuordnung.some(n=>n>=0)&&(this.sanft=!0),this.aktiv=t,this.erzwingen=!0}setzeSichtbar(e){this.sichtbar=e;for(let t of this.stufen)if(t)for(let n of t.teile)n.im.visible=e}update(e,t=0){if(!this.sichtbar)return;this.bild++;let n=e.position;e.getWorldDirection?e.getWorldDirection(Ni):Ni.set(0,0,1);let i=n.distanceToSquared(this.letzte)>4||this.kegel&&Ni.dot(this.letzteRichtung)<vE;if(!this.erzwingen&&!i&&this.bild%this.takt!==0)return;this.erzwingen=!1,this.letzte.copy(n),this.letzteRichtung.copy(Ni);let r=t>0?Math.min(this.maxWeite,xE/t):this.maxWeite,a=this.kegel,o=a?Math.atan(Math.tan(zt.degToRad(e.fov||60)/2)*Math.sqrt(1+(e.aspect||1)**2))+_E:0,l=this.zuordnung,c=this.an,h=0,u=!1;for(let f=0;f<this.n;f++){let d=this.positionen[f],m=d.x-n.x,b=d.y-n.y,p=d.z-n.z,g=Math.sqrt(m*m+b*b+p*p),y=f<this.aktiv?1:0;if(c[f]!==y){let x=g<r&&m*Ni.x+b*Ni.y+p*Ni.z>-.3*g;!this.sanft||!x||y===0&&l[f]<0?c[f]=y:u=!0}let M=c[f]&&g<r?this.stufeFuer(g,l[f]):-1;if(M>=0&&a){let x=b+a.mitte,E=Math.sqrt(m*m+x*x+p*p);if(E>a.radius*2.5){let v=(m*Ni.x+x*Ni.y+p*Ni.z)/E;Math.acos(v<-1?-1:v>1?1:v)>o+Math.atan(a.radius/E)&&(M=-1)}}l[f]!==M&&(l[f]>=0&&(h|=1<<l[f]),M>=0&&(h|=1<<M),l[f]=M)}if(this.sanft=u,!!h)for(let f=0;f<this.stufen.length;f++){let d=this.stufen[f];if(!d||!(h&1<<f))continue;let m=0;for(let b=0;b<this.n;b++)if(l[b]===f){for(let p of d.teile)w0.multiplyMatrices(this.plaetze[b],p.lokal),p.im.setMatrixAt(m,w0);m++}for(let b of d.teile){let p=b.im.instanceMatrix;b.im.count=m,p.clearUpdateRanges(),p.addUpdateRange(0,m*16),p.needsUpdate=!0}}}entsorgen(){for(let e of this.stufen)if(e)for(let t of e.teile)this.eltern.remove(t.im),t.im.dispose();this.stufen=[]}}});function Sh(s,e){return e.copy(s.position),s.parent&&s.parent.localToWorld(e),e}function P0(s){return yE.copy(s.matrixWorld).invert()}function mr(s,e,t=.9,n=.72,i=null){if(!s.visible)return;let a=e.aspect<.9?Math.min(t,.84):t,o=P0(e);if(Sh(s,rn).applyMatrix4(o),rn.z>=-.1)return;Yf.copy(s.scale);let l=Math.tan(zt.DEG2RAD*e.fov*.5),c=l*e.aspect,h=Math.max(0,-rn.z*c*a-Yf.x*.5),u=-rn.z*l*n-Yf.y*.5,f=0,d=0;if(rn.x<-h?f=-h-rn.x:rn.x>h&&(f=h-rn.x),rn.y>u&&(d=u-rn.y),!(f===0&&d===0)&&(A0(s,e,o,f,d),i))for(let m of i)m!==s&&A0(m,e,o,f,d)}function Jf(s,e,t=.045,n=.09){s.userData.grundSkala||(s.userData.grundSkala=s.scale.clone());let i=s.userData.grundSkala;if(!s.visible){s.scale.copy(i);return}if(Sh(s,rn).applyMatrix4(P0(e)),rn.z>=-.1){s.scale.copy(i);return}let r=Math.tan(zt.DEG2RAD*e.fov*.5),a=2*-rn.z*r,o=t*a/i.y,l=n*a/i.y,c=a*e.aspect,h=.78*c/i.x,u=Math.min(Math.max(1,o),l,h);s.scale.set(i.x*u,i.y*u,1)}function Ui(s,e,t=3.5,n=.08){if(!s.visible)return;Sh(s,rn);let i=rn.distanceTo(e.position),r=Math.min(1,Math.max(0,(i-t)/t));if(s.material.opacity*=r*r*(3-2*r),s.material.opacity<.01){s.visible=!1;return}Jf(s,e,0,n),mr(s,e)}function A0(s,e,t,n,i){Sh(s,rn).applyMatrix4(t),rn.x+=n,rn.y+=i,rn.applyMatrix4(e.matrixWorld),s.parent&&s.parent.worldToLocal(rn),s.position.copy(rn)}function xa(s,e){let t=null;if(s.scene.traverse(i=>{!t&&i.name===e&&(t=i)}),!t)return null;let n=t.clone(!0);return n.traverse(i=>{i.isMesh&&(i.frustumCulled=!1,i.layers.enable(It))}),n}var Ps,vt,pr,ba,C0,Kf,jf,an,Eh,bn,on,ln,rn,Yf,yE,Xn=lt(()=>{Tt();Hn();qn();Ps=150,vt=s=>(s+.5)*Ps,pr=9,ba=new _e().setRGB(.17,.72,.89,wt),C0=new w(0,1,0),Kf=null,jf=null,an=(s,e)=>{Kf=Kf||ei(128);let t=new An(new Tn({map:Kf,color:s,blending:Nt,depthWrite:!1,transparent:!0,fog:!1}));return t.scale.set(e,e,1),t.layers.enable(It),t},Eh=s=>{jf=jf||vh(128,.8,.92);let e=new J(new ot(1,1),new st({map:jf,color:s,blending:Nt,depthWrite:!1,transparent:!0,fog:!1,side:Rt}));return e.layers.enable(It),e},bn=s=>new st({color:s}),on=new Le({color:2764340,roughness:.7,metalness:.3}),ln=(s,e)=>{s.material.opacity=e,s.visible=e>.01},rn=new w,Yf=new w,yE=new Pe});function k0(){return[[-13.5,tn+95],[-18,tn+125],[-24,tn+160],[-34,tn+195],[-50,tn+225],[-70,tn+248],[-92,tn+262],[-112,tn+270]]}function ME(s){let e=L0.get(s);if(e)return e;e=[1/0,-1/0,1/0,-1/0];for(let[t,n]of s.punkte)e[0]=Math.min(e[0],t),e[1]=Math.max(e[1],t),e[2]=Math.min(e[2],n),e[3]=Math.max(e[3],n);return L0.set(s,e),e}function F0(s,e,t,n){let i=ME(s),r=s.breite*.5+n;if(e<i[0]-r||e>i[1]+r||t<i[2]-r||t>i[3]+r)return 1/0;let a=s.punkte,o=1/0;for(let l=0;l+1<a.length;l++){let c=a[l][0],h=a[l][1],u=a[l+1][0],f=a[l+1][1],d=u-c,m=f-h,b=d*d+m*m||1e-6,p=Math.max(0,Math.min(1,((e-c)*d+(t-h)*m)/b)),g=Math.hypot(e-(c+d*p),t-(h+m*p))-s.breite*.5;g<o&&(o=g)}return o}function va(s,e){let t=1/0;for(let n of Th){let i=F0(n,s,e,60);i<t&&(t=i)}return t}function N0(s,e){let t=0;for(let n of Th){if(n.flach===!1)continue;let i=n.rand??8,r=F0(n,s,e,i);if(r>=i)continue;let a=Math.max(0,r)/i;t=Math.max(t,1-a*a*(3-2*a))}return t}function _a(s,e,t=0){for(let[n,i,r,a]of Zf)if(e>=n-t&&e<=i+t&&s>=r-t&&s<=a+t)return!0;return!1}var tn,Bi,Kn,I0,Zf,Th,D0,L0,Go=lt(()=>{Xn();tn=vt(4),Bi=vt(5),Kn=vt(6),I0=vt(8),Zf=[[tn-75,tn+100,-20,0],[Kn-62,Kn+76,-50,0],[Bi+14,Bi+48,-20,0],[Bi+58,Bi+80,-15,0],[I0-48,I0-24,-20,0]],Th=[{punkte:[[-4.6,tn-68],[-5.6,tn-45],[-5.6,tn+30]],breite:4.4},{punkte:[[-9.6,tn-64],[6.6,tn-64]],breite:3},{punkte:[[-11.5,tn-12],[-11.5,tn-4]],breite:6},{punkte:[[-5.85,tn-5],[-6.33,tn+24.9],[-7.76,tn+51.5],[-10.15,tn+74.8],[-13.5,tn+95]],breite:8},{punkte:k0(),breite:9,flach:!1,profil:!0},{punkte:[[-3,Bi+19],[-4.1,Bi+21],[-8.5,Bi+27],[-12,Bi+35]],breite:13},{punkte:[[-12,Bi+35],[-16,Bi+44]],breite:10,flach:!1},{punkte:[[-5.4,Kn-128],[-5.4,Kn-58]],breite:4.4},{punkte:[[-5.4,Kn-58],[-6.9,Kn-50],[-9.4,Kn-40],[-10.2,Kn-30.5]],breite:8},{punkte:[[-10.2,Kn+44.5],[-9.4,Kn+54],[-6.9,Kn+63],[-5.4,Kn+70]],breite:8},{punkte:[[-5.4,Kn+70],[-5.4,Kn+150]],breite:4.4}];D0=k0(),L0=new WeakMap});function wh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function EE(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=wh(t,n),c=wh(t+1,n),h=wh(t,n+1),u=wh(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function Nn(s,e,t=4,n=2.07,i=.5){let r=0,a=.5,o=1,l=0;for(let c=0;c<t;c++)r+=a*EE(s*o+c*17.3,e*o-c*9.1),l+=a,a*=i,o*=n;return r/l}function SE(s,e){let t=N0(s,e);for(let[n,i,r,a]of Zf){let o=Math.min(e-n,i-e),l=Math.min(s-r,a-s),c=Math.min(o,l);c>-6&&(t=Math.max(t,ya(-6,0,c)))}return t}function O0(s,e){return ya(U0,U0+TE,Math.abs(s))*(1-SE(s,e))}function wE(s,e){let t=O0(s,e);if(t<=0)return B0;let n=Nn(s*.018+11,e*.018+5,4),i=Nn(s*.07,e*.07+2,2),r=.3+6.6*n*n+1.2*i;return B0+t*r}function G0(s,e){let t=0;for(let[n,i,r,a,o]of RE){let l=s-n,c=e-i;if(Math.abs(l)>r*1.3||Math.abs(c)>r*1.3)continue;let h=Math.hypot(l,c),u=Math.atan2(c,l),f=Math.cos(u),d=Math.sin(u),m=.72+.56*Nn(f*2.2+o*3.7,d*2.2+o*1.3,3),b=h/(r*m);if(b>=1)continue;let p=1-b,g=(Nn(u*1.9+o,p*3+o*2,3)-.5)*.5,y=(Nn(u*7+o*1.7,p*11+o,3)-.5)*.14,M=a*Math.pow(p,1.15)*(1+g*(1-p*.6)+y*(.5+.5*p))+(Nn(f*3.1+o*5+20,d*3.1+o*2,4)-.5)*8*p*(1-p);M>t&&(t=M)}return t}function AE(s,e){let t=Math.abs(s);if(t<z0)return 0;let n=(t-z0)/190,i=n<1?Math.pow(n,1.5):Math.max(.15,1-(n-1)*.3),r=75+95*Nn(e*.0045+3.1,t*.0025+(s<0?40:0),3),a=(Nn(t*.011+7,e*.011,4)-.5)*2*32,o=(Nn(t*.05,e*.05+9,3)-.5)*2*7;return Math.max(0,i*(r+a)+o*Math.min(1,n*2))}function PE(s,e){if(e<Rh)return 0;let t=Math.abs(s),n=(e-Rh)/230,i=n<1?Math.pow(n,1.6):Math.max(.4,1-(n-1)*.8),r=.28+.72*ya(25,160,t),a=55+75*Nn(s*.006+13,2.1,3)+(Nn(s*.013+3,e*.013,4)-.5)*2*22,o=i*r*a,l=(e-CE)/240;if(l>0){let c=150+100*Nn(s*.0042-7,5.3,3)+(Nn(s*.016,e*.016+4,3)-.5)*2*18;o=Math.max(o,Math.pow(Math.min(1,l),1.25)*c)}return Math.max(0,o)}function W0(s,e){return wE(s,e)+Math.max(AE(s,e),PE(s,e),G0(s,e)*O0(s,e))}function IE(){Ah=[];for(let s of Th){if(!s.profil)continue;let e=s.punkte,t=[],n=0;for(let o=0;o+1<e.length;o++){let[l,c]=e[o],[h,u]=e[o+1],f=Math.hypot(h-l,u-c),d=Math.max(1,Math.ceil(f/4));for(let m=0;m<d;m++){let b=m/d;t.push({s:n+f*b,x:l+(h-l)*b,z:c+(u-c)*b})}n+=f}t.push({s:n,x:e[e.length-1][0],z:e[e.length-1][1]});let i=t.map(o=>W0(o.x,o.z)),r=i.map((o,l)=>{let c=0,h=0;for(let u=0;u<i.length;u++)Math.abs(t[u].s-t[l].s)<=25&&(c+=i[u],h++);return c/h}),a=.1;for(let o=1;o<r.length;o++)r[o]=Math.min(r[o],r[o-1]+a*(t[o].s-t[o-1].s));for(let o=r.length-2;o>=0;o--)r[o]=Math.min(r[o],r[o+1]+a*(t[o+1].s-t[o].s));Ah.push({s,proben:t,h:r,rand:s.rand??8})}}function LE(s,e,t){Ah||IE();let n=t;for(let i of Ah){let r=i.s.breite*.5,a=i.rand,o=1/0,l=0;for(let u=0;u<i.proben.length;u++){let f=i.proben[u],d=(f.x-s)*(f.x-s)+(f.z-e)*(f.z-e);d<o&&(o=d,l=u)}let c=Math.sqrt(o)-r;if(c>=a)continue;let h=c<=0?1:1-c/a*(c/a)*(3-2*c/a);n=n+(i.h[l]-n)*h}return n}function vi(s,e){return LE(s,e,W0(s,e))}function K0(s,e,t=13,n=-.015){X0={z0:s,z1:e,bis:t,y:n}}function Vo(s,e){let t=q0;if(!t)return vi(s,e);let{xs:n,nx:i,z0:r,schritt:a,nz:o,pos:l}=t;if(s<n[0]||s>n[i-1]||e<r||e>r+(o-1)*a)return vi(s,e);let c=0,h=i-2;for(;c<h;){let T=c+h+1>>1;n[T]<=s?c=T:h=T-1}let u=c,f=Math.min(o-2,Math.max(0,Math.floor((e-r)/a))),d=(s-n[u])/(n[u+1]-n[u]),m=(e-r-f*a)/a,b=f*i+u,p=b+1,g=b+i,y=g+1,M=l[b*3+1],x=l[p*3+1],E=l[g*3+1],v=l[y*3+1];return d+m<=1?M+(x-M)*d+(E-M)*m:v+(E-v)*(1-d)+(x-v)*(1-m)}function Ls(s,e){let t=Vo(s,e),n=X0,i=Math.abs(s)<n.bis&&e>=n.z0&&e<=n.z1?n.y:kE;return t>i?t:i}function DE(s={}){let e=new Le({color:3816762,roughness:1,metalness:0,...s.material||{}}),t={felsFarbe:{value:new _e(.055,.07,.095)},schneeFarbe:{value:new _e(.62,.68,.8)},schneeHoehe:{value:H0.hoehe},schneeWeich:{value:H0.weich},nebelBerg:{value:.2},waldBoden:{value:new _e(.42,.56,.44)}};return e.userData.uniforms=t,e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        #endif`)},e.customProgramCacheKey=()=>"gelaende-fels-schnee-6",e}function j0(s,e,t={}){let n=t.schritt||6,i=t.grob?$f.filter((p,g)=>g%2===0||g===$f.length-1):$f,r=[];for(let p=i.length-1;p>=1;p--)r.push(-i[p]);for(let p=0;p<i.length;p++)r.push(i[p]);let a=Math.ceil((e-s)/n)+1,o=r.length,l=new Float32Array(o*a*3),c=new Float32Array(o*a*2),h=new Float32Array(o*a),u=0;for(let p=0;p<a;p++){let g=s+p*n;for(let y=0;y<o;y++,u++){let M=r[y];l[u*3]=M,l[u*3+1]=vi(M,g),l[u*3+2]=g,c[u*2]=M/4.5,c[u*2+1]=g/4.5,h[u]=Math.max(ya(150,235,Math.abs(M)),ya(Rh+60,Rh+230,g),ya(4,14,G0(M,g)))}}let f=new Uint32Array((o-1)*(a-1)*6),d=0;for(let p=0;p<a-1;p++)for(let g=0;g<o-1;g++){let y=p*o+g,M=y+1,x=y+o,E=x+1;f[d++]=y,f[d++]=x,f[d++]=M,f[d++]=M,f[d++]=x,f[d++]=E}let m=new ht;m.setAttribute("position",new at(l,3)),m.setAttribute("uv",new at(c,2)),m.setAttribute("fels",new at(h,1)),m.setIndex(new at(f,1)),m.computeVertexNormals(),q0={xs:r,nx:o,z0:s,schritt:n,nz:a,pos:l};let b=new J(m,t.material||DE());return b.name="gelaende",b.frustumCulled=!1,b.receiveShadow=!0,b}var ya,U0,TE,B0,z0,Is,RE,V0,Rh,CE,Ah,q0,X0,kE,H0,$f,Ma=lt(()=>{Go();Tt();Xn();ya=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)};U0=7.5,TE=8.5,B0=-.05,z0=170;Is=vt(5),RE=[[-130,Is+70,75,88,.5],[140,Is+50,88,105,1.87],[-230,Is+200,120,138,3.24],[120,Is+215,105,148,4.61],[-160,Is-80,98,94,5.98],[-230,Is+480,165,162,7.35],[240,Is+500,165,175,8.72],[-170,Is+150,98,125,10.09]];V0=vt(8),Rh=V0+600,CE=V0+930;Ah=null;q0=null,X0={z0:-1/0,z1:1/0,bis:13,y:-.015},kE=-.3;H0={hoehe:72,weich:22};$f=[0,4,7,9,11,13,15.5,18.5,22,26,31,37,44,52,61,71,82,94,106,118,130,142,154,166,178,190,202,214,226,238,250,262,275,288,302,316,330,350,375,405,440,485,540]});function HE(s,e){return Nn(s*.011+5.3,e*.011-2.1,3)<.34}function OE(s,e){let t=vt(2);return s<0?e>t-95&&e<t+55&&s>-30:e>t-70&&e<t+45&&s<17}function GE(s=3){let e=new Map,t=(n,i)=>n*1048576+i;return{frei(n,i,r){let a=Math.floor((n-r)/s),o=Math.floor((n+r)/s),l=Math.floor((i-r)/s),c=Math.floor((i+r)/s);for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){let f=e.get(t(h,u));if(f){for(let d of f)if((d[0]-n)**2+(d[1]-i)**2<(r+d[2])**2)return!1}}return!0},setze(n,i,r){let a=t(Math.floor(n/s),Math.floor(i/s)),o=e.get(a);o?o.push([n,i,r]):e.set(a,[[n,i,r]])}}}function Q0(s,e,t,n,i=2600){let r=[],a=GE(),o=(d,m,b,p,g)=>{let y=Math.abs(d);if(p==="laub"&&y<UE&&(p="nadel"),y<(p==="busch"?J0:Y0)||y>Qf+4)return!1;let M=(p==="laub"?6.9:p==="busch"?2.5:5)*g;if(p!=="busch"&&y-M<BE||va(d,m)<M||_a(d,m,M)||p!=="busch"&&OE(d,m)||n&&!n(m,b,"baum",d))return!1;let x=p==="busch"?1*g:1.35*g;return a.frei(d,m,x)?(a.setze(d,m,x),r.push({x:d,z:m,y:Ls(d,m)-.03,s:g,drehung:t()*Math.PI*2,neigung:t()*.07,neigAchse:t()*Math.PI*2,art:p}),!0):!1},l=()=>.7+Math.pow(t(),.8)*.7,c=()=>s-40+t()*(e-s+80),h=Math.round(i*.16);for(let d=0;d<h;d++){let m=t()<.5?-1:1,b=m*(12.5+Math.pow(t(),1.1)*(Qf-10)),p=c();if(HE(b,p))continue;let g=3+Math.floor(t()*8),y=3.5+t()*7,M=t()<.15;for(let E=0;E<g;E++){let v=t()*Math.PI*2,T=Math.sqrt(t())*y;o(b+Math.cos(v)*T,p+Math.sin(v)*T,m,M||t()<.08?"laub":"nadel",l())}let x=Math.floor(t()*3);for(let E=0;E<x;E++){let v=t()*Math.PI*2,T=y+1+t()*3;o(b+Math.cos(v)*T-m*t()*3,p+Math.sin(v)*T,m,"busch",.6+t()*.6)}}let u=Math.round(i*.18);for(let d=0;d<u;d++){let m=t()<.5?-1:1;o(m*(Y0+Math.pow(t(),1.4)*26),c(),m,t()<.12?"laub":"nadel",l())}let f=Math.round(i*.12);for(let d=0;d<f;d++){let m=t()<.5?-1:1;o(m*(J0+Math.pow(t(),1.6)*14),c(),m,"busch",.55+t()*.7)}for(let d=r.length-1;d>0;d--){let m=Math.floor(t()*(d+1)),b=r[d];r[d]=r[m],r[m]=b}return r}function VE(s,e,t,n,i=260){let r=[],a=Math.round((e-s)/100*i);for(let o=0;o<a;o++){let l=t()<.5?-1:1,h=t()<.3?150+t()*90:Qf+Math.pow(t(),.9)*102,u=l*h,f=s+t()*(e-s);Nn(u*.008-1.7,f*.008+4.4,3)<.32||vi(u,f)>zE*(.8+.4*t())||_a(u,f,6)||va(u,f)<6||n&&!n(f,l,"baum",u)||r.push([u,Ls(u,f)-.04,f,.8+t()*.6,t()*Math.PI*2,t()<.15?1:0])}return r}function WE(s){return Ch.set(s.x,s.y,s.z),Wo.setFromAxisAngle(eg,s.drehung),$0.set(Math.cos(s.neigAchse||0),0,Math.sin(s.neigAchse||0)),Z0.setFromAxisAngle($0,s.neigung||0),Wo.premultiply(Z0),Ph.setScalar(s.s),new Pe().compose(Ch,Wo,Ph)}var FE,NE,Y0,UE,J0,BE,Qf,zE,Ch,Wo,Z0,Ph,eg,$0,Ih,tg=lt(()=>{Tt();Xf();Ma();Go();Xn();FE=[0,30,85],NE=[0,0,24],Y0=10.5,UE=14,J0=9.6,BE=6,Qf=48,zE=38;Ch=new w,Wo=new Ot,Z0=new Ot,Ph=new w,eg=new w(0,1,0),$0=new w;Ih=class s{constructor(e,t,n){this.szene=e,this.plaetze=t,this.fern=n,this.instanzen=[],this.fernMeshes=[],this.geladen=!1,this.dichte=1}async laden(e,t){let n=null;try{let x=await fetch((e.basis||"")+"welt/modelle/baeume.json",{cache:"no-cache"});x.ok&&(n=await x.json())}catch{n=null}if(!Array.isArray(n)||!n.length)return!1;let i=t.stufe;this.dichte=i.baumDichte??1;let r=i.lod===0,a=x=>x&&x.dateien&&x.art,o=n.filter(x=>a(x)&&/busch/.test(x.name)),l=n.filter(x=>a(x)&&x.art==="nadel"&&!/busch/.test(x.name)),c=n.filter(x=>a(x)&&x.art==="laub"&&(x.breite_m||0)<16),h=[...l.slice(0,5).map(x=>[x,"nadel"]),...c.slice(0,2).map(x=>[x,"laub"]),...o.slice(0,1).map(x=>[x,"busch"])];if(!h.length)return!1;let u=new Set(r?l.slice(0,1).map(x=>x.name):[]),f=r?0:i.lichter>0?1:2,d=(await Promise.all(h.map(async([x,E])=>{let v=x.dateien,T=await Promise.all([0,1,2].map(_=>_>=f&&v["lod"+_]&&(_!==0||u.has(x.name))?e.glb("welt/modelle/"+v["lod"+_]):Promise.resolve(null)));return T.forEach((_,R)=>{_&&s.fussNormieren(_.scene,x.name+" LOD"+R)}),{name:x.name,art:E,hoehe:+x.hoehe_m||14,stufen:T,da:T.some(_=>!!_)}}))).filter(x=>x.da),m=x=>d.filter(E=>E.art===x),b=m("nadel"),p=m("laub"),g=m("busch");if(!b.length&&!p.length)return!1;let y=d.map(()=>[]),M={nadel:0,laub:0,busch:0};for(let x of this.plaetze){let E=x.art==="busch"?g:x.art==="laub"&&p.length?p:b.length?b:p;if(!E.length)continue;let v=E[M[x.art]++%E.length];y[d.indexOf(v)].push(x)}return d.forEach((x,E)=>{let v=y[E];if(!v.length)return;let T=x.art==="busch",_=new dr(this.szene,x,v.map(WE),{name:x.name,weiten:T?NE:FE,lodWeite:i.lodWeite,maxWeite:1e3,takt:8,versatz:E,feinste:i.lod,blickKegel:T?{mitte:1.5,radius:3}:{mitte:x.hoehe*.45,radius:x.hoehe*.6},spiegel:!1,schatten:R=>!T&&s.istStamm(R),schattenAn:!!i.schatten,material:(R,C,I)=>s.material(R,C,I)});_.setzeAnzahl(Math.round(v.length*this.dichte)),this.instanzen.push(_)}),this.fernBauen(b.length?b.slice(0,4):p,p),this.geladen=this.instanzen.length>0,this.geladen}fernBauen(e,t){let n=m=>{let b=m.stufen[2];if(!b)return null;b.scene.updateMatrixWorld(!0);let p=null;return b.scene.traverse(g=>{!p&&g.isMesh&&(p=g)}),p?{mesh:p,material:s.material(p.material,p,2)}:null},i={0:e.map(n).filter(Boolean),1:t.map(n).filter(Boolean)};if(i[0].length||(i[0]=i[1]),i[1].length||(i[1]=i[0]),!i[0].length)return;let{z0:r,z1:a,rnd:o,frei:l}=this.fern,c=VE(r,a,o,l,this.dichte<.5?130:260),h=Math.round(c.length*this.dichte);this.fernPlaetze=c.slice(0,h).map(m=>({x:m[0],y:m[1],z:m[2]}));let u=new Map,f=[0,0];for(let m=0;m<h;m++){let b=c[m],p=i[b[5]][f[b[5]]++%i[b[5]].length];u.has(p)||u.set(p,[]),u.get(p).push(b)}let d=new Pe;for(let[m,b]of u){let p=new Kt(m.mesh.geometry,m.material,b.length);p.name="fernwald:"+m.mesh.name,b.forEach((g,y)=>{Ch.set(g[0],g[1],g[2]),Wo.setFromAxisAngle(eg,g[4]),Ph.setScalar(g[3]),p.setMatrixAt(y,d.compose(Ch,Wo,Ph).multiply(m.mesh.matrixWorld))}),p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,this.szene.add(p),this.fernMeshes.push(p)}}static fussNormieren(e,t){e.updateMatrixWorld(!0);let n=new pn,i=new pn,r=null;if(e.traverse(h=>{!h.isMesh||!h.geometry||(h.geometry.boundingBox||h.geometry.computeBoundingBox(),i.copy(h.geometry.boundingBox).applyMatrix4(h.matrixWorld),n.union(i),s.istStamm(h)&&(r?r.union(i):r=i.clone()))}),n.isEmpty())return;let a=r||n,o=(a.min.x+a.max.x)/2,l=(a.min.z+a.max.z)/2,c=a.min.y;(Math.hypot(o,l)>.1||Math.abs(c)>.1)&&console.warn(`Baum ${t}: Fu\xDF um (${o.toFixed(2)}, ${c.toFixed(2)}, ${l.toFixed(2)}) verschoben \u2013 in den Ursprung ger\xFCckt`),e.position.x-=o,e.position.y-=c,e.position.z-=l,e.updateMatrixWorld(!0)}static istStamm(e){let t=e.material&&e.material.name||"";return/rinde|stamm|trunk|bark/i.test(t)||/stamm|trunk/i.test(e.name||"")}static material(e,t,n){if(!e)return e;let i=e.name||"";if(/blaetter|nadeln|billboard|leaf|leaves|needle/i.test(i)||e.alphaTest>0){if(e.userData.freqLaub)return e;e.userData.freqLaub=!0,e.side=Rt,e.transparent=!1,e.depthWrite=!0,e.alphaTest=n===0?.42:n===1?.33:.28,e.alphaToCoverage=!0,e.roughness=1,e.metalness=0,"envMapIntensity"in e&&(e.envMapIntensity=.3),e.color&&e.color.multiply(new _e(.78,.8,.74)),e.isMeshStandardMaterial&&(e.onBeforeCompile=r=>{r.fragmentShader=r.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
            reflectedLight.directDiffuse *= 0.55;
            reflectedLight.directSpecular *= 0.2;`)},e.customProgramCacheKey=()=>"freq-laub-1"),e.needsUpdate=!0}return e}setzeStufe(e){this.dichte=e.baumDichte??1;for(let t of this.instanzen)t.setzeStufe(e),t.setzeAnzahl(Math.round(t.n*this.dichte))}update(e,t){for(let n of this.instanzen)n.update(e,t)}}});function td(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e;let i=n.getContext("2d");t(i,s,e);let r=new Mt(n);return r.colorSpace=nt,r.wrapS=r.wrapT=dn,r.anisotropy=4,r}function ed(s,e=0){return td(256,256,(t,n,i)=>{t.lineCap="round";let r=e===1?14:e===2?55:70;for(let a=0;a<r;a++){let o=(s()-.5)*(e===1?2.4:2.1),l=i*(e===2?.55+s()*.45:.45+s()*.5),c=n/2+(s()-.5)*40,h=c+Math.sin(o)*l,u=i-Math.cos(o)*l*.95,f=t.createLinearGradient(c,i,h,u),d=e===2?48+s()*18:e===1?105+s()*25:95+s()*35,m=e===2?30+s()*20:25+s()*25,b=e===1?16+s()*10:e===2?26+s()*16:22+s()*14;if(f.addColorStop(0,`hsl(${d}, ${m}%, ${e===2?12:9}%)`),f.addColorStop(1,`hsl(${d-15}, ${m+10}%, ${b}%)`),t.strokeStyle=f,t.lineWidth=e===1?5+s()*4:e===2?1.2+s()*2:2+s()*3.5,t.beginPath(),t.moveTo(c,i),t.quadraticCurveTo(c+Math.sin(o)*l*.3,i-l*.6,h,u),t.stroke(),e===1){t.lineWidth=1.5;for(let p=.25;p<1;p+=.12){let g=c+(h-c)*p,y=i+(u-i)*p,M=(1-p)*14+3;t.beginPath(),t.moveTo(g-M,y+3),t.lineTo(g,y),t.lineTo(g+M,y+3),t.stroke()}}}})}function ng(s,e=0){let t=e===1?30:110,n=e===1?.49:.42,i=e===1?.6:.8;return td(256,256,(r,a,o)=>{let l=r.createRadialGradient(a/2,o,10,a/2,o,o*.9);l.addColorStop(0,`hsl(${t+5}, 26%, 15%)`),l.addColorStop(.85,`hsl(${t}, 28%, 19%)`),l.addColorStop(1,`hsla(${t}, 28%, 19%, 0)`),r.fillStyle=l,r.beginPath(),r.ellipse(a/2,o,a*n,o*i,0,Math.PI,0),r.fill();for(let c=0;c<1100;c++){let h=s()*Math.PI,u=Math.sqrt(s()),f=a/2+Math.cos(h)*u*a*(n+.04)*(s()<.5?-1:1),d=o-Math.sin(h)*u*o*(i+.1),m=15+u*12+s()*12;r.fillStyle=`hsl(${t-15+s()*40}, ${24+s()*20}%, ${m}%)`,r.beginPath(),r.ellipse(f,d,3+s()*5,2+s()*3,s()*Math.PI,0,Math.PI*2),r.fill()}})}function qE(s){return td(1024,256,(e,t,n)=>{for(let i=0;i<2;i++){let r=-20;for(;r<t+20;){let a=n*(i?.55+s()*.3:.7+s()*.3),o=a*(.28+s()*.1),l=i?10+s()*4:6+s()*4;e.fillStyle=`hsl(${130+s()*30}, ${18+s()*12}%, ${l}%)`,e.beginPath(),e.moveTo(r,n-a);let c=7;for(let h=1;h<=c;h++){let u=h/c;e.lineTo(r+o*u*(.8+s()*.4),n-a+a*u*.92),e.lineTo(r+o*u*.6,n-a+a*u*.92+2)}e.lineTo(r+o,n),e.lineTo(r-o,n);for(let h=c;h>=1;h--){let u=h/c;e.lineTo(r-o*u*.6,n-a+a*u*.92+2),e.lineTo(r-o*u*(.8+s()*.4),n-a+a*u*.92)}e.closePath(),e.fill(),r+=o*(.7+s()*.6)}}e.fillStyle="hsl(140, 20%, 6%)",e.fillRect(0,n*.82,t,n*.18)})}function qo(s,e){let t=[0,1,2].map(l=>new ot(s,e).translate(0,e/2,0).rotateY(l*Math.PI/3)),n=[],i=[],r=[],a=0;for(let l of t){n.push(...l.attributes.position.array),i.push(...l.attributes.uv.array);let c=l.index.array;for(let h of c)r.push(h+a);for(let h=0;h<c.length;h+=3)r.push(c[h]+a,c[h+2]+a,c[h+1]+a);a+=l.attributes.position.count,l.dispose()}let o=new ht;return o.setAttribute("position",new ct(n,3)),o.setAttribute("uv",new ct(i,2)),o.setAttribute("normal",new ct(new Float32Array(n.length).map((l,c)=>c%3===1?1:0),3)),o.setIndex(r),o}var Ea,Lh,ig=lt(()=>{Tt();Ma();Go();Qt();Ea=s=>{let e=new Le({map:s,roughness:1,metalness:0,alphaTest:.4,alphaToCoverage:!0,side:zn,envMapIntensity:.3});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      reflectedLight.directDiffuse *= 0.6;
      reflectedLight.directSpecular *= 0.2;`)},e.customProgramCacheKey=()=>"freq-bewuchs-1",e},Lh=class{constructor(e,t){this.szene=e,this.o=t,this.meshes=[]}bauen(e,t){if(this.meshes.length)return;let n=ga(53),i=t==="niedrig"?0:(e.baumDichte??1)*(t==="mittel"?.75:1);i>0&&(this.unterwuchs(n,qo(1.1,.8),Ea(ed(n,0)),Math.round(1900*i),"bueschel"),this.unterwuchs(n,qo(1.3,.9),Ea(ed(n,1)),Math.round(700*i),"bueschel"),this.unterwuchs(n,qo(1,1),Ea(ed(n,2)),Math.round(900*i),"bueschel"),this.unterwuchs(n,qo(1.9,1.3),Ea(ng(n,0)),Math.round(750*i),"strauch"),this.unterwuchs(n,qo(2.2,1),Ea(ng(n,1)),Math.round(400*i),"strauch")),this.kulisse(n)}boden(e,t){return Ls(e,t)-.03}unterwuchs(e,t,n,i,r){let{z0:a,z1:o,frei:l}=this.o,c=r==="strauch",h=[],u=0;for(;h.length<i&&u++<i*4;){let f=e()<.5?-1:1,d=c?10.2+Math.pow(e(),1.3)*32:9.6+Math.pow(e(),1.8)*30,m=f*d,b=a+e()*(o-a),p=c?1.4:.7;if(va(m,b)<p+.5||_a(m,b,p)||c&&l&&!l(b,f,"baum",m))continue;let g=c?.6+e()*.8:.6+e()*.9;if(h.push([m,this.boden(m,b),b,g,e()*Math.PI*2]),c&&e()<.6)for(let y=0;y<2;y++){let M=m+(e()-.5)*5,x=b+(e()-.5)*5;Math.abs(M)<10.2||va(M,x)<p+.5||_a(M,x,p)||h.push([M,this.boden(M,x),x,.5+e()*.6,e()*Math.PI*2])}}this.instanziere(t,n,h,r)}kulisse(e){let{kz0:t,kz1:n}=this.o,i=new ot(70,24).translate(0,12,0);i.setAttribute("normal",new ct(new Float32Array(i.attributes.position.count*3).map((o,l)=>l%3===1?1:0),3));let r=Ea(qE(e)),a=[];for(let o of[-1,1])for(let[l,c]of[[118,25],[160,35]]){let h=t+e()*30;for(;h<n;){let u=o*(l+e()*c),f=Math.min(vi(u,h-30),vi(u,h),vi(u,h+30))-2.5,d=-o*Math.PI/2+(e()-.5)*.42;a.push([u,f,h,.85+e()*.35,d,e()<.5?-1:1]),h+=38+e()*18}}this.instanziere(i,r,a,"kulisse")}instanziere(e,t,n,i){if(!n.length)return;let r=new Kt(e,t,n.length);r.name="bewuchs:"+i;let a=new Pe,o=new w,l=new Ot,c=new w,h=new w(0,1,0);n.forEach((u,f)=>{o.set(u[0],u[1],u[2]),l.setFromAxisAngle(h,u[4]),c.set(u[3]*(u[5]||1),u[3],u[3]),r.setMatrixAt(f,a.compose(o,l,c))}),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,this.szene.add(r),this.meshes.push(r)}}});function YE(s=4){let e=[[-.02,.86],[.03,.835],[.065,.8],[.03,.765],[0,.745],[.03,.725],[.065,.69],[.03,.655],[-.02,.63]],t=e.length,n=[],i=[],r=[],a=[];for(let h=0;h<t;h++){let[u,f]=e[h],[d,m]=e[Math.min(t-1,h+1)],[b,p]=e[Math.max(0,h-1)],g=d-b,y=m-p,M=Math.hypot(g,y)||1,x=y/M,E=-g/M;for(let v of[-s/2,s/2])n.push(u,f,v),i.push(x,E,0),r.push((v+s/2)/s,h/(t-1))}for(let h=0;h<t-1;h++){let u=h*2,f=u+1,d=u+2,m=u+3;a.push(u,f,d,f,m,d)}let o=new ht;o.setAttribute("position",new ct(n,3)),o.setAttribute("normal",new ct(i,3)),o.setAttribute("uv",new ct(r,2)),o.setIndex(a);let l=new Ve(.06,.74,.12).translate(-.075,.37,0),c=new Ve(.01,.05,.08).translate(.07,.745,.6);return{blech:o,pfosten:l,reflektor:c}}var sg,rg,nd,XE,ag,id,KE,jE,kh,sd=lt(()=>{Tt();Hn();qn();T0();Xf();fr();Ma();tg();Qt();ig();sg=34,rg=280,nd=700,XE=6.6,ag=5.2,id=(s,e=1,t=[0,0,0],n=1.5,i=5)=>new Et({transparent:!0,blending:Nt,depthWrite:!1,side:Rt,fog:!1,uniforms:{farbe:{value:s},staerke:{value:e},zeit:{value:0},kamera:{value:new w(0,-1e3,0)},spitze:{value:new w(...t)},nah:{value:n},fern:{value:i}},vertexShader:`
    uniform vec3 kamera, spitze; uniform float nah, fern;
    varying float vA; varying vec3 vN; varying vec3 vV; varying vec3 vW; varying float vFade;
    void main(){
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
    void main(){
      float nd = abs(dot(normalize(vN), normalize(vV)));
      float staub = 0.75 + 0.25 * sin(vW.x * 7.0 + vW.y * 5.0 + zeit * 1.7) * sin(vW.z * 6.0 - vW.y * 4.0 + zeit * 1.1);
      float a = pow(clamp(1.0 - vA, 0.0, 1.0), 2.0) * pow(clamp(nd, 0.0, 1.0), 1.1) * staerke * staub * vFade;
      gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),KE=(s,e)=>new Et({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:{t:{value:s},farbe:{value:e},groesse:{value:1.6}},vertexShader:`
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
    }`}),jE=`
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
  }`;kh=class{constructor(e,t){this.szene=e,this.z0=t.z0,this.z1=t.z1,this.frei=t.frei||null,this.renderer=t.renderer||null;let n=t.rnd;this.flareT=ei(128),this.stufe={lichter:0,schatten:!1,lod:1,lodWeite:1,baumDichte:1,kegel:!0},this.himmelUniforms={oben:{value:new _e(132366)},horizont:{value:new _e(924206)},glut:{value:new _e(3810838)},zeit:{value:0},sterne:{value:.6},aurora:{value:0},warnung:{value:0},mond:{value:0},mondRichtung:{value:new w(.3,.3,.9)}};let i=new J(new mn(1100,32,16),new Et({side:wn,depthWrite:!1,fog:!1,uniforms:this.himmelUniforms,vertexShader:"varying vec3 vP; void main(){ vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_Position.z = gl_Position.w; }",fragmentShader:jE}));i.frustumCulled=!1,i.layers.enable(It),e.add(i),this.himmel=i;{let r=new or(t.renderer),a=new Ji;a.add(new J(new Ve(60,30,60),new st({color:197900,side:wn})));let o=(l,c,h,u,f,d,m,b,p)=>{let g=new J(new ot(l,c),new st({color:Oe(b[0]*p,b[1]*p,b[2]*p)}));g.position.set(h,u,f),g.rotation.set(d,m,0),a.add(g)};o(40,1,0,14,0,Math.PI/2,0,[.85,.92,1],9),o(30,.5,4,9,0,Math.PI/2,0,[1,.68,.38],7),o(30,.3,-6,11,0,Math.PI/2,0,[1,.72,.45],4),o(12,5,-29,5,0,0,Math.PI/2,[.35,.55,.9],1.6),o(12,5,29,5,0,0,-Math.PI/2,[.95,.55,.3],1.3),this.envMap=r.fromScene(a,.04).texture,r.dispose()}e.add(new Eo(1714762,0,.6)),this.mond=new Ts(4874120,1),this.mond.position.set(-60,90,-40),e.add(this.mond),this.fuell=new Ts(10335999,.5),this.fuell.target=new St,e.add(this.fuell,this.fuell.target),this.laternenLicht=new vn(16757866,260,46,2),e.add(this.laternenLicht),this.lichtPool=new Mh(e,{renderer:t.renderer}),K0(t.z0,t.z1,7,-.015),this.gelaende=j0(t.z0-300,t.z1+nd,t.grob?{schritt:12,grob:!0}:{}),e.add(this.gelaende),this.bergMaterial=this.gelaende.material,this.laternenPlaetze=[];{let r=Math.ceil((t.z1-t.z0)/sg);for(let a=0;a<r;a++){let o=a%2===0?-1:1,l=t.z0+a*sg+11;t.frei&&!t.frei(l,o,"laterne")||this.laternenPlaetze.push({z:l,seite:o})}}this.laternen=[],this.leuchten=null,this.baueLaternenRueckfall();{let r=new Ve(.1,1,.07);r.translate(0,.5,0);let a=new Ve(.06,.05,.02),o=Math.ceil((t.z1-t.z0)/33),l=new Kt(r,new Le({color:12105904,roughness:.6}),o*2),c=new Kt(a,new st({color:Oe(5,1.6,.3)}),o),h=new Kt(a,new st({color:Oe(4,4,4)}),o),u=new Pe,f=0,d=0,m=0;for(let b=0;b<o;b++){let p=t.z0+b*33+7;(!t.frei||t.frei(p,-1,"leitpfosten"))&&(u.makeTranslation(-4.5,0,p),l.setMatrixAt(f++,u),u.makeTranslation(-4.5,.9,p+.045),c.setMatrixAt(d++,u)),(!t.frei||t.frei(p,1,"leitpfosten"))&&(u.makeTranslation(4.5,0,p),l.setMatrixAt(f++,u),u.makeTranslation(4.5,.9,p+.045),h.setMatrixAt(m++,u))}l.count=f,c.count=d,h.count=m;for(let b of[l,c,h])b.frustumCulled=!1,e.add(b)}this.leitplankenPlaetze=[];{let a=Math.ceil((t.z1-t.z0)/4);for(let M=0;M<a;M++){let x=t.z0+(M+.5)*4;for(let E of[-1,1])t.frei&&!t.frei(x,E,"leitplanke")||this.leitplankenPlaetze.push({z:x,seite:E})}let{blech:o,pfosten:l,reflektor:c}=YE(4),h=new Le({color:10133155,roughness:.5,metalness:.85,side:Rt}),u=new Le({color:7304056,roughness:.6,metalness:.8}),f=new st({color:Oe(4,4,4)}),d=Math.max(1,this.leitplankenPlaetze.length),m=new Kt(o,h,d),b=new Kt(l,u,d),p=new Kt(c,f,d),g=new Pe,y=new Pe;this.leitplankenPlaetze.forEach((M,x)=>{g.makeTranslation(M.seite*ag,0,M.z),M.seite>0&&g.multiply(y.makeRotationY(Math.PI)),m.setMatrixAt(x,g),b.setMatrixAt(x,g),p.setMatrixAt(x,g)}),m.count=b.count=p.count=this.leitplankenPlaetze.length;for(let M of[m,b,p])M.frustumCulled=!1,e.add(M);this.leitplankenRueckfall=[m,b,p]}this.baumPlaetze=Q0(t.z0,t.z1+rg,n,t.frei);{let r=new $i(2.4,6.5,7);r.translate(0,3.25,0);let a=new $i(1.6,5.5,7);a.translate(0,7.2,0);let o=new vo({color:661521}),l=Math.max(1,this.baumPlaetze.length),c=new Kt(r,o,l),h=new Kt(a,o,l),u=new Pe,f=new w,d=new Ot,m=new w,b=new w(0,1,0),p=this.baumPlaetze.filter(g=>g.art!=="busch");p.forEach((g,y)=>{f.set(g.x,g.y,g.z),d.setFromAxisAngle(b,g.drehung),m.set(g.s*1.05,g.s*1.1,g.s*1.05),u.compose(f,d,m),c.setMatrixAt(y,u),h.setMatrixAt(y,u)}),c.count=h.count=p.length,c.frustumCulled=!1,h.frustumCulled=!1,e.add(c,h),this.kegelBaeume=[c,h]}this.baeume=new Ih(e,this.baumPlaetze,{z0:t.z0-300,z1:t.z1+nd-180,rnd:ga(31),frei:t.frei}),this.bewuchs=new Lh(e,{z0:t.z0-40,z1:t.z1+rg,kz0:t.z0-300,kz1:t.z1+nd-180,frei:t.frei,strasseBis:t.z1}),this._sort=[],this._v=new w,this.tAlt=null}baueLeuchten(e,t,n){if(this.leuchten)for(let h of this.leuchten)this.szene.remove(h),h.dispose();let i=Math.max(1,e.length),r=new ot(1,1),a=new Kt(r,KE(this.flareT,Oe(2.4,1.5,.65)),i),o=new xt(.32,5.6,n,18,1,!0);o.translate(0,t-n/2,0),this.kegelLaterne=id(new _e().setRGB(1,.62,.3,wt),.065,[0,t,0],7,18);let l=new Kt(o,this.kegelLaterne,i),c=new Pe;e.forEach((h,u)=>{a.setMatrixAt(u,c.makeTranslation(h.x,h.y-.08,h.z)),l.setMatrixAt(u,c.makeTranslation(h.x,h.y-t,h.z))}),a.count=l.count=e.length;for(let h of[a,l])h.frustumCulled=!1,this.szene.add(h);a.layers.enable(It),l.visible=this.stufe.kegel!==!1,this.kegelInstanzen=l,this.glowInstanzen=a,this.leuchten=[a,l],this.laternen=e.map(h=>({z:h.z,kopf:h.clone()}))}baueLaternenRueckfall(){let e=Math.max(1,this.laternenPlaetze.length),t=new xt(.09,.13,9,10);t.translate(0,4.5,0);let n=new xt(.06,.06,2.6,8);n.rotateZ(Math.PI/2),n.translate(1.3,8.9,0);let i=new xt(.16,.42,.26,20);i.translate(2.5,8.98,0);let r=new mn(.2,14,10);r.translate(2.5,8.78,0);let a=new Le({color:1778217,roughness:.7,metalness:.4}),o=new st({color:Oe(10,6,2.4)}),l=[t,n,i,r].map((f,d)=>new Kt(f,d===3?o:a,e)),c=new Pe,h=new Pe,u=[];this.laternenPlaetze.forEach((f,d)=>{c.makeTranslation(f.seite*5.4,0,f.z),f.seite>0&&c.multiply(h.makeRotationY(Math.PI));for(let m of l)m.setMatrixAt(d,c);u.push(new w(f.seite*2.9,8.8,f.z))});for(let f of l)f.count=this.laternenPlaetze.length,f.frustumCulled=!1,this.szene.add(f);l[3].layers.enable(It),this.laternenRueckfall=l,this.baueLeuchten(u,8.85,9.2)}setzeLaternenModell(e){let t=e.stufen.find(c=>c);if(!t)return!1;t.scene.updateMatrixWorld(!0);let n=[];t.scene.traverse(c=>{/^leuchte_\d+$/.test(c.name)&&n.push(new w().setFromMatrixPosition(c.matrixWorld))}),n.length||n.push(new w(-1.9,9.3,0),new w(1.9,9.3,0));let i=hr(t.scene),r=this.laternenPlaetze.map(c=>new Pe().makeTranslation(c.seite*XE,0,c.z));this.laternenInstanzen=new dr(this.szene,e,r,{name:"laterne",weiten:[0,30,95],lodWeite:this.stufe.lodWeite,maxWeite:900,takt:4,feinste:this.stufe.lod,spiegel:c=>!!(c.material&&c.material.name==="licht_laterne")});let a=[],o=new w;r.forEach(c=>{for(let h of n)a.push(o.copy(h).applyMatrix4(c).clone());for(let h of i)this.lichtPool.anmelden(R0(h,c),{prioritaet:1})});let l=n[0].y-.12;this.baueLeuchten(a,l,l);for(let c of this.laternenRueckfall)c.visible=!1;return this.laternenInstanzen.update({position:new w(0,3,0)}),!0}setzeLeitplankenModell(e){let t=Math.max(1,+e.extras.laenge_m||4),n=Math.ceil((this.z1-this.z0)/t),i=[],r=new w,a=new Ot,o=new w(1,1,1),l=new w(0,1,0);for(let c=0;c<n;c++){let h=this.z0+(c+.5)*t;for(let u of[-1,1])this.frei&&!this.frei(h,u,"leitplanke")||(r.set(u*ag,0,h),a.setFromAxisAngle(l,u<0?Math.PI/2:-Math.PI/2),i.push(new Pe().compose(r,a,o)))}if(!i.length)return!1;this.leitplankenInstanzen=new dr(this.szene,e,i,{name:"leitplanke",weiten:[0,25,80],lodWeite:this.stufe.lodWeite,maxWeite:600,takt:6,versatz:2,feinste:this.stufe.lod,spiegel:!1});for(let c of this.leitplankenRueckfall)c.visible=!1;return!0}async ladeModelle(e,t){this.welt=t,this.stufe=t.stufe;let n=t.stufe.lod,i=async(r,a)=>{try{return await a()}catch(o){return console.warn("Umgebung",r,o),null}};await i("Laternen",async()=>{let r=await cr(e,"laterne_duo",n);r.da&&this.setzeLaternenModell(r)}),await i("B\xE4ume",async()=>{if(await this.baeume.laden(e,t)){for(let a of this.kegelBaeume)a.visible=!1;this.echteBaeume=this.baeume.instanzen,this.baeume.setzeStufe(t.stufe)}}),await i("Bewuchs",async()=>this.bewuchs.bauen(t.stufe,t.stufeName)),await i("Leitplanken",async()=>{let r=await cr(e,"leitplanke",n);r.da&&this.setzeLeitplankenModell(r)})}setzeStufe(e,t){this.stufe=e,this.lichtPool.setzeStufe(e),this.laternenLicht.intensity=this.lichtPool.anzahl>0||t==="niedrig"?0:260,this.kegelInstanzen&&(this.kegelInstanzen.visible=e.kegel!==!1);for(let n of[this.laternenInstanzen,this.leitplankenInstanzen])n&&n.setzeStufe(e);this.baeume.setzeStufe(e),this.gelaende&&(this.gelaende.receiveShadow=!!e.schatten)}setzeHdri(e,t){if(!t)return;let n=new or(e),i=n.fromEquirectangular(t).texture;return n.dispose(),t.dispose(),this.envMap=i,this.szene.environment=i,this.szene.environmentIntensity=.5,i}setzeBaeume(e,t,n,i){if(!e||this.baeume.geladen)return;let r=[];if(e.scene.traverse(g=>{g.name&&/^Baum\d$/.test(g.name)&&r.push(g)}),!r.length)return;let a=new Le({color:9075306,roughness:.95,map:t||null,normalMap:n||null}),o=new Le({color:12108976,roughness:.95,map:i||null,alphaTest:.4,side:Rt,transparent:!1}),l=new Le({color:1450266,roughness:1});i&&(i.colorSpace=nt,i.wrapS=i.wrapT=dn,i.flipY=!1,i.needsUpdate=!0),t&&(t.colorSpace=nt,t.wrapS=t.wrapT=Sn);let c=this.baumPlaetze||[],h=r.map(()=>[]);c.forEach((g,y)=>h[y%r.length].push(g));let u=new Pe,f=new w,d=new Ot,m=new w,b=new w(0,1,0),p=[];if(r.forEach((g,y)=>{let M=h[y];g.traverse(x=>{if(!x.isMesh)return;let E=x.material&&x.material.name==="Rinde"||/^Stamm/.test(x.name),v=x.material&&x.material.name==="Kern"||/^Kern/.test(x.name),T=new Kt(x.geometry,E?a:v?l:o,Math.max(1,M.length));M.forEach((_,R)=>{f.set(_.x,_.y,_.z),d.setFromAxisAngle(b,_.drehung),m.set(_.s*1.2,_.s*1.15,_.s*1.2),u.compose(f,d,m),T.setMatrixAt(R,u)}),T.count=M.length,T.frustumCulled=!1,T.castShadow=E&&!!this.stufe.schatten,this.szene.add(T),p.push(T)})}),this.kegelBaeume)for(let g of this.kegelBaeume)g.visible=!1;this.echteBaeume=p}setzeBoden(e,t,n){if(e){e.colorSpace=nt;for(let[i,r]of[[n.bankettMaterial,[3.2,n.bankettLaenge/4]],[n.bodenMaterial,[200,600]],[this.gelaende&&this.gelaende.material,[1,1]]]){if(!i)continue;let a=e.clone();if(a.repeat.set(r[0],r[1]),a.needsUpdate=!0,i.map=a,t){let o=t.clone();o.repeat.set(r[0],r[1]),o.needsUpdate=!0,i.normalMap=o,i.normalScale.set(.8,.8)}i.color.setHex(3816762),i.needsUpdate=!0}n.bankett&&(n.bankett.receiveShadow=!0)}}hoehe(e,t){return vi(e,t)}update(e,t,n){let i=this.tAlt==null?.016666666666666666:Math.min(.1,Math.max(.001,e-this.tAlt));this.tAlt=e,this.himmelUniforms.zeit.value=e,this.kegelLaterne.uniforms.zeit.value=e,this.kegelLaterne.uniforms.kamera.value.copy(t.position),this.himmel.position.copy(t.position),this.himmel.updateMatrixWorld();let r=t.position.z,a=this._sort;a.length=0;for(let c of this.laternen){let h=Math.abs(c.z-r);h<140&&a.push({l:c,d:h})}a.sort((c,h)=>c.d-h.d);let o=n.uniforms.laternen.value;for(let c=0;c<o.length;c++)c<a.length?o[c].copy(a[c].l.kopf):o[c].set(0,-100,0);a.length?this.laternenLicht.position.copy(a[0].l.kopf):this.laternenLicht.position.set(0,-100,0),this.fuell.position.copy(t.position).add(this._v.set(2,6,0)),this.lichtPool.update(t,i);let l=this.szene.fog&&this.szene.fog.density?this.szene.fog.density:0;this.laternenInstanzen&&this.laternenInstanzen.update(t,l),this.leitplankenInstanzen&&this.leitplankenInstanzen.update(t,l),this.baeume.update(t,l)}}});function og(s){let e=new Map,t=new Map,n=s.clone();return lg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function lg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)lg(s.children[n],e.children[n],t)}var cg=lt(()=>{});function JE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function cn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function QE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Le({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),s.DefaultMaterial}function gr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function eS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function tS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function nS(s){let e,t=s.extensions&&s.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+od(t.attributes):e=s.indices+":"+od(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+od(s.targets[n]);return e}function od(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Id(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function iS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function rS(s,e,t){let n=e.attributes,i=new pn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new w(l[0],l[1],l[2]),new w(c[0],c[1],c[2])),o.normalized){let h=Id(Sa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new w,l=new w;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let b=Id(Sa[f.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Gn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function dg(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=Pd[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return bt.workingColorSpace!==wt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),zi(s,e),rS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?eS(s,e.targets,t):s})}var Ta,_t,ld,cd,hd,ud,fd,dd,pd,md,gd,bd,xd,vd,_d,yd,Md,Ed,Dh,Sd,pg,Xo,hg,Td,wd,Rd,Ad,Fh,ZE,Cd,li,Sa,ug,fg,rd,Pd,ks,$E,ad,sS,Ld,kd=lt(()=>{Tt();Wf();cg();Ta=class extends bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ud(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new Dh(t,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dh(t,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Sd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=ss.extractUrlBase(e);a=ss.resolveURL(c,this.path)}else a=ss.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===pg){try{a[_t.KHR_BINARY_GLTF]=new Td(e)}catch(u){i&&i(u);return}r=JSON.parse(a[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Ld(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case _t.KHR_MATERIALS_UNLIT:a[u]=new cd;break;case _t.KHR_DRACO_MESH_COMPRESSION:a[u]=new wd(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:a[u]=new Rd;break;case _t.KHR_MESH_QUANTIZATION:a[u]=new Ad;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};_t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ld=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new _e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ts(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vn(h),c.distance=u;break;case"spot":c=new is(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},cd=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){let i=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,nt))}return Promise.all(i)}},hd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(r,r)}return Promise.all(i)}},fd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},dd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},pd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],wt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,nt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},md=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},gd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(r[0],r[1],r[2],wt),Promise.all(i)}},bd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(r[0],r[1],r[2],wt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,nt)),Promise.all(i)}},vd=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},_d=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return cn(this.parser,e,this.name)!==null?$t:null}extendMaterialParams(e,t){let n=cn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},yd=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Md=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Ed=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Dh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Sd=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let b=new Pe,p=new w,g=new Ot,y=new w(1,1,1),M=new Kt(m.geometry,m.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),M.setMatrixAt(E,b.compose(p,g,y));let x=null;for(let E in l)if(E==="_COLOR_0"){let v=l[E];M.instanceColor=new Zi(v.array,v.itemSize,v.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(x===null){let T=M.geometry;x=new ht,x.name=T.name;for(let _ in T.attributes)x.setAttribute(_,T.attributes[_]);for(let _ in T.morphAttributes)x.morphAttributes[_]=T.morphAttributes[_];T.index!==null&&x.setIndex(T.index),x.morphTargetsRelative=T.morphTargetsRelative;for(let _ of T.groups)x.addGroup(_.start,_.count,_.materialIndex);T.boundingBox!==null&&(x.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(x.boundingSphere=T.boundingSphere.clone()),x.drawRange.start=T.drawRange.start,x.drawRange.count=T.drawRange.count,x.userData=Object.assign({},T.userData),M.geometry=x}let v=l[E];x.setAttribute(E,new Zi(v.array,v.itemSize,v.normalized))}St.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),d.push(M)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},pg="glTF",Xo=12,hg={JSON:1313821514,BIN:5130562},Td=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==pg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Xo,r=new DataView(e,Xo),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===hg.JSON){let c=new Uint8Array(e,Xo+a,o);this.content=n.decode(c)}else if(l===hg.BIN){let c=Xo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},wd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=Pd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Pd[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Sa[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let b=d.attributes[m],p=l[m];p!==void 0&&(b.normalized=p)}u(d)},o,c,wt,f)})})}},Rd=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ad=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Fh=class extends Ii{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,b=m-c,p=-2*d+3*f,g=d-f,y=1-p,M=g-f+u;for(let x=0;x!==o;x++){let E=a[b+x+o],v=a[b+x+l]*h,T=a[m+x+o],_=a[m+x]*h;r[x]=y*E+M*v+p*T+g*_}return r}},ZE=new Ot,Cd=class extends Fh{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return ZE.fromArray(r).normalize().toArray(r),r}},li={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ug={9728:sn,9729:ft,9984:Sc,9985:aa,9986:sr,9987:Jt},fg={33071:dn,33648:Wr,10497:Sn},rd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ks={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$E={CUBICSPLINE:void 0,LINEAR:Xs,STEP:qs},ad={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};sS=new Pe,Ld=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new JE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new er(this.options.manager):this.textureLoader=new To(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return gr(r,o,i),zi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(ss.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=rd[i.type],o=Sa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new at(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=rd[i.type],c=Sa[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,p;if(d&&d!==u){let g=Math.floor(f/d),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,M=t.cache.get(y);M||(b=new c(o,g*d,i.count*d/h),M=new js(b,d/h),t.cache.add(y,M)),p=new xs(M,l,f%d/h,m)}else o===null?b=new c(i.count*l):b=new c(o,f,i.count*l),p=new at(b,l,m);if(i.sparse!==void 0){let g=rd.SCALAR,y=Sa[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,E=new y(a[1],M,i.sparse.count*g),v=new c(a[2],x,i.sparse.count*l);o!==null&&(p=new at(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let T=0,_=E.length;T<_;T++){let R=E[T];if(p.setX(R,v[T*l]),l>=2&&p.setY(R,v[T*l+1]),l>=3&&p.setZ(R,v[T*l+2]),l>=4&&p.setW(R,v[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=ug[f.magFilter]||ft,h.minFilter=ug[f.minFilter]||Jt,h.wrapS=fg[f.wrapS]||Sn,h.wrapT=fg[f.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==sn&&h.minFilter!==ft,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(b){let p=new xn(b);p.needsUpdate=!0,f(p)}),t.load(ss.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),zi(u,a),u.userData.mimeType=a.mimeType||iS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ea,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Qr,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Le}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[_t.KHR_MATERIALS_UNLIT]){let u=i[_t.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new _e(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],wt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,nt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Rt);let h=r.alphaMode||ad.OPAQUE;if(h===ad.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ad.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==st){let u=r.emissiveFactor;o.emissive=new _e().setRGB(u[0],u[1],u[2],wt)}return r.emissiveTexture!==void 0&&a!==st&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,nt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&gr(i,u,r),u})}createUniqueName(e){let t=Wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return dg(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=nS(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=dg(new ht,c,t),c.mode===li.TRIANGLE_STRIP?f=f.then(d=>Vf(d,No)):c.mode===li.TRIANGLE_FAN&&(f=f.then(d=>Vf(d,ca))),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?QE(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let b=h[d],p=a[d],g,y=c[d];if(p.mode===li.TRIANGLES||p.mode===li.TRIANGLE_STRIP||p.mode===li.TRIANGLE_FAN||p.mode===void 0){let M=r.isSkinnedMesh===!0,x=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");M&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&x?new no(b,y):new J(b,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===li.LINES)g=new Js(b,y);else if(p.mode===li.LINE_STRIP)g=new Ys(b,y);else if(p.mode===li.LINE_LOOP)g=new so(b,y);else if(p.mode===li.POINTS)g=new ys(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&tS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),zi(g,r),p.extensions&&gr(i,g,p),t.assignFinalMaterial(g),u.push(g)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&gr(i,u[0],r),u[0];let f=new it;r.extensions&&gr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Yt(zt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Li(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Pe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new io(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],b=d.target,p=b.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],b=u[3],p=u[4],g=[];for(let M=0,x=f.length;M<x;M++){let E=f[M],v=d[M],T=m[M],_=b[M],R=p[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=n._createAnimationTracks(E,v,T,_,R);if(C)for(let I=0;I<C.length;I++)g.push(C[I])}let y=new yo(r,void 0,g);return zi(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,sS)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new w().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new Zr:c.length>1?h=new it:c.length===1?h=c[0]:h=new St,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),zi(h,r),r.extensions&&gr(n,h,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new it;n.name&&(r.name=i.createUniqueName(n.name)),zi(r,n),n.extensions&&gr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(og(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof kn||f instanceof xn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}ks[r.path]===ks.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(ks[r.path]){case ks.weights:h=es;break;case ks.rotation:h=ts;break;case ks.translation:case ks.scale:h=Ss;break;default:n.itemSize===1?h=es:h=Ss;break}let u=i.interpolation!==void 0?$E[i.interpolation]:Xs,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let b=new h(l[d]+"."+ks[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Id(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ts?Cd:Fh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Dd,aS,mg,oS,Fd,jn,Nh,Ko,wa,Ra,lS,Ds,as,Uh,Nd=lt(()=>{Qt();Dd=-1.75,aS=1.75,mg=150,oS=60,Fd=48,jn=Dd,Nh=aS,Ko=-Fd,wa=-2*Fd,Ra=-3*Fd,lS=[0,-78,-26,-52],Ds=[{x:[[0,jn],[9,jn]],dz:[[0,0],[3.42,0],[3.55,-5],[3.7,-7],[3.78,-7],[3.86,-14],[3.95,-21],[4.05,-23],[4.6,0],[9,0]]},{x:[[0,jn],[9,jn]],dz:[[0,Ko],[.3,-50],[.8,-62],[1.3,-78],[1.9,-90],[2.6,wa],[3.42,wa],[3.55,-99],[3.7,-104],[3.78,-103],[3.86,-103.5],[3.95,-105],[4.05,-106.5],[4.6,wa],[5.85,wa],[6.5,-110],[7,-126],[7.6,-140],[8.2,Ra],[9,Ra]]},{x:[[0,jn],[.36,jn],[.76,Nh],[1.05,Nh],[1.45,jn],[9,jn]],dz:[[0,-98],[.1,-98],[.36,-91],[.8,-62],[1.05,-52],[1.4,Ko],[3.42,Ko],[3.55,-49],[3.7,-54],[3.78,-54],[3.86,-55],[3.95,-58],[4.05,-60],[4.6,Ko],[9,Ko]]},{x:[[0,jn],[1.25,jn],[1.6,-1.25],[1.95,jn],[6.05,jn],[6.45,Nh],[6.75,Nh],[7.15,jn],[9,jn]],dz:[[0,-150],[1,-147],[1.8,Ra],[3.42,Ra],[3.55,-147],[3.7,-152],[3.78,-151],[3.86,-151],[3.95,-151.5],[4.05,-152.5],[4.6,Ra],[5.8,Ra],[6.05,-139],[6.5,-110],[6.75,-100],[7.1,wa],[9,wa]]}],as=.01,Uh=class{constructor(){this.choreo=Ds.map(e=>({x:oi(e.x),dz:oi(e.dz)})),this.anzahl=Ds.length,this.zustaende=Ds.map(()=>({vx:0,vz:0,ax:0,az:0,erst:!0})),this.tempoAlt=null,this.beschl=0,this.davon=0,this.vorsprung=0}beginne(e,t,n,i,r=0){let a=this.tempoAlt===null?0:(i-this.tempoAlt)/Math.max(n,.001);this.tempoAlt=i,this.beschl+=(Qe(a,-40,40)-this.beschl)*ti(n,.45);let o=Math.max(Qe(r),Lt(8.12,8.75,e));this.davon+=(o-this.davon)*ti(n,.6);let l=this.davon*this.davon*(3-2*this.davon);this.vorsprung=oS*l,this._e=l}pose(e,t,n,i,r,a){let o=this.choreo[e],l=this.zustaende[e],c=Math.abs(r),h=this._e||0,u=o.x(t),f=o.x(t+as),d=o.x(t-as),m=o.dz(t),b=o.dz(t+as),p=(f-u)/as,g=(f-2*u+d)/(as*as),y=(b-m)/as,M=r/mg,x=p*M,E=y*M;l.erst&&(l.vx=x,l.vz=E,l.erst=!1);let v=ti(i,.3),T=(x-l.vx)/Math.max(i,.001),_=(E-l.vz)/Math.max(i,.001);l.ax+=(Qe(T,-12,12)-l.ax)*v,l.az+=(Qe(_,-25,25)-l.az)*v,l.vx=x,l.vz=E;let R=e===0?0:1.2*Math.sin(t*1.3+e*1.7)+.4*Math.sin(n*.21+e*2.1)*Qe(c/5),C=Gt(m,lS[e]||0,h)+R*(1-h*.5);a.x=u,a.dz=C+this.vorsprung,a.vz=E;let I=Math.max(30,mg+y),B=p/I;a.gier=Math.atan(B),a.kruemmung=g/(I*I)/Math.pow(1+B*B,1.5);let G=(l.az+this.beschl)*Qe(c/6);a.nick=-Qe(G/18,-1,1)*.016;let k=Qe(a.kruemmung*c*c+l.ax*.3,-6,6);a.roll=k*.006;let z=Qe(-l.az/2.5)*Qe(c/6),N=Qe(-this.beschl/10)*Qe(c/6);a.brems=Math.max(z,N*.8);let L=(o.x(t+.08)-o.x(t+.08-as))/as,O=Math.abs(p)>.8?p:Math.abs(L)>.8?L:0;return a.blinker=O>0?"L":O<0?"R":null,a}}});function ES(){return Aa||(Aa=new ot(1,1),Aa.translate(0,-.5,0),Aa.rotateX(Math.PI/2),Aa)}function SS(){if(Yo)return Yo;let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(128,64,10,128,64,120);return t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.45,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.scale(1,.5),e.fillStyle=t,e.fillRect(0,0,256,256),Yo=new Mt(s),Yo.colorSpace=Bt,Yo}function TS(){if(Jo)return Jo;let s=128,e=document.createElement("canvas");e.width=e.height=s;let t=e.getContext("2d"),n=t.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,0.75)"),n.addColorStop(.45,"rgba(255,255,255,0.35)"),n.addColorStop(.74,"rgba(255,255,255,0.95)"),n.addColorStop(.86,"rgba(255,255,255,0.3)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,s,s),Jo=new Mt(e),Jo.colorSpace=Bt,Jo}function bg(s,e){let t=Gt(s.normal,s.brems,e);s.art==="basic"?s.m.color.copy(s.basis).multiplyScalar(t):s.m.emissiveIntensity=t}function wS(s,e){s.art==="basic"?s.m.color.setRGB(.35+e*8,.16+e*3.2,.05+e*.5,wt):s.m.emissiveIntensity=e*pS}function vg(s){if(s.isMeshPhysicalMaterial)return s.clone();let e=new $t({map:s.map||null,normalMap:s.normalMap||null,roughnessMap:s.roughnessMap||null,metalnessMap:s.metalnessMap||null,aoMap:s.aoMap||null});return s.normalScale&&e.normalScale.copy(s.normalScale),e}function _g(s){for(let e of s)e.rotation.order="YXZ",e.userData.basis=e.position.clone()}var ni,cS,hS,uS,fS,dS,pS,jo,mS,Bh,gS,bS,xS,Ud,vS,gg,_S,yS,MS,Aa,Yo,Jo,xg,zh,br=lt(()=>{Tt();kd();Hn();sd();qn();Qt();fr();Nd();ni=Dd,cS=[1450810,9343899,7214628,14474720],hS=4,uS=["auto_goblin","auto_coupe_suv","auto_cyber"],fS=[0,28,80],dS=7,pS=9,jo={farbe:[1,.025,.012],normal:1.4,brems:3.6},mS={farbe:[1,.02,.01],normal:0,brems:3.2},Bh=[1.2,.03,.015],gS=[1,.035,.018],bS=160,xS=.044,Ud=2*Math.PI*1.1,vS=.55,gg=zt.degToRad(25),_S=.6,yS=new w(0,0,1),MS=s=>new Et({transparent:!0,blending:Nt,depthWrite:!1,depthTest:!0,side:Rt,fog:!1,uniforms:{farbe:{value:s},staerke:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    precision highp float;
    uniform vec3 farbe; uniform float staerke; varying vec2 vUv;
    void main(){ float l = pow(clamp(vUv.y, 0.0, 1.0), 1.9); float b = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 1.6); float a = l * b * staerke;
      gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),Aa=null;Yo=null;Jo=null;xg=()=>({hinten:[],brems:[],blinkerL:[],blinkerR:[]});zh=class{constructor(e,t){this.szene=e,this.envMap=t,this.flareT=ei(128),this.streakT=x0(256,32),this.autos=[],this.geparkt=[],this.bremse=0,this.sanftBremse=0,this.innenGlas=0,this.davonfahren=0,this.vorsprung=0,this.fertig=!1,this.eigeneModelle=!1,this.stufe={lod:0,lodWeite:1,lichter:6,schatten:!1,kegel:!0},this.stufeName="hoch",this._p=new w,this._z=new w,this._d=new w,this._q=new Ot,this._k=new w,this._inv=new Pe,this._fuehrung=new w(ni,0,0),this._pose={x:ni,dz:0,vz:0,gier:0,kruemmung:0,nick:0,roll:0,brems:0,blinker:null},this._weiten=[0,0,0],this.envMaterialien=[],this.fahrt=new Uh,this.vorlagen=[],this.spots=[],this._bremseAlt=0,this._pulsZeit=-1}async laden(e,t){let n=new Ta,i=null;try{i=await n.loadAsync(e)}catch(a){console.warn("Automodell fehlt, Ersatz",a),i=await n.loadAsync(t)}this.vorlageAlt=i.scene;let r=this.envMap;this.materialienAlt={Lack:a=>new $t({color:a,metalness:.75,roughness:.3,clearcoat:1,clearcoatRoughness:.05,envMap:r,envMapIntensity:1.6}),Glas:()=>new $t({color:395535,metalness:.9,roughness:.05,clearcoat:1,clearcoatRoughness:.03,envMap:r,envMapIntensity:2,transparent:!0,opacity:1}),Zierleiste:()=>new Le({color:328966,roughness:.45,metalness:.2,envMap:r,envMapIntensity:.6}),Kunststoff:()=>new Le({color:723982,roughness:.75,metalness:0}),Lampenglas:()=>new $t({color:460810,metalness:.6,roughness:.08,clearcoat:1,envMap:r,envMapIntensity:1.5}),Reifen:()=>new Le({color:657931,roughness:.92}),Felge:()=>new Le({color:6975094,roughness:.28,metalness:.95,envMap:r,envMapIntensity:1.2}),Bremse:()=>new Le({color:3815996,roughness:.5,metalness:.9}),Chrom:()=>new Le({color:12633290,roughness:.15,metalness:1,envMap:r,envMapIntensity:1.4}),Kennzeichen:()=>new Le({color:14211288,roughness:.5}),Scheinwerfer:()=>new st({color:Oe(9,9.5,11)}),LED:()=>new st({color:Oe(6,7,9)}),Ruecklicht:()=>new st({color:Oe(...jo.farbe)}),RuecklichtBlock:()=>new st({color:Oe(...jo.farbe)}),Blinker:()=>new st({color:Oe(.35,.16,.05)})};for(let a=0;a<hS;a++)this.autos.push(this.autoBauen(cS[a],a,!0));this.fertig=!0}async ladeModelle(e,t){t&&t.stufe&&(this.stufe=t.stufe,this.stufeName=t.stufeName||this.stufeName);let n=Qe(this.stufe.lod|0,0,2),i=[];for(let r of uS){let a=null;try{a=await cr(e,r,n,n===0?0:2)}catch(o){console.warn("Automodell",r,o)}if(!a||!a.da){console.warn("Automodell fehlt, das Auto nimmt ein anderes Modell:",r);continue}try{i.push(this.vorlageBauen(a))}catch(o){console.warn("Automodell unbrauchbar",r,o)}}if(!i.length)return!1;this.vorlagen=i;for(let r=0;r<this.autos.length;r++)this.umbauen(this.autos[r],r,!0,!1);for(let r of this.geparkt)this.umbauen(r,99,!1,!0);return this.eigeneModelle=!0,!0}vorlageBauen(e){let n=e.stufen.find(I=>I).scene;n.updateMatrixWorld(!0);let i=new pn().setFromObject(n,!0),r=i.getSize(new w),a=i.getCenter(new w),o=r.z>.5?r.z:4.6,l=r.x>.3?r.x:1.9,c=r.y>.3?r.y:1.4,h=o<3.8||o>5.2?4.6/o:1,u=-i.min.y*h,f=I=>{let B=null;return n.traverse(G=>{!B&&G.name===I&&(B=G)}),B},d=I=>I.set(-I.x*h,I.y*h+u,-I.z*h),m=(I,B)=>{let G=f(I),k=new w;return G?G.getWorldPosition(k):k.copy(B),d(k)},b={vornL:m("anker_licht_vorn_L",new w(a.x-l*.32,i.min.y+c*.42,i.min.z+.08)),vornR:m("anker_licht_vorn_R",new w(a.x+l*.32,i.min.y+c*.42,i.min.z+.08)),hintenL:m("anker_licht_hinten_L",new w(a.x-l*.33,i.min.y+c*.6,i.max.z-.06)),hintenR:m("anker_licht_hinten_R",new w(a.x+l*.33,i.min.y+c*.6,i.max.z-.06)),bremsMitte:f("anker_bremslicht_mitte")?m("anker_bremslicht_mitte",new w):null},p=f("anker_licht_vorn_L")||f("anker_licht_vorn_R"),g=new w(0,-.035,1);p&&(p.getWorldDirection(g),g.set(-g.x,g.y,-g.z),g.z<.5&&g.set(0,-.035,1)),g.normalize();let y=p&&p.userData&&p.userData.winkel?Qe(+p.userData.winkel||60,20,120):60,M=p?ma(p,16054527):new _e(16054527),x=f("Rad_VL")||f("Rad_VR")||f("Rad_HL"),E=.35;if(x){let I=new w;x.getWorldPosition(I),E=Math.max(.22,(I.y-i.min.y)*h)}let v=(I,B,G)=>{let k=f(I),z=f(B);if(!k||!z)return G;let N=new w,L=new w;return k.getWorldPosition(N),z.getWorldPosition(L),d(N.add(L).multiplyScalar(.5)).z},T=v("Rad_HL","Rad_HR",-.3*o*h),_=v("Rad_VL","Rad_VR",.28*o*h),R=Math.max(.5,-T),C=Qe(_-T,2,3.4);return{name:e.name,stufen:e.stufen,extras:e.extras,skal:h,dy:u,laenge:o*h,breite:l*h,hoehe:c*h,pos:b,richtung:g,winkel:y,farbe:M,radRadius:E,hinterachse:R,radstand:C}}vorlageFuer(e){let t=this.vorlagen.length;return t?e===99?this.vorlagen[t>1?1:0]:this.vorlagen[e%t]:null}autoBauen(e,t,n=!0,i=null,r=!1){let a=this.vorlageFuer(t);i=i||new it,i.rotation.order="YXZ";let o=a?this.autoNeu(a,e,t,n,i,r):this.autoAlt(e,t,n,i);return o.nickB=0,o.nickV=0,i.parent||this.szene.add(i),o}autoAlt(e,t,n,i){let r=this.vorlageAlt.clone(!0);r.rotation.y=Math.PI;let a={},o=[],l=[],c=[],h=[],u=xg();r.traverse(d=>{if(d.isMesh){let m=d.material?.name||"Lack";if(m==="Blinker"){let b=/Blinker_[VH]L/.test(d.name)?"L":"R",p=this.materialienAlt.Blinker();p.name="Blinker",d.material=p,u["blinker"+b].push({m:p,art:"basic"}),h.push(p)}else{if(!a[m]){let b=this.materialienAlt[m]?this.materialienAlt[m](e):new Le({color:3355443});b.name=m,a[m]=b,h.push(b),!n&&(m==="Scheinwerfer"||m==="LED"||m==="Ruecklicht"||m==="RuecklichtBlock")&&b.color.setRGB(.08,.08,.09),n&&(m==="Ruecklicht"||m==="RuecklichtBlock")&&u.hinten.push({m:b,art:"basic",basis:b.color.clone(),normal:jo.normal,brems:jo.brems}),"envMap"in b&&this.envMaterialien.push(b),m==="Lack"&&l.push(b),m==="Glas"&&c.push(b)}d.material=a[m]}d.layers.enable(It),d.frustumCulled=!1}d.name&&d.name.startsWith("Rad_")&&o.push(d)}),i.add(r),_g(o);let f={g:i,modell:r,stufen:[r],lodAktiv:0,raeder:o,vorderraeder:o.filter(d=>/^Rad_V/.test(d.name)),radRadius:.35,radWinkel:0,leuchten:u,lackMats:l,glasMats:c,eigene:[r],eigeneMats:h,index:t,lack:e,bremsLicht:0,sw:[],rl:[],rotLicht:null,puls:null,laenge:4.9,breite:2,hinterachse:1.45,radstand:2.8,pos:{vornL:new w(.6,.65,2.4),vornR:new w(-.6,.65,2.4),hintenL:new w(.62,.9,-2.46),hintenR:new w(-.62,.9,-2.46),bremsMitte:null},richtung:new w(0,-.035,1).normalize(),winkel:60,farbeVorn:new _e(16054527)};return this.ausstatten(f,n),f}autoNeu(e,t,n,i,r,a){let o=new it;o.rotation.y=Math.PI,o.scale.setScalar(e.skal),o.position.y=e.dy;let l=new Map,c=[],h=[],u=[],f=[],d=xg(),m=[null,null,null],b=a?e.stufen[1]?1:e.stufen[2]?2:0:-1,p=!!this.stufe.schatten;for(let M=0;M<3;M++){let x=e.stufen[M];if(!x||a&&M!==b)continue;let E=x.scene.clone(!0);E.traverse(v=>{if(v.isMesh){let _=(Array.isArray(v.material)?v.material:[v.material]).map(R=>this.materialFuerAuto(R,v,{lack:t,index:n,mitLichtern:i,matMap:l,eigeneMats:c,leuchten:d,lackMats:u,glasMats:f}));v.material=Array.isArray(v.material)?_:_[0]}v.name&&/^Rad_[VH][LR]$/.test(v.name)&&h.push(v)}),qf(E,{schattenWerfen:p&&n===0}),ur(E,{behalten:/^Rad_|^anker_/i}),E.visible=!1,o.add(E),m[M]=E}r.add(o),_g(h);let g=Qe(this.stufe.lod|0,0,2);for(;g<3&&!m[g];)g++;if(g>2)for(g=2;g>0&&!m[g];)g--;m[g]&&(m[g].visible=!0);let y={g:r,modell:o,stufen:m,lodAktiv:g,raeder:h,vorderraeder:h.filter(M=>/^Rad_V/.test(M.name)),radRadius:e.radRadius,radWinkel:0,leuchten:d,lackMats:u,glasMats:f,eigene:[o],eigeneMats:c,index:n,lack:t,bremsLicht:0,sw:[],rl:[],rotLicht:null,puls:null,laenge:e.laenge,breite:e.breite,hinterachse:e.hinterachse,radstand:e.radstand,pos:e.pos,richtung:e.richtung,winkel:e.winkel,farbeVorn:e.farbe};return this.ausstatten(y,i),y}materialFuerAuto(e,t,n){if(!e)return e;let i=e.name||"",r=i==="blinker"||/^blinker_/i.test(t.name||""),a=e.uuid,o=null;if(r&&(o=/^blinker_[vh]l$/i.test(t.name)?"L":/^blinker_[vh]r$/i.test(t.name)?"R":/_l$/i.test(t.name)?"L":"R",a+=":"+o),n.matMap.has(a))return n.matMap.get(a);let l=e,c=n.mitLichtern;if(i==="Lack")l=this.lackMaterial(e,n.lack,n.index===0),n.lackMats.push(l);else if(i==="Glas")l=this.glasMaterial(e,n.index===0),n.glasMats.push(l);else if(i==="Chrom"||i==="Felge")l=e.clone(),l.envMap=this.envMap,l.envMapIntensity=1.3,this.envMaterialien.push(l);else if(i==="Kunststoff"&&e.map)l=e.clone(),l.color.setRGB(.42,.43,.46),l.roughness=Math.max(l.roughness,.6);else if(r)l=e.clone(),l.emissive.setRGB(1,.45,.1),l.emissiveMap=null,l.emissiveIntensity=0,n.leuchten["blinker"+o].push({m:l,art:"emissiv"});else if(i==="licht_vorn")l=e.clone(),l.emissive.getHex()===0&&l.emissive.setRGB(1,.97,.92),l.emissiveIntensity=c?dS:0;else if(i==="licht_hinten"||i==="bremslicht"){let h=i==="licht_hinten"?jo:mS;l=e.clone(),l.emissive.setRGB(...h.farbe,wt),l.emissiveMap=null;let u={m:l,art:"emissiv",normal:c?h.normal:0,brems:c?h.brems:0};l.emissiveIntensity=u.normal,n.leuchten[i==="licht_hinten"?"hinten":"brems"].push(u)}else return n.matMap.set(a,e),e;return l.name=i,n.matMap.set(a,l),n.eigeneMats.push(l),l}lackMaterial(e,t,n){let i=vg(e);i.color.setHex(t);let r=i.color.r+i.color.g+i.color.b>1.2;return i.metalness=r?.35:.75,i.roughness=r?.34:.3,i.clearcoat=1,i.clearcoatRoughness=.05,i.envMap=this.envMap,i.envMapIntensity=1.6,i.transmission=0,i.transparent=!1,i.opacity=1,i.side=n?Rt:zn,this.envMaterialien.push(i),i}glasMaterial(e,t){let n=vg(e);return n.color.setHex(395535),n.map=null,n.alphaMap=null,n.metalness=.9,n.roughness=.05,n.clearcoat=1,n.clearcoatRoughness=.03,n.envMap=this.envMap,n.envMapIntensity=2,n.transmission=0,n.transparent=!0,n.opacity=1,n.depthWrite=!0,n.side=t?Rt:zn,this.envMaterialien.push(n),n}ausstatten(e,t){let{g:n,pos:i}=e,r=new J(new ot(e.laenge+.7,e.breite+.6),new st({map:SS(),transparent:!0,depthWrite:!1,color:0,opacity:.85}));if(r.rotation.order="ZXY",r.rotation.x=-Math.PI/2,r.position.y=.012,r.renderOrder=1,n.add(r),e.eigene.push(r),e.schatten=r,!t)return;let a=e.richtung;for(let h of[i.vornL,i.vornR]){let u=new xt(.09,2.8,26,20,1,!0);u.rotateX(-Math.PI/2),u.translate(0,0,13);let f=new J(u,id(new _e().setRGB(.9,.97,1.1,wt),.07,[0,0,0],1.2,4));f.position.copy(h),f.quaternion.setFromUnitVectors(yS,a),f.frustumCulled=!1,f.visible=this.stufe.kegel!==!1,n.add(f);let d=new An(new Tn({map:this.flareT,color:Oe(2.6,2.7,3),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));d.position.copy(h).addScaledVector(a,.03);let m=new An(new Tn({map:this.streakT,color:Oe(1.6,1.8,2.4),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));m.position.copy(d.position),d.layers.enable(It),n.add(d,m),e.sw.push({fl:d,st:m,kg:f}),e.eigene.push(f,d,m)}for(let h of[i.hintenL,i.hintenR]){let u=new An(new Tn({map:this.flareT,color:Oe(...Bh),blending:Nt,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1}));u.position.copy(h),u.layers.enable(It),n.add(u);let f=new J(ES(),MS(new _e().setRGB(...gS,wt)));f.position.copy(h),f.scale.x=.24,f.frustumCulled=!1,f.layers.enable(It),n.add(f),e.rl.push({fl:u,basis:h.clone(),spur:f}),e.eigene.push(u,f)}if(e.index!==0)return;let o=(this.stufe.lichter|0)>0,l=new vn(16718348,4,12,2);l.position.set((i.hintenL.x+i.hintenR.x)/2,(i.hintenL.y+i.hintenR.y)/2,Math.min(i.hintenL.z,i.hintenR.z)-.25),l.visible=o,n.add(l),e.rotLicht=l,e.eigene.push(l);let c=new An(new Tn({map:TS(),color:Oe(2.6,.05,.025),blending:Nt,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1,opacity:0}));c.position.set(l.position.x,l.position.y,l.position.z-.15),c.visible=!1,c.renderOrder=2,n.add(c),e.puls=c,e.eigene.push(c),this.spots=[];for(let h of[i.vornL,i.vornR]){let u=new is(e.farbeVorn,bS,45,zt.degToRad(e.winkel/2),.5,2);u.position.copy(h),u.target.position.copy(h).addScaledVector(a,30),u.target.position.y-=.4,u.visible=o,u.castShadow=!1,u.shadow.mapSize.set(1024,1024),u.shadow.camera.near=.5,u.shadow.camera.far=45,u.shadow.bias=-4e-4,u.shadow.normalBias=.02,n.add(u,u.target),this.spots.push(u),e.eigene.push(u,u.target)}}umbauen(e,t,n,i){let r=e.g;for(let l of e.eigene)r.remove(l);let a=new Set(e.eigeneMats);this.envMaterialien=this.envMaterialien.filter(l=>!a.has(l));for(let l of e.eigeneMats)l&&l.dispose&&l.dispose();let o=this.autoBauen(e.lack,t,n,r,i);Object.assign(e,o)}parkendesAuto(e,t,n){let i=this.autoBauen(e,99,!1,null,!0);return i.g.position.copy(t),i.g.rotation.y=n,i.g.updateMatrixWorld(),this.geparkt.push(i),i}setzeEnv(e){this.envMap=e;for(let t of this.envMaterialien)t.envMap=e,t.needsUpdate=!0}setzeStufe(e,t){if(!e)return;this.stufe=e,this.stufeName=t||this.stufeName;let n=(e.lichter|0)>0;for(let r of this.spots)r.visible=n,r.castShadow=!1;let i=!!e.schatten;for(let r of[...this.autos,...this.geparkt]){r.rotLicht&&(r.rotLicht.visible=n);for(let{kg:a}of r.sw)a.visible=e.kegel!==!1;for(let a of r.stufen)a&&a.traverse(o=>{o.isMesh&&(o.castShadow=i&&r.index===0)})}}lodWaehlen(e,t,n){if(e.stufen.length<2)return;let i=e.lodAktiv;for(;i<2&&t>n[i+1];)i++;for(;i>0&&t<n[i]*.8;)i--;let r=Qe(this.stufe.lod|0,0,2);i<r&&(i=r);let a=i;for(;a<3&&!e.stufen[a];)a++;if(a>2)for(a=i;a>=0&&!e.stufen[a];)a--;if(!(a<0||a===e.lodAktiv)){for(let o of e.stufen)o&&(o.visible=!1);e.stufen[a].visible=!0,e.lodAktiv=a}}update(e,t,n,i,r,a,o=0){if(!this.fertig)return;let l=Math.abs(i),c=r.position,h=this.stufe,u=this.fahrt;u.beginne(o,e,t,i,this.davonfahren),this.davonfahren=0,this.vorsprung=u.vorsprung;let f=Gt(1.6,22,Qe(l/45)),d=Gt(.25,.7,Qe(l/30)),m=Math.floor(e*3)%2===0?1:.12,b=Math.floor(e*2.6)%2===0?1:.12,p=this._weiten;for(let v=0;v<3;v++)p[v]=fS[v]*(h.lodWeite||1);let g=Qe(l/20),y=this.bremse;y>.2&&this._bremseAlt<=.2?this._pulsZeit=0:this._pulsZeit>=0&&(this._pulsZeit+=t),y<.02&&(this._pulsZeit=-1),this._bremseAlt=y;let M=Math.min(t,.05);for(let v=0;v<this.autos.length;v++){let T=this.autos[v],_=u.pose(v,o,e,t,i,this._pose),R=.1*Math.sin(2*Math.PI*.42*e+v*1.9)*g+.02*Math.sin(2*Math.PI*.9*e+v),C=_.gier+.012*Math.cos(2*Math.PI*.42*e+v)*g,I=.012*Math.sin(2*Math.PI*2.3*e+v)*g,B=n+_.dz-T.hinterachse;T.g.position.set(_.x+R+T.hinterachse*Math.sin(C),I,B+T.hinterachse*Math.cos(C)),T.g.rotation.y=C;let G=_.roll-.01*Math.cos(2*Math.PI*.42*e+v)*g;T.g.rotation.z=G;let k=Math.max(_.brems,this.sanftBremse*.7,y);T.bremsLicht+=(k-T.bremsLicht)*Qe(t*8);let z=xS*y*(v===0?1:.85);T.nickV+=(Ud*Ud*(z-T.nickB)-2*vS*Ud*T.nickV)*M,T.nickB+=T.nickV*M;let N=_.nick+T.nickB;T.g.rotation.x=N,T.schatten.rotation.set(-Math.PI/2-N,0,-G);let L=v===0&&y>.3;for(let Q of["L","R"]){let Ee=L?b:_.blinker===Q?m:0;for(let Se of T.leuchten["blinker"+Q])wS(Se,Ee)}T.radWinkel+=(i+_.vz)*t/T.radRadius;let O=Qe(Math.atan(T.radstand*_.kruemmung),-gg,gg);for(let Q of T.raeder){let Ee=Q.userData.basis;Q.rotation.x=-T.radWinkel,Q.position.y=Ee.y-Ee.z*N+Ee.x*G}for(let Q of T.vorderraeder)Q.rotation.y=O;T.g.updateMatrixWorld(),this.lodWaehlen(T,T.g.position.distanceTo(c),p);let U=this._d.set(0,0,1).applyQuaternion(T.g.getWorldQuaternion(this._q));for(let{fl:Q,st:Ee,kg:Se}of T.sw){Q.getWorldPosition(this._p);let je=this._z.copy(c).sub(this._p),ne=je.length();je.normalize();let le=Math.max(0,je.dot(U)),be=zt.smoothstep(ne,2.5,16),Ge=Math.pow(le,5)*be,Y=.32+ne*.02;Q.scale.set(Y,Y,1),Q.material.opacity=Math.min(1,Ge*.95),Ee.scale.set(Y*5*(.4+le),Y*.3,1),Ee.material.opacity=Math.min(1,Ge*.5),Se.material.uniforms.staerke.value=.075*zt.smoothstep(ne,2,14),Se.material.uniforms.zeit.value=e,Se.material.uniforms.kamera.value.copy(c)}let q=1+T.bremsLicht*1.4,j=this._inv.copy(T.g.matrixWorld).invert(),oe=this._k.copy(c).applyMatrix4(j);for(let{fl:Q,basis:Ee,spur:Se}of T.rl){this._p.copy(Ee).applyMatrix4(T.g.matrixWorld);let je=this._z.copy(c).sub(this._p),ne=je.length();je.normalize();let le=Math.max(0,-je.dot(U));this._p.addScaledVector(je,Math.min(.3,ne*.5)),Q.position.copy(this._p).applyMatrix4(j);let be=(.09+ne*.0025)*(1+T.bremsLicht*.4);Q.scale.set(be,be,1),Q.material.color.setRGB(Bh[0]*q,Bh[1]*q,Bh[2]*q,wt),Q.material.opacity=Math.min(1,Math.pow(le,1.5)*.55*zt.smoothstep(ne,.6,2.5)),Se.rotation.z=Math.atan2(-(oe.x-Ee.x),oe.y-Ee.y),Se.scale.z=f,Se.material.uniforms.staerke.value=d*q}for(let Q of T.leuchten.hinten)bg(Q,T.bremsLicht);for(let Q of T.leuchten.brems)bg(Q,T.bremsLicht);if(v===0){if(T.rotLicht&&(T.rotLicht.intensity=1.6+T.bremsLicht*9),T.puls){let Q=this._pulsZeit>=0?this._pulsZeit/_S:2,Ee=Q<1?Math.min(1,Q/.12)*Math.pow(1-Q,1.6):0;T.puls.visible=Ee>.005;let Se=.8+2.4*(1-Math.pow(1-Math.min(Q,1),2.2));T.puls.scale.set(Se,Se,1),T.puls.material.opacity=Ee*.5}for(let Q of T.glasMats)Q.opacity=1-this.innenGlas*.72,Q.envMapIntensity=2*(1-this.innenGlas),Q.clearcoat=Math.max(.02,1-this.innenGlas),Q.roughness=.05+this.innenGlas*.6,Q.metalness=.9-this.innenGlas*.8}}let x=this.autos[0],E=a.uniforms.scheinwerfer.value;E[0].copy(x.pos.vornL).applyMatrix4(x.g.matrixWorld),E[1].copy(x.pos.vornR).applyMatrix4(x.g.matrixWorld),a.uniforms.scheinwerferRichtung.value.set(0,-.06,1).applyQuaternion(x.g.getWorldQuaternion(this._q)).normalize(),this._fuehrung.set(x.g.position.x,x.g.position.y,x.g.position.z-this.vorsprung)}get fuehrung(){return this._fuehrung}get zweites(){let e=null,t=-1e9,n=this.autos[0].g.position.z;for(let i=1;i<this.autos.length;i++){let r=this.autos[i],a=r.g.position.z;this.imConvoy(r)&&a<n&&a>t&&(t=a,e=r)}return e||this.autos[0]}get letztes(){let e=null,t=1e9;for(let n=1;n<this.autos.length;n++){let i=this.autos[n],r=i.g.position.z;this.imConvoy(i)&&r<t&&(t=r,e=i)}return e||this.autos[0]}imConvoy(e){let t=e.g.position,n=this.autos[0].g.position;return e.g.visible!==!1&&Math.abs(t.z-n.z)<200&&Math.abs(t.x)<30}}});var Hh,Oh,Zo,yg=lt(()=>{Tt();Hn();Hh=class{constructor(e,t,n){this.anzahl=t;let i=new Float32Array(t*2*3),r=new Float32Array(t*2),a=new Float32Array(t*2);for(let c=0;c<t;c++){let h=n()*60-30,u=n()*30,f=n()*70-35,d=n();for(let m=0;m<2;m++)i[(c*2+m)*3]=h,i[(c*2+m)*3+1]=u,i[(c*2+m)*3+2]=f,r[c*2+m]=m,a[c*2+m]=d}let o=new ht;o.setAttribute("position",new at(i,3)),o.setAttribute("ende",new at(r,1)),o.setAttribute("phase",new at(a,1)),this.uniforms={zeit:{value:0},mitte:{value:new w},staerke:{value:1},wind:{value:0},laenge:{value:.5}};let l=new Et({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
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
        }`});this.mesh=new Js(o,l),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n){this.uniforms.zeit.value=e,this.uniforms.mitte.value.copy(t),this.uniforms.staerke.value=n,this.mesh.visible=n>.01}setzeAnzahl(e){this.mesh.geometry.setDrawRange(0,Math.min(this.anzahl,e)*2)}},Oh=class{constructor(e,t,n){this.anzahl=t;let i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++)i[l*3]=n()*80-40,i[l*3+1]=n()*30,i[l*3+2]=n()*90-45,r[l]=n();let a=new ht;a.setAttribute("position",new at(i,3)),a.setAttribute("phase",new at(r,1)),this.uniforms={zeit:{value:0},mitte:{value:new w},staerke:{value:0},t:{value:ei(64)},dpr:{value:1}};let o=new Et({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
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
        }`});this.mesh=new ys(a,o),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n,i){this.uniforms.zeit.value=e,this.uniforms.mitte.value.copy(t),this.uniforms.staerke.value=n,this.uniforms.dpr.value=i,this.mesh.visible=n>.01}},Zo=class{constructor(e,t,n){let i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++){let c=6+n()*30,h=n()*Math.PI*2,u=n()*2-1;i[l*3]=Math.cos(h)*c,i[l*3+1]=u*14,i[l*3+2]=Math.sin(h)*c,r[l]=n()}let a=new ht;a.setAttribute("position",new at(i,3)),a.setAttribute("phase",new at(r,1)),this.uniforms={zeit:{value:0},staerke:{value:0},t:{value:ei(64)},dpr:{value:1}};let o=new Et({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
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
        }`});this.mesh=new ys(a,o),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}update(e,t,n,i){this.uniforms.zeit.value=e,this.uniforms.staerke.value=n,this.uniforms.dpr.value=i,this.mesh.position.copy(t),this.mesh.visible=n>.01}}});function Mg(s=.01){let e=Oo(Hi.map(h=>[h[0],h[1]])),t=Oo(Hi.map(h=>[h[0],h[2]])),n=Hi[Hi.length-1][0],i=new w,r=new w,a=[],o=oi(Ds[0].dz),l=Ds.map(h=>oi(h.x)),c=Ds.map(h=>oi(h.dz));for(let h=0;h<=n+1e-6;h+=s){e(h,i),t(h,r);let u=h*150+o(h),f=Ds.map((d,m)=>[l[m](h),1.2,h*150+c[m](h)]);a.push({g:h,p:[i.x,i.y,i.z+u],z:[r.x,r.y,r.z+u],autos:f})}return a}var Hi,Gh,Eg=lt(()=>{Tt();Qt();br();Nd();Hi=[[0,[2.9,1.5,30],[-1.6,.5,-3],42,0],[.3,[3.2,.9,14],[-1.6,.72,-2],48,0],[.5,[3.9,.86,2.5],[-1.75,.72,-5],70,-5],[.7,[3.2,1.8,-38],[-.5,.9,-64],54,2],[.85,[2,2.8,-100],[-1,.8,-126],52,0],[1,[-1,8,-168],[20,2,-200],50,0],[1.12,[-3,17,-178],[36,4,-176],50,0],[1.24,[1,25,-172],[14,2,-128],50,0],[1.3,[4,30,-168],[10,2,-100],50,0],[1.38,[7,34,-165],[-1.2,0,-55],50,0],[1.7,[-12,40,-185],[-.5,0,-60],46,0],[2,[-8.5,6,-22],[-1.75,1,0],50,0],[2.3,[-8.5,6.5,-18],[-3.2,.8,4],52,0],[2.7,[-8.5,6.5,-66],[-3.2,.8,-44],52,0],[2.88,[-4,5,-50],[-2.5,1,-10],54,0],[3,[3.6,1.4,-12],[-1.75,1,18],54,0],[3.25,[3.2,2.3,-10],[-1.75,1.5,14],56,0],[3.55,[3.4,2,-7],[-2.8,1.6,22],54,0],[3.8,[3.4,3.2,-60],[-1.75,1,-12],50,0],[3.92,[3,3,-55],[-1.75,1,-10],50,0],[4,[1.4,3.8,-30],[-1.75,1,10],50,0],[4.3,[1.5,3.2,-26],[-3.5,1.4,30],50,0],[4.7,[5,2.6,2],[-5,1.2,46],56,0],[5,[-5,6,-12],[-1.75,2,34],48,0],[5.3,[-4,14,-36],[1,24,60],46,0],[5.55,[3,3.2,2],[-11,1.6,24],54,0],[5.85,[2.2,3,-5],[-5,3.2,14],52,0],[6,[6.5,3,-16],[-4,1.5,20],52,0],[6.25,[9,7.5,-40],[-12,1.5,6],60,0],[6.55,[-6.5,3.4,-9],[-14,1.3,9],58,0],[6.72,[-6,4.2,8],[-12,1.5,30],58,0],[6.86,[-2,3.5,20],[-4,1.2,52],56,0],[7,[-1.3,1.55,-6.5],[-1.6,1,12],54,0],[7.07,[-1.48,1,.1],[-2.05,.8,2.4],70,0],[7.18,[-1.48,.99,.1],[-2.05,.78,1.9],68,0],[7.4,[-1.49,.97,.14],[-1.64,.79,.56],58,0],[7.62,[-1.49,.97,.14],[-1.64,.79,.56],58,0],[7.75,[-1.46,.98,.12],[-1.75,.86,10],60,0],[7.9,[-.9,1.25,3.4],[-.3,1.5,30],58,0],[8,[1.5,2.8,-6],[-3,2.2,40],56,0],[8.08,[-.5,2.6,4],[-10.5,4,27],56,0],[8.17,[-2.6,3,9],[-9.5,4,32],54,0],[8.26,[-1,3.2,2],[-6,3,36],54,0],[8.36,[1.5,3.4,-10],[-3,2.4,40],54,0],[8.45,[2.5,6.5,-24],[-1.75,1.5,60],50,0],[8.62,[.5,24,-46],[-1.75,8,70],48,0],[8.82,[0,54,-50],[0,64,60],48,0],[9,[0,74,-40],[0,116,50],46,0]];Gh=class{constructor(e){this.kamera=e,this.pos=Oo(Hi.map(t=>[t[0],t[1]])),this.ziel=Oo(Hi.map(t=>[t[0],t[2]])),this.fovH=oi(Hi.map(t=>[t[0],t[3]])),this.roll=oi(Hi.map(t=>[t[0],t[4]])),this.maus=new me,this.mausIst=new me,this.anker=null,this.ankerMisch=0,this._p=new w,this._z=new w,this._f=new w,this.gMax=Hi[Hi.length-1][0]}update(e,t,n,i,r){let a=this.kamera,o=Math.min(this.gMax,Math.max(0,e));if(this.pos(o,this._p),this.ziel(o,this._z),this._f.set(t.x-ni,0,t.z),n<.9&&(this._z.x=ni+(this._z.x-ni)*.55),this.anker&&this.ankerMisch>0){let h=Math.min(1,this.ankerMisch);this._f.x+=(this.anker.x-ni-this._f.x)*h,this._f.z+=(this.anker.z-this._f.z)*h}this._p.add(this._f),this._z.add(this._f),this._p.y+=.04*Math.sin(r*.9),this._p.x+=.03*Math.sin(r*.7+1);let l=ti(i,.35);this.mausIst.x+=(this.maus.x-this.mausIst.x)*l,this.mausIst.y+=(this.maus.y-this.mausIst.y)*l,a.position.copy(this._p),a.up.set(0,1,0),a.lookAt(this._z);let c=this.fovH(o);a.fov=2*Math.atan(Math.tan(zt.degToRad(c)/2)/n)*180/Math.PI,a.fov=Math.min(72,Math.max(28,a.fov)),a.updateProjectionMatrix(),a.rotateZ(zt.degToRad(this.roll(o))),a.rotateY(-this.mausIst.x*.028),a.rotateX(-this.mausIst.y*.02),a.translateX(this.mausIst.x*.18),a.translateY(-this.mausIst.y*.1),a.updateMatrixWorld()}}});var xr,Vh=lt(()=>{Tt();xr=class{constructor(e={}){this.uniforms={a:{value:new w},b:{value:new w},c:{value:new w},breite:{value:e.breite||.6},zeit:{value:0},fluss:{value:e.fluss?1:0},hoehe:{value:e.hoehe||.06},farbe:{value:e.farbe||new _e(.17,.72,.89)},staerke:{value:1},laenge:{value:60},...ha.clone(we.fog)};let t=e.additiv!==!1;this.material=new Et({uniforms:this.uniforms,transparent:!0,depthWrite:!t,side:Rt,fog:!0,blending:t?Nt:ws,vertexShader:`
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
        }`,defines:{ADDITIV:t?1:0}});let n=new ot(1,1,e.segmente||48,1);this.mesh=new J(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?5:1}setze(e,t,n){this.uniforms.a.value.copy(e),this.uniforms.b.value.copy(t),this.uniforms.c.value.copy(n),this.uniforms.laenge.value=e.distanceTo(t)+t.distanceTo(n)}}});function wg(s){let e=new Mt(s);return e.colorSpace=nt,e.anisotropy=4,e.minFilter=Jt,e}function $o(s,e,t){return s.userData.varianten=e.map((n,i)=>{if(i===0)return{map:s.material.map,skala:s.scale.clone()};let r=t(n),a={map:r.material.map,skala:r.scale.clone()};return r.material.dispose(),a}),s.userData.varianteNr=0,s}function Qo(s,e){let t=s.userData.varianten;return t?(e=Math.max(0,Math.min(t.length-1,e|0)),s.userData.varianteNr!==e&&(s.userData.varianteNr=e,s.material.map=t[e].map,s.material.needsUpdate=!0,s.userData.grundSkala=t[e].skala.clone()),t[e].skala):s.scale}function el(s,e,t={}){let n=wg(s),i=new Tn({map:n,transparent:!0,depthWrite:!1,depthTest:t.depthTest!==!1,fog:!1,opacity:1}),r=new An(i);return r.scale.set(e*s.width/s.height,e,1),r.renderOrder=10,r}function Ca(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.arcTo(e+n,t,e+n,t+r,r),s.lineTo(e+n,t+i-r),s.arcTo(e+n,t+i,e+n-r,t+i,r),s.lineTo(e+r,t+i),s.arcTo(e,t+i,e,t+i-r,r),s.lineTo(e,t+r),s.arcTo(e,t,e+r,t,r),s.closePath()}function Cn(s,e={}){let t=e.hoehe||.5,n=2,i=34*n,r=22*n,a=e.punkt?14*n:0,o=64*n,l=document.createElement("canvas").getContext("2d");l.font=`600 ${i}px ${ze}`;let h=Math.ceil(l.measureText(s).width)+r*2+(a?a+10*n:0),u=document.createElement("canvas");u.width=h+8*n,u.height=o+8*n;let f=u.getContext("2d");f.translate(4*n,4*n),Ca(f,0,0,h,o,o/2),f.fillStyle=e.hintergrund||"rgba(28,28,30,0.94)",f.fill(),f.lineWidth=2*n,f.strokeStyle=e.rand||"rgba(255,255,255,0.16)",f.stroke();let d=r;return e.punkt&&(f.fillStyle=e.punkt==="rot"?Tg:e.punkt==="gruen"?"#30d158":e.punkt==="orange"?"#ff9f0a":Sg,f.beginPath(),f.arc(d+a/2,o/2,a/2,0,Math.PI*2),f.fill(),d+=a+10*n),f.font=`600 ${i}px ${ze}`,f.fillStyle=e.farbe||"#ffffff",f.textBaseline="middle",f.fillText(s,d,o/2+1*n),el(u,t,e)}function Bd(s,e,t={}){let n=t.hoehe||.9,i=2,r=36*i,a=28*i,o=24*i,l=14*i,c=104*i,h=document.createElement("canvas").getContext("2d");h.font=`700 ${r}px ${ze}`;let u=h.measureText(s).width;h.font=`400 ${a}px ${ze}`;let f=h.measureText(e).width,d=Math.ceil(Math.max(u,f))+o*2+l+12*i,m=document.createElement("canvas");m.width=d+8*i,m.height=c+8*i;let b=m.getContext("2d");b.translate(4*i,4*i),Ca(b,0,0,d,c,22*i),b.fillStyle=t.hintergrund||"rgba(28,28,30,0.95)",b.fill(),b.lineWidth=2*i,b.strokeStyle=t.rand||"rgba(255,255,255,0.16)",b.stroke(),b.fillStyle=t.punkt==="rot"?Tg:t.punkt==="orange"?"#ff9f0a":Sg,b.beginPath(),b.arc(o+l/2,c/2,l/2,0,Math.PI*2),b.fill();let p=o+l+12*i;return b.fillStyle="#ffffff",b.textBaseline="middle",b.font=`700 ${r}px ${ze}`,b.fillText(s,p,c*.34),b.fillStyle="rgba(235,235,245,0.78)",b.font=`400 ${a}px ${ze}`,b.fillText(e,p,c*.72),el(m,n,t)}function Rg(s,e=.9){let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d");return i.beginPath(),i.arc(256/2,256/2,256/2-4,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=26,i.strokeStyle="#d0021b",i.beginPath(),i.arc(256/2,256/2,256/2-17,0,Math.PI*2),i.stroke(),i.fillStyle="#101010",i.font=`700 ${256*.42}px ${ze}`,i.textAlign="center",i.textBaseline="middle",i.fillText(String(s),256/2,256/2+256*.02),el(n,e)}function Ag(s,e,t=1.3,n=.62,i=!1){let a=document.createElement("canvas");a.width=a.height=320;let o=a.getContext("2d");o.beginPath(),o.arc(320/2,320/2,320/2-6,0,Math.PI*2),o.fillStyle="rgba(28,28,30,0.94)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(255,255,255,0.16)",o.stroke();let l=320/2-18,c=Math.PI*.75,h=Math.PI*2.25;o.lineCap="round",o.lineWidth=9,o.strokeStyle="rgba(255,255,255,0.12)",o.beginPath(),o.arc(320/2,320/2,l,c,h),o.stroke(),o.strokeStyle=i?"#ff6961":"#ffffff",o.beginPath(),o.arc(320/2,320/2,l,c,c+(h-c)*n),o.stroke(),o.fillStyle=i?"#ff6961":"#ffffff",o.font=`700 ${320*.34}px ${ze}`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(s),320/2,320/2-320*.03);let u=typeof e=="object",f=u?e.text:e;return o.fillStyle=u?"#ff6961":"rgba(235,235,245,0.75)",o.font=`${u?600:400} ${320*(u?.12:.1)}px ${ze}`,o.fillText(f,320/2,320/2+320*.2),el(a,t)}function Cg(s,e=.5){let o=document.createElement("canvas").getContext("2d");o.font=`600 68px ${ze}`;let c=Math.ceil(o.measureText(s).width)+88+88+24,h=document.createElement("canvas");h.width=c+16,h.height=144;let u=h.getContext("2d");u.translate(8,8),Ca(u,0,0,c,128,128/2),u.fillStyle="rgba(28,28,30,0.94)",u.fill(),u.lineWidth=4,u.strokeStyle="rgba(255,255,255,0.16)",u.stroke();let f=44,d=128/2-22,m=72,b=44;return u.lineWidth=2.5*2,u.strokeStyle="rgba(255,255,255,0.8)",Ca(u,f,d,m,b,10),u.stroke(),u.fillStyle="rgba(255,255,255,0.8)",u.fillRect(f+m+6,d+12,8,b-24),u.fillStyle="#ff453a",Ca(u,f+8,d+8,(m-16)*.15,b-16,6),u.fill(),u.font=`600 68px ${ze}`,u.fillStyle="#ffffff",u.textBaseline="middle",u.fillText(s,f+88+24,128/2+2),el(h,e)}function zd(s,e={}){let t=e.breite||1024,n=e.hoehe||400,i=document.createElement("canvas");i.width=t,i.height=n;let r=i.getContext("2d");Ca(r,4,4,t-8,n-8,36),r.fillStyle=e.hintergrund||"#163a7a",r.fill(),r.lineWidth=10,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textBaseline="middle";let a=n/(s.length+1);for(let c of s){if(r.font=`${c.fett?700:600} ${c.groesse||110}px ${ze}`,r.textAlign=c.ausrichtung||"left",r.fillText(c.text,c.ausrichtung==="center"?t/2:70,a),c.pfeil){r.lineWidth=22,r.lineCap="round",r.lineJoin="round",r.strokeStyle="#fff";let h=t-150,u=a;r.beginPath(),r.moveTo(h-80,u+40),r.lineTo(h,u-40),r.stroke(),r.beginPath(),r.moveTo(h-60,u-46),r.lineTo(h+4,u-44),r.lineTo(h,u+20),r.stroke()}a+=n/(s.length+1)}let o=wg(i);return new J(new ot((e.meter||4)*t/n,e.meter||4),new st({map:o,transparent:!1,fog:!0}))}function Fs(s,e){if(!s||!s.initTexture||!e)return;let t=new Set,n=i=>{if(!(!i||!i.isTexture||i.isRenderTargetTexture||t.has(i))){t.add(i);try{s.initTexture(i)}catch{}}};e.traverse(i=>{let r=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let a of r){for(let o of["map","lightMap","emissiveMap","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"])n(a[o]);if(a.uniforms)for(let o of Object.values(a.uniforms))o&&o.value&&n(o.value)}})}var ze,Sg,Tg,os,_i=lt(()=>{Tt();ze='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',Sg="#2cb8e3",Tg="#ff453a";os=(s,e)=>s.replace(/(\d+)(\s*(m|Meter|Metern|metres|meters|ft)\b)/,(t,n,i)=>e+i)});function RS(s,e=256){let t=Pg[s%Pg.length],n=document.createElement("canvas");n.width=n.height=e;let i=n.getContext("2d"),r=e,a=r/2,o=["#2f4a63","#4a3f2f","#3a4a3f","#4a2f3f"][s%4];if(i.fillStyle=o,i.fillRect(0,0,r,r),i.save(),i.beginPath(),i.arc(a,a,a,0,Math.PI*2),i.clip(),i.fillStyle=["#27c4e8","#e8c547","#ff6961","#7ad7ef"][s%4],i.beginPath(),i.ellipse(a,r*1.02,r*.42,r*.26,0,0,Math.PI*2),i.fill(),i.fillStyle=t.haut,i.fillRect(a-r*.08,r*.62,r*.16,r*.2),i.fillStyle=t.haar,t.frisur==="lang"&&(i.beginPath(),i.ellipse(a,r*.5,r*.3,r*.38,0,0,Math.PI*2),i.fill()),t.frisur==="locken")for(let l=0;l<10;l++){let c=l/10*Math.PI*2;i.beginPath(),i.arc(a+Math.cos(c)*r*.24,r*.4+Math.sin(c)*r*.22,r*.08,0,Math.PI*2),i.fill()}i.fillStyle=t.haut,i.beginPath(),i.ellipse(a,r*.44,r*.22,r*.26,0,0,Math.PI*2),i.fill(),i.fillStyle=t.haar,(t.frisur==="kurz"||t.frisur==="locken")&&(i.beginPath(),i.ellipse(a,r*.3,r*.23,r*.14,0,Math.PI,Math.PI*2),i.fill()),t.frisur==="lang"&&(i.beginPath(),i.ellipse(a,r*.28,r*.24,r*.13,0,Math.PI,Math.PI*2),i.fill()),t.frisur==="dutt"&&(i.beginPath(),i.ellipse(a,r*.29,r*.24,r*.12,0,Math.PI,Math.PI*2),i.fill(),i.beginPath(),i.arc(a,r*.16,r*.09,0,Math.PI*2),i.fill()),i.fillStyle="#1b1b1f";for(let l of[-.08,.08])i.beginPath(),i.ellipse(a+l*r,r*.45,r*.022,r*.03,0,0,Math.PI*2),i.fill(),i.fillRect(a+l*r-r*.045,r*.385,r*.09,r*.012);if(i.strokeStyle="#8a4a3a",i.lineWidth=r*.014,i.lineCap="round",i.beginPath(),i.arc(a,r*.53,r*.06,.15*Math.PI,.85*Math.PI),i.stroke(),t.extra==="brille"){i.strokeStyle="#222",i.lineWidth=r*.012;for(let l of[-.08,.08])i.beginPath(),i.arc(a+l*r,r*.45,r*.055,0,Math.PI*2),i.stroke();i.beginPath(),i.moveTo(a-r*.025,r*.45),i.lineTo(a+r*.025,r*.45),i.stroke()}if(t.extra==="bart"&&(i.fillStyle=t.haar,i.globalAlpha=.7,i.beginPath(),i.ellipse(a,r*.6,r*.17,r*.1,0,0,Math.PI),i.fill(),i.globalAlpha=1),t.extra==="ohrringe"){i.fillStyle="#ffd60a";for(let l of[-.215,.215])i.beginPath(),i.arc(a+l*r,r*.5,r*.018,0,Math.PI*2),i.fill()}return i.restore(),n}function Ig(s,e,t="#30d158",n=1.5,i=!1){let a=document.createElement("canvas");a.width=320,a.height=320*1.3;let o=a.getContext("2d"),l=320/2,c=320*.36,h=320*.4;o.beginPath(),o.arc(l,h,c+14,0,Math.PI*2),o.fillStyle="#000",o.fill(),o.beginPath(),o.arc(l,h,c+9,0,Math.PI*2),o.fillStyle=t,o.fill(),o.beginPath(),o.arc(l,h,c,0,Math.PI*2),o.fillStyle="#000",o.fill(),o.save(),o.beginPath(),o.arc(l,h,c-3,0,Math.PI*2),o.clip(),o.drawImage(RS(s,256),l-(c-3),h-(c-3),(c-3)*2,(c-3)*2),o.restore(),i&&Lg(o,320),o.font=`600 ${320*.13}px ${ze}`;let u=o.measureText(e).width,f=u+320*.14,d=320*.2,m=320*.86;((y,M,x,E,v)=>{o.beginPath(),o.moveTo(y+v,M),o.lineTo(y+x-v,M),o.arcTo(y+x,M,y+x,M+v,v),o.lineTo(y+x,M+E-v),o.arcTo(y+x,M+E,y+x-v,M+E,v),o.lineTo(y+v,M+E),o.arcTo(y,M+E,y,M+E-v,v),o.lineTo(y,M+v),o.arcTo(y,M,y+v,M,v),o.closePath()})(l-f/2,m,f,d,d/2),o.fillStyle="rgba(0,0,0,0.85)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(255,255,255,0.18)",o.stroke(),o.fillStyle="#fff",o.textAlign="center",o.textBaseline="middle",o.fillText(e,l,m+d/2+2);let p=new Mt(a);p.colorSpace=nt,p.anisotropy=4;let g=new An(new Tn({map:p,transparent:!0,depthWrite:!1,fog:!1}));return g.scale.set(n/1.3,n,1),g.renderOrder=10,g.userData.leinwand=a,g.userData.name=e,g.userData.index=s,g.userData.admin=i,g}function Lg(s,e){let t=e/2,n=e*.36,i=e*.4,r=t+n*.72,a=i+n*.72,o=e*.075;s.beginPath(),s.arc(r,a,o+3,0,Math.PI*2),s.fillStyle="#000",s.fill(),s.beginPath(),s.arc(r,a,o,0,Math.PI*2),s.fillStyle="#ffd60a",s.fill(),s.fillStyle="#1b1b1f",s.beginPath(),s.moveTo(r-o*.55,a+o*.4),s.lineTo(r-o*.62,a-o*.3),s.lineTo(r-o*.25,a+o*.02),s.lineTo(r,a-o*.55),s.lineTo(r+o*.25,a+o*.02),s.lineTo(r+o*.62,a-o*.3),s.lineTo(r+o*.55,a+o*.4),s.closePath(),s.fill()}function kg(s,e){if(s.userData.ring===e)return;s.userData.ring=e;let t=s.userData.leinwand,n=t.getContext("2d"),i=t.width,r=i/2,a=i*.36,o=i*.4;n.save(),n.beginPath(),n.arc(r,o,a+9,0,Math.PI*2),n.arc(r,o,a,0,Math.PI*2,!0),n.clip(),n.fillStyle=e,n.fillRect(0,0,i,i),n.restore(),s.userData.admin&&Lg(n,i),s.material.map.needsUpdate=!0}var Pg,Wh=lt(()=>{Tt();_i();Pg=[{haut:"#e8b89a",haar:"#3a2a1e",frisur:"lang",extra:"ohrringe"},{haut:"#c98f6b",haar:"#1c1a1a",frisur:"kurz",extra:"bart"},{haut:"#f0cdb0",haar:"#b5642a",frisur:"dutt",extra:"brille"},{haut:"#9c6a48",haar:"#111",frisur:"locken",extra:""}]});function Ns(s,e,t=64){let n=new Float32Array((t+1)*2*3),i=new Float32Array((t+1)*2*2),r=new Float32Array((t+1)*2*3),a=[];for(let l=0;l<=t;l++){let c=l/t,h=s(c),u=e(c);if(n.set([h.x,h.y,h.z],l*6),n.set([u.x,u.y,u.z],l*6+3),i.set([c,0],l*4),i.set([c,1],l*4+2),r.set([0,1,0,0,1,0],l*6),l<t){let f=l*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}let o=new ht;return o.setAttribute("position",new at(n,3)),o.setAttribute("uv",new at(i,2)),o.setAttribute("normal",new at(r,3)),o.setIndex(a),o}function yi(s,e=1024,t=256){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,e,t),i.fillStyle="#fff",i.strokeStyle="#fff",s(i,e,t);let r=new Mt(n);return r.colorSpace=Bt,r.wrapS=r.wrapT=dn,r.anisotropy=8,r}function Dg(s,e,t,n=3,i=7){let r=new Pi(s.map(([d,m])=>new w(d,0,m)),!1,"centripetal"),a=Math.max(2,Math.ceil(r.getLength()/n)),o=new Float32Array((a+1)*6),l=new Float32Array((a+1)*4),c=[],h=0,u=null;for(let d=0;d<=a;d++){let m=d/a,b=r.getPointAt(m),p=r.getTangentAt(m),g=p.z,y=-p.x;u&&(h+=b.distanceTo(u)),u=b;let M=b.x+g*e,x=b.z+y*e,E=b.x-g*e,v=b.z-y*e,T=t(b.x,b.z)+.06;if(o.set([M,T,x,E,T,v],d*6),l.set([h/i,0,h/i,1],d*4),d<a){let _=d*2;c.push(_,_+1,_+2,_+1,_+3,_+2)}}let f=new ht;return f.setAttribute("position",new at(o,3)),f.setAttribute("uv",new at(l,2)),f.setIndex(c),f.computeVertexNormals(),f}var Fg,ii,Ia=lt(()=>{Tt();Fg=(s,e,t)=>{let n=new w;return i=>n.set((1-i)*(1-i)*s[0]+2*(1-i)*i*e[0]+i*i*t[0],0,(1-i)*(1-i)*s[1]+2*(1-i)*i*e[1]+i*i*t[1]).clone()},ii=(s,e)=>t=>new w(s[0]+(e[0]-s[0])*t,0,s[1]+(e[1]-s[1])*t)});function Ng(s,e){let t=vt(1),n=new J(new ot(170,220),new Et({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:{zeit:{value:0},staerke:{value:0},mitte:{value:new w},farbe:{value:ba}},vertexShader:"varying vec3 vW; void main(){ vW = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));n.rotation.x=-Math.PI/2,n.position.y=.03,n.frustumCulled=!1,e.add(n);let i=new it;i.position.set(ni,0,70);let r=bn(Oe(.6,2.8,3.5)),a=new J(new mn(.72,28,20),r);a.position.y=3.3,i.add(a);let o=new J(new $i(.64,1.7,28).rotateX(Math.PI).translate(0,2.5,0),r);i.add(o);let l=new J(new mn(.26,16,12),bn(Oe(7,7,7.5)));l.position.set(0,3.3,-.62),i.add(l),i.add(new J(new gi(2.4,.07,8,48).rotateX(Math.PI/2).translate(0,.08,0),bn(Oe(.6,2.6,3.2))));let c=Eh(Oe(.8,3,3.6));c.rotation.x=-Math.PI/2,c.position.y=.1,i.add(c);let h=an(Oe(.6,2.4,3),5);h.position.y=3.3,i.add(h),e.add(i);let u=(s.woerter.namen||"Anna,Ben,Mia,Tom").split(",").map(g=>g.trim()),f=["#30d158","#30d158","#30d158","#30d158"];s.marker={liste:[],ringe:f,sicht:0,sprecher:-1,glut:[]};for(let g=0;g<4;g++){let y=Ig(g,u[g]||"?",f[g],2.1,g===0);y.visible=!1,s.szene.add(y),s.marker.liste.push(y);let M=an(Oe(.5,2.4,3),2.6);M.visible=!1,s.szene.add(M),s.marker.glut.push(M)}let d=[0,1,2,3].map(()=>{let g=new xr({farbe:ba,breite:.55,fluss:!0,hoehe:.06});return e.add(g.mesh),g}),m=new w,b=new w,p=new w(ni,0,t+70);return{update(g,y,M,x,E){n.material.uniforms.zeit.value=M,n.material.uniforms.staerke.value=y*dt(g,-.2,.15,.85,1.2),n.material.uniforms.mitte.value.copy(E.lead);let v=M*.45%1;c.scale.setScalar(1+v*7),c.material.opacity=(1-v)*.9*y;let T=.2*Math.sin(M*2);a.position.y=3.3+T,o.position.y=T,l.position.y=3.3+T,h.position.y=3.3+T,i.rotation.y=M*.6;let _=1-Lt(.72,.9,g);i.scale.setScalar(Math.max(.001,_)),i.visible=_>.01;let R=y*dt(g,-.1,.12,.9,1.15);s.marker.sicht=Math.max(s.marker.sicht,R);for(let C=0;C<4;C++){let I=E.autos[C];m.set(I.x,0,I.z),b.set(Gt(I.x,ni,.5)+(C-1.5)*1.6,0,Gt(I.z,p.z,.5)),d[C].setze(m,b,p),d[C].uniforms.zeit.value=M,d[C].uniforms.staerke.value=R*.9,d[C].mesh.visible=R>.01}}}}function Hd(s,e,t){let n=s.marker;if(!n)return;let i=.5+.5*Math.sin(t*6);for(let r=0;r<n.liste.length;r++){let a=n.liste[r],o=n.glut[r],l=e.autos[r];a.position.set(l.x,2.9+.08*Math.sin(t*1.6+r),l.z),ln(a,n.sicht),e.kamera&&Jf(a,e.kamera,.075,.14);let c=n.sprecher===r;kg(a,c?i>.5?"#2cb8e3":"#8fe0f5":n.ringe[r]),o.position.set(l.x,3.15,l.z-.01),o.scale.setScalar(2.2+i*.8),ln(o,c?n.sicht*(.45+.35*i):0)}}var Ug=lt(()=>{Tt();Vh();_i();Hn();qn();br();Wh();Ia();Qt();Xn()});function Bg(s,e){let t=vt(2),n=vh(128,.88,.94),i=[0,1,2,3].map(()=>{let r=new J(new ot(1,1),new st({map:n,color:Oe(.45,2,2.6),blending:Nt,depthWrite:!1,transparent:!0,fog:!1,side:Rt}));return e.add(r),r});return{update(r,a,o,l,c){let h=a*dt(r,-.15,.1,.8,.95);s.marker.sicht=Math.max(s.marker.sicht,h);let u=r<.5?0:1;h>.3&&(s.marker.sprecher=u);let f=c.autos[u];for(let d=0;d<i.length;d++){let m=(o*.45+d%2*.5)%1,b=d<2?-1:1,p=i[d];p.position.set(f.x,1.25,f.z+b*(1.2+m*14)-t),p.scale.setScalar(1.2+m*3),p.material.opacity=(1-m)*m*1.1*h}}}}var zg=lt(()=>{Tt();Vh();_i();Hn();qn();br();Wh();Ia();Qt();Xn()});function IS(s,e,t){let n=new Es,i=-s/2,r=-e/2;return n.moveTo(i+t,r),n.lineTo(i+s-t,r),n.absarc(i+s-t,r+t,t,-Math.PI/2,0,!1),n.lineTo(i+s,r+e-t),n.absarc(i+s-t,r+e-t,t,0,Math.PI/2,!1),n.lineTo(i+t,r+e),n.absarc(i+t,r+e-t,t,Math.PI/2,Math.PI,!1),n.lineTo(i,r+t),n.absarc(i+t,r+t,t,Math.PI,Math.PI*1.5,!1),n.closePath(),n}function qh(s,e,t,n=.03,i=.012){let r=new $s(IS(s,e,n),{depth:t-2*i,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:6});return r.rotateX(-Math.PI/2),r.translate(0,i,0),r.computeVertexNormals(),r}function Og(s=.009){let e=new it;return e.add(new J(new xt(s,s,.005,10).rotateX(Math.PI/2),La)),e.add(new J(new Ve(s*1.4,s*.4,.002).translate(0,0,.003),tl)),e}function LS(){let s=document.createElement("canvas");s.width=256,s.height=64;let e=s.getContext("2d");e.fillStyle="#e8e8e4",e.fillRect(0,0,256,64),e.fillStyle="#c4161c";for(let n=-64;n<256;n+=64)e.beginPath(),e.moveTo(n,64),e.lineTo(n+32,64),e.lineTo(n+64,0),e.lineTo(n+32,0),e.closePath(),e.fill();let t=new Mt(s);return t.colorSpace=nt,t.wrapS=t.wrapT=Sn,t.anisotropy=4,t}function kS(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#f2f2ee",t.fillRect(0,0,256,256),t.lineWidth=14,t.strokeStyle="#17181c",t.strokeRect(7,7,242,242),t.fillStyle="#17181c",t.beginPath(),t.roundRect(48,92,160,100,14),t.fill(),t.beginPath(),t.roundRect(96,70,64,30,8),t.fill(),t.fillStyle="#f2f2ee",t.beginPath(),t.arc(128,142,34,0,Math.PI*2),t.fill(),t.fillStyle="#17181c",t.beginPath(),t.arc(128,142,22,0,Math.PI*2),t.fill(),t.fillStyle="#f2f2ee",t.beginPath(),t.arc(136,134,7,0,Math.PI*2),t.fill();let n=new Mt(e);return n.colorSpace=nt,n.anisotropy=4,n}function DS(s){let e=new it,t=.42,n=2.55,i=.038,r=n+t+.08;e.add(new J(new xt(i,i,r,14).translate(0,r/2,.07),Od)),e.add(new J(new xt(i+.02,i+.03,.3,14).translate(0,.15,.07),Xh)),e.add(new J(new mn(i+.004,12,8,0,Math.PI*2,0,Math.PI/2).translate(0,r,.07),Od));let a=Rg(s,1),o=new st({map:a.material.map});a.material.dispose(),e.add(new J(new xt(t,t,.014,48).rotateX(Math.PI/2).translate(0,n,0),Od));let l=new J(new Ci(t-.004,48),o);l.rotation.y=Math.PI,l.position.set(0,n,-.0075),e.add(l);let c=new J(new Ci(t-.004,48),new Le({color:9343641,roughness:.5,metalness:.6}));c.position.set(0,n,.0075),e.add(c);for(let h of[-.25,.25]){e.add(new J(new gi(i+.012,.011,8,24).rotateX(Math.PI/2).translate(0,n+h,.07),La)),e.add(new J(new Ve(.08,.04,.06).translate(0,n+h,.035),La));let u=Og(.007);u.position.set(.05,n+h,.072),u.rotation.y=Math.PI/2,e.add(u)}return e.traverse(h=>{h.isMesh&&(h.frustumCulled=!1,h.layers.enable(It))}),e}function FS(){let s=new it,e=.2,t=.44,n=.32,i=2,r=.52,a=.4,o=.78,l=e+i;s.add(new J(qh(.76,.6,e,.04,.015),AS));let c=new J(qh(t,n,i+.02,.05),Xh);c.position.y=e-.01,s.add(c);let h=new J(qh(r,a,o,.05),Xh);h.position.y=l,s.add(h);let u=new J(qh(r+.03,a+.03,.05,.06,.01),tl);u.position.y=l+o-.005,s.add(u);let f=a/2+.002,d=(T,_,R,C)=>{let I=new J(new Ve(T,_,.02),C);return I.position.set(0,R,f-.004),s.add(I),I},m=(T,_,R)=>{let C=new J(new Ve(T+.03,_+.03,.012),tl);C.position.set(0,R,f-.006),s.add(C)};m(.3,.17,l+o-.17);let b=d(.3,.17,l+o-.17,CS);m(.24,.24,l+o*.5),d(.24,.24,l+o*.5,Hg);let p=new J(new mn(.052,24,16,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),PS);p.position.set(0,l+o*.5,f-.01),s.add(p),s.add(new J(new gi(.06,.008,8,32).translate(0,l+o*.5,f+.004),La)),m(.3,.1,l+.1),d(.3,.1,l+.1,Hg);for(let[T,_]of[[-.22,l+.05],[.22,l+.05],[-.22,l+o-.05],[.22,l+o-.05]]){let R=Og();R.position.set(T,_,f+.002),s.add(R)}let g=new J(new mn(.014,10,8),bn(Oe(3,.2,.15)));g.position.set(.2,l+o*.5,f+.01),s.add(g);let y=-n/2-.002,M=new J(new Ve(.3,1.2,.012),tl);M.position.set(0,e+1,y),s.add(M);let x=new J(new Ve(.27,1.17,.012),Xh);x.position.set(0,e+1,y-.004),s.add(x),s.add(new J(new xt(.014,.014,.01,12).rotateX(Math.PI/2).translate(.09,e+1,y-.012),La));for(let T of[e+.5,e+1.5])s.add(new J(new Ve(.02,.08,.02).translate(-.145,T,y-.006),La));let E=new J(new Ve(t+.012,.26,n+.012),new Le({map:LS(),roughness:.55,metalness:.1}));E.position.y=e+.42,s.add(E);let v=new J(new ot(.26,.26),new st({map:kS()}));return v.position.set(0,e+i-.3,n/2+.004),s.add(v),s.add(new J(new Ve(.28,.28,.006).translate(0,e+i-.3,n/2+.001),tl)),s.traverse(T=>{T.isMesh&&(T.frustumCulled=!1,T.layers.enable(It),T.castShadow=!0)}),{g:s,led:g,linse:p,blitzFenster:b,kopfY:l,kopfH:o}}function Gg(s,e){let t=vt(3),n=s.woerter,i=DS(70);i.position.set(-5.6,0,-30),e.add(i);let r=new it;r.position.set(-5.4,0,40),r.rotation.y=Math.PI-.3;let a=FS();r.add(a.g);let o=new J(new ot(4.2,4.2),new st({map:ei(128),color:Oe(2.2,.2,.14),blending:Nt,depthWrite:!1,transparent:!0,fog:!1,opacity:0}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,.6),o.layers.enable(It),r.add(o);let l=new J(new gi(1.5,.035,8,48).rotateX(Math.PI/2).translate(0,.05,.6),bn(Oe(2.2,.2,.14)));r.add(l);let c=Eh(Oe(3,.3,.22));c.rotation.x=-Math.PI/2,c.position.set(0,.07,.6),r.add(c);let h=an(Oe(1.2,1.3,1.6),.26);h.position.set(.02,a.kopfY+a.kopfH*.5+.02,.26),r.add(h);let u=an(Oe(3,.3,.2),.5);u.position.copy(a.led.position).z+=.03,r.add(u);let f=new St;f.name="anker_licht_blitzer",f.userData={typ:"punkt",farbe:"#ff2a1a",reichweite:6,staerke:6,hinweis:"roter Halo am Blitzer, dezent"},f.position.set(0,1.1,.7),r.add(f);let d=null,m=!1,b=(s.welt&&s.welt.stufe?s.welt.stufe.lichter|0:6)>0,p=()=>{if(m)return!0;let O=s.umgebung&&s.umgebung.lichtPool;if(!O||typeof O.anmelden!="function")return!1;try{O.anmelden(f,{prioritaet:1}),m=!0}catch{return!1}return d&&(r.remove(d),d=null),!0};e.add(r);let g=new Map,y=null,M=(O,U,q,j)=>{let oe=`${O}|${typeof U=="object"?U.text:U}|${q}`;if(!g.has(oe)){let Q=Ag(O,U,1.6,j,q);Q.visible=!1,e.add(Q),g.set(oe,Q)}return g.get(oe)},x=n.vorschau||"70 in 400 m",E=Cn(x,{punkt:"cyan",hoehe:.6});e.add(E),$o(E,[x,os(x,300),os(x,200)],O=>Cn(O,{punkt:"cyan",hoehe:.6}));let v=n.blitzer||"Blitzer \xB7 800 m",T=Bd(v,n.blitzerTempo||"Tempo 70",{punkt:"rot",hoehe:1});e.add(T),$o(T,[v,os(v,600),os(v,400)],O=>Bd(O,n.blitzerTempo||"Tempo 70",{punkt:"rot",hoehe:1}));let _=n.radar||"800 m",R=Cn(n.gefahr||"Gefahr gemeldet",{punkt:"rot",hoehe:.8});R.position.set(-5.2,2.4,95),e.add(R);let C=an(Oe(3,.4,.25),6);C.position.set(-3.5,.3,95),e.add(C);let I=Cn(n.vollbremsung||"Vollbremsung im Convoy",{punkt:"rot",hoehe:.6});e.add(I);let B=Cg(n.akku||"15 %",.6);e.add(B);for(let O of[I,B])O.material.depthTest=!1,O.renderOrder=20;let G=new w,k=new w,z=E.scale.clone(),N=T.scale.clone(),L=new w(1.6,1.6,1);return{eigeneModelle:!0,setzeBlitzer(){},async ladeModelle(O,U){U&&U.stufe&&(b=(U.stufe.lichter|0)>0),!p()&&!d&&(d=new vn(16722458,0,6,2),d.position.copy(f.position),r.add(d))},setzeStufe(O){b=(O.lichter|0)>0},update(O,U,q,j,oe){let Q=oe.lead,Ee=q*.72%1<.12?1:.18,Se=.75+.25*Math.sin(q*2.2);a.led.material.color.setRGB(1.5+Ee*4.5,.15,.1,wt),u.material.opacity=(.15+.7*Ee)*U,o.material.opacity=.32*Se*U,l.material.color.setRGB(1.6+Se*1.2,.16,.12,wt);let je=q*.45%1;c.scale.setScalar(1+je*4),c.material.opacity=(1-je)*.4*U,m||p(),d&&(d.intensity=b?(1.6+1.2*Ee)*U:0),a.linse.getWorldPosition(k),G.copy(oe.kamera.position).sub(k);let ne=G.length();G.normalize();let le=Math.max(0,-G.z*.95+G.x*.3);h.material.opacity=Math.pow(le,3)*zt.smoothstep(ne,3,12)*(1-zt.smoothstep(ne,40,70))*U;let be=n.einheit||"km/h",Ge=!1,Y=78,fe=.68;if(O<.3)Y=78;else if(O<.42)Y=78,Ge=!0;else{let et=Lt(.45,.6,O);Y=Math.round(Gt(78,68,et)),Ge=Y>70,O<.75&&(be={text:os(_,O<.5?800:O<.6?600:400)}),fe=Gt(.68,.58,et)}let ke=U*dt(O,-.1,.06,.74,.84),V=M(Y,be,Ge,fe);y&&y!==V&&(y.visible=!1),y=V;let ee=oe.kamera.aspect<.9,ce=ee?1.7:0,he=ee?.7:1;V.scale.copy(L).multiplyScalar(he),V.position.set(Q.x+ce,(ee?2.9:3.2)+.05*Math.sin(q*1.7),Q.z-t),ln(V,ke);let de=U*dt(O,-.1,.06,.16,.22);E.scale.copy(Qo(E,O<.02?0:O<.1?1:2)).multiplyScalar(he),E.position.set(Q.x+ce,ee?3.9:4.4,Q.z-t),ln(E,de);let Re=U*dt(O,.4,.46,.68,.76);T.scale.copy(Qo(T,O<.5?0:O<.6?1:2)).multiplyScalar(he),T.position.set(Q.x+ce,ee?4.1:4.7,Q.z-t),ln(T,Re),T.visible?mr(T,oe.kamera,.9,.72,[E,V]):E.visible?mr(E,oe.kamera,.9,.72,[V]):mr(V,oe.kamera),s.convoy.sanftBremse=Math.max(s.convoy.sanftBremse,U*dt(O,.43,.48,.58,.68));let De=U*dt(O,.3,.42,.7,.8);ln(R,De),C.material.opacity=De*(.5+.5*Se);let Ue=dt(O,.78,.83,.9,.97)*U;s.convoy.bremse=Math.max(s.convoy.bremse,Ue);let Ye=s.convoy.zweites.g.position;I.position.set(Ye.x,2.7+.05*Math.sin(q*2.1),Ye.z-t),ln(I,U*dt(O,.8,.84,.95,1.05));let H=s.convoy.letztes.g.position;B.position.set(H.x,2.6+.05*Math.sin(q*1.9),H.z-t),ln(B,U*dt(O,.84,.9,1.1,1.3))}}}var Od,Xh,tl,AS,La,Hg,CS,PS,Vg=lt(()=>{Tt();_i();Hn();qn();Qt();Xn();Od=new Le({color:5922662,roughness:.42,metalness:.7}),Xh=new Le({color:3882821,roughness:.5,metalness:.55}),tl=new Le({color:1382170,roughness:.6,metalness:.3}),AS=new Le({color:3816511,roughness:.95,metalness:0}),La=new Le({color:10133158,roughness:.35,metalness:.9}),Hg=new $t({color:461068,roughness:.06,metalness:.2,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2}),CS=new $t({color:1705481,roughness:.08,metalness:.1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:2}),PS=new $t({color:263434,roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:0,envMapIntensity:3,ior:1.6})});function Wg(s,e){let t=vt(4),n=s.woerter,i=ii([-3.62,t-70],[-3.62,t+30]),r=L=>L<.3?ii([-3.62,t-70],[-7.6,t-40])(L/.3):ii([-7.6,t-40],[-7.6,t+30])((L-.3)/.7),a=Fg([-5.85,t-5],[-5.85,t+58],[-13.5,t+95]),o=L=>O=>{let U=a(O),j=a(Math.min(1,O+.01)).clone().sub(U).normalize(),oe=new w(j.z,0,-j.x);return U.add(oe.multiplyScalar(L*1.75))},l=o(-1),c=o(1),h=l,u=c,f=L=>L<.22?ii([-4.75,t+30],[-3.62,t+38])(L/.22):ii([-3.62,t+38],[-3.62,t+66])((L-.22)/.78),d=L=>c(.3+.37*L),m=yi((L,O,U)=>{L.lineWidth=6,L.beginPath(),L.moveTo(0,U-5),L.lineTo(O,U-5),L.stroke()}),b=yi((L,O,U)=>{L.lineWidth=6,L.beginPath(),L.moveTo(0,5),L.lineTo(O,5),L.stroke(),L.beginPath(),L.moveTo(O*.3,U-5),L.lineTo(O,U-5),L.stroke(),L.setLineDash([24,24]),L.beginPath(),L.moveTo(0,U-5),L.lineTo(O*.3,U-5),L.stroke()}),p=yi((L,O,U)=>{L.lineWidth=6,L.beginPath(),L.moveTo(0,5),L.lineTo(O,5),L.moveTo(0,U-5),L.lineTo(O,U-5),L.stroke(),L.lineWidth=7;for(let q=-8;q<40;q++)L.beginPath(),L.moveTo(q*40,U),L.lineTo(q*40+120,0),L.stroke()}),g=[[Ns(i,r,48),m,.012],[Ns(h,u,64),b,.014],[Ns(f,d,40),p,.013]].map(([L,O,U])=>{let q=new J(L,s.strasse.zusatzMaterial(O));return q.position.y=U,q.frustumCulled=!1,q.name="fahrbahn:ausfahrt",s.szene.add(q),q});s.strasse.uniforms.randAus.value.set(t-70,t+62);{let L=yi((q,j,oe)=>{q.lineWidth=5,q.beginPath(),q.moveTo(0,5),q.lineTo(j,5),q.moveTo(0,oe-5),q.lineTo(j,oe-5),q.stroke()}),O=Dg(D0.map(([q,j])=>[q,j-t]),3.4,(q,j)=>Vo(q,j+t),3,7),U=new J(O,s.strasse.zusatzMaterial(L));U.frustumCulled=!1,U.name="fahrbahn:landstrasse",e.add(U),g.push(U)}let y="#1a4f9c",M=new Le({color:1777187,roughness:.7,metalness:.3}),x=(L,O,U,q,j)=>(L.position.set(O,U,q),L.rotation.y=j,L);{let O=new it;O.position.z=-64;let U=-9.6,q=6.6,j=(U+q)/2,oe=7.2;for(let Se of[U,q]){let je=Ls(Se,t+-64);O.add(new J(new Ve(.42,oe+.2-je,.42).translate(Se,(oe+.2+je)/2,0),on)),O.add(new J(new Ve(.95,.18,.95).translate(Se,je+.09,0),on))}O.add(new J(new Ve(q-U+.5,.55,.5).translate(j,oe,0),on));let Q=zd([{text:n.schildOben||"A1",groesse:150,fett:!0},{text:(n.schildUnten||"Ausfahrt 12")+" \xB7 300 m",groesse:104,pfeil:!0}],{breite:1400,hoehe:400,meter:1.9,hintergrund:y});x(Q,-3,oe-1.45,-.3,Math.PI);let Ee=new J(new Ve(6.8,2,.08).translate(-3,oe-1.45,-.24),M);O.add(Ee,Q);for(let Se of[-5.4,-.6])O.add(new J(new Ve(.12,.72,.12).translate(Se,oe-.62,-.12),on));e.add(O)}{let U=new it;U.position.set(-11.5,Ls(-11.5,t+-8),-8),U.rotation.y=-.12;for(let j of[-1.6,1.6])U.add(new J(new xt(.06,.07,3.6,10).translate(j,1.8,.16),on));let q=zd([{text:n.schildOben||"A1",groesse:150,fett:!0},{text:n.schildUnten||"Ausfahrt 12",groesse:104,pfeil:!0}],{breite:1400,hoehe:400,meter:1.5,hintergrund:y});x(q,0,3,-.07,Math.PI),U.add(q,new J(new Ve(5.3,1.6,.08).translate(0,3,0),M)),e.add(U)}let E=new xr({farbe:ba,breite:.7,fluss:!0,hoehe:.08,segmente:48});s.szene.add(E.mesh);let v=new xr({farbe:ba,breite:.7,fluss:!0,hoehe:.09,segmente:64});s.szene.add(v.mesh);let T=new w,_=new w(-3.4,0,t-42),R=new w(-5.85,0,t-5);v.setze(new w(-5.85,0,t-5),new w(-5.85,0,t+58),new w(-13.5,0,t+95));let C=new Es;C.moveTo(0,1.4),C.lineTo(1.2,.2),C.lineTo(.55,.2),C.lineTo(.55,-1.4),C.lineTo(-.55,-1.4),C.lineTo(-.55,.2),C.lineTo(-1.2,.2),C.closePath();let I=new J(new $s(C,{depth:.22,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:2}),bn(Oe(.25,1.15,1.45))),B=new Ot().setFromAxisAngle(new w(1,0,0),-Math.PI/2);I.quaternion.setFromAxisAngle(C0,.55).multiply(B),I.position.set(-9,2.4,70),I.layers.enable(It),e.add(I);let G=an(Oe(.3,1.3,1.7),1.3);G.position.copy(I.position),e.add(G);let k=n.ansage||"In 300 Metern rechts abbiegen",z=Cn(k,{punkt:"cyan",hoehe:.6});e.add(z),$o(z,[k,os(k,200),os(k,100)],L=>Cn(L,{punkt:"cyan",hoehe:.6})),z.material.depthTest=!1,z.renderOrder=20;let N=Cn(n.landstrasse||"Ohne Autobahn",{punkt:"cyan",hoehe:.85});return N.position.set(-13.8,2.6,92),e.add(N),{update(L,O,U,q,j){let oe=j.lead,Q=O*dt(L,-.15,.1,.92,1.15);T.set(oe.x,0,oe.z+2.6),E.setze(T,_,R);for(let Se of[E,v])Se.uniforms.zeit.value=U,Se.uniforms.staerke.value=Q,Se.mesh.visible=Q>.01;E.mesh.visible=Q>.01&&oe.z<t-8;for(let Se of g)Se.visible=O>.01;I.position.y=2.4+.18*Math.sin(U*1.8),G.position.y=I.position.y,G.material.opacity=.6*O;let Ee=O*dt(L,-.05,.06,.3,.4);Qo(z,L<.1?0:L<.22?1:2),z.position.set(oe.x,2.6+.06*Math.sin(U*2),oe.z-t),ln(z,Ee),mr(z,j.kamera),ln(N,O*dt(L,.45,.58,.95,1.1)),Ui(N,j.kamera)}}}var qg=lt(()=>{Tt();Vh();_i();Hn();qn();br();Wh();Ia();Qt();Ma();Xn();Go()});function Kg(s,e,t,n,i,r,a){let o=t-e+1,l=new Float32Array(o*6),c=new Float32Array(o*4),h=[],u=s[e].s,f=Math.max(.001,s[t].s-u);for(let m=0;m<o;m++){let b=s[e+m],p=n(e+m),g=i(e+m),y=r?b.s/r:(b.s-u)/f;if(l.set([b.x+b.nx*p,g,b.z+b.nz*p,b.x-b.nx*p,g,b.z-b.nz*p],m*6),c.set([y,0,y,1],m*4),m<o-1){let M=m*2;h.push(M,M+1,M+2,M+1,M+3,M+2)}}let d=new ht;return d.setAttribute("position",new at(l,3)),d.setAttribute("uv",new at(c,2)),d.setIndex(h),a?d.computeVertexNormals():d.setAttribute("normal",new at(new Float32Array(o*6).map((m,b)=>b%3===1?1:0),3)),d}function HS(s){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#e8edf5",t.fillRect(0,0,256,256);for(let i=0;i<110;i++){let r=s()*256,a=s()*256,o=6+s()*28,l=s()<.5;for(let c of[-256,0,256])for(let h of[-256,0,256]){let u=r+c,f=a+h;if(u+o<0||u-o>256||f+o<0||f-o>256)continue;let d=t.createRadialGradient(u,f,0,u,f,o);d.addColorStop(0,l?"rgba(150,168,200,0.34)":"rgba(255,255,255,0.55)"),d.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=d,t.fillRect(u-o,f-o,2*o,2*o)}}let n=new Mt(e);return n.colorSpace=nt,n.wrapS=n.wrapT=Sn,n.anisotropy=4,n}function OS(s){let e=document.createElement("canvas");e.width=512,e.height=768;let t=e.getContext("2d");t.beginPath(),t.arc(256,250,240,0,Math.PI*2),t.fillStyle="#d4101a",t.fill(),t.beginPath(),t.arc(256,250,176,0,Math.PI*2),t.fillStyle="#f4f4f2",t.fill(),((a,o,l,c,h)=>{t.beginPath(),t.moveTo(a+h,o),t.arcTo(a+l,o,a+l,o+c,h),t.arcTo(a+l,o+c,a,o+c,h),t.arcTo(a,o+c,a,o,h),t.arcTo(a,o,a+l,o,h),t.closePath()})(14,520,484,220,26),t.fillStyle="#f4f4f2",t.fill(),t.lineWidth=12,t.strokeStyle="#17171a",t.stroke();let i=84;for(t.font=`700 ${i}px ${ze}`;t.measureText(s).width>420&&i>40;)i-=4,t.font=`700 ${i}px ${ze}`;t.fillStyle="#17171a",t.textAlign="center",t.textBaseline="middle",t.fillText(s,256,632);let r=new Mt(e);return r.colorSpace=nt,r.anisotropy=4,r.minFilter=Jt,r}function GS(s){let n=document.createElement("canvas");n.width=1100,n.height=750;let i=n.getContext("2d");((c,h,u,f,d)=>{i.beginPath(),i.moveTo(c+d,h),i.arcTo(c+u,h,c+u,h+f,d),i.arcTo(c+u,h+f,c,h+f,d),i.arcTo(c,h+f,c,h,d),i.arcTo(c,h,c+u,h,d),i.closePath()})(4,4,1092,742,40),i.fillStyle="#0d1116",i.fill(),i.lineWidth=6,i.strokeStyle="rgba(44,184,227,0.75)",i.stroke(),i.fillStyle="#ffffff",i.textBaseline="middle",i.textAlign="left";let a=58;for(i.font=`700 ${a}px ${ze}`;i.measureText(s).width>700&&a>30;)a-=3,i.font=`700 ${a}px ${ze}`;i.fillText(s,54,76),i.font=`700 44px ${ze}`,i.textAlign="right",i.fillStyle="#ffffff",i.fillText("LIVE",1046,76);let o=i.measureText("LIVE").width;i.beginPath(),i.arc(1046-o-30,76,14,0,Math.PI*2),i.fillStyle="#ff453a",i.fill();let l=new Mt(n);return l.colorSpace=nt,l.anisotropy=8,l.minFilter=Jt,l}function jg(s,e){let t=vt(5),n=s.woerter,i=new Pi(NS.map(([V,ee])=>new w(V,0,ee)),!1,"centripetal"),r=i.getLength(),a=1.5,o=Math.ceil(r/a),l=[];for(let V=0;V<=o;V++){let ee=V/o,ce=i.getPointAt(ee),he=i.getTangentAt(ee);l.push({x:ce.x,z:ce.z,tx:he.x,tz:he.z,nx:he.z,nz:-he.x,s:ee*r})}let c=0;l.forEach((V,ee)=>{Math.abs(V.z-Xg)<Math.abs(l[c].z-Xg)&&(c=ee)});let h=l[c].s,u=(V,ee)=>Vo(V,ee+t),f=l.map(V=>Math.max(u(V.x,V.z),u(V.x+V.nx*3.4,V.z+V.nz*3.4),u(V.x-V.nx*3.4,V.z-V.nz*3.4))+.12),d=new Float32Array(o+1).fill(.012);for(let V=o;V>=c;V--){let ee=f[V]+BS*Lt(10,70,l[V].s-h);d[V]=Math.max(.012,ee,V<o?d[V+1]-US*a:-1e9)}for(let V=c+1;V<=o;V++)d[V]=Math.max(d[V],d[V-1]);let m=new it;e.add(m);let b=yi((V,ee,ce)=>{let he=V.createLinearGradient(0,0,ee,0);he.addColorStop(0,"#000"),he.addColorStop(.1,"#000"),he.addColorStop(.26,"#fff"),he.addColorStop(1,"#fff"),V.strokeStyle=he,V.lineWidth=5,V.beginPath(),V.moveTo(0,6),V.lineTo(ee,6),V.moveTo(0,ce-6),V.lineTo(ee,ce-6),V.stroke()}),p=new J(Kg(l,0,c,V=>vr+.9*Math.pow(Math.max(0,1-l[V].s/9),2),()=>.012,0,!1),s.strasse.zusatzMaterial(b));p.frustumCulled=!1,m.add(p);let g=s.rnd||Math.random,y=new Le({color:zS,roughness:.92,metalness:0,map:HS(g)}),M=new J(Kg(l,c,o,()=>vr+.4,V=>d[V],7,!0),y);M.frustumCulled=!1,m.add(M);let x=V=>{let ee=o-c+1,ce=new Float32Array(ee*6),he=new Float32Array(ee*4),de=[];for(let Ue=0;Ue<ee;Ue++){let Ye=c+Ue,H=l[Ye],et=vr+.4,rt=H.nx*V,P=H.nz*V,S=u(H.x+rt*(et+1.5),H.z+P*(et+1.5)),F=Math.max(0,d[Ye]-S),D=Qe(1.4+F*1.5,1.4,11),W=H.x+rt*(et+D),se=H.z+P*(et+D);if(ce.set([H.x+rt*et,d[Ye],H.z+P*et,W,u(W,se)-.15,se],Ue*6),he.set([H.s/7,0,H.s/7,1],Ue*4),Ue<ee-1){let ae=Ue*2;V>0?de.push(ae,ae+2,ae+1,ae+1,ae+2,ae+3):de.push(ae,ae+1,ae+2,ae+1,ae+3,ae+2)}}let Re=new ht;Re.setAttribute("position",new at(ce,3)),Re.setAttribute("uv",new at(he,2)),Re.setIndex(de),Re.computeVertexNormals();let De=new J(Re,y);De.frustumCulled=!1,m.add(De)};x(1),x(-1);{let ee=[[0,1.9],[.9,1.5],[-.9,1.5]],ce=new Kt(new bo(1,3),y,22+ee.length),he=new Pe,de=new Ot,Re=new w,De=new w,Ue=new w(0,1,0),Ye=(et,rt,P,S,F,D)=>{Re.set(rt,P,S),de.setFromAxisAngle(Ue,g()*Math.PI*2),De.set(F*(1+g()*.7),F*D,F*(1+g()*.7)),ce.setMatrixAt(et,he.compose(Re,de,De))};for(let et=0;et<22;et++){let rt=Math.min(o,c+1+Math.floor(g()*(o-c))),P=l[rt],S=g()<.5?1:-1,F=vr+.4+g()*2.2,D=.3+g()*.6;Ye(et,P.x+P.nx*S*F,d[rt]-D*.15,P.z+P.nz*S*F,D*1.3,.32)}let H=l[o];ee.forEach(([et,rt],P)=>Ye(22+P,H.x+H.nx*et*1.6,d[o]+.1,H.z+H.nz*et*1.6,rt,.55)),ce.frustumCulled=!1,m.add(ce)}let E=l[c],v=new it;v.position.set(E.x,.012,E.z),v.rotation.y=Math.atan2(E.tx,E.tz);let T=(()=>{let V=document.createElement("canvas");V.width=640,V.height=32;let ee=V.getContext("2d");for(let he=0;he<10;he++)ee.fillStyle=he%2?"#f2f2f2":"#c4161c",ee.fillRect(he*64,0,64,32);let ce=new Mt(V);return ce.colorSpace=nt,ce.anisotropy=4,ce})(),_=new Le({color:4869458,roughness:.9}),R=new Le({color:11866907,roughness:.55}),C=new Le({color:15329766,roughness:.6}),I=-(vr+.75),B=vr+.6;v.add(new J(new Ve(.95,.22,.85).translate(I,.11,0),_)),v.add(new J(new Ve(.46,1.2,.4).translate(I,.82,0),R)),v.add(new J(new Ve(.48,.16,.42).translate(I,.96,0),C)),v.add(new J(new Ve(.34,.1,.3).translate(I,1.47,0),on)),v.add(new J(new Ve(.6,.15,.6).translate(B,.075,0),_)),v.add(new J(new Ve(.14,1,.14).translate(B,.65,0),on));for(let V of[-.09,.09])v.add(new J(new Ve(.1,.16,.03).translate(B,1.2,V),on));let G=B-I+.2,k=new J(new Ve(G,.13,.07),new Le({map:T,roughness:.5}));k.position.set((B+I)/2+.1,1.1,0),v.add(k);let z=an(Oe(3,.25,.2),.55);z.position.set(I,1.62,0),v.add(z);let N=new J(new mn(.05,10,8),new st({color:Oe(4,.3,.2)}));N.position.copy(z.position),v.add(N),m.add(v);let L=OS(n.wintersperre||"Wintersperre"),O=new st({map:L,transparent:!0,alphaTest:.5,color:14211288}),U=new it;U.position.set(-(vr+1.35),0,-2),U.add(new J(new xt(.05,.06,3.15,10).translate(0,1.575,0),on));for(let[V,ee]of[[-.07,Math.PI],[.07,0]]){let ce=new J(new ot(1,1.5),O);ce.position.set(0,2.25,V),ce.rotation.y=ee,U.add(ce)}U.add(new J(new Ve(.06,1.55,.1).translate(0,2.25,0),on)),U.rotation.y=-.35,v.add(U);let q=Cn(n.wintersperre||"Wintersperre",{punkt:"orange",hoehe:.8});q.position.set(E.x-.6,3.6,E.z),e.add(q);let j=new it;j.position.set(-11.2,0,72),j.add(new J(new xt(.06,.1,4.6,10).translate(0,2.3,0),on)),j.add(new J(new Ve(.5,.12,.5).translate(0,.06,0),on));let oe=new it;oe.position.set(0,4.72,0),j.add(oe);let Q=new Le({color:9080984,roughness:.45,metalness:.5});oe.add(new J(new Ve(.3,.26,.62).translate(0,0,.12),Q)),oe.add(new J(new Ve(.34,.04,.68).translate(0,.15,.12),on));let Ee=new J(new xt(.085,.1,.16,16).rotateX(Math.PI/2).translate(0,-.01,.5),new Le({color:658189,roughness:.25,metalness:.7}));oe.add(Ee);let Se=new J(new Ci(.06,14).translate(0,-.01,.585),new st({color:Oe(.05,.12,.3)}));oe.add(Se);let je=an(Oe(3,.3,.2),.3);je.position.set(.1,.13,.36),oe.add(je);let ne=new J(new mn(.022,8,6),new st({color:Oe(4,.3,.2)}));ne.position.copy(je.position),oe.add(ne),oe.lookAt(-1.75,1,66),e.add(j);let le=new Yt(52,16/9,.5,160),be=new it;be.position.set(-9.4,3.55,64),be.rotation.y=2.6;let Ge=new J(new ot(4.4,3),new st({map:GS(n.webcamTitel||"Webcam \xB7 Bergstra\xDFe")}));be.add(Ge);let Y=new J(new ot(4,2.25),new Et({uniforms:{t:{value:null},zeit:{value:0},an:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      precision highp float; uniform sampler2D t; uniform float zeit, an; varying vec2 vUv;
      vec3 aces(vec3 x){ const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14; return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0); }
      void main(){
        vec3 c = texture2D(t, vUv).rgb * 1.6;
        c = aces(c);
        c *= 0.92 + 0.08 * sin(vUv.y * 600.0 + zeit * 3.0);
        vec2 d = vUv - 0.5; c *= 1.0 - dot(d, d) * 0.9;
        c = mix(vec3(0.02), c, an);
        gl_FragColor = vec4(c * 1.8 + 0.01, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}));Y.position.set(0,-.2,.012),be.add(Y);for(let V of[-1.9,1.9])be.add(new J(new xt(.07,.08,2.15,10).translate(V,-2.5,-.12),on));be.add(new J(new Ve(4.5,.1,.14).translate(0,-1.55,-.1),on)),e.add(be);let fe=Cn(n.webcam||"Webcam an der Bergstra\xDFe",{punkt:"cyan",hoehe:.8});fe.position.set(-9.4,5.7,64),e.add(fe),Fs(s.welt&&s.welt.renderer,e);let ke=0;return{webcamKamera:le,schirm:Y,update(V,ee,ce,he,de){s.umgebung.himmelUniforms.warnung.value=Math.max(s.umgebung.himmelUniforms.warnung.value,ee*.45),s.umgebung.himmelUniforms.mond.value=Math.max(s.umgebung.himmelUniforms.mond.value,ee),s.schnee.staerke=Math.max(s.schnee.staerke,ee);let Re=(Math.sin(ce*4)>0?1:.15)*ee;je.material.opacity=(.4+.6*(Math.sin(ce*4)>0?1:0))*ee,z.material.opacity=.9*Re,ln(q,ee*dt(V,.42,.5,.68,.76)),Ui(q,de.kamera),ln(fe,ee*dt(V,.78,.84,.94,1)),Ui(fe,de.kamera),Y.material.uniforms.zeit.value=ce,le.position.set(-11.1,4.6,t+72),le.lookAt(de.lead.x-1,.8,de.lead.z-4),le.updateMatrixWorld(),ke++,this.webcamBild=ee>.2&&V>.5&&ke%6===0}}}var NS,Xg,vr,US,BS,zS,Yg=lt(()=>{Tt();_i();Hn();Ia();Qt();Xn();Ma();NS=[[-3,19],[-4.1,21],[-8.5,27],[-12,35],[-16,44]],Xg=31,vr=2.4,US=.14,BS=4,zS=new _e(.66,.72,.84)});function VS(s=document){for(let e of s.querySelectorAll("[data-offline]"))e.hidden=e.dataset.offline!==Jg}var Jg,Zg,$g=lt(()=>{Jg="fertig",Zg=()=>Jg==="fertig";typeof document<"u"&&VS()});function _r(s){if(!s||s.attributes.uv||!s.attributes.position)return!1;let e=s.attributes.position,t=s.attributes.normal,n=new w(0,0,1);if(t){n.set(0,0,0);for(let p=0;p<t.count;p++)n.x+=t.getX(p),n.y+=t.getY(p),n.z+=t.getZ(p);n.lengthSq()<1e-8&&n.set(0,0,1),n.normalize()}let i=Math.abs(n.x),r=Math.abs(n.y),a=Math.abs(n.z);i>=r&&i>=a?n.set(Math.sign(n.x)||1,0,0):r>=a?n.set(0,Math.sign(n.y)||1,0):n.set(0,0,Math.sign(n.z)||1);let o=r>i&&r>a?new w(0,0,-1):new w(0,1,0),l=new w().crossVectors(o,n);s.computeBoundingBox();let c=s.boundingBox,h=c.getCenter(new w),u=c.getSize(new w),f=Math.max(1e-6,Math.abs(l.dot(u))),d=Math.max(1e-6,Math.abs(o.dot(u))),m=new Float32Array(e.count*2),b=new w;for(let p=0;p<e.count;p++)b.set(e.getX(p),e.getY(p),e.getZ(p)).sub(h),m[p*2]=b.dot(l)/f+.5,m[p*2+1]=b.dot(o)/d+.5;return s.setAttribute("uv",new at(m,2)),!0}function Qg(s){let e=s.woerter,t=new it,n=(()=>{let m=document.createElement("canvas");m.width=1536,m.height=666;let b=m.getContext("2d");b.fillStyle="#0b0d10",b.fillRect(0,0,1536,666);let p=b.createLinearGradient(0,0,1536,666);p.addColorStop(0,"rgba(44,184,227,0.26)"),p.addColorStop(1,"rgba(44,184,227,0)"),b.fillStyle=p,b.fillRect(0,0,1536,666),b.save(),b.globalAlpha=.35,b.strokeStyle="#2cb8e3",b.lineWidth=8,b.lineCap="round";for(let[x,E,v,T]of[[1080,80,1500,220],[1140,620,1360,60],[1e3,420,1536,380],[1250,660,1500,300]])b.beginPath(),b.moveTo(x,E),b.lineTo(v,T),b.stroke();b.restore(),b.fillStyle="#2cb8e3",b.beginPath(),b.arc(1300,310,34,0,Math.PI*2),b.fill(),b.beginPath(),b.moveTo(1270,326),b.lineTo(1300,392),b.lineTo(1330,326),b.fill(),b.fillStyle="#0b0d10",b.beginPath(),b.arc(1300,310,13,0,Math.PI*2),b.fill(),s.logoMarke&&s.logoMarke.complete&&s.logoMarke.naturalWidth&&b.drawImage(s.logoMarke,72,70,120,120),b.fillStyle="#fff",b.font=`700 48px ${ze}`,b.textBaseline="middle",b.textAlign="left",b.fillText("FREQ",212,130);let g=Zg()?e.plakat||"Offline-Karten":e.plakatBald||"Offline-Karten: kommen bald",y=150;for(b.font=`800 ${y}px ${ze}`;b.measureText(g).width>1392&&y>80;)y-=6,b.font=`800 ${y}px ${ze}`;b.fillText(g,72,350),b.fillStyle="rgba(235,235,245,0.8)",b.font=`500 54px ${ze}`,b.fillText(e.plakatKlein||"Ein Land, eine Datei \u2013 mit FREQ",72,520);let M=new Mt(m);return M.colorSpace=nt,M.anisotropy=8,M.minFilter=Jt,M})(),i=new st({map:n}),r=new Le({color:3883080,roughness:.5,metalness:.7}),a=new Le({color:1382171,roughness:.6,metalness:.3}),o=new it,l=new J(new ot(6,2.6),i);l.position.set(0,4.4,.09),o.add(l),o.add(new J(new Ve(6.3,2.9,.12).translate(0,4.4,0),a));for(let m of[-2.4,2.4])o.add(new J(new xt(.11,.13,3.2,14).translate(m,1.6,0),r));t.add(o);let c=new it;c.add(new J(new Ve(5,.08,.08).translate(0,2.2,0),r)),c.add(new J(new Ve(6.6,.06,.6).translate(0,2.98,.4),a));for(let m of[-3.2,-1.6,0,1.6,3.2])c.add(new J(new xt(.02,.02,1,8).translate(m,3.5,-.3),r));c.add(new J(new xt(.022,.022,6.6,8).rotateZ(Math.PI/2).translate(0,4,-.3),r));let h=[],u=[];for(let m of[-2,2]){c.add(new J(new xt(.03,.03,.9,8).rotateX(Math.PI/2-.35).translate(m,5.95,.35),r));let b=new J(new xt(.08,.11,.2,14).rotateX(Math.PI-.34).translate(m,5.85,.65),a);c.add(b);let p=an(Oe(2.6,2.4,2),.75);p.position.set(m,5.78,.6),c.add(p),h.push(p);let g=new St;g.name=`anker_licht_plakat_${m<0?1:2}`,g.position.set(m,5.8,.62),g.userData={typ:"spot",farbe:"#fff2dd",winkel:75,reichweite:12,staerke:60},c.add(g),u.push(g)}t.add(c),t.updateMatrixWorld(!0);for(let m of u){let b=new w(m.position.x*.5,4.4,.09);m.lookAt(t.localToWorld(b))}t.traverse(m=>{m.isMesh&&(m.frustumCulled=!1,m.layers.enable(It))});let f=new vn(16773853,0,16,2);f.position.set(0,6,1.2),t.add(f);let d=!1;return{gruppe:t,anker:u,strahler:h,licht:f,setzeRequisit(m){let b=xa(m,"Plakatwand");b&&(b.traverse(p=>{p.isMesh&&(p.name==="Plakat"?(_r(p.geometry),p.material=i):/^Strahler/.test(p.name)&&(p.visible=!1))}),t.remove(o),t.add(b))},anmelden(){if(d)return!0;let m=s.umgebung&&s.umgebung.lichtPool;if(!m||typeof m.anmelden!="function")return!1;try{for(let b of u)m.anmelden(b,{prioritaet:2});d=!0}catch{}return d},update(m){let b=this.anmelden();f.intensity=(b?10:46)*m*(t.lichtAn===0?0:1);for(let p of h)p.material.opacity=.75*m}}}function eb(s,e){let t=new it,n=an(Oe(1.6,.9,.5),1);n.scale.set(900,150,1),n.position.set(80,70,e+1350),t.add(n);let i=an(Oe(.5,1.6,2),1);i.scale.set(560,100,1),i.position.set(-60,45,e+1250),t.add(i);let r=[],a=(o,l)=>s.umgebung&&s.umgebung.hoehe?s.umgebung.hoehe(o,vt(8)+l):0;for(let o=0;o<16;o++){let l=an(Oe(1.4,1.2,.9),1);l.scale.set(5+o%3*3,3+o%2*2,1);let c=-70+o*9+o*7%5*2,h=e+650+o%4*18;l.position.set(c,a(c,h-e)+1.5+o%3*.8,h),t.add(l),r.push(l)}return{gruppe:t,update(o,l){n.material.opacity=.5*o,i.material.opacity=.35*o;for(let c=0;c<r.length;c++)r[c].material.opacity=o*(.5+.2*Math.sin(l*1.3+c*2.1));t.visible=o>.01}}}var Us,Kh=lt(()=>{Tt();_i();Hn();qn();Qt();Xn();$g();Us={PLAKAT:.28,WEITE_AN:.28,WEITE_VOLL:.6,ANKER_AN:.3,ANKER_VOLL:.45,LOGO:.62}});function ib(s){return yi((e,t,n)=>{let i=e.createLinearGradient(0,0,t,0),[r,a,o,l]=s?["#000","#000","#fff","#fff"]:["#fff","#fff","#000","#000"];i.addColorStop(0,r),i.addColorStop(s?.06:.7,a),i.addColorStop(s?.3:.94,o),i.addColorStop(1,l),e.strokeStyle=i,e.lineWidth=5,e.beginPath(),e.moveTo(0,6),e.lineTo(t,6),e.moveTo(0,n-6),e.lineTo(t,n-6),e.stroke()})}function jS(s,e=.22){let t=s.length,n=[],i=[];for(let a=0;a<t;a++){let o=s[Math.max(0,a-1)],l=s[Math.min(t-1,a+1)],c=l[0]-o[0],h=l[1]-o[1],u=Math.hypot(c,h)||1;c/=u,h/=u;let f=h*e/2,d=-c*e/2,m=s[a][2],[b,p]=s[a];n.push(b+f,-.02,p+d,b+f,m,p+d,b-f,m,p-d,b-f,-.02,p-d)}for(let a=0;a+1<t;a++){let o=a*4,l=o+4;for(let[c,h]of[[0,1],[1,2],[2,3]])i.push(o+c,o+h,l+c,o+h,l+h,l+c)}let r=new ht;return r.setAttribute("position",new ct(n,3)),r.setIndex(i),r.computeVertexNormals(),r}function sb(s,e){let i=document.createElement("canvas");i.width=512,i.height=368;let r=i.getContext("2d");r.fillStyle="#06090d",r.fillRect(0,0,512,368);let a=r.createLinearGradient(0,0,0,368);a.addColorStop(0,"rgba(44,184,227,0.14)"),a.addColorStop(1,"rgba(44,184,227,0)"),r.fillStyle=a,r.fillRect(0,0,512,368);let o=e?"#ff453a":"#30d158";r.beginPath(),r.arc(44,46,12,0,Math.PI*2),r.fillStyle=o,r.fill(),r.fillStyle="#fff",r.font=`700 40px ${ze}`,r.textAlign="left",r.textBaseline="middle",r.fillText(s,70,46),r.fillStyle="#fff",r.font=`700 110px ${ze}`,r.textAlign="center",r.fillText(e?"48":"22",256,170),r.fillStyle="rgba(235,235,245,0.75)",r.font=`600 34px ${ze}`,r.fillText("kW",256,240),e?(r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(48,296,416,22),r.fillStyle="#2cb8e3",r.fillRect(48,296,416*.64,22),r.fillStyle="rgba(235,235,245,0.85)",r.font=`600 30px ${ze}`,r.textAlign="right",r.fillText("64 %",464,344)):(r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=4,r.strokeRect(206,290,100,50),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(306,305,8,20),r.fillStyle="#30d158",r.fillRect(212,296,88,38));let l=new Mt(i);return l.colorSpace=nt,l.anisotropy=4,l.minFilter=Jt,l}function YS(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#1b4f9c",t.fillRect(0,0,256,256),t.strokeStyle="#fff",t.lineWidth=10,t.strokeRect(10,10,236,236),t.fillStyle="#fff",t.strokeStyle="#fff",t.lineWidth=12,t.lineCap="round",t.fillRect(60,130,136,14),t.fillRect(118,144,20,60),t.fillRect(40,176,50,12),t.fillRect(166,176,50,12),t.beginPath(),t.moveTo(56,188),t.lineTo(56,212),t.moveTo(200,188),t.lineTo(200,212),t.stroke(),t.beginPath(),t.moveTo(128,112),t.lineTo(92,112),t.lineTo(128,40),t.lineTo(164,112),t.closePath(),t.fill();let n=new Mt(e);return n.colorSpace=nt,n.anisotropy=4,n}async function rb(s,e,t){let n=await Promise.all([0,1,2].map(r=>t.includes(r)?s.glb(`welt/modelle/${e}_lod${r}.glb`):Promise.resolve(null))),i=n.find(r=>r);return{name:e,stufen:n,extras:i?{...i.scene.userData||{}}:{},da:!!i}}function ab(s,e){let t=vt(6),n=s.woerter,i=new J(new ot(25+Gd,82),s.strasse.zusatzMaterial(yi(()=>{},64,64)));i.rotation.x=-Math.PI/2,i.position.set((Gd-25)/2,.004,7),i.name="boden:vorplatz",e.add(i);let r=jh(WS),a=jh(qS),o=jh(XS),l=jh(KS),c=new J(Ns(r,a,48),s.strasse.zusatzMaterial(ib(!0))),h=new J(Ns(o,l,48),s.strasse.zusatzMaterial(ib(!1)));for(let F of[c,h])F.position.y=.012,F.frustumCulled=!1,F.name="fahrbahn:tankstelle",e.add(F);{let F=yi((xe,Te,Ze)=>{xe.lineWidth=6,xe.beginPath(),xe.moveTo(0,Ze-5),xe.lineTo(Te,Ze-5),xe.stroke(),xe.setLineDash([24,24]),xe.beginPath(),xe.moveTo(0,5),xe.lineTo(Te,5),xe.stroke()}),[D,W,se]=tb.ein,[ae,te,ie]=tb.aus,ge=ii([-3.62,D],[-3.62,se]),Ae=xe=>{let Te=D+(se-D)*xe;return Te<W?ii([-3.62,D],[-7.1,W])((Te-D)/(W-D)):ii([-7.1,W],[-7.1,se])((Te-W)/(se-W))},ve=ii([-3.62,ae],[-3.62,ie]),ye=xe=>{let Te=ae+(ie-ae)*xe;return Te<te?ii([-7.1,ae],[-7.1,te])((Te-ae)/(te-ae)):ii([-7.1,te],[-3.62,ie])((Te-te)/(ie-te))};for(let[xe,Te]of[[ge,Ae],[ve,ye]]){let Ze=new J(Ns(xe,Te,48),s.strasse.zusatzMaterial(F));Ze.position.y=.012,Ze.frustumCulled=!1,Ze.name="fahrbahn:tankstelle",e.add(Ze)}s.strasse.uniforms.randAus2.value.set(t+D,t+ie)}{let F=(se,ae,te)=>Array.from({length:ae+1},(ie,ge)=>{let Ae=ge/ae,ve=se(Ae);return[ve.x,ve.z,nb*te(Ae)]}),D=new Le({color:7369850,roughness:.88,side:Rt}),W=[...F(r,16,se=>Lt(0,.32,se)),[Gd,22,nb],...F(o,16,se=>Lt(1,.68,se))];for(let se of[W,F(a,16,ae=>Lt(0,.35,ae)*Lt(1,.82,ae)),F(l,16,ae=>Lt(0,.18,ae)*Lt(1,.65,ae))]){let ae=new J(jS(se),D);ae.frustumCulled=!1,e.add(ae)}}let u=new st({color:10132640});for(let F of[-1,5,11,17]){let D=new J(new ot(5,.12),u);D.rotation.x=-Math.PI/2,D.position.set(-13.4,.01,F),e.add(D)}let d=[[-16.8,2,"frei"],[-16.8,8,"frei"],[-16.8,14,"belegt"]].map(([F,D,W])=>{let se=new it;se.position.set(F,0,D),se.rotation.y=Math.PI/2;let ae=new J(new Ve(.46,1.7,.3).translate(0,.85,0),new Le({color:12567238,roughness:.6}));se.add(ae);let te=W==="belegt"?Oe(4,.35,.25):Oe(.35,4,1.2),ie=an(te,1.8);return ie.position.set(0,1.2,-.3),se.add(ie),e.add(se),{s:se,vorl:ae,glut:ie,art:W,aktuell:ae,modell:null}}),m=Cn(n.frei||"Frei",{punkt:"gruen",hoehe:.8});m.position.set(-16.8,2.9,2),e.add(m);let b=Cn(n.belegt||"Belegt",{punkt:"rot",hoehe:.8});b.position.set(-16.8,2.9,14),e.add(b);let p=sb(n.frei||"Frei",!1),g=sb(n.belegt||"Belegt",!0),y=bn(Oe(.4,4.5,1.4)),M=bn(Oe(5,.45,.3)),x=-15.5,E=14,v=s.convoy.parkendesAuto(2768174,new w(x+2.3,0,t+E),-Math.PI/2),T=new it;T.add(new J(new Ve(.13,.03,.17),new Le({color:723982,roughness:.4,metalness:.5})));let _=new J(new mn(.012,8,6),bn(Oe(.3,3,4)));_.position.set(0,.02,.05),T.add(_),v.g.add(T);let R=new Le({color:657930,roughness:.9}),C=new J(new ht,R);C.frustumCulled=!1,s.szene.add(C),e.updateMatrixWorld(!0),e.attach(v.g),e.attach(C);let I=new w(-16.68,.82,t+E),B=new w,G=()=>{let F=v.laenge||4.6,D=v.pos&&v.pos.vornL?v.pos.vornL:null;v.g.position.x=x+F/2,T.position.set(D?D.x*.55:.5,D?Math.max(.6,D.y+.3):.66,F/2-.5),T.rotation.x=-.12,v.g.updateMatrixWorld(!0),T.getWorldPosition(B);let W=[];for(let se=0;se<=5;se++){let ae=se/5,te=Math.sin(Math.PI*ae);W.push(new w(Gt(I.x,B.x,ae),Gt(I.y,B.y,ae)-.5*te,Gt(I.z,B.z,ae)+.07*Math.sin(ae*7)))}C.geometry.dispose(),C.geometry=new xo(new Pi(W),24,.018,8,!1)};G();let k=new vn(14217471,0,9,2);k.position.set(-15.6,2.2,8),e.add(k);let z=new it;z.position.set(-14.5,0,32);for(let[F,D]of[[-3.2,-3.2],[3.2,-3.2],[-3.2,3.2],[3.2,3.2]])z.add(new J(new xt(.2,.22,5.2,12).translate(F,2.6,D),on));z.add(new J(new Ve(11,.5,9.5).translate(0,5.45,0),new Le({color:2369582,roughness:.6,metalness:.2})));let N=bn(Oe(.6,2.2,2.8));z.add(new J(new Ve(11,.4,.08).translate(0,5.2,4.75),N)),z.add(new J(new Ve(.08,.4,9.5).translate(5.5,5.2,0),N)),z.add(new J(new Ve(.08,.4,9.5).translate(-5.5,5.2,0),N));for(let[F,D]of[[-2.6,-2.4],[0,-2.4],[2.6,-2.4],[-2.6,2.4],[0,2.4],[2.6,2.4]]){let W=new J(new ot(1.8,.6),bn(Oe(7,7,8)));W.rotation.x=Math.PI/2,W.position.set(F,5.18,D),z.add(W)}let L=[[-1.8,0],[1.8,0]].map(([F,D])=>{let W=new it;W.position.set(F,0,D),W.rotation.y=Math.PI/2;let se=new J(new Ve(.7,1.6,.5).translate(0,.8,0),new Le({color:13159117,roughness:.5}));return W.add(se),z.add(W),{h:W,vorl:se}}),O=new vn(14674175,0,30,2);O.position.set(0,4.7,0),z.add(O),e.add(z);let U=new it;U.position.set(-8.8,0,24),U.rotation.y=Math.PI/2+.25;let q=(()=>{let F=document.createElement("canvas");F.width=512,F.height=640;let D=F.getContext("2d");D.fillStyle="#0d1116",D.fillRect(0,0,512,640);let[W,se,ae]=(n.preise||"Diesel,Super,Preise live in FREQ").split(",");D.fillStyle="#2cb8e3",D.fillRect(0,0,512,110),D.fillStyle="#06252d",D.font=`700 54px ${ze}`,D.textAlign="center",D.textBaseline="middle",D.beginPath(),D.moveTo(256,20),D.quadraticCurveTo(300,70,256,92),D.quadraticCurveTo(212,70,256,20),D.fill(),D.fillStyle="#fff",D.font=`600 46px ${ze}`,D.textAlign="left";for(let ie=0;ie<2;ie++)D.fillStyle="rgba(255,255,255,0.08)",D.fillRect(24,150+ie*170,464,130),D.fillStyle="#fff",D.fillText([W,se][ie].trim(),44,215+ie*170),D.fillStyle="#ffd60a",D.font=`700 58px ${ze}`,D.textAlign="right",D.fillText("\u2014,\u2014\u2014",468,215+ie*170),D.font=`600 46px ${ze}`,D.textAlign="left";D.fillStyle="#2cb8e3",D.font=`600 34px ${ze}`,D.textAlign="center",D.fillText((ae||"Preise live in FREQ").trim(),256,560);let te=new Mt(F);return te.colorSpace=nt,te.anisotropy=4,te.minFilter=Jt,te})(),j=new st({map:q}),oe=new J(new ot(1.44,1.84),j);oe.position.set(0,3.4,0),U.add(oe),U.add(new J(new xt(.08,.08,2.4,12).translate(0,1.2,0),on)),e.add(U);let Q=Cn(n.offen||"Offen bis 22:00",{punkt:"gruen",hoehe:.95});Q.position.set(-9,6.6,32),e.add(Q);let Ee=new it;Ee.position.set(-22,0,-18);let Se=new J(new Ci(4.2,28),new Le({color:2369323,roughness:1}));Se.rotation.x=-Math.PI/2,Se.position.set(-.4,.008,.2),Ee.add(Se);let je=new Le({color:5914410,roughness:.82}),ne=new Le({color:3811352,roughness:.9});for(let[F,D]of[[-.7,.42],[0,.8],[.7,.42]]){let W=D>.5?4:2,se=D/W;for(let ae=0;ae<W;ae++)Ee.add(new J(new Ve(1.8,.05,se-.02).translate(0,F===0?.76:.48,F-D/2+se*(ae+.5)),je))}for(let F of[-.7,.7]){Ee.add(new J(new Ve(.08,.74,.08).translate(F,.37,0),ne)),Ee.add(new J(new Ve(.08,.06,1.7).translate(F,.44,0),ne));for(let D of[-.7,.7])Ee.add(new J(new Ve(.08,.46,.08).translate(F,.23,D),ne))}let le=new Le({color:3817029,roughness:.55,metalness:.6});Ee.add(new J(new xt(.04,.05,2.6,10).translate(-1.6,1.3,.8),le));let be=new J(new mn(.14,14,10),bn(Oe(8,5,2)));be.position.set(-1.6,2.62,.8),Ee.add(be);let Ge=an(Oe(2.6,1.6,.6),3);Ge.position.copy(be.position),Ee.add(Ge);let Y=new vn(16757866,0,10,2);Y.position.copy(be.position),Ee.add(Y);let fe=new it;fe.position.set(1.7,0,-1.3),fe.add(new J(new xt(.2,.18,.9,16).translate(0,.45,0),new Le({color:2046762,roughness:.6,metalness:.3}))),fe.add(new J(new xt(.22,.22,.08,16).translate(0,.94,0),new Le({color:1452574,roughness:.5,metalness:.4}))),fe.add(new J(new Ve(.18,.08,.05).translate(0,.8,.2),new Le({color:329223}))),Ee.add(fe);let ke=new it;ke.position.set(5.2,0,5.5),ke.rotation.y=Math.PI/2+.3,ke.add(new J(new xt(.035,.035,2.2,10).translate(0,1.1,0),le));let V=new J(new ot(.6,.6),new Le({map:YS(),roughness:.5,side:Rt}));V.position.set(0,2.25,.02),ke.add(V),Ee.add(ke),Ee.traverse(F=>{F.isMesh&&F.layers.enable(It)}),e.add(Ee);let ee=Cn(n.pause||"Pause? Rastplatz in 2 km",{punkt:"cyan",hoehe:.85});ee.position.set(-22,2.6,-18),e.add(ee);let ce=[];for(let[F,D]of[[-7.75,-16],[-7.75,30]]){e.add(new J(new xt(.05,.07,4.2,8).translate(F,2.1,D),on));let W=new J(new mn(.16,12,8),bn(Oe(8,8,9)));W.position.set(F,4.25,D),e.add(W);let se=an(Oe(2.2,2.3,2.6),1.1);se.position.copy(W.position),e.add(se),ce.push(se)}let he=[],de=[],Re=0,De=!1,Ue=!1,Ye=1,H=()=>{if(!Ue||!he.length)return;let F=s.umgebung&&s.umgebung.lichtPool;if(!(!F||typeof F.anmelden!="function"))try{let D=he.slice().sort((W,se)=>se.prioritaet-W.prioritaet).slice(0,Re);for(let W=de.length-1;W>=0;W--)D.includes(de[W].a)||(F.abmelden(de[W].eintrag),de.splice(W,1));for(let W of D)de.some(se=>se.a===W)||de.push({a:W,eintrag:F.anmelden(W.objekt,{prioritaet:W.prioritaet})});De=D.length>0,Ue=!1}catch{}},et=[],rt=(F,D)=>{let W=yh(F,D);return et.push({lod:W,indizes:F.stufen.map((se,ae)=>se?ae:-1).filter(se=>se>=0)}),W},P=!1,S=!1;return Fs(s.welt&&s.welt.renderer,e),{eigeneModelle:!1,async ladeModelle(F,D){let W=D.stufeName||"hoch",se=W==="hoch"?[1,2]:W==="mittel"?[1,2]:[2],[ae,te,ie]=await Promise.all([rb(F,"ladesaeule",[Qe(D.stufe.lod|0,0,2)]),rb(F,"tankstelle",se),W==="hoch"?F.textur("welt/modelle/tankstelle_lightmap.webp",{srgb:!0,wiederholen:!1}):Promise.resolve(null)]);if(ae&&ae.da){for(let ge of d){let Ae=rt(ae,D.stufe.lodWeite),ve=ge.art==="belegt";Ae.traverse(xe=>{if(!xe.isMesh)return;let Te=xe.material&&xe.material.name||"";xe.name==="ladesaeule_display"||Te==="licht_ladesaeule_display"?xe.material=new st({map:ve?g:p}):(xe.name==="ladesaeule_status"||Te==="licht_ladesaeule_status")&&(xe.material=ve?M:y)});for(let xe of Ae.levels)ur(xe.object);ge.s.remove(ge.aktuell),ge.s.add(Ae),ge.aktuell=Ae,ge.modell=Ae,ge.glut.scale.setScalar(1.1),ge.glut.position.set(0,1.26,.2);let ye=Ae.levels[0]&&Ae.levels[0].object;if(ye)for(let xe of hr(ye))he.push({objekt:xe,prioritaet:ve?2:1})}P=!0}if(te&&te.da){let ge=rt(te,D.stufe.lodWeite),Ae=te.extras||{},ve=!1;if(ge.traverse(Te=>{if(!Te.isMesh)return;let Ze=Te.material&&Te.material.name||"";(/^preistafel_flaeche/.test(Te.name)||Ze==="licht_preistafel")&&(Te.material=j,ve=!0)}),ie&&te.stufen[0]){ie.flipY=!1,ie.channel=1,ie.colorSpace=nt;let Te=ge.levels[0]&&ge.levels[0].object;Te&&Te.traverse(Ze=>{if(!Ze.isMesh)return;let K=Array.isArray(Ze.material)?Ze.material:[Ze.material];for(let Me of K)Me&&Me.isMeshStandardMaterial&&Ze.geometry.attributes.uv1&&(Me.lightMap=ie,Me.lightMapIntensity=13,Me.needsUpdate=!0)})}for(let Te of ge.levels)ur(Te.object);z.clear(),z.add(O),z.add(ge),ge.rotation.y=Math.PI/2;let ye=typeof Ae.tiefe_m=="number"?Ae.tiefe_m:9.5;z.position.x=-(8.8+ye/2),O.position.set(0,Math.max(3,(typeof Ae.dach_hoehe_m=="number"?Ae.dach_hoehe_m:5)-.6),0),ve&&(U.visible=!1,Q.position.set(z.position.x+5,Math.max(7.5,(typeof Ae.hoehe_m=="number"?Ae.hoehe_m:5.5)+2.2),32));let xe=ge.levels[0]&&ge.levels[0].object;if(xe)for(let Te of hr(xe))he.push({objekt:Te,prioritaet:/dach/.test(Te.name)?2:1});S=!0}P&&S&&(this.eigeneModelle=!0),G(),Ue=!0,H(),Fs(D.renderer,e)},setzeRequisiten(F){if(!P)for(let D of d){let W=xa(F,D.art==="belegt"?"Ladesaeule_belegt":"Ladesaeule_frei");W&&(D.s.remove(D.aktuell),D.s.add(W),D.aktuell=W,W.traverse(se=>{se.isMesh&&/^Display/.test(se.name)&&(_r(se.geometry),se.material=new st({map:D.art==="belegt"?g:p}))}))}if(!S){for(let W of L){let se=xa(F,"Zapfsaeule");se&&(W.h.remove(W.vorl),W.h.add(se))}let D=xa(F,"Preistafel");D&&(U.clear(),U.add(D),D.traverse(W=>{W.isMesh&&W.name==="Tafel"&&(_r(W.geometry),W.material=j)}))}},setzeStufe(F){for(let{lod:D,indizes:W}of et)D.levels.forEach((se,ae)=>{se.distance=ae===0?0:lr[W[ae]]*F.lodWeite});Ye=F.lichter>0?1:0,Re=F.lichter|0,Ue=!0},update(F,D,W,se,ae){C.visible=v.g.visible=D>.01,H(),O.intensity=(De&&S?30:110)*D*Ye,Y.intensity=16*D*Ye,k.intensity=(P&&!De?14:0)*D*Ye;for(let ie=0;ie<d.length;ie++)d[ie].glut.material.opacity=(.45+.2*Math.sin(W*2+ie))*D*(P?.5:1);Ge.material.opacity=(.7+.1*Math.sin(W*7.3)*Math.sin(W*3.1))*D;for(let ie of ce)ie.material.opacity=.45*D;ln(ee,D*dt(F,-.1,.08,.4,.5)),Ui(ee,ae.kamera);let te=D*dt(F,.1,.22,.66,.78);ln(m,te),ln(b,te),Ui(m,ae.kamera),Ui(b,ae.kamera),ln(Q,D*dt(F,.35,.48,.76,.84)),Ui(Q,ae.kamera)}}}var WS,qS,XS,KS,tb,Gd,nb,jh,ob=lt(()=>{Tt();_i();Hn();qn();fr();Qt();Xn();Kh();Ia();WS=[[-3.62,-58],[-3.62,-46],[-5.6,-36],[-7.2,-30]],qS=[[-7.1,-58],[-8.6,-50],[-12.2,-40],[-13.2,-31]],XS=[[-7.2,44],[-5.6,50],[-3.62,58],[-3.62,70]],KS=[[-13.2,45],[-12.2,54],[-8.6,62],[-7.1,70]],tb={ein:[-128,-100,-58],aus:[70,115,150]},Gd=-7.2,nb=.13,jh=([s,e,t,n])=>i=>{let r=1-i;return new w(r*r*r*s[0]+3*r*r*i*e[0]+3*r*i*i*t[0]+i*i*i*n[0],0,r*r*r*s[1]+3*r*r*i*e[1]+3*r*i*i*t[1]+i*i*i*n[1])}});function JS(s){let n=document.createElement("canvas");n.width=1024,n.height=384;let i=n.getContext("2d");i.fillStyle="#05070a",i.fillRect(0,0,1024,384);let r=i.createLinearGradient(0,0,0,384);r.addColorStop(0,"rgba(44,184,227,0.10)"),r.addColorStop(1,"rgba(44,184,227,0)"),i.fillStyle=r,i.fillRect(0,0,1024,384);let a=(l,c,h,u,f,d,m)=>{let b=Math.PI*.75,p=Math.PI*2.25;i.lineCap="round",i.lineWidth=10,i.strokeStyle="rgba(255,255,255,0.10)",i.beginPath(),i.arc(l,c,h,b,p),i.stroke(),i.strokeStyle="#2cb8e3",i.beginPath(),i.arc(l,c,h,b,b+(p-b)*u),i.stroke(),i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=3;for(let g=0;g<=m;g++){let y=b+(p-b)*g/m;i.beginPath(),i.moveTo(l+Math.cos(y)*(h-18),c+Math.sin(y)*(h-18)),i.lineTo(l+Math.cos(y)*(h-30),c+Math.sin(y)*(h-30)),i.stroke()}i.fillStyle="#fff",i.font=`700 88px ${ze}`,i.textAlign="center",i.textBaseline="middle",i.fillText(f,l,c-6),i.fillStyle="rgba(235,235,245,0.7)",i.font=`500 26px ${ze}`,i.fillText(d,l,c+56)};a(230,190,150,.34,"68",s.einheit||"km/h",10),a(794,190,150,.26,"2.1","\xD7 1000",8),i.strokeStyle="#fff",i.lineWidth=9,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(484,150),i.lineTo(484,104),i.lineTo(516,104),i.stroke(),i.beginPath(),i.moveTo(500,88),i.lineTo(520,104),i.lineTo(500,120),i.stroke(),i.fillStyle="#fff",i.font=`700 40px ${ze}`,i.textAlign="center",i.textBaseline="middle",i.fillText(s.abstand||"350 m",512,190),i.strokeStyle="rgba(255,255,255,0.75)",i.lineWidth=3,i.strokeRect(440,236,132,44),i.fillStyle="rgba(255,255,255,0.75)",i.fillRect(572,248,6,20),i.fillStyle="#30d158",i.fillRect(446,242,120*.82,32),i.fillStyle="rgba(235,235,245,0.85)",i.font=`600 28px ${ze}`,i.fillText("82 %",512,314);let o=new Mt(n);return o.colorSpace=nt,o.anisotropy=4,o.minFilter=Jt,o}function lb(s,e){let t=s.convoy.autos[0],n=s.woerter,i=new it,r=new Le({color:1316120,roughness:.85});i.add(new J(new Ve(1.76,.24,.6).translate(0,.76,.98),r)),i.add(new J(new Ve(.42,.42,1).translate(0,.38,.5),r));let a=new st({map:s.carplay.textur,side:Rt}),o=new J(new ot(.66,.31),a);o.position.set(-.08,1,.74),o.rotation.set(.2,Math.PI,0),i.add(o);let l=new J(new gi(.19,.022,10,36),new Le({color:1710879,roughness:.6}));l.position.set(.4,.86,.58),l.rotation.x=-1.25,i.add(l);let c=new it;c.add(i),c.visible=!1;let h=new vn(2930915,0,2.5,2);h.position.set(-.08,1,.6),c.add(h),t.g.add(c),Fs(s.welt&&s.welt.renderer,c);let u=JS(n),f=new st({map:u,side:Rt}),d=bn(Oe(.22,.8,1.05)),m=i,b=null,p=[],g=!1,y=null,M=1,x=new w(.37,1.1,.134),E=[],v=new w,T=bn(Oe(.12,.3,.4)),_=new Set,R=(N,L)=>{if(!_.has(N)){if(_.add(N),N.emissive){let O=N.emissive,U=O.r<O.g&&O.r<O.b&&O.g+O.b>.6;O.setHex(U?668480:0),N.emissiveIntensity=1}/^Leder/.test(L)?(N.color.setHex(1974308),N.roughness=.62,N.metalness=0):/Alcantara|Teppich/.test(L)?(N.color.setHex(723983),N.roughness=.95,N.metalness=0):/Metall|Chrom/.test(L)?(N.color.setHex(3816772),N.roughness=.35,N.metalness=.85):/Naht/.test(L)?(N.color.setHex(2930915),N.emissive&&N.emissive.setHex(866888),N.roughness=.6):/Glas/.test(L)?(N.color.setHex(7243672),N.transparent=!0,N.opacity=.045,N.roughness=.12,N.metalness=0,N.depthWrite=!1,N.envMapIntensity=.05,N.side=Rt):/Display_Rahmen/.test(L)?(N.color.setHex(329223),N.roughness=.5):(N.color.setHex(1184534),N.roughness=.8,N.metalness=.05),N.map&&(N.map=null),N.needsUpdate=!0}},C=N=>{let L=null;if(N.traverse(Se=>{!L&&Se.isMesh&&(Se.name==="Instrumente"||Se.material&&Se.material.name==="Instrumente")&&(L=Se)}),!L)return;L.geometry.computeBoundingBox();let O=L.geometry.boundingBox,U=O.getSize(new w),q=O.getCenter(new w),j=Math.max(.2,U.x*.92),oe=j*.42,Q=new J(new ot(j,oe),f);Q.position.set(q.x,O.max.y+oe*.36,O.max.z-.02),Q.rotation.x=-.14,Q.frustumCulled=!1;let Ee=new J(new Ve(j*1.1,oe*1.16,.03),new Le({color:526603,roughness:.55,metalness:.1}));Ee.position.set(0,0,-.018),Q.add(Ee),L.add(Q),L.material=new Le({color:658189,roughness:.6})},I=N=>{N.traverse(L=>{if(!L.isMesh)return;L.frustumCulled=!1,L.layers.disable(It);let O=L.material&&L.material.name||"";/Glas/.test(O)&&(L.castShadow=!1,L.receiveShadow=!1,L.renderOrder=4,L.visible=!1),L.name==="Display"||O==="display"||O==="Display"?(_r(L.geometry),L.material=a):L.name==="Instrumente"||O==="Instrumente"?(_r(L.geometry),L.material=f):O==="licht_ambiente"?L.material=d:O==="Bildschirm_klein"?L.material=T:L.material&&L.material.isMeshStandardMaterial&&(R(L.material,O),L.material.envMapIntensity=.8)})},B=0,G=!1,k=[],z=()=>{if(!G||!p.length)return;let N=s.umgebung&&s.umgebung.lichtPool;if(!(!N||typeof N.anmelden!="function"))try{for(let L of k.splice(0))N.abmelden(L);for(let L of p.slice(0,B))L.userData.staerke=Math.min(+L.userData.staerke||3,1.8),k.push(N.anmelden(L,{prioritaet:2}));g=k.length>0,G=!1}catch{}};return{innen:c,eigeneModelle:!1,get masse(){return y},get skala(){return M},get augen(){return x},async ladeModelle(N,L){let O=Qe(Math.max(1,L.stufe.lod|0),1,2),U=await cr(N,"innenraum",O,O);if(!U||!U.da)return;y=U.extras||null,b=yh(U,L.stufe.lodWeite),E=U.stufen.map((Q,Ee)=>Q?Ee:-1).filter(Q=>Q>=0),b.rotation.y=Math.PI;let q=typeof y.hoehe_m=="number"?y.hoehe_m:1.6,j=new pn;try{j.setFromObject(t.modell)}catch{j.makeEmpty()}let oe=j.isEmpty()?1.2:j.max.y-j.min.y;M=Qe((oe-.03)/q,.55,1),b.scale.setScalar(M),I(b),C(b),p=hr(b);for(let Q of b.levels)ur(Q.object,{behalten:/^(Display|Instrumente|licht_ambiente)$/});typeof y.augenpunkt_x_m=="number"&&x.set(-y.augenpunkt_x_m*M,(y.augenpunkt_z_m||1.1)*M,(y.augenpunkt_y_m||.134)*M),c.remove(m),c.add(b),m=b,p[0]&&(p[0].getWorldPosition(h.position),c.worldToLocal(h.position),h.color.copy(ma(p[0],2930915))),this.eigeneModelle=!0,G=!0,z(),Fs(L.renderer,c)},setzeInnenraum(N){if(b||!N)return;let L=N.scene.clone(!0);L.rotation.y=Math.PI,I(L),c.remove(m),c.add(L),m=L},setzeStufe(N){h.userData.stufeAn=N.lichter>0,h.userData.an=h.userData.stufeAn&&!g,B=N.lichter>=6?2:N.lichter>=3?1:0,G=!0,b&&b.levels.forEach((L,O)=>{L.distance=O===0?0:lr[E[O]]*N.lodWeite})},update(N,L,O,U,q){c.visible=L>.02,v.copy(q.kamera.position),t.g.worldToLocal(v),t.modell.visible=!(L>.05&&Math.abs(v.x)<.95&&v.y>.3&&v.y<1.4&&v.z>-1.3&&v.z<3),z(),h.intensity=(!g&&h.userData.stufeAn!==!1?.5:0)*L,s.convoy.innenGlas=Math.max(s.convoy.innenGlas,L*dt(N,-.2,.05,.86,.97)),L>.05&&s.carplay.zeichne(N,q.g,O)}}}var cb=lt(()=>{Tt();_i();Hn();qn();fr();Qt();Xn();Kh()});function hb(s,e){let t=vt(8),n=new w,i=Qg(s);i.gruppe.position.set(-11.5,0,-36),i.gruppe.rotation.y=Math.PI/2+.42,e.add(i.gruppe);let r=eb(s,0);e.add(r.gruppe);let a=new w(ni,0,(8+Us.ANKER_AN)*150);return{eigeneModelle:!1,setzePlakatwand(o){i.setzeRequisit(o)},setzeStufe(o){i.lichtAn=o.lichter>0?1:0},update(o,l,c,h,u){let f=s.umgebung.himmelUniforms,d=dt(o,Us.WEITE_AN-.05,Us.WEITE_VOLL,2,3);f.aurora.value=Math.max(f.aurora.value,.16*l*dt(o,.35,.65,2,3)),f.sterne.value=Math.max(f.sterne.value,.6+l*dt(o,.25,.6,2,3)*.7),i.update(l*dt(o,-.5,-.4,.45,.7)),r.update(l*dt(o,-.3,.1,2,3)*(.5+.5*d),c),"davonfahren"in s.convoy&&(s.convoy.davonfahren=Math.max(s.convoy.davonfahren||0,l*Lt(Us.WEITE_AN,Us.WEITE_VOLL,o)));let m=s.welt&&s.welt.fahrt;m&&(m.anker=a,m.ankerMisch=l*Lt(Us.ANKER_AN,Us.ANKER_VOLL,o)),n.set(0,0,-30).applyMatrix4(u.kamera.matrixWorld),s.funken.update(c,n,l*dt(o,.55,.75,2,3),u.dpr)}}}var ub=lt(()=>{Tt();br();Qt();Xn();Kh()});function fb(s){let e=[null,Ng,Bg,Gg,Wg,jg,ab,lb,hb],t=[];for(let n=0;n<pr;n++){let i=new it;i.position.z=vt(n),s.szene.add(i);let r=e[n]?e[n](s,i):{update(){}};r.gruppe=i,t.push(r)}return t}function db(s,e){let t=Math.max(0,Math.abs(e-(s+.5))-.5);return Qe(1-t/.5)}var Vd=lt(()=>{Tt();Qt();Xn();Ug();zg();Vg();qg();Yg();ob();cb();ub()});var Yh,pb=lt(()=>{Tt();Yh=class extends Mo{constructor(e){super(e),this.type=gn}parse(e){let a=function(_,R){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},u=function(_,R,C){R=R||1024;let B=_.pos,G=-1,k=0,z="",N=String.fromCharCode.apply(null,new Uint16Array(_.subarray(B,B+128)));for(;0>(G=N.indexOf(`
`))&&k<R&&B<_.byteLength;)z+=N,k+=N.length,B+=128,N=String.fromCharCode.apply(null,new Uint16Array(_.subarray(B,B+128)));return-1<G?(C!==!1&&(_.pos+=k+G+1),z+N.slice(0,G)):!1},f=function(_){let R=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,G=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,k={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},z,N;for((_.pos>=_.byteLength||!(z=u(_)))&&a(1,"no header found"),(N=z.match(R))||a(3,"bad initial token"),k.valid|=1,k.programtype=N[1],k.string+=z+`
`;z=u(_),z!==!1;){if(k.string+=z+`
`,z.charAt(0)==="#"){k.comments+=z+`
`;continue}if((N=z.match(C))&&(k.gamma=parseFloat(N[1])),(N=z.match(I))&&(k.exposure=parseFloat(N[1])),(N=z.match(B))&&(k.valid|=2,k.format=N[1]),(N=z.match(G))&&(k.valid|=4,k.height=parseInt(N[1],10),k.width=parseInt(N[2],10)),k.valid&2&&k.valid&4)break}return k.valid&2||a(3,"missing format specifier"),k.valid&4||a(3,"missing image size specifier"),k},d=function(_,R,C){let I=R;if(I<8||I>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);I!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");let B=new Uint8Array(4*R*C);B.length||a(4,"unable to allocate buffer space");let G=0,k=0,z=4*I,N=new Uint8Array(4),L=new Uint8Array(z),O=C;for(;O>0&&k<_.byteLength;){k+4>_.byteLength&&a(1),N[0]=_[k++],N[1]=_[k++],N[2]=_[k++],N[3]=_[k++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=I)&&a(3,"bad rgbe scanline format");let U=0,q;for(;U<z&&k<_.byteLength;){q=_[k++];let oe=q>128;if(oe&&(q-=128),(q===0||U+q>z)&&a(3,"bad scanline data"),oe){let Q=_[k++];for(let Ee=0;Ee<q;Ee++)L[U++]=Q}else L.set(_.subarray(k,k+q),U),U+=q,k+=q}let j=I;for(let oe=0;oe<j;oe++){let Q=0;B[G]=L[oe+Q],Q+=I,B[G+1]=L[oe+Q],Q+=I,B[G+2]=L[oe+Q],Q+=I,B[G+3]=L[oe+Q],G+=4}O--}return B},m=function(_,R,C,I){let B=_[R+3],G=Math.pow(2,B-128)/255;C[I+0]=_[R+0]*G,C[I+1]=_[R+1]*G,C[I+2]=_[R+2]*G,C[I+3]=1},b=function(_,R,C,I){let B=_[R+3],G=Math.pow(2,B-128)/255;C[I+0]=bs.toHalfFloat(Math.min(_[R+0]*G,65504)),C[I+1]=bs.toHalfFloat(Math.min(_[R+1]*G,65504)),C[I+2]=bs.toHalfFloat(Math.min(_[R+2]*G,65504)),C[I+3]=bs.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let g=f(p),y=g.width,M=g.height,x=d(p.subarray(p.pos),y,M),E,v,T;switch(this.type){case Dn:T=x.length/4;let _=new Float32Array(T*4);for(let C=0;C<T;C++)m(x,C*4,_,C*4);E=_,v=Dn;break;case gn:T=x.length/4;let R=new Uint16Array(T*4);for(let C=0;C<T;C++)b(x,C*4,R,C*4);E=R,v=gn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:M,data:E,header:g.string,gamma:g.gamma,exposure:g.exposure,type:v,colorSpace:wt,minFilter:ft,magFilter:ft,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});var Wd,mb=lt(()=>{Wd=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var y=new Uint8Array(g.length),M=0;M<g.length;++M){var x=g.charCodeAt(M);y[M]=x>96?x-97:x>64?x-39:x+4}for(var E=0,M=0;M<g.length;++M)y[E++]=y[M]<60?n[y[M]]:(y[M]-60)*64+y[++M];return y.buffer.slice(0,E)}function l(g,y,M,x,E,v,T){var _=g.exports.sbrk,R=x+3&-4,C=_(R*E),I=_(v.length),B=new Uint8Array(g.exports.memory.buffer);B.set(v,I);var G=y(C,x,E,I,v.length);if(G==0&&T&&T(C,R,E),M.set(B.subarray(C,C+x*E)),_(C-_(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(g){var y={object:new Worker(g),pending:0,requests:{}};return y.object.onmessage=function(M){var x=M.data;y.pending-=x.count,y.requests[x.id][x.action](x.value),delete y.requests[x.id]},y}function m(g){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+l.toString()+p.toString(),M=new Blob([y],{type:"text/javascript"}),x=URL.createObjectURL(M),E=u.length;E<g;++E)u[E]=d(x);for(var E=g;E<u.length;++E)u[E].object.postMessage({});u.length=g,URL.revokeObjectURL(x)}function b(g,y,M,x,E){for(var v=u[0],T=1;T<u.length;++T)u[T].pending<v.pending&&(v=u[T]);return new Promise(function(_,R){var C=new Uint8Array(M),I=++f;v.pending+=g,v.requests[I]={resolve:_,reject:R},v.object.postMessage({id:I,count:g,size:y,source:C,mode:x,filter:E},[C.buffer])})}function p(g){var y=g.data;self.ready.then(function(M){if(!y.id)return self.close();try{var x=new Uint8Array(y.count*y.size);l(M,M.exports[y.mode],x,y.count,y.size,y.source,M.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:x},[x.buffer])}catch(E){self.postMessage({id:y.id,count:y.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(g){m(g)},decodeVertexBuffer:function(g,y,M,x,E){l(r,r.exports.meshopt_decodeVertexBuffer,g,y,M,x,r.exports[c[E]])},decodeIndexBuffer:function(g,y,M,x){l(r,r.exports.meshopt_decodeIndexBuffer,g,y,M,x)},decodeIndexSequence:function(g,y,M,x){l(r,r.exports.meshopt_decodeIndexSequence,g,y,M,x)},decodeGltfBuffer:function(g,y,M,x,E,v){l(r,r.exports[h[E]],g,y,M,x,r.exports[c[v]])},decodeGltfBufferAsync:function(g,y,M,x,E){return u.length>0?b(g,y,M,h[x],c[E]):a.then(function(){var v=new Uint8Array(g*y);return l(r,r.exports[h[x]],v,g,y,M,r.exports[c[E]]),v})}}})()});var Jh,gb=lt(()=>{Tt();kd();pb();mb();Jh=class{constructor(e){this.basis=e||"",this.gltf=new Ta;try{Wd.useWorkers(2)}catch{}this.gltf.setMeshoptDecoder(Wd),this.tex=new er,this.rgbe=new Yh,this.bericht={}}textur(e,{srgb:t=!1,wiederholen:n=!0}={}){return this.tex.loadAsync(this.basis+e).then(i=>(i.colorSpace=t?nt:Bt,n&&(i.wrapS=i.wrapT=Sn),i.anisotropy=8,this.bericht[e]="ok",i)).catch(i=>(this.bericht[e]="fehlt",console.warn("Textur fehlt",e,i),null))}glb(e){return this.gltf.loadAsync(this.basis+e).then(t=>(this.bericht[e]="ok",t)).catch(t=>(this.bericht[e]="fehlt",console.warn("Modell fehlt",e,t),null))}hdr(e){return this.rgbe.loadAsync(this.basis+e).then(t=>(t.mapping=ra,this.bericht[e]="ok",t)).catch(t=>(this.bericht[e]="fehlt",console.warn("HDRI fehlt",e,t),null))}}});function tT(s,e){let t=/(\d{1,2}):(\d{2})/.exec(String(s||"")),n=/(\d+)\s*min/i.exec(String(e||""));if(!t||!n)return"21:42";let i=parseInt(t[1],10)*60+parseInt(t[2],10)-parseInt(n[1],10);return i=(i%1440+1440)%1440,`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}var qd,ZS,bb,$S,xb,nl,QS,hn,Rn,ci,On,il,eT,Zh,vb=lt(()=>{Tt();_i();Qt();qd="#2cb8e3",ZS="#30d158",bb="#ff9f0a",$S="#d61f26",xb="rgba(28,28,30,0.92)",nl="rgba(235,235,245,0.75)",QS="rgba(255,255,255,0.14)",hn=1280,Rn=600,ci=112,On=700,il=392,eT=160,Zh=class{constructor(e,t){this.w=e||{},this.logo=t||null,this.c=document.createElement("canvas"),this.c.width=hn,this.c.height=Rn,this.x=this.c.getContext("2d"),this.textur=new Mt(this.c),this.textur.colorSpace=nt,this.textur.anisotropy=4,this.textur.minFilter=ft,this.textur.magFilter=ft,this.textur.generateMipmaps=!1,this.schluessel="",this.zuletzt=-1,this.namen=(this.w.namen||"Anna,Ben,Mia,Tom").split(",").map(i=>i.trim()),this.uhr=tT(this.w.ankunft,this.w.rest);let n=String(this.w.blitzer||"Blitzer \xB7 800 m").split("\xB7");this.blitzerWeit=(n[1]||"800 m").trim(),this.raster(this.x,0),this.textur.needsUpdate=!0}zeichne(e,t,n){let i=e<.2?0:e<.3?1:2,r,a=!!(this.logo&&this.logo.complete&&this.logo.naturalWidth),o=0,l=1,c=0,h=0,u=0;i<2?(o=i===1?Math.round(Lt(.2,.3,e)*60)/60:0,r=`${i}|${o.toFixed(3)}|${a?1:0}`):(l=Math.round(Lt(.3,.37,e)*24)/24,c=Math.round((t-7)*eT/2)*2,u=e>.55?1:0,h=Math.round(dt(e,.55,.585,.7,.74)*16)/16,r=`2|${l.toFixed(3)}|${c}|${u}|${h.toFixed(3)}`),r!==this.schluessel&&(n-this.zuletzt<(i<2?.08:.16)&&n>=this.zuletzt||(this.zuletzt=n,this.schluessel=r,i<2?this.raster(this.x,o):this.karte(this.x,c,l,u,h),this.textur.needsUpdate=!0))}kapsel(e,t,n,i,r,a){a=Math.min(a,i/2,r/2),e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.arcTo(t+i,n,t+i,n+a,a),e.lineTo(t+i,n+r-a),e.arcTo(t+i,n+r,t+i-a,n+r,a),e.lineTo(t+a,n+r),e.arcTo(t,n+r,t,n+r-a,a),e.lineTo(t,n+a),e.arcTo(t,n,t+a,n,a),e.closePath()}tafel(e,t,n,i,r,a){this.kapsel(e,t,n,i,r,a),e.fillStyle=xb,e.fill(),e.lineWidth=2,e.strokeStyle=QS,e.stroke()}breite(e,t,n){return e.font=n,e.measureText(t).width}seitenleiste(e,t){e.fillStyle=t?"rgba(14,14,18,0.82)":"#121216",e.fillRect(0,0,ci,Rn),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(ci-1,0,1,Rn),e.fillStyle="#fff",e.font=`700 34px ${ze}`,e.textAlign="center",e.textBaseline="middle",e.fillText(this.uhr,ci/2,44),e.fillStyle="rgba(255,255,255,0.85)";for(let n=0;n<4;n++)e.fillRect(ci/2-30+n*9,92-n*4,6,10+n*4);e.strokeStyle="rgba(255,255,255,0.7)",e.lineWidth=2,this.kapsel(e,ci/2+10,82,24,13,3),e.stroke(),e.fillStyle="rgba(255,255,255,0.7)",e.fillRect(ci/2+35,86,2,5),e.fillRect(ci/2+13,85,15,7),e.fillStyle="rgba(255,255,255,0.9)";for(let[n,i]of[[-15,-15],[3,-15],[-15,3],[3,3]])this.kapsel(e,ci/2+n,Rn-58+i,12,12,3),e.fill();for(let n=0;n<3;n++){let i=[14,24,10][n];e.fillRect(ci/2-14+n*11,Rn-124-i/2,6,i)}}raster(e,t){let n=e.createRadialGradient(hn*.75,Rn*.1,40,hn*.6,Rn*.4,900);n.addColorStop(0,"#18213a"),n.addColorStop(.55,"#0c0f18"),n.addColorStop(1,"#07080c"),e.fillStyle=n,e.fillRect(0,0,hn,Rn),this.seitenleiste(e,!1);let i=String(this.w.apps||"Telefon,Musik,Karten,Nachrichten,Podcasts,FREQ,Radio,Einstellungen").split(",").map(m=>m.trim()),r=["#1f8f7a","#d9522c","#2a5fa8","#5a63d6","#9a4a6e","#0b0d10","#b8761c","#4f5663"],a=150,o=270,l=252,c=ci+40+(o-a)/2,h=52,u=Math.max(0,i.findIndex(m=>/freq/i.test(m))),f=null,d=!!(this.logo&&this.logo.complete&&this.logo.naturalWidth);if(i.slice(0,8).forEach((m,b)=>{let p=c+b%4*o,g=h+Math.floor(b/4)*l,y=b===u,x=1-(y?Lt(.05,.45,t)*(1-Lt(.55,.9,t)):0)*.09;y&&(f=[p,g,a,a]),e.save(),e.translate(p+a/2,g+a/2),e.scale(x,x),e.translate(-a/2,-a/2);let E=e.createLinearGradient(0,0,0,a);E.addColorStop(0,"rgba(255,255,255,0.16)"),E.addColorStop(1,"rgba(0,0,0,0.12)"),this.kapsel(e,0,0,a,a,46),e.fillStyle=r[b%r.length],e.fill(),e.fillStyle=E,e.fill(),y&&(e.lineWidth=2,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke()),e.strokeStyle="#fff",e.fillStyle="#fff",e.lineWidth=11,e.lineCap="round",e.lineJoin="round";let v=a/2;switch(b){case 0:e.lineWidth=9,e.save(),e.translate(v,v),e.rotate(-.6),e.beginPath(),e.moveTo(-40,-14),e.quadraticCurveTo(-42,36,10,40),e.quadraticCurveTo(40,42,42,14),e.lineTo(30,4),e.lineTo(20,16),e.quadraticCurveTo(-8,10,-16,-20),e.lineTo(-6,-30),e.lineTo(-16,-42),e.closePath(),e.stroke(),e.restore();break;case 1:e.lineWidth=11;for(let T=0;T<5;T++){let _=[22,46,70,38,54][T];e.beginPath(),e.moveTo(v-44+T*22,v+_/2),e.lineTo(v-44+T*22,v-_/2),e.stroke()}break;case 2:e.lineWidth=10,e.beginPath(),e.moveTo(v,v+46),e.quadraticCurveTo(v-44,v-6,v-30,v-26),e.arc(v,v-18,30,Math.PI*1.2,Math.PI*1.8),e.quadraticCurveTo(v+44,v-6,v,v+46),e.closePath(),e.stroke(),e.beginPath(),e.arc(v,v-16,10,0,Math.PI*2),e.fill();break;case 3:e.lineWidth=9,this.kapsel(e,v-46,v-32,92,64,10),e.stroke(),e.beginPath(),e.moveTo(v-44,v-26),e.lineTo(v,v+6),e.lineTo(v+44,v-26),e.stroke();break;case 4:e.beginPath(),e.arc(v,v+6,9,0,Math.PI*2),e.fill(),e.lineWidth=8;for(let T of[26,44])e.beginPath(),e.arc(v,v+6,T,Math.PI*1.2,Math.PI*1.8),e.stroke(),e.beginPath(),e.arc(v,v+6,T,Math.PI*.2,Math.PI*.8),e.stroke();break;case 5:d?(this.logoC||(this.logoC=document.createElement("canvas"),this.logoC.width=this.logoC.height=216,this.logoC.getContext("2d").drawImage(this.logo,0,0,216,216)),e.drawImage(this.logoC,v-54,v-54,108,108)):(e.strokeStyle=qd,e.lineWidth=12,e.beginPath(),e.arc(v,v,40,Math.PI*.6,Math.PI*1.9),e.stroke());break;case 6:e.lineWidth=8,this.kapsel(e,v-44,v-10,88,54,12),e.stroke(),e.beginPath(),e.moveTo(v-20,v-10),e.lineTo(v+30,v-46),e.stroke(),e.beginPath(),e.arc(v-20,v+17,12,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(v+4,v+8),e.lineTo(v+34,v+8),e.moveTo(v+4,v+26),e.lineTo(v+34,v+26),e.stroke();break;default:e.lineWidth=8;for(let T=0;T<3;T++){let _=v-30+T*30,R=[v+14,v-18,v+4][T];e.beginPath(),e.moveTo(v-44,_),e.lineTo(v+44,_),e.stroke(),e.beginPath(),e.arc(R,_,11,0,Math.PI*2),e.fillStyle=r[b],e.fill(),e.stroke(),e.fillStyle="#fff"}}e.restore(),e.fillStyle=y?"#fff":"rgba(255,255,255,0.88)",e.font=`${y?600:500} 23px ${ze}`,e.textAlign="center",e.textBaseline="top",e.fillText(m,p+a/2,g+a+14)}),t>0&&f){let[m,b,p,g]=f,y=dt(t,0,.12,.6,.85);if(y>0){let x=34+Lt(.05,.45,t)*10;e.beginPath(),e.arc(m+p*.6,b+g*.62,x,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.28*y})`,e.fill(),e.lineWidth=3,e.strokeStyle=`rgba(255,255,255,${.55*y})`,e.stroke()}let M=Lt(.62,1,t);if(M>0){let x=Gt(m,0,M),E=Gt(b,0,M),v=Gt(p,hn,M),T=Gt(g,Rn,M);this.kapsel(e,x,E,v,T,Gt(36,0,M)),e.fillStyle=`rgba(12,13,16,${.65+.35*M})`,e.fill()}}}netz(e,t,n){e.fillStyle="#131519",e.fillRect(0,0,hn,Rn);let i=600,r=(t%i+i)%i;e.save(),e.beginPath(),e.rect(0,0,hn,Rn),e.clip(),this.kachelC||(this.kachelC=document.createElement("canvas"),this.kachelC.width=hn,this.kachelC.height=i,this.kachelZeichnen(this.kachelC.getContext("2d"),i));for(let a=-1;a<=1;a++)e.drawImage(this.kachelC,0,r+a*i);for(let[a,o]of[[30,"#0f1114"],[22,"#363a41"]])e.strokeStyle=o,e.lineWidth=a,e.lineCap="round",e.beginPath(),e.moveTo(On,-20),e.lineTo(On,Rn+20),e.stroke(),e.beginPath(),e.moveTo(On-420,n+30),e.lineTo(On,n),e.lineTo(hn+20,n-26),e.stroke();e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=2,e.setLineDash([14,14]),e.beginPath(),e.moveTo(On,-20),e.lineTo(On,Rn+20),e.stroke(),e.beginPath(),e.moveTo(On,n),e.lineTo(hn+20,n-26),e.stroke(),e.setLineDash([]),e.restore()}kachelZeichnen(e,t){e.fillStyle="#1b1e23";let i=[[150,20,150,90],[340,20,190,120],[560,60,110,60],[760,30,180,100],[980,20,140,120],[1150,40,120,80],[180,190,120,110],[360,230,170,70],[540,200,120,130],[770,190,200,70],[1e3,220,110,110],[1150,190,130,90],[160,380,150,90],[360,350,140,130],[560,420,100,90],[780,360,150,90],[990,380,120,100],[1160,330,110,120]];for(let[a,o,l,c]of i)this.kapsel(e,a,0+o,l,c,6),e.fill();e.fillStyle="#152219",e.beginPath(),e.ellipse(430,520,120,60,.2,0,Math.PI*2),e.fill(),e.fillStyle="#0e1724",e.beginPath(),e.moveTo(1040,480),e.bezierCurveTo(1120,450,1200,520,1290,470),e.lineTo(1290,560),e.bezierCurveTo(1180,600,1100,540,1040,580),e.closePath(),e.fill();let r=[[0,160,hn,150],[0,330,hn,345],[0,560,1040,540],[330,0,330,t],[1e3,0,1e3,t],[150,0,150,t],[1130,0,1130,t],[560,160,780,330]];for(let a of[18,12]){e.strokeStyle=a===18?"#0f1114":"#2a2d33",e.lineWidth=a,e.lineCap="round";for(let[o,l,c,h]of r)e.beginPath(),e.moveTo(o,0+l),e.lineTo(c,0+h),e.stroke()}}karte(e,t,n,i,r){let a=this.w,o=150+t;this.netz(e,t,o);let l=()=>{e.beginPath(),e.moveTo(On,il),e.lineTo(On,o+44),e.quadraticCurveTo(On,o,On+44,o-2),e.lineTo(hn+20,o-26)};e.lineCap="round",e.lineJoin="round",l(),e.strokeStyle="rgba(0,0,0,0.9)",e.lineWidth=18,e.stroke(),l(),e.strokeStyle=qd,e.lineWidth=11,e.stroke();let c=[[On+6,il+58,this.namen[1]||"Ben",!1],[On-5,il+116,this.namen[2]||"Mia",!0],[On+4,il+174,this.namen[3]||"Tom",!1]];e.font=`500 19px ${ze}`,e.textAlign="center",e.textBaseline="top";for(let[U,q,j,oe]of c)e.beginPath(),e.arc(U,q,10.5,0,Math.PI*2),e.fillStyle=oe?ZS:"#fff",e.fill(),e.lineWidth=3,e.strokeStyle="rgba(0,0,0,0.85)",e.stroke(),e.lineWidth=4,e.strokeStyle="rgba(0,0,0,0.9)",e.strokeText(j,U,q+14),e.fillStyle="#fff",e.fillText(j,U,q+14);e.beginPath(),e.arc(On,il,13.5,0,Math.PI*2),e.fillStyle=qd,e.fill(),e.lineWidth=4.5,e.strokeStyle="#fff",e.stroke(),this.seitenleiste(e,!0);let h=(U,q)=>{let j=this.breite(e,q,`600 21px ${ze}`)+44;return this.tafel(e,U,14,j,50,13),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.fillText(q,U+j/2,40),j},u=ci+16;u+=h(u,a.ziel||"Ziel")+10,h(u,a.mitfahrer||"Mitfahrer");let f=a.funk||"Funk",d=a.ruhe||"Ruhe",m=this.breite(e,f,`600 21px ${ze}`)+44,b=this.breite(e,d,`600 21px ${ze}`)+44;h(hn-16-m,f),h(hn-16-m-10-b,d);let p=a.abstand||"350 m",g=a.ansageKurz||"Rechts abbiegen auf Hauptstra\xDFe",y=Math.max(380,126+Math.max(this.breite(e,p,`700 58px ${ze}`),this.breite(e,g,`400 25px ${ze}`))+28),M=ci+16,x=80;this.tafel(e,M,x,Math.min(y,hn-16-M),150,22),e.strokeStyle="#fff",e.lineWidth=13,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(M+50,x+122),e.lineTo(M+50,x+62),e.lineTo(M+92,x+62),e.stroke(),e.beginPath(),e.moveTo(M+74,x+38),e.lineTo(M+98,x+62),e.lineTo(M+74,x+86),e.stroke(),e.fillStyle="#fff",e.font=`700 58px ${ze}`,e.textAlign="left",e.textBaseline="middle",e.fillText(p,M+126,x+58),e.fillStyle=nl,e.font=`400 25px ${ze}`,e.fillText(g,M+126,x+114);for(let[U,q]of[[190,"+"],[256,"\u2212"]])this.tafel(e,hn-16-56,U,56,56,15),e.fillStyle="#fff",e.font=`500 38px ${ze}`,e.textAlign="center",e.textBaseline="middle",e.fillText(q,hn-16-28,U+28);let E=a.rest||"12 km \xB7 14 min",v=a.ankunft||"21:56",T=this.breite(e,E,`600 27px ${ze}`)+this.breite(e,v,`700 27px ${ze}`)+24+36+24,_=Rn-16-72;this.tafel(e,M,_,T,72,18),e.fillStyle="#fff",e.font=`600 27px ${ze}`,e.textAlign="left",e.textBaseline="middle",e.fillText(E,M+24,_+36),e.fillStyle=nl,e.font=`700 27px ${ze}`,e.textAlign="right",e.fillText(v,M+T-24,_+36);let R="\xA9 OpenStreetMap",C=this.breite(e,R,`400 19px ${ze}`)+24;this.kapsel(e,M+T+12,Rn-16-36,C,36,12),e.fillStyle=xb,e.fill(),e.fillStyle=nl,e.font=`400 19px ${ze}`,e.textAlign="center",e.fillText(R,M+T+12+C/2,Rn-16-18);let I="68",B=i?r>0?this.blitzerWeit:a.radar||"500 m":a.einheit||"km/h",G=Math.max(81,this.breite(e,I,`700 45px ${ze}`),this.breite(e,B,`600 18px ${ze}`))+8,k=18+G+15+72+12,z=hn-16-k,N=Rn-16-96;this.tafel(e,z,N,k,96,21),e.fillStyle="#fff",e.font=`700 45px ${ze}`,e.textAlign="center",e.textBaseline="middle",e.fillText(I,z+18+G/2,N+36),e.fillStyle=nl,e.font=`600 18px ${ze}`,e.fillText(B,z+18+G/2,N+74);let L=z+18+G+15+36,O=N+48;if(e.beginPath(),e.arc(L,O,36,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(L,O,32,0,Math.PI*2),e.lineWidth=7.5,e.strokeStyle=$S,e.stroke(),e.fillStyle="#000",e.font=`700 27px ${ze}`,e.fillText("70",L,O+1),r>0){let U=a.blitzer||"Blitzer \xB7 800 m",q=a.blitzerTempo||"Tempo 70",j=Math.max(360,90+Math.max(this.breite(e,U,`700 27px ${ze}`),this.breite(e,q,`400 22px ${ze}`))+24),oe=hn-16-j,Q=80-(1-r)*18;e.save(),e.globalAlpha=r,this.tafel(e,oe,Q,j,90,22),e.beginPath(),e.arc(oe+48,Q+45,24,0,Math.PI*2),e.fillStyle=bb,e.fill(),e.fillStyle="#fff",this.kapsel(e,oe+34,Q+36,28,20,4),e.fill(),e.fillRect(oe+40,Q+32,10,5),e.fillStyle=bb,e.beginPath(),e.arc(oe+50,Q+46,6,0,Math.PI*2),e.fill(),e.fillStyle="#fff",e.font=`700 27px ${ze}`,e.textAlign="left",e.textBaseline="middle",e.fillText(U,oe+90,Q+31),e.fillStyle=nl,e.font=`400 22px ${ze}`,e.fillText(q,oe+90,Q+62),e.restore()}n<1&&(e.fillStyle=`rgba(12,13,16,${1-n})`,e.fillRect(0,0,hn,Rn))}}});function sT(){if(yr)return yr;yr=new Map;let s=Mg(.004),e=(t,n)=>{let i=Math.floor(t/10);yr.has(i)||yr.set(i,[]),yr.get(i).push(n)};for(let t of s)for(let n of[0,5,10]){let[i,r,a]=t.p,[o,l,c]=t.z,h=a+n,u=c+n,f=Math.hypot(o-i,u-h)||1,d={px:i,py:r,pz:h,zx:o,zy:l,zz:u,fx:(o-i)/f,fz:(u-h)/f},m=Math.min(h-jd,u-Kd),b=Math.max(h+jd,u+Kd);for(let p=Math.floor(m/10);p<=Math.floor(b/10);p++)e(p*10,d);if(t.g>=.95&&t.g<=3.05&&t.autos)for(let[p,g,y]of t.autos){let M=y+n,x=Math.hypot(p-i,M-h)||1,E={px:i,py:r,pz:h,zx:p,zy:g,zz:M,fx:(p-i)/x,fz:(M-h)/x,nurSicht:!0,sicht:Xd},v=Math.min(h,M)-Xd,T=Math.max(h,M)+Xd;for(let _=Math.floor(v/10);_<=Math.floor(T/10);_++)e(_*10,E)}}return yr}function rT(s,e){let t=sT().get(Math.floor(e/10));if(!t)return!1;for(let n of t){if(!n.nurSicht&&n.py<yb){let c=s-n.px,h=e-n.pz,u=Math.hypot(c,h);if(u<nT||u<jd&&(c*n.fx+h*n.fz)/u>iT)return!0}let i=n.zx-n.px,r=n.zz-n.pz,a=i*i+r*r||1e-6,o=Math.max(0,Math.min(1,((s-n.px)*i+(e-n.pz)*r)/a));if(n.py+(n.zy-n.py)*o<yb&&Math.hypot(s-(n.px+i*o),e-(n.pz+r*o))<(n.sicht||Kd))return!0}return!1}function aT(s,e,t,n){if(t==="baum"&&n!==void 0&&rT(n,s))return!1;let i=vt(4),r=vt(5),a=vt(6),o=vt(7),l=vt(3),c=vt(8);if(t==="leitplanke"||t==="leitpfosten")return!(t==="leitplanke"&&s>c-20||e<0&&s>i-80&&s<i+100||e<0&&s>a-132&&s<a+154||e<0&&s>r+14&&s<r+62||e<0&&s>l+34&&s<l+48);if(s>c-60&&t==="laterne"||t==="laterne"&&s>i-74&&s<i-54||t==="laterne"&&e<0&&s>vt(2)-100&&s<vt(2)+45||t==="laterne"&&e<0&&s>i-78&&s<i+100||t==="laterne"&&e<0&&s>a-132&&s<a+154)return!1;if(s>c-5&&t==="baum")return n!==void 0&&Math.abs(n)>=16;if(e<0&&s>c-42&&s<c-16&&t==="baum"&&n!==void 0&&n>-22)return!1;if(e<0){if(s>i-30&&s<i+95)return t==="baum"?n===void 0||n<-22:!1;if(s>a-132&&s<a+154)return t==="baum"?n===void 0||n<(s>a-60&&s<a+75?-26:-12):!1;if(s>r+18&&s<r+60)return t==="baum"?n===void 0||n<(s>r+40?-13:-22):!1;if(s>r+56&&s<r+82)return t==="baum"?n===void 0||n<-17:!1;if(s>l+30&&s<l+52&&(t==="laterne"||t==="baum"&&(n===void 0||n>-16)))return!1}return!0}var sl,_b,$h,nT,Kd,Xd,yb,jd,iT,yr,Mb=lt(()=>{Tt();b0();qn();sd();br();yg();Eg();Vd();gb();vb();Qt();Hn();sl={hoch:{dpr:1.5,samples:2,spiegel:!0,regen:2600,bloom:5,taps:6,kegel:!0,lod:0,lichter:4,schatten:!0,ao:!0,baumDichte:1,lodWeite:.85},mittel:{dpr:1.5,samples:0,spiegel:!0,regen:1400,bloom:4,taps:4,kegel:!0,lod:1,lichter:2,schatten:!1,ao:!1,baumDichte:.6,lodWeite:.7},niedrig:{dpr:.75,samples:0,spiegel:!1,regen:300,bloom:2,taps:1,kegel:!1,lod:2,lichter:0,schatten:!1,ao:!1,baumDichte:.3,lodWeite:.5,direkt:!0}},_b=[[.012,461588,1.25,.26,1,1],[.006,395538,1.2,.22,.6,.9],[.01,461588,1.25,.26,.8,1],[.01,592402,1.25,.26,.9,1],[.008,461588,1.25,.24,.7,1],[.0045,725536,1.15,.22,0,1],[.009,461588,1.25,.26,.5,1],[.01,461588,1.3,.3,.8,1.1],[.002,197900,1.05,.3,0,.9]],$h=class{constructor(e,t){this.canvas=e,this.woerter=t.woerter||{},this.basis=t.basis||"",this.logoMarke=t.logoMarke||null,this.carplay=new Zh(this.woerter,this.logoMarke),this.stufeName=t.stufe||"hoch",this.stufe=sl[this.stufeName],this.renderer=new dh({canvas:e,context:t.context||void 0,antialias:!1,alpha:!1,stencil:!1,depth:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.toneMapping=Wn,this.renderer.outputColorSpace=wt,this.renderer.autoClear=!1,this.szene=new Ji,this.nebelFarbe=new _e(461588),this.szene.fog=new $a(461588,.011),this.kamera=new Yt(60,1,.2,1500),this.szene.add(this.kamera),this.rnd=ga(7),this.t=0,this.zc=0,this.kriech=0,this.glitch=0,this.letztesKapitel=-1,this.post=new bh(this.renderer),this.fertig=!1,this.basisFertig=!1,this.ladeStand={schritt:"start",aufwaermen:0},this.bilder=0,this.w=2,this.h=2,this.dpr=1,this._v=new w,this._v2=new w,this._autos=[new w,new w,new w,new w];let n=-320,i=pr*Ps+420;this.strasse=new _h(this.szene,{z0:n,z1:i,rnd:this.rnd,spiegel:this.stufe.spiegel}),this.umgebung=new kh(this.szene,{z0:n,z1:i,rnd:this.rnd,renderer:this.renderer,frei:aT,grob:this.stufeName==="niedrig"}),this.convoy=new zh(this.szene,this.umgebung.envMap),this.regen=new Hh(this.szene,2600,this.rnd),this.regen.setzeAnzahl(this.stufe.regen),this.schnee=new Oh(this.szene,1500,this.rnd),this.schnee.staerke=0,this.funken=new Zo(this.szene,500,this.rnd),this.fahrt=new Gh(this.kamera),this.kapitel=null,this.webcamRT=new en(256,144,{type:_n,depthBuffer:!0,minFilter:ft,magFilter:ft,colorSpace:Bt}),this.komet=new it,this.kamera.add(this.komet);let r=ei(128);this.kometKopf=new An(new Tn({map:r,color:Oe(1.6,4.5,5.5),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1})),this.komet.add(this.kometKopf),this.kometSchweif=[],this._hochgeladen=new Set;for(let a=0;a<30;a++){let o=new An(new Tn({map:r,color:Oe(.5,2.2,2.8),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));this.komet.add(o),this.kometSchweif.push(o)}this.komet.visible=!1,this.kometFunken=new Zo(this.komet,160,this.rnd),this.kometFunken.mesh.scale.setScalar(.04)}async laden(){await this.convoy.laden(this.basis+"welt/auto2.glb",this.basis+"welt/auto.glb"),this.kw={szene:this.szene,convoy:this.convoy,umgebung:this.umgebung,strasse:this.strasse,woerter:this.woerter,rnd:this.rnd,schnee:this.schnee,funken:this.funken,carplay:this.carplay,logoMarke:this.logoMarke,welt:this,lader:null},this.kapitel=fb(this.kw);let e=this.kapitel[5];e.schirm&&(e.schirm.material.uniforms.t.value=this.webcamRT.texture),this.setzeStufe(this.stufeName),this.verankereLichter();for(let t of this.kapitel)t.gruppe.visible=!0;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!0),this.schnee.mesh.visible=!0,this.funken.mesh.visible=!0,this.komet.visible=!0,this.kamera.position.set(0,3,20),this.kamera.lookAt(0,1,100),this.kamera.updateMatrixWorld(),this.renderer.compile(this.szene,this.kamera),this.renderer.compile(this.szene,this.strasse.virtuell);for(let t of this.kapitel)t.gruppe.visible=!1;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!1),this.komet.visible=!1,this.fertig=!0,this.nachladen()}async nachkompilieren(e=null){let t=this.renderer,n=()=>new Promise(a=>requestAnimationFrame(a));this.ladeStand.schritt="grafik";for(let a of this.kapitel)a.gruppe.visible=!0;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!0);try{if(t.compileAsync&&t.extensions.has("KHR_parallel_shader_compile"))await t.compileAsync(this.szene,this.kamera);else{for(let a of this.kapitel)t.compile(a.gruppe,this.kamera,this.szene),await n();this.kapitel[7].innen&&(t.compile(this.kapitel[7].innen,this.kamera,this.szene),await n()),t.compile(this.szene,this.kamera)}}catch(a){console.warn("Shader vorbauen",a)}let i=new Set;this.szene.traverse(a=>{let o=a.material?Array.isArray(a.material)?a.material:[a.material]:[];for(let l of o)for(let c of["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","lightMap","alphaMap"])l[c]&&l[c].isTexture&&!l[c].isRenderTargetTexture&&i.add(l[c])});let r=0;for(let a of i)if(!this._hochgeladen.has(a)){this._hochgeladen.add(a);try{t.initTexture(a)}catch{}++r%3===0&&await new Promise(o=>requestAnimationFrame(o))}await this.aufwaermen(e);for(let a of this.kapitel)a.gruppe.visible=!1;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!1)}async aufwaermen(e=null){let t=this.renderer,n=this.kamera,i=e||Array.from({length:pr},(g,y)=>y),r=()=>new Promise(g=>requestAnimationFrame(g)),a=[],o=[],l=[];this.szene.traverse(g=>{if((g.isMesh||g.isSprite||g.isInstancedMesh||g.isPoints||g.isLine)&&(a.push([g,g.frustumCulled]),g.frustumCulled=!1),g.isLOD){o.push(g),g.autoUpdate=!1;for(let y of g.levels)y.object.visible=!0}});for(let g of[...this.convoy.autos,...this.convoy.geparkt||[]])for(let y of g.stufen||[])y&&!y.visible&&(y.visible=!0,l.push(y));let c=n.position.clone(),h=n.quaternion.clone(),u=n.fov,f=this.kapitel[5],d=this.strasse.virtuell,m=[[this.post.szeneRT,n],[this.strasse.rt,d],[this.webcamRT,f&&f.webcamKamera]].filter(g=>g[0]&&g[1]);d.near=n.near,d.far=n.far,d.fov=60,d.aspect=n.aspect,d.zoom=1,d.updateProjectionMatrix();let b=this.umgebung.lichtPool,p=b&&b.lichter[0];t.setScissorTest(!0);try{for(let M=0;M<i.length;M++){let x=i[M],E=vt(x);this.ladeStand.aufwaermen=(M+1)/i.length;for(let v of this.kapitel)v.gruppe.visible=!0;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!0),n.position.set(2,4,E-30),n.lookAt(0,1,E+60),n.updateMatrixWorld(),this.strasse.virtuell.position.copy(n.position),this.strasse.virtuell.quaternion.copy(n.quaternion),this.strasse.virtuell.updateMatrixWorld(),f&&f.webcamKamera&&(f.webcamKamera.position.copy(n.position),f.webcamKamera.quaternion.copy(n.quaternion),f.webcamKamera.updateMatrixWorld()),p&&p.licht.castShadow&&(p.licht.position.set(3,9,E-12),p.ziel.position.set(0,0,E+12),p.licht.intensity=Math.max(p.licht.intensity,1));for(let[v,T]of m)t.setRenderTarget(v),t.setScissor(0,0,4,4),v===this.post.szeneRT&&(t.shadowMap.needsUpdate=!0),t.setClearColor(this.nebelFarbe,1),t.clear(),t.render(this.szene,T);t.setScissor(0,0,4,4),this.strasse.spiegeln(t,this.szene,n,this.nebelFarbe),this.strasse.spiegeln(t,this.szene,n,this.nebelFarbe),await r()}let g=this.kapitel[7],y=this.convoy.autos[0];if(g&&g.innen&&y&&i.includes(7)){t.setScissorTest(!1);let M=g.augen||new w(.3,.95,.1),x=y.modell.visible,E=this.convoy.innenGlas;y.modell.visible=!1,this.convoy.innenGlas=1,g.innen.visible=!0;for(let[v,T]of[[new w(-.6,.2,20),70],[new w(-.3,-.25,.45),58]])n.position.copy(M).applyMatrix4(y.g.matrixWorld),n.position.y=Math.max(n.position.y,.95),n.lookAt(v.clone().applyMatrix4(y.g.matrixWorld)),n.fov=T,n.updateProjectionMatrix(),n.updateMatrixWorld(),t.setRenderTarget(this.post.szeneRT),t.setClearColor(this.nebelFarbe,1),t.clear(),t.render(this.szene,n),await r(),g.innen.visible=!0,y.modell.visible=!1;y.modell.visible=x,this.convoy.innenGlas=E,t.setScissorTest(!0)}}catch(g){console.warn("Aufw\xE4rmen",g)}t.setScissorTest(!1),t.setRenderTarget(null);for(let[g,y]of a)g.frustumCulled=y;for(let g of o)g.autoUpdate=!0;for(let g of l)g.visible=!1;n.position.copy(c),n.quaternion.copy(h),n.fov=u,n.updateProjectionMatrix(),n.updateMatrixWorld()}async nachladen(){let e=new Jh(this.basis);this.lader=e,this.kw.lader=e;let t=async(u,f)=>{try{return await f()}catch(d){return console.warn("Nachladen",u,d),null}},[n,i,r]=await Promise.all([e.textur("welt/texturen/asphalt_farbe.webp",{srgb:!0}),e.textur("welt/texturen/asphalt_normal.webp"),e.textur("welt/texturen/asphalt_rauheit.webp")]);this.strasse.setzeTexturen(n,i,r);let a=await e.hdr("welt/texturen/nacht.hdr");if(a){let u=this.umgebung.setzeHdri(this.renderer,a);u&&this.convoy.setzeEnv(u)}if(this.ladeStand.schritt="modelle",this.umgebung.ladeModelle&&await t("Umgebung",()=>this.umgebung.ladeModelle(e,this)),!this.umgebung.echteBaeume){let[u,f,d,m]=await Promise.all([e.glb("welt/baeume.glb"),e.textur("welt/texturen/rinde_farbe.webp",{srgb:!0}),e.textur("welt/texturen/rinde_normal.webp"),e.textur("welt/texturen/nadeln.png",{srgb:!0,wiederholen:!1})]);this.umgebung.setzeBaeume(u,f,d,m)}this.convoy.ladeModelle&&await t("Convoy",()=>this.convoy.ladeModelle(e,this));let[o,l]=await Promise.all([e.textur("welt/texturen/boden_farbe.webp",{srgb:!0}),e.textur("welt/texturen/boden_normal.webp")]);this.umgebung.setzeBoden(o,l,this.strasse),await this.nachkompilieren(),this.basisFertig=!0,this.ladeStand.schritt="rest";let c=()=>new Promise(u=>window.requestIdleCallback?window.requestIdleCallback(()=>u(),{timeout:1500}):setTimeout(u,120)),h=this.kapitel.map((u,f)=>({k:u,i:f})).filter(u=>u.k.ladeModelle);for(;h.length;){let u=this.gAktuell||0;h.sort((m,b)=>{let p=m.i+.5-u,g=b.i+.5-u,y=p>=-.5?p:100+Math.abs(p),M=g>=-.5?g:100+Math.abs(g);return y-M});let{k:f,i:d}=h.shift();await t("Kapitel",()=>f.ladeModelle(e,this)),this.verankereLichter(),await this.nachkompilieren([d]),await c()}if(!this.kapitel[7].eigeneModelle){let u=await e.glb("welt/innenraum.glb");u&&this.kapitel[7].setzeInnenraum&&this.kapitel[7].setzeInnenraum(u)}if(!(this.kapitel[3].eigeneModelle&&this.kapitel[6].eigeneModelle&&this.kapitel[8].eigeneModelle)){let u=await e.glb("welt/requisiten.glb");u&&(!this.kapitel[3].eigeneModelle&&this.kapitel[3].setzeBlitzer&&this.kapitel[3].setzeBlitzer(u),!this.kapitel[6].eigeneModelle&&this.kapitel[6].setzeRequisiten&&this.kapitel[6].setzeRequisiten(u),!this.kapitel[8].eigeneModelle&&this.kapitel[8].setzePlakatwand&&this.kapitel[8].setzePlakatwand(u))}this.verankereLichter(),await this.nachkompilieren([3,6,8]),this.ladeStand.schritt="fertig",this.allesGeladen=!0}verankereLichter(){let e=(this.stufe.lichter|0)>0;this.szene.traverse(i=>{i.isLight&&i.layers.enable(It)});let t=(i,r)=>{let a=[];i.traverse(o=>{o.isLight&&!o.isAmbientLight&&!o.isHemisphereLight&&!o.userData.verankert&&a.push(o)});for(let o of a)o.userData.verankert=!0,e?(o.intensity=0,o.parent&&o.parent.remove(o)):(r.attach(o),o.visible=!0)};for(let i of this.kapitel||[])i.gruppe&&t(i.gruppe,this.szene);let n=this.kapitel&&this.kapitel[7]&&this.kapitel[7].innen;n&&t(n,this.convoy.autos[0].g)}setzeStufe(e){let t=sl[e]||sl.hoch;this.stufeName=e,this.stufe=t,this.strasse.setzeSpiegel(t.spiegel),this.regen.setzeAnzahl(t.regen),this.post.setzeTaps(t.taps),this.post.setzeSchlank(e==="niedrig"),this.renderer.toneMapping=t.direkt?Ao:Wn,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=t.direkt?nt:wt,this.umgebung.kegelInstanzen&&(this.umgebung.kegelInstanzen.visible=t.kegel);for(let n of[this.umgebung,this.convoy,this.post,this.strasse,...this.kapitel||[]])n&&typeof n.setzeStufe=="function"&&n.setzeStufe(t,e);this.groesse(this.w,this.h,this.dprWunsch||1,!0)}groesse(e,t,n,i=!1){this.dprWunsch=n,n=Math.min(n,this.stufe.dpr),!(!i&&e===this.w&&t===this.h&&n===this.dpr)&&(this.w=e,this.h=t,this.dpr=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.kamera.aspect=e/t,this.kamera.updateProjectionMatrix(),this.post.groesse(e*n,t*n,this.stufe.samples,this.stufe.bloom),this.strasse.groesse(e*n,t*n))}bild(e,t){if(!this.fertig)return;let n=this.zeitAlt!=null?Math.min(.5,Math.max(0,t.zeit-this.zeitAlt)):e;this.zeitAlt=t.zeit,e=Math.min(e,.05),this.t+=e;let i=this.t,r=t.g;this.gAktuell=r;let a=t.v*Ps;Math.abs(a)<.4?this.kriech=Math.min(10,this.kriech+.5*e):this.kriech=Math.max(0,this.kriech-Math.abs(a)*e*.25);let o=r*Ps+this.kriech,l=(o-this.zc)/e;this.zc=o,this.convoy.bremse=0,this.convoy.sanftBremse=0,this.convoy.innenGlas=0,this.kw&&this.kw.marker&&(this.kw.marker.sicht=0,this.kw.marker.sprecher=-1),this.schnee.staerke=0;let c=this.umgebung.himmelUniforms;c.warnung.value=0,c.aurora.value=0,c.sterne.value=.6,c.mond.value=.25;let h={lead:this.convoy.fuehrung,autos:this._autos,kamera:this.kamera,tempo:l,dpr:this.dpr,g:r};for(let v=0;v<this.convoy.autos.length;v++)this._autos[v].copy(this.convoy.autos[v].g.position);for(let v=0;v<this.kapitel.length;v++){let T=this.kapitel[v],_=db(v,r);T.gruppe.visible=_>.002,_>.002&&T.update(Qe(r-v,-.5,1.5),_,i,e,h)}Hd(this.kw,h,i),this.convoy.update(i,e,this.zc,l,this.kamera,this.strasse,r),this.fahrt.maus.set(t.maus.x,t.maus.y),this.fahrt.update(r,this.convoy.fuehrung,this.kamera.aspect,e,i),this.umgebung.update(i,this.kamera,this.strasse);let u=Qe(r-.5,0,pr-1),f=Math.floor(u),d=Math.min(pr-1,f+1),m=u-f,b=_b[f],p=_b[d];this.szene.fog.density=Gt(b[0],p[0],m),this._farbe2||(this._farbe2=new _e),this._farbe2.setHex(p[1]),this.nebelFarbe.setHex(b[1]).lerp(this._farbe2,m),this.szene.fog.color.copy(this.nebelFarbe),this.post.uniforms.belichtung.value=Gt(b[2],p[2],m),this.post.uniforms.bloom.value=Gt(b[3],p[3],m)/this.stufe.bloom*5,this.post.uniforms.vignette.value=Gt(b[5],p[5],m);let g=Gt(b[4],p[4],m);this.regen.update(i,this.kamera.position,g),this.schnee.update(i,this.kamera.position,this.schnee.staerke,this.dpr);let y=Math.floor(r);this.letztesKapitel>=0&&y!==this.letztesKapitel&&(this.glitch=1),this.letztesKapitel=y,this.glitch=Math.max(0,this.glitch-n*3.2);let M=Qe(Math.abs(a)/70);this.post.uniforms.glitch.value=this.glitch*this.glitch,this.post.uniforms.tempo.value=M,this.post.uniforms.aberration.value=M*.8,this.post.uniforms.zeit.value=i,this.post.uniforms.blende.value=1,this.kometUpdate(r,t.logoRect,i);let x=this.renderer,E=this.kapitel[5];E.webcamBild&&E.schirm&&(E.schirm.visible=!1,x.setRenderTarget(this.webcamRT),x.setClearColor(this.nebelFarbe,1),x.clear(),x.render(this.szene,E.webcamKamera),E.schirm.visible=!0),this.strasse.spiegeln(x,this.szene,this.kamera,this.nebelFarbe),this.stufe.direkt?(x.setRenderTarget(null),x.setClearColor(this.nebelFarbe,1),x.clear(),x.render(this.szene,this.kamera)):(x.setRenderTarget(this.post.szeneRT),x.setClearColor(this.nebelFarbe,1),x.clear(),x.render(this.szene,this.kamera),this.post.abschliessen()),this.bilder++}kometUpdate(e,t,n){let i=e-8,r=i>.62&&t&&t.width>10;if(this.komet.visible=r,this.logoBogen=0,!r)return;let a=372*Lt(.68,.95,i);this.logoBogen=a;let o=zt.degToRad(this.kamera.fov),l=8,h=2*l*Math.tan(o/2)/this.h,u=t.left+t.width*.519,f=t.top+t.height*.48,d=t.width*.472,m=Lt(.955,.99,i),b=zt.degToRad(180+a),p=(y,M)=>{let x=u+d*Math.sin(y),E=f-d*Math.cos(y);return M.set((x-this.w/2)*h,-(E-this.h/2)*h,-l),M};p(b,this.kometKopf.position);let g=t.width*.2*h*(1-m*.6);this.kometKopf.scale.set(g,g,1),this.kometKopf.material.opacity=(1-m)*Lt(.62,.7,i);for(let y=0;y<this.kometSchweif.length;y++){let M=this.kometSchweif[y],x=(y+1)/this.kometSchweif.length,E=b-zt.degToRad(x*40*(.3+.7*Qe(a/60)));p(E,M.position);let v=t.width*.13*h*(1-x*.8)*(.8+.2*Math.sin(n*9+y));M.scale.set(v,v,1),M.material.opacity=(1-x)*.7*(1-m)*Lt(.62,.7,i)}this.kometFunken.mesh.position.copy(this.kometKopf.position),this.kometFunken.update(n,this.kometKopf.position,(1-m)*.8,this.dpr)}},nT=7,Kd=4,Xd=5.5,yb=18,jd=22,iT=Math.cos(zt.degToRad(46)),yr=null});function Sb(s,e=1/0){let t=[],n=Math.min(s.count,e);for(let i=0;i<n;i++)s.getMatrixAt(i,Eb),rl.setFromMatrixPosition(Eb),t.push({x:rl.x,y:rl.y,z:rl.z});return t}function oT(s){let e=[],t=s.umgebung,n=s.strasse;return t&&t.gelaende&&e.push(t.gelaende),n&&(n.bankett&&e.push(n.bankett),n.boden&&e.push(n.boden),n.mesh&&e.push(n.mesh)),s.szene.traverse(i=>{i.isMesh&&/^(boden:|fahrbahn:)/.test(i.name||"")&&e.push(i)}),e}function lT(s,e,t,n){s.set(rl.set(t,400,n),new w(0,-1,0));let i=null;for(let r of e){let a=r.visible;r.visible=!0;let o=s.intersectObject(r,!1);r.visible=a;for(let l of o)(i===null||l.point.y>i)&&(i=l.point.y)}return i}function Tb(s,e={}){let t=e.toleranz??.05,n=e.stichprobe??1200,i=new wo,r=oT(s),a=s.umgebung,o=[],l=(u,f,d=.03)=>{let m=f.length>n?f.length/n:1,b=[],p=0;for(let g=0;g<f.length;g+=m){let y=f[Math.floor(g)],M=lT(i,r,y.x,y.z);if(p++,M===null){b.push({x:+y.x.toFixed(1),z:+y.z.toFixed(1),y:+y.y.toFixed(2),boden:null});continue}let x=y.y-(M-d);Math.abs(x)>t&&b.push({x:+y.x.toFixed(1),z:+y.z.toFixed(1),y:+y.y.toFixed(2),boden:+M.toFixed(2),d:+x.toFixed(2)})}o.push({name:u,geprueft:p,verstoesse:b.length,beispiele:b.slice(0,6)})};if(a){if(a.baumPlaetze&&l("B\xE4ume nah",a.baumPlaetze,.03),a.baeume&&a.baeume.fernPlaetze&&l("B\xE4ume fern (Billboards)",a.baeume.fernPlaetze,.04),a.bewuchs&&a.bewuchs.meshes)for(let u of a.bewuchs.meshes)/kulisse/.test(u.name)||l(u.name,Sb(u),.03);a.laternenPlaetze&&l("Laternen",a.laternenPlaetze.map(u=>({x:u.seite*5.8,y:0,z:u.z})),0),a.leitplankenPlaetze&&l("Leitplanken",a.leitplankenPlaetze.map(u=>({x:u.seite*5.2,y:0,z:u.z})),0)}let c=o.reduce((u,f)=>u+f.verstoesse,0),h=o.reduce((u,f)=>u+f.geprueft,0);return c?console.warn("Bodenpr\xFCfung (Strahl): "+c+" von "+h+" nicht am Boden",o.filter(u=>u.verstoesse)):console.info("Bodenpr\xFCfung (Strahl): alle "+h+" Instanzen am Boden (|\u0394| \u2264 "+t+" m)"),{gruppen:o,verstoesse:c,geprueft:h}}function wb(s,e,t,n,i){let r=s.umgebung,a=[];if(!r)return a;for(let o of r.baumPlaetze||[])o.z>=e&&o.z<=t&&o.x>=n&&o.x<=i&&a.push({art:o.art,x:+o.x.toFixed(1),z:+o.z.toFixed(1),s:+o.s.toFixed(2)});if(r.bewuchs&&r.bewuchs.meshes){for(let o of r.bewuchs.meshes)if(!/kulisse/.test(o.name))for(let l of Sb(o))l.z>=e&&l.z<=t&&l.x>=n&&l.x<=i&&a.push({art:o.name,x:+l.x.toFixed(1),z:+l.z.toFixed(1)})}return a}var Eb,rl,Rb=lt(()=>{Tt();Eb=new Pe,rl=new w});var Qh,Ab=lt(()=>{Qt();Qh=class{constructor(e){this.gewichte=e;let t=e.reduce((r,a)=>r+a,0);this.start=[];let n=0;for(let r of e)this.start.push(n/t),n+=r;this.start.push(1),this.p=0,this.ps=0,this.g=0,this.v=0,this.kapitel=0,this.u=0,this.sprung=null,this.summe=t,this._lesen();let i=()=>{this.sprung=null};window.addEventListener("wheel",i,{passive:!0}),window.addEventListener("touchstart",i,{passive:!0})}laenge(){return Math.max(1,document.documentElement.scrollHeight-window.innerHeight)}_lesen(){this.p=Qe(window.scrollY/this.laenge())}weg(e){let t=this.gewichte.length;for(let n=0;n<t;n++)if(e<this.start[n+1]||n===t-1){let i=(e-this.start[n])/Math.max(1e-6,this.start[n+1]-this.start[n]);return n+Qe(i,0,1)}return t}stand(e){let t=this.gewichte.length;return e=Math.max(0,Math.min(t-1,e)),(this.start[e]+(this.start[e+1]-this.start[e])*(e===0?0:.14))*this.laenge()}springe(e){let t=window.scrollY,n=this.stand(e),i=Math.min(1.4,.45+Math.abs(n-t)/this.laenge()*2.2);this.sprung={von:t,nach:n,t0:performance.now(),dauer:i*1e3}}update(e){if(this.sprung){let a=this.sprung,o=Qe((performance.now()-a.t0)/a.dauer),l=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;window.scrollTo(0,a.von+(a.nach-a.von)*l),o>=1&&(this.sprung=null)}this._lesen();let t=ti(e,.26),n=this.ps;this.ps+=(this.p-this.ps)*t,Math.abs(this.p-this.ps)<2e-5&&(this.ps=this.p);let i=this.g;this.g=this.weg(this.ps);let r=e>0?(this.g-i)/e:0;return this.v+=(r-this.v)*ti(e,.08),this.kapitel=Math.min(this.gewichte.length-1,Math.floor(this.g)),this.u=this.g-this.kapitel,this}}});var cT,hT,uT,fT,eu,Cb=lt(()=>{Qt();cT="ABCDEFGHKLMNOPRSTUVXYZ#%&",hT="abcdeghknopqrsuvxyz",uT="0123456789",fT=s=>{let e=/[A-ZÄÖÜ]/.test(s)?cT:/[0-9]/.test(s)?uT:hT;return e[Math.floor(Math.random()*e.length)]},eu=class{constructor(e,t){this.abschnitte=e,this.punkte=t,this.aktiv=-1,this.spiele=new Map;for(let n of e){let i=n.querySelector("h1, h2");if(!i)continue;let r=[...i.childNodes].map(l=>l.nodeName==="BR"?`
`:l.textContent).join(""),a=document.createElement("span");a.className="echt",a.textContent=r;let o=document.createElement("span");o.className="spiel",o.setAttribute("aria-hidden","true"),i.textContent="",i.append(a,o),n._kopf={h:i,echt:a,spiel:o,text:a.textContent}}}scramble(e,t){let n=e._kopf;if(!n)return;let i=n.text,r=performance.now();n.h.classList.add("entschluesselt");let a=()=>{let o=Qe((performance.now()-r)/t),l="";for(let c=0;c<i.length;c++){let h=i[c];if(h===" "||h==="."||h===","||h===":"||h===`
`){l+=h;continue}let u=o*1.25-c/i.length*.25;l+=u>.95?h:Math.random()<.6?fT(h):h}n.spiel.textContent=l,o<1?e._spielId=requestAnimationFrame(a):(n.spiel.textContent="",n.h.classList.remove("entschluesselt"))};e._spielId&&cancelAnimationFrame(e._spielId),e._spielId=requestAnimationFrame(a)}update(e){let t=this.abschnitte.length,n=Math.min(t-1,Math.max(0,Math.floor(e)));if(n!==this.aktiv){this.aktiv=n,this.punkte.forEach((r,a)=>{a===n?r.setAttribute("aria-current","true"):r.removeAttribute("aria-current")});let i=this.abschnitte[n];(i&&!i._zuletzt||performance.now()-(i._zuletzt||0)>1200)&&this.scramble(i,420),i&&(i._zuletzt=performance.now())}for(let i=0;i<t;i++){let r=this.abschnitte[i],a=e-i,o;i===0?o=dt(a,-2,-1,.72,.9):i===t-1?o=dt(a,.66,.8,3,4):i===7?o=dt(a,.06,.22,.9,.99):o=dt(a,.06,.24,.8,.95);let l=o>.005;r._sichtbar!==l&&(r._sichtbar=l,r.classList.toggle("da",l)),l&&(r.style.opacity=o.toFixed(3),r.style.transform=`translate3d(0, ${((1-o)*22).toFixed(1)}px, 0)`)}}}});function Ib(s,e){let t=s.createGain();t.gain.value=0;let n=s.createDynamicsCompressor();n.threshold.value=-24,n.knee.value=12,n.ratio.value=12,n.attack.value=.003,n.release.value=.25,t.connect(n),n.connect(e);let i=s.sampleRate*2,r=s.createBuffer(1,i,s.sampleRate),a=r.getChannelData(0),o=1;for(let b=0;b<i;b++)o=o*16807%2147483647,a[b]=o/2147483647*2-1;let l=s.createBufferSource();l.buffer=r,l.loop=!0;let c=s.createBiquadFilter();c.type="lowpass",c.frequency.value=260,c.Q.value=.8;let h=s.createGain();h.gain.value=.05,l.connect(c),c.connect(h),h.connect(t);let u=s.createOscillator();u.type="sawtooth",u.frequency.value=52;let f=s.createOscillator();f.type="triangle",f.frequency.value=104.5;let d=s.createBiquadFilter();d.type="lowpass",d.frequency.value=160,d.Q.value=.6;let m=s.createGain();return m.gain.value=.035,u.connect(d),f.connect(d),d.connect(m),m.connect(t),l.start(),u.start(),f.start(),{master:t,wind:h,windFilter:c,summen:m,o1:u,o2:f,begrenzer:n}}var Pb,al,Lb=lt(()=>{Qt();Pb=.4;al=class{constructor(e){this.knopf=e,this.ctx=null,this.g=null,this.an=!1,this.tempoIst=0,e&&e.addEventListener("click",()=>this.schalten())}schalten(){if(!this.ctx){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.g=Ib(this.ctx,this.ctx.destination)}this.an=!this.an;let e=this.ctx.currentTime;this.an?(this.ctx.resume(),this.g.master.gain.cancelScheduledValues(e),this.g.master.gain.setValueAtTime(this.g.master.gain.value,e),this.g.master.gain.linearRampToValueAtTime(Pb,e+1.2)):(this.g.master.gain.cancelScheduledValues(e),this.g.master.gain.setValueAtTime(this.g.master.gain.value,e),this.g.master.gain.linearRampToValueAtTime(0,e+.5),setTimeout(()=>{!this.an&&this.ctx&&this.ctx.suspend()},600)),this.knopf&&(this.knopf.setAttribute("aria-pressed",this.an?"true":"false"),this.knopf.classList.toggle("an",this.an))}update(e,t){if(!this.an||!this.g)return;this.tempoIst+=(Qe(t)-this.tempoIst)*ti(e,.4);let n=this.tempoIst,i=this.ctx.currentTime;this.g.windFilter.frequency.setTargetAtTime(260+n*1100,i,.1),this.g.wind.gain.setTargetAtTime(.05+n*.12,i,.1),this.g.o1.frequency.setTargetAtTime(52+n*44,i,.15),this.g.o2.frequency.setTargetAtTime(104.5+n*88,i,.15),this.g.summen.gain.setTargetAtTime(.035+n*.03,i,.15)}tick(){if(!this.an||!this.g)return;let e=this.ctx,t=e.currentTime,n=e.createOscillator();n.type="sine",n.frequency.setValueAtTime(1320,t),n.frequency.exponentialRampToValueAtTime(880,t+.12);let i=e.createGain();i.gain.setValueAtTime(1e-4,t),i.gain.exponentialRampToValueAtTime(.07,t+.015),i.gain.exponentialRampToValueAtTime(1e-4,t+.16),n.connect(i),i.connect(this.g.master),n.start(t),n.stop(t+.2)}static async pruefen(e=3){let t=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(!t)return null;let n=new t(1,48e3*e,48e3),i=Ib(n,n.destination);i.master.gain.setValueAtTime(Pb,0),i.windFilter.frequency.setValueAtTime(1360,1),i.wind.gain.setValueAtTime(.17,1),i.summen.gain.setValueAtTime(.065,1);let r=n.createOscillator();r.type="sine",r.frequency.setValueAtTime(1320,2);let a=n.createGain();a.gain.setValueAtTime(1e-4,2),a.gain.exponentialRampToValueAtTime(.07,2.015),a.gain.exponentialRampToValueAtTime(1e-4,2.16),r.connect(a),a.connect(i.master),r.start(2),r.stop(2.2);let l=(await n.startRendering()).getChannelData(0),c=0,h=0;for(let f=0;f<l.length;f++){let d=Math.abs(l[f]);c+=d*d,d>h&&(h=d)}let u=Math.sqrt(c/l.length);return{rms:u,spitze:h,rmsDb:20*Math.log10(u+1e-9),spitzeDb:20*Math.log10(h+1e-9)}}}});var pT=Ob(()=>{Mb();Rb();Ab();Cb();Lb();Vd();Qt();function dT(s){let e="";try{let a=s.getExtension("WEBGL_debug_renderer_info");e=a?String(s.getParameter(a.UNMASKED_RENDERER_WEBGL)):""}catch{}let t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform),n=navigator.hardwareConcurrency||4,i="hoch";/SwiftShader|llvmpipe|Software|Basic Render/i.test(e)?i="niedrig":t?i=n>=6?"mittel":"niedrig":n<=2&&(i="niedrig");let r=/SwiftShader|llvmpipe|Software|Basic Render/i.test(e);return{stufe:i,renderer:e,mobil:t,software:r}}function kb(){let s=document.documentElement,e=document.getElementById("welt"),t=document.querySelector("main"),n=Array.from(document.querySelectorAll("main .kapitel")),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=window.FREQ={bereit:!1,fps:0,stufe:"",grund:""};if(!e||!t||n.length===0)return;if(i){s.classList.add("ruhig"),r.grund="reduzierte Bewegung";return}let a=null;try{a=e.getContext("webgl2",{antialias:!1,alpha:!1,depth:!1,stencil:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch{a=null}if(!a){s.classList.add("ohne-webgl"),r.grund="kein WebGL2";return}let o={};for(let Y of n)for(let[fe,ke]of Object.entries(Y.dataset))if(fe.startsWith("w")){let V=fe.slice(1);o[V.charAt(0).toLowerCase()+V.slice(1)]=ke}let l=n.map(Y=>parseFloat(Y.dataset.gewicht||"1.3")),c=l.reduce((Y,fe)=>Y+fe,0),h=document.body.dataset.basis||"",u=dT(a),f=new URLSearchParams(location.search),d=sl[f.get("stufe")]?f.get("stufe"):u.stufe;s.classList.add("welt"),t.style.height=CSS.supports&&CSS.supports("height","100lvh")?`${c*100}lvh`:`${c*100}vh`,"scrollRestoration"in history&&(history.scrollRestoration="manual");let m=document.querySelector(".marke img"),b=new $h(e,{woerter:o,stufe:d,basis:h,context:a,logoMarke:m}),p=new Qh(l);p.ps=p.p;let g=Array.from(document.querySelectorAll(".kapitelnav button")),y=new eu(n,g),M=new al(document.getElementById("ton")),x=document.querySelector(".finale-logo"),E=document.getElementById("neigung");r.welt=b,r.rollen=p,r.ton=M,r.info=u,r.stufe=d,r.texte=y;let v=document.getElementById("laden"),T={hoch:133e5,mittel:112e5,niedrig:54e5},_={modelle:v&&v.dataset.modelle||"",grafik:v&&v.dataset.grafik||""},R=performance.now(),C=-1,B=setInterval(()=>{if(!v||r.bereit)return;let Y=performance.getEntriesByType("resource").filter(Re=>/\/(welt|bild)\//.test(Re.name)).reduce((Re,De)=>Re+(De.transferSize||De.encodedBodySize||0),0),fe=b.ladeStand,ke=fe.schritt,ee=.82*Math.min(1,Y/(T[b.stufeName]||T.hoch));ke==="grafik"&&(ee=Math.max(ee,.82+.18*(fe.aufwaermen||0))),(ke==="rest"||ke==="fertig"||b.basisFertig)&&(ee=1);let ce=Math.round(ee*100);if(ce!==C){C=ce;let Re=372*ee,De=(180+Re)*Math.PI/180;v.style.setProperty("--laden-bogen",Re.toFixed(1)+"deg"),v.style.setProperty("--kx",(51.9+47.2*Math.sin(De)).toFixed(2)+"%"),v.style.setProperty("--ky",(48-47.2*Math.cos(De)).toFixed(2)+"%");let Ue=document.getElementById("laden-prozent");Ue&&(Ue.textContent=ce+" %")}let he=document.getElementById("laden-was"),de=ke==="grafik"?document.documentElement.lang==="en"?"Building the graphics \u2026":"Baut die Grafik \u2026":null;he&&de&&he.textContent!==de&&(he.textContent=de)},120);r.ladeStand=()=>({bytes:performance.getEntriesByType("resource").filter(Y=>/\/(welt|bild)\//.test(Y.name)).reduce((Y,fe)=>Y+(fe.transferSize||fe.encodedBodySize||0),0),schritt:b.ladeStand.schritt,prozent:C}),"serviceWorker"in navigator&&/^https?:/.test(location.protocol)&&window.addEventListener("load",()=>{navigator.serviceWorker.register(h+"sw.js").catch(()=>{})});let G={x:0,y:0},k=null;window.addEventListener("pointermove",Y=>{Y.pointerType==="mouse"&&(G.x=(Y.clientX/window.innerWidth-.5)*2,G.y=(Y.clientY/window.innerHeight-.5)*2)},{passive:!0});let z=()=>{window.addEventListener("deviceorientation",Y=>{if(Y.gamma==null||Y.beta==null)return;let fe=Math.abs(window.orientation||screen.orientation&&screen.orientation.angle||0)===90,ke=fe?Y.beta:Y.gamma,V=fe?Y.gamma:Y.beta;k={x:Qe(ke/28,-1,1),y:Qe((V-(fe?0:48))/28,-1,1)}},{passive:!0})};if(E){let Y=window.DeviceOrientationEvent;Y&&typeof Y.requestPermission=="function"&&u.mobil?(E.hidden=!1,E.addEventListener("click",async()=>{try{await Y.requestPermission()==="granted"&&(z(),E.setAttribute("aria-pressed","true"),E.classList.add("an"))}catch{}})):Y&&u.mobil&&z()}window.addEventListener("keydown",Y=>{let fe=Y.target,ke=fe&&(fe.tagName==="INPUT"||fe.tagName==="TEXTAREA"||fe.tagName==="BUTTON"||fe.tagName==="A"),V=p.kapitel;Y.key==="ArrowDown"||Y.key==="PageDown"||Y.key===" "&&!ke&&!Y.shiftKey?(Y.preventDefault(),p.springe(V+1)):Y.key==="ArrowUp"||Y.key==="PageUp"||Y.key===" "&&!ke&&Y.shiftKey?(Y.preventDefault(),p.springe(V-1)):Y.key==="Home"&&!ke?(Y.preventDefault(),p.springe(0)):Y.key==="End"&&!ke&&(Y.preventDefault(),p.springe(l.length-1))}),g.forEach((Y,fe)=>Y.addEventListener("click",()=>p.springe(fe))),n.forEach((Y,fe)=>Y.addEventListener("focusin",()=>{Math.abs(p.g-fe-.5)>.6&&p.springe(fe)}));let N=()=>{let Y=window.innerWidth,fe=window.innerHeight;e.style.width=Y+"px",e.style.height=fe+"px",b.groesse(Y,fe,Math.min(window.devicePixelRatio||1,u.software?.35:2))};window.addEventListener("resize",N),N();let L=["niedrig","mittel","hoch"],O=0,U=0,q=0,j=0,oe=0,Q=!1,Ee=(Y,fe)=>{if(q||(q=fe),O++,U+=Y,fe-q<2e3)return;let ke=O/U;if(r.fps=Math.round(ke),O=0,U=0,q=fe,b.bilder<90)return;if(Math.abs(p.v)>.02||p.sprung){j=Math.max(0,j-1);return}let V=L.indexOf(b.stufeName);ke<42?(j++,oe=0,j>=3&&V>0&&(b.setzeStufe(L[V-1]),r.stufe=b.stufeName,r.grund="langsam "+Math.round(ke)+" fps",j=0)):ke>57?(oe++,j=0,oe>=6&&V===0&&!Q&&!u.mobil&&(b.setzeStufe("mittel"),r.stufe=b.stufeName,Q=!0,oe=0)):(j=0,oe=0)},Se=performance.now(),je=0,ne=-1,le={g:null},be=Y=>{requestAnimationFrame(be);let fe=(Y-Se)/1e3;Se=Y,(fe<=0||fe>.5)&&(fe=1/60),p.update(fe),le.g!==null&&(p.ps=p.p,p.g=p.weg(p.ps),p.v=0,p.kapitel=Math.min(l.length-1,Math.floor(p.g)),le.g=null);let ke=p.g;y.update(ke);let V=Math.min(l.length-1,Math.floor(ke));ne>=0&&V!==ne&&M.tick(),ne=V;let ee=k||G,ce=null;if(x&&ke>8.62&&(ce=x.getBoundingClientRect()),b.fertig){if(b.bild(fe,{g:ke,v:p.v,kapitel:V,u:ke-V,maus:ee,logoRect:ce,zeit:Y/1e3}),x&&x.style.setProperty("--bogen",(ke>8.62?b.logoBogen:0).toFixed(2)+"deg"),je++,!r.bereit&&je>=3){let he=Y-R>8e3;if(b.basisFertig||he){if(!b.basisFertig&&L.indexOf(b.stufeName)>0&&(b.setzeStufe(L[L.indexOf(b.stufeName)-1]),r.stufe=b.stufeName,r.grund="Laden > 8 s: Stufe "+b.stufeName),v){v.style.setProperty("--laden-bogen","372deg");let de=document.getElementById("laden-prozent");de&&(de.textContent="100 %");let Re=document.getElementById("laden-was");Re&&(Re.textContent=document.documentElement.lang==="en"?"Ready":"Bereit")}clearInterval(B),s.classList.add("bereit"),r.bereit=!0,r.bereitNach=Math.round(Y-R)}}Ee(fe,Y)}M.update(fe,Qe(Math.abs(p.v)*Ps/60))};requestAnimationFrame(be),b.laden().then(()=>{N()}).catch(Y=>{console.error("Welt konnte nicht laden",Y),s.classList.remove("welt"),s.classList.add("ohne-webgl"),r.grund="Laden fehlgeschlagen: "+(Y&&Y.message)});let Ge=/^#k(\d)$/.exec(location.hash);if(Ge){let Y=Math.min(l.length-1,parseInt(Ge[1],10));window.scrollTo(0,p.stand(Y)),p.ps=p.p=Qe(window.scrollY/p.laenge()),p.g=p.weg(p.ps)}window.addEventListener("hashchange",()=>{let Y=/^#k(\d)$/.exec(location.hash);Y&&p.springe(parseInt(Y[1],10))}),r.springe=Y=>p.springe(Y),r.setze=Y=>{let fe=l.length,ke=Math.max(0,Math.min(fe-1,Math.floor(Y))),V=Y-ke,ee=p.start[ke]+(p.start[ke+1]-p.start[ke])*Qe(V,0,1);window.scrollTo(0,ee*p.laenge()),le.g=Y},r.tonPruefen=()=>al.pruefen(3),r.bodenPruefen=Y=>Tb(b,Y),r.baeumeBei=(Y,fe,ke,V)=>wb(b,Y,fe,ke,V),r.gewicht=()=>performance.getEntriesByType("resource").reduce((Y,fe)=>Y+(fe.transferSize||fe.encodedBodySize||0),0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",kb):kb()});pT();})();
