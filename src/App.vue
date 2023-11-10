<template>
  <main class="flex flex-col min-h-screen">
    <Header />

    <div class="flex-1">
      <router-view />
    </div>

    <Footer />
  </main>
</template>

<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
import Header from '~/modules/header/components/Header.vue'
import Footer from '~/modules/footer/components/Footer.vue'
import adaptiveHelper from '~/helpers/adaptiveHelper'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    adaptiveHelper(this.SET_MOBILE)
  },
  methods: {
    ...mapMutations('adaptive', ['SET_MOBILE'])
  }
})
</script>
