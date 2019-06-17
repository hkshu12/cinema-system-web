<template>
  <Layout>
    <Row type="flex"
         justify="space-around">
      <Col span="18">
      <div>
        <Card style="height:800px;">
          <p slot="title">查看排片情况</p>
          <div>
            <Form inline>
              <FormItem>
                <DatePicker v-model="selectedDate"
                            type="date"
                            format="yyyy年MM月dd日"
                            placeholder="选择日期"></DatePicker>
              </FormItem>
              <FormItem>
                <Select class="hallSelect"
                        v-model="selectedHallId">
                  <Option v-for="hall in hallList"
                          :value="hall.name"
                          :key="hall.id" />
                </Select>
              </FormItem>
              <FormItem>
                <Button type="primary">查询</Button>
              </FormItem>
            </Form>
          </div>
          <div id='calendar'>
            <!-- <FullCalendar class='demo-app-calendar'
                          ref="fullCalendar"
                          defaultView="timeGridWeek"
                          :header="{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'timeGridWeek,timeGridDay'
                          }"
                          :buttonText="{
                            today:    '今天',
                            week:     '周视图',
                            day:      '日视图'
                          }"
                          :plugins="calendarPlugins"
                          :weekends="calendarWeekends"
                          :events="calendarEvents"
                          @dateClick="handleDateClick"
                          locale="zh-CN"
                          allDaySlot="false" /> -->
          </div>
        </Card>
      </div>
      </Col>
    </Row>
  </Layout>
</template>

<style>
.hallSelect {
  text-align: left;
}
</style>

<script>
export default {
  data () {
    return {
      selectedDate: new Date(),
      selectedHallId: '',
      hallList: [],
      schedules: []
    }
  },
  mounted: function () {
    let that = this
    this.$axios({
      method: 'get',
      url: 'http://localhost:8080/hall/all'
    }).then(function (res) {
      if (res.data.success) {
        that.hallList = res.data.content
      }
    })
  },
  methods: {
    getScheduleByHallId () {
      let that = this
      this.$axios({
        mothod: 'get',
        url: '/schedule/search?hallId=' + that.selectedHallId + '&startDate=' + that.selectedDate.replace(/-/g, '/')
      }).then(function (res) {
        if (res.data.success) {
          that.schedules = res.data.content
          that.renderScheduleTable(that.schedules)
        } else {
          alert(res.data.message)
        }
      }).catch(function (error) {
        alert(error)
      })
    },
    renderScheduleTable (schedules) {

    }
  }
}
</script>
