<script setup>
import ViewContent from '@/views/ViewContent.vue'
import MpmButton from '@/components/MpmButton.vue'
import MpmCard from '@/components/MpmCard.vue'
</script>

<template>
  <ViewContent>
    <template #header>
      <div>
        <h1 class="mpm-heading-1">System Overview</h1>
        <p class="mpm-subtext mt-1">Global workspace telemetry</p>
      </div>
      <MpmButton variant="primary">Export Data</MpmButton>
    </template>

    <div class="grid grid-cols-3 gap-6">
      <MpmCard>
        <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Active Workspaces</h3>
        <p class="text-5xl font-light text-white mt-4">8</p>
      </MpmCard>
      
      <MpmCard>
        <h3 class="text-xs font-semibold text-slate-400 uppercase tracking-widest">Pending Tasks</h3>
        <p class="text-5xl font-light text-white mt-4">34</p>
      </MpmCard>
      
      <MpmCard class="!border-red-500/20 !bg-red-500/10">
        <h3 class="text-xs font-semibold text-red-400 uppercase tracking-widest">Critical Overdue</h3>
        <p class="text-5xl font-light text-red-500 mt-4">3</p>
      </MpmCard>
    </div>
  </ViewContent>
</template>