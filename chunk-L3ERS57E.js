import{a as O,b as Z,c as tt,d as et,e as H,f as nt,g as G,h as it,i as h}from"./chunk-7B7DFZNI.js";import{a as b}from"./chunk-WDT54AZN.js";import"./chunk-4YND2FDE.js";import{a as X}from"./chunk-Z7NV7UNL.js";import"./chunk-UA3J3SVI.js";import"./chunk-HMNUYURD.js";import{ka as R}from"./chunk-XXZS4MWG.js";import"./chunk-CARY4E7O.js";import{o as Q}from"./chunk-4KKA7PE6.js";import{Ab as c,Fc as _,Gc as S,Hc as B,Ib as p,Ic as y,Jc as Y,Kb as E,La as P,Ob as s,Pb as j,Rb as U,Sb as V,Tb as l,Ub as r,Vb as d,Yb as A,Zb as N,ac as M,cc as o,db as D,dd as k,hd as K,ib as i,jd as w,ka as v,mc as $,nc as g,oa as f,oc as q,pc as C,tb as W,wc as x,xc as T,ya as F,yc as z,za as I}from"./chunk-VO6IE2C5.js";var _t=t=>({"reverse-scroll":t});function ut(t,a){if(t&1&&(l(0,"div",5),d(1,"img",6),r()),t&2){let e=o().$implicit;i(),p("src",e.img,D)("alt",e.label)}}function gt(t,a){if(t&1){let e=N();l(0,"button",4),M("click",function(){let m=F(e).$implicit,u=o(4);return I(u.scrollTo(m.label+m._id))}),c(1,ut,2,2,"div",5),g(2),_(3,"kssTranslate"),_(4,"titlecase"),r()}if(t&2){let e=a.$implicit,n=o(3);i(),s(e.img?1:-1),i(),C(" ",S(4,6,y(3,2,e.label,n,e.translation))," ")}}function Ct(t,a){if(t&1&&(l(0,"div",0)(1,"div",1)(2,"div",2),U(3,gt,5,8,"button",3,j),r()()()),t&2){let e=o(),n=o();i(2),p("ngClass",z(1,_t,n==="ar")),i(),V(e)}}function ft(t,a){t&1&&c(0,Ct,5,3,"div",0),t&2&&s(a.length?0:-1)}function xt(t,a){if(t&1&&c(0,ft,1,1),t&2){let e,n=o();s((e=n.sections())?0:-1,e)}}var lt=(()=>{class t{constructor(){this._menuService=v(b),this.sections=P.required(),this.langSig=this._menuService.lang}scrollTo(e){if(e){let n=document.getElementById(e);n&&window.scrollTo({left:0,top:n.offsetTop-60,behavior:"smooth"})}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-btn-grp"]],inputs:{sections:[1,"sections"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"d-flex"],[1,"btn-grp","rounded","rounded-1","p-1","w-100"],[1,"btn-grp-o","rounded-1","d-flex","align-items-center","justify-content-between","mx-auto","gap-1","pb-1",3,"ngClass"],[1,"rounded-1","border","border-1","border-secondary","py-1","px-2","small","d-flex","justify-content-center","align-items-center","gap-1"],[1,"rounded-1","border","border-1","border-secondary","py-1","px-2","small","d-flex","justify-content-center","align-items-center","gap-1",3,"click"],[1,"icon-container","p-1"],["dir-menu-image-preload","",3,"src","alt"]],template:function(n,m){if(n&1&&c(0,xt,1,1),n&2){let u;s((u=m.langSig())?0:-1,u)}},dependencies:[h,H,k,O,w],styles:[".btn-grp[_ngcontent-%COMP%]{background-color:var(--t2-btn-grp-bg-color);overflow-x:auto}.btn-grp[_ngcontent-%COMP%]   .btn-grp-o[_ngcontent-%COMP%]{overflow-x:auto}.btn-grp[_ngcontent-%COMP%]   .btn-grp-o[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:35px;background:transparent;background-color:var(--t2-btn-bg-color);text-wrap:nowrap;font-weight:700;color:var(--t2-color)}.btn-grp[_ngcontent-%COMP%]   .btn-grp-o[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .icon-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px;max-height:20px}.btn-grp[_ngcontent-%COMP%]   .btn-grp-o[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:var(--t2-btn-hover-bg-color)}.btn-grp[_ngcontent-%COMP%]   .reverse-scroll[_ngcontent-%COMP%]{direction:rtl}"],changeDetection:0})}}return t})();var vt=()=>({icon:"icon_double_arrow_up"}),ct=(()=>{class t{scrollUp(){window.scrollTo(0,0)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-floating-btns"]],standalone:!0,features:[x],decls:3,vars:2,consts:[[1,"floating-btns","d-flex","justify-content-between","px-3","mx-auto"],[1,"border-0","ms-auto","rounded-3","text-light","d-flex","align-items-center","justify-content-center","up",3,"click"],[3,"config"]],template:function(n,m){n&1&&(l(0,"div",0)(1,"button",1),M("click",function(){return m.scrollUp()}),d(2,"ks-base-icon",2),r()()),n&2&&(i(2),p("config",T(1,vt)))},dependencies:[h,R],styles:[".floating-btns[_ngcontent-%COMP%]{max-width:var(--t2-max-width)}.floating-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:35px;width:35px;padding-bottom:3px}.floating-btns[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{background-color:var(--t2-up-bg-color);animation:_ngcontent-%COMP%_fadeInOut 1.5s infinite}@keyframes _ngcontent-%COMP%_fadeInOut{0%{transform:scale(1)}50%{transform:scale(.9)}to{transform:scale(1)}}"],changeDetection:0})}}return t})();var ht=()=>({icon:"icon_phone"}),St=()=>({icon:"icon_location"}),Tt=()=>({icon:"icon_fb"}),yt=()=>({icon:"icon_instagram"}),Mt=()=>({icon:"icon_wp"});function Pt(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",3),t&2){let e=o(),n=o();p("icon",T(4,ht))("href","tel:"+e.phoneNumber)("text",e.displayedPhoneNumber)("flip",n==="ar")}}function kt(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",10),t&2){let e=o(2);p("icon",T(4,St))("href",e.sm.locationUrl)("text",e.sm.location)("translation",e.sm.locationTranslation)}}function wt(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",12),t&2){let e=o(2);p("icon",T(2,Tt))("href",e.sm.facebookUrl)}}function Ot(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",12),t&2){let e=o(2);p("icon",T(2,yt))("href",e.sm.instagramUrl)}}function Ft(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",12),t&2){let e=o(2);p("icon",T(2,Mt))("href",e.sm.whatsappUrl)}}function It(t,a){if(t&1&&(l(0,"div",9),c(1,kt,1,5,"ks-solutions-menu-tag",10),r(),l(2,"div",11),c(3,wt,1,3,"ks-solutions-menu-tag",12)(4,Ot,1,3,"ks-solutions-menu-tag",12)(5,Ft,1,3,"ks-solutions-menu-tag",12),r()),t&2){let e=o();i(),s(e.sm.locationUrl?1:-1),i(2),s(e.sm.facebookUrl?3:-1),i(),s(e.sm.instagramUrl?4:-1),i(),s(e.sm.whatsappUrl?5:-1)}}function Et(t,a){if(t&1){let e=N();l(0,"footer",0)(1,"div",1)(2,"div",2),c(3,Pt,1,5,"ks-solutions-menu-tag",3),r(),c(4,It,6,4),r(),l(5,"div",4)(6,"div",5),g(7),r(),l(8,"div",6),g(9),_(10,"kssStaticTranslate"),l(11,"button",7),M("click",function(){F(e);let m=o(2);return I(m.redirect())}),l(12,"b",8),g(13),r()()()()()}if(t&2){let e=a,n=o(),m=o();i(3),s(e.phoneNumber?3:-1),i(),s(e.sm?4:-1),i(3),C("\xA9 2023-",m.year,""),i(),E("flex-row-reverse",n==="ar"),i(),C(" ",B(10,7,m.constants.appOwnerPrefix,n)," "),i(4),q(m.constants.appOwner)}}function Bt(t,a){if(t&1&&c(0,Et,14,10,"footer",0),t&2){let e,n=o();s((e=n.store())?0:-1,e)}}var st=(()=>{class t{constructor(){this._router=v(Q),this._menuService=v(b),this.store=P.required(),this.langSig=this._menuService.lang,this.year=new Date().getFullYear(),this.constants=tt}redirect(){this.constants.appOwnerLink&&this.constants.appOwnerLink.startsWith("http")?X(this.constants.appOwnerLink):this._router.navigateByUrl("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-footer"]],inputs:{store:[1,"store"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"rounded-top-3","pt-2"],[1,"px-2"],[1,"h5","mt-2","pb-2","d-flex","align-items-center","justify-content-center"],[3,"icon","href","text","flip"],[1,"d-flex","align-items-center","justify-content-between","px-2","rounded-top-2","cred"],[1,""],[1,"d-flex","align-items-center"],[3,"click"],[1,"pointer","text-primary"],[1,"d-flex","align-items-center","justify-content-center","gap-3","mb-2","pb-2"],[3,"icon","href","text","translation"],[1,"d-flex","justify-content-center","align-items-center","gap-3","pb-3"],[3,"icon","href"]],template:function(n,m){if(n&1&&c(0,Bt,1,1),n&2){let u;s((u=m.langSig())?0:-1,u)}},dependencies:[h,Z,G],styles:["footer[_ngcontent-%COMP%]{background-color:var(--t2-footer-bg-color)}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:none;background:inherit;margin:none}footer[_ngcontent-%COMP%]   .cred[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:12px}"],changeDetection:0})}}return t})();function Dt(t,a){if(t&1&&d(0,"img",1),t&2){let e=o(2);p("src",e.storeLogo,D)}}function jt(t,a){t&1&&(l(0,"div",2),d(1,"ks-solutions-menu-translator"),r())}function Ut(t,a){if(t&1&&(l(0,"div",0),c(1,Dt,1,1,"img",1)(2,jt,2,0,"div",2),r(),l(3,"div",3),g(4),_(5,"titlecase"),r()),t&2){let e=o(),n=o();i(),s(e.storeLogo?1:-1),i(),s(((n.store.languages==null?null:n.store.languages.length)||0)>1?2:-1),i(2),C(" ",S(5,3,e.storeName)," ")}}function Vt(t,a){if(t&1&&c(0,Ut,6,5),t&2){let e,n=o(2);s((e=n.langSig())?0:-1,e)}}function Nt(t,a){if(t&1&&c(0,Vt,1,1),t&2){let e;s((e=a.store)?0:-1,e)}}var pt=(()=>{class t{constructor(){this._menuService=v(b),this.menuSig=this._menuService.menu,this.langSig=this._menuService.lang}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-header"]],standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-center","position-relative","mb-3","img-c"],["dir-menu-image-preload","","alt","store logo",3,"src"],[1,"lang"],[1,"text-center","h1","mb-0","text-break"]],template:function(n,m){if(n&1&&c(0,Nt,1,1),n&2){let u;s((u=m.menuSig())?0:-1,u)}},dependencies:[h,et,H,w],styles:["img[_ngcontent-%COMP%]{width:100%;max-width:400px}.img-c[_ngcontent-%COMP%]{min-height:50px}.lang[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;z-index:10;background-color:var(--t2-bg-color);box-shadow:0 0 4px 4px var(--t2-section-bg-color);border-radius:50%}"],changeDetection:0})}}return t})();var zt=()=>({icon:"icon_star_filled"});function Ht(t,a){if(t&1&&(l(0,"div",8),g(1),_(2,"kssStaticTranslate"),_(3,"titlecase"),r()),t&2){let e=o();E("ar",e==="ar"),i(),C(" ",S(3,6,B(2,3,"new",e))," ")}}function Gt(t,a){if(t&1&&(l(0,"div",9),d(1,"ks-base-icon",10),r()),t&2){let e=o();E("ar",e==="ar"),i(),p("config",T(3,zt))}}function Lt(t,a){if(t&1&&(l(0,"div",6),g(1),_(2,"kssTranslate"),r()),t&2){let e=o(),n=o();p("ngClass",e==="ar"?"text-end":"text-start"),i(),C(" ",y(2,2,n.description,e,n.descriptionTranslation)," ")}}function At(t,a){if(t&1&&(l(0,"div",7)(1,"b",11),g(2),_(3,"kssTranslateNumber"),r()()),t&2){let e=o(),n=o(),m=o();p("ngClass",e==="ar"?"justify-content-start f-14":"justify-content-end"),i(),E("mt-2",n.description),i(),C(" ",y(3,4,n.price,e,m.storeInfo)," ")}}function $t(t,a){if(t&1&&(l(0,"div",1),c(1,Ht,4,8,"div",2)(2,Gt,2,4,"div",3),l(3,"div")(4,"div",4)(5,"em",5),g(6),_(7,"kssTranslate"),r()(),c(8,Lt,3,6,"div",6),r(),c(9,At,4,8,"div",7),r()),t&2){let e=a,n=o();E("flex-row-reverse",e==="ar"),i(),s(n.is_New?1:n.is_Starred?2:-1),i(3),p("ngClass",e==="ar"?"text-end":"text-start"),i(2),q(y(7,7,n.label,e,n.translation)),i(2),s(n.description?8:-1),i(),s(n.price!==void 0&&n.price!==null?9:-1)}}function qt(t,a){if(t&1&&c(0,$t,10,11,"div",0),t&2){let e,n=o();s((e=n.langSig())?0:-1,e)}}var mt=(()=>{class t{constructor(){this._menuService=v(b),this.item=P.required(),this.langSig=this._menuService.lang}ngOnInit(){let e=this._menuService.menu();e&&(this.storeInfo=e.store)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-item"]],inputs:{item:[1,"item"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"m-1","p-2","border","border-1","border-dark","rounded-3","d-flex","align-items-center","justify-content-between","position-relative",3,"flex-row-reverse"],[1,"m-1","p-2","border","border-1","border-dark","rounded-3","d-flex","align-items-center","justify-content-between","position-relative"],[1,"starred","text-bg-danger","rounded-3","px-1","d-flex","align-items-center","justify-content-center",3,"ar"],[1,"starred","text-danger",3,"ar"],[1,"h5","ps-1",3,"ngClass"],[1,"px-2","rounded-2","text-break"],[1,"description","text-break",3,"ngClass"],[1,"d-flex","align-items-center","small","min-50",3,"ngClass"],[1,"starred","text-bg-danger","rounded-3","px-1","d-flex","align-items-center","justify-content-center"],[1,"starred","text-danger"],[3,"config"],[1,"px-1","rounded-2","text-break"]],template:function(n,m){if(n&1&&c(0,qt,1,1),n&2){let u;s((u=m.item())?0:-1,u)}},dependencies:[O,G,k,w,R,it],styles:[".description[_ngcontent-%COMP%]{line-height:18px}.f-14[_ngcontent-%COMP%]{font-size:14px}.min-50[_ngcontent-%COMP%]{min-width:50px}.starred[_ngcontent-%COMP%]{position:absolute;top:-13px;right:-5px}.ar[_ngcontent-%COMP%]{left:-5px;right:unset!important}"],changeDetection:0})}}return t})();function Rt(t,a){if(t&1&&(l(0,"div",2),d(1,"img",6),r()),t&2){let e=o(3);i(),p("src",e.bgImg,D)("alt",e.label)}}function Wt(t,a){if(t&1&&(l(0,"div",5),d(1,"ks-solutions-template2-item",7),r()),t&2){let e=a.$implicit;i(),p("item",e)}}function Yt(t,a){if(t&1&&(l(0,"section",0)(1,"div",1),c(2,Rt,2,2,"div",2),l(3,"div",3)(4,"b",4),g(5),_(6,"kssTranslate"),_(7,"titlecase"),r()(),U(8,Wt,2,1,"div",5,j),r()()),t&2){let e=o(),n=o();p("id",n.label+n._id),i(2),s(n.bgImg?2:-1),i(),p("ngClass",e==="ar"?"text-end":"text-start"),i(2),C(" ",S(7,8,y(6,4,n.label,e,n.translation))," "),i(3),V(n.items)}}function Jt(t,a){if(t&1&&c(0,Yt,10,10,"section",0),t&2){let e=o();s(e.items?0:-1)}}function Kt(t,a){if(t&1&&c(0,Jt,1,1),t&2){let e,n=o();s((e=n.langSig())?0:-1,e)}}var dt=(()=>{class t{constructor(){this._menuService=v(b),this.section=P.required(),this.langSig=this._menuService.lang}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-section"]],inputs:{section:[1,"section"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"w-100","border","border-1","border-dark","rounded-3",3,"id"],[1,"section-container","pt-2"],[1,"img-container","my-2","pb-1","pt-4","px-3","mx-auto"],[1,"d-flex","align-items-center","justify-content-center","text-break","title","mx-sm-3","mx-2","border","border-1","border-dark","rounded-1",3,"ngClass"],[1,"text-break","h2","py-3","underline"],[1,"item","p-2","mt-1"],["dir-menu-image-preload","",1,"rounded-3",3,"src","alt"],[3,"item"]],template:function(n,m){if(n&1&&c(0,Kt,1,1),n&2){let u;s((u=m.section())?0:-1,u)}},dependencies:[w,h,H,k,O,mt],styles:["section[_ngcontent-%COMP%]{background-color:var(--t2-section-bg-color);overflow:hidden}.section-container[_ngcontent-%COMP%]{animation:close 1s ease-in-out}.section-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:var(--t2-section-btn-bg-color)}.section-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{text-align:center;max-width:300px;max-height:300px}.section-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100vb;max-width:100%;max-height:270px}.item[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"],changeDetection:0})}}return t})();var J=t=>({menu:t});function Qt(t,a){t&1&&A(0)}function Xt(t,a){if(t&1&&c(0,Qt,1,0,"ng-container",8),t&2){let e=o();o();let n=$(5);p("ngTemplateOutlet",n)("ngTemplateOutletContext",z(2,J,e))}}function Zt(t,a){t&1&&A(0)}function te(t,a){if(t&1&&c(0,Zt,1,0,"ng-container",8),t&2){let e=o();o();let n=$(3);p("ngTemplateOutlet",n)("ngTemplateOutletContext",z(2,J,e))}}function ee(t,a){t&1&&(l(0,"div",6),d(1,"ks-solutions-template2-floating-btns"),r())}function ne(t,a){if(t&1&&(l(0,"div",3)(1,"div",4)(2,"div",5),d(3,"ks-solutions-template2-header"),c(4,Xt,1,4,"ng-container")(5,te,1,4,"ng-container")(6,ee,2,0,"div",6),r(),d(7,"ks-solutions-template2-footer",7),r()()),t&2){let e=a,n=o(2);i(4),s(e.store.aboutUs?5:4),i(2),s(n.showFloatSig()?6:-1),i(),p("store",e.store)}}function ie(t,a){t&1&&A(0)}function oe(t,a){if(t&1&&c(0,ie,1,0,"ng-container",8),t&2){let e=o(2).menu;o();let n=$(5);p("ngTemplateOutlet",n)("ngTemplateOutletContext",z(2,J,e))}}function ae(t,a){if(t&1&&(l(0,"div",11)(1,"div",12),g(2),_(3,"kssTranslate"),r()()),t&2){let e=o(2).menu,n=o();i(),p("ngClass",n==="ar"?"text-end ":"text-start"),i(),C(" ",y(3,2,e.store.aboutUs,n,e.store.aboutUsTranslation)," ")}}function re(t,a){if(t&1){let e=N();l(0,"div",9)(1,"button",10),M("click",function(){F(e);let m=o(3);return I(m.toggleView("menu"))}),g(2),_(3,"kssStaticTranslate"),_(4,"kssCapitalize"),r(),l(5,"button",10),M("click",function(){F(e);let m=o(3);return I(m.toggleView("about"))}),g(6),_(7,"kssStaticTranslate"),_(8,"kssCapitalize"),r()(),c(9,oe,1,4,"ng-container")(10,ae,4,6,"div",11)}if(t&2){let e=a,n=o(2);p("ngClass",n==="ar"?"flex-row-reverse":""),i(),p("ngClass",e==="menu"?"text-primary":""),i(),C(" ",S(4,9,B(3,6,"menu",n))," "),i(3),p("ngClass",e==="about"?"text-primary":""),i(),C(" ",S(8,14,B(7,11,"about us",n))," "),i(3),s(e==="menu"?9:e==="about"?10:-1)}}function le(t,a){if(t&1&&c(0,re,11,16),t&2){let e,n=o(2);s((e=n.chosenViewSig())?0:-1,e)}}function ce(t,a){if(t&1&&(l(0,"div",15),d(1,"ks-solutions-template2-section",16),r()),t&2){let e=a.$implicit;i(),p("section",e)}}function se(t,a){if(t&1&&(l(0,"div",13),d(1,"ks-solutions-template2-btn-grp",14),r(),U(2,ce,2,1,"div",15,j)),t&2){let e=a.menu;i(),p("sections",e.sub_categories),i(),V(e.sub_categories)}}function pe(t,a){if(t&1&&(l(0,"div",2),c(1,ne,8,3,"div",3),r(),c(2,le,1,1,"ng-template",null,0,Y)(4,se,4,1,"ng-template",null,1,Y)),t&2){let e,n=o();i(),s((e=n.menuSig())?1:-1,e)}}var vn=(()=>{class t{constructor(){this._menuService=v(b),this.menuSig=this._menuService.menu,this.langSig=this._menuService.lang,this.showFloatSig=W(!1),this.chosenViewSig=W("menu")}ngOnInit(){let e=window.innerHeight*.1;window.addEventListener("scroll",()=>{window.pageYOffset>=e?this.showFloatSig.set(!0):this.showFloatSig.set(!1)})}toggleView(e){this.chosenViewSig.set(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template-2"]],standalone:!0,features:[x],decls:1,vars:1,consts:[["WITH_ABOUT",""],["MENU",""],[1,"template-2-container"],[1,"menu-container","mx-auto"],[1,"d-flex","h-100","flex-column","justify-content-between"],[1,"mb-4"],[1,"floating-btns-container"],[3,"store"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"w-100","d-flex","align-items-center","justify-content-center","gap-3","p-3","flex-wrap",3,"ngClass"],[1,"h5","pointer","menu-tag",3,"click","ngClass"],[1,"mb-5","pb-3","mx-2"],[1,"text-break","border","border-1","border-secondary","rounded-3","p-3",3,"ngClass"],[1,"px-1","btn-grp-container"],[3,"sections"],[1,"p-3"],[3,"section"]],template:function(n,m){if(n&1&&c(0,pe,6,1),n&2){let u;s((u=m.langSig())?0:-1,u)}},dependencies:[h,k,nt,O,G,K,ct,dt,st,pt,lt],styles:[".template-2-container[_ngcontent-%COMP%]{background-color:var(--t2-bg-color);color:var(--t2-color)}.template-2-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]{min-height:100vh;position:relative;max-width:var(--t2-max-width)}.template-2-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .btn-grp-container[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1}.template-2-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .floating-btns-container[_ngcontent-%COMP%]{position:fixed;bottom:27px;left:0;right:0;z-index:2}.template-2-container[_ngcontent-%COMP%]   .menu-tag[_ngcontent-%COMP%]{border:none;padding:none;background:inherit;margin:none}.template-2-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{color:var(--t2-color)}"],changeDetection:0})}}return t})();export{vn as Template2Component};
