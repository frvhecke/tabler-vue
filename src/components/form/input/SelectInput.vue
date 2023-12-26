<template>
  <select class="form-select" @input="update($event.target.value)">
    <option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :selected="selected(item.value)"
    >
      {{ item.text }}
    </option>
  </select>
  <small v-if="hint" class="form-hint" :id="describedby()">{{ hint }}</small>
  <div v-if="feedback" class="invalid-feedback">{{ feedback }}</div>
</template>

<script>
export default {
  name: 'SelectInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'text', type: String },
    options: { default() { return {} }, type: Object },
    modelValue: { default: '', type: String },
    disabled: { default: false, type: Boolean },
    readonly: { default: false, type: Boolean },
    valid: { default: false, type: Boolean },
    invalid: { default: false, type: Boolean },
    lite: { default: false, type: Boolean },
    hint: { default: '', type: String },
    feedback: { default: '', type: String },
    mb2: { default: false, type: Boolean },
    mb3: { default: false, type: Boolean },
  },
  data: () => ({
    value: ''
  }),
  methods: {
    update ($value) {
      this.value = $value
      this.$emit('update:modelValue', this.value)
    },
    describedby() {
      return this.hint ? this.name + '_help' : null
    },
    selected ($value) {
      return this.value === $value ? true : null
    }
  },
  mounted() {
    this.value = this.modelValue
    this.$emit('update:modelValue', this.value)
  }
}
</script>