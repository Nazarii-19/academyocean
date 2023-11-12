import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterEnum from '~/enums/RouterEnum.ts'
import Home from '~/pages/home/Page.vue'
import { Auth } from '~/pages/auth'
import { About } from '~/pages/about'
import NotFound from '~/pages/not-found/NotFound.vue'
import { UserKeyInStorage } from '~/modules/user'
import { getFromStorage } from '~/helpers/storageHelper.ts'

Vue.use(VueRouter)

const routes = [
  { path: RouterEnum.Home, name: 'Home', component: Home },
  { path: RouterEnum.Auth, name: 'Auth', component: Auth },
  { path: RouterEnum.About, name: 'About', component: About },
  { path: '*', name: 'NotFound', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, _from, next) => {
  const user = getFromStorage(UserKeyInStorage)
  if (!user && to.name !== 'Auth') next({ name: 'Auth' })
  else if (user && to.name === 'Auth') next({ name: 'Home' })
  else next()
})

export default router
