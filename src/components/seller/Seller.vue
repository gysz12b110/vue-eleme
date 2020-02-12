<template>
  <div class="seller">
    <Top :seller="getSeller"></Top>
    <GoodsList :goods="goods"/>
    <ShopCart />
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import {GOODS} from '@/api'
import Top from './top/Top'
import GoodsList from './goodsList/GoodsList'
import ShopCart from './shopCart/ShopCart'
export default {
  name: 'Seller',
  data () {
    return {goods: {}}
  },
  components: {
    Top, GoodsList, ShopCart
  },
  created () {
    console.log('当前商家ID：' + this.getSeller.id)
    this.$http({
      url: GOODS
    }).then(res => {
      // 通过当前商家ID去筛选出售卖的产品
      this.goods = res.data.find(val => val.sellerId === this.getSeller.id)
    })
  },
  computed: {
    ...mapGetters(['getSeller'])// 从vuex中取出当前商家的详细信息
  }
}
</script>
<style lang="stylus">

</style>
