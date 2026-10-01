<script setup>
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import AppAbout from './components/AppAbout.vue'
import AppExperience from './components/AppExperience.vue'
import AppProjects from './components/AppProjects.vue'
import AppSkills from './components/AppSkills.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#030a11] overflow-x-hidden">
    <AppHeader />
    <AppHero />
    <AppAbout />
    <AppExperience />
    <AppProjects />
    <AppSkills />
    <AppFooter />
  </div>
</template>
