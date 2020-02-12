import * as types from './mutation-type'
export default {
  // 模拟一个活动(内容就是给用户添加一个新的优惠券)
  activity ({commit}, coupon) {
    setTimeout(() => {
      commit(types.ADD_COUPON, coupon)
    }, 1500)
  },

  // 设置当前商家信息
  setSeller (context, seller) {
    sessionStorage.setItem('seller', JSON.stringify(seller))
    context.commit(types.SET_CURRENT_SELLER, seller)
  }
}
