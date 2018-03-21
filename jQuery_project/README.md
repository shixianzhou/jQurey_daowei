#jQuery
## 第一天
1.使用express搭建项目  

2.简单实现静态页面 

3.使用Swiper插件，实现轮播功能
``` bash
Swiper插件功能：
     Autoplay 自动轮播
       -delay 时间
     spaceBetween 间隙
     loop 循环滚动
     effect 轮播效果
     
代码： 
  var swiper = new Swiper('.swiper-container', {
    loop:true,
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
      delay: 2000,//1秒切换一次
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
```
Swiper官网：http://www.swiper.com.cn/

## 第二天
1.实现服务商列表/服务商服务 静态页面

2.实现一些简单的交互效果

``` bash
效果：
    二级菜单
    hover阴影
```
简单静态，暂无问题