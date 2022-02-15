<template>
   <div class="head_informations clear">
    <!-- 用户信息 -->
    <intelligent-homepage-head></intelligent-homepage-head>
    <!-- 通知及交易概况 -->
    <div class="inform_generalize">
      <div class="informFrame">Hi，欢迎使用智能见证系统</div>
      <!-- 统计项目 -->
      <div class="generalizeFrame">
        <div class="title_dateSelect">
          <a>项目统计</a>
          <ul class="ulLi">
            <li
              v-for="(item, index) in tabLi"
              :key="index"
              :class="index == tabInd ? 'activeTab' : ''"
              @click="changeTab(item, index)"
            >
              {{ item.name }}
            </li>
          </ul>
           <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="dateChange"
            >
            </el-date-picker>
          </div>
          <!--<div class="selectOption">
            <label>服务平台：</label>
            <el-select
              v-model="dataForm.platformCode"
              placeholder="请选择"
              @change="getStatistics()"
            >
              <el-option value="">全部</el-option>
              <el-option
                v-for="item in platformList"
                :key="item.id"
                :label="item.platformName"
                :value="item.platformCode"
              >
              </el-option>
            </el-select>
          </div> -->
        </div>
        <div class="generalizeDiv">
          <ul class="clear">
            <li>
              <div class="optionTitle">见证项目总数（个）</div>
              <div class="numbers">3333</div>
            </li>
            <li>
              <div class="optionTitle">待开标项目（个）</div>
              <!-- <div class="numbers">{{ statistics.complain }}</div> -->
              <div class="numbers">34444</div>
            </li>
            <li>
              <div class="optionTitle">待评标项目（个）</div>
              <!-- <div class="numbers">{{ statistics.abnormal }}</div> -->
              <div class="numbers">7777</div>
            </li>
            <li>
              <div class="optionTitle abnormal">见证条目数（个）</div>
              <!-- <div class="numbers">{{ statistics.abnormal }}</div> -->
              <div class="numbers">7777</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 联系客服 -->
    <!-- <workbench-kefu /> -->
  </div>
</template>
<script>
import { reactive, toRefs, ref } from 'vue'
import IntelligentHomepageHead from '@/components/intelligent-homepage-head'
// import { ArrowDown } from 'element-plus'
export default {
  name: 'app',
  setup () {
    const state = reactive({
      isFrist: '1',
      tabInd: '0',
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
      ],
      tabLi: [
        { name: '本月', tabInd: '0' },
        { name: '本年度', tabInd: '1' },
        { name: '全部', tabInd: '2' }
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
    const value1 = ref('')
    const logoutHandle = () => {
      console.log('点了')
    }
    const changeTab = (item, index) => {
      state.tabInd = index
    }
    const methods = {
      showSlideBarList,
      logoutHandle,
      value1,
      changeTab
    }
    return {
      ...toRefs(state),
      ...methods
    }
  },
  components: {
    IntelligentHomepageHead
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
.informFrame {
  font-size: 1.5rem;
  color: #fff;
  background: url("~@/intelligent-ui/img/file_flowHead.png")no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  border-radius: 2px;
  letter-spacing: 3px;
  text-align: left;
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
