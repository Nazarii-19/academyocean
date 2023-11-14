import { getFromStorage, setToStorage } from '~/helpers/storageHelper.ts'
import { CourseInStorage, CourseKeyInStorage } from '~/pages/home'
import { Course } from '../types/CourseType.ts'

export const saveCourseData = (course: Course) => {
  const courseList: CourseInStorage[] = getFromStorage(CourseKeyInStorage)

  const neededCourseInStorage = courseList.find(
    courseItem => courseItem.id === course.id
  )
  const neededIndex = courseList.findIndex(
    courseItem => courseItem.id === course.id
  )
  if (!neededCourseInStorage) return

  neededCourseInStorage.attempts++

  courseList[neededIndex] = neededCourseInStorage
  setToStorage(CourseKeyInStorage, courseList)
}
