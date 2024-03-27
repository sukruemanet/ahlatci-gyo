/*!
 * ScrollSmoother 3.12.1
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return"undefined"!=typeof window}function t(){return I||s()&&(I=window.gsap)&&I.registerPlugin&&I}function v(e){return V.maxScroll(e||U)}var I,L,U,G,j,K,q,D,V,J,Y,Q,W,X,Z,r=(ScrollSmoother.register=function register(e){return L||(I=e||t(),s()&&window.document&&(U=window,G=document,j=G.documentElement,K=G.body),I&&(q=I.utils.toArray,D=I.utils.clamp,Y=I.parseEase("expo"),X=I.core.context||function(){},V=I.core.globals().ScrollTrigger,I.core.globals("ScrollSmoother",ScrollSmoother),K&&V&&(Z=I.delayedCall(.2,function(){return V.isRefreshing||J&&J.refresh()}).pause(),Q=V.core._getVelocityProp,W=V.core._inputObserver,ScrollSmoother.refresh=V.refresh,L=1))),L},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(t){var o=this;L||ScrollSmoother.register(I)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},J&&J.kill(),X(J=this);function Aa(){return F.update(-H)}function Ca(){return n.style.overflow="visible"}function Ea(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),d=!1,e.animation.progress(e.progress,!0)}function Fa(e,t){(e!==H&&!f||t)&&(E&&(e=Math.round(e)),k&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),M=e-H,H=e,V.isUpdating||ScrollSmoother.isRefreshing||V.update())}function Ga(e){return arguments.length?(e<0&&(e=0),O.y=-e,d=!0,f?H=-e:Fa(-e),V.isRefreshing?i.update():P(e/A),this):-H}function Ja(e){S.scrollTop=0,e.target.contains&&e.target.contains(S)||T&&!1===T(o,e)||(V.isInViewport(e.target)||e.target===g||o.scrollTo(e.target,!1,"center center"),g=e.target)}function Ka(t,e){if(t<e.start)return t;var r=isNaN(e.ratio)?1:e.ratio,n=e.end-e.start,o=t-e.start,i=e.offset||0,s=e.pins||[],a=s.offset||0,l=e._startClamp&&e.start<=0||e.pins&&e.pins.offset?0:e._endClamp&&e.end===v()?1:.5;return s.forEach(function(e){n-=e.distance,e.nativeStart<=t&&(o-=e.distance)}),a&&(o*=(n-a/r)/n),t+(o-i*l)/r-o}function Ma(t,r){b.forEach(function(e){return function adjustEffectRelatedTriggers(e,t,r){r||(e.pins.length=e.pins.offset=0);var n,o,i,s,a,l,c,f,u=e.pins,h=e.markers;for(c=0;c<t.length;c++)if(f=t[c],e.trigger&&f.trigger&&e!==f&&(f.trigger===e.trigger||f.pinnedContainer===e.trigger||e.trigger.contains(f.trigger))&&(a=f._startNative||f._startClamp||f.start,l=f._endNative||f._endClamp||f.end,i=Ka(a,e),s=f.pin&&0<l?i+(l-a):Ka(l,e),f.setPositions(i,s,!0,(f._startClamp?Math.max(0,i):i)-a),f.markerStart&&h.push(I.quickSetter([f.markerStart,f.markerEnd],"y","px")),f.pin&&0<f.end&&!r)){if(n=f.end-f.start,o=e._startClamp&&f.start<0){if(0<e.start)return e.setPositions(0,e.end+(e._startNative-e.start),!0),void adjustEffectRelatedTriggers(e,t);n+=f.start,u.offset=-f.start}u.push({start:f.start,nativeStart:a,end:f.end,distance:n,trig:f}),e.setPositions(e.start,e.end+(o?-f.start:n),!0)}}(e,t,r)})}function Na(){Ca(),requestAnimationFrame(Ca),b&&(V.getAll().forEach(function(e){e._startNative=e.start,e._endNative=e.end}),b.forEach(function(e){var t=e._startClamp||e.start,r=e.autoSpeed?Math.min(v(),e.end):t+Math.abs((e.end-t)/e.ratio),n=r-e.end;if((r-=n/2)<(t-=n/2)){var o=t;t=r,r=o}e._startClamp&&t<0?(n=(r=e.ratio<0?v():e.end/e.ratio)-e.end,t=0):(e.ratio<0||e._endClamp&&r>=v())&&(n=((r=v())-(t=e.ratio<0||1<e.ratio?0:r-(r-e.start)/e.ratio))*e.ratio-(e.end-e.start)),e.offset=n||1e-4,e.pins.length=e.pins.offset=0,e.setPositions(t,r,!0)}),Ma(V.sort())),F.reset()}function Oa(){return V.addEventListener("refresh",Na)}function Pa(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function Qa(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),Pa}function Ra(r,n,o,i){return function(){var e="function"==typeof n?n(o,i):n;e||0===e||(e=i.getAttribute("data-"+x+r)||("speed"===r?1:0)),i.setAttribute("data-"+x+r,e);var t="clamp("===(e+"").substr(0,6);return{clamp:t,value:t?e.substr(6,e.length-7):e}}}function Sa(r,e,t,n,o){function bc(){e=u(),t=parseFloat(h().value),i=parseFloat(e.value)||1,a="auto"===e.value,c=a||s&&s._startClamp&&s.start<=0||p.offset?0:s&&s._endClamp&&s.end===v()?1:.5,l&&l.kill(),l=t&&I.to(r,{ease:Y,overwrite:!1,y:"+=0",duration:t}),s&&(s.ratio=i,s.autoSpeed=a)}function cc(){g.y=d+"px",g.renderTransform(1),bc()}function fc(e){if(a){cc();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||j,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),f=-c*t;return 0<c&&(n=.5==(r=s.height/(U.innerHeight+s.height))?2*s.height:2*Math.min(s.height,Math.abs(-c*r/(2*r-1)))*(t||1),f+=t?-n*t:-n/2,c+=n),{change:c,offset:f}}(r,D(0,1,-e.start/(e.end-e.start)));y=t.change,f=t.offset}else f=p.offset||0,y=(e.end-e.start-f)*(1-i);p.forEach(function(e){return y-=e.distance*(1-i)}),e.offset=y||.001,e.vars.onUpdate(e),l&&l.progress(1)}o=("function"==typeof o?o(n,r):o)||0;var i,s,a,l,c,f,u=Ra("speed",e,n,r),h=Ra("lag",t,n,r),d=I.getProperty(r,"y"),g=r._gsap,p=[],m=[],y=0;return bc(),(1!==i||a||l)&&(fc(s=V.create({trigger:a?r.parentNode:r,start:function start(){return e.clamp?"clamp(top bottom+="+o+")":"top bottom+="+o},end:function end(){return e.value<0?"max":e.clamp?"clamp(bottom top-="+o+")":"bottom top-="+o},scroller:S,scrub:!0,refreshPriority:-999,onRefreshInit:cc,onRefresh:fc,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),cc()},onUpdate:function onUpdate(e){var t,r,n,o=d+y*(e.progress-c),i=p.length,s=0;if(e.offset){if(i){for(r=-H,n=e.end;i--;){if((t=p[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-M,!0),N&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=d+s+y*((I.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}m.length&&!a&&m.forEach(function(e){return e(o-s)}),o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+f),l?(l.resetTo("y",o,-M,!0),N&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),I.core.getCache(s.trigger).stRevert=Qa,s.startY=d,s.pins=p,s.markers=m,s.ratio=i,s.autoSpeed=a,r.style.willChange="transform"),s}var n,S,e,i,b,s,a,l,c,f,r,u,h,d,g,p=t.smoothTouch,m=t.onUpdate,w=t.onStop,_=t.smooth,T=t.onFocusIn,C=t.normalizeScroll,E=t.wholePixels,R=this,x=t.effectsPrefix||"",P=V.getScrollFunc(U),k=1===V.isTouch?!0===p?.8:parseFloat(p)||0:0===_||!1===_?0:parseFloat(_)||.8,A=k&&+t.speed||1,H=0,M=0,N=1,F=Q(0),O={y:0},z="undefined"!=typeof ResizeObserver&&!1!==t.autoResize&&new ResizeObserver(function(){if(!V.isRefreshing){var e=v(S)*A;e<-H&&Ga(e),Z.restart(!0)}});function refreshHeight(){return e=n.clientHeight,n.style.overflow="visible",K.style.height=U.innerHeight+(e-U.innerHeight)/A+"px",e-U.innerHeight}Oa(),V.addEventListener("killAll",Oa),I.delayedCall(.5,function(){return N=0}),this.scrollTop=Ga,this.scrollTo=function(e,t,r){var n=I.utils.clamp(0,v(),isNaN(e)?o.offset(e,r):+e);t?f?I.to(o,{duration:k,scrollTop:n,overwrite:"auto",ease:Y}):P(n):Ga(n)},this.offset=function(e,t){var r,n=(e=q(e)[0]).style.cssText,o=V.create({trigger:e,start:t||"top top"});return b&&(N?V.refresh():Ma([o],!0)),r=o.start/A,o.kill(!1),e.style.cssText=n,I.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=q(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||K.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",z&&z.observe(n),I.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||I.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(S=q(e||"#smooth-wrapper")[0]||function _wrap(e){var t=G.querySelector(".ScrollSmoother-wrapper");return t||((t=G.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=S.getAttribute("style")||"",refreshHeight(),I.set(S,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):S},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=q(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&b[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=Sa(e[r],o,i,r,s))&&a.push(n);return b.push.apply(b,a),a},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=q(e).map(function(t){return V.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return Fa(e||0===e?e:H)},this.getVelocity=function(){return F.getVelocity(-H)},V.scrollerProxy(S,{scrollTop:Ga,scrollHeight:function scrollHeight(){return refreshHeight()&&K.scrollHeight},fixedMarkers:!1!==t.fixedMarkers&&!!k,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:U.innerWidth,height:U.innerHeight}}}),V.defaults({scroller:S});var B=V.getAll().filter(function(e){return e.scroller===U||e.scroller===S});B.forEach(function(e){return e.revert(!0,!0)}),i=V.create({animation:I.fromTo(O,{y:0},{y:function y(){return-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(this._dur){var e=d;e&&(Ea(i),O.y=H),Fa(O.y,e),Aa(),m&&!f&&m(R)}}}),onRefreshInit:function onRefreshInit(e){if(!ScrollSmoother.isRefreshing){if(ScrollSmoother.isRefreshing=!0,b){var t=V.getAll().filter(function(e){return!!e.pin});b.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();h=r&&r._end>r._dp._time,u=H,O.y=0,k&&(1===V.isTouch&&(S.style.position="absolute"),S.scrollTop=0,1===V.isTouch&&(S.style.position="fixed"))}},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()/A),h||Ea(e),O.y=-P()*A,Fa(O.y),N||e.animation.progress(I.utils.clamp(0,1,u/A/-e.end)),h&&(e.progress-=.001,e.update()),ScrollSmoother.isRefreshing=!1},id:"ScrollSmoother",scroller:U,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function end(){return refreshHeight()/A},onScrubComplete:function onScrubComplete(){F.reset(),w&&w(o)},scrub:k||!0}),this.smooth=function(e){return arguments.length&&(A=(k=e||0)&&+t.speed||1,i.scrubDuration(e)),i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=t.ease||Y),this.scrollTrigger=i,t.effects&&this.effects(!0===t.effects?"[data-"+x+"speed], [data-"+x+"lag]":t.effects,{effectsPadding:t.effectsPadding}),t.sections&&this.sections(!0===t.sections?"[data-section]":t.sections),B.forEach(function(e){e.vars.scroller=S,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!f!==e&&(e?(i.getTween()&&i.getTween().pause(),P(-H/A),F.reset(),(r=V.normalizeScroll())&&r.disable(),(f=V.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Ga(-H)}})).nested=W(j,"wheel,touch,scroll",!0,!1!==t)):(f.nested.kill(),f.kill(),f=0,r&&r.enable(),i.progress=(-H/A-i.start)/(i.end-i.start),Ea(i))),this):!!f},this.kill=this.revert=function(){o.paused(!1),Ea(i),i.kill();for(var e=(b||[]).concat(s||[]),t=e.length;t--;)e[t].kill();V.scrollerProxy(S),V.removeEventListener("killAll",Oa),V.removeEventListener("refresh",Na),S.style.cssText=l,n.style.cssText=c;var r=V.defaults({});r&&r.scroller===S&&V.defaults({scroller:U}),o.normalizer&&V.normalizeScroll(!1),clearInterval(a),J=null,z&&z.disconnect(),K.style.removeProperty("height"),U.removeEventListener("focusin",Ja)},this.refresh=function(e,t){return i.refresh(e,t)},C&&(this.normalizer=V.normalizeScroll(!0===C?{debounce:!0,content:!k&&n}:C)),V.config(t),"overscrollBehavior"in U.getComputedStyle(K)&&I.set([K,j],{overscrollBehavior:"none"}),"scrollBehavior"in U.getComputedStyle(K)&&I.set([K,j],{scrollBehavior:"auto"}),U.addEventListener("focusin",Ja),a=setInterval(Aa,250),"loading"===G.readyState||requestAnimationFrame(function(){return V.refresh()})}r.version="3.12.1",r.create=function(e){return J&&e&&J.content()===q(e.content)[0]?J:new r(e)},r.get=function(){return J},t()&&I.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

