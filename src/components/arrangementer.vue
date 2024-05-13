<script setup>
import { onMounted, ref } from 'vue';

const arrangementer = ref([]);
const error = ref(null);

onMounted(() => {
  getArrangementerSection();
});

const getArrangementerSection = () => {
  fetch('https://hovedopgave-f875e-default-rtdb.firebaseio.com/arragementer.json', {
    method: 'GET'
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    arrangementer.value = res;
  })
  .catch((err) => {
    console.log(err);
    error.value = 'Kunne ikke hente data';
  });
};
</script>

<template>
  <section id="arrangementer_section">
    <div class="arrangementer_container">
      <div v-for="(  arrangementer, index) in arrangementer" :key="index" class="arrangementer_box"> 
        <div class="">
              <img id="arrangementer_img" :src="arrangementer.image" alt="arrangementer billede" class="arrangementer_image" />
          </div>
        <div>
          <p class="arrangementer_dato">{{ arrangementer.dato }}</p> 
        </div>  
        <div>
          <p class="arrangementer_location">{{ arrangementer.location }}</p> 
        </div> 
        <div>
          <p class="arrangementer_titel">{{ arrangementer.titel }}</p> 
        </div> 
      </div>
    </div>
  </section>
</template>
