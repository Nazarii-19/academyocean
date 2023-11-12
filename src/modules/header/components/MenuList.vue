<template>
  <nav class="nav" :class="isOpen && 'nav__open'">
    <RouterLink
      v-for="link in menuList"
      :key="link.link"
      :to="link.link"
      class="nav__link flex items-center"
    >
      <span @click="$emit('onToggleOpen')">
        {{ link.title }}
      </span>
    </RouterLink>

    <HeaderUser />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HeaderUser } from '~/modules/user'
import menuList from '../consts/menuList'

export default defineComponent({
  name: 'MenuList',
  components: { HeaderUser },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data() {
    return {
      menuList
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: var(--transition) cubic-bezier(0.4, 0, 0.6, 1);

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  background: var(--white-opacity);

  &__open {
    height: 100vh;
    background: var(--grey-50);
  }

  &__link {
    font-size: 1.75rem;
    color: var(--white);

    &:first-child {
      margin-top: 5rem;
    }
  }
}

@include tablet {
  .nav {
    position: static;
    flex-direction: row;
    height: 100%;

    background: transparent;

    &__link {
      height: 100%;
      font-size: 1rem;
      color: var(--grey-300);
      transition: color var(--transition);

      &:hover {
        color: var(--black);
      }

      &:first-child {
        margin-top: 0;
      }
    }
  }
}
</style>
