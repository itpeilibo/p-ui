module.exports = {
  title: 'Pui基础组件文档库',
  description: '基于Element-ui和ant-design-vue二次封装基础组件示例',
  base: '/p-ui/',
  // port: 6666,
  // dest: './dist',   // 设置输出目录
  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: `./favicon.ico` }]
  ],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/itpeilibo/p-ui',
    // 自定义仓库链接文字。
    repoLabel: 'GitHub',
    nav: [
      { text: '主页', link: '/' },
      { text: '实际项目问题', link: '/projectProblem/permission' },
      { text: '基础组件', link: '/baseComponents/' },
      { text: 'csdn',link: 'https://blog.csdn.net/weixin_46862327' }
      // { text: 'Pui主题', link: '/theme/base' },
    ],
    sidebar: {
      '/projectProblem/': [
        {
          title: 'Vue项目',
          collapsable: false,
          children: [
            'permission',
            'keepAlive',
            'axios'
          ]
        }
      ],
      '/baseComponents/': [
        {
          title: '基于element封装',
          collapsable: true,
          children: [
            {
              title: '常用组件',
              collapsable: false,
              children: [
                // 'ElementUi/PTheme/base', // 主题设置
                'ElementUi/PInput/base', // input组件
                'ElementUi/PButton/base', // button组件
                'ElementUi/PTimerBtn/base', // 获取验证码倒计时组件
                'ElementUi/PSearch/base', // 下拉搜索查询组件
                'ElementUi/PLayout/base', // 布局组件
                'ElementUi/PLayoutPage/base', // 局部布局组件
                'ElementUi/PStepWizard/base', // 步驟组件
                'ElementUi/PDatePicker/base', // 日期组件
                'ElementUi/PDialog/base', // 弹窗组件
                'ElementUi/PDetail/base', // 详情组件
                'ElementUi/PTreeSelect/base', // 下拉选择树形及结构组件
                'ElementUi/PSelect/base', // 下拉选择组件
                'ElementUi/PPaginationSelect/base', // 下拉选择分页组件
                // 'ElementUi/PSelectTable/base', // 下拉选择表格组件
                // 'ElementUi/PUploadExcel/base' // 批量上传excel组件
              ]
            },
            {
              title: '下拉选择表格组件',
              collapsable: false,
              children: [
                'ElementUi/PSelectTable/radio',
                'ElementUi/PSelectTable/isKeyup',
                'ElementUi/PSelectTable/radioDefaultSelectVal',
                'ElementUi/PSelectTable/radioPagination',
                'ElementUi/PSelectTable/isShowFirstColumn',
                'ElementUi/PSelectTable/isShowQuery',
                'ElementUi/PSelectTable/radiovirtual', // 单选--虚拟列表
                'ElementUi/PSelectTable/multiplevirtual', // 多选-虚拟列表
                'ElementUi/PSelectTable/multiple',
                'ElementUi/PSelectTable/multipleDefaultSelectVal',
                'ElementUi/PSelectTable/showPagination',
                'ElementUi/PSelectTable/formDemo',
                'ElementUi/PSelectTable/help', // 使用帮助(Attributes)
              ]
            },
            {
              title: '查询条件组件',
              collapsable: false,
              children: [
                'ElementUi/PQueryCondition/base', // 基本
                'ElementUi/PQueryCondition/slot', // 插槽使用
                'ElementUi/PQueryCondition/labelRender', // tsx自定义label使用
                'ElementUi/PQueryCondition/defaultVal', // 默认值
                'ElementUi/PQueryCondition/linkage', // 联动使用
                'ElementUi/PQueryCondition/PSelectUse', // 结合PSelect使用
                'ElementUi/PQueryCondition/PDatePickerUse', // 结合TDatePicker使用
                'ElementUi/PQueryCondition/help', // 使用帮助(Attributes)
              ]
            },
            {
              title: '表单组件',
              collapsable: false,
              children: [
                'ElementUi/PForm/base', // 基本模式
                'ElementUi/PForm/labelPosition', // 对齐方式
                'ElementUi/PForm/widthSize', // 每行展示多少项
                'ElementUi/PForm/rules', // 表单验证
                'ElementUi/PForm/eventHandle', // 事件使用
                'ElementUi/PForm/labelRender', // 自定义label
                'ElementUi/PForm/slotName', // 自定义输入框插槽
                'ElementUi/PForm/textShow', // 文本展示
                'ElementUi/PForm/comUse', // 自己组件使用
                'ElementUi/PForm/assignment', // 赋值回显
                'ElementUi/PForm/submit', // 切换页面获取表单数据
                'ElementUi/PForm/dynamic', // 动态增减表单项
                'ElementUi/PForm/help' // 使用帮助(Attributes)
              ]
            },
            {
              title: '模块表单组件',
              collapsable: false,
              children: [
                'ElementUi/PModuleForm/base', // 基本模式
                'ElementUi/PModuleForm/slotName', // 模块插槽使用
                'ElementUi/PModuleForm/disabled', // 某个模块是否禁用展开
                'ElementUi/PModuleForm/labelPosition', // 模块表单对齐方式
                'ElementUi/PModuleForm/rules', // 模块表单表单验证
                'ElementUi/PModuleForm/validateError', //  模块表单校验错误提示
                'ElementUi/PModuleForm/footer', // 模块表单自定义底部按钮
                'ElementUi/PModuleForm/tabs', //  模块表单显示tabs(注意只显示在最后一个模块)
                'ElementUi/PModuleForm/isGoBackEvent', //  模块表单自定义返回事件（默认返回上一页）
                'ElementUi/PModuleForm/isShowBack', //  模块表单没有返回icon
                'ElementUi/PModuleForm/extra', //  模块表单title右侧插槽使用
                'ElementUi/PModuleForm/titleBtn', // 某个模块Title右侧插槽使用

                'ElementUi/PModuleForm/detail', // 模块详情基本模式
                'ElementUi/PModuleForm/detailspan', // 模块详情每行展示项
                'ElementUi/PModuleForm/tooltip', // 模块详情提示项
                'ElementUi/PModuleForm/detailslot', // 模块详情插槽使用
                'ElementUi/PModuleForm/detailslotName', // 模块详情某个值value插槽使用
                'ElementUi/PModuleForm/detaildisabled', // 某个模块是否禁用展开
                'ElementUi/PModuleForm/detailTitleBtn', // 某个模块Title右侧插槽使用
                'ElementUi/PModuleForm/help' // 使用帮助(Attributes)
              ]
            },
            {
              title: 'PTable组件',
              collapsable: false,
              children: [
                'ElementUi/PTable/PAdaptivePage', // 一屏显示
                'ElementUi/PTable/base', // 基本
                'ElementUi/PTable/pagination', // 分页
                'ElementUi/PTable/virtual', // 虚拟列表
                'ElementUi/PTable/notSort', // 指定列不需要排序
                'ElementUi/PTable/customSort', // 自定义排序
                'ElementUi/PTable/mergedCell', // 合并单元格
                'ElementUi/PTable/headerGroup', // 表头合并
                'ElementUi/PTable/slotNameMerge', // 表头合并插槽显示
                // 'ElementUi/PTable/headerGroupEditTable', // 表头合并单元格编辑功能
                'ElementUi/PTable/renderCol', // render列渲染
                'ElementUi/PTable/slotName', // 插槽列渲染
                'ElementUi/PTable/filters', // 字典过滤
                'ElementUi/PTable/objRenderPorp', // 对象模式渲染
                'ElementUi/PTable/renderHeader', // 自定义列标题 label
                'ElementUi/PTable/radio', // 单选
                'ElementUi/PTable/treeTable',
                'ElementUi/PTable/rules', // 单元格编辑--校验
                'ElementUi/PTable/singleEditKeyup', // 单元格编辑键盘事件
                'ElementUi/PTable/singleEditTable', // 开启单个单元格编辑
                'ElementUi/PTable/eventHandle', // 单元格编辑使用第三方组件事件
                'ElementUi/PTable/cellEditSave', // 单元格编辑保存单行操作
                'ElementUi/PTable/editTable', // 开启整行编辑模式
                'ElementUi/PTable/rowSort', // 行拖拽排序
                'ElementUi/PTable/checkbox', // 基本复选
                'ElementUi/PTable/columnSet', // 显示隐藏列
                'ElementUi/PTable/operation', // 操作栏
                'ElementUi/PTable/customRender', // customRender操作自定义渲染
                'ElementUi/PTable/tree', // TreeTable组件
                'ElementUi/PTable/help' // 使用帮助(Attributes)
              ]
            },
            // {
            //   title: '表格编辑组件',
            //   collapsable: false,
            //   children: [
            //     'ElementUi/PEditTable/base', // 编辑table组件
            //   ]
            // },
            // {
            //   title: 'PTreeTable组件',
            //   collapsable: false,
            //   children: [
            //     'ElementUi/PTable/tree' // TreeTable组件
            //   ]
            // },
            // {
            //   title: '图片/文件上传组件',
            //   collapsable: false,
            //   children: [
            //     'ElementUi/PUploadFile/base',
            //     'ElementUi/UploadFile/base'
            //   ]
            // }
          ]
        },
        {
          title: '基于AntDesign封装',
          collapsable: true,
          children: [
            {
              title: '常用组件',
              collapsable: false,
              children: [
                'AntDesign/PAntLayoutConditional/base', // 筛选器布局组件
                'AntDesign/PAntLayoutTable/base', // 默认table布局组件
                'AntDesign/PAntLayoutForm/base', // 配置化表单组件
                'AntDesign/PAntModal/base' // 弹窗组件
              ]
            }
          ]
        },
      ],
      // '/theme/': [
      //   {
      //     title: 'Tui主题',
      //     collapsable: false,
      //     children: [
      //       'base'
      //     ]
      //   }
      // ],
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            'cache-loader',
            {
              loader: 'babel-loader',
              options: {
                babelrc: false,
                configFile: false,
                presets: [
                  '@babel/preset-env', // 可以识别es6语法
                  '@vue/babel-preset-jsx' // 解析jsx语法
                ]
              }
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsxSuffixTo: [/\.vue$/, /\.md$/]
              }
            }
          ]
        }
      ]
    }
  },
  plugins: [
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
    // ['@vuepress/plugins-back-to-top', false],
    ['vuepress-plugin-gotop-plus', {
      // mobileShow: false,
      threshold: 150
    }],
    '@vuepress-reco/extract-code'
  ]
}
