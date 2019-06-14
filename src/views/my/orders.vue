<template>
  <Layout>
    <Content style="display: flex;flex-direction: column;align-items: center">
      <orderCard></orderCard>
    </Content>
  </Layout>
</template>

<script>
import orderCard from '@/components/orderCard'
export default {
  components: {
    orderCard
  }
}
</script>
