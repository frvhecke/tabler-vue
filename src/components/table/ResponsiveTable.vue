<template>
  <div class="table-responsive">
    <table class="table" :class="[ { 'text-center' : center } ]">
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveTable',
  components: {
  },
  props: {
    center: { default: false, type: Boolean }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>