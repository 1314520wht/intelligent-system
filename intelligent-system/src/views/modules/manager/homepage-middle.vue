<template>
    <!-- 左部分 -->
  <div class="scheduleList">
    <div class="title_moreLink">
      <el-tabs v-model="activeName">
        <!-- <el-tab-pane label="代办事项" name="first"> -->
          <div class="title_item">
            <span>代办事项</span>
            <em>8</em>
          </div>
          <div class="list_Frame">
            <ul>
              <li v-for="(item, index) in projectList" :key="index">
                <div class="item_titles">
                  【开标申请移交】
                  <!-- <a href="javascript:void(0)" @click="auditBtnClick(item)">{{ item.tenderProjectName }}关于决定</a> -->
                  <a href="javascript:void(0)" @click="auditBtnClick(item)">{{
                    item.tenderProjectName
                  }}</a>
                </div>
                <div class="item_infos">
                  <div class="info_list">
                    <!-- <span>{{ getPlatformName(item.platformCode) }}</span> -->
                    <span>发起人：张三</span>
                    <!-- <span>评标时间：{{ item.updateDate }}</span> -->
                    <span>发起时间：209820920982082902</span>
                  </div>
                </div>
                <el-dropdown trigger="click" class="auditBtn">
                  <!-- <span class="el-dropdown-link">
                    操作<i class="el-icon-arrow-down el-icon--right"></i>
                  </span> -->
                  <handle-menu
                    :params="item"
                    :tenderProjectOldid="item.tenderProjectOldid"
                    :platformCode="item.platformCode"
                    :userType="'1'"
                    :systemCode="item.pubServicePlatCode"
                    :isRemote="item.isRemote"
                  ></handle-menu>
                </el-dropdown>
              </li>
            </ul>
          </div>
        <!-- </el-tab-pane> -->
      </el-tabs>
      <div class="moreLink">
        <a
          href="javascript:void(0)"
          @click="
            $router.push({
              name: 'trade-supervisor-project-open-list',
              query: {
                openStartTimeMin: 'today',
              },
            })
          "
          >查看全部</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import HandleMenu from '@/views/modules/manager/common/handle-menu'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
    // isHomePage: true
      siteitem: [],
      projectList: [
        { tenderProjectName: '不是说离开家实际数量不是说离开家实际数量不是说离开家实际数量不是说离开家实际数量不是说离开家实际数量不是说离开家实际数量不是说离开家实际数量' },
        { tenderProjectName: '不是说离开家实际数量' },
        { tenderProjectName: '不是说离开家实际数量' },
        { tenderProjectName: '不是说离开家实际数量' },
        { tenderProjectName: '不是说离开家实际数量' },
        { tenderProjectName: '不是说离开家实际数量' }
      ],
      limit: 5,
      activeName: 'first'
    })
    const getInfo = () => {
      console.log('请求数据')
    }
    const auditBtnClick = () => {
      console.log('请求数据')
    }
    const getPlatformList = () => {
      console.log('请求数据')
    }
    const getPlatformName = () => {
      console.log('请求数据')
    }
    const methods = {
      getInfo,
      auditBtnClick,
      getPlatformList,
      getPlatformName
    }
    return {
      ...toRefs(state),
      ...methods
    }
  },
  components: {
    HandleMenu
  }
}
</script>
<style lang="less" scoped>
.title_item {
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  text-align: left;
  em {
    display: inline-block;
    padding: 1px 6px;
    background-color: #3171FF;
    border-radius: 50%;
    color: #fff;
    margin-left: 10px;
  }
}
.scheduleList {
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 20px 24px 31px;
  // height: 431px;
  margin-top: 15px;
}
.title_moreLink {
  position: relative;
  /deep/.el-tabs__header {
    width: 40%;
    margin-bottom: 0;
  }
  .moreLink {
    position: absolute;
    right: 0;
    top: 13px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 99;
    padding-top: 0px;
    a {
      color: #3171FF;
      padding-right: 15px;
      background: url(~@/intelligent-ui/img/more_icon.png)no-repeat;
      background-position: right center;
      background-size: 7px 12px;
    }
  }
  /deep/.el-tabs__nav-wrap::after {
    height: 0;
  }
}
.list_Frame {
  .item_titles {
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    a {
      font-weight:400 ;
    }
  }
  li {
    text-align: left;
  }
}
.list_Frame{
  min-height: 300px;
  max-height: 406px;
  overflow: hidden;
  padding-right: 10px;
  li{
    position: relative;
    border-bottom: 1px solid rgba(0,0,0,.15);
    padding-right: 115px;
    padding-bottom: 15px;
    padding-top: 15px;
    &:hover{
      color: #3171FF;
    }
    &.back_state{
      .auditBtn{
        display: none;
      }
      &::after{
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        background: url(~@/intelligent-ui/img/back_icon.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
  }
  .item_titles{
    margin-bottom: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .info_list{
    display: inline-block;
    color: #888;
    margin-right: 25px;
    span {
      display: inline-block;
      background: #F5F5F5;
      border-radius: 2px;
      border: 1px solid #D9D9D9;
      padding: 0 7px;
      margin-right: 10px;
      font-size: 12px;
    }
  }
  .auditBtn{
    position: absolute;
    top: 35%;
    right: 0;
    transform: translateY(-50%);
    height: 24px;
    line-height: 24px;
    border-radius: 3px;
    background-color: #3171FF;
    color: #FFFFFF;
    padding-left: 10px;
    padding-right: 10px;
  }
  .goBackImg {
    position: absolute;
    top: 0px;
    width: 30px;
    height: 30px;
    background: url('~@/intelligent-ui/img/goBack.png')no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
  }
}
</style>
