import{a as S}from"./chunk-EDHW7UVH.js";import{a as A}from"./chunk-ERG5Z3O3.js";import"./chunk-V3RKPLKU.js";import{a as x}from"./chunk-O6Z6ZKPB.js";import"./chunk-5YWUWVK4.js";import{a as H}from"./chunk-DDY2ZFNV.js";import{da as k,ja as F}from"./chunk-E5MLKHCJ.js";import"./chunk-CARY4E7O.js";import"./chunk-ARNZMF2R.js";import{Dc as g,Ec as y,Hb as m,Nb as c,Ob as f,Qb as v,Rb as C,Sb as r,Tb as s,Ub as d,bc as l,gd as $,hb as o,ka as u,oa as E,uc as M,vc as h,wc as p,x as _,zb as a}from"./chunk-42PURYOY.js";var I=()=>({text:"Menus",tag:"h2",fontWeight:"500",case:"titlecase"}),B=()=>({text:"Services",tag:"h2",fontWeight:"500",case:"titlecase"}),N=e=>({text:e,tag:"h4"}),D=e=>({title:e}),P=e=>({addClass:"h-100",header:e});function U(e,i){if(e&1&&(r(0,"div",3)(1,"div",4),d(2,"ks-base-card",5),s()()),e&2){let t=l().$implicit,n=l(3);o(2),m("config",n.getCardConfig(t))}}function w(e,i){if(e&1&&a(0,U,3,1,"div",3),e&2){let t=i.$implicit;c(t.type==="menu"?0:-1)}}function O(e,i){if(e&1&&(d(0,"ks-base-label",1),r(1,"div",2),v(2,w,1,1,null,null,f),s()),e&2){let t=l();m("config",h(1,I)),o(2),C(t)}}function R(e,i){e&1&&a(0,O,4,2),e&2&&c(i.length?0:-1)}function G(e,i){if(e&1&&(r(0,"div",3)(1,"div",4),d(2,"ks-base-card",5),s()()),e&2){let t=l().$implicit;o(2),m("config",p(5,P,p(3,D,p(1,N,t.name))))}}function W(e,i){if(e&1&&a(0,G,3,7,"div",3),e&2){let t=i.$implicit;c(t.type==="service"?0:-1)}}function Y(e,i){if(e&1&&(r(0,"div",6),d(1,"ks-base-label",1),r(2,"div",2),v(3,W,1,1,null,null,f),s()()),e&2){let t=l();o(),m("config",h(1,B)),o(2),C(t)}}function j(e,i){e&1&&a(0,Y,5,2,"div",6),e&2&&c(i.length?0:-1)}var ne=(()=>{class e{constructor(){this._navService=u(H),this._lovService=u(A),this._servicesAndMenus$=this._lovService.menusAndServicesLov$,this._menuSettingsScreen=x("menu_settings").fullPath,this._menuCrudScreen=x("menu_crud").fullPath,this.menus$=this._servicesAndMenus$.pipe(_(t=>t.filter(n=>n.type==="menu"))),this.services$=this._servicesAndMenus$.pipe(_(t=>t.filter(n=>n.type==="service")))}ngOnInit(){this._lovService.getMenusAndServicesLov(),this._navService.updateNav({show:!1,back:!1})}getCardConfig(t){return{header:{title:{text:t.name,tag:"h4",translate:!1},suffixButton:this._menuSettingsScreen?{label:{text:"Settings"},prefixIcon:{icon:"icon_settings"},matType:"mat-icon-button",onClick:()=>{this._navService.navigateTo(S.LAYOUT.children.MENU_SETTINGS.route,{MenuId:t._id})}}:void 0},footer:{buttons:this._menuCrudScreen?[{label:{text:"Edit Menu Data"},matType:"mat-stroked-button",prefixIcon:{icon:"icon_edit"},onClick:()=>{this._navService.navigateTo(S.LAYOUT.children.MENU.route,{MenuId:t._id})}}]:[],position:"end"},addClass:"h-100"}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=E({type:e,selectors:[["ks-solutions-layout-home-page"]],standalone:!0,features:[M],decls:5,vars:6,consts:[[1,"container","my-5"],[1,"text-center",3,"config"],[1,"row"],[1,"col-md-4","mb-4"],[1,"cs-card","h-100","shadow-sm","border","border-1","rounded-2"],[3,"config"],[1,"mt-3"]],template:function(n,T){if(n&1&&(r(0,"div",0),a(1,R,1,1),g(2,"async"),a(3,j,1,1),g(4,"async"),s()),n&2){let b,L;o(),c((b=y(2,2,T.menus$))?1:-1,b),o(2),c((L=y(4,4,T.services$))?3:-1,L)}},dependencies:[$,k,F],styles:[".cs-card[_ngcontent-%COMP%]{transition:transform .3s}"],changeDetection:0})}}return e})();export{ne as LayoutHomeComponent};
