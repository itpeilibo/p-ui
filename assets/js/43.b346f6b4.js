(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1124:function(e,a,t){"use strict";t.r(a);t(61),t(43);var n={name:"columnSlot",data:function(){var e=this.$createElement;return{columns:[{title:"物料名称",width:100,dataIndex:"materialName",scopedSlots:{customRender:"materialName"}},{title:"取料地",width:180,minWidth:180,dataIndex:"addrName",key:"addrName",customRender:function(a){var t={age:"年龄：",name:"姓名：",course:"学科：",sex:"性别：",grade:"分数："},n={display:"flex"};return e("div",[a&&Object.keys(t).map((function(i){return e("div",{style:n},[e("div",{style:"color:#8C8C8C;"},[t[i]]),e("div",{style:"color:#000;"},[void 0===a[i]?"":a[i]])])}))])}},{title:"产地",width:100,dataIndex:"materialProducingArea"},{title:"取样时间点",width:100,dataIndex:"timeNames"},{title:"接收机构",width:280,dataIndex:"usingDeptNames"},{title:"类型",width:100,dataIndex:"samplingType"},{title:"状态",width:100,dataIndex:"status"}],sourceData:[{id:85,addrName:{age:19,name:"张三",sex:"男",course:"数学",grade:90},materialName:"卡粉-new",materialProducingArea:"京环-new",samplingType:0,status:1,timeNames:["2点半"],usingDeptNames:["BBQ煤炉","总调度室","球团3期","竖炉"]},{id:80,addrName:{sex:"男",age:19,name:"张三2",course:"语文",grade:99},materialName:"测试物料",materialProducingArea:"测试场地",samplingType:2,status:1,timeNames:["12点"],usingDeptNames:["总调度室","112烧结厂"]},{id:79,addrName:{age:19,name:"张三3",sex:"男",course:"英语",grade:90},materialName:"喷煤",materialProducingArea:"二期喷煤厂",samplingType:0,status:1,timeNames:["20点","08点"],usingDeptNames:["总调度室","112烧结厂"]}]}},methods:{onStatusChange:function(e,a){console.log(e,a)}}},i=t(10),s=Object(i.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p-layout-page",[t("p-layout-page-item",[t("p-ant-layout-table",{attrs:{isCustomScroll:"",columns:e.columns,dataSource:e.sourceData,tableOpt:{bordered:!0,scroll:{x:"110%"}}},scopedSlots:e._u([{key:"materialName",fn:function(a){var n=a.text;return[t("a-button",[e._v(e._s(n))])]}}])})],1)],1)}),[],!1,null,null,null);a.default=s.exports}}]);