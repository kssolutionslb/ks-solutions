import{a as O}from"./chunk-54SQSRZL.js";import{a as q}from"./chunk-IMQDIHRW.js";import"./chunk-5BWCYXSX.js";import{a as R}from"./chunk-ACYZVNWI.js";import"./chunk-HMNUYURD.js";import"./chunk-NZP3AJU7.js";import{a as D}from"./chunk-5LHP7IWU.js";import{C as l,E as k,F as v,G as f,I,K as V,N as E,ga as x,ha as G,ma as N,na as P}from"./chunk-7Y4QU53B.js";import"./chunk-CARY4E7O.js";import"./chunk-QLWHFAAO.js";import{$b as _,Ac as C,Hb as c,Nb as y,Sb as s,Tb as m,Ub as u,Yb as h,bc as p,hb as a,ka as w,oa as b,vc as L,wc as e,xc as T,ya as g,za as F,zb as S,zc as d}from"./chunk-72DPVO72.js";var j=(o,n,t)=>({title:o,subTitle:n,isReqInProgress:t,uppercaseSubTitle:!0}),H=()=>({text:"Email"}),M=()=>({icon:"icon_message",color:"var(--primary-color)"}),B=()=>({preventInputSpace:!0}),$=(o,n,t,i)=>({label:o,control:n,prefixIcon:t,extra:i}),z=()=>({text:"Password"}),J=()=>({icon:"icon_lock",color:"var(--primary-color)"}),K=(o,n,t,i)=>({label:o,control:n,type:"password",prefixIcon:t,extra:i}),Q=()=>({text:"Forgot Password?"}),U=o=>({label:o}),X=()=>({text:"SIGN IN"}),W=()=>({"min-height":"45px"}),A=(o,n,t)=>({label:o,addStyles:n,matType:"mat-stroked-button",type:"submit",color:"primary",disabled:t,takeFullWidth:!0}),Y=()=>({text:"Code"}),Z=(o,n,t)=>({label:o,control:n,prefixIcon:t,onlyNumeric:!0}),tt=()=>({text:"Submit Code"});function ot(o,n){if(o&1){let t=h();s(0,"form",2),_("ngSubmit",function(){g(t);let r=p();return F(r.login())}),s(1,"div",3),u(2,"ks-base-input",0),m(),s(3,"div"),u(4,"ks-base-input",0),m(),s(5,"div",4)(6,"ks-base-button",5),_("onClick",function(){g(t);let r=p();return F(r.forgotPassword())}),m()(),u(7,"ks-base-button",6),m()}if(o&2){let t=p();c("formGroup",t.LoginForm),a(2),c("config",C(8,$,e(5,H),t.LoginForm.controls.email,e(6,M),e(7,B))),a(2),c("config",C(16,K,e(13,z),t.LoginForm.controls.password,e(14,J),e(15,B))),a(2),c("config",T(22,U,e(21,Q))),a(),c("config",d(26,A,e(24,X),e(25,W),t.isLoggingIn))}}function et(o,n){if(o&1){let t=h();s(0,"form",2),_("ngSubmit",function(){g(t);let r=p();return F(r.onTwoFactorCode())}),s(1,"div",3),u(2,"ks-base-input",0),m(),u(3,"ks-base-button",6),m()}if(o&2){let t=p();c("formGroup",t.twoFactorFrom),a(2),c("config",d(5,Z,e(3,Y),t.twoFactorFrom.controls.twoFactorCode,e(4,M))),a(),c("config",d(11,A,e(9,tt),e(10,W),t.isLoggingIn))}}var gt=(()=>{class o{constructor(){this._authService=w(q),this._navbar=w(D),this.isLoggingIn=this._authService.isLoggingIn,this.LoginForm=new v({email:new f("",[l.required,G]),password:new f("",[l.required])}),this.twoFactorFrom=new v({twoFactorCode:new f("",[l.required,l.minLength(6),l.maxLength(8)])}),this.showTwoFactor=this._authService.showTwoFactorScreen}forgotPassword(){this._navbar.navigateTo(R.FORGOT_PASSWORD.route)}login(){x(this.LoginForm)&&this.LoginForm.value.email&&this.LoginForm.value.password&&this._authService.login(this.LoginForm.value.email.toLowerCase(),this.LoginForm.value.password,{screenWidth:window.screen.width,screenHeight:window.screen.height,deviceOrientation:screen.orientation.type})}onTwoFactorCode(){x(this.twoFactorFrom)&&this.twoFactorFrom.value.twoFactorCode&&this._authService.twoFactor$.next(this.twoFactorFrom.value.twoFactorCode)}static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275cmp=b({type:o,selectors:[["ks-solutions-login"]],standalone:!0,features:[L],decls:3,vars:6,consts:[[3,"config"],[1,"px-sm-1","px-md-4","py-2",3,"formGroup"],[1,"px-sm-1","px-md-4","py-2",3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"mb-3","small","text-end"],[3,"onClick","config"],[1,"mt-4",3,"config"]],template:function(i,r){i&1&&(s(0,"ks-solutions-form-layout",0),S(1,ot,8,30,"form",1)(2,et,4,15,"form",1),m()),i&2&&(c("config",d(2,j,r.showTwoFactor()?"two factor authentication":"welcome",r.showTwoFactor()?"please enter your code":"sign in to your account",r.isLoggingIn)),a(),y(r.showTwoFactor()?2:1))},dependencies:[P,E,I,k,V,N,O],changeDetection:0})}}return o})();export{gt as LoginComponent};
