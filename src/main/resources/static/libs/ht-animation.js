!function(V){"use strict";var w="ht",O=V[w],l=O.Default,H="prototype",m=O.DataModel[H],o=O.Data[H],s=null,u=function(r){return"set"+r.charAt(0).toUpperCase()+r.slice(1)};l.getEasing=function(Y){var E=s;return Y.indexOf(".")>=0?(Y=Y.split("."),E=W[Y[0]][Y[1]]):E=W[Y],function(e){return E(e,0,1,1)}},l.getCommonEasing=function(Y){var v=s;return Y.indexOf(".")>=0?(Y=Y.split("."),v=W[Y[0]][Y[1]]):v=W[Y],v},o.setAnimation=function(q){var y=this._animation;this._animation=q,this.fp("animation",y,q)},o.getAnimation=function(){return this._animation},o.pauseAnimation=function(){this._pauseAnimation=!0,this._pauseTime=Date.now()},o.resumeAnimation=function(){delete this._pauseAnimation},V.requestAnimFrame=function(){return V.requestAnimationFrame||V.webkitRequestAnimationFrame||V.mozRequestAnimationFrame||function(f){V.setTimeout(f,1e3/60)}}();var n=V.requestAnimFrame,R=V.setInterval;m.setAnimationInterval=function(E){var i=this;i.$2a=E,i.$1a!=s&&(clearInterval(i.$1a),delete i.$1a,i.enableAnimation(E))},m.getAnimationInterval=function(){return this.$2a||"animationFrame"},m.getDataAnimation=function(y){return y.getAnimation()},m.enableAnimation=function(c){var Q=this,i=Q.getDatas();if(Q.$1a==s){c&&Q.setAnimationInterval(c),c=Q.getAnimationInterval();var B=function(){var X=Q.getAnimationInterval();i.each(function(m){var i=Q.getDataAnimation(m);if(m.setAnimation(i),i&&!m._pauseAnimation){var c=i.start;m._animationstatus=m._animationstatus||{},m._animationprocess=m._animationprocess||c.slice(0);for(var A=m._animationstatus,E=m._animationprocess,e=0;e<E.length;e++){var a;a=A[e]?A[e]:A[e]={$5a:0,$6a:0,$7a:0,$8a:0};var F=i[E[e]],f=F.property,t=F.accessType,w=F.from,$=F.to,W=F.easing||"Quad.easeOut",S=a.$5a,N=F.frames||60,C=F.repeat||0,R=F.duration,H=F.delay||0,T=F.interval,y=a.$6a,V=F.onUpdate,L=F.onComplete,n=!1,Z=function(){var b;b=R!=s?l.getCommonEasing(W)(Date.now()-a._startTime,w,$-w,R):l.getCommonEasing(W)(S,w,$-w,N),V?V.call(m,b):t?"style"===t?m.s(f,b):"attr"===t?m.a(f,b):"field"===t&&(m[f]=b):m[u(f)](b),n=!0},z=function(){a._startTime==s&&(a._startTime=Date.now());var I=m._pauseTime;I!=s&&(a._startTime+=Date.now()-I),e==E.length-1&&delete m._pauseTime,T!=s?a.$7a>=T?(a.$7a=0,Z()):a.$7a+=isNaN(X)?16.6666:X:Z()};H?a.$8a>=H?z():a.$8a+=isNaN(X)?16.6666:X:z(),n&&(R!=s?Date.now()-a._startTime>R&&(C===!0?a._startTime=Date.now():(y=a.$6a=y+1,y>C&&(L&&L.call(m),F.next?(A[e]=s,E[e]=F.next):(m.setAnimation(s),m._animationstatus=s,m._animationprocess=s,m._pauseTime=s)))):(S=a.$5a=S+1,S>N&&(C===!0?S=a.$5a=0:(y=a.$6a=y+1,y>C&&(L&&L.call(m),F.next?(A[e]=s,E[e]=F.next):(m.setAnimation(s),m._animationstatus=s,m._animationprocess=s))))))}}}),"animationFrame"===X&&Q.$1a!=s&&(Q.$1a=n(B))};Q.$1a="animationFrame"===c?n(B):R(B,c)}},m.disableAnimation=function(){var P=this,s=P.getAnimationInterval();"animationFrame"===s||clearInterval(P.$1a),delete P.$1a};var W={Linear:function(D,X,i,Z){return i*D/Z+X},Quad:{easeIn:function(z,K,M,C){return M*(z/=C)*z+K},easeOut:function(q,t,L,v){return-L*(q/=v)*(q-2)+t},easeInOut:function(E,K,U,z){return(E/=z/2)<1?U/2*E*E+K:-U/2*(--E*(E-2)-1)+K}},Cubic:{easeIn:function(w,R,J,K){return J*(w/=K)*w*w+R},easeOut:function(x,Y,Z,l){return Z*((x=x/l-1)*x*x+1)+Y},easeInOut:function(Y,L,z,s){return(Y/=s/2)<1?z/2*Y*Y*Y+L:z/2*((Y-=2)*Y*Y+2)+L}},Quart:{easeIn:function(q,M,T,f){return T*(q/=f)*q*q*q+M},easeOut:function(F,B,_,w){return-_*((F=F/w-1)*F*F*F-1)+B},easeInOut:function(h,F,p,K){return(h/=K/2)<1?p/2*h*h*h*h+F:-p/2*((h-=2)*h*h*h-2)+F}},Quint:{easeIn:function(P,h,y,l){return y*(P/=l)*P*P*P*P+h},easeOut:function(v,s,o,h){return o*((v=v/h-1)*v*v*v*v+1)+s},easeInOut:function(_,L,q,w){return(_/=w/2)<1?q/2*_*_*_*_*_+L:q/2*((_-=2)*_*_*_*_+2)+L}},Sine:{easeIn:function(Z,x,N,t){return-N*Math.cos(Z/t*(Math.PI/2))+N+x},easeOut:function(p,F,I,t){return I*Math.sin(p/t*(Math.PI/2))+F},easeInOut:function(d,$,c,m){return-c/2*(Math.cos(Math.PI*d/m)-1)+$}},Expo:{easeIn:function(l,T,p,b){return 0==l?T:p*Math.pow(2,10*(l/b-1))+T},easeOut:function(z,l,k,$){return z==$?l+k:k*(-Math.pow(2,-10*z/$)+1)+l},easeInOut:function(c,n,t,H){return 0==c?n:c==H?n+t:(c/=H/2)<1?t/2*Math.pow(2,10*(c-1))+n:t/2*(-Math.pow(2,-10*--c)+2)+n}},Circ:{easeIn:function(P,H,B,V){return-B*(Math.sqrt(1-(P/=V)*P)-1)+H},easeOut:function(L,s,Z,D){return Z*Math.sqrt(1-(L=L/D-1)*L)+s},easeInOut:function(n,f,c,B){return(n/=B/2)<1?-c/2*(Math.sqrt(1-n*n)-1)+f:c/2*(Math.sqrt(1-(n-=2)*n)+1)+f}},Elastic:{easeIn:function(U,n,q,Z,D,V){var G;return 0==U?n:1==(U/=Z)?n+q:("undefined"==typeof V&&(V=.3*Z),!D||D<Math.abs(q)?(G=V/4,D=q):G=V/(2*Math.PI)*Math.asin(q/D),-(D*Math.pow(2,10*(U-=1))*Math.sin((U*Z-G)*2*Math.PI/V))+n)},easeOut:function(H,P,B,h,E,Z){var q;return 0==H?P:1==(H/=h)?P+B:("undefined"==typeof Z&&(Z=.3*h),!E||E<Math.abs(B)?(E=B,q=Z/4):q=Z/(2*Math.PI)*Math.asin(B/E),E*Math.pow(2,-10*H)*Math.sin((H*h-q)*2*Math.PI/Z)+B+P)},easeInOut:function(v,T,E,V,p,o){var S;return 0==v?T:2==(v/=V/2)?T+E:("undefined"==typeof o&&(o=V*.3*1.5),!p||p<Math.abs(E)?(p=E,S=o/4):S=o/(2*Math.PI)*Math.asin(E/p),1>v?-.5*p*Math.pow(2,10*(v-=1))*Math.sin((v*V-S)*2*Math.PI/o)+T:.5*p*Math.pow(2,-10*(v-=1))*Math.sin((v*V-S)*2*Math.PI/o)+E+T)}},Back:{easeIn:function(c,G,o,A,y){return"undefined"==typeof y&&(y=1.70158),o*(c/=A)*c*((y+1)*c-y)+G},easeOut:function(_,A,q,t,R){return"undefined"==typeof R&&(R=1.70158),q*((_=_/t-1)*_*((R+1)*_+R)+1)+A},easeInOut:function(A,O,s,f,n){return"undefined"==typeof n&&(n=1.70158),(A/=f/2)<1?s/2*A*A*(((n*=1.525)+1)*A-n)+O:s/2*((A-=2)*A*(((n*=1.525)+1)*A+n)+2)+O}},Bounce:{easeIn:function(C,S,Z,V){return Z-W.Bounce.easeOut(V-C,0,Z,V)+S},easeOut:function(j,b,Z,x){return(j/=x)<1/2.75?Z*7.5625*j*j+b:2/2.75>j?Z*(7.5625*(j-=1.5/2.75)*j+.75)+b:2.5/2.75>j?Z*(7.5625*(j-=2.25/2.75)*j+.9375)+b:Z*(7.5625*(j-=2.625/2.75)*j+.984375)+b},easeInOut:function(e,P,x,v){return v/2>e?.5*W.Bounce.easeIn(2*e,0,x,v)+P:.5*W.Bounce.easeOut(2*e-v,0,x,v)+.5*x+P}}}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);