<template>
  <Card style="min-height: 600px">
  <div style="min-height: 500px">
    <Steps :current="0" size="small">
      <Step title="选择座位"></Step>
      <Step title="确认订单"></Step>
      <Step title="完成支付"></Step>
    </Steps>
    <Row>
      <Col span="16">
        <Card style="margin-top: 50px;width: 80%;min-height: 400px">
          <h3 style="margin-bottom: 10px">选择座位</h3>
          <div style="position:relative;right: 100px">
            <div class="selected-seat" style="display: inline-block;position: relative;top:10px"></div>
            已选
          </div>
          <div style="position:relative;right: 100px;margin-bottom: 10px">
            <div class="unselected-seat" style="display: inline-block;position: relative;top:10px"></div>
            未选
          </div>
          <div v-for="row in seatsArray.length" v-bind:key="row">
            <div v-for="col in seatsArray[0].length" v-bind:key="col" style="display: inline-block">
              <div v-bind:class="seatsArray[row-1][col-1]===1?'selected-seat':(seatsArray[row-1][col-1]===0?'unselected-seat':'add-seat')"
                   @click="addSeat(row-1,col-1)">
              </div>
            </div>
          </div>
        </Card>
      </Col>
      <Col span="8">
        <div style="margin-top: 50px;width: 80%;min-height: 400px">
          <div style=" display: flex;flex-direction: row; align-items: center;">
            <img v-bind:src="posterUrl" style="width: 150px;height: 200px"/>
            <Divider type="vertical" style="height: 200px;margin-left: 20px" />
            <div style="display: flex;flex-direction: column; align-items: flex-start;padding-top: 20px;margin-left: 10px">
              <div style="margin-bottom: 8px">片名: {{movieName}}</div>
              <div style="margin-bottom: 8px">语言: {{movieLanguage}}</div>
              <div style="margin-bottom: 8px">类型：{{movieType}}</div>
              <div style="margin-bottom: 8px">片长：{{movieLength}}分钟</div>
              <div style="margin-bottom: 8px">票价：{{ticketPrice}}元/张</div>
            </div>
          </div>
          <Divider style="width: 180px"></Divider>
          <div style=" display: flex;flex-direction: row; align-items: center;">
            <div style="display: flex;flex-direction: column; align-items: flex-start;margin-left: 10px">
              <div style="margin-bottom: 3px">影厅: {{hallName}}</div>
              <div style="margin-bottom: 3px">场次：{{scheduleTime}}</div>
              <div style="margin-bottom: 3px">座位：{{pickedSeats}}</div>
            </div>
          </div>
          <Button type="primary" size="large" style="margin-top: 20px">确定选座</Button>
        </div>
      </Col>
    </Row>
  </div>
  </Card>
</template>
<style>
  .selected-seat {
    background: url("../assets/selected-seat.png")center center no-repeat;
    background-size: 100% 100%;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: none;
    outline: none;
  }
  .unselected-seat {
    background: url("../assets/unselected-seat.png")center center no-repeat;
    background-size: 100% 100%;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: none;
    outline: none;
  }
  .add-seat{
    background: url("../assets/add-seat.png")center center no-repeat;
    background-size: 100% 100%;
    width: 24px;
    height: 24px;
    margin: 2px;
    border: none;
    outline: none;
  }
</style>

<script>
export default {
  name: 'ticketOrder',
  data () {
    return {
      seatsArray: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
      posterUrl: '',
      movieName: '',
      movieLanguage: '',
      movieType: '',
      movieLength: 0,
      hallName: '',
      startTime: '',
      endTime: '',
      ticketPrice: 0,
      pickedSeats: []
    }
  },
  computed: {
    scheduleTime () {
      return this.startTime.substring(0, 10) + ' ' + this.startTime.substring(11, 16) + ' 至 ' + this.endTime.substring(0, 10) + ' ' + this.endTime.substring(11, 16)
    }
  },
  mounted () {
    this.initSeats(this.$route.query.scheduleId)
    this.initMovieDetail(this.$route.query.id)
  },
  methods: {
    initSeats (scheduleId) {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/ticket/get/occupiedSeats?scheduleId=' + scheduleId
      }).then(function (res) {
        if (res.data.success) {
          that.seatsArray = res.data.content.seats
          that.hallName = res.data.content.scheduleItem.hallName
          that.ticketPrice = res.data.content.scheduleItem.fare
          that.startTime = res.data.content.scheduleItem.startTime
          that.endTime = res.data.content.scheduleItem.endTime
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    initMovieDetail (movieId) {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/movie/' + movieId + '/' + sessionStorage.getItem('id')
      }).then(function (res) {
        if (res.data.success) {
          that.movieName = res.data.content.name
          that.posterUrl = res.data.content.posterUrl
          that.movieLanguage = res.data.content.language
          that.movieType = res.data.content.type
          that.movieLength = res.data.content.length
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    addSeat (row, col) {
      let tempArray = this.seatsArray
      if (this.seatsArray[row][col] === 0) {
        tempArray[row][col] = 3
      } else if (this.seatsArray[row][col] === 3) {
        tempArray[row][col] = 0
      }
      this.seatsArray = tempArray.slice()
    }
  }
}
</script>

<style scoped>

</style>
