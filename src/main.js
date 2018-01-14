// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as VueGoogleMaps from '../node_modules/vue2-google-maps/';
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
        load: {
          key: 'AIzaSyAmwP9rGS2-Db9oSCgfHDIMEhvRDxXRR-Y',
          v: '3',
        }
      });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
})
