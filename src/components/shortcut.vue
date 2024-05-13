<template>
    <section class="section_secondary">
      <div class="max_width">
        <div class="heading_wrap_center">
          <h2>
            Frequently Asked <br /> Questions
          </h2>
        </div>
        <div :class="itemWrapClass">
          <div v-for="(item, index) in questions" :key="index" :class="itemClass">
            <div :class="questionClass" @click="toggleQuestion(index)">
              <h3 :class="h3SmallClass">{{ item.question }}</h3>
              <span :class="colorClass">
                {{ openIndex === index ? '-' : '+' }}
              </span>
            </div>
            <div v-if="openIndex === index" :class="answerClass">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const openIndex = ref(null);
  
  const questions = ref([
    {
      question: "Hej",
      answer: "Hej",
    }
  ]);
  
  function toggleQuestion(index) {
    openIndex.value = openIndex.value === index ? null : index;
  }
  
  const itemWrapClass = 'item_wrap'; // Change to actual CSS class name
  const itemClass = 'item'; // Change to actual CSS class name
  const questionClass = 'question'; // Change to actual CSS class name
  const h3SmallClass = 'h3_small'; // Change to actual CSS class name
  const colorClass = 'color'; // Change to actual CSS class name
  const answerClass = 'answer'; // Change to actual CSS class name
  </script>
  
  <style scoped>
    .item_wrap {
    margin-top: 80px;
}

.item {
    background-color: rgba(255, 255, 255, .25);
    margin-bottom: 20px;
    padding: 30px;
    border-radius: 50px;
    cursor: pointer;
}

.question {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.color {
    color: #146AED;
    font-size: 80px;
    padding: 0;
    margin: 0;
    height: 50px;
    display: flex;
    align-items: center;
}

.h3_small {
    font-size: 22px;
}

@media screen and (max-width: 1110px) {

    .h3_small {
        font-size: 20px;
    }
}

@media screen and (max-width: 890px) {

    .item {
        padding: 15px 20px;
    }

    .item_wrap {
        margin-top: 40px;
    }

    .color {
        font-size: 60px;
    }

    .h3_small {
        font-size: 18px;
    }
}

@media screen and (max-width: 540px) {

    .h3_small {
        font-size: 16px;
    }

    .color {
        font-size: 50px;
    }

    
}



  </style>
  