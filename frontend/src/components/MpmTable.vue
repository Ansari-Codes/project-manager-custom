<template>
  <div class="bg-black/20 border border-white/10 backdrop-blur-sm overflow-x-auto">
    <table class="w-full text-left border-collapse min-w-max">
      <thead>
        <tr class="bg-white/5 text-xs text-slate-400 uppercase tracking-widest border-b border-white/10">
          <slot name="head"></slot>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <slot name="body"></slot>
      </tbody>
    </table>
  </div>
</template>