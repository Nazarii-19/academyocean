<template>
  <form class="mt-8 flex flex-col gap-4" @submit.prevent="onSubmit">
    <Input v-model="form.email" :error="errors.email" placeholder="Email" />
    <Input
      v-model="form.password"
      :error="errors.password"
      placeholder="Пароль"
      type="password"
    />

    <Button type="submit" class="mx-auto mt-4">Підтвердити</Button>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'
import {
  checkIsFormValid,
  setErrors,
  validation
} from '~/helpers/validationHelper.ts'
import { rules } from '../consts/rulesLoginForm.ts'

export default defineComponent({
  name: 'LoginForm',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {
        email: false,
        password: false
      }
    }
  },
  watch: {
    'form.email'(email) {
      setErrors(this.errors, validation({ email }, { email: rules.email }))
    },
    'form.password'(password) {
      setErrors(
        this.errors,
        validation({ password }, { password: rules.password })
      )
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    onSubmit() {
      const formValid = validation(this.form, rules)
      setErrors(this.errors, formValid)

      const isFormValid = checkIsFormValid(formValid)
      if (!isFormValid) return

      this.login(this.form)
    }
  }
})
</script>
