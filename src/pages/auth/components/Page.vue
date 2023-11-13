<template>
  <section
    class="page page__gradient container flex justify-center items-center"
  >
    <Card max-width="30rem">
      <h1 class="h3 font-bold text-center">Авторизація</h1>
      <LoginForm />
    </Card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from './LoginForm.vue'

export default defineComponent({
  name: 'Auth',
  components: { LoginForm }
})
</script>
