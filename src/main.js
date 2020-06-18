import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Vue2Storage} from 'vue2-storage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.less'

Vue.config.productionTip = false

Vue.use(Vue2Storage, {
  prefix: 'app_',
  driver: 'local',
  ttl: 60 * 60 * 24 * 1000
})

Vue.filter('price', function (value) {
  value = parseInt(value)
  let priceFormat = String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  return `${priceFormat} Р.`
})

Vue.filter('declention', function (value) {
  let word
  switch (value % 10) {
    case 1:
      word = 'блюдо';
      break;
    case 2:
    case 3:
    case 4:
      word = 'блюда'
    break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 0:
      word = 'блюд'
    break;
  }
  return `${value} ${word}`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
