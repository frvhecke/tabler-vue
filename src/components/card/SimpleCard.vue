<template>
  <div 
    class="card"
    :class="[ { 'card-borderless' : borderless }, { 'card-active' : active }, { 'card-inactive' : inactive }, background_color_class ]"
  >
    <slot name="header"></slot>
    <div class="card-body">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import { getBackgroundColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'SimpleCard',
  props: {
    title: { default: '', type: String },
    borderless: { default: false, type: Boolean },
    active: { default: false, type: Boolean },
    inactive: { default: false, type: Boolean },
    background_color: { default: '', type: String },
  },
  computed: {
    background_color_class () {
      var light = false
      var color = this.background_color
      if(color.includes('-lt')) {
        light = true
        color = color.split('-')[0]
      }
      return getBackgroundColor(color, light)
    },
  }
}
</script>