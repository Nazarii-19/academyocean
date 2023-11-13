export interface CourseCard {
  id: string
  title: string
  description: string
  image: string
  completionPercentage: number
}

export type CourseInStorage = Pick<CourseCard, 'id' | 'completionPercentage'>
