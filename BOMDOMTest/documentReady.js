/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * @description 当页面的文档树加载完成后，可以进行交互就立即触发回调函数执行
 * @param {function} callback -页面加载完成后调用的回调函数
 * @return {undefined} 返回undefined
 * window.onload事件是在页面的图片、第三方脚本、样式等都下载和加载完成后才会触发。
 * 而我们希望是页面的HTML的文档树对象可进行交互就立即绑定DOM的事件和
 * 做一些初始化工作。所以之前的DOM时代的兼容代码
 * 链接：https://www.jianshu.com/p/a61086ee9760
 */

document.myReady = function(callback) {
  // jQuery实现文档加载完成后 事件的原理。
  // 封装标准浏览器和ie浏览器
  if(document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback, false);
  } else if(document.attachEvent) {
    // 兼容IE8及以下的浏览器。
    document.attachEvent('onreadystatechange', function(){
      // 当文档的状态变为：interactive表示，文档dom对象可以进行访问。
      if(document.readyState == "interactive") {
        callback(window.event);
      }
    });
  } else {  // 其他特殊情况
    window.onload = callback;
  }
};
