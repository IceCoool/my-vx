import Vue from 'vue'
import Router from 'vue-router'
import first from '@/components/first/first'
import page from '@/views/page'
import second from '@/components/second/second'

Vue.use(Router)

export default new Router({
  mode: 'history',//history模式 不带#   （默认的为hash模式带#）
  routes: [
    {
      path: '/',
      name: 'page',
      component: page
    },
    {
      path: '/sec',
      name: 'second',
      component: second
    }
  ]
})
