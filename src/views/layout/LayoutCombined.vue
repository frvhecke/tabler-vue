<template>
  <PageContainer>
    <SideBar />
    <NavHeader>
      <template #left>
        <form action="./" method="get" autocomplete="off" novalidate>
          <div class="input-icon">
            <span class="input-icon-addon">
              <!-- Download SVG icon from http://tabler-icons.io/i/search -->
              <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
            </span>
            <input type="text" value="" class="form-control" placeholder="Search…" aria-label="Search in website">
          </div>
        </form>
      </template>
    </NavHeader>
  </PageContainer>
</template>

<script>
import PageContainer from '@/components/page/PageContainer.vue'
import SideBar from '@/components/navigation/SideBar.vue'
import NavHeader from '@/components/navigation/NavHeader.vue'

export default {
  name: 'LayoutCombined',
  components: {
    PageContainer,
    SideBar,
    NavHeader
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