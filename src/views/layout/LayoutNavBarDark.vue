<template>
  <PageContainer>
    <NavBar theme="dark" />
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/page/PageContainer.vue'
import NavBar from '@/components/navigation/NavBar.vue'

export default {
  name: 'LayoutNavBarDark',
  components: {
    PageContainer,
    NavBar,
  },
  props: {
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>