const app = getApp()
let loadingMore = false
let lastScollTop = 0;
let lastRequestTime = 0;
Page({
  data: {
    list: [],
    hasMore: true,//列表是否有数据未加载
    page: 1,
    size: 8,//每页8条数据
    scrollYHeight: 0,//scroll-view高度
  },
  bindscroll: function (e) {
    const { scrollHeight, scrollTop } = e.detail;
    const { scrollYHeight, hasMore } = this.data;
    //如果当前没有加载中且列表还有数据未加载，且页面滚动到距离底部40px内
    if (!loadingMore && hasMore && (scrollHeight - scrollYHeight - scrollTop < 40) && lastScollTop <= scrollTop) {
      this.loadMore()
    }
    lastScollTop = scrollTop
  },
  loadMore: function () {
    const { page, hasMore } = this.data;
    if (!hasMore || loadingMore) return;
    loadingMore = true
    setTimeout(
      () => {
        this.fetchList(page + 1, () => {
          loadingMore = false;
        })
      }, 333
    )
  },
  fetchList: function (page, cb) {
    let nowRequestTime = (new Date()).getTime();
    //限制两次网络请求间隔至少1秒
    if (nowRequestTime - lastRequestTime < 1000) {
      if (cb) cb();
      return;
    }
    lastRequestTime = nowRequestTime
    //这里wx.requestTest实际使用时换成wx.request
    //wx.requestTest定义见app.js
    wx.requestTest({
      url: "testUrl",
      header: {
        'Authorization': wx.getStorageSync('token')
      },
      data: {
        page,
        size: this.data.size,
      },
      success: (res) => {
        if (res.data && res.data.result) {
          let list = res.data.data.rows || [];
          if (list.length == 0) {
            this.setData({
              hasMore: false,
              page,
            })
          } else {
            this.setData({
              list: this.data.list.concat(list),
              hasMore: list.length == this.data.size,
              page,
            })
          }
        } else {
          wx.showToast({
            title: res.data ? res.data.message : "列表加载失败",
            icon: 'none',
            duration: 1000
          })
        }
        if (cb) {
          cb()
        }
      },
      fail: () => {
        wx.showToast({
          title: "列表加载失败",
          icon: 'none',
          duration: 1000
        })
        if (cb) {
          cb()
        }
      }
    })
  },
  onReady: function () {
    wx.getSystemInfo({
      success: ({ windowHeight }) => {
        this.setData({ scrollYHeight: windowHeight })//设置scrill-view组件的高度为屏幕高度
      }
    })
  },
  onLoad: function () {
    this.fetchList(1)//加载第一页数据
  }
})