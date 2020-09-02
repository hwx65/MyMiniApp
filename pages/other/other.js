// pages/other/other.js
const app = getApp();
Page({
  clickMe: function() {
    wx.navigateTo({ url: '../index/index' })
  },

  clicktoPageA:function(){
    wx.navigateTo({
      url: '../pageA/pageA',
    })
  },

  click_t: function() {
    wx.showToast({ // 显示Toast
      title: 'Toast', 
      icon: 'success',
      duration: 1500
    })
  },
  click_discuss:function(){
    wx.showModal({
      title: '标题',
      content: '告知当前状态，信息和解决方法',
      confirmText: '主操作',
      cancelText: '次要操作',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击主操作')
        } else if (res.cancel) {
          console.log('用户点击次要操作')
        }
      }
    })
  },
  clicksetData:function(){
    this.setData({
      data_1:55
    })
  },
  data: {
    data_1:0
  },
  onLoad:function(){
    console.log(app.globalData.id);
    try{
      const ctx = wx.createCanvasContext('myCanvas');
      // ctx.setFillStyle('red');
      // ctx.setFillStyle('re');
      ctx.fillRect(10, 50, 15000, 500);
      // ctx.setFontSize(5)//设置字体大小，默认10
      // ctx.fillText("LXT", 20, 20)//绘制文本
      ctx.drawImage("../../res/suolong.jpeg",0,0, 100, 100)
      console.log("here should be an error")
      ctx.draw();
    }catch(error){
      console.log("log....."+error);
    }
  }    
})