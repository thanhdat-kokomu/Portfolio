<script setup>
import { Server, LayoutGrid, Database } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'
import BrandIcon from './BrandIcon.vue'
import { techGroups } from '../data/portfolio'

const groupIcons = { Server, LayoutGrid, Database }
</script>

<template>
  <section id="skills" class="scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Công nghệ tôi sử dụng hằng ngày"
        description="Tập trung vào hệ sinh thái Java / Spring ở backend và Vue 3 ở frontend — kết nối qua RESTful API và cơ sở dữ liệu quan hệ."
      />

      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="group in techGroups"
          :key="group.title"
          class="glass card-hover rounded-2xl p-6"
        >
          <div class="flex items-center gap-3">
            <span
              class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg"
              :class="group.accent"
            >
              <component :is="groupIcons[group.icon]" :size="20" />
            </span>
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ group.title }}</h3>
          </div>

          <ul class="mt-5 flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item.name"
              class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-400/60 hover:bg-brand-500/5 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              <BrandIcon :si="item.si" :lucide="item.lucide" :color="item.color" :size="18" />
              {{ item.name }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
