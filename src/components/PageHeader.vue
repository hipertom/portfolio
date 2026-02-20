<template>
  <div class="w-full">
    <div class="flex">
      <div class="flex min-w-0 flex-1 flex-col pt-[100px]" style="flex: 2">
        <div class="flex flex-1 flex-col items-center justify-center" id="about">
          <div class="flex w-[35%] min-w-0 flex-col justify-center">
            <h1 class="mb-4">Tom Grootjans</h1>
            <p class="lead">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
              voluptatem dicta facilis nam quod repellat.
            </p>
          </div>
        </div>
      </div>
      <div class="page-header-right flex min-w-0 flex-1 flex-col items-end justify-end bg-primary pt-[100px]"
        style="flex: 1">
        <div class="flex flex-1 flex-col items-end justify-end">
          <HeroSvgs />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSvgs from "@/assets/HeroSvgs.vue";
</script>

<style scoped>
/* Right column SVG overflow - design intent */
.page-header-right :deep(svg) {
  width: 110%;
}
</style>
