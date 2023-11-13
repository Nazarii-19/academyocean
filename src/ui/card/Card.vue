<template>
  <component
    :is="as"
    v-bind="$attrs"
    class="card"
    :style="{ width: `min(100%, ${maxWidth})` }"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    as: {
      type: String as PropType<'div' | 'RouterLink'>,
      default: 'div',
      validator: (value: string) => ['div', 'RouterLink'].includes(value)
    },
    maxWidth: {
      type: String,
      default: '100%'
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: block;
  overflow: hidden;

  background: var(--white);
  border-radius: var(--border-radius-big);
  padding: 1rem;
}
</style>
