(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1208:function(e,t,l){"use strict";l.r(t);l(197);var n={name:"PtableSingleEditCell",data:function(){var e=this,t=this.$createElement;return{singleEditConfig:{table:{border:!0,firstColumn:{type:"index",label:"序列"},data:[{name:null,hobby:null,hobby1:[],hobby2:[],year:null,time:null,remake:null,number:12},{name:"李四",hobby:"2",hobby1:["0","2"],hobby2:["0","2"],year:"2021",time:"2022-01-19 16:58:58",remake:"备注李四",number:15}],columns:[{prop:"name",label:"姓名",minWidth:"160",canEdit:!0,headerRequired:!0,configEdit:{label:"姓名",type:"input",editComponent:"el-input",rules:{required:!0,message:"请输入姓名",trigger:"blur"},eventHandle:{focus:function(t,l){return e.nameFocus(t,l)},clear:function(t){return e.nameClear(t)},blur:function(t,l){return e.nameBlur(t,l)}}}},{prop:"remake",label:"输入框",minWidth:"220",canEdit:!0,headerRequired:!0,configEdit:{label:"备注",append:"吨",rules:{required:!0,message:"请输入备注",trigger:"blur"},bind:{"prefix-icon":"el-icon-search"},editComponent:"el-input"}},{prop:"hobby",label:"爱好单选",minWidth:"180",headerRequired:!0,canEdit:!0,configEdit:{label:"爱好单选",type:"select-arr",editComponent:"el-select",list:"hobbyList",event:"hobbyList",arrLabel:"label",arrKey:"value"}},{prop:"hobby1",label:"编辑组件插槽",minWidth:"180",renderHeader:function(e){return t("div",[t("span",[e.label]),t("i",{class:"el-icon-question",style:"color:#409eff;margin-left:5px;font-size:15px;"})])},canEdit:!0,configEdit:{label:"编辑组件插槽",type:"el-select-multiple",editComponent:"el-select",editSlotName:"editHobby"}},{prop:"year",label:"日期年",minWidth:"180",canEdit:!0,configEdit:{label:"日期年",type:"year",editComponent:"el-date-picker",bind:{valueFormat:"yyyy"}}},{prop:"time",label:"日期时间",minWidth:"180",canEdit:!0,configEdit:{label:"日期时间",type:"datetime",editComponent:"el-date-picker",bind:{valueFormat:"yyyy-MM-dd hh:mm:ss"}}},{prop:"number",label:"计数器",minWidth:"220",canEdit:!0,configEdit:{label:"计数器",type:"inputNumber",bind:{min:0,max:99},editComponent:"el-input-number"}},{prop:"remake",label:"备注",minWidth:"220",canEdit:!0,configEdit:{label:"备注",type:"textarea",bind:{type:"textarea"},editComponent:"el-input"}}],operator:[{type:"danger",text:"删除",fun:this.editDel}]},listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]}}}},methods:{nameFocus:function(e,t){console.log("姓名聚焦事件",e.type,t)},nameBlur:function(e,t){console.log("姓名失焦事件",e.type,t)},nameClear:function(e){console.log("姓名清空事件",e)},singleSave:function(e){console.log("单个单元格编辑保存",e)},editDel:function(e,t,l){l.splice(t,1),console.log("删除",e,l,t)},handleEvent:function(e,t){switch(e){case"hobbyList":console.log("爱好选择",e,t)}}}},i=l(10),o=Object(i.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"p-table-single-edit-cell",staticStyle:{width:"100%"}},[l("p-table",{attrs:{table:e.singleEditConfig.table,columns:e.singleEditConfig.table.columns,listTypeInfo:e.singleEditConfig.listTypeInfo},on:{handleEvent:e.handleEvent,save:e.singleSave},scopedSlots:e._u([{key:"editHobby",fn:function(t){var n=t.scope;return[l("el-select",{attrs:{multiple:""},model:{value:n.row[n.column.property],callback:function(t){e.$set(n.row,n.column.property,t)},expression:"scope.row[scope.column.property]"}},e._l(e.singleEditConfig.listTypeInfo.hobbyList,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}}])})],1)}),[],!1,null,null,null);t.default=o.exports}}]);