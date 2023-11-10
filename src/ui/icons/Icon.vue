<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <component :is="name" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Icons } from '~/types/IconType.ts'

export default defineComponent({
  name: 'Icon',
  components: {
    Logo: () => import('~/ui/icons/IconLogo.vue')
  },
  props: {
    name: {
      type: String as PropType<Icons>,
      required: true,
      default: ''
    },
    size: {
      type: [Number, String],
      default: 18
    }
  }
})
</script>

<style scoped lang="scss"></style>
