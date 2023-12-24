<template>
  <div class="mb-3" :class="[ { 'row' : horizontal } ]">
    <FormLabel v-if="label" :text="label" :required="required" :description="description" :class="[ { 'col-3 col-form-label' : horizontal } ]"/>
    <div :class="[ { 'col' : horizontal } ]"><slot></slot></div>
  </div>
</template>

<script>
import FormLabel from '@/components/form/FormLabel.vue'

export default {
  name: 'FormElement',
  components: {
    FormLabel
  },
  props: {
    label: { default: '', type: String },
    description: { default: '', type: String },
    required: { default: false, type: Boolean },
    horizontal: { default: false, type: Boolean },
  }
}
</script>