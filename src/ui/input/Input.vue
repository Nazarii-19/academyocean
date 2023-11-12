<template>
  <input
    :value="value"
    :type="type"
    :placeholder="placeholder"
    class="input"
    :class="{ input__error: error }"
    :disabled="disabled"
    @input="onInput"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String as PropType<'text' | 'password'>,
      default: 'text',
      validator: (value: string) => ['text', 'password'].includes(value)
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onInput(event: Event) {
      if (this.disabled) {
        event.preventDefault()
        return
      }

      this.$emit('input', (event.target as HTMLInputElement).value)
    }
  }
})
</script>

<style scoped lang="scss">
.input {
  height: var(--field-height);
  background: var(--grey-800);
  padding: 0 0.5rem;
  border-radius: var(--border-radius);
  border: 1px solid transparent;
  transition: var(--transition);

  &:focus {
    border: 1px solid var(--grey-600);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &__error {
    border: 1px solid var(--red);

    &:focus {
      border: 1px solid var(--red);
    }
  }
}
</style>
