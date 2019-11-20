import Vue from 'vue'
import Router from 'vue-router'

import Index from '../pages/Index/Index.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'


//申明使用插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',     //首页
      name: 'index',
      component: Index
    },
    {
      path: '/login', //登录
      name: 'login',
      component: Login
    },
    {
      path: 'register', //注册
      name: 'register',
      component: Register
    }
  ]
})
