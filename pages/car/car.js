// pages/car/car.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        //   carArray:[]
        // carArray:[
        //     {
        //         goodsId:1,
        //         carImage:"../../image/test.jpg",
        //         carPrice:"169.00",
        //         carName:"木村耀司登山旅行大学生户外情侣双肩背包外带小背包1",
        //         carNum:1,
        //         carShow:true
        //     },
        //     {
        //         goodsId: 1,
        //         carImage: "../../image/test.jpg",
        //         carPrice: "169.00",
        //         carName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包2",
        //         carNum: 1,
        //         carShow: false
        //     },
        //     {
        //         goodsId: 1,
        //         carImage: "../../image/test.jpg",
        //         carPrice: "169.00",
        //         carName: "木村耀司登山旅行大学生户外情侣双肩背包外带小背包3",
        //         carNum: 1,
        //         carShow: true
        //     }
        // ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var getCardata = wx.getStorageSync("GoodsCarList");
        console.log(getCardata);
        this.setData({
            carArray: getCardata
        })
    },

    /**
     * 跳转到支付页面
     */

    getPay: function () {
        wx.navigateTo({
            url: '../pay/pay',
        })
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