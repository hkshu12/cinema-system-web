<template>
    <Layout>
        <Header>
            <Menu ref="menu"></Menu>
        </Header>
        <Content class="layout-content">
            <Row type="flex" justify="space-around">
                <Col id="one" span="14">带图，大概</Col>
                <Col class="layout-content-row-col2" span="8">
                    <Card class="layout-content-row-col2-card" :bordered="false">
                        <p slot="title">欢迎登录CINEMA系统</p>
                        <br />
                        <Form :model="formData" :label-width="80" width="60%">
                            <FormItem label="用户名">
                                <Input v-model="formData.username" placeholder="请输入用户名"/>
                            </FormItem>
                            <br />
                            <FormItem label="密码">
                                <Input v-model="formData.password" placeholder="请输入密码"/>
                            </FormItem>
                            <br />
                            <FormItem>
                                <Button long @click="switchStatus">登录</Button>
                            </FormItem>
                            <br />
                            <p>没有账号?&nbsp;<a href="#">点击注册</a></p>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Content>
        <Footer>Footer</Footer>
    </Layout>
</template>

<style>
.layout-content{
    margin-top: 16px;
}
.layout-content-row-col2{
    position: relative;
    height: 600px;
}
.layout-content-row-col2-card{
    margin-top: 100px;
}
#one {
    background:white;
}
</style>

<script>
import Menu from '@/components/menu'
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
    Menu
  }
}
</script>
