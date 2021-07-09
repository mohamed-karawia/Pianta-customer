import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';

Vue.use(Vuelidate);
Vue.component('paginate', Paginate);

axios.defaults.baseURL = 'https://gradubanana.herokuapp.com/';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
