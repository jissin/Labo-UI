<template>
  <div
    class="font-geist w-[240px] rounded-xl border border-white/5 bg-[#0A0A0A] text-sm shadow-sm"
  >
    <div class="border-b border-white/5 p-2">
      <div class="flex flex-col gap-1 px-2 py-[10px]">
        <div class="w-full leading-5 text-[#A0A0A0]">
          {{ msgOnHover.title }}
        </div>
        <div class="w-full truncate leading-5 text-[#ffffff]">
          {{ msgOnHover.desc }}
        </div>
      </div>
    </div>
    <div class="flex flex-col p-2">
      <div
        class="group flex h-10 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all ease-out hover:bg-[#ffffff]/5"
        @mouseover="handleMouseOver(0)"
        @mouseleave="handleMouseLeave"
      >
        <span
          class="text-[#A0A0A0] transition-colors ease-out group-hover:text-[#ffffff]"
          ><svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_100_407)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.024 6.77a5.25 5.25 0 017.956 0L16.762 10l-1.094 1.27 1.027 1.107 1.625-1.887v-.98l-3.203-3.72c-2.693-3.127-7.537-3.127-10.23 0L1.684 9.51v.98l3.203 3.72a6.748 6.748 0 007.197 2.018l-1.164-1.253a5.24 5.24 0 01-4.896-1.744L3.242 10 6.024 6.77zM10.002 8a2 2 0 100 4 2 2 0 000-4zm-3.5 2a3.5 3.5 0 116.535 1.744l3.014 3.246.51.55-1.098 1.02-.51-.55-2.929-3.153A3.5 3.5 0 016.502 10z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_100_407">
                <path transform="translate(2 2)" d="M0 0H16V16H0z"></path>
              </clipPath>
            </defs></svg
        ></span>
        <div class="text-[#ffffff]">Option 1</div>
      </div>
      <div
        class="group flex h-10 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all ease-out hover:bg-[#ffffff]/5"
        @mouseover="handleMouseOver(1)"
        @mouseleave="handleMouseLeave"
      >
        <span
          class="text-[#A0A0A0] transition-colors ease-out group-hover:text-[#ffffff]"
          ><svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_100_437)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 2C5.58 2 2 5.579 2 9.997a7.992 7.992 0 005.47 7.588c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.939-.82-1.129-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.949 0-.87.31-1.589.82-2.149-.08-.2-.36-1.02.08-2.12 0 0 .67-.209 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.068-1.87 3.748-3.65 3.948.29.25.54.73.54 1.48 0 1.07-.01 1.929-.01 2.199 0 .21.15.46.55.38A8.012 8.012 0 0018 9.997 7.996 7.996 0 0010 2z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_100_437">
                <path transform="translate(2 2)" d="M0 0H16V16H0z"></path>
              </clipPath>
            </defs></svg
        ></span>
        <div class="text-[#ffffff]">Option 3</div>
      </div>
      <div
        class="group flex h-10 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all ease-out hover:bg-[#ffffff]/5"
        @mouseover="handleMouseOver(2)"
        @mouseleave="handleMouseLeave"
      >
        <span
          class="text-[#A0A0A0] transition-colors ease-out group-hover:text-[#ffffff]"
          ><svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.75 3.75V3h-1.5V11.095a3.001 3.001 0 103.671 3.592 6.75 6.75 0 005.766-5.766 3.001 3.001 0 10-1.512-.036 5.25 5.25 0 01-4.29 4.29 3.006 3.006 0 00-2.135-2.08V3.75zM15.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            ></path></svg
        ></span>
        <div class="text-[#ffffff]">Option 3</div>
      </div>
      <div
        class="group flex h-10 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all ease-out hover:bg-[#ffffff]/5"
        @mouseover="handleMouseOver(3)"
        @mouseleave="handleMouseLeave"
      >
        <div class="flex h-5 w-5 items-center justify-center">
          <div class="h-2 w-2 rounded-full bg-[#1AFFD8]"></div>
        </div>
        <div class="text-[#ffffff]">Option 4</div>
      </div>
      <div
        class="group group flex h-10 cursor-pointer items-center justify-between gap-2 rounded-lg px-2 transition-all ease-out hover:bg-[#ffffff]/5"
        @mouseover="handleMouseOver(4)"
        @mouseleave="handleMouseLeave"
      >
        <div class="flex items-center gap-2 text-[#A0A0A0]">
          <span
            class="text-[#A0A0A0] transition-colors ease-out group-hover:text-[#ffffff]"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_100_328)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.891 12.403l.092.229c.246.613.517 1.473.517 2.368 0 .359-.044.713-.112 1.05a7.162 7.162 0 002.322-1.297l.515-.43.663.097c.36.052.732.08 1.112.08 3.784 0 6.5-2.644 6.5-5.5S13.784 3.5 10 3.5 3.5 6.144 3.5 9c0 1.182.442 2.293 1.231 3.215l.16.188zm-.077 5.362C3.76 18 3 18 3 18s.433-.69.73-1.563C3.882 15.983 4 15.48 4 15c0-.617-.193-1.27-.409-1.81C2.591 12.022 2 10.572 2 9c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7c-.453 0-.897-.033-1.33-.096A8.656 8.656 0 017 17a9.572 9.572 0 01-2.186.765z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_100_328">
                  <path transform="translate(2 2)" d="M0 0H16V16H0z"></path>
                </clipPath>
              </defs></svg
          ></span>
          <div class="text-[#ffffff]">Option 5</div>
        </div>
        <div
          class="h-5 w-5 rounded-full bg-[#0F3058] text-center text-[11px] font-medium text-[#52A9FF]"
        >
          2
        </div>
      </div>
    </div>
    <div class="border-t border-white/5 p-2">
      <div
        class="group flex h-10 cursor-pointer items-center gap-2 rounded-lg px-2 transition-all ease-out hover:bg-[#FF2930]/10"
        @mouseover="handleMouseOver(5)"
        @mouseleave="handleMouseLeave"
      >
        <span class="text-[#DA3036] transition-colors ease-out"
          ><svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            class="fill-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.75 4.75a1.25 1.25 0 112.5 0V5h-2.5v-.25zM7.25 5v-.25a2.75 2.75 0 015.5 0V5H17v1.5h-1.115l-.707 9.192A2.5 2.5 0 0112.685 18h-5.37a2.5 2.5 0 01-2.493-2.308L4.115 6.5H3V5h4.25zm-.932 10.577L5.62 6.5h8.76l-.698 9.077a1 1 0 01-.997.923h-5.37a1 1 0 01-.997-.923z"
            ></path></svg
        ></span>
        <div class="text-[#DA3036]">Option 6</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const msgOnHover = ref<{
  title: string;
  desc: string;
}>({
  title: "Hello",
  desc: "hello world",
})

function handleMouseOver(index: number) {
  msgOnHover.value = {
    title: `Message/${index + 1}`,
    desc: `test/${index + 1}`,
  };
}

function handleMouseLeave() {
  msgOnHover.value = {
    title: "Hello",
    desc: "hello world",
  };
}
</script>
