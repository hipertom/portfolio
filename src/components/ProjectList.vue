<script setup>
import { ref, onMounted } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { projectsQuery } from "../assets/graphql/projectsQuery";

const projects = ref([]);

async function getProjects() {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${
    import.meta.env.VITE_CONTENTFUL_SPACE_ID
  }`;
  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
      }`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: projectsQuery }),
  };
  try {
    const response = await fetch(fetchUrl, fetchOptions).then((res) =>
      res.json()
    );
    return response.data.projectCollection.items;
  } catch (error) {
    throw new Error("Could not receive the data from Contentful!");
  }
}

onMounted(async () => {
  projects.value = await getProjects();
});
</script>

<template>
  <div class="project-list mx-auto max-w-7xl px-4 pt-20" id="projects">
    <div class="flex flex-wrap">
      <div class="w-full">
        <h2 class="pb-12">Selected works</h2>
      </div>
    </div>
    <div class="flex flex-wrap gap-x-4">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.sys.id"
        :project="project"
        :index="index"
      />
    </div>
  </div>
</template>
