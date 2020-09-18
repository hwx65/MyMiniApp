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

  clicktrigger:function(){
    var x = isLogined => {
      this.setData({
        trigger : isLogined
      })
      console.log("yyyyy")
    }
    x(false)
  },
  onLoad: function (option) {
    console.log("this is first time" + this);
    let _this = this
    wx.getSystemInfo({
      success (res){
        console.log("this is second time" +  this)
        this.setData({windowHeight: res.windowHeight});
      }
    });
    console.log(this.data.windowHeight)
    console.log('---onLoad---')
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
