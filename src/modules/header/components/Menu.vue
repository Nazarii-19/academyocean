<template>
  <div>
    <MenuList :is-open="isOpen" @onToggleOpen="onToggleOpen" />

    <Burger v-if="getIsMobile" :is-open="isOpen" @onToggleOpen="onToggleOpen" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import MenuList from './MenuList.vue'
import Burger from './Burger.vue'

export default defineComponent({
  name: 'Menu',
  components: { MenuList, Burger },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters('adaptive', ['getIsMobile'])
  },
  watch: {
    getIsMobile(newValue: boolean) {
      if (!newValue) this.isOpen = false
    }
  },
  methods: {
    onToggleOpen() {
      this.isOpen = !this.isOpen
    }
  }
})
</script>
