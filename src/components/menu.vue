<template>
  <Menu class="menu" mode="horizontal" theme="dark" active-name="1">
    <div class="menu-left">
      <MenuItem name="1">LOGO</MenuItem>
      <MenuItem name="2">222</MenuItem>
      <MenuItem name="3">333</MenuItem>
      <MenuItem name="4">444</MenuItem>
    </div>
    <div class="menu-right" v-if="!hasLoggedIn">
      <MenuItem name="login">登录</MenuItem>
      <MenuItem name="register">注册</MenuItem>
    </div>
    <div class="menu-right" v-else>
      <!-- 个人资料之类的-->
      <Submenu name="profile">
        <template slot="title">
          <Icon type="md-person"/>我的账户
        </template>
        <MenuItem name="profile-1">我喜欢的电影</MenuItem>
        <MenuItem name="profile-2">编辑个人资料</MenuItem>
        <MenuItem name="profile-3">balabala</MenuItem>
      </Submenu>
    </div>
  </Menu>
</template>

<style>
.menu {
  position: relative;
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
      hasLoggedIn: false
    }
  },
  methods: {

  }
}
</script>
