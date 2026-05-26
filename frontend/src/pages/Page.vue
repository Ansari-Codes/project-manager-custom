<script setup>
import { ref } from 'vue'

// Import all base UI components (adjust paths based on your final structure)
import MpmButton from '@/components/MpmButton.vue'
import MpmInput from '@/components/MpmInput.vue'
import MpmSelect from '@/components/MpmSelect.vue'
import MpmBadge from '@/components/MpmBadge.vue'
import MpmAvatar from '@/components/MpmAvatar.vue'
import MpmTextarea from '@/components/MpmTextarea.vue'
import MpmCheckbox from '@/components/MpmCheckBox.vue'
import MpmTabs from '@/components/MpmTabs.vue'
import MpmCard from '@/components/MpmCard.vue'
import MpmTable from '@/components/MpmTable.vue'
import MpmDialog from '@/components/MpmDialog.vue'

// --- Component State ---

// Forms
const taskTitle = ref('')
const taskDescription = ref('')
const isHighPriority = ref(true)
const selectedDomain = ref('frontend')
const domainOptions = [
  { label: 'Frontend Architecture', value: 'frontend' },
  { label: 'Backend API', value: 'backend' },
  { label: 'Security Operations', value: 'security' }
]

// Tabs
const activeTab = ref('board')
const workspaceTabs = [
  { id: 'board', label: 'Kanban Board' },
  { id: 'list', label: 'Task List' },
  { id: 'metrics', label: 'Metrics' }
]

// Dialogs
const isDialogOpen = ref(false)
const currentDialogPos = ref('center')

