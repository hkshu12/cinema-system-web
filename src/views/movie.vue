<template>
  <Layout>
    <Sider>
      Sider
    </Sider>
    <Content>
      这边数据获取逻辑写完了，剩数据展示和美化
      <p>daoyan:{{movieDetails.director}}</p>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      movieDetails: {}
    }
  },
  mounted: function () {
    this.getMovieInfo()
  },
  methods: {
    getMovieInfo () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/movie/' + this.$route.query.id + '/' + sessionStorage.getItem('id')
      }).then(function (res) {
        if (res.data.success) {
          that.movieDetails = res.data.content
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  }
}
</script>
