<template>
  <header class="absolute left-0 right-0 top-0 z-[2] w-full bg-transparent py-2.5">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4">
      <a href="#about" class="flex shrink-0">
        <img
          src="@/assets/tom.webp"
          alt="Tom Grootjans"
          class="h-[50px] w-[50px] rounded-full object-cover"
        />
      </a>

      <ul class="flex list-none gap-6 p-0">
        <li>
          <a href="#about" class="text-sm font-bold leading-5 text-primary no-underline">About</a>
        </li>
        <li>
          <a href="#projects" class="text-sm font-bold leading-5 text-primary no-underline">Projects</a>
        </li>
      </ul>

      <div class="flex">
        <SocialIcons />
      </div>
    </nav>
  </header>
</template>

<script setup>
import SocialIcons from "./SocialIcons.vue";
</script>
