// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'firebase'
import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {store} from '../store/index'
import 'bootstrap'
var firebase = require('firebase')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
