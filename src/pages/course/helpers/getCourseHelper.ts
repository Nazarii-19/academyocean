import { CourseInStorage, CourseKeyInStorage } from '~/pages/home'
import { getFromStorage } from '~/helpers/storageHelper.ts'
import { courseList } from '~/pages/course/mocks/courseList.ts'

export const getCourse = (id: string) => {
  const course = courseList.find(course => course.id === id)
  if (!course) {
    return {
      course: null,
      courseInStorage: null
    }
  }

  const courseInfo: CourseInStorage[] = getFromStorage(CourseKeyInStorage)

  const courseInStorage = courseInfo.find(course => course.id === id)
  course.completionPercentage = courseInStorage?.completionPercentage ?? 0

  if (courseInStorage && courseInStorage.activeLessonId) {
    course.activeLessonId = courseInStorage.activeLessonId
  }

  const lessonIndex = course.lessons.findIndex(
    lesson => lesson.id === course.activeLessonId
  )
  if (lessonIndex) {
    course.lessons.every((lesson, index) => {
      if (index < lessonIndex) {
        lesson.isCompleted = true
        return true
      }
      if (index === course.lessons.length - 1) {
        lesson.isCompleted = true
        return false
      }
      return false
    })
  }

  return { course, courseInStorage }
}
