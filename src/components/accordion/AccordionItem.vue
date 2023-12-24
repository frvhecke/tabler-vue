<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" :aria-expanded="collapsed">
        {{ title }}
      </button>
    </h2>
    <div id="collapse-1" class="accordion-collapse collapse" :class="[ { 'show' : !collapsed } ]">
      <div class="accordion-body pt-0">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionItem',
  components: {
  },
  props: {
    title: { default: '', type: String },
  },
  data: () => ({
    collapsed: false
  }),
  computed: {
  },
  methods: {
  }
}
</script>