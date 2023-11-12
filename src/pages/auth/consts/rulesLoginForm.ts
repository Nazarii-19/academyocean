import { Rules } from '~/helpers/validationHelper.ts'

export const rules: Rules = {
  email: {
    required: true,
    email: true
  },
  password: {
    required: true,
    minLength: 6,
    maxLength: 12,
    onlyLatinAndDigits: true
  }
}
