<template>
  <Layout>
    <Sider>
      <Menu class="profile-menu"
            theme='dark'>
        <img class="profile-menu-avatar"
             src="#"
             alt="AVATAR"
             style="height: 100px; width: 100px;" />
        <Divider style="width: 80%; min-width: 80%; margin: 12px auto;" />
        <MenuItem class="menuitem"
                  name="accountInfo">账号信息</MenuItem>
        <MenuItem class="menuitem"
                  name="myLikeMovie">我喜欢的电影</MenuItem>
        <MenuItem class="menuitem"
                  name="editProfile">修改资料</MenuItem>
      </Menu>
    </Sider>
  </Layout>
</template>

<style>
</style>

<script>
export default {
  data () {
    return {
      tabName: 'acountInfo'
    }
  }
}
</script>
