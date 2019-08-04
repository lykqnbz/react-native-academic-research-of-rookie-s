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
- [超级棒的官方Demo合集超多！@林伟杰](https://github.com/cllemon/reactNativeDemo)
- [react-native与webview的通信](https://www.jianshu.com/p/09f1d99b9de9)



**借鉴项目other文件夹:**
- [reactNativeSharedBook](https://github.com/cllemon/ReactNativeSharedBook)
- [smart-install](https://github.com/yangaijun/smart-install)
- [wecapps](https://github.com/edgardong/wecapps)
- [xiaoduyuReactNative](https://github.com/54sword/xiaoduyuReactNative)
- [Mozi](https://github.com/duheng/Mozi)


**项目文件夹结构说明:**
```html 

├── __test__                    // 自动化测试
├── android                     // android原生部分
├── ios                         // ios原生部分
├── node_modules                // 项目依赖包
├── src                         // 主要文档
│   ├── utils                   // 工具类方法文件夹
│   │    ├── request            // 请求二次封装，使用axios


│   ├── app                     // redux部分
│   │    ├── actions            // creat action
│   │    ├── constants          // constants
│   │    ├── reducers           // reducer
│   │    ├── sagas              // redux saga
│   │    ├── selectors          // 过滤以及准备view层需要的数据
│   │    └── store              // store
│   ├── commons                 // 共享基础模块
│   ├── components              // 通用组件
│   ├── containers
│   │    └── page               // 具体业务模块
│   ├── routers                 // 路由部分
│   │    ├── index.js           // page模块聚合页
│   │    └── app.js             // 导航注册
│   ├── AppNavigationState.js   // Nvigation state 入口
│   ├── config.js               // 导航通用配置
│   └── root.js                 // Ract Native 入口页
│
├── .buckconfig                 // buck 的配置文件，buck 是 Facebook 开源的高效编译系统，对 Android iOS 同时适用，通过复用未修改的代码单元、增量编译等提高编译效率
├── .flowconfig                 // flow 的配置文件，flow 用于代码静态检查
├── .gitattributes              // git提供的自动识别语言配置文件
├── .gitignore                  // git提供忽略添加到版本管理中
├── .watchmanconfig             // watchman 的配置文件，watchman 用于监控文件变化
├── App.js                      // 生成的初始化代码（helloworld的所在地 这个没什么用）
├── app.json                    // 配置项目的name和displayName
├── babel.config.js             // babel的配置文件，babel用于矫正代码书写规范
├── index.js                    // 项目注册入口文件
├── metro.config                // metro 的配置文件，metro 用于代码缓存管理
├── package-lock.json           // 项目配置信息
├── package.json                // 项目配置所需要的各种模块
└── yarn.lock                   // 由 Facebook 创建的新 JS 包管理器

```

**引入包简解**
- [@react-native-community/async-storage](https://blog.csdn.net/Cui_xing_tian/article/details/89925216) 缓存async-storage 配合react-native-storage    需要link
- [@react-native-community/netinfo](https://www.twle.cn/c/yufei/reactnativedoc/reactnative-doc-netinfo.html) 用于可以获取设备当前的网络状态的NetInfo模块   需要link
- [axios](https://www.jianshu.com/p/8951810b2e88) React Native 网络请求axios封装
- [moment](http://momentjs.cn/) 日期处理类库工具类
- [react-native-device-info](https://blog.csdn.net/weixin_44187730/article/details/88824795) 获取设备信息    需要link
- [react-native-fs](https://blog.csdn.net/weixin_44187730/article/details/87729100) 访问本地文件系统  需要link
- [react-native-fs 安卓端解决方案](https://www.jianshu.com/p/63fe5591f400) 本地文件访问 react-native-fs Android配置所遇到的坑解决方案 
- [react-native-modal](https://www.jianshu.com/p/4145f1000804) 弹出模态框，可全屏
- [react-native-root-toast](https://blog.csdn.net/weixin_34129696/article/details/87350031) Toast浮动提示框 
- [react-native-splash-screen](https://www.jianshu.com/p/4540ac17dfd4) react-native 启动页  需要link
- [react-native-storage](https://www.jianshu.com/p/43c43d8c38a0) 数据持久化存储文档配合 @react-native-community/async-storage 使用
- [react-native-swipeout](https://www.jianshu.com/p/45cf0bf297d6) 列表左右滑动出现图标文字
- [react-native-swiper](https://www.jianshu.com/p/8905d988d1db) swiper
- [react-native-update](https://github.com/reactnativecn/react-native-pushy/blob/master/docs/guide.md) 热更新(暂时不用)
- [react-native-update-cli](https://github.com/reactnativecn/react-native-pushy/blob/master/docs/guide.md) 热更新(暂时不用)
- [react-native-webview](https://www.jianshu.com/p/88932df10645) webView连通H5
- [react-navigation](https://reactnavigation.org/docs/zh-Hans/getting-started.html)  一个可扩展且易于使用的导航   
- [react-native-gesture-handler](https://www.cnblogs.com/nangezi/p/10625504.html) react-navigation 3.x版本必备的依赖控件  需要link
- [react-redux](https://cn.redux.js.org/) Redux 中文文档
- [redux](https://blog.csdn.net/thinkingw770s/article/details/82696532) react-redux和redux配合开发
- [redux-actions](https://www.jianshu.com/p/d2615a7d725e) 简化编写redux相关代码的一个工具
- [redux-logger](https://www.cnblogs.com/fanlinqiang/p/8001292.html) 简化编写redux相关代码的一个工具
- [redux-thunk](https://www.cnblogs.com/fanlinqiang/p/8001292.html) 简化编写redux相关代码的一个工具
- [reselect](https://blog.csdn.net/weixin_36094484/article/details/80368604) 优化redux性能优化之避免冗余计算
- [rn-placeholder](https://www.jianshu.com/p/984ef99641f5) 预设占位placeholder 骨架屏 
- [react-native-webview-bridge-updated](https://www.cnblogs.com/fengyunyue/p/6958596.html) react-native与webview的通信拓展，暂定


### lin的归纳分享

**react native debugger**
[react native debugger](https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md)

