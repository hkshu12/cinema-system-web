<template>
  <Layout>
    <Header>
      <Menu ref="Menu"></Menu>
    </Header>
    <Content>
      <ticketCard></ticketCard>
    </Content>
    <Footer>
      <myFooter></myFooter>
    </Footer>
  </Layout>
</template>

<script>
import Menu from '@/components/menu'
import myFooter from '@/components/footer'
import ticketCard from '@/components/ticketCard'
export default {
  components: {
    Menu,
    ticketCard,
    myFooter
  }
}
</script>
