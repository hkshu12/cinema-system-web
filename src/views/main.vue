<template>
  <Layout>
    <Content>
      <Row>
        <Col span="18">
        </Col>
        <Col span="6">
        <Card>
          <p slot="title">热映榜单</p>
          <ol>
            <li v-for="movie in hotMovies" :key="movie.id">{{movie.name}}</li>
          </ol>
        </Card>
        </Col>
      </Row>
    </Content>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      hotMovies: {}
    }
  },
  mounted: function () {
    let that = this
    this.$axios({
      method: 'get',
      url: 'http://localhost:8080/statistics/popular/movie?days=60&movieNum=5'
    }).then(function (res) {
      if (res.data.success) {
        that.hotMovies = res.data.content
      } else {
        alert(res.data.content)
      }
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>
