//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.initData()
  },
  //初始化用户信息
  initData:function(){
    var data = wx.getStorageSync('accounts')
    if(data){
      this.globalData.accounts.lenght = 0
      this.globalData.accounts = data
    }
  },
  //添加用户
  addUser : function(username,phone){
    var utils = require("utils/util.js")
    if(utils.isNullOrEmpty(username) || utils.isNullOrEmpty(phone)){
      utils.showFailed("信息不完整")
    }else{
      this.globalData.accounts.push({username:username,phone:phone})
      wx.setStorageSync('accounts',this.globalData.accounts)
      utils.showSuccess("添加成功")
    }
  },
  //更新用户信息
  editUser : function(index,user){
    this.globalData.accounts[index] = user
    wx.setStorageSync('accounts',this.globalData.accounts)
  },
  //删除用户
  deleteUser : function(index){
    this.globalData.accounts.splice(index,1)
    wx.setStorageSync('accounts',this.globalData.accounts)
  },
  globalData: {
    accounts: []
  }}
)