const openDialog = (position) => {
  currentDialogPos.value = position
  isDialogOpen.value = true
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 p-8 relative overflow-y-auto z-0">
    <div class="fixed inset-0 z-[-1] pointer-events-none">
      <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[150px]"></div>
    </div>

    <div class="max-w-7xl mx-auto space-y-10 pb-20">
      
      <header class="border-b border-white/10 pb-6">
        <h1 class="mpm-heading-1"><span class="text-cyan-400">❖</span> MPM Component Showcase</h1>
        <p class="mpm-subtext mt-2 uppercase tracking-widest">AnsariCodes OS // Master UI Kit Reference</p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <MpmCard>
          <template #header>
            <h2 class="text-lg font-light text-white tracking-tight">Form Controls</h2>
          </template>
          
          <div class="space-y-6">
            <MpmInput 
              v-model="taskTitle" 
              label="Task Descriptor" 
              placeholder="e.g. Migrate to PostgreSQL" 
            />
            
            <MpmSelect 
              v-model="selectedDomain" 
              label="System Domain" 
              :options="domainOptions" 
            />
            
            <MpmTextarea 
              v-model="taskDescription" 
              label="Detailed Specifications" 
              placeholder="Provide technical implementation details..." 
              rows="4" 
            />

            <div class="pt-2 border-t border-white/10">
              <MpmCheckbox 
                v-model="isHighPriority" 
                label="Flag as High Priority / Critical Path" 
              />
            </div>
          </div>
        </MpmCard>

        <div class="space-y-8">
          <MpmCard>
            <template #header>
              <h2 class="text-lg font-light text-white tracking-tight">Interactive Primitives</h2>
            </template>
            
            <div class="space-y-6">
              <div>
                <label class="mpm-label">Action Buttons</label>
                <div class="flex flex-wrap gap-4">
                  <MpmButton variant="primary">Initialize</MpmButton>
                  <MpmButton variant="secondary">Save Config</MpmButton>
                  <MpmButton variant="danger">Terminate</MpmButton>
                  <MpmButton variant="ghost">Cancel</MpmButton>
                </div>
              </div>

              <div class="pt-4 border-t border-white/10">
                <label class="mpm-label">Status Badges</label>
                <div class="flex flex-wrap gap-3">
                  <MpmBadge label="Nominal" variant="cyan" />
                  <MpmBadge label="Active" variant="purple" />
                  <MpmBadge label="At Risk" variant="yellow" />
                  <MpmBadge label="Backlog" variant="slate" />
                </div>
              </div>

              <div class="pt-4 border-t border-white/10">
                <label class="mpm-label">Team Avatars</label>
                <div class="flex items-center gap-4">
                  <MpmAvatar initials="A" size="md" bgColorClass="bg-cyan-500" textColorClass="text-slate-900" />
                  <MpmAvatar initials="D" size="sm" bgColorClass="bg-purple-600" textColorClass="text-white" />
                  <MpmAvatar initials="U" size="md" bgColorClass="bg-slate-700" textColorClass="text-white" />
                </div>
              </div>
            </div>
          </MpmCard>

          <MpmCard>
            <template #header>
              <h2 class="text-lg font-light text-white tracking-tight">Modal Operations</h2>
            </template>
            
            <div class="flex flex-wrap gap-4">
              <MpmButton @click="openDialog('center')" variant="primary">Center Modal</MpmButton>
              <MpmButton @click="openDialog('right')" variant="secondary">Slide Right</MpmButton>
              <MpmButton @click="openDialog('left')" variant="secondary">Slide Left</MpmButton>
              <MpmButton @click="openDialog('top')" variant="ghost">Drawer Top</MpmButton>
              <MpmButton @click="openDialog('bottom')" variant="ghost">Drawer Bottom</MpmButton>
            </div>
          </MpmCard>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <h2 class="mpm-heading-2 border-b border-white/10 pb-2">Complex Compositions</h2>
          
          <div class="pt-4">
            <MpmTabs v-model="activeTab" :tabs="workspaceTabs" />
            <div class="p-6 bg-black/20 border-x border-b border-white/10">
              <p class="text-slate-400 text-sm font-mono">Current active view: <span class="text-cyan-400 font-bold uppercase">{{ activeTab }}</span></p>
            </div>
          </div>

          <MpmCard>
            <template #header>
              <div class="flex justify-between items-center w-full">
                <h2 class="text-lg font-light text-white tracking-tight">Workspace Telemetry</h2>
                <MpmButton variant="primary">Export Data</MpmButton>
              </div>
            </template>

            <div class="-mx-6 -my-6">
              <MpmTable>
                <template #head>
                  <th class="p-4 w-32">Identifier</th>
                  <th class="p-4">Task Descriptor</th>
                  <th class="p-4">Domain</th>
                  <th class="p-4">Status</th>
                  <th class="p-4 text-right">Assignee</th>
                </template>
                <template #body>
                  <tr class="hover:bg-white/5 transition-colors group">
                    <td class="p-4 text-slate-500 font-mono text-sm group-hover:text-cyan-400 transition-colors">#MPM-015</td>
                    <td class="p-4 font-medium text-white">Implement JWT Auth Middleware</td>
                    <td class="p-4"><span class="mpm-tag-mono text-cyan-400 mb-0">Security</span></td>
                    <td class="p-4"><MpmBadge label="Active" variant="cyan" /></td>
                    <td class="p-4 flex justify-end"><MpmAvatar initials="A" size="sm" bgColorClass="bg-cyan-500" /></td>
                  </tr>
                  <tr class="hover:bg-white/5 transition-colors group">
                    <td class="p-4 text-slate-500 font-mono text-sm group-hover:text-cyan-400 transition-colors">#MPM-012</td>
                    <td class="p-4 font-medium text-white">PostgreSQL Connection Pooling</td>
                    <td class="p-4"><span class="mpm-tag-mono text-red-400 mb-0">Backend</span></td>
                    <td class="p-4"><MpmBadge label="Backlog" variant="slate" /></td>
                    <td class="p-4 flex justify-end"><MpmAvatar initials="U" size="sm" bgColorClass="bg-slate-700" /></td>
                  </tr>
                </template>
              </MpmTable>
            </div>
          </MpmCard>

        </div>
      </div>
    </div>

    <MpmDialog 
      :isOpen="isDialogOpen" 
      :position="currentDialogPos"
      @close="isDialogOpen = false"
    >
      <template #title>
        System Override Sequence
      </template>
      <template #subtitle>
        Action required for layout {{ currentDialogPos }}
      </template>
      
      <div class="space-y-4">
        <p class="text-slate-300 text-sm">
          You have summoned the dialog from the <strong class="text-cyan-400 uppercase">{{ currentDialogPos }}</strong> direction. 
          This component adapts its internal layout and transition animations dynamically based on the passed parameters.
        </p>
        
        <MpmInput 
          v-model="taskTitle" 
          label="Verification Phrase" 
          placeholder="Enter override code..." 
        />
        
        <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-none mt-4">
          <p class="text-xs text-red-400 font-mono">WARNING: Unauthorized access will be logged.</p>
        </div>
      </div>

      <template #footer>
        <MpmButton @click="isDialogOpen = false" variant="ghost">Abort</MpmButton>
        <MpmButton @click="isDialogOpen = false" variant="primary">Confirm Operation</MpmButton>
      </template>
    </MpmDialog>

  </div>
</template>