<template>
  <input 
    type="email"
    :name="name"
    :value="modelValue"
    @input="update($event.target.value)"
    class="form-control"
    :class="[ 
      { 'is-valid' : valid },
      { 'is-invalid' : invalid },
      { 'is-valid-lite' : valid && lite},
      { 'is-invalid-lite' : invalid && lite},
      { 'form-control-rounded' : rounded },
      { 'form-control-flush' : flush },
      { 'text-end' : text_end },
      { 'mb-2' : mb2 },
      { 'mb-3' : mb3 },
      { 'ps-0' : ps0 },
      { 'pe-0' : pe0 } ]"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :aria-describedby="describedby()"
  >
  <small v-if="hint" class="form-hint" :id="describedby()">{{ hint }}</small>
  <div v-if="feedback" class="invalid-feedback">{{ feedback }}</div>
</template>

<script>
export default {
  name: 'EmailInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'email', type: String },
    modelValue: { default: '', type: String },
    disabled: { default: false, type: Boolean },
    readonly: { default: false, type: Boolean },
    valid: { default: false, type: Boolean },
    invalid: { default: false, type: Boolean },
    lite: { default: false, type: Boolean },
    rounded: { default: false, type: Boolean },
    flush: { default: false, type: Boolean },
    hint: { default: '', type: String },
    feedback: { default: '', type: String },
    text_end: { default: false, type: Boolean },
    mb2: { default: false, type: Boolean },
    mb3: { default: false, type: Boolean },
    ps0: { default: false, type: Boolean },
    pe0: { default: false, type: Boolean },
  },
  data: () => ({
    email: ''
  }),
  methods: {
    update ($value) {
      this.email = $value
      this.$emit('update:modelValue', this.email)
    },
    describedby() {
      return this.hint ? this.name + '_help' : null
    }
  },
  mounted() {
    this.email = this.modelValue
    this.$emit('update:modelValue', this.email)
  }
}
</script>