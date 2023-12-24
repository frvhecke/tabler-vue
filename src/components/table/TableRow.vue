<template>
  <tr :class="[ text_color_class, background_color_class ]">
    <slot></slot>
  </tr>
</template>

<script>
import { getTextColor, getBackgroundColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'TableRow',
  components: {
  },
  props: {
    text_color: { default: '', type: String },
    background_color: { default: '', type: String },
  },
  data: () => ({
  }),
  computed: {
    text_color_class () {
      return getTextColor(this.text_color)
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