import Vue from 'vue'
import Router from 'vue-router'

import Auth from '@/components/Auth'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/hello',
        name: 'HelloWorld',
        component: HelloWorld
      },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    },
    {
    path: '*',
    name: '/Auth',
    component: Auth
  }
]
})