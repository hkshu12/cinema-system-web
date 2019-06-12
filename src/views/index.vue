<template>
  <Layout>
    <Header>
      <Menu v-bind:loginStatus="loginStatus"></Menu>
    </Header>
    <Content style="padding:10px;min-height: 600px">
      <div style="min-height: 200px;">
        <router-view></router-view>
      </div>
    </Content>
    <Footer>
      <myFooter></myFooter>
    </Footer>
  </Layout>
</template>

<script>
import Menu from '@/components/menu'
import myFooter from '@/components/footer'
import movieCard from '@/components/movieCard'
import orderCard from '@/components/orderCard'
export default {
  components: {
    Menu,
    myFooter,
    movieCard,
    orderCard
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
