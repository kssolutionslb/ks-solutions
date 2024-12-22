import{a as N}from"./chunk-3SSBONDS.js";import{a as E}from"./chunk-RN7YLSYN.js";import{a as A}from"./chunk-STDJW5YO.js";import{a as s}from"./chunk-M5ITMDMQ.js";import{a as P}from"./chunk-RP3GL3LT.js";import"./chunk-HMNUYURD.js";import{a as I}from"./chunk-ADGIJ6OL.js";import{M as S,_ as w,ba as C,sa as M}from"./chunk-OXQU6EVE.js";import"./chunk-CARY4E7O.js";import"./chunk-SWSILSZJ.js";import{Fa as c,Hb as f,N as a,Nb as y,Ub as g,a as o,bc as v,ea as m,ka as r,n as d,o as u,oa as p,sb as h,uc as _,vc as b,zb as x}from"./chunk-ZZEMHH24.js";var l=(()=>{class t{constructor(){this._networkService=r(C),this._menus$=new u([]),this.menus$=this._menus$.asObservable()}getAllMenus(){this._networkService.get(s.MENU_PANEL.menus).pipe(a(1)).subscribe({next:e=>{e&&e.data&&this._menus$.next(e.data)}})}addMenu(e){return this._networkService.post(s.MENU_PANEL.menus,e)}updateMenu(e){return this._networkService.patch(s.MENU_PANEL.menus,e,e._id)}deleteMenu(e){this._networkService.delete(s.MENU_PANEL.menus,void 0,e._id).pipe(a(1)).subscribe({next:()=>{this._updateMenus(e,"delete")}})}_updateMenus(e,i){N.UpdateArrayBehaviorSubject(this._menus$,e,i)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=m({token:t,factory:t.\u0275fac})}}return t})();function R(t,T){if(t&1&&g(0,"ks-basic-grid",0),t&2){let e=v();f("config",e.gridConfig)("refresh$",e.refresh$)}}var X=(()=>{class t{constructor(){this._destroyRef=r(c),this._navService=r(I),this._lovService=r(A),this._dialog=r(w),this._menuPanelService=r(l),this._data=[],this._currentScreen=P("menus_listing"),this.refresh$=new d}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Create New"},prefixIcon:{icon:"icon_plus_circle"},hide:!this._currentScreen.insert,onClick:()=>{this._openMenu()}}]}),this._lovService.getMenuTemplatesLov(),this._menuPanelService.getAllMenus(),this._initializeGrid(),this._menuPanelService.menus$.pipe(S(this._destroyRef)).subscribe(e=>{this._data=e,this.refresh$.next({data:this._data})})}_initializeGrid(){this.gridConfig={data:h([]),defaultPagination:100,maxTableHeight:E.maxTableHeightWithSearch,noDataMessage:{text:"No Items Found"},features:{showSearch:!0,trackChanges:!0},elevation:2,columns:[{field:"name",title:"Name",type:"string",extraStyles:{"min-width":"120px"}},{field:"endpoint",title:"Endpoint",type:"string",extraStyles:{"min-width":"100px"}},{field:"redirect",title:"Redirect",type:"string",extraStyles:{"min-width":"120px"}},{field:"activateRedirection",title:"Redirection",type:"chip",extraStyles:{"min-width":"100px","max-width":"100px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.activateRedirection===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"isExternal",title:"External",type:"chip",extraStyles:{"min-width":"100px","max-width":"100px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.isExternal===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"hasInvoice",title:"Has Invoice",type:"chip",extraStyles:{"min-width":"100px","max-width":"100px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.hasInvoice===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"viewCount",title:"View Count",type:"number",extraStyles:{"min-width":"100px"}},{field:"maxImagesCount",title:"Max Images",type:"number",extraStyles:{"min-width":"110px"}},{field:"ownerId",title:"Owner",type:"select",stream:{name:"name",value:"_id",stream:this._lovService.userLov$},extraStyles:{"min-width":"120px"}},{field:"templateId",title:"Template",type:"select",stream:{name:"name",value:"templateId",stream:this._lovService.menuTemplatesLov$},extraStyles:{"min-width":"120px"}},{field:"createdAt",title:"Created At",type:"date",dateFormat:"dd/MM/yyyy",extraStyles:{"min-width":"100px","max-width":"100px"}},{field:"expiresAt",title:"Expires At",type:"date",dateFormat:"dd/MM/yyyy",extraStyles:{"min-width":"100px","max-width":"100px"}}],actionsColumn:{maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",enabled:this._currentScreen.update||this._currentScreen.delete,buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:e=>this._openMenu(e),isVisibleFn:()=>this._currentScreen.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteInventory(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_openMenu(e){let i={title:{text:e?"Edit Menu":"Add Menu"},form:{groups:[{id:1,name:{text:"Credentials"},order:1}],value:o({expiresAt:new Date(new Date().getFullYear()+1,new Date().getMonth(),new Date().getDate())},e||{}),fields:[{name:"name",label:{text:"Menu Name"},type:"text",required:!0},{name:"endpoint",label:{text:"Endpoint"},type:"text",minLength:4,required:!0},{name:"ownerId",type:"autocomplete",stream:this._lovService.userLov$,label:{text:"Menu Owner"},transformer:{nameKey:"name",valueKey:"_id"},required:!0},{name:"editorsId",type:"select",label:{text:"Editors"},stream:this._lovService.userLov$,transformer:{nameKey:"name",valueKey:"_id"},multiple:!0},{name:"redirect",type:"text",label:{text:"Redirect Url"},maxLength:100},{name:"viewCount",type:"number",label:{text:"View Count"},readonly:!this._currentScreen.delete},{name:"expiresAt",type:"date",label:{text:"Expires At"},required:!0},{name:"templateId",type:"autocomplete",label:{text:"Template"},transformer:{nameKey:"name",valueKey:"templateId"},stream:this._lovService.menuTemplatesLov$,required:!0},{name:"maxImagesCount",label:{text:"Maximum Images Count"},type:"number"},{name:"activateRedirection",label:{text:"Activate Redirection"},type:"toggle"},{name:"isExternal",label:{text:"External"},type:"toggle"},{name:"hasInvoice",label:{text:"Has Invoice"},type:"toggle"},{name:"githubRepo",label:{text:"Target Github Account"},type:"text",groupId:1},{name:"filePath",label:{text:"Github Repo Name"},type:"text",groupId:1},{name:"fileName",label:{text:"FilePath & File Name"},type:"text",groupId:1},{name:"fileTemplate",label:{text:"File Template"},type:"textaria",groupId:1}]},beforeCloseObservable:n=>e?this._menuPanelService.updateMenu(o(o({},e),n)):this._menuPanelService.addMenu(n),getAfterSuccessResponse:n=>{n.data&&this._menuPanelService._updateMenus(n.data,e?"edit":"add")}};this._dialog.openFormPopup(i)}_deleteInventory(e){let i={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this menu? Deleting it will remove all associated data, including logs, categories, subcategories, items, menu information, and update logs."}};this._dialog.openConfirmPopup(i).afterClosed().pipe(a(1)).subscribe(n=>{n&&e?._id&&this._menuPanelService.deleteMenu(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=p({type:t,selectors:[["ks-solutions-menus-panel-listing"]],standalone:!0,features:[_([l]),b],decls:1,vars:1,consts:[[3,"config","refresh$"]],template:function(i,n){i&1&&x(0,R,1,2,"ks-basic-grid",0),i&2&&y(n.gridConfig?0:-1)},dependencies:[M],changeDetection:0})}}return t})();export{X as MenuPanelComponent};