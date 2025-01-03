<template>
  <div
    class="group relative flex h-[340px] w-[280px] flex-col items-center justify-between gap-9 overflow-hidden bg-[#FFE5EF] p-4 text-sm transition-shadow duration-200 hover:cursor-pointer hover:shadow-md md:h-[360px] md:w-[300px]"
  >
    <div class="flex h-[46px] w-full flex-col">
      <div
        class="font-mondwest truncate text-base font-bold text-[#FF6B00] transition-all ease-in group-hover:text-[#FF4D00]"
      >
        WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?
      </div>
      <div
        class="font-mondwest text-lg font-bold leading-tight text-[#FF6B00] transition-all ease-in group-hover:text-[#FF4D00]"
      >
        bad guy
      </div>
    </div>

    <img src="/bad-guy.png" class="w-[50%]" />
    <div class="h-[32px]"></div>

    <div
      class="absolute bottom-0 left-0 right-0 flex flex-col items-start gap-4 bg-black/90 px-4 py-4 pb-4 pt-[10px] backdrop-blur-lg backdrop-saturate-150"
      style="height: 38px"
      ref="sheetRef"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <div class="flex w-full flex-col gap-1">
        <div class="truncate font-sans text-[14px] font-medium text-white">
          Billie Eilish
        </div>
        <div
          class="w-full text-pretty font-sans text-[13px] leading-5 text-white"
        >
          2019 · 3:14 · 2,482,403,445
        </div>
      </div>
      <div class="flex w-full flex-col gap-3">
        <div
          class="relative flex h-9 w-full cursor-default items-center justify-center gap-3 overflow-hidden rounded-md border border-white/10 bg-white/5 text-white/90 transition-colors duration-300 hover:bg-[#171717]/10 hover:text-white"
        >
          <button
            class="absolute inline-flex h-full w-full cursor-pointer items-center justify-center gap-1 font-sans text-[13px] font-medium"
          >
            Add to favorite
          </button>
        </div>
        <button
          class="relative flex h-9 w-full items-center justify-center overflow-hidden rounded-md bg-[#FFE5EF] font-sans text-[13px] font-medium text-black transition-colors duration-300 enabled:hover:bg-[#FACDDD]"
        >
          Share...
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const sheetRef = ref<HTMLDivElement | null>(null);

function handleMouseOver() {
  gsap.to(sheetRef.value, {
    height: 190,
    duration: 0.3,
  });
}

function handleMouseLeave() {
  gsap.to(sheetRef.value, {
    height: 38,
    duration: 0.3,
  });
}
</script>
