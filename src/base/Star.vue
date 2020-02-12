<template>
  <div class="star">
    <el-rate
      v-model="value"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}">
    </el-rate>
  </div>
</template>
<script>
export default {
  name: 'Star',
  props: {
    value: {
      type: Number,
      default: 5
    }
  }
}
</script>
<style lang="stylus" scoped>

</style>
