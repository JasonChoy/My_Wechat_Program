//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    a: 1,
    b: 2,
    zero: 0,
    condition:true,
    motto: 'Hello World',
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    itemObj: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  onLoad: function () {
    
  }
})
