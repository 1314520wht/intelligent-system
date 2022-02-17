<template>
    <div class="main">
      <intelligent-main-navbar ref="intelligentMainNavbar" @slideBarList="slideBarList" />
      <div class="homePage_Main1">
        <div class="typeArea">
          <div class="personal-content">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
              <el-tab-pane label="个人资料" name="first">
                <div class="changePhone">
                    <div class="changePhone-img">
                        <img src="@/intelligent-ui/img/avatar.png">
                    </div>
                    <div class="changePhoneText">
                        <span style="padding-right:20px">你可以上传JPG、GIF或PNG格式的文件、文件大小不能超过2M</span>
                        <el-button >更换头像</el-button>
                        <el-button>编辑资料</el-button>
                    </div>
                </div>
                <ul class="information-content">
                    <li><!-- 如果不做输入，直接看数据的话就用下面的p不用input标签了 -->
                        <!-- <span>姓名</span><el-input v-model="informationList.name"></el-input> -->
                        <span>姓名</span><p>组织管理员</p>
                    </li>
                     <li>
                        <span>邮箱</span><el-input></el-input>
                    </li>
                    <li>
                        <span>手机</span><el-input></el-input>
                    </li>
                    <li>
                        <span>电话</span><el-input></el-input>
                    </li>
                    <li>
                        <span>公司</span><el-input></el-input>
                    </li>
                    <li>
                        <span>部门</span><el-input></el-input>
                    </li>
                    <li>
                        <span>备注</span><el-input></el-input>
                    </li>
                </ul>
                <p class="loginTime">上次登录IP:<span>42.91.142.145</span>&nbsp;&nbsp;&nbsp;&nbsp;时间：<span>2022年2月8日</span><span>星期二</span><span>15:03:15</span>
                </p>
              </el-tab-pane>
              <el-tab-pane label="注册信息" name="second">Config</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <copy-footer />
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import IntelligentMainNavbar from '@/views/intelligent-main-navbar'
import CopyFooter from '@/components/intelligent-footer-copy'
export default {
  name: 'main1',
  setup () {
    const state = reactive({
      activeName: 'first',
      informationList: {
        name: '组织管理员',
        email: '',
        mobilephone: '',
        phone: '',
        compony: '甘肃省公共资源交易局',
        section: '省局机构',
        remarks: ''
      }
    })
    return {
      ...toRefs(state)
    }
  },
  components: {
    IntelligentMainNavbar,
    CopyFooter
  }
}
</script>
<style lang="less" scoped>
.left_portions {
  width: 100%;
}
/deep/.el-tabs__header {
    margin-bottom: 0;
}
/deep/.personal-content .el-tabs__nav-scroll {
  padding-bottom: 20px !important;
}
.information-content {
  li {
    /deep/.el-input {
       width: calc(100% - 200px);
       display: inline-block;
       border: none;
    }
    /deep/.el-input__inner {
        border: none;
    }
  }
}
/deep/.el-tabs__nav-wrap::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
}
/deep/.el-tabs__active-bar {
  background-color: #000;
  bottom: -20px;
}
/deep/.el-tabs__item {
  color: rgb(180, 178, 178);
}
/deep/.el-tabs__item.is-active {
  color: #000;
}
.homePage_Main {
  min-height: calc(100vh - 60px);
}
</style>
