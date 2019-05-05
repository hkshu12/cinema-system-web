<template>
  <Layout>
    <Header>
      <Menu ref="menu"></Menu>
    </Header>
    <Content class="layout-content">
      <Row type="flex" justify="space-around">
        <movieCard></movieCard>
        <orderCard></orderCard>
      </Row>
    </Content>
    <Footer>
      <myFooter></myFooter>
    </Footer>
  </Layout>
</template>

<script>
import Menu from '@/components/menu'
import myFooter from '@/components/footer'
import movieCard from '@/components/movieCard'
import orderCard from '@/components/orderCard'
export default {
  components: {
    Menu,
    myFooter,
    movieCard,
    orderCard
  }
}
</script>
