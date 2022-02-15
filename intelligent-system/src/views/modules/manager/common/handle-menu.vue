<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link" style="color:#fff">
        操作<el-icon class="el-icon-arrow-down el-icon--right"><arrow-down /></el-icon>
      </span>
      <template v-slot:dropdown>
        <el-dropdown-menu>
            <el-dropdown-item
            v-if="userType == '1'"
            @click="enterTenderFlow(params)"
            >进入项目流程</el-dropdown-item
            >
            <el-dropdown-item
            v-if="isRemote == '1' && showFlag"
            @click="enterCoordinateSystem(params)"
            >进入协调系统</el-dropdown-item
            >
            <el-dropdown-item
            v-for="(item, index) in menuList"
            :key="index"
            @click="enterOtherSystem(item)"
            >{{ item.bussTypeName }}</el-dropdown-item
            >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import router from '@/router'
import { ArrowDown } from '@element-plus/icons'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
      showFlag: false,
      menuList: []
    })
    // 进入项目流程
    const enterTenderFlow = (item) => {
      sessionStorage.setItem('ID', item.id)
      sessionStorage.setItem('OLDID', item.oldid)
      sessionStorage.setItem('TENDER_PROJECT_OLDID', item.tenderProjectOldid)
      sessionStorage.setItem('PLATFORM_CODE', item.platformCode)
      sessionStorage.setItem('PUB_SERVICE_PLAT_CODE', item.pubServicePlatCode)
      sessionStorage.setItem('IS_REMOTE', item.isRemote)
      router.push({
        name: 'trade-supervisor-project-project-detail'
      })
    }
    // 进入投标流程
    const enterBidderFlow = params => {
      sessionStorage.setItem('parentProjectClassifyCode', params.parentProjectClassifyCode)
      sessionStorage.setItem('bidderTenderMode', params.tenderMode)
      sessionStorage.setItem('bidderQualType', params.qualType)
      sessionStorage.setItem('bidderProjectCode', params.tenderProjectCode)
      sessionStorage.setItem('bidderProjectName', params.tenderProjectName)
      sessionStorage.setItem('pubServicePlatCode', params.pubServicePlatCode)
      sessionStorage.setItem('bidderProjectOldid', params.tenderProjectOldid)
      // 动态路由
      this.$router.push({
        name: 'trade-bidder-flow-flow-main',
        path: 'trade/bidder/flow/flow-main'
      })
    }
    // 进入协调系统
    const enterCoordinateSystem = item => {
    //   let systemCode = this.systemCode
    //   let platformCode = this.platformCode
    //   let params = [
    //     { 'name': 'TENDER_PROJECT_ID', 'value': this.tenderProjectOldid },
    //     { 'name': 'USER_TYPE', 'value': this.userType },
    //     { 'name': 'BUSS_PARAM', 'value': item.bussParam },
    //     { 'name': 'BUSS_TYPE', 'value': item.bussType }
    //   ]
      // 如果是开标或评标环节
    //   if (item.jumpFlag == '1') {
    //     systemCode = this.bidSystemCode
    // this.$http.post("/sys/platform/sourceSystem/getPlatformCodeBySystemCode?systemCode=" + systemCode).then(({ data: res }) => {
    //   if (res.code !== 0) {
    //     return this.$message.error(res.msg)
    //   }
    //   if (res.data) {
    //     this.enterSystemPublic(params, systemCode, res.data)
    //   } else {
    //     return this.$message.error("获取平台编码失败")
    //   }
    // }).catch(() => { })
    //   }
    //   this.enterSystemPublic(params, systemCode, platformCode)
    }
    // 统一业务办理入口
    const enterSystemPublic = (params, systemCode, platformCode) => {
    //   params.push({ 'name': 'data', 'value': this.$store.state.user.name })
    //   let interfaceCode = 'business_handle_enter'
    //   this.$http.post("/sys/platform/pplatformoutinterface/getUrlBySystemCodeAndDictTypeCode?systemCode=" + systemCode + "&interfaceCode=" + interfaceCode).then(({ data: res }) => {
    //     if (res.code !== 0) {
    //       return this.$message.error(res.msg)
    //     }
    //     if (res.data) {
    //       ssoPostGoto(res.data, platformCode, params)
    //     } else {
    //       return this.$message.error("没有配置统一业务办理入口地址")
    //     }
    //   }).catch(() => { })
    }
    const methods = {
      enterTenderFlow,
      enterBidderFlow,
      enterCoordinateSystem,
      enterSystemPublic
    }
    return {
      ...toRefs(state),
      ...methods
    }
  },
  props: {
    params: Object,
    platformCode: String,
    userType: String,
    systemCode: String,
    bidSystemCode: String,
    tenderProjectOldid: String,
    tenderFlowCaseId: {
      type: String,
      default: ''
    },
    module: {
      type: String,
      default: ''
    },
    isRemote: {
      type: String,
      default: '0'
    }
  },
  components: {
    ArrowDown
  }
}
</script>
<style lang="less" scoped>
.el-dropdown {
  line-height: 24px;
}
</style>
