<template>
  <div class="table__row">
    <p>{{ title }}</p>
    <p>{{ getDuration }}</p>
    <p>{{ attempts }}</p>
    <p>{{ getLastAttemptDate }}</p>
    <p>{{ completionPercentage }}%</p>
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
.table__row {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  border-bottom: 1px solid var(--grey-700);
  padding: 0.5rem 0;
  text-align: center;
  background: var(--white);

  &:last-child {
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
}
</style>
