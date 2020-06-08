//index.js
//获取应用实例
const app = getApp()
var isNeedRefresh = false
Page({

  data: {
    accounts:app.globalData.accounts
  },
  onTabItemTap:function(){
    this.setData({
      accounts:app.globalData.accounts
    })
  },
  onShow:function(){
    console.log("走这里了")
    if(isNeedRefresh){
      this.setData({
        accounts:app.globalData.accounts
      })
    }
  },
  editUser:function(e){
    var index = e.currentTarget.dataset.index
    if(index >= 0 && index <= this.data.accounts.length-1){
      wx.navigateTo({
        url: '/pages/user/edit?index='+index
      })
      isNeedRefresh = true
    }
  }
})
