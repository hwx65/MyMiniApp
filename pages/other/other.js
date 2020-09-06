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
})