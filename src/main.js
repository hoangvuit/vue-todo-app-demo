import Vue from 'vue'
// import App from './App.vue'
import App from './Demo.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
