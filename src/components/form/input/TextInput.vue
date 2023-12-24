<template>
  <input
    type="text"
    :name="name"
    v-model="text"
    class="form-control"
    :class="[ 
      { 'is-valid' : valid },
      { 'is-invalid' : invalid },
      { 'is-valid-lite' : valid && lite},
      { 'is-invalid-lite' : invalid && lite},
      { 'mb-2' : mb2 },
      { 'mb-3' : mb3 } ]"
    :placeholder="placeholder"
    :disabled="disabled" 
    :readonly="readonly"
    @input="update()"
    :aria-describedby="describedby()"
  />
  <small v-if="hint" class="form-hint" :id="describedby()">{{ hint }}</small>
  <div v-if="feedback" class="invalid-feedback">{{ feedback }}</div>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'text', type: String },
    value: { default: '', type: String },
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
    text: ''
  }),
  watch: { 
    value: function() {
      this.text = this.value
    }
  },
  methods: {
    update () {
      this.$emit('input', this.text)
    },
    describedby() {
      if(this.hint) return this.name + '_help'
      else return null
    }
  },
  mounted() {
    this.text = this.value
  }
}
</script>