import{a as s}from"./chunk-2RH2WTI7.js";import{a as v}from"./chunk-UZYDSN7X.js";import"./chunk-3SSBONDS.js";import{a as b}from"./chunk-RN7YLSYN.js";import"./chunk-M5ITMDMQ.js";import{a as E}from"./chunk-RP3GL3LT.js";import"./chunk-HMNUYURD.js";import{a as C}from"./chunk-ADGIJ6OL.js";import{M as y,_ as x,sa as S}from"./chunk-OXQU6EVE.js";import"./chunk-CARY4E7O.js";import"./chunk-SWSILSZJ.js";import{Fa as l,Hb as p,N as a,Nb as u,Ub as h,bc as f,ka as n,n as o,oa as d,sb as c,uc as _,vc as g,zb as m}from"./chunk-ZZEMHH24.js";function w(t,T){if(t&1&&h(0,"ks-basic-grid",0),t&2){let e=f();p("config",e.gridConfig)("refresh$",e.refresh$)}}var j=(()=>{class t{constructor(){this._dialog=n(x),this._destroyRef=n(l),this._navService=n(C),this._EmailsService=n(s),this._data=[],this._currentScreen=E("emails_listing"),this.refresh$=new o}ngOnInit(){this._navService.updateNav({show:!0,back:!1,title:this._currentScreen.screenName,buttons:[{label:{text:"Create New"},prefixIcon:{icon:"icon_plus_circle"},hide:!this._currentScreen.insert,onClick:()=>{this._openEmail()}}]}),this._EmailsService.getAllEmails(),this._initializeGrid(),this._EmailsService.emails$.pipe(y(this._destroyRef)).subscribe(e=>{this._data=e,this.refresh$.next({data:this._data})})}_initializeGrid(){this.gridConfig={data:c([]),defaultPagination:100,maxTableHeight:b.maxTableHeightWithSearch,noDataMessage:{text:"No Items Found"},features:{showSearch:!0,trackChanges:!0},elevation:2,columns:[{field:"emailType",title:"Email Type",type:"string",extraStyles:{width:"250px"}},{field:"subject",title:"Subject",type:"string",extraStyles:{"min-width":"250px"}},{field:"active",title:"Active",type:"chip",extraStyles:{width:"120px"},position:"p-start",truthy:{false:"No",true:"Yes"},setChipClass:e=>e.active===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"createdAt",title:"Created At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"170px"}},{field:"updatedAt",title:"Updated At",type:"date",dateFormat:"dd/MM/yyyy - HH:mm:ss a",extraStyles:{"min-width":"170px"}}],actionsColumn:{maxButtons:window.innerWidth<700?1:void 0,maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",enabled:this._currentScreen.update||this._currentScreen.delete,buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:e=>this._openEmail(e),isVisibleFn:()=>this._currentScreen.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:e=>this._deleteInventory(e),isVisibleFn:()=>this._currentScreen.delete,matType:"mat-icon-button"}]}}}_openEmail(e){this._navService.navigateTo(v.LAYOUT.children.EMAILS.children.EMAIL.route,e&&e._id?{ID:e._id}:void 0)}_deleteInventory(e){let i={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this email?"}};this._dialog.openConfirmPopup(i).afterClosed().pipe(a(1)).subscribe(r=>{r&&e?._id&&this._EmailsService.deleteEmail(e)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=d({type:t,selectors:[["ks-solutions-emails-listing"]],standalone:!0,features:[_([s]),g],decls:1,vars:1,consts:[[3,"config","refresh$"]],template:function(i,r){i&1&&m(0,w,1,2,"ks-basic-grid",0),i&2&&u(r.gridConfig?0:-1)},dependencies:[S],changeDetection:0})}}return t})();export{j as EmailsComponent};