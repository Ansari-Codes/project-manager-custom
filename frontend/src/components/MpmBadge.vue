<script setup>
defineProps({
  label: {
    type: String,
    required: true
  },
  variant: {
    type: String,
    default: 'cyan',
    // Options: 'cyan', 'purple', 'yellow', 'slate'
  }
})
</script>

<template>
  <span :class="`mpm-badge-${variant}`">
    {{ label }}
  </span>
</template>