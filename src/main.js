import Vue from 'vue'
import Notifications from 'vue-notification';

import router from './router';
import App from './App'

Vue.use(Notifications);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

