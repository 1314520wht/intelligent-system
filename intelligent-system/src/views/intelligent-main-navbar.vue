<template>
    <!-- 首页头部 -->
  <div class="index_headerMain clear">
    <!-- Logo -->
    <div class="platform_Logo">
      <a href="javascript:void(0);">
        <div class="logo_imgMain">甘肃省公共资源交易智能见证系统</div>
        <!-- <div class="unit_names">{{ $store.state.user.legalName }}</div> -->
      </a>
    </div>
    <!-- 头部导航 -->
    <div class="head_navs">
      <ul>
        <!-- <li
          v-show="item.isShow === '1'"
          @click="showSlideBarList(item, index)"
          v-for="(item, index) in this.$store.state.etsMenuList"
          :key="index"
          :class="{
            active: menuActiveId === item.id || (isFrist == '1' && index == 0),
          }"
        >
          <a href="javascript:void(0);">{{ item.name }}</a>
        </li> -->
        <li
          v-show="item.isShow === '1'"
          @click="showSlideBarList(item, index)"
          v-for="(item, index) in navTableList"
          :key="index"
          :class="{
            active: menuActiveId === item.id || (isFrist == '1' && index == 0),
          }"
        >
          <a href="javascript:void(0);">{{ item.name }}</a>
        </li>
      </ul>
    </div>
    <!-- 帮助及用户操作 -->
    <div class="seach_help_remind">
      <ul>
        <li class="helpLi">
          <router-link :to="'404'">
            <img src="@/intelligent-ui/img/help_icon.png" />
            <span>帮助</span>
          </router-link>
        </li>
      </ul>
      <!-- 当前角色 -->
      <!-- <div
        class="principal_backstageLink"
        style="height: 60px; line-height: 60px"
        v-if="
          $store.state.user.roleCode == '01' ||
          $store.state.user.roleCode == '02' ||
          $store.state.user.roleCode == '03'
        "
      >
        <a href="javascript:void(0);">
          当前角色：<span>{{ this.$store.state.roleName }}</span></a
        >
      </div> -->
      <div class="user_Opeartion" style="height: 60px; line-height: 60px">
        <el-dropdown placement="bottom" :show-timeout="0">
          <span class="el-dropdown-link">
            <img src="@/intelligent-ui/img/user_img.png" />
            <!-- <span>{{ $store.state.user.name }}</span> -->
             <span>用户名</span>
            <el-icon class="el-icon--right" style="position:absolute;top:2px">
              <el-icon class="el-icon-arrow-down el-icon--right"><arrow-down /></el-icon>
            </el-icon>
          </span>
          <template  #dropdown>
            <el-dropdown-menu >
                <!-- <el-dropdown-item @click="logoutHandle()">{{
                $t("logout")
                }}</el-dropdown-item> -->
                <el-dropdown-item @click="logoutHandle()">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { ArrowDown } from '@element-plus/icons'
export default {
  name: 'app',
  setup () {
    const state = reactive({
      isFrist: '1',
      menuActiveId: '', // 招标平台下 首页的菜单id，默认加载首页
      updatePasswordVisible: false,
      messageTip: false,
      messageTotal: sessionStorage.getItem('messageTotal'),
      timer: '',
      navTableList: [
        { name: '首页', id: '0', isShow: '1' },
        { name: '见证数据', id: '1', isShow: '1' },
        { name: '我的流程', id: '2', isShow: '1' },
        { name: '系统设置', id: '3', isShow: '1' },
        { name: '统计分析', id: '4', isShow: '1' }
      ]
    })
    const showSlideBarList = (firstMenu, index) => {
      if (index === 0) {
        state.isFrist = '1'
      } else {
        state.isFrist = '0'
      }
      sessionStorage.setItem('secondMenu', '{}')
      sessionStorage.removeItem('TENDER_PROJECT_NAME')
      state.menuActiveId = firstMenu.id
      this.$emit('slideBarList', firstMenu)
    }
    const logoutHandle = () => {
      console.log('点了')
    }
    const methods = {
      showSlideBarList,
      logoutHandle
    }
    return {
      ...toRefs(state),
      ...methods
    }
  },
  components: {
    ArrowDown
  }
}
</script>
<style lang="less" scoped>
.helpLi {
    span {
        color: rgba(255, 255, 255, 0.8);
        vertical-align: middle;
        margin-left: 5px;
    }
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
.user_Opeartion {
  .el-dropdown {
    vertical-align: middle;
  }
}
</style>
