import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
// @ts-ignore
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
