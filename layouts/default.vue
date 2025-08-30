<script lang="ts" setup>
</script>
<template>
  <div class="overflow-hidden">
    <Nav :class="'desktopSmWidth:absolute static top-[5%] right-0 left-0 z-[10]'" />
    <slot></slot>
    <Footer />
  </div>
</template>
