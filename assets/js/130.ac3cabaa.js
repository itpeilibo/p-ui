(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{1220:function(t,e,a){"use strict";a.r(e);var n={data:function(){var t=this,e=this.$createElement;return{table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"2",address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"1",address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",address:"广东省广州市天河区3"}],columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"status",label:"render渲染1",minWidth:"180",render:function(t,a,n){var s="",l="";switch(t){case"1":s="",l="待处理";break;case"2":s="warning",l="进行中";break;case"3":s="success",l="已完成"}return e("el-tag",{attrs:{type:s}},[l])}},{prop:"status",label:"render渲染2",minWidth:"180",render:function(a,n){return e("el-switch",{attrs:{"active-value":"1","inactive-value":"2"},on:{change:function(){return t.handleStatusChange(n)}},model:{value:n.enableStatus,callback:function(e){t.$set(n,"enableStatus",e)}}},[a])}},{prop:"address",label:"地址",minWidth:"220"},{prop:"date",label:"日期",minWidth:"180"},{prop:"address",label:"地址",minWidth:"220"}]}}},methods:{handleStatusChange:function(t){var e=this,a="1"===t.status?"启用":"废止";this.$confirm("确认要".concat(a,"这条数据吗？"),"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message.success("点击确定")})).catch((function(){console.log("取消"),t.status="1"===t.status?"2":"1"}))},add:function(t){console.log("新增",t)},edit:function(t){console.log("编辑",t)},handleDelete:function(t){console.log("删除",t)}}},s=a(10),l=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"p-table",staticStyle:{width:"100%"}},[e("p-table",{attrs:{table:this.table,columns:this.table.columns}})],1)}),[],!1,null,null,null);e.default=l.exports}}]);