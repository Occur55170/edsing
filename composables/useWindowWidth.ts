import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowWidth () {
  const width = ref(0)

  const update = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { width }
}
