<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label class="flex items-center gap-3 cursor-pointer group">
    <div class="relative flex items-center justify-center w-5 h-5 bg-white/5 border border-white/10 group-hover:border-cyan-400 transition-colors">
      <input 
        type="checkbox" 
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="absolute opacity-0 w-full h-full cursor-pointer"
      />
      <svg v-if="modelValue" class="w-3 h-3 text-cyan-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="3" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <span class="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{{ label }}</span>
  </label>
</template>