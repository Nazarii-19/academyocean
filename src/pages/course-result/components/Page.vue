<template>
  <div class="page page__gradient container">
    <h1 class="h1 text-center font-bold">Результати</h1>

    <Table />

    <RouterLink :to="RouterEnum.Home" class="mt-8 inline-block">
      <Button background="secondary">Назад</Button>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Table from './Table.vue'
import RouterEnum from '~/enums/RouterEnum.ts'

export default defineComponent({
  name: 'CourseResult',
  components: { Table },
  data() {
    return { RouterEnum }
  }
})
</script>
