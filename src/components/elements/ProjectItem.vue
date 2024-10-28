<script setup>
import { projectImg } from "@/utils.js";

defineProps({
  project: Object,
})

</script>
<template>
  <div class="col-lg-4 col-md-4 col-sm-6 project-card" >
    <div class="project-inner">
      <div class="project-img">
        <!-- <figure>
          <img class="img-fluid" :src="projectImg(sys.id)" alt="">
          <a class="light" :href="fields.link" target="_blank"><img src="@/assets/img/gallery/icon.png" alt=""></a>
        </figure> -->
      </div>
      <div class="project-text">
        <h4>{{ project.name }}</h4>
        <p>{{ project.name }}</p>
      </div>
    </div>
  </div>
</template>
