import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from '@/App.vue'
import router from '@/router/router.js'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render(h) {return h(App);}
})
.$mount('#app');
