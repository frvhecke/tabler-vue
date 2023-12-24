<template>
  <div
    class="avatar"
    :class="[ text_color_class, background_color_class, { 'bg-transparent' : transparent } ]"
    data-demo-color=""
  >
    {{ text }}
  </div>
</template>

<script>
import { getTextColor, getBackgroundColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'TableCell',
  components: {
  },
  props: {
    text: { default: '', type: String },
    text_color: { default: '', type: String },
    background_color: { default: '', type: String },
    transparent: { default: false, type: Boolean },
  },
  data: () => ({
  }),
  computed: {
    text_color_class () {
      var foreground = false
      var color = this.text_color
      if(color.includes('-fg')) {
        foreground = true
        color = color.split('-')[0]
      }
      return getTextColor(color, foreground)
    },
    background_color_class () {
      var light = false
      var color = this.background_color
      if(color.includes('-lt')) {
        light = true
        color = color.split('-')[0]
      }
      return getBackgroundColor(color, light)
    },
  },
  methods: {
  }
}
</script>