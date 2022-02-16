<template>
  <!-- 右-内容框 -->
  <div class="right_contents">
    <template>
      <router-view v-if="isRouterAlive" name="see-all-data" />
    </template>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Main',
  setup () {
    const state = reactive({
      isRouterAlive: true
    })
    return {
      ...toRefs(state)
    }
  },
  components: {
  }
}
</script>
