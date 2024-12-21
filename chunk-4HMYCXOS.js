import{a as A}from"./chunk-3SSBONDS.js";import{a as I}from"./chunk-RN7YLSYN.js";import{a as R}from"./chunk-QDVNWT35.js";import{a as o}from"./chunk-YG3ZRH6R.js";import{a as $}from"./chunk-WJCZMWTI.js";import"./chunk-HMNUYURD.js";import{a as k}from"./chunk-WQQRSZMJ.js";import{M as g,_ as C,ba as w,sa as E}from"./chunk-TNID6TGJ.js";import"./chunk-CARY4E7O.js";import"./chunk-COU37GAH.js";import{Fa as v,Hb as h,N as n,Nb as f,Ub as _,a,bc as y,ea as p,ka as s,n as d,o as l,oa as m,sb as u,uc as x,vc as b,zb as S}from"./chunk-ZZEMHH24.js";var c=(()=>{class t{constructor(){this._networkService=s(w),this._service$=new l([]),this.service$=this._service$.asObservable()}getAllServices(){this._networkService.get(o.SERVICES.service).pipe(n(1)).subscribe({next:e=>{e&&e.data&&this._service$.next(e.data)}})}addService(e){return this._networkService.post(o.SERVICES.service,e)}updateService(e){return this._networkService.patch(o.SERVICES.service,e,e._id)}deleteService(e){this._networkService.delete(o.SERVICES.service,void 0,e._id).pipe(n(1)).subscribe({next:()=>{this._updateServices(e,"delete")}})}_updateServices(e,i){A.UpdateArrayBehaviorSubject(this._service$,e,i)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=p({token:t,factory:t.\u0275fac})}}return t})();function N(t,T){if(t&1&&_(0,"ks-basic-grid",0),t&2){let e=y();h("config",e.gridConfig)("refresh$",e.refresh$)}}var Y=(()=>{class t{constructor(){this._destroyRef=s(v),this._navService=s(k),this._lovService=s(R),this._dialog=s(C),this._servicesService=s(c),this._data=[],this._currentScreen=$("services_listing"),this.refresh$=new d}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Create New"},prefixIcon:{icon:"icon_plus_circle"},hide:!this._currentScreen.insert,onClick:()=>{this._openService()}}]}),this._servicesService.getAllServices(),this._initializeGrid(),this._servicesService.service$.pipe(g(this._destroyRef)).subscribe(e=>{this._data=e,this.refresh$.next({data:this._data})})}_initializeGrid(){this.gridConfig={data:u([]),defaultPagination:100,maxTableHeight:I.maxTableHeightWithSearch,noDataMessage:{text:"No Items Found"},features:{showSearch:!0,trackChanges:!0},elevation:2,columns:[{field:"name",title:"Name",type:"string",extraStyles:{"min-width":"250px"}},{field:"type",title:"Service Type",type:"string",extraStyles:{"min-width":"150px"}},{field:"ownerId",title:"Owner",type:"select",stream:{name:"name",value:"_id",stream:this._lovService.userLov$},extraStyles:{"min-width":"200px"}},{field:"url",title:"Service Url",type:"string",extraStyles:{"min-width":"250px"}},{field:"createdAt",title:"Created At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"180px"}},{field:"updatedAt",title:"Updated At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"180px"}}],actionsColumn:{enabled:this._currentScreen.update||this._currentScreen.delete,maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:e=>this._openService(e),isVisibleFn:()=>this._currentScreen.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteService(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_openService(e){let i={title:{text:e?"Edit Service":"Add Service"},form:{value:e,fields:[{name:"name",type:"text",label:{text:"Service Name"},required:!0},{name:"type",type:"select",label:{text:"Service Type"},options:["bms","rms","static_menu"].map(r=>({name:r,value:r})),required:!0},{name:"url",type:"text",label:{text:"Service Url"},required:!0,minLength:4},{name:"ownerId",type:"autocomplete",label:{text:"Service Owner"},transformer:{nameKey:"name",valueKey:"_id"},stream:this._lovService.userLov$,required:!0},{name:"editorsId",type:"select",label:{text:"Editors"},transformer:{nameKey:"name",valueKey:"_id"},multiple:!0,stream:this._lovService.userLov$}]},beforeCloseObservable:r=>e?this._servicesService.updateService(a(a({},e),r)):this._servicesService.addService(r),getAfterSuccessResponse:r=>{r.data&&this._servicesService._updateServices(r.data,e?"edit":"add")}};this._dialog.openFormPopup(i,"1000px")}_deleteService(e){let i={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this service?"}};this._dialog.openConfirmPopup(i).afterClosed().pipe(n(1)).subscribe(r=>{r&&e?._id&&this._servicesService.deleteService(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=m({type:t,selectors:[["ks-solutions-services-listing"]],standalone:!0,features:[x([c]),b],decls:1,vars:1,consts:[[3,"config","refresh$"]],template:function(i,r){i&1&&S(0,N,1,2,"ks-basic-grid",0),i&2&&f(r.gridConfig?0:-1)},dependencies:[E],changeDetection:0})}}return t})();export{Y as ServiceComponent};
