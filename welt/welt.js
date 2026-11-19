(()=>{var pt=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var rx=(s,e)=>()=>{try{return e||s((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};function ax(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ox(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function da(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jm(){let s=da("canvas");return s.style.display="block",s}function go(...s){let e="THREE."+s.shift();pa?pa("log",e,...s):console.log(e,...s)}function Zm(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Qe(...s){s=Zm(s);let e="THREE."+s.shift();if(pa)pa("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function rt(...s){s=Zm(s);let e="THREE."+s.shift();if(pa)pa("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function dr(...s){let e=s.join(" ");e in Sp||(Sp[e]=!0,Qe(...s))}function $m(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function xi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function vt(s,e,t){return Math.max(e,Math.min(t,s))}function Hf(s,e){return(s%e+e)%e}function lx(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function cx(s,e,t){return s!==e?(t-s)/(e-s):0}function uo(s,e,t){return(1-t)*s+t*e}function hx(s,e,t,n){return uo(s,e,1-Math.exp(-t*n))}function ux(s,e=1){return e-Math.abs(Hf(s,e*2)-e)}function fx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function dx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function px(s,e){return s+Math.floor(Math.random()*(e-s+1))}function mx(s,e){return s+Math.random()*(e-s)}function gx(s){return s*(.5-Math.random())}function bx(s){s!==void 0&&(Tp=s);let e=Tp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xx(s){return s*ho}function vx(s){return s*gr}function _x(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function yx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ex(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Sx(){let s={enabled:!0,workingColorSpace:Rt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Gt&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Gt&&(i.r=ca(i.r),i.g=ca(i.g),i.b=ca(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qt?mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Rt]:{primaries:e,whitePoint:n,transfer:mo,toXYZ:Rp,fromXYZ:Ap,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:Rp,fromXYZ:Ap,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),s}function ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ca(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Pu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}function ku(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Ou(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){cr.fromArray(s,r);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),l=e.dot(cr),c=t.dot(cr),h=n.dot(cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Dx(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Fx(s){Math.abs(s)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),s=vt(s,-65504,65504),os.floatView[0]=s;let e=os.uint32View[0],t=e>>23&511;return os.baseTable[t]+((e&8388607)>>os.shiftTable[t])}function Nx(s){let e=s>>10;return os.uint32View[0]=os.mantissaTable[os.offsetTable[e]+(s&1023)]+os.exponentTable[e],os.floatView[0]}function Ul(s,e,t,n,i,r){sa.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(io.x=r*sa.x-i*sa.y,io.y=i*sa.x+r*sa.y):io.copy(sa),s.copy(e),s.x+=io.x,s.y+=io.y,s.applyMatrix4(t0)}function Vx(s,e,t,n,i,r,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Zn,o),l===null)return null;Xl.copy(o),Xl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Xl);return c<t.near||c>t.far?null:{distance:c,point:Xl.clone(),object:s}}function Kl(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Gl),s.getVertexPosition(l,Vl),s.getVertexPosition(c,Wl);let h=Vx(s,e,t,n,Gl,Vl,Wl,Gp);if(h){let u=new R;as.getBarycoord(Gp,Gl,Vl,Wl,u),i&&(h.uv=as.getInterpolatedAttribute(i,o,l,c,u,new Ee)),r&&(h.uv1=as.getInterpolatedAttribute(r,o,l,c,u,new Ee)),a&&(h.normal=as.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new R,materialIndex:0};as.getNormal(Gl,Vl,Wl,f.normal),h.face=f,h.barycoord=u}return h}function $l(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(xc.fromBufferAttribute(o,i),vc.fromBufferAttribute(o,r),t.distanceSqToSegment(xc,vc,Ju,Zp)>n)return;Ju.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ju);if(!(c<e.near||c>e.far))return{distance:c,point:Zp.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}function tm(s,e,t,n,i,r,a){let o=lf.distanceSqToPoint(s);if(o<t){let l=new R;lf.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function Of(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}function sm(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function jx(s,e){let t=1-s;return t*t*e}function Yx(s,e){return 2*(1-s)*s*e}function Jx(s,e){return s*s*e}function fo(s,e,t,n){return jx(s,e)+Yx(s,t)+Jx(s,n)}function Zx(s,e){let t=1-s;return t*t*t*e}function $x(s,e){let t=1-s;return 3*t*t*s*e}function Qx(s,e){return 3*(1-s)*s*s*e}function ev(s,e){return s*s*s*e}function po(s,e,t,n,i){return Zx(s,e)+$x(s,t)+Qx(s,n)+ev(s,i)}function tv(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=n0(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=av(s,e,r,t)),s.length>80*t){o=s[0],l=s[1];let h=o,u=l;for(let f=t;f<i;f+=t){let d=s[f],m=s[f+1];d<o&&(o=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Do(r,a,t,o,l,c,0),a}function n0(s,e,t,n,i){let r;if(i===bv(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=rm(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=rm(a/n|0,s[a],s[a+1],r);return r&&Ea(r,r.next)&&(No(r),r=r.next),r}function _r(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Ea(t,t.next)||nn(t.prev,t,t.next)===0)){if(No(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Do(s,e,t,n,i,r,a){if(!s)return;!a&&r&&uv(s,n,i,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?iv(s,n,i,r):nv(s)){e.push(l.i,s.i,c.i),No(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=sv(_r(s),e),Do(s,e,t,n,i,r,2)):a===2&&rv(s,e,t,n,i,r):Do(_r(s),e,t,n,i,r,1);break}}}function nv(s){let e=s.prev,t=s,n=s.next;if(nn(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,r,a),u=Math.min(o,l,c),f=Math.max(i,r,a),d=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&co(i,o,r,l,a,c,m.x,m.y)&&nn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function iv(s,e,t,n){let i=s.prev,r=s,a=s.next;if(nn(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=Math.min(o,l,c),m=Math.min(h,u,f),x=Math.max(o,l,c),g=Math.max(h,u,f),p=cf(d,m,e,t,n),v=cf(x,g,e,t,n),E=s.prevZ,b=s.nextZ;for(;E&&E.z>=p&&b&&b.z<=v;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=g&&E!==i&&E!==a&&co(o,h,l,u,c,f,E.x,E.y)&&nn(E.prev,E,E.next)>=0||(E=E.prevZ,b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&co(o,h,l,u,c,f,b.x,b.y)&&nn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;E&&E.z>=p;){if(E.x>=d&&E.x<=x&&E.y>=m&&E.y<=g&&E!==i&&E!==a&&co(o,h,l,u,c,f,E.x,E.y)&&nn(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;b&&b.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&co(o,h,l,u,c,f,b.x,b.y)&&nn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function sv(s,e){let t=s;do{let n=t.prev,i=t.next.next;!Ea(n,i)&&s0(n,t,t.next,i)&&Fo(n,i)&&Fo(i,n)&&(e.push(n.i,t.i,i.i),No(t),No(t.next),t=s=i),t=t.next}while(t!==s);return _r(t)}function rv(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pv(a,o)){let l=r0(a,o);a=_r(a,a.next),l=_r(l,l.next),Do(a,e,t,n,i,r,0),Do(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function av(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=n0(s,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(dv(c))}i.sort(ov);for(let r=0;r<i.length;r++)t=lv(i[r],t);return t}function ov(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function lv(s,e){let t=cv(s,e);if(!t)return e;let n=r0(t,s);return _r(n,n.next),_r(t,t.next)}function cv(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if(Ea(s,t))return t;do{if(Ea(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&i0(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);Fo(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&hv(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function hv(s,e){return nn(s.prev,s,e.prev)<0&&nn(e.next,s,s.next)<0}function uv(s,e,t,n){let i=s;do i.z===0&&(i.z=cf(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,fv(i)}function fv(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function cf(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function dv(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function i0(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function co(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&i0(s,e,t,n,i,r,a,o)}function pv(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!mv(s,e)&&(Fo(s,e)&&Fo(e,s)&&gv(s,e)&&(nn(s.prev,s,e.prev)||nn(s,e.prev,e))||Ea(s,e)&&nn(s.prev,s,s.next)>0&&nn(e.prev,e,e.next)>0)}function nn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Ea(s,e){return s.x===e.x&&s.y===e.y}function s0(s,e,t,n){let i=nc(nn(s,e,t)),r=nc(nn(s,e,n)),a=nc(nn(t,n,s)),o=nc(nn(t,n,e));return!!(i!==r&&a!==o||i===0&&tc(s,t,e)||r===0&&tc(s,n,e)||a===0&&tc(t,s,n)||o===0&&tc(t,e,n))}function tc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function nc(s){return s>0?1:s<0?-1:0}function mv(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&s0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Fo(s,e){return nn(s.prev,s,s.next)<0?nn(s,e,s.next)>=0&&nn(s,s.prev,e)>=0:nn(s,e,s.prev)<0||nn(s,s.next,e)<0}function gv(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function r0(s,e){let t=hf(s.i,s.x,s.y),n=hf(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function rm(s,e,t,n){let i=hf(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function No(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function hf(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bv(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}function am(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function om(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}function vv(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(lm(i))i.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(lm(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function qn(s){let e={};for(let t=0;t<s.length;t++){let n=Ar(s[t]);for(let i in n)e[i]=n[i]}return e}function lm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function _v(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Gf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}function Fs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function oc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function Ev(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function cm(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Sv(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function a0(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Tv(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function wv(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=a0(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let l=Tv(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function hm(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}function Rv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return Ws;case"color":return Bo;case"quaternion":return ps;case"bool":case"boolean":return fs;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Av(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Rv(s.type);if(s.times===void 0){let n=[],i=[];Sv(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),oc(s.settings)&&(t.settings={inTangents:Fs(s.settings.inTangents,Float32Array),outTangents:Fs(s.settings.outTangents,Float32Array)}),t}function um(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function bm(s,e){return s.distance-e.distance}function bf(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)bf(r[a],e,t,!0)}}function qf(s,e,t,n){let i=Uv(n);switch(t){case Ff:return s*e;case Xc:return s*e/i.components*i.byteLength;case Kc:return s*e/i.components*i.byteLength;case Ys:return s*e*2/i.components*i.byteLength;case jc:return s*e*2/i.components*i.byteLength;case Nf:return s*e*3/i.components*i.byteLength;case pi:return s*e*4/i.components*i.byteLength;case Yc:return s*e*4/i.components*i.byteLength;case Yo:case Jo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zo:case $o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:case Qc:return Math.max(s,16)*Math.max(e,8)/4;case Jc:case $c:return Math.max(s,8)*Math.max(e,8)/2;case eh:case th:case ih:case sh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case nh:case Qo:case rh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case uh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case xh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case _h:case yh:case Mh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Eh:case Sh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case el:case Th:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Uv(s){switch(s){case En:case If:return{byteLength:1,components:1};case Aa:case Lf:case xn:return{byteLength:2,components:1};case Wc:case qc:return{byteLength:2,components:4};case Ai:case Vc:case Wn:return{byteLength:4,components:1};case kf:case Df:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}var xm,vf,vm,Tr,_m,Ta,Zn,Pn,Pt,Xi,Xs,Nt,_f,yf,Bc,xs,ym,Mm,Em,Sm,Tm,Xo,wm,Rm,Mf,Ef,Am,Cm,Pm,Im,Lm,km,Dm,Fm,Nm,lc,cc,hc,ha,uc,fc,dc,pc,Hc,Um,zm,si,Sf,Tf,wf,Ko,Rf,Af,Cf,nf,Bm,Pf,Ks,wr,wa,Oc,jo,Gn,bn,ua,fn,Gc,Rr,bt,Ra,en,En,If,Lf,Aa,Vc,Ai,Wn,xn,Wc,qc,Ca,kf,Df,Ff,Nf,pi,Hi,js,Xc,Kc,Ys,jc,Yc,Yo,Jo,Zo,$o,Jc,Zc,$c,Qc,eh,th,nh,ih,sh,Qo,rh,ah,oh,lh,ch,hh,uh,fh,dh,ph,mh,gh,bh,xh,vh,_h,yh,Mh,Eh,Sh,el,Th,pr,mr,rc,sf,rf,af,of,Hm,Uf,tl,Pa,Om,nl,Gm,qt,at,Rt,mo,Gt,ac,Vm,Wm,qm,Xm,wh,Km,jm,Rh,Ym,zf,vs,Bf,Ti,fa,Sp,pa,Qm,Oi,Hn,Tp,ho,gr,Xt,Xf,Ee,$t,Kf,R,Au,wp,jf,mt,Cu,Rp,Ap,yt,qr,mc,Tx,ma,wx,Iu,yn,Yf,zt,gc,on,bo,bc,zc,Fe,Xr,yi,Rx,Ax,Ps,Al,hi,Cp,Pp,Gi,ga,Cx,Ip,Kr,es,Cl,$a,Px,Ix,Lp,kp,Dp,Fp,Lx,jr,Lu,At,ot,kx,ba,e0,Is,Pl,Ce,On,xo,cs,Mi,ts,Du,ns,Yr,Jr,Np,Fu,Nu,Uu,zu,Bu,Hu,as,ln,is,Ei,Il,Zr,$r,Qr,Ls,ks,lr,Qa,Ll,kl,cr,os,Ns,gn,Dl,Ux,ct,vo,_o,ft,zx,eo,Gu,ni,Bx,bi,Vu,ea,ui,to,An,ht,br,Jn,Us,Wu,Hx,Ox,fi,Gx,Vn,Cn,ta,no,na,ia,sa,io,t0,Fl,so,Nl,Up,qu,zp,Dn,zl,Bp,yo,ss,Xu,Bl,Hl,zs,st,Hp,hr,Ol,Op,Gl,Vl,Wl,Ku,ql,Gp,Xl,ne,ro,Vp,Wp,Wx,qp,jl,ju,Xp,Yu,Mo,xa,Bs,Kp,qx,Eo,hs,ra,jp,Yl,Yp,Xx,ao,oo,Dt,ur,Kx,Jl,va,_a,xc,vc,Jp,lo,Zl,Ju,Zp,xr,$p,Qp,vr,So,ya,em,lf,Ql,ec,Hs,To,Lt,Os,_c,wo,Oe,Ro,Vi,kt,us,di,Ma,yc,nm,im,Zu,$u,Qu,Gs,Ao,Mc,Co,Ec,Po,Io,Lo,Sc,Tc,ko,Vs,uf,fr,yr,xv,lt,Mn,wi,Uo,Cr,yv,Mv,Ct,wc,Ne,sn,zo,Rc,Ac,Wi,Cc,Pc,Ic,Lc,ii,fs,Bo,ds,kc,ps,ms,Ws,Ho,Bi,Dc,o0,Ri,rs,ff,Mr,aa,Fc,Oo,Er,Sr,Go,ef,fm,dm,Sa,ic,sc,zi,Vo,Ds,pm,mm,an,df,gs,pf,Fn,qi,mf,qs,bs,tf,Wo,oa,la,Nc,Uc,Vf,Cv,Wf,Pv,Iv,Lv,kv,Dv,Fv,Nv,gf,Yt,qT,gm,qo,Jf,xf,Zf=pt(()=>{xm=0,vf=1,vm=2,Tr=1,_m=2,Ta=3,Zn=0,Pn=1,Pt=2,Xi=0,Xs=1,Nt=2,_f=3,yf=4,Bc=5,xs=100,ym=101,Mm=102,Em=103,Sm=104,Tm=200,Xo=201,wm=202,Rm=203,Mf=204,Ef=205,Am=206,Cm=207,Pm=208,Im=209,Lm=210,km=211,Dm=212,Fm=213,Nm=214,lc=0,cc=1,hc=2,ha=3,uc=4,fc=5,dc=6,pc=7,Hc=0,Um=1,zm=2,si=0,Sf=1,Tf=2,wf=3,Ko=4,Rf=5,Af=6,Cf=7,nf="attached",Bm="detached",Pf=300,Ks=301,wr=302,wa=303,Oc=304,jo=306,Gn=1e3,bn=1001,ua=1002,fn=1003,Gc=1004,Rr=1005,bt=1006,Ra=1007,en=1008,En=1009,If=1010,Lf=1011,Aa=1012,Vc=1013,Ai=1014,Wn=1015,xn=1016,Wc=1017,qc=1018,Ca=1020,kf=35902,Df=35899,Ff=1021,Nf=1022,pi=1023,Hi=1026,js=1027,Xc=1028,Kc=1029,Ys=1030,jc=1031,Yc=1033,Yo=33776,Jo=33777,Zo=33778,$o=33779,Jc=35840,Zc=35841,$c=35842,Qc=35843,eh=36196,th=37492,nh=37496,ih=37488,sh=37489,Qo=37490,rh=37491,ah=37808,oh=37809,lh=37810,ch=37811,hh=37812,uh=37813,fh=37814,dh=37815,ph=37816,mh=37817,gh=37818,bh=37819,xh=37820,vh=37821,_h=36492,yh=36494,Mh=36495,Eh=36283,Sh=36284,el=36285,Th=36286,pr=2300,mr=2301,rc=2302,sf=2303,rf=2400,af=2401,of=2402,Hm=2500,Uf=0,tl=1,Pa=2,Om=3200,nl=0,Gm=1,qt="",at="srgb",Rt="srgb-linear",mo="linear",Gt="srgb",ac=7680,Vm=519,Wm=512,qm=513,Xm=514,wh=515,Km=516,jm=517,Rh=518,Ym=519,zf=35044,vs=35048,Bf="300 es",Ti=2e3,fa=2001;Sp={},pa=null;Qm={[lc]:cc,[hc]:dc,[uc]:pc,[ha]:fc,[cc]:lc,[dc]:hc,[pc]:uc,[fc]:ha},Oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tp=1234567,ho=Math.PI/180,gr=180/Math.PI;Xt={DEG2RAD:ho,RAD2DEG:gr,generateUUID:xi,clamp:vt,euclideanModulo:Hf,mapLinear:lx,inverseLerp:cx,lerp:uo,damp:hx,pingpong:ux,smoothstep:fx,smootherstep:dx,randInt:px,randFloat:mx,randFloatSpread:gx,seededRandom:bx,degToRad:xx,radToDeg:vx,isPowerOfTwo:_x,ceilPowerOfTwo:yx,floorPowerOfTwo:Mx,setQuaternionFromProperEuler:Ex,normalize:Wt,denormalize:Si},Xf=class Xf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xf.prototype.isVector2=!0;Ee=Xf,$t=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*x;g<0&&(f=-f,d=-d,m=-m,x=-x,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),E=Math.sin(v);p=Math.sin(p*v)/E,o=Math.sin(o*v)/E,l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+x*o}else{l=l*p+f*o,c=c*p+d*o,h=h*p+m*o,u=u*p+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-o*d,e[t+2]=c*m+h*d+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kf=class Kf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kf.prototype.isVector3=!0;R=Kf,Au=new R,wp=new $t,jf=class jf{constructor(e,t,n,i,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],E=i[4],b=i[7],M=i[2],y=i[5],S=i[8];return r[0]=a*x+o*v+l*M,r[3]=a*g+o*E+l*y,r[6]=a*p+o*b+l*S,r[1]=c*x+h*v+u*M,r[4]=c*g+h*E+u*y,r[7]=c*p+h*b+u*S,r[2]=f*x+d*v+m*M,r[5]=f*g+d*E+m*y,r[8]=f*p+d*b+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jf.prototype.isMatrix3=!0;mt=jf,Cu=new mt,Rp=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ap=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);yt=Sx();mc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qr===void 0&&(qr=da("canvas")),qr.width=e.width,qr.height=e.height;let i=qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=qr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=da("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ls(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tx=0,ma=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Pu(i[a].image)):r.push(Pu(i[a]))}else r=Pu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};wx=0,Iu=new R,yn=class s extends Oi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=bn,i=bn,r=bt,a=en,o=pi,l=En,c=s.DEFAULT_ANISOTROPY,h=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=xi(),this.name="",this.source=new ma(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Iu).x}get height(){return this.source.getSize(Iu).y}get depth(){return this.source.getSize(Iu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gn:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gn:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Pf;yn.DEFAULT_ANISOTROPY=1;Yf=class Yf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(d+1)/2,M=(p+1)/2,y=(h+f)/4,S=(u+x)/4,_=(m+g)/4;return E>b&&E>M?E<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(E),i=y/n,r=S/n):b>M?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=y/i,r=_/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=S/r,i=_/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;zt=Yf,gc=class extends Oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},r=new yn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ma(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends gc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},bo=class extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},bc=class extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},zc=class zc{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,x,g)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Xr.setFromMatrixColumn(e,0).length(),r=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f+x*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,d=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Ax)}lookAt(e,t,n){let i=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Ps.crossVectors(n,hi),Ps.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Ps.crossVectors(n,hi)),Ps.normalize(),Al.crossVectors(hi,Ps),i[0]=Ps.x,i[4]=Al.x,i[8]=hi.x,i[1]=Ps.y,i[5]=Al.y,i[9]=hi.y,i[2]=Ps.z,i[6]=Al.z,i[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],E=n[7],b=n[11],M=n[15],y=i[0],S=i[4],_=i[8],w=i[12],C=i[1],I=i[5],U=i[9],H=i[13],P=i[2],D=i[6],k=i[10],z=i[14],N=i[3],F=i[7],V=i[11],j=i[15];return r[0]=a*y+o*C+l*P+c*N,r[4]=a*S+o*I+l*D+c*F,r[8]=a*_+o*U+l*k+c*V,r[12]=a*w+o*H+l*z+c*j,r[1]=h*y+u*C+f*P+d*N,r[5]=h*S+u*I+f*D+d*F,r[9]=h*_+u*U+f*k+d*V,r[13]=h*w+u*H+f*z+d*j,r[2]=m*y+x*C+g*P+p*N,r[6]=m*S+x*I+g*D+p*F,r[10]=m*_+x*U+g*k+p*V,r[14]=m*w+x*H+g*z+p*j,r[3]=v*y+E*C+b*P+M*N,r[7]=v*S+E*I+b*D+M*F,r[11]=v*_+E*U+b*k+M*V,r[15]=v*w+E*H+b*z+M*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=l*d-c*f,E=o*d-c*u,b=o*f-l*u,M=a*d-c*h,y=a*f-l*h,S=a*u-o*h;return t*(x*v-g*E+p*b)-n*(m*v-g*M+p*y)+i*(m*E-x*M+p*S)-r*(m*b-x*y+g*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+i*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=t*o-n*a,E=t*l-i*a,b=t*c-r*a,M=n*l-i*o,y=n*c-r*o,S=i*c-r*l,_=h*x-u*m,w=h*g-f*m,C=h*p-d*m,I=u*g-f*x,U=u*p-d*x,H=f*p-d*g,P=v*H-E*U+b*I+M*C-y*w+S*_;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=(o*H-l*U+c*I)*D,e[1]=(i*U-n*H-r*I)*D,e[2]=(x*S-g*y+p*M)*D,e[3]=(f*y-u*S-d*M)*D,e[4]=(l*C-a*H-c*w)*D,e[5]=(t*H-i*C+r*w)*D,e[6]=(g*b-m*S-p*E)*D,e[7]=(h*S-f*b+d*E)*D,e[8]=(a*U-o*C+c*_)*D,e[9]=(n*C-t*U-r*_)*D,e[10]=(m*y-x*b+p*v)*D,e[11]=(u*b-h*y-d*v)*D,e[12]=(o*w-a*I-l*_)*D,e[13]=(t*I-n*w+i*_)*D,e[14]=(x*E-m*M-g*v)*D,e[15]=(h*M-u*E+f*v)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,x=a*h,g=a*u,p=o*u,v=l*c,E=l*h,b=l*u,M=n.x,y=n.y,S=n.z;return i[0]=(1-(x+p))*M,i[1]=(d+b)*M,i[2]=(m-E)*M,i[3]=0,i[4]=(d-b)*y,i[5]=(1-(f+p))*y,i[6]=(g+v)*y,i[7]=0,i[8]=(m+E)*S,i[9]=(g-v)*S,i[10]=(1-(f+x))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Xr.set(i[0],i[1],i[2]).length(),o=Xr.set(i[4],i[5],i[6]).length(),l=Xr.set(i[8],i[9],i[10]).length();r<0&&(a=-a),yi.copy(this);let c=1/a,h=1/o,u=1/l;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,r,a,o=Ti,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Ti)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===fa)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Ti,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Ti)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===fa)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};zc.prototype.isMatrix4=!0;Fe=zc,Xr=new R,yi=new Fe,Rx=new R(0,0,0),Ax=new R(1,1,1),Ps=new R,Al=new R,hi=new R,Cp=new Fe,Pp=new $t,Gi=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gi.DEFAULT_ORDER="XYZ";ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cx=0,Ip=new R,Kr=new $t,es=new Fe,Cl=new R,$a=new R,Px=new R,Ix=new $t,Lp=new R(1,0,0),kp=new R(0,1,0),Dp=new R(0,0,1),Fp={type:"added"},Lx={type:"removed"},jr={type:"childadded",child:null},Lu={type:"childremoved",child:null},At=class s extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Gi,n=new $t,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new mt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(e,t){return Kr.setFromAxisAngle(e,t),this.quaternion.premultiply(Kr),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,t){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cl.copy(e):Cl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt($a,Cl,this.up):es.lookAt(Cl,$a,this.up),this.quaternion.setFromRotationMatrix(es),i&&(es.extractRotation(i.matrixWorld),Kr.setFromRotationMatrix(es),this.quaternion.premultiply(Kr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),jr.child=e,this.dispatchEvent(jr),jr.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lx),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),es.multiply(e.parent.matrixWorld)),e.applyMatrix4(es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),jr.child=e,this.dispatchEvent(jr),jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,Ix,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new R(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ot=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},kx={type:"move"},ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},e0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Pl={h:0,s:0,l:0};Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=Hf(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ku(a,r,e+1/3),this.g=ku(a,r,e),this.b=ku(a,r,e-1/3)}return yt.colorSpaceToWorking(this,i),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let n=e0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return yt.workingToColorSpace(On.copy(this),e),Math.round(vt(On.r*255,0,255))*65536+Math.round(vt(On.g*255,0,255))*256+Math.round(vt(On.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(On.copy(this),t);let n=On.r,i=On.g,r=On.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=at){yt.workingToColorSpace(On.copy(this),e);let t=On.r,n=On.g,i=On.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(Pl);let n=uo(Is.h,Pl.h,t),i=uo(Is.s,Pl.s,t),r=uo(Is.l,Pl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new Ce;Ce.NAMES=e0;xo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ce(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},cs=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new R,ts=new R,Du=new R,ns=new R,Yr=new R,Jr=new R,Np=new R,Fu=new R,Nu=new R,Uu=new R,zu=new zt,Bu=new zt,Hu=new zt,as=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mi.subVectors(i,t),ts.subVectors(n,t),Du.subVectors(e,t);let a=Mi.dot(Mi),o=Mi.dot(ts),l=Mi.dot(Du),c=ts.dot(ts),h=ts.dot(Du),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ns.x),l.addScaledVector(a,ns.y),l.addScaledVector(o,ns.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return zu.setScalar(0),Bu.setScalar(0),Hu.setScalar(0),zu.fromBufferAttribute(e,t),Bu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(zu,r.x),a.addScaledVector(Bu,r.y),a.addScaledVector(Hu,r.z),a}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),ts.subVectors(e,t),Mi.cross(ts).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ts.subVectors(this.a,this.b),Mi.cross(ts).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Yr.subVectors(i,n),Jr.subVectors(r,n),Fu.subVectors(e,n);let l=Yr.dot(Fu),c=Jr.dot(Fu);if(l<=0&&c<=0)return t.copy(n);Nu.subVectors(e,i);let h=Yr.dot(Nu),u=Jr.dot(Nu);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Yr,a);Uu.subVectors(e,r);let d=Yr.dot(Uu),m=Jr.dot(Uu);if(m>=0&&d<=m)return t.copy(r);let x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Jr,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return Np.subVectors(r,i),o=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(Np,o);let p=1/(g+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Yr,a).addScaledVector(Jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Il.copy(n.boundingBox)),Il.applyMatrix4(e.matrixWorld),this.union(Il)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qa),Ll.subVectors(this.max,Qa),Zr.subVectors(e.a,Qa),$r.subVectors(e.b,Qa),Qr.subVectors(e.c,Qa),Ls.subVectors($r,Zr),ks.subVectors(Qr,$r),lr.subVectors(Zr,Qr);let t=[0,-Ls.z,Ls.y,0,-ks.z,ks.y,0,-lr.z,lr.y,Ls.z,0,-Ls.x,ks.z,0,-ks.x,lr.z,0,-lr.x,-Ls.y,Ls.x,0,-ks.y,ks.x,0,-lr.y,lr.x,0];return!Ou(t,Zr,$r,Qr,Ll)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Zr,$r,Qr,Ll))?!1:(kl.crossVectors(Ls,ks),t=[kl.x,kl.y,kl.z],Ou(t,Zr,$r,Qr,Ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(is[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),is[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),is[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),is[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),is[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),is[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),is[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),is[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(is),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},is=[new R,new R,new R,new R,new R,new R,new R,new R],Ei=new R,Il=new ln,Zr=new R,$r=new R,Qr=new R,Ls=new R,ks=new R,lr=new R,Qa=new R,Ll=new R,kl=new R,cr=new R;os=Dx();Ns=class{static toHalfFloat(e){return Fx(e)}static fromHalfFloat(e){return Nx(e)}},gn=new R,Dl=new Ee,Ux=0,ct=class extends Oi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ux++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zf,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}},vo=class extends ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_o=class extends ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}},ft=class extends ct{constructor(e,t,n){super(new Float32Array(e),t,n)}},zx=new ln,eo=new R,Gu=new R,ni=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);let t=eo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Gu)),this.expandByPoint(eo.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Bx=0,bi=new Fe,Vu=new At,ea=new R,ui=new ln,to=new ln,An=new R,ht=class s extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?_o:vo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new mt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ft(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];to.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(ui.min,to.min),ui.expandByPoint(An),An.addVectors(ui.max,to.max),ui.expandByPoint(An)):(ui.expandByPoint(to.min),ui.expandByPoint(to.max))}ui.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)An.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(An));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)An.fromBufferAttribute(o,c),l&&(ea.fromBufferAttribute(e,c),An.add(ea)),i=Math.max(i,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ct(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,u=new R,f=new Ee,d=new Ee,m=new Ee,x=new R,g=new R;function p(_,w,C){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,C),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(I),o[_].add(x),o[w].add(x),o[C].add(x),l[_].add(g),l[w].add(g),l[C].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,w=v.length;_<w;++_){let C=v[_],I=C.start,U=C.count;for(let H=I,P=I+U;H<P;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let E=new R,b=new R,M=new R,y=new R;function S(_){M.fromBufferAttribute(i,_),y.copy(M);let w=o[_];E.copy(w),E.sub(M.multiplyScalar(M.dot(w))).normalize(),b.crossVectors(y,w);let I=b.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,I)}for(let _=0,w=v.length;_<w;++_){let C=v[_],I=C.start,U=C.count;for(let H=I,P=I+U;H<P;H+=3)S(e.getX(H+0)),S(e.getX(H+1)),S(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new ct(f,h,u)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zf,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Jn=new R,Us=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyMatrix4(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.applyNormalMatrix(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jn.fromBufferAttribute(this,t),Jn.transformDirection(e),this.setXYZ(t,Jn.x,Jn.y,Jn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Wt(t,this.array),n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){go("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){go("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wu=new R,Hx=new R,Ox=new mt,fi=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Wu.subVectors(n,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Wu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ox.getNormalMatrix(e),i=this.coplanarPoint(Wu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gx=0,Vn=class extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=Xs,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Ef,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ac,this.stencilZFail=ac,this.stencilZPass=ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new fi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ee().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cn=class extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},no=new R,na=new R,ia=new R,sa=new Ee,io=new Ee,t0=new Fe,Fl=new R,so=new R,Nl=new R,Up=new Ee,qu=new Ee,zp=new Ee,Dn=class extends At{constructor(e=new Cn){if(super(),this.isSprite=!0,this.type="Sprite",ta===void 0){ta=new ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new br(t,5);ta.setIndex([0,1,2,0,2,3]),ta.setAttribute("position",new Us(n,3,0,!1)),ta.setAttribute("uv",new Us(n,2,3,!1))}this.geometry=ta,this.material=e,this.center=new Ee(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&rt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),na.setFromMatrixScale(this.matrixWorld),t0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&na.multiplyScalar(-ia.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ul(Fl.set(-.5,-.5,0),ia,a,na,i,r),Ul(so.set(.5,-.5,0),ia,a,na,i,r),Ul(Nl.set(.5,.5,0),ia,a,na,i,r),Up.set(0,0),qu.set(1,0),zp.set(1,1);let o=e.ray.intersectTriangle(Fl,so,Nl,!1,no);if(o===null&&(Ul(so.set(-.5,.5,0),ia,a,na,i,r),qu.set(0,1),o=e.ray.intersectTriangle(Fl,Nl,so,!1,no),o===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:as.getInterpolation(no,Fl,so,Nl,Up,qu,zp,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};zl=new R,Bp=new R,yo=class extends At{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}removeLevel(e){let t=this.levels;for(let n=0;n<t.length;n++)if(t[n].distance===e){let i=t.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){zl.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(zl);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){zl.setFromMatrixPosition(e.matrixWorld),Bp.setFromMatrixPosition(this.matrixWorld);let n=zl.distanceTo(Bp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);t.object.autoUpdate=this.autoUpdate,t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},ss=new R,Xu=new R,Bl=new R,Hl=new R,zs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ss.copy(this.origin).addScaledVector(this.direction,t),ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Xu.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Hl.copy(this.origin).sub(Xu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bl),o=Hl.dot(this.direction),l=-Hl.dot(Bl),c=Hl.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let x=1/h;u*=x,f*=x,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xu).addScaledVector(Bl,f),d}intersectSphere(e,t){if(e.radius<0)return null;ss.subVectors(e.center,this.origin);let n=ss.dot(this.direction),i=ss.dot(ss)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ss)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,E=n.z-a.z,b=Math.abs(l),M=Math.abs(c),y=Math.abs(h),S,_,w,C,I,U,H,P,D,k,z,N;if(b>=M&&b>=y?(w=l,U=u,D=m,N=p,l>=0?(S=c,_=h,C=f,I=d,H=x,P=g,k=v,z=E):(S=h,_=c,C=d,I=f,H=g,P=x,k=E,z=v)):M>=y?(w=c,U=f,D=x,N=v,c>=0?(S=h,_=l,C=d,I=u,H=g,P=m,k=E,z=p):(S=l,_=h,C=u,I=d,H=m,P=g,k=p,z=E)):(w=h,U=d,D=g,N=E,h>=0?(S=l,_=c,C=u,I=f,H=m,P=x,k=p,z=v):(S=c,_=l,C=f,I=u,H=x,P=m,k=v,z=p)),w===0)return null;let F=S/w,V=_/w,j=1/w,ae=C-F*U,he=I-V*U,ce=H-F*D,ye=P-V*D,Xe=k-F*N,ie=z-V*N,oe=Xe*ye-ie*ce,Te=ae*ie-he*Xe,De=ce*he-ye*ae;if(i){if(oe<0||Te<0||De<0)return null}else if((oe<0||Te<0||De<0)&&(oe>0||Te>0||De>0))return null;let Re=oe+Te+De;if(Re===0)return null;let Ge=j*(oe*U+Te*D+De*N);return(Re>0?Ge<0:Ge>0)?null:this.at(Ge/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},st=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Hp=new Fe,hr=new zs,Ol=new ni,Op=new R,Gl=new R,Vl=new R,Wl=new R,Ku=new R,ql=new R,Gp=new R,Xl=new R,ne=class extends At{constructor(e=new ht,t=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){ql.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ku.fromBufferAttribute(u,e),a?ql.addScaledVector(Ku,h):ql.addScaledVector(Ku.sub(t),h))}t.add(ql)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ol.copy(n.boundingSphere),Ol.applyMatrix4(r),hr.copy(e.ray).recast(e.near),!(Ol.containsPoint(hr.origin)===!1&&(hr.intersectSphere(Ol,Op)===null||hr.origin.distanceToSquared(Op)>(e.far-e.near)**2))&&(Hp.copy(r).invert(),hr.copy(e.ray).applyMatrix4(Hp),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),E=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let b=v,M=E;b<M;b+=3){let y=o.getX(b),S=o.getX(b+1),_=o.getX(b+2);i=Kl(this,p,e,n,c,h,u,y,S,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=o.getX(g),E=o.getX(g+1),b=o.getX(g+2);i=Kl(this,a,e,n,c,h,u,v,E,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){let g=f[m],p=a[g.materialIndex],v=Math.max(g.start,d.start),E=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=v,M=E;b<M;b+=3){let y=b,S=b+1,_=b+2;i=Kl(this,p,e,n,c,h,u,y,S,_),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){let v=g,E=g+1,b=g+2;i=Kl(this,a,e,n,c,h,u,v,E,b),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};ro=new zt,Vp=new zt,Wp=new zt,Wx=new zt,qp=new Fe,jl=new R,ju=new ni,Xp=new Fe,Yu=new zs,Mo=class extends ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=nf,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jl),this.boundingBox.expandByPoint(jl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jl),this.boundingSphere.expandByPoint(jl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ju.copy(this.boundingSphere),ju.applyMatrix4(i),e.ray.intersectsSphere(ju)!==!1&&(Xp.copy(i).invert(),Yu.copy(e.ray).applyMatrix4(Xp),!(this.boundingBox!==null&&Yu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new zt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===nf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Vp.fromBufferAttribute(i.attributes.skinIndex,e),Wp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(ro.copy(t),t.set(0,0,0,0)):(ro.set(...t,1),t.set(0,0,0)),ro.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Wp.getComponent(r);if(a!==0){let o=Vp.getComponent(r);qp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Wx.copy(ro).applyMatrix4(qp),a)}}return t.isVector4&&(t.w=ro.w),t.applyMatrix4(this.bindMatrixInverse)}},xa=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},Bs=class extends yn{constructor(e=null,t=1,n=1,i,r,a,o,l,c=fn,h=fn,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kp=new Fe,qx=new Fe,Eo=class s{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:qx;Kp.multiplyMatrices(o,t[r]),Kp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Bs(t,e,e,pi,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Qe("Skeleton: No bone found with UUID:",r),a=new xa),this.bones.push(a),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},hs=class extends ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ra=new Fe,jp=new Fe,Yl=[],Yp=new ln,Xx=new Fe,ao=new ne,oo=new ni,Dt=class extends ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),Yp.copy(e.boundingBox).applyMatrix4(ra),this.boundingBox.union(Yp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ra),oo.copy(e.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ao.geometry=this.geometry,ao.material=this.material,ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ra),jp.multiplyMatrices(n,ra),ao.matrixWorld=jp,ao.raycast(e,Yl);for(let a=0,o=Yl.length;a<o;a++){let l=Yl[a];l.instanceId=r,l.object=this,t.push(l)}Yl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(i*this.count),i,this.count,Xc,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ur=new ni,Kx=new Ee(.5,.5),Jl=new R,va=class{constructor(e=new fi,t=new fi,n=new fi,i=new fi,r=new fi,a=new fi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],E=r[13],b=r[14],M=r[15];if(i[0].setComponents(c-a,d-h,p-m,M-v).normalize(),i[1].setComponents(c+a,d+h,p+m,M+v).normalize(),i[2].setComponents(c+o,d+u,p+x,M+E).normalize(),i[3].setComponents(c-o,d-u,p-x,M-E).normalize(),n)i[4].setComponents(l,f,g,b).normalize(),i[5].setComponents(c-l,d-f,p-g,M-b).normalize();else if(i[4].setComponents(c-l,d-f,p-g,M-b).normalize(),t===Ti)i[5].setComponents(c+l,d+f,p+g,M+b).normalize();else if(t===fa)i[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){ur.center.set(0,0,0);let t=Kx.distanceTo(e.center);return ur.radius=.7071067811865476+t,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Jl.x=i.normal.x>0?e.max.x:e.min.x,Jl.y=i.normal.y>0?e.max.y:e.min.y,Jl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_a=class extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},xc=new R,vc=new R,Jp=new Fe,lo=new zs,Zl=new ni,Ju=new R,Zp=new R,xr=class extends At{constructor(e=new ht,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)xc.fromBufferAttribute(t,i-1),vc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xc.distanceTo(vc);e.setAttribute("lineDistance",new ft(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(i),Zl.radius+=r,e.ray.intersectsSphere(Zl)===!1)return;Jp.copy(i).invert(),lo.copy(e.ray).applyMatrix4(Jp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=h.getX(x),v=h.getX(x+1),E=$l(this,e,lo,l,p,v,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(m-1),g=h.getX(d),p=$l(this,e,lo,l,x,g,m-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=c){let p=$l(this,e,lo,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=$l(this,e,lo,l,m-1,d,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};$p=new R,Qp=new R,vr=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$p.fromBufferAttribute(t,i),Qp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$p.distanceTo(Qp);e.setAttribute("lineDistance",new ft(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},So=class extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ya=class extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},em=new Fe,lf=new zs,Ql=new ni,ec=new R,Hs=class extends At{constructor(e=new ht,t=new ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(i),Ql.radius+=r,e.ray.intersectsSphere(Ql)===!1)return;em.copy(i).invert(),lf.copy(e.ray).applyMatrix4(em);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,x=d;m<x;m++){let g=c.getX(m);ec.fromBufferAttribute(u,g),tm(ec,g,l,i,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,x=d;m<x;m++)ec.fromBufferAttribute(u,m),tm(ec,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};To=class extends yn{constructor(e=[],t=Ks,n,i,r,a,o,l,c,h){super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lt=class extends yn{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Os=class extends yn{constructor(e,t,n=Ai,i,r,a,o=fn,l=fn,c,h=Hi,u=1){if(h!==Hi&&h!==js)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ma(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},_c=class extends Os{constructor(e,t=Ai,n=Ks,i,r,a=fn,o=fn,l,c=Hi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wo=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oe=class s extends ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function m(x,g,p,v,E,b,M,y,S,_,w){let C=b/S,I=M/_,U=b/2,H=M/2,P=y/2,D=S+1,k=_+1,z=0,N=0,F=new R;for(let V=0;V<k;V++){let j=V*I-H;for(let ae=0;ae<D;ae++){let he=ae*C-U;F[x]=he*v,F[g]=j*E,F[p]=P,c.push(F.x,F.y,F.z),F[x]=0,F[g]=0,F[p]=y>0?1:-1,h.push(F.x,F.y,F.z),u.push(ae/S),u.push(1-V/_),z+=1}}for(let V=0;V<_;V++)for(let j=0;j<S;j++){let ae=f+j+D*V,he=f+j+D*(V+1),ce=f+(j+1)+D*(V+1),ye=f+(j+1)+D*V;l.push(ae,he,ye),l.push(he,ce,ye),N+=6}o.addGroup(d,N,w),d+=N,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ro=class s extends ht{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+r,x=i+1,g=new R,p=new R;for(let v=0;v<=m;v++){let E=0,b=0,M=0,y=0;if(v<=n){let w=v/n,C=w*Math.PI/2;b=-h-e*Math.cos(C),M=e*Math.sin(C),y=-e*Math.cos(C),E=w*u}else if(v<=n+r){let w=(v-n)/r;b=-h+w*t,M=e,y=0,E=u+w*f}else{let w=(v-n-r)/n,C=w*Math.PI/2;b=h+e*Math.sin(C),M=e*Math.cos(C),y=e*Math.sin(C),E=u+f+w*u}let S=Math.max(0,Math.min(1,E/d)),_=0;v===0?_=.5/i:v===m&&(_=-.5/i);for(let w=0;w<=i;w++){let C=w/i,I=C*Math.PI*2,U=Math.sin(I),H=Math.cos(I);p.x=-M*H,p.y=b,p.z=M*U,o.push(p.x,p.y,p.z),g.set(-M*H,y,M*U),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+_,S)}if(v>0){let w=(v-1)*x;for(let C=0;C<i;C++){let I=w+C,U=w+C+1,H=v*x+C,P=v*x+C+1;a.push(I,U,H),a.push(U,P,H)}}}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Vi=class s extends ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new R,h=new Ee;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},kt=class s extends ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,x=[],g=n/2,p=0;v(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function v(){let b=new R,M=new R,y=0,S=(t-e)/n;for(let _=0;_<=r;_++){let w=[],C=_/r,I=C*(t-e)+e;for(let U=0;U<=i;U++){let H=U/i,P=H*l+o,D=Math.sin(P),k=Math.cos(P);M.x=I*D,M.y=-C*n+g,M.z=I*k,u.push(M.x,M.y,M.z),b.set(D,S,k).normalize(),f.push(b.x,b.y,b.z),d.push(H,1-C),w.push(m++)}x.push(w)}for(let _=0;_<i;_++)for(let w=0;w<r;w++){let C=x[w][_],I=x[w+1][_],U=x[w+1][_+1],H=x[w][_+1];(e>0||w!==0)&&(h.push(C,I,H),y+=3),(t>0||w!==r-1)&&(h.push(I,U,H),y+=3)}c.addGroup(p,y,0),p+=y}function E(b){let M=m,y=new Ee,S=new R,_=0,w=b===!0?e:t,C=b===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,g*C,0),f.push(0,C,0),d.push(.5,.5),m++;let I=m;for(let U=0;U<=i;U++){let P=U/i*l+o,D=Math.cos(P),k=Math.sin(P);S.x=w*k,S.y=g*C,S.z=w*D,u.push(S.x,S.y,S.z),f.push(0,C,0),y.x=D*.5+.5,y.y=k*.5*C+.5,d.push(y.x,y.y),m++}for(let U=0;U<i;U++){let H=M+U,P=I+U;b===!0?h.push(P,P+1,H):h.push(P+1,P,H),_+=3}c.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},us=class s extends kt{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Ee:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],a=[],o=new R,l=new Fe;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(vt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(vt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ma=class extends di{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ee){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yc=class extends Ma{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};nm=new R,im=new R,Zu=new Of,$u=new Of,Qu=new Of,Gs=class extends di{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(im.subVectors(i[0],i[1]).add(i[0]),c=im);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(nm.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=nm),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Zu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,g),$u.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,g),Qu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(Zu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),$u.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Qu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Zu.calc(l),$u.calc(l),Qu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ao=class extends di{constructor(e=new Ee,t=new Ee,n=new Ee,i=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ee){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(po(e,i.x,r.x,a.x,o.x),po(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends di{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(po(e,i.x,r.x,a.x,o.x),po(e,i.y,r.y,a.y,o.y),po(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends di{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends di{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends di{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(fo(e,i.x,r.x,a.x),fo(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends di{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(fo(e,i.x,r.x,a.x),fo(e,i.y,r.y,a.y),fo(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(sm(o,l.x,c.x,h.x,u.x),sm(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ee().fromArray(i))}return this}},Sc=Object.freeze({__proto__:null,ArcCurve:yc,CatmullRomCurve3:Gs,CubicBezierCurve:Ao,CubicBezierCurve3:Mc,EllipseCurve:Ma,LineCurve:Co,LineCurve3:Ec,QuadraticBezierCurve:Po,QuadraticBezierCurve3:Io,SplineCurve:Lo}),Tc=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Sc[i.type]().fromJSON(i))}return this}},ko=class extends Tc{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Co(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Po(this.currentPoint.clone(),new Ee(e,t),new Ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Ao(this.currentPoint.clone(),new Ee(e,t),new Ee(n,i),new Ee(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Lo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Ma(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vs=class extends ko{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ko().fromJSON(i))}return this}};uf=class{static triangulate(e,t,n=2){return tv(e,t,n)}},fr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];am(e),om(n,e);let a=e.length;t.forEach(am);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,om(n,t[l]);let o=uf.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};yr=class s extends ht{constructor(e=new Vs([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ft(i,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:xv,E,b=!1,M,y,S,_;if(p){E=p.getSpacedPoints(h),b=!0,f=!1;let le=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,le),y=new R,S=new R,_=new R}f||(g=0,d=0,m=0,x=0);let w=o.extractPoints(c),C=w.shape,I=w.holes;if(!fr.isClockWise(C)){C=C.reverse();for(let le=0,fe=I.length;le<fe;le++){let ve=I[le];fr.isClockWise(ve)&&(I[le]=ve.reverse())}}function H(le){let ve=10000000000000001e-36,me=le[0];for(let J=1;J<=le.length;J++){let be=J%le.length,xe=le[be],Ae=xe.x-me.x,ze=xe.y-me.y,B=Ae*Ae+ze*ze,je=Math.max(Math.abs(xe.x),Math.abs(xe.y),Math.abs(me.x),Math.abs(me.y)),et=ve*je*je;if(B<=et){le.splice(be,1),J--;continue}me=xe}}H(C),I.forEach(H);let P=I.length,D=C;for(let le=0;le<P;le++){let fe=I[le];C=C.concat(fe)}function k(le,fe,ve){return fe||rt("ExtrudeGeometry: vec does not exist"),le.clone().addScaledVector(fe,ve)}let z=C.length;function N(le,fe,ve){let me,J,be,xe=le.x-fe.x,Ae=le.y-fe.y,ze=ve.x-le.x,B=ve.y-le.y,je=xe*xe+Ae*Ae,et=xe*B-Ae*ze;if(Math.abs(et)>Number.EPSILON){let L=Math.sqrt(je),T=Math.sqrt(ze*ze+B*B),Y=fe.x-Ae/L,$=fe.y+xe/L,W=ve.x-B/T,X=ve.y+ze/T,Q=((W-Y)*B-(X-$)*ze)/(xe*B-Ae*ze);me=Y+xe*Q-le.x,J=$+Ae*Q-le.y;let K=me*me+J*J;if(K<=2)return new Ee(me,J);be=Math.sqrt(K/2)}else{let L=!1;xe>Number.EPSILON?ze>Number.EPSILON&&(L=!0):xe<-Number.EPSILON?ze<-Number.EPSILON&&(L=!0):Math.sign(Ae)===Math.sign(B)&&(L=!0),L?(me=-Ae,J=xe,be=Math.sqrt(je)):(me=xe,J=Ae,be=Math.sqrt(je/2))}return new Ee(me/be,J/be)}let F=[];for(let le=0,fe=D.length,ve=fe-1,me=le+1;le<fe;le++,ve++,me++)ve===fe&&(ve=0),me===fe&&(me=0),F[le]=N(D[le],D[ve],D[me]);let V=[],j,ae=F.concat();for(let le=0,fe=P;le<fe;le++){let ve=I[le];j=[];for(let me=0,J=ve.length,be=J-1,xe=me+1;me<J;me++,be++,xe++)be===J&&(be=0),xe===J&&(xe=0),j[me]=N(ve[me],ve[be],ve[xe]);V.push(j),ae=ae.concat(j)}let he;if(g===0)he=fr.triangulateShape(D,I);else{let le=[],fe=[];for(let ve=0;ve<g;ve++){let me=ve/g,J=d*Math.cos(me*Math.PI/2),be=m*Math.sin(me*Math.PI/2)+x;for(let xe=0,Ae=D.length;xe<Ae;xe++){let ze=k(D[xe],F[xe],be);Te(ze.x,ze.y,-J),me===0&&le.push(ze)}for(let xe=0,Ae=P;xe<Ae;xe++){let ze=I[xe];j=V[xe];let B=[];for(let je=0,et=ze.length;je<et;je++){let L=k(ze[je],j[je],be);Te(L.x,L.y,-J),me===0&&B.push(L)}me===0&&fe.push(B)}}he=fr.triangulateShape(le,fe)}let ce=he.length,ye=m+x;for(let le=0;le<z;le++){let fe=f?k(C[le],ae[le],ye):C[le];b?(S.copy(M.normals[0]).multiplyScalar(fe.x),y.copy(M.binormals[0]).multiplyScalar(fe.y),_.copy(E[0]).add(S).add(y),Te(_.x,_.y,_.z)):Te(fe.x,fe.y,0)}for(let le=1;le<=h;le++)for(let fe=0;fe<z;fe++){let ve=f?k(C[fe],ae[fe],ye):C[fe];b?(S.copy(M.normals[le]).multiplyScalar(ve.x),y.copy(M.binormals[le]).multiplyScalar(ve.y),_.copy(E[le]).add(S).add(y),Te(_.x,_.y,_.z)):Te(ve.x,ve.y,u/h*le)}for(let le=g-1;le>=0;le--){let fe=le/g,ve=d*Math.cos(fe*Math.PI/2),me=m*Math.sin(fe*Math.PI/2)+x;for(let J=0,be=D.length;J<be;J++){let xe=k(D[J],F[J],me);Te(xe.x,xe.y,u+ve)}for(let J=0,be=I.length;J<be;J++){let xe=I[J];j=V[J];for(let Ae=0,ze=xe.length;Ae<ze;Ae++){let B=k(xe[Ae],j[Ae],me);b?Te(B.x,B.y+E[h-1].y,E[h-1].x+ve):Te(B.x,B.y,u+ve)}}}Xe(),ie();function Xe(){let le=i.length/3;if(f){let fe=0,ve=z*fe;for(let me=0;me<ce;me++){let J=he[me];De(J[2]+ve,J[1]+ve,J[0]+ve)}fe=h+g*2,ve=z*fe;for(let me=0;me<ce;me++){let J=he[me];De(J[0]+ve,J[1]+ve,J[2]+ve)}}else{for(let fe=0;fe<ce;fe++){let ve=he[fe];De(ve[2],ve[1],ve[0])}for(let fe=0;fe<ce;fe++){let ve=he[fe];De(ve[0]+z*h,ve[1]+z*h,ve[2]+z*h)}}n.addGroup(le,i.length/3-le,0)}function ie(){let le=i.length/3,fe=0;oe(D,fe),fe+=D.length;for(let ve=0,me=I.length;ve<me;ve++){let J=I[ve];oe(J,fe),fe+=J.length}n.addGroup(le,i.length/3-le,1)}function oe(le,fe){let ve=le.length;for(;--ve>=0;){let me=ve,J=ve-1;J<0&&(J=le.length-1);for(let be=0,xe=h+g*2;be<xe;be++){let Ae=z*be,ze=z*(be+1),B=fe+me+Ae,je=fe+J+Ae,et=fe+J+ze,L=fe+me+ze;Re(B,je,et,L)}}}function Te(le,fe,ve){l.push(le),l.push(fe),l.push(ve)}function De(le,fe,ve){Ge(le),Ge(fe),Ge(ve);let me=i.length/3,J=v.generateTopUV(n,i,me-3,me-2,me-1);gt(J[0]),gt(J[1]),gt(J[2])}function Re(le,fe,ve,me){Ge(le),Ge(fe),Ge(me),Ge(fe),Ge(ve),Ge(me);let J=i.length/3,be=v.generateSideWallUV(n,i,J-6,J-3,J-2,J-1);gt(be[0]),gt(be[1]),gt(be[3]),gt(be[1]),gt(be[2]),gt(be[3])}function Ge(le){i.push(l[le*3+0]),i.push(l[le*3+1]),i.push(l[le*3+2])}function gt(le){r.push(le.x),r.push(le.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Sc[i.type]().fromJSON(i)),new s(n,e.options)}},xv={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Ee(r,a),new Ee(o,l),new Ee(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Ee(a,1-l),new Ee(c,1-u),new Ee(f,1-m),new Ee(x,1-p)]:[new Ee(o,1-l),new Ee(h,1-u),new Ee(d,1-m),new Ee(g,1-p)]}};lt=class s extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let v=p*f-a;for(let E=0;E<c;E++){let b=E*u-r;m.push(b,-v,0),x.push(0,0,1),g.push(E/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let E=v+c*p,b=v+c*(p+1),M=v+1+c*(p+1),y=v+1+c*p;d.push(E,b,y),d.push(b,M,y)}this.setIndex(d),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Mn=class s extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,f=new R,d=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],E=p/n,b=a+E*o,M=e*Math.cos(b),y=Math.sqrt(e*e-M*M),S=0;p===0&&a===0?S=.5/t:p===n&&l===Math.PI&&(S=-.5/t);for(let _=0;_<=t;_++){let w=_/t,C=i+w*r;u.x=-y*Math.cos(C),u.y=M,u.z=y*Math.sin(C),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(w+S,1-E),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let E=h[p][v+1],b=h[p][v],M=h[p+1][v],y=h[p+1][v+1];(p!==0||a>0)&&d.push(E,b,y),(p!==n-1||l<Math.PI)&&d.push(b,M,y)}this.setIndex(d),this.setAttribute("position",new ft(m,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},wi=class s extends ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new R,d=new R,m=new R;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let p=0;p<=i;p++){let v=p/i*r;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=i;g++){let p=(i+1)*x+g-1,v=(i+1)*(x-1)+g-1,E=(i+1)*(x-1)+g,b=(i+1)*x+g;l.push(p,v,b),l.push(v,E,b)}this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Uo=class s extends ht{constructor(e=new Io(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new Ee,h=new R,u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function x(){for(let E=0;E<t;E++)g(E);g(r===!1?t:0),v(),p()}function g(E){h=e.getPointAt(E/t,h);let b=a.normals[E],M=a.binormals[E];for(let y=0;y<=i;y++){let S=y/i*Math.PI*2,_=Math.sin(S),w=-Math.cos(S);l.x=w*b.x+_*M.x,l.y=w*b.y+_*M.y,l.z=w*b.z+_*M.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let b=1;b<=i;b++){let M=(i+1)*(E-1)+(b-1),y=(i+1)*E+(b-1),S=(i+1)*E+b,_=(i+1)*(E-1)+b;m.push(M,y,_),m.push(y,S,_)}}function v(){for(let E=0;E<=t;E++)for(let b=0;b<=i;b++)c.x=E/t,c.y=b/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Sc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};Cr={clone:Ar,merge:qn},yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ct=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Ce().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"v3":this.uniforms[n].value=new R().fromArray(i.value);break;case"v4":this.uniforms[n].value=new zt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new mt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Fe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wc=class extends Ct{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ne=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Ne{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},zo=class extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Hc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Rc=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ac=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Wi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rf,endingEnd:rf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case af:r=e,o=2*t-n;break;case of:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case af:a=e,l=2*n-t;break;case of:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-f*g+2*f*x-f*m,v=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*m+1,E=(-1-d)*g+(1.5+d)*x+.5*m,b=d*g-d*x;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+v*a[c+M]+E*a[l+M]+b*a[u+M];return r}},Pc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Ic=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Lc=class extends Wi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),x=1-m;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*m;return r}let f=o*2,d=e-1;for(let m=0;m!==o;++m){let x=a[c+m],g=a[l+m],p=d*f+m*2,v=u[p],E=u[p+1],b=e*f+m*2,M=h[b],y=h[b+1],S=wv(n,t,v,M,i);r[m]=a0(S,x,E,y,g)}return r}};ii=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fs(t,this.TimeBufferType),this.values=Fs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fs(e.times,Array),values:Fs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),oc(e.settings)&&(n.settings={inTangents:Fs(e.settings.inTangents,Array),outTangents:Fs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Lc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case pr:t=this.InterpolantFactoryMethodDiscrete;break;case mr:t=this.InterpolantFactoryMethodLinear;break;case rc:t=this.InterpolantFactoryMethodSmooth;break;case sf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return pr;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return rc;case this.InterpolantFactoryMethodBezier:return sf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;oc(this.settings)&&(hm(this.settings.inTangents,e),hm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){rt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){rt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&ox(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){rt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===rc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let x=t[u+m];if(x!==t[f+m]||x!==t[d+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,oc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};ii.prototype.ValueTypeName="";ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=mr;fs=class extends ii{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=pr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;Bo=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};Bo.prototype.ValueTypeName="color";ds=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};ds.prototype.ValueTypeName="number";kc=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)$t.slerpFlat(r,0,a,c-o,a,c,l);return r}},ps=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;ms=class extends ii{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=pr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;Ws=class extends ii{constructor(e,t,n,i){super(e,t,n,i)}};Ws.prototype.ValueTypeName="vector";Ho=class{constructor(e="",t=-1,n=[],i=Hm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=xi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Av(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ii.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Ev(l);l=cm(l,1,h),c=cm(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Bi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(um(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!um(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};Dc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},o0=new Dc,Ri=class{constructor(e){this.manager=e!==void 0?e:o0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";rs={},ff=class extends Error{constructor(e,t){super(e),this.response=t}},Mr=class extends Ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Bi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(rs[e]!==void 0){rs[e].push({onLoad:t,onProgress:n,onError:i});return}rs[e]=[],rs[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=rs[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0,x=0,g=new ReadableStream({start(p){v();function v(){u.read().then(({done:E,value:b})=>{if(E)p.close();else{x+=b.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:d});for(let y=0,S=h.length;y<S;y++){let _=h[y];_.onProgress&&_.onProgress(M)}p.enqueue(b),v()}},E=>{p.error(E)})}}});return new Response(g)}else throw new ff(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Bi.add(`file:${e}`,c);let h=rs[e];delete rs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=rs[e];if(h===void 0)throw this.manager.itemError(e),c;delete rs[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},aa=new WeakMap,Fc=class extends Ri{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=aa.get(a);u===void 0&&(u=[],aa.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=da("img");function l(){h(),t&&t(this);let u=aa.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}aa.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),Bi.remove(`image:${e}`);let f=aa.get(this)||[];for(let d=0;d<f.length;d++){let m=f[d];m.onError&&m.onError(u)}aa.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Oo=class extends Ri{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new Bs,o=new Mr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):rt(h);return}r._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){let t=new Bs;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:bn,e.wrapT=t.wrapT!==void 0?t.wrapT:bn,e.magFilter=t.magFilter!==void 0?t.magFilter:bt,e.minFilter=t.minFilter!==void 0?t.minFilter:bt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=en),t.mipmapCount===1&&(e.minFilter=bt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Er=class extends Ri{constructor(e){super(e)}load(e,t,n,i){let r=new yn,a=new Fc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Sr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Go=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ef=new Fe,fm=new R,dm=new R,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=En,this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new va,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fm.setFromMatrixPosition(e.matrixWorld),t.position.copy(fm),dm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){ef.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ef,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===fa||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ef)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ic=new R,sc=new $t,zi=new R,Vo=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ic,sc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ic,sc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ds=new R,pm=new Ee,mm=new Ee,an=class extends Vo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,pm,mm),t.subVectors(mm,pm)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},df=class extends Sa{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=gr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},gs=class extends Sr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new df}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},pf=class extends Sa{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},Fn=class extends Sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qi=class extends Vo{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mf=class extends Sa{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qs=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new mf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},bs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},tf=new WeakMap,Wo=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{tf.has(a)===!0?(i&&i(tf.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Bi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),tf.set(l,c),Bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Bi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},oa=-90,la=1,Nc=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(oa,la,e,t);i.layers=this.layers,this.add(i);let r=new an(oa,la,e,t);r.layers=this.layers,this.add(r);let a=new an(oa,la,e,t);a.layers=this.layers,this.add(a);let o=new an(oa,la,e,t);o.layers=this.layers,this.add(o);let l=new an(oa,la,e,t);l.layers=this.layers,this.add(l);let c=new an(oa,la,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Uc=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Vf="\\[\\]\\.:\\/",Cv=new RegExp("["+Vf+"]","g"),Wf="[^"+Vf+"]",Pv="[^"+Vf.replace("\\.","")+"]",Iv=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Lv=/(WCOD+)?/.source.replace("WCOD",Pv),kv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),Dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),Fv=new RegExp("^"+Iv+Lv+kv+Dv+"$"),Nv=["material","materials","bones","map"],gf=class{constructor(e,t,n){let i=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(e){let t=Fv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=gf;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];qT=new Float32Array(1),gm=new Fe,qo=class{constructor(e,t,n=0,i=1/0){this.ray=new zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ga,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gm),this}intersectObject(e,t=!0,n=[]){return bf(e,this,n,t),n.sort(bm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)bf(e[i],this,n,t);return n.sort(bm),n}};Jf=class Jf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};Jf.prototype.isMatrix2=!0;xf=Jf;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function C0(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Bv(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}function y1(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let b=v.backgroundBlurriness>0;E=e.get(E,b)}return E}function m(v){let E=!1,b=d(v);b===null?g(a,o):b&&b.isColor&&(g(b,1),E=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,E){let b=d(E);b&&(b.isCubeTexture||b.mapping===jo)?(c===void 0&&(c=new ne(new Oe(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Ar(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_1.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(P0),c.material.toneMapped=yt.getTransfer(b.colorSpace)!==Gt,(h!==b||u!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ne(new lt(2,2),new Ct({name:"BackgroundMaterial",uniforms:Ar(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=yt.getTransfer(b.colorSpace)!==Gt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,E){v.getRGB(Ah,Gf(s)),t.buffers.color.setClear(Ah.r,Ah.g,Ah.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:m,addToRenderList:x,dispose:p}}function M1(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(I,U,H,P,D){let k=!1,z=u(I,P,H,U);r!==z&&(r=z,c(r.object)),k=d(I,P,H,D),k&&m(I,P,H,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(I,U,H,P),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,U,H,P){let D=P.wireframe===!0,k=n[U.id];k===void 0&&(k={},n[U.id]=k);let z=I.isInstancedMesh===!0?I.id:0,N=k[z];N===void 0&&(N={},k[z]=N);let F=N[H.id];F===void 0&&(F={},N[H.id]=F);let V=F[D];return V===void 0&&(V=f(l()),F[D]=V),V}function f(I){let U=[],H=[],P=[];for(let D=0;D<t;D++)U[D]=0,H[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:P,object:I,attributes:{},index:null}}function d(I,U,H,P){let D=r.attributes,k=U.attributes,z=0,N=H.getAttributes();for(let F in N)if(N[F].location>=0){let j=D[F],ae=k[F];if(ae===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(ae=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(ae=I.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function m(I,U,H,P){let D={},k=U.attributes,z=0,N=H.getAttributes();for(let F in N)if(N[F].location>=0){let j=k[F];j===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));let ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),D[F]=ae,z++}r.attributes=D,r.attributesNum=z,r.index=P}function x(){let I=r.newAttributes;for(let U=0,H=I.length;U<H;U++)I[U]=0}function g(I){p(I,0)}function p(I,U){let H=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;H[I]=1,P[I]===0&&(s.enableVertexAttribArray(I),P[I]=1),D[I]!==U&&(s.vertexAttribDivisor(I,U),D[I]=U)}function v(){let I=r.newAttributes,U=r.enabledAttributes;for(let H=0,P=U.length;H<P;H++)U[H]!==I[H]&&(s.disableVertexAttribArray(H),U[H]=0)}function E(I,U,H,P,D,k,z){z===!0?s.vertexAttribIPointer(I,U,H,D,k):s.vertexAttribPointer(I,U,H,P,D,k)}function b(I,U,H,P){x();let D=P.attributes,k=H.getAttributes(),z=U.defaultAttributeValues;for(let N in k){let F=k[N];if(F.location>=0){let V=D[N];if(V===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(V=I.instanceColor)),V!==void 0){let j=V.normalized,ae=V.itemSize,he=e.get(V);if(he===void 0)continue;let ce=he.buffer,ye=he.type,Xe=he.bytesPerElement,ie=ye===s.INT||ye===s.UNSIGNED_INT||V.gpuType===Vc;if(V.isInterleavedBufferAttribute){let oe=V.data,Te=oe.stride,De=V.offset;if(oe.isInstancedInterleavedBuffer){for(let Re=0;Re<F.locationSize;Re++)p(F.location+Re,oe.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Re=0;Re<F.locationSize;Re++)g(F.location+Re);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let Re=0;Re<F.locationSize;Re++)E(F.location+Re,ae/F.locationSize,ye,j,Te*Xe,(De+ae/F.locationSize*Re)*Xe,ie)}else{if(V.isInstancedBufferAttribute){for(let oe=0;oe<F.locationSize;oe++)p(F.location+oe,V.meshPerAttribute);I.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let oe=0;oe<F.locationSize;oe++)g(F.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ce);for(let oe=0;oe<F.locationSize;oe++)E(F.location+oe,ae/F.locationSize,ye,j,ae*Xe,ae/F.locationSize*oe*Xe,ie)}}else if(z!==void 0){let j=z[N];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(F.location,j);break;case 3:s.vertexAttrib3fv(F.location,j);break;case 4:s.vertexAttrib4fv(F.location,j);break;default:s.vertexAttrib1fv(F.location,j)}}}}v()}function M(){w();for(let I in n){let U=n[I];for(let H in U){let P=U[H];for(let D in P){let k=P[D];for(let z in k)h(k[z].object),delete k[z];delete P[D]}}delete n[I]}}function y(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let H in U){let P=U[H];for(let D in P){let k=P[D];for(let z in k)h(k[z].object),delete k[z];delete P[D]}}delete n[I.id]}function S(I){for(let U in n){let H=n[U];for(let P in H){let D=H[P];if(D[I.id]===void 0)continue;let k=D[I.id];for(let z in k)h(k[z].object),delete k[z];delete D[I.id]}}}function _(I){for(let U in n){let H=n[U],P=I.isInstancedMesh===!0?I.id:0,D=H[P];if(D!==void 0){for(let k in D){let z=D[k];for(let N in z)h(z[N].object),delete z[N];delete D[k]}delete H[P],Object.keys(H).length===0&&delete n[U]}}}function w(){C(),a=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function E1(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function S1(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==pi&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let _=S===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==En&&S!==Wn&&!_&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),y=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:b,maxSamples:M,samples:y}}function T1(s){let e=this,t=null,n=0,i=!1,r=!1,a=new fi,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,E=v*4,b=p.clippingState||null;l.value=b,b=h(m,f,E,d);for(let M=0;M!==E;++M)b[M]=t[M];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=d+x*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let E=0,b=d;E!==x;++E,b+=4)a.copy(u[E]).applyMatrix4(v,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function P1(s){let e=[],t=[],n=s,i=s-La+1+w1;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,m=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,E=p>2?0:-1,b=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];m.set(b,d*f*p);for(let M=0;M<f;M++){let y=h[M*2]*2-1,S=h[M*2+1]*2-1;p===0?Pr.set(1,S,y):p===1?Pr.set(-y,1,-S):p===2?Pr.set(-y,S,1):p===3?Pr.set(-1,S,-y):p===4?Pr.set(-y,-1,S):Pr.set(y,S,-1),Pr.toArray(x,(p*f+M)*d)}}let g=new ht;g.setAttribute("position",new ct(m,d)),g.setAttribute("outputDirection",new ct(x,d)),t.push(new ne(g,null)),n>La&&n--}return{lodMeshes:t,sizeLods:e}}function c0(s,e,t){let n=new on(s,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function I1(s,e,t){return new Ct({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:A1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function L1(s,e,t){return new Ct({name:"SphericalGaussianBlur",defines:{SAMPLES:R1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function h0(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function u0(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function k1(s){let e=new WeakMap,t=new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===wa||d===Oc)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let x=new Ph(m.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,m=d===wa||d===Oc,x=d===Ks||d===wr;if(m||x){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Ir(s)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return m&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Ir(s)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===wa?f.mapping=Ks:d===Oc&&(f.mapping=wr),f}function l(f){let d=0,m=6;for(let x=0;x<m;x++)f[x]!==void 0&&d++;return d===m}function c(f){let d=f.target;d.removeEventListener("dispose",c);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function D1(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&dr("WebGLRenderer: "+n+" extension not supported."),i}}}function F1(s,e,t,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,x=0;if(m===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let E=0,b=v.length;E<b;E+=3){let M=v[E+0],y=v[E+1],S=v[E+2];f.push(M,y,y,S,S,M)}}else{let v=m.array;x=m.version;for(let E=0,b=v.length/3-1;E<b;E+=3){let M=E+0,y=E+1,S=E+2;f.push(M,y,y,S,S,M)}}let g=new(m.count>=65535?_o:vo)(f,1);g.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function N1(s,e,t){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*a,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let g=0;g<d;g++)x+=f[g];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function U1(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:rt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function z1(s,e,t){let n=new WeakMap,i=new zt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let w=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let b=o.attributes.position.count*E,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let y=new Float32Array(b*M*4*u),S=new bo(y,b,M,u);S.type=Wn,S.needsUpdate=!0;let _=E*4;for(let C=0;C<u;C++){let I=g[C],U=p[C],H=v[C],P=b*M*4*C;for(let D=0;D<I.count;D++){let k=D*_;d===!0&&(i.fromBufferAttribute(I,D),y[P+k+0]=i.x,y[P+k+1]=i.y,y[P+k+2]=i.z,y[P+k+3]=0),m===!0&&(i.fromBufferAttribute(U,D),y[P+k+4]=i.x,y[P+k+5]=i.y,y[P+k+6]=i.z,y[P+k+7]=0),x===!0&&(i.fromBufferAttribute(H,D),y[P+k+8]=i.x,y[P+k+9]=i.y,y[P+k+10]=i.z,y[P+k+11]=H.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new Ee(b,M)},n.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function B1(s,e,t,n,i){let r=new WeakMap;function a(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function O1(s,e,t,n,i,r){let a=new on(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ht;c.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ft([0,2,0,0,2,0],2));let h=new wc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ne(c,h),f=new qi(-1,1,1,-1,0,1),d=null,m=null,x=!1,g,p=null,v=[],E=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),l!==null&&l.setSize(b,M);for(let y=0;y<v.length;y++){let S=v[y];S.setSize&&S.setSize(b,M)}},this.setEffects=function(b){v=b,E=v.length>0&&v[0].isRenderPass===!0;let M=a.width,y=a.height;v.length>0&&o===null&&(o=new on(M,y,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new on(M,y,{type:xn,depthBuffer:!1,stencilBuffer:!1}));for(let S=0;S<v.length;S++){let _=v[S];_.setSize&&_.setSize(M,y)}},this.begin=function(b,M){if(x||b.toneMapping===si&&v.length===0)return!1;if(p=M,M!==null){let y=M.width,S=M.height;(a.width!==y||a.height!==S)&&this.setSize(y,S)}return E===!1&&b.setRenderTarget(a),g=b.toneMapping,b.toneMapping=si,!0},this.hasRenderPass=function(){return E},this.end=function(b,M){b.toneMapping=g,x=!0;let y=a,S=o;for(let _=0;_<v.length;_++){let w=v[_];w.enabled!==!1&&(w.render(b,S,y,M),w.needsSwap!==!1&&(y=S,S=S===o?l:o))}if(d!==b.outputColorSpace||m!==b.toneMapping){d=b.outputColorSpace,m=b.toneMapping,h.defines={},yt.getTransfer(d)===Gt&&(h.defines.SRGB_TRANSFER="");let _=H1[m];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(p),b.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Da(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=f0[i];if(r===void 0&&(r=new Float32Array(i),f0[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function kh(s,e){let t=d0[e];t===void 0&&(t=new Int32Array(e),d0[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function G1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function V1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),Tn(t,e)}}function W1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),Tn(t,e)}}function q1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),Tn(t,e)}}function X1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;g0.set(n),s.uniformMatrix2fv(this.addr,!1,g0),Tn(t,n)}}function K1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;m0.set(n),s.uniformMatrix3fv(this.addr,!1,m0),Tn(t,n)}}function j1(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tn(t,e)}else{if(Sn(t,n))return;p0.set(n),s.uniformMatrix4fv(this.addr,!1,p0),Tn(t,n)}}function Y1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function J1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),Tn(t,e)}}function Z1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),Tn(t,e)}}function $1(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),Tn(t,e)}}function Q1(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function eM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),Tn(t,e)}}function tM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),Tn(t,e)}}function nM(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),Tn(t,e)}}function iM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sd.compareFunction=t.isReversedDepthBuffer()?Rh:wh,r=sd):r=I0,t.setTexture2D(e||r,i)}function sM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||k0,i)}function rM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||D0,i)}function aM(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||L0,i)}function oM(s){switch(s){case 5126:return G1;case 35664:return V1;case 35665:return W1;case 35666:return q1;case 35674:return X1;case 35675:return K1;case 35676:return j1;case 5124:case 35670:return Y1;case 35667:case 35671:return J1;case 35668:case 35672:return Z1;case 35669:case 35673:return $1;case 5125:return Q1;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return aM}}function lM(s,e){s.uniform1fv(this.addr,e)}function cM(s,e){let t=Da(e,this.size,2);s.uniform2fv(this.addr,t)}function hM(s,e){let t=Da(e,this.size,3);s.uniform3fv(this.addr,t)}function uM(s,e){let t=Da(e,this.size,4);s.uniform4fv(this.addr,t)}function fM(s,e){let t=Da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function dM(s,e){let t=Da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pM(s,e){let t=Da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mM(s,e){s.uniform1iv(this.addr,e)}function gM(s,e){s.uniform2iv(this.addr,e)}function bM(s,e){s.uniform3iv(this.addr,e)}function xM(s,e){s.uniform4iv(this.addr,e)}function vM(s,e){s.uniform1uiv(this.addr,e)}function _M(s,e){s.uniform2uiv(this.addr,e)}function yM(s,e){s.uniform3uiv(this.addr,e)}function MM(s,e){s.uniform4uiv(this.addr,e)}function EM(s,e,t){let n=this.cache,i=e.length,r=kh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=sd:a=I0;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function SM(s,e,t){let n=this.cache,i=e.length,r=kh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||k0,r[a])}function TM(s,e,t){let n=this.cache,i=e.length,r=kh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||D0,r[a])}function wM(s,e,t){let n=this.cache,i=e.length,r=kh(t,i);Sn(n,r)||(s.uniform1iv(this.addr,r),Tn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||L0,r[a])}function RM(s){switch(s){case 5126:return lM;case 35664:return cM;case 35665:return hM;case 35666:return uM;case 35674:return fM;case 35675:return dM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return bM;case 35669:case 35673:return xM;case 5125:return vM;case 36294:return _M;case 36295:return yM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return wM}}function b0(s,e){s.seq.push(e),s.map[e.id]=e}function AM(s,e,t){let n=s.name,i=n.length;for(nd.lastIndex=0;;){let r=nd.exec(n),a=nd.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){b0(t,c===void 0?new rd(o,s,e):new ad(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new od(o),b0(t,u)),t=u}}}function x0(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}function IM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function LM(s){yt._getMatrix(v0,yt.workingColorSpace,s);let e=`mat3( ${v0.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(s)){case mo:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _0(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+IM(s.getShaderSource(e),o)}else return r}function kM(s,e){let t=LM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function FM(s,e){let t=DM[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NM(){yt.getLuminanceCoefficients(Ch);let s=Ch.x.toFixed(4),e=Ch.y.toFixed(4),t=Ch.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function zM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function BM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function rl(s){return s!==""}function y0(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function M0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function ld(s){return s.replace(HM,GM)}function GM(s,e){let t=_t[e];if(t===void 0){let n=OM.get(e);if(n!==void 0)t=_t[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ld(t)}function E0(s){return s.replace(VM,WM)}function WM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function S0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function XM(s){return qM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function jM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":KM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}function JM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":YM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}function $M(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ZM[s.combine]||"ENVMAP_BLENDING_NONE"}function QM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eE(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=XM(t),c=jM(t),h=JM(t),u=$M(t),f=QM(t),d=UM(t),m=zM(r),x=i.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rl).join(`
`),p.length>0&&(p+=`
`)):(g=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),p=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?_t.tonemapping_pars_fragment:"",t.toneMapping!==si?FM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,kM("linearToOutputTexel",t.outputColorSpace),NM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),a=ld(a),a=y0(a,t),a=M0(a,t),o=ld(o),o=y0(o,t),o=M0(o,t),a=E0(a),o=E0(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=v+g+a,b=v+p+o,M=x0(i,i.VERTEX_SHADER,E),y=x0(i,i.FRAGMENT_SHADER,b);i.attachShader(x,M),i.attachShader(x,y),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function S(I){if(s.debug.checkShaderErrors){let U=i.getProgramInfoLog(x)||"",H=i.getShaderInfoLog(M)||"",P=i.getShaderInfoLog(y)||"",D=U.trim(),k=H.trim(),z=P.trim(),N=!0,F=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(N=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,M,y);else{let V=_0(i,M,"vertex"),j=_0(i,y,"fragment");rt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+V+`
`+j)}else D!==""?Qe("WebGLProgram: Program Info Log:",D):(k===""||z==="")&&(F=!1);F&&(I.diagnostics={runnable:N,programLog:D,vertexShader:{log:k,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(M),i.deleteShader(y),_=new ka(i,x),w=BM(i,x)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(x,CM)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=y,this}function nE(s){return s===Ys||s===Qo||s===el}function iE(s,e,t,n,i,r){let a=new ga,o=new cd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,w,C,I,U,H){let P=I.fog,D=U.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||k,z),F=N&&N.mapping===jo?N.image.height:null,V=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ae=j!==void 0?j.length:0,he=0;D.morphAttributes.position!==void 0&&(he=1),D.morphAttributes.normal!==void 0&&(he=2),D.morphAttributes.color!==void 0&&(he=3);let ce,ye,Xe,ie;if(V){let Pe=ji[V];ce=Pe.vertexShader,ye=Pe.fragmentShader}else{ce=_.vertexShader,ye=_.fragmentShader;let Pe=o.getVertexShaderStage(_),Ke=o.getFragmentShaderStage(_);o.update(_,Pe,Ke),Xe=Pe.id,ie=Ke.id}let oe=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,Ge=!!_.map,gt=!!_.matcap,le=!!N,fe=!!_.aoMap,ve=!!_.lightMap,me=!!_.bumpMap&&_.wireframe===!1,J=!!_.normalMap,be=!!_.displacementMap,xe=!!_.emissiveMap,Ae=!!_.metalnessMap,ze=!!_.roughnessMap,B=_.anisotropy>0,je=_.clearcoat>0,et=_.dispersion>0,L=_.retroreflectivity>0,T=_.iridescence>0,Y=_.sheen>0,$=_.transmission>0,W=B&&!!_.anisotropyMap,X=je&&!!_.clearcoatMap,Q=je&&!!_.clearcoatNormalMap,K=je&&!!_.clearcoatRoughnessMap,Z=T&&!!_.iridescenceMap,de=T&&!!_.iridescenceThicknessMap,Me=Y&&!!_.sheenColorMap,_e=Y&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Ie=!!_.specularColorMap,$e=!!_.specularIntensityMap,Le=$&&!!_.transmissionMap,O=$&&!!_.thicknessMap,Se=!!_.gradientMap,ue=!!_.alphaMap,we=_.alphaTest>0,Be=!!_.alphaHash,pe=!!_.extensions,G=si;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(G=s.toneMapping);let se={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:ce,fragmentShader:ye,defines:_.defines,customVertexShaderID:Xe,customFragmentShaderID:ie,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:gt,envMap:le,envMapMode:le&&N.mapping,envMapCubeUVHeight:F,aoMap:fe,lightMap:ve,bumpMap:me,normalMap:J,displacementMap:be,emissiveMap:xe,normalMapObjectSpace:J&&_.normalMapType===Gm,normalMapTangentSpace:J&&_.normalMapType===nl,packedNormalMap:J&&_.normalMapType===nl&&nE(_.normalMap.format),metalnessMap:Ae,roughnessMap:ze,anisotropy:B,anisotropyMap:W,clearcoat:je,clearcoatMap:X,clearcoatNormalMap:Q,clearcoatRoughnessMap:K,dispersion:et,retroreflection:L,iridescence:T,iridescenceMap:Z,iridescenceThicknessMap:de,sheen:Y,sheenColorMap:Me,sheenRoughnessMap:_e,specularMap:ge,specularColorMap:Ie,specularIntensityMap:$e,transmission:$,transmissionMap:Le,thicknessMap:O,gradientMap:Se,opaque:_.transparent===!1&&_.blending===Xs&&_.alphaToCoverage===!1,alphaMap:ue,alphaTest:we,alphaHash:Be,combine:_.combine,mapUv:Ge&&m(_.map.channel),aoMapUv:fe&&m(_.aoMap.channel),lightMapUv:ve&&m(_.lightMap.channel),bumpMapUv:me&&m(_.bumpMap.channel),normalMapUv:J&&m(_.normalMap.channel),displacementMapUv:be&&m(_.displacementMap.channel),emissiveMapUv:xe&&m(_.emissiveMap.channel),metalnessMapUv:Ae&&m(_.metalnessMap.channel),roughnessMapUv:ze&&m(_.roughnessMap.channel),anisotropyMapUv:W&&m(_.anisotropyMap.channel),clearcoatMapUv:X&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:Q&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&m(_.sheenRoughnessMap.channel),specularMapUv:ge&&m(_.specularMap.channel),specularColorMapUv:Ie&&m(_.specularColorMap.channel),specularIntensityMapUv:$e&&m(_.specularIntensityMap.channel),transmissionMapUv:Le&&m(_.transmissionMap.channel),thicknessMapUv:O&&m(_.thicknessMap.channel),alphaMapUv:ue&&m(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(J||B),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&(Ge||ue),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&J===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Te,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:he,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:G,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&yt.getTransfer(_.map.colorSpace)===Gt,decodeVideoTextureEmissive:xe&&_.emissiveMap.isVideoTexture===!0&&yt.getTransfer(_.emissiveMap.colorSpace)===Gt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pt,flipSided:_.side===Pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function g(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)w.push(C),w.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(w,_),v(w,_),w.push(s.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let w=d[_.type],C;if(w){let I=ji[w];C=Cr.clone(I.uniforms)}else C=_.uniforms;return C}function b(_,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new eE(s,w,_,i),c.push(C),h.set(w,C)),C}function M(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function S(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:b,releaseProgram:M,releaseShaderCache:y,programs:c,dispose:S}}function sE(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function rE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function T0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function w0(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,m,x,g,p){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:p},s[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=m,v.materialVariant=a(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=g,v.group=p),e++,v}function l(f,d,m,x,g,p,v){v.reversedDepth===!0&&(g=-g);let E=o(f,d,m,x,g,p);m.transmission>0?n.push(E):m.transparent===!0?i.push(E):t.push(E)}function c(f,d,m,x,g,p){let v=o(f,d,m,x,g,p);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||rE),n.length>1&&n.sort(d||T0),i.length>1&&i.sort(d||T0)}function u(){for(let f=e,d=s.length;f<d;f++){let m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function aE(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new w0,s.set(n,[a])):i>=r.length?(a=new w0,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function oE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new Ce};break;case"SpotLight":t={position:new R,direction:new R,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function lE(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}function hE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uE(s){let e=new oE,t=lE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let i=new R,r=new Fe,a=new Fe;function o(c){let h=0,u=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,v=0,E=0,b=0,M=0,y=0,S=0,_=0,w=0,C=0;c.sort(hE);for(let U=0,H=c.length;U<H;U++){let P=c[U],D=P.color,k=P.intensity,z=P.distance,N=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ys?N=P.shadow.map.texture:N=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*k,u+=D.g*k,f+=D.b*k;else if(P.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(P.sh.coefficients[F],k);C++}else if(P.isSunLight){let F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let V=P.shadow,j=t.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),n.sunShadow[m]=j,n.sunShadowMap[m]=N;let ae=V.getViewportCount();for(let he=0;he<ae;he++)n.sunShadowMatrix[x+he]=V.getMatrix(he),n.sunShadowCascade[x+he]=V._cascadeData[he];x+=ae,m++}n.sun[d]=F,d++}else if(P.isDirectionalLight){let F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let V=P.shadow,j=t.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[g]=j,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=P.shadow.matrix,M++}n.directional[g]=F,g++}else if(P.isSpotLight){let F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(D).multiplyScalar(k),F.distance=z,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,n.spot[v]=F;let V=P.shadow;if(P.map&&(n.spotLightMap[_]=P.map,_++,V.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[v]=V.matrix,P.castShadow){let j=t.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=N,S++}v++}else if(P.isRectAreaLight){let F=e.get(P);F.color.copy(D).multiplyScalar(k),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),n.rectArea[E]=F,E++}else if(P.isPointLight){let F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){let V=P.shadow,j=t.get(P);j.shadowIntensity=V.intensity,j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[p]=j,n.pointShadowMap[p]=N,n.pointShadowMatrix[p]=P.shadow.matrix,y++}n.point[p]=F,p++}else if(P.isHemisphereLight){let F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(k),F.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[b]=F,b++}}E>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==d||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==E||I.hemiLength!==b||I.numSunShadows!==m||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==S||I.numSpotMaps!==_||I.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=g,n.spot.length=v,n.rectArea.length=E,n.point.length=p,n.hemi.length=b,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.spotLightMatrix.length=S+_-w,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.sunLength=d,I.directionalLength=g,I.pointLength=p,I.spotLength=v,I.rectAreaLength=E,I.hemiLength=b,I.numSunShadows=m,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=S,I.numSpotMaps=_,I.numLightProbes=C,n.version=cE++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0,g=0,p=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let b=c[v];if(b.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(b.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(b.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function R0(s){let e=new uE(s),t=[],n=[],i=[];function r(f){u.camera=f,t.length=0,n.length=0,i.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){i.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function fE(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new R0(s),e.set(i,[o])):r>=a.length?(o=new R0(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function bE(s,e,t){let n=new va,i=new Ee,r=new Ee,a=new zt,o=new Rc,l=new Ac,c={},h=t.maxTextureSize,u={[Zn]:Pn,[Pn]:Zn,[Pt]:Pt},f=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:dE,fragmentShader:pE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ht;m.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ne(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tr;let p=this.type;this.render=function(y,S,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;this.type===_m&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Tr);let w=s.getRenderTarget(),C=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Xi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let H=p!==this.type;H&&S.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=y.length;P<D;P++){let k=y[P],z=k.shadow;if(z===void 0){Qe("WebGLShadowMap:",k,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let N=z.getFrameExtents();i.multiply(N),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/N.x),i.x=r.x*N.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/N.y),i.y=r.y*N.y,z.mapSize.y=r.y));let F=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=F,z.map===null||H===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ta){if(k.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new on(i.x,i.y,{format:Ys,type:xn,minFilter:bt,magFilter:bt,generateMipmaps:!1}),z.map.texture.name=k.name+".shadowMap",z.map.depthTexture=new Os(i.x,i.y,Wn),z.map.depthTexture.name=k.name+".shadowMapDepth",z.map.depthTexture.format=Hi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn}else k.isPointLight?(z.map=new Ph(i.x),z.map.depthTexture=new _c(i.x,Ai)):(z.map=new on(i.x,i.y),z.map.depthTexture=new Os(i.x,i.y,Ai)),z.map.depthTexture.name=k.name+".shadowMap",z.map.depthTexture.format=Hi,this.type===Tr?(z.map.depthTexture.compareFunction=F?Rh:wh,z.map.depthTexture.minFilter=bt,z.map.depthTexture.magFilter=bt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=fn,z.map.depthTexture.magFilter=fn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let V=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();k.isPointLight!==!0&&z.updateMatrices(k,_);for(let j=0;j<V;j++){let ae=z.getCamera(j);if(k.isPointLight){let he=z.camera,ce=z.matrix,ye=k.distance||he.far;ye!==he.far&&(he.far=ye,he.updateProjectionMatrix()),sl.setFromMatrixPosition(k.matrixWorld),he.position.copy(sl),id.copy(he.position),id.add(mE[j]),he.up.copy(gE[j]),he.lookAt(id),he.updateMatrixWorld(),ce.makeTranslation(-sl.x,-sl.y,-sl.z),A0.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),z._frustum.setFromProjectionMatrix(A0,he.coordinateSystem,he.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,j),s.clear();else{j===0&&(s.setRenderTarget(z.map),s.clear());let he=z.getViewport(j);a.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),U.viewport(a)}n=z.getFrustum(j),b(S,_,ae,k,this.type)}z.isPointLightShadow!==!0&&this.type===Ta&&v(z,_),z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,C,I)};function v(y,S){let _=e.update(x);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null?y.mapPass=new on(i.x,i.y,{format:Ys,type:xn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),f.uniforms.shadow_pass.value=y.map.depthTexture,f.uniforms.resolution.value.set(y.map.width,y.map.height),f.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(S,null,_,f,x,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(S,null,_,d,x,null)}function E(y,S,_,w){let C=null,I=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(I!==void 0)C=I;else if(C=_.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let U=C.uuid,H=S.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let D=P[H];D===void 0&&(D=C.clone(),P[H]=D,S.addEventListener("dispose",M)),C=D}if(C.visible=S.visible,C.wireframe=S.wireframe,w===Ta?C.side=S.shadowSide!==null?S.shadowSide:S.side:C.side=S.shadowSide!==null?S.shadowSide:u[S.side],C.alphaMap=S.alphaMap,C.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,C.map=S.map,C.clipShadows=S.clipShadows,C.clippingPlanes=S.clippingPlanes,C.clipIntersection=S.clipIntersection,C.displacementMap=S.displacementMap,C.displacementScale=S.displacementScale,C.displacementBias=S.displacementBias,C.wireframeLinewidth=S.wireframeLinewidth,C.linewidth=S.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=s.properties.get(C);U.light=_}return C}function b(y,S,_,w,C){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===Ta)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);let H=e.update(y),P=y.material;if(Array.isArray(P)){let D=H.groups;for(let k=0,z=D.length;k<z;k++){let N=D[k],F=P[N.materialIndex];if(F&&F.visible){let V=E(y,F,w,C);y.onBeforeShadow(s,y,S,_,H,V,N),s.renderBufferDirect(_,null,H,V,y,N),y.onAfterShadow(s,y,S,_,H,V,N)}}}else if(P.visible){let D=E(y,P,w,C);y.onBeforeShadow(s,y,S,_,H,D,null),s.renderBufferDirect(_,null,H,D,y,null),y.onAfterShadow(s,y,S,_,H,D,null)}}let U=y.children;for(let H=0,P=U.length;H<P;H++)b(U[H],S,_,w,C)}function M(y){y.target.removeEventListener("dispose",M);for(let _ in c){let w=c[_],C=y.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function xE(s,e){function t(){let O=!1,Se=new zt,ue=null,we=new zt(0,0,0,0);return{setMask:function(Be){ue!==Be&&!O&&(s.colorMask(Be,Be,Be,Be),ue=Be)},setLocked:function(Be){O=Be},setClear:function(Be,pe,G,se,Pe){Pe===!0&&(Be*=se,pe*=se,G*=se),Se.set(Be,pe,G,se),we.equals(Se)===!1&&(s.clearColor(Be,pe,G,se),we.copy(Se))},reset:function(){O=!1,ue=null,we.set(-1,0,0,0)}}}function n(){let O=!1,Se=!1,ue=null,we=null,Be=null;return{setReversed:function(pe){if(Se!==pe){let G=e.get("EXT_clip_control");pe?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT),Se=pe;let se=Be;Be=null,this.setClear(se)}},getReversed:function(){return Se},setTest:function(pe){pe?oe(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(pe){ue!==pe&&!O&&(s.depthMask(pe),ue=pe)},setFunc:function(pe){if(Se&&(pe=Qm[pe]),we!==pe){switch(pe){case lc:s.depthFunc(s.NEVER);break;case cc:s.depthFunc(s.ALWAYS);break;case hc:s.depthFunc(s.LESS);break;case ha:s.depthFunc(s.LEQUAL);break;case uc:s.depthFunc(s.EQUAL);break;case fc:s.depthFunc(s.GEQUAL);break;case dc:s.depthFunc(s.GREATER);break;case pc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=pe}},setLocked:function(pe){O=pe},setClear:function(pe){Be!==pe&&(Be=pe,Se&&(pe=1-pe),s.clearDepth(pe))},reset:function(){O=!1,ue=null,we=null,Be=null,Se=!1}}}function i(){let O=!1,Se=null,ue=null,we=null,Be=null,pe=null,G=null,se=null,Pe=null;return{setTest:function(Ke){O||(Ke?oe(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ke){Se!==Ke&&!O&&(s.stencilMask(Ke),Se=Ke)},setFunc:function(Ke,Et,Ht){(ue!==Ke||we!==Et||Be!==Ht)&&(s.stencilFunc(Ke,Et,Ht),ue=Ke,we=Et,Be=Ht)},setOp:function(Ke,Et,Ht){(pe!==Ke||G!==Et||se!==Ht)&&(s.stencilOp(Ke,Et,Ht),pe=Ke,G=Et,se=Ht)},setLocked:function(Ke){O=Ke},setClear:function(Ke){Pe!==Ke&&(s.clearStencil(Ke),Pe=Ke)},reset:function(){O=!1,Se=null,ue=null,we=null,Be=null,pe=null,G=null,se=null,Pe=null}}}let r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,E=null,b=null,M=null,y=null,S=null,_=new Ce(0,0,0),w=0,C=!1,I=null,U=null,H=null,P=null,D=null,k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,N=0,F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),z=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),z=N>=2);let V=null,j={},ae=s.getParameter(s.SCISSOR_BOX),he=s.getParameter(s.VIEWPORT),ce=new zt().fromArray(ae),ye=new zt().fromArray(he);function Xe(O,Se,ue,we){let Be=new Uint8Array(4),pe=s.createTexture();s.bindTexture(O,pe),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let G=0;G<ue;G++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Se,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Se+G,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return pe}let ie={};ie[s.TEXTURE_2D]=Xe(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Xe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Xe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Xe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(s.DEPTH_TEST),a.setFunc(ha),me(!1),J(vf),oe(s.CULL_FACE),fe(Xi);function oe(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function Te(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function De(O,Se){return f[O]!==Se?(s.bindFramebuffer(O,Se),f[O]=Se,O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Se),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Se),!0):!1}function Re(O,Se){let ue=m,we=!1;if(O){ue=d.get(Se),ue===void 0&&(ue=[],d.set(Se,ue));let Be=O.textures;if(ue.length!==Be.length||ue[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,G=Be.length;pe<G;pe++)ue[pe]=s.COLOR_ATTACHMENT0+pe;ue.length=Be.length,we=!0}}else ue[0]!==s.BACK&&(ue[0]=s.BACK,we=!0);we&&s.drawBuffers(ue)}function Ge(O){return x!==O?(s.useProgram(O),x=O,!0):!1}let gt={[xs]:s.FUNC_ADD,[ym]:s.FUNC_SUBTRACT,[Mm]:s.FUNC_REVERSE_SUBTRACT};gt[Em]=s.MIN,gt[Sm]=s.MAX;let le={[Tm]:s.ZERO,[Xo]:s.ONE,[wm]:s.SRC_COLOR,[Mf]:s.SRC_ALPHA,[Lm]:s.SRC_ALPHA_SATURATE,[Pm]:s.DST_COLOR,[Am]:s.DST_ALPHA,[Rm]:s.ONE_MINUS_SRC_COLOR,[Ef]:s.ONE_MINUS_SRC_ALPHA,[Im]:s.ONE_MINUS_DST_COLOR,[Cm]:s.ONE_MINUS_DST_ALPHA,[km]:s.CONSTANT_COLOR,[Dm]:s.ONE_MINUS_CONSTANT_COLOR,[Fm]:s.CONSTANT_ALPHA,[Nm]:s.ONE_MINUS_CONSTANT_ALPHA};function fe(O,Se,ue,we,Be,pe,G,se,Pe,Ke){if(O===Xi){g===!0&&(Te(s.BLEND),g=!1);return}if(g===!1&&(oe(s.BLEND),g=!0),O!==Bc){if(O!==p||Ke!==C){if((v!==xs||M!==xs)&&(s.blendEquation(s.FUNC_ADD),v=xs,M=xs),Ke)switch(O){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nt:s.blendFunc(s.ONE,s.ONE);break;case _f:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case yf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:rt("WebGLState: Invalid blending: ",O);break}else switch(O){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nt:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case _f:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yf:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",O);break}E=null,b=null,y=null,S=null,_.set(0,0,0),w=0,p=O,C=Ke}return}Be=Be||Se,pe=pe||ue,G=G||we,(Se!==v||Be!==M)&&(s.blendEquationSeparate(gt[Se],gt[Be]),v=Se,M=Be),(ue!==E||we!==b||pe!==y||G!==S)&&(s.blendFuncSeparate(le[ue],le[we],le[pe],le[G]),E=ue,b=we,y=pe,S=G),(se.equals(_)===!1||Pe!==w)&&(s.blendColor(se.r,se.g,se.b,Pe),_.copy(se),w=Pe),p=O,C=!1}function ve(O,Se){O.side===Pt?Te(s.CULL_FACE):oe(s.CULL_FACE);let ue=O.side===Pn;Se&&(ue=!ue),me(ue),O.blending===Xs&&O.transparent===!1?fe(Xi):fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let we=O.stencilWrite;o.setTest(we),we&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),xe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function me(O){I!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),I=O)}function J(O){O!==xm?(oe(s.CULL_FACE),O!==U&&(O===vf?s.cullFace(s.BACK):O===vm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),U=O}function be(O){O!==H&&(z&&s.lineWidth(O),H=O)}function xe(O,Se,ue){O?(oe(s.POLYGON_OFFSET_FILL),(P!==Se||D!==ue)&&(P=Se,D=ue,a.getReversed()&&(Se=-Se),s.polygonOffset(Se,ue))):Te(s.POLYGON_OFFSET_FILL)}function Ae(O){O?oe(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function ze(O){O===void 0&&(O=s.TEXTURE0+k-1),V!==O&&(s.activeTexture(O),V=O)}function B(O,Se,ue){ue===void 0&&(V===null?ue=s.TEXTURE0+k-1:ue=V);let we=j[ue];we===void 0&&(we={type:void 0,texture:void 0},j[ue]=we),(we.type!==O||we.texture!==Se)&&(V!==ue&&(s.activeTexture(ue),V=ue),s.bindTexture(O,Se||ie[O]),we.type=O,we.texture=Se)}function je(){let O=j[V];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function et(){try{s.compressedTexImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function T(){try{s.texSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function Y(){try{s.texSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function W(){try{s.compressedTexSubImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function X(){try{s.texStorage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function Q(){try{s.texStorage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function K(){try{s.texImage2D(...arguments)}catch(O){rt("WebGLState:",O)}}function Z(){try{s.texImage3D(...arguments)}catch(O){rt("WebGLState:",O)}}function de(O){return u[O]!==void 0?u[O]:s.getParameter(O)}function Me(O,Se){u[O]!==Se&&(s.pixelStorei(O,Se),u[O]=Se)}function _e(O){ce.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function ge(O){ye.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function Ie(O,Se){let ue=c.get(Se);ue===void 0&&(ue=new WeakMap,c.set(Se,ue));let we=ue.get(O);we===void 0&&(we=s.getUniformBlockIndex(Se,O.name),ue.set(O,we))}function $e(O,Se){let we=c.get(Se).get(O);l.get(Se)!==we&&(s.uniformBlockBinding(Se,we,O.__bindingPointIndex),l.set(Se,we))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},V=null,j={},f={},d=new WeakMap,m=[],x=null,g=!1,p=null,v=null,E=null,b=null,M=null,y=null,S=null,_=new Ce(0,0,0),w=0,C=!1,I=null,U=null,H=null,P=null,D=null,ce.set(0,0,s.canvas.width,s.canvas.height),ye.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:oe,disable:Te,bindFramebuffer:De,drawBuffers:Re,useProgram:Ge,setBlending:fe,setMaterial:ve,setFlipSided:me,setCullFace:J,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Ae,activeTexture:ze,bindTexture:B,unbindTexture:je,compressedTexImage2D:et,compressedTexImage3D:L,texImage2D:K,texImage3D:Z,pixelStorei:Me,getParameter:de,updateUBOMapping:Ie,uniformBlockBinding:$e,texStorage2D:X,texStorage3D:Q,texSubImage2D:T,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:W,scissor:_e,viewport:ge,reset:Le}}function vE(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ee,h=new WeakMap,u=new Set,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,T){return m?new OffscreenCanvas(L,T):da("canvas")}function g(L,T,Y){let $=1,W=et(L);if((W.width>Y||W.height>Y)&&($=Y/Math.max(W.width,W.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let X=Math.floor($*W.width),Q=Math.floor($*W.height);f===void 0&&(f=x(X,Q));let K=T?x(X,Q):f;return K.width=X,K.height=Q,K.getContext("2d").drawImage(L,0,0,X,Q),Qe("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+X+"x"+Q+")."),K}else return"data"in L&&Qe("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),L;return L}function p(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function E(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,T,Y,$,W,X=!1){if(L!==null){if(s[L]!==void 0)return s[L];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q;$&&(Q=e.get("EXT_texture_norm16"),Q||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=T;if(T===s.RED&&(Y===s.FLOAT&&(K=s.R32F),Y===s.HALF_FLOAT&&(K=s.R16F),Y===s.UNSIGNED_BYTE&&(K=s.R8),Y===s.UNSIGNED_SHORT&&Q&&(K=Q.R16_EXT),Y===s.SHORT&&Q&&(K=Q.R16_SNORM_EXT)),T===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(K=s.R8UI),Y===s.UNSIGNED_SHORT&&(K=s.R16UI),Y===s.UNSIGNED_INT&&(K=s.R32UI),Y===s.BYTE&&(K=s.R8I),Y===s.SHORT&&(K=s.R16I),Y===s.INT&&(K=s.R32I)),T===s.RG&&(Y===s.FLOAT&&(K=s.RG32F),Y===s.HALF_FLOAT&&(K=s.RG16F),Y===s.UNSIGNED_BYTE&&(K=s.RG8),Y===s.UNSIGNED_SHORT&&Q&&(K=Q.RG16_EXT),Y===s.SHORT&&Q&&(K=Q.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(K=s.RG8UI),Y===s.UNSIGNED_SHORT&&(K=s.RG16UI),Y===s.UNSIGNED_INT&&(K=s.RG32UI),Y===s.BYTE&&(K=s.RG8I),Y===s.SHORT&&(K=s.RG16I),Y===s.INT&&(K=s.RG32I)),T===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(K=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(K=s.RGB16UI),Y===s.UNSIGNED_INT&&(K=s.RGB32UI),Y===s.BYTE&&(K=s.RGB8I),Y===s.SHORT&&(K=s.RGB16I),Y===s.INT&&(K=s.RGB32I)),T===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),Y===s.UNSIGNED_INT&&(K=s.RGBA32UI),Y===s.BYTE&&(K=s.RGBA8I),Y===s.SHORT&&(K=s.RGBA16I),Y===s.INT&&(K=s.RGBA32I)),T===s.RGB&&(Y===s.UNSIGNED_SHORT&&Q&&(K=Q.RGB16_EXT),Y===s.SHORT&&Q&&(K=Q.RGB16_SNORM_EXT),Y===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),T===s.RGBA){let Z=X?mo:yt.getTransfer(W);Y===s.FLOAT&&(K=s.RGBA32F),Y===s.HALF_FLOAT&&(K=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(K=Z===Gt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT&&Q&&(K=Q.RGBA16_EXT),Y===s.SHORT&&Q&&(K=Q.RGBA16_SNORM_EXT),Y===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(L,T){let Y;return L?T===null||T===Ai||T===Ca?Y=s.DEPTH24_STENCIL8:T===Wn?Y=s.DEPTH32F_STENCIL8:T===Aa&&(Y=s.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ai||T===Ca?Y=s.DEPTH_COMPONENT24:T===Wn?Y=s.DEPTH_COMPONENT32F:T===Aa&&(Y=s.DEPTH_COMPONENT16),Y}function y(L,T){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==bt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function S(L){let T=L.target;T.removeEventListener("dispose",S),w(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function _(L){let T=L.target;T.removeEventListener("dispose",_),I(T)}function w(L){let T=n.get(L);if(T.__webglInit===void 0)return;let Y=L.source,$=d.get(Y);if($){let W=$[T.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(L),Object.keys($).length===0&&d.delete(Y)}n.remove(L)}function C(L){let T=n.get(L);s.deleteTexture(T.__webglTexture);let Y=L.source,$=d.get(Y);delete $[T.__cacheKey],a.memory.textures--}function I(L){let T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let W=0;W<T.__webglFramebuffer[$].length;W++)s.deleteFramebuffer(T.__webglFramebuffer[$][W]);else s.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)s.deleteFramebuffer(T.__webglFramebuffer[$]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Y=L.textures;for(let $=0,W=Y.length;$<W;$++){let X=n.get(Y[$]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(Y[$])}n.remove(L)}let U=0;function H(){U=0}function P(){return U}function D(L){U=L}function k(){let L=U;return L>=i.maxTextures&&Qe("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),U+=1,L}function z(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function N(L,T){let Y=n.get(L);if(L.isVideoTexture&&B(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){let $=L.image;if($===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(Y,L,T);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function F(L,T){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Te(Y,L,T);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function V(L,T){let Y=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){Te(Y,L,T);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function j(L,T){let Y=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){De(Y,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}let ae={[Gn]:s.REPEAT,[bn]:s.CLAMP_TO_EDGE,[ua]:s.MIRRORED_REPEAT},he={[fn]:s.NEAREST,[Gc]:s.NEAREST_MIPMAP_NEAREST,[Rr]:s.NEAREST_MIPMAP_LINEAR,[bt]:s.LINEAR,[Ra]:s.LINEAR_MIPMAP_NEAREST,[en]:s.LINEAR_MIPMAP_LINEAR},ce={[Wm]:s.NEVER,[Ym]:s.ALWAYS,[qm]:s.LESS,[wh]:s.LEQUAL,[Xm]:s.EQUAL,[Rh]:s.GEQUAL,[Km]:s.GREATER,[jm]:s.NOTEQUAL};function ye(L,T){if(T.type===Wn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===bt||T.magFilter===Ra||T.magFilter===Rr||T.magFilter===en||T.minFilter===bt||T.minFilter===Ra||T.minFilter===Rr||T.minFilter===en)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ae[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ae[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ae[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,he[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,he[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fn||T.minFilter!==Rr&&T.minFilter!==en||T.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Xe(L,T){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",S));let $=T.source,W=d.get($);W===void 0&&(W={},d.set($,W));let X=z(T);if(X!==L.__cacheKey){W[X]===void 0&&(W[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),W[X].usedTimes++;let Q=W[L.__cacheKey];Q!==void 0&&(W[L.__cacheKey].usedTimes--,Q.usedTimes===0&&C(T)),L.__cacheKey=X,L.__webglTexture=W[X].texture}return Y}function ie(L,T,Y){return Math.floor(Math.floor(L/Y)/T)}function oe(L,T,Y,$){let X=L.updateRanges;if(X.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,Y,$,T.data);else{X.sort((Me,_e)=>Me.start-_e.start);let Q=0;for(let Me=1;Me<X.length;Me++){let _e=X[Q],ge=X[Me],Ie=_e.start+_e.count,$e=ie(ge.start,T.width,4),Le=ie(_e.start,T.width,4);ge.start<=Ie+1&&$e===Le&&ie(ge.start+ge.count-1,T.width,4)===$e?_e.count=Math.max(_e.count,ge.start+ge.count-_e.start):(++Q,X[Q]=ge)}X.length=Q+1;let K=t.getParameter(s.UNPACK_ROW_LENGTH),Z=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Me=0,_e=X.length;Me<_e;Me++){let ge=X[Me],Ie=Math.floor(ge.start/4),$e=Math.ceil(ge.count/4),Le=Ie%T.width,O=Math.floor(Ie/T.width),Se=$e,ue=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,Le,O,Se,ue,Y,$,T.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function Te(L,T,Y){let $=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=s.TEXTURE_3D);let W=Xe(L,T),X=T.source;t.bindTexture($,L.__webglTexture,s.TEXTURE0+Y);let Q=n.get(X);if(X.version!==Q.__version||W===!0){if(t.activeTexture(s.TEXTURE0+Y),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let ue=yt.getPrimaries(yt.workingColorSpace),we=T.colorSpace===qt?null:yt.getPrimaries(T.colorSpace),Be=T.colorSpace===qt||ue===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let Z=g(T.image,!1,i.maxTextureSize);Z=je(T,Z);let de=r.convert(T.format,T.colorSpace),Me=r.convert(T.type),_e=b(T.internalFormat,de,Me,T.normalized,T.colorSpace,T.isVideoTexture);ye($,T);let ge,Ie=T.mipmaps,$e=T.isVideoTexture!==!0,Le=Q.__version===void 0||W===!0,O=X.dataReady,Se=y(T,Z);if(T.isDepthTexture)_e=M(T.format===js,T.type),Le&&($e?t.texStorage2D(s.TEXTURE_2D,1,_e,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,_e,Z.width,Z.height,0,de,Me,null));else if(T.isDataTexture)if(Ie.length>0){$e&&Le&&t.texStorage2D(s.TEXTURE_2D,Se,_e,Ie[0].width,Ie[0].height);for(let ue=0,we=Ie.length;ue<we;ue++)ge=Ie[ue],$e?O&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ge.width,ge.height,de,Me,ge.data):t.texImage2D(s.TEXTURE_2D,ue,_e,ge.width,ge.height,0,de,Me,ge.data);T.generateMipmaps=!1}else $e?(Le&&t.texStorage2D(s.TEXTURE_2D,Se,_e,Z.width,Z.height),O&&oe(T,Z,de,Me)):t.texImage2D(s.TEXTURE_2D,0,_e,Z.width,Z.height,0,de,Me,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,_e,Ie[0].width,Ie[0].height,Z.depth);for(let ue=0,we=Ie.length;ue<we;ue++)if(ge=Ie[ue],T.format!==pi)if(de!==null)if($e){if(O)if(T.layerUpdates.size>0){let Be=qf(ge.width,ge.height,T.format,T.type);for(let pe of T.layerUpdates){let G=ge.data.subarray(pe*Be/ge.data.BYTES_PER_ELEMENT,(pe+1)*Be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,pe,ge.width,ge.height,1,de,G)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ge.width,ge.height,Z.depth,de,ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ue,_e,ge.width,ge.height,Z.depth,0,ge.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ue,0,0,0,ge.width,ge.height,Z.depth,de,Me,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ue,_e,ge.width,ge.height,Z.depth,0,de,Me,ge.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{$e&&Le&&t.texStorage2D(s.TEXTURE_2D,Se,_e,Ie[0].width,Ie[0].height);for(let ue=0,we=Ie.length;ue<we;ue++)ge=Ie[ue],T.format!==pi?de!==null?$e?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,ue,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,ue,_e,ge.width,ge.height,0,ge.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?O&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,ge.width,ge.height,de,Me,ge.data):t.texImage2D(s.TEXTURE_2D,ue,_e,ge.width,ge.height,0,de,Me,ge.data)}else if(T.isDataArrayTexture)if($e){if(Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Se,_e,Z.width,Z.height,Z.depth),O)if(T.layerUpdates.size>0){let ue=qf(Z.width,Z.height,T.format,T.type);for(let we of T.layerUpdates){let Be=Z.data.subarray(we*ue/Z.data.BYTES_PER_ELEMENT,(we+1)*ue/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,Z.width,Z.height,1,de,Me,Be)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,de,Me,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,Z.width,Z.height,Z.depth,0,de,Me,Z.data);else if(T.isData3DTexture)$e?(Le&&t.texStorage3D(s.TEXTURE_3D,Se,_e,Z.width,Z.height,Z.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,de,Me,Z.data)):t.texImage3D(s.TEXTURE_3D,0,_e,Z.width,Z.height,Z.depth,0,de,Me,Z.data);else if(T.isFramebufferTexture){if(Le)if($e)t.texStorage2D(s.TEXTURE_2D,Se,_e,Z.width,Z.height);else{let ue=Z.width,we=Z.height;for(let Be=0;Be<Se;Be++)t.texImage2D(s.TEXTURE_2D,Be,_e,ue,we,0,de,Me,null),ue>>=1,we>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){let ue=s.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),Z.parentNode!==ue){ue.appendChild(Z),u.add(T),ue.onpaint=we=>{let Be=we.changedElements;for(let pe of u)Be.includes(pe.image)&&(pe.needsUpdate=!0)},ue.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{let Be=s.RGBA,pe=s.RGBA,G=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,pe,G,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if($e&&Le){let ue=et(Ie[0]);t.texStorage2D(s.TEXTURE_2D,Se,_e,ue.width,ue.height)}for(let ue=0,we=Ie.length;ue<we;ue++)ge=Ie[ue],$e?O&&t.texSubImage2D(s.TEXTURE_2D,ue,0,0,de,Me,ge):t.texImage2D(s.TEXTURE_2D,ue,_e,de,Me,ge);T.generateMipmaps=!1}else if($e){if(Le){let ue=et(Z);t.texStorage2D(s.TEXTURE_2D,Se,_e,ue.width,ue.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Me,Z)}else t.texImage2D(s.TEXTURE_2D,0,_e,de,Me,Z);p(T)&&v($),Q.__version=X.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function De(L,T,Y){if(T.image.length!==6)return;let $=Xe(L,T),W=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Y);let X=n.get(W);if(W.version!==X.__version||$===!0){t.activeTexture(s.TEXTURE0+Y);let Q=yt.getPrimaries(yt.workingColorSpace),K=T.colorSpace===qt?null:yt.getPrimaries(T.colorSpace),Z=T.colorSpace===qt||Q===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let de=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let pe=0;pe<6;pe++)!de&&!Me?_e[pe]=g(T.image[pe],!0,i.maxCubemapSize):_e[pe]=Me?T.image[pe].image:T.image[pe],_e[pe]=je(T,_e[pe]);let ge=_e[0],Ie=r.convert(T.format,T.colorSpace),$e=r.convert(T.type),Le=b(T.internalFormat,Ie,$e,T.normalized,T.colorSpace),O=T.isVideoTexture!==!0,Se=X.__version===void 0||$===!0,ue=W.dataReady,we=y(T,ge);ye(s.TEXTURE_CUBE_MAP,T);let Be;if(de){O&&Se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,Le,ge.width,ge.height);for(let pe=0;pe<6;pe++){Be=_e[pe].mipmaps;for(let G=0;G<Be.length;G++){let se=Be[G];T.format!==pi?Ie!==null?O?ue&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G,0,0,se.width,se.height,Ie,se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G,Le,se.width,se.height,0,se.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G,0,0,se.width,se.height,Ie,$e,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G,Le,se.width,se.height,0,Ie,$e,se.data)}}}else{if(Be=T.mipmaps,O&&Se){Be.length>0&&we++;let pe=et(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,we,Le,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Me){O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,_e[pe].width,_e[pe].height,Ie,$e,_e[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,_e[pe].width,_e[pe].height,0,Ie,$e,_e[pe].data);for(let G=0;G<Be.length;G++){let Pe=Be[G].image[pe].image;O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G+1,0,0,Pe.width,Pe.height,Ie,$e,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G+1,Le,Pe.width,Pe.height,0,Ie,$e,Pe.data)}}else{O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ie,$e,_e[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Le,Ie,$e,_e[pe]);for(let G=0;G<Be.length;G++){let se=Be[G];O?ue&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G+1,0,0,Ie,$e,se.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,G+1,Le,Ie,$e,se.image[pe])}}}p(T)&&v(s.TEXTURE_CUBE_MAP),X.__version=W.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Re(L,T,Y,$,W,X){let Q=r.convert(Y.format,Y.colorSpace),K=r.convert(Y.type),Z=b(Y.internalFormat,Q,K,Y.normalized,Y.colorSpace),de=n.get(T),Me=n.get(Y);if(Me.__renderTarget=T,!de.__hasExternalTextures){let _e=Math.max(1,T.width>>X),ge=Math.max(1,T.height>>X);W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?t.texImage3D(W,X,Z,_e,ge,T.depth,0,Q,K,null):t.texImage2D(W,X,Z,_e,ge,0,Q,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ze(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,W,Me.__webglTexture,0,Ae(T)):(W===s.TEXTURE_2D||W>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,W,Me.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(L,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){let $=T.depthTexture,W=$&&$.isDepthTexture?$.type:null,X=M(T.stencilBuffer,W),Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ze(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(T),X,T.width,T.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(T),X,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,X,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,L)}else{let $=T.textures;for(let W=0;W<$.length;W++){let X=$[W],Q=r.convert(X.format,X.colorSpace),K=r.convert(X.type),Z=b(X.internalFormat,Q,K,X.normalized,X.colorSpace);ze(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae(T),Z,T.width,T.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae(T),Z,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Z,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(L,T,Y){let $=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(T.depthTexture);if(W.__renderTarget=T,(!W.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$){if(W.__webglInit===void 0&&(W.__webglInit=!0,T.depthTexture.addEventListener("dispose",S)),W.__webglTexture===void 0){W.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),ye(s.TEXTURE_CUBE_MAP,T.depthTexture);let de=r.convert(T.depthTexture.format),Me=r.convert(T.depthTexture.type),_e;T.depthTexture.format===Hi?_e=s.DEPTH_COMPONENT24:T.depthTexture.format===js&&(_e=s.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,_e,T.width,T.height,0,de,Me,null)}}else N(T.depthTexture,0);let X=W.__webglTexture,Q=Ae(T),K=$?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,Z=T.depthTexture.format===js?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Hi)ze(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,K,X,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,Z,K,X,0);else if(T.depthTexture.format===js)ze(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,K,X,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,Z,K,X,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(L){let T=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){let W=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",W)};$.addEventListener("dispose",W),T.__depthDisposeCallback=W}T.__boundDepthTexture=$}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let $=0;$<6;$++)gt(T.__webglFramebuffer[$],L,$);else{let $=L.texture.mipmaps;$&&$.length>0?gt(T.__webglFramebuffer[0],L,0):gt(T.__webglFramebuffer,L,0)}else if(Y){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=s.createRenderbuffer(),Ge(T.__webglDepthbuffer[$],L,!1);else{let W=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,X)}}else{let $=L.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ge(T.__webglDepthbuffer,L,!1);else{let W=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,X)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(L,T,Y){let $=n.get(L);T!==void 0&&Re($.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&le(L)}function ve(L){let T=L.texture,Y=n.get(L),$=n.get(T);L.addEventListener("dispose",_);let W=L.textures,X=L.isWebGLCubeRenderTarget===!0,Q=W.length>1;if(Q||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=T.version,a.memory.textures++),X){Y.__webglFramebuffer=[];for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[K]=[];for(let Z=0;Z<T.mipmaps.length;Z++)Y.__webglFramebuffer[K][Z]=s.createFramebuffer()}else Y.__webglFramebuffer[K]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let K=0;K<T.mipmaps.length;K++)Y.__webglFramebuffer[K]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Q)for(let K=0,Z=W.length;K<Z;K++){let de=n.get(W[K]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&ze(L)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let K=0;K<W.length;K++){let Z=W[K];Y.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[K]);let de=r.convert(Z.format,Z.colorSpace),Me=r.convert(Z.type),_e=b(Z.internalFormat,de,Me,Z.normalized,Z.colorSpace,L.isXRRenderTarget===!0),ge=Ae(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,_e,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,Y.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ye(s.TEXTURE_CUBE_MAP,T);for(let K=0;K<6;K++)if(T.mipmaps&&T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)Re(Y.__webglFramebuffer[K][Z],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else Re(Y.__webglFramebuffer[K],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(T)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let K=0,Z=W.length;K<Z;K++){let de=W[K],Me=n.get(de),_e=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,Me.__webglTexture),ye(_e,de),Re(Y.__webglFramebuffer,L,de,s.COLOR_ATTACHMENT0+K,_e,0),p(de)&&v(_e)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(K=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,$.__webglTexture),ye(K,T),T.mipmaps&&T.mipmaps.length>0)for(let Z=0;Z<T.mipmaps.length;Z++)Re(Y.__webglFramebuffer[Z],L,T,s.COLOR_ATTACHMENT0,K,Z);else Re(Y.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,K,0);p(T)&&v(K),t.unbindTexture()}L.depthBuffer&&le(L)}function me(L){let T=L.textures;for(let Y=0,$=T.length;Y<$;Y++){let W=T[Y];if(p(W)){let X=E(L),Q=n.get(W).__webglTexture;t.bindTexture(X,Q),v(X),t.unbindTexture()}}}let J=[],be=[];function xe(L){if(L.samples>0){if(ze(L)===!1){let T=L.textures,Y=L.width,$=L.height,W=s.COLOR_BUFFER_BIT,X=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=n.get(L),K=T.length>1;if(K)for(let de=0;de<T.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);let Z=L.texture.mipmaps;Z&&Z.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let de=0;de<T.length;de++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(W|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(W|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);let Me=n.get(T[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Me,0)}s.blitFramebuffer(0,0,Y,$,0,0,Y,$,W,s.NEAREST),l===!0&&(J.length=0,be.length=0,J.push(s.COLOR_ATTACHMENT0+de),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(J.push(X),be.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<T.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,Q.__webglColorRenderbuffer[de]);let Me=n.get(T[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Me,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ae(L){return Math.min(i.maxSamples,L.samples)}function ze(L){let T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function B(L){let T=a.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function je(L,T){let Y=L.colorSpace,$=L.format,W=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Rt&&Y!==qt&&(yt.getTransfer(Y)===Gt?($!==pi||W!==En)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",Y)),T}function et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.getTextureUnits=P,this.setTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=fe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function _E(s,e){function t(n,i=qt){let r,a=yt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===Wc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Df)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===If)return s.BYTE;if(n===Lf)return s.SHORT;if(n===Aa)return s.UNSIGNED_SHORT;if(n===Vc)return s.INT;if(n===Ai)return s.UNSIGNED_INT;if(n===Wn)return s.FLOAT;if(n===xn)return s.HALF_FLOAT;if(n===Ff)return s.ALPHA;if(n===Nf)return s.RGB;if(n===pi)return s.RGBA;if(n===Hi)return s.DEPTH_COMPONENT;if(n===js)return s.DEPTH_STENCIL;if(n===Xc)return s.RED;if(n===Kc)return s.RED_INTEGER;if(n===Ys)return s.RG;if(n===jc)return s.RG_INTEGER;if(n===Yc)return s.RGBA_INTEGER;if(n===Yo||n===Jo||n===Zo||n===$o)if(a===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jc||n===Zc||n===$c||n===Qc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===eh||n===th||n===nh||n===ih||n===sh||n===Qo||n===rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===eh||n===th)return a===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ih)return r.COMPRESSED_R11_EAC;if(n===sh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Qo)return r.COMPRESSED_RG11_EAC;if(n===rh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ah||n===oh||n===lh||n===ch||n===hh||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===bh||n===xh||n===vh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ah)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===oh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ch)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ph)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vh)return a===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_h||n===yh||n===Mh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_h)return a===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Sh||n===el||n===Th)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Th)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ca?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}function SE(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,E,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,E):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),E=v.envMap,b=v.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(F0),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,E){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=E*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TE(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let y=M.program;n.uniformBlockBinding(b,y)}function c(b,M){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",v));let S=M.program;n.updateUBOMapping(b,S);let _=e.render.frame;r[b.id]!==_&&(f(b),r[b.id]=_)}function h(b){let M=u();b.__bindingPointIndex=M;let y=s.createBuffer(),S=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,S,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=i[b.id],y=b.uniforms,S=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,w=y.length;_<w;_++){let C=y[_];if(Array.isArray(C))for(let I=0,U=C.length;I<U;I++)d(C[I],_,I,S);else d(C,_,0,S)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,M,y,S){if(x(b,M,y,S)===!0){let _=b.__offset,w=b.value;if(Array.isArray(w)){let C=0;for(let I=0;I<w.length;I++){let U=w[I],H=p(U);m(U,b.__data,C),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(w,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,b.__data)}}function m(b,M,y){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,y)}function x(b,M,y,S){let _=b.value,w=M+"_"+y;if(S[w]===void 0)return typeof _=="number"||typeof _=="boolean"?S[w]=_:ArrayBuffer.isView(_)?S[w]=_.slice():S[w]=_.clone(),!0;{let C=S[w];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return S[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(b){let M=b.uniforms,y=0,S=16;for(let w=0,C=M.length;w<C;w++){let I=Array.isArray(M[w])?M[w]:[M[w]];for(let U=0,H=I.length;U<H;U++){let P=I[U],D=Array.isArray(P.value)?P.value:[P.value];for(let k=0,z=D.length;k<z;k++){let N=D[k],F=p(N),V=y%S,j=V%F.boundary,ae=V+j;y+=j,ae!==0&&S-ae<F.storage&&(y+=S-ae),P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=y,y+=F.storage}}}let _=y%S;return _>0&&(y+=S-_),b.__size=y,b.__cache={},this}function p(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",b),M}function v(b){let M=b.target;M.removeEventListener("dispose",v);let y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function E(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:E}}function RE(){return Ki===null&&(Ki=new Bs(wE,16,16,Ys,xn),Ki.name="DFG_LUT",Ki.minFilter=bt,Ki.magFilter=bt,Ki.wrapS=bn,Ki.wrapT=bn,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}var Hv,Ov,Gv,Vv,Wv,qv,Xv,Kv,jv,Yv,Jv,Zv,$v,Qv,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,f_,d_,p_,m_,g_,b_,x_,v_,__,y_,M_,E_,S_,T_,w_,R_,A_,C_,P_,I_,L_,k_,D_,F_,N_,U_,z_,B_,H_,O_,G_,V_,W_,q_,X_,K_,j_,Y_,J_,Z_,$_,Q_,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,fy,dy,py,my,gy,by,xy,vy,_y,yy,My,Ey,Sy,Ty,wy,Ry,Ay,Cy,Py,Iy,Ly,ky,Dy,Fy,Ny,Uy,zy,By,Hy,Oy,Gy,Vy,Wy,qy,Xy,Ky,jy,Yy,Jy,Zy,$y,Qy,e1,t1,n1,i1,s1,r1,a1,o1,l1,c1,h1,u1,f1,d1,p1,m1,g1,b1,x1,v1,_t,ke,ji,Ah,_1,P0,La,w1,R1,A1,il,l0,$f,Qf,ed,td,C1,Pr,Ir,Ph,H1,I0,sd,L0,k0,D0,f0,d0,p0,m0,g0,rd,ad,od,nd,ka,CM,PM,v0,DM,Ch,HM,OM,VM,qM,KM,YM,ZM,tE,cd,hd,cE,dE,pE,mE,gE,A0,sl,id,yE,ME,ud,fd,EE,F0,wE,Ki,Ih,It=pt(()=>{Zf();Zf();Hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ov=`#ifdef USE_ALPHAHASH
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
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,Kv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
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
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$v=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,e_=`#ifdef USE_BUMPMAP
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,c_=`#define PI 3.141592653589793
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
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u_=`vec3 transformedNormal = objectNormal;
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
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",b_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,L_=`#ifdef USE_ENVMAP
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
#endif`,k_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
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
#endif`,z_=`uniform sampler2D dfgLUT;
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
}`,B_=`
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
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
#endif`,O_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J_=`#if defined( USE_POINTS_UV )
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
#endif`,Z_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ny=`#ifdef USE_MORPHTARGETS
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
#endif`,iy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cy=`#ifdef USE_NORMALMAP
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
#endif`,hy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,py=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,my=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_y=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,My=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ty=`float getShadowMask() {
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
}`,wy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ry=`#ifdef USE_SKINNING
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
#endif`,Ay=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cy=`#ifdef USE_SKINNING
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
#endif`,Py=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dy=`#ifdef USE_TRANSMISSION
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
#endif`,Fy=`#ifdef USE_TRANSMISSION
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
#endif`,Ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,By=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oy=`uniform sampler2D t2D;
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`#include <common>
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
}`,Ky=`#if DEPTH_PACKING == 3200
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
}`,jy=`#define DISTANCE
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
}`,Yy=`#define DISTANCE
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
}`,Jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`uniform float scale;
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
}`,Qy=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#define LAMBERT
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
}`,i1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,r1=`#define MATCAP
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
}`,a1=`#define NORMAL
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
}`,o1=`#define NORMAL
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
}`,l1=`#define PHONG
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
}`,c1=`#define PHONG
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
}`,h1=`#define STANDARD
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
}`,u1=`#define STANDARD
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
}`,f1=`#define TOON
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
}`,d1=`#define TOON
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
}`,p1=`uniform float size;
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
}`,m1=`uniform vec3 diffuse;
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
}`,g1=`#include <common>
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
}`,b1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,v1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Hv,alphahash_pars_fragment:Ov,alphamap_fragment:Gv,alphamap_pars_fragment:Vv,alphatest_fragment:Wv,alphatest_pars_fragment:qv,aomap_fragment:Xv,aomap_pars_fragment:Kv,batching_pars_vertex:jv,batching_vertex:Yv,begin_vertex:Jv,beginnormal_vertex:Zv,bsdfs:$v,iridescence_fragment:Qv,bumpmap_pars_fragment:e_,clipping_planes_fragment:t_,clipping_planes_pars_fragment:n_,clipping_planes_pars_vertex:i_,clipping_planes_vertex:s_,color_fragment:r_,color_pars_fragment:a_,color_pars_vertex:o_,color_vertex:l_,common:c_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:u_,displacementmap_pars_vertex:f_,displacementmap_vertex:d_,emissivemap_fragment:p_,emissivemap_pars_fragment:m_,colorspace_fragment:g_,colorspace_pars_fragment:b_,envmap_fragment:x_,envmap_common_pars_fragment:v_,envmap_pars_fragment:__,envmap_pars_vertex:y_,envmap_physical_pars_fragment:L_,envmap_vertex:M_,fog_vertex:E_,fog_pars_vertex:S_,fog_fragment:T_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:A_,lights_lambert_fragment:C_,lights_lambert_pars_fragment:P_,lights_pars_begin:I_,lights_toon_fragment:k_,lights_toon_pars_fragment:D_,lights_phong_fragment:F_,lights_phong_pars_fragment:N_,lights_physical_fragment:U_,lights_physical_pars_fragment:z_,lights_fragment_begin:B_,lights_fragment_maps:H_,lights_fragment_end:O_,lightprobes_pars_fragment:G_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:q_,logdepthbuf_vertex:X_,map_fragment:K_,map_pars_fragment:j_,map_particle_fragment:Y_,map_particle_pars_fragment:J_,metalnessmap_fragment:Z_,metalnessmap_pars_fragment:$_,morphinstance_vertex:Q_,morphcolor_vertex:ey,morphnormal_vertex:ty,morphtarget_pars_vertex:ny,morphtarget_vertex:iy,normal_fragment_begin:sy,normal_fragment_maps:ry,normal_pars_fragment:ay,normal_pars_vertex:oy,normal_vertex:ly,normalmap_pars_fragment:cy,clearcoat_normal_fragment_begin:hy,clearcoat_normal_fragment_maps:uy,clearcoat_pars_fragment:fy,iridescence_pars_fragment:dy,opaque_fragment:py,packing:my,premultiplied_alpha_fragment:gy,project_vertex:by,dithering_fragment:xy,dithering_pars_fragment:vy,roughnessmap_fragment:_y,roughnessmap_pars_fragment:yy,shadowmap_pars_fragment:My,shadowmap_pars_vertex:Ey,shadowmap_vertex:Sy,shadowmask_pars_fragment:Ty,skinbase_vertex:wy,skinning_pars_vertex:Ry,skinning_vertex:Ay,skinnormal_vertex:Cy,specularmap_fragment:Py,specularmap_pars_fragment:Iy,tonemapping_fragment:Ly,tonemapping_pars_fragment:ky,transmission_fragment:Dy,transmission_pars_fragment:Fy,uv_pars_fragment:Ny,uv_pars_vertex:Uy,uv_vertex:zy,worldpos_vertex:By,background_vert:Hy,background_frag:Oy,backgroundCube_vert:Gy,backgroundCube_frag:Vy,cube_vert:Wy,cube_frag:qy,depth_vert:Xy,depth_frag:Ky,distance_vert:jy,distance_frag:Yy,equirect_vert:Jy,equirect_frag:Zy,linedashed_vert:$y,linedashed_frag:Qy,meshbasic_vert:e1,meshbasic_frag:t1,meshlambert_vert:n1,meshlambert_frag:i1,meshmatcap_vert:s1,meshmatcap_frag:r1,meshnormal_vert:a1,meshnormal_frag:o1,meshphong_vert:l1,meshphong_frag:c1,meshphysical_vert:h1,meshphysical_frag:u1,meshtoon_vert:f1,meshtoon_frag:d1,points_vert:p1,points_frag:m1,shadow_vert:g1,shadow_frag:b1,sprite_vert:x1,sprite_frag:v1},ke={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ji={basic:{uniforms:qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:qn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:qn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:qn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ce(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:qn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:qn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:qn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:qn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:qn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:qn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:qn([ke.common,ke.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:qn([ke.lights,ke.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};ji.physical={uniforms:qn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};Ah={r:0,b:0,g:0},_1=new Fe,P0=new mt;P0.set(-1,0,0,0,1,0,0,0,1);La=4,w1=6,R1=20,A1=256,il=new qi,l0=new Ce,$f=null,Qf=0,ed=0,td=!1,C1=new R,Pr=new R,Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=C1}=r;$f=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Qf,ed),this._renderer.xr.enabled=td,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Qf=this._renderer.getActiveCubeFace(),ed=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:xn,format:pi,colorSpace:Rt,depthBuffer:!1},i=c0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=P1(r)),this._blurMaterial=L1(r,e,t),this._ggxMaterial=I1(r,e,t)}return i}_compileMaterial(e){let t=new ne(new ht,e);this._renderer.compile(t,il)}_sceneToCubeUV(e,t,n,i,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(l0),u.toneMapping=si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new Oe,new st({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(l0),p=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let M=this._cubeSize;Ia(i,b*M,E>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ks||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h0());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ia(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-La?n-m+La:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Ia(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(o,il),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ia(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(o,il)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-La?i-this._lodMax+La:0),f=4*(this._cubeSize-h);Ia(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,il)}};Ph=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new To(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oe(5,5,5),r=new Ct({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Xi});r.uniforms.tEquirect.value=t;let a=new ne(i,r),o=t.minFilter;return t.minFilter===en&&(t.minFilter=bt),new Nc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};H1={[Sf]:"LINEAR_TONE_MAPPING",[Tf]:"REINHARD_TONE_MAPPING",[wf]:"CINEON_TONE_MAPPING",[Ko]:"ACES_FILMIC_TONE_MAPPING",[Af]:"AGX_TONE_MAPPING",[Cf]:"NEUTRAL_TONE_MAPPING",[Rf]:"CUSTOM_TONE_MAPPING"};I0=new yn,sd=new Os(1,1),L0=new bo,k0=new bc,D0=new To,f0=[],d0=[],p0=new Float32Array(16),m0=new Float32Array(9),g0=new Float32Array(4);rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=oM(t.type)}},ad=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}},od=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},nd=/(\w+)(\])?(\[|\.)?/g;ka=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);AM(o,l,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};CM=37297,PM=0;v0=new mt;DM={[Sf]:"Linear",[Tf]:"Reinhard",[wf]:"Cineon",[Ko]:"ACESFilmic",[Af]:"AgX",[Cf]:"Neutral",[Rf]:"Custom"};Ch=new R;HM=/^[ \t]*#include +<([\w\d./]+)>/gm;OM=new Map;VM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;qM={[Tr]:"SHADOWMAP_TYPE_PCF",[Ta]:"SHADOWMAP_TYPE_VSM"};KM={[Ks]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE_UV"};YM={[wr]:"ENVMAP_MODE_REFRACTION"};ZM={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[Um]:"ENVMAP_BLENDING_MIX",[zm]:"ENVMAP_BLENDING_ADD"};tE=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hd(e),t.set(e,n)),n}},hd=class{constructor(e){this.id=tE++,this.code=e,this.usedTimes=0}};cE=0;dE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pE=`uniform sampler2D shadow_pass;
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
}`,mE=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],gE=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],A0=new Fe,sl=new R,id=new R;yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ME=`
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

}`,ud=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ct({vertexShader:yE,fragmentShader:ME,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ne(new lt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fd=class extends Oi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,x=typeof XRWebGLBinding<"u",g=new ud,p={},v=t.getContextAttributes(),E=null,b=null,M=[],y=[],S=new Ee,_=null,w=null,C=new an;C.viewport=new zt;let I=new an;I.viewport=new zt;let U=[C,I],H=new Uc,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let oe=M[ie];return oe===void 0&&(oe=new ba,M[ie]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ie){let oe=M[ie];return oe===void 0&&(oe=new ba,M[ie]=oe),oe.getGripSpace()},this.getHand=function(ie){let oe=M[ie];return oe===void 0&&(oe=new ba,M[ie]=oe),oe.getHandSpace()};function k(ie){let oe=y.indexOf(ie.inputSource);if(oe===-1)return;let Te=M[oe];Te!==void 0&&(Te.update(ie.inputSource,ie.frame,c||a),Te.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",N);for(let ie=0;ie<M.length;ie++){let oe=y[ie];oe!==null&&(y[ie]=null,M[ie].disconnect(oe))}P=null,D=null,g.reset();for(let ie in p)delete p[ie];if(e.setRenderTarget(E),d=null,f=null,u=null,i=null,b=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(S.width,S.height,!1),w!==null){let ie=w.camera;ie.fov=w.fov,ie.zoom=w.zoom,ie.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",z),i.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(S),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,De=null,Re=null;v.depth&&(Re=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=v.stencil?js:Hi,De=v.stencil?Ca:Ai);let Ge={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new on(f.textureWidth,f.textureHeight,{format:pi,type:En,depthTexture:new Os(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new on(d.framebufferWidth,d.framebufferHeight,{format:pi,type:En,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(ie){for(let oe=0;oe<ie.removed.length;oe++){let Te=ie.removed[oe],De=y.indexOf(Te);De>=0&&(y[De]=null,M[De].disconnect(Te))}for(let oe=0;oe<ie.added.length;oe++){let Te=ie.added[oe],De=y.indexOf(Te);if(De===-1){for(let Ge=0;Ge<M.length;Ge++)if(Ge>=y.length){y.push(Te),De=Ge;break}else if(y[Ge]===null){y[Ge]=Te,De=Ge;break}if(De===-1)break}let Re=M[De];Re&&Re.connect(Te)}}let F=new R,V=new R;function j(ie,oe,Te){F.setFromMatrixPosition(oe.matrixWorld),V.setFromMatrixPosition(Te.matrixWorld);let De=F.distanceTo(V),Re=oe.projectionMatrix.elements,Ge=Te.projectionMatrix.elements,gt=Re[14]/(Re[10]-1),le=Re[14]/(Re[10]+1),fe=(Re[9]+1)/Re[5],ve=(Re[9]-1)/Re[5],me=(Re[8]-1)/Re[0],J=(Ge[8]+1)/Ge[0],be=gt*me,xe=gt*J,Ae=De/(-me+J),ze=Ae*-me;if(oe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ze),ie.translateZ(Ae),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Re[10]===-1)ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let B=gt+Ae,je=le+Ae,et=be-ze,L=xe+(De-ze),T=fe*le/je*B,Y=ve*le/je*B;ie.projectionMatrix.makePerspective(et,L,T,Y,B,je),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ae(ie,oe){oe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(oe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let oe=ie.near,Te=ie.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),H.near=I.near=C.near=oe,H.far=I.far=C.far=Te,(P!==H.near||D!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,D=H.far),H.layers.mask=ie.layers.mask|6,C.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let De=ie.parent,Re=H.cameras;ae(H,De);for(let Ge=0;Ge<Re.length;Ge++)ae(Re[Ge],De);Re.length===2?j(H,C,I):H.projectionMatrix.copy(C.projectionMatrix),w===null&&ie.isPerspectiveCamera&&(w={camera:ie,fov:ie.fov,zoom:ie.zoom}),he(ie,H,De)};function he(ie,oe,Te){Te===null?ie.matrix.copy(oe.matrixWorld):(ie.matrix.copy(Te.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(oe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(oe.projectionMatrix),ie.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=gr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(ie){return p[ie]};let ce=null;function ye(ie,oe){if(h=oe.getViewerPose(c||a),m=oe,h!==null){let Te=h.views;d!==null&&(e.setRenderTargetFramebuffer(b,d.framebuffer),e.setRenderTarget(b));let De=!1;Te.length!==H.cameras.length&&(H.cameras.length=0,De=!0);for(let le=0;le<Te.length;le++){let fe=Te[le],ve=null;if(d!==null)ve=d.getViewport(fe);else{let J=u.getViewSubImage(f,fe);ve=J.viewport,le===0&&(e.setRenderTargetTextures(b,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(b))}let me=U[le];me===void 0&&(me=new an,me.layers.enable(le),me.viewport=new zt,U[le]=me),me.matrix.fromArray(fe.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(fe.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ve.x,ve.y,ve.width,ve.height),le===0&&(H.matrix.copy(me.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),De===!0&&H.cameras.push(me)}let Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let le=u.getDepthInformation(Te[0]);le&&le.isValid&&le.texture&&g.init(le,i.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let le=0;le<Te.length;le++){let fe=Te[le].camera;if(fe){let ve=p[fe];ve||(ve=new wo,p[fe]=ve);let me=u.getCameraImage(fe);ve.sourceTexture=me}}}}for(let Te=0;Te<M.length;Te++){let De=y[Te],Re=M[Te];De!==null&&Re!==void 0&&Re.update(De,oe,c||a)}ce&&ce(ie,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}let Xe=new C0;Xe.setAnimationLoop(ye),this.setAnimationLoop=function(ie){ce=ie},this.dispose=function(){}}},EE=new Fe,F0=new mt;F0.set(-1,0,0,0,1,0,0,0,1);wE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ki=null;Ih=class{constructor(e={}){let{canvas:t=Jm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=En}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let x=d,g=new Set([Yc,jc,Kc]),p=new Set([En,Ai,Aa,Ca,Wc,qc]),v=new Uint32Array(4),E=new Int32Array(4),b=new R,M=null,y=null,S=[],_=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,I=!1,U=null,H=null,P=null,D=null;this._outputColorSpace=at;let k=0,z=0,N=null,F=-1,V=null,j=new zt,ae=new zt,he=null,ce=new Ce(0),ye=0,Xe=t.width,ie=t.height,oe=1,Te=null,De=null,Re=new zt(0,0,Xe,ie),Ge=new zt(0,0,Xe,ie),gt=!1,le=new va,fe=!1,ve=!1,me=new Fe,J=new R,be=new zt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function ze(){return N===null?oe:1}let B=n;function je(A,q){return t.getContext(A,q)}let et,L,T,Y,$,W,X,Q,K,Z,de,Me,_e,ge,Ie,$e,Le,O,Se,ue,we,Be,pe;try{let A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Et,!1),B===null){let q="webgl2";if(B=je(q,A),B===null)throw je(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}G()}catch(A){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),rt("WebGLRenderer: "+A.message),A}function G(){et=new D1(B),et.init(),we=new _E(B,et),L=new S1(B,et,e,we),T=new xE(B,et),L.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),H=B.createFramebuffer(),P=B.createFramebuffer(),D=B.createFramebuffer(),Y=new U1(B),$=new sE,W=new vE(B,et,T,$,L,we,Y),X=new k1(C),Q=new Bv(B),Be=new M1(B,Q),K=new F1(B,Q,Y,Be),Z=new B1(B,K,Q,Be,Y),O=new z1(B,L,W),Ie=new T1($),de=new iE(C,X,et,L,Be,Ie),Me=new SE(C,$),_e=new aE,ge=new fE(et),Le=new y1(C,X,T,Z,m,l),$e=new bE(C,Z,L),pe=new TE(B,Y,L,T),Se=new E1(B,et,Y),ue=new N1(B,et,Y),Y.programs=de.programs,C.capabilities=L,C.extensions=et,C.properties=$,C.renderLists=_e,C.shadowMap=$e,C.state=T,C.info=Y}x!==En&&(w=new O1(x,t.width,t.height,o,i,r));let se=new fd(C,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(Xe,ie,!1))},this.getSize=function(A){return A.set(Xe,ie)},this.setSize=function(A,q,re=!0){if(se.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=A,ie=q,t.width=Math.floor(A*oe),t.height=Math.floor(q*oe),re===!0&&(t.style.width=A+"px",t.style.height=q+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Xe*oe,ie*oe).floor()},this.setDrawingBufferSize=function(A,q,re){Xe=A,ie=q,oe=re,t.width=Math.floor(A*re),t.height=Math.floor(q*re),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(x===En){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(j)},this.getViewport=function(A){return A.copy(Re)},this.setViewport=function(A,q,re,ee){A.isVector4?Re.set(A.x,A.y,A.z,A.w):Re.set(A,q,re,ee),T.viewport(j.copy(Re).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(Ge)},this.setScissor=function(A,q,re,ee){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,q,re,ee),T.scissor(ae.copy(Ge).multiplyScalar(oe).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){T.setScissorTest(gt=A)},this.setOpaqueSort=function(A){Te=A},this.setTransparentSort=function(A){De=A},this.getClearColor=function(A){return A.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,re=!0){let ee=0;if(A){let te=!1;if(N!==null){let He=N.texture.format;te=g.has(He)}if(te){let He=N.texture.type,qe=p.has(He),Ue=Le.getClearColor(),Je=Le.getClearAlpha(),tt=Ue.r,xt=Ue.g,wt=Ue.b;qe?(v[0]=tt,v[1]=xt,v[2]=wt,v[3]=Je,B.clearBufferuiv(B.COLOR,0,v)):(E[0]=tt,E[1]=xt,E[2]=wt,E[3]=Je,B.clearBufferiv(B.COLOR,0,E))}else ee|=B.COLOR_BUFFER_BIT}q&&(ee|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Le.dispose(),_e.dispose(),ge.dispose(),$.dispose(),X.dispose(),Z.dispose(),Be.dispose(),pe.dispose(),de.dispose(),se.dispose(),se.removeEventListener("sessionstart",dt),se.removeEventListener("sessionend",Jt),kn.stop()};function Pe(A){A.preventDefault(),go("WebGLRenderer: Context Lost."),I=!0}function Ke(){go("WebGLRenderer: Context Restored."),I=!1;let A=Y.autoReset,q=$e.enabled,re=$e.autoUpdate,ee=$e.needsUpdate,te=$e.type;G(),Y.autoReset=A,$e.enabled=q,$e.autoUpdate=re,$e.needsUpdate=ee,$e.type=te}function Et(A){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ht(A){let q=A.target;q.removeEventListener("dispose",Ht),zn(q)}function zn(A){_i(A),$.remove(A)}function _i(A){let q=$.get(A).programs;q!==void 0&&(q.forEach(function(re){de.releaseProgram(re)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,re,ee,te,He){q===null&&(q=xe);let qe=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ue=nx(A,q,re,ee,te);T.setMaterial(ee,qe);let Je=re.index,tt=1;if(ee.wireframe===!0){if(Je=K.getWireframeAttribute(re),Je===void 0)return;tt=2}let xt=re.drawRange,wt=re.attributes.position,Ze=xt.start*tt,Ot=(xt.start+xt.count)*tt;He!==null&&(Ze=Math.max(Ze,He.start*tt),Ot=Math.min(Ot,(He.start+He.count)*tt)),Je!==null?(Ze=Math.max(Ze,0),Ot=Math.min(Ot,Je.count)):wt!=null&&(Ze=Math.max(Ze,0),Ot=Math.min(Ot,wt.count));let mn=Ot-Ze;if(mn<0||mn===1/0)return;Be.setup(te,ee,Ue,re,Je);let Qt,jt=Se;if(Je!==null&&(Qt=Q.get(Je),jt=ue,jt.setIndex(Qt)),te.isMesh)ee.wireframe===!0?(T.setLineWidth(ee.wireframeLinewidth*ze()),jt.setMode(B.LINES)):jt.setMode(B.TRIANGLES);else if(te.isLine){let Bn=ee.linewidth;Bn===void 0&&(Bn=1),T.setLineWidth(Bn*ze()),te.isLineSegments?jt.setMode(B.LINES):te.isLineLoop?jt.setMode(B.LINE_LOOP):jt.setMode(B.LINE_STRIP)}else te.isPoints?jt.setMode(B.POINTS):te.isSprite&&jt.setMode(B.TRIANGLES);if(te.isBatchedMesh)if(et.get("WEBGL_multi_draw"))jt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let Bn=te._multiDrawStarts,Ve=te._multiDrawCounts,Yn=te._multiDrawCount,Ft=Je?Q.get(Je).bytesPerElement:1,gi=$.get(ee).currentProgram.getUniforms();for(let Ui=0;Ui<Yn;Ui++)gi.setValue(B,"_gl_DrawID",Ui),jt.render(Bn[Ui]/Ft,Ve[Ui])}else if(te.isInstancedMesh)jt.renderInstances(Ze,mn,te.count);else if(re.isInstancedBufferGeometry){let Bn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ve=Math.min(re.instanceCount,Bn);jt.renderInstances(Ze,mn,Ve)}else jt.render(Ze,mn)};function hn(A,q,re,ee){U!==null&&A.isNodeMaterial&&U.setObject(ee,A),fe===!0&&Ie.setState(A,re,!1),A.transparent===!0&&A.side===Pt&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,Rl(A,q,ee),A.side=Zn,A.needsUpdate=!0,Rl(A,q,ee),A.side=Pt):Rl(A,q,ee)}this.compile=function(A,q,re=null){re===null&&(re=A),U!==null&&U.renderStart(A,q,re),y=ge.get(re),y.init(q),_.push(y),re.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),A!==re&&A.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(y.pushLight(te),te.castShadow&&y.pushShadow(te))}),y.setupLights(),U!==null&&U.updateLights(y.state.lightsArray),ve=this.localClippingEnabled,fe=Ie.init(this.clippingPlanes,ve),fe===!0&&Ie.setGlobalState(this.clippingPlanes,q),U!==null&&$e.render(y.state.shadowsArray,re,q);let ee=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let He=te.material;if(He)if(Array.isArray(He))for(let qe=0;qe<He.length;qe++){let Ue=He[qe];hn(Ue,re,q,te),ee.add(Ue)}else hn(He,re,q,te),ee.add(He)}),y=_.pop(),U!==null&&U.renderEnd(),ee},this.compileAsync=function(A,q,re=null){let ee=this.compile(A,q,re);return new Promise(te=>{function He(){if(ee.forEach(function(qe){let Je=$.get(qe).currentProgram;(Je===void 0||Je.isReady())&&ee.delete(qe)}),ee.size===0){te(A);return}setTimeout(He,10)}et.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let jn=null;function We(A){jn&&jn(A)}function dt(){kn.stop()}function Jt(){kn.start()}let kn=new C0;kn.setAnimationLoop(We),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){jn=A,se.setAnimationLoop(A),A===null?kn.stop():kn.start()},se.addEventListener("sessionstart",dt),se.addEventListener("sessionend",Jt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(A,q);let re=se.enabled===!0&&se.isPresenting===!0,ee=w!==null&&(N===null||re)&&w.begin(C,N);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(q),q=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,N),y=ge.get(A,_.length),y.init(q),y.state.textureUnits=W.getTextureUnits(),_.push(y),me.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),le.setFromProjectionMatrix(me,Ti,q.reversedDepth),ve=this.localClippingEnabled,fe=Ie.init(this.clippingPlanes,ve),M=_e.get(A,S.length),M.init(),S.push(M),se.enabled===!0&&se.isPresenting===!0){let qe=C.xr.getDepthSensingMesh();qe!==null&&ei(qe,q,-1/0,C.sortObjects)}ei(A,q,0,C.sortObjects),M.finish(),U!==null&&U.updateLights(y.state.lightsArray),C.sortObjects===!0&&M.sort(Te,De),Ae=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ae&&Le.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),fe===!0&&Ie.beginShadows();let te=y.state.shadowsArray;if($e.render(te,A,q),fe===!0&&Ie.endShadows(),(ee&&w.hasRenderPass())===!1){let qe=M.opaque,Ue=M.transmissive;if(y.setupLights(),q.isArrayCamera){let Je=q.cameras;if(Ue.length>0)for(let tt=0,xt=Je.length;tt<xt;tt++){let wt=Je[tt];or(qe,Ue,A,wt)}Ae&&Le.render(A);for(let tt=0,xt=Je.length;tt<xt;tt++){let wt=Je[tt];ti(M,A,wt,wt.viewport)}}else Ue.length>0&&or(qe,Ue,A,q),Ae&&Le.render(A),ti(M,A,q)}N!==null&&z===0&&(W.updateMultisampleRenderTarget(N),W.updateRenderTargetMipmap(N)),ee&&w.end(C),A.isScene===!0&&A.onAfterRender(C,A,q),Be.resetDefaultState(),F=-1,V=null,_.pop(),_.length>0?(y=_[_.length-1],W.setTextureUnits(y.state.textureUnits),fe===!0&&Ie.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,S.pop(),S.length>0?M=S[S.length-1]:M=null,U!==null&&U.renderEnd()};function ei(A,q,re,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)y.pushLightProbeGrid(A);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(le)){ee&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let qe=Z.update(A),Ue=A.material;Ue.visible&&M.push(A,qe,Ue,re,be.z,null,q)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(le))){let qe=Z.update(A),Ue=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),be.copy(qe.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Ue)){let Je=qe.groups;for(let tt=0,xt=Je.length;tt<xt;tt++){let wt=Je[tt],Ze=Ue[wt.materialIndex];Ze&&Ze.visible&&M.push(A,qe,Ze,re,be.z,wt,q)}}else Ue.visible&&M.push(A,qe,Ue,re,be.z,null,q)}}let He=A.children;for(let qe=0,Ue=He.length;qe<Ue;qe++)ei(He[qe],q,re,ee)}function ti(A,q,re,ee){let{opaque:te,transmissive:He,transparent:qe}=A;y.setupLightsView(re),fe===!0&&Ie.setGlobalState(C.clippingPlanes,re),ee&&T.viewport(j.copy(ee)),te.length>0&&Ni(te,q,re),He.length>0&&Ni(He,q,re),qe.length>0&&Ni(qe,q,re),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function or(A,q,re,ee){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[ee.id]===void 0){let Ze=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[ee.id]=new on(1,1,{generateMipmaps:!0,type:Ze?xn:En,minFilter:en,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let He=y.state.transmissionRenderTarget[ee.id],qe=ee.viewport||j;He.setSize(qe.z*C.transmissionResolutionScale,qe.w*C.transmissionResolutionScale);let Ue=C.getRenderTarget(),Je=C.getActiveCubeFace(),tt=C.getActiveMipmapLevel();C.setRenderTarget(He),C.getClearColor(ce),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),Ae&&Le.render(re);let xt=C.toneMapping;C.toneMapping=si;let wt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),y.setupLightsView(ee),fe===!0&&Ie.setGlobalState(C.clippingPlanes,ee),Ni(A,re,ee),W.updateMultisampleRenderTarget(He),W.updateRenderTargetMipmap(He),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Ot=0,mn=q.length;Ot<mn;Ot++){let Qt=q[Ot],{object:jt,geometry:Bn,material:Ve,group:Yn}=Qt;if(Ve.side===Pt&&jt.layers.test(ee.layers)){let Ft=Ve.side;Ve.side=Pn,Ve.needsUpdate=!0,Qi(jt,re,ee,Bn,Ve,Yn),Ve.side=Ft,Ve.needsUpdate=!0,Ze=!0}}Ze===!0&&(W.updateMultisampleRenderTarget(He),W.updateRenderTargetMipmap(He))}C.setRenderTarget(Ue,Je,tt),C.setClearColor(ce,ye),wt!==void 0&&(ee.viewport=wt),C.toneMapping=xt}function Ni(A,q,re){let ee=q.isScene===!0?q.overrideMaterial:null;for(let te=0,He=A.length;te<He;te++){let qe=A[te],{object:Ue,geometry:Je,group:tt}=qe,xt=qe.material;xt.allowOverride===!0&&ee!==null&&(xt=ee),Ue.layers.test(re.layers)&&Qi(Ue,q,re,Je,xt,tt)}}function Qi(A,q,re,ee,te,He){U!==null&&te.isNodeMaterial&&U.setObject(A,te),A.onBeforeRender(C,q,re,ee,te,He),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(C,q,re,ee,A,He),te.transparent===!0&&te.side===Pt&&te.forceSinglePass===!1?(te.side=Pn,te.needsUpdate=!0,C.renderBufferDirect(re,q,ee,te,A,He),te.side=Zn,te.needsUpdate=!0,C.renderBufferDirect(re,q,ee,te,A,He),te.side=Pt):C.renderBufferDirect(re,q,ee,te,A,He),A.onAfterRender(C,q,re,ee,te,He)}function Rl(A,q,re){q.isScene!==!0&&(q=xe);let ee=$.get(A),te=y.state.lights,He=y.state.shadowsArray,qe=te.state.version,Ue=de.getParameters(A,te.state,He,q,re,y.state.lightProbeGridArray),Je=de.getProgramCacheKey(Ue),tt=ee.programs;ee.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ee.fog=q.fog;let xt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ee.envMap=X.get(A.envMap||ee.environment,xt),ee.envMapRotation=ee.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",Ht),tt=new Map,ee.programs=tt);let wt=tt.get(Je);if(wt!==void 0){if(ee.currentProgram===wt&&ee.lightsStateVersion===qe)return yp(A,Ue),wt}else Ue.uniforms=de.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,re,Ue),A.onBeforeCompile(Ue,C),wt=de.acquireProgram(Ue,Je),tt.set(Je,wt),ee.uniforms=Ue.uniforms;let Ze=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ie.uniform),yp(A,Ue),ee.needsLights=sx(A),ee.lightsStateVersion=qe,ee.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.sunLights.value=te.state.sun,Ze.sunLightShadows.value=te.state.sunShadow,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.sunShadowMatrix.value=te.state.sunShadowMatrix,Ze.sunShadowCascade.value=te.state.sunShadowCascade,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=y.state.lightProbeGridArray.length>0,ee.currentProgram=wt,ee.uniformsList=null,wt}function _p(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=ka.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function yp(A,q){let re=$.get(A);re.outputColorSpace=q.outputColorSpace,re.batching=q.batching,re.batchingColor=q.batchingColor,re.instancing=q.instancing,re.instancingColor=q.instancingColor,re.instancingMorph=q.instancingMorph,re.skinning=q.skinning,re.morphTargets=q.morphTargets,re.morphNormals=q.morphNormals,re.morphColors=q.morphColors,re.morphTargetsCount=q.morphTargetsCount,re.numClippingPlanes=q.numClippingPlanes,re.numIntersection=q.numClipIntersection,re.vertexAlphas=q.vertexAlphas,re.vertexTangents=q.vertexTangents,re.toneMapping=q.toneMapping}function tx(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(q.matrixWorld);for(let re=0,ee=A.length;re<ee;re++){let te=A[re];if(te.texture!==null&&te.boundingBox.containsPoint(b))return te}return null}function nx(A,q,re,ee,te){q.isScene!==!0&&(q=xe),W.resetTextureUnits();let He=q.fog,qe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?q.environment:null,Ue=N===null?C.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:yt.workingColorSpace,Je=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,tt=X.get(ee.envMap||qe,Je),xt=ee.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,wt=!!re.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ze=!!re.morphAttributes.position,Ot=!!re.morphAttributes.normal,mn=!!re.morphAttributes.color,Qt=si;ee.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Qt=C.toneMapping);let jt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Bn=jt!==void 0?jt.length:0,Ve=$.get(ee),Yn=y.state.lights;if(fe===!0&&(ve===!0||A!==V)){let Zt=A===V&&ee.id===F;Ie.setState(ee,A,Zt)}let Ft=!1;ee.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Yn.state.version||Ve.outputColorSpace!==Ue||te.isBatchedMesh&&Ve.batching===!1||!te.isBatchedMesh&&Ve.batching===!0||te.isBatchedMesh&&Ve.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ve.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ve.instancing===!1||!te.isInstancedMesh&&Ve.instancing===!0||te.isSkinnedMesh&&Ve.skinning===!1||!te.isSkinnedMesh&&Ve.skinning===!0||te.isInstancedMesh&&Ve.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ve.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ve.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ve.instancingMorph===!1&&te.morphTexture!==null||Ve.envMap!==tt||ee.fog===!0&&Ve.fog!==He||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ie.numPlanes||Ve.numIntersection!==Ie.numIntersection)||Ve.vertexAlphas!==xt||Ve.vertexTangents!==wt||Ve.morphTargets!==Ze||Ve.morphNormals!==Ot||Ve.morphColors!==mn||Ve.toneMapping!==Qt||Ve.morphTargetsCount!==Bn||!!Ve.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,Ve.__version=ee.version);let gi=Ve.currentProgram;Ft===!0&&(gi=Rl(ee,q,te),U&&ee.isNodeMaterial&&U.onUpdateProgram(ee,gi,Ve));let Ui=!1,Rs=!1,Vr=!1,Kt=gi.getUniforms(),un=Ve.uniforms;if(T.useProgram(gi.program)&&(Ui=!0,Rs=!0,Vr=!0),ee.id!==F&&(F=ee.id,Rs=!0),Ve.needsLights){let Zt=tx(y.state.lightProbeGridArray,te);Ve.lightProbeGrid!==Zt&&(Ve.lightProbeGrid=Zt,Rs=!0)}if(Ui||V!==A){T.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Kt.setValue(B,"projectionMatrix",A.projectionMatrix),Kt.setValue(B,"viewMatrix",A.matrixWorldInverse);let Cs=Kt.map.cameraPosition;Cs!==void 0&&Cs.setValue(B,J.setFromMatrixPosition(A.matrixWorld)),L.logarithmicDepthBuffer&&Kt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Kt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),V!==A&&(V=A,Rs=!0,Vr=!0)}if(Ve.needsLights&&(Yn.state.sunShadowMap.length>0&&Kt.setValue(B,"sunShadowMap",Yn.state.sunShadowMap,W),Yn.state.directionalShadowMap.length>0&&Kt.setValue(B,"directionalShadowMap",Yn.state.directionalShadowMap,W),Yn.state.spotShadowMap.length>0&&Kt.setValue(B,"spotShadowMap",Yn.state.spotShadowMap,W),Yn.state.pointShadowMap.length>0&&Kt.setValue(B,"pointShadowMap",Yn.state.pointShadowMap,W)),te.isSkinnedMesh){Kt.setOptional(B,te,"bindMatrix"),Kt.setOptional(B,te,"bindMatrixInverse");let Zt=te.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Kt.setValue(B,"boneTexture",Zt.boneTexture,W))}te.isBatchedMesh&&(Kt.setOptional(B,te,"batchingTexture"),Kt.setValue(B,"batchingTexture",te._matricesTexture,W),Kt.setOptional(B,te,"batchingIdTexture"),Kt.setValue(B,"batchingIdTexture",te._indirectTexture,W),Kt.setOptional(B,te,"batchingColorTexture"),te._colorsTexture!==null&&Kt.setValue(B,"batchingColorTexture",te._colorsTexture,W));let As=re.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&O.update(te,re,gi),(Rs||Ve.receiveShadow!==te.receiveShadow)&&(Ve.receiveShadow=te.receiveShadow,Kt.setValue(B,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&q.environment!==null&&(un.envMapIntensity.value=q.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=RE()),Rs){if(Kt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&ix(un,Vr),He&&ee.fog===!0&&Me.refreshFogUniforms(un,He),Me.refreshMaterialUniforms(un,ee,oe,ie,y.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){let Zt=Ve.lightProbeGrid;un.probesSH.value=Zt.texture,un.probesMin.value.copy(Zt.boundingBox.min),un.probesMax.value.copy(Zt.boundingBox.max),un.probesResolution.value.copy(Zt.resolution)}ka.upload(B,_p(Ve),un,W)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ka.upload(B,_p(Ve),un,W),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Kt.setValue(B,"center",te.center),Kt.setValue(B,"modelViewMatrix",te.modelViewMatrix),Kt.setValue(B,"normalMatrix",te.normalMatrix),Kt.setValue(B,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let Zt=ee.uniformsGroups;for(let Cs=0,Wr=Zt.length;Cs<Wr;Cs++){let Ep=Zt[Cs];pe.update(Ep,gi),pe.bind(Ep,gi)}}return gi}function ix(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function sx(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(A,q,re){let ee=$.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=q,$.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:re,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){let re=$.get(A);re.__webglFramebuffer=q,re.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,re=0){N=A,k=q,z=re;let ee=null,te=!1,He=!1;if(A){let Ue=$.get(A);if(Ue.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(B.FRAMEBUFFER,Ue.__webglFramebuffer),j.copy(A.viewport),ae.copy(A.scissor),he=A.scissorTest,T.viewport(j),T.scissor(ae),T.setScissorTest(he),F=-1;return}else if(Ue.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Ue.__hasExternalTextures)W.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let xt=A.depthTexture;if(Ue.__boundDepthTexture!==xt){if(xt!==null&&$.has(xt)&&(A.width!==xt.image.width||A.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}let Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(He=!0);let tt=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[q])?ee=tt[q][re]:ee=tt[q],te=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ee=$.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?ee=tt[re]:ee=tt,j.copy(A.viewport),ae.copy(A.scissor),he=A.scissorTest}else j.copy(Re).multiplyScalar(oe).floor(),ae.copy(Ge).multiplyScalar(oe).floor(),he=gt;if(re!==0&&(ee=H),T.bindFramebuffer(B.FRAMEBUFFER,ee)&&T.drawBuffers(A,ee),T.viewport(j),T.scissor(ae),T.setScissorTest(he),te){let Ue=$.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ue.__webglTexture,re)}else if(He){let Ue=q;for(let Je=0;Je<A.textures.length;Je++){let tt=$.get(A.textures[Je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Je,tt.__webglTexture,re,Ue)}}else if(A!==null&&re!==0){let Ue=$.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ue.__webglTexture,re)}F=-1};function Mp(A){let q=$.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=L.textureFormatReadable(A.format),q.__typeReadable=L.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,re,ee,te,He,qe,Ue=0){if(!(A&&A.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je){T.bindFramebuffer(B.FRAMEBUFFER,Je);try{let tt=A.textures[Ue],xt=tt.format,wt=tt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ue);let Ze=Mp(tt);if(Ze.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&re>=0&&re<=A.height-te&&B.readPixels(q,re,ee,te,we.convert(xt),we.convert(wt),He)}finally{let tt=N!==null?$.get(N).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,q,re,ee,te,He,qe,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&qe!==void 0&&(Je=Je[qe]),Je)if(q>=0&&q<=A.width-ee&&re>=0&&re<=A.height-te){T.bindFramebuffer(B.FRAMEBUFFER,Je);let tt=A.textures[Ue],xt=tt.format,wt=tt.type;A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ue);let Ze=Mp(tt);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ot=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ot),B.bufferData(B.PIXEL_PACK_BUFFER,He.byteLength,B.STREAM_READ),B.readPixels(q,re,ee,te,we.convert(xt),we.convert(wt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let mn=N!==null?$.get(N).__webglFramebuffer:null;T.bindFramebuffer(B.FRAMEBUFFER,mn);let Qt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $m(B,Qt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ot),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,He),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ot),B.deleteSync(Qt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,re=0){let ee=Math.pow(2,-re),te=Math.floor(A.image.width*ee),He=Math.floor(A.image.height*ee),qe=q!==null?q.x:0,Ue=q!==null?q.y:0;W.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,re,0,0,qe,Ue,te,He),T.unbindTexture()},this.copyTextureToTexture=function(A,q,re=null,ee=null,te=0,He=0){let qe,Ue,Je,tt,xt,wt,Ze,Ot,mn,Qt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(re!==null)qe=re.max.x-re.min.x,Ue=re.max.y-re.min.y,Je=re.isBox3?re.max.z-re.min.z:1,tt=re.min.x,xt=re.min.y,wt=re.isBox3?re.min.z:0;else{let un=Math.pow(2,-te);qe=Math.floor(Qt.width*un),Ue=Math.floor(Qt.height*un),A.isDataArrayTexture?Je=Qt.depth:A.isData3DTexture?Je=Math.floor(Qt.depth*un):Je=1,tt=0,xt=0,wt=0}ee!==null?(Ze=ee.x,Ot=ee.y,mn=ee.z):(Ze=0,Ot=0,mn=0);let jt=we.convert(q.format),Bn=we.convert(q.type),Ve;q.isData3DTexture?(W.setTexture3D(q,0),Ve=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ve=B.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ve=B.TEXTURE_2D),T.activeTexture(B.TEXTURE0),T.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),T.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),T.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);let Yn=T.getParameter(B.UNPACK_ROW_LENGTH),Ft=T.getParameter(B.UNPACK_IMAGE_HEIGHT),gi=T.getParameter(B.UNPACK_SKIP_PIXELS),Ui=T.getParameter(B.UNPACK_SKIP_ROWS),Rs=T.getParameter(B.UNPACK_SKIP_IMAGES);T.pixelStorei(B.UNPACK_ROW_LENGTH,Qt.width),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt.height),T.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),T.pixelStorei(B.UNPACK_SKIP_ROWS,xt),T.pixelStorei(B.UNPACK_SKIP_IMAGES,wt);let Vr=A.isDataArrayTexture||A.isData3DTexture,Kt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){let un=$.get(A),As=$.get(q),Zt=$.get(un.__renderTarget),Cs=$.get(As.__renderTarget);T.bindFramebuffer(B.READ_FRAMEBUFFER,Zt.__webglFramebuffer),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Wr=0;Wr<Je;Wr++)Vr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(A).__webglTexture,te,wt+Wr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(q).__webglTexture,He,mn+Wr)),B.blitFramebuffer(tt,xt,qe,Ue,Ze,Ot,qe,Ue,B.DEPTH_BUFFER_BIT,B.NEAREST);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||$.has(A)){let un=$.get(A),As=$.get(q);T.bindFramebuffer(B.READ_FRAMEBUFFER,P),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,D);for(let Zt=0;Zt<Je;Zt++)Vr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,te,wt+Zt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,te),Kt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,As.__webglTexture,He,mn+Zt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,As.__webglTexture,He),te!==0?B.blitFramebuffer(tt,xt,qe,Ue,Ze,Ot,qe,Ue,B.COLOR_BUFFER_BIT,B.NEAREST):Kt?B.copyTexSubImage3D(Ve,He,Ze,Ot,mn+Zt,tt,xt,qe,Ue):B.copyTexSubImage2D(Ve,He,Ze,Ot,tt,xt,qe,Ue);T.bindFramebuffer(B.READ_FRAMEBUFFER,null),T.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Kt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ve,He,Ze,Ot,mn,qe,Ue,Je,jt,Bn,Qt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,He,Ze,Ot,mn,qe,Ue,Je,jt,Qt.data):B.texSubImage3D(Ve,He,Ze,Ot,mn,qe,Ue,Je,jt,Bn,Qt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,He,Ze,Ot,qe,Ue,jt,Bn,Qt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,He,Ze,Ot,Qt.width,Qt.height,jt,Qt.data):B.texSubImage2D(B.TEXTURE_2D,He,Ze,Ot,qe,Ue,jt,Bn,Qt);T.pixelStorei(B.UNPACK_ROW_LENGTH,Yn),T.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft),T.pixelStorei(B.UNPACK_SKIP_PIXELS,gi),T.pixelStorei(B.UNPACK_SKIP_ROWS,Ui),T.pixelStorei(B.UNPACK_SKIP_IMAGES,Rs),He===0&&q.generateMipmaps&&B.generateMipmap(Ve),T.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),T.unbindTexture()},this.resetState=function(){k=0,z=0,N=null,T.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}});var AE,CE,Dh,PE,IE,LE,kE,Fh,N0=pt(()=>{It();AE=!0,CE=4,Dh="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",PE=`
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
}`,IE=`
precision highp float;
uniform sampler2D t; uniform vec2 texel; uniform float radius;
varying vec2 vUv;
void main(){
  vec2 o = texel * radius;
  vec3 c = texture2D(t, vUv + vec2(-o.x, -o.y)).rgb + 2.0 * texture2D(t, vUv + vec2(0.0, -o.y)).rgb + texture2D(t, vUv + vec2(o.x, -o.y)).rgb
         + 2.0 * texture2D(t, vUv + vec2(-o.x, 0.0)).rgb + 4.0 * texture2D(t, vUv).rgb + 2.0 * texture2D(t, vUv + vec2(o.x, 0.0)).rgb
         + texture2D(t, vUv + vec2(-o.x, o.y)).rgb + 2.0 * texture2D(t, vUv + vec2(0.0, o.y)).rgb + texture2D(t, vUv + vec2(o.x, o.y)).rgb;
  gl_FragColor = vec4(c / 16.0, 1.0);
}`,LE=`
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
}`,kE=`
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
}`,Fh=class{constructor(e){this.renderer=e,this.szeneRT=null,this.fxaaRT=null,this.mips=[],this.stufen=5,this.samples=0,this.w=2,this.h=2,this.quadSzene=new cs,this.quadKamera=new qi(-1,1,1,-1,0,1),this.quad=new ne(new lt(2,2),null),this.quad.frustumCulled=!1,this.quadSzene.add(this.quad),this.runter=new Ct({uniforms:{t:{value:null},texel:{value:new Ee},schwelle:{value:.9},knie:{value:.5},vorfilter:{value:0},deckel:{value:6}},vertexShader:Dh,fragmentShader:PE,depthTest:!1,depthWrite:!1}),this.rauf=new Ct({uniforms:{t:{value:null},texel:{value:new Ee},radius:{value:1}},vertexShader:Dh,fragmentShader:IE,depthTest:!1,depthWrite:!1,blending:Bc,blendSrc:Xo,blendDst:Xo,blendEquation:xs,transparent:!0}),this.fxaa=new Ct({uniforms:{t:{value:null},texel:{value:new Ee}},vertexShader:Dh,fragmentShader:kE,depthTest:!1,depthWrite:!1}),this.abschluss=null,this.taps=6,this.uniforms={tSzene:{value:null},tBloom:{value:null},bloom:{value:.22},tempo:{value:0},aberration:{value:0},glitch:{value:0},zeit:{value:0},belichtung:{value:1.25},korn:{value:.018},blende:{value:1},vignette:{value:1}},this.setzeTaps(6)}setzeTaps(e){this.abschluss&&this.taps===e||(this.taps=e,this.abschluss&&this.abschluss.dispose(),this.abschluss=new Ct({uniforms:this.uniforms,defines:{TAPS:e},vertexShader:Dh,fragmentShader:LE,depthTest:!1,depthWrite:!1}))}groesse(e,t,n,i){if(e=Math.max(2,Math.floor(e)),t=Math.max(2,Math.floor(t)),this.szeneRT&&this.w===e&&this.h===t&&this.samples===n&&this.stufen===i)return;this.w=e,this.h=t,this.samples=n,this.stufen=i,this.entsorgen(),this.szeneRT=new on(e,t,{type:this.schlank?En:xn,samples:n,depthBuffer:!0,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:qt}),AE&&n<CE&&(this.fxaaRT=new on(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:qt}),this.fxaa.uniforms.texel.value.set(1/e,1/t)),this.mips=[];let r=e,a=t;for(let o=0;o<i;o++)r=Math.max(1,Math.floor(r/2)),a=Math.max(1,Math.floor(a/2)),this.mips.push(new on(r,a,{type:xn,depthBuffer:!1,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:qt}))}entsorgen(){this.szeneRT&&this.szeneRT.dispose(),this.fxaaRT&&this.fxaaRT.dispose();for(let e of this.mips)e.dispose();this.szeneRT=null,this.fxaaRT=null,this.mips=[]}durchgang(e,t,n=!0){let i=this.renderer;this.quad.material=e,i.setRenderTarget(t),n&&i.clear(),i.render(this.quadSzene,this.quadKamera)}setzeSchlank(e){e=!!e,e!==this.schlank&&(this.schlank=e,this.entsorgen())}abschliessen(){let e=this.renderer,t=e.autoClear;if(e.autoClear=!1,this.schlank){this.uniforms.tSzene.value=this.szeneRT.texture,this.uniforms.tBloom.value=this.szeneRT.texture;let r=this.uniforms.bloom.value;this.uniforms.bloom.value=0,this.durchgang(this.abschluss,null),this.uniforms.bloom.value=r,e.autoClear=t;return}let n=this.mips,i=this.szeneRT;for(let r=0;r<n.length;r++)this.runter.uniforms.t.value=i.texture,this.runter.uniforms.texel.value.set(1/i.width,1/i.height),this.runter.uniforms.vorfilter.value=r===0?1:0,this.durchgang(this.runter,n[r]),i=n[r];for(let r=n.length-2;r>=0;r--)this.rauf.uniforms.t.value=n[r+1].texture,this.rauf.uniforms.texel.value.set(1/n[r+1].width,1/n[r+1].height),this.durchgang(this.rauf,n[r],!1);this.uniforms.tSzene.value=this.szeneRT.texture,this.uniforms.tBloom.value=n[0].texture,this.fxaaRT?(this.durchgang(this.abschluss,this.fxaaRT),this.fxaa.uniforms.t.value=this.fxaaRT.texture,this.durchgang(this.fxaa,null)):this.durchgang(this.abschluss,null),e.autoClear=t}}});function Nh(s,e){let t=document.createElement("canvas");return t.width=s,t.height=e,[t,t.getContext("2d")]}function $n(s=128){let[e,t]=Nh(s,s),n=t.createImageData(s,s),i=s/2;for(let a=0;a<s;a++)for(let o=0;o<s;o++){let l=Math.hypot(o+.5-i,a+.5-i)/i,c=Math.exp(-(l*2.3)*(l*2.3))*(1-Math.min(1,l)),h=(a*s+o)*4;n.data[h]=n.data[h+1]=n.data[h+2]=255,n.data[h+3]=255*c}t.putImageData(n,0,0);let r=new Lt(e);return r.colorSpace=qt,r}function U0(s=256,e=32){let[t,n]=Nh(s,e),i=n.createImageData(s,e);for(let a=0;a<e;a++)for(let o=0;o<s;o++){let l=Math.abs((o+.5)/s-.5)*2,c=Math.abs((a+.5)/e-.5)*2,h=Math.pow(Math.max(0,1-l),2.2)*Math.pow(Math.max(0,1-c),1.2),u=(a*s+o)*4;i.data[u]=i.data[u+1]=i.data[u+2]=255,i.data[u+3]=255*h}n.putImageData(i,0,0);let r=new Lt(t);return r.colorSpace=qt,r}function z0(s,e,t=0,n=1){let[i,r]=Nh(s,s),a=r.createImageData(s,s);for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=c/s,u=l/s,f=.5+.25*Math.sin(h*31.4+1.3)*Math.sin(u*20.1+.4)+.15*Math.sin(h*97+u*61)+.1*(e()-.5);f=Math.min(1,Math.max(0,f));let d=(t+(n-t)*f)*255,m=(l*s+c)*4;a.data[m]=a.data[m+1]=a.data[m+2]=d,a.data[m+3]=255}r.putImageData(a,0,0);let o=new Lt(i);return o.wrapS=o.wrapT=Gn,o.colorSpace=qt,o}function Uh(s=128,e=.72,t=.9){let[n,i]=Nh(s,s),r=i.createImageData(s,s),a=s/2;for(let l=0;l<s;l++)for(let c=0;c<s;c++){let h=Math.hypot(c+.5-a,l+.5-a)/a,u=h<e?0:h<(e+t)/2?(h-e)/((t-e)/2):h<t?(t-h)/((t-e)/2):0,f=(l*s+c)*4;r.data[f]=r.data[f+1]=r.data[f+2]=255,r.data[f+3]=255*Math.pow(u,.8)}i.putImageData(r,0,0);let o=new Lt(n);return o.colorSpace=qt,o}function Ye(s,e,t){return new Ce().setRGB(s,e,t,Rt)}var Qn=pt(()=>{It()});var Ut,B0,H0,zh,ri=pt(()=>{It();Qn();Ut=1,B0=`
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
}`,H0=`
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
}`,zh=class{constructor(e,t){this.z0=t.z0,this.z1=t.z1,this.spiegelAn=t.spiegel;let n=z0(256,t.rnd,0,1);this.uniforms={tSpiegel:{value:null},tNass:{value:n},textureMatrix:{value:new Fe},spiegelStaerke:{value:1},breite:{value:8.2},laenge:{value:t.z1-t.z0},zeit:{value:0},laternen:{value:Array.from({length:6},()=>new R(0,-100,0))},laternenFarbe:{value:new Ce(1,.66,.34)},scheinwerfer:{value:[new R(0,-100,0),new R(0,-100,0)]},scheinwerferRichtung:{value:new R(0,-.08,1)},scheinwerferStaerke:{value:1},extraLicht:{value:new R(0,-100,0)},extraFarbe:{value:new Ce(.2,.8,1)},extraStaerke:{value:0},tFarbe:{value:null},tNormal:{value:null},tRauheit:{value:null},tMarkierung:{value:null},randAus:{value:new Ee(1e9,1e9)},randAus2:{value:new Ee(1e9,1e9)},...Cr.clone(ke.fog)},this.material=new Ct({uniforms:this.uniforms,vertexShader:B0,fragmentShader:H0,fog:!0,defines:{SPIEGEL:t.spiegel?1:0,TEXTUREN:0,MARKIERUNG:0}}),this.zusatz=[];let i=new lt(8.2,t.z1-t.z0,1,64);i.rotateX(-Math.PI/2),this.mesh=new ne(i,this.material),this.mesh.position.set(0,0,(t.z0+t.z1)/2),this.mesh.frustumCulled=!1,e.add(this.mesh),this.bankettMaterial=new Ne({color:658188,roughness:1,metalness:0});let r=new ne(new lt(14,t.z1-t.z0,1,64),this.bankettMaterial);r.rotation.x=-Math.PI/2,r.position.set(0,-.015,(t.z0+t.z1)/2),e.add(r),this.bodenMaterial=new Ne({color:395018,roughness:1,metalness:0});let a=new ne(new lt(900,t.z1-t.z0+600,1,1),this.bodenMaterial);a.rotation.x=-Math.PI/2,a.position.set(0,-.3,(t.z0+t.z1)/2),e.add(a),this.bankettLaenge=t.z1-t.z0,this.bankett=r,this.boden=a,this.rt=null,this.virtuell=new an,this.virtuell.layers.set(Ut),this._ebene=new fi,this._normal=new R(0,1,0),this._blick=new R,this._ziel=new R,this._rot=new Fe,this._clip=new zt,this._q=new zt}setzeSpiegel(e){if(this.spiegelAn!==e){this.spiegelAn=e;for(let t of[this.material,...this.zusatz])t.defines.SPIEGEL=e?1:0,t.needsUpdate=!0}}setzeTexturen(e,t,n){if(!(!e||!t||!n)){this.uniforms.tFarbe.value=e,this.uniforms.tNormal.value=t,this.uniforms.tRauheit.value=n;for(let i of[this.material,...this.zusatz])i.defines.TEXTUREN=1,i.needsUpdate=!0}}zusatzMaterial(e){let t=new Ct({uniforms:{...this.uniforms,tMarkierung:{value:e}},vertexShader:B0,fragmentShader:H0,fog:!0,defines:{SPIEGEL:this.spiegelAn?1:0,TEXTUREN:this.material.defines.TEXTUREN,MARKIERUNG:1}});return this.zusatz.push(t),t}groesse(e,t){this.rt&&this.rt.dispose(),this.rt=new on(Math.max(2,Math.floor(e/3)),Math.max(2,Math.floor(t/3)),{type:xn,depthBuffer:!0,stencilBuffer:!1,minFilter:bt,magFilter:bt,colorSpace:qt}),this.uniforms.tSpiegel.value=this.rt.texture}spiegeln(e,t,n,i){if(!this.spiegelAn||!this.rt||(this.spiegelBild=(this.spiegelBild|0)+1,this.spiegelBild%2))return;let r=this.virtuell,a=this._normal,o=n.position;this._blick.copy(o),this._blick.y=-this._blick.y,this._rot.extractRotation(n.matrixWorld),this._ziel.set(0,0,-1).applyMatrix4(this._rot).add(o),this._ziel.y=-this._ziel.y,r.position.copy(this._blick),r.up.set(0,1,0).applyMatrix4(this._rot),r.up.y=-r.up.y,r.lookAt(this._ziel),r.near=n.near,r.far=n.far,r.fov=n.fov,r.aspect=n.aspect,r.zoom=1,r.updateProjectionMatrix(),r.zoom=.25,r.updateMatrixWorld(),this.uniforms.textureMatrix.value.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(r.projectionMatrix).multiply(r.matrixWorldInverse),this._ebene.setFromNormalAndCoplanarPoint(a,this.mesh.position).applyMatrix4(r.matrixWorldInverse);let l=this._clip.set(this._ebene.normal.x,this._ebene.normal.y,this._ebene.normal.z,this._ebene.constant),c=r.projectionMatrix,h=this._q;h.x=(Math.sign(l.x)+c.elements[8])/c.elements[0],h.y=(Math.sign(l.y)+c.elements[9])/c.elements[5],h.z=-1,h.w=(1+c.elements[10])/c.elements[14],l.multiplyScalar(2/l.dot(h)),c.elements[2]=l.x,c.elements[6]=l.y,c.elements[10]=l.z+1-.003,c.elements[14]=l.w;let u=e.getRenderTarget();this.mesh.visible=!1,e.setRenderTarget(this.rt),e.setClearColor(i,1),e.clear(),e.render(t,r),this.mesh.visible=!0,e.setRenderTarget(u)}}});function Lr(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new ht,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=O0(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][f]);let m=O0(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}}return l}function O0(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new ct(a,t,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<t;m++){let x=h.getComponent(f,m);o.setComponent(f+u,m,x)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function dd(s,e){if(e===Uf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Pa||e===tl){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Pa)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Bh=pt(()=>{It()});async function Dr(s,e,t=0,n=2){let i=await Promise.all([0,1,2].map(o=>o>=t&&o<=n?s.glb(`welt/modelle/${e}_lod${o}.glb`):Promise.resolve(null))),r=i.find(o=>o),a=r?{...r.scene.userData||{}}:{};return{name:e,stufen:i,extras:a,da:!!r}}function Fr(s){let e=[];return s.traverse(t=>{t.name&&t.name.startsWith("anker_licht")&&e.push(t)}),e}function Fa(s,e=16769720){let t=s.userData&&s.userData.farbe;return new Ce(typeof t=="string"&&/^#[0-9a-f]{6}$/i.test(t)?t:e)}function pd(s,{schattenWerfen:e=!1,schattenEmpfangen:t=!1}={}){return s.traverse(n=>{n.isMesh&&(n.frustumCulled=!1,n.layers.enable(Ut),n.castShadow=e,n.receiveShadow=t)}),s}function Hh(s,e=1,t={}){let n=new yo,i=!0;return s.stufen.forEach((r,a)=>{if(!r)return;let o=pd(r.scene.clone(!0),t);n.addLevel(o,i?0:kr[a]*e),i=!1}),n.autoUpdate=!0,n}function DE(s,e){let t=new ht;for(let n of e){let i=s.attributes[n],r=new Float32Array(i.count*i.itemSize);for(let a=0;a<i.count;a++)for(let o=0;o<i.itemSize;o++)r[a*i.itemSize+o]=i.getComponent(a,o);t.setAttribute(n,new ct(r,i.itemSize))}return t.setIndex(s.index.clone()),t}function _s(s,{behalten:e=/^$/}={}){s.updateMatrixWorld(!0);let t=new Map;s.traverse(a=>{if(!a.isMesh||a.isSkinnedMesh||a.isInstancedMesh||a.children.length||Array.isArray(a.material)||a.morphTargetInfluences||!a.geometry.index)return;for(let l=a;l&&l!==s;l=l.parent)if(e.test(l.name||""))return;let o=t.get(a.material)||[];o.push(a),t.set(a.material,o)});let n=new Fe().copy(s.matrixWorld).invert(),i=new Fe,r=0;for(let[a,o]of t){if(o.length<2)continue;let l=["position","normal","uv","uv1"].filter(f=>o.every(d=>d.geometry.attributes[f]));if(!l.includes("position"))continue;let c=o.map(f=>DE(f.geometry,l).applyMatrix4(i.multiplyMatrices(n,f.matrixWorld))),h=null;try{h=Lr(c,!1)}catch{h=null}if(!h)continue;for(let f of o)f.parent.remove(f);let u=new ne(h,a);u.name="verschmolzen:"+(a.name||""),u.frustumCulled=!1,u.castShadow=o[0].castShadow,u.receiveShadow=o[0].receiveShadow,u.layers.mask=o[0].layers.mask,u.renderOrder=o[0].renderOrder,s.add(u),r+=o.length}return r}var kr,Js=pt(()=>{It();Bh();ri();kr=[0,30,95]});function ai(s){let e=s.length,t=s.map(a=>a[0]),n=s.map(a=>a[1]),i=new Array(e);if(e===1)return()=>n[0];let r=new Array(e-1);for(let a=0;a<e-1;a++)r[a]=(n[a+1]-n[a])/(t[a+1]-t[a]);i[0]=r[0],i[e-1]=r[e-2];for(let a=1;a<e-1;a++)i[a]=r[a-1]*r[a]<=0?0:.5*(r[a-1]+r[a]);for(let a=0;a<e-1;a++){if(r[a]===0){i[a]=0,i[a+1]=0;continue}let o=i[a]/r[a],l=i[a+1]/r[a],c=o*o+l*l;if(c>9){let h=3/Math.sqrt(c);i[a]=h*o*r[a],i[a+1]=h*l*r[a]}}return a=>{if(a<=t[0])return n[0];if(a>=t[e-1])return n[e-1];let o=0;for(;a>t[o+1];)o++;let l=t[o+1]-t[o],c=(a-t[o])/l,h=c*c,u=h*c,f=2*u-3*h+1,d=u-2*h+c,m=-2*u+3*h,x=u-h;return f*n[o]+d*l*i[o]+m*n[o+1]+x*l*i[o+1]}}function Nr(s){let e=ai(s.map(i=>[i[0],i[1][0]])),t=ai(s.map(i=>[i[0],i[1][1]])),n=ai(s.map(i=>[i[0],i[1][2]]));return(i,r)=>r.set(e(i),t(i),n(i))}function Na(s){return()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var nt,Vt,Mt,ut,Ci,rn=pt(()=>{nt=(s,e=0,t=1)=>s<e?e:s>t?t:s,Vt=(s,e,t)=>s+(e-s)*t,Mt=(s,e,t)=>{let n=nt((t-s)/(e-s));return n*n*(3-2*n)},ut=(s,e,t,n,i)=>Mt(e,t,s)*(1-Mt(n,i,s));Ci=(s,e)=>1-Math.exp(-s/e)});var DR,G0,FE,Oh,V0=pt(()=>{It();Js();rn();DR=new R,G0=new R,FE=.03,Oh=class s{constructor(e,t={}){this.szene=e,this.renderer=t.renderer||null,this.eintraege=[],this.lichter=[],this.anzahl=0,this.schatten=!1,this.schattenWeite=40,this.tau=.22,this._kand=[],this._gewaehlt=new Set,t.stufe&&this.setzeStufe(t.stufe)}anmelden(e,{prioritaet:t=1}={}){if(!e)return null;let n=e.userData||{},i=Math.min(170,Math.max(6,+n.winkel||90)),r={anker:e,prioritaet:Math.max(.05,t),pos:new R,dir:new R(0,-1,0),farbe:Fa(e),typ:n.typ==="punkt"?"punkt":"spot",winkel:Xt.degToRad(i)/2,reichweite:Math.max(2,+n.reichweite||20),candela:Math.max(5,(+n.staerke||600)*FE),d:1e9,slot:-1,an:!0};return this.eintraege.push(r),r}abmelden(e){let t=this.eintraege.findIndex(i=>i===e||i.anker===e);if(t<0)return;let n=this.eintraege[t];if(n.slot>=0){let i=this.lichter[n.slot];i.soll=0,i.frei=!0,n.slot=-1}this.eintraege.splice(t,1)}setzeStufe(e){let t=Math.max(0,e.lichter|0);for(this.schatten=!!e.schatten&&!!this.renderer;this.lichter.length<t;){let n=new gs(16777215,0,10,Math.PI/4,.45,2);n.layers.enable(1),n.name="lichtpool_"+this.lichter.length,n.castShadow=!1,n.shadow.mapSize.set(512,512),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.shadow.camera.near=.5,n.shadow.camera.far=40,n.position.set(0,-100,0);let i=new At;i.position.set(0,-110,0),n.target=i,this.szene.add(n,i),this.lichter.push({licht:n,ziel:i,eintrag:null,ist:0,soll:0,frei:!0})}for(;this.lichter.length>t;){let n=this.lichter.pop();n.eintrag&&(n.eintrag.slot=-1),this.szene.remove(n.licht,n.ziel),n.licht.dispose()}this.anzahl=t;for(let n=0;n<this.lichter.length;n++)this.lichter[n].licht.castShadow=this.schatten&&n===0;if(this.renderer){let n=this.renderer.shadowMap;n.enabled!==this.schatten&&(n.enabled=this.schatten,n.type=Tr,n.autoUpdate=!1,n.needsUpdate=!0)}}static sichtbar(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}update(e,t=1/60){if(!this.anzahl)return;let n=e.position,i=this._kand;i.length=0;for(let o of this.eintraege)o.an=s.sichtbar(o.anker),o.an&&(o.anker.getWorldPosition(o.pos),o.d=o.pos.distanceTo(n)/o.prioritaet,o.d<220&&i.push(o));i.sort((o,l)=>o.d-l.d);let r=this._gewaehlt;r.clear();for(let o=0;o<i.length&&o<this.anzahl;o++)r.add(i[o]);let a=Ci(t,this.tau);for(let o=0;o<this.lichter.length;o++){let l=this.lichter[o];l.eintrag&&(!r.has(l.eintrag)||o===0&&this.schatten&&l.eintrag!==i[0])&&(l.soll=0),l.eintrag&&l.soll===0&&l.ist<.03&&(l.eintrag.slot=-1,l.eintrag=null,l.frei=!0,l.ist=0)}for(let o=0;o<i.length&&o<this.anzahl;o++){let l=i[o];if(l.slot>=0)continue;let c=-1;for(let f=0;f<this.lichter.length;f++)if(this.lichter[f].frei&&!(f===0&&this.schatten&&o!==0)){c=f;break}if(c<0)continue;let h=this.lichter[c];h.frei=!1,h.eintrag=l,l.slot=c,h.soll=1,h.ist=0;let u=h.licht;u.color.copy(l.farbe),u.angle=Math.min(Math.PI/2-.02,l.winkel),u.distance=l.reichweite,u.penumbra=.45,u.decay=2,u.shadow.camera.far=Math.max(10,l.reichweite),u.shadow.camera.updateProjectionMatrix()}for(let o of this.lichter){let l=o.eintrag;if(o.ist+=(o.soll-o.ist)*a,!l){o.licht.intensity=0;continue}l.anker.getWorldDirection(G0),o.licht.position.copy(l.pos),o.ziel.position.copy(l.pos).addScaledVector(G0,Math.max(1,l.reichweite*.5)),o.licht.intensity=l.candela*o.ist}if(this.schatten&&this.renderer){let o=this.lichter[0],l=o?o.eintrag:null;(!this._schattenPos||this._schattenPos.distanceToSquared(e.position)>.09||l!==this._schattenAnker||o&&Math.abs(o.ist-o.soll)>.05)&&(this.renderer.shadowMap.needsUpdate=!0,this._schattenPos=(this._schattenPos||new R).copy(e.position),this._schattenAnker=l)}}}});function q0(s,e){let t=new At;return t.name=s.name,t.userData={...s.userData||{}},t.matrixAutoUpdate=!1,t.matrixWorldAutoUpdate=!1,s.updateWorldMatrix(!0,!1),t.matrix.multiplyMatrices(e,s.matrixWorld),t.matrixWorld.copy(t.matrix),t}var W0,Yi,NE,UE,zE,Ur,md=pt(()=>{It();ri();Js();W0=new Fe,Yi=new R,NE=2.2,UE=Math.cos(Xt.degToRad(2)),zE=Xt.degToRad(15),Ur=class{constructor(e,t,n,i={}){for(this.eltern=e,this.plaetze=n,this.n=n.length,this.aktiv=this.n,this.weiten=i.weiten||kr,this.lodWeite=i.lodWeite??1,this.maxWeite=i.maxWeite??900,this.takt=i.takt||6,this.letzte=new R(1e9,0,0),this.letzteRichtung=new R,this.kegel=i.blickKegel||null,this.sanft=!1,this.bild=i.versatz||0,this.sichtbar=!0,this.erzwingen=!0,this.positionen=n.map(r=>new R().setFromMatrixPosition(r)),this.zuordnung=new Int8Array(this.n).fill(-2),this.an=new Uint8Array(this.n),this.stufen=[],this.geladen=-1,this.groebste=-1,t.stufen.forEach((r,a)=>{if(!r){this.stufen.push(null);return}r.scene.updateMatrixWorld(!0);let o=[];r.scene.traverse(l=>{if(!l.isMesh)return;let c=l.material;i.material&&(c=i.material(c,l,a)||c);let h=new Dt(l.geometry,c,this.n);h.name=(i.name||t.name||"instanzen")+":"+l.name+":"+a,h.count=0,h.frustumCulled=!1;let u=i.schatten?!!i.schatten(l,a):!1;h.castShadow=u&&!!i.schattenAn,h.receiveShadow=!1,(typeof i.spiegel=="function"?i.spiegel(l):i.spiegel!==!1)&&h.layers.enable(Ut),h.instanceMatrix.setUsage(vs),e.add(h),o.push({im:h,lokal:l.matrixWorld.clone(),schatten:u})}),this.stufen.push({teile:o}),this.geladen<0&&(this.geladen=a),this.groebste=a}),this.feinste=Math.max(this.geladen,i.feinste??0),this.feinste>this.groebste&&(this.feinste=this.groebste);this.feinste<this.groebste&&!this.stufen[this.feinste];)this.feinste++}stufeFuer(e,t){let n=this.feinste;for(let i=this.feinste+1;i<=this.groebste;i++){if(!this.stufen[i])continue;let r=this.weiten[i]*this.lodWeite*(t>=0&&t<i?1.05:.95);e>=r&&(n=i)}return n}setzeStufe(e){this.lodWeite=e.lodWeite??1;let t=Math.max(this.geladen,e.lod??0);for(t>this.groebste&&(t=this.groebste);t<this.groebste&&!this.stufen[t];)t++;this.feinste=t;for(let n of this.stufen)if(n)for(let i of n.teile)i.im.castShadow=i.schatten&&!!e.schatten;this.erzwingen=!0}setzeAnzahl(e){let t=Math.max(0,Math.min(this.n,e|0));t!==this.aktiv&&this.zuordnung.some(n=>n>=0)&&(this.sanft=!0),this.aktiv=t,this.erzwingen=!0}setzeSichtbar(e){this.sichtbar=e;for(let t of this.stufen)if(t)for(let n of t.teile)n.im.visible=e}update(e,t=0){if(!this.sichtbar)return;this.bild++;let n=e.position;e.getWorldDirection?e.getWorldDirection(Yi):Yi.set(0,0,1);let i=n.distanceToSquared(this.letzte)>4||this.kegel&&Yi.dot(this.letzteRichtung)<UE;if(!this.erzwingen&&!i&&this.bild%this.takt!==0)return;this.erzwingen=!1,this.letzte.copy(n),this.letzteRichtung.copy(Yi);let r=t>0?Math.min(this.maxWeite,NE/t):this.maxWeite,a=this.kegel,o=a?Math.atan(Math.tan(Xt.degToRad(e.fov||60)/2)*Math.sqrt(1+(e.aspect||1)**2))+zE:0,l=this.zuordnung,c=this.an,h=0,u=!1;for(let f=0;f<this.n;f++){let d=this.positionen[f],m=d.x-n.x,x=d.y-n.y,g=d.z-n.z,p=Math.sqrt(m*m+x*x+g*g),v=f<this.aktiv?1:0;if(c[f]!==v){let b=p<r&&m*Yi.x+x*Yi.y+g*Yi.z>-.3*p;!this.sanft||!b||v===0&&l[f]<0?c[f]=v:u=!0}let E=c[f]&&p<r?this.stufeFuer(p,l[f]):-1;if(E>=0&&a){let b=x+a.mitte,M=Math.sqrt(m*m+b*b+g*g);if(M>a.radius*2.5){let y=(m*Yi.x+b*Yi.y+g*Yi.z)/M;Math.acos(y<-1?-1:y>1?1:y)>o+Math.atan(a.radius/M)&&(E=-1)}}l[f]!==E&&(l[f]>=0&&(h|=1<<l[f]),E>=0&&(h|=1<<E),l[f]=E)}if(this.sanft=u,!!h)for(let f=0;f<this.stufen.length;f++){let d=this.stufen[f];if(!d||!(h&1<<f))continue;let m=0;for(let x=0;x<this.n;x++)if(l[x]===f){for(let g of d.teile)W0.multiplyMatrices(this.plaetze[x],g.lokal),g.im.setMatrixAt(m,W0);m++}for(let x of d.teile){let g=x.im.instanceMatrix;x.im.count=m,g.clearUpdateRanges(),g.addUpdateRange(0,m*16),g.needsUpdate=!0}}}entsorgen(){for(let e of this.stufen)if(e)for(let t of e.teile)this.eltern.remove(t.im),t.im.dispose();this.stufen=[]}}});function Vh(s,e){return e.copy(s.position),s.parent&&s.parent.localToWorld(e),e}function K0(s){return BE.copy(s.matrixWorld).invert()}function Zs(s,e,t=.9,n=.72,i=null){if(!s.visible)return;let a=e.aspect<.9?Math.min(t,.84):t,o=K0(e);if(Vh(s,dn).applyMatrix4(o),dn.z>=-.1)return;xd.copy(s.scale);let l=Math.tan(Xt.DEG2RAD*e.fov*.5),c=l*e.aspect,h=Math.max(0,-dn.z*c*a-xd.x*.5),u=-dn.z*l*n-xd.y*.5,f=0,d=0;if(dn.x<-h?f=-h-dn.x:dn.x>h&&(f=h-dn.x),dn.y>u&&(d=u-dn.y),!(f===0&&d===0)&&(X0(s,e,o,f,d),i))for(let m of i)m!==s&&X0(m,e,o,f,d)}function ol(s,e,t=.045,n=.09){s.userData.grundSkala||(s.userData.grundSkala=s.scale.clone());let i=s.userData.grundSkala;if(!s.visible){s.scale.copy(i);return}if(Vh(s,dn).applyMatrix4(K0(e)),dn.z>=-.1){s.scale.copy(i);return}let r=Math.tan(Xt.DEG2RAD*e.fov*.5),a=2*-dn.z*r,o=t*a/i.y,l=n*a/i.y,c=a*e.aspect,h=.78*c/i.x,u=Math.min(Math.max(1,o),l,h);s.scale.set(i.x*u,i.y*u,1)}function Pi(s,e,t=3.5,n=.08){if(!s.visible)return;Vh(s,dn);let i=dn.distanceTo(e.position),r=Math.min(1,Math.max(0,(i-t)/t));if(s.material.opacity*=r*r*(3-2*r),s.material.opacity<.01){s.visible=!1;return}ol(s,e,0,n),Zs(s,e)}function X0(s,e,t,n,i){Vh(s,dn).applyMatrix4(t),dn.x+=n,dn.y+=i,dn.applyMatrix4(e.matrixWorld),s.parent&&s.parent.worldToLocal(dn),s.position.copy(dn)}function Wh(s,e){let t=null;if(s.scene.traverse(i=>{!t&&i.name===e&&(t=i)}),!t)return null;let n=t.clone(!0);return n.traverse(i=>{i.isMesh&&(i.frustumCulled=!1,i.layers.enable(Ut))}),n}var Ua,St,zr,al,GR,gd,bd,Nn,Gh,wn,In,tn,dn,xd,BE,oi=pt(()=>{It();Qn();ri();Ua=150,St=s=>(s+.5)*Ua,zr=9,al=new Ce().setRGB(.17,.72,.89,Rt),GR=new R(0,1,0),gd=null,bd=null,Nn=(s,e)=>{gd=gd||$n(128);let t=new Dn(new Cn({map:gd,color:s,blending:Nt,depthWrite:!1,transparent:!0,fog:!1}));return t.scale.set(e,e,1),t.layers.enable(Ut),t},Gh=s=>{bd=bd||Uh(128,.8,.92);let e=new ne(new lt(1,1),new st({map:bd,color:s,blending:Nt,depthWrite:!1,transparent:!0,fog:!1,side:Pt}));return e.layers.enable(Ut),e},wn=s=>new st({color:s}),In=new Ne({color:2764340,roughness:.7,metalness:.3}),tn=(s,e)=>{s.material.opacity=e,s.visible=e>.01},dn=new R,xd=new R,BE=new Fe});function J0(){return[[-13.5,cn+95],[-18,cn+125],[-24,cn+160],[-34,cn+195],[-50,cn+225],[-70,cn+248],[-92,cn+262],[-112,cn+270]]}function HE(s){let e=j0.get(s);if(e)return e;e=[1/0,-1/0,1/0,-1/0];for(let[t,n]of s.punkte)e[0]=Math.min(e[0],t),e[1]=Math.max(e[1],t),e[2]=Math.min(e[2],n),e[3]=Math.max(e[3],n);return j0.set(s,e),e}function $0(s,e,t,n){let i=HE(s),r=s.breite*.5+n;if(e<i[0]-r||e>i[1]+r||t<i[2]-r||t>i[3]+r)return 1/0;let a=s.punkte,o=1/0;for(let l=0;l+1<a.length;l++){let c=a[l][0],h=a[l][1],u=a[l+1][0],f=a[l+1][1],d=u-c,m=f-h,x=d*d+m*m||1e-6,g=Math.max(0,Math.min(1,((e-c)*d+(t-h)*m)/x)),p=Math.hypot(e-(c+d*g),t-(h+m*g))-s.breite*.5;p<o&&(o=p)}return o}function za(s,e){let t=1/0;for(let n of Xh){let i=$0(n,s,e,60);i<t&&(t=i)}return t}function Q0(s,e){let t=0;for(let n of Xh){if(n.flach===!1)continue;let i=n.rand??8,r=$0(n,s,e,i);if(r>=i)continue;let a=Math.max(0,r)/i;t=Math.max(t,1-a*a*(3-2*a))}return t}function Ba(s,e,t=0){for(let[n,i,r,a]of vd)if(e>=n-t&&e<=i+t&&s>=r-t&&s<=a+t)return!0;return!1}var cn,Ji,li,qh,vd,Y0,Xh,Z0,j0,ll=pt(()=>{oi();cn=St(4),Ji=St(5),li=St(6),qh=St(8),vd=[[cn-75,cn+100,-20,0],[li-62,li+76,-50,0],[Ji+14,Ji+48,-20,0],[Ji+58,Ji+80,-15,0],[qh-48,qh-24,-20,0]],Y0=[[qh-50,qh-22,-24.5,0]],Xh=[{punkte:[[-4.6,cn-68],[-5.6,cn-45],[-5.6,cn+30]],breite:4.4},{punkte:[[-9.6,cn-64],[6.6,cn-64]],breite:3},{punkte:[[-11.5,cn-12],[-11.5,cn-4]],breite:6},{punkte:[[-5.85,cn-5],[-6.33,cn+24.9],[-7.76,cn+51.5],[-10.15,cn+74.8],[-13.5,cn+95]],breite:8},{punkte:J0(),breite:9,flach:!1,profil:!0},{punkte:[[-3,Ji+19],[-4.1,Ji+21],[-8.5,Ji+27],[-12,Ji+35]],breite:13},{punkte:[[-12,Ji+35],[-16,Ji+44]],breite:10,flach:!1},{punkte:[[-5.4,li-128],[-5.4,li-58]],breite:4.4},{punkte:[[-5.4,li-58],[-6.9,li-50],[-9.4,li-40],[-10.2,li-30.5]],breite:8},{punkte:[[-10.2,li+44.5],[-9.4,li+54],[-6.9,li+63],[-5.4,li+70]],breite:8},{punkte:[[-5.4,li+70],[-5.4,li+150]],breite:4.4}];Z0=J0(),j0=new WeakMap});function Kh(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function OE(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,a=i*i*(3-2*i),o=r*r*(3-2*r),l=Kh(t,n),c=Kh(t+1,n),h=Kh(t,n+1),u=Kh(t+1,n+1);return l+(c-l)*a+(h-l)*o+(l-c-h+u)*a*o}function Xn(s,e,t=4,n=2.07,i=.5){let r=0,a=.5,o=1,l=0;for(let c=0;c<t;c++)r+=a*OE(s*o+c*17.3,e*o-c*9.1),l+=a,a*=i,o*=n;return r/l}function jh(s,e){let t=Q0(s,e);for(let[n,i,r,a]of GE){let o=Math.min(e-n,i-e),l=Math.min(s-r,a-s),c=Math.min(o,l);c>-6&&(t=Math.max(t,Br(-6,0,c)))}return t}function sg(s,e){return Br(Yh,Yh+ig,Math.abs(s))*(1-jh(s,e))}function VE(s,e){let t=sg(s,e);if(t<=0)return eg;let n=Xn(s*.018+11,e*.018+5,4),i=Xn(s*.07,e*.07+2,2),r=.3+6.6*n*n+1.2*i;return eg+t*r}function rg(s,e){let t=0;for(let[n,i,r,a,o]of WE){let l=s-n,c=e-i;if(Math.abs(l)>r*1.3||Math.abs(c)>r*1.3)continue;let h=Math.hypot(l,c),u=Math.atan2(c,l),f=Math.cos(u),d=Math.sin(u),m=.72+.56*Xn(f*2.2+o*3.7,d*2.2+o*1.3,3),x=h/(r*m);if(x>=1)continue;let g=1-x,p=(Xn(u*1.9+o,g*3+o*2,3)-.5)*.5,v=(Xn(u*7+o*1.7,g*11+o,3)-.5)*.14,E=a*Math.pow(g,1.15)*(1+p*(1-g*.6)+v*(.5+.5*g))+(Xn(f*3.1+o*5+20,d*3.1+o*2,4)-.5)*8*g*(1-g);E>t&&(t=E)}return t}function qE(s,e){let t=Math.abs(s);if(t<tg)return 0;let n=(t-tg)/190,i=n<1?Math.pow(n,1.5):Math.max(.15,1-(n-1)*.3),r=75+95*Xn(e*.0045+3.1,t*.0025+(s<0?40:0),3),a=(Xn(t*.011+7,e*.011,4)-.5)*2*32,o=(Xn(t*.05,e*.05+9,3)-.5)*2*7;return Math.max(0,i*(r+a)+o*Math.min(1,n*2))}function KE(s,e){if(e<Jh)return 0;let t=Math.abs(s),n=(e-Jh)/230,i=n<1?Math.pow(n,1.6):Math.max(.4,1-(n-1)*.8),r=.28+.72*Br(25,160,t),a=55+75*Xn(s*.006+13,2.1,3)+(Xn(s*.013+3,e*.013,4)-.5)*2*22,o=i*r*a,l=(e-XE)/240;if(l>0){let c=150+100*Xn(s*.0042-7,5.3,3)+(Xn(s*.016,e*.016+4,3)-.5)*2*18;o=Math.max(o,Math.pow(Math.min(1,l),1.25)*c)}return Math.max(0,o)}function og(s,e){return VE(s,e)+Math.max(qE(s,e),KE(s,e),rg(s,e)*sg(s,e))}function jE(){Zh=[];for(let s of Xh){if(!s.profil)continue;let e=s.punkte,t=[],n=0;for(let c=0;c+1<e.length;c++){let[h,u]=e[c],[f,d]=e[c+1],m=Math.hypot(f-h,d-u),x=Math.max(1,Math.ceil(m/4));for(let g=0;g<x;g++){let p=g/x;t.push({s:n+m*p,x:h+(f-h)*p,z:u+(d-u)*p})}n+=m}t.push({s:n,x:e[e.length-1][0],z:e[e.length-1][1]});let i=t.map(c=>og(c.x,c.z)),r=i.map((c,h)=>{let u=0,f=0;for(let d=0;d<i.length;d++)Math.abs(t[d].s-t[h].s)<=25&&(u+=i[d],f++);return u/f});for(let c=0;c<r.length;c++){let h=jh(t[c].x,t[c].z);h>0&&(r[c]+=(i[c]-r[c])*h)}let a=.1,o=c=>c<12?0:c<52?.06*(c-12)*(c-12)/80:1.2+.06*(c-52),l=r[0];for(let c=0;c<r.length;c++)r[c]=Math.min(r[c],l+o(t[c].s));for(let c=1;c<r.length;c++)r[c]=Math.min(r[c],r[c-1]+a*(t[c].s-t[c-1].s));for(let c=r.length-2;c>=0;c--)r[c]=Math.min(r[c],r[c+1]+a*(t[c+1].s-t[c].s));for(let c=0;c<2;c++){let h=r.slice();for(let u=1;u<r.length-1;u++){if(jh(t[u].x,t[u].z)>0)continue;let f=0,d=0;for(let m=Math.max(0,u-2);m<=Math.min(r.length-1,u+2);m++)f+=h[m],d++;r[u]=f/d}}Zh.push({s,proben:t,h:r,rand:s.rand??8})}}function YE(s,e,t){Zh||jE();let n=t;for(let i of Zh){let r=i.s.breite*.5,a=i.rand,o=1/0,l=0;for(let d=0;d<i.proben.length;d++){let m=i.proben[d],x=(m.x-s)*(m.x-s)+(m.z-e)*(m.z-e);x<o&&(o=x,l=d)}let c=i.h[l],h=o;for(let d of[l-1,l]){if(d<0||d+1>=i.proben.length)continue;let m=i.proben[d],x=i.proben[d+1],g=x.x-m.x,p=x.z-m.z,v=g*g+p*p||1e-6,E=Math.max(0,Math.min(1,((s-m.x)*g+(e-m.z)*p)/v)),b=m.x+g*E-s,M=m.z+p*E-e,y=b*b+M*M;y<=h&&(h=y,c=i.h[d]+(i.h[d+1]-i.h[d])*E)}let u=Math.sqrt(h)-r;if(u>=a)continue;let f=u<=0?1:1-u/a*(u/a)*(3-2*u/a);c>n&&(f*=(1-jh(s,e))*Br(Yh,Yh+ig,Math.abs(s))),n=n+(c-n)*f}return n}function Ii(s,e){return YE(s,e,og(s,e))}function hg(s,e,t=13,n=-.015){cg={z0:s,z1:e,bis:t,y:n}}function ys(s,e){let t=lg;if(!t)return Ii(s,e);let{xs:n,nx:i,z0:r,schritt:a,nz:o,pos:l}=t;if(s<n[0]||s>n[i-1]||e<r||e>r+(o-1)*a)return Ii(s,e);let c=0,h=i-2;for(;c<h;){let S=c+h+1>>1;n[S]<=s?c=S:h=S-1}let u=c,f=Math.min(o-2,Math.max(0,Math.floor((e-r)/a))),d=(s-n[u])/(n[u+1]-n[u]),m=(e-r-f*a)/a,x=f*i+u,g=x+1,p=x+i,v=p+1,E=l[x*3+1],b=l[g*3+1],M=l[p*3+1],y=l[v*3+1];return d+m<=1?E+(b-E)*d+(M-E)*m:y+(M-y)*(1-d)+(b-y)*(1-m)}function Li(s,e){let t=ys(s,e),n=cg,i=Math.abs(s)<n.bis&&e>=n.z0&&e<=n.z1?n.y:JE;return t>i?t:i}function ZE(s={}){let e=new Ne({color:3816762,roughness:1,metalness:0,...s.material||{}}),t={felsFarbe:{value:new Ce(.055,.07,.095)},schneeFarbe:{value:new Ce(.62,.68,.8)},schneeHoehe:{value:ng.hoehe},schneeWeich:{value:ng.weich},nebelBerg:{value:.2},waldBoden:{value:new Ce(.42,.56,.44)}};return e.userData.uniforms=t,e.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        #endif`)},e.customProgramCacheKey=()=>"gelaende-fels-schnee-6",e}function ug(s,e,t={}){let n=t.schritt||6,i=t.grob?_d.filter((g,p)=>p%2===0||p===_d.length-1):_d,r=[];for(let g=i.length-1;g>=1;g--)r.push(-i[g]);for(let g=0;g<i.length;g++)r.push(i[g]);let a=Math.ceil((e-s)/n)+1,o=r.length,l=new Float32Array(o*a*3),c=new Float32Array(o*a*2),h=new Float32Array(o*a),u=0;for(let g=0;g<a;g++){let p=s+g*n;for(let v=0;v<o;v++,u++){let E=r[v];l[u*3]=E,l[u*3+1]=Ii(E,p),l[u*3+2]=p,c[u*2]=E/4.5,c[u*2+1]=p/4.5,h[u]=Math.max(Br(150,235,Math.abs(E)),Br(Jh+60,Jh+230,p),Br(4,14,rg(E,p)))}}let f=new Uint32Array((o-1)*(a-1)*6),d=0;for(let g=0;g<a-1;g++)for(let p=0;p<o-1;p++){let v=g*o+p,E=v+1,b=v+o,M=b+1;f[d++]=v,f[d++]=b,f[d++]=E,f[d++]=E,f[d++]=b,f[d++]=M}let m=new ht;m.setAttribute("position",new ct(l,3)),m.setAttribute("uv",new ct(c,2)),m.setAttribute("fels",new ct(h,1)),m.setIndex(new ct(f,1)),m.computeVertexNormals(),lg={xs:r,nx:o,z0:s,schritt:n,nz:a,pos:l};let x=new ne(m,t.material||ZE());return x.name="gelaende",x.frustumCulled=!1,x.receiveShadow=!0,x}var Br,GE,Yh,ig,eg,tg,$s,WE,ag,Jh,XE,Zh,lg,cg,JE,ng,_d,Qs=pt(()=>{ll();It();oi();Br=(s,e,t)=>{let n=Math.min(1,Math.max(0,(t-s)/(e-s)));return n*n*(3-2*n)},GE=[...vd,...Y0];Yh=7.5,ig=8.5,eg=-.05,tg=170;$s=St(5),WE=[[-130,$s+70,75,88,.5],[140,$s+50,88,105,1.87],[-230,$s+200,120,138,3.24],[120,$s+215,105,148,4.61],[-160,$s-80,98,94,5.98],[-230,$s+480,165,162,7.35],[240,$s+500,165,175,8.72],[-170,$s+150,98,125,10.09]];ag=St(8),Jh=ag+600,XE=ag+930;Zh=null;lg=null,cg={z0:-1/0,z1:1/0,bis:13,y:-.015},JE=-.3;ng={hoehe:72,weich:22};_d=[0,4,7,9,11,13,15.5,18.5,22,26,31,37,44,52,61,71,82,94,106,118,130,142,154,166,178,190,202,214,226,238,250,262,275,288,302,316,330,350,375,405,440,485,540]});function iS(s,e){return Xn(s*.011+5.3,e*.011-2.1,3)<.34}function sS(s,e){let t=St(2);return s<0?e>t-95&&e<t+55&&s>-30:e>t-70&&e<t+45&&s<17}function rS(s=3){let e=new Map,t=(n,i)=>n*1048576+i;return{frei(n,i,r){let a=Math.floor((n-r)/s),o=Math.floor((n+r)/s),l=Math.floor((i-r)/s),c=Math.floor((i+r)/s);for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){let f=e.get(t(h,u));if(f){for(let d of f)if((d[0]-n)**2+(d[1]-i)**2<(r+d[2])**2)return!1}}return!0},setze(n,i,r){let a=t(Math.floor(n/s),Math.floor(i/s)),o=e.get(a);o?o.push([n,i,r]):e.set(a,[[n,i,r]])}}}function gg(s,e,t,n,i=2600){let r=[],a=rS(),o=(d,m,x,g,p)=>{let v=Math.abs(d);if(g==="laub"&&v<eS&&(g="nadel"),v<(g==="busch"?dg:fg)||v>yd+4)return!1;let E=(g==="laub"?6.9:g==="busch"?2.5:5)*p;if(g!=="busch"&&v-E<tS||za(d,m)<E||Ba(d,m,E)||g!=="busch"&&sS(d,m)||n&&!n(m,x,"baum",d))return!1;let b=g==="busch"?1*p:1.35*p;return a.frei(d,m,b)?(a.setze(d,m,b),r.push({x:d,z:m,y:Li(d,m)-.03,s:p,drehung:t()*Math.PI*2,neigung:t()*.07,neigAchse:t()*Math.PI*2,art:g}),!0):!1},l=()=>.7+Math.pow(t(),.8)*.7,c=()=>s-40+t()*(e-s+80),h=Math.round(i*.16);for(let d=0;d<h;d++){let m=t()<.5?-1:1,x=m*(12.5+Math.pow(t(),1.1)*(yd-10)),g=c();if(iS(x,g))continue;let p=3+Math.floor(t()*8),v=3.5+t()*7,E=t()<.15;for(let M=0;M<p;M++){let y=t()*Math.PI*2,S=Math.sqrt(t())*v;o(x+Math.cos(y)*S,g+Math.sin(y)*S,m,E||t()<.08?"laub":"nadel",l())}let b=Math.floor(t()*3);for(let M=0;M<b;M++){let y=t()*Math.PI*2,S=v+1+t()*3;o(x+Math.cos(y)*S-m*t()*3,g+Math.sin(y)*S,m,"busch",.6+t()*.6)}}let u=Math.round(i*.18);for(let d=0;d<u;d++){let m=t()<.5?-1:1;o(m*(fg+Math.pow(t(),1.4)*26),c(),m,t()<.12?"laub":"nadel",l())}let f=Math.round(i*.12);for(let d=0;d<f;d++){let m=t()<.5?-1:1;o(m*(dg+Math.pow(t(),1.6)*14),c(),m,"busch",.55+t()*.7)}for(let d=r.length-1;d>0;d--){let m=Math.floor(t()*(d+1)),x=r[d];r[d]=r[m],r[m]=x}return r}function aS(s,e,t,n,i=260){let r=[],a=Math.round((e-s)/100*i);for(let o=0;o<a;o++){let l=t()<.5?-1:1,h=t()<.3?150+t()*90:yd+Math.pow(t(),.9)*102,u=l*h,f=s+t()*(e-s);Xn(u*.008-1.7,f*.008+4.4,3)<.32||Ii(u,f)>nS*(.8+.4*t())||Ba(u,f,6)||za(u,f)<6||n&&!n(f,l,"baum",u)||r.push([u,Li(u,f)-.04,f,.8+t()*.6,t()*Math.PI*2,t()<.15?1:0])}return r}function oS(s){return $h.set(s.x,s.y,s.z),cl.setFromAxisAngle(bg,s.drehung),mg.set(Math.cos(s.neigAchse||0),0,Math.sin(s.neigAchse||0)),pg.setFromAxisAngle(mg,s.neigung||0),cl.premultiply(pg),Qh.setScalar(s.s),new Fe().compose($h,cl,Qh)}var $E,QE,fg,eS,dg,tS,yd,nS,$h,cl,pg,Qh,bg,mg,eu,xg=pt(()=>{It();md();Qs();ll();oi();$E=[0,30,85],QE=[0,0,24],fg=10.5,eS=14,dg=9.6,tS=6,yd=48,nS=38;$h=new R,cl=new $t,pg=new $t,Qh=new R,bg=new R(0,1,0),mg=new R;eu=class s{constructor(e,t,n){this.szene=e,this.plaetze=t,this.fern=n,this.instanzen=[],this.fernMeshes=[],this.geladen=!1,this.dichte=1}async laden(e,t){let n=null;try{let b=await fetch((e.basis||"")+"welt/modelle/baeume.json",{cache:"no-cache"});b.ok&&(n=await b.json())}catch{n=null}if(!Array.isArray(n)||!n.length)return!1;let i=t.stufe;this.dichte=i.baumDichte??1;let r=i.lod===0,a=b=>b&&b.dateien&&b.art,o=n.filter(b=>a(b)&&/busch/.test(b.name)),l=n.filter(b=>a(b)&&b.art==="nadel"&&!/busch/.test(b.name)),c=n.filter(b=>a(b)&&b.art==="laub"&&(b.breite_m||0)<16),h=[...l.slice(0,5).map(b=>[b,"nadel"]),...c.slice(0,2).map(b=>[b,"laub"]),...o.slice(0,1).map(b=>[b,"busch"])];if(!h.length)return!1;let u=new Set(r?l.slice(0,1).map(b=>b.name):[]),f=r?0:i.lichter>0?1:2,d=(await Promise.all(h.map(async([b,M])=>{let y=b.dateien,S=await Promise.all([0,1,2].map(_=>_>=f&&y["lod"+_]&&(_!==0||u.has(b.name))?e.glb("welt/modelle/"+y["lod"+_]):Promise.resolve(null)));return S.forEach((_,w)=>{_&&s.fussNormieren(_.scene,b.name+" LOD"+w)}),{name:b.name,art:M,hoehe:+b.hoehe_m||14,stufen:S,da:S.some(_=>!!_)}}))).filter(b=>b.da),m=b=>d.filter(M=>M.art===b),x=m("nadel"),g=m("laub"),p=m("busch");if(!x.length&&!g.length)return!1;let v=d.map(()=>[]),E={nadel:0,laub:0,busch:0};for(let b of this.plaetze){let M=b.art==="busch"?p:b.art==="laub"&&g.length?g:x.length?x:g;if(!M.length)continue;let y=M[E[b.art]++%M.length];v[d.indexOf(y)].push(b)}return d.forEach((b,M)=>{let y=v[M];if(!y.length)return;let S=b.art==="busch",_=new Ur(this.szene,b,y.map(oS),{name:b.name,weiten:S?QE:$E,lodWeite:i.lodWeite,maxWeite:1e3,takt:8,versatz:M,feinste:i.lod,blickKegel:S?{mitte:1.5,radius:3}:{mitte:b.hoehe*.45,radius:b.hoehe*.6},spiegel:!1,schatten:w=>!S&&s.istStamm(w),schattenAn:!!i.schatten,material:(w,C,I)=>s.material(w,C,I)});_.setzeAnzahl(Math.round(y.length*this.dichte)),this.instanzen.push(_)}),this.fernBauen(x.length?x.slice(0,4):g,g),this.geladen=this.instanzen.length>0,this.geladen}fernBauen(e,t){let n=m=>{let x=m.stufen[2];if(!x)return null;x.scene.updateMatrixWorld(!0);let g=null;return x.scene.traverse(p=>{!g&&p.isMesh&&(g=p)}),g?{mesh:g,material:s.material(g.material,g,2)}:null},i={0:e.map(n).filter(Boolean),1:t.map(n).filter(Boolean)};if(i[0].length||(i[0]=i[1]),i[1].length||(i[1]=i[0]),!i[0].length)return;let{z0:r,z1:a,rnd:o,frei:l}=this.fern,c=aS(r,a,o,l,this.dichte<.5?130:260),h=Math.round(c.length*this.dichte);this.fernPlaetze=c.slice(0,h).map(m=>({x:m[0],y:m[1],z:m[2]}));let u=new Map,f=[0,0];for(let m=0;m<h;m++){let x=c[m],g=i[x[5]][f[x[5]]++%i[x[5]].length];u.has(g)||u.set(g,[]),u.get(g).push(x)}let d=new Fe;for(let[m,x]of u){let g=new Dt(m.mesh.geometry,m.material,x.length);g.name="fernwald:"+m.mesh.name,x.forEach((p,v)=>{$h.set(p[0],p[1],p[2]),cl.setFromAxisAngle(bg,p[4]),Qh.setScalar(p[3]),g.setMatrixAt(v,d.compose($h,cl,Qh).multiply(m.mesh.matrixWorld))}),g.frustumCulled=!1,g.castShadow=!1,g.receiveShadow=!1,this.szene.add(g),this.fernMeshes.push(g)}}static fussNormieren(e,t){e.updateMatrixWorld(!0);let n=new ln,i=new ln,r=null;if(e.traverse(h=>{!h.isMesh||!h.geometry||(h.geometry.boundingBox||h.geometry.computeBoundingBox(),i.copy(h.geometry.boundingBox).applyMatrix4(h.matrixWorld),n.union(i),s.istStamm(h)&&(r?r.union(i):r=i.clone()))}),n.isEmpty())return;let a=r||n,o=(a.min.x+a.max.x)/2,l=(a.min.z+a.max.z)/2,c=a.min.y;(Math.hypot(o,l)>.1||Math.abs(c)>.1)&&console.warn(`Baum ${t}: Fu\xDF um (${o.toFixed(2)}, ${c.toFixed(2)}, ${l.toFixed(2)}) verschoben \u2013 in den Ursprung ger\xFCckt`),e.position.x-=o,e.position.y-=c,e.position.z-=l,e.updateMatrixWorld(!0)}static istStamm(e){let t=e.material&&e.material.name||"";return/rinde|stamm|trunk|bark/i.test(t)||/stamm|trunk/i.test(e.name||"")}static material(e,t,n){if(!e)return e;let i=e.name||"";if(/blaetter|nadeln|billboard|leaf|leaves|needle/i.test(i)||e.alphaTest>0){if(e.userData.freqLaub)return e;e.userData.freqLaub=!0,e.side=Pt,e.transparent=!1,e.depthWrite=!0,e.alphaTest=n===0?.42:n===1?.33:.28,e.alphaToCoverage=!0,e.roughness=1,e.metalness=0,"envMapIntensity"in e&&(e.envMapIntensity=.3),e.color&&e.color.multiply(new Ce(.78,.8,.74)),e.isMeshStandardMaterial&&(e.onBeforeCompile=r=>{r.fragmentShader=r.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
            reflectedLight.directDiffuse *= 0.55;
            reflectedLight.directSpecular *= 0.2;`)},e.customProgramCacheKey=()=>"freq-laub-1"),e.needsUpdate=!0}return e}setzeStufe(e){this.dichte=e.baumDichte??1;for(let t of this.instanzen)t.setzeStufe(e),t.setzeAnzahl(Math.round(t.n*this.dichte))}update(e,t){for(let n of this.instanzen)n.update(e,t)}}});function Ed(s,e,t){let n=document.createElement("canvas");n.width=s,n.height=e;let i=n.getContext("2d");t(i,s,e);let r=new Lt(n);return r.colorSpace=at,r.wrapS=r.wrapT=bn,r.anisotropy=4,r}function Md(s,e=0){return Ed(256,256,(t,n,i)=>{t.lineCap="round";let r=e===1?14:e===2?55:70;for(let a=0;a<r;a++){let o=(s()-.5)*(e===1?2.4:2.1),l=i*(e===2?.55+s()*.45:.45+s()*.5),c=n/2+(s()-.5)*40,h=c+Math.sin(o)*l,u=i-Math.cos(o)*l*.95,f=t.createLinearGradient(c,i,h,u),d=e===2?48+s()*18:e===1?105+s()*25:95+s()*35,m=e===2?30+s()*20:25+s()*25,x=e===1?16+s()*10:e===2?26+s()*16:22+s()*14;if(f.addColorStop(0,`hsl(${d}, ${m}%, ${e===2?12:9}%)`),f.addColorStop(1,`hsl(${d-15}, ${m+10}%, ${x}%)`),t.strokeStyle=f,t.lineWidth=e===1?5+s()*4:e===2?1.2+s()*2:2+s()*3.5,t.beginPath(),t.moveTo(c,i),t.quadraticCurveTo(c+Math.sin(o)*l*.3,i-l*.6,h,u),t.stroke(),e===1){t.lineWidth=1.5;for(let g=.25;g<1;g+=.12){let p=c+(h-c)*g,v=i+(u-i)*g,E=(1-g)*14+3;t.beginPath(),t.moveTo(p-E,v+3),t.lineTo(p,v),t.lineTo(p+E,v+3),t.stroke()}}}})}function vg(s,e=0){let t=e===1?30:110,n=e===1?.49:.42,i=e===1?.6:.8;return Ed(256,256,(r,a,o)=>{let l=r.createRadialGradient(a/2,o,10,a/2,o,o*.9);l.addColorStop(0,`hsl(${t+5}, 26%, 15%)`),l.addColorStop(.85,`hsl(${t}, 28%, 19%)`),l.addColorStop(1,`hsla(${t}, 28%, 19%, 0)`),r.fillStyle=l,r.beginPath(),r.ellipse(a/2,o,a*n,o*i,0,Math.PI,0),r.fill();for(let c=0;c<1100;c++){let h=s()*Math.PI,u=Math.sqrt(s()),f=a/2+Math.cos(h)*u*a*(n+.04)*(s()<.5?-1:1),d=o-Math.sin(h)*u*o*(i+.1),m=15+u*12+s()*12;r.fillStyle=`hsl(${t-15+s()*40}, ${24+s()*20}%, ${m}%)`,r.beginPath(),r.ellipse(f,d,3+s()*5,2+s()*3,s()*Math.PI,0,Math.PI*2),r.fill()}})}function lS(s){return Ed(1024,256,(e,t,n)=>{for(let i=0;i<2;i++){let r=-20;for(;r<t+20;){let a=n*(i?.55+s()*.3:.7+s()*.3),o=a*(.28+s()*.1),l=i?10+s()*4:6+s()*4;e.fillStyle=`hsl(${130+s()*30}, ${18+s()*12}%, ${l}%)`,e.beginPath(),e.moveTo(r,n-a);let c=7;for(let h=1;h<=c;h++){let u=h/c;e.lineTo(r+o*u*(.8+s()*.4),n-a+a*u*.92),e.lineTo(r+o*u*.6,n-a+a*u*.92+2)}e.lineTo(r+o,n),e.lineTo(r-o,n);for(let h=c;h>=1;h--){let u=h/c;e.lineTo(r-o*u*.6,n-a+a*u*.92+2),e.lineTo(r-o*u*(.8+s()*.4),n-a+a*u*.92)}e.closePath(),e.fill(),r+=o*(.7+s()*.6)}}e.fillStyle="hsl(140, 20%, 6%)",e.fillRect(0,n*.82,t,n*.18)})}function hl(s,e){let t=[0,1,2].map(l=>new lt(s,e).translate(0,e/2,0).rotateY(l*Math.PI/3)),n=[],i=[],r=[],a=0;for(let l of t){n.push(...l.attributes.position.array),i.push(...l.attributes.uv.array);let c=l.index.array;for(let h of c)r.push(h+a);for(let h=0;h<c.length;h+=3)r.push(c[h]+a,c[h+2]+a,c[h+1]+a);a+=l.attributes.position.count,l.dispose()}let o=new ht;return o.setAttribute("position",new ft(n,3)),o.setAttribute("uv",new ft(i,2)),o.setAttribute("normal",new ft(new Float32Array(n.length).map((l,c)=>c%3===1?1:0),3)),o.setIndex(r),o}var Ha,tu,_g=pt(()=>{It();Qs();ll();rn();Ha=s=>{let e=new Ne({map:s,roughness:1,metalness:0,alphaTest:.4,alphaToCoverage:!0,side:Zn,envMapIntensity:.3});return e.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
      reflectedLight.directDiffuse *= 0.6;
      reflectedLight.directSpecular *= 0.2;`)},e.customProgramCacheKey=()=>"freq-bewuchs-1",e},tu=class{constructor(e,t){this.szene=e,this.o=t,this.meshes=[]}bauen(e,t){if(this.meshes.length)return;let n=Na(53),i=t==="niedrig"?0:(e.baumDichte??1)*(t==="mittel"?.75:1);i>0&&(this.unterwuchs(n,hl(1.1,.8),Ha(Md(n,0)),Math.round(1900*i),"bueschel"),this.unterwuchs(n,hl(1.3,.9),Ha(Md(n,1)),Math.round(700*i),"bueschel"),this.unterwuchs(n,hl(1,1),Ha(Md(n,2)),Math.round(900*i),"bueschel"),this.unterwuchs(n,hl(1.9,1.3),Ha(vg(n,0)),Math.round(750*i),"strauch"),this.unterwuchs(n,hl(2.2,1),Ha(vg(n,1)),Math.round(400*i),"strauch")),this.kulisse(n)}boden(e,t){return Li(e,t)-.03}unterwuchs(e,t,n,i,r){let{z0:a,z1:o,frei:l}=this.o,c=r==="strauch",h=[],u=0;for(;h.length<i&&u++<i*4;){let f=e()<.5?-1:1,d=c?10.2+Math.pow(e(),1.3)*32:9.6+Math.pow(e(),1.8)*30,m=f*d,x=a+e()*(o-a),g=c?1.4:.7;if(za(m,x)<g+.5||Ba(m,x,g)||c&&l&&!l(x,f,"baum",m))continue;let p=c?.6+e()*.8:.6+e()*.9;if(h.push([m,this.boden(m,x),x,p,e()*Math.PI*2]),c&&e()<.6)for(let v=0;v<2;v++){let E=m+(e()-.5)*5,b=x+(e()-.5)*5;Math.abs(E)<10.2||za(E,b)<g+.5||Ba(E,b,g)||h.push([E,this.boden(E,b),b,.5+e()*.6,e()*Math.PI*2])}}this.instanziere(t,n,h,r)}kulisse(e){let{kz0:t,kz1:n}=this.o,i=new lt(70,24).translate(0,12,0);i.setAttribute("normal",new ft(new Float32Array(i.attributes.position.count*3).map((o,l)=>l%3===1?1:0),3));let r=Ha(lS(e)),a=[];for(let o of[-1,1])for(let[l,c]of[[118,25],[160,35]]){let h=t+e()*30;for(;h<n;){let u=o*(l+e()*c),f=Math.min(Ii(u,h-30),Ii(u,h),Ii(u,h+30))-2.5,d=-o*Math.PI/2+(e()-.5)*.42;a.push([u,f,h,.85+e()*.35,d,e()<.5?-1:1]),h+=38+e()*18}}this.instanziere(i,r,a,"kulisse")}instanziere(e,t,n,i){if(!n.length)return;let r=new Dt(e,t,n.length);r.name="bewuchs:"+i;let a=new Fe,o=new R,l=new $t,c=new R,h=new R(0,1,0);n.forEach((u,f)=>{o.set(u[0],u[1],u[2]),l.setFromAxisAngle(h,u[4]),c.set(u[3]*(u[5]||1),u[3],u[3]),r.setMatrixAt(f,a.compose(o,l,c))}),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,this.szene.add(r),this.meshes.push(r)}}});function fS(s=4){let e=[[-.02,.86],[.03,.835],[.065,.8],[.03,.765],[0,.745],[.03,.725],[.065,.69],[.03,.655],[-.02,.63]],t=e.length,n=[],i=[],r=[],a=[];for(let h=0;h<t;h++){let[u,f]=e[h],[d,m]=e[Math.min(t-1,h+1)],[x,g]=e[Math.max(0,h-1)],p=d-x,v=m-g,E=Math.hypot(p,v)||1,b=v/E,M=-p/E;for(let y of[-s/2,s/2])n.push(u,f,y),i.push(b,M,0),r.push((y+s/2)/s,h/(t-1))}for(let h=0;h<t-1;h++){let u=h*2,f=u+1,d=u+2,m=u+3;a.push(u,f,d,f,m,d)}let o=new ht;o.setAttribute("position",new ft(n,3)),o.setAttribute("normal",new ft(i,3)),o.setAttribute("uv",new ft(r,2)),o.setIndex(a);let l=new Oe(.06,.74,.12).translate(-.075,.37,0),c=new Oe(.01,.05,.08).translate(.07,.745,.6);return{blech:o,pfosten:l,reflektor:c}}var yg,Mg,Sd,cS,Eg,Td,hS,uS,nu,wd=pt(()=>{It();Qn();ri();V0();md();Js();Qs();xg();rn();_g();yg=34,Mg=280,Sd=700,cS=6.6,Eg=5.2,Td=(s,e=1,t=[0,0,0],n=1.5,i=5)=>new Ct({transparent:!0,blending:Nt,depthWrite:!1,side:Pt,fog:!1,uniforms:{farbe:{value:s},staerke:{value:e},zeit:{value:0},kamera:{value:new R(0,-1e3,0)},spitze:{value:new R(...t)},nah:{value:n},fern:{value:i}},vertexShader:`
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
    }`}),hS=(s,e)=>new Ct({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:{t:{value:s},farbe:{value:e},groesse:{value:1.6}},vertexShader:`
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
    }`}),uS=`
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
  }`;nu=class{constructor(e,t){this.szene=e,this.z0=t.z0,this.z1=t.z1,this.frei=t.frei||null,this.renderer=t.renderer||null;let n=t.rnd;this.flareT=$n(128),this.stufe={lichter:0,schatten:!1,lod:1,lodWeite:1,baumDichte:1,kegel:!0},this.himmelUniforms={oben:{value:new Ce(132366)},horizont:{value:new Ce(924206)},glut:{value:new Ce(3810838)},zeit:{value:0},sterne:{value:.6},aurora:{value:0},warnung:{value:0},mond:{value:0},mondRichtung:{value:new R(.3,.3,.9)}};let i=new ne(new Mn(1100,32,16),new Ct({side:Pn,depthWrite:!1,fog:!1,uniforms:this.himmelUniforms,vertexShader:"varying vec3 vP; void main(){ vP = position; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_Position.z = gl_Position.w; }",fragmentShader:uS}));i.frustumCulled=!1,i.layers.enable(Ut),e.add(i),this.himmel=i;{let r=new Ir(t.renderer),a=new cs;a.add(new ne(new Oe(60,30,60),new st({color:197900,side:Pn})));let o=(l,c,h,u,f,d,m,x,g)=>{let p=new ne(new lt(l,c),new st({color:Ye(x[0]*g,x[1]*g,x[2]*g)}));p.position.set(h,u,f),p.rotation.set(d,m,0),a.add(p)};o(40,1,0,14,0,Math.PI/2,0,[.85,.92,1],9),o(30,.5,4,9,0,Math.PI/2,0,[1,.68,.38],7),o(30,.3,-6,11,0,Math.PI/2,0,[1,.72,.45],4),o(12,5,-29,5,0,0,Math.PI/2,[.35,.55,.9],1.6),o(12,5,29,5,0,0,-Math.PI/2,[.95,.55,.3],1.3),this.envMap=r.fromScene(a,.04).texture,r.dispose()}e.add(new Go(1714762,0,.6)),this.mond=new qs(4874120,1),this.mond.position.set(-60,90,-40),e.add(this.mond),this.fuell=new qs(10335999,.5),this.fuell.target=new At,e.add(this.fuell,this.fuell.target),this.laternenLicht=new Fn(16757866,260,46,2),e.add(this.laternenLicht),this.lichtPool=new Oh(e,{renderer:t.renderer}),hg(t.z0,t.z1,7,-.015),this.gelaende=ug(t.z0-300,t.z1+Sd,t.grob?{schritt:12,grob:!0}:{}),e.add(this.gelaende),this.bergMaterial=this.gelaende.material,this.laternenPlaetze=[];{let r=Math.ceil((t.z1-t.z0)/yg);for(let a=0;a<r;a++){let o=a%2===0?-1:1,l=t.z0+a*yg+11;t.frei&&!t.frei(l,o,"laterne")||this.laternenPlaetze.push({z:l,seite:o})}}this.laternen=[],this.leuchten=null,this.baueLaternenRueckfall();{let r=new Oe(.1,1,.07);r.translate(0,.5,0);let a=new Oe(.06,.05,.02),o=Math.ceil((t.z1-t.z0)/33),l=new Dt(r,new Ne({color:12105904,roughness:.6}),o*2),c=new Dt(a,new st({color:Ye(5,1.6,.3)}),o),h=new Dt(a,new st({color:Ye(4,4,4)}),o),u=new Fe,f=0,d=0,m=0;for(let x=0;x<o;x++){let g=t.z0+x*33+7;(!t.frei||t.frei(g,-1,"leitpfosten"))&&(u.makeTranslation(-4.5,0,g),l.setMatrixAt(f++,u),u.makeTranslation(-4.5,.9,g+.045),c.setMatrixAt(d++,u)),(!t.frei||t.frei(g,1,"leitpfosten"))&&(u.makeTranslation(4.5,0,g),l.setMatrixAt(f++,u),u.makeTranslation(4.5,.9,g+.045),h.setMatrixAt(m++,u))}l.count=f,c.count=d,h.count=m;for(let x of[l,c,h])x.frustumCulled=!1,e.add(x)}this.leitplankenPlaetze=[];{let a=Math.ceil((t.z1-t.z0)/4);for(let E=0;E<a;E++){let b=t.z0+(E+.5)*4;for(let M of[-1,1])t.frei&&!t.frei(b,M,"leitplanke")||this.leitplankenPlaetze.push({z:b,seite:M})}let{blech:o,pfosten:l,reflektor:c}=fS(4),h=new Ne({color:10133155,roughness:.5,metalness:.85,side:Pt}),u=new Ne({color:7304056,roughness:.6,metalness:.8}),f=new st({color:Ye(4,4,4)}),d=Math.max(1,this.leitplankenPlaetze.length),m=new Dt(o,h,d),x=new Dt(l,u,d),g=new Dt(c,f,d),p=new Fe,v=new Fe;this.leitplankenPlaetze.forEach((E,b)=>{p.makeTranslation(E.seite*Eg,0,E.z),E.seite>0&&p.multiply(v.makeRotationY(Math.PI)),m.setMatrixAt(b,p),x.setMatrixAt(b,p),g.setMatrixAt(b,p)}),m.count=x.count=g.count=this.leitplankenPlaetze.length;for(let E of[m,x,g])E.frustumCulled=!1,e.add(E);this.leitplankenRueckfall=[m,x,g]}this.baumPlaetze=gg(t.z0,t.z1+Mg,n,t.frei);{let r=new us(2.4,6.5,7);r.translate(0,3.25,0);let a=new us(1.6,5.5,7);a.translate(0,7.2,0);let o=new zo({color:661521}),l=Math.max(1,this.baumPlaetze.length),c=new Dt(r,o,l),h=new Dt(a,o,l),u=new Fe,f=new R,d=new $t,m=new R,x=new R(0,1,0),g=this.baumPlaetze.filter(p=>p.art!=="busch");g.forEach((p,v)=>{f.set(p.x,p.y,p.z),d.setFromAxisAngle(x,p.drehung),m.set(p.s*1.05,p.s*1.1,p.s*1.05),u.compose(f,d,m),c.setMatrixAt(v,u),h.setMatrixAt(v,u)}),c.count=h.count=g.length,c.frustumCulled=!1,h.frustumCulled=!1,e.add(c,h),this.kegelBaeume=[c,h]}this.baeume=new eu(e,this.baumPlaetze,{z0:t.z0-300,z1:t.z1+Sd-180,rnd:Na(31),frei:t.frei}),this.bewuchs=new tu(e,{z0:t.z0-40,z1:t.z1+Mg,kz0:t.z0-300,kz1:t.z1+Sd-180,frei:t.frei,strasseBis:t.z1}),this._sort=[],this._v=new R,this.tAlt=null}baueLeuchten(e,t,n){if(this.leuchten)for(let h of this.leuchten)this.szene.remove(h),h.dispose();let i=Math.max(1,e.length),r=new lt(1,1),a=new Dt(r,hS(this.flareT,Ye(2.4,1.5,.65)),i),o=new kt(.32,5.6,n,18,1,!0);o.translate(0,t-n/2,0),this.kegelLaterne=Td(new Ce().setRGB(1,.62,.3,Rt),.065,[0,t,0],7,18);let l=new Dt(o,this.kegelLaterne,i),c=new Fe;e.forEach((h,u)=>{a.setMatrixAt(u,c.makeTranslation(h.x,h.y-.08,h.z)),l.setMatrixAt(u,c.makeTranslation(h.x,h.y-t,h.z))}),a.count=l.count=e.length;for(let h of[a,l])h.frustumCulled=!1,this.szene.add(h);a.layers.enable(Ut),l.visible=this.stufe.kegel!==!1,this.kegelInstanzen=l,this.glowInstanzen=a,this.leuchten=[a,l],this.laternen=e.map(h=>({z:h.z,kopf:h.clone()}))}baueLaternenRueckfall(){let e=Math.max(1,this.laternenPlaetze.length),t=new kt(.09,.13,9,10);t.translate(0,4.5,0);let n=new kt(.06,.06,2.6,8);n.rotateZ(Math.PI/2),n.translate(1.3,8.9,0);let i=new kt(.16,.42,.26,20);i.translate(2.5,8.98,0);let r=new Mn(.2,14,10);r.translate(2.5,8.78,0);let a=new Ne({color:1778217,roughness:.7,metalness:.4}),o=new st({color:Ye(10,6,2.4)}),l=[t,n,i,r].map((f,d)=>new Dt(f,d===3?o:a,e)),c=new Fe,h=new Fe,u=[];this.laternenPlaetze.forEach((f,d)=>{c.makeTranslation(f.seite*5.4,0,f.z),f.seite>0&&c.multiply(h.makeRotationY(Math.PI));for(let m of l)m.setMatrixAt(d,c);u.push(new R(f.seite*2.9,8.8,f.z))});for(let f of l)f.count=this.laternenPlaetze.length,f.frustumCulled=!1,this.szene.add(f);l[3].layers.enable(Ut),this.laternenRueckfall=l,this.baueLeuchten(u,8.85,9.2)}setzeLaternenModell(e){let t=e.stufen.find(c=>c);if(!t)return!1;t.scene.updateMatrixWorld(!0);let n=[];t.scene.traverse(c=>{/^leuchte_\d+$/.test(c.name)&&n.push(new R().setFromMatrixPosition(c.matrixWorld))}),n.length||n.push(new R(-1.9,9.3,0),new R(1.9,9.3,0));let i=Fr(t.scene),r=this.laternenPlaetze.map(c=>new Fe().makeTranslation(c.seite*cS,0,c.z));this.laternenInstanzen=new Ur(this.szene,e,r,{name:"laterne",weiten:[0,30,95],lodWeite:this.stufe.lodWeite,maxWeite:900,takt:4,feinste:this.stufe.lod,spiegel:c=>!!(c.material&&c.material.name==="licht_laterne")});let a=[],o=new R;r.forEach(c=>{for(let h of n)a.push(o.copy(h).applyMatrix4(c).clone());for(let h of i)this.lichtPool.anmelden(q0(h,c),{prioritaet:1})});let l=n[0].y-.12;this.baueLeuchten(a,l,l);for(let c of this.laternenRueckfall)c.visible=!1;return this.laternenInstanzen.update({position:new R(0,3,0)}),!0}setzeLeitplankenModell(e){let t=Math.max(1,+e.extras.laenge_m||4),n=Math.ceil((this.z1-this.z0)/t),i=[],r=new R,a=new $t,o=new R(1,1,1),l=new R(0,1,0);for(let c=0;c<n;c++){let h=this.z0+(c+.5)*t;for(let u of[-1,1])this.frei&&!this.frei(h,u,"leitplanke")||(r.set(u*Eg,0,h),a.setFromAxisAngle(l,u<0?Math.PI/2:-Math.PI/2),i.push(new Fe().compose(r,a,o)))}if(!i.length)return!1;this.leitplankenInstanzen=new Ur(this.szene,e,i,{name:"leitplanke",weiten:[0,25,80],lodWeite:this.stufe.lodWeite,maxWeite:600,takt:6,versatz:2,feinste:this.stufe.lod,spiegel:!1});for(let c of this.leitplankenRueckfall)c.visible=!1;return!0}async ladeModelle(e,t){this.welt=t,this.stufe=t.stufe;let n=t.stufe.lod,i=async(r,a)=>{try{return await a()}catch(o){return console.warn("Umgebung",r,o),null}};await i("Laternen",async()=>{let r=await Dr(e,"laterne_duo",n);r.da&&this.setzeLaternenModell(r)}),await i("B\xE4ume",async()=>{if(await this.baeume.laden(e,t)){for(let a of this.kegelBaeume)a.visible=!1;this.echteBaeume=this.baeume.instanzen,this.baeume.setzeStufe(t.stufe)}}),await i("Bewuchs",async()=>this.bewuchs.bauen(t.stufe,t.stufeName)),await i("Leitplanken",async()=>{let r=await Dr(e,"leitplanke",n);r.da&&this.setzeLeitplankenModell(r)})}setzeStufe(e,t){this.stufe=e,this.lichtPool.setzeStufe(e),this.laternenLicht.intensity=this.lichtPool.anzahl>0||t==="niedrig"?0:260,this.kegelInstanzen&&(this.kegelInstanzen.visible=e.kegel!==!1);for(let n of[this.laternenInstanzen,this.leitplankenInstanzen])n&&n.setzeStufe(e);this.baeume.setzeStufe(e),this.gelaende&&(this.gelaende.receiveShadow=!!e.schatten)}setzeHdri(e,t){if(!t)return;let n=new Ir(e),i=n.fromEquirectangular(t).texture;return n.dispose(),t.dispose(),this.envMap=i,this.szene.environment=i,this.szene.environmentIntensity=.5,i}setzeBaeume(e,t,n,i){if(!e||this.baeume.geladen)return;let r=[];if(e.scene.traverse(p=>{p.name&&/^Baum\d$/.test(p.name)&&r.push(p)}),!r.length)return;let a=new Ne({color:9075306,roughness:.95,map:t||null,normalMap:n||null}),o=new Ne({color:12108976,roughness:.95,map:i||null,alphaTest:.4,side:Pt,transparent:!1}),l=new Ne({color:1450266,roughness:1});i&&(i.colorSpace=at,i.wrapS=i.wrapT=bn,i.flipY=!1,i.needsUpdate=!0),t&&(t.colorSpace=at,t.wrapS=t.wrapT=Gn);let c=this.baumPlaetze||[],h=r.map(()=>[]);c.forEach((p,v)=>h[v%r.length].push(p));let u=new Fe,f=new R,d=new $t,m=new R,x=new R(0,1,0),g=[];if(r.forEach((p,v)=>{let E=h[v];p.traverse(b=>{if(!b.isMesh)return;let M=b.material&&b.material.name==="Rinde"||/^Stamm/.test(b.name),y=b.material&&b.material.name==="Kern"||/^Kern/.test(b.name),S=new Dt(b.geometry,M?a:y?l:o,Math.max(1,E.length));E.forEach((_,w)=>{f.set(_.x,_.y,_.z),d.setFromAxisAngle(x,_.drehung),m.set(_.s*1.2,_.s*1.15,_.s*1.2),u.compose(f,d,m),S.setMatrixAt(w,u)}),S.count=E.length,S.frustumCulled=!1,S.castShadow=M&&!!this.stufe.schatten,this.szene.add(S),g.push(S)})}),this.kegelBaeume)for(let p of this.kegelBaeume)p.visible=!1;this.echteBaeume=g}setzeBoden(e,t,n){if(e){e.colorSpace=at;for(let[i,r]of[[n.bankettMaterial,[3.2,n.bankettLaenge/4]],[n.bodenMaterial,[200,600]],[this.gelaende&&this.gelaende.material,[1,1]]]){if(!i)continue;let a=e.clone();if(a.repeat.set(r[0],r[1]),a.needsUpdate=!0,i.map=a,t){let o=t.clone();o.repeat.set(r[0],r[1]),o.needsUpdate=!0,i.normalMap=o,i.normalScale.set(.8,.8)}i.color.setHex(3816762),i.needsUpdate=!0}n.bankett&&(n.bankett.receiveShadow=!0)}}hoehe(e,t){return Ii(e,t)}update(e,t,n){let i=this.tAlt==null?.016666666666666666:Math.min(.1,Math.max(.001,e-this.tAlt));this.tAlt=e,this.himmelUniforms.zeit.value=e,this.kegelLaterne.uniforms.zeit.value=e,this.kegelLaterne.uniforms.kamera.value.copy(t.position),this.himmel.position.copy(t.position),this.himmel.updateMatrixWorld();let r=t.position.z,a=this._sort;a.length=0;for(let c of this.laternen){let h=Math.abs(c.z-r);h<140&&a.push({l:c,d:h})}a.sort((c,h)=>c.d-h.d);let o=n.uniforms.laternen.value;for(let c=0;c<o.length;c++)c<a.length?o[c].copy(a[c].l.kopf):o[c].set(0,-100,0);a.length?this.laternenLicht.position.copy(a[0].l.kopf):this.laternenLicht.position.set(0,-100,0),this.fuell.position.copy(t.position).add(this._v.set(2,6,0)),this.lichtPool.update(t,i);let l=this.szene.fog&&this.szene.fog.density?this.szene.fog.density:0;this.laternenInstanzen&&this.laternenInstanzen.update(t,l),this.leitplankenInstanzen&&this.leitplankenInstanzen.update(t,l),this.baeume.update(t,l)}}});function Sg(s){let e=new Map,t=new Map,n=s.clone();return Tg(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,a=e.get(i),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Tg(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Tg(s.children[n],e.children[n],t)}var wg=pt(()=>{});function dS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function pn(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}function gS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ne({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),s.DefaultMaterial}function Hr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function bS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function xS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function vS(s){let e,t=s.extensions&&s.extensions[Tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cd(t.attributes):e=s.indices+":"+Cd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Cd(s.targets[n]);return e}function Cd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Qd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _S(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function MS(s,e,t){let n=e.attributes,i=new ln;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=Qd(Oa[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){let x=Qd(Oa[f.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new ni;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Pg(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=$d[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return yt.workingColorSpace!==Rt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${yt.workingColorSpace}" not supported.`),Zi(s,e),MS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?bS(s,e.targets,t):s})}var Ga,Tt,Pd,Id,Ld,kd,Dd,Fd,Nd,Ud,zd,Bd,Hd,Od,Gd,Vd,Wd,qd,iu,Xd,Ig,ul,Rg,Kd,jd,Yd,Jd,su,pS,Zd,vi,Oa,Ag,Cg,Rd,$d,er,mS,Ad,yS,ep,tp=pt(()=>{It();Bh();wg();Ga=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kd(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Vd(t)}),this.register(function(t){return new Wd(t)}),this.register(function(t){return new qd(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new zd(t)}),this.register(function(t){return new Bd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new Hd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Gd(t)}),this.register(function(t){return new Od(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new iu(t,Tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new iu(t,Tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Xd(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=bs.extractUrlBase(e);a=bs.resolveURL(c,this.path)}else a=bs.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ig){try{a[Tt.KHR_BINARY_GLTF]=new Kd(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ep(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case Tt.KHR_MATERIALS_UNLIT:a[u]=new Id;break;case Tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new jd(r,this.dracoLoader);break;case Tt.KHR_TEXTURE_TRANSFORM:a[u]=new Yd;break;case Tt.KHR_MESH_QUANTIZATION:a[u]=new Jd;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};Tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Pd=class{constructor(e){this.parser=e,this.name=Tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Rt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new qs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fn(h),c.distance=u;break;case"spot":c=new gs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Id=class{constructor(){this.name=Tt.KHR_MATERIALS_UNLIT}getMaterialType(){return st}extendParams(e,t,n){let i=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Rt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(i)}},Ld=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ee(r,r)}return Promise.all(i)}},Dd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Fd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Nd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Rt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,at)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Ud=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},zd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(r[0],r[1],r[2],Rt),Promise.all(i)}},Bd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_IOR}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Hd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(r[0],r[1],r[2],Rt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,at)),Promise.all(i)}},Od=class{constructor(e){this.parser=e,this.name=Tt.EXT_MATERIALS_BUMP}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Gd=class{constructor(e){this.parser=e,this.name=Tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return pn(this.parser,e,this.name)!==null?sn:null}extendMaterialParams(e,t){let n=pn(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Vd=class{constructor(e){this.parser=e,this.name=Tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Wd=class{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},qd=class{constructor(e){this.parser=e,this.name=Tt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},iu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){let d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}},Xd=class{constructor(e){this.name=Tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==vi.TRIANGLES&&c.mode!==vi.TRIANGLE_STRIP&&c.mode!==vi.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let m of u){let x=new Fe,g=new R,p=new $t,v=new R(1,1,1),E=new Dt(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&v.fromBufferAttribute(l.SCALE,M),E.setMatrixAt(M,x.compose(g,p,v));let b=null;for(let M in l)if(M==="_COLOR_0"){let y=l[M];E.instanceColor=new hs(y.array,y.itemSize,y.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(b===null){let S=E.geometry;b=new ht,b.name=S.name;for(let _ in S.attributes)b.setAttribute(_,S.attributes[_]);for(let _ in S.morphAttributes)b.morphAttributes[_]=S.morphAttributes[_];S.index!==null&&b.setIndex(S.index),b.morphTargetsRelative=S.morphTargetsRelative;for(let _ of S.groups)b.addGroup(_.start,_.count,_.materialIndex);S.boundingBox!==null&&(b.boundingBox=S.boundingBox.clone()),S.boundingSphere!==null&&(b.boundingSphere=S.boundingSphere.clone()),b.drawRange.start=S.drawRange.start,b.drawRange.count=S.drawRange.count,b.userData=Object.assign({},S.userData),E.geometry=b}let y=l[M];b.setAttribute(M,new hs(y.array,y.itemSize,y.normalized))}At.prototype.copy.call(E,m),this.parser.assignFinalMaterial(E),d.push(E)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Ig="glTF",ul=12,Rg={JSON:1313821514,BIN:5130562},Kd=class{constructor(e){this.name=Tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ul),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ig)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ul,r=new DataView(e,ul),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Rg.JSON){let c=new Uint8Array(e,ul+a,o);this.content=n.decode(c)}else if(l===Rg.BIN){let c=ul+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},jd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=$d[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=$d[h]||h.toLowerCase();if(a[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Oa[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let m in d.attributes){let x=d.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}u(d)},o,c,Rt,f)})})}},Yd=class{constructor(){this.name=Tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Jd=class{constructor(){this.name=Tt.KHR_MESH_QUANTIZATION}},su=class extends Wi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,m=e*c,x=m-c,g=-2*d+3*f,p=d-f,v=1-g,E=p-f+u;for(let b=0;b!==o;b++){let M=a[x+b+o],y=a[x+b+l]*h,S=a[m+b+o],_=a[m+b]*h;r[b]=v*M+E*y+g*S+p*_}return r}},pS=new $t,Zd=class extends su{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return pS.fromArray(r).normalize().toArray(r),r}},vi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Oa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ag={9728:fn,9729:bt,9984:Gc,9985:Ra,9986:Rr,9987:en},Cg={33071:bn,33648:ua,10497:Gn},Rd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$d={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mS={CUBICSPLINE:void 0,LINEAR:mr,STEP:pr},Ad={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};yS=new Fe,ep=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Er(this.options.manager):this.textureLoader=new Wo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Hr(r,o,i),Zi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(bs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Rd[i.type],o=Oa[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new ct(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Rd[i.type],c=Oa[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(d&&d!==u){let p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,E=t.cache.get(v);E||(x=new c(o,p*d,i.count*d/h),E=new br(x,d/h),t.cache.add(v,E)),g=new Us(E,l,f%d/h,m)}else o===null?x=new c(i.count*l):x=new c(o,f,i.count*l),g=new ct(x,l,m);if(i.sparse!==void 0){let p=Rd.SCALAR,v=Oa[i.sparse.indices.componentType],E=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,M=new v(a[1],E,i.sparse.count*p),y=new c(a[2],b,i.sparse.count*l);o!==null&&(g=new ct(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let S=0,_=M.length;S<_;S++){let w=M[S];if(g.setX(w,y[S*l]),l>=2&&g.setY(w,y[S*l+1]),l>=3&&g.setZ(w,y[S*l+2]),l>=4&&g.setW(w,y[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return h.magFilter=Ag[f.magFilter]||bt,h.minFilter=Ag[f.minFilter]||en,h.wrapS=Cg[f.wrapS]||Gn,h.wrapT=Cg[f.wrapT]||Gn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==fn&&h.minFilter!==bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(x){let g=new yn(x);g.needsUpdate=!0,f(g)}),t.load(bs.resolveURL(u,r.path),m,void 0,d)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Zi(u,a),u.userData.mimeType=a.mimeType||_S(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ya,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new _a,Vn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ne}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Tt.KHR_MATERIALS_UNLIT]){let u=i[Tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Rt),o.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Pt);let h=r.alphaMode||Ad.OPAQUE;if(h===Ad.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Ad.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ee(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==st&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==st){let u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],Rt)}return r.emissiveTexture!==void 0&&a!==st&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Hr(i,u,r),u})}createUniqueName(e){let t=Yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Pg(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=vS(c),u=i[h];if(u)a.push(u.promise);else{let f;c.extensions&&c.extensions[Tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Pg(new ht,c,t),c.mode===vi.TRIANGLE_STRIP?f=f.then(d=>dd(d,tl)):c.mode===vi.TRIANGLE_FAN&&(f=f.then(d=>dd(d,Pa))),i[h]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?gS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,m=h.length;d<m;d++){let x=h[d],g=a[d],p,v=c[d];if(g.mode===vi.TRIANGLES||g.mode===vi.TRIANGLE_STRIP||g.mode===vi.TRIANGLE_FAN||g.mode===void 0){let E=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=E&&b?new Mo(x,v):new ne(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===vi.LINES)p=new vr(x,v);else if(g.mode===vi.LINE_STRIP)p=new xr(x,v);else if(g.mode===vi.LINE_LOOP)p=new So(x,v);else if(g.mode===vi.POINTS)p=new Hs(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&xS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Zi(p,r),g.extensions&&Hr(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let d=0,m=u.length;d<m;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Hr(i,u[0],r),u[0];let f=new ot;r.extensions&&Hr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,m=u.length;d<m;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(Xt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let f=new Fe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Eo(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],m=i.samplers[d.sampler],x=d.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",v)),c.push(m),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],m=u[2],x=u[3],g=u[4],p=[];for(let E=0,b=f.length;E<b;E++){let M=f[E],y=d[E],S=m[E],_=x[E],w=g[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,y,S,_,w);if(C)for(let I=0;I<C.length;I++)p.push(C[I])}let v=new Ho(r,void 0,p);return Zi(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,yS)});for(let d=0,m=u.length;d<m;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,m=u[0];h.pivot=new R().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new xa:c.length>1?h=new ot:c.length===1?h=c[0]:h=new At,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Zi(h,r),r.extensions&&Hr(n,h,r),r.matrix!==void 0){let u=new Fe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new ot;n.name&&(r.name=i.createUniqueName(n.name)),Zi(r,n),n.extensions&&Hr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Sg(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of i.associations)(f instanceof Vn||f instanceof yn)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}er[r.path]===er.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(er[r.path]){case er.weights:h=ds;break;case er.rotation:h=ps;break;case er.translation:case er.scale:h=Ws;break;default:n.itemSize===1?h=ds:h=Ws;break}let u=i.interpolation!==void 0?mS[i.interpolation]:mr,f=this._getArrayFromAccessor(n);for(let d=0,m=l.length;d<m;d++){let x=new h(l[d]+"."+er[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Qd(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ps?Zd:su;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var np,ES,Lg,SS,ip,ci,ru,fl,Va,Wa,TS,tr,Ms,au,sp=pt(()=>{rn();np=-1.75,ES=1.75,Lg=150,SS=60,ip=48,ci=np,ru=ES,fl=-ip,Va=-2*ip,Wa=-3*ip,TS=[0,-78,-26,-52],tr=[{x:[[0,ci],[9,ci]],dz:[[0,0],[3.42,0],[3.55,-5],[3.7,-7],[3.78,-7],[3.86,-14],[3.95,-21],[4.05,-23],[4.6,0],[9,0]]},{x:[[0,ci],[9,ci]],dz:[[0,fl],[.3,-50],[.8,-62],[1.3,-78],[1.9,-90],[2.6,Va],[3.42,Va],[3.55,-99],[3.7,-104],[3.78,-103],[3.86,-103.5],[3.95,-105],[4.05,-106.5],[4.6,Va],[5.85,Va],[6.5,-110],[7,-126],[7.6,-140],[8.2,Wa],[9,Wa]]},{x:[[0,ci],[.36,ci],[.76,ru],[1.05,ru],[1.45,ci],[9,ci]],dz:[[0,-98],[.1,-98],[.36,-91],[.8,-62],[1.05,-52],[1.4,fl],[3.42,fl],[3.55,-49],[3.7,-54],[3.78,-54],[3.86,-55],[3.95,-58],[4.05,-60],[4.6,fl],[9,fl]]},{x:[[0,ci],[1.25,ci],[1.6,-1.25],[1.95,ci],[6.05,ci],[6.45,ru],[6.75,ru],[7.15,ci],[9,ci]],dz:[[0,-150],[1,-147],[1.8,Wa],[3.42,Wa],[3.55,-147],[3.7,-152],[3.78,-151],[3.86,-151],[3.95,-151.5],[4.05,-152.5],[4.6,Wa],[5.8,Wa],[6.05,-139],[6.5,-110],[6.75,-100],[7.1,Va],[9,Va]]}],Ms=.01,au=class{constructor(){this.choreo=tr.map(e=>({x:ai(e.x),dz:ai(e.dz)})),this.anzahl=tr.length,this.zustaende=tr.map(()=>({vx:0,vz:0,ax:0,az:0,erst:!0})),this.tempoAlt=null,this.beschl=0,this.davon=0,this.vorsprung=0}beginne(e,t,n,i,r=0){let a=this.tempoAlt===null?0:(i-this.tempoAlt)/Math.max(n,.001);this.tempoAlt=i,this.beschl+=(nt(a,-40,40)-this.beschl)*Ci(n,.45);let o=Math.max(nt(r),Mt(8.12,8.75,e));this.davon+=(o-this.davon)*Ci(n,.6);let l=this.davon*this.davon*(3-2*this.davon);this.vorsprung=SS*l,this._e=l}pose(e,t,n,i,r,a){let o=this.choreo[e],l=this.zustaende[e],c=Math.abs(r),h=this._e||0,u=o.x(t),f=o.x(t+Ms),d=o.x(t-Ms),m=o.dz(t),x=o.dz(t+Ms),g=(f-u)/Ms,p=(f-2*u+d)/(Ms*Ms),v=(x-m)/Ms,E=r/Lg,b=g*E,M=v*E;l.erst&&(l.vx=b,l.vz=M,l.erst=!1);let y=Ci(i,.3),S=(b-l.vx)/Math.max(i,.001),_=(M-l.vz)/Math.max(i,.001);l.ax+=(nt(S,-12,12)-l.ax)*y,l.az+=(nt(_,-25,25)-l.az)*y,l.vx=b,l.vz=M;let w=e===0?0:1.2*Math.sin(t*1.3+e*1.7)+.4*Math.sin(n*.21+e*2.1)*nt(c/5),C=Vt(m,TS[e]||0,h)+w*(1-h*.5);a.x=u,a.dz=C+this.vorsprung,a.vz=M;let I=Math.max(30,Lg+v),U=g/I;a.gier=Math.atan(U),a.kruemmung=p/(I*I)/Math.pow(1+U*U,1.5);let H=(l.az+this.beschl)*nt(c/6);a.nick=-nt(H/18,-1,1)*.016;let P=nt(a.kruemmung*c*c+l.ax*.3,-6,6);a.roll=P*.006;let D=nt(-l.az/2.5)*nt(c/6),k=nt(-this.beschl/10)*nt(c/6);a.brems=Math.max(D,k*.8);let z=(o.x(t+.08)-o.x(t+.08-Ms))/Ms,N=Math.abs(g)>.8?g:Math.abs(z)>.8?z:0;return a.blinker=N>0?"L":N<0?"R":null,a}}});function OS(){return qa||(qa=new lt(1,1),qa.translate(0,-.5,0),qa.rotateX(Math.PI/2),qa)}function GS(){if(pl)return pl;let s=document.createElement("canvas");s.width=256,s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(128,64,10,128,64,120);return t.addColorStop(0,"rgba(0,0,0,0.9)"),t.addColorStop(.45,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.scale(1,.5),e.fillStyle=t,e.fillRect(0,0,256,256),pl=new Lt(s),pl.colorSpace=qt,pl}function VS(){if(ml)return ml;let s=128,e=document.createElement("canvas");e.width=e.height=s;let t=e.getContext("2d"),n=t.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(255,255,255,0.75)"),n.addColorStop(.45,"rgba(255,255,255,0.35)"),n.addColorStop(.74,"rgba(255,255,255,0.95)"),n.addColorStop(.86,"rgba(255,255,255,0.3)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,s,s),ml=new Lt(e),ml.colorSpace=qt,ml}function Dg(s,e){let t=Vt(s.normal,s.brems,e);s.art==="basic"?s.m.color.copy(s.basis).multiplyScalar(t):s.m.emissiveIntensity=t}function WS(s,e){s.art==="basic"?s.m.color.setRGB(.35+e*8,.16+e*3.2,.05+e*.5,Rt):s.m.emissiveIntensity=e*LS}function Ng(s){if(s.isMeshPhysicalMaterial)return s.clone();let e=new sn({map:s.map||null,normalMap:s.normalMap||null,roughnessMap:s.roughnessMap||null,metalnessMap:s.metalnessMap||null,aoMap:s.aoMap||null});return s.normalScale&&e.normalScale.copy(s.normalScale),e}function Ug(s){for(let e of s)e.rotation.order="YXZ",e.userData.basis=e.position.clone()}var Ln,Or,wS,Es,RS,AS,CS,PS,IS,LS,dl,kS,ou,DS,FS,NS,rp,US,kg,zS,BS,HS,qa,pl,ml,Fg,lu,nr=pt(()=>{It();tp();Qn();wd();ri();rn();Js();sp();Ln=np,Or=[{modell:"auto_goblin",lack:1450810},{modell:"auto_coupe_suv",lack:9343899},{modell:"auto_cyber",lack:7214628},{modell:"auto_goblin",lack:14474720}],wS=Or.map(s=>s.lack),Es=1,RS=Or.length,AS=["auto_goblin","auto_coupe_suv","auto_cyber","auto_freq_caravan"],CS={99:"auto_coupe_suv",98:"auto_freq_caravan"},PS=[0,28,80],IS=7,LS=9,dl={farbe:[1,.025,.012],normal:1.4,brems:3.6},kS={farbe:[1,.02,.01],normal:0,brems:3.2},ou=[1.2,.03,.015],DS=[1,.035,.018],FS=160,NS=.044,rp=2*Math.PI*1.1,US=.55,kg=Xt.degToRad(25),zS=.6,BS=new R(0,0,1),HS=s=>new Ct({transparent:!0,blending:Nt,depthWrite:!1,depthTest:!0,side:Pt,fog:!1,uniforms:{farbe:{value:s},staerke:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    precision highp float;
    uniform vec3 farbe; uniform float staerke; varying vec2 vUv;
    void main(){ float l = pow(clamp(vUv.y, 0.0, 1.0), 1.9); float b = pow(clamp(1.0 - abs(vUv.x - 0.5) * 2.0, 0.0, 1.0), 1.6); float a = l * b * staerke;
      gl_FragColor = vec4(farbe * a, a);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),qa=null;pl=null;ml=null;Fg=()=>({hinten:[],brems:[],blinkerL:[],blinkerR:[]});lu=class{constructor(e,t){this.szene=e,this.envMap=t,this.flareT=$n(128),this.streakT=U0(256,32),this.autos=[],this.geparkt=[],this.bremse=0,this.sanftBremse=0,this.innenGlas=0,this.davonfahren=0,this.vorsprung=0,this.fertig=!1,this.eigeneModelle=!1,this.stufe={lod:0,lodWeite:1,lichter:6,schatten:!1,kegel:!0},this.stufeName="hoch",this._p=new R,this._z=new R,this._d=new R,this._q=new $t,this._k=new R,this._inv=new Fe,this._fuehrung=new R(Ln,0,0),this._fuehrungEcht=new R(Ln,0,0),this.abfahrt=null,this._ab={aktiv:!1,dz:0,licht:1,blinker:null,brems:0,x:0,y:0,z:0,gier:0,kruemmung:0,hang:0,roll:0,s:0},this._pose={x:Ln,dz:0,vz:0,gier:0,kruemmung:0,nick:0,roll:0,brems:0,blinker:null},this._weiten=[0,0,0],this.envMaterialien=[],this.fahrt=new au,this.vorlagen=[],this.spots=[],this._bremseAlt=0,this._pulsZeit=-1}async laden(e,t){let n=new Ga,i=null;try{i=await n.loadAsync(e)}catch(a){console.warn("Automodell fehlt, Ersatz",a),i=await n.loadAsync(t)}this.vorlageAlt=i.scene;let r=this.envMap;this.materialienAlt={Lack:a=>new sn({color:a,metalness:.75,roughness:.3,clearcoat:1,clearcoatRoughness:.05,envMap:r,envMapIntensity:1.6}),Glas:()=>new sn({color:395535,metalness:.9,roughness:.05,clearcoat:1,clearcoatRoughness:.03,envMap:r,envMapIntensity:2,transparent:!0,opacity:1}),Zierleiste:()=>new Ne({color:328966,roughness:.45,metalness:.2,envMap:r,envMapIntensity:.6}),Kunststoff:()=>new Ne({color:723982,roughness:.75,metalness:0}),Lampenglas:()=>new sn({color:460810,metalness:.6,roughness:.08,clearcoat:1,envMap:r,envMapIntensity:1.5}),Reifen:()=>new Ne({color:657931,roughness:.92}),Felge:()=>new Ne({color:6975094,roughness:.28,metalness:.95,envMap:r,envMapIntensity:1.2}),Bremse:()=>new Ne({color:3815996,roughness:.5,metalness:.9}),Chrom:()=>new Ne({color:12633290,roughness:.15,metalness:1,envMap:r,envMapIntensity:1.4}),Kennzeichen:()=>new Ne({color:14211288,roughness:.5}),Scheinwerfer:()=>new st({color:Ye(9,9.5,11)}),LED:()=>new st({color:Ye(6,7,9)}),Ruecklicht:()=>new st({color:Ye(...dl.farbe)}),RuecklichtBlock:()=>new st({color:Ye(...dl.farbe)}),Blinker:()=>new st({color:Ye(.35,.16,.05)})};for(let a=0;a<RS;a++)this.autos.push(this.autoBauen(wS[a],a,!0));this.fertig=!0}async ladeModelle(e,t){t&&t.stufe&&(this.stufe=t.stufe,this.stufeName=t.stufeName||this.stufeName);let n=nt(this.stufe.lod|0,0,2),i=[];for(let r of AS){let a=null;try{a=await Dr(e,r,n,n===0?0:2)}catch(o){console.warn("Automodell",r,o)}if(!a||!a.da){console.warn("Automodell fehlt, das Auto nimmt ein anderes Modell:",r);continue}try{i.push(this.vorlageBauen(a))}catch(o){console.warn("Automodell unbrauchbar",r,o)}}if(!i.length)return!1;this.vorlagen=i;for(let r=0;r<this.autos.length;r++)this.umbauen(this.autos[r],r,!0,!1);for(let r of this.geparkt)this.umbauen(r,r.kennzahl||99,!1,!0);return this.eigeneModelle=!0,!0}vorlageBauen(e){let n=e.stufen.find(I=>I).scene;n.updateMatrixWorld(!0);let i=new ln().setFromObject(n,!0),r=i.getSize(new R),a=i.getCenter(new R),o=r.z>.5?r.z:4.6,l=r.x>.3?r.x:1.9,c=r.y>.3?r.y:1.4,h=!/^auto_freq_/.test(e.name)&&(o<3.8||o>5.2)?4.6/o:1,u=-i.min.y*h,f=I=>{let U=null;return n.traverse(H=>{!U&&H.name===I&&(U=H)}),U},d=I=>I.set(-I.x*h,I.y*h+u,-I.z*h),m=(I,U)=>{let H=f(I),P=new R;return H?H.getWorldPosition(P):P.copy(U),d(P)},x={vornL:m("anker_licht_vorn_L",new R(a.x-l*.32,i.min.y+c*.42,i.min.z+.08)),vornR:m("anker_licht_vorn_R",new R(a.x+l*.32,i.min.y+c*.42,i.min.z+.08)),hintenL:m("anker_licht_hinten_L",new R(a.x-l*.33,i.min.y+c*.6,i.max.z-.06)),hintenR:m("anker_licht_hinten_R",new R(a.x+l*.33,i.min.y+c*.6,i.max.z-.06)),bremsMitte:f("anker_bremslicht_mitte")?m("anker_bremslicht_mitte",new R):null},g=f("anker_licht_vorn_L")||f("anker_licht_vorn_R"),p=new R(0,-.035,1);g&&(g.getWorldDirection(p),p.set(-p.x,p.y,-p.z),p.z<.5&&p.set(0,-.035,1)),p.normalize();let v=g&&g.userData&&g.userData.winkel?nt(+g.userData.winkel||60,20,120):60,E=g?Fa(g,16054527):new Ce(16054527),b=f("Rad_VL")||f("Rad_VR")||f("Rad_HL"),M=.35;if(b){let I=new R;b.getWorldPosition(I),M=Math.max(.22,(I.y-i.min.y)*h)}let y=(I,U,H)=>{let P=f(I),D=f(U);if(!P||!D)return H;let k=new R,z=new R;return P.getWorldPosition(k),D.getWorldPosition(z),d(k.add(z).multiplyScalar(.5)).z},S=y("Rad_HL","Rad_HR",-.3*o*h),_=y("Rad_VL","Rad_VR",.28*o*h),w=Math.max(.5,-S),C=nt(_-S,2,3.4);return{name:e.name,stufen:e.stufen,extras:e.extras,skal:h,dy:u,laenge:o*h,breite:l*h,hoehe:c*h,pos:x,richtung:p,winkel:v,farbe:E,radRadius:M,hinterachse:w,radstand:C}}vorlageFuer(e){let t=this.vorlagen.length;if(!t)return null;let n=CS[e]||Or[e]&&Or[e].modell;return this.vorlagen.find(i=>i.name===n)||this.vorlagen[e%t]}autoBauen(e,t,n=!0,i=null,r=!1){let a=this.vorlageFuer(t);i=i||new ot,i.rotation.order="YXZ";let o=a?this.autoNeu(a,e,t,n,i,r):this.autoAlt(e,t,n,i);return o.nickB=0,o.nickV=0,i.parent||this.szene.add(i),o}autoAlt(e,t,n,i){let r=this.vorlageAlt.clone(!0);r.rotation.y=Math.PI;let a={},o=[],l=[],c=[],h=[],u=Fg();r.traverse(d=>{if(d.isMesh){let m=d.material?.name||"Lack";if(m==="Blinker"){let x=/Blinker_[VH]L/.test(d.name)?"L":"R",g=this.materialienAlt.Blinker();g.name="Blinker",d.material=g,u["blinker"+x].push({m:g,art:"basic"}),h.push(g)}else{if(!a[m]){let x=this.materialienAlt[m]?this.materialienAlt[m](e):new Ne({color:3355443});x.name=m,a[m]=x,h.push(x),!n&&(m==="Scheinwerfer"||m==="LED"||m==="Ruecklicht"||m==="RuecklichtBlock")&&x.color.setRGB(.08,.08,.09),n&&(m==="Ruecklicht"||m==="RuecklichtBlock")&&u.hinten.push({m:x,art:"basic",basis:x.color.clone(),normal:dl.normal,brems:dl.brems}),"envMap"in x&&this.envMaterialien.push(x),m==="Lack"&&l.push(x),m==="Glas"&&c.push(x)}d.material=a[m]}d.layers.enable(Ut),d.frustumCulled=!1}d.name&&d.name.startsWith("Rad_")&&o.push(d)}),i.add(r),Ug(o);let f={g:i,modell:r,stufen:[r],lodAktiv:0,raeder:o,vorderraeder:o.filter(d=>/^Rad_V/.test(d.name)),radRadius:.35,radWinkel:0,leuchten:u,lackMats:l,glasMats:c,eigene:[r],eigeneMats:h,index:t,lack:e,bremsLicht:0,sw:[],rl:[],rotLicht:null,puls:null,laenge:4.9,breite:2,hinterachse:1.45,radstand:2.8,pos:{vornL:new R(.6,.65,2.4),vornR:new R(-.6,.65,2.4),hintenL:new R(.62,.9,-2.46),hintenR:new R(-.62,.9,-2.46),bremsMitte:null},richtung:new R(0,-.035,1).normalize(),winkel:60,farbeVorn:new Ce(16054527)};return this.ausstatten(f,n),f}autoNeu(e,t,n,i,r,a){let o=new ot;o.rotation.y=Math.PI,o.scale.setScalar(e.skal),o.position.y=e.dy;let l=Or[n]&&Or[n].modell===e.name&&Or[n].versatz||0;o.position.z=l;let c=new Map,h=[],u=[],f=[],d=[],m=Fg(),x=[null,null,null],g=a?e.stufen[1]?1:e.stufen[2]?2:0:-1,p=!!this.stufe.schatten;for(let b=0;b<3;b++){let M=e.stufen[b];if(!M||a&&b!==g)continue;let y=M.scene.clone(!0);y.traverse(S=>{if(S.isMesh){let w=(Array.isArray(S.material)?S.material:[S.material]).map(C=>this.materialFuerAuto(C,S,{lack:t,index:n,mitLichtern:i,matMap:c,eigeneMats:h,leuchten:m,lackMats:f,glasMats:d}));S.material=Array.isArray(S.material)?w:w[0]}S.name&&/^Rad_[VH][LR]$/.test(S.name)&&u.push(S)}),pd(y,{schattenWerfen:p&&n===0}),_s(y,{behalten:/^Rad_|^anker_/i}),y.visible=!1,o.add(y),x[b]=y}r.add(o),Ug(u);let v=nt(this.stufe.lod|0,0,2);for(;v<3&&!x[v];)v++;if(v>2)for(v=2;v>0&&!x[v];)v--;x[v]&&(x[v].visible=!0);let E={g:r,modell:o,stufen:x,lodAktiv:v,raeder:u,vorderraeder:u.filter(b=>/^Rad_V/.test(b.name)),radRadius:e.radRadius,radWinkel:0,leuchten:m,lackMats:f,glasMats:d,eigene:[o],eigeneMats:h,index:n,lack:t,bremsLicht:0,sw:[],rl:[],rotLicht:null,puls:null,laenge:e.laenge,breite:e.breite,hinterachse:e.hinterachse-l,radstand:e.radstand,versatz:l,pos:l?Object.fromEntries(Object.entries(e.pos).map(([b,M])=>[b,M&&M.clone().setZ(M.z+l)])):e.pos,richtung:e.richtung,winkel:e.winkel,farbeVorn:e.farbe};return this.ausstatten(E,i),E}materialFuerAuto(e,t,n){if(!e)return e;let i=e.name||"",r=i==="blinker"||/^blinker_/i.test(t.name||""),a=e.uuid,o=null;if(r&&(o=/^blinker_[vh]l$/i.test(t.name)?"L":/^blinker_[vh]r$/i.test(t.name)?"R":/_l$/i.test(t.name)?"L":"R",a+=":"+o),n.matMap.has(a))return n.matMap.get(a);let l=e,c=n.mitLichtern;if(i==="Lack")l=this.lackMaterial(e,n.lack,n.index===0),n.lackMats.push(l);else if(i==="Glas")l=this.glasMaterial(e,n.index===0),n.glasMats.push(l);else if(i==="Chrom"||i==="Felge"||i==="Rad")l=e.clone(),l.envMap=this.envMap,l.envMapIntensity=1.3,this.envMaterialien.push(l);else if(i==="Kunststoff"&&e.map)l=e.clone(),l.color.setRGB(.42,.43,.46),l.roughness=Math.max(l.roughness,.6);else if(r)l=e.clone(),l.emissive.setRGB(1,.45,.1),l.emissiveMap=null,l.emissiveIntensity=0,n.leuchten["blinker"+o].push({m:l,art:"emissiv"});else if(i==="licht_vorn")l=e.clone(),l.emissive.getHex()===0&&l.emissive.setRGB(1,.97,.92),l.emissiveIntensity=c?IS:0;else if(i==="licht_hinten"||i==="bremslicht"){let h=i==="licht_hinten"?dl:kS;l=e.clone(),l.emissive.setRGB(...h.farbe,Rt),l.emissiveMap=null;let u={m:l,art:"emissiv",normal:c?h.normal:0,brems:c?h.brems:0};l.emissiveIntensity=u.normal,n.leuchten[i==="licht_hinten"?"hinten":"brems"].push(u)}else return n.matMap.set(a,e),e;return l.name=i,n.matMap.set(a,l),n.eigeneMats.push(l),l}lackMaterial(e,t,n){let i=Ng(e);i.color.setHex(t);let r=i.color.r+i.color.g+i.color.b>1.2;return i.metalness=r?.35:.75,i.roughness=r?.34:.3,i.clearcoat=1,i.clearcoatRoughness=.05,i.envMap=this.envMap,i.envMapIntensity=1.6,i.transmission=0,i.transparent=!1,i.opacity=1,i.side=n?Pt:Zn,this.envMaterialien.push(i),i}glasMaterial(e,t){let n=Ng(e);return n.color.setHex(395535),n.map=null,n.alphaMap=null,n.metalness=.9,n.roughness=.05,n.clearcoat=1,n.clearcoatRoughness=.03,n.envMap=this.envMap,n.envMapIntensity=2,n.transmission=0,n.transparent=!0,n.opacity=1,n.depthWrite=!0,n.side=t?Pt:Zn,this.envMaterialien.push(n),n}ausstatten(e,t){let{g:n,pos:i}=e,r=new ne(new lt(e.laenge+.7,e.breite+.6),new st({map:GS(),transparent:!0,depthWrite:!1,color:0,opacity:.85}));if(r.rotation.order="ZXY",r.rotation.x=-Math.PI/2,r.position.set(0,.012,e.versatz||0),r.renderOrder=1,n.add(r),e.eigene.push(r),e.schatten=r,!t)return;let a=e.richtung;for(let h of[i.vornL,i.vornR]){let u=new kt(.09,2.8,26,20,1,!0);u.rotateX(-Math.PI/2),u.translate(0,0,13);let f=new ne(u,Td(new Ce().setRGB(.9,.97,1.1,Rt),.07,[0,0,0],1.2,4));f.position.copy(h),f.quaternion.setFromUnitVectors(BS,a),f.frustumCulled=!1,f.visible=this.stufe.kegel!==!1,n.add(f);let d=new Dn(new Cn({map:this.flareT,color:Ye(2.6,2.7,3),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));d.position.copy(h).addScaledVector(a,.03);let m=new Dn(new Cn({map:this.streakT,color:Ye(1.6,1.8,2.4),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));m.position.copy(d.position),d.layers.enable(Ut),n.add(d,m),e.sw.push({fl:d,st:m,kg:f}),e.eigene.push(f,d,m)}for(let h of[i.hintenL,i.hintenR]){let u=new Dn(new Cn({map:this.flareT,color:Ye(...ou),blending:Nt,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1}));u.position.copy(h),u.layers.enable(Ut),n.add(u);let f=new ne(OS(),HS(new Ce().setRGB(...DS,Rt)));f.position.copy(h),f.scale.x=.24,f.frustumCulled=!1,f.layers.enable(Ut),n.add(f),e.rl.push({fl:u,basis:h.clone(),spur:f}),e.eigene.push(u,f)}if(e.index!==0)return;let o=(this.stufe.lichter|0)>0,l=new Fn(16718348,4,12,2);l.position.set((i.hintenL.x+i.hintenR.x)/2,(i.hintenL.y+i.hintenR.y)/2,Math.min(i.hintenL.z,i.hintenR.z)-.25),l.visible=o,n.add(l),e.rotLicht=l,e.eigene.push(l);let c=new Dn(new Cn({map:VS(),color:Ye(2.6,.05,.025),blending:Nt,depthWrite:!1,depthTest:!0,transparent:!0,fog:!1,opacity:0}));c.position.set(l.position.x,l.position.y,l.position.z-.15),c.visible=!1,c.renderOrder=2,n.add(c),e.puls=c,e.eigene.push(c),this.spots=[];for(let h of[i.vornL,i.vornR]){let u=new gs(e.farbeVorn,FS,45,Xt.degToRad(e.winkel/2),.5,2);u.position.copy(h),u.target.position.copy(h).addScaledVector(a,30),u.target.position.y-=.4,u.visible=o,u.castShadow=!1,u.shadow.mapSize.set(1024,1024),u.shadow.camera.near=.5,u.shadow.camera.far=45,u.shadow.bias=-4e-4,u.shadow.normalBias=.02,n.add(u,u.target),this.spots.push(u),e.eigene.push(u,u.target)}}umbauen(e,t,n,i){let r=e.g;for(let l of e.eigene)r.remove(l);let a=new Set(e.eigeneMats);this.envMaterialien=this.envMaterialien.filter(l=>!a.has(l));for(let l of e.eigeneMats)l&&l.dispose&&l.dispose();let o=this.autoBauen(e.lack,t,n,r,i);Object.assign(e,o)}parkendesAuto(e,t,n,i=99){let r=this.autoBauen(e,i,!1,null,!0);return r.kennzahl=i,r.g.position.copy(t),r.g.rotation.y=n,r.g.updateMatrixWorld(),this.geparkt.push(r),r}setzeEnv(e){this.envMap=e;for(let t of this.envMaterialien)t.envMap=e,t.needsUpdate=!0}setzeStufe(e,t){if(!e)return;this.stufe=e,this.stufeName=t||this.stufeName;let n=(e.lichter|0)>0;for(let r of this.spots)r.visible=n,r.castShadow=!1;let i=!!e.schatten;for(let r of[...this.autos,...this.geparkt]){r.rotLicht&&(r.rotLicht.visible=n);for(let{kg:a}of r.sw)a.visible=e.kegel!==!1;for(let a of r.stufen)a&&a.traverse(o=>{o.isMesh&&(o.castShadow=i&&r.index===0)})}}lodWaehlen(e,t,n){if(e.stufen.length<2)return;let i=e.lodAktiv;for(;i<2&&t>n[i+1];)i++;for(;i>0&&t<n[i]*.8;)i--;let r=nt(this.stufe.lod|0,0,2);i<r&&(i=r);let a=i;for(;a<3&&!e.stufen[a];)a++;if(a>2)for(a=i;a>=0&&!e.stufen[a];)a--;if(!(a<0||a===e.lodAktiv)){for(let o of e.stufen)o&&(o.visible=!1);e.stufen[a].visible=!0,e.lodAktiv=a}}update(e,t,n,i,r,a,o=0){if(!this.fertig)return;let l=Math.abs(i),c=r.position,h=this.stufe,u=this.fahrt;u.beginne(o,e,t,i,this.davonfahren),this.davonfahren=0,this.vorsprung=u.vorsprung;let f=Vt(1.6,22,nt(l/45)),d=Vt(.25,.7,nt(l/30)),m=Math.floor(e*3)%2===0?1:.12,x=Math.floor(e*2.6)%2===0?1:.12,g=this._weiten;for(let y=0;y<3;y++)g[y]=PS[y]*(h.lodWeite||1);let p=nt(l/20),v=this.bremse;v>.2&&this._bremseAlt<=.2?this._pulsZeit=0:this._pulsZeit>=0&&(this._pulsZeit+=t),v<.02&&(this._pulsZeit=-1),this._bremseAlt=v;let E=Math.min(t,.05);for(let y=0;y<this.autos.length;y++){let S=this.autos[y],_=u.pose(y,o,e,t,i,this._pose),w=.1*Math.sin(2*Math.PI*.42*e+y*1.9)*p+.02*Math.sin(2*Math.PI*.9*e+y),C=_.gier+.012*Math.cos(2*Math.PI*.42*e+y)*p,I=.012*Math.sin(2*Math.PI*2.3*e+y)*p,U=n+_.dz-S.hinterachse;S.g.position.set(_.x+w+S.hinterachse*Math.sin(C),I,U+S.hinterachse*Math.cos(C)),S.g.rotation.y=C;let H=_.roll-.01*Math.cos(2*Math.PI*.42*e+y)*p,P=0;if(y===0){this._fuehrung.set(S.g.position.x,S.g.position.y,S.g.position.z-this.vorsprung);let ce=this.abfahrt?this.abfahrt.pose(o,U,l,this._ab):null;if(ce&&ce.aktiv){let ye=ce.gier+.012*Math.cos(2*Math.PI*.42*e)*p;S.g.position.set(ce.x+w*Math.cos(ye)+S.hinterachse*Math.sin(ye),ce.y+I,ce.z-w*Math.sin(ye)+S.hinterachse*Math.cos(ye)),S.g.rotation.y=ye,P=ce.hang,H+=ce.roll,_.kruemmung=ce.kruemmung}else ce&&ce.dz&&(S.g.position.z+=ce.dz);ce&&(ce.blinker&&(_.blinker=ce.blinker),_.brems=Math.max(_.brems,ce.brems)),a.uniforms.scheinwerferStaerke.value=ce?ce.licht:1}S.g.rotation.z=H;let D=Math.max(_.brems,this.sanftBremse*.7,v);S.bremsLicht+=(D-S.bremsLicht)*nt(t*8);let k=NS*v*(y===0?1:.85);S.nickV+=(rp*rp*(k-S.nickB)-2*US*rp*S.nickV)*E,S.nickB+=S.nickV*E;let z=_.nick+S.nickB;S.g.rotation.x=z-P,S.schatten.rotation.set(-Math.PI/2-z,0,-H);let N=y===0&&v>.3;for(let ce of["L","R"]){let ye=N?x:_.blinker===ce?m:0;for(let Xe of S.leuchten["blinker"+ce])WS(Xe,ye)}S.radWinkel+=(i+_.vz)*t/S.radRadius;let F=nt(Math.atan(S.radstand*_.kruemmung),-kg,kg);for(let ce of S.raeder){let ye=ce.userData.basis;ce.rotation.x=-S.radWinkel,ce.position.y=ye.y-(ye.z-(S.versatz||0))*z+ye.x*H}for(let ce of S.vorderraeder)ce.rotation.y=F;S.g.updateMatrixWorld(),this.lodWaehlen(S,S.g.position.distanceTo(c),g);let V=this._d.set(0,0,1).applyQuaternion(S.g.getWorldQuaternion(this._q));for(let{fl:ce,st:ye,kg:Xe}of S.sw){ce.getWorldPosition(this._p);let ie=this._z.copy(c).sub(this._p),oe=ie.length();ie.normalize();let Te=Math.max(0,ie.dot(V)),De=Xt.smoothstep(oe,2.5,16),Re=Math.pow(Te,5)*De,Ge=.32+oe*.02;ce.scale.set(Ge,Ge,1),ce.material.opacity=Math.min(1,Re*.95),ye.scale.set(Ge*5*(.4+Te),Ge*.3,1),ye.material.opacity=Math.min(1,Re*.5),Xe.material.uniforms.staerke.value=.075*Xt.smoothstep(oe,2,14),Xe.material.uniforms.zeit.value=e,Xe.material.uniforms.kamera.value.copy(c)}let j=1+S.bremsLicht*1.4,ae=this._inv.copy(S.g.matrixWorld).invert(),he=this._k.copy(c).applyMatrix4(ae);for(let{fl:ce,basis:ye,spur:Xe}of S.rl){this._p.copy(ye).applyMatrix4(S.g.matrixWorld);let ie=this._z.copy(c).sub(this._p),oe=ie.length();ie.normalize();let Te=Math.max(0,-ie.dot(V));this._p.addScaledVector(ie,Math.min(.3,oe*.5)),ce.position.copy(this._p).applyMatrix4(ae);let De=(.09+oe*.0025)*(1+S.bremsLicht*.4);ce.scale.set(De,De,1),ce.material.color.setRGB(ou[0]*j,ou[1]*j,ou[2]*j,Rt),ce.material.opacity=Math.min(1,Math.pow(Te,1.5)*.55*Xt.smoothstep(oe,.6,2.5)),Xe.rotation.z=Math.atan2(-(he.x-ye.x),he.y-ye.y),Xe.scale.z=f,Xe.material.uniforms.staerke.value=d*j}for(let ce of S.leuchten.hinten)Dg(ce,S.bremsLicht);for(let ce of S.leuchten.brems)Dg(ce,S.bremsLicht);if(y===0){if(S.rotLicht&&(S.rotLicht.intensity=1.6+S.bremsLicht*9),S.puls){let ce=this._pulsZeit>=0?this._pulsZeit/zS:2,ye=ce<1?Math.min(1,ce/.12)*Math.pow(1-ce,1.6):0;S.puls.visible=ye>.005;let Xe=.8+2.4*(1-Math.pow(1-Math.min(ce,1),2.2));S.puls.scale.set(Xe,Xe,1),S.puls.material.opacity=ye*.5}for(let ce of S.glasMats)ce.opacity=1-this.innenGlas*.72,ce.envMapIntensity=2*(1-this.innenGlas),ce.clearcoat=Math.max(.02,1-this.innenGlas),ce.roughness=.05+this.innenGlas*.6,ce.metalness=.9-this.innenGlas*.8}}let b=this.autos[0],M=a.uniforms.scheinwerfer.value;M[0].copy(b.pos.vornL).applyMatrix4(b.g.matrixWorld),M[1].copy(b.pos.vornR).applyMatrix4(b.g.matrixWorld),a.uniforms.scheinwerferRichtung.value.set(0,-.06,1).applyQuaternion(b.g.getWorldQuaternion(this._q)).normalize(),this._fuehrungEcht.set(b.g.position.x,b.g.position.y,b.g.position.z-this.vorsprung)}get fuehrung(){return this._fuehrung}get fuehrungEcht(){return this._fuehrungEcht}get zweites(){let e=null,t=-1e9,n=this.autos[0].g.position.z;for(let i=1;i<this.autos.length;i++){let r=this.autos[i],a=r.g.position.z;this.imConvoy(r)&&a<n&&a>t&&(t=a,e=r)}return e||this.autos[0]}get letztes(){let e=null,t=1e9;for(let n=1;n<this.autos.length;n++){let i=this.autos[n],r=i.g.position.z;this.imConvoy(i)&&r<t&&(t=r,e=i)}return e||this.autos[0]}imConvoy(e){let t=e.g.position,n=this.autos[0].g.position;return e.g.visible!==!1&&Math.abs(t.z-n.z)<200&&Math.abs(t.x)<30}}});var cu,hu,gl,zg=pt(()=>{It();Qn();cu=class{constructor(e,t,n){this.anzahl=t;let i=new Float32Array(t*2*3),r=new Float32Array(t*2),a=new Float32Array(t*2);for(let c=0;c<t;c++){let h=n()*60-30,u=n()*30,f=n()*70-35,d=n();for(let m=0;m<2;m++)i[(c*2+m)*3]=h,i[(c*2+m)*3+1]=u,i[(c*2+m)*3+2]=f,r[c*2+m]=m,a[c*2+m]=d}let o=new ht;o.setAttribute("position",new ct(i,3)),o.setAttribute("ende",new ct(r,1)),o.setAttribute("phase",new ct(a,1)),this.uniforms={zeit:{value:0},mitte:{value:new R},staerke:{value:1},wind:{value:0},laenge:{value:.5}};let l=new Ct({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
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
        }`});this.mesh=new vr(o,l),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n){this.uniforms.zeit.value=e,this.uniforms.mitte.value.copy(t),this.uniforms.staerke.value=n,this.mesh.visible=n>.01}setzeAnzahl(e){this.mesh.geometry.setDrawRange(0,Math.min(this.anzahl,e)*2)}},hu=class{constructor(e,t,n){this.anzahl=t;let i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++)i[l*3]=n()*80-40,i[l*3+1]=n()*30,i[l*3+2]=n()*90-45,r[l]=n();let a=new ht;a.setAttribute("position",new ct(i,3)),a.setAttribute("phase",new ct(r,1)),this.uniforms={zeit:{value:0},mitte:{value:new R},staerke:{value:0},t:{value:$n(64)},dpr:{value:1}};let o=new Ct({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
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
        }`});this.mesh=new Hs(a,o),this.mesh.frustumCulled=!1,e.add(this.mesh)}update(e,t,n,i){this.uniforms.zeit.value=e,this.uniforms.mitte.value.copy(t),this.uniforms.staerke.value=n,this.uniforms.dpr.value=i,this.mesh.visible=n>.01}},gl=class{constructor(e,t,n){let i=new Float32Array(t*3),r=new Float32Array(t);for(let l=0;l<t;l++){let c=6+n()*30,h=n()*Math.PI*2,u=n()*2-1;i[l*3]=Math.cos(h)*c,i[l*3+1]=u*14,i[l*3+2]=Math.sin(h)*c,r[l]=n()}let a=new ht;a.setAttribute("position",new ct(i,3)),a.setAttribute("phase",new ct(r,1)),this.uniforms={zeit:{value:0},staerke:{value:0},t:{value:$n(64)},dpr:{value:1}};let o=new Ct({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:`
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
        }`});this.mesh=new Hs(a,o),this.mesh.frustumCulled=!1,this.mesh.visible=!1,e.add(this.mesh)}update(e,t,n,i){this.uniforms.zeit.value=e,this.uniforms.staerke.value=n,this.uniforms.dpr.value=i,this.mesh.position.copy(t),this.mesh.visible=n>.01}}});function Gg(s=.01){let e=(u,f)=>Bg[u[0]]&&Bg[u[0]][f]||u[f+1],t=Nr(uu.map(u=>[u[0],e(u,0)])),n=Nr(uu.map(u=>[u[0],e(u,1)])),i=uu[uu.length-1][0],r=new R,a=new R,o=[],l=ai(tr[0].dz),c=tr.map(u=>ai(u.x)),h=tr.map(u=>ai(u.dz));for(let u=0;u<=i+1e-6;u+=s){t(u,r),n(u,a);let f=u*150+l(u),d=tr.map((m,x)=>[c[x](u),1.2,u*150+h[x](u)]);o.push({g:u,p:[r.x,r.y,r.z+f],z:[a.x,a.y,a.z+f],autos:d})}return o}var bl,Hg,qS,XS,Og,ir,uu,KS,jS,Bg,fu,Vg=pt(()=>{It();rn();nr();sp();bl=([s,e,t,n,i])=>[s,[Ln+(e[0]-Ln)*Es,e[1]*Es,e[2]*Es],[Ln+(t[0]-Ln)*Es,t[1]*Es,t[2]*Es],n,i],Hg=[[0,[2.9,1.5,30],[-1.6,.5,-3],42,0],[.3,[3.2,.9,14],[-1.6,.72,-2],48,0],[.5,[3.9,.86,2.5],[-1.75,.72,-5],70,-5],[.7,[3.2,1.8,-38],[-.5,.9,-64],54,2],[.85,[2,2.8,-100],[-1,.8,-126],52,0],[1,[-1,8,-168],[20,2,-200],50,0],[1.12,[-3,17,-178],[36,4,-176],50,0],[1.24,[1,25,-172],[14,2,-128],50,0],[1.3,[4,30,-168],[10,2,-100],50,0],[1.38,[7,34,-165],[-1.2,0,-55],50,0],[1.7,[-12,40,-185],[-.5,0,-60],46,0],[2,[-8.5,6,-22],[-1.75,1,0],50,0],[2.3,[-8.5,6.5,-18],[-3.2,.8,4],52,0],[2.7,[-8.5,6.5,-66],[-3.2,.8,-44],52,0],[2.88,[-4,5,-50],[-2.5,1,-10],54,0],[3,[3.6,1.4,-12],[-1.75,1,18],54,0],[3.25,[3.2,2.3,-10],[-1.75,1.5,14],56,0],[3.55,[3.4,2,-7],[-2.8,1.6,22],54,0],[3.8,[3.4,3.2,-60],[-1.75,1,-12],50,0],[3.92,[3,3,-55],[-1.75,1,-10],50,0],[4,[1.4,3.8,-30],[-1.75,1,10],50,0]],qS=[[4.3,[1.5,3.2,-26],[-3.5,1.4,30],50,0],[4.7,[5,2.6,2],[-5,1.2,46],56,0],[5,[-5,6,-12],[-1.75,2,34],48,0]],XS=[[4.3,[1.5,3.2,-26],[-3.5,1.4,30],50,0,{hoch:[[.6,4.2,-17],[-2,0,-5.1]]}],[4.5,[-.6,3.6,-19],[-7.6,.2,6],52,0,{hoch:[[-3.4,4.4,-16.5],[-5.4,0,-3.9]]}],[4.72,[-1,3.4,-22],[-8.6,.2,4],52,0,{hoch:[[-3.8,4.4,-20.5],[-5.9,0,-7.9]]}],[4.92,[-1.2,4.4,-27],[-10.8,.2,-2],52,0,{hoch:[[-4.6,4.6,-24.5],[-7.4,0,-11.4]]}],[5.08,[-2.5,7.5,-30],[-9,4,6],50,0,{hoch:[[-3.5,8,-30],[-7.5,3,-4]]}]],Og=[[5.3,[-4,14,-36],[1,24,60],46,0],[5.55,[3,3.2,2],[-2.6,5.2,24],54,0],[5.85,[2.2,3,-5],[-7.4,3.3,14],52,0],[6,[6.5,3,-16],[-4,1.5,20],52,0],[6.25,[9,7.5,-40],[-12,1.5,6],60,0],[6.55,[-6.5,3.4,-9],[-14,1.3,9],58,0],[6.72,[-6,4.2,8],[-12,1.5,30],58,0],[6.86,[-2,3.5,20],[-4,1.2,52],56,0],[7,[-1.3,1.55,-6.5],[-1.6,1,12],54,0],bl([7.07,[-1.48,1,.1],[-2.05,.8,2.4],70,0]),bl([7.18,[-1.48,.99,.1],[-2.05,.78,1.9],68,0]),bl([7.4,[-1.49,.97,.14],[-1.64,.79,.56],58,0]),bl([7.62,[-1.49,.97,.14],[-1.64,.79,.56],58,0]),bl([7.75,[-1.46,.98,.12],[-1.75,.86,10],60,0]),[7.9,[-.9,1.25,3.4],[-.3,1.5,30],58,0],[8,[1.5,2.8,-6],[-3,2.2,40],56,0],[8.08,[-.5,2.6,4],[-12,1.4,28],56,0],[8.17,[1.5,3.4,-2],[-12,1.2,14.5],54,0],[8.26,[3.2,4.6,-9],[-12,1,1],54,0],[8.36,[1.5,3.4,-10],[-3,2.4,40],54,0],[8.45,[2.5,6.5,-24],[-1.75,1.5,60],50,0],[8.62,[.5,24,-46],[-1.75,8,70],48,0],[8.82,[0,54,-50],[0,64,60],48,0],[9,[0,74,-40],[0,116,50],46,0]],ir=[...Hg,...XS,...Og],uu=[...Hg,...qS,...Og],KS=s=>s[5]&&s[5].hoch?s[5].hoch[1]:[Ln+(s[2][0]-Ln)*.55,s[2][1],s[2][2]],jS=s=>s[5]&&s[5].hoch?s[5].hoch[0]:s[1],Bg={5.55:[null,[-11,1.6,24]],5.85:[null,[-5,3.2,14]],8.08:[null,[-10.5,4,27]],8.17:[[-2.6,3,9],[-9.5,4,32]],8.26:[[-1,3.2,2],[-6,3,36]]};fu=class{constructor(e){this.kamera=e,this.pos=Nr(ir.map(t=>[t[0],t[1]])),this.ziel=Nr(ir.map(t=>[t[0],t[2]])),this.posHoch=Nr(ir.map(t=>[t[0],jS(t)])),this.zielHoch=Nr(ir.map(t=>[t[0],KS(t)])),this.fovH=ai(ir.map(t=>[t[0],t[3]])),this.roll=ai(ir.map(t=>[t[0],t[4]])),this.maus=new Ee,this.mausIst=new Ee,this.anker=null,this.ankerMisch=0,this._p=new R,this._z=new R,this._f=new R,this.gMax=ir[ir.length-1][0]}update(e,t,n,i,r){let a=this.kamera,o=Math.min(this.gMax,Math.max(0,e));if(n<.9?(this.posHoch(o,this._p),this.zielHoch(o,this._z)):(this.pos(o,this._p),this.ziel(o,this._z)),this._f.set(t.x-Ln,0,t.z),this.anker&&this.ankerMisch>0){let d=Math.min(1,this.ankerMisch);this._f.x+=(this.anker.x-Ln-this._f.x)*d,this._f.z+=(this.anker.z-this._f.z)*d}this._p.add(this._f),this._z.add(this._f),this._p.y+=.04*Math.sin(r*.9),this._p.x+=.03*Math.sin(r*.7+1);let l=1-ut(o,6.96,7.06,7.78,7.9);this.mausFrei=l;let c=Ci(i,.35);this.mausIst.x+=(this.maus.x*l-this.mausIst.x)*c,this.mausIst.y+=(this.maus.y*l-this.mausIst.y)*c,a.position.copy(this._p),a.up.set(0,1,0),a.lookAt(this._z);let h=this.fovH(o);a.fov=2*Math.atan(Math.tan(Xt.degToRad(h)/2)/n)*180/Math.PI,a.fov=Math.min(72,Math.max(28,a.fov)),a.updateProjectionMatrix(),a.rotateZ(Xt.degToRad(this.roll(o)));let u=this.mausIst.x*l,f=this.mausIst.y*l;a.rotateY(-u*.028),a.rotateX(-f*.02),a.translateX(u*.18),a.translateY(-f*.1),a.updateMatrixWorld()}}});var du,pu,mu=pt(()=>{It();du=class{constructor(e={}){this.uniforms={a:{value:new R},b:{value:new R},c:{value:new R},breite:{value:e.breite||.6},zeit:{value:0},fluss:{value:e.fluss?1:0},hoehe:{value:e.hoehe||.06},farbe:{value:e.farbe||new Ce(.17,.72,.89)},staerke:{value:1},laenge:{value:60},...Cr.clone(ke.fog)};let t=e.additiv!==!1;this.material=new Ct({uniforms:this.uniforms,transparent:!0,depthWrite:!t,side:Pt,fog:!0,blending:t?Nt:Xs,vertexShader:`
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
        }`,defines:{ADDITIV:t?1:0}});let n=new lt(1,1,e.segmente||48,1);this.mesh=new ne(n,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t?5:1}setze(e,t,n){this.uniforms.a.value.copy(e),this.uniforms.b.value.copy(t),this.uniforms.c.value.copy(n),this.uniforms.laenge.value=e.distanceTo(t)+t.distanceTo(n)}},pu=class{constructor(e,t={}){let n=e.length,i=(t.breite||.7)/2,r=t.hoehe??.08,a=new Float32Array(n*6),o=new Float32Array(n*4),l=[];for(let u=0;u<n;u++){let f=e[u],d=e[Math.max(0,u-1)],m=e[Math.min(n-1,u+1)],x=Math.hypot(m.x-d.x,m.z-d.z)||1,g=(m.z-d.z)/x,p=-(m.x-d.x)/x;if(a.set([f.x+g*i,f.y+r,f.z+p*i,f.x-g*i,f.y+r,f.z-p*i],u*6),o.set([f.s,0,f.s,1],u*4),u<n-1){let v=u*2;l.push(v,v+1,v+2,v+1,v+3,v+2)}}let c=new ht;c.setAttribute("position",new ct(a,3)),c.setAttribute("uv",new ct(o,2)),c.setIndex(l);let h=e[n-1].s;this.uniforms={farbe:{value:t.farbe||new Ce(.17,.72,.89)},zeit:{value:0},staerke:{value:1},ab:{value:e[0].s},ende:{value:new Ee(h-(t.endeWeich??40),h)},...Cr.clone(ke.fog)},this.material=new Ct({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Pt,fog:!0,blending:Nt,vertexShader:`
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
        }`}),this.mesh=new ne(c,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5}}});function Xg(s){let e=new Lt(s);return e.colorSpace=at,e.anisotropy=4,e.minFilter=en,e}function xl(s,e,t){return s.userData.varianten=e.map((n,i)=>{if(i===0)return{map:s.material.map,skala:s.scale.clone()};let r=t(n),a={map:r.material.map,skala:r.scale.clone()};return r.material.dispose(),a}),s.userData.varianteNr=0,s}function vl(s,e){let t=s.userData.varianten;return t?(e=Math.max(0,Math.min(t.length-1,e|0)),s.userData.varianteNr!==e&&(s.userData.varianteNr=e,s.material.map=t[e].map,s.material.needsUpdate=!0,s.userData.grundSkala=t[e].skala.clone()),t[e].skala):s.scale}function _l(s,e,t={}){let n=Xg(s),i=new Cn({map:n,transparent:!0,depthWrite:!1,depthTest:t.depthTest!==!1,fog:!1,opacity:1}),r=new Dn(i);return r.scale.set(e*s.width/s.height,e,1),r.renderOrder=10,r}function Xa(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.lineTo(e+n-r,t),s.arcTo(e+n,t,e+n,t+r,r),s.lineTo(e+n,t+i-r),s.arcTo(e+n,t+i,e+n-r,t+i,r),s.lineTo(e+r,t+i),s.arcTo(e,t+i,e,t+i-r,r),s.lineTo(e,t+r),s.arcTo(e,t,e+r,t,r),s.closePath()}function vn(s,e={}){let t=e.hoehe||.5,n=2,i=34*n,r=22*n,a=e.punkt?14*n:0,o=64*n,l=document.createElement("canvas").getContext("2d");l.font=`600 ${i}px ${it}`;let h=Math.ceil(l.measureText(s).width)+r*2+(a?a+10*n:0),u=document.createElement("canvas");u.width=h+8*n,u.height=o+8*n;let f=u.getContext("2d");f.translate(4*n,4*n),Xa(f,0,0,h,o,o/2),f.fillStyle=e.hintergrund||"rgba(28,28,30,0.94)",f.fill(),f.lineWidth=2*n,f.strokeStyle=e.rand||"rgba(255,255,255,0.16)",f.stroke();let d=r;return e.punkt&&(f.fillStyle=e.punkt==="rot"?qg:e.punkt==="gruen"?"#30d158":e.punkt==="orange"?"#ff9f0a":Wg,f.beginPath(),f.arc(d+a/2,o/2,a/2,0,Math.PI*2),f.fill(),d+=a+10*n),f.font=`600 ${i}px ${it}`,f.fillStyle=e.farbe||"#ffffff",f.textBaseline="middle",f.fillText(s,d,o/2+1*n),_l(u,t,e)}function ap(s,e,t={}){let n=t.hoehe||.9,i=2,r=36*i,a=28*i,o=24*i,l=14*i,c=104*i,h=document.createElement("canvas").getContext("2d");h.font=`700 ${r}px ${it}`;let u=h.measureText(s).width;h.font=`400 ${a}px ${it}`;let f=h.measureText(e).width,d=Math.ceil(Math.max(u,f))+o*2+l+12*i,m=document.createElement("canvas");m.width=d+8*i,m.height=c+8*i;let x=m.getContext("2d");x.translate(4*i,4*i),Xa(x,0,0,d,c,22*i),x.fillStyle=t.hintergrund||"rgba(28,28,30,0.95)",x.fill(),x.lineWidth=2*i,x.strokeStyle=t.rand||"rgba(255,255,255,0.16)",x.stroke(),x.fillStyle=t.punkt==="rot"?qg:t.punkt==="orange"?"#ff9f0a":Wg,x.beginPath(),x.arc(o+l/2,c/2,l/2,0,Math.PI*2),x.fill();let g=o+l+12*i;return x.fillStyle="#ffffff",x.textBaseline="middle",x.font=`700 ${r}px ${it}`,x.fillText(s,g,c*.34),x.fillStyle="rgba(235,235,245,0.78)",x.font=`400 ${a}px ${it}`,x.fillText(e,g,c*.72),_l(m,n,t)}function Kg(s,e=.9){let n=document.createElement("canvas");n.width=n.height=256;let i=n.getContext("2d");return i.beginPath(),i.arc(256/2,256/2,256/2-4,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=26,i.strokeStyle="#d0021b",i.beginPath(),i.arc(256/2,256/2,256/2-17,0,Math.PI*2),i.stroke(),i.fillStyle="#101010",i.font=`700 ${256*.42}px ${it}`,i.textAlign="center",i.textBaseline="middle",i.fillText(String(s),256/2,256/2+256*.02),_l(n,e)}function jg(s,e,t=1.3,n=.62,i=!1){let a=document.createElement("canvas");a.width=a.height=320;let o=a.getContext("2d");o.beginPath(),o.arc(320/2,320/2,320/2-6,0,Math.PI*2),o.fillStyle="rgba(28,28,30,0.94)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(255,255,255,0.16)",o.stroke();let l=320/2-18,c=Math.PI*.75,h=Math.PI*2.25;o.lineCap="round",o.lineWidth=9,o.strokeStyle="rgba(255,255,255,0.12)",o.beginPath(),o.arc(320/2,320/2,l,c,h),o.stroke(),o.strokeStyle=i?"#ff6961":"#ffffff",o.beginPath(),o.arc(320/2,320/2,l,c,c+(h-c)*n),o.stroke(),o.fillStyle=i?"#ff6961":"#ffffff",o.font=`700 ${320*.34}px ${it}`,o.textAlign="center",o.textBaseline="middle",o.fillText(String(s),320/2,320/2-320*.03);let u=typeof e=="object",f=u?e.text:e;return o.fillStyle=u?"#ff6961":"rgba(235,235,245,0.75)",o.font=`${u?600:400} ${320*(u?.12:.1)}px ${it}`,o.fillText(f,320/2,320/2+320*.2),_l(a,t)}function Yg(s,e=.5){let o=document.createElement("canvas").getContext("2d");o.font=`600 68px ${it}`;let c=Math.ceil(o.measureText(s).width)+88+88+24,h=document.createElement("canvas");h.width=c+16,h.height=144;let u=h.getContext("2d");u.translate(8,8),Xa(u,0,0,c,128,128/2),u.fillStyle="rgba(28,28,30,0.94)",u.fill(),u.lineWidth=4,u.strokeStyle="rgba(255,255,255,0.16)",u.stroke();let f=44,d=128/2-22,m=72,x=44;return u.lineWidth=2.5*2,u.strokeStyle="rgba(255,255,255,0.8)",Xa(u,f,d,m,x,10),u.stroke(),u.fillStyle="rgba(255,255,255,0.8)",u.fillRect(f+m+6,d+12,8,x-24),u.fillStyle="#ff453a",Xa(u,f+8,d+8,(m-16)*.15,x-16,6),u.fill(),u.font=`600 68px ${it}`,u.fillStyle="#ffffff",u.textBaseline="middle",u.fillText(s,f+88+24,128/2+2),_l(h,e)}function op(s,e={}){let t=e.breite||1024,n=e.hoehe||400,i=document.createElement("canvas");i.width=t,i.height=n;let r=i.getContext("2d");Xa(r,4,4,t-8,n-8,36),r.fillStyle=e.hintergrund||"#163a7a",r.fill(),r.lineWidth=10,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textBaseline="middle";let a=n/(s.length+1);for(let c of s){if(r.font=`${c.fett?700:600} ${c.groesse||110}px ${it}`,r.textAlign=c.ausrichtung||"left",r.fillText(c.text,c.ausrichtung==="center"?t/2:70,a),c.pfeil){r.lineWidth=22,r.lineCap="round",r.lineJoin="round",r.strokeStyle="#fff";let h=t-150,u=a;r.beginPath(),r.moveTo(h-80,u+40),r.lineTo(h,u-40),r.stroke(),r.beginPath(),r.moveTo(h-60,u-46),r.lineTo(h+4,u-44),r.lineTo(h,u+20),r.stroke()}a+=n/(s.length+1)}let o=Xg(i);return new ne(new lt((e.meter||4)*t/n,e.meter||4),new st({map:o,transparent:!1,fog:!0}))}function $i(s,e){if(!s||!s.initTexture||!e)return;let t=new Set,n=i=>{if(!(!i||!i.isTexture||i.isRenderTargetTexture||t.has(i))){t.add(i);try{s.initTexture(i)}catch{}}};e.traverse(i=>{let r=Array.isArray(i.material)?i.material:i.material?[i.material]:[];for(let a of r){for(let o of["map","lightMap","emissiveMap","normalMap","roughnessMap","metalnessMap","aoMap","alphaMap"])n(a[o]);if(a.uniforms)for(let o of Object.values(a.uniforms))o&&o.value&&n(o.value)}})}var it,Wg,qg,ki,Di=pt(()=>{It();it='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',Wg="#2cb8e3",qg="#ff453a";ki=(s,e)=>s.replace(/(\d+)(\s*(m|Meter|Metern|metres|meters|ft)\b)/,(t,n,i)=>e+i)});function YS(s,e=256){let t=Jg[s%Jg.length],n=document.createElement("canvas");n.width=n.height=e;let i=n.getContext("2d"),r=e,a=r/2,o=["#2f4a63","#4a3f2f","#3a4a3f","#4a2f3f"][s%4];if(i.fillStyle=o,i.fillRect(0,0,r,r),i.save(),i.beginPath(),i.arc(a,a,a,0,Math.PI*2),i.clip(),i.fillStyle=["#27c4e8","#e8c547","#ff6961","#7ad7ef"][s%4],i.beginPath(),i.ellipse(a,r*1.02,r*.42,r*.26,0,0,Math.PI*2),i.fill(),i.fillStyle=t.haut,i.fillRect(a-r*.08,r*.62,r*.16,r*.2),i.fillStyle=t.haar,t.frisur==="lang"&&(i.beginPath(),i.ellipse(a,r*.5,r*.3,r*.38,0,0,Math.PI*2),i.fill()),t.frisur==="locken")for(let l=0;l<10;l++){let c=l/10*Math.PI*2;i.beginPath(),i.arc(a+Math.cos(c)*r*.24,r*.4+Math.sin(c)*r*.22,r*.08,0,Math.PI*2),i.fill()}i.fillStyle=t.haut,i.beginPath(),i.ellipse(a,r*.44,r*.22,r*.26,0,0,Math.PI*2),i.fill(),i.fillStyle=t.haar,(t.frisur==="kurz"||t.frisur==="locken")&&(i.beginPath(),i.ellipse(a,r*.3,r*.23,r*.14,0,Math.PI,Math.PI*2),i.fill()),t.frisur==="lang"&&(i.beginPath(),i.ellipse(a,r*.28,r*.24,r*.13,0,Math.PI,Math.PI*2),i.fill()),t.frisur==="dutt"&&(i.beginPath(),i.ellipse(a,r*.29,r*.24,r*.12,0,Math.PI,Math.PI*2),i.fill(),i.beginPath(),i.arc(a,r*.16,r*.09,0,Math.PI*2),i.fill()),i.fillStyle="#1b1b1f";for(let l of[-.08,.08])i.beginPath(),i.ellipse(a+l*r,r*.45,r*.022,r*.03,0,0,Math.PI*2),i.fill(),i.fillRect(a+l*r-r*.045,r*.385,r*.09,r*.012);if(i.strokeStyle="#8a4a3a",i.lineWidth=r*.014,i.lineCap="round",i.beginPath(),i.arc(a,r*.53,r*.06,.15*Math.PI,.85*Math.PI),i.stroke(),t.extra==="brille"){i.strokeStyle="#222",i.lineWidth=r*.012;for(let l of[-.08,.08])i.beginPath(),i.arc(a+l*r,r*.45,r*.055,0,Math.PI*2),i.stroke();i.beginPath(),i.moveTo(a-r*.025,r*.45),i.lineTo(a+r*.025,r*.45),i.stroke()}if(t.extra==="bart"&&(i.fillStyle=t.haar,i.globalAlpha=.7,i.beginPath(),i.ellipse(a,r*.6,r*.17,r*.1,0,0,Math.PI),i.fill(),i.globalAlpha=1),t.extra==="ohrringe"){i.fillStyle="#ffd60a";for(let l of[-.215,.215])i.beginPath(),i.arc(a+l*r,r*.5,r*.018,0,Math.PI*2),i.fill()}return i.restore(),n}function Zg(s,e,t="#30d158",n=1.5,i=!1){let a=document.createElement("canvas");a.width=320,a.height=320*1.3;let o=a.getContext("2d"),l=320/2,c=320*.36,h=320*.4;o.beginPath(),o.arc(l,h,c+14,0,Math.PI*2),o.fillStyle="#000",o.fill(),o.beginPath(),o.arc(l,h,c+9,0,Math.PI*2),o.fillStyle=t,o.fill(),o.beginPath(),o.arc(l,h,c,0,Math.PI*2),o.fillStyle="#000",o.fill(),o.save(),o.beginPath(),o.arc(l,h,c-3,0,Math.PI*2),o.clip(),o.drawImage(YS(s,256),l-(c-3),h-(c-3),(c-3)*2,(c-3)*2),o.restore(),i&&$g(o,320),o.font=`600 ${320*.13}px ${it}`;let u=o.measureText(e).width,f=u+320*.14,d=320*.2,m=320*.86;((v,E,b,M,y)=>{o.beginPath(),o.moveTo(v+y,E),o.lineTo(v+b-y,E),o.arcTo(v+b,E,v+b,E+y,y),o.lineTo(v+b,E+M-y),o.arcTo(v+b,E+M,v+b-y,E+M,y),o.lineTo(v+y,E+M),o.arcTo(v,E+M,v,E+M-y,y),o.lineTo(v,E+y),o.arcTo(v,E,v+y,E,y),o.closePath()})(l-f/2,m,f,d,d/2),o.fillStyle="rgba(0,0,0,0.85)",o.fill(),o.lineWidth=2,o.strokeStyle="rgba(255,255,255,0.18)",o.stroke(),o.fillStyle="#fff",o.textAlign="center",o.textBaseline="middle",o.fillText(e,l,m+d/2+2);let g=new Lt(a);g.colorSpace=at,g.anisotropy=4;let p=new Dn(new Cn({map:g,transparent:!0,depthWrite:!1,fog:!1}));return p.scale.set(n/1.3,n,1),p.renderOrder=10,p.userData.leinwand=a,p.userData.name=e,p.userData.index=s,p.userData.admin=i,p}function $g(s,e){let t=e/2,n=e*.36,i=e*.4,r=t+n*.72,a=i+n*.72,o=e*.075;s.beginPath(),s.arc(r,a,o+3,0,Math.PI*2),s.fillStyle="#000",s.fill(),s.beginPath(),s.arc(r,a,o,0,Math.PI*2),s.fillStyle="#ffd60a",s.fill(),s.fillStyle="#1b1b1f",s.beginPath(),s.moveTo(r-o*.55,a+o*.4),s.lineTo(r-o*.62,a-o*.3),s.lineTo(r-o*.25,a+o*.02),s.lineTo(r,a-o*.55),s.lineTo(r+o*.25,a+o*.02),s.lineTo(r+o*.62,a-o*.3),s.lineTo(r+o*.55,a+o*.4),s.closePath(),s.fill()}function Qg(s,e){if(s.userData.ring===e)return;s.userData.ring=e;let t=s.userData.leinwand,n=t.getContext("2d"),i=t.width,r=i/2,a=i*.36,o=i*.4;n.save(),n.beginPath(),n.arc(r,o,a+9,0,Math.PI*2),n.arc(r,o,a,0,Math.PI*2,!0),n.clip(),n.fillStyle=e,n.fillRect(0,0,i,i),n.restore(),s.userData.admin&&$g(n,i),s.material.map.needsUpdate=!0}var Jg,gu=pt(()=>{It();Di();Jg=[{haut:"#e8b89a",haar:"#3a2a1e",frisur:"lang",extra:"ohrringe"},{haut:"#c98f6b",haar:"#1c1a1a",frisur:"kurz",extra:"bart"},{haut:"#f0cdb0",haar:"#b5642a",frisur:"dutt",extra:"brille"},{haut:"#9c6a48",haar:"#111",frisur:"locken",extra:""}]});function sr(s,e,t=64){let n=new Float32Array((t+1)*2*3),i=new Float32Array((t+1)*2*2),r=new Float32Array((t+1)*2*3),a=[];for(let l=0;l<=t;l++){let c=l/t,h=s(c),u=e(c);if(n.set([h.x,h.y,h.z],l*6),n.set([u.x,u.y,u.z],l*6+3),i.set([c,0],l*4),i.set([c,1],l*4+2),r.set([0,1,0,0,1,0],l*6),l<t){let f=l*2;a.push(f,f+1,f+2,f+1,f+3,f+2)}}let o=new ht;return o.setAttribute("position",new ct(n,3)),o.setAttribute("uv",new ct(i,2)),o.setAttribute("normal",new ct(r,3)),o.setIndex(a),o}function Ss(s,e=1024,t=256){let n=document.createElement("canvas");n.width=e,n.height=t;let i=n.getContext("2d");i.fillStyle="#000",i.fillRect(0,0,e,t),i.fillStyle="#fff",i.strokeStyle="#fff",s(i,e,t);let r=new Lt(n);return r.colorSpace=qt,r.wrapS=r.wrapT=bn,r.anisotropy=8,r}function lp(s,e=3,t=null){let n=(t?[t,...s]:s).map(([d,m])=>new R(d,0,m)),i=new Gs(n,!1,"centripetal"),r=t?1/(n.length-1):0,a=[],o=40*(n.length-1),l=0,c=null;for(let d=0;d<=o;d++){let m=i.getPoint(r+(1-r)*d/o);c&&(l+=m.distanceTo(c)),c=m,a.push({p:m,s:l})}let h=Math.max(2,Math.ceil(l/e)),u=[],f=0;for(let d=0;d<=h;d++){let m=l*d/h;for(;f<a.length-2&&a[f+1].s<m;)f++;let x=a[f],g=a[f+1],p=(m-x.s)/Math.max(1e-6,g.s-x.s);u.push({x:x.p.x+(g.p.x-x.p.x)*p,z:x.p.z+(g.p.z-x.p.z)*p,s:m,tx:0,tz:1})}for(let d=0;d<=h;d++){let m=u[Math.max(0,d-1)],x=u[Math.min(h,d+1)],g=Math.hypot(x.x-m.x,x.z-m.z)||1;u[d].tx=(x.x-m.x)/g,u[d].tz=(x.z-m.z)/g}return u}function eb(s,e,t,n=3,i=7,r={}){let a=r.linie||lp(s,n),o=a.length-1,l=typeof e=="function"?e:()=>e,c=new Float32Array((o+1)*6),h=new Float32Array((o+1)*4),u=[],f=[];for(let x=0;x<=o;x++){let g=a[x],p=l(g.s),v=g.tz,E=-g.tx,b=-1/0;for(let M of[-1,-.5,0,.5,1])for(let y of[-.5,0,.5]){let S=g.x+v*p*M+g.tx*n*y,_=g.z+E*p*M+g.tz*n*y;b=Math.max(b,t(S,_))}f.push(b+.06)}let d=f.map((x,g)=>Math.max(x,(f[Math.max(0,g-1)]+x+f[Math.min(o,g+1)])/3));for(let x=0;x<=o;x++){let g=a[x],p=l(g.s),v=d[x],E=g.tz,b=-g.tx;if(c.set([g.x+E*p,v,g.z+b*p,g.x-E*p,v,g.z-b*p],x*6),h.set([g.s/i,0,g.s/i,1],x*4),x<o){let M=x*2;u.push(M,M+1,M+2,M+1,M+3,M+2)}r.zeilen&&r.zeilen.push({x:g.x,z:g.z,s:g.s,y:v})}let m=new ht;return m.setAttribute("position",new ct(c,3)),m.setAttribute("uv",new ct(h,2)),m.setIndex(u),m.computeVertexNormals(),m}var tb,mi,yl=pt(()=>{It();tb=(s,e,t)=>{let n=new R;return i=>n.set((1-i)*(1-i)*s[0]+2*(1-i)*i*e[0]+i*i*t[0],0,(1-i)*(1-i)*s[1]+2*(1-i)*i*e[1]+i*i*t[1]).clone()},mi=(s,e)=>t=>new R(s[0]+(e[0]-s[0])*t,0,s[1]+(e[1]-s[1])*t)});function nb(s,e){let t=St(1),n=new ne(new lt(170,220),new Ct({transparent:!0,blending:Nt,depthWrite:!1,fog:!1,uniforms:{zeit:{value:0},staerke:{value:0},mitte:{value:new R},farbe:{value:al}},vertexShader:"varying vec3 vW; void main(){ vW = (modelMatrix * vec4(position, 1.0)).xyz; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}));n.rotation.x=-Math.PI/2,n.position.y=.03,n.frustumCulled=!1,e.add(n);let i=new ot;i.position.set(Ln,0,70);let r=wn(Ye(.6,2.8,3.5)),a=new ne(new Mn(.72,28,20),r);a.position.y=3.3,i.add(a);let o=new ne(new us(.64,1.7,28).rotateX(Math.PI).translate(0,2.5,0),r);i.add(o);let l=new ne(new Mn(.26,16,12),wn(Ye(7,7,7.5)));l.position.set(0,3.3,-.62),i.add(l),i.add(new ne(new wi(2.4,.07,8,48).rotateX(Math.PI/2).translate(0,.08,0),wn(Ye(.6,2.6,3.2))));let c=Gh(Ye(.8,3,3.6));c.rotation.x=-Math.PI/2,c.position.y=.1,i.add(c);let h=Nn(Ye(.6,2.4,3),5);h.position.y=3.3,i.add(h),e.add(i);let u=(s.woerter.namen||"Anna,Ben,Mia,Tom").split(",").map(p=>p.trim()),f=["#30d158","#30d158","#30d158","#30d158"];s.marker={liste:[],ringe:f,sicht:0,sprecher:-1,glut:[]};for(let p=0;p<4;p++){let v=Zg(p,u[p]||"?",f[p],2.1,p===0);v.visible=!1,s.szene.add(v),s.marker.liste.push(v);let E=Nn(Ye(.5,2.4,3),2.6);E.visible=!1,s.szene.add(E),s.marker.glut.push(E)}let d=[0,1,2,3].map(()=>{let p=new du({farbe:al,breite:.55,fluss:!0,hoehe:.06});return e.add(p.mesh),p}),m=new R,x=new R,g=new R(Ln,0,t+70);return{update(p,v,E,b,M){n.material.uniforms.zeit.value=E,n.material.uniforms.staerke.value=v*ut(p,-.2,.15,.85,1.2),n.material.uniforms.mitte.value.copy(M.lead);let y=E*.45%1;c.scale.setScalar(1+y*7),c.material.opacity=(1-y)*.9*v;let S=.2*Math.sin(E*2);a.position.y=3.3+S,o.position.y=S,l.position.y=3.3+S,h.position.y=3.3+S,i.rotation.y=E*.6;let _=1-Mt(.72,.9,p);i.scale.setScalar(Math.max(.001,_)),i.visible=_>.01;let w=v*ut(p,-.1,.12,.9,1.15);s.marker.sicht=Math.max(s.marker.sicht,w);for(let C=0;C<4;C++){let I=M.autos[C];m.set(I.x,0,I.z),x.set(Vt(I.x,Ln,.5)+(C-1.5)*1.6,0,Vt(I.z,g.z,.5)),d[C].setze(m,x,g),d[C].uniforms.zeit.value=E,d[C].uniforms.staerke.value=w*.9,d[C].mesh.visible=w>.01}}}}function cp(s,e,t){let n=s.marker;if(!n)return;let i=.5+.5*Math.sin(t*6);for(let r=0;r<n.liste.length;r++){let a=n.liste[r],o=n.glut[r],l=e.autos[r];a.position.set(l.x,2.9+.08*Math.sin(t*1.6+r),l.z),tn(a,n.sicht),e.kamera&&ol(a,e.kamera,.075,.14);let c=n.sprecher===r;Qg(a,c?i>.5?"#2cb8e3":"#8fe0f5":n.ringe[r]),o.position.set(l.x,3.15,l.z-.01),o.scale.setScalar(2.2+i*.8),tn(o,c?n.sicht*(.45+.35*i):0)}}var ib=pt(()=>{It();mu();Di();Qn();ri();nr();gu();yl();rn();oi()});function sb(s,e){let t=St(2),n=Uh(128,.88,.94),i=[0,1,2,3].map(()=>{let r=new ne(new lt(1,1),new st({map:n,color:Ye(.45,2,2.6),blending:Nt,depthWrite:!1,transparent:!0,fog:!1,side:Pt}));return e.add(r),r});return{update(r,a,o,l,c){let h=a*ut(r,-.15,.1,.8,.95);s.marker.sicht=Math.max(s.marker.sicht,h);let u=r<.5?0:1;h>.3&&(s.marker.sprecher=u);let f=c.autos[u];for(let d=0;d<i.length;d++){let m=(o*.45+d%2*.5)%1,x=d<2?-1:1,g=i[d];g.position.set(f.x,1.25,f.z+x*(1.2+m*14)-t),g.scale.setScalar(1.2+m*3),g.material.opacity=(1-m)*m*1.1*h}}}}var rb=pt(()=>{It();mu();Di();Qn();ri();nr();gu();yl();rn();oi()});function QS(s,e,t){let n=new Vs,i=-s/2,r=-e/2;return n.moveTo(i+t,r),n.lineTo(i+s-t,r),n.absarc(i+s-t,r+t,t,-Math.PI/2,0,!1),n.lineTo(i+s,r+e-t),n.absarc(i+s-t,r+e-t,t,0,Math.PI/2,!1),n.lineTo(i+t,r+e),n.absarc(i+t,r+e-t,t,Math.PI/2,Math.PI,!1),n.lineTo(i,r+t),n.absarc(i+t,r+t,t,Math.PI,Math.PI*1.5,!1),n.closePath(),n}function bu(s,e,t,n=.03,i=.012){let r=new yr(QS(s,e,n),{depth:t-2*i,bevelEnabled:!0,bevelThickness:i,bevelSize:i,bevelSegments:2,curveSegments:6});return r.rotateX(-Math.PI/2),r.translate(0,i,0),r.computeVertexNormals(),r}function ob(s=.009){let e=new ot;return e.add(new ne(new kt(s,s,.005,10).rotateX(Math.PI/2),ja)),e.add(new ne(new Oe(s*1.4,s*.4,.002).translate(0,0,.003),Ml)),e}function eT(){let s=document.createElement("canvas");s.width=256,s.height=64;let e=s.getContext("2d");e.fillStyle="#e8e8e4",e.fillRect(0,0,256,64),e.fillStyle="#c4161c";for(let n=-64;n<256;n+=64)e.beginPath(),e.moveTo(n,64),e.lineTo(n+32,64),e.lineTo(n+64,0),e.lineTo(n+32,0),e.closePath(),e.fill();let t=new Lt(s);return t.colorSpace=at,t.wrapS=t.wrapT=Gn,t.anisotropy=4,t}function tT(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#f2f2ee",t.fillRect(0,0,256,256),t.lineWidth=14,t.strokeStyle="#17181c",t.strokeRect(7,7,242,242),t.fillStyle="#17181c",t.beginPath(),t.roundRect(48,92,160,100,14),t.fill(),t.beginPath(),t.roundRect(96,70,64,30,8),t.fill(),t.fillStyle="#f2f2ee",t.beginPath(),t.arc(128,142,34,0,Math.PI*2),t.fill(),t.fillStyle="#17181c",t.beginPath(),t.arc(128,142,22,0,Math.PI*2),t.fill(),t.fillStyle="#f2f2ee",t.beginPath(),t.arc(136,134,7,0,Math.PI*2),t.fill();let n=new Lt(e);return n.colorSpace=at,n.anisotropy=4,n}function nT(s){let e=new ot,t=.42,n=2.55,i=.038,r=n+t+.08;e.add(new ne(new kt(i,i,r,14).translate(0,r/2,.07),hp)),e.add(new ne(new kt(i+.02,i+.03,.3,14).translate(0,.15,.07),xu)),e.add(new ne(new Mn(i+.004,12,8,0,Math.PI*2,0,Math.PI/2).translate(0,r,.07),hp));let a=Kg(s,1),o=new st({map:a.material.map});a.material.dispose(),e.add(new ne(new kt(t,t,.014,48).rotateX(Math.PI/2).translate(0,n,0),hp));let l=new ne(new Vi(t-.004,48),o);l.rotation.y=Math.PI,l.position.set(0,n,-.0075),e.add(l);let c=new ne(new Vi(t-.004,48),new Ne({color:9343641,roughness:.5,metalness:.6}));c.position.set(0,n,.0075),e.add(c);for(let h of[-.25,.25]){e.add(new ne(new wi(i+.012,.011,8,24).rotateX(Math.PI/2).translate(0,n+h,.07),ja)),e.add(new ne(new Oe(.08,.04,.06).translate(0,n+h,.035),ja));let u=ob(.007);u.position.set(.05,n+h,.072),u.rotation.y=Math.PI/2,e.add(u)}return e.traverse(h=>{h.isMesh&&(h.frustumCulled=!1,h.layers.enable(Ut))}),e}function iT(){let s=new ot,e=.2,t=.44,n=.32,i=2,r=.52,a=.4,o=.78,l=e+i;s.add(new ne(bu(.76,.6,e,.04,.015),JS));let c=new ne(bu(t,n,i+.02,.05),xu);c.position.y=e-.01,s.add(c);let h=new ne(bu(r,a,o,.05),xu);h.position.y=l,s.add(h);let u=new ne(bu(r+.03,a+.03,.05,.06,.01),Ml);u.position.y=l+o-.005,s.add(u);let f=a/2+.002,d=(S,_,w,C)=>{let I=new ne(new Oe(S,_,.02),C);return I.position.set(0,w,f-.004),s.add(I),I},m=(S,_,w)=>{let C=new ne(new Oe(S+.03,_+.03,.012),Ml);C.position.set(0,w,f-.006),s.add(C)};m(.3,.17,l+o-.17);let x=d(.3,.17,l+o-.17,ZS);m(.24,.24,l+o*.5),d(.24,.24,l+o*.5,ab);let g=new ne(new Mn(.052,24,16,0,Math.PI*2,0,Math.PI/2).rotateX(Math.PI/2),$S);g.position.set(0,l+o*.5,f-.01),s.add(g),s.add(new ne(new wi(.06,.008,8,32).translate(0,l+o*.5,f+.004),ja)),m(.3,.1,l+.1),d(.3,.1,l+.1,ab);for(let[S,_]of[[-.22,l+.05],[.22,l+.05],[-.22,l+o-.05],[.22,l+o-.05]]){let w=ob();w.position.set(S,_,f+.002),s.add(w)}let p=new ne(new Mn(.014,10,8),wn(Ye(3,.2,.15)));p.position.set(.2,l+o*.5,f+.01),s.add(p);let v=-n/2-.002,E=new ne(new Oe(.3,1.2,.012),Ml);E.position.set(0,e+1,v),s.add(E);let b=new ne(new Oe(.27,1.17,.012),xu);b.position.set(0,e+1,v-.004),s.add(b),s.add(new ne(new kt(.014,.014,.01,12).rotateX(Math.PI/2).translate(.09,e+1,v-.012),ja));for(let S of[e+.5,e+1.5])s.add(new ne(new Oe(.02,.08,.02).translate(-.145,S,v-.006),ja));let M=new ne(new Oe(t+.012,.26,n+.012),new Ne({map:eT(),roughness:.55,metalness:.1}));M.position.y=e+.42,s.add(M);let y=new ne(new lt(.26,.26),new st({map:tT()}));return y.position.set(0,e+i-.3,n/2+.004),s.add(y),s.add(new ne(new Oe(.28,.28,.006).translate(0,e+i-.3,n/2+.001),Ml)),s.traverse(S=>{S.isMesh&&(S.frustumCulled=!1,S.layers.enable(Ut),S.castShadow=!0)}),{g:s,led:p,linse:g,blitzFenster:x,kopfY:l,kopfH:o}}function lb(s,e){let t=St(3),n=s.woerter,i=nT(70);i.position.set(-5.6,0,-30),e.add(i);let r=new ot;r.position.set(-5.4,0,40),r.rotation.y=Math.PI-.3;let a=iT();r.add(a.g);let o=new ne(new lt(4.2,4.2),new st({map:$n(128),color:Ye(2.2,.2,.14),blending:Nt,depthWrite:!1,transparent:!0,fog:!1,opacity:0}));o.rotation.x=-Math.PI/2,o.position.set(0,.03,.6),o.layers.enable(Ut),r.add(o);let l=new ne(new wi(1.5,.035,8,48).rotateX(Math.PI/2).translate(0,.05,.6),wn(Ye(2.2,.2,.14)));r.add(l);let c=Gh(Ye(3,.3,.22));c.rotation.x=-Math.PI/2,c.position.set(0,.07,.6),r.add(c);let h=Nn(Ye(1.2,1.3,1.6),.26);h.position.set(.02,a.kopfY+a.kopfH*.5+.02,.26),r.add(h);let u=Nn(Ye(3,.3,.2),.5);u.position.copy(a.led.position).z+=.03,r.add(u);let f=new At;f.name="anker_licht_blitzer",f.userData={typ:"punkt",farbe:"#ff2a1a",reichweite:6,staerke:6,hinweis:"roter Halo am Blitzer, dezent"},f.position.set(0,1.1,.7),r.add(f);let d=null,m=!1,x=(s.welt&&s.welt.stufe?s.welt.stufe.lichter|0:6)>0,g=()=>{if(m)return!0;let N=s.umgebung&&s.umgebung.lichtPool;if(!N||typeof N.anmelden!="function")return!1;try{N.anmelden(f,{prioritaet:1}),m=!0}catch{return!1}return d&&(r.remove(d),d=null),!0};e.add(r);let p=new Map,v=null,E=(N,F,V,j)=>{let ae=`${N}|${typeof F=="object"?F.text:F}|${V}`;if(!p.has(ae)){let he=jg(N,F,1.6,j,V);he.visible=!1,e.add(he),p.set(ae,he)}return p.get(ae)},b=n.vorschau||"70 in 400 m",M=vn(b,{punkt:"cyan",hoehe:.6});e.add(M),xl(M,[b,ki(b,300),ki(b,200)],N=>vn(N,{punkt:"cyan",hoehe:.6}));let y=n.blitzer||"Blitzer \xB7 800 m",S=ap(y,n.blitzerTempo||"Tempo 70",{punkt:"rot",hoehe:1});e.add(S),xl(S,[y,ki(y,600),ki(y,400)],N=>ap(N,n.blitzerTempo||"Tempo 70",{punkt:"rot",hoehe:1}));let _=n.radar||"800 m",w=vn(n.gefahr||"Gefahr gemeldet",{punkt:"rot",hoehe:.8});w.position.set(-5.2,2.4,95),e.add(w);let C=Nn(Ye(3,.4,.25),6);C.position.set(-3.5,.3,95),e.add(C);let I=vn(n.vollbremsung||"Vollbremsung im Convoy",{punkt:"rot",hoehe:.6});e.add(I);let U=Yg(n.akku||"15 %",.6);e.add(U);for(let N of[I,U])N.material.depthTest=!1,N.renderOrder=20;let H=new R,P=new R,D=M.scale.clone(),k=S.scale.clone(),z=new R(1.6,1.6,1);return{eigeneModelle:!0,setzeBlitzer(){},async ladeModelle(N,F){F&&F.stufe&&(x=(F.stufe.lichter|0)>0),!g()&&!d&&(d=new Fn(16722458,0,6,2),d.position.copy(f.position),r.add(d))},setzeStufe(N){x=(N.lichter|0)>0},update(N,F,V,j,ae){let he=ae.lead,ce=V*.72%1<.12?1:.18,ye=.75+.25*Math.sin(V*2.2);a.led.material.color.setRGB(1.5+ce*4.5,.15,.1,Rt),u.material.opacity=(.15+.7*ce)*F,o.material.opacity=.32*ye*F,l.material.color.setRGB(1.6+ye*1.2,.16,.12,Rt);let Xe=V*.45%1;c.scale.setScalar(1+Xe*4),c.material.opacity=(1-Xe)*.4*F,m||g(),d&&(d.intensity=x?(1.6+1.2*ce)*F:0),a.linse.getWorldPosition(P),H.copy(ae.kamera.position).sub(P);let ie=H.length();H.normalize();let oe=Math.max(0,-H.z*.95+H.x*.3);h.material.opacity=Math.pow(oe,3)*Xt.smoothstep(ie,3,12)*(1-Xt.smoothstep(ie,40,70))*F;let Te=n.einheit||"km/h",De=!1,Re=78,Ge=.68;if(N<.3)Re=78;else if(N<.42)Re=78,De=!0;else{let je=Mt(.45,.6,N);Re=Math.round(Vt(78,68,je)),De=Re>70,N<.75&&(Te={text:ki(_,N<.5?800:N<.6?600:400)}),Ge=Vt(.68,.58,je)}let gt=F*ut(N,-.1,.06,.74,.84),le=E(Re,Te,De,Ge);v&&v!==le&&(v.visible=!1),v=le;let fe=ae.kamera.aspect<.9,ve=fe?1.7:0,me=fe?.7:1;le.scale.copy(z).multiplyScalar(me),le.position.set(he.x+ve,(fe?2.9:3.2)+.05*Math.sin(V*1.7),he.z-t),tn(le,gt);let J=F*ut(N,-.1,.06,.16,.22);M.scale.copy(vl(M,N<.02?0:N<.1?1:2)).multiplyScalar(me),M.position.set(he.x+ve,fe?3.9:4.4,he.z-t),tn(M,J);let be=F*ut(N,.4,.46,.68,.76);S.scale.copy(vl(S,N<.5?0:N<.6?1:2)).multiplyScalar(me),S.position.set(he.x+ve,fe?4.1:4.7,he.z-t),tn(S,be),S.visible?Zs(S,ae.kamera,.9,.72,[M,le]):M.visible?Zs(M,ae.kamera,.9,.72,[le]):Zs(le,ae.kamera),s.convoy.sanftBremse=Math.max(s.convoy.sanftBremse,F*ut(N,.43,.48,.58,.68));let xe=F*ut(N,.3,.42,.7,.8);tn(w,xe),C.material.opacity=xe*(.5+.5*ye);let Ae=ut(N,.78,.83,.9,.97)*F;s.convoy.bremse=Math.max(s.convoy.bremse,Ae);let ze=s.convoy.zweites.g.position;I.position.set(ze.x,2.7+.05*Math.sin(V*2.1),ze.z-t),tn(I,F*ut(N,.8,.84,.95,1.05));let B=s.convoy.letztes.g.position;U.position.set(B.x,2.6+.05*Math.sin(V*1.9),B.z-t),tn(U,F*ut(N,.84,.9,1.1,1.3))}}}var hp,xu,Ml,JS,ja,ab,ZS,$S,cb=pt(()=>{It();Di();Qn();ri();rn();oi();hp=new Ne({color:5922662,roughness:.42,metalness:.7}),xu=new Ne({color:3882821,roughness:.5,metalness:.55}),Ml=new Ne({color:1382170,roughness:.6,metalness:.3}),JS=new Ne({color:3816511,roughness:.95,metalness:0}),ja=new Ne({color:10133158,roughness:.35,metalness:.9}),ab=new sn({color:461068,roughness:.06,metalness:.2,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:2.2}),ZS=new sn({color:1705481,roughness:.08,metalness:.1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:2}),$S=new sn({color:263434,roughness:.02,metalness:0,clearcoat:1,clearcoatRoughness:0,envMapIntensity:3,ior:1.6})});function ub({z0:s,rampe:e,land:t}){let n=[];for(let b=-66;b<-7;b+=1){let M=(b- -66)/59,y=M*M*M*(M*(6*M-15)+10);n.push([vu+(hb-vu)*y,b,0])}for(let b=-7;b<-5;b+=1)n.push([hb,b,0]);let a=n.length;for(let b=0;b<=100;b++){let M=e(b/100);n.push([M.x,M.z,0])}let o=n.length-1;for(let b=1;b<t.length;b++){let M=t[b-1],y=t[b],S=Math.hypot(y.x-M.x,y.z-M.z)||1,_=(y.x-M.x)/S,w=(y.z-M.z)/S,C=1.3*Mt(8,60,y.s);n.push([y.x-w*C,y.z+_*C,y.y])}let l=[0];for(let b=1;b<n.length;b++)l.push(l[b-1]+Math.hypot(n[b][0]-n[b-1][0],n[b][1]-n[b-1][1]));let c=Math.floor(l[l.length-1]),h=new Float32Array(c+1),u=new Float32Array(c+1),f=new Float32Array(c+1);for(let b=0,M=0;b<=c;b++){for(;M<n.length-2&&l[M+1]<b;)M++;let y=nt((b-l[M])/Math.max(1e-6,l[M+1]-l[M]));h[b]=n[M][0]+(n[M+1][0]-n[M][0])*y,u[b]=n[M][1]+(n[M+1][1]-n[M][1])*y,f[b]=n[M][2]+(n[M+1][2]-n[M][2])*y}let d=(b,M)=>{let y=new Float32Array(b.length);for(let S=0;S<b.length;S++){if(S<M||S>=b.length-M){y[S]=b[S];continue}let _=0;for(let w=-M;w<=M;w++)_+=b[S+w];y[S]=_/(2*M+1)}return y};for(let b=0;b<2;b++)h=d(h,5),f=d(f,4);let m=new Float32Array(c+1),x=new Float32Array(c+1),g=new Float32Array(c+1);for(let b=0;b<=c;b++){let M=Math.max(0,b-1),y=Math.min(c,b+1);m[b]=Math.atan2(h[y]-h[M],u[y]-u[M]),g[b]=Math.atan2(f[y]-f[M],Math.hypot(h[y]-h[M],u[y]-u[M]))}m[0]=0;for(let b=0;b<=c;b++){let M=Math.max(0,b-2),y=Math.min(c,b+2);x[b]=(m[y]-m[M])/Math.max(1,y-M)}let p=(b,M)=>{let y=Math.min(c-1,Math.max(0,Math.floor(M))),S=nt(M-y);return b[y]+(b[y+1]-b[y])*S},v=ai([[0,0],[52,0],[110,6],[175,16],[270,30]]),E=s+-66;return{L:c,zAnfang:E,punkt(b,M={}){return M.x=p(h,b),M.y=p(f,b),M.z=s+p(u,b),M},sRampe:l[a],sLand:l[o],pose(b,M,y,S){let _=M-E;if(S.licht=1-Mt(rr-.07,rr-.01,b)*(1-Mt(rr+.01,rr+.13,b)),S.blinker=null,S.brems=0,S.dz=0,S.s=0,_<=0||b>=rr)return S.aktiv=!1,b>=rr&&(S.dz=-rT*(1-Mt(rr,sT,b))),_>-25&&b<rr&&(S.blinker="R"),S;let w=Math.min(c-1,_-v(_));return S.aktiv=!0,S.s=w,S.x=p(h,w),S.y=p(f,w),S.z=s+p(u,w),S.gier=p(m,w),S.kruemmung=p(x,w),S.hang=p(g,w),S.roll=nt(S.kruemmung*y*y,-6,6)*.006,S.blinker=w<l[o]-12?"R":null,S.brems=Mt(60,75,_)*(1-Mt(150,175,_))*.55,S}}}var vu,hb,rr,sT,rT,fb=pt(()=>{rn();vu=-1.75,hb=-5.85,rr=5.27,sT=5.52,rT=30});function db(s,e){let t=St(4),n=s.woerter,i=mi([-3.62,t-70],[-3.62,t+30]),r=P=>P<.3?mi([-3.62,t-70],[-7.6,t-40])(P/.3):mi([-7.6,t-40],[-7.6,t+30])((P-.3)/.7),a=tb([-5.85,t-5],[-5.85,t+58],[-13.5,t+95]),o=P=>D=>{let k=Math.min(D,.99),z=a(D),F=a(k+.01).clone().sub(a(k)).normalize(),V=new R(F.z,0,-F.x);return z.add(V.multiplyScalar(P*1.75))},l=o(-1),c=o(1),h=c,u=l,f=P=>P<.22?mi([-4.75,t+30],[-3.62,t+38])(P/.22):mi([-3.62,t+38],[-3.62,t+66])((P-.22)/.78),d=P=>c(.3+.37*P),m=Ss((P,D,k)=>{P.lineWidth=6,P.beginPath(),P.moveTo(0,k-5),P.lineTo(D,k-5),P.stroke()}),x=Ss((P,D,k)=>{P.lineWidth=6,P.beginPath(),P.moveTo(0,k-5),P.lineTo(D,k-5),P.stroke(),P.beginPath(),P.moveTo(D*.3,5),P.lineTo(D,5),P.stroke(),P.setLineDash([24,24]),P.beginPath(),P.moveTo(0,5),P.lineTo(D*.3,5),P.stroke()}),g=Ss((P,D,k)=>{P.lineWidth=6,P.beginPath(),P.moveTo(0,5),P.lineTo(D,5),P.moveTo(0,k-5),P.lineTo(D,k-5),P.stroke(),P.lineWidth=7;for(let z=-8;z<40;z++)P.beginPath(),P.moveTo(z*40,k),P.lineTo(z*40+120,0),P.stroke()}),p=[[sr(i,r,48),m,.012],[sr(h,u,64),x,.014],[sr(f,d,40),g,.013]].map(([P,D,k])=>{let z=new ne(P,s.strasse.zusatzMaterial(D));return z.position.y=k,z.frustumCulled=!1,z.name="fahrbahn:ausfahrt",s.szene.add(z),z});s.strasse.uniforms.randAus.value.set(t-70,t+62);let v=[];{let P=Ss((V,j,ae)=>{V.lineWidth=5,V.beginPath(),V.moveTo(0,5),V.lineTo(j,5),V.moveTo(0,ae-5),V.lineTo(j,ae-5),V.stroke()}),D=a(.8),k=lp(Z0.map(([V,j])=>[V,j-t]),3,[D.x,D.z-t]),N=eb(null,V=>Vt(1.75,3,Mt(0,45,V)),(V,j)=>ys(V,j+t),3,7,{linie:k,zeilen:v}),F=new ne(N,s.strasse.zusatzMaterial(P));F.frustumCulled=!1,F.name="fahrbahn:landstrasse",e.add(F),p.push(F)}let E=ub({z0:t,rampe:P=>{let D=a(P);return{x:D.x,z:D.z-t}},land:v});s.convoy.abfahrt=E;let b="#1a4f9c",M=new Ne({color:1777187,roughness:.7,metalness:.3}),y=(P,D,k,z,N)=>(P.position.set(D,k,z),P.rotation.y=N,P);{let D=new ot;D.position.z=-64;let k=-9.6,z=6.6,N=(k+z)/2,F=7.2;for(let ae of[k,z]){let he=Li(ae,t+-64);D.add(new ne(new Oe(.42,F+.2-he,.42).translate(ae,(F+.2+he)/2,0),In)),D.add(new ne(new Oe(.95,.18,.95).translate(ae,he+.09,0),In))}D.add(new ne(new Oe(z-k+.5,.55,.5).translate(N,F,0),In));let V=op([{text:n.schildOben||"A1",groesse:150,fett:!0},{text:(n.schildUnten||"Ausfahrt 12")+" \xB7 300 m",groesse:104,pfeil:!0}],{breite:1400,hoehe:400,meter:1.9,hintergrund:b});y(V,-3,F-1.45,-.3,Math.PI);let j=new ne(new Oe(6.8,2,.08).translate(-3,F-1.45,-.24),M);D.add(j,V);for(let ae of[-5.4,-.6])D.add(new ne(new Oe(.12,.72,.12).translate(ae,F-.62,-.12),In));e.add(D)}{let k=new ot;k.position.set(-11.5,Li(-11.5,t+-8),-8),k.rotation.y=-.12;for(let N of[-1.6,1.6])k.add(new ne(new kt(.06,.07,3.6,10).translate(N,1.8,.16),In));let z=op([{text:n.schildOben||"A1",groesse:150,fett:!0},{text:n.schildUnten||"Ausfahrt 12",groesse:104,pfeil:!0}],{breite:1400,hoehe:400,meter:1.5,hintergrund:b});y(z,0,3,-.07,Math.PI),k.add(z,new ne(new Oe(5.3,1.6,.08).translate(0,3,0),M)),e.add(k)}let S=150,_=[];for(let P=-S;P<0;P+=3)_.push({x:vu,y:0,z:E.zAnfang+P,s:P});{let P={};for(let D=0;D<=Math.min(E.L-1,E.sLand+120);D+=1.5)E.punkt(D,P),_.push({x:P.x,y:P.y,z:P.z,s:D})}let w=new pu(_,{farbe:al,breite:.7,hoehe:.085,endeWeich:60});s.szene.add(w.mesh);let C=n.ansage||"In 300 Metern rechts abbiegen",I=n.ansageJetzt||"Ausfahrt nehmen",U=vn(C,{punkt:"cyan",hoehe:.6});e.add(U),xl(U,[C,ki(C,200),ki(C,100),I],P=>vn(P,{punkt:"cyan",hoehe:.6})),U.material.depthTest=!1,U.renderOrder=20;let H=vn(n.landstrasse||"Ohne Autobahn",{punkt:"cyan",hoehe:.85});return H.position.set(-15.6,4.2,112),e.add(H),{update(P,D,k,z,N){let F=s.convoy.fuehrungEcht,V=s.convoy._ab,j=D*ut(P,-.15,.1,1.05,1.22);w.uniforms.zeit.value=k,w.uniforms.staerke.value=j,w.mesh.visible=j>.01,w.uniforms.ab.value=(V.aktiv?V.s:Math.max(-S,F.z-E.zAnfang-1.4))+4.2;for(let he of p)he.visible=D>.01;let ae=D*ut(P,-.05,.06,.52,.6);vl(U,P<.08?0:P<.17?1:P<.28?2:3),U.position.set(F.x,F.y+2.6+.06*Math.sin(k*2),F.z-t),tn(U,ae),Zs(U,N.kamera),tn(H,D*ut(P,.5,.62,1,1.12)),ol(H,N.kamera,.034,.07),Zs(H,N.kamera)}}}var pb=pt(()=>{It();mu();Di();Qn();ri();nr();gu();yl();fb();rn();Qs();oi();ll()});function Ya(s,e,t,n,i,r){s.beginPath(),s.moveTo(e+r,t),s.arcTo(e+n,t,e+n,t+i,r),s.arcTo(e+n,t+i,e,t+i,r),s.arcTo(e,t+i,e,t,r),s.arcTo(e,t,e+r,t,r),s.closePath()}function aT(){let t=document.createElement("canvas");t.width=1024,t.height=320;let n=t.getContext("2d");Ya(n,5,5,1014,310,34),n.fillStyle="#1a4f9c",n.fill(),n.lineWidth=10,n.strokeStyle="#ffffff",n.stroke(),n.fillStyle="#ffffff",Ya(n,70,112,170,118,18),n.fill(),Ya(n,118,86,70,36,10),n.fill(),n.fillStyle="#1a4f9c",n.beginPath(),n.arc(155,171,40,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(155,171,24,0,Math.PI*2),n.fill(),n.font=`700 92px ${it}`,n.textBaseline="middle",n.textAlign="left",n.fillText("SECTION",300,112),n.fillText("CONTROL",300,214);let i=new Lt(t);return i.colorSpace=at,i.anisotropy=8,i.minFilter=en,i}function oT(s){let n=document.createElement("canvas");n.width=880,n.height=600;let i=n.getContext("2d");Ya(i,4,4,872,592,44),i.fillStyle="#0d1116",i.fill(),i.lineWidth=6,i.strokeStyle="rgba(44,184,227,0.75)",i.stroke();let r=String(s.titel).toUpperCase();i.fillStyle="rgba(235,235,245,0.82)",i.textBaseline="middle",i.textAlign="center";let a=46;try{i.letterSpacing="5px"}catch{}for(i.font=`600 ${a}px ${it}`;i.measureText(r).width>770&&a>28;)a-=2,i.font=`600 ${a}px ${it}`;i.fillText(r,880/2,74);try{i.letterSpacing="0px"}catch{}i.fillStyle=mb,i.font=`700 92px ${it}`,i.fillText(`\xD8 ${s.schnitt}`,196,208),i.beginPath(),i.arc(196,366,84,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.beginPath(),i.arc(196,366,72,0,Math.PI*2),i.lineWidth=20,i.strokeStyle="#d61f26",i.stroke(),i.fillStyle="#101010",i.font=`700 76px ${it}`,i.fillText(String(s.limit),196,370);let o=602,l=290,c=168;i.lineCap="round",i.lineWidth=15,i.strokeStyle="rgba(255,255,255,0.12)",i.beginPath(),i.arc(o,l,c,0,Math.PI*2),i.stroke();let h=-Math.PI/2+.5,u=Math.PI*2*nt(s.tempo/s.limit,0,1)*.92;i.strokeStyle=mb,i.beginPath(),i.arc(o,l,c,h,h+u),i.stroke(),i.fillStyle="#ffffff",i.font=`700 150px ${it}`,i.fillText(String(s.tempo),o,l-12),i.fillStyle="rgba(235,235,245,0.75)",i.font=`400 42px ${it}`,i.fillText(s.einheit,o,l+84);let f=54,d=496,m=772,x=66;Ya(i,f,d,m,x,x/2),i.fillStyle="rgba(255,255,255,0.13)",i.fill(),i.save(),Ya(i,f,d,m,x,x/2),i.clip(),i.fillStyle="rgba(44,184,227,0.5)",i.fillRect(f,d,m*nt(s.anteil,.06,1),x),i.restore(),i.fillStyle="#ffffff",i.font=`600 44px ${it}`,i.fillText(s.rest,880/2,d+x/2+2);let g=new Lt(n);return g.colorSpace=at,g.anisotropy=8,g.minFilter=en,g}function lT(s,e){return String(s).replace(/\d+([.,])\d+/,(t,n)=>e.toFixed(1).replace(".",n))}function dT(s){let e=new ot,t=cT,n=new ot;n.rotation.x=.22,n.add(new ne(new Oe(.36,.3,.74),t)),n.add(new ne(new Oe(.42,.04,.84).translate(0,.17,.03),s)),n.add(new ne(new kt(.1,.12,.14,18).rotateX(Math.PI/2).translate(0,-.01,.42),hT)),n.add(new ne(new Vi(.075,16).translate(0,-.01,.492),uT)),n.position.y=-.42,e.add(n),e.add(new ne(new Oe(.08,.42,.08).translate(0,-.14,0),s));let i=new ot;i.position.set(.52,-.4,.05),i.rotation.x=.22,i.add(new ne(new Oe(.34,.24,.16),s)),i.add(new ne(new lt(.28,.18).translate(0,0,.082),fT)),e.add(i),e.add(new ne(new Oe(.06,.4,.06).translate(.52,-.14,0),s));let r=Nn(Ye(3,.3,.2),.34);return r.position.set(.12,-.3,.3),e.add(r),e.traverse(a=>{a.isMesh&&(a.frustumCulled=!1,a.layers.enable(Ut))}),{g:e,led:r}}function gb(s,e){let t=St(5),n=s.woerter,i=new Ne({color:9146777,roughness:.46,metalness:.55}),r=new ot;r.position.z=_u;let a=new ot;r.add(a);let o=-6.9,l=6.9,c=.9,h=.62;for(let N of[o,l]){let F=Li(N,t+_u),V=Ts+c/2+.1;for(let j of[-h/2,h/2])a.add(new ne(new Oe(.2,V-F,.2).translate(N,(V+F)/2,j),i));for(let j=F+.9;j<Ts-c/2;j+=1.15)a.add(new ne(new Oe(.09,.09,h).translate(N,j,0),i));a.add(new ne(new Oe(1,.22,1.2).translate(N,F+.11,0),i))}let u=l-o+.2,f=(l+o)/2,d=10,m=(l-o)/d;for(let N of[-h/2,h/2]){for(let F of[-c/2,c/2])a.add(new ne(new Oe(u,.13,.13).translate(f,Ts+F,N),i));for(let F=0;F<=d;F++)a.add(new ne(new Oe(.08,c,.08).translate(o+F*m,Ts,N),i));for(let F=0;F<d;F++){let V=new ne(new Oe(Math.hypot(m,c),.06,.06),i);V.position.set(o+(F+.5)*m,Ts,N),V.rotation.z=(F%2?-1:1)*Math.atan2(c,m),a.add(V)}}for(let N=0;N<=d;N++)for(let F of[-c/2,c/2])a.add(new ne(new Oe(.06,.06,h).translate(o+N*m,Ts+F,0),i));a.traverse(N=>{N.isMesh&&(N.frustumCulled=!1,N.layers.enable(Ut))});let x=[];for(let[N,F]of[[-1.75,Math.PI],[1.75,0]]){let V=dT(i);V.g.position.set(N,Ts-c/2,0),V.g.rotation.y=F,r.add(V.g),x.push(V)}let g=3.5,p=g*320/1024,v=-4.6,E=Ts+.05,b=new ne(new lt(g,p),new st({map:aT(),fog:!0}));b.position.set(v,E,-h/2-.13),b.rotation.y=Math.PI,b.layers.enable(Ut),r.add(b),r.add(new ne(new Oe(g+.08,p+.08,.06).translate(v,E,-h/2-.09),In));let M=Li(o-1.3,t+_u);r.add(new ne(new Oe(.8,1.35,.5).translate(o-1.3,M+.675,.1),new Ne({color:10133672,roughness:.55,metalness:.3}))),r.add(new ne(new Oe(.9,.08,.6).translate(o-1.3,M+1.39,.1),In)),r.traverse(N=>{N.name||(N.name="bruecke")}),_s(r),e.add(r);let y=vn(n.abschnittBeginn||"Beginn Abschnittskontrolle",{punkt:"cyan",hoehe:.8});y.position.set(-3.4,Ts+2.1,_u),e.add(y);let S=n.abschnitt||"Abschnittskontrolle",_=n.abschnittRest||"noch 2,4 km",w=n.einheit||"km/h",I=[{km:2.4,schnitt:76,tempo:78,anteil:.2},{km:2,schnitt:76,tempo:79,anteil:.34},{km:1.6,schnitt:77,tempo:78,anteil:.48},{km:1.2,schnitt:77,tempo:79,anteil:.62}].map(N=>oT({titel:S,schnitt:N.schnitt,tempo:N.tempo,limit:80,rest:lT(_,N.km),anteil:N.anteil,einheit:w})),U=new ot;U.position.set(...up),U.rotation.y=2.6;let H=new st({map:I[0]}),P=new ne(new lt(4.4,3),H);U.add(P),U.add(new ne(new Oe(4.5,3.1,.08).translate(0,0,-.06),In));for(let N of[-1.9,1.9])U.add(new ne(new kt(.07,.08,2.15,10).translate(N,-2.5,-.12),In));U.add(new ne(new Oe(4.5,.1,.14).translate(0,-1.55,-.1),In)),e.add(U);let D=vn(n.amtlich||"Amtliche Daten \xB7 \xD6sterreich",{punkt:"cyan",hoehe:.8});D.position.set(up[0],5.7,up[2]),e.add(D);let k=s.welt&&s.welt.renderer;if($i(k,e),k&&k.initTexture)for(let N of I)try{k.initTexture(N)}catch{}let z=0;return{update(N,F,V,j,ae){s.umgebung.himmelUniforms.mond.value=Math.max(s.umgebung.himmelUniforms.mond.value,F),s.schnee.staerke=Math.max(s.schnee.staerke,F*.7);let he=V*.9%1<.5?1:.25;for(let ye of x)ye.led.material.opacity=(.35+.65*he)*F;tn(y,F*ut(N,.36,.44,.55,.6)),Pi(y,ae.kamera);let ce=Math.max(0,Math.min(I.length-1,Math.floor(nt((N-.6)/.4)*I.length)));ce!==z&&(z=ce,H.map=I[ce]),tn(D,F*ut(N,.78,.84,.94,1)),Pi(D,ae.kamera)}}}var _u,Ts,up,mb,cT,hT,uT,fT,bb=pt(()=>{It();Di();Qn();ri();rn();Js();oi();Qs();_u=30,Ts=6.9,up=[-9.4,3.55,64],mb="#2cb8e3";cT=new Ne({color:13225686,roughness:.42,metalness:.35}),hT=new Ne({color:658189,roughness:.25,metalness:.7}),uT=new st({color:Ye(.05,.12,.3)}),fT=new st({color:Ye(.18,.02,.03)})});function Za(s){if(!s||s.attributes.uv||!s.attributes.position)return!1;let e=s.attributes.position,t=s.attributes.normal,n=new R(0,0,1);if(t){n.set(0,0,0);for(let g=0;g<t.count;g++)n.x+=t.getX(g),n.y+=t.getY(g),n.z+=t.getZ(g);n.lengthSq()<1e-8&&n.set(0,0,1),n.normalize()}let i=Math.abs(n.x),r=Math.abs(n.y),a=Math.abs(n.z);i>=r&&i>=a?n.set(Math.sign(n.x)||1,0,0):r>=a?n.set(0,Math.sign(n.y)||1,0):n.set(0,0,Math.sign(n.z)||1);let o=r>i&&r>a?new R(0,0,-1):new R(0,1,0),l=new R().crossVectors(o,n);s.computeBoundingBox();let c=s.boundingBox,h=c.getCenter(new R),u=c.getSize(new R),f=Math.max(1e-6,Math.abs(l.dot(u))),d=Math.max(1e-6,Math.abs(o.dot(u))),m=new Float32Array(e.count*2),x=new R;for(let g=0;g<e.count;g++)x.set(e.getX(g),e.getY(g),e.getZ(g)).sub(h),m[g*2]=x.dot(l)/f+.5,m[g*2+1]=x.dot(o)/d+.5;return s.setAttribute("uv",new ct(m,2)),!0}function Ja(s,e,t,n){let i=s.attributes.position.count,r=new Float32Array(i*3);for(let a=0;a<i;a++)r[a*3]=e,r[a*3+1]=t,r[a*3+2]=n;return s.setAttribute("color",new ct(r,3)),s}function fp(s,e){let t=new Vs;t.moveTo(s[0][0],s[0][1]);for(let i=1;i<s.length;i++)t.lineTo(s[i][0],s[i][1]);t.closePath();let n=new yr(t,{depth:e,bevelEnabled:!1,curveSegments:1});return n.translate(0,0,-e/2),n.rotateY(-Math.PI/2),n}function pT(){let e=fp([[-2.1,.3],[-2.16,.62],[-1.98,.88],[-1.25,.93],[-.72,1.27],[.32,1.29],[.98,.95],[1.98,.8],[2.16,.56],[2.1,.3]],1.78),t=[.025,.035,.05],n=[.012,.012,.014],i=[];i.push(Ja(Fi(fp([[-.66,.98],[-.5,1.21],[.27,1.23],[.78,.99]],1.78+.012)),...t));let r=(a,o)=>{let l=o[0]-a[0],c=o[1]-a[1],h=Math.hypot(l,c),u=-c/h,f=l/h,d=f<0?-1:1,m=(x,g,p)=>[x[0]+l*g+u*d*p,x[1]+c*g+f*d*p];return fp([m(a,.1,.012),m(a,.9,.012),m(a,.9,-.02),m(a,.1,-.02)],1.78-.3)};i.push(Ja(Fi(r([.98,.95],[.32,1.29])),...t)),i.push(Ja(Fi(r([-1.25,.93],[-.72,1.27])),...t));for(let[a,o]of[[-.8,1.32],[.8,1.32],[-.8,-1.3],[.8,-1.3]])i.push(Ja(Fi(new kt(.34,.34,.26,12).rotateZ(Math.PI/2).translate(a,.34,o)),...n));for(let a of[-.58,.58])i.push(Ja(Fi(new Oe(.36,.1,.05).translate(a,.66,2.15)),7,6.4,5)),i.push(Ja(Fi(new Oe(.46,.08,.05).translate(a,.74,-2.15)),6,.25,.15));return{rumpf:e,details:Lr(i,!1)}}function mT(){let s=[];for(let e of[-.09,.09])s.push(Fi(new kt(.078,.062,.84,6).translate(e,.42,0)));s.push(Fi(new Ro(.17,.36,2,8).scale(1.12,1,.74).translate(0,1.12,0)));for(let e of[-1,1])s.push(Fi(new kt(.052,.044,.6,5).rotateZ(e*.13).translate(e*.265,1.1,0)));return{koerper:Lr(s,!1),kopf:new Mn(.118,8,6).translate(0,1.6,0)}}function gT(s){let e=s>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function xT(s){let e=new ht,t=s.geometry;for(let n of["position","normal","color"]){let i=t.attributes[n];if(!i)continue;let r=new Float32Array(i.count*3);for(let a=0;a<i.count;a++)r[a*3]=i.getX(a),r[a*3+1]=i.getY(a),r[a*3+2]=i.getZ(a);e.setAttribute(n,new ct(r,3))}return t.index&&e.setIndex(t.index.clone()),e.applyMatrix4(s.matrixWorld),e.rotateY(Math.PI),e}function xb(s,e){let t=s.woerter,n=gT(20261111),i=new ot,r=-20,a=-48,o=-24,l=-6.4,c=.04,h=(G,se)=>ys(G,e+se)>0,u=G=>{for(let se=r;se<=l;se+=.5)if(h(se,G))return!0;return!1};for(;a<-44&&u(a);)a+=.4;for(;o>-28&&u(o);)o-=.4;let f=G=>{for(let se=a;se<=o;se+=.5)if(h(G,se))return!0;return!1};for(;r<-15&&f(r);)r+=.4;let d=l-r,m=o-a,x=new R(l-5.6,c,o-11),g=2.5,p=14278115,v=9182488,E=1798035,b=1316378,M=9409949,y=2303531,S=15330028,_=13083162,w=998476,C=2930915,I=[],U=(G,se,Pe,Ke,Et)=>I.push({t:G,x:se,z:Pe,d:Ke+(n()-.5)*.06,f:Et});[["sport",p],["car",v],["sport",E]].forEach(([G,se],Pe)=>U(G,l-1.9-Pe*2.8,a+2.5,0,se)),[["car",b],["sport",M],["van",y]].forEach(([G,se],Pe)=>U(G,l-1.9-Pe*2.8,o-(G==="van"?2.95:2.5),Math.PI,se)),d>11.5&&(U("caravan",r+2.1,a+4.6,0,S),U("sport",r+2.5,o-5.2,Math.PI/2,_),U("car",r+2.5,o-2.2,Math.PI/2,w)),[[l-1.3,a+6.6,C],[l-1.5,o-6.4,v]].forEach(([G,se,Pe])=>U("bike",G,se,Math.atan2(x.x-G,x.z-se),Pe));let H=G=>{let[se,Pe]=bT[G.t],Ke=Math.abs(Math.sin(G.d)),Et=Math.abs(Math.cos(G.d));return[(se*Ke+Pe*Et)/2,(se*Et+Pe*Ke)/2]},P=2,D=P+I.length,k=40,z=Math.round(d*k),N=Math.round(m*k),F=(G,se)=>[(G-r)*k,(se-a)*k],V=[a+.8,o-.8],j=document.createElement("canvas");j.width=z,j.height=N;{let G=j.getContext("2d");G.fillStyle="#17191d",G.fillRect(0,0,z,N);for(let Ke=0;Ke<2600;Ke++)G.fillStyle=n()<.5?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.16)",G.fillRect(n()*z,n()*N,1+n()*2.5,1+n()*2.5);G.strokeStyle="rgba(232,236,240,0.62)",G.lineWidth=4;for(let Ke of[a+.3,o-5])for(let Et=0;Et<=3;Et++){let[Ht,zn]=F(l-.5-Et*2.8,Ke);G.beginPath(),G.moveTo(Ht,zn),G.lineTo(Ht,zn+4.7*k),G.stroke()}for(let Ke of I){let[Et,Ht]=F(Ke.x,Ke.z),[zn,_i]=H(Ke),hn=zn*k*1.25,jn=_i*k*1.2;G.save(),G.translate(Et,Ht),G.scale(1,jn/hn);let We=G.createRadialGradient(0,0,0,0,0,hn);We.addColorStop(0,"rgba(0,0,0,0.74)"),We.addColorStop(.72,"rgba(0,0,0,0.5)"),We.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=We,G.fillRect(-hn,-hn,2*hn,2*hn),G.restore()}let[se,Pe]=F(x.x,x.z);G.lineCap="round";for(let Ke=0;Ke<9;Ke++){G.strokeStyle=`rgba(0,0,0,${.22+n()*.22})`,G.lineWidth=5+n()*7;let Et=(g+.5+(n()-.5)*1.5)*k,Ht=n()*6.28,zn=2.5+n()*3.7;G.beginPath(),G.ellipse(se+(n()-.5)*22,Pe+(n()-.5)*22,Et,Et*(.93+n()*.12),n()*3.1,Ht,Ht+zn),G.stroke()}}let ae=document.createElement("canvas");ae.width=z,ae.height=N;{let G=ae.getContext("2d");G.fillStyle="#05070a",G.fillRect(0,0,z,N),G.globalCompositeOperation="lighter";let se=(Pe,Ke,Et,Ht)=>{let[zn,_i]=F(Pe,Ke),hn=G.createRadialGradient(zn,_i,0,zn,_i,Et*k);hn.addColorStop(0,Ht),hn.addColorStop(1,"rgba(0,0,0,0)"),G.fillStyle=hn,G.fillRect(0,0,z,N)};for(let Pe of V)se(r+2.2,Pe+(Pe<x.z?3:-3),13,"rgba(255,226,186,0.6)");se(x.x,x.z,7.5,"rgba(60,200,235,0.42)");for(let Pe of I)Math.abs(Pe.d-Math.PI)<.2&&se(Pe.x,Pe.z-4.6,3.6,"rgba(255,240,214,0.34)");G.globalCompositeOperation="multiply",G.drawImage(j,0,0),G.globalCompositeOperation="lighter",G.globalAlpha=.5,G.drawImage(ae,0,0),G.globalAlpha=1}let he=G=>{let se=new Lt(G);return se.colorSpace=at,se.anisotropy=8,se.minFilter=en,se},ce=new ne(new lt(d,m).rotateX(-Math.PI/2),new Ne({map:he(j),emissive:16777215,emissiveMap:he(ae),emissiveIntensity:1.5,roughness:.86,metalness:0}));ce.position.set((r+l)/2,c,(a+o)/2),ce.name="boden:treffen",ce.frustumCulled=!1,i.add(ce);let ye=new Fe,Xe=new $t,ie=new R,oe=new R(1,1,1),Te=new R(0,1,0),De=new Ce,Re=(G,se,Pe)=>ye.compose(ie.set(G,c,se),Xe.setFromAxisAngle(Te,Pe),oe.set(1,1,1)),Ge=new Ne({color:16777215,roughness:.34,metalness:.55,envMapIntensity:1.6}),gt=[15330028,9182488],le=pT(),fe=[new Dt(le.rumpf,Ge,D),new Dt(le.details,new st({vertexColors:!0}),D)],ve=fe.slice(),me=(G,se,Pe,Ke)=>{Re(se,Pe,Ke);for(let Et of fe)Et.setMatrixAt(G,ye)};I.forEach((G,se)=>{Re(G.x,G.z,G.d);for(let Pe of fe)Pe.setMatrixAt(P+se,ye);fe[0].setColorAt(P+se,De.setHex(G.f))}),gt.forEach((G,se)=>fe[0].setColorAt(se,De.setHex(G))),me(0,x.x,x.z+g,Math.PI/2),me(1,x.x,x.z-g,-Math.PI/2);for(let G of fe)G.frustumCulled=!1,G.instanceMatrix.setUsage(vs),i.add(G);let J=[],be=(G,se)=>G>r+.5&&G<l-.4&&se>a+.5&&se<o-.5&&!I.some(Pe=>{let[Ke,Et]=H(Pe);return Math.abs(Pe.x-G)<Ke+.4&&Math.abs(Pe.z-se)<Et+.4}),xe=(G,se)=>{be(G,se)&&J.push({x:G,z:se,g:.9+n()*.18,ph:n()*6.28})};for(let G=0;G<9;G++)xe(x.x-5.3-n()*.5,x.z-4.4+G*1.02+(n()-.5)*.4);for(let G=0;G<6;G++)xe(x.x-6.5-n()*.6,x.z-3.2+G*1.25+(n()-.5)*.5);for(let G=0;G<8;G++)xe(x.x-4.4+G*1.1+(n()-.5)*.4,x.z-5.2-n()*.9);for(let G=0;G<8;G++)xe(x.x-4.4+G*1.1+(n()-.5)*.4,x.z+5+n()*.8);for(let G=0;G<5;G++)xe(l-.8-n()*.5,x.z-3.6+G*1.8+(n()-.5)*.6);for(let G=0;G<6;G++)xe(r+1.2+n()*(d-2.4),(n()<.5?a+5.3:o-5.3)+(n()-.5)*.8);let Ae=mT(),ze=new Dt(Ae.koerper,new Ne({color:16777215,roughness:.9,metalness:0}),J.length),B=new Dt(Ae.kopf,new Ne({color:16777215,roughness:.8,metalness:0}),J.length),je=[1842982,2764602,1381914,3883602,998476,4857628,14278115,2930915,2303531,5922664],et=[15251866,13209451,9263675,15780784,7031350],L=(G,se)=>{let Pe=J[G];ye.compose(ie.set(Pe.x,c+se,Pe.z),Xe.setFromAxisAngle(Te,Math.atan2(x.x-Pe.x,x.z-Pe.z)),oe.set(Pe.g,Pe.g,Pe.g)),ze.setMatrixAt(G,ye),B.setMatrixAt(G,ye)};J.forEach((G,se)=>{L(se,0),ze.setColorAt(se,De.setHex(je[Math.floor(n()*je.length)])),B.setColorAt(se,De.setHex(et[Math.floor(n()*et.length)]))});for(let G of[ze,B])G.frustumCulled=!1,G.instanceMatrix.setUsage(vs),i.add(G);let T=J.map((G,se)=>se).filter(G=>G%4===1),Y=J.map((G,se)=>se).filter(G=>G%5===2).slice(0,8),$=[],W=[];for(let G of V){$.push(Fi(new kt(.07,.1,6.4,8).translate(r+.6,3.2,G))),$.push(Fi(new Oe(1.6,.09,.14).translate(r+1.3,6.35,G)));let se=new At;se.name="anker_licht_treffen",se.position.set(r+2,6.2,G),se.userData={typ:"spot",farbe:"#ffe6c2",winkel:105,reichweite:26,staerke:420},i.add(se),W.push(se)}let X=new ne(Lr($,!1),In);X.frustumCulled=!1,i.add(X);let Q=22,K=2+Y.length+Q,Z=$n(64),de=()=>new st({map:Z,transparent:!0,blending:Nt,depthWrite:!1,fog:!1}),Me=new Dt(new lt(1,1),de(),K);Me.frustumCulled=!1,Me.instanceMatrix.setUsage(vs),Me.renderOrder=6,i.add(Me);let _e=[];for(let G=0;G<Q;G++)_e.push({alter:G/Q,x:x.x,y:c,z:x.z,dx:0,dz:0});for(let G=0;G<K;G++)Me.setMatrixAt(G,ye.identity()),Me.setColorAt(G,De.setRGB(0,0,0));let ge=I.map((G,se)=>G.t==="sport"?se:-1).filter(G=>G>=0).filter((G,se)=>se%2===1).slice(0,2),Ie=new Dt(new lt(1,1).rotateX(-Math.PI/2),de(),P+ge.length);Ie.frustumCulled=!1,Ie.instanceMatrix.setUsage(vs),Ie.renderOrder=5,i.add(Ie);let $e=Ye(.25,1.5,1.9);for(let G=0;G<P+ge.length;G++)Ie.setMatrixAt(G,ye.identity()),Ie.setColorAt(G,De.setRGB(0,0,0));ge.forEach((G,se)=>{let Pe=I[G];ye.compose(ie.set(Pe.x,c+.03,Pe.z),Xe.setFromAxisAngle(Te,Pe.d),oe.set(3.4,1,6.6)),Ie.setMatrixAt(P+se,ye)});let Le=vn(t.treffen||"Car-Meet \xB7 12 fahren hin",{punkt:"cyan",hoehe:.8});Le.position.set(x.x,4.4,x.z),i.add(Le);let O=vn(t.treffenWaren||"25+ FREQ-Fahrer waren dort",{punkt:"gruen",hoehe:.8});O.position.set(x.x-1.5,4,x.z+4.5),i.add(O);let Se={hin:Le.position.clone(),dort:O.position.clone()};$i(s.welt&&s.welt.renderer,i);let ue=!1,we=-1,Be=()=>{if(ue)return;let G=s.umgebung&&s.umgebung.lichtPool;if(!(!G||typeof G.anmelden!="function")){i.updateMatrixWorld(!0);try{for(let se of W)se.lookAt(i.localToWorld(new R(x.x,0,se.position.z+(x.z-se.position.z)*.6))),G.anmelden(se,{prioritaet:2});ue=!0}catch{}}},pe=new R;return{gruppe:i,mitte:x,async ladeModelle(G){let se=!(s.welt&&s.welt.stufeName&&s.welt.stufeName!=="hoch"),Pe=G&&await G.glb(se?"welt/modelle/fahrzeuge.glb":"welt/modelle/fahrzeuge_leicht.glb");if(!Pe)return!1;Pe.scene.updateMatrixWorld(!0);let Ke={};if(Pe.scene.traverse(We=>{if(We.isMesh){let[dt,Jt]=We.name.split("_");(Ke[dt]=Ke[dt]||{})[Jt]=xT(We)}}),!["car","sport","van","caravan","bike"].every(We=>Ke[We]&&Ke[We].lack&&Ke[We].rest&&Ke[We].licht))return!1;let Et={lack:[],rest:[],licht:[]};for(let We of I){Re(We.x,We.z,We.d);for(let dt of["lack","rest","licht"]){let Jt=Ke[We.t][dt].clone().applyMatrix4(ye);if(dt==="lack"){De.setHex(We.f);let kn=Jt.attributes.position.count,ei=new Float32Array(kn*3);for(let ti=0;ti<kn;ti++)ei[ti*3]=De.r,ei[ti*3+1]=De.g,ei[ti*3+2]=De.b;Jt.setAttribute("color",new ct(ei,3))}Et[dt].push(Jt)}}let Ht=new Ne({vertexColors:!0,roughness:.34,metalness:.55,envMapIntensity:1.6}),zn=new Ne({vertexColors:!0,roughness:.42,metalness:.3,envMapIntensity:1.2}),_i=new st({vertexColors:!0,color:Ye(6,6,6)}),hn=[["lack",Ht],["rest",zn],["licht",_i]].map(([We,dt])=>{let Jt=new ne(Lr(Et[We],!1),dt);return Jt.frustumCulled=!1,Jt.name="treffen:"+We,Jt}),jn=[new Dt(Ke.sport.lack,Ge,P),new Dt(Ke.sport.rest,zn,P),new Dt(Ke.sport.licht,_i,P)];for(let We of jn){We.frustumCulled=!1,We.instanceMatrix.setUsage(vs);for(let dt=0;dt<P;dt++)We.setMatrixAt(dt,ye.identity())}gt.forEach((We,dt)=>jn[0].setColorAt(dt,De.setHex(We)));for(let We of[...hn,...jn])i.add(We);for(let We of ve)i.remove(We),We.geometry.dispose();return ve=[],fe=jn,me(0,x.x,x.z+g,Math.PI/2),me(1,x.x,x.z-g,-Math.PI/2),this.dreiecke=[...hn,...jn].reduce((We,dt)=>We+(dt.geometry.index?dt.geometry.index.count:dt.geometry.attributes.position.count)/3*(dt.isInstancedMesh?P:1),0),!0},update(G,se,Pe,Ke,Et){Be();let Ht=se*ut(G,-.5,-.42,.7,.9),zn=Pe*1.25+G*10;for(let We=0;We<P;We++){let dt=zn+We*Math.PI,Jt=Math.sin(dt),kn=Math.cos(dt),ei=x.x+g*Jt,ti=x.z+g*kn;pe.set(Math.cos(dt)*.814-Jt*.581,0,-Math.sin(dt)*.814-kn*.581);let or=Math.atan2(pe.x,pe.z);me(We,ei,ti,or),ye.compose(ie.set(ei,c+.03,ti),Xe.setFromAxisAngle(Te,or),oe.set(3.6,1,7)),Ie.setMatrixAt(We,ye),Ie.setColorAt(We,De.copy($e).multiplyScalar(.55*Ht));for(let Ni=We;Ni<Q;Ni+=P){let Qi=_e[Ni];(Qi.alter>=1||we<0)&&(we>=0&&(Qi.alter=0),Qi.x=ei-pe.x*1.5+Math.sin(Ni*12.9+Pe)*.3,Qi.z=ti-pe.z*1.5+Math.cos(Ni*7.3+Pe)*.3,Qi.dx=Jt*.5,Qi.dz=kn*.5)}}ge.forEach((We,dt)=>Ie.setColorAt(P+dt,De.copy($e).multiplyScalar((.34+.06*Math.sin(Pe*2+dt))*Ht)));let _i=we<0?0:Math.min(.1,Math.max(0,Pe-we));we=Pe;let hn=0,jn=(We,dt,Jt,kn,ei,ti,or)=>{ye.compose(ie.set(We,dt,Jt),Et.quaternion,oe.set(kn,kn,1)),Me.setMatrixAt(hn,ye),Me.setColorAt(hn,De.setRGB(ei,ti,or,Rt)),hn++};for(let We of W)jn(We.position.x,We.position.y,We.position.z,1.7,2.6*Ht,2.2*Ht,1.7*Ht);for(let We of Y){let dt=J[We],Jt=(.7+.3*Math.sin(Pe*5+dt.ph))*Ht;jn(dt.x+(x.x-dt.x)*.05,c+1.78*dt.g,dt.z+(x.z-dt.z)*.05,.3,1.5*Jt,1.7*Jt,2*Jt)}for(let We of _e){We.alter+=_i/1.5;let dt=Math.min(1,We.alter),Jt=Math.pow(1-dt,1.4)*Math.min(1,dt*8)*.34*Ht;jn(We.x+We.dx*dt,c+.35+dt*1.3,We.z+We.dz*dt,1+dt*3.2,Jt,Jt*1.04,Jt*1.1)}Me.count=hn;for(let We of T)L(We,Math.abs(Math.sin(Pe*3.1+J[We].ph))*.1);for(let We of[...fe,ze,B,Me,Ie])We.instanceMatrix.needsUpdate=!0;Me.instanceColor.needsUpdate=!0,Ie.instanceColor.needsUpdate=!0,Le.position.copy(Se.hin),O.position.copy(Se.dort),tn(Le,se*ut(G,0,.05,.1,.13)),Pi(Le,Et),tn(O,se*ut(G,.15,.19,.26,.31)),Pi(O,Et)}}}function vb(s,e){let t=new ot,n=Nn(Ye(1.6,.9,.5),1);n.scale.set(900,150,1),n.position.set(80,70,e+1350),t.add(n);let i=Nn(Ye(.5,1.6,2),1);i.scale.set(560,100,1),i.position.set(-60,45,e+1250),t.add(i);let r=[],a=(o,l)=>s.umgebung&&s.umgebung.hoehe?s.umgebung.hoehe(o,St(8)+l):0;for(let o=0;o<16;o++){let l=Nn(Ye(1.4,1.2,.9),1);l.scale.set(5+o%3*3,3+o%2*2,1);let c=-70+o*9+o*7%5*2,h=e+650+o%4*18;l.position.set(c,a(c,h-e)+1.5+o%3*.8,h),t.add(l),r.push(l)}return{gruppe:t,update(o,l){n.material.opacity=.5*o,i.material.opacity=.35*o;for(let c=0;c<r.length;c++)r[c].material.opacity=o*(.5+.2*Math.sin(l*1.3+c*2.1));t.visible=o>.01}}}var ar,Fi,bT,yu=pt(()=>{It();Di();Bh();Qn();rn();oi();Qs();ar={TREFFEN:.28,WEITE_AN:.28,WEITE_VOLL:.6,ANKER_AN:.3,ANKER_VOLL:.45,LOGO:.62};Fi=s=>s.index?s.toNonIndexed():s;bT={car:[4.3,1.95],sport:[4.5,2.15],van:[5.35,2.2],caravan:[6.65,2.25],bike:[2.1,.8]}});function Mb(s){return Ss((e,t,n)=>{let i=e.createLinearGradient(0,0,t,0),[r,a,o,l]=s?["#000","#000","#fff","#fff"]:["#fff","#fff","#000","#000"];i.addColorStop(0,r),i.addColorStop(s?.06:.7,a),i.addColorStop(s?.3:.94,o),i.addColorStop(1,l),e.strokeStyle=i,e.lineWidth=5,e.beginPath(),e.moveTo(0,6),e.lineTo(t,6),e.moveTo(0,n-6),e.lineTo(t,n-6),e.stroke()})}function ET(s,e=.22){let t=s.length,n=[],i=[];for(let a=0;a<t;a++){let o=s[Math.max(0,a-1)],l=s[Math.min(t-1,a+1)],c=l[0]-o[0],h=l[1]-o[1],u=Math.hypot(c,h)||1;c/=u,h/=u;let f=h*e/2,d=-c*e/2,m=s[a][2],[x,g]=s[a];n.push(x+f,-.02,g+d,x+f,m,g+d,x-f,m,g-d,x-f,-.02,g-d)}for(let a=0;a+1<t;a++){let o=a*4,l=o+4;for(let[c,h]of[[0,1],[1,2],[2,3]])i.push(o+c,o+h,l+c,o+h,l+h,l+c)}let r=new ht;return r.setAttribute("position",new ft(n,3)),r.setIndex(i),r.computeVertexNormals(),r}function Eb(s,e){let i=document.createElement("canvas");i.width=512,i.height=368;let r=i.getContext("2d");r.fillStyle="#06090d",r.fillRect(0,0,512,368);let a=r.createLinearGradient(0,0,0,368);a.addColorStop(0,"rgba(44,184,227,0.14)"),a.addColorStop(1,"rgba(44,184,227,0)"),r.fillStyle=a,r.fillRect(0,0,512,368);let o=e?"#ff453a":"#30d158";r.beginPath(),r.arc(44,46,12,0,Math.PI*2),r.fillStyle=o,r.fill(),r.fillStyle="#fff",r.font=`700 40px ${it}`,r.textAlign="left",r.textBaseline="middle",r.fillText(s,70,46),r.fillStyle="#fff",r.font=`700 110px ${it}`,r.textAlign="center",r.fillText(e?"48":"22",256,170),r.fillStyle="rgba(235,235,245,0.75)",r.font=`600 34px ${it}`,r.fillText("kW",256,240),e?(r.fillStyle="rgba(255,255,255,0.12)",r.fillRect(48,296,416,22),r.fillStyle="#2cb8e3",r.fillRect(48,296,416*.64,22),r.fillStyle="rgba(235,235,245,0.85)",r.font=`600 30px ${it}`,r.textAlign="right",r.fillText("64 %",464,344)):(r.strokeStyle="rgba(255,255,255,0.35)",r.lineWidth=4,r.strokeRect(206,290,100,50),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(306,305,8,20),r.fillStyle="#30d158",r.fillRect(212,296,88,38));let l=new Lt(i);return l.colorSpace=at,l.anisotropy=4,l.minFilter=en,l}function ST(){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.fillStyle="#1b4f9c",t.fillRect(0,0,256,256),t.strokeStyle="#fff",t.lineWidth=10,t.strokeRect(10,10,236,236),t.fillStyle="#fff",t.strokeStyle="#fff",t.lineWidth=12,t.lineCap="round",t.fillRect(60,130,136,14),t.fillRect(118,144,20,60),t.fillRect(40,176,50,12),t.fillRect(166,176,50,12),t.beginPath(),t.moveTo(56,188),t.lineTo(56,212),t.moveTo(200,188),t.lineTo(200,212),t.stroke(),t.beginPath(),t.moveTo(128,112),t.lineTo(92,112),t.lineTo(128,40),t.lineTo(164,112),t.closePath(),t.fill();let n=new Lt(e);return n.colorSpace=at,n.anisotropy=4,n}async function Sb(s,e,t){let n=await Promise.all([0,1,2].map(r=>t.includes(r)?s.glb(`welt/modelle/${e}_lod${r}.glb`):Promise.resolve(null))),i=n.find(r=>r);return{name:e,stufen:n,extras:i?{...i.scene.userData||{}}:{},da:!!i}}function Tb(s,e){let t=St(6),n=s.woerter,i=new ne(new lt(25+dp,82),s.strasse.zusatzMaterial(Ss(()=>{},64,64)));i.rotation.x=-Math.PI/2,i.position.set((dp-25)/2,.004,7),i.name="boden:vorplatz",e.add(i);let r=Mu(vT),a=Mu(_T),o=Mu(yT),l=Mu(MT),c=new ne(sr(r,a,48),s.strasse.zusatzMaterial(Mb(!0))),h=new ne(sr(o,l,48),s.strasse.zusatzMaterial(Mb(!1)));for(let W of[c,h])W.position.y=.012,W.frustumCulled=!1,W.name="fahrbahn:tankstelle",e.add(W);{let W=Ss((Le,O,Se)=>{Le.lineWidth=6,Le.beginPath(),Le.moveTo(0,Se-5),Le.lineTo(O,Se-5),Le.stroke(),Le.setLineDash([24,24]),Le.beginPath(),Le.moveTo(0,5),Le.lineTo(O,5),Le.stroke()}),[X,Q,K]=_b.ein,[Z,de,Me]=_b.aus,_e=mi([-3.62,X],[-3.62,K]),ge=Le=>{let O=X+(K-X)*Le;return O<Q?mi([-3.62,X],[-7.1,Q])((O-X)/(Q-X)):mi([-7.1,Q],[-7.1,K])((O-Q)/(K-Q))},Ie=mi([-3.62,Z],[-3.62,Me]),$e=Le=>{let O=Z+(Me-Z)*Le;return O<de?mi([-7.1,Z],[-7.1,de])((O-Z)/(de-Z)):mi([-7.1,de],[-3.62,Me])((O-de)/(Me-de))};for(let[Le,O]of[[_e,ge],[Ie,$e]]){let Se=new ne(sr(Le,O,48),s.strasse.zusatzMaterial(W));Se.position.y=.012,Se.frustumCulled=!1,Se.name="fahrbahn:tankstelle",e.add(Se)}s.strasse.uniforms.randAus2.value.set(t+X,t+Me)}{let W=(K,Z,de)=>Array.from({length:Z+1},(Me,_e)=>{let ge=_e/Z,Ie=K(ge);return[Ie.x,Ie.z,yb*de(ge)]}),X=new Ne({color:7369850,roughness:.88,side:Pt}),Q=[...W(r,16,K=>Mt(0,.32,K)),[dp,22,yb],...W(o,16,K=>Mt(1,.68,K))];for(let K of[Q,W(a,16,Z=>Mt(0,.35,Z)*Mt(1,.82,Z)),W(l,16,Z=>Mt(0,.18,Z)*Mt(1,.65,Z))]){let Z=new ne(ET(K),X);Z.frustumCulled=!1,e.add(Z)}}let u=new st({color:10132640});for(let W of[-1,5,11,17]){let X=new ne(new lt(5,.12),u);X.rotation.x=-Math.PI/2,X.position.set(-13.4,.01,W),e.add(X)}let d=[[-16.8,2,"frei"],[-16.8,8,"frei"],[-16.8,14,"belegt"]].map(([W,X,Q])=>{let K=new ot;K.position.set(W,0,X),K.rotation.y=Math.PI/2;let Z=new ne(new Oe(.46,1.7,.3).translate(0,.85,0),new Ne({color:12567238,roughness:.6}));K.add(Z);let de=Q==="belegt"?Ye(4,.35,.25):Ye(.35,4,1.2),Me=Nn(de,1.8);return Me.position.set(0,1.2,-.3),K.add(Me),e.add(K),{s:K,vorl:Z,glut:Me,art:Q,aktuell:Z,modell:null}}),m=vn(n.frei||"Frei",{punkt:"gruen",hoehe:.8});m.position.set(-16.8,2.9,2),e.add(m);let x=vn(n.belegt||"Belegt",{punkt:"rot",hoehe:.8});x.position.set(-16.8,2.9,14),e.add(x);let g=Eb(n.frei||"Frei",!1),p=Eb(n.belegt||"Belegt",!0),v=wn(Ye(.4,4.5,1.4)),E=wn(Ye(5,.45,.3)),b=-15.5,M=14,y=s.convoy.parkendesAuto(2768174,new R(b+2.3,0,t+M),-Math.PI/2),S=new ot;S.add(new ne(new Oe(.13,.03,.17),new Ne({color:723982,roughness:.4,metalness:.5})));let _=new ne(new Mn(.012,8,6),wn(Ye(.3,3,4)));_.position.set(0,.02,.05),S.add(_),y.g.add(S);let w=new Ne({color:657930,roughness:.9}),C=new ne(new ht,w);C.frustumCulled=!1,s.szene.add(C),e.updateMatrixWorld(!0),e.attach(y.g),e.attach(C);let I=new R(-16.68,.82,t+M),U=new R,H=()=>{let W=y.laenge||4.6,X=y.pos&&y.pos.vornL?y.pos.vornL:null;y.g.position.x=b+W/2,S.position.set(X?X.x*.55:.5,X?Math.max(.6,X.y+.3):.66,W/2-.5),S.rotation.x=-.12,y.g.updateMatrixWorld(!0),S.getWorldPosition(U);let Q=[];for(let K=0;K<=5;K++){let Z=K/5,de=Math.sin(Math.PI*Z);Q.push(new R(Vt(I.x,U.x,Z),Vt(I.y,U.y,Z)-.5*de,Vt(I.z,U.z,Z)+.07*Math.sin(Z*7)))}C.geometry.dispose(),C.geometry=new Uo(new Gs(Q),24,.018,8,!1)};H();let P=new Fn(14217471,0,9,2);P.position.set(-15.6,2.2,8),e.add(P);let D=new ot;D.position.set(-14.5,0,32);for(let[W,X]of[[-3.2,-3.2],[3.2,-3.2],[-3.2,3.2],[3.2,3.2]])D.add(new ne(new kt(.2,.22,5.2,12).translate(W,2.6,X),In));D.add(new ne(new Oe(11,.5,9.5).translate(0,5.45,0),new Ne({color:2369582,roughness:.6,metalness:.2})));let k=wn(Ye(.6,2.2,2.8));D.add(new ne(new Oe(11,.4,.08).translate(0,5.2,4.75),k)),D.add(new ne(new Oe(.08,.4,9.5).translate(5.5,5.2,0),k)),D.add(new ne(new Oe(.08,.4,9.5).translate(-5.5,5.2,0),k));for(let[W,X]of[[-2.6,-2.4],[0,-2.4],[2.6,-2.4],[-2.6,2.4],[0,2.4],[2.6,2.4]]){let Q=new ne(new lt(1.8,.6),wn(Ye(7,7,8)));Q.rotation.x=Math.PI/2,Q.position.set(W,5.18,X),D.add(Q)}let z=[[-1.8,0],[1.8,0]].map(([W,X])=>{let Q=new ot;Q.position.set(W,0,X),Q.rotation.y=Math.PI/2;let K=new ne(new Oe(.7,1.6,.5).translate(0,.8,0),new Ne({color:13159117,roughness:.5}));return Q.add(K),D.add(Q),{h:Q,vorl:K}}),N=new Fn(14674175,0,30,2);N.position.set(0,4.7,0),D.add(N),e.add(D);let F=new ot;F.position.set(-8.8,0,24),F.rotation.y=Math.PI/2+.25;let V=(()=>{let W=document.createElement("canvas");W.width=512,W.height=640;let X=W.getContext("2d");X.fillStyle="#0d1116",X.fillRect(0,0,512,640);let[Q,K,Z]=(n.preise||"Diesel,Super,Preise live in FREQ").split(",");X.fillStyle="#2cb8e3",X.fillRect(0,0,512,110),X.fillStyle="#06252d",X.font=`700 54px ${it}`,X.textAlign="center",X.textBaseline="middle",X.beginPath(),X.moveTo(256,20),X.quadraticCurveTo(300,70,256,92),X.quadraticCurveTo(212,70,256,20),X.fill(),X.fillStyle="#fff",X.font=`600 46px ${it}`,X.textAlign="left";for(let Me=0;Me<2;Me++)X.fillStyle="rgba(255,255,255,0.08)",X.fillRect(24,150+Me*170,464,130),X.fillStyle="#fff",X.fillText([Q,K][Me].trim(),44,215+Me*170),X.fillStyle="#ffd60a",X.font=`700 58px ${it}`,X.textAlign="right",X.fillText("\u2014,\u2014\u2014",468,215+Me*170),X.font=`600 46px ${it}`,X.textAlign="left";X.fillStyle="#2cb8e3",X.font=`600 34px ${it}`,X.textAlign="center",X.fillText((Z||"Preise live in FREQ").trim(),256,560);let de=new Lt(W);return de.colorSpace=at,de.anisotropy=4,de.minFilter=en,de})(),j=new st({map:V}),ae=new ne(new lt(1.44,1.84),j);ae.position.set(0,3.4,0),F.add(ae),F.add(new ne(new kt(.08,.08,2.4,12).translate(0,1.2,0),In)),e.add(F);let he=vn(n.offen||"Offen bis 22:00",{punkt:"gruen",hoehe:.95});he.position.set(-9,6.6,32),e.add(he);let ce=new ot;ce.position.set(-22,0,-18);let ye=new ne(new Vi(4.2,28),new Ne({color:2369323,roughness:1}));ye.rotation.x=-Math.PI/2,ye.position.set(-.4,.008,.2),ce.add(ye);let Xe=new Ne({color:5914410,roughness:.82}),ie=new Ne({color:3811352,roughness:.9});for(let[W,X]of[[-.7,.42],[0,.8],[.7,.42]]){let Q=X>.5?4:2,K=X/Q;for(let Z=0;Z<Q;Z++)ce.add(new ne(new Oe(1.8,.05,K-.02).translate(0,W===0?.76:.48,W-X/2+K*(Z+.5)),Xe))}for(let W of[-.7,.7]){ce.add(new ne(new Oe(.08,.74,.08).translate(W,.37,0),ie)),ce.add(new ne(new Oe(.08,.06,1.7).translate(W,.44,0),ie));for(let X of[-.7,.7])ce.add(new ne(new Oe(.08,.46,.08).translate(W,.23,X),ie))}let oe=new Ne({color:3817029,roughness:.55,metalness:.6});ce.add(new ne(new kt(.04,.05,2.6,10).translate(-1.6,1.3,.8),oe));let Te=new ne(new Mn(.14,14,10),wn(Ye(8,5,2)));Te.position.set(-1.6,2.62,.8),ce.add(Te);let De=Nn(Ye(2.6,1.6,.6),3);De.position.copy(Te.position),ce.add(De);let Re=new Fn(16757866,0,10,2);Re.position.copy(Te.position),ce.add(Re);let Ge=new ot;Ge.position.set(1.7,0,-1.3),Ge.add(new ne(new kt(.2,.18,.9,16).translate(0,.45,0),new Ne({color:2046762,roughness:.6,metalness:.3}))),Ge.add(new ne(new kt(.22,.22,.08,16).translate(0,.94,0),new Ne({color:1452574,roughness:.5,metalness:.4}))),Ge.add(new ne(new Oe(.18,.08,.05).translate(0,.8,.2),new Ne({color:329223}))),ce.add(Ge);let gt=new ot;gt.position.set(5.2,0,5.5),gt.rotation.y=Math.PI/2+.3,gt.add(new ne(new kt(.035,.035,2.2,10).translate(0,1.1,0),oe));let le=new ne(new lt(.6,.6),new Ne({map:ST(),roughness:.5,side:Pt}));le.position.set(0,2.25,.02),gt.add(le),ce.add(gt),ce.traverse(W=>{W.isMesh&&W.layers.enable(Ut)}),e.add(ce);let fe=vn(n.pause||"Pause? Rastplatz in 2 km",{punkt:"cyan",hoehe:.85});fe.position.set(-22,2.6,-18),e.add(fe);let ve=s.convoy.parkendesAuto(15000026,new R(pp.x,0,t+pp.z),pp.drehung,98);e.updateMatrixWorld(!0),e.attach(ve.g);let me=new ne(new ht,wn(Ye(1.5,.95,.42)));{let W=(X,Q,K)=>{let Z=2.1-K/2,de=2.1+K/2,Me=X-Q/2,_e=X+Q/2,ge=1.116;return[ge,Z,_e,ge,Z,Me,ge,de,Me,ge,Z,_e,ge,de,Me,ge,de,_e]};me.geometry.setAttribute("position",new ft([...W(-.3,1.04,.54),...W(-2.2,.74,.54)],3))}me.visible=!1,me.frustumCulled=!1,me.layers.enable(Ut),ve.g.add(me);let J=[];for(let[W,X]of[[-7.75,-16],[-7.75,30]]){e.add(new ne(new kt(.05,.07,4.2,8).translate(W,2.1,X),In));let Q=new ne(new Mn(.16,12,8),wn(Ye(8,8,9)));Q.position.set(W,4.25,X),e.add(Q);let K=Nn(Ye(2.2,2.3,2.6),1.1);K.position.copy(Q.position),e.add(K),J.push(K)}let be=[],xe=[],Ae=0,ze=!1,B=!1,je=1,et=()=>{if(!B||!be.length)return;let W=s.umgebung&&s.umgebung.lichtPool;if(!(!W||typeof W.anmelden!="function"))try{let X=be.slice().sort((Q,K)=>K.prioritaet-Q.prioritaet).slice(0,Ae);for(let Q=xe.length-1;Q>=0;Q--)X.includes(xe[Q].a)||(W.abmelden(xe[Q].eintrag),xe.splice(Q,1));for(let Q of X)xe.some(K=>K.a===Q)||xe.push({a:Q,eintrag:W.anmelden(Q.objekt,{prioritaet:Q.prioritaet})});ze=X.length>0,B=!1}catch{}},L=[],T=(W,X)=>{let Q=Hh(W,X);return L.push({lod:Q,indizes:W.stufen.map((K,Z)=>K?Z:-1).filter(K=>K>=0)}),Q},Y=!1,$=!1;return $i(s.welt&&s.welt.renderer,e),{eigeneModelle:!1,async ladeModelle(W,X){let Q=X.stufeName||"hoch",K=Q==="hoch"?[1,2]:Q==="mittel"?[1,2]:[2],[Z,de,Me]=await Promise.all([Sb(W,"ladesaeule",[nt(X.stufe.lod|0,0,2)]),Sb(W,"tankstelle",K),Q==="hoch"?W.textur("welt/modelle/tankstelle_lightmap.webp",{srgb:!0,wiederholen:!1}):Promise.resolve(null)]);if(Z&&Z.da){for(let _e of d){let ge=T(Z,X.stufe.lodWeite),Ie=_e.art==="belegt";ge.traverse(Le=>{if(!Le.isMesh)return;let O=Le.material&&Le.material.name||"";Le.name==="ladesaeule_display"||O==="licht_ladesaeule_display"?Le.material=new st({map:Ie?p:g}):(Le.name==="ladesaeule_status"||O==="licht_ladesaeule_status")&&(Le.material=Ie?E:v)});for(let Le of ge.levels)_s(Le.object);_e.s.remove(_e.aktuell),_e.s.add(ge),_e.aktuell=ge,_e.modell=ge,_e.glut.scale.setScalar(1.1),_e.glut.position.set(0,1.26,.2);let $e=ge.levels[0]&&ge.levels[0].object;if($e)for(let Le of Fr($e))be.push({objekt:Le,prioritaet:Ie?2:1})}Y=!0}if(de&&de.da){let _e=T(de,X.stufe.lodWeite),ge=de.extras||{},Ie=!1;if(_e.traverse(O=>{if(!O.isMesh)return;let Se=O.material&&O.material.name||"";(/^preistafel_flaeche/.test(O.name)||Se==="licht_preistafel")&&(O.material=j,Ie=!0)}),Me&&de.stufen[0]){Me.flipY=!1,Me.channel=1,Me.colorSpace=at;let O=_e.levels[0]&&_e.levels[0].object;O&&O.traverse(Se=>{if(!Se.isMesh)return;let ue=Array.isArray(Se.material)?Se.material:[Se.material];for(let we of ue)we&&we.isMeshStandardMaterial&&Se.geometry.attributes.uv1&&(we.lightMap=Me,we.lightMapIntensity=13,we.needsUpdate=!0)})}for(let O of _e.levels)_s(O.object);D.clear(),D.add(N),D.add(_e),_e.rotation.y=Math.PI/2;let $e=typeof ge.tiefe_m=="number"?ge.tiefe_m:9.5;D.position.x=-(8.8+$e/2),N.position.set(0,Math.max(3,(typeof ge.dach_hoehe_m=="number"?ge.dach_hoehe_m:5)-.6),0),Ie&&(F.visible=!1,he.position.set(D.position.x+5,Math.max(7.5,(typeof ge.hoehe_m=="number"?ge.hoehe_m:5.5)+2.2),32));let Le=_e.levels[0]&&_e.levels[0].object;if(Le)for(let O of Fr(Le))be.push({objekt:O,prioritaet:/dach/.test(O.name)?2:1});$=!0}Y&&$&&(this.eigeneModelle=!0),H(),me.visible=(ve.laenge||0)>6,B=!0,et(),$i(X.renderer,e)},setzeRequisiten(W){if(!Y)for(let X of d){let Q=Wh(W,X.art==="belegt"?"Ladesaeule_belegt":"Ladesaeule_frei");Q&&(X.s.remove(X.aktuell),X.s.add(Q),X.aktuell=Q,Q.traverse(K=>{K.isMesh&&/^Display/.test(K.name)&&(Za(K.geometry),K.material=new st({map:X.art==="belegt"?p:g}))}))}if(!$){for(let Q of z){let K=Wh(W,"Zapfsaeule");K&&(Q.h.remove(Q.vorl),Q.h.add(K))}let X=Wh(W,"Preistafel");X&&(F.clear(),F.add(X),X.traverse(Q=>{Q.isMesh&&Q.name==="Tafel"&&(Za(Q.geometry),Q.material=j)}))}},setzeStufe(W){for(let{lod:X,indizes:Q}of L)X.levels.forEach((K,Z)=>{K.distance=Z===0?0:kr[Q[Z]]*W.lodWeite});je=W.lichter>0?1:0,Ae=W.lichter|0,B=!0},update(W,X,Q,K,Z){C.visible=y.g.visible=X>.01,et(),N.intensity=(ze&&$?30:110)*X*je,Re.intensity=16*X*je,P.intensity=(Y&&!ze?14:0)*X*je;for(let Me=0;Me<d.length;Me++)d[Me].glut.material.opacity=(.45+.2*Math.sin(Q*2+Me))*X*(Y?.5:1);De.material.opacity=(.7+.1*Math.sin(Q*7.3)*Math.sin(Q*3.1))*X;for(let Me of J)Me.material.opacity=.45*X;tn(fe,X*ut(W,-.1,.08,.4,.5)),Pi(fe,Z.kamera);let de=X*ut(W,.1,.22,.66,.78);tn(m,de),tn(x,de),Pi(m,Z.kamera),Pi(x,Z.kamera),tn(he,X*ut(W,.35,.48,.76,.84)),Pi(he,Z.kamera)}}}var vT,_T,yT,MT,_b,dp,yb,Mu,pp,wb=pt(()=>{It();Di();Qn();ri();Js();rn();oi();yu();yl();vT=[[-3.62,-58],[-3.62,-46],[-5.6,-36],[-7.2,-30]],_T=[[-7.1,-58],[-8.6,-50],[-12.2,-40],[-13.2,-31]],yT=[[-7.2,44],[-5.6,50],[-3.62,58],[-3.62,70]],MT=[[-13.2,45],[-12.2,54],[-8.6,62],[-7.1,70]],_b={ein:[-128,-100,-58],aus:[70,115,150]},dp=-7.2,yb=.13,Mu=([s,e,t,n])=>i=>{let r=1-i;return new R(r*r*r*s[0]+3*r*r*i*e[0]+3*r*i*i*t[0]+i*i*i*n[0],0,r*r*r*s[1]+3*r*r*i*e[1]+3*r*i*i*t[1]+i*i*i*n[1])};pp={x:-26.4,z:-17.4,drehung:.08}});function TT(s){let n=document.createElement("canvas");n.width=1024,n.height=384;let i=n.getContext("2d");i.fillStyle="#05070a",i.fillRect(0,0,1024,384);let r=i.createLinearGradient(0,0,0,384);r.addColorStop(0,"rgba(44,184,227,0.10)"),r.addColorStop(1,"rgba(44,184,227,0)"),i.fillStyle=r,i.fillRect(0,0,1024,384);let a=(l,c,h,u,f,d,m)=>{let x=Math.PI*.75,g=Math.PI*2.25;i.lineCap="round",i.lineWidth=10,i.strokeStyle="rgba(255,255,255,0.10)",i.beginPath(),i.arc(l,c,h,x,g),i.stroke(),i.strokeStyle="#2cb8e3",i.beginPath(),i.arc(l,c,h,x,x+(g-x)*u),i.stroke(),i.strokeStyle="rgba(255,255,255,0.35)",i.lineWidth=3;for(let p=0;p<=m;p++){let v=x+(g-x)*p/m;i.beginPath(),i.moveTo(l+Math.cos(v)*(h-18),c+Math.sin(v)*(h-18)),i.lineTo(l+Math.cos(v)*(h-30),c+Math.sin(v)*(h-30)),i.stroke()}i.fillStyle="#fff",i.font=`700 88px ${it}`,i.textAlign="center",i.textBaseline="middle",i.fillText(f,l,c-6),i.fillStyle="rgba(235,235,245,0.7)",i.font=`500 26px ${it}`,i.fillText(d,l,c+56)};a(230,190,150,.34,"68",s.einheit||"km/h",10),a(794,190,150,.26,"2.1","\xD7 1000",8),i.strokeStyle="#fff",i.lineWidth=9,i.lineCap="round",i.lineJoin="round",i.beginPath(),i.moveTo(484,150),i.lineTo(484,104),i.lineTo(516,104),i.stroke(),i.beginPath(),i.moveTo(500,88),i.lineTo(520,104),i.lineTo(500,120),i.stroke(),i.fillStyle="#fff",i.font=`700 40px ${it}`,i.textAlign="center",i.textBaseline="middle",i.fillText(s.abstand||"350 m",512,190),i.strokeStyle="rgba(255,255,255,0.75)",i.lineWidth=3,i.strokeRect(440,236,132,44),i.fillStyle="rgba(255,255,255,0.75)",i.fillRect(572,248,6,20),i.fillStyle="#30d158",i.fillRect(446,242,120*.82,32),i.fillStyle="rgba(235,235,245,0.85)",i.font=`600 28px ${it}`,i.fillText("82 %",512,314);let o=new Lt(n);return o.colorSpace=at,o.anisotropy=4,o.minFilter=en,o}function Rb(s,e){let t=s.convoy.autos[0],n=s.woerter,i=new ot,r=new Ne({color:1316120,roughness:.85});i.add(new ne(new Oe(1.76,.24,.6).translate(0,.76,.98),r)),i.add(new ne(new Oe(.42,.42,1).translate(0,.38,.5),r));let a=new st({map:s.carplay.textur,side:Pt}),o=new ne(new lt(.66,.31),a);o.position.set(-.08,1,.74),o.rotation.set(.2,Math.PI,0),i.add(o);let l=new ne(new wi(.19,.022,10,36),new Ne({color:1710879,roughness:.6}));l.position.set(.4,.86,.58),l.rotation.x=-1.25,i.add(l);let c=new ot;c.add(i),c.visible=!1;let h=new Fn(2930915,0,2.5,2);h.position.set(-.08,1,.6),c.add(h),t.g.add(c),$i(s.welt&&s.welt.renderer,c);let u=TT(n),f=new st({map:u,side:Pt}),d=wn(Ye(.22,.8,1.05)),m=i,x=null,g=[],p=!1,v=null,E=1,b=new R(.37,1.1,.134),M=[],y=new R,S=wn(Ye(.12,.3,.4)),_=new Set,w=(k,z)=>{if(!_.has(k)){if(_.add(k),k.emissive){let N=k.emissive,F=N.r<N.g&&N.r<N.b&&N.g+N.b>.6;N.setHex(F?668480:0),k.emissiveIntensity=1}/^Leder/.test(z)?(k.color.setHex(1974308),k.roughness=.62,k.metalness=0):/Alcantara|Teppich/.test(z)?(k.color.setHex(723983),k.roughness=.95,k.metalness=0):/Metall|Chrom/.test(z)?(k.color.setHex(3816772),k.roughness=.35,k.metalness=.85):/Naht/.test(z)?(k.color.setHex(2930915),k.emissive&&k.emissive.setHex(866888),k.roughness=.6):/Glas/.test(z)?(k.color.setHex(7243672),k.transparent=!0,k.opacity=.045,k.roughness=.12,k.metalness=0,k.depthWrite=!1,k.envMapIntensity=.05,k.side=Pt):/Display_Rahmen/.test(z)?(k.color.setHex(329223),k.roughness=.5):(k.color.setHex(1184534),k.roughness=.8,k.metalness=.05),k.map&&(k.map=null),k.needsUpdate=!0}},C=k=>{let z=null;if(k.traverse(ye=>{!z&&ye.isMesh&&(ye.name==="Instrumente"||ye.material&&ye.material.name==="Instrumente")&&(z=ye)}),!z)return;z.geometry.computeBoundingBox();let N=z.geometry.boundingBox,F=N.getSize(new R),V=N.getCenter(new R),j=Math.max(.2,F.x*.92),ae=j*.42,he=new ne(new lt(j,ae),f);he.position.set(V.x,N.max.y+ae*.36,N.max.z-.02),he.rotation.x=-.14,he.frustumCulled=!1;let ce=new ne(new Oe(j*1.1,ae*1.16,.03),new Ne({color:526603,roughness:.55,metalness:.1}));ce.position.set(0,0,-.018),he.add(ce),z.add(he),z.material=new Ne({color:658189,roughness:.6})},I=k=>{k.traverse(z=>{if(!z.isMesh)return;z.frustumCulled=!1,z.layers.disable(Ut);let N=z.material&&z.material.name||"";/Glas/.test(N)&&(z.castShadow=!1,z.receiveShadow=!1,z.renderOrder=4,z.visible=!1),z.name==="Display"||N==="display"||N==="Display"?(Za(z.geometry),z.material=a):z.name==="Instrumente"||N==="Instrumente"?(Za(z.geometry),z.material=f):N==="licht_ambiente"?z.material=d:N==="Bildschirm_klein"?z.material=S:z.material&&z.material.isMeshStandardMaterial&&(w(z.material,N),z.material.envMapIntensity=.8)})},U=0,H=!1,P=[],D=()=>{if(!H||!g.length)return;let k=s.umgebung&&s.umgebung.lichtPool;if(!(!k||typeof k.anmelden!="function"))try{for(let z of P.splice(0))k.abmelden(z);for(let z of g.slice(0,U))z.userData.staerke=Math.min(+z.userData.staerke||3,1.8),P.push(k.anmelden(z,{prioritaet:2}));p=P.length>0,H=!1}catch{}};return{innen:c,eigeneModelle:!1,get masse(){return v},get skala(){return E},get augen(){return b},async ladeModelle(k,z){let N=nt(Math.max(1,z.stufe.lod|0),1,2),F=await Dr(k,"innenraum",N,N);if(!F||!F.da)return;v=F.extras||null,x=Hh(F,z.stufe.lodWeite),M=F.stufen.map((he,ce)=>he?ce:-1).filter(he=>he>=0),x.rotation.y=Math.PI;let V=typeof v.hoehe_m=="number"?v.hoehe_m:1.6,j=new ln;try{j.setFromObject(t.modell)}catch{j.makeEmpty()}let ae=j.isEmpty()?1.2:j.max.y-j.min.y;E=nt((ae-.03)/V,.55,1),ae>1.1&&ae<1.45&&Math.abs(V-1.6)<.2&&(E=.815*Es),x.scale.setScalar(E),I(x),C(x),g=Fr(x);for(let he of x.levels)_s(he.object,{behalten:/^(Display|Instrumente|licht_ambiente)$/});typeof v.augenpunkt_x_m=="number"&&b.set(-v.augenpunkt_x_m*E,(v.augenpunkt_z_m||1.1)*E,(v.augenpunkt_y_m||.134)*E),c.remove(m),c.add(x),m=x,g[0]&&(g[0].getWorldPosition(h.position),c.worldToLocal(h.position),h.color.copy(Fa(g[0],2930915))),this.eigeneModelle=!0,H=!0,D(),$i(z.renderer,c)},setzeInnenraum(k){if(x||!k)return;let z=k.scene.clone(!0);z.rotation.y=Math.PI,I(z),c.remove(m),c.add(z),m=z},setzeStufe(k){h.userData.stufeAn=k.lichter>0,h.userData.an=h.userData.stufeAn&&!p,U=k.lichter>=6?2:k.lichter>=3?1:0,H=!0,x&&x.levels.forEach((z,N)=>{z.distance=N===0?0:kr[M[N]]*k.lodWeite})},update(k,z,N,F,V){c.visible=z>.02,y.copy(V.kamera.position),t.g.worldToLocal(y),t.modell.visible=!(z>.05&&Math.abs(y.x)<.95&&y.y>.3&&y.y<1.4&&y.z>-1.3&&y.z<3),D(),h.intensity=(!p&&h.userData.stufeAn!==!1?.5:0)*z,s.convoy.innenGlas=Math.max(s.convoy.innenGlas,z*ut(k,-.2,.05,.86,.97)),z>.05&&s.carplay.zeichne(k,V.g,N)}}}var Ab=pt(()=>{It();Di();Qn();ri();Js();rn();oi();nr();yu()});function Cb(s,e){let t=St(8),n=new R,i=xb(s,t);e.add(i.gruppe);let r=vb(s,0);e.add(r.gruppe);let a=new R(Ln,0,(8+ar.ANKER_AN)*150);return{eigeneModelle:!0,async ladeModelle(o){this.eigeneFahrzeuge=await i.ladeModelle(o)},update(o,l,c,h,u){let f=s.umgebung.himmelUniforms,d=ut(o,ar.WEITE_AN-.05,ar.WEITE_VOLL,2,3);f.aurora.value=Math.max(f.aurora.value,.16*l*ut(o,.35,.65,2,3)),f.sterne.value=Math.max(f.sterne.value,.6+l*ut(o,.25,.6,2,3)*.7),i.update(o,l,c,h,u.kamera),r.update(l*ut(o,-.3,.1,2,3)*(.5+.5*d),c),"davonfahren"in s.convoy&&(s.convoy.davonfahren=Math.max(s.convoy.davonfahren||0,l*Mt(ar.WEITE_AN,ar.WEITE_VOLL,o)));let m=s.welt&&s.welt.fahrt;m&&(m.anker=a,m.ankerMisch=l*Mt(ar.ANKER_AN,ar.ANKER_VOLL,o)),n.set(0,0,-30).applyMatrix4(u.kamera.matrixWorld),s.funken.update(c,n,l*ut(o,.55,.75,2,3),u.dpr)}}}var Pb=pt(()=>{It();nr();rn();oi();yu()});function Ib(s){let e=[null,nb,sb,lb,db,gb,Tb,Rb,Cb],t=[];for(let n=0;n<zr;n++){let i=new ot;i.position.z=St(n),s.szene.add(i);let r=e[n]?e[n](s,i):{update(){}};r.gruppe=i,t.push(r)}return t}function Lb(s,e){let t=Math.max(0,Math.abs(e-(s+.5))-.5);return nt(1-t/.5)}var mp=pt(()=>{It();rn();oi();ib();rb();cb();pb();bb();wb();Ab();Pb()});var Eu,kb=pt(()=>{It();Eu=class extends Oo{constructor(e){super(e),this.type=xn}parse(e){let a=function(_,w){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(w||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(w||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(w||""))}},u=function(_,w,C){w=w||1024;let U=_.pos,H=-1,P=0,D="",k=String.fromCharCode.apply(null,new Uint16Array(_.subarray(U,U+128)));for(;0>(H=k.indexOf(`
`))&&P<w&&U<_.byteLength;)D+=k,P+=k.length,U+=128,k=String.fromCharCode.apply(null,new Uint16Array(_.subarray(U,U+128)));return-1<H?(C!==!1&&(_.pos+=P+H+1),D+k.slice(0,H)):!1},f=function(_){let w=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,k;for((_.pos>=_.byteLength||!(D=u(_)))&&a(1,"no header found"),(k=D.match(w))||a(3,"bad initial token"),P.valid|=1,P.programtype=k[1],P.string+=D+`
`;D=u(_),D!==!1;){if(P.string+=D+`
`,D.charAt(0)==="#"){P.comments+=D+`
`;continue}if((k=D.match(C))&&(P.gamma=parseFloat(k[1])),(k=D.match(I))&&(P.exposure=parseFloat(k[1])),(k=D.match(U))&&(P.valid|=2,P.format=k[1]),(k=D.match(H))&&(P.valid|=4,P.height=parseInt(k[1],10),P.width=parseInt(k[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},d=function(_,w,C){let I=w;if(I<8||I>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);I!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");let U=new Uint8Array(4*w*C);U.length||a(4,"unable to allocate buffer space");let H=0,P=0,D=4*I,k=new Uint8Array(4),z=new Uint8Array(D),N=C;for(;N>0&&P<_.byteLength;){P+4>_.byteLength&&a(1),k[0]=_[P++],k[1]=_[P++],k[2]=_[P++],k[3]=_[P++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=I)&&a(3,"bad rgbe scanline format");let F=0,V;for(;F<D&&P<_.byteLength;){V=_[P++];let ae=V>128;if(ae&&(V-=128),(V===0||F+V>D)&&a(3,"bad scanline data"),ae){let he=_[P++];for(let ce=0;ce<V;ce++)z[F++]=he}else z.set(_.subarray(P,P+V),F),F+=V,P+=V}let j=I;for(let ae=0;ae<j;ae++){let he=0;U[H]=z[ae+he],he+=I,U[H+1]=z[ae+he],he+=I,U[H+2]=z[ae+he],he+=I,U[H+3]=z[ae+he],H+=4}N--}return U},m=function(_,w,C,I){let U=_[w+3],H=Math.pow(2,U-128)/255;C[I+0]=_[w+0]*H,C[I+1]=_[w+1]*H,C[I+2]=_[w+2]*H,C[I+3]=1},x=function(_,w,C,I){let U=_[w+3],H=Math.pow(2,U-128)/255;C[I+0]=Ns.toHalfFloat(Math.min(_[w+0]*H,65504)),C[I+1]=Ns.toHalfFloat(Math.min(_[w+1]*H,65504)),C[I+2]=Ns.toHalfFloat(Math.min(_[w+2]*H,65504)),C[I+3]=Ns.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let p=f(g),v=p.width,E=p.height,b=d(g.subarray(g.pos),v,E),M,y,S;switch(this.type){case Wn:S=b.length/4;let _=new Float32Array(S*4);for(let C=0;C<S;C++)m(b,C*4,_,C*4);M=_,y=Wn;break;case xn:S=b.length/4;let w=new Uint16Array(S*4);for(let C=0;C<S;C++)x(b,C*4,w,C*4);M=w,y=xn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:E,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:y,colorSpace:Rt,minFilter:bt,magFilter:bt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});var gp,Db=pt(()=>{gp=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),E=0;E<p.length;++E){var b=p.charCodeAt(E);v[E]=b>96?b-97:b>64?b-39:b+4}for(var M=0,E=0;E<p.length;++E)v[M++]=v[E]<60?n[v[E]]:(v[E]-60)*64+v[++E];return v.buffer.slice(0,M)}function l(p,v,E,b,M,y,S){var _=p.exports.sbrk,w=b+3&-4,C=_(w*M),I=_(y.length),U=new Uint8Array(p.exports.memory.buffer);U.set(y,I);var H=v(C,b,M,I,y.length);if(H==0&&S&&S(C,w,M),E.set(U.subarray(C,C+b*M)),_(C-_(0)),H!=0)throw new Error("Malformed buffer data: "+H)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(E){var b=E.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function m(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),E=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(E),M=u.length;M<p;++M)u[M]=d(b);for(var M=p;M<u.length;++M)u[M].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function x(p,v,E,b,M){for(var y=u[0],S=1;S<u.length;++S)u[S].pending<y.pending&&(y=u[S]);return new Promise(function(_,w){var C=new Uint8Array(E),I=++f;y.pending+=p,y.requests[I]={resolve:_,reject:w},y.object.postMessage({id:I,count:p,size:v,source:C,mode:b,filter:M},[C.buffer])})}function g(p){var v=p.data;self.ready.then(function(E){if(!v.id)return self.close();try{var b=new Uint8Array(v.count*v.size);l(E,E.exports[v.mode],b,v.count,v.size,v.source,E.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:b},[b.buffer])}catch(M){self.postMessage({id:v.id,count:v.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,v,E,b,M){l(r,r.exports.meshopt_decodeVertexBuffer,p,v,E,b,r.exports[c[M]])},decodeIndexBuffer:function(p,v,E,b){l(r,r.exports.meshopt_decodeIndexBuffer,p,v,E,b)},decodeIndexSequence:function(p,v,E,b){l(r,r.exports.meshopt_decodeIndexSequence,p,v,E,b)},decodeGltfBuffer:function(p,v,E,b,M,y){l(r,r.exports[h[M]],p,v,E,b,r.exports[c[y]])},decodeGltfBufferAsync:function(p,v,E,b,M){return u.length>0?x(p,v,E,h[b],c[M]):a.then(function(){var y=new Uint8Array(p*v);return l(r,r.exports[h[b]],y,p,v,E,r.exports[c[M]]),y})}}})()});var wT,El,Fb=pt(()=>{It();tp();kb();Db();wT={webp:"image/webp",png:"image/png",jpg:"image/jpeg",glb:"model/gltf-binary",hdr:"application/octet-stream",json:"application/json"},El=class{constructor(e,t=""){this.basis=e||"",this.version=t||"",this.gltf=new Ga;try{gp.useWorkers(2)}catch{}this.gltf.setMeshoptDecoder(gp),this.tex=new Er,this.rgbe=new Eu,this.bericht={},this.angefragt=[],this.speicher=new Map,this.fortschritt={geladen:0,gesamt:0,dateien:0,fertig:0}}url(e){return this.basis+e+(this.version?(e.includes("?")?"&":"?")+"v="+this.version:"")}async vorab(e){let t=null;try{let i=await fetch(this.url("welt/vorab.json"));if(i.ok){let r=await i.json();t=r&&r.stufen&&r.stufen[e]}}catch{t=null}if(!Array.isArray(t)||!t.length)return!1;let n=this.fortschritt;n.gesamt=t.reduce((i,[,r])=>i+(r|0),0),n.dateien=t.length;for(let[i,r]of t){let a=(async()=>{let o=0;try{let l=await fetch(this.url(i));if(!l.ok)throw new Error("HTTP "+l.status);let c;if(l.body&&l.body.getReader){let h=l.body.getReader(),u=[];for(;;){let{done:f,value:d}=await h.read();if(f)break;u.push(d),o+=d.byteLength,n.geladen+=d.byteLength}c=new Blob(u,{type:wT[i.split(".").pop()]||""})}else c=await l.blob(),o=c.size,n.geladen+=c.size;return o!==(r|0)&&(n.gesamt+=o-(r|0)),n.fertig++,URL.createObjectURL(c)}catch(l){return n.geladen-=o,n.gesamt-=r|0,n.fertig++,console.warn("Vorab fehlgeschlagen, l\xE4dt sp\xE4ter direkt",i,l),null}})();this.speicher.set(i,a)}return await Promise.all(this.speicher.values()),!0}async quelle(e){this.angefragt.includes(e)||this.angefragt.push(e);let t=this.speicher.get(e);return(t?await t:null)||this.url(e)}freigeben(){for(let e of this.speicher.values())e.then(t=>{t&&URL.revokeObjectURL(t)});this.speicher.clear()}async textur(e,{srgb:t=!1,wiederholen:n=!0}={}){return this.tex.loadAsync(await this.quelle(e)).then(i=>(i.colorSpace=t?at:qt,n&&(i.wrapS=i.wrapT=Gn),i.anisotropy=8,this.bericht[e]="ok",i)).catch(i=>(this.bericht[e]="fehlt",console.warn("Textur fehlt",e,i),null))}async glb(e){return this.gltf.loadAsync(await this.quelle(e)).then(t=>(this.bericht[e]="ok",t)).catch(t=>(this.bericht[e]="fehlt",console.warn("Modell fehlt",e,t),null))}async hdr(e){return this.rgbe.loadAsync(await this.quelle(e)).then(t=>(t.mapping=wa,this.bericht[e]="ok",t)).catch(t=>(this.bericht[e]="fehlt",console.warn("HDRI fehlt",e,t),null))}}});function PT(s,e){let t=/(\d{1,2}):(\d{2})/.exec(String(s||"")),n=/(\d+)\s*min/i.exec(String(e||""));if(!t||!n)return"21:42";let i=parseInt(t[1],10)*60+parseInt(t[2],10)-parseInt(n[1],10);return i=(i%1440+1440)%1440,`${String(Math.floor(i/60)).padStart(2,"0")}:${String(i%60).padStart(2,"0")}`}var Sl,Nb,Ub,RT,AT,zb,Bb,Rn,Un,Kn,_n,ws,CT,Su,Hb=pt(()=>{It();Di();rn();Sl="#2cb8e3",Nb="#ff453a",Ub="#5ac8fa",RT="#d61f26",AT="rgba(28,28,30,0.92)",zb="rgba(235,235,245,0.75)",Bb="rgba(255,255,255,0.14)",Rn=1280,Un=600,Kn=112,_n=700,ws=392,CT=160,Su=class{constructor(e,t){this.w=e||{},this.logo=t||null,this.c=document.createElement("canvas"),this.c.width=Rn,this.c.height=Un,this.x=this.c.getContext("2d"),this.textur=new Lt(this.c),this.textur.colorSpace=at,this.textur.anisotropy=4,this.textur.minFilter=bt,this.textur.magFilter=bt,this.textur.generateMipmaps=!1,this.schluessel="",this.zuletzt=-1,this.namen=(this.w.namen||"Anna,Ben,Mia,Tom").split(",").map(i=>i.trim()),this.uhr=PT(this.w.ankunft,this.w.rest);let n=String(this.w.blitzer||"Blitzer \xB7 800 m").split("\xB7");this.blitzerWeit=(n[1]||"800 m").trim(),this.raster(this.x,0),this.textur.needsUpdate=!0}zeichne(e,t,n){let i=e<.2?0:e<.3?1:2,r,a=!!(this.logo&&this.logo.complete&&this.logo.naturalWidth),o=0,l=1,c=0,h=0,u=0;i<2?(o=i===1?Math.round(Mt(.2,.3,e)*60)/60:0,r=`${i}|${o.toFixed(3)}|${a?1:0}`):(l=Math.round(Mt(.3,.37,e)*24)/24,c=Math.round((t-7)*CT/2)*2,h=Math.round(ut(e,.44,.49,.7,.76)*12)/12,u=e<.52?0:e<.6?1:2,r=`2|${l.toFixed(3)}|${c}|${h.toFixed(3)}|${u}`),r!==this.schluessel&&(n-this.zuletzt<(i<2?.08:.16)&&n>=this.zuletzt||(this.zuletzt=n,this.schluessel=r,i<2?this.raster(this.x,o):this.karte(this.x,c,l,h,u),this.textur.needsUpdate=!0))}kapsel(e,t,n,i,r,a){a=Math.min(a,i/2,r/2),e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.arcTo(t+i,n,t+i,n+a,a),e.lineTo(t+i,n+r-a),e.arcTo(t+i,n+r,t+i-a,n+r,a),e.lineTo(t+a,n+r),e.arcTo(t,n+r,t,n+r-a,a),e.lineTo(t,n+a),e.arcTo(t,n,t+a,n,a),e.closePath()}tafel(e,t,n,i,r,a){this.kapsel(e,t,n,i,r,a),e.fillStyle=AT,e.fill(),e.lineWidth=2,e.strokeStyle=Bb,e.stroke()}breite(e,t,n){return e.font=n,e.measureText(t).width}seitenleiste(e,t){e.fillStyle=t?"rgba(14,14,18,0.82)":"#121216",e.fillRect(0,0,Kn,Un),e.fillStyle="rgba(255,255,255,0.08)",e.fillRect(Kn-1,0,1,Un),e.fillStyle="#fff",e.font=`700 34px ${it}`,e.textAlign="center",e.textBaseline="middle",e.fillText(this.uhr,Kn/2,44),e.fillStyle="rgba(255,255,255,0.85)";for(let n=0;n<4;n++)e.fillRect(Kn/2-30+n*9,92-n*4,6,10+n*4);e.strokeStyle="rgba(255,255,255,0.7)",e.lineWidth=2,this.kapsel(e,Kn/2+10,82,24,13,3),e.stroke(),e.fillStyle="rgba(255,255,255,0.7)",e.fillRect(Kn/2+35,86,2,5),e.fillRect(Kn/2+13,85,15,7),e.fillStyle="rgba(255,255,255,0.9)";for(let[n,i]of[[-15,-15],[3,-15],[-15,3],[3,3]])this.kapsel(e,Kn/2+n,Un-58+i,12,12,3),e.fill();for(let n=0;n<3;n++){let i=[14,24,10][n];e.fillRect(Kn/2-14+n*11,Un-124-i/2,6,i)}}raster(e,t){let n=e.createRadialGradient(Rn*.75,Un*.1,40,Rn*.6,Un*.4,900);n.addColorStop(0,"#18213a"),n.addColorStop(.55,"#0c0f18"),n.addColorStop(1,"#07080c"),e.fillStyle=n,e.fillRect(0,0,Rn,Un),this.seitenleiste(e,!1);let i=String(this.w.apps||"Telefon,Musik,Karten,Nachrichten,Podcasts,FREQ,Radio,Einstellungen").split(",").map(m=>m.trim()),r=["#1f8f7a","#d9522c","#2a5fa8","#5a63d6","#9a4a6e","#0b0d10","#b8761c","#4f5663"],a=150,o=270,l=252,c=Kn+40+(o-a)/2,h=52,u=Math.max(0,i.findIndex(m=>/freq/i.test(m))),f=null,d=!!(this.logo&&this.logo.complete&&this.logo.naturalWidth);if(i.slice(0,8).forEach((m,x)=>{let g=c+x%4*o,p=h+Math.floor(x/4)*l,v=x===u,b=1-(v?Mt(.05,.45,t)*(1-Mt(.55,.9,t)):0)*.09;v&&(f=[g,p,a,a]),e.save(),e.translate(g+a/2,p+a/2),e.scale(b,b),e.translate(-a/2,-a/2);let M=e.createLinearGradient(0,0,0,a);M.addColorStop(0,"rgba(255,255,255,0.16)"),M.addColorStop(1,"rgba(0,0,0,0.12)"),this.kapsel(e,0,0,a,a,46),e.fillStyle=r[x%r.length],e.fill(),e.fillStyle=M,e.fill(),v&&(e.lineWidth=2,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke()),e.strokeStyle="#fff",e.fillStyle="#fff",e.lineWidth=11,e.lineCap="round",e.lineJoin="round";let y=a/2;switch(x){case 0:e.lineWidth=9,e.save(),e.translate(y,y),e.rotate(-.6),e.beginPath(),e.moveTo(-40,-14),e.quadraticCurveTo(-42,36,10,40),e.quadraticCurveTo(40,42,42,14),e.lineTo(30,4),e.lineTo(20,16),e.quadraticCurveTo(-8,10,-16,-20),e.lineTo(-6,-30),e.lineTo(-16,-42),e.closePath(),e.stroke(),e.restore();break;case 1:e.lineWidth=11;for(let S=0;S<5;S++){let _=[22,46,70,38,54][S];e.beginPath(),e.moveTo(y-44+S*22,y+_/2),e.lineTo(y-44+S*22,y-_/2),e.stroke()}break;case 2:e.lineWidth=10,e.beginPath(),e.moveTo(y,y+46),e.quadraticCurveTo(y-44,y-6,y-30,y-26),e.arc(y,y-18,30,Math.PI*1.2,Math.PI*1.8),e.quadraticCurveTo(y+44,y-6,y,y+46),e.closePath(),e.stroke(),e.beginPath(),e.arc(y,y-16,10,0,Math.PI*2),e.fill();break;case 3:e.lineWidth=9,this.kapsel(e,y-46,y-32,92,64,10),e.stroke(),e.beginPath(),e.moveTo(y-44,y-26),e.lineTo(y,y+6),e.lineTo(y+44,y-26),e.stroke();break;case 4:e.beginPath(),e.arc(y,y+6,9,0,Math.PI*2),e.fill(),e.lineWidth=8;for(let S of[26,44])e.beginPath(),e.arc(y,y+6,S,Math.PI*1.2,Math.PI*1.8),e.stroke(),e.beginPath(),e.arc(y,y+6,S,Math.PI*.2,Math.PI*.8),e.stroke();break;case 5:d?(this.logoC||(this.logoC=document.createElement("canvas"),this.logoC.width=this.logoC.height=216,this.logoC.getContext("2d").drawImage(this.logo,0,0,216,216)),e.drawImage(this.logoC,y-54,y-54,108,108)):(e.strokeStyle=Sl,e.lineWidth=12,e.beginPath(),e.arc(y,y,40,Math.PI*.6,Math.PI*1.9),e.stroke());break;case 6:e.lineWidth=8,this.kapsel(e,y-44,y-10,88,54,12),e.stroke(),e.beginPath(),e.moveTo(y-20,y-10),e.lineTo(y+30,y-46),e.stroke(),e.beginPath(),e.arc(y-20,y+17,12,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(y+4,y+8),e.lineTo(y+34,y+8),e.moveTo(y+4,y+26),e.lineTo(y+34,y+26),e.stroke();break;default:e.lineWidth=8;for(let S=0;S<3;S++){let _=y-30+S*30,w=[y+14,y-18,y+4][S];e.beginPath(),e.moveTo(y-44,_),e.lineTo(y+44,_),e.stroke(),e.beginPath(),e.arc(w,_,11,0,Math.PI*2),e.fillStyle=r[x],e.fill(),e.stroke(),e.fillStyle="#fff"}}e.restore(),e.fillStyle=v?"#fff":"rgba(255,255,255,0.88)",e.font=`${v?600:500} 23px ${it}`,e.textAlign="center",e.textBaseline="top",e.fillText(m,g+a/2,p+a+14)}),t>0&&f){let[m,x,g,p]=f,v=ut(t,0,.12,.6,.85);if(v>0){let b=34+Mt(.05,.45,t)*10;e.beginPath(),e.arc(m+g*.6,x+p*.62,b,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.28*v})`,e.fill(),e.lineWidth=3,e.strokeStyle=`rgba(255,255,255,${.55*v})`,e.stroke()}let E=Mt(.62,1,t);if(E>0){let b=Vt(m,0,E),M=Vt(x,0,E),y=Vt(g,Rn,E),S=Vt(p,Un,E);this.kapsel(e,b,M,y,S,Vt(36,0,E)),e.fillStyle=`rgba(12,13,16,${.65+.35*E})`,e.fill()}}}netz(e,t,n){e.fillStyle="#131519",e.fillRect(0,0,Rn,Un);let i=600,r=(t%i+i)%i;e.save(),e.beginPath(),e.rect(0,0,Rn,Un),e.clip(),this.kachelC||(this.kachelC=document.createElement("canvas"),this.kachelC.width=Rn,this.kachelC.height=i,this.kachelZeichnen(this.kachelC.getContext("2d"),i));for(let a=-1;a<=1;a++)e.drawImage(this.kachelC,0,r+a*i);for(let[a,o]of[[30,"#0f1114"],[22,"#363a41"]])e.strokeStyle=o,e.lineWidth=a,e.lineCap="round",e.beginPath(),e.moveTo(_n,-20),e.lineTo(_n,Un+20),e.stroke(),e.beginPath(),e.moveTo(_n-420,n+30),e.lineTo(_n,n),e.lineTo(Rn+20,n-26),e.stroke();e.strokeStyle="rgba(255,255,255,0.08)",e.lineWidth=2,e.setLineDash([14,14]),e.beginPath(),e.moveTo(_n,-20),e.lineTo(_n,Un+20),e.stroke(),e.beginPath(),e.moveTo(_n,n),e.lineTo(Rn+20,n-26),e.stroke(),e.setLineDash([]),e.restore()}kachelZeichnen(e,t){e.fillStyle="#1b1e23";let i=[[150,20,150,90],[340,20,190,120],[560,60,110,60],[760,30,180,100],[980,20,140,120],[1150,40,120,80],[180,190,120,110],[360,230,170,70],[540,200,120,130],[770,190,200,70],[1e3,220,110,110],[1150,190,130,90],[160,380,150,90],[360,350,140,130],[560,420,100,90],[780,360,150,90],[990,380,120,100],[1160,330,110,120]];for(let[a,o,l,c]of i)this.kapsel(e,a,0+o,l,c,6),e.fill();e.fillStyle="#152219",e.beginPath(),e.ellipse(430,520,120,60,.2,0,Math.PI*2),e.fill(),e.fillStyle="#0e1724",e.beginPath(),e.moveTo(1040,480),e.bezierCurveTo(1120,450,1200,520,1290,470),e.lineTo(1290,560),e.bezierCurveTo(1180,600,1100,540,1040,580),e.closePath(),e.fill();let r=[[0,160,Rn,150],[0,330,Rn,345],[0,560,1040,540],[330,0,330,t],[1e3,0,1e3,t],[150,0,150,t],[1130,0,1130,t],[560,160,780,330]];for(let a of[18,12]){e.strokeStyle=a===18?"#0f1114":"#2a2d33",e.lineWidth=a,e.lineCap="round";for(let[o,l,c,h]of r)e.beginPath(),e.moveTo(o,0+l),e.lineTo(c,0+h),e.stroke()}}karte(e,t,n,i,r){let a=this.w,o=150+t;this.netz(e,t,o);let l=()=>{e.beginPath(),e.moveTo(_n,ws),e.lineTo(_n,o+44),e.quadraticCurveTo(_n,o,_n+44,o-2),e.lineTo(Rn+20,o-26)};if(e.lineCap="round",e.lineJoin="round",l(),e.strokeStyle="rgba(0,0,0,0.9)",e.lineWidth=18,e.stroke(),l(),e.strokeStyle=Sl,e.lineWidth=11,e.stroke(),i>0){let V=ws-[150,112,74][r];e.save(),e.globalAlpha=i,e.beginPath(),e.moveTo(_n,ws),e.lineTo(_n,V),e.strokeStyle=Nb,e.lineWidth=11,e.stroke(),e.beginPath(),e.arc(_n,V,11,0,Math.PI*2),e.fillStyle=Nb,e.fill(),e.lineWidth=3.5,e.strokeStyle="#fff",e.stroke(),e.restore()}let c=(V,j,ae,he,ce,ye)=>{e.save(),ye&&(e.globalAlpha=.4),e.beginPath(),e.arc(V,j,ae,0,Math.PI*2),e.fillStyle="#000",e.fill(),e.beginPath(),e.arc(V,j,ae*.74,0,Math.PI*2),e.fillStyle=ce?"#3a3a3e":"#2c2c2e",e.fill(),ce&&(e.beginPath(),e.arc(V,j,ae*.88,0,Math.PI*2),e.lineWidth=ae*.2,e.strokeStyle=Sl,e.stroke()),e.fillStyle="#fff",e.font=`600 ${Math.round(ae*.78)}px ${it}`,e.textAlign="center",e.textBaseline="middle",e.fillText(he,V,j+ae*.04),e.restore()},h=[this.namen[1]||"Ben",this.namen[2]||"Mia",this.namen[3]||"Tom"].map(V=>V.charAt(0).toUpperCase());[[_n+6,ws+60],[_n-5,ws+118],[_n+4,ws+176]].forEach(([V,j],ae)=>c(V,j,19,h[ae],ae===1,!1)),this.kapsel(e,_n-11,ws-17,22,34,7),e.fillStyle=Sl,e.fill(),e.lineWidth=3,e.strokeStyle="#fff",e.stroke(),e.fillStyle="rgba(6,37,45,0.85)",this.kapsel(e,_n-7,ws-10,14,7,2),e.fill(),this.kapsel(e,_n-7,ws+6,14,5,2),e.fill(),this.seitenleiste(e,!0),e.fillStyle="rgba(16,16,20,0.9)",e.fillRect(Kn,0,Rn-Kn,72);let u=`500 31px ${it}`,f=a.ziel||"Ziel",d=this.breite(e,f,u)+26;this.kapsel(e,Kn+20,10,d,54,10),e.fillStyle=Ub,e.fill(),e.font=u,e.textBaseline="middle",e.textAlign="left",e.fillStyle="#06141a",e.fillText(f,Kn+33,38),e.fillStyle=Ub,e.fillText(a.convoy||"Convoy",Kn+20+d+22,38),e.textAlign="right";let m=a.ruhe||"Ruhe";e.fillText(m,Rn-28,38),e.fillText(a.sprechen||"Sprechen",Rn-28-this.breite(e,m,u)-26,38);let x=a.abstand||"350 m",g=a.strasse||"Hauptstra\xDFe",p=Kn+16,v=88,E=Math.max(330,30+Math.max(98+this.breite(e,x,`700 40px ${it}`),this.breite(e,g,`600 29px ${it}`))+30);this.kapsel(e,p,v,E,106,18),e.fillStyle="rgba(0,0,0,0.84)",e.fill(),e.strokeStyle="#fff",e.lineWidth=9,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(p+36,v+52),e.lineTo(p+36,v+38),e.quadraticCurveTo(p+36,v+28,p+48,v+28),e.lineTo(p+74,v+28),e.stroke(),e.beginPath(),e.moveTo(p+62,v+15),e.lineTo(p+76,v+28),e.lineTo(p+62,v+41),e.stroke(),e.fillStyle="#fff",e.font=`700 40px ${it}`,e.textAlign="left",e.textBaseline="middle",e.fillText(x,p+100,v+34),e.fillStyle="rgba(235,235,245,0.62)",e.font=`600 29px ${it}`,e.fillText(g,p+28,v+78),h.forEach((V,j)=>c(p+E+44+j*64,v+30,29,V,j===1,!1));let b=200,M=Rn-16-b,y=88,S=30*i,_=42*i,w=132+S+_;this.kapsel(e,M,y,b,w,22),e.fillStyle="rgba(28,28,30,0.94)",e.fill(),e.lineWidth=2,e.strokeStyle=Bb,e.stroke();let C=y+S+66;if(i>0){e.save(),e.globalAlpha=i,e.fillStyle="rgba(235,235,245,0.8)",e.textAlign="center",e.textBaseline="middle";let V=String(a.blitzerFest||"Fester Blitzer").toUpperCase(),j=16;e.font=`600 ${j}px ${it}`;try{e.letterSpacing="1.5px"}catch{}for(;this.breite(e,V,`600 ${j}px ${it}`)>b-20&&j>11;)j--;e.fillText(V,M+b/2,y+24);try{e.letterSpacing="0px"}catch{}let ae=M+12,he=y+w-40,ce=b-24,ye=28;this.kapsel(e,ae,he,ce,ye,14),e.fillStyle="rgba(255,255,255,0.14)",e.fill(),e.save(),this.kapsel(e,ae,he,ce,ye,14),e.clip(),e.fillStyle="rgba(44,184,227,0.5)",e.fillRect(ae,he,ce*[.25,.45,.65][r],ye),e.restore(),e.fillStyle="#fff",e.font=`600 19px ${it}`,e.fillText(ki(this.blitzerWeit,[800,600,400][r]),M+b/2,he+ye/2+1),e.restore()}let I=M+40,U=M+128;e.beginPath(),e.arc(I,C,27,0,Math.PI*2),e.fillStyle="#fff",e.fill(),e.beginPath(),e.arc(I,C,23,0,Math.PI*2),e.lineWidth=6.5,e.strokeStyle=RT,e.stroke(),e.fillStyle="#000",e.font=`700 23px ${it}`,e.textAlign="center",e.textBaseline="middle",e.fillText("70",I,C+1),e.lineCap="round",e.lineWidth=6,e.strokeStyle="rgba(255,255,255,0.12)",e.beginPath(),e.arc(U,C,54,0,Math.PI*2),e.stroke(),e.strokeStyle=Sl,e.beginPath(),e.arc(U,C,54,-Math.PI/2+.5,-Math.PI/2+.5+Math.PI*2*.9),e.stroke(),e.fillStyle="#fff",e.font=`700 46px ${it}`,e.fillText("68",U,C-5),e.fillStyle=zb,e.font=`400 16px ${it}`,e.fillText(a.einheit||"km/h",U,C+26);let H=String(a.rest||"12 km \xB7 14 min"),P=(/(\d+(?:[.,]\d+)?)\s*km/i.exec(H)||[])[1]||"12",D=(/(\d+)\s*min/i.exec(H)||[])[1]||"14",k=400,z=Un-34-86;this.kapsel(e,p,z,k,86,18),e.fillStyle="rgba(0,0,0,0.84)",e.fill(),[[a.ankunft||"21:56",a.ankunftWort||"Ankunft",.2],[D,a.minWort||"Min.",.54],[P,"km",.82]].forEach(([V,j,ae])=>{e.fillStyle="#fff",e.textAlign="center",e.font=`700 25px ${it}`,e.fillText(V,p+k*ae,z+30),e.font=`400 23px ${it}`,e.fillText(j,p+k*ae,z+60)}),e.fillStyle=zb,e.font=`400 16px ${it}`,e.textAlign="left",e.fillText("\xA9 OpenStreetMap",p+6,Un-17);let N=Rn-16-30;e.strokeStyle="#fff",e.fillStyle="#fff",e.lineWidth=4,e.lineCap="round",e.lineJoin="round";let F=Un-16-60-148;e.beginPath(),e.moveTo(N-20,F-7),e.lineTo(N-11,F-7),e.lineTo(N-1,F-16),e.lineTo(N-1,F+16),e.lineTo(N-11,F+7),e.lineTo(N-20,F+7),e.closePath(),e.fill(),e.beginPath(),e.arc(N,F,11,-.9,.9),e.stroke(),e.beginPath(),e.arc(N,F,20,-.9,.9),e.stroke(),F+=74,e.beginPath(),e.arc(N-4,F-4,15,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(N+7,F+7),e.lineTo(N+18,F+18),e.moveTo(N-11,F-4),e.lineTo(N+3,F-4),e.moveTo(N-4,F-11),e.lineTo(N-4,F+3),e.stroke(),F+=74,e.beginPath(),e.arc(N,F,28,0,Math.PI*2),e.fillStyle="#e0352b",e.fill(),e.lineWidth=3,e.stroke(),e.fillStyle="#fff",e.beginPath(),e.moveTo(N-14,F-4),e.lineTo(N-6,F-4),e.lineTo(N+10,F-13),e.lineTo(N+10,F+11),e.lineTo(N-6,F+3),e.lineTo(N-14,F+3),e.closePath(),e.fill(),e.lineWidth=3,e.beginPath(),e.moveTo(N-9,F+5),e.lineTo(N-6,F+14),e.stroke(),n<1&&(e.fillStyle=`rgba(12,13,16,${1-n})`,e.fillRect(0,0,Rn,Un))}}});function kT(){if(Gr)return Gr;Gr=new Map;let s=Gg(.004),e=(t,n)=>{let i=Math.floor(t/10);Gr.has(i)||Gr.set(i,[]),Gr.get(i).push(n)};for(let t of s)for(let n of[0,5,10]){let[i,r,a]=t.p,[o,l,c]=t.z,h=a+n,u=c+n,f=Math.hypot(o-i,u-h)||1,d={px:i,py:r,pz:h,zx:o,zy:l,zz:u,fx:(o-i)/f,fz:(u-h)/f},m=Math.min(h-vp,u-xp),x=Math.max(h+vp,u+xp);for(let g=Math.floor(m/10);g<=Math.floor(x/10);g++)e(g*10,d);if(t.g>=.95&&t.g<=3.05&&t.autos)for(let[g,p,v]of t.autos){let E=v+n,b=Math.hypot(g-i,E-h)||1,M={px:i,py:r,pz:h,zx:g,zy:p,zz:E,fx:(g-i)/b,fz:(E-h)/b,nurSicht:!0,sicht:bp},y=Math.min(h,E)-bp,S=Math.max(h,E)+bp;for(let _=Math.floor(y/10);_<=Math.floor(S/10);_++)e(_*10,M)}}return Gr}function DT(s,e){let t=kT().get(Math.floor(e/10));if(!t)return!1;for(let n of t){if(!n.nurSicht&&n.py<Gb){let c=s-n.px,h=e-n.pz,u=Math.hypot(c,h);if(u<IT||u<vp&&(c*n.fx+h*n.fz)/u>LT)return!0}let i=n.zx-n.px,r=n.zz-n.pz,a=i*i+r*r||1e-6,o=Math.max(0,Math.min(1,((s-n.px)*i+(e-n.pz)*r)/a));if(n.py+(n.zy-n.py)*o<Gb&&Math.hypot(s-(n.px+i*o),e-(n.pz+r*o))<(n.sicht||xp))return!0}return!1}function FT(s,e,t,n){if(t==="baum"&&n!==void 0&&DT(n,s))return!1;let i=St(4),r=St(5),a=St(6),o=St(7),l=St(3),c=St(8);if(t==="leitplanke"||t==="leitpfosten")return!(t==="leitplanke"&&s>c-20||e<0&&s>i-80&&s<i+100||e<0&&s>a-132&&s<a+154||e<0&&s>l+34&&s<l+48);if(s>c-60&&t==="laterne"||t==="laterne"&&s>i-74&&s<i-54||t==="laterne"&&e<0&&s>St(2)-100&&s<St(2)+45||t==="laterne"&&e<0&&s>i-78&&s<i+100||t==="laterne"&&e<0&&s>a-132&&s<a+154)return!1;if(s>c-5&&t==="baum")return n!==void 0&&Math.abs(n)>=16;if(e<0&&s>c-42&&s<c-16&&t==="baum"&&n!==void 0&&n>-22)return!1;if(e<0){if(s>i-30&&s<i+95)return t==="baum"?n===void 0||n<-22:!1;if(s>a-132&&s<a+154)return t==="baum"?n===void 0||n<(s>a-60&&s<a+75?-26:-12):!1;if(s>r+18&&s<r+60)return t==="baum"?n===void 0||n<(s>r+40?-13:-22):!1;if(s>r+56&&s<r+82)return t==="baum"?n===void 0||n<-17:!1;if(s>l+30&&s<l+52&&(t==="laterne"||t==="baum"&&(n===void 0||n>-16)))return!1}return!0}var Tl,Ob,Tu,IT,xp,bp,Gb,vp,LT,Gr,Vb=pt(()=>{It();N0();ri();wd();nr();zg();Vg();mp();Fb();Hb();rn();Qn();Tl={hoch:{dpr:1.5,samples:2,spiegel:!0,regen:2600,bloom:5,taps:6,kegel:!0,lod:0,lichter:4,schatten:!0,ao:!0,baumDichte:1,lodWeite:.85},mittel:{dpr:1.5,samples:0,spiegel:!0,regen:1400,bloom:4,taps:4,kegel:!0,lod:1,lichter:2,schatten:!1,ao:!1,baumDichte:.6,lodWeite:.7},niedrig:{dpr:.75,samples:0,spiegel:!1,regen:300,bloom:2,taps:1,kegel:!1,lod:2,lichter:0,schatten:!1,ao:!1,baumDichte:.3,lodWeite:.5,direkt:!0}},Ob=[[.012,461588,1.25,.26,1,1],[.006,395538,1.2,.22,.6,.9],[.01,461588,1.25,.26,.8,1],[.01,592402,1.25,.26,.9,1],[.008,461588,1.25,.24,.7,1],[.0045,725536,1.15,.22,0,1],[.009,461588,1.25,.26,.5,1],[.01,461588,1.3,.3,.8,1.1],[.002,197900,1.05,.3,0,.9]],Tu=class{constructor(e,t){this.canvas=e,this.woerter=t.woerter||{},this.basis=t.basis||"",this.version=t.version||"",this.logoMarke=t.logoMarke||null,this.carplay=new Su(this.woerter,this.logoMarke),this.stufeName=t.stufe||"hoch",this.stufe=Tl[this.stufeName],this.renderer=new Ih({canvas:e,context:t.context||void 0,antialias:!1,alpha:!1,stencil:!1,depth:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1}),this.renderer.toneMapping=si,this.renderer.outputColorSpace=Rt,this.renderer.autoClear=!1,this.szene=new cs,this.nebelFarbe=new Ce(461588),this.szene.fog=new xo(461588,.011),this.kamera=new an(60,1,.2,1500),this.szene.add(this.kamera),this.rnd=Na(7),this.t=0,this.zc=0,this.kriech=0,this.glitch=0,this.letztesKapitel=-1,this.post=new Fh(this.renderer),this.fertig=!1,this.basisFertig=!1,this.ladeStand={schritt:"start",aufwaermen:0,bauen:0},this.bilder=0,this.w=2,this.h=2,this.dpr=1,this._v=new R,this._v2=new R,this._autos=[new R,new R,new R,new R];let n=-320,i=zr*Ua+420;this.strasse=new zh(this.szene,{z0:n,z1:i,rnd:this.rnd,spiegel:this.stufe.spiegel}),this.umgebung=new nu(this.szene,{z0:n,z1:i,rnd:this.rnd,renderer:this.renderer,frei:FT,grob:this.stufeName==="niedrig"}),this.convoy=new lu(this.szene,this.umgebung.envMap),this.regen=new cu(this.szene,2600,this.rnd),this.regen.setzeAnzahl(this.stufe.regen),this.schnee=new hu(this.szene,1500,this.rnd),this.schnee.staerke=0,this.funken=new gl(this.szene,500,this.rnd),this.fahrt=new fu(this.kamera),this.kapitel=null,this.webcamRT=new on(256,144,{type:En,depthBuffer:!0,minFilter:bt,magFilter:bt,colorSpace:qt}),this.komet=new ot,this.kamera.add(this.komet);let r=$n(128);this.kometKopf=new Dn(new Cn({map:r,color:Ye(1.6,4.5,5.5),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1})),this.komet.add(this.kometKopf),this.kometSchweif=[],this._hochgeladen=new Set;for(let a=0;a<30;a++){let o=new Dn(new Cn({map:r,color:Ye(.5,2.2,2.8),blending:Nt,depthWrite:!1,depthTest:!1,transparent:!0,fog:!1}));this.komet.add(o),this.kometSchweif.push(o)}this.komet.visible=!1,this.kometFunken=new gl(this.komet,160,this.rnd),this.kometFunken.mesh.scale.setScalar(.04)}async laden(){this.lader=new El(this.basis,this.version),this.vorabFertig=this.lader.vorab(this.stufeName).catch(()=>!1),await this.convoy.laden(this.basis+"welt/auto2.glb",this.basis+"welt/auto.glb"),this.kw={szene:this.szene,convoy:this.convoy,umgebung:this.umgebung,strasse:this.strasse,woerter:this.woerter,rnd:this.rnd,schnee:this.schnee,funken:this.funken,carplay:this.carplay,logoMarke:this.logoMarke,welt:this,lader:null},this.kapitel=Ib(this.kw);let e=this.kapitel[5];e.schirm&&(e.schirm.material.uniforms.t.value=this.webcamRT.texture),this.setzeStufe(this.stufeName),this.verankereLichter();for(let t of this.kapitel)t.gruppe.visible=!0;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!0),this.schnee.mesh.visible=!0,this.funken.mesh.visible=!0,this.komet.visible=!0,this.kamera.position.set(0,3,20),this.kamera.lookAt(0,1,100),this.kamera.updateMatrixWorld(),this.renderer.compile(this.szene,this.kamera),this.renderer.compile(this.szene,this.strasse.virtuell);for(let t of this.kapitel)t.gruppe.visible=!1;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!1),this.komet.visible=!1,this.fertig=!0,this.nachladen().catch(t=>{console.warn("Nachladen abgebrochen",t),this.basisFertig=!0,this.allesGeladen=!0,this.ladeStand.schritt="fertig"})}async nachkompilieren(e=null){let t=this.renderer,n=()=>new Promise(a=>requestAnimationFrame(a));this.ladeStand.schritt="grafik",this.ladeStand.grafik=0;for(let a of this.kapitel)a.gruppe.visible=!0;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!0);try{if(t.compileAsync&&t.extensions.has("KHR_parallel_shader_compile"))await t.compileAsync(this.szene,this.kamera);else{for(let a of this.kapitel)t.compile(a.gruppe,this.kamera,this.szene),await n();this.kapitel[7].innen&&(t.compile(this.kapitel[7].innen,this.kamera,this.szene),await n()),t.compile(this.szene,this.kamera)}}catch(a){console.warn("Shader vorbauen",a)}this.ladeStand.grafik=.3;let i=new Set;this.szene.traverse(a=>{let o=a.material?Array.isArray(a.material)?a.material:[a.material]:[];for(let l of o)for(let c of["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","lightMap","alphaMap"])l[c]&&l[c].isTexture&&!l[c].isRenderTargetTexture&&i.add(l[c])});let r=0;for(let a of i)if(!this._hochgeladen.has(a)){this._hochgeladen.add(a);try{t.initTexture(a)}catch{}++r%3===0&&await new Promise(o=>requestAnimationFrame(o)),this.ladeStand.grafik=.3+.2*Math.min(1,r/Math.max(1,i.size))}this.ladeStand.grafik=.5,await this.aufwaermen(e);for(let a of this.kapitel)a.gruppe.visible=!1;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!1)}async aufwaermen(e=null){let t=this.renderer,n=this.kamera,i=e||Array.from({length:zr},(p,v)=>v),r=()=>new Promise(p=>requestAnimationFrame(p)),a=[],o=[],l=[];this.szene.traverse(p=>{if((p.isMesh||p.isSprite||p.isInstancedMesh||p.isPoints||p.isLine)&&(a.push([p,p.frustumCulled]),p.frustumCulled=!1),p.isLOD){o.push(p),p.autoUpdate=!1;for(let v of p.levels)v.object.visible=!0}});for(let p of[...this.convoy.autos,...this.convoy.geparkt||[]])for(let v of p.stufen||[])v&&!v.visible&&(v.visible=!0,l.push(v));let c=n.position.clone(),h=n.quaternion.clone(),u=n.fov,f=this.kapitel[5],d=this.strasse.virtuell,m=[[this.post.szeneRT,n],[this.strasse.rt,d],[this.webcamRT,f&&f.webcamKamera]].filter(p=>p[0]&&p[1]);d.near=n.near,d.far=n.far,d.fov=60,d.aspect=n.aspect,d.zoom=1,d.updateProjectionMatrix();let x=this.umgebung.lichtPool,g=x&&x.lichter[0];t.setScissorTest(!0);try{for(let E=0;E<i.length;E++){let b=i[E],M=St(b);this.ladeStand.aufwaermen=(E+1)/i.length,this.ladeStand.grafik=.5+.5*this.ladeStand.aufwaermen;for(let y of this.kapitel)y.gruppe.visible=!0;this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!0),n.position.set(2,4,M-30),n.lookAt(0,1,M+60),n.updateMatrixWorld(),this.strasse.virtuell.position.copy(n.position),this.strasse.virtuell.quaternion.copy(n.quaternion),this.strasse.virtuell.updateMatrixWorld(),f&&f.webcamKamera&&(f.webcamKamera.position.copy(n.position),f.webcamKamera.quaternion.copy(n.quaternion),f.webcamKamera.updateMatrixWorld()),g&&g.licht.castShadow&&(g.licht.position.set(3,9,M-12),g.ziel.position.set(0,0,M+12),g.licht.intensity=Math.max(g.licht.intensity,1));for(let[y,S]of m)t.setRenderTarget(y),t.setScissor(0,0,4,4),y===this.post.szeneRT&&(t.shadowMap.needsUpdate=!0),t.setClearColor(this.nebelFarbe,1),t.clear(),t.render(this.szene,S);t.setScissor(0,0,4,4),this.strasse.spiegeln(t,this.szene,n,this.nebelFarbe),this.strasse.spiegeln(t,this.szene,n,this.nebelFarbe),await r()}let p=this.kapitel[7],v=this.convoy.autos[0];if(p&&p.innen&&v&&i.includes(7)){t.setScissorTest(!1);let E=p.augen||new R(.3,.95,.1),b=v.modell.visible,M=this.convoy.innenGlas;v.modell.visible=!1,this.convoy.innenGlas=1,p.innen.visible=!0;for(let[y,S]of[[new R(-.6,.2,20),70],[new R(-.3,-.25,.45),58]])n.position.copy(E).applyMatrix4(v.g.matrixWorld),n.position.y=Math.max(n.position.y,.95),n.lookAt(y.clone().applyMatrix4(v.g.matrixWorld)),n.fov=S,n.updateProjectionMatrix(),n.updateMatrixWorld(),t.setRenderTarget(this.post.szeneRT),t.setClearColor(this.nebelFarbe,1),t.clear(),t.render(this.szene,n),await r(),p.innen.visible=!0,v.modell.visible=!1;v.modell.visible=b,this.convoy.innenGlas=M,t.setScissorTest(!0)}}catch(p){console.warn("Aufw\xE4rmen",p)}t.setScissorTest(!1),t.setRenderTarget(null);for(let[p,v]of a)p.frustumCulled=v;for(let p of o)p.autoUpdate=!0;for(let p of l)p.visible=!1;this.kapitel[7]&&this.kapitel[7].innen&&(this.kapitel[7].innen.visible=!1),n.position.copy(c),n.quaternion.copy(h),n.fov=u,n.updateProjectionMatrix(),n.updateMatrixWorld()}async nachladen(){let e=this.lader||new El(this.basis,this.version);this.lader=e,this.kw.lader=e;let t=async(f,d)=>{try{return await d()}catch(m){return console.warn("Nachladen",f,m),null}},n=8,i=0,r=()=>{i++,this.ladeStand.bauen=Math.min(1,i/n)};this.ladeStand.schritt="modelle";let[a,o,l]=await Promise.all([e.textur("welt/texturen/asphalt_farbe.webp",{srgb:!0}),e.textur("welt/texturen/asphalt_normal.webp"),e.textur("welt/texturen/asphalt_rauheit.webp")]);this.strasse.setzeTexturen(a,o,l),r();let c=await e.hdr("welt/texturen/nacht.hdr");if(c){let f=this.umgebung.setzeHdri(this.renderer,c);f&&this.convoy.setzeEnv(f)}if(r(),this.umgebung.ladeModelle&&await t("Umgebung",()=>this.umgebung.ladeModelle(e,this)),!this.umgebung.echteBaeume){let[f,d,m,x]=await Promise.all([e.glb("welt/baeume.glb"),e.textur("welt/texturen/rinde_farbe.webp",{srgb:!0}),e.textur("welt/texturen/rinde_normal.webp"),e.textur("welt/texturen/nadeln.png",{srgb:!0,wiederholen:!1})]);this.umgebung.setzeBaeume(f,d,m,x)}r(),this.convoy.ladeModelle&&await t("Convoy",()=>this.convoy.ladeModelle(e,this)),r();let[h,u]=await Promise.all([e.textur("welt/texturen/boden_farbe.webp",{srgb:!0}),e.textur("welt/texturen/boden_normal.webp")]);this.umgebung.setzeBoden(h,u,this.strasse),r(),this.szene.updateMatrixWorld(!0);for(let f of this.kapitel)f.ladeModelle&&await t("Kapitel",()=>f.ladeModelle(e,this));if(r(),!this.kapitel[7].eigeneModelle){let f=await e.glb("welt/innenraum.glb");f&&this.kapitel[7].setzeInnenraum&&this.kapitel[7].setzeInnenraum(f)}if(!(this.kapitel[3].eigeneModelle&&this.kapitel[6].eigeneModelle&&this.kapitel[8].eigeneModelle)){let f=await e.glb("welt/requisiten.glb");f&&(!this.kapitel[3].eigeneModelle&&this.kapitel[3].setzeBlitzer&&this.kapitel[3].setzeBlitzer(f),!this.kapitel[6].eigeneModelle&&this.kapitel[6].setzeRequisiten&&this.kapitel[6].setzeRequisiten(f),!this.kapitel[8].eigeneModelle&&this.kapitel[8].setzePlakatwand&&this.kapitel[8].setzePlakatwand(f))}r(),this.verankereLichter(),await this.vorabFertig,r(),await this.nachkompilieren(),e.freigeben(),this.basisFertig=!0,this.allesGeladen=!0,this.ladeStand.schritt="fertig"}verankereLichter(){let e=(this.stufe.lichter|0)>0;this.szene.traverse(i=>{i.isLight&&i.layers.enable(Ut)});let t=(i,r)=>{let a=[];i.traverse(o=>{o.isLight&&!o.isAmbientLight&&!o.isHemisphereLight&&!o.userData.verankert&&a.push(o)});for(let o of a)o.userData.verankert=!0,e?(o.intensity=0,o.parent&&o.parent.remove(o)):(r.attach(o),o.visible=!0)};for(let i of this.kapitel||[])i.gruppe&&t(i.gruppe,this.szene);let n=this.kapitel&&this.kapitel[7]&&this.kapitel[7].innen;n&&t(n,this.convoy.autos[0].g)}setzeStufe(e){let t=Tl[e]||Tl.hoch;this.stufeName=e,this.stufe=t,this.strasse.setzeSpiegel(t.spiegel),this.regen.setzeAnzahl(t.regen),this.post.setzeTaps(t.taps),this.post.setzeSchlank(e==="niedrig"),this.renderer.toneMapping=t.direkt?Ko:si,this.renderer.toneMappingExposure=1.15,this.renderer.outputColorSpace=t.direkt?at:Rt,this.umgebung.kegelInstanzen&&(this.umgebung.kegelInstanzen.visible=t.kegel);for(let n of[this.umgebung,this.convoy,this.post,this.strasse,...this.kapitel||[]])n&&typeof n.setzeStufe=="function"&&n.setzeStufe(t,e);this.groesse(this.w,this.h,this.dprWunsch||1,!0)}groesse(e,t,n,i=!1){this.dprWunsch=n,n=Math.min(n,this.stufe.dpr,this.dprDeckel||9),!(!i&&e===this.w&&t===this.h&&n===this.dpr)&&(this.w=e,this.h=t,this.dpr=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.kamera.aspect=e/t,this.kamera.updateProjectionMatrix(),this.post.groesse(e*n,t*n,this.stufe.samples,this.stufe.bloom),this.strasse.groesse(e*n,t*n))}bild(e,t){if(!this.fertig)return;let n=this.zeitAlt!=null?Math.min(.5,Math.max(0,t.zeit-this.zeitAlt)):e;this.zeitAlt=t.zeit,e=Math.min(e,.05),this.t+=e;let i=this.t,r=t.g;this.gAktuell=r;let a=t.v*Ua;Math.abs(a)<.4?this.kriech=Math.min(10,this.kriech+.5*e):this.kriech=Math.max(0,this.kriech-Math.abs(a)*e*.25);let o=r*Ua+this.kriech,l=(o-this.zc)/e;this.zc=o,this.convoy.bremse=0,this.convoy.sanftBremse=0,this.convoy.innenGlas=0,this.fahrt.ankerMisch=0,this.kw&&this.kw.marker&&(this.kw.marker.sicht=0,this.kw.marker.sprecher=-1),this.schnee.staerke=0;let c=this.umgebung.himmelUniforms;c.warnung.value=0,c.aurora.value=0,c.sterne.value=.6,c.mond.value=.25;let h={lead:this.convoy.fuehrung,autos:this._autos,kamera:this.kamera,tempo:l,dpr:this.dpr,g:r};for(let y=0;y<this.convoy.autos.length;y++)this._autos[y].copy(this.convoy.autos[y].g.position);for(let y=0;y<this.kapitel.length;y++){let S=this.kapitel[y],_=Lb(y,r);S.gruppe.visible=_>.002,_>.002?S.update(nt(r-y,-.5,1.5),_,i,e,h):S.innen&&S.innen.visible&&(S.innen.visible=!1,this.convoy.autos[0]&&this.convoy.autos[0].modell&&(this.convoy.autos[0].modell.visible=!0))}cp(this.kw,h,i),this.convoy.update(i,e,this.zc,l,this.kamera,this.strasse,r),this.fahrt.maus.set(t.maus.x,t.maus.y),this.fahrt.update(r,this.convoy.fuehrung,this.kamera.aspect,e,i),this.umgebung.update(i,this.kamera,this.strasse);let u=nt(r-.5,0,zr-1),f=Math.floor(u),d=Math.min(zr-1,f+1),m=u-f,x=Ob[f],g=Ob[d];this.szene.fog.density=Vt(x[0],g[0],m),this._farbe2||(this._farbe2=new Ce),this._farbe2.setHex(g[1]),this.nebelFarbe.setHex(x[1]).lerp(this._farbe2,m),this.szene.fog.color.copy(this.nebelFarbe),this.post.uniforms.belichtung.value=Vt(x[2],g[2],m),this.post.uniforms.bloom.value=Vt(x[3],g[3],m)/this.stufe.bloom*5,this.post.uniforms.vignette.value=Vt(x[5],g[5],m);let p=Vt(x[4],g[4],m);this.regen.update(i,this.kamera.position,p),this.schnee.update(i,this.kamera.position,this.schnee.staerke,this.dpr);let v=Math.floor(r);this.letztesKapitel>=0&&v!==this.letztesKapitel&&(this.glitch=1),this.letztesKapitel=v,this.glitch=Math.max(0,this.glitch-n*3.2);let E=nt(Math.abs(a)/70);this.post.uniforms.glitch.value=this.glitch*this.glitch,this.post.uniforms.tempo.value=E,this.post.uniforms.aberration.value=E*.8,this.post.uniforms.zeit.value=i,this.post.uniforms.blende.value=1,this.kometUpdate(r,t.logoRect,i);let b=this.renderer,M=this.kapitel[5];M.webcamBild&&M.schirm&&(M.schirm.visible=!1,b.setRenderTarget(this.webcamRT),b.setClearColor(this.nebelFarbe,1),b.clear(),b.render(this.szene,M.webcamKamera),M.schirm.visible=!0),this.strasse.spiegeln(b,this.szene,this.kamera,this.nebelFarbe),this.stufe.direkt?(b.setRenderTarget(null),b.setClearColor(this.nebelFarbe,1),b.clear(),b.render(this.szene,this.kamera)):(b.setRenderTarget(this.post.szeneRT),b.setClearColor(this.nebelFarbe,1),b.clear(),b.render(this.szene,this.kamera),this.post.abschliessen()),this.bilder++}kometUpdate(e,t,n){let i=e-8,r=i>.62&&t&&t.width>10;if(this.komet.visible=r,this.logoBogen=0,!r)return;let a=372*Mt(.68,.95,i);this.logoBogen=a;let o=Xt.degToRad(this.kamera.fov),l=8,h=2*l*Math.tan(o/2)/this.h,u=t.left+t.width*.519,f=t.top+t.height*.48,d=t.width*.472,m=Mt(.955,.99,i),x=Xt.degToRad(180+a),g=(v,E)=>{let b=u+d*Math.sin(v),M=f-d*Math.cos(v);return E.set((b-this.w/2)*h,-(M-this.h/2)*h,-l),E};g(x,this.kometKopf.position);let p=t.width*.2*h*(1-m*.6);this.kometKopf.scale.set(p,p,1),this.kometKopf.material.opacity=(1-m)*Mt(.62,.7,i);for(let v=0;v<this.kometSchweif.length;v++){let E=this.kometSchweif[v],b=(v+1)/this.kometSchweif.length,M=x-Xt.degToRad(b*40*(.3+.7*nt(a/60)));g(M,E.position);let y=t.width*.13*h*(1-b*.8)*(.8+.2*Math.sin(n*9+v));E.scale.set(y,y,1),E.material.opacity=(1-b)*.7*(1-m)*Mt(.62,.7,i)}this.kometFunken.mesh.position.copy(this.kometKopf.position),this.kometFunken.update(n,this.kometKopf.position,(1-m)*.8,this.dpr)}},IT=7,xp=4,bp=5.5,Gb=18,vp=22,LT=Math.cos(Xt.degToRad(46)),Gr=null});function qb(s,e=1/0){let t=[],n=Math.min(s.count,e);for(let i=0;i<n;i++)s.getMatrixAt(i,Wb),wl.setFromMatrixPosition(Wb),t.push({x:wl.x,y:wl.y,z:wl.z});return t}function NT(s){let e=[],t=s.umgebung,n=s.strasse;return t&&t.gelaende&&e.push(t.gelaende),n&&(n.bankett&&e.push(n.bankett),n.boden&&e.push(n.boden),n.mesh&&e.push(n.mesh)),s.szene.traverse(i=>{i.isMesh&&/^(boden:|fahrbahn:)/.test(i.name||"")&&e.push(i)}),e}function UT(s,e,t,n){s.set(wl.set(t,400,n),new R(0,-1,0));let i=null;for(let r of e){let a=r.visible;r.visible=!0;let o=s.intersectObject(r,!1);r.visible=a;for(let l of o)(i===null||l.point.y>i)&&(i=l.point.y)}return i}function Xb(s,e={}){let t=e.toleranz??.05,n=e.stichprobe??1200,i=new qo,r=NT(s),a=s.umgebung,o=[],l=(u,f,d=.03)=>{let m=f.length>n?f.length/n:1,x=[],g=0;for(let p=0;p<f.length;p+=m){let v=f[Math.floor(p)],E=UT(i,r,v.x,v.z);if(g++,E===null){x.push({x:+v.x.toFixed(1),z:+v.z.toFixed(1),y:+v.y.toFixed(2),boden:null});continue}let b=v.y-(E-d);Math.abs(b)>t&&x.push({x:+v.x.toFixed(1),z:+v.z.toFixed(1),y:+v.y.toFixed(2),boden:+E.toFixed(2),d:+b.toFixed(2)})}o.push({name:u,geprueft:g,verstoesse:x.length,beispiele:x.slice(0,6)})};if(a){if(a.baumPlaetze&&l("B\xE4ume nah",a.baumPlaetze,.03),a.baeume&&a.baeume.fernPlaetze&&l("B\xE4ume fern (Billboards)",a.baeume.fernPlaetze,.04),a.bewuchs&&a.bewuchs.meshes)for(let u of a.bewuchs.meshes)/kulisse/.test(u.name)||l(u.name,qb(u),.03);a.laternenPlaetze&&l("Laternen",a.laternenPlaetze.map(u=>({x:u.seite*5.8,y:0,z:u.z})),0),a.leitplankenPlaetze&&l("Leitplanken",a.leitplankenPlaetze.map(u=>({x:u.seite*5.2,y:0,z:u.z})),0)}let c=o.reduce((u,f)=>u+f.verstoesse,0),h=o.reduce((u,f)=>u+f.geprueft,0);return c?console.warn("Bodenpr\xFCfung (Strahl): "+c+" von "+h+" nicht am Boden",o.filter(u=>u.verstoesse)):console.info("Bodenpr\xFCfung (Strahl): alle "+h+" Instanzen am Boden (|\u0394| \u2264 "+t+" m)"),{gruppen:o,verstoesse:c,geprueft:h}}function Kb(s,e,t,n,i){let r=s.umgebung,a=[];if(!r)return a;for(let o of r.baumPlaetze||[])o.z>=e&&o.z<=t&&o.x>=n&&o.x<=i&&a.push({art:o.art,x:+o.x.toFixed(1),z:+o.z.toFixed(1),s:+o.s.toFixed(2)});if(r.bewuchs&&r.bewuchs.meshes){for(let o of r.bewuchs.meshes)if(!/kulisse/.test(o.name))for(let l of qb(o))l.z>=e&&l.z<=t&&l.x>=n&&l.x<=i&&a.push({art:o.name,x:+l.x.toFixed(1),z:+l.z.toFixed(1)})}return a}function jb(s,e={}){let t=e.toleranz??.01,n=[],i={},r=0,a=(u,f,d,m,x)=>{i[u]=(i[u]||0)+1,n.push({wo:u,x:+f.toFixed(1),z:+d.toFixed(1),gelaende:+m.toFixed(2),flaeche:+x.toFixed(2)})},o=e.z0??-150,l=e.z1??1500;for(let u=o;u<=l;u+=2)for(let f of[-6.9,-6,-5,-4,-2,0,2,4,5,6,6.9]){let d=ys(f,u),m=Math.abs(f)<=4.1?0:-.015;r++,d>m+t&&a("Hauptstra\xDFe",f,u,d,m)}let c=new R,h=new ln;return s.szene.traverse(u=>{if(!u.isMesh||!/^(fahrbahn:|boden:)/.test(u.name||""))return;u.updateWorldMatrix(!0,!1);let f=u.geometry.attributes.position;if(f.count<40){h.setFromBufferAttribute(f).applyMatrix4(u.matrixWorld);for(let m=0;m<=16;m++)for(let x=0;x<=16;x++){let g=h.min.x+(h.max.x-h.min.x)*m/16,p=h.min.z+(h.max.z-h.min.z)*x/16,v=ys(g,p);r++,v>h.max.y+t&&a(u.name,g,p,v,h.max.y)}return}let d=Math.max(1,Math.floor(f.count/600));for(let m=0;m<f.count;m+=d){c.fromBufferAttribute(f,m).applyMatrix4(u.matrixWorld);let x=ys(c.x,c.z);r++,x>c.y+t&&a(u.name,c.x,c.z,x,c.y)}}),n.length&&console.warn("Stra\xDFenpr\xFCfung: Gel\xE4nde ragt an "+n.length+" von "+r+" Punkten durch",i),{geprueft:r,verstoesse:n.length,jeFlaeche:i,beispiele:n.slice(0,16)}}var Wb,wl,Yb=pt(()=>{It();Qs();Wb=new Fe,wl=new R});var wu,Jb=pt(()=>{rn();wu=class{constructor(e){this.gewichte=e;let t=e.reduce((r,a)=>r+a,0);this.start=[];let n=0;for(let r of e)this.start.push(n/t),n+=r;this.start.push(1),this.p=0,this.ps=0,this.g=0,this.v=0,this.kapitel=0,this.u=0,this.sprung=null,this.summe=t,this._lesen();let i=()=>{this.sprung=null};window.addEventListener("wheel",i,{passive:!0}),window.addEventListener("touchstart",i,{passive:!0})}laenge(){return Math.max(1,document.documentElement.scrollHeight-window.innerHeight)}_lesen(){this.p=nt(window.scrollY/this.laenge())}weg(e){let t=this.gewichte.length;for(let n=0;n<t;n++)if(e<this.start[n+1]||n===t-1){let i=(e-this.start[n])/Math.max(1e-6,this.start[n+1]-this.start[n]);return n+nt(i,0,1)}return t}stand(e){let t=this.gewichte.length;return e=Math.max(0,Math.min(t-1,e)),(this.start[e]+(this.start[e+1]-this.start[e])*(e===0?0:.14))*this.laenge()}springe(e){let t=window.scrollY,n=this.stand(e),i=Math.min(1.4,.45+Math.abs(n-t)/this.laenge()*2.2);this.sprung={von:t,nach:n,t0:performance.now(),dauer:i*1e3}}update(e){if(this.sprung){let a=this.sprung,o=nt((performance.now()-a.t0)/a.dauer),l=o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2;window.scrollTo(0,a.von+(a.nach-a.von)*l),o>=1&&(this.sprung=null)}this._lesen();let t=Ci(e,.26),n=this.ps;this.ps+=(this.p-this.ps)*t,Math.abs(this.p-this.ps)<2e-5&&(this.ps=this.p);let i=this.g;this.g=this.weg(this.ps);let r=e>0?(this.g-i)/e:0;return this.v+=(r-this.v)*Ci(e,.08),this.kapitel=Math.min(this.gewichte.length-1,Math.floor(this.g)),this.u=this.g-this.kapitel,this}}});var zT,BT,HT,OT,Ru,Zb=pt(()=>{rn();zT="ABCDEFGHKLMNOPRSTUVXYZ#%&",BT="abcdeghknopqrsuvxyz",HT="0123456789",OT=s=>{let e=/[A-ZÄÖÜ]/.test(s)?zT:/[0-9]/.test(s)?HT:BT;return e[Math.floor(Math.random()*e.length)]},Ru=class{constructor(e,t){this.abschnitte=e,this.punkte=t,this.aktiv=-1,this.spiele=new Map,this.entschluesseln=!(window.matchMedia&&window.matchMedia("(pointer: coarse), (max-width: 720px)").matches);for(let n of e){let i=n.querySelector("h1, h2");if(!i)continue;let r=[...i.childNodes].map(l=>l.nodeName==="BR"?`
`:l.textContent).join(""),a=document.createElement("span");a.className="echt",a.textContent=r;let o=document.createElement("span");o.className="spiel",o.setAttribute("aria-hidden","true"),i.textContent="",i.append(a,o),n._kopf={h:i,echt:a,spiel:o,text:a.textContent}}}scramble(e,t){let n=e._kopf;if(!n||!this.entschluesseln)return;let i=n.text,r=performance.now();n.h.classList.add("entschluesselt");let a=()=>{let o=nt((performance.now()-r)/t),l="";for(let c=0;c<i.length;c++){let h=i[c];if(h===" "||h==="."||h===","||h===":"||h===`
`){l+=h;continue}let u=o*1.25-c/i.length*.25;l+=u>.95?h:Math.random()<.6?OT(h):h}n.spiel.textContent=l,o<1?e._spielId=requestAnimationFrame(a):(n.spiel.textContent="",n.h.classList.remove("entschluesselt"))};e._spielId&&cancelAnimationFrame(e._spielId),e._spielId=requestAnimationFrame(a)}update(e){let t=this.abschnitte.length,n=Math.min(t-1,Math.max(0,Math.floor(e)));if(n!==this.aktiv){this.aktiv=n,this.punkte.forEach((r,a)=>{a===n?r.setAttribute("aria-current","true"):r.removeAttribute("aria-current")});let i=this.abschnitte[n];(i&&!i._zuletzt||performance.now()-(i._zuletzt||0)>1200)&&this.scramble(i,420),i&&(i._zuletzt=performance.now())}for(let i=0;i<t;i++){let r=this.abschnitte[i],a=e-i,o;if(i===0)o=ut(a,-2,-1,.72,.9);else if(i===t-1){let c=ut(a,.02,.08,.25,.31),h=ut(a,.66,.8,3,4);o=Math.max(c,h);let u=a<.5;r._treffen!==u&&(r._treffen=u,r.classList.toggle("phase-treffen",u))}else i===7?o=ut(a,.06,.22,.9,.99):o=ut(a,.06,.24,.8,.95);let l=o>.005;r._sichtbar!==l&&(r._sichtbar=l,r.classList.toggle("da",l)),l&&(r.style.opacity=o.toFixed(3),r.style.transform=`translate3d(0, ${((1-o)*22).toFixed(1)}px, 0)`)}}}});function $b(s){let e=document.createElement("pre");e.style.cssText="position:fixed;left:8px;top:calc(56px + env(safe-area-inset-top));z-index:99;margin:0;padding:8px 10px;border-radius:10px;background:rgba(0,0,0,.82);color:#7ff;max-width:calc(100vw - 16px);overflow:hidden;font:11px/1.35 ui-monospace,Menlo,monospace;pointer-events:none;white-space:pre",document.body.appendChild(e);let t=()=>{let r=document.getElementById("welt"),a=r?r.getBoundingClientRect():{width:0,height:0,left:0},o=document.createElement("div");o.style.cssText="position:fixed;left:0;right:0;top:0;height:100lvh;visibility:hidden;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",document.body.appendChild(o);let l=getComputedStyle(o),c=`innen ${window.innerWidth}\xD7${window.innerHeight}  html ${document.documentElement.clientWidth}\xD7${document.documentElement.clientHeight}  vv ${window.visualViewport?Math.round(window.visualViewport.width)+"\xD7"+Math.round(window.visualViewport.height):"\u2013"}
fest ${o.offsetWidth}\xD7${o.offsetHeight}  Rand l${parseInt(l.paddingLeft)} r${parseInt(l.paddingRight)} o${parseInt(l.paddingTop)} u${parseInt(l.paddingBottom)}  Leinwand ${Math.round(a.width)}\xD7${Math.round(a.height)} ab ${Math.round(a.left)}  Puffer ${r?r.width+"\xD7"+r.height:"\u2013"}`;return o.remove(),c};e.textContent=`Messung wartet auf \u201EBereit\u201C \u2026
`+t(),window.addEventListener("resize",()=>{s.bereit||(e.textContent=`Messung wartet auf \u201EBereit\u201C \u2026
`+t())}),setTimeout(()=>{s.bereit||(e.textContent=`Messung wartet auf \u201EBereit\u201C \u2026
`+t())},1500);let n=()=>{s.bereit?setTimeout(i,1500):setTimeout(n,200)},i=()=>{let r=Math.max(1,document.documentElement.scrollHeight-window.innerHeight),a=[["vor",0,r,25e3],["zur\xFCck",r,0,1e4],["vor 2",0,r,25e3]],o=[],l=0,c=0,h=0,u=[],f=[],d=m=>{let[x,g,p,v]=a[l];if(!c)c=m,h=m,u=[],f=[];else{let _=m-h;u.push(_),_>50&&f.push(s.rollen.g.toFixed(1)),h=m}let E=Math.min(1,(m-c)/v);if(window.scrollTo(0,g+(p-g)*E),e.textContent=`Messung: ${x} ${Math.round(E*100)} %`,E<1){requestAnimationFrame(d);return}let b=u.filter(_=>_>0),M=[...b].sort((_,w)=>_-w);if(o.push({name:x,bilder:b.length,ueber50:b.filter(_=>_>50).length,ueber33:b.filter(_=>_>34).length,max:Math.round(M[M.length-1]||0),orte:f.slice(0,14).join(" "),fps:Math.round(1e3*b.length/b.reduce((_,w)=>_+w,0))}),l++,c=0,l<a.length){requestAnimationFrame(d);return}let y=(performance.getEntriesByType("resource").reduce((_,w)=>_+(w.transferSize||w.encodedBodySize||0),0)/1e6).toFixed(1),S=[`FREQ Messung  ${new Date().toLocaleTimeString()}`,t(),`Stufe ${s.welt.stufeName}  Pixeldichte ${s.welt.dpr}  ${s.grund||""}`,`bereit nach ${((s.bereitNach||0)/1e3).toFixed(1)} s, ${y} MB`];for(let _ of o)S.push(`${_.name.padEnd(7)} ${_.fps} fps  >50ms: ${_.ueber50}  >33ms: ${_.ueber33}  max ${_.max} ms`,_.orte?`  bei g ${_.orte}`:"");e.textContent=S.join(`
`),s.messung=o,console.log("FREQ Messung",JSON.stringify(o))};requestAnimationFrame(d)};n()}var Qb=pt(()=>{});var VT=rx(()=>{Vb();Yb();Jb();Zb();mp();rn();Qb();function GT(s){let e="";try{let a=s.getExtension("WEBGL_debug_renderer_info");e=a?String(s.getParameter(a.UNMASKED_RENDERER_WEBGL)):""}catch{}let t=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Mac/.test(navigator.platform),n=navigator.hardwareConcurrency||4,i="hoch";/SwiftShader|llvmpipe|Software|Basic Render/i.test(e)?i="niedrig":t?i=n>=6?"mittel":"niedrig":n<=2&&(i="niedrig");let r=/SwiftShader|llvmpipe|Software|Basic Render/i.test(e);return{stufe:i,renderer:e,mobil:t,software:r}}function ex(){let s=document.documentElement,e=document.getElementById("welt"),t=document.querySelector("main"),n=Array.from(document.querySelectorAll("main .kapitel")),i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=window.FREQ={bereit:!1,fps:0,stufe:"",grund:""};if(!e||!t||n.length===0)return;if(i){s.classList.add("ruhig"),r.grund="reduzierte Bewegung";return}let a=null;try{a=e.getContext("webgl2",{antialias:!1,alpha:!1,depth:!0,stencil:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1})}catch{a=null}if(!a){s.classList.add("ohne-webgl"),r.grund="kein WebGL2";return}let o={};for(let J of n)for(let[be,xe]of Object.entries(J.dataset))if(be.startsWith("w")){let Ae=be.slice(1);o[Ae.charAt(0).toLowerCase()+Ae.slice(1)]=xe}let l=n.map(J=>parseFloat(J.dataset.gewicht||"1.3")),c=l.reduce((J,be)=>J+be,0),h=document.body.dataset.basis||"",u=GT(a),f=new URLSearchParams(location.search),d=Tl[f.get("stufe")]?f.get("stufe"):u.stufe;s.classList.add("welt"),t.style.height=CSS.supports&&CSS.supports("height","100lvh")?`${c*100}lvh`:`${c*100}vh`,"scrollRestoration"in history&&(history.scrollRestoration="manual");let m=document.querySelector(".marke img"),x=document.querySelector('script[src*="welt.js"]'),g=(x&&x.getAttribute("src")||"").split("?v=")[1]||"",p=new Tu(e,{woerter:o,stufe:d,basis:h,context:a,logoMarke:m,version:g}),v=new wu(l);v.ps=v.p;let E=Array.from(document.querySelectorAll(".kapitelnav button")),b=new Ru(n,E),M=document.querySelector(".finale-logo"),y=document.getElementById("neigung");r.welt=p,r.rollen=v,r.info=u,r.stufe=d,r.texte=b;let S=document.getElementById("laden"),_=performance.now(),w=document.documentElement.lang==="en",C=r.probeZustand={aktiv:!1,g:0,n:0,zeiten:[],anteil:0,runde:0,ruhe:0,bilderFertig:null},I=-1,U=0,P=setInterval(()=>{if(!S||r.bereit)return;let J=p.ladeStand,be=p.lader?p.lader.fortschritt:null,xe=be&&be.gesamt>0?Math.min(1,be.geladen/be.gesamt):J.bauen||0,Ae=p.allesGeladen?1:J.schritt==="grafik"&&J.grafik||0,ze=Math.max(U,Math.min(1,.7*xe+.08*(J.bauen||0)+.14*Ae+.08*C.anteil));U=ze;let B=Math.min(99,Math.floor(ze*100));if(B!==I){I=B;let L=372*ze,T=(180+L)*Math.PI/180;S.style.setProperty("--laden-bogen",L.toFixed(1)+"deg"),S.style.setProperty("--kx",(51.9+47.2*Math.sin(T)).toFixed(2)+"%"),S.style.setProperty("--ky",(48-47.2*Math.cos(T)).toFixed(2)+"%");let Y=document.getElementById("laden-prozent");Y&&(Y.textContent=B+" %")}let je=document.getElementById("laden-was"),et=J.schritt==="grafik"||p.allesGeladen?w?"Building the graphics \u2026":"Baut die Grafik \u2026":null;je&&et&&je.textContent!==et&&(je.textContent=et)},120);r.ladeStand=()=>({...p.lader?p.lader.fortschritt:{},schritt:p.ladeStand.schritt,prozent:I});let D=document.getElementById("laden-ohne"),k=!1,z=setTimeout(()=>{D&&!r.bereit&&(D.hidden=!1)},2e4);D&&D.addEventListener("click",()=>{k=!0,clearInterval(P),s.classList.remove("welt"),s.classList.add("ohne-webgl"),t.style.height="",r.grund="ohne 3D (Knopf)",window.scrollTo(0,0)}),"serviceWorker"in navigator&&/^https?:/.test(location.protocol)&&window.addEventListener("load",()=>{navigator.serviceWorker.register(h+"sw.js").catch(()=>{})});let N={x:0,y:0},F=null;window.addEventListener("pointermove",J=>{J.pointerType==="mouse"&&(N.x=(J.clientX/window.innerWidth-.5)*2,N.y=(J.clientY/window.innerHeight-.5)*2)},{passive:!0});let V=()=>{window.addEventListener("deviceorientation",J=>{if(J.gamma==null||J.beta==null)return;let be=Math.abs(window.orientation||screen.orientation&&screen.orientation.angle||0)===90,xe=be?J.beta:J.gamma,Ae=be?J.gamma:J.beta;F={x:nt(xe/28,-1,1),y:nt((Ae-(be?0:48))/28,-1,1)}},{passive:!0})};if(y){let J=window.DeviceOrientationEvent;J&&typeof J.requestPermission=="function"&&u.mobil?(y.hidden=!1,y.addEventListener("click",async()=>{try{await J.requestPermission()==="granted"&&(V(),y.setAttribute("aria-pressed","true"),y.classList.add("an"))}catch{}})):J&&u.mobil&&V()}window.addEventListener("keydown",J=>{let be=J.target,xe=be&&(be.tagName==="INPUT"||be.tagName==="TEXTAREA"||be.tagName==="BUTTON"||be.tagName==="A"),Ae=v.kapitel;J.key==="ArrowDown"||J.key==="PageDown"||J.key===" "&&!xe&&!J.shiftKey?(J.preventDefault(),v.springe(Ae+1)):J.key==="ArrowUp"||J.key==="PageUp"||J.key===" "&&!xe&&J.shiftKey?(J.preventDefault(),v.springe(Ae-1)):J.key==="Home"&&!xe?(J.preventDefault(),v.springe(0)):J.key==="End"&&!xe&&(J.preventDefault(),v.springe(l.length-1))}),E.forEach((J,be)=>J.addEventListener("click",()=>v.springe(be))),n.forEach((J,be)=>J.addEventListener("focusin",()=>{Math.abs(v.g-be-.5)>.6&&v.springe(be)}));let j=document.createElement("div");j.setAttribute("aria-hidden","true"),j.style.cssText="position:fixed;left:0;right:0;top:0;height:100vh;height:100lvh;visibility:hidden;pointer-events:none;z-index:-1",document.body.appendChild(j);let ae=()=>{let J=Math.max(window.innerWidth,j.clientWidth),be=Math.max(window.innerHeight,j.clientHeight);e.style.width=J+"px",e.style.height=be+"px",p.groesse(J,be,Math.min(window.devicePixelRatio||1,u.software?.35:2))};window.addEventListener("resize",ae),window.ResizeObserver&&new ResizeObserver(()=>ae()).observe(j),window.visualViewport&&window.visualViewport.addEventListener("resize",ae),window.addEventListener("orientationchange",()=>{setTimeout(ae,250),setTimeout(ae,900)}),ae();let he=0,ce=0,ye=0,Xe=0,ie=(J,be)=>{if(ye||(ye=be),he++,ce+=J,be-ye<2e3)return;let xe=he/ce;if(r.fps=Math.round(xe),he=0,ce=0,ye=be,Math.abs(v.v)>.02||v.sprung){Xe=Math.max(0,Xe-1);return}xe<42?(Xe++,Xe>=3&&p.dpr>1&&(p.dprDeckel=1,ae(),r.grund="langsam "+Math.round(xe)+" fps: Pixeldichte 1",Xe=0)):Xe=0},oe=["niedrig","mittel","hoch"],Te=.1,De=25,Re=()=>Promise.all(Array.from(document.querySelectorAll("main img, header img")).map(J=>J.decode?J.decode().catch(()=>{}):null)),Ge=(J,be,xe)=>{C.aktiv||(C.aktiv=!0,C.g=0,C.n=0,C.zeiten=[],C.bilderFertig||(C.bilderFertig=Re().then(()=>{C.bilder=!0})));let Ae=l.length-.002;if(C.g<=Ae){let je=Math.min(C.g,Ae),et=Math.min(l.length-1,Math.floor(je)),L=M&&je>8.62?M.getBoundingClientRect():null;return p.bild(be,{g:je,v:0,kapitel:et,u:je-et,maus:{x:0,y:0},logoRect:L,zeit:J/1e3}),M&&M.style.setProperty("--bogen",(je>8.62?p.logoBogen:0).toFixed(2)+"deg"),C.runde===0&&b.update(je),C.n>6&&xe>0&&xe<2e3&&C.zeiten.push(xe),C.n++,C.runde===0&&(C.anteil=Math.min(.9,.9*je/Ae)),C.g=je>=Ae?Ae+1:C.g+(C.runde?Te*2.5:Te),!1}let ze=[...C.zeiten].sort((je,et)=>je-et),B=ze.length?ze[Math.floor(ze.length/2)]:0;if(r.probe=(r.probe||[]).concat([{stufe:p.stufeName,dpr:p.dpr,median:+B.toFixed(1),bilder:ze.length}]),B>De&&C.runde<3){let je=oe.indexOf(p.stufeName);if(p.dpr>1&&p.stufeName!=="niedrig")p.dprDeckel=1,ae(),r.grund="Probefahrt "+Math.round(B)+" ms: Pixeldichte 1";else if(je>0)p.setzeStufe(oe[je-1]),r.stufe=p.stufeName,r.grund="Probefahrt "+Math.round(B)+" ms: Stufe "+p.stufeName,C.warten=!0,p.nachkompilieren().then(()=>{p.ladeStand.schritt="fertig",C.warten=!1});else return C.anteil=1,!0;return C.runde++,C.aktiv=!1,!1}return C.anteil=1,!0},gt=performance.now(),le=-1,fe={g:null},ve=J=>{requestAnimationFrame(ve);let be=J-gt,xe=be/1e3;gt=J,(xe<=0||xe>.5)&&(xe=1/60),v.update(xe),fe.g!==null&&(v.ps=v.p,v.g=v.weg(v.ps),v.v=0,v.kapitel=Math.min(l.length-1,Math.floor(v.g)),fe.g=null);let Ae=v.g;r.bereit?b.update(Ae):b.aktiv=-1;let ze=Math.min(l.length-1,Math.floor(Ae));le=ze;let B=F||N,je=null;if(M&&Ae>8.62&&(je=M.getBoundingClientRect()),!k){if(p.fertig&&!r.bereit){if(!p.allesGeladen||C.warten)return;if(!C.fertig){if(C.fertig=Ge(J,xe,be),!C.fertig)return;p.glitch=0,p.kriech=0,p.letztesKapitel=-1,p.convoy.autos[0]&&p.convoy.autos[0].modell&&(p.convoy.autos[0].modell.visible=!0),b.update(-5),b.aktiv=-1;for(let et of n)et._zuletzt=0;s.classList.add("textwarm")}if(p.bild(xe,{g:Ae,v:v.v,kapitel:ze,u:Ae-ze,maus:B,logoRect:je,zeit:J/1e3}),M&&M.style.setProperty("--bogen",(Ae>8.62?p.logoBogen:0).toFixed(2)+"deg"),++C.ruhe<(b.entschluesseln?12:20)||!C.bilder)return;if(p.glitch=0,S){S.style.setProperty("--laden-bogen","372deg");let et=document.getElementById("laden-prozent");et&&(et.textContent="100 %");let L=document.getElementById("laden-was");L&&(L.textContent=w?"Ready":"Bereit")}if(clearInterval(P),clearTimeout(z),s.classList.remove("textwarm"),s.classList.add("bereit"),r.bereit=!0,r.bereitNach=Math.round(J-_),b.update(Ae),navigator.serviceWorker&&navigator.serviceWorker.ready&&p.lader){let et=[x&&x.src,...p.lader.angefragt.map(L=>new URL(p.lader.url(L),location.href).href),new URL(p.lader.url("welt/vorab.json"),location.href).href].filter(Boolean);navigator.serviceWorker.ready.then(L=>{L.active&&L.active.postMessage({merken:et})}).catch(()=>{})}return}p.fertig&&(p.bild(xe,{g:Ae,v:v.v,kapitel:ze,u:Ae-ze,maus:B,logoRect:je,zeit:J/1e3}),M&&M.style.setProperty("--bogen",(Ae>8.62?p.logoBogen:0).toFixed(2)+"deg"),ie(xe,J))}};requestAnimationFrame(ve),p.laden().then(()=>{ae()}).catch(J=>{console.error("Welt konnte nicht laden",J),s.classList.remove("welt"),s.classList.add("ohne-webgl"),r.grund="Laden fehlgeschlagen: "+(J&&J.message)});let me=/^#k(\d)$/.exec(location.hash);if(me){let J=Math.min(l.length-1,parseInt(me[1],10));window.scrollTo(0,v.stand(J)),v.ps=v.p=nt(window.scrollY/v.laenge()),v.g=v.weg(v.ps)}window.addEventListener("hashchange",()=>{let J=/^#k(\d)$/.exec(location.hash);J&&v.springe(parseInt(J[1],10))}),r.springe=J=>v.springe(J),r.setze=J=>{let be=l.length,xe=Math.max(0,Math.min(be-1,Math.floor(J))),Ae=J-xe,ze=v.start[xe]+(v.start[xe+1]-v.start[xe])*nt(Ae,0,1);window.scrollTo(0,ze*v.laenge()),fe.g=J},f.get("messen")==="1"&&$b(r),r.bodenPruefen=J=>Xb(p,J),r.baeumeBei=(J,be,xe,Ae)=>Kb(p,J,be,xe,Ae),r.strassePruefen=J=>jb(p,J),r.gewicht=()=>performance.getEntriesByType("resource").reduce((J,be)=>J+(be.transferSize||be.encodedBodySize||0),0)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ex):ex()});VT();})();
