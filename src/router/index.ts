import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterEnum from '~/enums/RouterEnum.ts'
import { Home } from '~/pages/home'
import { Auth } from '~/pages/auth'
import { Course } from '~/pages/course'
import { CourseResult } from '~/pages/course-result'
import NotFound from '~/pages/not-found/NotFound.vue'
import { UserKeyInStorage } from '~/modules/user'
import { getFromStorage } from '~/helpers/storageHelper.ts'

Vue.use(VueRouter)

const routes = [
  { path: RouterEnum.Home, name: 'Home', component: Home },
  { path: RouterEnum.Auth, name: 'Auth', component: Auth },
  { path: `${RouterEnum.Course}/:id`, name: 'Course', component: Course },
  {
    path: RouterEnum.CourseResult,
    name: 'CourseResult',
    component: CourseResult
  },
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
