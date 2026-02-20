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
        :project="project"
        :index="index"
        :key="project.sys.id"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { projectsQuery } from "../assets/graphql/projectsQuery";

export default {
  data() {
    return {
      projects: [],
    };
  },
  async created() {
    this.projects = await this.getProjects();
  },
  methods: {
    async getProjects() {
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
    },
  },
  components: { ProjectCard },
};
</script>
