<template>
  <div
    class="cursor-pointer rounded-2xl bg-[#1A1A1A]"
    style="width: 200px; height: 116px"
    @click="toggle"
    ref="widgetRef"
  >
    <div class="flex w-full flex-col items-start gap-4 px-4 py-4">
      <div class="flex w-full items-start justify-between">
        <div class="flex flex-col items-start gap-4">
          <div
            class="inline-block select-none rounded-full bg-[#0DFFC5]/5 px-3 py-1 text-xs font-medium text-[#0DFFC5]"
          >
            In 15 mins
          </div>
        </div>
        <button
          class="flex h-[26px] items-center justify-between overflow-hidden rounded-full bg-[#FF0342] px-2 font-medium text-white/100 transition-colors duration-300 hover:bg-[#F0033E] dark:bg-[#0DFFC5] dark:text-[#1A1A1A] dark:hover:bg-[#03EDB5]"
          style="opacity: 1; filter: blur(0px)"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.332 3.833c0-.644.522-1.167 1.167-1.167h7c.644 0 1.166.523 1.166 1.167v2.025L13.46 4.46a.833.833 0 011.206.745v5.588a.833.833 0 01-1.206.745l-2.794-1.397v2.024c0 .645-.522 1.167-1.166 1.167h-7a1.167 1.167 0 01-1.167-1.167V3.833zm9.333 5.191l3 1.5V5.476l-3 1.5v2.048z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col gap-1">
        <div class="select-none truncate text-sm font-medium text-white">
          Online meeting
        </div>
        <div class="select-none text-sm text-white/60">
          1:30PM <span class="font-sans">-&gt;</span> 2:30PM
        </div>
      </div>
    </div>

    <div
      :class="{ '!opacity-100': open }"
      class="h-[0.5px] w-full flex-shrink-0 bg-white/5 opacity-0"
    ></div>

    <div
      :class="{ '!opacity-100': open }"
      class="flex h-auto w-full justify-between gap-2 px-4 py-4 opacity-0"
    >
      <div
        class="flex flex-col justify-between gap-2"
        style="opacity: 1; filter: blur(0px)"
      >
        <div class="flex w-full items-start gap-2">
          <div class="w-auto text-sm font-medium text-white">Guests</div>
        </div>
        <div class="flex">
          <div
            class="shadow-custom-inner h-6 w-6 -translate-x-[4px] overflow-hidden rounded-full border-2 border-[#1A1A1A] bg-black"
            style="margin-right: -8px"
            v-for="item in 3"
          ></div>
        </div>
      </div>
      <div
        class="flex h-[60px] flex-col justify-between"
        style="opacity: 1; filter: blur(0px)"
      >
        <div
          class="flex items-center justify-center text-sm text-[#64646B]"
        ></div>
        <div class="flex items-center justify-end gap-[6px]">
          <div
            v-for="item in 6"
            class="h-[26px] w-[8px] rounded-full bg-white/15"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const widgetRef = ref<HTMLDivElement | null>(null);
const open = ref<boolean>(false);

function toggle() {
  open.value = !open.value;
  gsap.to(widgetRef.value, {
    ...(open.value
      ? {
          width: 340,
          height: 211,
        }
      : {
          width: 200,
          height: 116,
        }),
    duration: 0.6,
    ease: "elastic.out(1,0.8)",
  });
}
</script>
