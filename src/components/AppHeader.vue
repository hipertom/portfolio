<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
]

function handleScroll() {
    isScrolled.value = window.scrollY > 50
}

function scrollToSection(e, href) {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    isMobileMenuOpen.value = false
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        :class="isScrolled ? 'bg-[#030a11]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent border-b border-transparent'">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <a href="#hero" @click="(e) => scrollToSection(e, '#hero')"
                    class="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200 inline-block">
                    TG
                </a>

                <nav class="hidden md:flex items-center gap-8">
                    <a v-for="item in navItems" :key="item.href" :href="item.href"
                        @click="(e) => scrollToSection(e, item.href)"
                        class="text-slate-400 hover:text-white transition-colors duration-200 relative group text-sm">
                        {{ item.label }}
                        <span
                            class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                    </a>
                </nav>

                <div class="flex items-center gap-4">
                    <a href="#contact" @click="(e) => scrollToSection(e, '#contact')"
                        class="hidden sm:block px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm">
                        Get in Touch
                    </a>

                    <button @click="isMobileMenuOpen = !isMobileMenuOpen"
                        class="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        aria-label="Toggle menu">
                        <X v-if="isMobileMenuOpen" class="w-6 h-6" />
                        <Menu v-else class="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    </header>

    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isMobileMenuOpen"
            class="fixed top-[73px] left-0 right-0 z-40 bg-[#030a11]/95 backdrop-blur-xl border-b border-white/5 md:hidden">
            <nav class="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
                <a v-for="item in navItems" :key="item.href" :href="item.href"
                    @click="(e) => scrollToSection(e, item.href)"
                    class="text-slate-400 hover:text-white transition-colors duration-200 py-2 text-sm">
                    {{ item.label }}
                </a>
                <a href="#contact" @click="(e) => scrollToSection(e, '#contact')"
                    class="mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm text-center">
                    Get in Touch
                </a>
            </nav>
        </div>
    </Transition>
</template>
