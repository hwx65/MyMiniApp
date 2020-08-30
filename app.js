//app.js
let serverData = [];
for(let i = 1; i < 250; i++){
  serverData.push({id:i, name:i})
}
App({
  globalData:{
    id:'123'
    },
  onLaunch: function (options) {
    wx.requestTest = ({data:{page,size},success}) => {
      setTimeout(
        () => {
          //模拟网络返回请求
          let res = {
            data:{
              data:{
                rows: serverData.slice((page - 1) * size, size + (page - 1) * size)
              },
              result: true,
            }
          }
          console.log(res)
          success(res)
        },10//模拟网络延迟
      )
    }
  },
  onShow:function(){
    console.log("app.js ---onShow---");
  },
  onHide:function(){
    console.log("app.js ---onHide---");
  },
  onError: function (msg){
    console.log("app.js ---onError---" + msg);
    // var xsc = new Array(-5);
    // console.log(xsc);
  },
})