<template>
  <Layout>
    <Header>
      <Menu v-bind:loginStatus="loginStatus"></Menu>
    </Header>
    <Content style="min-height: 600px">
      <div style="min-height: 200px;">
        <router-view></router-view>
      </div>
    </Content>
  </Layout>
</template>

<script>
import Menu from '@/components/menu'
import movieCard from '@/components/movieCard'
export default {
  components: {
    Menu,
    movieCard
  },
  data () {
    return {
      loginStatus: 'guest'
    }
  },
  created: function () {
    this.loginStatus = sessionStorage.getItem('loginStatus')
  },
  methods: {
  }
}
</script>
