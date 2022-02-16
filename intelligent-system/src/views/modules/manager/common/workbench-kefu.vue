<template>
  <div class="contactCustomer">
    <div class="kefuBox" @mouseover="kefuShow" @mouseleave="kefuHide">
      <p class="callKefu">联系客服</p>
      <p class="kefuImg"></p>
    </div>
    <ul class="kefuSelect" v-show="kefuState">
      <li class="clear">
        <div class="leftImg"></div>
        <div class="rightCot">
          <!-- <p>{{ $getDictLabel("system_kefu_data", "tel_title") }}</p> -->
          <p>13689357294</p>
          <p v-for="(item, index) in telData" :key="index">{{ item }}</p>
        </div>
      </li>
      <li class="clear" style="padding-bottom: 25px">
        <div class="leftImg2"></div>
        <div class="rightCot">
          <p style="padding-bottom: 9px">
            <!-- {{ $getDictLabel("system_kefu_data", "qq_title") }} -->
            qqq
          </p>
          <p>
            <img :src="wxImg" style="width: 70px; height: 70px" />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
      kefuState: false,
      telData: [],
      wxImg: ''
    })
    const kefuShow = () => {
      state.kefuState = true
    }
    const kefuHide = () => {
      state.kefuState = false
    }
    const methods = {
      kefuShow,
      kefuHide
    }
    // this.$nextTick(() => {
    //   if (getDictLabel('system_kefu_data', 'tel_data')) {
    //     this.telData = getDictLabel('system_kefu_data', 'tel_data').split(",")
    //   }
    //   this.wxImg = getDictLabel('system_kefu_data', 'qq_data')
    // })
    return {
      ...toRefs(state),
      ...methods
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
</style>
