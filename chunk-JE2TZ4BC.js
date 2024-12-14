import{a as c}from"./chunk-EDHW7UVH.js";import{a as i}from"./chunk-V3RKPLKU.js";import{a as r}from"./chunk-5YWUWVK4.js";import{Y as S,Z as m}from"./chunk-E5MLKHCJ.js";import{n as f}from"./chunk-ARNZMF2R.js";import{N as l,ea as g,ja as a,n as h,sb as u}from"./chunk-42PURYOY.js";var R=(()=>{class o{constructor(t,e,n){this._networkService=t,this._storageService=e,this._router=n,this.isRefreshTokenCalled=!1,this.isLoggingIn=u(!1),this.isLogoutCalled=!1,this.refreshToken$=new h}forgotPassword(t){return this._networkService.post(i.USER.forgotPassword,{email:t})}resetPassword(t,e){return this._networkService.post(i.USER.resetPassword,{token:t,password:e})}login(t,e,n){this.isLogoutCalled=!1,this.isLoggingIn.set(!0),this._networkService.post(i.AUTHENTICATION.login,{email:t,password:e,info:n}).pipe(l(1)).subscribe({next:s=>{s&&s.data&&(this.isLogoutCalled=!1,this.isRefreshTokenCalled=!1,this._storageService.setItem(r.SS.token,s.data.accessToken,!0),this._storageService.setItem(r.SS.email,s.data.email,!0),this._storageService.setItem(r.SS.name,s.data.name,!0),this._storageService.setItem(r.SS.user,s.data,!0),this._router.navigateByUrl(c.LAYOUT.route)),this.isLoggingIn.set(!1)},error:()=>{this.isLoggingIn.set(!1)}})}logOut(t){let e=this._storageService.getItem(r.SS.email,!0);!this.isLogoutCalled&&this._networkService.post(i.AUTHENTICATION.logout,{isFromInterceptor:t,email:e}).pipe(l(1)).subscribe(),this._storageService.clearAll([r.LS.theme]),this._storageService.clearAll([],!0),this._router.navigateByUrl(c.LOGIN.route),this.refreshToken$.next(null),this.isLogoutCalled=!0}callRefreshToken(){return this._networkService.post(i.AUTHENTICATION.refresh,{})}successfulRefreshToken(t){let e=t.data?.accessToken;e?(this._storageService.setItem(r.SS.token,e,!0),this.isRefreshTokenCalled=!1,this.refreshToken$.next(e)):this.logOut(!0)}static{this.\u0275fac=function(e){return new(e||o)(a(S),a(m),a(f))}}static{this.\u0275prov=g({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();export{R as a};
