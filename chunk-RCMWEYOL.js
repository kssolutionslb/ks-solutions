import{a as l}from"./chunk-3SSBONDS.js";import{a as t}from"./chunk-YG3ZRH6R.js";import{ba as c}from"./chunk-TNID6TGJ.js";import{N as a,ea as m,ka as o,o as s}from"./chunk-ZZEMHH24.js";var _=(()=>{class i{constructor(){this._networkService=o(c),this._emails$=new s([]),this.emails$=this._emails$.asObservable()}getAllEmails(){this._networkService.get(t.EMAILS.emails).pipe(a(1)).subscribe({next:e=>{e&&e.data&&this._emails$.next(e.data)}})}getEmailById(e){return this._networkService.get(t.EMAILS.emails,e)}addEmail(e){return this._networkService.post(t.EMAILS.emails,e)}updateEmail(e){return this._networkService.patch(t.EMAILS.emails,e,e._id)}deleteEmail(e){this._networkService.delete(t.EMAILS.emails,void 0,e._id).pipe(a(1)).subscribe({next:()=>{this._updateEmails(e,"delete")}})}_updateEmails(e,r){l.UpdateArrayBehaviorSubject(this._emails$,e,r)}static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275prov=m({token:i,factory:i.\u0275fac})}}return i})();export{_ as a};
