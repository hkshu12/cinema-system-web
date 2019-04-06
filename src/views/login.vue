<template>
  <Layout>
    <Header>
      <Menu ref="menu"></Menu>
    </Header>
    <Content class="layout-content">
      <Row type="flex"
           justify="space-around">
        <Col class="layout-content-row-col1"
             span="14">
        <p>一张大图</p>
        </Col>
        <Col class="layout-content-row-col2"
             span="8">
        <Card class="layout-content-row-col2-card"
              :bordered="false">
          <p slot="title">欢迎登录CINEMA系统</p>
          <br>
          <Form class="layout-content-row-col2-card-form"
                :model="formData"
                :label-width="80"
                label-position="left">
            <FormItem label="用户名">
              <Input v-model="formData.username"
                     placeholder="请输入用户名" />
            </FormItem>
            <br>
            <FormItem label="密码">
              <Input v-model="formData.password"
                     placeholder="请输入密码" />
            </FormItem>
            <br>
            <FormItem>
              <Button long
                      type="primary"
                      @click="switchStatus">登录</Button>
            </FormItem>
            <br>
            <p>
              没有账号?&nbsp;
              <router-link to="register">点击注册</router-link>
            </p>
            <br>
          </Form>
        </Card>
        </Col>
      </Row>
    </Content>
    <Footer>
      <myFooter></myFooter>
    </Footer>
  </Layout>
</template>

<style>
.layout-content {
  margin-top: 16px;
}
.layout-content-row-col1 {
  background: white;
}
.layout-content-row-col2 {
  position: relative;
  height: 650px;
}
.layout-content-row-col2-card {
  margin-top: 100px;
}
.layout-content-row-col2-card-form {
  width: 80%;
  margin: 0 auto;
}
</style>

<script>
import Menu from '@/components/menu'
import myFooter from '@/components/footer'
export default {
  data () {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    switchStatus () {
      this.$refs.menu.hasLoggedIn = !this.$refs.menu.hasLoggedIn
    }
  },

  components: {
    Menu,
    myFooter
  }
}
</script>
