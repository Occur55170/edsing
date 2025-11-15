<script lang="ts" setup>
interface Props {
  ballColor?: string;
  ballTime?: number;
  delayStartTime?: number;
}

const props = withDefaults(defineProps<Props>(), {
  ballColor: '#1c9328',
  ballTime: 4,
  delayStartTime: 0,
})
</script>

<template>
  <svg viewBox="0 -10 500 220">
    <!-- 強化發光濾鏡 -->
    <defs>
      <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="2" result="blur1" />
        <feGaussianBlur stdDeviation="2" result="blur2" />
        <feMerge>
          <feMergeNode in="blur1" />
          <feMergeNode in="blur2" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    <!-- 白色圓形 -->
    <circle
      cx="250"
      cy="100"
      r="100"
      fill="none"
      stroke="white"
      stroke-width="1"
    />

    <!-- 圓形路徑 -->
    <path
      id="ovalPath"
      d="M 350 100  A 100 100 0 1 1 150 100  A 100 100 0 1 1 350 100"
      fill="none"
      stroke="none"
    />

    <!-- 小球 1 -->
    <circle r="4" :fill="props.ballColor" filter="url(#glow)" visibility="hidden">
      <set attributeName="visibility" to="visible" :begin="`${0 + props.delayStartTime}s`" />
      <animateMotion
        :dur="`${ props.ballTime }s`"
        :begin="`${0 + props.delayStartTime}s`"
        repeatCount="indefinite"
        rotate="auto"
      >
        <mpath href="#ovalPath" />
      </animateMotion>
    </circle>

    <!-- 小球 2 -->
    <circle r="4" :fill="props.ballColor" filter="url(#glow)" visibility="hidden">
      <set attributeName="visibility" to="visible" :begin="`${1 + props.delayStartTime}s`" />
      <animateMotion
        :dur="`${ props.ballTime }s`"
        :begin="`${1 + props.delayStartTime}s`"
        repeatCount="indefinite"
        rotate="auto"
      >
        <mpath href="#ovalPath" />
      </animateMotion>
    </circle>
  </svg>
</template>

<style scoped>
svg {
  width: 100vw;
  overflow: visible;
}
</style>
