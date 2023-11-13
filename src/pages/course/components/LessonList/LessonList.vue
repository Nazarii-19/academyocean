<template>
  <div>
    <LessonListHead />

    <ul class="lesson-list">
      <li
        v-for="lesson in getCourse.lessons"
        :key="lesson.id"
        role="option"
        class="lesson-list__item"
        :class="{
          'lesson-list__item--active': lesson.id === getCourse.activeLessonId,
          'lesson-list__item--completed': lesson.isCompleted
        }"
        @click="SET_ACTIVE_LESSON_ID(lesson.id)"
      >
        <span class="min-w-[14px]">
          <Icon
            :name="lesson.isCompleted ? 'Check' : 'ArrowInCircle'"
            size="14"
          />
        </span>
        {{ lesson.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import LessonListHead from './LessonListHead.vue'

export default defineComponent({
  name: 'LessonList',
  components: { LessonListHead },
  computed: {
    ...mapGetters('course', ['getCourse'])
  },
  methods: {
    ...mapMutations('course', ['SET_ACTIVE_LESSON_ID'])
  }
})
</script>

<style scoped lang="scss">
.lesson-list {
  background: var(--grey-800);

  &__item {
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition:
      background var(--transition),
      color var(--transition);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      background: var(--white);
    }

    &--completed {
      background: var(--white);
      color: var(--primary);
    }

    &--active {
      background: var(--white);
      color: var(--blue);
    }
  }
}
</style>
