<script setup>
import { Briefcase, Users } from 'lucide-vue-next'

const experiences = [
    {
        role: 'Senior Backend Developer',
        company: 'Valicare',
        period: 'Mar 2025 - present',
        location: 'Den Haag',
        description: '@todo',
        current: true,
        icon: Briefcase,
    },
    {
        role: 'Team lead development & Backend Developer',
        company: 'ZIGT',
        period: 'Oct 2021 - Feb 2025',
        location: 'Hoofddorp',
        description: '@todo',
        current: false,
        icon: Briefcase,
    },
    {
        role: 'Backend Developer',
        company: 'Est Digital b.v.',
        period: 'Nov 2018 - Oct 2021',
        location: 'Leiden',
        description: '@todo',
        current: false,
        icon: Users,
    },
    {
        role: 'Backend Developer',
        company: 'KeesTM Internetbureau',
        period: 'Jan 2018 - Nov 2018',
        location: 'Leiden',
        description: '@todo',
        current: false,
        icon: Briefcase,
    },
]
</script>

<template>
    <section id="experience" class="py-32 px-6 relative scroll-mt-20">
        <div class="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-[#030a11] to-blue-900/10" />

        <div class="max-w-6xl mx-auto relative">
            <h2 class="text-sm uppercase tracking-wider text-purple-400 mb-12">Experience</h2>

            <div class="space-y-6">
                <div v-for="(exp, index) in experiences" :key="index"
                    class="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-white/5 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div v-if="exp.current" class="absolute top-8 right-8">
                        <span
                            class="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                            Current
                        </span>
                    </div>

                    <div class="flex items-start gap-6">
                        <div
                            class="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
                            <component :is="exp.icon" class="w-6 h-6 text-white" />
                        </div>

                        <div class="flex-1">
                            <h3 class="text-xl font-semibold text-white mb-2">{{ exp.role }}</h3>
                            <div class="flex items-center gap-3 mb-4 flex-wrap">
                                <span class="text-purple-400">{{ exp.company }}</span>
                                <span class="text-slate-600">•</span>
                                <span class="text-slate-500">{{ exp.period }}</span>
                                <span class="text-slate-600">•</span>
                                <span class="text-slate-500">{{ exp.location }}</span>
                            </div>
                            <p class="text-slate-400 leading-relaxed">{{ exp.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
