// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './js/config'

Vue.config.productionTip = false

//全局的配置
import './modules/config'

 // eslint-disable no-new 
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
