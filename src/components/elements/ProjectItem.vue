<script setup>
defineProps({
  id: String,
  title: String,
  desc: String,
  link: String,
  tag: String,
  image: String,
})
</script>

<template>
<div class="col-lg-4 col-md-4 col-sm-6 project-card" >
  <div class="project-inner">
    <div class="project-img">
      <figure>
        <img class="img-fluid" :src="`/src/assets/img/gallery/${image}`" alt="">
        <a class="light" :href="link" target="_blank"><img src="@/assets/img/gallery/icon.png" alt=""></a>
      </figure>
    </div>
    <div class="project-text">
      <h4>{{ title }}</h4>
      <p>{{ desc }}</p>
    </div>
  </div>
</div>
</template>
