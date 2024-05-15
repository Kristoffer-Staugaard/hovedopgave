<script setup>
import { onMounted, ref, computed } from 'vue';

const reviews = ref([]);
const currentIndex = ref(0);
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

const prevReview = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const nextReview = () => {
  if (currentIndex.value < reviews.value.length - 1) {
    currentIndex.value++;
  }
};

const currentReview = computed(() => {
  return reviews.value[currentIndex.value] || {};
});

onMounted(() => {
  getReviewsSection();
});
};

</script>

<template>
  <section id="reviews_section">
    <div class="reviews_container">
      <div v-for="(  reviews, index) in reviews" :key="index" class="reviews_box"> 
        <div class="style_reviews">
          <div>
                <img id="reviews_img" :src="reviews.image" alt="reviews billede" class="reviews_image" />
            </div>
            <div>
              <div class="style_name_education">
                  <p class="reviews_name">{{ reviews.name }}</p> 
              <div>
                <p class="reviews_education">{{ reviews.education }}</p> 
              </div> 
            </div> 
            </div>
      </div>
      <div class="style_titel_message">
        <div>
          <p class="reviews_titel">{{ reviews.titel }}</p> 
        </div>   
        <div>
          <p class="reviews_message">{{ reviews.message }}</p> 
        </div> 
      </div>
    </div>
  </div>
    <div class="btn-wrap">
      <button class="carousel-btn" @click="prevReview">
        <div class="btn-div">❮</div>
      </button>
      <button class="carousel-btn" @click="nextReview">
        <div class="btn-div">❯</div>
      </button>
    </div>
  </section>
</template>