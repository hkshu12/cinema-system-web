<template>
  <Layout>
    <div style="display: flex;flex-direction: column;align-items: center;margin: 16px">
      <Tabs style="width: 90%;min-height: 600px">
        <TabPane label="电影票购买订单" icon="logo-windows">标签二的内容</TabPane>
        <TabPane label="会员卡充值记录" icon="logo-apple" :disabled="!isVIP">
          <div style="display: flex;flex-direction: column;align-items: center;">
            <Card style="width: 60%;" v-for="item in chargeRecords" v-bind:key="item.id">
              <div><b>会员卡充值</b></div>
              <div style="margin-top: 4px"><b>充值金额：</b>{{item.amount}}&emsp;&emsp;<b>赠送金额：</b>{{item.gift}}</div>
              <div><b>充值时间：</b>{{item.time.substring(0, 10)}}&emsp;{{item.time.substring(11, 19)}}</div>
            </Card>
          </div>
        </TabPane>
      </Tabs>
    </div>
  </Layout>
</template>

<script>
export default {
  data () {
    return {
      chargeRecords: [],
      isVIP: false
    }
  },
  mounted () {
    this.getVIPInfo()
    this.getOrderRecords()
  },
  methods: {
    getVIPInfo () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/vip/' + sessionStorage.getItem('id') + '/get'
      }).then(function (res) {
        if (res.data.success) {
          that.isVIP = true
          that.getChargeRecords()
        } else {
          that.isVIP = false
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    getChargeRecords () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/records/selectChargeRecordByUserID/' + sessionStorage.getItem('id')
      }).then(function (res) {
        if (res.data.success) {
          that.chargeRecords = res.data.content
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    getOrderRecords () {
      let that = this
      this.$axios({
        method: 'get',
        url: 'http://localhost:8080/records/getComsumptionRecordsByUserID/' + sessionStorage.getItem('id')
      }).then(function (res) {
        if (res.data.success) {
          that.isVIP = true
          that.getChargeRecords()
        } else {
          that.isVIP = false
        }
      }).catch(function (error) {
        alert(error)
      })
    }
  }
}
</script>
