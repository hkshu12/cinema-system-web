<template>
  <Layout>
    <Sider class="sider">
      <Menu theme="dark" style="height:100%">
        <img class='avatar' src="../../assets/avatar.jpg">
        <MenuItem name="movieManage" to="/admin/movie">电影管理</MenuItem>
        <MenuItem name="scheduleManage" to="/admin/schedule">排片管理</MenuItem>
        <MenuItem name="promotionManage" to="/admin/promotion">活动管理</MenuItem>
        <MenuItem name="cinemaManage" to="/admin/cinema">影厅管理</MenuItem>
        <MenuItem name="statistic" to="/admin/statistic">数据统计</MenuItem>
        <MenuItem name="staffManage" to="/admin/staff">员工管理</MenuItem>
      </Menu>
    </Sider>
    <Content class="content">
      <router-view></router-view>
    </Content>
  </Layout>
</template>

<style>
.sider {
  height: 1000px;
  position: fixed;
}
.avatar {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin: 40px auto;
}
.content {
  margin-left: 200px;
}
</style>
