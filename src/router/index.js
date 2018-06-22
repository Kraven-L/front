import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BasicInfo from '@/components/BasicInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/basicinfo',
      name: 'BasicInfo',
      component: BasicInfo
    }
  ]
})
