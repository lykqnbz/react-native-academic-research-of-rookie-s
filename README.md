# 两个菜鸟的react-native学术交流

### 项目需求
- [制造云蓝湖地址](https://lanhuapp.com/web/#/item/project/board?pid=a37754d9-c79e-4a61-9b3d-13393db2b6ed)  
- [制造云接口文档](http://doc.lsboot.cn/web/#/22?page_id=759)  

### wang归纳的分享

**实用网站:**
- [React Native Github](https://github.com/facebook/react-native)  
- [Pushy](http://update.reactnative.cn/home)  热更新推荐使用，附文档 
- [React Native中文论坛](https://bbs.reactnative.cn/)  react-navite中文交流论坛 
- [React Navigation](https://reactnavigation.org/zh-Hans/)  导航推荐使用，附文档
- [GraphQL](https://graphql.cn/)  一种用于 API 的查询语言
- [2019年最新iOS应用上架到App Store流程—详细图文](https://bbs.reactnative.cn/topic/3600/2019%E5%B9%B4%E6%9C%80%E6%96%B0ios%E5%BA%94%E7%94%A8%E4%B8%8A%E6%9E%B6%E5%88%B0app-store%E6%B5%81%E7%A8%8B-%E8%AF%A6%E7%BB%86%E5%9B%BE%E6%96%87)



**借鉴项目other文件夹:**
- [reactNativeSharedBook](https://github.com/cllemon/ReactNativeSharedBook)
- [smart-install](https://github.com/yangaijun/smart-install)
- [wecapps](https://github.com/edgardong/wecapps)
- [xiaoduyuReactNative](https://github.com/54sword/xiaoduyuReactNative)
- [Mozi](https://github.com/duheng/Mozi)


**项目文件夹结构说明:**
```html 

├── README.md                   // help
├── src                         // Ract Native
│   ├── app                     // redux部分
│   │    ├── actions            // creat action
│   │    ├── constants          // constants
│   │    ├── reducers           // reducer
│   │    ├── sagas              // redux saga
│   │    ├── selectors          // 过滤以及准备view层需要的数据
│   │    └── store              // store
│   ├── commons                 // 共享基础模块
│   ├── components              // Ract Native 通用组件
│   ├── containers
│   │    └── page               // 具体业务模块
│   ├── routers                 // 路由部分
│   │    ├── index.js           // page模块聚合页
│   │    └── app.js             // 导航注册
│   ├── AppNavigationState.js   // Nvigation state 入口
│   ├── config.js               // 导航通用配置
│   └── root.js                 // Ract Native 入口页
│
├── ios                         // ios原生部分
├── index.js                    // 项目注册入口文件
├── android                     // android原生部分
├── node_modules                // 项目依赖包
├── __test__                    // 自动化测试
├── package.json                // 项目配置信息
├── pre-commit                  // 提交代码时按照.eslint的配置进行校验
├── .editorconfig               // 统一不同编辑器配置
├── .babelrc                    // 设置转码的规则,插件,文件地址映射
├── .eslintrc                   // 代码校验规则配置
└── yarn.lock                   // 依赖的版本信息管理

```

### lin的归纳分享

11111 
