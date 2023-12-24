<template>
  <p v-if="title" class="card-subtitle">
    {{title}}
  </p>
</template>

<script>
export default {
  name: 'CardSubtitle',
  props: {
    title: { default: '', type: String }
  }
}
</script>