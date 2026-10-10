<script setup>
import { QrCode, ShoppingCart, ScanLine } from '@lucide/vue'

defineProps({
  variant: { type: String, default: 'pos' },
})

const endpoints = [
  { method: 'POST', path: '/api/v1/auth/login', color: 'bg-sky-500' },
  { method: 'GET', path: '/api/v1/projects', color: 'bg-emerald-500' },
  { method: 'GET', path: '/api/v1/tasks', color: 'bg-emerald-500' },
  { method: 'POST', path: '/api/v1/tasks', color: 'bg-sky-500' },
  { method: 'DELETE', path: '/api/v1/tasks/{id}', color: 'bg-rose-500' },
]
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-slate-200/70 dark:border-white/10">
    <!-- Browser chrome -->
    <div class="flex items-center gap-1.5 border-b border-slate-200/70 bg-slate-100/70 px-3 py-2 dark:border-white/10 dark:bg-white/5">
      <span class="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
      <span class="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
      <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
      <span class="ml-2 truncate rounded-md bg-white/70 px-2 py-0.5 font-mono text-[10px] text-slate-500 dark:bg-black/20 dark:text-slate-400">
        {{ variant === 'pos' ? 'shopao.app/admin/pos' : 'ikus-api.onrender.com/swagger-ui' }}
      </span>
    </div>

    <!-- POS variant -->
    <div v-if="variant === 'pos'" class="grid grid-cols-5 gap-3 bg-gradient-to-br from-slate-50 to-slate-100 p-3.5 dark:from-ink-850 dark:to-ink-900">
      <div class="col-span-3 space-y-2">
        <div class="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 shadow-sm dark:bg-white/5">
          <ScanLine :size="15" class="text-brand-400" />
          <span class="text-[11px] text-slate-500 dark:text-slate-400">Quét mã QR / Barcode…</span>
        </div>
        <div v-for="n in 3" :key="n" class="flex items-center gap-2.5 rounded-lg bg-white p-2 shadow-sm dark:bg-white/5">
          <div class="h-8 w-8 rounded-md bg-gradient-to-br from-brand-400/50 to-fuchsia-400/50" />
          <div class="flex-1 space-y-1">
            <div class="h-2 w-2/3 rounded bg-slate-300 dark:bg-white/15" />
            <div class="h-2 w-1/3 rounded bg-slate-200 dark:bg-white/10" />
          </div>
          <span class="font-mono text-[10px] text-emerald-500">x{{ n }}</span>
        </div>
      </div>
      <div class="col-span-2 rounded-lg bg-white p-2.5 shadow-sm dark:bg-white/5">
        <div class="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
          <ShoppingCart :size="13" class="text-brand-400" /> Giỏ hàng
        </div>
        <div class="mt-2 grid place-items-center rounded-lg border border-dashed border-brand-400/40 bg-brand-500/5 p-2">
          <QrCode :size="34" class="text-brand-400" />
          <span class="mt-1 font-mono text-[9px] text-brand-300">QR POS</span>
        </div>
        <div class="mt-2 space-y-1.5">
          <div class="h-1.5 w-full rounded bg-slate-200 dark:bg-white/10" />
          <div class="h-1.5 w-4/5 rounded bg-slate-200 dark:bg-white/10" />
        </div>
        <div class="mt-2 rounded-md bg-gradient-to-r from-brand-500 to-fuchsia-500 py-1.5 text-center text-[10px] font-semibold text-white">
          Thanh toán
        </div>
      </div>
    </div>

    <!-- Swagger variant -->
    <div v-else class="bg-white p-3.5 dark:bg-ink-850">
      <div class="mb-2 flex items-center justify-between">
        <span class="font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-200">IKUS Task API v1</span>
        <span class="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[9px] text-emerald-500">OAS 3.0</span>
      </div>
      <ul class="space-y-1.5">
        <li
          v-for="ep in endpoints"
          :key="ep.path + ep.method"
          class="flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-white/10 dark:bg-white/5"
        >
          <span class="w-14 rounded px-1.5 py-0.5 text-center text-[9px] font-bold text-white" :class="ep.color">
            {{ ep.method }}
          </span>
          <span class="truncate font-mono text-[10px] text-slate-600 dark:text-slate-300">{{ ep.path }}</span>
          <span class="ml-auto rounded border border-brand-400/50 px-1.5 py-0.5 text-[9px] text-brand-400">Authorize</span>
        </li>
      </ul>
    </div>
  </div>
</template>
