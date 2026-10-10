<script setup>
import BackdropFx from './components/BackdropFx.vue'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import TechStackSection from './components/TechStackSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
import ToastHost from './components/ToastHost.vue'
import { navLinks } from './data/portfolio'
import { useScrollSpy } from './composables/useScrollSpy'

const { active } = useScrollSpy(navLinks.map((l) => l.id))
</script>

<template>
  <BackdropFx />
  <TheNavbar :active="active" />

  <main>
    <HeroSection />
    <TechStackSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </main>

  <TheFooter />
  <ToastHost />
</template>
