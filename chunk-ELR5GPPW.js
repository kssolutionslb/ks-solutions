function i(t,r=Date.now()){if(!t?.createdAt)return"";let e=Date.parse(t.createdAt);return!Number.isNaN(e)&&r-e<=864e5?"log-highlight-row":""}export{i as a};
