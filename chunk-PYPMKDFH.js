import{a as G}from"./chunk-JE2TZ4BC.js";import{a as A}from"./chunk-EDHW7UVH.js";import{a as D}from"./chunk-RN7YLSYN.js";import"./chunk-V3RKPLKU.js";import"./chunk-5YWUWVK4.js";import{a as N}from"./chunk-DDY2ZFNV.js";import{$ as x,A as f,C as y,D as w,E as h,G as S,H as C,K as k,aa as L,da as I,ea as O,fa as T,ja as P,la as E}from"./chunk-E5MLKHCJ.js";import"./chunk-CARY4E7O.js";import"./chunk-ARNZMF2R.js";import{$b as g,Hb as i,Sb as r,Tb as a,Ub as s,hb as n,ka as d,mc as u,oa as _,uc as b,vc as t,wc as p,yc as F,zc as v}from"./chunk-42PURYOY.js";var V=()=>({addClass:"background-transparent p-2"}),W=()=>({text:"welcome",tag:"h3",fontWeight:"500",case:"uppercase"}),j=()=>({text:"Email"}),q=()=>({icon:"icon_message",color:"var(--primary-color)"}),B=()=>({preventInputSpace:!0}),z=(e,m,l,c)=>({label:e,control:m,prefixIcon:l,extra:c}),U=()=>({text:"Password"}),Y=()=>({icon:"icon_lock",color:"var(--primary-color)"}),H=(e,m,l,c)=>({label:e,control:m,type:"password",prefixIcon:l,extra:c}),Q=()=>({text:"Forgot Password?"}),Z=e=>({label:e}),J=()=>({text:"SIGN IN"}),K=()=>({"min-height":"45px"}),X=(e,m,l)=>({label:e,addStyles:m,matType:"mat-stroked-button",type:"submit",color:"primary",disabled:l,takeFullWidth:!0}),M=e=>({text:e,translate:!1}),$=()=>({text:"Powered By"}),ee=e=>({loading:e,disableInteractions:!0}),ue=(()=>{class e{constructor(){this._authService=d(G),this._navbar=d(N),this.isLoggingIn=this._authService.isLoggingIn,this.constants=D,this.date=new Date().getFullYear(),this.LoginForm=new w({email:new h("",[f.required,L]),password:new h("",[f.required])})}ngOnInit(){window.scrollTo(0,0),this._theme=this._navbar.getCurrentTheme(),this._navbar.forceTheme("dark",!0)}ngOnDestroy(){this._navbar.forceTheme(this._theme)}forgotPassword(){this._navbar.navigateTo(A.FORGOT_PASSWORD.route)}login(){x(this.LoginForm)&&this.LoginForm.value.email&&this.LoginForm.value.password&&this._authService.login(this.LoginForm.value.email.toLowerCase(),this.LoginForm.value.password,{screenWidth:window.screen.width,screenHeight:window.screen.height,deviceOrientation:screen.orientation.type})}static{this.\u0275fac=function(c){return new(c||e)}}static{this.\u0275cmp=_({type:e,selectors:[["ks-solutions-login"]],standalone:!0,features:[b],decls:25,vars:45,consts:[[1,"login-container","d-flex","align-items-center","justify-content-center"],[1,"login-card",3,"config"],[1,"py-3","mx-auto"],[1,"text-center",3,"config"],[1,"h5","text-center"],[1,"px-sm-1","px-md-4","py-2",3,"ngSubmit","formGroup"],[1,"mb-3"],[3,"config"],[1,"mb-3","small","text-end"],[3,"onClick","config"],[1,"mt-4",3,"config"],[1,"mt-3","small","mx-auto","text-center"],[2,"font-size","14px","padding-top","2px"],[1,"small","mx-auto","text-center","mt-2"],[1,"cs-primary-color"]],template:function(c,o){c&1&&(r(0,"div",0)(1,"ks-base-card",1)(2,"div",2),s(3,"ks-base-label",3),r(4,"div",4),u(5,"SIGN IN TO YOUR ACCOUNT"),a()(),r(6,"div")(7,"form",5),g("ngSubmit",function(){return o.login()}),r(8,"div",6),s(9,"ks-base-input",7),a(),r(10,"div"),s(11,"ks-base-input",7),a(),r(12,"div",8)(13,"ks-base-button",9),g("onClick",function(){return o.forgotPassword()}),a()(),s(14,"ks-base-button",10),a()(),r(15,"div",11)(16,"span",12),u(17,"\xA9"),a(),s(18,"ks-base-label",7),a(),r(19,"div",13),s(20,"ks-base-label",7),u(21," \xA0 "),r(22,"b",14),s(23,"ks-base-label",7),a()()(),s(24,"ks-loader-overlay",7),a()),c&2&&(n(),i("config",t(11,V)),n(2),i("config",t(12,W)),n(4),i("formGroup",o.LoginForm),n(2),i("config",v(16,z,t(13,j),o.LoginForm.controls.email,t(14,q),t(15,B))),n(2),i("config",v(24,H,t(21,U),o.LoginForm.controls.password,t(22,Y),t(23,B))),n(2),i("config",p(30,Z,t(29,Q))),n(),i("config",F(34,X,t(32,J),t(33,K),o.isLoggingIn)),n(4),i("config",p(38,M,"2022 - "+o.date+" - Version: "+o.constants.version)),n(2),i("config",t(40,$)),n(3),i("config",p(41,M,o.constants.appOwner)),n(),i("config",p(43,ee,o.isLoggingIn)))},dependencies:[T,P,k,S,y,C,O,E,I],styles:['.login-container[_ngcontent-%COMP%]{overflow:auto;min-height:100dvh;background:url("./media/login-5DPQAA6Z.jpg");background-size:cover}.login-card[_ngcontent-%COMP%]{width:calc(100vw - 20px);max-width:500px}'],changeDetection:0})}}return e})();export{ue as LoginComponent};
