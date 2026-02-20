<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiInstagram, mdiGithub, mdiLinkedin } from "@mdi/js";

const socials = [
  { icon: mdiGithub, url: "https://asd.com" },
  { icon: mdiLinkedin, url: "https://asd.com" },
  { icon: mdiInstagram, url: "https://asd.com" },
];
</script>

<template>
  <nav class="social-nav">
    <ul class="flex list-none gap-2.5 p-0">
      <li
        v-for="(item, index) in socials"
        :key="index"
        class="inline-block rounded-full bg-white/10 p-1.5"
      >
        <a :href="item.url" class="social-link block">
          <SvgIcon type="mdi" :path="item.icon"></SvgIcon>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.social-link :deep(svg path) {
  fill: var(--color-muted);
  transition: fill 0.1s linear;
}
.social-link:hover :deep(svg path),
.social-link:active :deep(svg path) {
  fill: #fff;
}
</style>
