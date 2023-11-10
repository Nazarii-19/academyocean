<template>
  <header class="header">
    <div class="md:container flex justify-between">
      <RouterLink
        :to="RouterEnum.Home"
        class="h-12 pl-3 md:pl-0 flex items-center justify-center"
      >
        <IconLogoWithText :proportions="0.7" />
      </RouterLink>

      <Menu />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouterEnum from '~/enums/RouterEnum.ts'
import Menu from './Menu.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Menu
  },
  data() {
    return {
      RouterEnum
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  z-index: var(--z-index-header);
  background: var(--white-opacity);
  border-bottom: 1px solid var(--grey-700);
  @include blur;
}
</style>
