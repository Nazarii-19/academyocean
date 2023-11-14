<template>
  <div class="table__head">
    <p>Назва</p>
    <p>Час проходження</p>
    <p>Кількість спроб</p>
    <p>Дата останньої спроби</p>
    <p>Пройдено, %</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableHead'
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

.table__head {
  display: none;
}

@include tablet {
  .table__head {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    background: var(--white);
    border-bottom: 1px solid var(--grey-500);
    border-radius: var(--border-radius) var(--border-radius) 0 0;

    p {
      padding: 0.5rem 0;
      text-align: center;
      font-weight: 700;
    }
  }
}
</style>
