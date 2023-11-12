import { AnyObject } from '~/types/GlobalType.ts'

export const EmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const OnlyLatinAndDigitsRegex = /^[a-zA-Z0-9]+$/

export const emailValidation = (email: string): boolean => {
  const regexResult = String(email).toLowerCase().match(EmailRegex)

  return Boolean(regexResult)
}

export interface Rules {
  [key: string]: {
    email?: boolean
    required?: boolean
    minLength?: number
    maxLength?: number
    onlyLatinAndDigits?: boolean
  }
}

export interface Errors {
  [key: string]: boolean
}

export const validation = (form: AnyObject, rules: Rules): Errors => {
  const result = Object.entries(rules).map(([key, rulesObj]) => {
    const result = {}

    const resultArr = Object.entries(rulesObj).map(([ruleKey, rule]) => {
      switch (ruleKey) {
        case 'email':
          return emailValidation(form[key])
        case 'required':
          return Boolean(form[key])
        case 'minLength':
          return form[key].length >= rule
        case 'maxLength':
          return form[key].length <= rule
        case 'onlyLatinAndDigits':
          return Boolean(String(form[key]).match(OnlyLatinAndDigitsRegex))
        default:
          return true
      }
    })

    result[key] = resultArr.filter(item => !item).length === 0
    return result
  })

  const errors = {}
  result.forEach(item =>
    Object.entries(item).forEach(([key, value]) => (errors[key] = value))
  )

  return errors
}

export const setErrors = (form: AnyObject, errors: AnyObject) =>
  Object.entries(errors).forEach(([key, value]) => (form[key] = !value))

export const checkIsFormValid = (errors: Errors): boolean =>
  Object.values(errors).every(item => Boolean(item))
