<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineComponent({
  name: 'App',
  mounted() {
    AOS.init()
  }
})
</script>
