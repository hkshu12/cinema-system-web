<template>
  <Layout>
    <Header>
      <Menu ref="Menu"></Menu>
    </Header>
    <Content>
      <orderCard></orderCard>
    </Content>
    <Footer>
      <myFooter></myFooter>
    </Footer>
  </Layout>
</template>

<script>
import Menu from '@/components/menu'
import myFooter from '@/components/footer'
import orderCard from '@/components/orderCard'
export default {
  components: {
    Menu,
    orderCard,
    myFooter
  }
}
</script>