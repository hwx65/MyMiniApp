//index.js
const app = getApp()

Page({
  data:{
    xxx:{
      p:1,
      q:2
    },
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
    var temp = "11111111111111111111111111111111111"
    for(i = 0; i < 1; i++){
      temp = temp + temp
    }
    var time = new Date().getTime()
    // for(i = 0; i < 8000; i++){
    //   this.setData({
    //     data:i,
    //     xx:i
    //   })
    // }
    console.log(temp)
    this.setData({
      data:temp,
    })
    var time2 = new Date().getTime()
    var usetime = time2 - time
    console.log(usetime)
  },
  clicktrigger:function(){
    this.setData({
      data:0,
      xxx:{
        p:"ADSfafd"
      }
    })
  },

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