<template>
  <Card class="ticketCard">
    <div class="ticketCard-content">
      <div class="ticketCard-content-ticketInfo">
        <p>影票编号</p>
        <p class="ticketCard-content-ticketInfo-content">{{ticket.ticketNumber}}</p>
      </div>
      <div class="ticketCard-content-ticketInfo">
        <p>电影</p>
        <p class="ticketCard-content-ticketInfo-content">《{{ticket.movieName}}》</p>
      </div>
      <div class="ticketCard-content-ticketInfo">
        <p>影厅</p>
        <p class="ticketCard-content-ticketInfo-content">{{ticket.hallId}}号厅</p>
      </div>
      <div class="ticketCard-content-ticketInfo">
        <p>座位</p>
        <p class="ticketCard-content-ticketInfo-content">{{ticket.seat.row}}排{{ticket.seat.col}}座</p>
      </div>
      <div class="ticketCard-content-ticketInfo schedule">
        <p>时间</p>
        <p class="ticketCard-content-ticketInfo-content">{{ticket.ticketDate}}&nbsp;{{ticket.schedule.startTime}}~{{ticket.schedule.endTime}}</p>
      </div>
      <div>
        <p>&nbsp;</p>
        <Button type="primary"
                style="margin-left: 16px"
                ghost>查看二维码</Button>
      </div>
    </div>
  </Card>
</template>

<style>
.ticketCard {
  margin-top: 10px;
  width: 800px;
  height: 120px;
}
.ticketCard p {
  word-wrap: break-word;
  word-break: break-all;
  text-align: center;
  overflow: hidden;
  margin-top: 5px;
}
.ticketCard-content-ticketInfo {
  float: left;
  padding-left: 16px;
  width: 88px;
}
.ticketCard-content-ticketInfo-content {
  color: grey;
}
.schedule {
  width: 180px;
}
</style>

<script>
export default {
  data () {
    return {
      ticket: {
        ticketDate: '2018-04-11',
        ticketNumber: 1,
        movieName: '三体',
        hallId: 1,
        schedule: {
          startTime: '12:00',
          endTime: '15:00'
        },
        num: 3,
        seat: {
          row: 5,
          col: 7
        }
      }
    }
  }
}
</script>
