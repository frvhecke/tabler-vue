<template>
  <div :class="[ class_col, class_col_sm, class_col_md, class_col_lg, class_col_xl, class_col_xxl, class_col_sm_auto, class_col_md_auto, class_col_lg_auto, class_col_xl_auto, class_col_xxl_auto, class_col_x, class_col_sm_x, class_col_md_x, class_col_lg_x, class_col_xl_x, class_col_xxl_x, class_mb, class_py, getBackgroundColor() ]">
    <slot></slot>
  </div>
</template>

<script>
import { getBackgroundColor } from '@/services/color/ColorUtils.js'

export default {
  name: 'GridColumn',
  props: {
    col_sm: { default: false, type: Boolean },
    col_md: { default: false, type: Boolean },
    col_lg: { default: false, type: Boolean },
    col_xl: { default: false, type: Boolean },
    col_xxl: { default: false, type: Boolean },
    col_sm_auto: { default: false, type: Boolean },
    col_md_auto: { default: false, type: Boolean },
    col_lg_auto: { default: false, type: Boolean },
    col_xl_auto: { default: false, type: Boolean },
    col_xxl_auto: { default: false, type: Boolean },
    col_x: { default: 0, type: Number },
    col_sm_x: { default: 0, type: Number },
    col_md_x: { default: 0, type: Number },
    col_lg_x: { default: 0, type: Number },
    col_xl_x: { default: 0, type: Number },
    col_xxl_x: { default: 0, type: Number },
    mb: { default: 0, type: Number },
    py: { default: undefined, type: Number },
    bg_color: { default: undefined, type: String }
  },
  computed: {
    class_col () {
      return (!this.col_sm && !this.col_md && !this.col_lg && !this.col_xl && !this.col_xxl && !this.col_sm_auto && !this.col_md_auto && !this.col_lg_auto && !this.col_xl_auto && !this.col_xxl_auto && this.col_x == 0 && this.col_sm_x == 0 && this.col_md_x == 0 && this.col_lg_x == 0 && this.col_xl_x == 0 && this.col_xxl_x == 0) ? 'col' : ''
    },
    class_col_sm () {
      return this.col_sm ? 'col-sm' : ''
    },
    class_col_md () {
      return this.col_md ? 'col-md' : ''
    },
    class_col_lg () {
      return this.col_lg ? 'col-lg' : ''
    },
    class_col_xl () {
      return this.col_xl ? 'col-xl' : ''
    },
    class_col_xxl () {
      return this.col_xxl ? 'col-xxl' : ''
    },
    class_col_sm_auto () {
      return this.col_sm_auto ? 'col-sm-auto' : ''
    },
    class_col_md_auto () {
      return this.col_md_auto ? 'col-md-auto' : ''
    },
    class_col_lg_auto () {
      return this.col_lg_auto ? 'col-lg-auto' : ''
    },
    class_col_xl_auto () {
      return this.col_xl_auto ? 'col-xl-auto' : ''
    },
    class_col_xxl_auto () {
      return this.col_xxl_auto ? 'col-xxl-auto' : ''
    },
    class_col_x () {
      return this.col_x > 0 ? 'col-' + this.col_x : ''
    },
    class_col_sm_x () {
      return this.col_sm_x > 0 ? 'col-sm-' + this.col_sm_x : ''
    },
    class_col_md_x () {
      return this.col_md_x > 0 ? 'col-md-' + this.col_md_x : ''
    },
    class_col_lg_x () {
      return this.col_lg_x > 0 ? 'col-lg-' + this.col_lg_x : ''
    },
    class_col_xl_x () {
      return this.col_xl_x > 0 ? 'col-xl-' + this.col_xl_x : ''
    },
    class_col_xxl_x () {
      return this.col_xxl_x > 0 ? 'col-xxl-' + this.col_xxl_x : ''
    },
    class_mb () {
      return this.mb > 0 ? 'mb-' + this.mb : ''
    },
    class_py () {
      if (this.py === undefined) return ''
      else if (this.py >= 0) return 'py-' + this.py
      else if (this.py < 0) return 'py-n' + Math.abs(this.py)
      else return ''
    }
  },
  methods: {
    getBackgroundColor () {
      return getBackgroundColor(this.bg_color)
    }
  }
}
</script>
