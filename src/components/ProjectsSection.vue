<script setup>
import SectionHeading from './SectionHeading.vue'
import ProjectCard from './ProjectCard.vue'
import ApiPlayground from './ApiPlayground.vue'
import { projects } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Sản phẩm thực tế tôi đã xây dựng"
        description="Hai dự án tiêu biểu thể hiện tư duy thiết kế CSDL, bảo mật API và trải nghiệm người dùng."
      />

      <div class="mt-12 space-y-8">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.id"
          :project="project"
          :index="i"
        />
      </div>

      <div class="mt-16">
        <div class="mb-5 text-center">
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">
            Tự trải nghiệm API của tôi
          </h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Bấm "Test API" để xem phản hồi JSON thực tế mà backend Spring Boot trả về — bao gồm cả
            trường hợp bị từ chối 403.
          </p>
        </div>
        <ApiPlayground />
      </div>
    </div>
  </section>
</template>
