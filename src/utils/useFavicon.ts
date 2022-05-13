import { ref, watch } from 'vue'

// 切换header Icon
export default function useFavicon(newIcon: string) {
  let favicon = ref<string>(newIcon)

  const updateIcon = (icon: string) => {
    document.head
      .querySelectorAll(`link[rel*="icon"]`)
      .forEach((el) => (el.href = `${icon}`))
  }

  const reset = () => (favicon.value = 'src/assets/img/logo.png')

  watch(favicon, (i) => {
    updateIcon(i)
  })

  return { favicon, reset }
}
