import VueAgile from 'vue-agile';
import Vue from 'vue';
import App from './App.vue';
var VueScrollTo = require('vue-scrollto');


Vue.config.productionTip = false;

Vue.use(VueAgile)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  render: h => h(App),
}).$mount('#app');

