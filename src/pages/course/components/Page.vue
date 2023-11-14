<template>
  <div class="page">
    <div class="container">
      <Card v-if="getCourse" :padding="false">
        <div class="course__card">
          <LessonList />
          <Lesson />
        </div>
      </Card>
      <div v-else class="flex items-center flex-col">
        <h4 class="h4 font-bold">Курс не знайдено</h4>
        <Button class="mt-4">
          <RouterLink :to="RouterEnum.Home">На головну</RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'
import RouterEnum from '~/enums/RouterEnum'
import courseStore from '../store/courseStore'
import LessonList from './LessonList/LessonList.vue'
import Lesson from './Lesson.vue'

export default defineComponent({
  name: 'Course',
  components: { LessonList, Lesson },
  data() {
    return { RouterEnum }
  },
  computed: {
    ...mapGetters('course', ['getCourse'])
  },
  created() {
    this.$store.registerModule('course', courseStore)
  },
  mounted() {
    const { id } = this.$route.params
    this.initCourse(id)
  },
  destroyed() {
    this.$store.unregisterModule('course')
  },
  methods: {
    ...mapActions('course', ['initCourse'])
  }
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

@include tablet {
  .course__card {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 4fr);
  }
}
</style>
