<template>
  <div class="table__row">
    <div class="table__row-item">
      <p class="font-bold md:hidden">Назва</p>
      <p>{{ title }}</p>
    </div>
    <div class="table__row-item">
      <p class="font-bold md:hidden">Час проходження</p>
      <p>{{ getDuration }}</p>
    </div>
    <div class="table__row-item">
      <p class="font-bold md:hidden">Кількість спроб</p>
      <p>{{ attempts }}</p>
    </div>
    <div class="table__row-item">
      <p class="font-bold md:hidden">Дата останньої спроби</p>
      <p>{{ getLastAttemptDate }}</p>
    </div>
    <div class="table__row-item">
      <p class="font-bold md:hidden">Пройдено, %</p>
      <p>{{ completionPercentage }}%</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getDate } from '~/helpers/dateHelper.ts'

export default defineComponent({
  name: 'TableRow',
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    duration: {
      type: Object,
      required: true,
      default: () => ({
        lastTime: '',
        totalS: 0
      })
    },
    attempts: {
      type: Number,
      required: true,
      default: 0
    },
    completionPercentage: {
      type: Number,
      required: true,
      default: 0
    }
  },
  computed: {
    getLastAttemptDate() {
      return this.duration.lastTime ? getDate(this.duration.lastTime) : '-'
    },
    getDuration() {
      return this.duration.totalS
        ? new Date(this.duration.totalS * 1000).toISOString().substring(11, 19)
        : '-'
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

.table__row {
  border-bottom: 1px solid var(--grey-700);
  padding: 0.5rem;
  text-align: center;
  background: var(--white);
  border-radius: var(--border-radius);
  margin-top: 0.75rem;

  &-item {
    display: flex;
    justify-content: space-between;
  }
}

@include tablet {
  .table__row {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 0;
    border-radius: 0;

    &:last-child {
      border-radius: 0 0 var(--border-radius) var(--border-radius);
    }

    &-item {
      justify-content: center;
    }
  }
}
</style>
