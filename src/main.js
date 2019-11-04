import VueCountdown from '@chenfengyuan/vue-countdown';
import Vue from 'vue';
import App from './App.vue';


Vue.component(VueCountdown.name, VueCountdown);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
