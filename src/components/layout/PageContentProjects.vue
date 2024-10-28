<script setup>
import { ref, onMounted } from 'vue'
import { projects } from "@/lib/stores/projects";
import ProjectItem from '../elements/ProjectItem.vue';
import FilterLink from '../elements/FilterLink.vue';

let projectLimit = ref(3)
let buttonShown = ref(true)

onMounted(() => {
  projects.init();
});

function increaseProjectLimit() {
  projectLimit.value += 3
  buttonShown.value = projectLimit.value < store.projects.filteredData.slice(0, projectLimit).length
}

</script>

<template>
  <section class="home_gallery_area p_120" id="projects">
    <div class="container">
      <div class="main_title">
        <h2>Featured projects</h2>
        <p>Who are in extremely love with eco friendly system.</p>
      </div>
      <div class="isotope_fillter">
        <ul class="gallery_filter list">
          <FilterLink label="All" value="*" />
          <FilterLink label="Drupal" value="drupal" />
          <FilterLink label="Laravel" value="laravel" />
          <FilterLink label="Wordpress" value="wordpress" />
        </ul>
      </div>
    </div>

    <div class="container">

      <template v-if="projects.current">
        <TransitionGroup name="list" tag="div" class="row">
          <template v-for="project in projects.current" :key="project.$id">
            <ProjectItem :project="project" />
          </template>
        </TransitionGroup>
      </template>

      <div v-else>Loading...</div>

      <div v-show="buttonShown" class="more_btn">
        <a class="main_btn" @click="increaseProjectLimit">Load More Items</a>
      </div>

    </div>

  </section>
</template>
