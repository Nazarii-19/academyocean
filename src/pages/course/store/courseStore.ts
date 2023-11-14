import { getFromStorage, setToStorage } from '~/helpers/storageHelper.ts'
import { CourseInStorage, CourseKeyInStorage } from '~/pages/home'
import { Course, Duration } from '../types/CourseType.ts'
import { getCourse } from '../helpers/getCourseHelper.ts'
import { saveCourseData } from '../helpers/saveCourseDataHelper.ts'
import { getCourseDuration } from '../helpers/getCourseDurationHelper.ts'

interface State {
  course: Course | null
  duration: Duration
}

const state: State = {
  course: null,
  duration: {
    lastTime: '',
    totalS: 0
  }
}
const mutations = {
  SET_COURSE(state: State, course: Course) {
    state.course = course
  },
  SET_DURATION(state: State, duration: Duration) {
    state.duration = {
      ...state.duration,
      ...duration
    }
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
    const { course, courseInStorage } = getCourse(id)

    if (course) saveCourseData(course)

    commit('SET_COURSE', course ?? null)
    commit('SET_DURATION', {
      lastTime: new Date().toISOString(),
      totalS: courseInStorage?.duration?.totalS ?? 0
    })
  },
  saveCompletionPercentage({ commit, state, dispatch }) {
    const course: Course = state.course!
    const completedLessons = course.lessons.filter(lesson => lesson.isCompleted)

    const percentage = Math.round(
      (completedLessons.length / course.lessons.length) * 100
    )

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
  },
  saveDuration({ state: { course, duration } }) {
    const courseList: CourseInStorage[] = getFromStorage(CourseKeyInStorage)
    const neededCourseInStorage = courseList.find(
      courseItem => courseItem.id === course.id
    )
    if (!neededCourseInStorage) return

    neededCourseInStorage.duration = getCourseDuration(duration)

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
