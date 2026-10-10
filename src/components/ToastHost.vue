<script setup>
import { useToast } from '../composables/useToast'
import { CircleCheck, CircleAlert } from '@lucide/vue'

const { toasts } = useToast()
</script>

<template>
  <div
    class="pointer-events-none fixed inset-x-0 bottom-6 z-[80] flex flex-col items-center gap-2 px-4"
    aria-live="polite"
    aria-atomic="true"
  >
    <TransitionGroup
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-3 opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="translate-y-2 opacity-0"
    >
      <div
        v-for="t in toasts"
        :key="t.id"
        class="pointer-events-auto flex items-center gap-2.5 rounded-xl border px-4 py-2.5 text-sm font-medium shadow-2xl backdrop-blur-xl"
        :class="
          t.type === 'error'
            ? 'border-rose-400/30 bg-rose-500/15 text-rose-100'
            : 'border-emerald-400/30 bg-emerald-500/15 text-emerald-50'
        "
      >
        <CircleAlert v-if="t.type === 'error'" :size="17" />
        <CircleCheck v-else :size="17" />
        <span>{{ t.message }}</span>
      </div>
    </TransitionGroup>
  </div>
</template>
