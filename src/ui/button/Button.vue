<template>
  <button class="button" :type="type" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
      validator: (value: string) =>
        ['button', 'submit', 'reset'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(event: Event) {
      if (this.disabled) {
        event.preventDefault()
        return
      }

      this.$emit('click', event)
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

.button {
  @include flex-center;
  height: var(--field-height);
  width: fit-content;

  background: var(--grey-100);
  color: var(--white);
  padding: 0 2rem;
  border-radius: var(--border-radius);
  transition:
    background var(--transition),
    scale var(--transition);

  &:hover {
    background: var(--grey-50);
  }

  &:not(:disabled):active {
    scale: 0.95;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
