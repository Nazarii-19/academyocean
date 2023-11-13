import { getFromStorage, setToStorage } from '~/helpers/storageHelper.ts'
import { CourseInStorage, CourseKeyInStorage } from '~/pages/home'
import { Course } from '../types/CourseType.ts'
import { courseList } from '../mocks/courseList.ts'

interface State {
  course: Course | null
}

const state: State = {
  course: null
}
const mutations = {
  SET_COURSE(state: State, course: Course) {
    state.course = course
  },
  SET_ACTIVE_LESSON_ID({ course }: State, id: string) {
    course!.activeLessonId = id
  },
  SET_IS_COMPLETED_LESSON({ course }: State, id: string) {
    const lesson = course!.lessons.find(lesson => lesson.id === id)
    if (lesson) lesson.isCompleted = true
  },
  SET_COMPLETION_PERCENTAGE({ course }: State, percentage: number) {
    course!.completionPercentage = percentage
  }
}
const actions = {
  initCourse({ commit }, id: string) {
    const course = courseList.find(course => course.id === id)
    if (!course) return

    const courseInfo: CourseInStorage[] = getFromStorage(CourseKeyInStorage)

    const courseInStorage = courseInfo.find(course => course.id === id)
    course.completionPercentage = courseInStorage?.completionPercentage ?? 0

    if (courseInStorage && courseInStorage.activeLessonId)
      course.activeLessonId = courseInStorage.activeLessonId

    const lessonIndex = course.lessons.findIndex(
      lesson => lesson.id === course.activeLessonId
    )
    if (lessonIndex) {
      course.lessons.every((lesson, index) => {
        if (index <= lessonIndex) {
          lesson.isCompleted = true
          return true
        }
        return false
      })
    }

    commit('SET_COURSE', course ?? null)
  },
  saveCompletionPercentage({ commit, state, dispatch }) {
    const course = state.course!
    const completedLessons = course!.lessons.filter(
      lesson => lesson.isCompleted
    )
    const percentage = (course!.completionPercentage = Math.round(
      (completedLessons.length / course!.lessons.length) * 100
    ))
    commit('SET_COMPLETION_PERCENTAGE', percentage)

    dispatch('saveCompletionPercentageInStorage', percentage)
  },
  saveCompletionPercentageInStorage({ state: { course } }, percentage: number) {
    const courseList: CourseInStorage[] = getFromStorage(CourseKeyInStorage)
    const neededCourseInStorage = courseList.find(
      courseItem => courseItem.id === course.id
    )
    if (!neededCourseInStorage) return

    neededCourseInStorage.completionPercentage = percentage
    neededCourseInStorage.activeLessonId = course.activeLessonId

    const neededIndex = courseList.findIndex(
      courseItem => courseItem.id === course.id
    )

    courseList[neededIndex] = neededCourseInStorage
    setToStorage(CourseKeyInStorage, courseList)
  }
}
const getters = {
  getCourse: (state: State) => state.course
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
