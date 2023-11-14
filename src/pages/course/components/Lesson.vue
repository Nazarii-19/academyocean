<template>
  <div class="p-4 flex flex-col">
    <div class="flex-1">
      <div v-html="xssDeffHelper(getCurrentLesson.content)" />
    </div>

    <div class="mt-4 flex justify-end">
      <Button @click="onToNextLesson">
        {{ nextLesson ? 'Наступний урок' : 'Завершити' }}
        <Icon name="ArrowInCircle" size="14" />
      </Button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import RouterEnum from '~/enums/RouterEnum'
import { xssDeffHelper } from '~/helpers/xssDeffHelper'

export default defineComponent({
  name: 'Lesson',
  computed: {
    ...mapGetters('course', ['getCourse']),
    getCurrentLesson() {
      return this.getCourse.lessons.find(
        lesson => lesson.id === this.getCourse.activeLessonId
      )
    },
    nextLesson() {
      const currentLessonIndex = this.getCourse.lessons.findIndex(
        lesson => lesson.id === this.getCourse.activeLessonId
      )
      return this.getCourse.lessons[currentLessonIndex + 1]
    }
  },
  methods: {
    xssDeffHelper,
    ...mapActions('course', ['saveCompletionPercentage', 'saveDuration']),
    ...mapMutations('course', [
      'SET_ACTIVE_LESSON_ID',
      'SET_IS_COMPLETED_LESSON'
    ]),
    onToNextLesson() {
      const nextLesson = this.nextLesson

      this.SET_IS_COMPLETED_LESSON(this.getCourse.activeLessonId)

      if (nextLesson) {
        this.SET_ACTIVE_LESSON_ID(nextLesson.id)
        this.saveCompletionPercentage()
        this.saveDuration()
      } else {
        this.saveCompletionPercentage()
        this.saveDuration()
        location.href = RouterEnum.Home
      }
    }
  }
})
</script>

<style scoped lang="scss"></style>
