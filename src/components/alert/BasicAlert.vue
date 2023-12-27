<template>
  <div class="alert" :class="[ getColor(), { 'alert-important' : important } ]" role="alert">
    <div class="d-flex">
      <div v-if="icon">
        <TablerIcon :icon="icon" :color="getColor()" class="alert-icon" size="20" />
      </div>
      <div v-if="!description">{{ text }}</div>
      <div v-if="description">
        <h4 class="alert-title">{{ text }}</h4>
        <div class="text-secondary">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import TablerIcon from '@/components/icon/TablerIcon.vue'
import { getAlertColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'BasicAlert',
  components: {
    TablerIcon
  },
  props: {
    text: { default: '', type: String},
    description: { default: '', type: String},
    color: { default: '', type: String},
    icon: { default: '', type: String },
    icon_color: { default: '', type: String },
    important: { default: false, type: Boolean },
  },
  methods: {
    getColor () {
      return getAlertColor(this.color)
    },
  }
}
</script>