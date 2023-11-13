import { CourseCard } from '~/pages/home'

export interface Lesson {
  id: string
  title: string
  isCompleted: boolean
  content: string
}

export interface Course extends CourseCard {
  activeLessonId: string
  lessons: Lesson[]
}
