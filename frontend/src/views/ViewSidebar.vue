<script setup>
import { ref, useAttrs } from 'vue'

const attrs = useAttrs()

// Sidebar collapse states
const isCollapsed = ref(false)
const isMobileOpen = ref(false)

// Dummy projects matching your dynamic route parameter structure: /projects/:id
const projects = ref([
  { id: '1', name: 'TaskFlow MVP v1.0', code: 'MVP v1.0', accentColor: 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]' },
  { id: '2', name: 'Marketing Site Redesign', code: 'Marketing', accentColor: 'bg-slate-500' },
  { id: '3', name: 'FastAPI Core Upgrade', code: 'Core API', accentColor: 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]' }
])

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<template>
  <div 
    v-if="isMobileOpen" 
    @click="isMobileOpen = false"
    class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 md:hidden"
  ></div>

  <aside 
    v-bind="attrs"
    :class="[
      'bg-white/5 border-r border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between shrink-0 transition-all duration-300 z-50 h-full',
      'absolute md:relative', 
      isCollapsed ? 'w-20' : 'w-64',
      isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    ]"
  >
    <div class="flex-1 overflow-hidden flex flex-col">
      
      <div class="p-6 h-24 flex items-center shrink-0 border-b border-white/10">
        <div class="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span class="text-cyan-400 text-2xl">❖</span>
          <div 
            class="transition-opacity duration-300"
            :class="isCollapsed ? 'opacity-0 w-0' : 'opacity-100'"
          >
            <h1 class="text-xl font-bold text-white tracking-wider leading-tight">MPM</h1>
            <p class="text-[9px] uppercase tracking-[0.2em] text-slate-400">AnsariCodes</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 mpm-scrollbar">
        
        <div class="space-y-2">
          <router-link 
            to="/" 
            exact-active-class="!bg-cyan-500/10 !border-cyan-400 !text-white"
            class="flex items-center px-3 py-3 border-l-4 border-transparent text-slate-400 hover:text-white font-medium transition-all group hover:bg-white/5 rounded-r-lg"
          >
            <svg class="w-5 h-5 shrink-0 text-inherit group-hover:text-cyan-400 transition-colors" :class="{ 'text-cyan-400': $route.path === '/' }" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6m-3-3v6"></path></svg>
            <span 
              class="ml-3 whitespace-nowrap transition-opacity duration-300"
              :class="isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'"
            >
              Dashboard
            </span>
          </router-link>
        </div>

        <div>
          <div 
            class="flex items-center px-3 mb-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-opacity duration-300"
            :class="isCollapsed ? 'opacity-0 hidden' : 'opacity-100'"
          >
            Active Projects
          </div>
          
          <div class="space-y-1">
            <router-link 
              v-for="project in projects" 
              :key="project.id"
              :to="`/projects/${project.id}`"
              active-class="!bg-white/5 !text-white !border-cyan-400"
              class="flex items-center px-3 py-2.5 text-slate-400 hover:bg-white/5 hover:text-white border-l-4 border-transparent transition-all rounded-r-lg group" 
              :title="project.name"
            >
              <span :class="['w-2 h-2 shrink-0 rounded-none mx-1.5 group-hover:scale-125 transition-transform', project.accentColor]"></span>
              <span 
                class="ml-4 text-sm whitespace-nowrap transition-opacity duration-300"
                :class="isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'"
              >
                {{ project.code }}
              </span>
            </router-link>
          </div>
        </div>
      </nav>
    </div>

    <div class="shrink-0 border-t border-white/10 bg-black/20">
      
      <div class="p-4">
        <router-link 
          to="/settings" 
          active-class="!bg-white/5 !text-white"
          class="flex items-center px-3 py-3 text-slate-400 hover:bg-white/5 hover:text-white transition-all rounded-lg group"
        >
          <svg class="w-5 h-5 shrink-0 group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span 
            class="ml-3 whitespace-nowrap transition-opacity duration-300"
            :class="isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'"
          >
            System Settings
          </span>
        </router-link>
      </div>

      <button 
        @click="toggleCollapse"
        class="hidden md:flex w-full items-center justify-center py-4 border-t border-white/5 text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
      >
        <svg 
          class="w-5 h-5 transition-transform duration-300" 
          :class="isCollapsed ? 'rotate-180' : ''"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path>
        </svg>
      </button>

    </div>
  </aside>
</template>

<style scoped>
.mpm-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.mpm-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.mpm-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}
.mpm-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>