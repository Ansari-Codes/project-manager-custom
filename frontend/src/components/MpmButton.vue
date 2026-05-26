<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button :type="type" :class="`mpm-btn-${variant}`">
    <slot></slot>
  </button>
</template>
