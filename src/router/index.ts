import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '~/pages/home/Page.vue'
import Auth from '~/pages/auth/Page.vue'
import NotFound from '~/pages/not-found/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/auth', name: 'Auth', component: Auth },
  { path: '*', name: 'NotFound', component: NotFound }
]

export default new VueRouter({
  mode: 'history',
  routes
})
