<template>
  <a href="#" 
    class="card card-link"
    :class="[ { 'card-link-rotate' : rotate }, { 'card-link-pop' : pop } ]"
  >
    <SimpleCard :title="title" :subtitle="subtitle" :background_color="background_color">
      <template #header>
        <slot name="header"></slot>
      </template>
      <slot></slot>
    </SimpleCard>
  </a>
</template>

<script>
import SimpleCard from '@/components/card/SimpleCard'

export default {
  name: 'HoverCard',
  components: {
    SimpleCard,
  },
  props: {
    title: { default: '', type: String },
    borderless: { default: false, type: Boolean },
    rotate: { default: false, type: Boolean },
    pop: { default: false, type: Boolean },
    background_color: { default: '', type: String },
  }
}
</script>