<template>
  <div class="mt-8">
    <TableHead />
    <TableRow
      v-for="course in coursesList"
      :key="course.id"
      :title="course.title"
      :duration="course.duration"
      :attempts="course.attempts"
      :completion-percentage="course.completionPercentage"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { CourseInfo } from '../types/CourseInfo.ts'
import { getCoursesList } from '../helpers/coursesListHelper.ts'
import TableHead from './TableHead.vue'
import TableRow from './TableRow.vue'

export default defineComponent({
  name: 'Table',
  components: { TableHead, TableRow },
  data(): { coursesList: CourseInfo[] } {
    return { coursesList: [] }
  },
  mounted() {
    this.coursesList = getCoursesList()
  }
})
</script>
