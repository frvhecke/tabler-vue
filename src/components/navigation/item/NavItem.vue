<template>
  <li class="nav-item" 
      :class="[ { 'active': isExactActive }, { 'active': dropdown_open }, { 'dropdown': dropdown_enabled } ]"
      @focusout="dropdown_close"
  >
    <a class="nav-link" 
       @click="click" 
       role="button"
       :title="tooltip"
       :class="[ { 'disabled': disabled }, { 'dropdown-toggle': dropdown_enabled }, { 'show': dropdown_open } ]"
    >
      <span v-if="icon" class="nav-link-icon d-md-none d-lg-inline-block">
        <TablerIcon :icon="icon" :color="icon_color" />
      </span>
      <span class="nav-link-title" :class="[ getTextColor() ]">
        {{ title }}
      </span>
      <slot name="badge"></slot>
    </a>
    <div v-if="dropdown_enabled"
         class="dropdown-menu"
         :class="[ { 'show': dropdown_open } ]"
         data-bs-popper="static"
    >
      <slot></slot>
    </div>
  </li>
</template>

<script>
import TablerIcon from '@/components/icon/TablerIcon.vue'
import { getTextColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'NavItem',
  components: {
    TablerIcon,
  },
  props: {
    title: { default: '', type: String },
    tooltip: { default: '', type: String },
    text_color: { default: '', type: String },
    icon: { default: '', type: String },
    icon_color: { default: '', type: String },
    active: { default: false, type: Boolean },
    disabled: { default: false, type: Boolean },
    href: { default: '', type: String },
    target: { default: '_self', type: String },
    auto_close: { default: true, type: Boolean }
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