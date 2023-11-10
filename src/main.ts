import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App.vue'
import './styles/style.scss'

Vue.config.productionTip = false

Vue.component('Icon', () => import('~/ui/icons/Icon.vue'))
Vue.component(
  'IconLogoWithText',
  () => import('~/ui/icons/IconLogoWithText.vue')
)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
