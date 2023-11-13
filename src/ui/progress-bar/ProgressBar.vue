<template>
  <div class="completion">
    <div class="completion-percentage">
      <span :style="{ width: completionPercentage + '%' }" />
    </div>
    <span
      v-if="showLabel"
      class="span"
      :class="[darkLabel ? 'text-grey-100' : 'text-grey-700']"
    >
      Пройдено на {{ completionPercentage }}%
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProgressBar',
  props: {
    showLabel: {
      type: Boolean,
      default: false
    },
    darkLabel: {
      type: Boolean,
      default: false
    },
    completionPercentage: {
      type: Number,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.completion-percentage {
  height: 0.375rem;
  min-width: 6rem;
  border-radius: var(--border-radius-infinity);
  background: var(--grey-600);

  span {
    display: block;
    height: 100%;
    border-radius: var(--border-radius-infinity);
    background: var(--primary);
  }
}
</style>
