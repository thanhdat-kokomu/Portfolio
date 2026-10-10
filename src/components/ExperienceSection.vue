<script setup>
import { Briefcase, GraduationCap, CalendarRange, Target, TrendingUp } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'
import { timeline, objective } from '../data/portfolio'

const iconFor = (type) => (type === 'education' ? GraduationCap : Briefcase)
</script>

<template>
  <section id="experience" class="scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Work & Education"
        title="Kinh nghiệm & học vấn"
        description="Quá trình thực tập, đồ án tốt nghiệp và nền tảng học thuật."
      />

      <!-- Career objective -->
      <div class="glass mt-10 rounded-2xl p-6 sm:p-7">
        <div class="flex items-center gap-3">
          <span class="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
            <Target :size="20" />
          </span>
          <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ objective.title }}</h3>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {{ objective.intro }}
        </p>
        <ul class="mt-4 grid gap-3 sm:grid-cols-2">
          <li class="flex gap-3 rounded-xl border border-slate-200 p-4 dark:border-white/10">
            <TrendingUp :size="18" class="mt-0.5 shrink-0 text-emerald-400" />
            <span class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ objective.short }}</span>
          </li>
          <li class="flex gap-3 rounded-xl border border-slate-200 p-4 dark:border-white/10">
            <TrendingUp :size="18" class="mt-0.5 shrink-0 text-brand-400" />
            <span class="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{{ objective.long }}</span>
          </li>
        </ul>
      </div>

      <ol class="relative mt-10 space-y-6 border-l border-slate-200 pl-6 sm:pl-8 dark:border-white/10">
        <li v-for="item in timeline" :key="item.org + item.period" class="relative">
          <span
            class="absolute -left-[31px] grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white shadow-lg shadow-brand-500/30 sm:-left-[39px]"
          >
            <component :is="iconFor(item.type)" :size="16" />
          </span>

          <div class="glass card-hover rounded-2xl p-5 sm:p-6">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ item.role }}</h3>
              <span
                class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 font-mono text-[11px] text-slate-500 dark:border-white/10 dark:text-slate-400"
              >
                <CalendarRange :size="12" />
                {{ item.period }}
              </span>
            </div>
            <p class="mt-1 text-sm font-medium text-brand-400">{{ item.org }}</p>
            <p v-if="item.project" class="mt-0.5 font-mono text-xs text-slate-400">{{ item.project }}</p>
            <ul class="mt-3 space-y-1.5">
              <li
                v-for="b in item.bullets"
                :key="b"
                class="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                {{ b }}
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
