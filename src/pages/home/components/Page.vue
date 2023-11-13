<template>
  <div class="page page__gradient container">
    <h1 class="h1 text-center font-bold">Оберіть курс</h1>

    <div
      v-if="getCourseCardList.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
    >
      <CourseCard
        v-for="courseCard in getCourseCardList"
        :id="courseCard.id"
        :key="courseCard.id"
        :title="courseCard.title"
        :description="courseCard.description"
        :image="courseCard.image"
        :completion-percentage="courseCard.completionPercentage"
      />
    </div>
    <p v-else class="text-center mt-8">Курсів не знайдено</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import coursesStore from '../store/coursesStore'
import CourseCard from './CourseCard.vue'

export default defineComponent({
  name: 'Home',
  components: { CourseCard },
  computed: {
    ...mapGetters('courses', ['getCourseCardList'])
  },
  created() {
    this.$store.registerModule('courses', coursesStore)
  },
  mounted() {
    this.initCourseCardList()
  },
  destroyed() {
    this.$store.unregisterModule('courses')
  },
  methods: {
    ...mapActions('courses', ['initCourseCardList'])
  }
})
</script>
