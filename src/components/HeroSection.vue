<script setup>
import { Download, ArrowRight, Mail, MapPin, Sparkles } from '@lucide/vue'
import SocialIcon from './SocialIcon.vue'
import { profile } from '../data/portfolio'
import { copyToClipboard } from '../composables/useClipboard'

const stats = [
  { value: '2+', label: 'Dự án thực tế' },
  { value: 'Spring Boot 3.x', label: 'Backend chính' },
  { value: 'Vue 3', label: 'Frontend chính' },
]
</script>

<template>
  <section id="home" class="relative flex min-h-screen items-center pt-28 pb-16">
    <div class="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <div class="min-w-0">
        <span
          class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-300"
        >
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for Backend / Fullstack roles
        </span>

        <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
          {{ profile.name }}
        </h1>
        <p class="mt-3 text-xl font-semibold sm:text-2xl">
          <span class="text-gradient">{{ profile.role }}</span>
        </p>

        <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg dark:text-slate-400">
          {{ profile.tagline }}
        </p>

        <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
          <span class="inline-flex items-center gap-2">
            <MapPin :size="16" class="text-brand-400" />
            {{ profile.location }}
          </span>
          <button
            type="button"
            class="inline-flex items-center gap-2 transition-colors hover:text-brand-300"
            @click="copyToClipboard(profile.email, 'Đã sao chép email!')"
          >
            <Mail :size="16" class="text-brand-400" />
            {{ profile.email }}
          </button>
        </div>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            :href="profile.cvUrl"
            download
            class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:brightness-110"
          >
            <Download :size="18" />
            Download CV
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-300 dark:border-white/15 dark:text-slate-200"
          >
            Contact Me
            <ArrowRight :size="18" />
          </a>

          <div class="ml-1 flex items-center gap-1.5">
            <a
              v-for="s in profile.socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="s.label"
              class="grid h-11 w-11 place-items-center rounded-xl border border-slate-300 text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-300 dark:border-white/15 dark:text-slate-300"
            >
              <SocialIcon :name="s.icon" :size="18" />
            </a>
          </div>
        </div>

        <dl class="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
          <div v-for="s in stats" :key="s.label">
            <dt class="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{{ s.value }}</dt>
            <dd class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>

      <!-- Code panel -->
      <div class="relative min-w-0">
        <div
          class="glass overflow-hidden rounded-2xl shadow-2xl shadow-brand-950/40"
        >
          <div class="flex items-center gap-2 border-b border-slate-200/70 px-4 py-3 dark:border-white/10">
            <span class="h-3 w-3 rounded-full bg-rose-400/90" />
            <span class="h-3 w-3 rounded-full bg-amber-400/90" />
            <span class="h-3 w-3 rounded-full bg-emerald-400/90" />
            <span class="ml-2 font-mono text-xs text-slate-500 dark:text-slate-400">developer.ts</span>
            <Sparkles :size="14" class="ml-auto text-brand-400" />
          </div>
          <pre
            class="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-700 sm:text-sm dark:text-slate-300"
          ><code><span class="tok-key">const</span> developer = {
  name: <span class="tok-str">"Dương Thành Đạt"</span>,
  role: <span class="tok-str">"Fullstack / Backend"</span>,
  stack: [<span class="tok-str">"Spring Boot 3.x"</span>, <span class="tok-str">"Vue 3"</span>, <span class="tok-str">"SQL Server"</span>],
  focus: <span class="tok-str">"Web API ổn định &amp; UI mượt"</span>,
  location: <span class="tok-str">"Thái Nguyên, VN"</span>,
  openToWork: <span class="tok-bool">true</span>,
};

<span class="tok-key">export default</span> developer;</code></pre>
        </div>

        <div
          class="absolute -right-3 -bottom-4 hidden items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 font-mono text-xs text-emerald-600 shadow-lg backdrop-blur-xl sm:flex dark:text-emerald-300"
        >
          <span class="h-2 w-2 rounded-full bg-emerald-400" />
          build: passing
        </div>
      </div>
    </div>
  </section>
</template>
