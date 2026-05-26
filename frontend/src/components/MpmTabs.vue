<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  tabs: {
    type: Array,
    required: true,
    // Format: [{ id: 'board', label: 'Board' }, { id: 'list', label: 'List' }]
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex space-x-1 border-b border-white/10 bg-black/20 px-6">
    <button 
      v-for="tab in tabs" 
      :key="tab.id"
      @click="$emit('update:modelValue', tab.id)"
      :class="modelValue === tab.id ? 'mpm-sub-tab-active' : 'mpm-sub-tab'"
    >
      {{ tab.label }}
    </button>
  </div>
</template>