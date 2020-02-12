import Vue from 'vue'

/**
 * 电话号码保护过滤器
 */
Vue.filter('Phone', (phone) => {
  phone += ''
  return phone.substring(0, 4) + '****' + phone.substring(8)
})

/**
 * 人民币格式过滤器
 */
Vue.filter('RMB', (money) => {
  // 30000 => ￥30,000.00
  money = money.toString()
  let int = money.split('.')[0]// 整数部分
  let float = money.split('.')[1] ? money.split('.')[1] : '.00'// 小数部分
  let intArr = int.split('').reverse()// 将整数部分的数字转换为数组再倒叙
  // 遍历intArr
  for (let i = 0; i < intArr.length; i++) {
    // 加逗号
    if (i % 3 === 0) {
      intArr[i] = intArr[i] + ','
    }
  }
  // 再翻转数组,并且转换为普通字符串
  let result = intArr.reverse().join('')
  // 将符号和整数和小数部分进行组合
  result = '￥' + result.substring(0, result.length - 1) + float
  return result
})
