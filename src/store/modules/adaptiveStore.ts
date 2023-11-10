interface State {
  isMobile: boolean
}

const state: State = {
  isMobile: false
}

const mutations = {
  SET_MOBILE(state: State, isMobile: boolean) {
    state.isMobile = isMobile
  }
}

const actions = {}

const getters = {
  getIsMobile: (state: State) => state.isMobile
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
