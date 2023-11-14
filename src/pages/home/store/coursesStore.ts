import { getFromStorage, setToStorage } from '~/helpers/storageHelper.ts'
import { courseCardList } from '~/pages/home'
import { CourseKeyInStorage } from '~/pages/home'
import { CourseCard, CourseInStorage } from '~/pages/home'

interface State {
  courseCardList: CourseCard[]
}

const state: State = {
  courseCardList: []
}

const actions = {
  initCourseCardList({ dispatch, commit }) {
    const courses = getFromStorage(CourseKeyInStorage)

    const courseList = [...courseCardList]
    if (!courses) dispatch('saveCoursesInStorage', courseList)
    else {
      courses.map((course: CourseInStorage) => {
        const card = courseList.find(card => card.id === course.id)
        if (card) card.completionPercentage = course.completionPercentage
      })
    }

    commit('SET_COURSER_CARD_LIST', courseList)
  },
  saveCoursesInStorage(_, courses: CourseCard[]) {
    const coursesForStorage: CourseInStorage[] = courses.map(course => ({
      id: course.id,
      completionPercentage: course.completionPercentage,
      activeLessonId: '',
      duration: {
        lastTime: '',
        totalS: 0
      },
      attempts: 0
    }))

    setToStorage(CourseKeyInStorage, coursesForStorage)
  }
}

const mutations = {
  SET_COURSER_CARD_LIST(state: State, courses: CourseCard[]) {
    state.courseCardList = courses
  }
}

const getters = {
  getCourseCardList: (state: State) => state.courseCardList
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
