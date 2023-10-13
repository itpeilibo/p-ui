(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1356:function(e,n,a){"use strict";a.r(n);var s=a(10),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"axios二次封装-接口统一存放-满足restful风格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios二次封装-接口统一存放-满足restful风格"}},[e._v("#")]),e._v(" axios二次封装，接口统一存放,满足RESTful风格")]),e._v(" "),a("h3",{attrs:{id:"在新建项目目录src下utils文件夹新建fetch-js文件-此文件统一处理所有http请求和响应。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在新建项目目录src下utils文件夹新建fetch-js文件-此文件统一处理所有http请求和响应。"}},[e._v("#")]),e._v(" 在新建项目目录src下utils文件夹新建fetch.js文件，此文件统一处理所有http请求和响应。")]),e._v(" "),a("ul",[a("li",[e._v("直接上代码")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import axios from 'axios'\nimport qs from 'qs'\nimport store from '@/store'\nimport router from '@/router'\nimport { getToken } from './auth'\nimport { Message, MessageBox } from 'element-ui'\n\nconst BASE_URL = '/invoice'\nconst TIMEOUT_MILLISECONDS = 60000 // 超时链接\n\nconst instance = axios.create({\n  withCredentials: false,\n  baseURL: BASE_URL, // 基本url\n  timeout: TIMEOUT_MILLISECONDS,\n  headers: {\n    'Content-Type': 'application/x-www-form-urlencoded'\n  }\n})\n")])])]),a("h4",{attrs:{id:"axios请求拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios请求拦截器"}},[e._v("#")]),e._v(" axios请求拦截器")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("instance.interceptors.request.use((config) => {\n  // 每个接口新增时间戳\n  let timestamp = new Date().getTime()\n  if (config.url && config.url.includes('?')) {\n    config.url = `${config.url}&t=${timestamp}`\n  } else {\n    config.url = `${config.url}?t=${timestamp}`\n  }\n   //PUT POST DELETE方式提交的数据格式化\n   if ((config.method === 'post'||config.method === 'put'||config.method === 'delete') && config.headers['Content-Type'] !== 'application/json') {\n    config.data = qs.stringify(config.data)\n  }\n  // 在发送请求之前 判断是否存在token，如果存在的话，则每个http header都加上token\n  if (getToken()) {\n    // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改\n    config.headers['Authorization'] = getToken()\n  }\n  return config\n},\n(error) => Promise.reject(error)\n)\n")])])]),a("h4",{attrs:{id:"axios响应拦截器-统一处理所有http响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios响应拦截器-统一处理所有http响应"}},[e._v("#")]),e._v(" axios响应拦截器(统一处理所有http响应)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("instance.interceptors.response.use((response) => {\n// 下载类型特殊处理文件名\nconst type = response.request.responseType || ''\n  if (type.includes('blob')) {\n    let disposition = response.headers['content-disposition']\n    let filename = '默认文件名'\n    if (disposition && disposition.indexOf('filename=') !== -1) {\n      filename = decodeURI(disposition.substring(disposition.indexOf('filename=') + 9, disposition.length))\n    }\n    response.data.filename = filename\n  }\n  return response.data\n}, (error) => {\n  switch (error.response && error.response.status) {\n    case 400:\n      error.message = '请求错误(400)'\n      Message.error({\n        message: error.response.data.msg || error.message\n      })\n      break\n    case 401:\n      error.message = '登录信息已过期，请重新登录'// (401)\n      MessageBox.confirm(error.response.data.msg || error.message, {\n        title: '提示',\n        confirmButtonText: '确定',\n        showCancelButton: false,\n        showClose: false,\n        type: 'warning'\n      }).then(() => {\n       store.dispatch('user/resetToken').then(() => {\n            router.push('/login')\n          })\n      })\n      break\n    case 403:\n      error.message = '拒绝访问(403)'\n      break\n    case 404:\n      error.message = '请求出错(404)'\n      break\n    case 408:\n      error.message = '请求超时(408)'\n      Message.error({\n        message: error.response.data.msg || error.message\n      })\n      break\n    case 500:\n      error.message = '服务器错误(500)'\n      Message.error({\n        message: error.response.data.msg || error.message\n      })\n      break\n    case 501:\n      error.message = '服务未实现(501)'\n      break\n    case 502:\n      error.message = '网络错误(502)'\n      break\n    case 503:\n      error.message = '服务不可用(503)'\n      break\n    case 504:\n      error.message = '网络超时(504)'\n      break\n    case 505:\n      error.message = 'HTTP版本不受支持(505)'\n      break\n  }\n  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {\n    Message.error({\n      message: '网络异常'\n    })\n  }\n  return Promise.reject(error)\n})\nexport default instance\n")])])]),a("h3",{attrs:{id:"在src目录下新建api文件夹-在新建index-js-urlconst-js文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在src目录下新建api文件夹-在新建index-js-urlconst-js文件"}},[e._v("#")]),e._v(" 在src目录下新建api文件夹，在新建index.js/urlConst.js文件")]),e._v(" "),a("ul",[a("li",[e._v("urlConst.js 存放api接口路径")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const urlConst = {\n  /**\n   * 公共模块API\n   **/\n  // 发送短信校验码\n  sendPhoneVerify: '/sms/send-phone-verify',\n  // 校验短信验证码\n  verifyCode: '/sms/verify-code',\n  // 获取法人手机号码（1.3版本新增接口）\n  getLegalPhone: '/enterprise/legal-phone',\n  // 获取企业信息\n  current: '/user/current'\n  ......\n}\nexport default urlConst\n")])])]),a("ul",[a("li",[e._v("index.js封装通用请求方法")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import fetch from '@/utils/fetch'\nimport urlConst from './urlConst' // api路径定义文件\nconst urlConfig = {\n  ...urlConst\n}\n/**\n * 通用请求方法\n * @param {methodType} 请求方式\n * @param {urlName} 接口名称\n * @param {dataParams} 正常传参\n * @param {urlParam} url参数restFul风格\n */\n/* 通用请求方法 */\nexport function ajaxRequest (methodType, urlName, dataParams, urlParam) {\n  methodType = methodType.toUpperCase()\n  dataParams = dataParams || ''\n  urlParam = urlParam || ''\n  let requestConfig = {\n    method: methodType\n  }\n  let url = urlConfig[urlName]\n  requestConfig.url = urlParam ? (url + '/' + urlParam) : url\n  switch (methodType) {\n    case 'POST':\n    case 'PUT':\n    case 'DELETE':\n      requestConfig.headers = { 'Content-Type': 'application/json' }\n      requestConfig.data = dataParams\n      break\n    case 'GET':\n      requestConfig.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }\n      requestConfig.params = dataParams\n      break\n    case 'UPLOAD':\n      requestConfig.headers = { 'Content-Type': 'application/form-data' }\n      requestConfig.method = 'POST'\n      requestConfig.data = dataParams\n      break\n    // 下载excel zip\n    case 'DOWNLOAD':\n      requestConfig.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }\n      requestConfig.method = 'GET'\n      requestConfig.params = dataParams\n      requestConfig.responseType = 'blob'\n      break\n    // 下载回显图片\n    case 'GETIMAGE':\n      requestConfig.headers = { 'Content-Type': 'application/json' }\n      requestConfig.method = 'GET'\n      requestConfig.params = dataParams\n      requestConfig.responseType = 'blob'\n      break\n    default:\n      requestConfig.headers = { 'Content-Type': 'application/json' }\n      requestConfig.method = 'POST'\n      requestConfig.data = dataParams\n      break\n  }\n  return fetch(requestConfig)\n}\n")])])]),a("h4",{attrs:{id:"将封装的axios挂载在main-js中-供全局使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将封装的axios挂载在main-js中-供全局使用"}},[e._v("#")]),e._v(" 将封装的axios挂载在main.js中，供全局使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import { ajaxRequest } from '@/api'\nVue.prototype.$ajaxRequest = ajaxRequest\n")])])]),a("h4",{attrs:{id:"在文件中直接使用this-ajaxrequest-例如"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在文件中直接使用this-ajaxrequest-例如"}},[e._v("#")]),e._v(" 在文件中直接使用this.$ajaxRequest()，例如")]),e._v(" "),a("ul",[a("li",[e._v("1、正常方式请求接口")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 修改密码\n async changePassword (params) {\n      const res = await this.$ajaxRequest('put', 'changePassword', params)\n      注释：\n      put 是请求方式\n      changePassword 是定义的接口名\n      params 是接口所需要的参数\n    }\n")])])]),a("ul",[a("li",[e._v("2、RESTful风格请求接口")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 获取节假日\n    async checkIsHoliday (date) {\n      let dateValue = moment(date).format('YYYYMMDD')\n      const res = await this.$ajaxRequest('get', 'getIsHoliday', '', dateValue)\n       注释：\n      get 是请求方式\n      getIsHoliday 是定义的接口名\n      '' 是正常接口所需要的参数\n      dateValue 是restful风格需要的参数\n    }\n")])])]),a("hr")])}),[],!1,null,null,null);n.default=r.exports}}]);