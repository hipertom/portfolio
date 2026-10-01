<script setup>
import { Code2, Heart, Dumbbell } from 'lucide-vue-next'

const highlights = [
    {
        icon: Code2,
        title: 'Clean Code Advocate',
        description: 'Maintainable, well-tested code is my priority',
    },
    {
        icon: Heart,
        title: 'Team Player',
        description: 'Strong focus on collaboration and mentoring',
    },
    {
        icon: Dumbbell,
        title: 'Active Lifestyle',
        description: 'Padel, fitness, and running enthusiast',
    },
]
</script>

<template>
    <section id="about" class="py-32 px-6 relative scroll-mt-20">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-[#030a11] to-purple-900/10" />

        <div class="max-w-6xl mx-auto relative">
            <h2 class="text-sm uppercase tracking-wider text-purple-400 mb-6">About Me</h2>
            <p class="text-3xl text-slate-200 leading-relaxed mb-6 max-w-4xl">
                I'm a backend developer who loves crafting reliable systems that scale.
                When I'm not coding, you'll find me on the padel court, at the gym, or out for a run.
            </p>
            <p class="text-xl text-slate-400 leading-relaxed mb-16 max-w-3xl">
                I believe in writing code that's maintainable, well-tested, and easy to understand.
                My approach combines technical expertise with a strong focus on team collaboration and product thinking.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="(item, index) in highlights" :key="index"
                    class="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/5 hover:border-purple-500/30 transition-all duration-300 group">
                    <component :is="item.icon"
                        class="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 class="text-lg font-semibold text-white mb-2">{{ item.title }}</h3>
                    <p class="text-slate-400">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
