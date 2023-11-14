<template>
  <div class="page page__gradient container">
    <h1 class="h1 text-center font-bold">Результати</h1>

    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Table from './Table.vue'

export default defineComponent({
  name: 'CourseResult',
  components: { Table }
})
</script>
