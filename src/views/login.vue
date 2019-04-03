<template>
    <Layout>
        <Header>
            <Menu></Menu>
        </Header>
        <Content class="layout-content">
            <Row type="flex" justify="space-around">
                <Col id="one" span="14">带图，大概</Col>
                <Col span="8">
                    <Card :bordered="false">
                        <p slot="title">欢迎登录CINEMA系统</p>
                        <Form :model="formData" :label-width="80" width="60%">
                            <FormItem label="用户名">
                                <Input v-model="formData.username" placeholder="请输入用户名"/>
                            </FormItem>
                            <FormItem label="密码">
                                <Input v-model="formData.password" placeholder="请输入密码"/>
                            </FormItem>
                            <FormItem>
                                <Button>登录</Button>
                            </FormItem>
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

  components: {
    Menu
  }
}
</script>
