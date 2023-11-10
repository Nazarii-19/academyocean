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
import Header from '~/modules/header/components/Header.vue'
import Footer from '~/modules/footer/components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  }
})
</script>
