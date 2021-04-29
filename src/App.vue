<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      {{ catLogic.catGreetings }}
    </div>
    <button @click="catLogic.staticMethod()">Call static from instance</button>
    <button @click="catLogic.nonStaticMethod()">
      Call non static from instance
    </button>
    <button @click="staticCatLogic.staticMethod()">
      Call static from class
    </button>
    <button @click="staticCatLogic.nonStaticMethod()">
      Call non static from class
    </button>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CatLogic, { CatLogic as StaticCatLogic } from '@/logic/CatLogic'

@Component
export default class App extends Vue {
  catLogic = CatLogic
  staticCatLogic = StaticCatLogic

  mounted() {
    console.log(this.catLogic)
    console.log(this.staticCatLogic)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
