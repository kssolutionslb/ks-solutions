import{a as x}from"./chunk-VMV3LQCJ.js";import{a as N}from"./chunk-DL3GU6OZ.js";import{K as q,_ as D,ba as R,ga as V,ia as z,la as $,ra as B}from"./chunk-FMJMWD3K.js";import"./chunk-CARY4E7O.js";import"./chunk-Z72V5FLM.js";import{$b as S,Dc as U,Fc as O,Hb as c,N as d,Nb as h,Sb as n,Tb as o,Tc as L,Ub as l,Yb as w,bc as m,db as I,ea as E,hb as r,id as j,ka as u,mc as a,n as F,nc as f,oa as A,sb as g,uc as M,vc as T,wc as p,xc as k,ya as b,za as v,zb as C}from"./chunk-P5AQMEDB.js";var y=(()=>{class t{constructor(){this._networkService=u(R),this.user=g({email:"",name:"",role:"",password:"",passwordRetries:0,_id:""})}changePassword(e,i){return this._networkService.post(x.USER.changePassword,{newPassword:e,oldPassword:i})}enable2Fa(){return this._networkService.post(x.USER.enable2FA,{})}disable2Fa(e){return this._networkService.post(x.USER.disable2FA,{token:e})}verify2Fa(e){return this._networkService.post(x.USER.verify2FA,{token:e})}getLoggedInUser(){this._networkService.get(x.USER.loggedInUser).pipe(d(1)).subscribe(e=>{e?.data&&this.user.set(e.data)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=E({token:t,factory:t.\u0275fac})}}return t})();var J=()=>({icon:"icon_mail"}),Q=()=>({icon:"icon_calendar"}),G=()=>({icon:"icon_valid",size:"sm"}),H=()=>({text:"Disable 2FA"}),W=t=>({label:t,color:"warn",matType:"mat-flat-button",addClass:"rounded-2 w-100 w-md-auto"}),X=()=>({icon:"icon_warning_triangle",size:"sm"}),Y=()=>({text:"Verify & Activate"}),Z=t=>({label:t,matType:"mat-flat-button",addClass:"rounded-2 w-100 w-md-auto"}),ee=()=>({text:"Enable 2FA"}),te=t=>({label:t,addClass:"rounded-2 w-100 w-md-auto",matType:"mat-flat-button"});function ie(t,_){if(t&1){let e=w();n(0,"p",21),l(1,"ks-base-icon",10),a(2," 2FA is enabled "),o(),n(3,"ks-base-button",22),S("onClick",function(){b(e);let s=m(2);return v(s.disable2FA())}),o()}t&2&&(r(),c("config",p(2,G)),r(2),c("config",k(4,W,p(3,H))))}function ne(t,_){if(t&1){let e=w();n(0,"div",24)(1,"p"),a(2,"Scan the QR code with your Authenticator App:"),o(),l(3,"img",25),n(4,"div",24)(5,"ks-base-button",22),S("onClick",function(){b(e);let s=m(3);return v(s.verify2FA())}),o()()()}if(t&2){let e=m(3);r(3),c("src",e.qrCode(),I),r(2),c("config",k(3,Z,p(2,Y)))}}function oe(t,_){if(t&1){let e=w();n(0,"ks-base-button",22),S("onClick",function(){b(e);let s=m(3);return v(s.enable2FA())}),o()}t&2&&c("config",k(2,te,p(1,ee)))}function re(t,_){if(t&1&&(n(0,"p",23),l(1,"ks-base-icon",10),a(2," 2FA is not enabled "),o(),C(3,ne,6,5,"div",24)(4,oe,1,4,"ks-base-button",10)),t&2){let e=m(2);r(),c("config",p(2,X)),r(2),h(e.qrCode()?3:4)}}function ae(t,_){if(t&1&&(n(0,"div",1)(1,"div",2)(2,"div",3)(3,"span"),a(4),o()(),n(5,"div",4)(6,"h3",5),a(7),o(),n(8,"p",6),a(9),o()()(),n(10,"div",7)(11,"div",8)(12,"div",9),l(13,"ks-base-icon",10),n(14,"div")(15,"div",11),a(16,"Email"),o(),n(17,"p",12),a(18),o()()()(),n(19,"div",8)(20,"div",9),l(21,"ks-base-icon",10),n(22,"div")(23,"div",11),a(24,"Joined At"),o(),n(25,"p",13),a(26),U(27,"date"),o()()()()(),l(28,"hr",14),n(29,"div",15)(30,"h5",16),a(31,"Two-Factor Authentication (2FA)"),o(),C(32,ie,4,6)(33,re,5,3),o(),l(34,"hr",14),n(35,"div",17)(36,"div",18)(37,"h5",16),a(38,"Change Password"),o(),n(39,"div"),l(40,"ks-dynamic-form",19),o(),n(41,"div",20),a(42),o(),l(43,"ks-base-button",10),o()()()),t&2){let e=_,i=m();r(4),f(i.avatar()),r(3),f(e.name),r(2),f(e.role),r(4),c("config",p(15,J)),r(5),f(e.email),r(3),c("config",p(16,Q)),r(5),f(O(27,12,e.createdAt,"EEEE d MMMM y")),r(6),h(e.twoFactorEnabled?32:33),r(8),c("config",i.formConfig)("action$",i.action$),r(2),f(i.error()),r(),c("config",i.saveConfig)}}var we=(()=>{class t{constructor(){this._dialog=u(D),this._profileService=u(y),this._navService=u(N),this.error=g(""),this.qrCode=g(""),this.user=this._profileService.user,this.avatar=L(()=>this.user()?.name?.split(/\s+/).map(e=>e[0]?.toUpperCase()).join("")||""),this.saveConfig={label:{text:"Save"},prefixIcon:{icon:"icon_save"},addClass:"rounded-2",matType:"mat-flat-button",onClick:()=>{this.action$.next("save")},id:"save"},this.action$=new F,this.formConfig={fields:[{label:{text:"Old Password"},type:"password",name:"oldPassword",required:!0},{label:{text:"new Password"},type:"password",name:"newPassword",required:!0,extraValidators:[V({forceLowerCase:!0,forceNumbers:!0,forceSpecialCharacters:!0,forceUppercase:!0,maxLength:20,minLength:4,preventSpace:!0})]},{label:{text:"Confirm Password"},type:"password",name:"confirmPassword",required:!0}],onSave:e=>{e&&e.newPassword&&e.newPassword&&(e.newPassword!==e.confirmPassword?this.error.set("Confirm password does not match the new password!"):(this.error.set(""),this._profileService.changePassword(e.newPassword,e.oldPassword).pipe(d(1)).subscribe(i=>{i&&this.action$.next("clear")})))}}}ngOnInit(){this._profileService.getLoggedInUser(),this._navService.updateNav({title:"Profile",show:!1,back:!1})}enable2FA(){this._profileService.enable2Fa().pipe(d(1)).subscribe(e=>{e.data&&this.qrCode.set(e.data)})}disable2FA(){let e={title:{text:"Disable 2FA"},form:{fields:[{label:{text:"Authenticator Code"},type:"text",name:"token",required:!0,minLength:6,maxLength:8}]}};this._dialog.openFormPopup(e,"500px").afterClosed().pipe(d(1)).subscribe(i=>{i?.token&&this._profileService.disable2Fa(i.token).pipe(d(1)).subscribe(s=>{s&&this._profileService.getLoggedInUser()})})}verify2FA(){let e={title:{text:"Verify 2FA"},form:{fields:[{label:{text:"Authenticator Code"},type:"text",name:"token",required:!0,minLength:6,maxLength:8}]}};this._dialog.openFormPopup(e,"500px").afterClosed().pipe(d(1)).subscribe(i=>{i?.token&&this._profileService.verify2Fa(i.token).pipe(d(1)).subscribe(s=>{s&&this._profileService.getLoggedInUser()})})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=A({type:t,selectors:[["ks-solutions-profile"]],standalone:!0,features:[M([y]),T],decls:2,vars:1,consts:[[1,"container"],[1,"m-auto","p-3","p-4",2,"max-width","1000px"],[1,"profile-header","d-flex","align-items-center","gap-4","mb-4","flex-wrap"],[1,"avatar"],[1,"user-details","text-center","text-md-start"],[1,"mb-1"],[1,"text-muted","text-break"],[1,"row","g-3"],[1,"col-12","col-md-6"],[1,"info-box"],[3,"config"],[1,"info-label"],[1,"info-text","text-break"],[1,"info-text"],[1,"my-4"],[1,"glassmorphism-box","text-center","p-4"],[1,"mb-3"],[1,"text-center"],[1,"glassmorphism-box","mx-auto","p-4"],[3,"config","action$"],[1,"text-danger","mb-3","small"],[1,"text-success","fw-bold","d-flex","align-items-center","justify-content-center","gap-2"],[3,"onClick","config"],[1,"text-warning","d-flex","align-items-center","justify-content-center","gap-2"],[1,"mt-3"],["alt","qrCode",1,"img-fluid","border","rounded","p-2","shadow-sm",3,"src"]],template:function(i,s){if(i&1&&(n(0,"div",0),C(1,ae,44,17,"div",1),o()),i&2){let P;r(),h((P=s.user())?1:-1,P)}},dependencies:[q,z,$,B,j],styles:["[_nghost-%COMP%]{--card-background: rgb(125 125 125 / 5%);--card-shadow: 0 0px 6px rgba(0, 0, 0, .25)}.profile-header[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;text-align:center;flex-wrap:wrap}.avatar[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--primary-color),rgb(2,0,90));color:#fff;display:flex;justify-content:center;align-items:center;font-size:28px;font-weight:700;text-transform:uppercase;letter-spacing:3px}.user-details[_ngcontent-%COMP%]{flex:1}.info-box[_ngcontent-%COMP%]{display:flex;align-items:center;background:var(--card-background);box-shadow:var(--card-shadow);gap:12px;padding:12px;border-radius:8px}.info-label[_ngcontent-%COMP%]{font-size:12px;text-transform:uppercase}.info-text[_ngcontent-%COMP%]{font-size:16px;font-weight:500;margin:4px 0 0}.glassmorphism-box[_ngcontent-%COMP%]{border-radius:12px;-webkit-backdrop-filter:blur(15px);backdrop-filter:blur(15px);box-shadow:var(--card-shadow);padding:20px;background:var(--card-background)}@media (max-width: 768px){.profile-header[_ngcontent-%COMP%], .info-box[_ngcontent-%COMP%]{flex-direction:column;text-align:center}}"],changeDetection:0})}}return t})();export{we as ProfileComponent};
