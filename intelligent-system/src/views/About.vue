<template>
  <div class="about">
   <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
   </el-tabs>
  </div>
</template>
<script>
// import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
