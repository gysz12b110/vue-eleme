<template>
  <div class="header">
    <header class="wrap">
      <div class="location">
        <i class="icon-take icon-weizhi"></i>
        <Geo></Geo>
        <i class="icon-take icon-jiantou"></i>
      </div>
      <div class="search" ref="search_bar">
        <input type="text" placeholder="搜索商家、商品名称">
      </div>
      <div class="tags">
        <span v-for="(p,i) in tags" :key="i"><a href="#">{{p.name}}</a></span>
      </div>
    </header>
  </div>
</template>

<script>
import {TAGS} from '@/api'
import Geo from '@/base/Geo'
export default {
  name: 'Top',
  data () {
    return {
      tags: []
    }
  },
  created () {
    this.$http.get(TAGS).then(val => {
      this.tags = val.data
    })
  },
  methods: {
  },
  components: {
    Geo
  }
}
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  box-sizing: border-box;
  .wrap {
    padding: 1.1272rem 0.3623rem 0 0.3623rem;
    background-color: #00a6ff;
    .location {
      color: #fff;
      font-size: 0.4026rem;
      i {
        vertical-align: bottom;
        font-size: 0.4rem;
      }
    }
    .search {
      margin-top: 0.4026rem;
      text-align: center;
      input {
        width: 100%;
        height: 0.8857rem;
        text-align: center;
        outline: none;
        border: none;
        border-radius: 0.0403rem;
      }
      &.fixed{
      position: fixed;
      width: 100%;
      top: 0px;
      background: #00a6ff;
      left: 0;
      overflow: hidden;
      z-index: 999;
      padding: .2rem .373333rem;
      text-align: center;
      box-sizing: border-box;
      margin: 0;
    }
    }
    .tags {
      margin-top: 0.4026rem;
      padding-bottom: 0.2415rem;
      white-space: nowrap;
      overflow-x: hidden;
      overflow-y: hidden;
      span {
        font-size: 0.2818rem;
        padding: 0 0.2818rem;
        a{
          color:white;
        }
      }
    }
  }
}
</style>
