<template>
  <div class="head">
    <h6 class="h6 font-bold">
      {{ getCourse.title }}
    </h6>
    <ProgressBar
      class="mt-2"
      :completion-percentage="getCourse.completionPercentage"
      show-label
      dark-label
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'LessonListHead',
  computed: {
    ...mapGetters('course', ['getCourse'])
  }
})
</script>

<style scoped lang="scss">
.head {
  border-bottom: 1px solid var(--grey-500);
  padding: 1rem 1rem 0.5rem 1rem;
  background: var(--white);
}
</style>
