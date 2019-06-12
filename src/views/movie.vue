<template>
  <Layout>
    <!-- <Sider class="left-bar">
      <Menu theme='dark'
            @on-select="scroll2View"
            width="auto">
        <img class="avatar-img"
             src="../assets/avatar.jpg">
        <div class="divider"></div>
        <MenuItem name="movie-details">电影详情</MenuItem>
        <MenuItem name="movie-schedule">电影排片</MenuItem>
      </Menu>
    </Sider> -->
    <Content class="content">
      <div class='movie-details'
           id="movie-details">
        <img id="movie-img"
             :src='movieDetails.posterUrl'>
        <div class="movie-basic-info">
          <div>
          <div style="display:inline"><span class="title"
                  id="movie-name">{{movieDetails.name}}</span></div>
          <div style="display:inline;float:right">
            <Button class="btn btn-primary"
                    id="like-btn"
                    @click="likeMovie"
                    v-if="!movieDetails.islike"
                    primary>
              <span>
                <Icon type="md-heart" />&nbsp;想看</span>
            </Button>
            <Button class="btn btn-primary"
                    id="unlike-btn"
                    @click="unlikeMovie"
                    v-else
                    primary>
              <span>
                <Icon type="md-heart"
                      color="red" />&nbsp;已标为想看</span>
            </Button>
          </div>
          </div>
          <div style="margin-top: 20px;"><span>简 介 ：</span><span id="movie-description"
                  class="gray-text">{{movieDetails.description}}</span>
          </div>
          <div><span>上 映 ：</span><span id="movie-startDate">{{new Date(movieDetails.startDate).toLocaleDateString()}}</span></div>
          <div><span>类 型 ：</span><span id="movie-type">{{movieDetails.type}}</span></div>
          <div><span>地 区 ：</span><span id="movie-country">{{movieDetails.country}}</span></div>
          <div><span>语 言 ：</span><span id="movie-language">{{movieDetails.language}}</span></div>
          <div><span>导 演 ：</span><span id="movie-director">{{movieDetails.director}}</span></div>
          <div><span>主 演 ：</span><span id="movie-starring">{{movieDetails.starring}}</span></div>
          <div><span>编 剧 ：</span><span id="movie-writer">{{movieDetails.writer}}</span></div>
        </div>
      </div>
      <div class="movie-schedule"
           id="movie-schedule">
        <Card>
          <Tabs id="schedule-tabs">
            <TabPane v-for="item in schedule"
                     :key="item.id"
                     :label="item.date.split('T')[0]">
              <Table :columns="columns"
                     :data="item.scheduleItemList"
                     stripe></Table>
            </TabPane>
            <p slot="extra" style="color:grey">只显示最近5天排片</p>
          </Tabs>
        </Card>
      </div>
    </Content>
  </Layout>
</template>

<style>
.left-bar {
  position: fixed;
  height: 1000px;
}
.avatar-img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  margin-top: 30px;
}
.divider {
  margin: 0 auto;
  width: 100px;
  background: radial-gradient(grey 24%, #515a6e 100%);
  height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.content {
  /* margin-left: 200px; */
  font-size: 14px;
}
.movie-basic-info {
  flex: 1;
  padding: 20px 20px;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
}
#movie-img {
  float: left;
  margin: 15px 15px;
  height: 360px;
  width: 270px;
}
#movie-name {
  font-size: 20px;
}
#movie-description {
  max-height: 80px;
  min-height: 40px;
}
#movie-schedule {
  height: 800px;
  margin-top: 40px;
}
</style>

<script>
export default {
  data () {
    return {
      movieDetails: {},
      schedule: {},
      columns: [
        {
          title: '放映开始时间',
          key: 'startTime',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.startTime.substring(11, 16))
          }
        },
        {
          title: '放映结束时间',
          key: 'endTime',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.endTime.substring(11, 16))
          }
        },
        {
          title: '放映厅',
          key: 'hallId',
          align: 'center'
        },
        {
          title: '票价（元）',
          key: 'fare',
          align: 'center'
        },
        {
          title: '选座购票',
          key: 'buy',
          align: 'center',
          render: (h, params) => {
            return h('Button', {
              on: {
                click: () => {
                  console.log(params.row.scheduleId)
                  this.$router.push({
                    path: '/order',
                    query: {
                      id: this.movieDetails.id,
                      scheduleId: params.row.id
                    }
                  })
                }
              }
            }, '点击购票')
          }
        }
      ]
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
          that.getMovieSchedule()
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    getMovieSchedule () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/schedule/search/audience?movieId=' + that.movieDetails.id
      }).then(function (res) {
        if (res.data.success) {
          that.schedule = res.data.content.slice(0, 5)
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    likeMovie () {
      let that = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/movie/' + that.movieDetails.id + '/like?userId=' + sessionStorage.getItem('id')

      }).then(function (res) {
        if (res.data.success) {
          that.getMovieInfo()
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    unlikeMovie () {
      let that = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/movie/' + that.movieDetails.id + '/unlike?userId=' + sessionStorage.getItem('id')
      }).then(function (res) {
        if (res.data.success) {
          that.getMovieInfo()
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    scroll2View (name) {
      let view = document.querySelector('#' + name)
      console.log(name)
      if (view) {
        view.scrollIntoView()
      }
    }
  }
}
</script>
