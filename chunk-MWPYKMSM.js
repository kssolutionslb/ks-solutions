import{a as ot}from"./chunk-HU5QJW6H.js";import{a as I,b as Z,c as tt,d as et,e as Y,f as nt,g as E,h as it,i as S}from"./chunk-PE5FATJ2.js";import{a as b}from"./chunk-U52VMKHQ.js";import"./chunk-RVLBYVA2.js";import{a as X}from"./chunk-Z7NV7UNL.js";import"./chunk-L3JRBETB.js";import"./chunk-HMNUYURD.js";import{ia as W}from"./chunk-I7SMIBGI.js";import"./chunk-CARY4E7O.js";import{o as Q}from"./chunk-SWSILSZJ.js";import{$b as M,Ec as _,Fc as T,Gc as w,Hb as m,Hc as y,Ic as G,Jb as k,La as P,Nb as s,Ob as N,Qb as V,Rb as z,Sb as r,Tb as l,Ub as d,Xb as H,Yb as L,bc as o,cd as O,db as U,gd as K,hb as i,id as F,ka as v,lc as A,mc as u,nc as q,oa as f,oc as C,sb as $,vc as x,wc as h,xc as R,ya as D,za as B,zb as c}from"./chunk-ZZEMHH24.js";var mt=()=>({icon:"icon_double_arrow_up"}),at=(()=>{class t{scrollUp(){window.scrollTo(0,0)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-floating-btns"]],standalone:!0,features:[x],decls:3,vars:2,consts:[[1,"floating-btns","d-flex","justify-content-between","px-3","mx-auto"],[1,"border-0","ms-auto","rounded-3","d-flex","align-items-center","justify-content-center","up","text-light",3,"click"],[3,"config"]],template:function(n,p){n&1&&(r(0,"div",0)(1,"button",1),M("click",function(){return p.scrollUp()}),d(2,"ks-base-icon",2),l()()),n&2&&(i(2),m("config",h(1,mt)))},dependencies:[S,W],styles:[".floating-btns[_ngcontent-%COMP%]{max-width:var(--t2-max-width)}.floating-btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:35px;width:35px;padding-bottom:3px}.floating-btns[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{background-color:var(--t2-up-bg-color);animation:_ngcontent-%COMP%_fadeInOut 1.5s infinite}@keyframes _ngcontent-%COMP%_fadeInOut{0%{transform:scale(1)}50%{transform:scale(.9)}to{transform:scale(1)}}"],changeDetection:0})}}return t})();var dt=()=>({icon:"icon_phone"}),_t=()=>({icon:"icon_location"}),ut=()=>({icon:"icon_fb"}),gt=()=>({icon:"icon_instagram"}),Ct=()=>({icon:"icon_wp"});function ft(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",3),t&2){let e=o(),n=o();m("icon",h(4,dt))("href","tel:"+e.phoneNumber)("text",e.displayedPhoneNumber)("flip",n==="ar")}}function xt(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",10),t&2){let e=o(2);m("icon",h(4,_t))("href",e.sm.locationUrl)("text",e.sm.location)("translation",e.sm.locationTranslation)}}function vt(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",12),t&2){let e=o(2);m("icon",h(2,ut))("href",e.sm.facebookUrl)}}function ht(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",12),t&2){let e=o(2);m("icon",h(2,gt))("href",e.sm.instagramUrl)}}function bt(t,a){if(t&1&&d(0,"ks-solutions-menu-tag",12),t&2){let e=o(2);m("icon",h(2,Ct))("href",e.sm.whatsappUrl)}}function St(t,a){if(t&1&&(r(0,"div",9),c(1,xt,1,5,"ks-solutions-menu-tag",10),l(),r(2,"div",11),c(3,vt,1,3,"ks-solutions-menu-tag",12)(4,ht,1,3,"ks-solutions-menu-tag",12)(5,bt,1,3,"ks-solutions-menu-tag",12),l()),t&2){let e=o();i(),s(e.sm.locationUrl?1:-1),i(2),s(e.sm.facebookUrl?3:-1),i(),s(e.sm.instagramUrl?4:-1),i(),s(e.sm.whatsappUrl?5:-1)}}function Tt(t,a){if(t&1){let e=L();r(0,"footer",0)(1,"div",1)(2,"div",2),c(3,ft,1,5,"ks-solutions-menu-tag",3),l(),c(4,St,6,4),l(),r(5,"div",4)(6,"div",5),u(7),l(),r(8,"div",6),u(9),_(10,"kssStaticTranslate"),r(11,"button",7),M("click",function(){D(e);let p=o(2);return B(p.redirect())}),r(12,"b",8),u(13),l()()()()()}if(t&2){let e=a,n=o(),p=o();i(3),s(e.phoneNumber?3:-1),i(),s(e.sm?4:-1),i(3),C("\xA9 2023-",p.year,""),i(),k("flex-row-reverse",n==="ar"),i(),C(" ",w(10,7,p.constants.appOwnerPrefix,n)," "),i(4),q(p.constants.appOwner)}}function yt(t,a){if(t&1&&c(0,Tt,14,10,"footer",0),t&2){let e,n=o();s((e=n.store())?0:-1,e)}}var rt=(()=>{class t{constructor(){this._router=v(Q),this._menuService=v(b),this.store=P.required(),this.langSig=this._menuService.lang,this.year=new Date().getFullYear(),this.constants=tt}redirect(){this.constants.appOwnerLink&&this.constants.appOwnerLink.startsWith("http")?X(this.constants.appOwnerLink):this._router.navigateByUrl("")}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-footer"]],inputs:{store:[1,"store"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"rounded-top-3","pt-2"],[1,"px-2","text-light"],[1,"h5","mt-2","pb-2","d-flex","align-items-center","justify-content-center","text-light"],[3,"icon","href","text","flip"],[1,"d-flex","align-items-center","justify-content-between","px-2","rounded-top-2","cred"],[1,"text-light"],[1,"d-flex","align-items-center","text-light"],[3,"click"],[1,"pointer","text-primary"],[1,"d-flex","align-items-center","justify-content-center","gap-3","mb-2","pb-2"],[3,"icon","href","text","translation"],[1,"d-flex","justify-content-center","align-items-center","gap-3","pb-3"],[3,"icon","href"]],template:function(n,p){if(n&1&&c(0,yt,1,1),n&2){let g;s((g=p.langSig())?0:-1,g)}},dependencies:[S,Z,E],styles:["footer[_ngcontent-%COMP%]{background-color:var(--t2-footer-bg-color)}footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;padding:none;background:inherit;margin:none}footer[_ngcontent-%COMP%]   .cred[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:12px}"],changeDetection:0})}}return t})();function Mt(t,a){if(t&1&&d(0,"img",1),t&2){let e=o(2);m("src",e.storeLogo,U)}}function wt(t,a){if(t&1&&(r(0,"div",0),c(1,Mt,1,1,"img",1),r(2,"div",2),d(3,"ks-solutions-menu-translator"),l()(),r(4,"div",3),u(5),_(6,"titlecase"),l()),t&2){let e=o();i(),s(e.storeLogo?1:-1),i(4),C(" ",T(6,2,e.storeName)," ")}}function Pt(t,a){if(t&1&&c(0,wt,7,4),t&2){let e,n=o(2);s((e=n.langSig())?0:-1,e)}}function Ot(t,a){if(t&1&&c(0,Pt,1,1),t&2){let e;s((e=a.store)?0:-1,e)}}var lt=(()=>{class t{constructor(){this._menuService=v(b),this.menuSig=this._menuService.menu,this.langSig=this._menuService.lang}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-header"]],standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"d-flex","align-items-center","justify-content-center","position-relative","mb-3","img-c"],["dir-menu-image-preload","","alt","store logo",3,"src"],[1,"lang"],[1,"text-light","text-center","h1","mb-0","text-break"]],template:function(n,p){if(n&1&&c(0,Ot,1,1),n&2){let g;s((g=p.menuSig())?0:-1,g)}},dependencies:[S,et,Y,F],styles:["img[_ngcontent-%COMP%]{width:100%;max-width:400px}.img-c[_ngcontent-%COMP%]{min-height:50px}.lang[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;z-index:10;background-color:var(--t2-bg-color);box-shadow:0 0 4px 4px var(--t2-section-bg-color);border-radius:50%}"],changeDetection:0})}}return t})();var Ft=()=>({icon:"icon_star_filled"});function It(t,a){if(t&1&&(r(0,"div",8),u(1),_(2,"kssStaticTranslate"),_(3,"titlecase"),l()),t&2){let e=o();k("ar",e==="ar"),i(),C(" ",T(3,6,w(2,3,"new",e))," ")}}function Et(t,a){if(t&1&&(r(0,"div",9),d(1,"ks-base-icon",10),l()),t&2){let e=o();k("ar",e==="ar"),i(),m("config",h(3,Ft))}}function Dt(t,a){if(t&1&&(r(0,"div",6),u(1),_(2,"kssTranslate"),l()),t&2){let e=o(),n=o();m("ngClass",e==="ar"?"text-end":"text-start"),i(),C(" ",y(2,2,n.description,e,n.descriptionTranslation)," ")}}function Bt(t,a){if(t&1&&(r(0,"div",7)(1,"b",11),u(2),_(3,"kssTranslateNumber"),l()()),t&2){let e=o(),n=o(),p=o();m("ngClass",e==="ar"?"justify-content-start f-14":"justify-content-end"),i(),k("mt-2",n.description),i(),C(" ",y(3,4,n.price,e,p.storeInfo)," ")}}function jt(t,a){if(t&1&&(r(0,"div",1),c(1,It,4,8,"div",2)(2,Et,2,4,"div",3),r(3,"div")(4,"div",4)(5,"em",5),u(6),_(7,"kssTranslate"),l()(),c(8,Dt,3,6,"div",6),l(),c(9,Bt,4,8,"div",7),l()),t&2){let e=a,n=o();k("flex-row-reverse",e==="ar"),i(),s(n.is_New?1:n.is_Starred?2:-1),i(3),m("ngClass",e==="ar"?"text-end":"text-start"),i(2),q(y(7,7,n.label,e,n.translation)),i(2),s(n.description?8:-1),i(),s(n.price!==void 0&&n.price!==null?9:-1)}}function Ut(t,a){if(t&1&&c(0,jt,10,11,"div",0),t&2){let e,n=o();s((e=n.langSig())?0:-1,e)}}var ct=(()=>{class t{constructor(){this._menuService=v(b),this.item=P.required(),this.langSig=this._menuService.lang}ngOnInit(){let e=this._menuService.menu();e&&(this.storeInfo=e.store)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-item"]],inputs:{item:[1,"item"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"m-1","p-2","border","border-1","border-dark","rounded-3","d-flex","align-items-center","justify-content-between","position-relative",3,"flex-row-reverse"],[1,"m-1","p-2","border","border-1","border-dark","rounded-3","d-flex","align-items-center","justify-content-between","position-relative"],[1,"starred","text-bg-danger","rounded-3","px-1","d-flex","align-items-center","justify-content-center",3,"ar"],[1,"starred","text-danger",3,"ar"],[1,"h5","text-light","ps-1",3,"ngClass"],[1,"px-2","rounded-2","text-break"],[1,"description","text-light","text-break",3,"ngClass"],[1,"d-flex","align-items-center","small","text-light","min-50",3,"ngClass"],[1,"starred","text-bg-danger","rounded-3","px-1","d-flex","align-items-center","justify-content-center"],[1,"starred","text-danger"],[3,"config"],[1,"px-1","rounded-2","text-break"]],template:function(n,p){if(n&1&&c(0,Ut,1,1),n&2){let g;s((g=p.item())?0:-1,g)}},dependencies:[I,E,O,F,W,it],styles:[".description[_ngcontent-%COMP%]{line-height:18px}.f-14[_ngcontent-%COMP%]{font-size:14px}.min-50[_ngcontent-%COMP%]{min-width:50px}.starred[_ngcontent-%COMP%]{position:absolute;top:-13px;right:-5px}.ar[_ngcontent-%COMP%]{left:-5px;right:unset!important}"],changeDetection:0})}}return t})();function zt(t,a){if(t&1&&(r(0,"div",2),d(1,"img",6),l()),t&2){let e=o(3);i(),m("src",e.bgImg,U)("alt",e.label)}}function Ht(t,a){if(t&1&&(r(0,"div",5),d(1,"ks-solutions-template2-item",7),l()),t&2){let e=a.$implicit;i(),m("item",e)}}function Lt(t,a){if(t&1&&(r(0,"section",0)(1,"div",1),c(2,zt,2,2,"div",2),r(3,"div",3)(4,"b",4),u(5),_(6,"kssTranslate"),_(7,"titlecase"),l()(),V(8,Ht,2,1,"div",5,N),l()()),t&2){let e=o(),n=o();m("id",n.label+n._id),i(2),s(n.bgImg?2:-1),i(),m("ngClass",e==="ar"?"text-end":"text-start"),i(2),C(" ",T(7,8,y(6,4,n.label,e,n.translation))," "),i(3),z(n.items)}}function At(t,a){if(t&1&&c(0,Lt,10,10,"section",0),t&2){let e=o();s(e.items?0:-1)}}function qt(t,a){if(t&1&&c(0,At,1,1),t&2){let e,n=o();s((e=n.langSig())?0:-1,e)}}var st=(()=>{class t{constructor(){this._menuService=v(b),this.section=P.required(),this.langSig=this._menuService.lang}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template2-section"]],inputs:{section:[1,"section"]},standalone:!0,features:[x],decls:1,vars:1,consts:[[1,"w-100","border","border-1","border-dark","rounded-3",3,"id"],[1,"section-container","pt-2"],[1,"img-container","my-2","pb-1","pt-4","px-3","mx-auto"],[1,"d-flex","align-items-center","justify-content-center","text-break","title","mx-sm-3","mx-2","border","border-1","border-dark","rounded-1",3,"ngClass"],[1,"text-break","text-light","h2","py-3","underline"],[1,"item","p-2","mt-1"],["dir-menu-image-preload","",1,"rounded-3",3,"src","alt"],[3,"item"]],template:function(n,p){if(n&1&&c(0,qt,1,1),n&2){let g;s((g=p.section())?0:-1,g)}},dependencies:[F,S,Y,O,I,ct],styles:["section[_ngcontent-%COMP%]{background-color:var(--t2-section-bg-color);overflow:hidden}.section-container[_ngcontent-%COMP%]{animation:close 1s ease-in-out}.section-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{background:var(--t2-section-btn-bg-color)}.section-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{text-align:center;max-width:300px;max-height:300px}.section-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100vb;max-width:100%;max-height:270px}.item[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"],changeDetection:0})}}return t})();var J=t=>({menu:t});function Rt(t,a){t&1&&H(0)}function Wt(t,a){if(t&1&&c(0,Rt,1,0,"ng-container",8),t&2){let e=o();o();let n=A(5);m("ngTemplateOutlet",n)("ngTemplateOutletContext",R(2,J,e))}}function Yt(t,a){t&1&&H(0)}function $t(t,a){if(t&1&&c(0,Yt,1,0,"ng-container",8),t&2){let e=o();o();let n=A(3);m("ngTemplateOutlet",n)("ngTemplateOutletContext",R(2,J,e))}}function Gt(t,a){t&1&&(r(0,"div",6),d(1,"ks-solutions-template2-floating-btns"),l())}function Jt(t,a){if(t&1&&(r(0,"div",3)(1,"div",4)(2,"div",5),d(3,"ks-solutions-template2-header"),c(4,Wt,1,4,"ng-container")(5,$t,1,4,"ng-container")(6,Gt,2,0,"div",6),l(),d(7,"ks-solutions-template2-footer",7),l()()),t&2){let e=a,n=o(2);i(4),s(e.store.aboutUs?5:4),i(2),s(n.showFloatSig()?6:-1),i(),m("store",e.store)}}function Kt(t,a){t&1&&H(0)}function Qt(t,a){if(t&1&&c(0,Kt,1,0,"ng-container",8),t&2){let e=o(2).menu;o();let n=A(5);m("ngTemplateOutlet",n)("ngTemplateOutletContext",R(2,J,e))}}function Xt(t,a){if(t&1&&(r(0,"div",11)(1,"div",12),u(2),_(3,"kssTranslate"),l()()),t&2){let e=o(2).menu,n=o();i(),m("ngClass",n==="ar"?"text-end ":"text-start"),i(),C(" ",y(3,2,e.store.aboutUs,n,e.store.aboutUsTranslation)," ")}}function Zt(t,a){if(t&1){let e=L();r(0,"div",9)(1,"button",10),M("click",function(){D(e);let p=o(3);return B(p.toggleView("menu"))}),u(2),_(3,"kssStaticTranslate"),_(4,"kssCapitalize"),l(),r(5,"button",10),M("click",function(){D(e);let p=o(3);return B(p.toggleView("about"))}),u(6),_(7,"kssStaticTranslate"),_(8,"kssCapitalize"),l()(),c(9,Qt,1,4,"ng-container")(10,Xt,4,6,"div",11)}if(t&2){let e=a,n=o(2);m("ngClass",n==="ar"?"flex-row-reverse":""),i(),m("ngClass",e==="menu"?"text-primary":"text-light"),i(),C(" ",T(4,9,w(3,6,"menu",n))," "),i(3),m("ngClass",e==="about"?"text-primary":"text-light"),i(),C(" ",T(8,14,w(7,11,"about us",n))," "),i(3),s(e==="menu"?9:e==="about"?10:-1)}}function te(t,a){if(t&1&&c(0,Zt,11,16),t&2){let e,n=o(2);s((e=n.chosenViewSig())?0:-1,e)}}function ee(t,a){if(t&1&&(r(0,"div",15),d(1,"ks-solutions-template2-section",16),l()),t&2){let e=a.$implicit;i(),m("section",e)}}function ne(t,a){if(t&1&&(r(0,"div",13),d(1,"ks-solutions-template1-btn-grp",14),l(),V(2,ee,2,1,"div",15,N)),t&2){let e=a.menu;i(),m("sections",e.sub_categories),i(),z(e.sub_categories)}}function ie(t,a){if(t&1&&(r(0,"div",2),c(1,Jt,8,3,"div",3),l(),c(2,te,1,1,"ng-template",null,0,G)(4,ne,4,1,"ng-template",null,1,G)),t&2){let e,n=o();i(),s((e=n.menuSig())?1:-1,e)}}var ln=(()=>{class t{constructor(){this._menuService=v(b),this.menuSig=this._menuService.menu,this.langSig=this._menuService.lang,this.showFloatSig=$(!1),this.chosenViewSig=$("menu")}ngOnInit(){let e=window.innerHeight*.1;window.addEventListener("scroll",()=>{window.pageYOffset>=e?this.showFloatSig.set(!0):this.showFloatSig.set(!1)})}toggleView(e){this.chosenViewSig.set(e)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=f({type:t,selectors:[["ks-solutions-template-2"]],standalone:!0,features:[x],decls:1,vars:1,consts:[["WITH_ABOUT",""],["MENU",""],[1,"template-2-container"],[1,"menu-container","mx-auto"],[1,"d-flex","h-100","flex-column","justify-content-between"],[1,"mb-4"],[1,"floating-btns-container"],[3,"store"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"w-100","d-flex","align-items-center","justify-content-center","gap-3","p-3","flex-wrap",3,"ngClass"],[1,"h5","pointer","menu-tag",3,"click","ngClass"],[1,"mb-5","pb-3","mx-2"],[1,"text-light","text-break","border","border-1","border-secondary","rounded-3","p-3",3,"ngClass"],[1,"px-1","btn-grp-container"],[3,"sections"],[1,"p-3"],[3,"section"]],template:function(n,p){if(n&1&&c(0,ie,6,1),n&2){let g;s((g=p.langSig())?0:-1,g)}},dependencies:[S,O,nt,I,E,K,at,st,rt,lt,ot],styles:[".template-2-container[_ngcontent-%COMP%]{background-color:var(--t2-bg-color)}.template-2-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]{min-height:100vh;position:relative;max-width:var(--t2-max-width)}.template-2-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .btn-grp-container[_ngcontent-%COMP%]{position:sticky;top:-1px;z-index:1}.template-2-container[_ngcontent-%COMP%]   .menu-container[_ngcontent-%COMP%]   .floating-btns-container[_ngcontent-%COMP%]{position:fixed;bottom:27px;left:0;right:0;z-index:2}.template-2-container[_ngcontent-%COMP%]   .menu-tag[_ngcontent-%COMP%]{border:none;padding:none;background:inherit;margin:none}"],changeDetection:0})}}return t})();export{ln as Template2Component};