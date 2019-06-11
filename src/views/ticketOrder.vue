<template>
  <div>
    <Steps :current="1" size="small">
      <Step title="选择座位"></Step>
      <Step title="确认订单"></Step>
      <Step title="完成支付"></Step>
    </Steps>
    <Row style="padding-top: 30px">
      <Col span="12">
        <h3>座位</h3>
        <div v-for="row in seatsArray.length" v-bind:key="row">
          <div v-for="col in seatsArray[0].length" v-bind:key="col" >
            <div class="inner-seat"
                 @click="addSeat(row-1,col-1)"
                 :class="seatsArray[row-1][col-1]===1?'selected-seat':'unselected-seat'">
            </div>
          </div>
        </div>
      </Col>
      <Col span="12">显示订单</Col>
    </Row>
  </div>
</template>
<style>
  .selected-seat {
    background: url("../assets/selected-seat.png");
    width: 28px;
    height: 28px;
    margin: 3px;

    border: none;
    outline: none;
  }
  .unselected-seat {
    background: url("../assets/unselected-seat.png");
    width: 28px;
    height: 28px;
    margin: 3px;

    border: none;
    outline: none;
  }
</style>

<script>
export default {
  name: 'ticketOrder',
  data () {
    return {
      seatsArray: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
  },
  mounted () {
    // this.initSeats(69)
    // this.initMovieDetail()
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
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    initMovieDetail (movieId) {

    },
    addSeat (row, col) {

    }
  }
}
</script>

<style scoped>

</style>
