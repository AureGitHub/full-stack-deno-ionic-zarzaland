"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3393],{3393:(H,C,c)=>{c.r(C),c.d(C,{ion_toast:()=>j});var y=c(467),s=c(7551),T=c(1346),b=c(2994),M=c(8852),v=c(763),h=c(4111),u=c(5051),l=c(9173),d=c(6272),k=c(9654),D=c(7857);c(4958),c(752);const O=(t,e)=>Math.floor(t/2-e/2),K=(t,e)=>{const n=(0,d.c)(),o=(0,d.c)(),{position:i,top:r,bottom:p}=e,a=(0,b.g)(t).querySelector(".toast-wrapper");switch(o.addElement(a),i){case"top":o.fromTo("transform","translateY(-100%)",`translateY(${r})`);break;case"middle":const g=O(t.clientHeight,a.clientHeight);a.style.top=`${g}px`,o.fromTo("opacity",.01,1);break;default:o.fromTo("transform","translateY(100%)",`translateY(${p})`)}return n.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(o)},F=(t,e)=>{const n=(0,d.c)(),o=(0,d.c)(),{position:i,top:r,bottom:p}=e,a=(0,b.g)(t).querySelector(".toast-wrapper");switch(o.addElement(a),i){case"top":o.fromTo("transform",`translateY(${r})`,"translateY(-100%)");break;case"middle":o.fromTo("opacity",.99,0);break;default:o.fromTo("transform",`translateY(${p})`,"translateY(100%)")}return n.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},N=(t,e)=>{const n=(0,d.c)(),o=(0,d.c)(),{position:i,top:r,bottom:p}=e,a=(0,b.g)(t).querySelector(".toast-wrapper");switch(o.addElement(a),i){case"top":a.style.setProperty("transform",`translateY(${r})`),o.fromTo("opacity",.01,1);break;case"middle":const g=O(t.clientHeight,a.clientHeight);a.style.top=`${g}px`,o.fromTo("opacity",.01,1);break;default:a.style.setProperty("transform",`translateY(${p})`),o.fromTo("opacity",.01,1)}return n.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(o)},V=t=>{const e=(0,d.c)(),n=(0,d.c)(),i=(0,b.g)(t).querySelector(".toast-wrapper");return n.addElement(i).fromTo("opacity",.99,0),e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},j=class{constructor(t){(0,s.r)(this,t),this.didPresent=(0,s.d)(this,"ionToastDidPresent",7),this.willPresent=(0,s.d)(this,"ionToastWillPresent",7),this.willDismiss=(0,s.d)(this,"ionToastWillDismiss",7),this.didDismiss=(0,s.d)(this,"ionToastDidDismiss",7),this.didPresentShorthand=(0,s.d)(this,"didPresent",7),this.willPresentShorthand=(0,s.d)(this,"willPresent",7),this.willDismissShorthand=(0,s.d)(this,"willDismiss",7),this.didDismissShorthand=(0,s.d)(this,"didDismiss",7),this.delegateController=(0,h.d)(this),this.lockController=(0,M.c)(),this.triggerController=(0,h.e)(),this.customHTMLEnabled=l.c.get("innerHTMLTemplatesEnabled",T.E),this.presented=!1,this.dispatchCancelHandler=e=>{if((0,h.i)(e.detail.role)){const o=this.getButtons().find(i=>"cancel"===i.role);this.callButtonHandler(o)}},this.createSwipeGesture=e=>{(this.gesture=((t,e,n)=>{const o=(0,b.g)(t).querySelector(".toast-wrapper"),i=t.clientHeight,r=o.getBoundingClientRect();let p=0;const a="middle"===t.position?.5:0,g="top"===t.position?-1:1,x=O(i,r.height),$=[{offset:0,transform:`translateY(-${x+r.height}px)`},{offset:.5,transform:"translateY(0px)"},{offset:1,transform:`translateY(${x+r.height}px)`}],m=(0,d.c)("toast-swipe-to-dismiss-animation").addElement(o).duration(100);switch(t.position){case"middle":p=i+r.height,m.keyframes($),m.progressStart(!0,.5);break;case"top":p=r.bottom,m.keyframes([{offset:0,transform:`translateY(${e.top})`},{offset:1,transform:"translateY(-100%)"}]),m.progressStart(!0,0);break;default:p=i-r.top,m.keyframes([{offset:0,transform:`translateY(${e.bottom})`},{offset:1,transform:"translateY(100%)"}]),m.progressStart(!0,0)}const Y=w=>w*g/p,S=(0,D.createGesture)({el:o,gestureName:"toast-swipe-to-dismiss",gesturePriority:h.O,direction:"y",onMove:w=>{const A=a+Y(w.deltaY);m.progressStep(A)},onEnd:w=>{const A=w.velocityY,I=(w.deltaY+1e3*A)/p*g;S.enable(!1);let _=!0,B=1,E=0,L=0;if("middle"===t.position){_=I>=.25||I<=-.25,B=1,E=0;const R=o.getBoundingClientRect(),W=R.top-x,z=(x+R.height)*(w.deltaY<=0?-1:1);m.keyframes([{offset:0,transform:`translateY(${W}px)`},{offset:1,transform:`translateY(${_?`${z}px`:"0px"})`}]),L=z-W}else _=I>=.5,B=_?1:0,E=Y(w.deltaY),L=(_?1-E:E)*p;const ot=Math.min(Math.abs(L)/Math.abs(A),200);m.onFinish(()=>{_?(n(),m.destroy()):("middle"===t.position?m.keyframes($).progressStart(!0,.5):m.progressStart(!0,0),S.enable(!0))},{oneTimeCallback:!0}).progressEnd(B,E,ot)}});return S})(this.el,e,()=>{this.dismiss(void 0,h.G)})).enable(!0)},this.destroySwipeGesture=()=>{const{gesture:e}=this;void 0!==e&&(e.destroy(),this.gesture=void 0)},this.prefersSwipeGesture=()=>{const{swipeGesture:e}=this;return"vertical"===e},this.revealContentToScreenReader=!1,this.overlayIndex=void 0,this.delegate=void 0,this.hasController=!1,this.color=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.cssClass=void 0,this.duration=l.c.getNumber("toastDuration",0),this.header=void 0,this.layout="baseline",this.message=void 0,this.keyboardClose=!1,this.position="bottom",this.positionAnchor=void 0,this.buttons=void 0,this.translucent=!1,this.animated=!0,this.icon=void 0,this.htmlAttributes=void 0,this.swipeGesture=void 0,this.isOpen=!1,this.trigger=void 0}swipeGestureChanged(){this.destroySwipeGesture(),this.presented&&this.prefersSwipeGesture()&&this.createSwipeGesture(this.lastPresentedPosition)}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:n}=this;t&&n.addClickListener(e,t)}connectedCallback(){(0,h.j)(this.el),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){var t;null!==(t=this.htmlAttributes)&&void 0!==t&&t.id||(0,h.k)(this.el)}componentDidLoad(){!0===this.isOpen&&(0,b.r)(()=>this.present()),this.triggerChanged()}present(){var t=this;return(0,y.A)(function*(){const e=yield t.lockController.lock();yield t.delegateController.attachViewToDom();const{el:n,position:o}=t,r=function G(t,e,n,o){let i;if(i="md"===n?"top"===t?8:-8:"top"===t?10:-10,e&&k.w){!function U(t,e){null===t.offsetParent&&(0,v.p)("The positionAnchor element for ion-toast was found in the DOM, but appears to be hidden. This may lead to unexpected positioning of the toast.",e)}(e,o);const r=e.getBoundingClientRect();return"top"===t?i+=r.bottom:"bottom"===t&&(i-=k.w.innerHeight-r.top),{top:`${i}px`,bottom:`${i}px`}}return{top:`calc(${i}px + var(--ion-safe-area-top, 0px))`,bottom:`calc(${i}px - var(--ion-safe-area-bottom, 0px))`}}(o,t.getAnchorElement(),(0,l.b)(t),n);t.lastPresentedPosition=r,yield(0,h.f)(t,"toastEnter",K,N,{position:o,top:r.top,bottom:r.bottom}),t.revealContentToScreenReader=!0,t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration)),t.prefersSwipeGesture()&&t.createSwipeGesture(r),e()})()}dismiss(t,e){var n=this;return(0,y.A)(function*(){var o,i;const r=yield n.lockController.lock(),{durationTimeout:p,position:f,lastPresentedPosition:a}=n;p&&clearTimeout(p);const g=yield(0,h.g)(n,t,e,"toastLeave",F,V,{position:f,top:null!==(o=null==a?void 0:a.top)&&void 0!==o?o:"",bottom:null!==(i=null==a?void 0:a.bottom)&&void 0!==i?i:""});return g&&(n.delegateController.removeViewFromDom(),n.revealContentToScreenReader=!1),n.lastPresentedPosition=void 0,n.destroySwipeGesture(),r(),g})()}onDidDismiss(){return(0,h.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,h.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(e=>"string"==typeof e?{text:e}:e):[]}getAnchorElement(){const{position:t,positionAnchor:e,el:n}=this;if(void 0!==e){if("middle"===t&&void 0!==e)return void(0,v.p)('The positionAnchor property is ignored when using position="middle".',this.el);if("string"==typeof e){const o=document.getElementById(e);return null===o?void(0,v.p)(`An anchor element with an ID of "${e}" was not found in the DOM.`,n):o}if(e instanceof HTMLElement)return e;(0,v.p)("Invalid positionAnchor value:",e,n)}}buttonClick(t){var e=this;return(0,y.A)(function*(){const n=t.role;return(0,h.i)(n)||(yield e.callButtonHandler(t))?e.dismiss(void 0,n):Promise.resolve()})()}callButtonHandler(t){return(0,y.A)(function*(){if(null!=t&&t.handler)try{if(!1===(yield(0,h.s)(t.handler)))return!1}catch(e){console.error(e)}return!0})()}renderButtons(t,e){if(0===t.length)return;const n=(0,l.b)(this);return(0,s.h)("div",{class:{"toast-button-group":!0,[`toast-button-group-${e}`]:!0}},t.map(i=>(0,s.h)("button",Object.assign({},i.htmlAttributes,{type:"button",class:Z(i),tabIndex:0,onClick:()=>this.buttonClick(i),part:q(i)}),(0,s.h)("div",{class:"toast-button-inner"},i.icon&&(0,s.h)("ion-icon",{"aria-hidden":"true",icon:i.icon,slot:void 0===i.text?"icon-only":void 0,class:"toast-button-icon"}),i.text),"md"===n&&(0,s.h)("ion-ripple-effect",{type:void 0!==i.icon&&void 0===i.text?"unbounded":"bounded"}))))}renderToastMessage(t,e=null){const{customHTMLEnabled:n,message:o}=this;return n?(0,s.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:(0,T.a)(o)}):(0,s.h)("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},o)}renderHeader(t,e=null){return(0,s.h)("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)}render(){const{layout:t,el:e,revealContentToScreenReader:n,header:o,message:i}=this,r=this.getButtons(),p=r.filter(x=>"start"===x.side),f=r.filter(x=>"start"!==x.side),a=(0,l.b)(this),g={"toast-wrapper":!0,[`toast-${this.position}`]:!0,[`toast-layout-${t}`]:!0};return"stacked"===t&&p.length>0&&f.length>0&&(0,v.p)("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",e),(0,s.h)(s.f,Object.assign({key:"c05655ff06af8d0e48c2a85396b07ad942fa81b4",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,u.c)(this.color,Object.assign(Object.assign({[a]:!0},(0,u.g)(this.cssClass)),{"overlay-hidden":!0,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,s.h)("div",{key:"9393ead4de1bf28529661d6f64049d34e18d725c",class:g},(0,s.h)("div",{key:"3e9dd73c17c337849c3f26e8d0f395b3e5ee20a7",class:"toast-container",part:"container"},this.renderButtons(p,"start"),void 0!==this.icon&&(0,s.h)("ion-icon",{key:"5d15b18364301ad55e44e9f601014ac33181590b",class:"toast-icon",part:"icon",icon:this.icon,lazy:!1,"aria-hidden":"true"}),(0,s.h)("div",{key:"f6dd164502637a882c5caf18445d8509b85ad6f9",class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!n&&void 0!==o&&this.renderHeader("oldHeader","true"),!n&&void 0!==i&&this.renderToastMessage("oldMessage","true"),n&&void 0!==o&&this.renderHeader("header"),n&&void 0!==i&&this.renderToastMessage("header")),this.renderButtons(f,"end"))))}get el(){return(0,s.i)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Z=t=>({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0}),q=t=>(0,h.i)(t.role)?"button cancel":"button";j.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, var(--ion-background-color-step-50, #f2f2f2));--border-radius:14px;--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-850, var(--ion-text-color-step-150, #262626));--max-width:700px;--max-height:478px;--start:10px;--end:10px;font-size:clamp(14px, 0.875rem, 43.4px)}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-middle{opacity:0.01}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;min-height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:clamp(17px, 1.0625rem, 21.998px);font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host{inset-inline-start:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-content{min-width:0}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, var(--ion-background-color-step-800, #333333));--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #0054e9);--color:var(--ion-color-step-50, var(--ion-text-color-step-950, #f2f2f2));--max-width:700px;--start:8px;--end:8px;font-size:0.875rem}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:1.25rem}.toast-message{line-height:1.25rem}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:0.875rem;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, var(--ion-text-color-step-900, #e6e6e6))}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}},5051:(H,C,c)=>{c.d(C,{c:()=>T,g:()=>M,h:()=>s,o:()=>h});var y=c(467);const s=(u,l)=>null!==l.closest(u),T=(u,l)=>"string"==typeof u&&u.length>0?Object.assign({"ion-color":!0,[`ion-color-${u}`]:!0},l):l,M=u=>{const l={};return(u=>void 0!==u?(Array.isArray(u)?u:u.split(" ")).filter(d=>null!=d).map(d=>d.trim()).filter(d=>""!==d):[])(u).forEach(d=>l[d]=!0),l},v=/^[a-z][a-z0-9+\-.]*:/,h=function(){var u=(0,y.A)(function*(l,d,k,D){if(null!=l&&"#"!==l[0]&&!v.test(l)){const P=document.querySelector("ion-router");if(P)return null!=d&&d.preventDefault(),P.push(l,k,D)}return!1});return function(d,k,D,P){return u.apply(this,arguments)}}()}}]);