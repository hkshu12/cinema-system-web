<template>
  <Layout>
    <Sider class="sider">
      <Menu theme="light"
            style="height:100%"
            accordion
            active-name="movieManage"
            :open-names="['cinema']">
        <img class='avatar'
             src="../../assets/avatar.jpg">
        <Submenu name="cinema">
          <template slot="title">
            <Icon type="ios-paper" />
            影院业务
          </template>
          <MenuItem name="movieManage"
                    to="/admin/movie">电影管理</MenuItem>
          <MenuItem name="scheduleManage"
                    to="/admin/schedule">排片管理</MenuItem>
          <MenuItem name="promotionManage"
                    to="/admin/promotion">活动管理</MenuItem>
          <MenuItem name="cinemaManage"
                    to="/admin/cinema">影厅管理</MenuItem>
        </Submenu>
        <Submenu name="stats">
          <template slot="title">
            <Icon type="ios-stats" />
            数据统计
          </template>
          <MenuItem name="statistic/scheduleRate"
                    to="/admin/statistic#schedule-rate-card-container">今日排片率</MenuItem>
          <MenuItem name="statistic/boxOffice"
                    to="/admin/statistic#box-office-card-container">所有电影票房</MenuItem>
          <MenuItem name="statistic/audiencePrice"
                    to="/admin/statistic#audience-price-card-container">每日客单价</MenuItem>
          <MenuItem name="statistic/placeRate"
                    to="/admin/statistic#place-rate-card-container">今日上座率</MenuItem>
          <MenuItem name="statistic/popularMovies"
                    to="/admin/statistic#popular-movie-card-container">热门电影</MenuItem>
        </Submenu>
        <Submenu name="staff">
          <template slot="title">
            <Icon type="ios-people" />
            人事管理
          </template>
          <MenuItem name="staffManage"
                    to="/admin/staff">员工管理</MenuItem>
        </Submenu>
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
