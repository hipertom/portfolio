<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const currentYear = new Date().getFullYear()

const socialLinks = [
    { icon: Github, href: 'https://github.com/tomgrootjans', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/tomgrootjans', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tom@grootjans.dev', label: 'Email' },
]
</script>

<template>
    <footer id="contact" class="py-20 px-6 border-t border-white/5 relative scroll-mt-20">
        <div class="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-[#030a11] to-[#030a11]" />

        <div class="max-w-6xl mx-auto relative">
            <div class="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                <div>
                    <h3 class="text-2xl font-bold text-white mb-2">Let's Connect</h3>
                    <p class="text-slate-400">Open to new opportunities and collaborations</p>
                </div>

                <div class="flex gap-4">
                    <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank"
                        rel="noopener noreferrer" :aria-label="link.label"
                        class="p-3 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300">
                        <component :is="link.icon" class="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="text-slate-500 text-sm">
                    © {{ currentYear }} Tom Grootjans. All rights reserved.
                </div>
                <div class="text-slate-600 text-sm">
                    Made with <span class="text-pink-500">❤</span> using Vue &amp; Tailwind CSS
                </div>
            </div>
        </div>
    </footer>
</template>
