import{a as Y}from"./chunk-U5RD573Z.js";import{a as U}from"./chunk-5BWCYXSX.js";import{a as G}from"./chunk-HOXU4Y25.js";import{a as W}from"./chunk-JDEWHVZM.js";import"./chunk-HMNUYURD.js";import{a}from"./chunk-VMV3LQCJ.js";import{a as B}from"./chunk-VL4WVYQ7.js";import{C as D,G as $,O as h,aa as T,da as L,fa as O,ga as j,pa as H,va as K}from"./chunk-OMSYFKJ3.js";import"./chunk-CARY4E7O.js";import"./chunk-Z72V5FLM.js";import{Ac as E,Fa as g,Hb as u,N as o,Nb as k,Oc as A,Sb as P,Tb as I,Ub as m,a as d,bc as N,ea as y,hb as l,ka as s,n as _,o as x,oa as b,sb as C,uc as F,vc as M,wc as p,y as v,yc as R,zb as w}from"./chunk-P5AQMEDB.js";var f=(()=>{class i{constructor(){this._networkService=s(L),this._permissions=new x([]),this.permissions$=this._permissions.asObservable()}getAllPermissions(e){this._networkService.get(a.PERMISSIONS.permissions,e).pipe(o(1)).subscribe({next:t=>{t&&t.data&&this._permissions.next(t.data)}})}addPermission(e){return this._networkService.post(a.PERMISSIONS.permission,e)}updatePermission(e){return this._networkService.patch(a.PERMISSIONS.permission,e,e._id)}deletePermission(e){this._networkService.delete(a.PERMISSIONS.permission,void 0,e._id).pipe(o(1)).subscribe({next:()=>{this._updateMenus(e,"delete")}})}_updateMenus(e,t){Y.UpdateArrayBehaviorSubject(this._permissions,e,t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=y({token:i,factory:i.\u0275fac})}}return i})();var J=()=>[],Q=()=>({text:"Role"}),X=()=>({valueKey:"value",nameKey:"name"}),Z=(i,c)=>({stream:i,transformer:c}),ee=(i,c,e,t)=>({options:i,control:c,label:e,stream:t,hideClearButton:!0});function te(i,c){if(i&1&&m(0,"ks-basic-grid",2),i&2){let e=N();u("config",e.gridConfig)("refresh$",e.refresh$)}}var be=(()=>{class i{constructor(){this._destroyRef=s(g),this._navService=s(B),this._cdr=s(A),this._dialog=s(T),this._snackbar=s(O),this._lovService=s(G),this._permissionService=s(f),this._currentScreen=W("permissions_listing"),this._data=[],this.roles$=this._lovService.rolesLov$,this.roleControl=new $("",[D.required]),this.refresh$=new _}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Create New"},prefixIcon:{icon:"icon_plus_circle"},hide:!this._currentScreen.insert,onClick:()=>{this._openMenu()}}]}),this._lovService.getRolesLov(),this._lovService.getScreensLov(),this.roleControl.valueChanges.pipe(h(this._destroyRef)).subscribe(e=>{e&&this._permissionService.getAllPermissions(e)}),this._initializeGrid(),this._permissionService.permissions$.pipe(h(this._destroyRef)).subscribe(e=>{this._data=e,this.refresh$.next({data:this._data})})}_initializeGrid(){this.gridConfig={data:C([]),defaultPagination:100,maxTableHeight:U.maxTableHeightWithSearch,noDataMessage:{text:"No Permissions Found"},features:{showSearch:!1,trackChanges:!0},elevation:2,columns:[{field:"screen",title:"Screen",type:"select",stream:{name:"screenName",value:"name",stream:this._lovService.screensLov$},extraStyles:{"min-width":"150px"}},{field:"search",title:"Search",type:"chip",extraStyles:{width:"120px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.search===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"insert",title:"Insert",type:"chip",extraStyles:{width:"120px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.insert===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"update",title:"Update",type:"chip",extraStyles:{width:"120px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.update===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"delete",title:"Delete",type:"chip",extraStyles:{width:"120px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.delete===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"createdAt",title:"Created At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"170px"}},{field:"updatedAt",title:"Last Updated At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"170px"}}],actionsColumn:{enabled:this._currentScreen.update||this._currentScreen.delete,maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:e=>this._openMenu(e),isVisibleFn:()=>this._currentScreen.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteInventory(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_openMenu(e){let t=this.roleControl.value;if(!t){this._snackbar.open({text:"You need to select a role first!"},"error"),j(this.roleControl),this._cdr.markForCheck();return}this._permissionService.permissions$.pipe(o(1)).subscribe(n=>{let q=n.map(r=>r.screen),z={title:{text:e?"Edit Permission":"Add Permission"},form:{value:d({search:!0,insert:!0,update:!0,delete:!0},e||{}),fields:[{name:"screen",label:{text:"Screen"},type:"select",transformer:{nameKey:"screenName",valueKey:"name"},stream:this._lovService.screensLov$.pipe(v(r=>r.filter(S=>!q.includes(S.name)||e&&e.screen===S.name))),required:!0},{name:"search",label:{text:"Search"},type:"checkbox"},{name:"insert",label:{text:"Insert"},type:"checkbox"},{name:"update",label:{text:"Update"},type:"checkbox"},{name:"delete",label:{text:"Delete"},type:"checkbox"}]},beforeCloseObservable:r=>(r&&(r.role=t),e?this._permissionService.updatePermission(d(d({},e),r)):this._permissionService.addPermission(r)),getAfterSuccessResponse:r=>{r.data&&this._permissionService._updateMenus(r.data,e?"edit":"add")}};this._dialog.openFormPopup(z,"500px")})}_deleteInventory(e){let t={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this permission?"}};this._dialog.openConfirmPopup(t).afterClosed().pipe(o(1)).subscribe(n=>{n&&e?._id&&this._permissionService.deletePermission(e)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=b({type:i,selectors:[["ks-solutions-permissions-listing"]],standalone:!0,features:[F([f]),M],decls:3,vars:13,consts:[[2,"max-width","400px"],[3,"config"],[3,"config","refresh$"]],template:function(t,n){t&1&&(P(0,"div",0),m(1,"ks-base-select",1),I(),w(2,te,1,2,"ks-basic-grid",2)),t&2&&(l(),u("config",E(8,ee,p(2,J),n.roleControl,p(3,Q),R(5,Z,n.roles$,p(4,X)))),l(),k(n.gridConfig?2:-1))},dependencies:[K,H],changeDetection:0})}}return i})();export{be as PermissionsComponent};
