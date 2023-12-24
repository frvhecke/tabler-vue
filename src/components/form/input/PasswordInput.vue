<template>
  <input 
    type="password"
    :name="name"
    v-model="password"
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
  >
  <small v-if="hint" class="form-hint" :id="describedby()">{{ hint }}</small>
  <div v-if="feedback" class="invalid-feedback">{{ feedback }}</div>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'password', type: String },
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
    password: ''
  }),
  methods: {
    update () {
      this.$emit('input', this.password)
    },
    describedby() {
      if(this.hint) return this.name + '_help'
      else return null
    }
  },
  mounted() {
    this.password = this.value
  }
}
</script>