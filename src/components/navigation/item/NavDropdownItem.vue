<template>
  <div :class="[ { 'dropend': dropdown_enabled } ]" 
       @focusout="dropdown_close"
  >
    <a class="dropdown-item" 
       :class="[ { 'active': active }, { 'active': dropdown_open }, { 'disabled': disabled }, 
                 { 'dropdown-toggle': dropdown_enabled }, { 'show': dropdown_open }, getTextColor() ]" 
       @click="click" 
       :title="tooltip"
       role="button"
    >
      <template v-if="icon">
        <TablerIcon v-if="icon" :icon="icon" :color="icon_color" />&nbsp;
      </template>
      {{title}}
      <slot name="badge"></slot>
    </a>
    <div v-if="dropdown_enabled"
         class="dropdown-menu"
         :class="[ { 'show': dropdown_open } ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import TablerIcon from '@/components/icon/TablerIcon.vue'
import { getTextColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'DropdownItem',
  components: {
    TablerIcon,
  },
  props: {
    title: { default: '', type: String },
    text_color: { default: '', type: String },
    tooltip: { default: '', type: String },
    active: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    href: { default: '', type: String },
    target: { default: '_self', type: String },
    auto_close: { default: true, type: Boolean },
    icon: { default: '', type: String },
    icon_color: { default: '', type: String },
  },
  data: () => ({
    dropdown_open: false
  }),
  computed: {
    dropdown_enabled () {
      return this.$slots.default !== undefined
    }
  },
  methods: {
    getTextColor () {
      return getTextColor(this.text_color)
    },
    click (e) {
      console.log('CLICKED')
      if (this.dropdown_enabled) {
        this.dropdown_open = !this.dropdown_open
      } else if (this.href.value === '') {
        e.preventDefault()
        this.$emit('click')
      } else {
        window.open(this.href, this.target, 'noreferrer')
      }
    },
    dropdown_close (e) {
      if (!e.currentTarget.contains(event.relatedTarget) && this.auto_close) {
        this.dropdown_open = false
      }
    }
  }
}
</script>