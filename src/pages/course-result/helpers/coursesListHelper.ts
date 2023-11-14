import { CourseInStorage, CourseKeyInStorage } from '~/pages/home'
import { courseList } from '~/pages/course'
import { getFromStorage } from '~/helpers/storageHelper.ts'
import { CourseInfo } from '../types/CourseInfo.ts'

export const getCoursesList = (): CourseInfo[] => {
  const coursesListFromStorage: CourseInStorage[] =
    getFromStorage(CourseKeyInStorage)

  if (!coursesListFromStorage) return []

  return coursesListFromStorage.map(course => {
    return {
      id: course.id,
      title:
        courseList.find(courseMockItem => courseMockItem.id === course.id)
          ?.title ?? '',
      duration: course.duration,
      attempts: course.attempts,
      completionPercentage: course.completionPercentage
    }
  })
}
