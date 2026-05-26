<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ViewContent from '@/views/ViewContent.vue'

const route = useRoute()
const projectId = computed(() => route.params.id)

</script>

<template>
  <ViewContent>
    <template #header>
      <div>
        <h1 class="mpm-heading-1">Project Active Workspace</h1>
        <p class="mpm-subtext mt-1">System Target ID: #MPM-00{{ projectId }}</p>
      </div>
    </template>

    <div class="bg-white/5 p-6 border border-white/10">
      <p class="text-sm text-slate-300">
        This panel is completely dynamic. You are currently viewing workspace telemetry isolated for project ID: 
        <strong class="text-cyan-400 font-mono font-bold">{{ projectId }}</strong>.
      </p>
    </div>
  </ViewContent>
</template>