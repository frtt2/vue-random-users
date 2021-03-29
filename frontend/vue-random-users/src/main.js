
import Vue from 'vue'

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
require('./plugins')

Vue.config.productionTip = false
Vue.use(require('vue-moment'));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
