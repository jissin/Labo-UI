<template>
  <div
    class="pt:10 flex max-w-screen-xl flex-col items-center justify-center gap-20 p-5 md:mx-auto md:gap-56 md:p-5 md:pt-12"
  >
    <header class="flex w-full justify-between">
      <div
        class="ml-auto flex w-10/12 flex-col gap-1 text-right font-redaction leading-tight"
      >
        <h1 class="w-full text-right text-4xl leading-tight md:text-[73px]">
          Showcases of <animated-text text="Labo UI" />
        </h1>
        <div class="text-2xl md:text-4xl">
          <a
            href="https://github.com/jissin/Labo-UI"
            class="mr-2 underline transition-colors duration-200"
            target="_blank"
            data-glitched="1"
            >MIT License.
          </a>
          built by
          <a
            href="https://github.com/jissin"
            class="underline transition-colors duration-200"
            target="_blank"
            data-glitched="1"
            >Jissin</a
          >
        </div>
      </div>
    </header>

    <display
      title="Image Gallery"
      intro="Minimalist image gallery, click on the image and preview it"
      :tags="['vue', 'tailwindcss', 'gsap']"
    >
      <gallery />
    </display>

    <display
      title="Infinite Scrolling Carousel"
      intro="An infinite scrolling carousel showing a list of logos."
      :tags="['vue', 'tailwindcss']"
    >
      <carousel />
    </display>

    <display
      title="Calendar Widget"
      intro="Calendar widget with information. Try clicking on the widget and interacting with it."
      :tags="['vue', 'tailwindcss', 'gsap']"
    >
      <widget />
    </display>

    <display
      title="Animated Cards"
      intro="A tiny set of animated cards. The idea is to bring a playful and informative way to display information."
      :tags="['vue', 'tailwindcss']"
    >
      <cards />
    </display>

    <display
      title="Header Dropdown"
      intro="An informative dynamic header that changes state as users hover on different options, providing additional context of each one of the options."
      :tags="['vue', 'tailwindcss']"
    >
      <dropdown />
    </display>

    <display
      title="Music Card"
      intro="Enable actions inside the card to trigger a playful and informative interaction."
      :tags="['vue', 'tailwindcss', 'gsap']"
    >
      <music-card />
    </display>

    <display
      title="Animated text"
      intro="Animated text with beautiful gradient motion."
      :tags="['vue', 'tailwindcss']"
    >
      <animated-text text="Labo UI" />
    </display>

    <footer class="mt-4 flex w-full justify-between py-6">
      <div class="text-xs text-white/20">
        Built out of experiment, not recommended for production
      </div>
      <div class="font-redaction text-sm text-white/15">
        Jissin • {{ new Date().getFullYear() }}
      </div>
    </footer>
  </div>
</template>
