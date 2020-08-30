// pages/pageA/pageA.js

let isInitSelfShow = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    helloMsg: 'hello from PageA',
    bigdata: 0,
    datas: 8,
  },
  
  clickto_pageC:function(){
  //  wx.navigateTo({ url:'../pageC/pageC'});
   wx.navigateTo({
      url: '../pageC/pageC?param_arr=100000000'
    });
  },
  clickMe:function(e){
    console.log(e.currentTarget.dataset.id);
  },
  clickSetData:function(){
    this.setData({
      bigdata:'1100000'
    });
  },
  clickSetTimes:function(e){
    for(var i = 0; i < 2000; i++){
      this.setData({
        datas:i
      })
  }
  },
  clickRun:function(){
    console.log("everthing is OK");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 页面初始化也会触发onShow，这种情况可能不需要检查通信
    if (isInitSelfShow) return;

    let newHello = wx.getStorageSync('__data');

    if (newHello) {
      this.setData({
        helloMsg: newHello
      });

      // 清队上次通信数据
      wx.clearStorageSync('__data');
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    isInitSelfShow = false;
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})