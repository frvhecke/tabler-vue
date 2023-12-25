<template>
  <textarea
    :name="name"
    :value="modelValue"
    @input="update($event.target.value)"
    :rows="rows"
    class="form-control"
    :class="[ 
      { 'mb-2' : mb2 },
      { 'mb-3' : mb3 } ]"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
  />
  <small v-if="hint" class="form-hint" :id="describedby()">{{ hint }}</small>
  <div v-if="feedback" class="invalid-feedback">{{ feedback }}</div>
</template>

<script>
export default {
  name: 'TextareaInput',
  props: {
    placeholder: { default: '', type: String },
    name: { default: 'text', type: String },
    modelValue: { default: '', type: String },
    rows: { default: 5, type: Number },
    disabled: { default: false, type: Boolean },
    readonly: { default: false, type: Boolean },
    hint: { default: '', type: String },
    feedback: { default: '', type: String },
    mb2: { default: false, type: Boolean },
    mb3: { default: false, type: Boolean },
  },
  data: () => ({
    text: ''
  }),
  methods: {
    update ($value) {
      this.text = $value
      this.$emit('update:modelValue', this.text)
    },
    describedby() {
      if(this.hint) return this.name + '_help'
      else return null
    }
  },
  mounted() {
    this.text = this.modelValue
    this.$emit('update:modelValue', this.text)
  }
}
</script>