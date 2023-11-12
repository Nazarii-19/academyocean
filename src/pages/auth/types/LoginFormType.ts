export interface LoginForm<T = string> {
  email: T
  password: T
}

export interface LoginFormData {
  form: LoginForm
  errors: LoginForm<boolean>
}
