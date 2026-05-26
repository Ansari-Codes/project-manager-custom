<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  position: {
    type: String,
    default: 'center',
    // Options: 'center', 'right', 'left', 'top', 'bottom'
  }
})

const emit = defineEmits(['close'])

// --- Drag & Resize Logic ---
const dialogRef = ref(null)
const isDragging = ref(false)
const dynamicStyle = ref({})

let startX = 0
let startY = 0
let startSize = 0

// Reset the dimensions to defaults whenever the dialog opens or position changes
watch(
  () => [props.isOpen, props.position],
  ([newOpen, newPos]) => {
    if (newOpen && newPos !== 'center') {
      dynamicStyle.value = ['left', 'right'].includes(newPos) 
        ? { width: '50vw' } 
        : { height: '50vh' }
    } else if (newPos === 'center') {
      dynamicStyle.value = {}
    }
  },
  { immediate: true }
)

const startDrag = (e) => {
  isDragging.value = true
  startX = e.clientX
  startY = e.clientY

  if (!dialogRef.value) return
  const rect = dialogRef.value.getBoundingClientRect()
  startSize = ['left', 'right'].includes(props.position) ? rect.width : rect.height

  window.addEventListener('mousemove', onDrag)
  window.addEventListener('mouseup', stopDrag)
  
  // Disable text selection globally while dragging for a smooth experience
  document.body.style.userSelect = 'none'
}

const onDrag = (e) => {
  if (!isDragging.value) return

  let newSize = startSize

  // Calculate new dimensions based on mouse delta and panel position
  if (props.position === 'right') {
    newSize = startSize + (startX - e.clientX)
  } else if (props.position === 'left') {
    newSize = startSize + (e.clientX - startX)
  } else if (props.position === 'bottom') {
    newSize = startSize + (startY - e.clientY)
  } else if (props.position === 'top') {
    newSize = startSize + (e.clientY - startY)
  }

  // Enforce min/max constraints to prevent breaking the UI
  if (['left', 'right'].includes(props.position)) {
    newSize = Math.max(300, Math.min(newSize, window.innerWidth * 0.9))
    dynamicStyle.value = { width: `${newSize}px` }
  } else {
    newSize = Math.max(200, Math.min(newSize, window.innerHeight * 0.9))
    dynamicStyle.value = { height: `${newSize}px` }
  }
}

const stopDrag = () => {
  isDragging.value = false
  window.removeEventListener('mousemove', onDrag)
  window.removeEventListener('mouseup', stopDrag)
  document.body.style.userSelect = ''
}

// Cleanup event listeners if component unmounts mid-drag
onBeforeUnmount(stopDrag)

// --- Structural Classes ---
const dialogClasses = computed(() => {
  // We remove transition animations here so resizing follows the mouse instantly without lag.
  // Vue's <Transition> component handles the enter/leave animations automatically.
  const base = "fixed bg-slate-900/95 backdrop-blur-xl border-white/10 shadow-2xl flex flex-col"
  
  switch (props.position) {
    case 'right': return `${base} inset-y-0 right-0 border-l`
    case 'left': return `${base} inset-y-0 left-0 border-r`
    case 'top': return `${base} top-0 inset-x-0 border-b`
    case 'bottom': return `${base} bottom-0 inset-x-0 border-t`
    case 'center':
    default:
      return `${base} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] border rounded-lg`
  }
})

// Transition names map to standard Vue <Transition> CSS
const transitionName = computed(() => {
  if (props.position === 'center') return 'fade-scale'
  return `slide-${props.position}`
})
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        @click="emit('close')" 
        class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
      ></div>
    </Transition>

    <Transition :name="transitionName">
      <div 
        v-if="isOpen" 
        ref="dialogRef"
        :class="dialogClasses" 
        :style="dynamicStyle"
        class="z-[101]"
      >
        
        <div
          v-if="position !== 'center'"
          @mousedown.prevent="startDrag"
          :class="[
            'absolute z-50 bg-transparent hover:bg-cyan-500/50 transition-colors',
            // Position the invisible handle specifically on the active edge
            position === 'right' ? 'left-0 top-0 bottom-0 w-2 cursor-col-resize -ml-1' : '',
            position === 'left' ? 'right-0 top-0 bottom-0 w-2 cursor-col-resize -mr-1' : '',
            position === 'top' ? 'bottom-0 left-0 right-0 h-2 cursor-row-resize -mb-1' : '',
            position === 'bottom' ? 'top-0 left-0 right-0 h-2 cursor-row-resize -mt-1' : ''
          ]"
        ></div>

        <header class="p-6 border-b border-white/10 bg-white/5 flex justify-between items-start shrink-0">
          <div>
            <h2 class="text-xl font-light text-white tracking-tight">
              <slot name="title">Dialog Title</slot>
            </h2>
            <p v-if="$slots.subtitle" class="text-xs font-mono text-cyan-400 mt-1 uppercase tracking-widest">
              <slot name="subtitle"></slot>
            </p>
          </div>
          <button @click="emit('close')" class="text-slate-400 hover:text-white text-2xl leading-none">&times;</button>
        </header>

        <div class="p-6 overflow-y-auto flex-1 bg-black/40">
          <slot></slot>
        </div>

        <footer v-if="$slots.footer" class="p-6 border-t border-white/10 bg-white/5 shrink-0 flex justify-end gap-3">
          <slot name="footer"></slot>
        </footer>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Fade/Scale for Center */
.fade-scale-enter-active, .fade-scale-leave-active { transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-scale-enter-from, .fade-scale-leave-to { opacity: 0; transform: translate(-50%, -50%) scale(0.96); }

/* Slide Right */
.slide-right-enter-active, .slide-right-leave-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-right-enter-from, .slide-right-leave-to { transform: translateX(100%); }

/* Slide Left */
.slide-left-enter-active, .slide-left-leave-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-left-enter-from, .slide-left-leave-to { transform: translateX(-100%); }

/* Slide Top */
.slide-top-enter-active, .slide-top-leave-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-top-enter-from, .slide-top-leave-to { transform: translateY(-100%); }

/* Slide Bottom */
.slide-bottom-enter-active, .slide-bottom-leave-active { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
.slide-bottom-enter-from, .slide-bottom-leave-to { transform: translateY(100%); }

/* Simple Fade for Backdrop */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>