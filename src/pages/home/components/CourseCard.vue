<template>
  <Card as="RouterLink" :to="link" class="img-hover">
    <img :src="image" :alt="title" class="ibg brightness-50" />

    <div class="relative z-one flex flex-col h-full">
      <h4 class="h4 font-bold text-white">{{ title }}</h4>
      <p class="mt-2 text-grey-700 line-clamp-2 flex-1">{{ description }}</p>
      <div class="flex items-center justify-between mt-4">
        <Button>Перейти</Button>
        <ProgressBar show-label :completion-percentage="completionPercentage" />
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouterEnum from '~/enums/RouterEnum.ts'

export default defineComponent({
  name: 'CourseCard',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    completionPercentage: {
      type: Number,
      required: true
    }
  },
  computed: {
    link() {
      return `${RouterEnum.Course}/${this.id}`
    }
  }
})
</script>
