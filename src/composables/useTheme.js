import { ref } from 'vue'

const isDark = ref(
  typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true,
)

let initialized = false

function apply(dark) {
  isDark.value = dark
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', dark)
  }
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {
    /* ignore private-mode storage errors */
  }
}

export function useTheme() {
  if (!initialized && typeof document !== 'undefined') {
    isDark.value = document.documentElement.classList.contains('dark')
    initialized = true
  }

  return {
    isDark,
    toggle: () => apply(!isDark.value),
  }
}
