import VueAgile from 'vue-agile';
import VueCountdownTimer from 'vuejs-countdown-timer'
import Vue from 'vue';
import App from './App.vue';


Vue.use(VueAgile)
Vue.use(VueCountdownTimer)
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

