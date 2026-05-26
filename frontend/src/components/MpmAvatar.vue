<script setup>
defineProps({
  initials: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    // Options: 'sm', 'md'
  },
  bgColorClass: {
    type: String,
    default: 'bg-cyan-500' // Default to our primary cyan
  },
  textColorClass: {
    type: String,
    default: 'text-slate-900' // High contrast text
  }
})
</script>

<template>
  <div :class="[`mpm-avatar-${size}`, bgColorClass, textColorClass]">
    {{ initials }}
  </div>
</template>