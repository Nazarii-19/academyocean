export const getDate = (date: Date | string): string => {
  if (!date) return ''
  return Intl.DateTimeFormat('uk').format(new Date(date))
}
