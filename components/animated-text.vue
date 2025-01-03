<template>
  <h1 class="relative inline text-6xl font-bold">
    <span>
      {{ props.text }}
      <span
        class="absolute inset-0 h-full overflow-hidden bg-white mix-blend-darken brightness-200"
      >
        <span
          v-for="item in 5"
          class="pop absolute inline-block aspect-square h-full mix-blend-multiply blur-sm"
        />
      </span>
    </span>
  </h1>
</template>

<script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
</script>

<style scoped>
@keyframes pop {
  50% {
    background-size: 100% 100%;
  }
}

.pop {
  background: radial-gradient(hsl(var(--h) 100% 70%) 25%, transparent 50%);
  animation: scale var(--s, 2s) var(--d, 0s) infinite alternate;
  left: var(--x, 0);
  top: var(--y, 0);
  translate: -50% -50%;
}

.pop:nth-of-type(1) {
  --x: 10%;
  --y: 25%;
  --h: 277;
  --s2: 6;
  --d: -0.25s;
  --s: 6s;
}

.pop:nth-of-type(2) {
  --x: 50%;
  --y: 45%;
  --h: 140;
  --s2: 5;
  --d: -0.75s;
  --s: 5s;
}
.pop:nth-of-type(3) {
  --x: 65%;
  --y: 75%;
  --h: 210;
  --s2: 3;
  --d: -0.5s;
  --s: 3s;
}
.pop:nth-of-type(4) {
  --x: 85%;
  --y: 15%;
  --h: 320;
  --s2: 5;
  --d: -1s;
  --s: 2s;
}
.pop:nth-of-type(5) {
  --x: 15%;
  --y: 100%;
  --h: 40;
  --s2: 3;
  --d: -1s;
  --s: 2s;
}

@keyframes scale {
  to {
    scale: var(--s2);
  }
}
</style>
