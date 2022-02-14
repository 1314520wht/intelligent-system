<template>
    <div class="main1">
        累死了试了试
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Main1',
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
