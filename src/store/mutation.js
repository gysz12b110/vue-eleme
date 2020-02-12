import {ADD_COUPON, SET_CURRENT_SELLER} from './mutation-type'

export default {
  // 给常量或变量外层添加中括号，就可以读取其内部值来作为函数名称
  // 添加新的优惠券
  [ADD_COUPON] (state, coupon) {
    state.user.coupon.push(coupon)
  },
  // 设置当前商家信息
  [SET_CURRENT_SELLER] (state, seller) {
    state.seller = seller
  }
}
