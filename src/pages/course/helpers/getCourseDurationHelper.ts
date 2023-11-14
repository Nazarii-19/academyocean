import { Duration } from '~/pages/course'

export const getCourseDuration = (duration: Duration): Duration => {
  const newDuration = { ...duration }

  const lastTimeMs = new Date(newDuration.lastTime).getTime()
  const newTimeMs = new Date().getTime()
  const deltaSeconds = new Date(newTimeMs - lastTimeMs).getTime() / 1000

  newDuration.lastTime = new Date().toISOString()
  newDuration.totalS += deltaSeconds

  return newDuration
}
