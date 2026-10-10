import { ref } from 'vue'

const toasts = ref([])
let seq = 0

export function useToast() {
  function notify(message, type = 'success') {
    const id = ++seq
    toasts.value = [...toasts.value, { id, message, type }]
    window.setTimeout(() => {
      toasts.value = toasts.value.filter((t) => t.id !== id)
    }, 2600)
  }

  return { toasts, notify }
}
