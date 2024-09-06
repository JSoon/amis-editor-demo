/*! For license information please see 248.63d02419.js.LICENSE.txt */
(self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[]).push([[248],{20248:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}r.r(t),r.d(t,{default:function(){return E}});var i=r(54756),a=r.n(i),c=r(96540),u=r(13942),s=r(36607),l=r(2766),h=r(93865),f=r(77387);function p(e){var t=window.location.hash,r=t.indexOf("?");if(-1!==r){var n=t.substring(r+1);return new URLSearchParams(n).get(e)}return""}var d=["audio","carousel","custom","log","sparkline"],m=["form","input-text","textarea","input-rich-text","input-number","radios","dict-radios","checkbox","checkboxes","dict-checkboxes","select","dict-select","switch","input-date","input-date-range","input-file","input-image"],v=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).order=9999,t}return(0,f.A)(t,e),t.prototype.buildSubRenderers=function(e,t){console.log("renderers",t);var r=p("editorType");t.forEach((function(e){e.disabledRendererPlugin=!0;var t=e.rendererName;"form"===r?m.includes(t)&&(e.disabledRendererPlugin=!1,e.isBaseComponent=!0):d.includes(t)?e.disabledRendererPlugin=!1:e.disabledRendererPlugin=!0}))},t}(u.j8V);(0,u.I0V)(v);var y=r(72505),g=r.n(y),w=window.location.protocol+"//"+window.location.host;/^\/amis-editor-demo/.test(window.location.pathname)&&(w+="/amis-editor");var b=w+"/schema.json",x="/api",E=(0,s.WQ)("store")((0,s.PA)((function(e){var t=e.store,r=(e.location,e.history),n=e.match,i=parseInt(n.params.id,10),s=((0,h.IJ)(),p("editorType"));function f(){return(f=o(a().mark((function e(){var r,n,o,c,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1===i){e.next=12;break}return e.next=3,g()({method:"post",url:x+"/systemTools/formBuild/queryById/"+i});case 3:if(r=e.sent,n=r.data,o=n.code,c=n.data,200===o){e.next=7;break}return e.abrupt("return",l.oRP.error("表单数据获取失败"));case 7:u=JSON.parse(c.schemaData||"{}"),t.updateSchema(u),E(c.formName),e.next=13;break;case 12:t.updateSchema({type:"page",title:"新增页面",regions:["body"]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var d=(0,c.useState)(!1),m=d[0],v=d[1],y=(0,c.useState)(""),w=y[0],E=y[1];function L(){return(L=o(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.trim()){e.next=2;break}return e.abrupt("return",l.oRP.error("请输入表单名称"));case 2:return console.log("submit",t.schema),e.next=5,g()({method:"post",url:x+"/systemTools/formBuild/"+(-1===i?"insert":"update"),data:{id:-1===i?null:i,formName:w,schemaData:JSON.stringify(t.schema)}});case 5:if(200===e.sent.data.code){e.next=9;break}return e.abrupt("return",l.oRP.error("提交失败"));case 9:l.oRP.success("提交成功"),null==(r=window.opener)||r.location.reload();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.createElement("div",{className:"Editor-Demo"},c.createElement("div",{className:"Editor-header"},c.createElement("div",{className:"Editor-title"},"amis 可视化编辑器"),c.createElement("div",{className:"Editor-header-actions"},c.createElement("div",{className:"flex mr-2"},c.createElement(u.eVz,null)),"form"!==s||t.preview?c.createElement("div",{className:"header-action-btn m-1 "+(t.preview?"primary":""),onClick:function(){t.setPreview(!t.preview)}},t.preview?"编辑":"预览"):null,!t.preview&&c.createElement(c.Fragment,null,c.createElement("div",{className:"header-action-btn",onClick:function(){return v(!0)}},"提交"),c.createElement("div",{className:"header-action-btn exit-btn",onClick:function(){r.push("/"+t.pages[i].path)}},"退出")))),c.createElement("div",{className:"Editor-inner"},c.createElement(u.KE6,{theme:"cxd",preview:t.preview,isMobile:t.isMobile,value:t.schema,onInit:function(){return f.apply(this,arguments)},onChange:function(e){t.updateSchema(e)},onPreview:function(){t.setPreview(!0)},className:"is-fixed",$schemaUrl:b,showCustomRenderersPanel:!0,amisEnv:{fetcher:t.fetcher,notify:t.notify,alert:t.alert,copy:t.copy}})),c.createElement(l.Cwz,{title:-1===i?"新增":"编辑",show:m,onCancel:function(){return v(!1)},onConfirm:function(){return L.apply(this,arguments)}},c.createElement(l.zBI,{type:"input-text",label:"表单名称",isRequired:!0},c.createElement(l.cl_,{placeholder:"请输入表单名称，最多50字",maxLength:50,value:w,onChange:function(e){return E(e)}}))))})))},4633:function(e,t,r){var n=r(73738).default;function o(){"use strict";e.exports=o=function(){return r},e.exports.__esModule=!0,e.exports.default=e.exports;var t,r={},i=Object.prototype,a=i.hasOwnProperty,c=Object.defineProperty||function(e,t,r){e[t]=r.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",h=u.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(t){f=function(e,t,r){return e[t]=r}}function p(e,t,r,n){var o=t&&t.prototype instanceof b?t:b,i=Object.create(o.prototype),a=new T(n||[]);return c(i,"_invoke",{value:j(e,r,a)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}r.wrap=p;var m="suspendedStart",v="suspendedYield",y="executing",g="completed",w={};function b(){}function x(){}function E(){}var L={};f(L,s,(function(){return this}));var k=Object.getPrototypeOf,_=k&&k(k(I([])));_&&_!==i&&a.call(_,s)&&(L=_);var N=E.prototype=b.prototype=Object.create(L);function P(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,i,c,u){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&a.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):t.resolve(h).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}})}function j(e,r,n){var o=m;return function(i,a){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=R(c,n);if(u){if(u===w)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var s=d(e,r,n);if("normal"===s.type){if(o=n.done?g:v,s.arg===w)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function R(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,w;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,w):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(n(e)+" is not iterable")}return x.prototype=E,c(N,"constructor",{value:E,configurable:!0}),c(E,"constructor",{value:x,configurable:!0}),x.displayName=f(E,h,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,E):(e.__proto__=E,f(e,h,"GeneratorFunction")),e.prototype=Object.create(N),e},r.awrap=function(e){return{__await:e}},P(O.prototype),f(O.prototype,l,(function(){return this})),r.AsyncIterator=O,r.async=function(e,t,n,o,i){void 0===i&&(i=Promise);var a=new O(p(e,t,n,o),i);return r.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},P(N),f(N,h,"Generator"),f(N,s,(function(){return this})),f(N,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},r.values=I,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,w):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),w}},r}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},54756:function(e,t,r){var n=r(4633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);