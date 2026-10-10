<script setup>
import { ref, watch } from 'vue'
import { Menu, X, Sun, Moon, TerminalSquare } from '@lucide/vue'
import { navLinks, profile } from '../data/portfolio'
import { useTheme } from '../composables/useTheme'

const props = defineProps({
  active: { type: String, default: 'home' },
})

const { isDark, toggle } = useTheme()
const open = ref(false)

watch(
  () => props.active,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav
        class="glass mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 shadow-lg shadow-black/5 sm:px-5"
      >
        <a href="#home" class="group flex items-center gap-2.5" aria-label="Về đầu trang">
          <span
            class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-fuchsia-500 text-white shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-105"
          >
            <TerminalSquare :size="19" />
          </span>
          <span class="font-mono text-sm font-semibold text-slate-900 dark:text-white">
            <span class="text-brand-400">&lt;</span>{{ profile.name.split(' ').pop()
            }}<span class="text-brand-400"> /&gt;</span>
          </span>
        </a>

        <ul class="hidden items-center gap-1 md:flex">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
              :class="
                active === link.id
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              "
            >
              {{ link.label }}
              <span
                v-if="active === link.id"
                class="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-fuchsia-400"
              />
            </a>
          </li>
        </ul>

        <div class="flex items-center gap-1.5">
          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-xl text-slate-500 transition-colors hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
            :aria-label="isDark ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'"
            @click="toggle"
          >
            <Sun v-if="isDark" :size="18" />
            <Moon v-else :size="18" />
          </button>

          <a
            href="#contact"
            class="hidden rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:brightness-110 sm:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-xl text-slate-600 transition-colors hover:bg-slate-900/5 md:hidden dark:text-slate-300 dark:hover:bg-white/10"
            :aria-expanded="open"
            aria-label="Mở menu"
            @click="open = !open"
          >
            <X v-if="open" :size="20" />
            <Menu v-else :size="20" />
          </button>
        </div>
      </nav>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        leave-active-class="transition duration-150 ease-in"
        leave-to-class="-translate-y-2 opacity-0"
      >
        <ul
          v-if="open"
          class="glass mt-2 flex flex-col gap-1 rounded-2xl p-2 shadow-xl md:hidden"
        >
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="block rounded-xl px-4 py-2.5 text-sm font-medium"
              :class="
                active === link.id
                  ? 'bg-brand-500/15 text-brand-300'
                  : 'text-slate-600 dark:text-slate-300'
              "
              @click="open = false"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="mt-1 block rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 px-4 py-2.5 text-center text-sm font-semibold text-white"
              @click="open = false"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </Transition>
    </div>
  </header>
</template>
