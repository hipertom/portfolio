<script setup lang="ts">
import ProjectCard from '@/components/ui/ProjectCard.vue';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import { projects } from '@/data/projects';
</script>

<template>
    <section id="projects" aria-labelledby="projects-title" class="page-container py-12">
        <SectionHeading id="projects-title" eyebrow="Projects" title="Things I've made, and things I'm making.">
            A mix of work I'm proud of and personal projects, on and off the track.
        </SectionHeading>

        <ul class="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            <li v-for="(project, index) in projects" :key="project.title" v-reveal="(index % 2) * 100">
                <ProjectCard :project="project" />
            </li>
        </ul>
    </section>
</template>
