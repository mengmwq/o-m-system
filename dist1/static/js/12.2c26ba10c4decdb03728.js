webpackJsonp([12],{1100:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAD1UlEQVQ4T5WUbUzVZRjGr+t5/ocXEZgiimUr1CXS4RyQVqvWsq0Pfmy1sLbWelso6SqVgFI7672NdON1tmWtL260WGvOxBC0Nj/J+zkImyKbbjKERA5wDuf8z3O3/8HT0CD0/vzcv+e57+t6LuIuy3uo+34mu94WkZdBTijGKrt2FvwJUgBh8eELOdEk85SBBLgks0l00UjAbTSqKHxCiDEK1gNoDE3rrwYr8oLFRy5lxuzwfoBbCfPN/0If+uFySub01HMkDwpwH6COGkGrhjkKqjZEZj/s/qBowlPTs45aVxOq08xEf1wUWlTTmW100naC7wkkRlHVk1MzP6dlJGVp0S0A2xPQ4iPnXVMRlZ0c1jd7y73Tceim7wfSU0Ky1iCaRSUitmu50vIKwW0iMkAxn0XW8Fx/iTuypT6w0UBaBPwjaIUqhkofvXnnCplXdyErmVIGkVdBWBQICC0iFsATgPq2ZyzvInw0TvMcFA603bJm9nYsBC2s7X1eqA6RagQi7SAiTrPQXBKmnurduXF0/kvcNX0bLK1aBRhRVJVK553rKGV0/hl6GgJVCthB4YFZmOZUK2wcTdKvrY2c8dG+czRP7UCuon0aYI5ALlKpqu5V/pMoKYklztJbFzhIhddMTPb07nb/tpTFbr30d4AhQlaIoEu7ZLcd1SlGkCwxe5Teev8BAq+LqH09727+dc7Mi9ctoY6LwE9ymQAPwKh9ULF3AGYr4bF7hrqP9G2wouoEyHFAsgEZMsbaEXPZGa6YTrNhX7nn8T21PblUViuBHABXDcRnX8cv/T53XGCnWFgX+AhAqSh8bOlQ8/i1YNw6w9gaSdho/jIKGnrXa9GOUJMw+GQsOtFydc+TodvVr/W/qBSrQRkWqJMQE4EBCHM5zNBfA7seH5/f8K9PBWeNiu3tK/Pc+I/5PY09q1VMvQ/wJSHVnPmpAFECNotRtb27Ng0nBLztRwVDFUOVC/wo55a5lAnlCvRqwAZEp4FmO8BnCHQawacrx/I7HN8moABOIxKNBwqaRBeM9WX0jY4H4XvWXjhQfKKKsgZzjLbfpNDJ0ElQfSEz0eOSxjXaqFMg2hJQZ1oaVykE/vC0ckRcvPLr/cuTgW0icLJyhVA1Gome1dQ/QeQMotFy56XFX5/PjKWnlkPwmC3my6VD2tdueVdmb4HmfhJeGFwB8IhQvgunWJ8PvpUXhAjdDf51FtXT9qzpWhoaH0RYeHjgQbhMGYAXAN6gQVXX301t8PniFnQq3+dP6sd1c5fQuaaHqwdXpSyzN8PY05NpGf3Db+SGF1reP5459SyRQE8TAAAAAElFTkSuQmCC"},1108:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"20px","overflow-y":"scroll",height:"100%"}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"拼命加载中"}},[i("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[i("div",{staticClass:"bo"},t._l(t.staData,function(e,a){return i("span",{key:a,class:{boActive:t.isCur===a},on:{click:function(i){t.isCur=a,t.changeSta(e.name)}},model:{value:t.c,callback:function(e){t.c=e},expression:"c"}},[t._v(t._s(e.name))])}),0),t._v(" "),i("div",{staticClass:"bo1"},[i("span",{on:{click:t.luruList}},[t._v("录入")])])]),t._v(" "),i("el-row",[i("el-col",[i("el-row",{attrs:{gutter:24}},[i("el-col",{staticStyle:{height:"80px","align-items":"center",display:"flex"},attrs:{span:24}},[i("el-dropdown",{ref:"messageDrop",staticStyle:{"margin-right":"10px"},attrs:{trigger:"click","hide-on-click":!1},on:{command:t.changeCompany}},[i("span",{staticClass:"el-dropdown-link",staticStyle:{width:"150px"}},[t._v(t._s(t.showSearch)),i("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"公司名称"}},[t._v("公司名称")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"客户账号"}},[t._v("客户账号")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"货物类型"}},[t._v("货物类型")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"订单号"}},[t._v("订单号")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"运单号码"}},[t._v("运单号码")])],1)],1),t._v(" "),i("el-input",{staticStyle:{width:"20%"},model:{value:t.searchData,callback:function(e){t.searchData=e},expression:"searchData"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getTabelData},slot:"append"},[t._v("搜索")])],1),t._v(" "),i("span",{staticStyle:{margin:"0 10px",flex:"1",display:"flex","font-family":"cursive"},on:{click:t.development}},[t._v("精选搜索条件  "),i("i",{class:t.sanja?"sanjiao":"sanjiao2",staticStyle:{margin:"10px 0 0 0"}})]),t._v(" "),i("p",{staticStyle:{margin:"0 10px",flex:"1","justify-content":"flex-end",display:"flex","font-family":"cursive"},on:{click:t.development}},[t._v("总条数："+t._s(t.ccc)+"条")])],1),t._v(" "),i("el-col",{staticStyle:{"align-items":"center",display:"flex",margin:"0"},attrs:{span:24}},[i("el-form",{class:t.isMeng?"isA":"isb",staticStyle:{margin:"10px 0 0 0"},attrs:{inline:!0}},[i("el-row",[i("el-col",[i("el-form-item",{staticStyle:{"margin-right":"30px"},attrs:{label:"下单时间"}},[i("div",{staticClass:"block"},[i("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.xdtime,callback:function(e){t.xdtime=e},expression:"xdtime"}})],1)]),t._v(" "),i("el-form-item",{attrs:{label:"取件时间"}},[i("div",{staticClass:"block"},[i("el-date-picker",{attrs:{type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.TakeTime,callback:function(e){t.TakeTime=e},expression:"TakeTime"}})],1)])],1),t._v(" "),i("el-col",[i("el-form-item",{attrs:{label:"始发城市"}},[i("el-input",{staticStyle:{width:"158px"},model:{value:t.City1,callback:function(e){t.City1=e},expression:"City1"}})],1),t._v(" "),i("el-form-item",{staticStyle:{"margin-right":"30px"},attrs:{label:"目的城市 "}},[i("el-input",{staticStyle:{width:"158px"},model:{value:t.GetCity1,callback:function(e){t.GetCity1=e},expression:"GetCity1"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"取件网络"}},[i("el-input",{staticStyle:{width:"158px"},model:{value:t.CompanyNet,callback:function(e){t.CompanyNet=e},expression:"CompanyNet"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"下单类型"}},[i("el-select",{staticStyle:{width:"160px"},model:{value:t.OrderType,callback:function(e){t.OrderType=e},expression:"OrderType"}},[i("el-option",{key:"TMS",attrs:{label:"TMS",value:"TMS"}}),t._v(" "),i("el-option",{key:"APP ",attrs:{label:"APP",value:"APP"}}),t._v(" "),i("el-option",{key:"WEB ",attrs:{label:"WEB",value:"WEB"}})],1)],1),t._v(" "),i("el-button",{attrs:{type:"primary",size:"medium"},on:{click:t.getData}},[t._v("搜索")]),t._v(" "),i("el-button",{attrs:{type:"success",size:"medium"},on:{click:function(e){return t.refresh()}}},[t._v("重置")])],1)],1)],1)],1),t._v(" "),i("el-col",[i("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-style":{background:"#EFF3F8"},stripe:"","row-key":"id",height:"500",data:t.tableData},on:{"cell-click":t.jumpDetails,"expand-change":t.rowClick}},[i("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:13}},[i("h4",{staticStyle:{"border-left":"4px solid #45A2DF"}},[t._v("    订单信息：")]),t._v(" "),i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:14}},[i("div",{staticClass:"bioage"},[i("span",[t._v("始发地："+t._s(t.Depart)+"-"+t._s(t.City))]),t._v(" "),i("span",[t._v("录入人："+t._s(t.entryname))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("目的地："+t._s(t.GetDepart)+"-"+t._s(t.GetCity))]),t._v(" "),i("span",[t._v("取件人："+t._s(t.GetName))])]),t._v(" "),t._l(t.Box,function(e,a){return i("div",{key:a,staticStyle:{margin:"20px 0"}},[i("span",{staticStyle:{padding:"0px 0","font-size":"12px"}},[t._v("温度箱型："),i("font",{staticStyle:{padding:"5px 5px","border-radius":"5px","font-size":"12px"}},[t._v(t._s(a))])],1),t._v(" "),t._l(t.Box[a],function(e,a){return i("span",{key:a},[i("span",{staticStyle:{margin:"20px 0","font-size":"12px"}},[i("font",{staticStyle:{"font-size":"12px"}},[t._v("  "+t._s(e.PackageName)+"*"+t._s(e.Jian))])],1)])})],2)}),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("温度计: "),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.IsWdj))]),t._v("            保险费率:"),i("span",[t._v(t._s(t.SafeRate))])])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("结算方式："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.PayWay))]),t._v("         保险:"),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.SafeItem)+"  "+t._s(t.SafePay))])])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("取件时间："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.TakeTime))]),t._v("  付款方式:"),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.OutPay)+"  "+t._s(t.PayMoney))])])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("冷车派送："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.IsLCar))]),t._v(t._s(t.LCar))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("备注："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.note1))])])])],2),t._v(" "),i("el-col",{attrs:{span:9,offset:1}},[i("div",{staticClass:"bioage"},[i("span",[t._v("下单类型：客户下单")])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("通知人："+t._s(t.MName))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("通知方式："+t._s(t.MNote))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("通知时间："+t._s(t.MTime))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("是否完成："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v("是")]),i("span",{staticStyle:{padding:"5px 5px"}},[t._v("2019/5/12")])])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("指令状态："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.Condition))])])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("下单时间："),i("span",{staticStyle:{padding:"5px 5px"}},[t._v(t._s(t.Indate))])])])])],1)],1),t._v(" "),i("el-col",{attrs:{span:10,offset:1}},[i("h4",{staticStyle:{"border-left":"4px solid #45A2DF"}},[t._v("    客户信息：")]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("公司名称："+t._s(t.Company))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("联系人："+t._s(t.Manager))]),t._v(" "),i("span",[t._v("科室："+t._s(t.Department))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("联系电话："+t._s(t.Telephone))]),t._v(" "),i("span",[t._v("省/市/区："+t._s(t.Depart)+"/"+t._s(t.City))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("详细地址："+t._s(t.Address))])]),t._v(" "),i("h4",{staticStyle:{"border-left":"4px solid #45A2DF"}},[t._v("    收件人信息：")]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("公司名称："+t._s(t.GetCompany))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("联系人："+t._s(t.GetName))]),t._v(" "),i("span",[t._v("科室："+t._s(t.GetCode))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("联系电话："+t._s(t.GetTelephone))]),t._v(" "),i("span",[t._v("省/市/区："+t._s(t.GetDepart)+"/"+t._s(t.GetCity)+"/"+t._s(t.GetArea))])]),t._v(" "),i("div",{staticClass:"bioage"},[i("span",[t._v("详细地址："+t._s(t.GetAddress))])])])],1)]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"订单号",width:"100",prop:"id",align:"center"}}),t._v(" "),i("el-table-column",{attrs:{label:"货物类型",align:"center",prop:"BusinessType"}}),t._v(" "),i("el-table-column",{attrs:{label:"货物名称",align:"center",prop:"CargoName"}}),t._v(" "),i("el-table-column",{attrs:{label:"客户账号",align:"center",prop:"AccountNumber"}}),t._v(" "),i("el-table-column",{attrs:{label:"收件人",align:"center",prop:"GetName"}}),t._v(" "),i("el-table-column",{attrs:{"class-name":"curstomNum","label-class-name":"aaa",label:"要求取件时间",align:"center",prop:"OrderTime","show-overflow-tooltip":!0}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"时限",prop:"LimitTime"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"是否到付",prop:""},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==e.row.OutPay?i("span",{staticClass:"work"},[t._v(" 否")]):t._e(),t._v(" "),"1"==e.row.OutPay?i("span",{staticClass:"fire"},[t._v("到付")]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{"class-name":"curstomNum","label-class-name":"aaa",label:"是否通知",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"==e.row.IsMessage?i("span",{staticClass:"work"},[t._v(" 已通知")]):t._e(),t._v(" "),"0"==e.row.IsMessage?i("span",{staticClass:"fire"},[i("img",{attrs:{src:a(1100),alt:""}})]):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{"class-name":"Condition",label:"订单状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{style:{color:"指令下达"==e.row.Condition?"#649EFE ":"#606266",cursor:"pointer"}},[t._v("\n                                        "+t._s(e.row.Condition)+"\n                                    ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"下单方式",align:"center",prop:"downType"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"取件网络",prop:"NetCity"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticStyle:{color:"#1ab394",border:"1px solid #1ab394"},attrs:{size:"small",plain:""},on:{click:function(a){return t.oneMoreOrder(e.row)}}},[t._v("再一单")])]}}])})],1)],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{"page-sizes":[20,50,100,500,2e3],"page-size":20,"current-page":t.cur_page,layout:"total, sizes, prev, pager, next, jumper",total:t.ccc},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"修改取件时间",visible:t.allotDialogVisible1,width:"20%"},on:{"update:visible":function(e){t.allotDialogVisible1=e}}},[i("div",[i("div",{staticClass:"block"},[i("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.OrderTime1,callback:function(e){t.OrderTime1=e},expression:"OrderTime1"}})],1),t._v(" "),i("el-form",{ref:"form",staticStyle:{margin:"10px 0 0 0"},attrs:{"label-width":"80px!important;"}},[i("el-form-item",{attrs:{label:"原因类型"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.CityCode,callback:function(e){t.CityCode=e},expression:"CityCode"}},[i("el-option",{attrs:{label:"客户原因",value:"客户原因"}}),t._v(" "),i("el-option",{attrs:{label:"内部原因",value:"内部原因"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"内容描述"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.Note,callback:function(e){t.Note=e},expression:"Note"}})],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.revise()}}},[t._v("保存")]),t._v(" "),i("el-button",{on:{click:function(e){t.allotDialogVisible1=!1}}},[t._v("取 消")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"请录入通知方式",visible:t.tongzhiFangshi,width:"20%"},on:{"update:visible":function(e){t.tongzhiFangshi=e}}},[i("div",[i("el-form",{ref:"form",staticStyle:{margin:"10px 0 0 0"}},[i("el-form-item",[i("el-input",{model:{value:t.MNote,callback:function(e){t.MNote=e},expression:"MNote"}})],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.cacelTzhi()}}},[t._v("保存")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"确定要取消订单？",visible:t.quxiaoFangshi,width:"20%"},on:{"update:visible":function(e){t.quxiaoFangshi=e}}},[i("div",[i("el-form",{ref:"form",staticStyle:{margin:"10px 0 0 0"},attrs:{"label-width":"80px!important;"}},[i("el-form-item",{attrs:{label:"原因类型"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:t.CityCode,callback:function(e){t.CityCode=e},expression:"CityCode"}},[i("el-option",{attrs:{label:"客户原因",value:"客户原因"}}),t._v(" "),i("el-option",{attrs:{label:"内部原因",value:"内部原因"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"内容描述"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.neirong,callback:function(e){t.neirong=e},expression:"neirong"}})],1)],1)],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.cacelOrder()}}},[t._v("保存")]),t._v(" "),i("el-button",{on:{click:function(e){t.quxiaoFangshi=!1}}},[t._v("取 消")])],1)])],1)},staticRenderFns:[]}},1127:function(t,e,a){var i=a(810);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(208)("48ed7dcc",i,!0)},1128:function(t,e,a){var i=a(811);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(208)("9d5b80dc",i,!0)},541:function(t,e,a){a(1127),a(1128);var i=a(209)(a(799),a(1108),"data-v-1df1d360",null);t.exports=i.exports},588:function(t,e,a){t.exports={default:a(590),__esModule:!0}},589:function(t,e,a){"use strict";e.__esModule=!0;var i=a(588),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t,e,a){return e in t?(0,n.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},590:function(t,e,a){a(591);var i=a(62).Object;t.exports=function(t,e,a){return i.defineProperty(t,e,a)}},591:function(t,e,a){var i=a(91);i(i.S+i.F*!a(38),"Object",{defineProperty:a(54).f})},611:function(t,e,a){t.exports={default:a(612),__esModule:!0}},612:function(t,e,a){var i=a(62),n=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},799:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(611),n=a.n(i),s=a(589),o=a.n(s);e.default={name:"orderManagement",data:function(){var t;return t={IsLCar:"",PayMoney:"",OutPay:"",SafeRate:"",CustmerCode:"",XYNO:"",LCar:"",XMNO:"",isShowButton:!0,AnPai:"",Department:"",GetCode:"",TakeTime:"",OrderTime1:"",showSearch:"订单号",searchData:"",Box:"",c:"",IsMessage:"",value1:"",cur_page:1,limit:20,ccc:0,staData:[{name:"所有"},{name:"指令下达"},{name:"指令取消"},{name:"已安排"},{name:"取件完成"}],currentSta:"",isCur:0,xdtime:"",BeginTime:"",EndTime:"",neirong:"",sanja:!1,time:"",SafeItem:"",CityCode:"",BeginOrderTime:"",EndOrderTime:"",region:"",Startcity:"",Endcity:"",internet:"",isMeng:!1,tongzhiFangshi:!1,quxiaoFangshi:!1,tableData:[],City1:"",GetCity1:"",CompanyNet:"",OrderType:"",allotDialogVisible1:!1,loading:!0,IsWdj:"",Depart:"",GetCity:"",GetDepart:"",City:"",MNote:"",Note:"",entryname:""},o()(t,"GetCity",""),o()(t,"GetDepart",""),o()(t,"GetName",""),o()(t,"PayWay",""),o()(t,"SafePay",""),o()(t,"Condition",""),o()(t,"Indate",""),o()(t,"note1",""),o()(t,"Company",""),o()(t,"Manager",""),o()(t,"DepartMent",""),o()(t,"Telephone",""),o()(t,"Address",""),o()(t,"GetCompany",""),o()(t,"GetTelephone",""),o()(t,"GetArea",""),o()(t,"GetAddress",""),o()(t,"CityCode",""),o()(t,"MTime",""),o()(t,"MName",""),o()(t,"City",""),o()(t,"Depart",""),o()(t,"GetDepart",""),t},mounted:function(){this.company=window.sessionStorage.getItem("compony"),this.TrueName=window.sessionStorage.getItem("TrueName"),this.City=window.sessionStorage.getItem("City"),this.getData()},methods:{oneMoreOrder:function(t){var e=this;e.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/orderOne",method:"post",data:{Company:this.company,id:t.id},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}]}).then(function(a){var i=n()(a.data.data);window.sessionStorage.setItem("orderDataAgain",i),e.$router.push({path:"/OrderEntry22",query:{AccountNumber:t.AccountNumber,sta:"老孟"}})})},changeCompany:function(t){this.$refs.messageDrop.hide(),this.showSearch=t},getTabelData:function(){this.cur_page=1,this.getData()},refresh:function(){this.loading=!0,this.xdtime="",this.time="",this.OrderType="",this.City1="",this.GetCity1="",this.CompanyNet="",this.searchData="",this.getData(),this.loading=!1},rowClick:function(t,e,a){var i=this;i.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/orderOne",method:"post",data:{Company:this.company,id:t.id},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}]}).then(function(t){i.Box=t.data.data.Box,i.Depart=t.data.data.Depart||"暂无",i.City=t.data.data.City||"暂无",i.entryname=t.data.data.entryname||"暂无",i.GetDepart=t.data.data.GetDepart||"暂无",i.GetCity=t.data.data.GetCity||"暂无",i.GetName=t.data.data.GetName||"暂无",i.PayWay=t.data.data.PayWay||"暂无",i.SafePay=t.data.data.SafePay||"暂无",i.SafeItem=t.data.data.SafeItem||"暂无",i.Condition=t.data.data.Condition||"暂无",i.Indate=t.data.data.Indate||"暂无",i.note1=t.data.data.note1||"暂无",i.Company=t.data.data.Company||"暂无",i.Manager=t.data.data.Manager||"暂无",i.Telephone=t.data.data.Telephone||"暂无",i.Address=t.data.data.Address||"暂无",i.GetCompany=t.data.data.GetCompany||"暂无",i.GetTelephone=t.data.data.GetTelephone||"暂无",i.GetArea=t.data.data.GetArea||"暂无",i.GetAddress=t.data.data.GetAddress||"暂无",i.MNote=t.data.data.MNote||"暂无",i.XMNO=t.data.data.XMNO||"暂无",i.MTime=t.data.data.MTime||"暂无",i.XYNO=t.data.data.XYNO||"暂无",i.MName=t.data.data.MName||"暂无",i.Depart=t.data.data.Depart||"暂无",i.City=t.data.data.City||"暂无",i.GetCity=t.data.data.GetCity||"暂无",i.GetDepart=t.data.data.GetDepart||"暂无",i.IsWdj=t.data.data.IsWdj||"暂无",i.Department=t.data.data.Department||"暂无",i.GetCode=t.data.data.GetCode||"暂无",i.TakeTime=t.data.data.TakeTime||"暂无",i.CustmerCode=t.data.data.CustmerCode||"暂无",i.LCar=t.data.data.LCar||"暂无",i.IsLCar="1"==t.data.data.IsLCar?"冷车":"不使用冷车",i.OutPay="0"==t.data.data.OutPay?"发件人":"收件人",i.PayMoney=t.data.data.PayMoney||"暂无",i.SafeRate=t.data.data.SafeRate||"暂无"})},getData:function(){var t=this;t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/orderQuery",method:"post",data:{PageSize:this.limit,Page:this.cur_page,Company:this.company,BeginTime:this.xdtime[0]||"",EndTime:this.xdtime[1]||"",BeginOrderTime:this.time[0]||"",EndOrderTime:this.time[1]||"",OrderType:this.OrderType,City:this.City1,GetCity:this.GetCity1,CompanyNet:this.CompanyNet,Condition:this.currentSta,StateKey:this.showSearch,StateValue:this.searchData},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}]}).then(function(e){t.loading=!1,t.tableData=e.data.data.result,t.ccc=e.data.data.count})},handleSizeChange:function(t){this.loading=!0,this.limit=t,this.getData()},handleCurrentChange:function(t){this.loading=!0,this.cur_page=t,this.getData()},revise:function(){var t=this;this.id=window.sessionStorage.getItem("id"),t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/changetime",method:"post",data:{id:this.id,Company:this.company,OrderName:this.TrueName,CityCode:this.CityCode,Note:this.Note,OrderCity:this.City,OrderTime1:this.OrderTime1},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}]}).then(function(e){200==e.data.code?(t.$message.success("修改成功"),t.allotDialogVisible1=!1,t.getData()):t.$message.error(e.data.msg)})},cacelTzhi:function(){var t=this;this.id=window.sessionStorage.getItem("id"),t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/notice",method:"post",data:{id:this.id,Company:this.company,MNote:this.MNote,MName:"mwq"},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}]}).then(function(e){200==e.data.code?(t.$message.success("修改通知状态成功"),t.tongzhiFangshi=!1,t.getData()):t.$message.error(e.data.msg)})},cacelOrder:function(){var t=this;this.id=window.sessionStorage.getItem("id"),t.$axios({url:"http://out.ccsc58.cc/OMS/v1/public/index/ordermanagement/cancel",method:"post",data:{entryname:this.TrueName,id:this.id,Company:this.company,CityCode:this.CityCode,Note:this.neirong},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}]}).then(function(e){200==e.data.code?(t.$message.success("取消成功"),t.quxiaoFangshi=!1,this.CityCode="",this.neirong="",t.getData()):t.$message.error(e.data.msg)})},jumpDetails:function(t,e,a,i){"要求取件时间"==e.label?(this.allotDialogVisible1=!0,window.sessionStorage.setItem("id",t.id)):0==t.IsMessage&&"是否通知"==e.label?(this.tongzhiFangshi=!0,window.sessionStorage.setItem("id",t.id)):"指令下达"==t.Condition&&"订单状态"==e.label&&(this.quxiaoFangshi=!0,window.sessionStorage.setItem("id",t.id))},luruList:function(){this.$router.push({path:"/OrderEntry2"})},changeSta:function(t){this.loading=!0,this.cur_page=1,"指令下达"===t?this.currentSta="指令下达":"指令取消"===t?this.currentSta="指令取消":"已安排"==t?this.currentSta="已安排":"取件完成"===t?this.currentSta="取件完成":"所有"===t&&(this.currentSta=""),this.getData()},development:function(){this.isMeng=!this.isMeng,this.sanja=!this.sanja}}}},810:function(t,e,a){e=t.exports=a(92)(!1),e.push([t.i,".el-dialog__title{line-height:16px;font-size:18px;color:#303133;font-weight:800;font-family:cursive}.demo-table-expand{font-size:0}.demo-table-expand label{width:90px;color:#99a9bf}.demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.el-table--striped .el-table__body tr.el-table__row--striped td{background:#f9fafd}.el-table .cell{font-size:10px}.curstomNum:not(.aaa) .cell{color:#649efe!important}.curstomNum:not(.aaa) .cell:hover{cursor:pointer}",""])},811:function(t,e,a){e=t.exports=a(92)(!1),e.push([t.i,".bioage[data-v-1df1d360]{margin:20px 0}.bioage span[data-v-1df1d360]{margin-right:20px;font-size:12px}.bo[data-v-1df1d360]{background:#fff;display:flex;align-items:center}.isA[data-v-1df1d360]{display:block}.isb[data-v-1df1d360]{display:none}.sanjiao[data-v-1df1d360]{border-color:#666 transparent transparent}.sanjiao2[data-v-1df1d360],.sanjiao[data-v-1df1d360]{width:0;border-width:7px;border-style:solid;position:relative}.sanjiao2[data-v-1df1d360]{border-color:transparent transparent #666;top:-10px}input[data-v-1df1d360]{-webkit-appearance:none;background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:40px;line-height:40px;outline:none;padding:0 15px;transition:border-color .2s cubic-bezier(.645,.045,.355,1)}.bo1[data-v-1df1d360]{flex:1;border-bottom:1px solid #eee;background:#fff;align-items:center;justify-content:flex-end;display:flex}.bo1 span[data-v-1df1d360],.bo span[data-v-1df1d360]{padding:15px;font-family:cursive}.bo span[data-v-1df1d360]{border-bottom:1px solid #eee}.bo span[data-v-1df1d360]:hover{cursor:pointer}.bo span[data-v-1df1d360]:first-of-type{padding:15px 30px;border-left:none}.boActive[data-v-1df1d360]{border-right:1px solid #45a2df;border-left:1px solid #45a2df;border-bottom:none!important;background:#45a2df!important;color:#fff;cursor:pointer}.blue-class[data-v-1df1d360]{color:blue}",""])}});