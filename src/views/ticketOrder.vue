<template>
  <div style="min-height: 500px">
    <Steps :current="0" size="small">
      <Step title="选择座位"></Step>
      <Step title="确认订单"></Step>
      <Step title="完成支付"></Step>
    </Steps>
    <Row>
      <Col span="16">
        <Card style="margin-top: 50px;width: 80%;min-height: 100%">
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
      <Col span="18">

      </Col>
    </Row>

  </div>
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
      seatsArray: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
  },
  mounted () {
    this.initSeats(69)
    this.initMovieDetail()
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
      let tempArray = this.seatsArray
      if (this.seatsArray[row][col] === 0) {
        tempArray[row][col] = 3
        console.log('111')
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
