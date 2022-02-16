<template>
    <div class="main">
        <intelligent-main-navbar ref="intelligentMainNavbar" @slideBarList="slideBarList" />
        <!-- 主页 -->
        <div class="homePage_Main" v-if="isHomePage">
            <manager-homepage></manager-homepage>
            <!-- 问题反馈按钮及弹窗 -->
            <intelligent-main-questionBack ref="intelligentMainQuestionBack" />
        </div>
        <!-- 内容主体 -->
        <div class="platform_contentMain clear" v-else>
          <intelligent-main-sidebar ref="intelligentMainSidebar" />
          <!-- <intelligent-main-content ref="intelligentMainContent" /> -->
          <!-- 见证数据-列表管理人员 -->
          <div class="right_contents">
              <div class="agentTodo bid-opensupervise">
                <div class="r_search">
                <!-- 头部操作 -->
                <div class="headItem_operation">
                    <!-- 文本框及按钮 -->
                    <div class="formDiv clear">
                    <div class="l_inputFrame">
                        <label class="label1">
                        <span>项目名称：</span>
                        <el-input
                            v-model="dataForm.tenderProjectName"
                            placeholder="请输入项目名称或编号"
                            maxlength="50"
                        ></el-input>
                        </label>
                        <label>
                        <span>开标时间：</span>
                        <el-date-picker
                            v-model="openTime"
                            type="daterange"
                            range-separator="-"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                        ></el-date-picker>
                        </label>
                        <label>
                        <span>交易类型：</span>
                        <el-select
                            v-model="dataForm.parentProjectClassifyCode"
                            placeholder="请选择"
                        >
                            <el-option
                            v-for="item in projectClassifyList"
                            :key="item.dictValue"
                            :label="item.dictLabel"
                            :value="item.dictValue"
                            >
                            </el-option>
                        </el-select>
                        </label>
                    </div>
                    <div class="openContent" @click="changeSta">
                        <img
                        src="@/assets/img/xiala.png"
                        alt=""
                        :class="showState ? 'trans' : 'trans1'"
                        />
                        <span
                        ><i v-show="!showState"> 展开</i
                        ><i v-show="showState"> 收起</i>高级搜索</span
                        >
                    </div>
                    </div>
                </div>
                <el-collapse-transition>
                    <div class="searchContent" v-show="showState">
                        <div class="headItem_operation">
                            <div class="l_inputFrame">
                            <!-- <label class="label1">
                                <span>资格审查：</span>
                                <el-select
                                v-model="dataForm.qualType"
                                placeholder="请选择资格审查方式"
                                >
                                <el-option
                                    v-for="item in qualTypeList"
                                    :key="item.dictValue"
                                    :label="item.dictLabel"
                                    :value="item.dictValue"
                                >
                                </el-option>
                                </el-select>
                            </label> -->
                            <!-- <label>
                                <span>服务平台：</span>
                                <el-select v-model="dataForm.platformCode" placeholder="请选择">
                                <el-option
                                    v-for="item in platformList"
                                    :key="item.id"
                                    :label="item.platformName"
                                    :value="item.platformCode"
                                >
                                </el-option>
                                </el-select>
                            </label> -->
                            <label>
                                <span>招标方式：</span>
                                <el-select v-model="dataForm.tenderMode" placeholder="请选择">
                                <el-option
                                    v-for="item in tenderModeList"
                                    :key="item.dictValue"
                                    :label="item.dictLabel"
                                    :value="item.dictValue"
                                >
                                </el-option>
                                </el-select>
                            </label>
                            <label>
                                <span>招标人：</span>
                                <el-input
                                v-model="dataForm.tendererName"
                                placeholder="请输入"
                                maxlength="50"
                                ></el-input>
                            </label>
                            </div>
                            <div class="l_inputFrame" style="margin-top: 10px">
                            <!-- <label>
                                <span>招标人：</span>
                                <el-input
                                v-model="dataForm.tendererName"
                                placeholder="请输入"
                                maxlength="50"
                                ></el-input>
                            </label> -->
                            </div>
                        </div>
                    </div>
                </el-collapse-transition>
                <div class="r_btnArr">
                    <el-button @click="reset()">重置</el-button>
                    <el-button @click="getDataList()" type="primary">查询</el-button>
                </div>
                </div>

                <div class="left_portions">
                <div class="scheduleList">
                    <el-table
                    :data="dataList"
                    style="width: 100%"
                    v-loading="dataListLoading"
                    empty-text=" "
                    >
                    <el-table-column
                        prop="tenderProjectName"
                        label="项目名称"
                        width="350"
                    >
                    </el-table-column>
                    <el-table-column prop="tenderProjectCode" label="项目编号">
                    </el-table-column>
                    <!-- <el-table-column label="项目所属服务平台" width="180">
                        <template>
                        {{ getPlatformName(scope.row.platformCode) }}
                        </template>
                    </el-table-column> -->
                    <el-table-column prop="type1" label="交易类型">
                    </el-table-column>
                    <!-- <el-table-column label="招标方式">
                        <template>
                        {{ $getDictLabel("tender_type", scope.row.tenderMode) }}
                        </template>
                    </el-table-column> -->
                    <el-table-column label="招标方式" prop="tender_type">
                    </el-table-column>
                    <!-- <el-table-column prop="openStartTime" label="开标时间" width="100">
                    </el-table-column> -->
                    <!-- <el-table-column prop="isRemote" label="是否远程异地" width="120">
                        <template>
                        {{ scope.row.isRemote == 1 ? "是" : "否" }}
                        </template>
                    </el-table-column> -->
                     <el-table-column prop="isRemote" label="是否远程异地" width="120">
                    </el-table-column>
                    <!-- <el-table-column label="操作">
                        <template>
                        <handle-menu
                            :params="scope.row"
                            :tenderProjectOldid="scope.row.tenderProjectOldid"
                            :platformCode="scope.row.platformCode"
                            :userType="'1'"
                            :systemCode="scope.row.pubServicePlatCode"
                            :isRemote="scope.row.isRemote"
                        ></handle-menu>
                        </template>
                    </el-table-column> -->
                    <el-table-column label="操作">
                        <el-button type="primary" size="small">查看见证数据</el-button>
                      </el-table-column>
                    </el-table>
                </div>
                 <div
                    class="noDataContent"
                    v-if="dataList.length <= 0"
                    >
                    <img src="@/intelligent-ui/img/noData.png" alt="" />
                    <p>暂无内容</p>
                 </div>
                </div>
                <div class="footerPage">
                    <el-pagination
                        :current-page="page"
                        :page-sizes="[10, 20, 50, 100]"
                        :page-size="limit"
                        :total="total"
                        layout="total, sizes, prev, pager, next, jumper"
                        @size-change="pageSizeChangeHandle"
                        @current-change="pageCurrentChangeHandle"
                    >
                    </el-pagination>
                </div>
            </div>
          </div>
          <!-- 问题反馈按钮及弹窗 -->
          <!-- <ets-main-questionBack ref="EtsMainQuestionBack" /> -->
        </div>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import IntelligentMainNavbar from '@/views/intelligent-main-navbar'
