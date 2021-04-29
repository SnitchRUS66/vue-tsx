<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="catLogic.randomizeCatsCount()">🐈🐈🐈</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import CatCounter from '@/components/CatCounter'
import CatLogic from '@/logic/CatLogic'
import stash from '@/logic/stash'

@Component({
  components: {
    HelloWorld,
    CatCounter,
  },
})
export default class About extends Vue {
  catLogic = CatLogic
}
</script>
