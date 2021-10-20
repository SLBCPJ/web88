import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css'
import router from '@/router';
import {upperName, phoneFilter} from '@/filters';
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.filter('upper',upperName)
Vue.filter('phone',phoneFilter)
new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
