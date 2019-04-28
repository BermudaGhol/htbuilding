!function(Q){"use strict";var D="ht",k=Q[D],Z=Math,l=Z.max,S=Z.min,Y=Z.abs,i=Z.atan2,P=(Z.cos,Z.sin,Z.ceil),d=k.Default,u=d.getInternal(),C=k.List,n=u.Mat,X=u.getNodeRect,s=u.intersectionLineRect,v=d.getDistance,M=d.setEdgeType,E="left",N="right",x="top",O="bottom",K="edge.type",t="edge.gap",f="edge.center",$="edge.extend",b=function(x,W){return X(x,W).width},L=function(Q,p){return X(Q,p).height},U=function(C,m){return u.getEdgeAgentPosition(C,m._40I,m.s("edge.source.position"),m.s("edge.source.offset.x"),m.s("edge.source.offset.y"),m.s("edge.source.anchor.x"),m.s("edge.source.anchor.y"))},g=function(R,B){return u.getEdgeAgentPosition(R,B._41I,B.s("edge.target.position"),B.s("edge.target.offset.x"),B.s("edge.target.offset.y"),B.s("edge.target.anchor.x"),B.s("edge.target.anchor.y"))},G=function(r,V){var p=r.s(K),z=r.getEdgeGroup();if(z){var H=0;if(z.eachSiblingEdge(function(t){V.isVisible(t)&&t.s(K)==p&&H++}),H>1)return r.s(t)*(H-1)/2}return 0},T=function(Z,v){var x=Z.s(K),H=Z.isLooped();if(!Z.getEdgeGroup())return H?Z.s(t):0;var j,P=0,N=0,y=0;return Z.getEdgeGroup().getSiblings().each(function(M){M.each(function(I){if(I._40I===Z._40I&&I.s(K)==x&&v.isVisible(I)){var i=I.s(t);j?(N+=y/2+i/2,y=i):(j=I,y=i),I===Z&&(P=N)}})}),H?N-P+y:P-N/2},V=function(R,J){var b=J.s("edge.corner.radius");return d.toRoundedCorner(R,b)};u.addMethod(k.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),M("boundary",function(V,G,u,c){c||(G=-G);var o,l=U(u,V),Z=g(u,V),J=X(u,V._40I),Q=X(u,V._41I),j=new n(i(Z.y-l.y,Z.x-l.x)),x=v(l,Z),_=l.x,y=l.y;return o=j.tf(0,G),l={x:o.x+_,y:o.y+y},o=j.tf(x,G),Z={x:o.x+_,y:o.y+y},o=s(l,Z,J),o&&(l={x:o[0],y:o[1]}),o=s(l,Z,Q),o&&(Z={x:o[0],y:o[1]}),{points:new C([l,Z])}}),M("ripple",function(p,Q,F,_){_||(Q=-Q);var E=U(F,p),B=g(F,p),q=v(E,B),w=S(p.s("edge.offset"),q/2),A=p.s("edge.ripple.size"),y=p.s("edge.ripple.length"),O=p.s("edge.ripple.both"),$=p.s(f),b=p.s("edge.ripple.elevation"),T=new C,H=p.s("edge.ripple.straight")?null:new C,l=new n(i(B.y-E.y,B.x-E.x));_||(b=-b),q-=2*w,y>0&&(A=P(q/y));var d=q/A;H&&H.add(1);for(var Y=0;A>Y;Y++)H&&H.add(3),0===Y?T.add({x:w+d*Y,y:$?0:Q}):T.add({x:w+d*Y,y:Q}),T.add({x:w+d*Y+d/2,y:b+Q}),O&&(b=-b);for(T.add({x:w+q,y:$?0:Q}),Y=0;Y<T.size();Y++){var X=l.tf(T.get(Y));X.x+=E.x,X.y+=E.y,T.set(Y,X)}return{points:T,segments:H}}),M("h.v",function(z,N,Z){N=T(z,Z);var G=new C,k=z.s(f),p=U(Z,z),M=p.x,A=p.y,Q=g(Z,z),j=Q.x,a=Q.y,c=0,l=0,E=j-M,I=a-A;return k||(c=b(Z,z._40I)/2,l=L(Z,z._41I)/2),E>=0&&0>=I?(G.add({x:M+c,y:A+N}),G.add({x:j+N,y:A+N}),G.add({x:j+N,y:a+l})):0>=E&&I>=0?(G.add({x:M-c,y:A+N}),G.add({x:j+N,y:A+N}),G.add({x:j+N,y:a-l})):E>=0&&I>=0?(G.add({x:M+c,y:A+N}),G.add({x:j-N,y:A+N}),G.add({x:j-N,y:a-l})):(G.add({x:M-c,y:A+N}),G.add({x:j-N,y:A+N}),G.add({x:j-N,y:a+l})),V(G,z)}),M("v.h",function(v,A,J){A=T(v,J);var c=new C,o=v.s(f),Q=U(J,v),E=Q.x,u=Q.y,l=g(J,v),Z=l.x,K=l.y,S=0,F=0,w=Z-E,j=K-u;return o||(S=b(J,v._41I)/2,F=L(J,v._40I)/2),w>=0&&0>=j?(c.add({x:E+A,y:u-F}),c.add({x:E+A,y:K+A}),c.add({x:Z-S,y:K+A})):0>=w&&j>=0?(c.add({x:E+A,y:u+F}),c.add({x:E+A,y:K+A}),c.add({x:Z+S,y:K+A})):w>=0&&j>=0?(c.add({x:E-A,y:u+F}),c.add({x:E-A,y:K+A}),c.add({x:Z-S,y:K+A})):(c.add({x:E-A,y:u-F}),c.add({x:E-A,y:K+A}),c.add({x:Z+S,y:K+A})),V(c,v)}),M("ortho",function(r,N,l){var $=new C,B=r.s(f),I=r.s("edge.ortho"),h=r._40I,k=r._41I,K=U(l,r),F=K.x,e=K.y,S=g(l,r),D=S.x,Q=S.y,n=D-F,x=Q-e,X=B?0:b(l,h)/2,O=B?0:L(l,h)/2,G=B?0:b(l,k)/2,J=B?0:L(l,k)/2,H=(n-(X+G)*(n>0?1:-1))*I,R=(x-(O+J)*(x>0?1:-1))*I;return Y(n)<Y(x)?n>=0&&0>=x?($.add({x:F+N,y:e-O}),$.add({x:F+N,y:e+R+N-O}),$.add({x:D+N,y:e+R+N-O}),$.add({x:D+N,y:Q+J})):0>=n&&x>=0?($.add({x:F+N,y:e+O}),$.add({x:F+N,y:e+R+N+O}),$.add({x:D+N,y:e+R+N+O}),$.add({x:D+N,y:Q-J})):n>=0&&x>=0?($.add({x:F+N,y:e+O}),$.add({x:F+N,y:e+R-N+O}),$.add({x:D+N,y:e+R-N+O}),$.add({x:D+N,y:Q-J})):($.add({x:F+N,y:e-O}),$.add({x:F+N,y:e+R-N-O}),$.add({x:D+N,y:e+R-N-O}),$.add({x:D+N,y:Q+J})):n>=0&&0>=x?($.add({x:F+X,y:e+N}),$.add({x:F+H+N+X,y:e+N}),$.add({x:F+H+N+X,y:Q+N}),$.add({x:D-G,y:Q+N})):0>=n&&x>=0?($.add({x:F-X,y:e+N}),$.add({x:F+H+N-X,y:e+N}),$.add({x:F+H+N-X,y:Q+N}),$.add({x:D+G,y:Q+N})):n>=0&&x>=0?($.add({x:F+X,y:e+N}),$.add({x:F+H-N+X,y:e+N}),$.add({x:F+H-N+X,y:Q+N}),$.add({x:D-G,y:Q+N})):($.add({x:F-X,y:e+N}),$.add({x:F+H-N-X,y:e+N}),$.add({x:F+H-N-X,y:Q+N}),$.add({x:D+G,y:Q+N})),V($,r)}),M("flex",function(W,c,r){var H=new C,e=W.s("edge.flex")+G(W,r),B=W.s(f),k=W._40I,p=W._41I,y=U(r,W),_=y.x,s=y.y,v=g(r,W),z=v.x,I=v.y,t=z-_,h=I-s,J=B?0:b(r,k)/2,S=B?0:L(r,k)/2,D=B?0:b(r,p)/2,l=B?0:L(r,p)/2,q=t>0?e:-e,x=h>0?e:-e;return Y(t)<Y(h)?t>=0&&0>=h?(H.add({x:_+c,y:s-S}),H.add({x:_+c,y:s+x+c-S}),H.add({x:z+c,y:I-x+c+l}),H.add({x:z+c,y:I+l})):0>=t&&h>=0?(H.add({x:_+c,y:s+S}),H.add({x:_+c,y:s+x+c+S}),H.add({x:z+c,y:I-x+c-l}),H.add({x:z+c,y:I-l})):t>=0&&h>=0?(H.add({x:_+c,y:s+S}),H.add({x:_+c,y:s+x-c+S}),H.add({x:z+c,y:I-x-c-l}),H.add({x:z+c,y:I-l})):(H.add({x:_+c,y:s-S}),H.add({x:_+c,y:s+x-c-S}),H.add({x:z+c,y:I-x-c+l}),H.add({x:z+c,y:I+l})):t>=0&&0>=h?(H.add({x:_+J,y:s+c}),H.add({x:_+q+c+J,y:s+c}),H.add({x:z-q+c-D,y:I+c}),H.add({x:z-D,y:I+c})):0>=t&&h>=0?(H.add({x:_-J,y:s+c}),H.add({x:_+q+c-J,y:s+c}),H.add({x:z-q+c+D,y:I+c}),H.add({x:z+D,y:I+c})):t>=0&&h>=0?(H.add({x:_+J,y:s+c}),H.add({x:_+q-c+J,y:s+c}),H.add({x:z-q-c-D,y:I+c}),H.add({x:z-D,y:I+c})):(H.add({x:_-J,y:s+c}),H.add({x:_+q-c-J,y:s+c}),H.add({x:z-q-c+D,y:I+c}),H.add({x:z+D,y:I+c})),V(H,W)}),M("extend.east",function(j,Z,o){var M=new C,T=j.s($)+G(j,o),L=j.s(f),N=U(o,j),d=N.x+(L?0:b(o,j._40I)/2),W=N.y,t=g(o,j),x=t.x+(L?0:b(o,j._41I)/2),F=t.y,A=l(d,x)+T;return W>F?(M.add({x:d,y:W+Z}),M.add({x:A+Z,y:W+Z}),M.add({x:A+Z,y:F-Z}),M.add({x:x,y:F-Z})):(M.add({x:d,y:W-Z}),M.add({x:A+Z,y:W-Z}),M.add({x:A+Z,y:F+Z}),M.add({x:x,y:F+Z})),V(M,j)}),M("extend.west",function(T,I,M){var _=new C,y=T.s($)+G(T,M),d=T.s(f),F=U(M,T),L=F.x-(d?0:b(M,T._40I)/2),l=F.y,X=g(M,T),Y=X.x-(d?0:b(M,T._41I)/2),s=X.y,v=S(L,Y)-y;return l>s?(_.add({x:L,y:l+I}),_.add({x:v-I,y:l+I}),_.add({x:v-I,y:s-I}),_.add({x:Y,y:s-I})):(_.add({x:L,y:l-I}),_.add({x:v-I,y:l-I}),_.add({x:v-I,y:s+I}),_.add({x:Y,y:s+I})),V(_,T)}),M("extend.north",function(_,b,Y){var h=new C,d=_.s($)+G(_,Y),n=_.s(f),D=U(Y,_),B=D.x,s=D.y-(n?0:L(Y,_._40I)/2),Z=g(Y,_),z=Z.x,N=Z.y-(n?0:L(Y,_._41I)/2),X=S(s,N)-d;return B>z?(h.add({y:s,x:B+b}),h.add({y:X-b,x:B+b}),h.add({y:X-b,x:z-b}),h.add({y:N,x:z-b})):(h.add({y:s,x:B-b}),h.add({y:X-b,x:B-b}),h.add({y:X-b,x:z+b}),h.add({y:N,x:z+b})),V(h,_)}),M("extend.south",function(u,Q,E){var d=new C,H=u.s($)+G(u,E),I=u.s(f),s=U(E,u),a=s.x,Y=s.y+(I?0:L(E,u._40I)/2),o=g(E,u),j=o.x,t=o.y+(I?0:L(E,u._41I)/2),r=l(Y,t)+H;return a>j?(d.add({y:Y,x:a+Q}),d.add({y:r+Q,x:a+Q}),d.add({y:r+Q,x:j-Q}),d.add({y:t,x:j-Q})):(d.add({y:Y,x:a-Q}),d.add({y:r+Q,x:a-Q}),d.add({y:r+Q,x:j+Q}),d.add({y:t,x:j+Q})),V(d,u)});var q=function(w,r,e,V,j){if(V.sort(function(W,x){var H=W.getSourceAgent()===r?W.getTargetAgent():W.getSourceAgent(),B=x.getSourceAgent()===r?x.getTargetAgent():x.getSourceAgent(),K=H.p(),j=B.p();if(e===E||e===N){if(K.y>j.y)return 1;if(K.y<j.y)return-1}else{if(K.x>j.x)return 1;if(K.x<j.x)return-1}return d.sortFunc(W.getId(),x.getId())}),j){for(var q,x,a,X=w.getSourceAgent(),n=w.getTargetAgent(),v=0;v<V.size();v++){var T=V.get(v);T.getSourceAgent()===X&&T.getTargetAgent()===n||T.getTargetAgent()===X&&T.getSourceAgent()===n?(x||(x=new C),x.add(T,0)):x?(a||(a=new C),a.add(T)):(q||(q=new C),q.add(T))}V.clear(),q&&V.addAll(q),x&&V.addAll(x),a&&V.addAll(a)}var k=V.indexOf(w),h=V.size(),Q=w.s(t);return{side:e,index:k,size:h,offset:-Q*(h-1)/2+Q*k}},h=function(Y,d,n,f,A){var P=d.s(K);return q(d,n,f,n.getAgentEdges().toList(function(s){return Y.isVisible(s)&&s.s(K)===P}),A)},w=function(d,Z){var $=d.getSourceAgent()===Z?d.getTargetAgent():d.getSourceAgent(),i=Z.p(),v=$.p(),J=v.x-i.x,M=v.y-i.y;return J>0&&Y(M)<=J?N:0>J&&Y(M)<=-J?E:M>0&&Y(J)<=M?O:x},z=function(l,S,C){var W=S.s(K),d=w(S,C);return q(S,C,d,C.getAgentEdges().toList(function(P){return l.isVisible(P)&&P.s(K)===W&&w(P,C)===d}))},r=function(I,c){var k=I.getSourceAgent()===c,u=k?I.getTargetAgent():I.getSourceAgent(),D=c.p(),S=u.p();return k?D.y>S.y?x:O:D.x<S.x?N:E},j=function(t,g,V){var X=g.s(K),e=r(g,V);return q(g,V,e,V.getAgentEdges().toList(function(i){return t.isVisible(i)&&i.s(K)===X&&r(i,V)===e}),e===N||e===O)},B=function(S,H){var C=S.getSourceAgent()===H,Y=C?S.getTargetAgent():S.getSourceAgent(),f=H.p(),v=Y.p();return C?f.x<v.x?N:E:f.y>v.y?x:O},W=function(t,T,Q){var n=T.s(K),o=B(T,Q);return q(T,Q,o,Q.getAgentEdges().toList(function(E){return t.isVisible(E)&&E.s(K)===n&&B(E,Q)===o}),o===N||o===O)},R=function(F,u,v){var P=F.getSourceAgent(),l=F.getTargetAgent(),S=P.getId()>l.getId(),K=S?l:P,B=S?P:l,$=K.p(),j=B.p(),R=v(u,F,K),k=v(u,F,B),X=F.s(f),y=X?0:b(u,K)/2,m=X?0:b(u,B)/2,e=X?0:L(u,K)/2,r=X?0:L(u,B)/2,A=R.offset,Y=k.offset,h=R.side,U=k.side,o=new C;return h===x?(o.add({x:$.x+A,y:$.y-e}),o.add({x:$.x+A,y:j.y+Y}),U===E?o.add({x:j.x-m,y:j.y+Y}):o.add({x:j.x+m,y:j.y+Y})):h===O?(o.add({x:$.x+A,y:$.y+e}),o.add({x:$.x+A,y:j.y+Y}),U===E?o.add({x:j.x-m,y:j.y+Y}):o.add({x:j.x+m,y:j.y+Y})):h===E?(o.add({x:$.x-y,y:$.y+A}),o.add({x:j.x+Y,y:$.y+A}),U===O?o.add({x:j.x+Y,y:j.y+r}):o.add({x:j.x+Y,y:j.y-r})):h===N&&(o.add({x:$.x+y,y:$.y+A}),o.add({x:j.x+Y,y:$.y+A}),U===O?o.add({x:j.x+Y,y:j.y+r}):o.add({x:j.x+Y,y:j.y-r})),S&&o.reverse(),V(o,F)};M("ortho2",function(n,u,o){var t,M,p=n.s(f),T=n.s("edge.ortho"),G=n.getSourceAgent(),j=n.getTargetAgent(),c=G.getId()>j.getId(),e=c?j:G,i=c?G:j,_=e.p(),R=i.p(),B=z(o,n,e),A=z(o,n,i),l=p?0:b(o,e)/2,k=p?0:L(o,e)/2,d=p?0:b(o,i)/2,y=p?0:L(o,i)/2,Y=new C,Q=B.offset,F=A.offset,U=B.side;return U===N?(t=R.y>_.y?-Q:Q,M=_.x+l+(R.x-d-_.x-l)*T,Y.add({x:_.x+l,y:_.y+Q}),Y.add({x:M+t,y:_.y+Q}),Y.add({x:M+t,y:R.y+F}),Y.add({x:R.x-d,y:R.y+F})):U===E?(t=R.y>_.y?-Q:Q,M=_.x-l-(_.x-l-R.x-d)*T,Y.add({x:_.x-l,y:_.y+Q}),Y.add({x:M-t,y:_.y+Q}),Y.add({x:M-t,y:R.y+F}),Y.add({x:R.x+d,y:R.y+F})):U===O?(t=R.x>_.x?-Q:Q,M=_.y+k+(R.y-y-_.y-k)*T,Y.add({x:_.x+Q,y:_.y+k}),Y.add({x:_.x+Q,y:M+t}),Y.add({x:R.x+F,y:M+t}),Y.add({x:R.x+F,y:R.y-y})):U===x&&(t=R.x>_.x?-Q:Q,M=_.y-k-(_.y-k-R.y-y)*T,Y.add({x:_.x+Q,y:_.y-k}),Y.add({x:_.x+Q,y:M-t}),Y.add({x:R.x+F,y:M-t}),Y.add({x:R.x+F,y:R.y+y})),c&&Y.reverse(),V(Y,n)},!0),M("flex2",function(S,m,i){var Z,r=S.getSourceAgent(),n=S.getTargetAgent(),R=r.getId()>n.getId(),M=R?n:r,T=R?r:n,l=M.p(),H=T.p(),v=z(i,S,M),p=z(i,S,T),w=S.s(f),U=S.s("edge.flex")+(v.size-1)/2*S.s(t),_=w?0:b(i,M)/2,W=w?0:L(i,M)/2,g=w?0:b(i,T)/2,F=w?0:L(i,T)/2,o=new C,Q=v.offset,J=p.offset,j=v.side;return j===N?(Z=H.y>l.y?-Q:Q,o.add({x:l.x+_,y:l.y+Q}),o.add({x:l.x+_+U+Z,y:l.y+Q}),o.add({x:H.x-g-U+Z,y:H.y+J}),o.add({x:H.x-g,y:H.y+J})):j===E?(Z=H.y>l.y?-Q:Q,o.add({x:l.x-_,y:l.y+Q}),o.add({x:l.x-_-U-Z,y:l.y+Q}),o.add({x:H.x+g+U-Z,y:H.y+J}),o.add({x:H.x+g,y:H.y+J})):j===O?(Z=H.x>l.x?-Q:Q,o.add({x:l.x+Q,y:l.y+W}),o.add({x:l.x+Q,y:l.y+W+U+Z}),o.add({x:H.x+J,y:H.y-F-U+Z}),o.add({x:H.x+J,y:H.y-F})):j===x&&(Z=H.x>l.x?-Q:Q,o.add({x:l.x+Q,y:l.y-W}),o.add({x:l.x+Q,y:l.y-W-U-Z}),o.add({x:H.x+J,y:H.y+F+U-Z}),o.add({x:H.x+J,y:H.y+F})),R&&o.reverse(),V(o,S)},!0),M("extend.north2",function(P,n,l){var W=P.getSourceAgent(),s=P.getTargetAgent(),F=W.getId()>s.getId(),g=F?s:W,r=F?W:s,N=g.p(),w=r.p(),R=h(l,P,g,x),Y=h(l,P,r,x,!0),v=P.s(f),_=v?0:L(l,g)/2,y=v?0:L(l,r)/2,z=R.offset,B=Y.offset,c=P.s($)+(R.size-1)/2*P.s(t),u=S(N.y-_,w.y-y)-c+(N.x<w.x?z:-z),I=new C;return I.add({x:N.x+z,y:N.y-_}),I.add({x:N.x+z,y:u}),I.add({x:w.x+B,y:u}),I.add({x:w.x+B,y:w.y-y}),F&&I.reverse(),V(I,P)},!0),M("extend.south2",function(X,G,d){var q=X.getSourceAgent(),N=X.getTargetAgent(),A=q.getId()>N.getId(),D=A?N:q,F=A?q:N,j=D.p(),S=F.p(),k=h(d,X,D,O),s=h(d,X,F,O,!0),w=X.s(f),R=w?0:L(d,D)/2,u=w?0:L(d,F)/2,K=k.offset,i=s.offset,x=X.s($)+(k.size-1)/2*X.s(t),M=l(j.y+R,S.y+u)+x+(j.x>S.x?K:-K),Y=new C;return Y.add({x:j.x+K,y:j.y+R}),Y.add({x:j.x+K,y:M}),Y.add({x:S.x+i,y:M}),Y.add({x:S.x+i,y:S.y+u}),A&&Y.reverse(),V(Y,X)},!0),M("extend.west2",function(o,M,A){var k=o.getSourceAgent(),X=o.getTargetAgent(),H=k.getId()>X.getId(),j=H?X:k,I=H?k:X,c=j.p(),n=I.p(),p=h(A,o,j,x),g=h(A,o,I,x,!0),E=o.s(f),u=E?0:b(A,j)/2,q=E?0:b(A,I)/2,D=p.offset,w=g.offset,P=o.s($)+(p.size-1)/2*o.s(t),K=S(c.x-u,n.x-q)-P+(c.y<n.y?D:-D),Z=new C;return Z.add({x:c.x-u,y:c.y+D}),Z.add({x:K,y:c.y+D}),Z.add({x:K,y:n.y+w}),Z.add({x:n.x-q,y:n.y+w}),H&&Z.reverse(),V(Z,o)},!0),M("extend.east2",function(O,w,u){var F=O.getSourceAgent(),U=O.getTargetAgent(),M=F.getId()>U.getId(),_=M?U:F,Q=M?F:U,E=_.p(),c=Q.p(),H=h(u,O,_,x),m=h(u,O,Q,x,!0),X=O.s(f),e=X?0:b(u,_)/2,g=X?0:b(u,Q)/2,Y=H.offset,v=m.offset,W=O.s($)+(H.size-1)/2*O.s(t),i=l(E.x+e,c.x+g)+W+(E.y>c.y?Y:-Y),Z=new C;return Z.add({x:E.x+e,y:E.y+Y}),Z.add({x:i,y:E.y+Y}),Z.add({x:i,y:c.y+v}),Z.add({x:c.x+g,y:c.y+v}),M&&Z.reverse(),V(Z,O)},!0),M("v.h2",function(l,C,w){return R(l,w,j)},!0),M("h.v2",function(l,I,d){return R(l,d,W)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);