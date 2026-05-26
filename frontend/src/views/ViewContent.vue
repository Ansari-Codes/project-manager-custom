<template>
  <div class="flex flex-col h-full w-full relative z-10">
    
    <header 
      v-if="$slots.header" 
      class="px-8 py-6 border-b border-white/10 bg-black/20 backdrop-blur-md flex justify-between items-center shrink-0"
    >
      <slot name="header"></slot>
    </header>

    <main class="flex-1 overflow-y-auto p-8 mpm-scrollbar">
      <div class="max-w-7xl mx-auto space-y-8 pb-12">
        <slot></slot>
      </div>
    </main>
    
  </div>
</template>

<style scoped>
/* Scoped scrollbar for the main content area */
.mpm-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
.mpm-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.mpm-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
}
.mpm-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>