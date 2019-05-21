<template>
  <Layout>
    <Sider>
      Sider
    </Sider>
    <Content>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      likeNum: 0,
      posterURL: '',
      directors: '',
      actors: '',
      introduction: ''
    }
  },
  mounted: function () {
    this.getMovieInfo()
  },
  methods: {
    getMovieInfo () {
      this.$axios.get(
        '/movie/', {
          params: {
            movieid: this.$route.query.movieid
          }
        }).then(function (res) {
        renderMovieInfo(res.content)
      }).catch(function (error) {
        alert(error)
      })
    },
    renderMovieInfo (content) {
            
    }
  }
}
</script>
