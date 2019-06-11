<template>
  <Layout>
    <Header>
      <Menu ref="menu"></Menu>
    </Header>
    <Content class="layout-content">
      <Row type="flex"
           justify="space-around">
        <ul>
          <li v-for="item in movieList"
              v-bind:key="item.id">
            <movieCard :movie="item"></movieCard>
          </li>
        </ul>
      </Row>
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
export default {
  data () {
    return {
      movieList: []
    }
  },
  components: {
    Menu,
    myFooter,
    movieCard
  },

  methods: {

  },
  mounted: function () {
    let that = this
    this.$axios({
      method: 'get',
      url: 'http://localhost:8080/movie/search?keyword=' + that.$route.query.keyword
    }).then(function (res) {
      if (res.data.success) {
        that.movieList = res.data.content
      } else {
        alert(res.data.content)
      }
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>
