<script setup>
import { CheckCircle2, ExternalLink, ArrowUpRight } from '@lucide/vue'
import SocialIcon from './SocialIcon.vue'
import ProjectPreview from './ProjectPreview.vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <article class="glass card-hover overflow-hidden rounded-3xl p-5 sm:p-6 lg:p-7">
    <div
      class="grid items-center gap-6 lg:grid-cols-2 lg:gap-8"
      :class="index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''"
    >
      <!-- Preview -->
      <div class="min-w-0">
        <ProjectPreview :variant="project.variant" />
      </div>

      <!-- Content -->
      <div class="min-w-0">
        <div class="flex flex-wrap items-center gap-2">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="rounded-full border border-brand-400/30 bg-brand-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-brand-300"
          >
            {{ tag }}
          </span>
        </div>

        <h3 class="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
          {{ project.name }}
        </h3>
        <p class="mt-1 text-sm font-medium text-brand-400">{{ project.subtitle }}</p>
        <p v-if="project.context" class="mt-1.5 text-xs text-slate-400">
          {{ project.context }}<span v-if="project.role"> · Vị trí: {{ project.role }}</span>
        </p>
        <p class="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {{ project.summary }}
        </p>

        <ul class="mt-5 space-y-2.5">
          <li
            v-for="point in project.highlights"
            :key="point"
            class="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
          >
            <CheckCircle2 :size="17" class="mt-0.5 shrink-0 text-emerald-400" />
            <span>{{ point }}</span>
          </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-3">
          <a
            v-for="link in project.links"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition"
            :class="
              link.kind === 'primary'
                ? 'bg-gradient-to-r from-brand-500 to-fuchsia-500 text-white shadow-lg shadow-brand-500/25 hover:brightness-110'
                : 'border border-slate-300 text-slate-700 hover:border-brand-400 hover:text-brand-300 dark:border-white/15 dark:text-slate-200'
            "
          >
            <SocialIcon v-if="link.label.includes('GitHub')" name="github" :size="16" />
            <ExternalLink v-else :size="16" />
            {{ link.label }}
            <ArrowUpRight :size="14" class="opacity-70" />
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
