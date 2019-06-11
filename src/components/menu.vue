<template>
  <Menu class="menu"
        mode="horizontal"
        theme="dark">
    <div class="menu-left">
      <MenuItem name="LOGO" to="/index"><b>CINEMA</b></MenuItem>
      <MenuItem name="movie" to="/index/movie">电影介绍</MenuItem>
      <MenuItem name="schedule">影院热映</MenuItem>
      <MenuItem name="4" to="/index/order">444</MenuItem>
    </div>
    <div class="menu-right"
         v-if="loginStatus != 'user'">
      <MenuItem name="search">
      <Input v-model="searchKey"
             placeholder="请输入搜索关键词"
             icon="ios-search" />
      </MenuItem>
      <MenuItem name="login"
                to="/login">登录</MenuItem>
      <MenuItem name="register"
                to="/register">注册</MenuItem>
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
        <MenuItem name="profile" to='my/profile'>个人资料</MenuItem>
        <MenuItem name="myLikeMovie" to='my/likeMovie'>我喜欢的</MenuItem>
        <MenuItem name="myOrders" to='my/tickets'>我的影票</MenuItem>
        <MenuItem name="myVIP" to='my/vip'>我的会员</MenuItem>
        <MenuItem name="logout" v-on:click.native="logout()">注销登录</MenuItem>
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
  props: ['loginStatus'],
  data () {
    return {
      searchKey: ''
    }
  },
  methods: {
    logout () {
      console.log('11111')
      sessionStorage.removeItem('loginStatus')
      this.$router.go(0)
    }

  }
}
</script>
