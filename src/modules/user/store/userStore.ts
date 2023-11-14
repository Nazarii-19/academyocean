import { LoginForm } from '~/pages/auth'
import { removeFromStorage, setToStorage } from '~/helpers/storageHelper.ts'
import RouterEnum from '~/enums/RouterEnum.ts'
import { UserKeyInStorage } from '~/modules/user'
import { CourseKeyInStorage } from '~/pages/home'
import User from '../types/UserType.ts'

interface State {
  user: User | null
}

const state: State = {
  user: null
}
const mutations = {
  SET_USER(state: State, user: User | null) {
    state.user = user
  }
}
const actions = {
  login({ commit }, loginForm: LoginForm) {
    const newUser: User = {
      id: new Date().getTime().toString(),
      email: loginForm.email,
      name: {
        first: 'Maria',
        last: 'Norton'
      },
      avatar:
        'https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
    commit('SET_USER', newUser)
    setToStorage(UserKeyInStorage, newUser)

    location.href = RouterEnum.Home
  },
  logout({ commit }) {
    commit('SET_USER', null)
    removeFromStorage(UserKeyInStorage)
    removeFromStorage(CourseKeyInStorage)
    location.href = RouterEnum.Auth
  }
}
const getters = {
  getUser: (state: State) => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
