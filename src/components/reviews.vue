<script setup>
import { ref, onMounted } from 'vue';

const reviews = ref([]);
const currentIndex = ref(0);
const error = ref(null);

const getReviewsFromFirebase = async () => {
  try {
    const response = await fetch('https://hovedopgave-f875e-default-rtdb.firebaseio.com/reviews.json');
    if (!response.ok) {
      throw new Error('Kunne ikke indlæse data fra Firebase');
    }
    const data = await response.json();
    reviews.value = Object.values(data);
  } catch (err) {
    console.error(err);
    error.value = 'Kunne ikke indlæse data fra Firebase';
  }
};

const visibleReviews = ref([]);
const updateVisibleReviews = () => {
  const start = currentIndex.value;
  const end = (currentIndex.value + 2) % reviews.value.length;
  if (start < end) {
    visibleReviews.value = reviews.value.slice(start, end);
  } else {
    visibleReviews.value = [...reviews.value.slice(start), ...reviews.value.slice(0, end)];
  }
};

const prevReview = () => {
  currentIndex.value = (currentIndex.value - 2 + reviews.value.length) % reviews.value.length;
  updateVisibleReviews();
};

const nextReview = () => {
  currentIndex.value = (currentIndex.value + 2) % reviews.value.length;
  updateVisibleReviews();
};

onMounted(() => {
  getReviewsFromFirebase();
});
</script>

<template>
  <section id="reviews_section">
  <h2>Hvad siger de studernde?</h2>
    <div class="reviews_container">
      <transition-group name="carousel" tag="div" class="reviews_wrapper">
        <div v-for="(review, index) in visibleReviews" :key="index" class="reviews_box"> 
          <div class="style_reviews">
            <div>
              <img id="reviews_img" :src="review.image" alt="reviews billede" class="reviews_image" />
            </div>
            <div>
              <div class="style_name_education">
                <p class="reviews_name">{{ review.name }}</p> 
                <div>
                  <p class="reviews_education">{{ review.education }}</p> 
                </div> 
              </div> 
            </div>
          </div>
          <div class="style_titel_message">
            <div>
              <p class="reviews_titel">{{ review.titel }}</p> 
            </div>   
            <div>
              <p class="reviews_message">{{ review.message }}</p> 
            </div> 
          </div>
        </div>
      </transition-group>
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

