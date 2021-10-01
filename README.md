
## 这是一个基于vue的仿蘑菇街web移动应用

### 注意事项：
### 1.可能由于better-scroll的bug，谷歌浏览器手机调试工具需要手动刷新才能滚动，Edge、火狐浏览器手机调试模式不支持滚动，不开启手机调试就基本能不会出现滚动问题，用手机打开也基本不会出现问题
### 2.打开主页、分类页停顿俩三秒向下拖动，不然可能出现下拉但弹一下回来。因为这俩页面图片多，滚动高度需要图片加载后更新，可能图片没完成渲染完，滚动高度还没刷新，所以拉不下去
### 3.此项目功能并不完整，只有些基本的功能，如用户页的功能、下单功能都没有实现。
### [在线浏览地址](http://120.24.92.39:86) 
## 演示效果如下
## ![image](https://github.com/chen-ccy/vue-onlineStore/blob/gh-pages/public/image/%E9%A6%96%E9%A1%B5.gif?raw=true)    ![image](https://github.com/chen-ccy/vue-onlineStore/blob/gh-pages/public/image/%E8%AF%A6%E6%83%85%E9%A1%B5+%E8%B4%AD%E7%89%A9%E8%BD%A6.gif?raw=true)


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
