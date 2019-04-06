<template>
  <Menu class="menu"
        mode="horizontal"
        theme="dark"
        active-name="1">
    <div class="menu-left">
      <MenuItem name="LOGO" to="index">LOGO</MenuItem>
      <MenuItem name="2">222</MenuItem>
      <MenuItem name="3">333</MenuItem>
      <MenuItem name="4">444</MenuItem>
    </div>
    <div class="menu-right"
         v-if="!hasLoggedIn">
      <MenuItem name="search">
      <Input v-model="searchKey"
             placeholder="请输入搜索关键词"
             icon="ios-search" />
      </MenuItem>
      <MenuItem name="login"
                to="login">登录</MenuItem>
      <MenuItem name="register"
                to="register">注册</MenuItem>
    </div>
    <div class="menu-right"
         v-else>
      <MenuItem name="search">
      <Input v-model="searchKey"
             placeholder="请输入搜索关键词"
             icon="ios-search" />
      </MenuItem>
      <!-- 个人资料之类的-->
      <Submenu name="profile">
        <template slot="title">
          <Icon type="md-person" />我的账户
        </template>
        <MenuItem name="profile-myLikeMovie">我喜欢的</MenuItem>
        <MenuItem name="profile-details">个人资料</MenuItem>
        <MenuItem name="profile-logout">注销登录</MenuItem>
      </Submenu>
    </div>
  </Menu>
</template>

<style>
.menu {
  position: relative;
}
.menu-search {
  float: right;
  margin-right: 20px;
}
.menu-right {
  float: right;
  margin: 0 auto;
  margin-right: 20px;
}
</style>

<script>
export default {
  name: 'menu',
  data () {
    return {
      hasLoggedIn: false,
      searchKey: ''
    }
  },
  methods: {

  }
}
</script>
