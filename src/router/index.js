import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home/Home'),
      children: [
        {
          path: '/',
          redirect: 'take'
        },
        {
          path: 'take',
          name: 'Take',
          component: () => import('@/components/home/Take')
        },
        {
          path: 'find',
          name: 'Find',
          component: () => import('@/components/home/Find')
        },
        {
          path: 'order',
          name: 'Order',
          component: () => import('@/components/home/Order')
        },
        {
          path: 'mine',
          name: 'Mine',
          component: () => import('@/components/home/Mine')
        }
      ]
    },
    {
      path: '/seller',
      name: 'Seller',
      component: () => import('@/components/seller/Seller')
    }
  ]
})
