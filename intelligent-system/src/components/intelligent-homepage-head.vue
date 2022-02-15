<template>
  <div class="l_userInfo">
    <div class="portraitBox clear">
      <img class="ImgDiv" src="@/intelligent-ui/img/user_image.png" />
      <!-- <div class="userNames">{{ this.$store.state.user.realName }}</div> -->
      <div class="userNames">用户类别</div>
      <div>
        <!-- 切换角色 -->
        <!-- <button
          @click="changePeople"
          v-show="this.$store.state.user.legalRole.indexOf(',') != -1"
        >
          切换角色
        </button> -->
        <button
          @click="changePeople"
          v-show="true"
        >
          切换角色
        </button>
        <transition name="el-fade-in">
          <div class="togglePeople" v-show="qiehuan">
            <ul>
              <li
                v-for="item in roleNameList"
                :key="item.code"
                :class="roleCode == item.code ? 'active' : ''"
                @click="changeRole(item.code)"
              >
                {{ item.name }}
              </li>
            </ul>
            <div class="concel">
              <button @click="changePeople">取消</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- <div class="unitNames">{{ this.$store.state.user.legalName }}</div> -->
    <div class="unitNames" style="text-align:left">机构名称</div>
    <div class="infoList" style="text-align:left">
      <!-- 登录账号：<span>{{ this.$store.state.user.loginAccount }}</span> -->
      登录账号：<span>119719781111111111</span>
    </div>
    <div class="infoList" style="text-align:left">
      <!-- 最近登录： <span>{{ this.$store.state.user.loginTime }}</span> -->
      最近登录： <span>2012:03:21</span>
    </div>
    <div class="numberBtn" @click="accountBtn">
      <button type="button">主体信息维护</button>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
      qiehuan: false,
      roleNameList: [],
      roleCode: sessionStorage.getItem('roleCode')
    })
    const changePeople = () => {
      console.log('1')
    }
    const getRoleNameList = () => {
      console.log('1')
    }
    const changeRole = () => {
      console.log('1')
    }
    const accountBtn = () => {
      console.log('1')
    }
    const methods = {
      changePeople,
      getRoleNameList,
      changeRole,
      accountBtn
    }
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
