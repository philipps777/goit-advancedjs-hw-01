import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{P as a,t as i}from"./assets/vendor-1e54b975.js";const s=document.querySelector("iframe"),n=new a(s),r="videoplayer-current-time",c=function(t){const e=JSON.stringify(t);localStorage.setItem(r,e)};i(c,1e3);const m=function(t){const e=t.seconds;c(e)};n.on("timeupdate",m);const o=Number(localStorage.getItem(r));o&&n.setCurrentTime(o).catch(function(t){switch(t.name){}});
//# sourceMappingURL=commonHelpers2.js.map