import{a as g}from"./chunk-ICJAWS6B.js";import{a as s}from"./chunk-HMNUYURD.js";import{a as i}from"./chunk-VMV3LQCJ.js";import{_ as m,ba as d,ca as T}from"./chunk-6OZBD6B5.js";import{o as f}from"./chunk-F5WOQGUX.js";import{N as h,ea as S,ja as a,n,sb as u}from"./chunk-RQMRH3XI.js";var N=(()=>{class o{constructor(t,e,l,c){this._dialog=t,this._networkService=e,this._storageService=l,this._router=c,this.isRefreshTokenCalled=!1,this.isLoggingIn=u(!1),this.isLogoutCalled=!1,this.refreshToken$=new n,this.twoFactor$=new n,this.showTwoFactorScreen=u(!1)}forgotPassword(t){return this._networkService.post(i.USER.forgotPassword,{email:t})}resetPassword(t,e){return this._networkService.post(i.USER.resetPassword,{token:t,password:e})}login(t,e,l,c){this.isLogoutCalled=!1,this.isLoggingIn.set(!0),this._networkService.post(i.AUTHENTICATION.login,{email:t,password:e,info:l,twoFactorCode:c}).pipe(h(1)).subscribe({next:r=>{r&&r.data&&(r.data.twoFactorCode?(this.showTwoFactorScreen.set(!0),this.twoFactor$.subscribe(k=>{this.login(t,e,l,k)})):r.data.user&&(this.showTwoFactorScreen.set(!1),this.isLogoutCalled=!1,this.isRefreshTokenCalled=!1,this._storageService.setItem(s.SS.token,r.data.user.accessToken,!0),this._storageService.setItem(s.SS.email,r.data.user.email,!0),this._storageService.setItem(s.SS.name,r.data.user.name,!0),this._storageService.setItem(s.SS.user,r.data.user,!0),this._router.navigateByUrl(g.LAYOUT.route))),this.isLoggingIn.set(!1)},error:()=>{this.isLoggingIn.set(!1)}})}logOut(t){this._dialog.closeAll();let e=this._storageService.getItem(s.SS.email,!0);!this.isLogoutCalled&&this._networkService.post(i.AUTHENTICATION.logout,{isFromInterceptor:t,email:e}).pipe(h(1)).subscribe(),this._storageService.clearAll([s.LS.theme,s.LS.menuTrack,s.LS.uuid]),this._storageService.clearAll([],!0),this._router.navigateByUrl(g.LOGIN.route),this.refreshToken$.next(null),this.isLogoutCalled=!0}callRefreshToken(){return this._networkService.post(i.AUTHENTICATION.refresh,{})}successfulRefreshToken(t){let e=t.data?.accessToken;e?(this._storageService.setItem(s.SS.token,e,!0),this.isRefreshTokenCalled=!1,this.refreshToken$.next(e)):this.logOut(!0)}static{this.\u0275fac=function(e){return new(e||o)(a(m),a(d),a(T),a(f))}}static{this.\u0275prov=S({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{N as a};
