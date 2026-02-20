<script setup>
import { computed } from "vue";

const colorOptions = [
  "bg-cyan",
  "bg-pastel-green",
  "bg-pastel-blue",
  "bg-cotton-candy",
  "bg-light-peach",
];
const rng = Math.floor(Math.random() * colorOptions.length);
const colorClass = colorOptions[rng];

const props = defineProps(["project"]);

const landscapeImage = computed(
  () => props.project.image.width > props.project.image.height
);
</script>

<template>
  <div
    class="project-card mb-16 w-full sm:w-1/2 lg:w-1/3"
    :class="colorClass"
  >
    <figure
      class="project-figure h-[400px] overflow-hidden rounded-lg"
      :class="{ 'landscape-figure': landscapeImage }"
    >
      <img
        v-if="landscapeImage"
        src="../assets/macbook.png"
        alt=""
        srcset=""
        class="device-mockup"
      />
      <img v-else src="../assets/iphone-x.png" alt="" srcset="" class="device-mockup phone" />
      <img :src="project.image.url" alt="" class="project-image" />
    </figure>
    <h5 class="mt-2">{{ project.title }}</h5>
    <p class="lead">{{ project.desc }}</p>
  </div>
</template>

<style scoped>
.project-figure {
  position: relative;
}

.project-figure img {
  width: 100%;
  height: auto;
}

.project-figure .project-image {
  position: relative;
  z-index: 2;
  top: 0;
  left: 0;
}

/* Phone mockup layout */
.project-figure:not(.landscape-figure) {
  padding: 40px 60px 0 60px;
}

.project-figure:not(.landscape-figure) .device-mockup {
  position: absolute;
  top: 55px;
  left: 80px;
  width: calc(100% - 160px);
  z-index: 1;
}

/* Landscape mockup layout */
.project-figure.landscape-figure {
  padding: 40px 0 40px 20px;
}

.project-figure.landscape-figure .device-mockup {
  width: auto;
  height: 240px;
  position: absolute;
  top: 50px;
  left: 75px;
  overflow: hidden;
  margin-bottom: 30px;
}

/* Card background tints for figure */
.project-card.bg-cyan figure {
  background: #a0dcff;
}
.project-card.bg-pastel-green figure {
  background: #c1e5c0;
}
.project-card.bg-pastel-blue figure {
  background: #c0dae5;
}
.project-card.bg-cotton-candy figure {
  background: #ffc3d8;
}
.project-card.bg-light-peach figure {
  background: #fdd9d9;
}
</style>
