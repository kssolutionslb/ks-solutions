import{a as D,b as w,c as S,d as E}from"./chunk-7DWO6MEP.js";import{B as b,F,K as x,M as T}from"./chunk-TNID6TGJ.js";import{$b as h,Fa as m,Hb as a,Ka as c,La as p,Pc as M,Sb as s,Tb as d,Ub as g,hb as l,ka as r,mc as f,oa as u,rc as _,sc as C,tc as y,vc as v}from"./chunk-ZZEMHH24.js";var B=(()=>{class e{constructor(){this._destroyRef=r(m),this._crd=r(M),this.control=p.required(),this.getValue=c(),this.editor=new E,this.htmlContent="",this.toolbar=[["bold","italic","underline"],["align_left","align_center","align_right","align_justify"],["bullet_list","ordered_list"],["horizontal_rule","format_clear","indent","outdent"],["undo","redo"]]}ngOnInit(){this.htmlContent=this.control().value,this.control().valueChanges.pipe(T(this._destroyRef)).subscribe(n=>{this.htmlContent=n||"",this._crd.markForCheck()})}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=u({type:e,selectors:[["kss-lib-invoice-footer-text"]],inputs:{control:[1,"control"]},outputs:{getValue:"getValue"},standalone:!0,features:[v],decls:5,vars:4,consts:[[1,"w-100"],[1,"py-2","ps-2","text-center","h5","underline"],[3,"toolbar","editor"],[3,"ngModelChange","focusOut","editor","ngModel"]],template:function(o,t){o&1&&(s(0,"div",0)(1,"div",1),f(2,"Footer Text"),d(),g(3,"ngx-editor-menu",2),s(4,"ngx-editor",3),y("ngModelChange",function(i){return C(t.htmlContent,i)||(t.htmlContent=i),i}),h("focusOut",function(){return t.getValue.emit(t.htmlContent)}),d()()),o&2&&(l(3),a("toolbar",t.toolbar)("editor",t.editor),l(),a("editor",t.editor),_("ngModel",t.htmlContent))},dependencies:[S,D,w,x,b,F],changeDetection:0})}}return e})();export{B as a};
