import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Highlights the nav link for the section currently in view.
 * Uses a scroll listener (rAF-throttled) which is more predictable than
 * IntersectionObserver for full-height "single page" layouts.
 */
export function useScrollSpy(ids, offset = 120) {
  const active = ref(ids[0])
  let frame = 0

  const compute = () => {
    frame = 0
    const pos = window.scrollY + offset
    let current = ids[0]

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.offsetTop <= pos) current = id
    }

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
    if (atBottom) current = ids[ids.length - 1]

    active.value = current
  }

  const onScroll = () => {
    if (frame) return
    frame = window.requestAnimationFrame(compute)
  }

  onMounted(() => {
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (frame) window.cancelAnimationFrame(frame)
  })

  return { active }
}
