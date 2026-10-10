<script setup>
import { computed } from 'vue'
import {
  siOpenjdk,
  siSpringboot,
  siSpringsecurity,
  siJsonwebtokens,
  siHibernate,
  siVuedotjs,
  siPinia,
  siTailwindcss,
  siVuetify,
  siJavascript,
  siHtml5,
  siCss,
  siGit,
  siSwagger,
  siPostman,
  siVite,
} from 'simple-icons'
import { Database } from '@lucide/vue'

const props = defineProps({
  si: { type: String, default: '' },
  lucide: { type: String, default: '' },
  color: { type: String, default: '' },
  size: { type: Number, default: 22 },
})

const siMap = {
  [siOpenjdk.slug]: siOpenjdk,
  [siSpringboot.slug]: siSpringboot,
  [siSpringsecurity.slug]: siSpringsecurity,
  [siJsonwebtokens.slug]: siJsonwebtokens,
  [siHibernate.slug]: siHibernate,
  [siVuedotjs.slug]: siVuedotjs,
  [siPinia.slug]: siPinia,
  [siTailwindcss.slug]: siTailwindcss,
  [siVuetify.slug]: siVuetify,
  [siJavascript.slug]: siJavascript,
  [siHtml5.slug]: siHtml5,
  [siCss.slug]: siCss,
  [siGit.slug]: siGit,
  [siSwagger.slug]: siSwagger,
  [siPostman.slug]: siPostman,
  [siVite.slug]: siVite,
}

const lucideMap = { Database }

const icon = computed(() => (props.si ? siMap[props.si] : null))
const lucideComp = computed(() => (props.lucide ? lucideMap[props.lucide] : null))
const fill = computed(() => props.color || (icon.value ? `#${icon.value.hex}` : 'currentColor'))
</script>

<template>
  <svg
    v-if="icon"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    role="img"
    :aria-label="icon.title"
    :style="{ fill }"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="icon.path" />
  </svg>

  <component
    :is="lucideComp"
    v-else-if="lucideComp"
    :size="size"
    :color="color || 'currentColor'"
    aria-hidden="true"
  />
</template>
