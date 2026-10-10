<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' },
})
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <span
      class="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 font-mono text-xs font-medium tracking-wide text-brand-300 uppercase"
    >
      <span class="h-1.5 w-1.5 rounded-full bg-brand-400" />
      {{ eyebrow }}
    </span>
    <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-3 text-base leading-relaxed text-slate-500 dark:text-slate-400">
      {{ description }}
    </p>
  </div>
</template>
