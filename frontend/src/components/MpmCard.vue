<template>
  <div class="mpm-glass-panel flex flex-col">
    <header v-if="$slots.header" class="p-6 border-b border-white/10 bg-white/5">
      <slot name="header"></slot>
    </header>
    
    <div class="p-6 flex-1">
      <slot></slot>
    </div>

    <footer v-if="$slots.footer" class="p-6 border-t border-white/10 bg-black/40">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>