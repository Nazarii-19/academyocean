import { Duration } from '~/pages/course'

export interface CourseInfo {
  id: string
  title: string
  duration: Duration
  attempts: number
  completionPercentage: number
}
