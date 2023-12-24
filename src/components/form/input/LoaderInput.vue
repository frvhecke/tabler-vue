<template>
  <div class="input-icon">
    <span v-if="left" class="input-icon-addon">
      <div class="spinner-border spinner-border-sm text-secondary" role="status"></div>
    </span>
    <slot></slot>
    <span v-if="right" class="input-icon-addon">
      <div class="spinner-border spinner-border-sm text-secondary" role="status"></div>
    </span>
  </div>
</template>

<script>
export default {
  name: 'LoaderInput',
  props: {
    left: { default: false, type: Boolean },
    right: { default: false, type: Boolean },
  }
}
</script>