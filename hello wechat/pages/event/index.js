//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'click me',

  },
  onLoad: function () {
    
  },
  mottofunc: function(event){
    console.log(event);
    console.log("data—userid-" + event.target.dataset.userid);
  },
  handleTap1:function(event){
    console.log("handleTap1");
  },
  handleTap2:function(event){
    console.log("handleTap2");
  },
    handleTap3:function(event){
    console.log("handleTap3");
  }
})
