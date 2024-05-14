<script setup>
import { onMounted, ref } from 'vue';

const reviews = ref([]);
const error = ref(null);

onMounted(() => {
  getReviwsSection();
});

const getReviwsSection = () => {
  fetch('https://hovedopgave-f875e-default-rtdb.firebaseio.com/reviews.json', {
    method: 'GET'
  })
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    reviews.value = res;
  })
  .catch((err) => {
    console.log(err);
    error.value = 'Kunne ikke hente data';
  });
};

</script>

<template>
  <section id="reviews_section">
    <div class="reviews_container">
      <div v-for="(  reviews, index) in reviews" :key="index" class="reviews_box"> 
        <div>
              <img id="reviews_img" :src="reviews.image" alt="reviews billede" class="reviews_image" />
          </div>
        <div>
          <p class="reviews_education">{{ reviews.education }}</p> 
        </div>  
        <div>
          <p class="reviews_message">{{ reviews.message }}</p> 
        </div> 
        <div>
          <p class="reviews_name">{{ reviews.name }}</p> 
        </div>
        <div>
          <p class="reviews_titel">{{ reviews.titel }}</p> 
        </div>  
      </div>
    </div>
  </section>
</template>