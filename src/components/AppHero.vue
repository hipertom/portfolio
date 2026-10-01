<script setup>
import { computed } from 'vue'

const age = computed(() => {
    const ageDifMs = Date.now() - new Date('1994-07-06').getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
})

function scrollToSection(e, href) {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
    <section id="hero" class="relative overflow-hidden border-b border-white/5">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#030a11] to-blue-900/20" />
        <div class="absolute inset-0"
            style="background: radial-gradient(ellipse at top right, rgba(168,85,247,0.2) 0%, transparent 60%)" />

        <div class="relative max-w-7xl mx-auto px-6 pt-32 pb-20 sm:pt-40 sm:pb-32">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-block mb-6 opacity-0 animate-[fadeInUp_0.6s_ease_forwards]">
                        <span
                            class="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                            Available for opportunities
                        </span>
                    </div>

                    <h1
                        class="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 opacity-0 animate-[fadeInUp_0.6s_0.1s_ease_forwards]">
                        Tom Grootjans
                    </h1>

                    <p
                        class="text-2xl sm:text-3xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 opacity-0 animate-[fadeInUp_0.6s_0.2s_ease_forwards]">
                        Senior software engineer
                    </p>

                    <p
                        class="text-lg text-slate-400 max-w-xl leading-relaxed mb-4 opacity-0 animate-[fadeInUp_0.6s_0.3s_ease_forwards]">
                        Enter at your own risk. I'm a developer, and while my code usually works,
                        there's always a chance you'll witness a glorious error.
                    </p>

                    <ul
                        class="text-slate-400 text-sm space-y-1 mb-8 opacity-0 animate-[fadeInUp_0.6s_0.35s_ease_forwards]">
                        <li>🎂 {{ age }} years old</li>
                        <li>📍 Zoetermeer, The Netherlands</li>
                        <li>🗣 Dutch &amp; English</li>
                    </ul>

                    <div class="flex flex-wrap gap-4 opacity-0 animate-[fadeInUp_0.6s_0.4s_ease_forwards]">
                        <a href="#projects" @click="(e) => scrollToSection(e, '#projects')"
                            class="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/25">
                            View Projects
                        </a>
                        <a href="#contact" @click="(e) => scrollToSection(e, '#contact')"
                            class="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300">
                            Get in Touch
                        </a>
                    </div>
                </div>

                <div class="relative opacity-0 animate-[fadeInScale_0.8s_0.3s_ease_forwards]">
                    <div
                        class="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-2xl opacity-20" />
                    <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img src="@/assets/img/tom-grootjans.jpeg" alt="Tom Grootjans"
                            class="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
