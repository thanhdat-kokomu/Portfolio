<script setup>
import { onMounted, ref } from 'vue'

const ready = ref(false)
onMounted(() => {
  ready.value = true
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div
      class="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-brand-600/25 blur-[120px] transition-opacity duration-1000"
      :class="ready ? 'opacity-100' : 'opacity-0'"
    />
    <div
      class="animate-float absolute top-1/4 -right-40 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/20 blur-[130px]"
    />
    <div
      class="animate-pulse-slow absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-indigo-500/15 blur-[130px]"
    />
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(128,57,255,0.14),transparent_60%)]"
    />
    <div
      class="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
    />
  </div>
</template>
