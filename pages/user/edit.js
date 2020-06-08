// pages/user/edit.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:null,
    index:-1
  },

  //用户信息更新
  updateUser:function(e){
    var formObject = e.detail.value
    var username = formObject.username
    var phone = formObject.phone
    var result = false

    var utils = require("../../utils/util")
    var temp = this.data.account
    if(username != ""){
      temp.username = username
      result = true
    }
    if(phone != ""){
      temp.phone = phone
      result = true
    }
    if(result){
      wx.showLoading({
        title: '修改中...',
      })
      app.editUser(this.data.index,temp)
      this.setData({
        account:temp
      })
      wx.hideLoading()
      utils.showSuccess("修改成功")
    }else{
      utils.showFailed("修改失败")
    }
  },

  deleteUser:function(){
    var index = this.data.index
    var utils = require("../../utils/util")
    if(index >= 0 && index <= app.globalData.accounts.length-1){
      app.deleteUser(index)
      utils.showSuccess("删除成功")
      wx.navigateBack()
    }else{
      utils.showFailed("删除失败")
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var num = options.index
    var user = app.globalData.accounts[num]
    if(user){
      this.setData({
        account:user,
        index:num
      })
    }else{
      let utils = require("../../utils/util")
      utils.showFailed("用户不存在")
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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