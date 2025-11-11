import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useAnimateOnScroll (animationClass = 'animate__fadeInUp') {
  const target = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) { return }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', animationClass)
          // } else {
            // entry.target.classList.remove('animate__animated', animationClass)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(target.value)
  })

  onBeforeUnmount(() => {
    if (observer && target.value) { observer.unobserve(target.value) }
  })

  return { target }
}
