<template>
  <div
    class="flex h-[280px] w-[300px] flex-col items-center justify-center gap-20 rounded-lg md:h-[360px] md:w-[460px]"
  >
    <div class="relative h-[200px] w-full md:h-[260px]">
      <div
        class="group relative w-[100px] md:w-[140px]"
        style="transform: none"
      >
        <div
          class="right-68 duration-250 shadow-menu group-hover:shadow-fullscreen absolute top-0 flex h-[120px] w-[100px] -rotate-6 flex-col items-center justify-between rounded-xl border border-white/5 bg-[#1A1A1A] p-1 transition-all group-hover:rotate-0 md:h-[160px] md:w-[140px]"
        >
          <div class="h-4"></div>
          <div
            class="flex h-12 w-14 flex-col items-center justify-center gap-2 rounded-md border border-white/5 px-4 py-2 group-hover:border-white/10 md:h-14 md:w-20"
          >
            <div
              class="h-2 w-2 rounded-full bg-[#242424] transition-colors duration-300 group-hover:bg-[#2E2E2E]"
            ></div>
            <div class="flex w-full flex-col gap-1">
              <div
                class="h-1 w-full rounded-[1px] bg-[#242424] transition-colors duration-300 group-hover:bg-[#2E2E2E]"
              ></div>
              <div
                class="h-1 w-2/5 rounded-[1px] bg-[#242424] transition-colors duration-300 group-hover:bg-[#2E2E2E]"
              ></div>
              <div
                class="h-1 w-3/5 rounded-[1px] bg-[#242424] transition-colors duration-300 group-hover:bg-[#2E2E2E]"
              ></div>
            </div>
          </div>
          <div class="w-full self-end p-2">
            <div class="text-xs text-[#333333]">01</div>
            <div
              class="text-xs font-medium text-[#D9D9D9] group-hover:text-white"
            >
              Card-1
            </div>
          </div>
          <div
            class="absolute top-24 h-10 w-full bg-transparent md:top-36"
          ></div>
        </div>
      </div>
      <div
        class="group absolute right-36 top-2 w-[100px] md:right-56 md:w-[140px]"
        style="transform: none"
      >
        <div
          class="duration-250 shadow-menu group-hover:shadow-fullscreen flex h-[120px] w-[100px] rotate-12 flex-col items-center justify-between rounded-xl border border-white/5 bg-[#1A1A1A] p-1 transition-all group-hover:rotate-0 md:right-52 md:h-[160px] md:w-[140px]"
        >
          <div class="h-8 md:h-4"></div>
          <div
            class="font-neuemontrealmono text-[38px] text-[#242424] transition-colors duration-300 group-hover:text-[#2E2E2E] md:text-[56px]"
          >
            H1
          </div>
          <div class="w-full self-end p-2">
            <div class="text-xs text-[#333333]">02</div>
            <div
              class="text-xs font-medium text-[#D9D9D9] group-hover:text-white"
            >
              Card-2
            </div>
          </div>
          <div
            class="absolute top-24 h-10 w-full bg-transparent md:top-36"
          ></div>
        </div>
      </div>
      <div
        class="group absolute right-20 top-0 w-[100px] md:right-28 md:w-[140px]"
        style="transform: none"
      >
        <div
          class="duration-250 shadow-menu group-hover:shadow-fullscreen flex h-[120px] w-[100px] -rotate-6 flex-col items-center justify-between rounded-xl border border-white/5 bg-[#1A1A1A] p-1 transition-all group-hover:rotate-0 md:right-32 md:h-[160px] md:w-[140px]"
        >
          <div class="h-4"></div>
          <div
            class="h-12 text-[#242424] transition-colors duration-300 group-hover:text-[#2E2E2E] md:h-16"
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              class="h-full w-full fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.001 50.678c15.227 0 27.57-10.8 27.57-24.124 0-13.323-12.343-24.124-27.57-24.124-15.226 0-27.57 10.8-27.57 24.124 0 5.416 2.04 10.416 5.484 14.442.745 1.857 1.409 4.108 1.409 6.236 0 4.847-3.446 10.339-3.446 10.339s6.892 0 13.785-3.447a29.854 29.854 0 005.758-3.777c1.49.218 3.02.331 4.58.331z"
              ></path>
            </svg>
          </div>
          <div class="w-full self-end p-2">
            <div class="text-xs text-[#333333]">03</div>
            <div
              class="text-xs font-medium text-[#D9D9D9] group-hover:text-white"
            >
              Card-3
            </div>
          </div>
          <div
            class="absolute top-24 h-10 w-full bg-transparent md:top-36"
          ></div>
        </div>
      </div>
      <div
        class="group absolute right-2 top-0 w-[100px] md:w-[140px]"
        style="transform: none"
      >
        <div
          class="duration-250 shadow-menu group-hover:shadow-fullscreen flex h-[120px] w-[100px] -rotate-6 flex-col items-center justify-between rounded-xl border border-white/5 bg-[#1A1A1A] p-1 transition-all group-hover:rotate-0 md:right-32 md:h-[160px] md:w-[140px]"
        >
          <div class="h-4"></div>
          <div
            class="font-neuemontrealmono flex h-8 w-9/12 items-center justify-center rounded-full bg-[#242424] text-sm text-[#1A1A1A] transition-colors duration-300 group-hover:bg-[#2E2E2E] group-hover:text-[#121212] md:h-10 md:w-8/12 md:text-lg"
          >
            Hello
          </div>
          <div class="w-full self-end p-2">
            <div class="text-xs text-[#333333]">04</div>
            <div
              class="text-xs font-medium text-[#D9D9D9] group-hover:text-white"
            >
              Card-4
            </div>
          </div>
          <div
            class="absolute top-24 h-10 w-full bg-transparent md:top-36"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
