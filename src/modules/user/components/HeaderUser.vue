<template>
  <div v-if="getUser" class="user" role="button" @click="logout">
    <img :src="getUser.avatar" alt="avatar" />
    <span>{{ getUser.name.first }} {{ getUser.name.last }} (Вихід)</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'HeaderUser',
  computed: {
    ...mapGetters('user', ['getUser'])
  },
  methods: {
    ...mapActions('user', ['logout'])
  }
})
</script>

<style scoped lang="scss">
@import '~/styles/mixins';

.user {
  padding: 0 1rem 0 0;
  border-radius: var(--border-radius-infinity);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  span {
    margin-left: 0.5rem;
    font-size: 1.75rem;
    color: var(--white);
  }
}

@include tablet {
  .user {
    background: rgba(1, 119, 255, 0.2);
    padding: 0.25rem 1rem 0.25rem 0;
    cursor: pointer;

    img {
      width: 2rem;
      height: 2rem;
    }

    span {
      font-size: 1rem;
      color: var(--grey-300);
    }
  }
}
</style>
