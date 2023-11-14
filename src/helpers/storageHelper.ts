export const getFromStorage = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export const setToStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value))

export const removeFromStorage = (key: string) => localStorage.removeItem(key)
