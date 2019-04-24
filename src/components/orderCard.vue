<template>
  <Card class="orderCard">
    <p slot="title" class="orderCard-orderDate">
      <Icon type="ios-calendar-outline" />
      {{order.orderDate}}
    </p>
    <p slot="extra" class="orderCard-orderNumber" style="">
      订单编号:{{order.orderNumber}}
    </p>
    <div class="orderCard-content">
      <div class="orderCard-content-poster">
        <img :src="order.moviePosterURL"
             height="120px"
             width="80px" />
      </div>
      <div class="orderCard-content-orderInfo">
        <p>《{{order.movieName}}》</p>
        <p style="color:grey">&nbsp;座位：</p>
        <ul style="color:grey; padding-left:20px; list-style-type: none">
          <li v-for="(seat,index) in order.seats" :key="index">{{seat.row}}排{{seat.col}}座</li>
        </ul>
      </div>
      <div class="orderCard-content-right">
        <p>单价</p>
        <p style="color:grey">￥{{order.unitPrice}}</p>
      </div>
      <div class="orderCard-content-right">
        <p>数量</p>
        <p style="color:grey">×{{order.num}}</p>
      </div>
      <div class="orderCard-content-right">
        <p>总价</p>
        <p style="color:grey">￥{{order.unitPrice * order.num}}</p>
      </div>
    </div>
    <Divider style="margin-bottom: 15px"/>
    <div style="float:right">
      <Button type="primary" ghost>查看订单详情</Button>
    </div>
  </Card>
</template>

<style>
p {
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
  margin-top: 5px;
}
.orderCard {
  margin-top: 10px;
  height: 270px;
  width: 800px;
  text-align: left;
}
.orderCard-content-poster{
  float: left;
  padding-left: 16px;
}
.orderCard-content-orderInfo{
  float:left;
  padding-left: 16px;
  width: 300px;
}
.orderCard-content-right{
  float:left;
  text-align: center;
  width: 100px;
}
</style>

<script>
export default {
  data () {
    return {
      order: {
        orderDate: '2018 - 04 - 11',
        orderNumber: 'sdafg32rfsdf32fsad',
        movieName: '三体',
        moviePosterURL: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554357005710&di=9e316b2c6c8f7daf398c4866bd3a321e&imgtype=0&src=http%3A%2F%2Fi2.hexunimg.cn%2F2016-07-28%2F185209547.jpg',
        unitPrice: 50,
        num: 3,
        seats: [
          {
            row: 5,
            col: 7
          },
          {
            row: 5,
            col: 9
          },
          {
            row: 5,
            col: 11
          }
        ]
      }
    }
  }
}
</script>
