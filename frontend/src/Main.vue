<script setup>
import ViewSidebar from '@/views/ViewSidebar.vue'
</script>

<template>
  <div class="flex h-screen w-full bg-slate-950 text-slate-200 overflow-hidden relative">
    
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/30 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-600/20 rounded-full blur-[150px]"></div>
    </div>

    <ViewSidebar class="z-20" />

    <div class="flex-1 h-full overflow-hidden relative z-10 bg-slate-950/40 backdrop-blur-xl">
      
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      
    </div>
  </div>
</template>

<style scoped>
/* Smooth page transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>