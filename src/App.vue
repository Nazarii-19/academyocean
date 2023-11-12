<template>
  <main class="flex flex-col min-h-screen">
    <Header />

    <RouterView />

    <Footer />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import { Header } from '~/modules/header'
import { Footer } from '~/modules/footer'
import adaptiveHelper from '~/helpers/adaptiveHelper'
import { UserKeyInStorage } from '~/modules/user'
import { getFromStorage } from '~/helpers/storageHelper'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    adaptiveHelper(this.SET_MOBILE)

    const user = getFromStorage(UserKeyInStorage)
    if (user) this.SET_USER(user)
  },
  methods: {
    ...mapMutations('adaptive', ['SET_MOBILE']),
    ...mapMutations('user', ['SET_USER'])
  }
})
</script>
