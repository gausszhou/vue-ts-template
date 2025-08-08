<template>
  <div class="layout-dashboard">
    <DashboardHeader></DashboardHeader>
    <div class="dashboard-content">
      <div class="dashboard-content-aside">
        <DashboardAside></DashboardAside>
      </div>
      <div class="dashboard-content-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import DashboardHeader from "./components/dashboard-header.vue";
import DashboardAside from "./components/dashboard-aside.vue";
</script>
<style lang="scss" scoped>
.layout-dashboard {
    width: 100%;
    height: 100%;
  .dashboard-header {
    height: 60px;
    border-bottom: 1px solid #e5e5e5;
  }
  .dashboard-content {
    display: flex;
    .dashboard-content-aside {
      width: 200px;
      border-right: 1px solid #e5e5e5;
    }
    .dashboard-content-main {
      flex: 1;
    }
  }
}
</style>
