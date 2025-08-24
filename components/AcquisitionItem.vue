<script lang="ts" setup>
interface Props {
  class?: string;
  itemName: string;
  itemImg: string;
  quoteUrl: string;
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
  itemName: '',
  itemImg: '',
  quoteUrl: '',
})
</script>

<template>
  <div class="bg-brand text-white flex items-stretch border-[30px] border-brand">
    <div class="grow flex flex-wrap items-center px-8 py-2">
      <div class="w-full">
        <h2 class="text-[64px] mb-16">
          {{ props.itemName }}
        </h2>
        <slot name="desc"></slot>
      </div>
      <NuxtLink :to="props.quoteUrl" class="bg-brand text-2xl text-white font-bold border border-white inline-block py-2 px-4 rounded" style="border-width: 4px 6px">
        請求報價
      </NuxtLink>
    </div>
    <img
      :src="props.itemImg"
      alt=""
      class="w-[50%] h-[800px] object-cover object-[80%_30%]
         [mask-image:linear-gradient(to_right,transparent,black)]
         [mask-repeat:no-repeat]
         [mask-size:100%_100%]"
    />
  </div>
</template>

<style></style>
