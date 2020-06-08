const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const isNullOrEmpty = data =>{
  if(data == null || data == ""){
    return true
  }
  return false
}

const checkAndNotice = (username,tips) => {
    if(isNullOrEmpty(username)){
      wx.showToast({
        title: tips,
        icon:"none",
        duration:1000
      })
      return false
    }
    return true
}

const showSuccess = (tips) =>{
  wx.showToast({
    title: tips,
    icon:"success",
    duration:1000
  })
}

const showFailed = (tips) => {
  wx.showToast({
    title: tips,
    icon:"none",
    duration:1000
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  isNullOrEmpty:isNullOrEmpty,
  checkAndNotice:checkAndNotice,
  showFailed:showFailed,
  showSuccess:showSuccess
}
