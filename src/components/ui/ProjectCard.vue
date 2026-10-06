<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';
import ProjectArtwork from '@/components/ui/ProjectArtwork.vue';
import TagPill from '@/components/ui/TagPill.vue';
import type { Project, ProjectKind } from '@/types/project';
import { toneSurfaceClasses } from '@/utils/toneClasses';

defineProps<{ project: Project }>();

const kindLabels: Record<ProjectKind, string> = {
    work: 'Work',
    personal: 'Personal',
    sport: 'Sport',
};
</script>

<template>
    <article
        class="group relative flex h-full flex-col rounded-[2rem] bg-white p-3 shadow-soft ring-1 ring-ink/5 transition duration-500 ease-(--ease-bounce) hover:-translate-y-1 hover:shadow-lift"
    >
        <div
            class="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] md:aspect-video"
            :class="toneSurfaceClasses[project.tone]"
        >
            <img
                v-if="project.imageUrl"
                :src="project.imageUrl"
                :alt="`Screenshot of ${project.title}`"
                loading="lazy"
                class="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <ProjectArtwork
                v-else
                :artwork="project.artwork"
                class="size-full transition-transform duration-700 ease-(--ease-gentle) group-hover:scale-105"
            />
        </div>

        <div class="flex flex-1 flex-col p-4 pt-6 sm:p-5 sm:pt-6">
            <div class="flex flex-wrap items-center gap-2">
                <TagPill tone="ink">{{ kindLabels[project.kind] }}</TagPill>
                <span v-for="tag in project.tags" :key="tag" class="text-xs font-medium text-ink-soft">
                    {{ tag }}
                </span>
            </div>
            <h3 class="mt-4 text-2xl font-semibold">
                <a
                    v-if="project.url"
                    :href="project.url"
                    target="_blank"
                    rel="noopener"
                    class="after:absolute after:inset-0 after:rounded-[2rem] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-accent-ink"
                >
                    {{ project.title }}
                </a>
                <template v-else>{{ project.title }}</template>
            </h3>
            <p class="mt-2 leading-relaxed text-ink-soft">{{ project.description }}</p>
            <p
                v-if="project.url"
                class="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-accent-ink"
                aria-hidden="true"
            >
                Visit site
                <ArrowUpRight
                    class="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </p>
        </div>
    </article>
</template>