import IntelligentMainSidebar from '@/views/intelligent-main-sidebar'
// import IntelligentMainContent from '@/views/intelligent-main-content'
import ManagerHomepage from '@/views/modules/manager/HomePage'
// import HandleMenu from '@/views/modules/manager/common/handle-menu'
export default {
  name: 'Main',
  setup () {
    const state = reactive({
      isHomePage: false,
      limit: '10',
      dataForm: {
        parentProjectClassifyCode: '',
        projectClassifyCode: '',
        tenderProjectName: '',
        tenderMode: '',
        platformCode: '',
        minDate: '',
        maxDate: '',
        tendererName: '',
        openStartTimeMin: ''
      },
      total: 1,
      // 交易平台
      platformList: [],
      // 交易类型
      // projectClassifyList: getDictDataList('project_classify'),
      // 交易方式
      // tenderModeList: getDictDataList('tender_type'),
      // 资格审查方式
      // qualTypeList: getDictDataList('qual_type'),
      showState: false,
      openTime: [],
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.dataForm.minDate = minDate // 选中的时间较小的一个
          this.dataForm.maxDate = maxDate // 选中的时间较大的一个，时间加1天，为了查询到当天的数据
        }
      },
      dataList: [
        {
          tenderProjectName: '哈sjlj杀戮空间历的看哈',
          tenderProjectCode: 'ksjjksh',
          type1: '政府采购',
          tender_type: '公开招标',
          isRemote: '是'
        },
        {
          tenderProjectName: '哈sjlj杀戮空间历的看哈',
          tenderProjectCode: 'ksjjksh',
          type1: '政府采购',
          tender_type: '公开招标',
          isRemote: '是'
        }
      ]
    })
    const changeSta = () => {
      state.showState = !state.showState
    }
    // 交易平台数据
    const getPlatformList = () => {
    //   this.$http.post('/sys/platform/platform/getAllPlatform').then(({ data: res }) => {
    //     if (res.code !== 0) {
    //       return this.$message.error(res.msg)
    //     }
    //     this.platformList = res.data
    //   }).catch(() => { })
    }
    const getPlatformName = () => {
      const name = ''
      if (this.platformList && this.platformList.length > 0) {
        this.platformList.forEach(item => {
        //   if (item.platformCode === platformCode) {
        //     name = item.platformName
        //   }
        })
      }
      return name
    }
    const methods = {
      changeSta,
      getPlatformList,
      getPlatformName
    }
    return {
      ...toRefs(state),
      ...methods
    }
  },
  components: {
    IntelligentMainNavbar,
    ManagerHomepage,
    IntelligentMainSidebar
    // HandleMenu
    // IntelligentMainContent
  },
  watch: {
    openTime: function (val) {
      if (val) {
        this.dataForm.minDate = val[0]
        this.dataForm.maxDate = val[1]
      }
    }
    // '$route.query': function (val) {
    //   console.log(val)
    //   if (val) {
    //     this.dataForm.openStartTimeMin = val.openStartTimeMin
    //     this.getDataList()
    //   }
    // }
  },
  created () {
    this.getPlatformList()
  }
}
</script>
