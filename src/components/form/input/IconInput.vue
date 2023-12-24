<template>
  <div class="input-icon">
    <span v-if="left" class="input-icon-addon">
      <TablerIcon v-if="icon" :icon="icon" :color="icon_color"/>
    </span>
    <slot></slot>
    <span v-if="right" class="input-icon-addon">
      <TablerIcon v-if="icon" :icon="icon" :color="icon_color"/>
    </span>
  </div>
</template>

<script>
import TablerIcon from '@/components/icon/TablerIcon.vue'

export default {
  name: 'IconInput',
  components: {
    TablerIcon
  },
  props: {
    left: { default: false, type: Boolean },
    right: { default: false, type: Boolean },
    icon: { default: false, type: Boolean },
    icon_color: { default: '', type: String },
  }
}
</script>