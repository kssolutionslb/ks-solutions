import{a as l}from"./chunk-JHOHYJWD.js";import{a as W}from"./chunk-5BWCYXSX.js";import{F as E,G as g,O as f,aa as R,la as T,sa as N,va as O}from"./chunk-XXZS4MWG.js";import{Ab as S,Fa as B,Ib as r,Ka as C,La as P,N as p,Ob as F,Tb as u,Ub as m,Vb as c,a as o,b as d,cc as v,ib as a,ka as y,n as _,o as b,oa as G,tb as w,wc as V,xc as s,zc as h}from"./chunk-VO6IE2C5.js";var I=()=>({text:"Configuration",tag:"h3",fontWeight:"500",case:"titlecase"}),q=()=>({text:"Expand Only One"}),$=(n,x)=>({control:n,label:x}),A=()=>({text:"Format Form Value"}),D=()=>({text:"Use Expansion Panel"}),M=()=>({text:"Groups",tag:"h3",fontWeight:"500",case:"titlecase"}),j=()=>({text:"Fields",tag:"h3",fontWeight:"500",case:"titlecase"});function L(n,x){if(n&1&&c(0,"ks-base-label",3)(1,"ks-basic-grid",7),n&2){let t=v();r("config",s(3,M)),a(),r("config",t.groupsGridConfig)("refresh$",t.groupsRefresh$)}}function U(n,x){if(n&1&&c(0,"ks-base-label",3)(1,"ks-basic-grid",7),n&2){let t=v();r("config",s(3,j)),a(),r("config",t.fieldsGridConfig)("refresh$",t.fieldsRefresh$)}}var ie=(()=>{class n{constructor(){this._destroyRef=y(B),this._dialog=y(R),this._fields$=new b([]),this._groups$=new b([]),this.test=C(),this.save=C(),this.config=P.required(),this.fieldsRefresh$=new _,this.groupsRefresh$=new _,this.form=new E({expandOnlyOne:new g(!1),formatFormValue:new g(!1),useExpansionPanel:new g(!1)})}ngOnInit(){this._initializeGrid(),this.config().stream.pipe(f(this._destroyRef)).subscribe(t=>{this.form.patchValue(t),this._groups$.next(t.groups?.map((i,e)=>d(o({},i),{__id:e+1,__name:i.name?.text}))||[]),this._fields$.next(t.fields?.map((i,e)=>d(o({},i),{__id:e+1,__label:i.label?.text,order:e+1})).sort((i,e)=>(i.order??0)-(e.order??0))||[])}),this.config().save$?.pipe(f(this._destroyRef)).subscribe(t=>{let i={expandOnlyOne:!!this.form.value.expandOnlyOne,formatFormValue:!!this.form.value.formatFormValue,useExpansionPanel:!!this.form.value.useExpansionPanel,fields:[]};i.fields=this._fields$.getValue().map(e=>(t==="save"&&(delete e.__id,delete e.__label,delete e.__options),e)).sort((e,k)=>(e.order??0)-(k.order??0)),i.groups=this._groups$.getValue().map(e=>(t==="save"&&(delete e.__id,delete e.__tag,delete e.__name,delete e.__addClass,delete e.__fontWeight),e)),t==="save"?this.save.emit(i):this.test.emit(i)})}ngAfterViewInit(){this._fields$.pipe(f(this._destroyRef)).subscribe(t=>{this.fieldsRefresh$.next({data:t})}),this._groups$.pipe(f(this._destroyRef)).subscribe(t=>{this.groupsRefresh$.next({data:t})})}_initializeGrid(){let t=this.config().currentScreen;this.fieldsGridConfig={data:w([]),defaultPagination:100,maxTableHeight:W.maxTableHeightWithSearch,noDataMessage:{text:"No Fields Found"},features:{showSearch:!0,showAddButton:!0,addButtonClicked:()=>this._openField()},elevation:2,columns:[{field:"name",title:"Name",type:"string",extraStyles:{"min-width":"100px"}},{field:"label.text",title:"Label",type:"string",extraStyles:{"min-width":"100px"}},{field:"type",title:"Type",type:"string",extraStyles:{"min-width":"100px"}},{field:"groupId",title:"Group Id",type:"number",extraStyles:{"min-width":"100px"}},{field:"order",title:"Order",type:"number",extraStyles:{"min-width":"100px"}},{field:"required",title:"Required",type:"chip",extraStyles:{"min-width":"100px"},truthy:{false:"No",true:"Yes"},setChipClass:i=>i.required===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"}],actionsColumn:{enabled:t.update||t.delete,maxButtons:window.innerWidth<700?1:void 0,width:window.innerWidth<700?void 0:"110px",maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:i=>this._openField(i),isVisibleFn:()=>t.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:i=>this._deleteField(i),isVisibleFn:()=>t.delete,matType:"mat-icon-button"}]}},this.groupsGridConfig={data:w([]),defaultPagination:100,maxTableHeight:W.maxTableHeightWithSearch,noDataMessage:{text:"No Groups Found"},features:{showSearch:!0,showAddButton:!0,addButtonClicked:()=>this._openGroup()},elevation:2,columns:[{field:"name.text",title:"Name",type:"string",extraStyles:{"min-width":"100px"}},{field:"id",title:"Group Id",type:"number",extraStyles:{"min-width":"100px"}},{field:"order",title:"Order",type:"number",extraStyles:{"min-width":"100px"}},{field:"expanded",title:"Expanded",type:"chip",extraStyles:{"min-width":"100px"},truthy:{false:"No",true:"Yes"},setChipClass:i=>i.expanded===!0?"rounded rounded-5 px-3 py-1 text-bg-success cs-w-120":"rounded rounded-5 px-3 py-1 text-bg-danger cs-w-120"},{field:"name.tag",title:"Tag",type:"string",extraStyles:{"min-width":"100px"}},{field:"name.fontWeight",title:"Font Weight",type:"string",extraStyles:{"min-width":"100px"}},{field:"name.addClass",title:"Class",type:"string",extraStyles:{"min-width":"100px"}}],actionsColumn:{enabled:t.update||t.delete,maxButtons:window.innerWidth<700?1:void 0,width:window.innerWidth<700?void 0:"110px",maxWidth:window.innerWidth<700?void 0:"110px",minWidth:window.innerWidth<700?void 0:"110px",buttons:[{prefixIcon:{icon:"icon_edit"},label:{text:"Edit"},onClickFn:i=>this._openGroup(i),isVisibleFn:()=>t.update,matType:"mat-icon-button"},{prefixIcon:{icon:"icon_delete",color:"red"},label:{text:"Delete"},onClickFn:i=>this._deleteGroup(i),isVisibleFn:()=>t.delete,matType:"mat-icon-button"}]}}}_openField(t){let i={hideClearButton:!0,title:{text:t?"Edit Group":"Add Group"},form:{value:d(o({},t),{__label:t?.label?.text,__options:t?.options?JSON.stringify(t?.options):void 0}),fields:[{name:"name",type:"text",label:{text:"Name"},required:!0},{name:"__label",type:"text",label:{text:"Label"},required:!0},{name:"type",type:"select",label:{text:"Type"},required:!0,options:["text","number","date","password","color","textaria","checkbox","toggle","image","select","autocomplete"].map(e=>({name:e,value:e}))},{name:"groupId",label:{text:"Group"},type:"select",stream:this._groups$,transformer:{nameKey:"__name",valueKey:"id"}},{name:"order",label:{text:"Order"},type:"number",disableNegativeValues:!0,integer:!0},{name:"requiredParent",label:{text:"Required Parents"},type:"select",multiple:!0,stream:this._fields$,transformer:{nameKey:"__label",valueKey:"name"}},{name:"maxLength",label:{text:"Max Length"},type:"number",disableNegativeValues:!0,integer:!0},{name:"minLength",label:{text:"Min Length"},type:"number",disableNegativeValues:!0,integer:!0},{name:"maxSizeInMB",label:{text:"Max Size In MB"},type:"number",disableNegativeValues:!0},{name:"maxMonthFromRequired",label:{text:"Max Month From Required"},type:"number",disableNegativeValues:!0,integer:!0},{name:"__options",label:{text:"Options"},type:"textaria"},{name:"required",label:{text:"Required"},type:"toggle"},{name:"multiple",label:{text:"Multiple"},type:"toggle"},{name:"preventSpace",label:{text:"Prevent Space"},type:"toggle"},{name:"integer",label:{text:"Integer"},type:"toggle"},{name:"disableNegativeValues",label:{text:"Disable Negative Values"},type:"toggle"},{name:"hide",label:{text:"Hide"},type:"toggle"},{name:"readonly",label:{text:"Readonly"},type:"toggle"}]}};this._dialog.openFormPopup(i,"1300px").afterClosed().pipe(p(1)).subscribe(e=>{if(e){e.label={text:e.__label};try{e.options=JSON.parse(e.__options)}catch{e.options=t?.options}t?l.UpdateArrayBehaviorSubject(this._fields$,o(o({},t),e),"edit","__id"):(e.__id=new Date().getTime(),l.UpdateArrayBehaviorSubject(this._fields$,e,"add","__id"))}})}_deleteField(t){let i={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this field?"}};this._dialog.openConfirmPopup(i).afterClosed().pipe(p(1)).subscribe(e=>{e&&t?.name&&l.UpdateArrayBehaviorSubject(this._fields$,t,"delete","__id")})}_openGroup(t){let i={hideClearButton:!0,title:{text:t?"Edit Group":"Add Group"},form:{groups:[{id:1,name:{text:"Styling"},order:1}],value:d(o({},t),{__name:t?.name?.text,__tag:t?.name?.tag,__fontWeight:t?.name?.fontWeight,__addClass:t?.name.addClass}),fields:[{name:"__name",type:"text",label:{text:"Name"},required:!0},{name:"id",type:"number",label:{text:"Group Id"},required:!0},{name:"order",type:"number",label:{text:"Order"},required:!0},{name:"expanded",label:{text:"Expanded"},type:"toggle"},{name:"__tag",type:"select",label:{text:"Tag"},options:["h1","h2","h3","h4","p","small","span"].map(e=>({name:e,value:e})),groupId:1},{name:"__fontWeight",type:"select",label:{text:"Font Weight"},options:["400","500","600","700"].map(e=>({name:e,value:e})),groupId:1},{name:"__addClass",type:"text",label:{text:"Add Class"},groupId:1}]}};this._dialog.openFormPopup(i,"1000px").afterClosed().pipe(p(1)).subscribe(e=>{e&&(e.name={text:e.__name,tag:e.__tag,fontWeight:e.__fontWeight,addClass:e.__addClass},t?l.UpdateArrayBehaviorSubject(this._groups$,o(o({},t),e),"edit","__id"):(e.__id=new Date().getTime(),l.UpdateArrayBehaviorSubject(this._groups$,e,"add","__id")))})}_deleteGroup(t){let i={title:{text:"Confirm Delete"},message:{text:"Are you sure you want to delete this group?"}};this._dialog.openConfirmPopup(i).afterClosed().pipe(p(1)).subscribe(e=>{e&&t?.id&&l.UpdateArrayBehaviorSubject(this._groups$,t,"delete","__id")})}static{this.\u0275fac=function(i){return new(i||n)}}static{this.\u0275cmp=G({type:n,selectors:[["kss-lib-form-builder"]],inputs:{config:[1,"config"]},outputs:{test:"test",save:"save"},standalone:!0,features:[V],decls:13,vars:19,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[3,"config"],[1,"col-12","mb-2"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-2",3,"config"],[1,"col-12","mb-4"],[3,"config","refresh$"]],template:function(i,e){i&1&&(u(0,"div",0)(1,"div",1)(2,"div",2),c(3,"ks-base-label",3),m(),u(4,"div",4)(5,"div",1),c(6,"ks-base-slide-toggle",5)(7,"ks-base-slide-toggle",5)(8,"ks-base-slide-toggle",5),m()(),u(9,"div",6),S(10,L,2,4),m(),u(11,"div",2),S(12,U,2,4),m()()()),i&2&&(a(3),r("config",s(6,I)),a(3),r("config",h(8,$,e.form.controls.expandOnlyOne,s(7,q))),a(),r("config",h(12,$,e.form.controls.formatFormValue,s(11,A))),a(),r("config",h(16,$,e.form.controls.useExpansionPanel,s(15,D))),a(2),F(e.groupsGridConfig?10:-1),a(2),F(e.fieldsGridConfig?12:-1))},dependencies:[O,T,N],changeDetection:0})}}return n})();export{ie as a};
