<script setup>
import {
  onMounted,
  ref
} from 'vue';

const arrangementer = ref({});
const error = ref(null);

onMounted(() => {
  getArrangementerSection();
});

const getArrangementerSection = () => {
  fetch('https://hovedopgave-f875e-default-rtdb.firebaseio.com/arrangementer.json', {
    method: 'GET'
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    arrangementer.value = res;
    console.log(arrangementer.value)
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
      <div v-for="(arrangement, index) in arrangementer" :key="index" class="arrangementer_box">  
        <div>
          <p class="arrangementer_dato">{{ arrangementerSection.dato }}</p>
        </div>  
        <div>
          <p class="arrangementer_location">{{ arrangementerSection.location }}</p>
        </div> 
        <div>
          <p class="arrangementer_titel">{{ arrangementerSection.titel }}</p>
        </div> 
      </div>
    </div>
  </section>
</template>