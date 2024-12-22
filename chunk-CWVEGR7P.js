import{a as G}from"./chunk-3SSBONDS.js";import{a as E}from"./chunk-RN7YLSYN.js";import{a as H}from"./chunk-STDJW5YO.js";import{a as l}from"./chunk-M5ITMDMQ.js";import{a as R}from"./chunk-RP3GL3LT.js";import"./chunk-HMNUYURD.js";import{a as O}from"./chunk-ADGIJ6OL.js";import{M as P,Y as $,_ as U,ba as F,sa as N}from"./chunk-OXQU6EVE.js";import"./chunk-CARY4E7O.js";import"./chunk-SWSILSZJ.js";import{$b as k,Fa as y,Hb as b,N as r,Nb as C,Sb as w,Tb as D,Uc as T,Yb as L,a as n,b as h,bc as p,ea as u,ka as s,n as f,o as g,oa as _,sb as d,uc as I,vc as A,ya as S,za as x,zb as v}from"./chunk-ZZEMHH24.js";var m=(()=>{class i{constructor(){this._networkService=s(F),this._logs$=new g([]),this.logs$=this._logs$.asObservable()}getAllLogs(e){this._networkService.post(l.LOGS.byUser,e).pipe(r(1)).subscribe({next:t=>{t&&t.data&&this._logs$.next(t.data.map(o=>{let a=o.otherInformation||{},c=o.userInformation||{};return n(n(n({},o),a),c)}))}})}getAllSearchLogs(e){this._networkService.post(l.LOGS.search,e).pipe(r(1)).subscribe({next:t=>{t&&t.data&&this._logs$.next(t.data.map(o=>{let a=o.otherInformation||{},c=o.userInformation||{},M=JSON.stringify(c.utmParameters);return h(n(n(n({},o),a),c),{utmParameters:M})}))}})}deleteLogs(e){this._networkService.delete(l.LOGS.logs,void 0,e._id).pipe(r(1)).subscribe({next:()=>{this._updateLogs(e,"delete")}})}deleteSelectedLogs(e){this._networkService.delete(l.LOGS.selectedLogs,{ids:e.map(t=>t._id)}).pipe(r(1)).subscribe({next:()=>{this._updateLogs(e,"delete")}})}_updateLogs(e,t){G.UpdateArrayBehaviorSubject(this._logs$,e,t)}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275prov=u({token:i,factory:i.\u0275fac})}}return i})();function j(i,V){if(i&1){let e=L();w(0,"ks-basic-grid",1),k("selectionChange",function(o){S(e);let a=p();return x(a.selectionChange(o))}),D()}if(i&2){let e=p();b("config",e.gridConfig)("refresh$",e.refresh$)}}var de=(()=>{class i{constructor(){this._destroyRef=s(y),this._navService=s(O),this._dialog=s(U),this._logsService=s(m),this._lovService=s(H),this._data=[],this._currentScreen=R("menu_logs_listing"),this._showDeleteAll=d(!1),this._selectedLogs=[],this.refresh$=new f}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Delete Selected"},prefixIcon:{icon:"icon_delete_filled"},show:T(()=>this._currentScreen.delete&&this._showDeleteAll()),onClick:()=>{this._deleteSelectedLogs()}},{label:{text:"Advance Search"},prefixIcon:{icon:"icon_search"},onClick:()=>{this._openSearch()}}]});let e=$.getUtcDate();this._lovService.getMenusAndServicesLov(),this._logsService.getAllLogs({fromDate:e.toDate(),toDate:e.toDate()}),this._initializeGrid(),this._logsService.logs$.pipe(P(this._destroyRef)).subscribe(t=>{this._data=t,this.refresh$.next({data:this._data})})}selectionChange(e){this._showDeleteAll.set(!!e.length),this._selectedLogs=e}_initializeGrid(){this.gridConfig={multiSelect:this._currentScreen.delete,data:d([]),defaultPagination:150,maxTableHeight:E.maxTableHeightWithSearch,noDataMessage:{text:"No logs Found"},features:{showSearch:!0},elevation:2,columns:[{field:"createdAt",title:"Time",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"180px"}},{field:"_service",title:"Service",type:"string",extraStyles:{"min-width":"150px"}},{field:"uuid",title:"UUID",type:"string",extraStyles:{"min-width":"260px"}},{field:"deviceType",title:"Device Type",type:"string",position:"p-start",extraStyles:{"min-width":"110px"}},{field:"screenWidth",title:"Screen Width",type:"number",extraStyles:{"min-width":"110px"},position:"p-start"},{field:"screenHeight",title:"Screen Height",type:"number",extraStyles:{"min-width":"120px"},position:"p-start"},{field:"deviceOrientation",title:"Screen Orientation",type:"number",extraStyles:{"min-width":"140px"},position:"p-start"},{field:"ip",title:"ip",type:"string",extraStyles:{"min-width":"110px"},position:"p-start"},{field:"referrer",title:"referrer",type:"string",position:"p-start"},{field:"postal",title:"postal code",type:"string",extraStyles:{"min-width":"110px"},position:"p-start"},{field:"country_name",title:"Country",type:"string",position:"p-start"},{field:"region",title:"region",type:"string",extraStyles:{"min-width":"110px"},position:"p-start"},{field:"city",title:"city",type:"string",position:"p-start"},{field:"longitude",title:"longitude",type:"string",position:"p-start"},{field:"latitude",title:"latitude",type:"string",position:"p-start"},{field:"utc_offset",title:"timezone",type:"string",position:"p-start"},{field:"org",title:"network Provider",type:"string",position:"p-start"},{field:"userAgent",title:"User Agent",type:"string",position:"p-start",extraStyles:{"min-width":"400px","max-width":"400px"}}],actionsColumn:{enabled:!0,maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",buttons:[{prefixIcon:{icon:"icon_search"},label:{text:"Search UUID"},onClickFn:e=>this._searchUUID(e),matType:"mat-icon-button",isVisibleFn:()=>!0},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteLog(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_searchUUID(e){this.refresh$.next({data:this._data,changes:{searchText:e.uuid}})}_openSearch(){if(!this._currentScreen.search)return;let e={title:{text:"Logs Search"},saveButton:{prefixIcon:{icon:"icon_search"},label:{text:"Search"},matType:"mat-stroked-button"},form:{fields:[{name:"fromDate",label:{text:"From Date"},type:"date",required:!0,formatTime:"start"},{name:"toDate",label:{text:"To Date"},type:"date",requiredParent:["fromDate"],maxMonthFromRequired:12,range:{min:"fromDate"},required:!0,formatTime:"end"},{name:"services",label:{text:"Services And Menus"},type:"select",multiple:!0,stream:this._lovService.menusAndServicesLov$,transformer:{nameKey:"name",valueKey:"_id"},required:!0}]}};this._dialog.openFormPopup(e,"800px").afterClosed().pipe(r(1)).subscribe(t=>{t&&this._logsService.getAllSearchLogs({fromDate:t.fromDate,toDate:t.toDate,services:t.services?typeof t.services=="string"?[t.services]:t.services:[]})})}_deleteLog(e){let t={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this log?"}};this._dialog.openConfirmPopup(t).afterClosed().pipe(r(1)).subscribe(o=>{o&&e&&e._id&&this._logsService.deleteLogs(e)})}_deleteSelectedLogs(){let e={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete all selected logs?"}};this._dialog.openConfirmPopup(e).afterClosed().pipe(r(1)).subscribe(t=>{t&&this._logsService.deleteSelectedLogs(this._selectedLogs)})}static{this.\u0275fac=function(t){return new(t||i)}}static{this.\u0275cmp=_({type:i,selectors:[["ks-solutions-logs-listing"]],standalone:!0,features:[I([m]),A],decls:1,vars:1,consts:[[3,"config","refresh$"],[3,"selectionChange","config","refresh$"]],template:function(t,o){t&1&&v(0,j,1,2,"ks-basic-grid",0),t&2&&C(o.gridConfig?0:-1)},dependencies:[N],changeDetection:0})}}return i})();export{de as LogsComponent};