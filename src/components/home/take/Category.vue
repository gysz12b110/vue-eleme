<template>
  <div class="swiper">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(c,i) in list" :key="i" class="category">
        <a class="cate" href="#" v-for="(t,index) in c" :key="index">
          <img :src="t.icon"/>
          <p>{{t.name}}</p>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import {CATEGORIES} from '@/api'
export default {
  name: 'Category',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.$http.get(CATEGORIES).then(val => {
      this.list = val.data
    })
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  width 100%
  height 4.5rem
.category
  .cate
    display block
    float left
    width 20%
    text-align center
    padding 0 .266667rem /* 20/75 */
    box-sizing border-box
    color #333
    font-size .293333rem /* 22/75 */
    img
      width 2rem /* 150/75 */
      max-width 100%
</style>
