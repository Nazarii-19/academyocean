import { Duration } from '~/pages/course'

export interface CourseCard {
  id: string
  title: string
  description: string
  image: string
  completionPercentage: number
}

export type CourseInStorage = Pick<
  CourseCard,
  'id' | 'completionPercentage'
> & {
  activeLessonId: string
  duration: Duration
  attempts: number
}
