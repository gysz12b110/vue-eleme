<template>
  <div class="wrap">
    <!-- 左侧菜单 -->
    <div class="category">
      <ul class="list">
        <li class="item" v-for="(t,i) in goods.types" :class="{active: activeCate == i}" :key="i"
        @click="selectList(i)">
          <div class="title"><span class="name">{{t.name}}</span></div>
        </li>
      </ul>
    </div>
    <!-- 右侧菜品列表 -->
    <div class="goods" @scroll="sliderList" ref="goods">
      <ul class="cate-list">
        <li class="cate-item" ref="cateItems" v-for="(types,index) in goods.types" :key="index">
          <div class="title">
            <span class="name">{{types.name}}</span>
            <span class="desc">{{types.desc}}</span>
          </div>
          <ul class="goods-list">
            <li class="goods-item" v-for="(product,i) in types.goods" :key="i">
              <div class="logo">
                <img :src="product.picture" alt="">
              </div>
              <div class="content">
                <div class="name">{{product.name}}</div>
                <div class="desc">{{product.desc}}</div>
                <div class="sale">
                  <span class="sale-count">月售80份</span>
                  <span class="rating">好评率99%</span>
                </div>
                <div class="tags">
                  <i class="recommend">老板推荐</i>
                </div>
                <div class="control">
                  <span class="price">&yen;{{product.price}}</span>
                  <span class="shopping">
                    <i class="icon-take icon-jian"></i>
                    <span class="count">1</span>
                    <i class="icon-take icon-jia"></i>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsList',
  props: ['goods'],
  data () {
    return {
      activeCate: 0, // 激活的分类
      cateItemsHeight: [0]// 商品列表每一个分类列表的高度
    }
  },
  updated () {
    this.cateItemsHeight = [0]
    this.$refs.cateItems.forEach(item => {
      let lastHeight = this.cateItemsHeight[this.cateItemsHeight.length -1 ]
      this.cateItemsHeight.push(item.offsetHeight + lastHeight)
    })
  },
  methods: {
    selectList (index) {
      // 单击左侧菜单处理函数
      this.activeCate = index// 切换左侧菜单样式
      this.$refs.goods.scrollTop = this.cateItemsHeight[index]// 根据下标去高度数组里找高度值作为右侧菜单的滚动条Top去使用
    },
    sliderList (event) {
      // 滚动右侧产品菜单处理函数
      let scrollTop = event.target.scrollTop// 获取当前滚动的位置
      console.log('当前滚动条位置：' + scrollTop)
      for (let i = this.cateItemsHeight.length-1 ; i >= 0 ; i--) {
        console.log('数组遍历：'+ i +'=》'+ this.cateItemsHeight[i])
        if (scrollTop >= this.cateItemsHeight[i]) {
          this.activeCate = i
          break
        }
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap {
  flex: auto;
  display: flex;
  height:50vh;
  .category {
    flex: none;
    width: 1.7391rem;
    overflow: auto;
    .list {
      background: #f8f8f8;
      border-right 1px solid #eee;
      .item {
        padding: 0 0.2415rem;
        font-size: 0.2818rem;
        letter-spacing: 3px;
        line-height: 1.5;
        border-bottom 1px solid #eee;
        .title {
          padding: 0.4rem 0;
          color: #686868;
          text-align: center;
        }
        &.active {
          font-weight: 700;
          background: #fff;
        }
        &:last-child > .title {
          border: none;
        }
      }
    }
  }
  .goods {
    padding-top: 0.161rem;
    margin-left: 0.2576rem;
    flex: auto;
    overflow-y: auto;
    .cate-list {
      .cate-item {
        .title {
          display: flex;
          padding: 0.2013rem 0;
          font-size: 0;
          overflow: hidden;
          white-space: nowrap;
          border-bottom: 1px solid #eee;
          .name {
            flex: none;
            margin-right: 0.1208rem;
            font-size: 0.2818rem;
            font-weight: 700;
            color: #666;
            vertical-align: bottom;
          }
          .desc {
            flex: auto;
            color: #999;
            font-size: 0.2818rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: bottom;
          }
        }
        .goods-list {
          .goods-item {
            display: flex;
            padding: 0.3623rem 0.2415rem 0.3623rem 0;
            border-bottom: 1px solid #f7f7f7;
            .logo {
              flex: none;
              img {
                width: 1.8116rem;
                height: 1.8116rem;
                border-radius: 0.0805rem;
              }
            }
            .content {
              flex: auto;
              margin-left: 0.2415rem;
              overflow: hidden;
              .name {
                font-size: 0.3382rem;
                font-weight: 700;
                color: #333;
              }
              .desc {
                padding-top: 0.161rem;
                color: #999;
                width: 100%;
                font-size: 0.2415rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .sale {
                padding-top: 0.161rem;
                font-size: 0;
                color: #666;
                .sale-count {
                  margin-right: 0.2013rem;
                  font-size: 0.2415rem;
                }
                .rating {
                  font-size: 0.2415rem;
                }
              }
              .tags {
                padding-top: 0.161rem;
                .recommend {
                  padding: 0.0805rem;
                  color: #ff5339;
                  font-style: normal;
                  font-size: 0.2415rem;
                  border: 1px solid #ff5339;
                }
              }
              .control {
                margin-top: 0.161rem;
                line-height: 0.5636rem;
                .price {
                  color: #ff5339;
                  font-size: 0.3382rem;
                  font-weight: bolder;
                }
                .shopping {
                  float: right;
                  font-size: 0;
                  .count {
                    display: inline-block;
                    padding: 0 0.161rem;
                    font-size: 0.3623rem;
                    vertical-align: middle;
                  }
                  .icon-take {
                    display: inline-block;
                    color: #2395ff;
                    font-size: 0.5636rem;
                    vertical-align: middle;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
