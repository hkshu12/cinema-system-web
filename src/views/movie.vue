<template>
  <Layout>
    <h3>ssss</h3>
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
  }
}
</script>
