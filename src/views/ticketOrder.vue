<template>
  <Card style="min-height: 600px">
  <div style="min-height: 500px">
    <Steps :current="step" size="small">
      <Step title="选择座位"></Step>
      <Step title="确认订单"></Step>
      <Step title="完成支付"></Step>
    </Steps>
    <Row v-if="step == 0">
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
              <div style="margin-bottom: 3px">座位：{{pickedSeatsToStr}}</div>
            </div>
          </div>
          <Button type="primary" size="large" style="margin-top: 20px" v-on:click="lockSeats" v-bind:disabled="pickedSeats.length === 0">确定选座</Button>
        </div>
      </Col>
    </Row>
    <div v-else-if="step === 1" style="margin-top: 50px;padding: 10px;">
      <Table :columns="orderTable" :data="tableInfo"></Table>
      <div style="display: flex;justify-content: flex-start">
        <Select v-model="selectedCoupon" style="width:200px;margin-top: 15px" v-on:change="couponSelect">
          <Option v-for="coupon in couponList" :value="coupon.name" :key="coupon.id" :label="coupon.name">
            <span>{{coupon.name}}</span>
            <span style="float:right;color:#ccc">满{{coupon.targetAmount}}减{{coupon.discountAmount}}</span>
          </Option>
        </Select>
      </div>
    </div>
    <div v-else-if="step === 2" style="margin-top: 50px;padding: 10px"></div>
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
    background: url("../assets/selected-seat.png")center center no-repeat;
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
      scheduleId: '',
      step: 0,
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
      pickedSeats: [],
      isVip: false,
      vipInfo: Object,
      orderTable: [
        {title: '电影', key: 'movieName'},
        {title: '影厅', key: 'hallName'},
        {title: '场次', key: 'scheduleTime'},
        {title: '座位', key: 'seats'},
        {title: '单价', key: 'ticketPrice'},
        {title: '总价', key: 'totalPrice'}
      ],
      tableInfo: [],
      couponList: [],
      selectedCoupon: ''
    }
  },
  computed: {
    scheduleTime () {
      return this.startTime.substring(5, 10) + ' ' + this.startTime.substring(11, 16) + ' 至 ' + this.endTime.substring(5, 10) + ' ' + this.endTime.substring(11, 16)
    },
    pickedSeatsToStr () {
      let result = ''
      if (this.pickedSeats.length === 0) {
        result = '还未选择座位'
      } else {
        for (let i = 0; i < this.pickedSeats.length; i++) {
          result = result + (this.pickedSeats[i].rowIndex + 1) + '排' + (this.pickedSeats[i].columnIndex + 1) + '座' + ' '
        }
      }
      return result
    }
  },
  mounted () {
    this.initSeats(this.$route.query.scheduleId)
    this.initMovieDetail(this.$route.query.id)
  },
  methods: {
    initSeats (scheduleId) {
      this.scheduleId = scheduleId
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
      let pickedArray = []
      let tempArray = this.seatsArray
      if (this.seatsArray[row][col] === 0) {
        tempArray[row][col] = 3
      } else if (this.seatsArray[row][col] === 3) {
        tempArray[row][col] = 0
      }
      this.seatsArray = tempArray.slice()
      for (let i = 0; i < this.seatsArray.length; i++) {
        for (let j = 0; j < this.seatsArray[0].length; j++) {
          if (this.seatsArray[i][j] === 3) {
            pickedArray.push({
              rowIndex: i,
              columnIndex: j
            })
          }
        }
      }
      this.pickedSeats = pickedArray.slice()
    },
    lockSeats () {
      let that = this
      // 锁定座位
      this.$axios({
        method: 'post',
        url: 'http://localhost:8080/ticket/lockSeat',
        data: {
          userId: sessionStorage.getItem('id'),
          scheduleId: that.scheduleId,
          seats: that.pickedSeats
        }
      }).then(function (res) {
        if (res.data.success) {
          let orderInfo = res.data.content
          console.log(orderInfo)
          that.initOrder(orderInfo)
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
      // 获取会员信息
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/vip/' + sessionStorage.getItem('id') + '/get'
      }).then(function (res) {
        if (res.data.success) {
          that.isVip = true
          that.vipInfo = res.data.content
        } else {
          alert(res.data.content.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    initOrder (orderInfo) {
      this.step = 1
      let tempTable = [{movieName: this.movieName,
        hallName: this.hallName,
        scheduleTime: this.scheduleTime,
        seats: this.pickedSeatsToStr,
        ticketPrice: this.ticketPrice + '元',
        totalPrice: this.ticketPrice * this.pickedSeats.length + '元'
      }]
      this.tableInfo = tempTable
      this.couponList = orderInfo.coupons
    },
    couponSelect () {
      console.log(this.selectedCoupon)
    }
  }
}
</script>

<style scoped>

</style>
