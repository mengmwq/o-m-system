webpackJsonp([1],{1119:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"divBut"},[o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[o("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-width":"80px"}},[o("el-row",[o("el-col",{staticStyle:{margin:"10px 0"}},[o("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},["总部"==this.company?o("div",[o("span",{staticStyle:{"font-family":"cursive",color:"deepskyblue"},on:{click:function(e){return t.backAbnormalInformation()}}},[t._v("  异常信息")]),t._v(">"),o("span",{staticStyle:{"font-family":"cursive"}},[t._v(t._s(""==t.Area?"合计":t.Area))])]):o("div",[o("span",{staticStyle:{"font-family":"cursive",color:"deepskyblue"},on:{click:function(e){return t.backAbnormalInformation()}}},[t._v("  异常信息")]),t._v(">"),o("span",{staticStyle:{"font-family":"cursive"}},[t._v(t._s(""==t.CompanyNet?"合计":t.CompanyNet))])])])]),t._v(" "),o("el-col",[o("el-form-item",{attrs:{label:"客户账号"}},[o("el-input",{attrs:{"suffix-icon":"el-icon-date",maxlength:255},model:{value:t.AccountNumber,callback:function(e){t.AccountNumber=e},expression:"AccountNumber"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"订单号码"}},[o("el-input",{attrs:{"suffix-icon":"el-icon-date",maxlength:255},model:{value:t.ID,callback:function(e){t.ID=e},expression:"ID"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"录入人"}},[o("el-input",{attrs:{"suffix-icon":"el-icon-date",maxlength:255},model:{value:t.EntryName,callback:function(e){t.EntryName=e},expression:"EntryName"}})],1)],1),t._v(" "),o("el-col",[o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"总部"==this.company,expression:"this.company =='总部'"}],attrs:{label:"区域"}},[o("el-select",{attrs:{filterable:""},on:{focus:function(e){return t.focus(e)}},model:{value:t.Area,callback:function(e){t.Area=e},expression:"Area"}},t._l(t.roles,function(t){return o("el-option",{key:t.ROW_NUMBER,attrs:{label:t.Area,value:t.Area}})}),1),t._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"总部"==this.company,expression:"this.company =='总部'"}],attrs:{label:"网络公司"}},[o("el-select",{attrs:{filterable:""},on:{focus:function(e){return t.focus(e)}},model:{value:t.CompanyNet,callback:function(e){t.CompanyNet=e},expression:"CompanyNet"}},t._l(t.ComPanN,function(t){return o("el-option",{key:t.ROW_NUMBER,attrs:{label:t.Company,value:t.Company}})}),1)],1)],1),t._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"总部"!==this.company,expression:"this.company !=='总部'"}],attrs:{label:"网络公司"}},[o("el-select",{attrs:{filterable:""},on:{focus:function(e){return t.focus(e)}},model:{value:t.CompanyNet,callback:function(e){t.CompanyNet=e},expression:"CompanyNet"}},t._l(t.ComPanNFk,function(t){return o("el-option",{key:t.ROW_NUMBER,attrs:{label:t.Company,value:t.Company}})}),1)],1),t._v(" "),o("div",{staticStyle:{float:"right"}},[o("img",{staticStyle:{width:"23px",height:"23px"},attrs:{src:n(586),alt:""},on:{click:t.getData}}),t._v(" "),"总部"==t.company?o("img",{staticStyle:{margin:"0 30px",width:"23px",height:"23px"},attrs:{src:n(566),alt:""},on:{click:function(e){return t.dataExport()}}}):t._e(),t._v(" "),"总部"!==t.company?o("img",{staticStyle:{margin:"0 30px",width:"23px",height:"23px"},attrs:{src:n(566),alt:""},on:{click:function(e){return t.dataExport2()}}}):t._e(),t._v(" "),o("img",{staticStyle:{width:"23px",height:"23px"},attrs:{src:n(587),alt:""},on:{click:function(e){return t.refresh()}}})])],1)],1)],1),t._v(" "),o("div",{staticStyle:{background:"#fff",padding:"10px","border-radius":"10px"}},[o("el-row",[o("el-col",{staticStyle:{margin:"10px 0"}},[o("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"}},[o("div",{staticStyle:{"font-family":"cursive"}},[t._v("共计:"+t._s(t.ccc)+"条异常")])])]),t._v(" "),o("el-col",[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#EFF3F8"},stripe:"",height:"400",data:t.tableData,id:"tableData"},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),"总部"==t.company?o("el-table-column",{attrs:{label:"区域",prop:"CompanyArea",align:"center"}}):o("el-table-column",{attrs:{label:"网络公司",prop:"CompanyNet",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"客户账号",prop:"AccountNumber",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{label:"订单号",align:"center",prop:"id"}}),t._v(" "),o("el-table-column",{attrs:{label:"货物类型",align:"center",prop:"BusinessType"}}),t._v(" "),o("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"CargoName"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"温度区间",prop:"WDQJ"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"原因类型",prop:"CityCode"}}),t._v(" "),o("el-table-column",{attrs:{label:"异常内容",align:"center",prop:"NotReason"}}),t._v(" "),o("el-table-column",{attrs:{label:"录入时间","show-overflow-tooltip":!0,align:"center",prop:"Indate"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"录入人",prop:"entryname"}}),t._v(" "),"总部"==t.company?o("el-table-column",{attrs:{align:"center",label:"网络公司",prop:"CompanyNet"}}):t._e(),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"备注","show-overflow-tooltip":!0,prop:"note1"}})],1)],1)],1),t._v(" "),o("div",{staticClass:"pagination"},[o("el-pagination",{attrs:{"page-sizes":[20,50,100,500,2e3],"page-size":20,"current-page":t.cur_page,layout:"total, sizes, prev, pager, next, jumper",total:t.ccc},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1)])},staticRenderFns:[]}},1143:function(t,e,n){var o=n(826);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(208)("4dbb866c",o,!0)},1144:function(t,e,n){var o=n(827);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(208)("6ed1bd90",o,!0)},546:function(t,e,n){n(1143),n(1144);var o=n(209)(n(804),n(1119),"data-v-5e89dbf4",null);t.exports=o.exports},553:function(t,e,n){"use strict";function o(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o}),this.resolve=i(e),this.reject=i(n)}var i=n(206);t.exports.f=function(t){return new o(t)}},555:function(t,e,n){var o=n(144),i=n(53)("toStringTag"),a="Arguments"==o(function(){return arguments}()),r=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=r(e=Object(t),i))?n:a?o(e):"Object"==(c=o(e))&&"function"==typeof e.callee?"Arguments":c}},556:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},557:function(t,e,n){var o=n(70),i=n(63),a=n(553);t.exports=function(t,e){if(o(t),i(e)&&e.constructor===t)return e;var n=a.f(t);return(0,n.resolve)(e),n.promise}},558:function(t,e,n){var o=n(70),i=n(206),a=n(53)("species");t.exports=function(t,e){var n,r=o(t).constructor;return void 0===r||void 0==(n=o(r)[a])?e:i(n)}},559:function(t,e,n){var o,i,a,r=n(207),c=n(572),l=n(210),s=n(145),u=n(34),m=u.process,p=u.setImmediate,f=u.clearImmediate,h=u.MessageChannel,d=u.Dispatch,v=0,A={},y=function(){var t=+this;if(A.hasOwnProperty(t)){var e=A[t];delete A[t],e()}},g=function(t){y.call(t.data)};p&&f||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return A[++v]=function(){c("function"==typeof t?t:Function(t),e)},o(v),v},f=function(t){delete A[t]},"process"==n(144)(m)?o=function(t){m.nextTick(r(y,t,1))}:d&&d.now?o=function(t){d.now(r(y,t,1))}:h?(i=new h,a=i.port2,i.port1.onmessage=g,o=r(a.postMessage,a,1)):u.addEventListener&&"function"==typeof postMessage&&!u.importScripts?(o=function(t){u.postMessage(t+"","*")},u.addEventListener("message",g,!1)):o="onreadystatechange"in s("script")?function(t){l.appendChild(s("script")).onreadystatechange=function(){l.removeChild(this),y.call(t)}}:function(t){setTimeout(r(y,t,1),0)}),t.exports={set:p,clear:f}},566:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE1NUQxODMyNkE1MjExRTlCRTBEQUZCRkU3NTIwQTQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE1NUQxODMzNkE1MjExRTlCRTBEQUZCRkU3NTIwQTQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTU1RDE4MzA2QTUyMTFFOUJFMERBRkJGRTc1MjBBNDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTU1RDE4MzE2QTUyMTFFOUJFMERBRkJGRTc1MjBBNDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6eA4P+AAABcElEQVR42mKUTFzKQAI4AsT6QMyDRe43ED8FYkV0CSYSLPgPxNZoev4gsRmBWAGqbj85lvyH0t+A+BYQH4caygqlDwDxByRLHYD4GimWwCz4BcRngdgQiK3Q1DgCsSgQrwHif1AxTSDeSYwln5HYl4DYjoD6SCCegOQjN2Is4YFqeAHEpkQGbTEQN0KDDwTOYLPkOdTg/1D6CxBLMpAGWoB4L9QiPRYkib9YfAaS52AgD/yA6mVlwmIBSPIZkmJOMi2JQU5dyBY8ghoqDU2ajAyUgScgRzMhWQByvTwDdQEoX/1BjgNpBuoDJVAKhVnyhYE2gAc5n3ARqek5NGlvJ8UmJhLLMAko7UGKJSxkpqBfRKpjJLWoRwb/yAkuUgEjtSx5DI3kE1jk/mJRt54cS2SgtDmBOIGpcyXHEka0igs5L/EC8UekCo0BR71PVJwgW8SNxGYGYj5i44iJCpHMSK3UxUhJKmOiINkSnYwBAgwAxOpErXCJj7MAAAAASUVORK5CYII="},568:function(t,e,n){t.exports={default:n(569),__esModule:!0}},569:function(t,e,n){n(212),n(213),n(214),n(581),n(582),n(583),t.exports=n(62).Promise},570:function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},571:function(t,e,n){var o=n(207),i=n(574),a=n(573),r=n(70),c=n(211),l=n(580),s={},u={},e=t.exports=function(t,e,n,m,p){var f,h,d,v,A=p?function(){return t}:l(t),y=o(n,m,e?2:1),g=0;if("function"!=typeof A)throw TypeError(t+" is not iterable!");if(a(A)){for(f=c(t.length);f>g;g++)if((v=e?y(r(h=t[g])[0],h[1]):y(t[g]))===s||v===u)return v}else for(d=A.call(t);!(h=d.next()).done;)if((v=i(d,y,h.value,e))===s||v===u)return v};e.BREAK=s,e.RETURN=u},572:function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},573:function(t,e,n){var o=n(93),i=n(53)("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},574:function(t,e,n){var o=n(70);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(e){var a=t.return;throw void 0!==a&&o(a.call(t)),e}}},575:function(t,e,n){var o=n(53)("iterator"),i=!1;try{var a=[7][o]();a.return=function(){i=!0},Array.from(a,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var a=[7],r=a[o]();r.next=function(){return{done:n=!0}},a[o]=function(){return r},t(a)}catch(t){}return n}},576:function(t,e,n){var o=n(34),i=n(559).set,a=o.MutationObserver||o.WebKitMutationObserver,r=o.process,c=o.Promise,l="process"==n(144)(r);t.exports=function(){var t,e,n,s=function(){var o,i;for(l&&(o=r.domain)&&o.exit();t;){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(l)n=function(){r.nextTick(s)};else if(!a||o.navigator&&o.navigator.standalone)if(c&&c.resolve){var u=c.resolve(void 0);n=function(){u.then(s)}}else n=function(){i.call(o,s)};else{var m=!0,p=document.createTextNode("");new a(s).observe(p,{characterData:!0}),n=function(){p.data=m=!m}}return function(o){var i={fn:o,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},577:function(t,e,n){var o=n(55);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:o(t,i,e[i]);return t}},578:function(t,e,n){"use strict";var o=n(34),i=n(62),a=n(54),r=n(38),c=n(53)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:o[t];r&&e&&!e[c]&&a.f(e,c,{configurable:!0,get:function(){return this}})}},579:function(t,e,n){var o=n(34),i=o.navigator;t.exports=i&&i.userAgent||""},580:function(t,e,n){var o=n(555),i=n(53)("iterator"),a=n(93);t.exports=n(62).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||a[o(t)]}},581:function(t,e,n){"use strict";var o,i,a,r,c=n(71),l=n(34),s=n(207),u=n(555),m=n(91),p=n(63),f=n(206),h=n(570),d=n(571),v=n(558),A=n(559).set,y=n(576)(),g=n(553),b=n(556),I=n(579),N=n(557),x=l.TypeError,R=l.process,C=R&&R.versions,w=C&&C.v8||"",S=l.Promise,k="process"==u(R),M=function(){},D=i=g.f,E=!!function(){try{var t=S.resolve(1),e=(t.constructor={})[n(53)("species")]=function(t){t(M,M)};return(k||"function"==typeof PromiseRejectionEvent)&&t.then(M)instanceof e&&0!==w.indexOf("6.6")&&-1===I.indexOf("Chrome/66")}catch(t){}}(),j=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},G=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var o=t._v,i=1==t._s,a=0;n.length>a;)!function(e){var n,a,r,c=i?e.ok:e.fail,l=e.resolve,s=e.reject,u=e.domain;try{c?(i||(2==t._h&&T(t),t._h=1),!0===c?n=o:(u&&u.enter(),n=c(o),u&&(u.exit(),r=!0)),n===e.promise?s(x("Promise-chain cycle")):(a=j(n))?a.call(n,l,s):l(n)):s(o)}catch(t){u&&!r&&u.exit(),s(t)}}(n[a++]);t._c=[],t._n=!1,e&&!t._h&&U(t)})}},U=function(t){A.call(l,function(){var e,n,o,i=t._v,a=J(t);if(a&&(e=b(function(){k?R.emit("unhandledRejection",i,t):(n=l.onunhandledrejection)?n({promise:t,reason:i}):(o=l.console)&&o.error&&o.error("Unhandled promise rejection",i)}),t._h=k||J(t)?2:1),t._a=void 0,a&&e.e)throw e.v})},J=function(t){return 1!==t._h&&0===(t._a||t._c).length},T=function(t){A.call(l,function(){var e;k?R.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})})},Y=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),G(e,!0))},Z=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw x("Promise can't be resolved itself");(e=j(t))?y(function(){var o={_w:n,_d:!1};try{e.call(t,s(Z,o,1),s(Y,o,1))}catch(t){Y.call(o,t)}}):(n._v=t,n._s=1,G(n,!1))}catch(t){Y.call({_w:n,_d:!1},t)}}};E||(S=function(t){h(this,S,"Promise","_h"),f(t),o.call(this);try{t(s(Z,this,1),s(Y,this,1))}catch(t){Y.call(this,t)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(577)(S.prototype,{then:function(t,e){var n=D(v(this,S));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=k?R.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&G(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),a=function(){var t=new o;this.promise=t,this.resolve=s(Z,t,1),this.reject=s(Y,t,1)},g.f=D=function(t){return t===S||t===r?new a(t):i(t)}),m(m.G+m.W+m.F*!E,{Promise:S}),n(94)(S,"Promise"),n(578)("Promise"),r=n(62).Promise,m(m.S+m.F*!E,"Promise",{reject:function(t){var e=D(this);return(0,e.reject)(t),e.promise}}),m(m.S+m.F*(c||!E),"Promise",{resolve:function(t){return N(c&&this===r?S:this,t)}}),m(m.S+m.F*!(E&&n(575)(function(t){S.all(t).catch(M)})),"Promise",{all:function(t){var e=this,n=D(e),o=n.resolve,i=n.reject,a=b(function(){var n=[],a=0,r=1;d(t,!1,function(t){var c=a++,l=!1;n.push(void 0),r++,e.resolve(t).then(function(t){l||(l=!0,n[c]=t,--r||o(n))},i)}),--r||o(n)});return a.e&&i(a.v),n.promise},race:function(t){var e=this,n=D(e),o=n.reject,i=b(function(){d(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return i.e&&o(i.v),n.promise}})},582:function(t,e,n){"use strict";var o=n(91),i=n(62),a=n(34),r=n(558),c=n(557);o(o.P+o.R,"Promise",{finally:function(t){var e=r(this,i.Promise||a.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},583:function(t,e,n){"use strict";var o=n(91),i=n(553),a=n(556);o(o.S,"Promise",{try:function(t){var e=i.f(this),n=a(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},586:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkJEN0YwRTA1QkY3MTFFOUIzQTFEODc1QzA2REM5RTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkJEN0YwRTE1QkY3MTFFOUIzQTFEODc1QzA2REM5RTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyQkQ3RjBERTVCRjcxMUU5QjNBMUQ4NzVDMDZEQzlFMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyQkQ3RjBERjVCRjcxMUU5QjNBMUQ4NzVDMDZEQzlFMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvG6LXwAAAKiSURBVHjatJZraI5hHMafdxY5Lc2WERKiYYQP5jSEhfHRcvpIIWfiA7M57ctySm3FF+fQ8gH7gByTJjnkuIiiZGMorLGE36Vr9bY874zHv367n/d+3/2v57oP//uOpU3bFSSI9pAJ401nSPF3H+EdXIIr8PhtxfK6sERJCUTGwXG4CSugDdxz3xG4475V/s2x9LzdOWHJYr9x1AE2w0q4D/uc/E1IjtYwHxbBINgBhbj7nMhRKpRbpBAGw54mIkp6CkphIXQjaSlk8bzJDstxlxrmSG92zkM2HSpCHCyGuZABveET7NcoIFaLwAy/iOYtl76GeEdqt1skN4FIYCejYQhMgIOwFCoRySbxaZ4nOlcJfbF4oVGwxMN1Pviz0BxcJrH+Lxv05hdIPIy+izwXwTIY2Th0WsInoa+XckPQgiDprxaBDA9XWxjhpf9Eyx5mylF/D1dJS0WaCFbTzIYesMZzUwxToJ+EJut3cCL4xyD5bZoyWIDDXrQHoFZzJiFtsrvwPogmjkJHGUD4q3PnJLmsPA+iC1WMFzDcn59CWpJrV3VUKq53r7zPAj+nJHuJfwuijcNxC6uV/kioXqszShVclcV97K49JzevYUDw/0JlqkZClZDlqh1psMQ1UkNVQSR0Frq4Kkcd+dBJh6OEHsA116Uo3ehQXAsqslVaDHU+QcdG7GYD9JQrFkd9sjtvmajcTLVQMSI3mrsz/K1IHs0ZncqIrG/ucqJCu65xs7VAZItFnsEPPhckupwo5vim8xD2wiH4EJJfpWaWKrb34zZfaObBVoGzgjChdjAGVvuseuniWOUjRU67ejNmenvo8NxJ0ut2F/NtSnNVFGvmAqlyPxAm+Z6Q7kvldx/lNaBj+yo8QuRLk6HU1GyEPj8FGAC3ycsD/UsaHwAAAABJRU5ErkJggg=="},587:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFDNDk3QTQwNkE1MjExRTk5RTREOTI1NkY0NDJFNkJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFDNDk3QTQxNkE1MjExRTk5RTREOTI1NkY0NDJFNkJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUM0OTdBM0U2QTUyMTFFOTlFNEQ5MjU2RjQ0MkU2QkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUM0OTdBM0Y2QTUyMTFFOTlFNEQ5MjU2RjQ0MkU2QkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6oj81oAAACXklEQVR42rSWW4hNURjH9+wxQ+kMGUaUXN6MoY7L8OA2ry7RoMilRkoNHnhSHsjMC/FCQuRSrilFkkI0Mu7OgyjOk6Rck0SHY/D7pv+adqe9d8c5+3z1a6+19trrv9f61vq+VTWi7bQXY82wHqZCE/ghfT7AY7gMxyAfNpAfITBcH92AtTBJfXOQhefwDv5CA8yDQ/AEWsMG7BfSNhsOaAZmr+EKXIIM/JRAtX6oBVbCLJgIF2A7dMYJtahjvQbbDbvgS8TMv8IrOAyLJJCGDhgJ7a5jdSq9xJXHwzWJvIdlWo6cV5y9hFMwWks9DX7DnaCP6uSTIXJuq0T/177DKjireqf81ye0AmaovBm6vfJsDTxSucMJDYJNarwIZ7zyzZZsh8qTYbUJTYcJ0KPdlpRdhdtuxUxovioP4a6XrLlo0GxCU1Tp1hlJ0m7qmNSb0JjAwUzaPiqC9G0Gs28VEPqj49Ir1BMTjpKw/k7orRoaKiAyEEY5oRdqbKqAUKPE8n5gS89UICzVqqBWLnARZ6GeWWu4LqfZFBeUITQHzsNeidXAUndGfYX5c2rYCsNKFLLoslgB+RdsUSS38n5fqXePtvdY2FemX7IS3Ka6zfKpW8tMICMuL1GsRk/LskchBQ9cwA7eGSybHlfZXp5Uqi7WavUcGsjQJ9z5LLycbAyIWU65B+tgXBFCdSG78CB0hUWDH7r1PIOd8tkReAO3dPvJKWd9Kvg2ozxUOGaqVzXmXpfWbNojtnJXSLtl6cGBsDYAPltmiItv9ocbNP25uoY1asvmI765HzXYPwEGACPofgq57xpqAAAAAElFTkSuQmCC"},588:function(t,e,n){t.exports={default:n(590),__esModule:!0}},589:function(t,e,n){"use strict";e.__esModule=!0;var o=n(588),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t,e,n){return e in t?(0,i.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},590:function(t,e,n){n(591);var o=n(62).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},591:function(t,e,n){var o=n(91);o(o.S+o.F*!n(38),"Object",{defineProperty:n(54).f})},633:function(t,e,n){"use strict";function o(t,e){var n=t.offsetWidth,o=t.offsetHeight,i=t.offsetTop,r=t.offsetLeft,l=document.createElement("canvas"),s=0,u=document.documentElement.clientWidth||document.body.clientWidth,m=window.innerWidth;m>u&&(s=(m-u)/2),l.width=2*n,l.height=2*o;var p=l.getContext("2d");p.scale(2,2),p.translate(-r-s,-i),a()(t,{dpi:300,useCORS:!0}).then(function(t){var n=t.width,o=t.height,i=n/592.28*841.89,a=o,r=0,l=595.28/n*o,s=t.toDataURL("image/jpeg",1),u=new c.a("","pt","a4");if(a<i)u.addImage(s,"JPEG",0,10,595.28,l);else for(;a>0;)u.addImage(s,"JPEG",0,r,595.28,l),a-=i,r-=841.89,a>0&&u.addPage();u.save(e)})}var i=n(215),a=n.n(i),r=n(216),c=n.n(r);e.a={downloadPDF:o}},804:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=n(589),a=n.n(i),r=n(568),c=n.n(r);n(633);e.default={name:"SenderManagement",data:function(){return{roles:[],ComPanN:[],ComPanNFk:[],CompanyNet:"",Nex:"",AccountNumber:"",EntryName:"",Area:"",Company:"",value1:"",cur_page:1,limit:20,ccc:0,addSendDetailsModel:!1,EditDetailsModel:!1,company:"",nex:"",ID:"",NEX:"",StartTime:"",tableData:[],EndTime:"",multipleSelection:[],loading:!0}},mounted:function(){this.Area=this.$route.query.Area,this.CompanyNet=this.$route.query.CompanyNet,this.StartTime=this.$route.query.StartTime,this.EndTime=this.$route.query.EndTime,"合计"==this.Area?this.Area="":"合计"==this.CompanyNet&&(this.CompanyNet=""),this.Nex=this.$route.query.Nex,this.company=window.sessionStorage.getItem("compony"),this.getData(),this.getAreaData(),this.getnetData(),this.getnetDataFk()},methods:(o={handleSelectionChange:function(t){this.multipleSelection=t},backAbnormalInformation:function(){this.$router.push({path:"/abnormalInformation"})},refresh:function(){this.cur_page=1,this.loading=!0,this.xdtime="",this.EntryName="",this.ID="",this.Area="",this.AccountNumber="",this.CompanyArea="",this.value1="",this.CompanyNet="",this.CompanyNet="",this.getData(),this.loading=!1},getnetDataFk:function(){var t=this;t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/fknet",method:"post",data:{Company:this.company,fkNet:this.CompanyNet},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(function(e){t.ComPanNFk=e.data.data})},getAreaData:function(){var t=this;t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/checkarea",method:"post",data:{Company:this.company},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(function(e){t.roles=e.data.data})},getnetData:function(){var t=this;t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/checkareanet",method:"post",data:{Company:this.company,Area:this.Area},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(function(e){t.ComPanN=e.data.data})},focus:function(t){this.getAreaData(),this.getnetData()},dataExport:function(){var t=this;this.loading=!0;var e=void 0;new c.a(function(n,o){e=t.multipleSelection,0==e.length&&(e=t.tableData),n(e)}).then(function(e){n.e(19).then(function(){var o=n(596),i=o.export_json_to_excel,a=["区域","客户账号","订单号","货物类型","产品名称","温度区间","原因类型","异常内容","录入时间","录入人","网络公司","备注"],r=["CompanyArea","AccountNumber","id","BusinessType","CargoName","WDQJ","CityCode","NotReason","Indate","entryname","CompanyNet","note1"],c=e;t.loading=!1,i(a,t.formatJson(r,c),"异常信息区域详情表")}.bind(null,n)).catch(n.oe)})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})},dataExport2:function(){var t=this;this.loading=!0;var e=void 0;new c.a(function(n,o){e=t.multipleSelection,0==e.length&&(e=t.tableData),n(e)}).then(function(e){n.e(19).then(function(){var o=n(596),i=o.export_json_to_excel,a=["网络公司","客户账号","订单号","货物类型","产品名称","温度区间","原因类型","异常内容","录入时间","录入人","备注"],r=["CompanyNet","AccountNumber","id","BusinessType","CargoName","WDQJ","CityCode","NotReason","Indate","entryname","note1"],c=e;t.loading=!1,i(a,t.formatJson(r,c),"异常信息分控详情表")}.bind(null,n)).catch(n.oe)})}},a()(o,"formatJson",function(t,e){return e.map(function(e){return t.map(function(t){return e[t]})})}),a()(o,"getData",function(){var t=this;t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/reportcenter/abnormaldetails",method:"post",data:{PageSize:this.limit,Page:this.cur_page,Company:this.company,Area:this.Area||"",CompanyNet:this.CompanyNet||"",AccountNumber:this.AccountNumber,EntryName:this.EntryName,ID:this.ID,StartTime:this.StartTime,EndTime:this.EndTime},transformRequest:[function(t){var e="";for(var n in t)e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&";return e}]}).then(function(e){e.data.code,t.loading=!1,t.tableData=e.data.data.result,t.ccc=e.data.data.sum||0})}),a()(o,"handleSizeChange",function(t){this.loading=!0,this.limit=t,this.getData()}),a()(o,"handleSelectionChange",function(t){this.multipleSelection=t}),a()(o,"handleCurrentChange",function(t){this.loading=!0,this.cur_page=t,this.getData()}),o)}},826:function(t,e,n){e=t.exports=n(92)(!1),e.push([t.i,".el-select{display:inline-block;position:relative;margin-right:10px}.curstomNum:not(.aaa) .cell{color:#649efe!important}.curstomNum:not(.aaa) .cell:hover{cursor:pointer}.divBut{padding:20px;overflow-y:scroll;height:100%}.el-table--striped .el-table__body tr.el-table__row--striped td{background:#f9fafd}.el-table .cell{font-size:10px}",""])},827:function(t,e,n){e=t.exports=n(92)(!1),e.push([t.i,"",""])}});