<template>
  <div 
    class="card-header"
    :class="[ { 'card-header-light' : light }, { 'text-center' : center }, { 'd-block' : center }, getColor() ]"
  >
    <h3 v-if="title" class="card-title">
      {{title}}
      <span v-if="subtitle" class="card-subtitle">
        {{subtitle}}
      </span>
    </h3>
    <slot></slot>
  </div>
</template>

<script>
import { getTextColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'CardHeader',
  props: {
    title: { default: '', type: String },
    subtitle: { default: '', type: String },
    light: { default: false, type: Boolean },
    center: { default: false, type: Boolean },
    color: { default: '', type: String }
  },
  methods: {
    getColor () {
      return getTextColor(this.color)
    }
  }
}
</script>