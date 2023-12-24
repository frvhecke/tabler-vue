<template>
  <PageContainer>
    <NavBar />
    <PageWrapper>
      <PageBody>
        xxx
      </PageBody>
    </PageWrapper>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/page/PageContainer.vue'
import NavBar from '@/components/navigation/NavBar.vue'
import PageWrapper from '@/components/page/PageWrapper.vue'
import PageBody from '@/components/page/PageBody.vue'

export default {
  name: 'LayoutVertical',
  components: {
    PageContainer,
    NavBar,
    PageWrapper,
    PageBody
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