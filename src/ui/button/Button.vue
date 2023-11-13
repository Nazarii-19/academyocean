<template>
  <button :class="getClass" :type="type" :disabled="disabled" @click="onClick">
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
    },
    background: {
      type: String,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary'].includes(value)
    }
  },
  computed: {
    getClass() {
      return [
        'button',
        this.background === 'primary' && 'button__primary',
        this.background === 'secondary' && 'button__secondary'
      ]
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
  gap: 0.5rem;
  height: var(--field-height);
  width: fit-content;

  padding: 0 2rem;
  border-radius: var(--border-radius);
  transition:
    background var(--transition),
    scale var(--transition),
    filter var(--transition);
  white-space: nowrap;

  &:not(:disabled):active {
    scale: 0.95;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &__primary {
    background: var(--primary);
    color: var(--white);

    &:hover {
      background: var(--primary-hover);
    }
  }

  &__secondary {
    background: var(--grey-100);
    color: var(--white);

    &:hover {
      background: var(--grey-50);
    }
  }
}
</style>
