<template>
  <div
    role="button"
    class="w-12 h-12 flex justify-center items-center relative z-medium md:hidden transition"
    :class="isOpen ? 'text-white' : 'text-black'"
    @click="$emit('onToggleOpen')"
  >
    <svg width="18" height="18" viewBox="0 0 18 18">
      <polyline
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="2 12, 16 12"
      >
        <animate
          ref="bottomOpen"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
        />
        <animate
          ref="bottomClose"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
        />
      </polyline>
      <polyline
        fill="none"
        stroke="currentColor"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        points="2 5, 16 5"
      >
        <animate
          ref="topOpen"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
        />
        <animate
          ref="topClose"
          attributeName="points"
          keyTimes="0;0.5;1"
          dur="0.24s"
          begin="indefinite"
          fill="freeze"
          calcMode="spline"
          keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
          values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
        />
      </polyline>
    </svg>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Burger',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  watch: {
    isOpen() {
      this.burgerAnimation()
    }
  },
  methods: {
    burgerAnimation() {
      if (this.isOpen) {
        this.$refs.topOpen?.beginElement()
        this.$refs.bottomOpen?.beginElement()
      } else {
        this.$refs.bottomClose?.beginElement()
        this.$refs.topClose?.beginElement()
      }
    }
  }
})
</script>
