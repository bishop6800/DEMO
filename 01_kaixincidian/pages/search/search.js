// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000,
    imgUrls:[
      "../image/poster/poster1.jpg",
      "../image/poster/poster2.jpg", 
      "../image/poster/poster3.jpg", 
      "../image/poster/poster4.jpg",
    ],
    array:[
      {
        "img": '../image/list/coffee.jpg',
        "title": '早安英语',
        "type": '每日英语',
        "liulan": '123浏览量',
        "pinglun": '12评论数'
      },
      {
        "img": '../image/list/ad1.jpg',
        "title": '体验纯正美式教学',
        "type": '广告',
        "liulan": '456浏览量',
        "pinglun": '45评论数'
      },
      {
        "img": '../image/list/ad2.jpg',
        "title": '外教1V1',
        "type": '广告',
        "liulan": '789浏览量',
        "pinglun": '78评论数'
      },
      {
        "img": '../image/list/class.jpg',
        "title": '英语课堂',
        "type": '英语教学',
        "liulan": '101浏览量',
        "pinglun": '10评论数'
      },
    ]
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