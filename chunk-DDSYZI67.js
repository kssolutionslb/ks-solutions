import{a as Ft}from"./chunk-JZZCR5UN.js";import"./chunk-RVLBYVA2.js";import{a as Dt}from"./chunk-ETZPX7CR.js";import{a as re}from"./chunk-UZYDSN7X.js";import{a as H}from"./chunk-RN7YLSYN.js";import{a as Mt}from"./chunk-S2CRZU6B.js";import{a as kt}from"./chunk-L3JRBETB.js";import{a as ae}from"./chunk-HMNUYURD.js";import{a as L}from"./chunk-7ZANBAUH.js";import{$ as vt,N as _t,X as ie,Z as ft,_ as gt,a as V,ba as wt,ca as oe,da as bt,e as rt,ga as Ct,i as at,ia as xt,j as st,ja as T,k as ne,l as ct,la as W,m as ge,n as dt,o as lt,oa as yt,p as pt,ra as St,s as mt,t as ve,v as ht}from"./chunk-I7SMIBGI.js";import{c as ut,d as we,g as be,h as Ce,j as xe}from"./chunk-CARY4E7O.js";import{n as it,o as ot}from"./chunk-SWSILSZJ.js";import{$ as D,$b as v,$c as Ye,Ab as Le,Cb as ue,Dc as $e,E as Be,Ea as me,Ec as ee,Fc as te,G as Te,Gb as He,H as I,Ha as F,Hb as l,Ia as $,Ib as Qe,Jb as B,Kb as Ge,L as Pe,Lb as Ue,Ma as Y,N as Ie,Na as je,Nb as h,O as de,Ob as O,Pc as q,Qb as E,Rb as N,Sa as Ae,Sb as s,Tb as c,Ub as p,Yb as k,Z as le,_b as Ze,ac as qe,ad as Je,bc as d,cc as J,cd as Xe,da as Oe,dc as A,ea as Ee,eb as j,ec as he,fa as Ne,fb as ze,fc as _e,gc as G,ha as pe,hb as a,hc as U,hd as et,ib as m,id as tt,ka as g,lc as X,ld as nt,mc as z,n as P,oa as b,oc as Ke,pa as Re,sb as Ve,uc as Z,v as Fe,vb as We,vc as C,wc as x,xc as w,y as ce,ya as y,yc as M,za as S,zb as _,zc as fe}from"./chunk-ZZEMHH24.js";var Bt=["*"],Wt=["content"],Lt=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ht=["mat-drawer","mat-drawer-content","*"];function Qt(t,o){if(t&1){let e=k();s(0,"div",1),v("click",function(){y(e);let i=d();return S(i._onBackdropClicked())}),c()}if(t&2){let e=d();B("mat-drawer-shown",e._isShowingBackdrop())}}function Gt(t,o){t&1&&(s(0,"mat-drawer-content"),A(1,2),c())}var Ut={transformDrawer:ut("transform",[Ce("open, open-instant",be({transform:"none",visibility:"visible"})),Ce("void",be({"box-shadow":"none",visibility:"hidden"})),xe("void => open-instant",we("0ms")),xe("void <=> open, open-instant => void",we("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var Zt=new pe("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:qt}),Tt=new pe("MAT_DRAWER_CONTAINER");function qt(){return!1}var K=(()=>{class t extends ne{constructor(e,n,i,r,u){super(i,r,u),this._changeDetectorRef=e,this._container=n}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}static{this.\u0275fac=function(n){return new(n||t)(m(q),m(Oe(()=>Se)),m(Y),m(st),m($))}}static{this.\u0275cmp=b({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:4,hostBindings:function(n,i){n&2&&Qe("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px")},standalone:!0,features:[Z([{provide:ne,useExisting:t}]),We,C],ngContentSelectors:Bt,decls:1,vars:0,template:function(n,i){n&1&&(J(),A(0))},encapsulation:2,changeDetection:0})}}return t})(),ye=(()=>{class t{get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=V(e)}get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=V(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle(V(e))}constructor(e,n,i,r,u,Q,se,zt){this._elementRef=e,this._focusTrapFactory=n,this._focusMonitor=i,this._platform=r,this._ngZone=u,this._interactivityChecker=Q,this._doc=se,this._container=zt,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new P,this._animationEnd=new P,this._animationState="void",this.openedChange=new F(!0),this._openedStream=this.openedChange.pipe(I(f=>f),ce(()=>{})),this.openedStart=this._animationStarted.pipe(I(f=>f.fromState!==f.toState&&f.toState.indexOf("open")===0),de(void 0)),this._closedStream=this.openedChange.pipe(I(f=>!f),ce(()=>{})),this.closedStart=this._animationStarted.pipe(I(f=>f.fromState!==f.toState&&f.toState==="void"),de(void 0)),this._destroyed=new P,this.onPositionChanged=new F,this._modeChanged=new P,this._injector=g(me),this._changeDetectorRef=g(q),this.openedChange.pipe(D(this._destroyed)).subscribe(f=>{f?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{Be(this._elementRef.nativeElement,"keydown").pipe(I(f=>f.keyCode===27&&!this.disableClose&&!dt(f)),D(this._destroyed)).subscribe(f=>this._ngZone.run(()=>{this.close(),f.stopPropagation(),f.preventDefault()}))}),this._animationEnd.subscribe(f=>{let{fromState:Me,toState:De}=f;(De.indexOf("open")===0&&Me==="void"||De==="void"&&Me.indexOf("open")===0)&&this.openedChange.emit(this._opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(n)}_focusByCssSelector(e,n){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":ue(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,n,i){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",n&&this._restoreFocus(i)),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(r=>{this.openedChange.pipe(Ie(1)).subscribe(u=>r(u?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,i=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,n)),i.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}static{this.\u0275fac=function(n){return new(n||t)(m(Y),m(pt),m(mt),m(rt),m($),m(lt),m(Ye,8),m(Tt,8))}}static{this.\u0275cmp=b({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,i){if(n&1&&_e(Wt,5),n&2){let r;G(r=U())&&(i._content=r.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(n,i){n&1&&qe("@transform.start",function(u){return i._animationStarted.next(u)})("@transform.done",function(u){return i._animationEnd.next(u)}),n&2&&(Ze("@transform",i._animationState),He("align",null),B("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[C],ngContentSelectors:Bt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,i){n&1&&(J(),s(0,"div",1,0),A(2),c())},dependencies:[ne],encapsulation:2,data:{animation:[Ut.transformDrawer]},changeDetection:0})}}return t})(),Se=(()=>{class t{get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=V(e)}get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:V(e)}get scrollable(){return this._userContent||this._content}constructor(e,n,i,r,u,Q=!1,se){this._dir=e,this._element=n,this._ngZone=i,this._changeDetectorRef=r,this._animationMode=se,this._drawers=new je,this.backdropClick=new F,this._destroyed=new P,this._doCheckSubject=new P,this._contentMargins={left:null,right:null},this._contentMarginChanges=new P,this._injector=g(me),e&&e.change.pipe(D(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),u.change().pipe(D(this._destroyed)).subscribe(()=>this.updateContentMargins()),this._autosize=Q}ngAfterContentInit(){this._allDrawers.changes.pipe(le(this._allDrawers),D(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(le(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Pe(10),D(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();e+=i,n-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();n+=i,e-=i}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(I(n=>n.fromState!==n.toState),D(this._drawers.changes)).subscribe(n=>{n.toState!=="open-instant"&&this._animationMode!=="NoopAnimations"&&this._element.nativeElement.classList.add("mat-drawer-transition"),this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(D(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e&&e.onPositionChanged.pipe(D(this._drawers.changes)).subscribe(()=>{ue(()=>{this._validateDrawers()},{injector:this._injector,phase:Le.Read})})}_watchDrawerMode(e){e&&e._modeChanged.pipe(D(Te(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,i="mat-drawer-container-has-open";e?n.add(i):n.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static{this.\u0275fac=function(n){return new(n||t)(m(at,8),m(Y),m($),m(q),m(ct),m(Zt),m(Ae,8))}}static{this.\u0275cmp=b({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,i,r){if(n&1&&(he(r,K,5),he(r,ye,5)),n&2){let u;G(u=U())&&(i._content=u.first),G(u=U())&&(i._allDrawers=u)}},viewQuery:function(n,i){if(n&1&&_e(K,5),n&2){let r;G(r=U())&&(i._userContent=r.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,i){n&2&&B("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],standalone:!0,features:[Z([{provide:Tt,useExisting:t}]),C],ngContentSelectors:Ht,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,i){n&1&&(J(Lt),_(0,Qt,1,2,"div",0),A(1),A(2,1),_(3,Gt,2,0,"mat-drawer-content")),n&2&&(h(i.hasBackdrop?0:-1),a(3),h(i._content?-1:3))},dependencies:[K],styles:['.mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*="visibility: hidden"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}'],encapsulation:2,changeDetection:0})}}return t})();var Pt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=Re({type:t})}static{this.\u0275inj=Ne({imports:[ve,ge,ge,ve]})}}return t})();var It=t=>({text:t,translate:!1}),$t=()=>({text:"Powered By"}),Ot=(()=>{class t{constructor(){this.date=new Date().getFullYear(),this.constants=H}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=b({type:t,selectors:[["ks-solutions-footer"]],standalone:!0,features:[C],decls:10,vars:8,consts:[[1,"d-flex","align-items-center","justify-content-between","px-3"],[1,"d-flex","align-items-center","small"],[1,"me-2"],[3,"config"],[1,"cs-primary-color"]],template:function(n,i){n&1&&(s(0,"footer",0)(1,"div",1)(2,"span",2),z(3,"\xA9"),c(),p(4,"ks-base-label",3),c(),s(5,"div",1),p(6,"ks-base-label",3),z(7," \xA0 "),s(8,"b",4),p(9,"ks-base-label",3),c()()()),n&2&&(a(4),l("config",w(3,It,"2022 - "+i.date)),a(2),l("config",x(5,$t)),a(3),l("config",w(6,It,i.constants.appOwner)))},dependencies:[T],styles:["footer[_ngcontent-%COMP%]{background-color:var(--secondary-background-color);height:15px;max-height:15px;box-sizing:border-box;position:fixed;left:0;right:0;bottom:0;z-index:200;border-top:1px solid var(--splitter-color)}footer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:10px}"],changeDetection:0})}}return t})();var ke=(()=>{class t{constructor(){this._networkService=g(wt)}changePassword(e,n){return this._networkService.post(kt.USER.changePassword,{newPassword:e,oldPassword:n})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=Ee({token:t,factory:t.\u0275fac})}}return t})();var Yt=()=>({text:"menu"}),Jt=()=>({icon:"icon_menu",color:"var(--primary-color)"}),Xt=(t,o)=>({label:t,matType:"mat-icon-button",prefixIcon:o}),en=t=>({text:t,translate:!1}),tn=t=>({text:t}),nn=()=>({"max-width":"37px","font-size":"20px","text-transform":"capitalize"}),on=(t,o)=>({label:t,matType:"mat-button",addClass:"rounded-5 cs-primary-color border border-1",addStyles:o}),rn=()=>({icon:"icon_person"}),an=(t,o)=>({text:"Change Password",prefixIcon:t,addClass:"ps-2",onClick:o}),sn=()=>({icon:"icon_color"}),cn=(t,o,e)=>({text:t,prefixIcon:o,addClass:"ps-2",onClick:e}),dn=()=>({icon:"icon_logout"}),ln=(t,o)=>({text:"Logout",prefixIcon:t,addClass:"ps-2",onClick:o}),pn=(t,o,e)=>[t,o,e],mn=(t,o)=>({button:t,options:o}),un=()=>({text:"Welcome,"}),hn=t=>({text:t,case:"titlecase",translate:!1});function _n(t,o){if(t&1&&(s(0,"div",6),p(1,"ks-base-label",4),z(2," \xA0 "),p(3,"ks-base-label",4),c()),t&2){let e=d();a(),l("config",x(2,un)),a(2),l("config",w(3,hn,e.name))}}function fn(t,o){if(t&1&&(s(0,"span"),p(1,"span",10),c()),t&2){let e=d();Ue(e.innerWidth>700?" me-3":"me-3")}}var Et=(()=>{class t{constructor(){this._dialog=g(gt),this._authService=g(Dt),this._snackbar=g(bt),this._navbarService=g(L),this._storageService=g(oe),this._passwordService=g(ke),this.innerWidth=window.innerWidth,this.AppName=H.appName,this.name=this._storageService.getItem(ae.SS.name,!0),this.themeSig=this._navbarService.theme,this.toggleNav=new F}NavigateToHome(){this._navbarService.navigateTo(re.LAYOUT.route)}changePassword(){let e={title:{text:"Change Password"},form:{fields:[{label:{text:"Old Password"},type:"password",name:"oldPassword",required:!0},{label:{text:"new Password"},type:"password",name:"newPassword",required:!0,extraValidators:[Ct({forceLowerCase:!0,forceNumbers:!0,forceSpecialCharacters:!0,forceUppercase:!0,maxLength:20,minLength:4,preventSpace:!0})]},{label:{text:"Confirm Password"},type:"password",name:"confirmPassword",required:!0}]},beforeCloseObservable:n=>n.newPassword!==n.confirmPassword?(this._snackbar.open({text:"Confirm password does not match the new password!"},"error"),Fe(()=>"")):this._passwordService.changePassword(n.newPassword,n.oldPassword)};this._dialog.openFormPopup(e,"500px")}logOut(){this._authService.logOut()}GetNumber(e,n){let i=ft.formatNumberWithCommas(e,n);return i||"0"}changeTheme(){this._navbarService.toggleTheme()}onWindowResize(){this.innerWidth=window.innerWidth}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=b({type:t,selectors:[["ks-solutions-nav-bar"]],hostBindings:function(n,i){n&1&&v("resize",function(){return i.onWindowResize()},!1,j)},outputs:{toggleNav:"toggleNav"},standalone:!0,features:[Z([ke]),C],decls:14,vars:41,consts:[[1,"container-fluid","d-flex","align-items-center"],[1,"d-flex","align-items-center"],[3,"onClick","config"],[1,"mb-0","ms-2","border-0","cs-title","cursor-pointer",3,"click"],[3,"config"],[1,"ms-auto"],[1,"me-3"],[3,"class"],[1,"d-flex"],[1,"p-3","text-center","border-bottom","border-1","bold","mb-2","h4",2,"width","220px"],[1,"divider"]],template:function(n,i){n&1&&(s(0,"nav",0)(1,"div",1)(2,"ks-base-button",2),v("onClick",function(){return i.toggleNav.emit()}),c(),s(3,"button",3),v("click",function(){return i.NavigateToHome()}),p(4,"ks-base-label",4),c()(),p(5,"div",5),_(6,_n,4,5,"div",6),s(7,"div",1),_(8,fn,2,2,"span",7),s(9,"div",8)(10,"ks-base-menu",4)(11,"div",9),z(12),ee(13,"titlecase"),c()()()()()),n&2&&(a(2),l("config",M(10,Xt,x(8,Yt),x(9,Jt))),a(2),l("config",w(13,en,i.AppName)),a(2),h(i.innerWidth>500?6:-1),a(2),h(i.innerWidth>500?8:-1),a(2),l("config",M(38,mn,M(18,on,w(15,tn,i.name&&i.name[0]),x(17,nn)),fe(34,pn,M(22,an,x(21,rn),i.changePassword.bind(i)),fe(26,cn,i.themeSig()==="dark"?"Light Theme":"Dark Theme",x(25,sn),i.changeTheme.bind(i)),M(31,ln,x(30,dn),i.logOut.bind(i))))),a(2),Ke(" ",te(13,6,i.name)," "))},dependencies:[W,tt,ht,yt,T],styles:["nav[_ngcontent-%COMP%]{background-color:var(--secondary-background-color);height:50px;border-top:1px solid var(--splitter-color);border-bottom:1px solid var(--splitter-color)}.user-logo[_ngcontent-%COMP%]{min-width:30px;width:30px;height:30px;font-size:20px;border-color:var(--splitter-color)!important;color:var(--primary-color);cursor:pointer}.cs-title[_ngcontent-%COMP%]{font-weight:900;font-size:20px;background-color:inherit}.divider[_ngcontent-%COMP%]{width:1px;height:25px;border:1px solid var(--splitter-color)}"],changeDetection:0})}}return t})();var vn=t=>({text:t,case:"titlecase"}),wn=()=>({text:"back"}),bn=()=>({icon:"icon_backward",color:"var(--primary-color)"}),Cn=(t,o)=>({label:t,matType:"mat-icon-button",prefixIcon:o}),Nt=t=>({icon:t}),xn=(t,o,e,n,i,r,u)=>({id:t,label:o,prefixIcon:e,suffixIcon:n,disabled:i,color:r,matType:"mat-icon-button",onClick:u});function yn(t,o){if(t&1){let e=k();s(0,"ks-base-button",4),v("onClick",function(){y(e);let i=d(3);return S(i.goBack())}),c()}t&2&&l("config",M(3,Cn,x(1,wn),x(2,bn)))}function Sn(t,o){if(t&1&&p(0,"ks-base-button",6),t&2){let e=d().$implicit;l("config",e)}}function kn(t,o){if(t&1&&_(0,Sn,1,1,"ks-base-button",6),t&2){let e=o.$implicit;h(!e.hide&&(!e.show||e.show())?0:-1)}}function Mn(t,o){if(t&1&&(s(0,"div",5),E(1,kn,1,1,null,null,O),c()),t&2){let e=d(3);a(),N(e.buttons)}}function Dn(t,o){if(t&1&&p(0,"ks-base-button",6),t&2){let e=d().$implicit;l("config",$e(5,xn,e.id,e.label,e.prefixIcon?w(1,Nt,e.prefixIcon.icon):void 0,e.suffixIcon?w(3,Nt,e.suffixIcon.icon):void 0,e.disabled,e.color,e.onClick))}}function Fn(t,o){if(t&1&&_(0,Dn,1,13,"ks-base-button",6),t&2){let e=o.$implicit;h(!e.hide&&(!e.show||e.show())?0:-1)}}function Bn(t,o){if(t&1&&(s(0,"div",5),E(1,Fn,1,1,null,null,O),c()),t&2){let e=d(3);a(),N(e.buttons)}}function Tn(t,o){if(t&1&&_(0,Mn,3,0,"div",5)(1,Bn,3,0,"div",5),t&2){let e=d(3);h(e.innerWidth>=720||o===1?0:1)}}function Pn(t,o){if(t&1&&(s(0,"nav",0),_(1,yn,1,6,"ks-base-button",1),s(2,"div",2),p(3,"ks-base-label",3),c(),_(4,Tn,2,1),c()),t&2){let e,n=d(),i=d();a(),h(n.back?1:-1),a(),B("ps-3",!n.back)("ms-1",!n.back),a(),l("config",w(7,vn,n.title||"")),a(),h((e=n.buttons&&i.getActiveLength(n.buttons))?4:-1,e)}}function In(t,o){t&1&&_(0,Pn,5,9,"nav",0),t&2&&h(o.show?0:-1)}var Rt=(()=>{class t{constructor(e,n){this._navService=e,this._location=n,this.navSettingsSig=this._navService.navSettings,this.innerWidth=window.innerWidth}goBack(){this._location.back()}getActiveLength(e){return e?e.filter(n=>!n.hide&&(n.show?n.show():!0)).length:0}onWindowResize(){this.innerWidth=window.innerWidth}static{this.\u0275fac=function(n){return new(n||t)(m(L),m(Je))}}static{this.\u0275cmp=b({type:t,selectors:[["ks-solutions-secondary-nav"]],hostBindings:function(n,i){n&1&&v("resize",function(){return i.onWindowResize()},!1,j)},standalone:!0,features:[C],decls:1,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-between","px-2"],[1,"ms-1",3,"config"],[1,"d-flex","align-items-center","cs-title","m-0","p-0","ps-1","me-auto"],[3,"config"],[1,"ms-1",3,"onClick","config"],[1,"d-flex","align-items-center"],[1,"ms-2",3,"config"]],template:function(n,i){if(n&1&&_(0,In,1,1),n&2){let r;h((r=i.navSettingsSig())?0:-1,r)}},dependencies:[ie,W,T],styles:["nav[_ngcontent-%COMP%]{background-color:var(--secondary-background-color);height:50px;border-bottom:1px solid var(--splitter-color);box-shadow:0 10px 30px 0 var(--secondary-box-shadow-color)}nav[_ngcontent-%COMP%]   .cs-title[_ngcontent-%COMP%]{font-size:18px;font-weight:500}"],changeDetection:0})}}return t})();var On=t=>({text:t,translate:!1}),En=t=>({icon:t}),Nn=t=>({icon:t,size:"sm"});function Rn(t,o){if(t&1&&p(0,"ks-base-icon",5),t&2){let e=d(2);l("config",w(1,En,e.MenuItem.icon.icon))}}function jn(t,o){t&1&&p(0,"div",6)}function An(t,o){if(t&1&&(s(0,"div",4),p(1,"ks-base-icon",5),c()),t&2){let e=d(2);a(),l("config",w(1,Nn,e.MenuItem.opened?"icon_angle_up":"icon_angle_down"))}}function zn(t,o){if(t&1){let e=k();s(0,"div",1)(1,"button",2),v("click",function(){y(e);let i=d();return S(i.MenuItem.children&&i.MenuItem.children.length?i.MenuItem.opened=!i.MenuItem.opened:i.goTo(i.MenuItem.path))}),s(2,"div",3)(3,"div",4),_(4,Rn,1,3,"ks-base-icon",5)(5,jn,1,0,"div",6),c(),s(6,"span"),p(7,"ks-base-label",5),c()(),_(8,An,2,3,"div",4),c()()}if(t&2){let e=d();B("opened",e.MenuItem.opened&&e.MenuItem.children&&e.MenuItem.children.length)("mb-1",!e.lvl),a(),Ge("margin-left:"+e.lvl*20+"px"),l("ngClass","lvl-"+e.lvl),a(3),h(e.MenuItem.icon&&!e.lvl?4:-1),a(),h(e.lvl?5:-1),a(2),l("config",w(11,On,e.MenuItem.name)),a(),h(e.MenuItem.children&&e.MenuItem.children.length?8:-1)}}function Vn(t,o){if(t&1){let e=k();s(0,"ks-solutions-side-menu-row",8),v("closeSideBar",function(){y(e);let i=d(2);return S(i.closeSideBar.emit())}),c()}if(t&2){let e=o.$implicit,n=d(2);l("MenuItem",e)("lvl",n.lvl+1)}}function Wn(t,o){if(t&1&&E(0,Vn,1,2,"ks-solutions-side-menu-row",7,O),t&2){let e=d();N(e.MenuItem.children)}}var jt=(()=>{class t{constructor(e){this._router=e,this.lvl=0,this.closeSideBar=new F}goTo(e){this.closeSideBar.emit(),this._router.navigateByUrl(e)}static{this.\u0275fac=function(n){return new(n||t)(m(ot))}}static{this.\u0275cmp=b({type:t,selectors:[["ks-solutions-side-menu-row"]],inputs:{MenuItem:"MenuItem",lvl:"lvl"},outputs:{closeSideBar:"closeSideBar"},standalone:!0,features:[C],decls:2,vars:2,consts:[[1,"d-flex",3,"opened","mb-1"],[1,"d-flex"],[1,"menu-container","d-flex","align-items-center","justify-content-between","border-0","w-100","p-0","py-2",3,"click","ngClass"],[1,"d-flex","align-items-center",2,"height","30px"],[1,"ic","d-flex","align-items-center"],[3,"config"],[1,"ms-auto","dot","me-2"],[3,"MenuItem","lvl"],[3,"closeSideBar","MenuItem","lvl"]],template:function(n,i){n&1&&_(0,zn,9,13,"div",0)(1,Wn,2,0),n&2&&(h(i.MenuItem?0:-1),a(),h(i.MenuItem&&i.MenuItem.children&&i.MenuItem.children.length&&i.MenuItem.opened?1:-1))},dependencies:[t,xt,Xe,T],styles:["button[_ngcontent-%COMP%]{background:none}.menu-container[_ngcontent-%COMP%]{border-radius:5px;margin-bottom:3px;cursor:pointer}.menu-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--primary-color);font-weight:500}.menu-container[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%]{padding:0 12px}.menu-container[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--primary-color)!important}.menu-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:7px;height:7px;border:4px solid var(--primary-color);border-radius:50%}.lvl-0[_ngcontent-%COMP%]:hover{background-color:var(--lvl-0-hover-bg-color)}.lvl-0[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{color:var(--lvl-0-hover-text-color)}.lvl-1[_ngcontent-%COMP%]:hover{background-color:var(--lvl-1-hover-bg-color)}.lvl-1[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%]{color:var(--lvl-1-hover-text-color)}.opened[_ngcontent-%COMP%]   .lvl-0[_ngcontent-%COMP%]{background-color:var(--lvl-0-hover-bg-color)}.opened[_ngcontent-%COMP%]   .lvl-0[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--lvl-0-hover-text-color)}.opened[_ngcontent-%COMP%]   .lvl-1[_ngcontent-%COMP%]{background-color:var(--lvl-1-hover-bg-color)}.opened[_ngcontent-%COMP%]   .lvl-1[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--lvl-1-hover-text-color)}"],changeDetection:0})}}return t})();var Ln=t=>({text:t,translate:!1}),Hn=()=>({text:"Close Side Bar"}),Qn=()=>({icon:"icon_x"}),Gn=(t,o)=>({label:t,matType:"mat-icon-button",prefixIcon:o});function Un(t,o){if(t&1){let e=k();s(0,"ks-base-button",8),v("onClick",function(){y(e);let i=d();return S(i.closeSideBar.emit())}),c()}t&2&&l("config",M(3,Gn,x(1,Hn),x(2,Qn)))}function Zn(t,o){if(t&1){let e=k();s(0,"ks-solutions-side-menu-row",9),v("closeSideBar",function(){y(e);let i=d();return S(i.closeSideBar.emit())}),c()}if(t&2){let e=o.$implicit;l("MenuItem",e)}}var At=(()=>{class t{constructor(){this.closeSideBar=new F,this.innerWidth=window.innerWidth,this.AppName=H.appName,this._storageService=g(oe),this.screens=this._storageService.getItem(ae.SS.user,!0)?.screens||[],this.MenuData=[]}ngOnInit(){let e={},n=[];this.screens.forEach(i=>{i.ism&&(i.groupName?e[i.groupName]?e[i.groupName].push(i):e[i.groupName]=[i]:n.push(i))}),n.forEach(i=>{this.MenuData.push({name:i.screenName,path:i.fullPath,icon:{icon:i.icon}})}),Object.keys(e).forEach(i=>{let r=e[i];r&&(r.length===1?this.MenuData.push({name:r[0].screenName,path:r[0].fullPath,icon:{icon:r[0].icon}}):this.MenuData.push({name:i,path:i,icon:{icon:r[0].icon},children:r.map(u=>({name:u.screenName,path:u.fullPath})).sort((u,Q)=>u.name.localeCompare(Q.name))}))}),this.MenuData=this.MenuData.sort((i,r)=>i.name.localeCompare(r.name)),this.MenuData.unshift({name:"Home",path:re.LAYOUT.route,icon:{icon:"icon_home"}})}onWindowResize(){this.innerWidth=window.innerWidth}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=b({type:t,selectors:[["ks-solutions-side-menu"]],hostBindings:function(n,i){n&1&&v("resize",function(){return i.onWindowResize()},!1,j)},outputs:{closeSideBar:"closeSideBar"},standalone:!0,features:[C],decls:10,vars:4,consts:[[1,"side-menu-container"],[1,"d-flex","justify-content-between","align-items-center","h2"],[1,"cs-primary-color"],[3,"config"],[1,"d-flex","justify-content-center","align-items-center","px-2"],[1,"cursor-pointer",3,"config"],[1,"items-container"],[3,"MenuItem"],[1,"cursor-pointer",3,"onClick","config"],[3,"closeSideBar","MenuItem"]],template:function(n,i){n&1&&(s(0,"div",0)(1,"h4",1),p(2,"div"),s(3,"span",2),p(4,"ks-base-label",3),c(),s(5,"div",4),_(6,Un,1,6,"ks-base-button",5),c()(),s(7,"div",6),E(8,Zn,1,1,"ks-solutions-side-menu-row",7,O),c()()),n&2&&(a(4),l("config",w(2,Ln,i.AppName)),a(2),h(i.innerWidth<550?6:-1),a(2),N(i.MenuData))},dependencies:[jt,W,T],styles:[".side-menu-container[_ngcontent-%COMP%]{width:280px;padding-left:6px;padding-right:6px;padding-bottom:15px}.side-menu-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{height:120px;margin:0;font-weight:900}.side-menu-container[_ngcontent-%COMP%]   .items-container[_ngcontent-%COMP%]{max-height:calc(100dvh - 135px);overflow-y:auto}@media screen and (max-width: 550px){.side-menu-container[_ngcontent-%COMP%]{width:100vw}}"],changeDetection:0})}}return t})();var qn=(t,o)=>({loading:t,disableInteractions:!0,elementRef:o,position:"absolute"});function Kn(t,o){if(t&1&&p(0,"ks-loader-overlay",8),t&2){d();let e=X(8),n=d();l("config",M(1,qn,n.trueSignal,e))}}function $n(t,o){if(t&1){let e=k();s(0,"div",2)(1,"mat-drawer-container",3)(2,"mat-drawer",4,0)(4,"ks-solutions-side-menu",5),v("closeSideBar",function(){y(e);let i=X(3);return S(i.close())}),c()(),s(5,"mat-drawer-content",6)(6,"ks-solutions-nav-bar",7),v("toggleNav",function(){y(e);let i=X(3);return S(i.toggle())}),c(),s(7,"div",2,1),_(9,Kn,1,4,"ks-loader-overlay",8),ee(10,"async"),p(11,"ks-solutions-secondary-nav"),s(12,"div",9),p(13,"router-outlet"),c()()()(),p(14,"ks-solutions-footer"),c()}if(t&2){let e=d();a(),l("hasBackdrop",!0),a(),l("mode","over"),a(7),h(te(10,5,e.loading)?9:-1),a(3),B("nav-exists",o.show)}}var No=(()=>{class t{constructor(){this._loaderService=g(vt),this._navService=g(L),this._lovService=g(Mt),this._socketService=g(Ft),this.navSettingsSig=this._navService.navSettings,this.loading=_t(this._loaderService.isLoading),this.trueSignal=Ve(!0)}ngOnInit(){this._lovService.getUsersLov(),this._socketService.connectSocket()}ngOnDestroy(){this._socketService.disconnectSocket()}handleTabKey(e){this._loaderService.isLoading()&&e.key==="Tab"&&e.preventDefault()}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=b({type:t,selectors:[["ks-solutions-layout"]],hostBindings:function(n,i){n&1&&v("keydown.tab",function(u){return i.handleTabKey(u)},!1,ze)},standalone:!0,features:[C],decls:1,vars:1,consts:[["drawer",""],["body",""],[1,"position-relative"],[3,"hasBackdrop"],[3,"mode"],[3,"closeSideBar"],[1,"body"],[3,"toggleNav"],[3,"config"],[1,"cs-layout"]],template:function(n,i){if(n&1&&_(0,$n,15,7,"div",2),n&2){let r;h((r=i.navSettingsSig())?0:-1,r)}},dependencies:[Ot,At,Et,nt,et,ie,Pt,ye,Se,K,it,Rt,St],styles:[".body[_ngcontent-%COMP%]{height:100dvh;max-height:100dvh;min-height:100dvh;background-color:var(--background-color)}.cs-layout[_ngcontent-%COMP%]{height:100dvh;max-height:calc(100dvh - 65px);min-height:calc(100dvh - 65px);overflow-y:auto;padding:16px 25px;position:relative}.nav-exists[_ngcontent-%COMP%]{height:100dvh;max-height:calc(100dvh - 115px);min-height:calc(100dvh - 115px)}.mat-drawer-side[_ngcontent-%COMP%]{border:none}.spinner-container[_ngcontent-%COMP%]{height:100%;width:100vw;position:absolute;z-index:100000}@media screen and (max-width: 550px){.cs-layout[_ngcontent-%COMP%]{padding:12px}}"],changeDetection:0})}}return t})();export{No as LayoutComponent};
