<template>
  <a class="btn" :class="[ { disabled: disabled }, { 'active': active }, getColor(), { 'w-100' : full_width }, { 'btn-icon' : !text } ]" @click="click" :title="tooltip">
    <TablerIcon v-if="icon" :icon="icon" :color="icon_color"/>
    <span v-if="text">{{ text }}</span>
  </a>
</template>

<script>
import TablerIcon from '@/components/icon/TablerIcon.vue'
import { getOutlineButtonColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'OutlineButton',
  components: {
    TablerIcon
  },
  props: {
    text: { default: '', type: String },
    tooltip: { default: '', type: String },
    active: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    color: { default: 'primary', type: String },
    icon: { default: '', type: String },
    icon_color: { default: '', type: String },
    full_width: { default: false, type: Boolean },
    href: { default: '', type: String },
    target: { default: '_self', type: String }
  },
  methods: {
    click (e) {
      if (this.href.value === '') {
        e.preventDefault()
        this.$emit('click')
      } else {
        window.open(this.href, this.target, 'noreferrer')
      }
    },
    getColor () {
      return getOutlineButtonColor(this.color)
    }
  }
}
</script>
