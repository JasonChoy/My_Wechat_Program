//index.js
//获取应用实例
var app = getApp();
//导入外部js(模块化)
var mokuaihua = require('../../utils/mokuaihua.js');
Page({
  //页面的初始数据
  data: {
    text: "This is page data."
  },
  //生命周期函数--监听页面加载(一个页面只会调用一次。)
  onLoad: function(options) {
    console.log("mypage onLoad");
  },
  //生命周期函数--监听页面初次渲染完成(一个页面只会调用一次)
  onReady: function() {
    console.log("mypage onReady");
  },
  //生命周期函数--监听页面显示
  onShow: function() {
    console.log("mypage onShow");
  },
  //生命周期函数--监听页面隐藏
  onHide: function() {
    console.log("mypage onHide");
  },
  //生命周期函数--监听页面卸载
  onUnload: function() {
    console.log("mypage onUnload");
  },
  //	页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {
    console.log ("mypage onPullDownRefresh");
  },
  //页面上拉触底事件的处理函数
  onReachBottom: function() {
    mokuaihua.printLog("模块化事件触发");
    console.log("mypage onReachBottom");
  },
  //用户点击右上角分享
  onShareAppMessage: function () {
    console.log("onShareAppMessage");
  },
  // Event handler.
  viewTap: function() {
    if(this.data.text == "Set some data for updating view."){
      this.setData({text: 'This is page data.'})
    }else{
      this.setData({text: 'Set some data for updating view.'})
    }

  },
  customData: {
    hi: 'MINA'
  }
})
