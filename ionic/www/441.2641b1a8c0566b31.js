"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[441],{441:(ke,Q,c)=>{c.r(Q),c.d(Q,{ion_modal:()=>ge});var D=c(467),h=c(4363),A=c(2885),G=c(5938),f=c(5638),ne=c(7838),z=c(4929),b=c(8438),l=c(5516),S=c(333),$=c(7555),Y=c(611),N=c(1622),u=c(3503),de=c(3351),le=c(405),X=c(8476),F=(c(3113),c(4379),c(8221),function(e){return e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT",e}(F||{}));const V={getEngine(){const e=(0,b.g)();if(null!=e&&e.isPluginAvailable("StatusBar"))return e.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const e=(0,b.g)();return!(null==e||!e.PluginHeaders)},setStyle(e){const t=this.getEngine();t&&t.setStyle(e)},getStyle:(e=(0,D.A)(function*(){const t=this.getEngine();if(!t)return F.Default;const{style:n}=yield t.getInfo();return n}),function(){return e.apply(this,arguments)})},oe=(e,t)=>{if(1===t)return 0;const n=1/(1-t);return e*n+-t*n},ce=()=>{!X.w||X.w.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:F.Dark})},re=(e=F.Default)=>{!X.w||X.w.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:e})},pe=function(){var e=(0,D.A)(function*(t,n){"function"!=typeof t.canDismiss||!(yield t.canDismiss(void 0,l.G))||(n.isRunning()?n.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))});return function(n,o){return e.apply(this,arguments)}}(),ie=e=>.00255275*2.71828**(-14.9619*e)-1.00255*2.71828**(-.0380968*e)+1,he=(e,t)=>(0,f.l)(400,e/Math.abs(1.1*t),500),fe=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=void 0===n||n<t,i=o?`calc(var(--backdrop-opacity) * ${t})`:"0",r=(0,u.c)("backdropAnimation").fromTo("opacity",0,i);return o&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,u.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*t}%)`}]),backdropAnimation:r}},ue=e=>{const{currentBreakpoint:t,backdropBreakpoint:n}=e,o=`calc(var(--backdrop-opacity) * ${oe(t,n)})`,i=[{offset:0,opacity:o},{offset:1,opacity:0}],r=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],s=(0,u.c)("backdropAnimation").keyframes(0!==n?r:i);return{wrapperAnimation:(0,u.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*t}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},me=(e,t)=>{const{presentingEl:n,currentBreakpoint:o}=t,i=(0,f.g)(e),{wrapperAnimation:r,backdropAnimation:s}=void 0!==o?fe(t):{backdropAnimation:(0,u.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,u.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,u.c)("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(n){const d=window.innerWidth<768,w="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,_=(0,f.g)(n),B=(0,u.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),v=document.body;if(d){const y=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",E=`translateY(${w?"-10px":y}) scale(0.93)`;B.afterStyles({transform:E}).beforeAddWrite(()=>v.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:E,borderRadius:"10px 10px 0 0"}]),a.addAnimation(B)}else if(a.addAnimation(s),w){const k=`translateY(-10px) scale(${w?.93:1})`;B.afterStyles({transform:k}).addElement(_.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:k}]);const p=(0,u.c)().afterStyles({transform:k}).addElement(_.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:k}]);a.addAnimation([B,p])}else r.fromTo("opacity","0","1")}else a.addAnimation(s);return a},be=(e,t,n=500)=>{const{presentingEl:o,currentBreakpoint:i}=t,r=(0,f.g)(e),{wrapperAnimation:s,backdropAnimation:a}=void 0!==i?ue(t):{backdropAnimation:(0,u.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,u.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(r.querySelector("ion-backdrop")),s.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,u.c)("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(s);if(o){const w=window.innerWidth<768,_="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,B=(0,f.g)(o),v=(0,u.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(k=>{1===k&&(o.style.setProperty("overflow",""),Array.from(y.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(E=>void 0!==E.presentingElement).length<=1&&y.style.setProperty("background-color",""))}),y=document.body;if(w){const k=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${_?"-10px":k}) scale(0.93)`;v.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(v)}else if(d.addAnimation(a),_){const p=`translateY(-10px) scale(${_?.93:1})`;v.addElement(B.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const E=(0,u.c)().addElement(B.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([v,E])}else s.fromTo("opacity","1","0")}else d.addAnimation(a);return d},Ee=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,f.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?fe(t):{backdropAnimation:(0,u.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,u.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,u.c)().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},De=(e,t)=>{const{currentBreakpoint:n}=t,o=(0,f.g)(e),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?ue(t):{backdropAnimation:(0,u.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,u.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,u.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},ge=class{constructor(e){(0,h.r)(this,e),this.didPresent=(0,h.d)(this,"ionModalDidPresent",7),this.willPresent=(0,h.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,h.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,h.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,h.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,h.d)(this,"didPresent",7),this.willPresentShorthand=(0,h.d)(this,"willPresent",7),this.willDismissShorthand=(0,h.d)(this,"willDismiss",7),this.didDismissShorthand=(0,h.d)(this,"didDismiss",7),this.ionMount=(0,h.d)(this,"ionMount",7),this.lockController=(0,ne.c)(),this.triggerController=(0,l.e)(),this.coreDelegate=(0,G.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:n}=this;"cycle"!==n||void 0!==t||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,l.B)},this.onLifecycle=t=>{const n=this.usersElement,o=Me[t.type];if(n&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:t.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}triggerChanged(){const{trigger:e,el:t,triggerController:n}=this;e&&n.addClickListener(t,e)}breakpointsChanged(e){void 0!==e&&(this.sortedBreakpoints=e.sort((t,n)=>t-n))}connectedCallback(){const{el:e}=this;(0,l.j)(e),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:e,initialBreakpoint:t,el:n,htmlAttributes:o}=this,i=this.isSheetModal=void 0!==e&&void 0!==t,r=["aria-label","role"];this.inheritedAttributes=(0,f.k)(n,r),void 0!==o&&r.forEach(s=>{o[s]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[s]:o[s]}),delete o[s])}),i&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==e&&void 0!==t&&!e.includes(t)&&(0,z.p)("Your breakpoints array must include the initialBreakpoint value."),(0,l.k)(n)}componentDidLoad(){!0===this.isOpen&&(0,f.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(e=!1){if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(e,t){var n=this;return(0,D.A)(function*(){const{canDismiss:o}=n;return"function"==typeof o?o(e,t):o})()}present(){var e=this;return(0,D.A)(function*(){const t=yield e.lockController.lock();if(e.presented)return void t();const{presentingElement:n,el:o}=e;e.currentBreakpoint=e.initialBreakpoint;const{inline:i,delegate:r}=e.getDelegate(!0);e.ionMount.emit(),e.usersElement=yield(0,G.a)(r,o,e.component,["ion-page"],e.componentProps,i),(0,f.m)(o)?yield(0,$.e)(e.usersElement):e.keepContentsMounted||(yield(0,$.w)()),(0,h.w)(()=>e.el.classList.add("show-modal"));const s=void 0!==n;s&&"ios"===(0,Y.b)(e)&&(e.statusBarStyle=yield V.getStyle(),ce()),yield(0,l.f)(e,"modalEnter",me,Ee,{presentingEl:n,currentBreakpoint:e.initialBreakpoint,backdropBreakpoint:e.backdropBreakpoint}),typeof window<"u"&&(e.keyboardOpenCallback=()=>{e.gesture&&(e.gesture.enable(!1),(0,f.r)(()=>{e.gesture&&e.gesture.enable(!0)}))},window.addEventListener(N.KEYBOARD_DID_OPEN,e.keyboardOpenCallback)),e.isSheetModal?e.initSheetGesture():s&&e.initSwipeToClose(),t()})()}initSwipeToClose(){var t,e=this;if("ios"!==(0,Y.b)(this))return;const{el:n}=this,o=this.leaveAnimation||Y.c.get("modalLeave",be),i=this.animation=o(n,{presentingEl:this.presentingElement});if(!(0,A.a)(n))return void(0,A.p)(n);const s=null!==(t=this.statusBarStyle)&&void 0!==t?t:F.Default;this.gesture=((e,t,n,o)=>{const r=e.offsetHeight;let s=!1,a=!1,d=null,w=null,B=!0,v=0;const Z=(0,le.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:l.O,direction:"y",threshold:10,canStart:g=>{const m=g.event.target;return null===m||!m.closest||(d=(0,A.f)(m),d?(w=(0,A.i)(d)?(0,f.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===w.scrollTop):null===m.closest("ion-footer"))},onStart:g=>{const{deltaY:m}=g;B=!d||!(0,A.i)(d)||d.scrollY,a=void 0!==e.canDismiss&&!0!==e.canDismiss,m>0&&d&&(0,A.d)(d),t.progressStart(!0,s?1:0)},onMove:g=>{const{deltaY:m}=g;m>0&&d&&(0,A.d)(d);const P=g.deltaY/r,I=P>=0&&a,L=I?.2:.9999,U=I?ie(P/L):P,O=(0,f.l)(1e-4,U,L);t.progressStep(O),O>=.5&&v<.5?re(n):O<.5&&v>=.5&&ce(),v=O},onEnd:g=>{const m=g.velocityY,P=g.deltaY/r,I=P>=0&&a,L=I?.2:.9999,U=I?ie(P/L):P,O=(0,f.l)(1e-4,U,L),W=!I&&(g.deltaY+1e3*m)/r>=.5;let J=W?-.001:.001;W?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),J+=(0,de.g)([0,0],[.32,.72],[0,1],[1,1],O)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),J+=(0,de.g)([0,0],[1,0],[.68,.28],[1,1],O)[0]);const ee=he(W?P*r:(1-O)*r,m);s=W,Z.enable(!1),d&&(0,A.r)(d,B),t.onFinish(()=>{W||Z.enable(!0)}).progressEnd(W?1:0,J,ee),I&&O>L/4?pe(e,t):W&&o()}});return Z})(n,i,s,()=>{this.gestureAnimationDismissing=!0,re(this.statusBarStyle),this.animation.onFinish((0,D.A)(function*(){yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:e,initialBreakpoint:t,backdropBreakpoint:n}=this;if(!e||void 0===t)return;const o=this.enterAnimation||Y.c.get("modalEnter",me),i=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:t,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:s}=((e,t,n,o,i,r,s=[],a,d,w)=>{const v={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},y=e.querySelector("ion-content"),k=n.clientHeight;let p=o,E=0,j=!1;const g=r.childAnimations.find(x=>"wrapperAnimation"===x.id),m=r.childAnimations.find(x=>"backdropAnimation"===x.id),P=s[s.length-1],I=s[0],L=()=>{e.style.setProperty("pointer-events","auto"),t.style.setProperty("pointer-events","auto"),e.classList.remove("ion-disable-focus-trap")},U=()=>{e.style.setProperty("pointer-events","none"),t.style.setProperty("pointer-events","none"),e.classList.add("ion-disable-focus-trap")};g&&m&&(g.keyframes([...v.WRAPPER_KEYFRAMES]),m.keyframes([...v.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-p),p>i?L():U()),y&&p!==P&&(y.scrollY=!1);const ee=x=>{const{breakpoint:C,canDismiss:M,breakpointOffset:R,animated:H}=x,K=M&&0===C,T=K?p:C,ye=0!==T;return p=0,g&&m&&(g.keyframes([{offset:0,transform:`translateY(${100*R}%)`},{offset:1,transform:`translateY(${100*(1-T)}%)`}]),m.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${oe(1-R,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${oe(T,i)})`}]),r.progressStep(0)),te.enable(!1),K?pe(e,r):ye||d(),y&&T===s[s.length-1]&&(y.scrollY=!0),new Promise(ae=>{r.onFinish(()=>{ye?g&&m?(0,f.r)(()=>{g.keyframes([...v.WRAPPER_KEYFRAMES]),m.keyframes([...v.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-T),p=T,w(p),p>i?L():U(),te.enable(!0),ae()}):(te.enable(!0),ae()):ae()},{oneTimeCallback:!0}).progressEnd(1,0,H?500:0)})},te=(0,le.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:x=>{const C=(0,A.f)(x.event.target);if(p=a(),1===p&&C){const M=(0,A.i)(C)?(0,f.g)(C).querySelector(".inner-scroll"):C;return!C.querySelector("ion-refresher")&&0===M.scrollTop}return!0},onStart:x=>{j=void 0!==e.canDismiss&&!0!==e.canDismiss&&0===I,x.deltaY>0&&y&&(y.scrollY=!1),(0,f.r)(()=>{e.focus()}),r.progressStart(!0,1-p)},onMove:x=>{x.deltaY>0&&y&&(y.scrollY=!1);const M=s.length>1?1-s[1]:void 0,R=1-p+x.deltaY/k,H=void 0!==M&&R>=M&&j,K=H?.95:.9999,T=H&&void 0!==M?M+ie((R-M)/(K-M)):R;E=(0,f.l)(1e-4,T,K),r.progressStep(E)},onEnd:x=>{const R=p-(x.deltaY+350*x.velocityY)/k,H=s.reduce((K,T)=>Math.abs(T-R)<Math.abs(K-R)?T:K);ee({breakpoint:H,breakpointOffset:E,canDismiss:j,animated:!0})}});return{gesture:te,moveSheetToBreakpoint:ee}})(this.el,this.backdropEl,e,t,n,i,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=r,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){var e=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,D.A)(function*(){e.currentBreakpoint=0,e.ionBreakpointDidChange.emit({breakpoint:e.currentBreakpoint}),yield e.dismiss(void 0,l.G),e.gestureAnimationDismissing=!1}))}dismiss(e,t){var n=this;return(0,D.A)(function*(){var o;if(n.gestureAnimationDismissing&&t!==l.G)return!1;const i=yield n.lockController.lock();if("handler"!==t&&!(yield n.checkCanDismiss(e,t)))return i(),!1;const{presentingElement:r}=n;void 0!==r&&"ios"===(0,Y.b)(n)&&re(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(N.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0);const a=yield(0,l.g)(n,e,t,"modalLeave",be,De,{presentingEl:r,currentBreakpoint:null!==(o=n.currentBreakpoint)&&void 0!==o?o:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});if(a){const{delegate:d}=n.getDelegate();yield(0,G.d)(d,n.usersElement),(0,h.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy()}return n.currentBreakpoint=void 0,n.animation=void 0,i(),a})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(e){var t=this;return(0,D.A)(function*(){if(!t.isSheetModal)return void(0,z.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!t.breakpoints.includes(e))return void(0,z.p)(`Attempted to set invalid breakpoint value ${e}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:i,breakpoints:r,animated:s}=t;n!==e&&o&&(t.sheetTransition=o({breakpoint:e,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===r[0],animated:s}),yield t.sheetTransition,t.sheetTransition=void 0)})()}getCurrentBreakpoint(){var e=this;return(0,D.A)(function*(){return e.currentBreakpoint})()}moveToNextBreakpoint(){var e=this;return(0,D.A)(function*(){const{breakpoints:t,currentBreakpoint:n}=e;if(!t||null==n)return!1;const o=t.filter(a=>0!==a),r=(o.indexOf(n)+1)%o.length,s=o[r];return yield e.setCurrentBreakpoint(s),!0})()}render(){const{handle:e,isSheetModal:t,presentingElement:n,htmlAttributes:o,handleBehavior:i,inheritedAttributes:r}=this,s=!1!==e&&t,a=(0,Y.b)(this),d=void 0!==n&&"ios"===a,w="cycle"===i;return(0,h.h)(h.H,Object.assign({key:"e4ad28e6e794560d85252aebdca7f4752e4e7e99","no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!d&&!t,"modal-card":d,"modal-sheet":t,"overlay-hidden":!0},(0,S.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,h.h)("ion-backdrop",{key:"6efd67361a062d15488390f9f0d6c0841e541893",ref:_=>this.backdropEl=_,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===a&&(0,h.h)("div",{key:"557b1c6b297df75acc80d1350b971e65ace6c343",class:"modal-shadow"}),(0,h.h)("div",Object.assign({key:"67f9b27b662303fbaadaee2ae89972caadfd9994",role:"dialog"},r,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:_=>this.wrapperEl=_}),s&&(0,h.h)("button",{key:"8f1eecc451b52467a8c3cfe500335cf6254bbfbc",class:"modal-handle",tabIndex:w?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:w?this.onHandleClick:void 0,part:"handle"}),(0,h.h)("slot",{key:"cdc923404f01a14b9071a434c68547da3b22c71e"})))}get el(){return(0,h.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Me={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var e;ge.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},333:(ke,Q,c)=>{c.d(Q,{c:()=>A,g:()=>f,h:()=>h,o:()=>z});var D=c(467);const h=(b,l)=>null!==l.closest(b),A=(b,l)=>"string"==typeof b&&b.length>0?Object.assign({"ion-color":!0,[`ion-color-${b}`]:!0},l):l,f=b=>{const l={};return(b=>void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(S=>null!=S).map(S=>S.trim()).filter(S=>""!==S):[])(b).forEach(S=>l[S]=!0),l},ne=/^[a-z][a-z0-9+\-.]*:/,z=function(){var b=(0,D.A)(function*(l,S,$,Y){if(null!=l&&"#"!==l[0]&&!ne.test(l)){const N=document.querySelector("ion-router");if(N)return null!=S&&S.preventDefault(),N.push(l,$,Y)}return!1});return function(S,$,Y,N){return b.apply(this,arguments)}}()}}]);