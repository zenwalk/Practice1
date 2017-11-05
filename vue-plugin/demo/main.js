// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

const vuePlugin = process.env.NODE_ENV === 'development'
  ? require('../src/vue-plugin.js')
  : require('../dist/vue-plugin.js')

Vue.config.productionTip = false

console.log(vuePlugin);


// Using plugin
Vue.use(vuePlugin.default)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
