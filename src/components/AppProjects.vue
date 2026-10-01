<script setup>
import { ref, computed } from 'vue'
import { ExternalLink } from 'lucide-vue-next'
import projectsData from '@/data/projects.json'

const activeFilter = ref('*')
const visibleCount = ref(6)

const filters = [
    { label: 'All', value: '*' },
    { label: 'Drupal', value: 'drupal' },
    { label: 'Laravel', value: 'laravel' },
    { label: 'WordPress', value: 'wordpress' },
]

const tagColors = {
    laravel: 'from-red-600 to-orange-600',
    drupal: 'from-blue-600 to-cyan-600',
    wordpress: 'from-sky-600 to-blue-600',
}

const filteredProjects = computed(() => {
    if (activeFilter.value === '*') return projectsData
    return projectsData.filter((p) => p.tag === activeFilter.value)
})

const visibleProjects = computed(() => filteredProjects.value.slice(0, visibleCount.value))

const hasMore = computed(() => visibleCount.value < filteredProjects.value.length)

function setFilter(value) {
    activeFilter.value = value
    visibleCount.value = 6
}
</script>

<template>
    <section id="projects" class="py-32 px-6 relative scroll-mt-20">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-[#030a11] to-purple-900/10" />

        <div class="max-w-6xl mx-auto relative">
            <div class="mb-12">
                <h2 class="text-sm uppercase tracking-wider text-purple-400 mb-4">Selected Projects</h2>
                <p class="text-3xl text-slate-200 max-w-2xl">Featured work from my portfolio</p>
            </div>

            <div class="flex flex-wrap gap-2 mb-10">
                <button v-for="filter in filters" :key="filter.value" @click="setFilter(filter.value)"
                    class="px-4 py-2 rounded-lg text-sm transition-all duration-200 border" :class="activeFilter === filter.value
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-transparent'
                            : 'bg-white/5 text-slate-400 border-white/10 hover:border-purple-500/50 hover:text-white'
                        ">
                    {{ filter.label }}
                </button>
            </div>

            <TransitionGroup name="project-list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="project in visibleProjects" :key="project.id"
                    class="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden">
                    <div class="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl rounded-2xl"
                        :class="tagColors[project.tag] || 'from-purple-600 to-blue-600'" />

                    <div class="relative">
                        <div class="overflow-hidden rounded-t-2xl h-48 bg-slate-800">
                            <img :src="`/src/assets/img/gallery/${project.image}`" :alt="project.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                @error="(e) => (e.target.style.display = 'none')" />
                        </div>

                        <div class="p-6">
                            <div class="flex items-start justify-between mb-3">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs border" :class="{
                                    'bg-red-500/10 border-red-500/20 text-red-400': project.tag === 'laravel',
                                    'bg-blue-500/10 border-blue-500/20 text-blue-400': project.tag === 'drupal',
                                    'bg-sky-500/10 border-sky-500/20 text-sky-400': project.tag === 'wordpress',
                                }">
                                    {{ project.tag }}
                                </span>
                                <a :href="project.link" target="_blank" rel="noopener noreferrer"
                                    class="p-1.5 rounded-lg text-slate-500 hover:text-purple-400 transition-colors"
                                    aria-label="View project">
                                    <ExternalLink class="w-4 h-4" />
                                </a>
                            </div>

                            <h3 class="text-lg font-semibold text-white mb-2">{{ project.title }}</h3>
                            <p class="text-slate-400 text-sm leading-relaxed">{{ project.desc }}</p>
                        </div>
                    </div>
                </div>
            </TransitionGroup>

            <div v-if="hasMore" class="mt-10 text-center">
                <button @click="visibleCount += 3"
                    class="px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300 text-sm">
                    Load More
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
    transition: all 0.3s ease;
}

.project-list-enter-from,
.project-list-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.project-list-move {
    transition: transform 0.3s ease;
}
</style>
