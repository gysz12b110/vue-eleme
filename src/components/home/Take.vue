<template>
  <div class="take">
    <Top></Top>
    <Category></Category>
    <Ad></Ad>
    <Recommend></Recommend>
    <SellerList></SellerList>
  </div>
</template>
<script>
import Top from './take/Top'
import Ad from './take/Ad'
import Category from './take/Category'
import Recommend from './take/Recommend'
import SellerList from './take/SellerList'
export default {
  name: 'Take',
  components: {
    Top, Category, Ad, Recommend, SellerList
  }
}
</script>
<style lang="stylus" scoped>

</style>
