var c=class{static UpdateArrayBehaviorSubject(s,e,f,i){let d=s.value.slice();this.UpdateArray(d,e,f,i),s.next(d)}static UpdateArray(s,e,f,i){let d=Array.isArray(e)?e:[e];f==="add"?s.push(...d):f==="edit"?d.forEach(r=>{let t=s.findIndex(a=>a[i]===r[i]);t!==-1&&(s[t]=r)}):f==="delete"&&d.forEach(r=>{let t=s.findIndex(a=>a[i]===r[i]);t!==-1&&s.splice(t,1)})}};export{c as a};
