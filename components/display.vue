<template>
  <div
    class="relative flex w-full flex-col items-start gap-12 font-sans md:flex-row md:gap-20"
  >
    <div class="flex w-full shrink-0 flex-col gap-4 md:w-[256px]">
      <div class="flex w-full flex-col gap-3">
        <h2 class="text-sm font-medium">{{ props.title }}</h2>
        <p class="text-pretty text-sm leading-relaxed opacity-65">
          {{ props.intro }}
        </p>
      </div>
      <div class="flex w-full flex-wrap gap-2">
        <div
          v-for="item in props.tags"
          :key="item"
          class="w-fit cursor-default rounded-md bg-zinc-800 pb-[2px] pl-2 pr-2 pt-[2px] font-sans text-xs"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div
      class="flex h-[400px] w-full min-w-0 items-center justify-center rounded-md border border-zinc-800 md:h-[640px]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: String
  intro: String,
  tags: Array,
}>();
</script>
