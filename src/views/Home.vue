<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <CatCounter />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import CatCounter from '@/components/CatCounter'

@Component({
  components: {
    HelloWorld,
    CatCounter,
  },
})
export default class Home extends Vue {}
</script>
