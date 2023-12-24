<template>
  <h3 v-if="title" class="card-title">
    {{title}}
  </h3>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    title: { default: '', type: String }
  }
}
</script>