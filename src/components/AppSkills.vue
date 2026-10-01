<script setup>
import { Code, Palette, Wrench } from 'lucide-vue-next'

const skillGroups = [
    {
        category: 'Backend',
        icon: Code,
        skills: ['PHP', 'Laravel'],
        gradient: 'from-pink-600 to-blue-600',
    },
    {
        category: 'Frontend',
        icon: Palette,
        skills: ['Vue.js', 'Tailwind CSS', 'TypeScript', 'Inertia'],
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        category: 'Tools & Infrastructure',
        icon: Wrench,
        skills: ['Git', 'Docker', 'MySQL', 'RabbitMQ'],
        gradient: 'from-purple-600 to-pink-600',
    },
]
</script>

<template>
    <section id="skills" class="py-32 px-6 relative border-t border-white/5 scroll-mt-20">
        <div class="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-[#030a11] to-[#030a11]" />

        <div class="max-w-6xl mx-auto relative">
            <div class="mb-12">
                <h2 class="text-sm uppercase tracking-wider text-purple-400 mb-4">Skills & Technologies</h2>
                <p class="text-3xl text-slate-200 max-w-2xl">
                    Building modern web applications
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(group, index) in skillGroups" :key="index" class="space-y-4">
                    <div class="flex items-center gap-3 mb-6">
                        <div class="p-2 rounded-lg bg-gradient-to-r" :class="group.gradient">
                            <component :is="group.icon" class="w-5 h-5 text-white" />
                        </div>
                        <h3 class="text-xl font-semibold text-white">{{ group.category }}</h3>
                    </div>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="skill in group.skills" :key="skill"
                            class="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 border border-white/5 text-slate-300 hover:border-purple-500/50 hover:bg-slate-800 hover:text-white transition-all duration-200 text-sm">
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
