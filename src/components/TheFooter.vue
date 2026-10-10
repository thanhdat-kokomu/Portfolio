<script setup>
import { ArrowUp, Heart } from '@lucide/vue'
import SocialIcon from './SocialIcon.vue'
import { profile, navLinks } from '../data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 py-10 dark:border-white/10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#home" class="font-mono text-sm font-semibold text-slate-900 dark:text-white">
            <span class="text-brand-400">&lt;</span>{{ profile.name.split(' ').pop()
            }}<span class="text-brand-400"> /&gt;</span>
          </a>
          <p class="mt-2 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            {{ profile.role }} · {{ profile.location }}
          </p>
        </div>

        <nav class="flex flex-wrap gap-x-5 gap-y-2">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="text-sm text-slate-500 transition hover:text-brand-300 dark:text-slate-400"
          >
            {{ link.label }}
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <a
            v-for="s in profile.socials"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="s.label"
            class="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 text-slate-600 transition hover:border-brand-400 hover:text-brand-300 dark:border-white/15 dark:text-slate-300"
          >
            <SocialIcon :name="s.icon" :size="16" />
          </a>
          <a
            href="#home"
            aria-label="Lên đầu trang"
            class="grid h-9 w-9 place-items-center rounded-lg border border-slate-300 text-slate-600 transition hover:border-brand-400 hover:text-brand-300 dark:border-white/15 dark:text-slate-300"
          >
            <ArrowUp :size="16" />
          </a>
        </div>
      </div>

      <div class="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row dark:border-white/10">
        <p>© {{ year }} {{ profile.name }}. All rights reserved.</p>
        <p class="inline-flex items-center gap-1.5">
          Built with
          <span class="inline-flex items-center gap-1 font-medium text-slate-500 dark:text-slate-300">
            Vue 3 <Heart :size="12" class="text-rose-400" /> Tailwind CSS
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>
