<template>
  <div
    class="box m-auto grid max-h-full max-w-full grid-cols-4 grid-rows-2 items-center justify-items-center gap-[8%] p-[8%] opacity-0"
  >
    <img
      :src="item.src"
      class="photo cursor-pointer bg-white/10 object-contain"
      :alt="item.caption"
      v-for="(item, index) in sources"
      @click="throttleOpen(index)"
      :style="{ order: index, aspectRatio: item.width / item.height }"
      :id="'figure-' + index"
    />

    <div
      v-if="activeIndex > -1"
      class="fixed inset-0 z-10 flex cursor-pointer items-center justify-center bg-transparent"
      id="mask"
      @click="throttleClose"
    >
      <img
        :src="sources[activeIndex].src"
        id="active-image"
        class="will-change-transform"
        :class="isScreenRatioGreaterThanImageRatio ? 'h-full' : 'w-full'"
        :style="{
          aspectRatio: sources[activeIndex].width / sources[activeIndex].height,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

interface Source {
  src: string;
  width: number;
  height: number;
  caption: string;
}

const sources: Source[] = [
  {
    src: "/showcases/2.webp",
    width: 1400,
    height: 942,
    caption: "caption text",
  },
  {
    src: "/showcases/1.webp",
    width: 1400,
    height: 1917,
    caption: "caption text",
  },
  {
    src: "/showcases/7.webp",
    width: 1400,
    height: 1038,
    caption: "caption text",
  },
  {
    src: "/showcases/4.webp",
    width: 1400,
    height: 1212,
    caption: "caption text",
  },
  {
    src: "/showcases/5.webp",
    width: 1400,
    height: 1796,
    caption: "caption text",
  },
  {
    src: "/showcases/6.webp",
    width: 1400,
    height: 988,
    caption: "caption text",
  },
  {
    src: "/showcases/3.webp",
    width: 1400,
    height: 1672,
    caption: "caption text",
  },
  {
    src: "/showcases/8.webp",
    width: 1400,
    height: 1142,
    caption: "caption text",
  },
];

const screenRadio = useScreenRadio();

const throttleOpen = useThrottleFn(open, 520);
const throttleClose = useThrottleFn(close, 520);

const activeIndex = ref(-1);

function open(index: number) {
  activeIndex.value = index;
  nextTick(() => {
    const activeImage = document.querySelector("#active-image") as HTMLImageElement | null;
    if (!activeImage) return
    const activeImageRect = activeImage.getBoundingClientRect();

    const originalImage = document.querySelector(`#figure-${index}`) as HTMLImageElement | null;
    if (!originalImage) return
    const originalImageRect = originalImage.getBoundingClientRect();

    const scaleRadio = originalImageRect.width / activeImageRect.width;

    setTimeout(() => {
      originalImage.classList.toggle("invisible");
    }, 70);

    const { x, y } = getScaledClientRect(activeImage, scaleRadio);

    gsap.from(activeImage, {
      x: originalImageRect.x - x,
      y: originalImageRect.y - y,
      scale: scaleRadio,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: (e) => {},
    });

    const mask = document.querySelector("#mask") as HTMLDivElement | null;
    gsap.to(mask, {
      backgroundColor: "rgba(0,0,0)",
      duration: 0.5,
      ease: "power2.inOut",
    });
  });
}

function close() {
  const index = activeIndex.value;
  const activeImage = document.querySelector("#active-image") as HTMLImageElement | null;
  if (!activeImage) return
  const activeImageRect = activeImage.getBoundingClientRect();

  const originalImage = document.querySelector(`#figure-${index}`) as HTMLImageElement | null;
  if (!originalImage) return
  const originalImageRect = originalImage.getBoundingClientRect();

  const scaleRadio = originalImageRect.width / activeImageRect.width;

  const { x, y } = getScaledClientRect(activeImage, scaleRadio);

  gsap.to(activeImage, {
    x: originalImageRect.x - x,
    y: originalImageRect.y - y,
    scale: scaleRadio,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: (e) => {
      originalImage.classList.toggle("invisible");
      activeIndex.value = -1;
    },
  });

  const mask = document.querySelector("#mask") as HTMLDivElement | null;
  if (!mask) return
  gsap.to(mask, {
    backgroundColor: "rgba(0,0,0,0)",
    duration: 0.5,
    ease: "power2.inOut",
  });
}

function getScaledClientRect(element: HTMLImageElement, radio: number) {
  // 获取元素原始的位置信息
  const rect1 = element.getBoundingClientRect();

  // 计算缩放后的元素大小
  const width = rect1.width * radio;
  const height = rect1.height * radio;

  // 计算缩放后的元素中心点
  const { innerWidth, innerHeight } = window;
  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;

  // 计算缩放后的元素位置
  const rect2 = {
    x: centerX - width / 2,
    y: centerY - height / 2,
    width,
    height,
  };

  return rect2;
}

const isScreenRatioGreaterThanImageRatio = ref<boolean>(false);

function updateisScreenRatioGreaterThanImageRatio() {
  const { width, height } =
    document.querySelector("#active-image")?.getBoundingClientRect() || {};
  isScreenRatioGreaterThanImageRatio.value = screenRadio.value > width / height;
}

onMounted(() => {
  const box = document.querySelector(".box");
  box && box.classList.remove("opacity-0");

  watchEffect(() => {
    if (activeIndex.value > -1) {
      document.body.style.overflow = "hidden";
      nextTick(updateisScreenRatioGreaterThanImageRatio);
    } else {
      document.body.style.overflow = "auto";
    }
  });

  watchEffect(updateisScreenRatioGreaterThanImageRatio);

  const items = document.querySelectorAll(".photo");
  gsap.from(items, {
    ease: "power2.inOut",
    duration: 0.5,
    opacity: 0,
    scale: 0.8,
    stagger: {
      each: 0.1,
      from: "random",
    },
  });
});
</script>
