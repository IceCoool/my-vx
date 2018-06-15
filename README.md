# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##配置路由
```
所有的路由都在src/router/index.js下配置 （所有的路由公用一个 router-view 在App.vue中 所谓的单页面）
1：把需要的模块引入  import Hello from '@/components/Hello';
2：配置路由路径 其中path为路径（可自己定义）  router-link  的to属性会根据path跳转到相应的模块
```

##模块嵌套
```
1：把需要的模块引入 并将模块挂载到实例的compenents中
2：在template中需要的地方使用
```

##url的模式
```
默认使用hash模式 即在url中带#（太丑）  可以在src/router/index.js 中调整（使用history模式 详见官网
https://router.vuejs.org/zh-cn/essentials/history-mode.html）
```

##ui框架的选择
```
例：element-ui
1：npm i element-ui -S
2：在main.js中引入
#   import ElementUI from 'element-ui'
#   import 'element-ui/lib/theme-default/index.css'
3：要显示的使用
#   Vue.use(ElementUI)
```


##调试  使用 SourceMap 断点调试
```
方案1：修改 /build/webpack.dev.conf.js 文件中的 devtool 为 'source-map'
方案2：在可能出错的代码块部分写上 debugger 打开调试器后执行到这段代码时会自动进入断点调试
export default {//个人不建议这种方案
  created() {
    const href = window.location.href
    debugger // 代码运行到此处会中断
    console.log(href)
  },
}
```


