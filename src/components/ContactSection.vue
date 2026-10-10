<script setup>
import { reactive, ref } from 'vue'
import { Mail, Phone, MapPin, Send, Copy, Check } from '@lucide/vue'
import SectionHeading from './SectionHeading.vue'
import SocialIcon from './SocialIcon.vue'
import { profile } from '../data/portfolio'
import { copyToClipboard } from '../composables/useClipboard'
import { useToast } from '../composables/useToast'

const { notify } = useToast()

const copied = ref('')

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({})

async function copy(value, key) {
  const ok = await copyToClipboard(value, key === 'email' ? 'Đã copy email!' : 'Đã copy số điện thoại!')
  if (ok) {
    copied.value = key
    window.setTimeout(() => {
      if (copied.value === key) copied.value = ''
    }, 2000)
  }
}

function submit() {
  errors.name = form.name.trim() ? '' : 'Vui lòng nhập tên.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Email không hợp lệ.'
  errors.message = form.message.trim().length >= 10 ? '' : 'Nội dung cần ít nhất 10 ký tự.'

  if (errors.name || errors.email || errors.message) {
    notify('Vui lòng kiểm tra lại các trường bắt buộc.', 'error')
    return
  }

  const subject = encodeURIComponent(`Cơ hội hợp tác với ${form.name}`)
  const body = encodeURIComponent(`${form.message}\n\n—\n${form.name}\n${form.email}`)
  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  notify('Đang mở ứng dụng email…', 'success')
}
</script>

<template>
  <section id="contact" class="scroll-mt-24 py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Cùng nhau xây dựng sản phẩm tốt"
        description="Tôi đang tìm kiếm cơ hội Backend / Fullstack. Hãy gửi tin nhắn hoặc kết nối qua các kênh bên dưới."
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <!-- Contact info -->
        <div class="glass min-w-0 rounded-3xl p-6 sm:p-8">
          <ul class="space-y-3">
            <li>
              <button
                type="button"
                class="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-brand-400/60 dark:border-white/10"
                @click="copy(profile.email, 'email')"
              >
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Mail :size="20" />
                </span>
                <span class="min-w-0">
                  <span class="block text-xs text-slate-400">Email</span>
                  <span class="block truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                    {{ profile.email }}
                  </span>
                </span>
                <span class="ml-auto text-slate-400 transition group-hover:text-brand-300">
                  <Check v-if="copied === 'email'" :size="18" class="text-emerald-400" />
                  <Copy v-else :size="18" />
                </span>
              </button>
            </li>

            <li>
              <button
                type="button"
                class="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-brand-400/60 dark:border-white/10"
                @click="copy(profile.phone, 'phone')"
              >
                <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                  <Phone :size="20" />
                </span>
                <span class="min-w-0">
                  <span class="block text-xs text-slate-400">Điện thoại</span>
                  <span class="block truncate text-sm font-medium text-slate-800 dark:text-slate-100">
                    {{ profile.phone }}
                  </span>
                </span>
                <span class="ml-auto text-slate-400 transition group-hover:text-brand-300">
                  <Check v-if="copied === 'phone'" :size="18" class="text-emerald-400" />
                  <Copy v-else :size="18" />
                </span>
              </button>
            </li>

            <li class="flex items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400">
                <MapPin :size="20" />
              </span>
              <span>
                <span class="block text-xs text-slate-400">Địa điểm</span>
                <span class="block text-sm font-medium text-slate-800 dark:text-slate-100">
                  {{ profile.location }}
                </span>
              </span>
            </li>
          </ul>

          <div class="mt-6 flex items-center gap-2">
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

        <!-- Form -->
        <form class="glass min-w-0 rounded-3xl p-6 sm:p-8" novalidate @submit.prevent="submit">
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block">
              <span class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Tên của bạn</span>
              <input
                v-model="form.name"
                type="text"
                placeholder="Nguyễn Văn A"
                class="w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30 dark:bg-white/5 dark:text-slate-100"
                :class="errors.name ? 'border-rose-400' : 'border-slate-200 dark:border-white/10'"
              />
              <span v-if="errors.name" class="mt-1 block text-xs text-rose-400">{{ errors.name }}</span>
            </label>

            <label class="block">
              <span class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Email</span>
              <input
                v-model="form.email"
                type="email"
                placeholder="ban@congty.com"
                class="w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30 dark:bg-white/5 dark:text-slate-100"
                :class="errors.email ? 'border-rose-400' : 'border-slate-200 dark:border-white/10'"
              />
              <span v-if="errors.email" class="mt-1 block text-xs text-rose-400">{{ errors.email }}</span>
            </label>
          </div>

          <label class="mt-4 block">
            <span class="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Nội dung</span>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Xin chào Đạt, chúng tôi có vị trí Backend Developer…"
              class="w-full resize-none rounded-xl border bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-500/30 dark:bg-white/5 dark:text-slate-100"
              :class="errors.message ? 'border-rose-400' : 'border-slate-200 dark:border-white/10'"
            />
            <span v-if="errors.message" class="mt-1 block text-xs text-rose-400">{{ errors.message }}</span>
          </label>

          <button
            type="submit"
            class="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:brightness-110 sm:w-auto"
          >
            <Send :size="18" />
            Gửi tin nhắn
          </button>
          <p class="mt-2 text-xs text-slate-400">
            Nút gửi sẽ mở ứng dụng email với nội dung đã điền sẵn.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
