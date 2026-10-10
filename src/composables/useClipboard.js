import { useToast } from './useToast'

export async function copyToClipboard(text, successMessage = 'Copied!') {
  const { notify } = useToast()

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
    } else {
      const area = document.createElement('textarea')
      area.value = text
      area.setAttribute('readonly', '')
      area.style.position = 'absolute'
      area.style.left = '-9999px'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    notify(successMessage, 'success')
    return true
  } catch {
    notify('Không sao chép được. Vui lòng copy thủ công.', 'error')
    return false
  }
}
