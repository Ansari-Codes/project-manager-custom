<script setup>
import ViewContent from '@/views/ViewContent.vue'
import MpmButton from '@/components/MpmButton.vue'
import MpmInput from '@/components/MpmInput.vue'
import MpmCard from '@/components/MpmCard.vue'
</script>

<template>
  <ViewContent>
    <template #header>
      <div>
        <h1 class="mpm-heading-1">System Settings</h1>
        <p class="mpm-subtext mt-1">Configure global workspace parameters</p>
      </div>
      <MpmButton variant="primary">Save Changes</MpmButton>
    </template>

    <div class="max-w-3xl space-y-6">
      <MpmCard>
        <template #header>
          <h2 class="text-lg font-light text-white">Profile Configuration</h2>
        </template>
        
        <div class="space-y-4">
          <MpmInput label="Admin Name" placeholder="Enter your name" />
          <MpmInput label="Email Address" placeholder="admin@ansaricodes.com" type="email" />
        </div>
      </MpmCard>

      <MpmCard class="!border-red-500/20 !bg-red-500/10">
        <h3 class="text-lg font-medium text-red-400 mb-2">Danger Zone</h3>
        <p class="text-sm text-slate-400 mb-4">Wipe all workspace telemetry and tasks.</p>
        <MpmButton variant="danger">Factory Reset System</MpmButton>
      </MpmCard>
    </div>
  </ViewContent>
</template>