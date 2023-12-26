<template>
  <div class="input-group" :class="[ { 'input-group-flat' : flat }, { 'mb-2' : mb2 }, { 'mb-3' : mb3 } ]">
    <span v-if="text_left" class="input-group-text">
      {{ text_left }}
    </span>
    <slot></slot>
    <span v-if="text_right" class="input-group-text">
      {{ text_right }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'InputGroup',
  props: {
    text_left: { default: '', type: String},
    text_right: { default: '', type: String},
    flat: { default: false, type: Boolean },
    mb2: { default: false, type: Boolean },
    mb3: { default: false, type: Boolean },
  }
}
</script>