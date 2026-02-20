<script setup>
import SocialIcons from "./SocialIcons.vue";

const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-secondary py-2.5 text-muted">
    <div class="mx-auto flex max-w-7xl flex-row items-center justify-between px-4">
      <div>logo</div>
      <div>&copy; 2022-{{ year }} Tom Grootjans. All rights reserved</div>
      <div>
        <SocialIcons />
      </div>
    </div>
  </footer>
</template>
