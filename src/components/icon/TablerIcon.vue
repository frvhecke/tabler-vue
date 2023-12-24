<template>
  <i class="icon" :class="[ getIconName(), getColor() ]" :style="{ 'font-size': size_style }"></i>
</template>

<script>
import { getTextColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'TablerIcon',
  props: {
    icon: { default: '', type: String },
    color: { default: '', type: String },
    size: { default: -1, type: Number }
  },
  computed: {
    size_style () {
      return (this.size !== -1) ? this.size+'px' : ''
    }
  },
  methods: {
    getIconName() {
      return 'ti ti-'+this.icon
    },
    getColor () {
      return getTextColor(this.color)
    }
  }
}
</script>