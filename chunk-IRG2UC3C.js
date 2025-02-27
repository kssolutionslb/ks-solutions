import{a as K}from"./chunk-3SSBONDS.js";import{a as u}from"./chunk-X64TF3C4.js";import{a as O}from"./chunk-5GWMFGPU.js";import"./chunk-HMNUYURD.js";import{a as j}from"./chunk-NNKWD6R3.js";import{_ as A,ba as R,pa as M}from"./chunk-EYM2RH5N.js";import"./chunk-CARY4E7O.js";import"./chunk-F5WOQGUX.js";import{Dc as _,Ec as C,Fc as h,Hb as S,N as x,Nb as d,Ob as D,Qb as $,Rb as P,Sb as a,Tb as n,a as v,bc as c,bd as B,ea as E,gd as k,hb as i,id as F,ka as p,kd as w,mc as o,o as y,oa as T,oc as s,uc as I,vc as N,zb as f}from"./chunk-RQMRH3XI.js";var g=(()=>{class t{constructor(){this._networkService=p(R),this._cars$=new y([]),this.cars$=this._cars$.asObservable()}getCars(){this._networkService.get(u.CARS.cars).pipe(x(1)).subscribe(e=>{e.data&&this._cars$.next(e.data)})}addCar(e){return this._networkService.post(u.CARS.cars,e)}updateCar(e){return this._networkService.patch(u.CARS.cars,e,e._id)}deleteCar(e){this._networkService.delete(u.CARS.cars,e,e._id).pipe(x(1)).subscribe(r=>{r&&this.$updateCars(e,"delete")})}$updateCars(e,r){K.UpdateArrayBehaviorSubject(this._cars$,e,r)}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();function U(t,l){if(t&1&&(a(0,"div",7)(1,"strong"),o(2,"Status:"),n(),a(3,"span",9),o(4),n()()),t&2){let e=c().$implicit;i(3),S("ngClass",e.isSold?"bg-success":"bg-warning"),i(),s(" ",e.isSold?"Sold":"Available"," ")}}function G(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Profit/Loss:"),n(),o(3),_(4,"currency"),n()),t&2){let e=c().$implicit;i(3),s(" ",C(4,1,e.pl)," ")}}function H(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Total Cost:"),n(),o(3),_(4,"currency"),n()),t&2){let e=c().$implicit;i(3),s(" ",C(4,1,e.totalCost)," ")}}function V(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Bought At:"),n(),o(3),_(4,"date"),n()),t&2){let e=c().$implicit;i(3),s(" ",h(4,1,e.boughtDate,"dd MMM yyyy")," ")}}function q(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Sold At:"),n(),o(3),_(4,"date"),n()),t&2){let e=c().$implicit;i(3),s(" ",h(4,1,e.sellDate,"dd MMM yyyy")," ")}}function z(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Bought Price:"),n(),o(3),_(4,"currency"),n()),t&2){let e=c().$implicit;i(3),s(" ",C(4,1,e.boughtPrice)," ")}}function J(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Sold Price:"),n(),o(3),_(4,"currency"),n()),t&2){let e=c().$implicit;i(3),s(" ",C(4,1,e.sellPrice)," ")}}function Q(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Deal Type:"),n(),o(3),n()),t&2){let e=c().$implicit;i(3),s(" ",e.dealType," ")}}function W(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Seller Name:"),n(),o(3),n()),t&2){let e=c().$implicit;i(3),s(" ",e.sellerName," ")}}function X(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Seller Contact:"),n(),o(3),n()),t&2){let e=c().$implicit;i(3),s(" ",e.sellerContact," ")}}function Y(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Buyer Name:"),n(),o(3),n()),t&2){let e=c().$implicit;i(3),s(" ",e.buyerName," ")}}function Z(t,l){if(t&1&&(a(0,"div",8)(1,"strong"),o(2,"Buyer Contact:"),n(),o(3),n()),t&2){let e=c().$implicit;i(3),s(" ",e.buyerContact," ")}}function ee(t,l){if(t&1&&(a(0,"div",7)(1,"strong"),o(2,"Notes:"),n(),o(3),n()),t&2){let e=c().$implicit;i(3),s(" ",e.notes," ")}}function te(t,l){if(t&1&&(a(0,"div",2)(1,"div",3)(2,"ks-base-card",4)(3,"div",5)(4,"div",6),f(5,U,5,2,"div",7)(6,G,5,3,"div",8)(7,H,5,3,"div",8)(8,V,5,4,"div",8)(9,q,5,4,"div",8)(10,z,5,3,"div",8)(11,J,5,3,"div",8)(12,Q,4,1,"div",8)(13,W,4,1,"div",8)(14,X,4,1,"div",8)(15,Y,4,1,"div",8)(16,Z,4,1,"div",8)(17,ee,4,1,"div",7),n()()()()()),t&2){let e=l.$implicit,r=c(3);i(2),S("config",r.getCardConfig(e)),i(3),d(e.isSold!==null?5:-1),i(),d(e.pl!==void 0&&e.pl!==null&&e.isSold?6:-1),i(),d(e.totalCost!==void 0&&e.totalCost!==null?7:-1),i(),d(e.boughtDate?8:-1),i(),d(e.sellDate&&e.isSold?9:-1),i(),d(e.boughtPrice!==void 0&&e.boughtPrice!==null?10:-1),i(),d(e.sellPrice!==void 0&&e.sellPrice!==null&&e.isSold?11:-1),i(),d(e.dealType?12:-1),i(),d(e.sellerName?13:-1),i(),d(e.sellerContact?14:-1),i(),d(e.buyerName&&e.isSold?15:-1),i(),d(e.buyerContact&&e.isSold?16:-1),i(),d(e.notes?17:-1)}}function ie(t,l){if(t&1&&(a(0,"div",1),$(1,te,18,14,"div",2,D),n()),t&2){let e=c();i(),P(e)}}function ne(t,l){t&1&&f(0,ie,3,0,"div",1),t&2&&d(l.length?0:-1)}var he=(()=>{class t{constructor(){this._dialog=p(A),this._carsService=p(g),this._navService=p(j),this._currentScreen=O("cars_listing"),this.cars$=this._carsService.cars$}ngOnInit(){this._carsService.getCars(),this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Create New"},prefixIcon:{icon:"icon_plus_circle"},hide:!this._currentScreen.insert,onClick:()=>{this._openCarDialog()}}]})}getCardConfig(e){return{header:{title:{text:e.carName,tag:"h4",translate:!1,addClass:"pt-3"}},footer:{buttons:[{label:{text:"Edit"},prefixIcon:{icon:"icon_edit"},onClick:()=>{this._openCarDialog(e)}},{label:{text:"Delete"},prefixIcon:{icon:"icon_delete"},color:"warn",onClick:()=>{this._deleteCar(e)}}],position:"end"},addClass:"h-100"}}_openCarDialog(e){let r={hideClearButton:!0,title:{text:e?"Edit Car":"Add Car"},form:{value:v({isSold:!1,boughtDate:new Date},e||{}),fields:[{name:"carName",label:{text:"Car Name"},type:"text"},{name:"boughtPrice",label:{text:"Bought Price"},type:"number"},{name:"boughtDate",label:{text:"Bought Date"},type:"date"},{name:"sellPrice",label:{text:"Sold Price"},type:"number"},{name:"sellDate",label:{text:"Sold Date"},type:"date"},{name:"buyerName",label:{text:"Buyer Name"},type:"text"},{name:"buyerContact",label:{text:"Buyer Contact"},type:"textaria"},{name:"sellerName",label:{text:"Seller Name"},type:"text"},{name:"sellerContact",label:{text:"Seller Contact"},type:"textaria"},{name:"notes",label:{text:"Notes"},type:"textaria"},{name:"dealType",label:{text:"Deal Type"},type:"autocomplete",flexibleValue:!0,options:[{name:"Cash",value:"Cash"},{name:"Dekishe",value:"Dekishe"}]},{name:"isSold",label:{text:"Is Sold"},type:"checkbox"}]},beforeCloseObservable:m=>e?this._carsService.updateCar(v(v({},e),m)):this._carsService.addCar(m),getAfterSuccessResponse:m=>{m.data&&this._carsService.$updateCars(m.data,e?"edit":"add")}};this._dialog.openFormPopup(r,"900px")}_deleteCar(e){let r={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this car?"}};this._dialog.openConfirmPopup(r).afterClosed().pipe(x(1)).subscribe(m=>{m&&e?._id&&this._carsService.deleteCar(e)})}static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275cmp=T({type:t,selectors:[["ks-solutions-cars"]],standalone:!0,features:[I([g]),N],decls:3,vars:3,consts:[[1,"container-fluid","my-5"],[1,"row"],[1,"col-12","col-sm-6","col-md-6","col-lg-4","col-xl-3","mb-4"],[1,"cs-card","h-100","shadow-sm","border","border-1","rounded-2"],[3,"config"],[1,"container"],[1,"row","gy-2"],[1,"col-12"],[1,"col-12","col-md-6"],[1,"badge",3,"ngClass"]],template:function(r,m){if(r&1&&(a(0,"div",0),f(1,ne,1,1),_(2,"async"),n()),r&2){let b;i(),d((b=C(2,1,m.cars$))?1:-1,b)}},dependencies:[k,M,F,w,B],styles:[".cs-card[_ngcontent-%COMP%]{transition:transform .3s}"],changeDetection:0})}}return t})();export{he as CarsComponent};
