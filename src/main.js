/*
入口js
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
