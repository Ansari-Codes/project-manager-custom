<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true,
    // Expected format: [{ label: 'Frontend', value: 'frontend' }, ...]
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="mpm-label">{{ label }}</label>
    <select 
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="mpm-select"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>