<template>
  <div class="card" :style="{ width: `min(100%, ${maxWidth})` }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  props: {
    maxWidth: {
      type: String,
      default: '500px'
    }
  }
})
</script>

<style scoped lang="scss">
.card {
  background: var(--white);
  border-radius: var(--border-radius-big);
  padding: 1rem;
}
</style>
