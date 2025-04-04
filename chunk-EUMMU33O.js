import{a as $}from"./chunk-JHOHYJWD.js";import{a as T}from"./chunk-5BWCYXSX.js";import{a as F}from"./chunk-JDEWHVZM.js";import"./chunk-HMNUYURD.js";import{a}from"./chunk-V5UEVI2V.js";import{a as O}from"./chunk-VL4WVYQ7.js";import{O as D,aa as A,da as N,va as P}from"./chunk-OMSYFKJ3.js";import"./chunk-CARY4E7O.js";import"./chunk-Z72V5FLM.js";import{$b as w,Fa as g,Hb as x,N as i,Nb as b,Sb as C,Tb as E,Tc as k,Yb as y,bc as c,ea as f,ka as s,n as p,o as h,oa as m,sb as l,uc as v,vc as R,ya as u,za as _,zb as S}from"./chunk-P5AQMEDB.js";var d=(()=>{class r{constructor(){this._networkService=s(N),this._errors=new h([]),this.errors$=this._errors.asObservable()}getAllErrors(){this._networkService.get(a.ERRORS.error).pipe(i(1)).subscribe({next:e=>{e&&e.data&&this._errors.next(e.data)}})}deleteError(e){this._networkService.delete(a.ERRORS.error,void 0,e._id).pipe(i(1)).subscribe({next:()=>{this._updateMenus(e,"delete")}})}deleteAllErrors(){this._networkService.delete(a.ERRORS.error).pipe(i(1)).subscribe({next:()=>{this._errors.next([])}})}deleteSelectedErrors(e){this._networkService.delete(a.ERRORS.selectedErrors,{ids:e.map(t=>t._id)}).pipe(i(1)).subscribe({next:()=>{this._updateMenus(e,"delete")}})}_updateMenus(e,t){$.UpdateArrayBehaviorSubject(this._errors,e,t,"_id")}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275prov=f({token:r,factory:r.\u0275fac})}}return r})();function j(r,V){if(r&1){let e=y();C(0,"ks-basic-grid",1),w("selectionChange",function(o){u(e);let n=c();return _(n.selectionChange(o))}),E()}if(r&2){let e=c();x("config",e.gridConfig)("refresh$",e.refresh$)}}var ie=(()=>{class r{constructor(){this._destroyRef=s(g),this._navService=s(O),this._dialog=s(A),this._currentScreen=F("errors_listing"),this._data=[],this._selectedErrors=[],this._errorService=s(d),this._showDeleteAll=l(!1),this.refresh$=new p}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Delete Selected"},prefixIcon:{icon:"icon_delete_filled"},show:k(()=>this._currentScreen.delete&&this._showDeleteAll()),onClick:()=>{this._deleteSelectedErrors()}}]}),this._errorService.getAllErrors(),this._initializeGrid(),this._errorService.errors$.pipe(D(this._destroyRef)).subscribe(e=>{this._data=e,this.refresh$.next({data:this._data})})}selectionChange(e){this._showDeleteAll.set(!!e.length),this._selectedErrors=e}_initializeGrid(){this.gridConfig={multiSelect:this._currentScreen.delete,data:l([]),defaultPagination:150,maxTableHeight:T.maxTableHeightWithSearch,noDataMessage:{text:"No Errors Found"},features:{showSearch:!0},elevation:2,columns:[{field:"api",title:"API",type:"string",position:"p-start",extraStyles:{"min-width":"120px"}},{field:"controller",title:"Controller",type:"string",position:"p-start",extraStyles:{"min-width":"200px"}},{field:"createdAt",title:"Date",type:"date",position:"p-start",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"180px"}},{field:"message",title:"Message",type:"number",position:"p-start",extraStyles:{"min-width":"200px"}}],actionsColumn:{maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",enabled:!0,buttons:[{prefixIcon:{icon:"icon_eye"},label:{text:"View"},onClickFn:e=>this._viewError(e),matType:"mat-icon-button",isVisibleFn:()=>!0},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteError(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_viewError(e){let t=[];try{Object.keys(e.error).forEach(n=>{let I=e.error[n];t.push(`${n} ==> ${JSON.stringify(I)}`)})}catch(n){console.log(n),t.push(JSON.stringify(e.error))}let o={title:{text:"Error"},message:{text:JSON.stringify(e.error),translate:!1},hideYesNo:!0};this._dialog.openConfirmPopup(o)}_deleteError(e){let t={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this error?"}};this._dialog.openConfirmPopup(t).afterClosed().pipe(i(1)).subscribe(o=>{o&&e&&e._id&&this._errorService.deleteError(e)})}_deleteSelectedErrors(){let e={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete all selected errors?"}};this._dialog.openConfirmPopup(e).afterClosed().pipe(i(1)).subscribe(t=>{t&&this._errorService.deleteSelectedErrors(this._selectedErrors)})}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=m({type:r,selectors:[["ks-solutions-errors-listing"]],standalone:!0,features:[v([d]),R],decls:1,vars:1,consts:[[3,"config","refresh$"],[3,"selectionChange","config","refresh$"]],template:function(t,o){t&1&&S(0,j,1,2,"ks-basic-grid",0),t&2&&b(o.gridConfig?0:-1)},dependencies:[P],changeDetection:0})}}return r})();export{ie as ErrorsComponent};
