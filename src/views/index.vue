<template>
  <Layout>
    <Header>
      <Menu ref="menu"></Menu>
    </Header>
    <Content class="layout-content">
      <Row type="flex" justify="space-around">
        <movieCard></movieCard>
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
export default {
  components: {
    Menu,
    myFooter,
    movieCard
  }
}
</script>
