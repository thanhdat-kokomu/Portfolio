<script setup>
import { computed, ref } from 'vue'
import { Play, Loader2, Copy, Check, RotateCcw } from '@lucide/vue'
import { apiEndpoints } from '../data/portfolio'
import { copyToClipboard } from '../composables/useClipboard'

const selected = ref(apiEndpoints[0])
const state = ref('idle') // idle | loading | done
const shown = ref(null)
const latency = ref(0)
let timer = null

const baseUrl = 'https://ikus-task-api.onrender.com'

const methodColor = (m) =>
  ({
    GET: 'bg-emerald-500/15 text-emerald-500',
    POST: 'bg-sky-500/15 text-sky-500',
    DELETE: 'bg-rose-500/15 text-rose-500',
    PUT: 'bg-amber-500/15 text-amber-500',
  })[m] || 'bg-slate-500/15 text-slate-400'

const jsonText = computed(() => (shown.value ? JSON.stringify(shown.value, null, 2) : ''))

function escapeHtml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

const highlighted = computed(() => {
  if (!jsonText.value) return ''
  return escapeHtml(jsonText.value).replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      let cls = 'tok-num'
      if (/^"/.test(match)) cls = /:$/.test(match) ? 'tok-key' : 'tok-str'
      else if (/true|false/.test(match)) cls = 'tok-bool'
      else if (/null/.test(match)) cls = 'tok-null'
      return `<span class="${cls}">${match}</span>`
    },
  )
})

function send() {
  state.value = 'loading'
  shown.value = null
  window.clearTimeout(timer)
  const jitter = Math.round(selected.value.latency + Math.random() * 24)
  timer = window.setTimeout(() => {
    shown.value = selected.value.response
    latency.value = jitter
    state.value = 'done'
  }, Math.max(420, selected.value.latency * 6))
}

function pick(ep) {
  selected.value = ep
  state.value = 'idle'
  shown.value = null
}

function reset() {
  state.value = 'idle'
  shown.value = null
}
</script>

<template>
  <div class="glass overflow-hidden rounded-3xl shadow-2xl shadow-brand-950/30">
    <div class="flex flex-wrap items-center gap-3 border-b border-slate-200/70 px-5 py-4 dark:border-white/10">
      <div class="flex items-center gap-2">
        <span class="h-3 w-3 rounded-full bg-rose-400/90" />
        <span class="h-3 w-3 rounded-full bg-amber-400/90" />
        <span class="h-3 w-3 rounded-full bg-emerald-400/90" />
      </div>
      <h3 class="font-mono text-sm font-semibold text-slate-700 dark:text-slate-200">
        Live API Playground
      </h3>
      <span class="rounded-full border border-brand-400/30 bg-brand-500/10 px-2.5 py-0.5 font-mono text-[11px] text-brand-300">
        mô phỏng
      </span>
      <div class="ml-auto flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span class="font-mono">{{ baseUrl }}</span>
        <button
          type="button"
          class="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 transition hover:text-brand-300 dark:border-white/10"
          aria-label="Reset"
          @click="reset"
        >
          <RotateCcw :size="14" />
        </button>
      </div>
    </div>

    <div class="grid lg:grid-cols-[260px_1fr]">
      <!-- Endpoint list -->
      <div class="min-w-0 border-b border-slate-200/70 p-3 lg:border-r lg:border-b-0 dark:border-white/10">
        <p class="px-2 py-1.5 text-[11px] font-semibold tracking-wide text-slate-400 uppercase">Endpoints</p>
        <ul class="space-y-1">
          <li v-for="ep in apiEndpoints" :key="ep.id">
            <button
              type="button"
              class="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left transition"
              :class="
                selected.id === ep.id
                  ? 'bg-brand-500/15 text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:bg-slate-900/5 dark:text-slate-400 dark:hover:bg-white/5'
              "
              @click="pick(ep)"
            >
              <span class="w-12 rounded px-1 py-0.5 text-center text-[10px] font-bold" :class="methodColor(ep.method)">
                {{ ep.method }}
              </span>
              <span class="truncate font-mono text-[11px]">{{ ep.path }}</span>
            </button>
          </li>
        </ul>
      </div>

      <!-- Request / response -->
      <div class="min-w-0 p-4">
        <div class="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white/60 p-2 dark:border-white/10 dark:bg-white/5">
          <span class="rounded-md px-2 py-1 text-xs font-bold" :class="methodColor(selected.method)">
            {{ selected.method }}
          </span>
          <code class="truncate font-mono text-xs text-slate-600 dark:text-slate-300">
            {{ selected.path }}<span class="text-slate-400">{{ selected.query }}</span>
          </code>
          <button
            type="button"
            class="ml-auto inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 disabled:opacity-60"
            :disabled="state === 'loading'"
            @click="send"
          >
            <Loader2 v-if="state === 'loading'" :size="14" class="animate-spin" />
            <Play v-else :size="14" />
            Test API
          </button>
        </div>

        <div class="mt-3 flex items-center justify-between">
          <p class="text-[11px] text-slate-400">{{ selected.title }}</p>
          <button
            v-if="state === 'done'"
            type="button"
            class="inline-flex items-center gap-1.5 text-[11px] text-slate-400 transition hover:text-brand-300"
            @click="copyToClipboard(jsonText, 'Đã copy JSON response!')"
          >
            <Copy :size="13" /> Copy
          </button>
        </div>

        <!-- Response window -->
        <div class="mt-2 min-h-[240px] overflow-hidden rounded-xl border border-slate-800/60 bg-[#0a0714]">
          <div class="flex items-center gap-3 border-b border-white/10 px-3 py-2 font-mono text-[11px]">
            <span class="text-slate-500">Response</span>
            <template v-if="state === 'done'">
              <span
                class="inline-flex items-center gap-1 rounded px-1.5 py-0.5 font-semibold"
                :class="shown && shown.status >= 400 ? 'bg-rose-500/15 text-rose-400' : 'bg-emerald-500/15 text-emerald-400'"
              >
                <Check :size="11" />
                {{ shown.status }} {{ shown.status === 200 ? 'OK' : 'Forbidden' }}
              </span>
              <span class="text-slate-500">{{ latency }} ms</span>
              <span class="text-slate-500">application/json</span>
            </template>
            <span v-else-if="state === 'loading'" class="text-amber-400">Đang gửi request…</span>
            <span v-else class="text-slate-600">Chưa có request — bấm "Test API"</span>
          </div>
          <pre
            v-if="state === 'done'"
            class="max-h-72 overflow-auto p-4 font-mono text-[12px] leading-relaxed text-slate-300"
          ><code v-html="highlighted" /></pre>
          <div v-else class="grid h-[200px] place-items-center px-6 text-center">
            <p class="font-mono text-xs text-slate-600">
              <span v-if="state === 'loading'">&gt; curl -X {{ selected.method }} {{ baseUrl }}{{ selected.path }} …</span>
              <span v-else>&gt; _</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
