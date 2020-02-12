export default {
  user: {
    id: 1,
    avatar: 'https://avatar.gitee.com/uploads/63/1423163_cc_vinci.png!avatar60?1523760854',
    username: 'Frank',
    phone: 18831259123,
    coupon: ['满100减1元', '满50减0.5元', '宵夜3元券', '下午茶2元券'],
    integral: 1000,
    wallet: 800000
  },
  seller: sessionStorage.getItem('seller') ? JSON.parse(sessionStorage.getItem('seller')) : {}
}
