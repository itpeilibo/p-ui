(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{1185:function(e,t,o){"use strict";o.r(t);o(61),o(130),o(43);var a={data:function(){var e=this;return{title:"",isShowEditDialog:!1,formOpts:{ref:null,formData:{deviceInstanceCode:null,createDeptCode:null,outsourcing:0,faultDescription:null},fieldList:[{label:"设备编号",value:"deviceInstanceCode",type:"input",comp:"el-input"},{label:"下拉选择表格",value:"createDeptCode",placeholder:"p-select-table使用",comp:"p-select-table",isSelfCom:!0,bind:{multiple:!0,maxHeight:400,keywords:{label:"name",value:"id"},table:{data:[]},columns:[{label:"物料编号",width:"100px",prop:"code",align:"left"},{label:"物料名称",width:"149px",prop:"name"},{label:"规格",width:"149px",prop:"spec"},{label:"单位",width:"110px",prop:"unitName"},{label:"物料编号1",width:"149px",prop:"code"},{label:"物料名称1",width:"149px",prop:"name"}]},eventHandle:{selectionChange:function(t,o){return e.selectionChangeHandler(t,o)}}},{label:"是否委外维修",value:"outsourcing",type:"radio",comp:"el-radio-group",list:"radioList"},{label:"故障说明",value:"faultDescription",type:"textarea",comp:"el-input"}],listTypeInfo:{radioList:[{label:"是",value:1},{label:"否",value:0}]}}}},mounted:function(){var e=[{id:1,code:1,name:"物料名称1",spec:"物料规格1",unitName:"吨"},{id:2,code:2,name:"物料名称2",spec:"物料规格2",unitName:"吨"},{id:3,code:3,name:"物料名称3",spec:"物料规格3",unitName:"吨"},{id:4,code:4,name:"物料名称4",spec:"物料规格4",unitName:"吨"},{id:5,code:5,name:"物料名称5",spec:"物料规格5",unitName:"吨"},{id:6,code:6,name:"物料名称6",spec:"物料规格6",unitName:"吨"},{id:7,code:7,name:"物料名称7",spec:"物料规格7",unitName:"吨"},{id:8,code:8,name:"物料名称8",spec:"物料规格8",unitName:"吨"},{id:9,code:9,name:"物料名称9",spec:"物料规格9",unitName:"吨"}];this.formOpts.fieldList.map((function(t){"createDeptCode"===t.value&&(t.bind.table.data=e)}))},methods:{selectionChangeHandler:function(e,t){console.log("复选框",e),console.log("复选框--id",t),this.formOpts.formData.createDeptCode=t,localStorage.setItem("selectTableData",JSON.stringify(this.formOpts.formData.createDeptCode))},add:function(){console.log("点击新增"),this.isShowEditDialog=!0,this.title="新增"},edit:function(){this.isShowEditDialog=!0,this.title="编辑",this.formOpts.formData.createDeptCode=JSON.parse(localStorage.getItem("selectTableData")),console.log("点击编辑",this.formOpts.formData)},submitForm:function(){var e=this;this.formOpts.ref.validate((function(t){console.log(88,t),e.formOpts.formData.createDeptCode?t&&(console.log("最终数据",e.formOpts.formData),localStorage.setItem("selectTableData",JSON.stringify(e.formOpts.formData.createDeptCode)),e.isShowEditDialog=!1):e.$message.warning("请先选择下拉表格数据！")}))}}},i=o(10),l=Object(i.a)(a,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p-layout-page",[o("p-layout-page-item",[o("el-button",{attrs:{type:"danger"},on:{click:e.add}},[e._v("新增")]),e._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:e.edit}},[e._v("编辑")])],1),e._v(" "),o("p-dialog",{attrs:{title:e.title,width:"40%",visible:e.isShowEditDialog},on:{"update:visible":function(t){e.isShowEditDialog=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("el-button",{on:{click:function(t){e.isShowEditDialog=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确定")])]},proxy:!0}])},[o("p-form",{attrs:{"ref-obj":e.formOpts.ref,formOpts:e.formOpts,listTypeInfo:e.formOpts.listTypeInfo,widthSize:1},on:{"update:refObj":function(t){return e.$set(e.formOpts,"ref",t)},"update:ref-obj":function(t){return e.$set(e.formOpts,"ref",t)}}})],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);