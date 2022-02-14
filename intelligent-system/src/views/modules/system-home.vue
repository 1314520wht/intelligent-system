<template>
    <div class="main1">
        <h1> 累死了试了试</h1>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
    //   isHomePage: true
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
