<script setup>
import { computed } from 'vue'
import SocialIcons from "./../elements/SocialIcons.vue"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCakeCandles, faEarthEurope, faLanguage, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const age = computed(() => {
  var ageDifMs = Date.now() - new Date("1994-07-06").getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
})

</script>

<template>
  <section class="home_banner_area" id="hero">
    <div class="container box_1620">
      <div class="banner_inner d-flex align-items-center">
        <div class="banner_content">
          <div class="media">
            <div class="media-profile">
              <img src="@/assets/img/tom-grootjans.jpeg" alt="">
            </div>
            <div class="media-body">
              <div class="personal_text">
                <h6>Hello, I am</h6>
                <h3>Tom Grootjans</h3>
                <h4>Software Engineer</h4>
                <p>Enter at your own risk. I'm a developer, and while my code usually works, there's always a chance
                  you'll witness a glorious error.</p>

                <ul class="list basic_info">
                  <li><span style="width: 25px; display: inline-block;">
                      <FontAwesomeIcon :icon="faCakeCandles" />
                    </span> {{ age }} years old</li>
                  <li><span style="width: 25px; display: inline-block;">
                      <FontAwesomeIcon :icon="faLocationDot" />
                    </span> Zoetermeer</li>
                  <li><span style="width: 25px; display: inline-block;">
                      <FontAwesomeIcon :icon="faEarthEurope" />
                    </span> The Netherlands</li>
                  <li><span style="width: 25px; display: inline-block;">
                      <FontAwesomeIcon :icon="faLanguage" />
                    </span> Dutch & English</li>
                </ul>

                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
