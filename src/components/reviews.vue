<script setup>
import { onMounted, ref } from 'vue';

const reviews = ref([]);
const error = ref(null);

onMounted(() => {
  getReviwsSection();
});

const getReviwsSection = () => {
  fetch('https://hovedopgave-f875e-default-rtdb.firebaseio.com/reviws.json', {
    method: 'GET'
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    rewies.value = res;
  })
  .catch((err) => {
    console.log(err);
    error.value = 'Kunne ikke hente data';
  });
};
</script>

<template>
  <section id="reviws_section">
    <div class="reviws_container">
      <div v-for="(  reviws, index) in reviews" :key="index" class="reviws_box"> 
        <div>
              <img id="reviws_img" :src="reviews.image" alt="reviws billede" class="reviws_image" />
          </div>
        <div>
          <p class="reviws_education">{{ reviws.education }}</p> 
        </div>  
        <div>
          <p class="reviws_message">{{ reviws.message }}</p> 
        </div> 
        <div>
          <p class="reviws_name">{{ reviews.name }}</p> 
        </div>
        <div>
          <p class="reviws_titel">{{ reviews.titel }}</p> 
        </div>  
      </div>
    </div>
  </section>
</template>