//index.js
const app = getApp()

Page({
  data:{
    data:0,
    trigger:true,
    windowHeight:0,
  },
  clickMe: function() {
    wx.switchTab({
      url: '../other/other',
    })
  },
  clickto_pageA:function(){
    wx.navigateTo({
      url: '../pageA/pageA',
    })
  },

  clicksetData:function(){
    this.data.data++
    console.log(this.data.data)
    var x = new Array(-5);
    this.setData({
      data:this.data.data
    })
  },
  async clicktrigger(){
    var temp = await wx.getStorage({key:'key'});
    console.log("temp: "+temp);
  },
  // clicktrigger:function(){
  //   var temp = wx.getStorageSync('key');
  //   console.log(temp);
  // },

  onLoad:function(){
    console.log(this)
    wx.setStorage({
      key:"key",
      data:"value"
    });
  },
  onReady: function () {
    console.log("page ---onReady---");
  },
  onShow: function () {

    console.log("page ---onShow---");
  },
  onHide: function () {
    console.log("page ---onHide---");
  },
  onUnload: function () {
  }
})
