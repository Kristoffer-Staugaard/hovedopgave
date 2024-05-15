<template>
  <section id="reviews_section">
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

<script>
export default {
  data() {
    return {
      reviews: [
        { image: 'path/to/image1.jpg', name: 'John Doe', education: 'MSc Computer Science', titel: 'Great Service', message: 'I had a wonderful experience...' },
        { image: 'path/to/image2.jpg', name: 'Jane Smith', education: 'BA Literature', titel: 'Amazing Quality', message: 'The quality of the product was excellent...' },
        { image: 'path/to/image3.jpg', name: 'Alice Johnson', education: 'PhD Biology', titel: 'Highly Recommend', message: 'The service was top-notch...' },
        { image: 'path/to/image4.jpg', name: 'Bob Brown', education: 'MBA Business', titel: 'Fantastic Support', message: 'The support team was very helpful...' },
        // Tilføj flere anmeldelser efter behov
      ],
      currentIndex: 0,
    };
  },
  computed: {
    visibleReviews() {
      const start = this.currentIndex;
      const end = (this.currentIndex + 2) % this.reviews.length;
      if (start < end) {
        return this.reviews.slice(start, end);
      } else {
        return [...this.reviews.slice(start), ...this.reviews.slice(0, end)];
      }
    }
  },
  methods: {
    prevReview() {
      this.currentIndex = (this.currentIndex - 2 + this.reviews.length) % this.reviews.length;
    },
    nextReview() {
      this.currentIndex = (this.currentIndex + 2) % this.reviews.length;
    }
  }
};
</script>

<style scoped>
.reviews_container {
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
}

.reviews_wrapper {
  display: flex;
  width: 100%;
  transition: transform 0.5s ease;
}

.reviews_box {
  flex: 0 0 50%;
  box-sizing: border-box;
  padding: 10px;
}

.carousel-enter-active, .carousel-leave-active {
  transition: opacity 0.5s;
}
.carousel-enter, .carousel-leave-to /* .carousel-leave-active in <2.1.8 */ {
  opacity: 0;
}

.btn-wrap {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.carousel-btn {
  background: none;
  border: none;
  cursor: pointer;
}

.btn-div {
  font-size: 2em;
}
</style>
