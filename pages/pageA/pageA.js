// pages/pageA/pageA.js

let isInitSelfShow = true;
Page({
  
  clickto_pageC:function(){
   wx.navigateTo({
      url: '../pageC/pageC?param_arr'
    });
  },
})