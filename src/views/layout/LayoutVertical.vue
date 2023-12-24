<template>
  <PageContainer>
    <SideBar />
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/page/PageContainer.vue'
import SideBar from '@/components/navigation/SideBar.vue'

export default {
  name: 'LayoutVertical',
  components: {
    PageContainer,
    SideBar,
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