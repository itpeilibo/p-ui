(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1212:function(e,l,t){"use strict";t.r(l);t(93),t(23),t(197);var n={data:function(){return{singleEditConfig:{table:{firstColumn:{type:"index",label:"序列"},data:[{name:"张三",hobby:"1",hobby1:["1","2"],hobby2:["1","2"],autocomplete:"三全鲜食（北新泾店）",year:"2022",time:"2022-01-18 16:58:58",remake:"备注张三",number:12},{name:"李四",hobby:"2",hobby1:["0","2"],hobby2:["0","2"],autocomplete:"三全鲜食（北新泾店）",year:"2021",time:"2022-01-19 16:58:58",remake:"备注李四",number:15}],columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"",label:"一级编辑列",minWidth:"180",children:[{prop:"remake",label:"输入框",minWidth:"220",canEdit:!0,configEdit:{label:"备注",append:"吨",rules:{required:!0,message:"请输入备注",trigger:"blur"},bind:{"prefix-icon":"el-icon-search"},editComponent:"el-input"}},{prop:"hobby",label:"爱好单选",minWidth:"180",canEdit:!0,configEdit:{label:"爱好单选",type:"select-arr",editComponent:"el-select",list:"hobbyList",event:"hobbyList",arrLabel:"label",arrKey:"value"}}]},{prop:"",label:"顶级编辑列",minWidth:"100",children:[{prop:"hobby1",label:"二级插槽使用",minWidth:"180",canEdit:!0,configEdit:{label:"爱好",type:"el-select-multiple",editComponent:"el-select",editSlotName:"editHobby"}},{prop:"",label:"二级编辑列",minWidth:"100",children:[{prop:"autocomplete",label:"三级插槽使用",minWidth:"180",canEdit:!0,configEdit:{label:"自动输入完成",editComponent:"el-autocomplete",editSlotName:"autocomplete"}}]}]},{label:"一级表头",minWidth:"180",children:[{label:"二级表头",minWidth:"180",children:[{label:"三级表头",minWidth:"180",children:[{label:"四级表头",minWidth:"180",children:[{prop:"time",label:"日期时间",minWidth:"180",canEdit:!0,configEdit:{label:"日期时间",type:"datetime",editComponent:"el-date-picker",bind:{valueFormat:"yyyy-MM-dd hh:mm:ss"}}}]}]}]}]},{prop:"",label:"不编辑列",minWidth:"180",children:[{prop:"year",label:"日期年",minWidth:"180"},{prop:"number",label:"计数器",minWidth:"220"},{prop:"remake",label:"备注",minWidth:"220"}]}],operator:[{type:"danger",text:"删除",fun:this.editDel}]},listTypeInfo:{hobbyList:[{label:"吉他",value:"0"},{label:"看书",value:"1"},{label:"美剧",value:"2"},{label:"旅游",value:"3"},{label:"音乐",value:"4"}]},autoOption:[{value:"三全鲜食（北新泾店）",address:"长宁区新渔路144号"},{value:"Hot honey 首尔炸鸡（仙霞路）",address:"上海市长宁区淞虹路661号"},{value:"新旺角茶餐厅",address:"上海市普陀区真北路988号创邑金沙谷6号楼113"},{value:"泷千家(天山西路店)",address:"天山西路438号"},{value:"胖仙女纸杯蛋糕（上海凌空店）",address:"上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},{value:"贡茶",address:"上海市长宁区金钟路633号"},{value:"豪大大香鸡排超级奶爸",address:"上海市嘉定区曹安公路曹安路1685号"},{value:"茶芝兰（奶茶，手抓饼）",address:"上海市普陀区同普路1435号"},{value:"十二泷町",address:"上海市北翟路1444弄81号B幢-107"}]}}},methods:{querySearch:function(e,l){var t=this.singleEditConfig.autoOption;l(e?t.filter(this.createFilter(e)):t)},createFilter:function(e){return function(l){return 0===l.value.toLowerCase().indexOf(e.toLowerCase())}},clearSelect:function(){document.activeElement.blur(),this.$forceUpdate()},singleSave:function(e){console.log("单个单元格编辑保存",e)},editDel:function(e,l,t){t.splice(l,1),console.log("删除",e,t,l)},handleEvent:function(e,l){console.log("handleEvent",e,l)}}},o=t(10),a=Object(o.a)(n,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("p-layout-page",[t("p-layout-page-item",[t("p-table",{attrs:{table:e.singleEditConfig.table,columns:e.singleEditConfig.table.columns,listTypeInfo:e.singleEditConfig.listTypeInfo},on:{handleEvent:e.handleEvent,save:e.singleSave},scopedSlots:e._u([{key:"editHobby",fn:function(l){var n=l.scope;return[t("el-select",{attrs:{multiple:""},model:{value:n.row[n.column.property],callback:function(l){e.$set(n.row,n.column.property,l)},expression:"scope.row[scope.column.property]"}},e._l(e.singleEditConfig.listTypeInfo.hobbyList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)]}},{key:"autocomplete",fn:function(l){var n=l.scope;return[t("el-autocomplete",{staticClass:"inline-input",attrs:{clearable:"",debounce:0,"fetch-suggestions":e.querySearch,placeholder:"请输入内容"},on:{clear:e.clearSelect},model:{value:n.row[n.column.property],callback:function(l){e.$set(n.row,n.column.property,l)},expression:"scope.row[scope.column.property]"}})]}}])}),e._v("\n  </-layout-page-item>\n")],1)],1)}),[],!1,null,null,null);l.default=a.exports}}]);