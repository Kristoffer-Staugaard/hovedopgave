<template>
  <section>
    <div class="shortcut-wrap">
      <h2>Hvad kan vi tilbyde</h2>
      <p>UCL karrierevejledning har mulighed for at hjælpe dig som studerede gennem studiet, dyk ned i hvad vi kan tilbyde dig.</p>
      <div class="item-wrap">
        <div class="dropdown-wrap" v-for="(item, index) in dropdowns">
          <div class="dropdown" @click="toggleDropdown(index)">
            <h3>{{ item.dropdown }}</h3>
            <span>{{ openIndex === index ? '-' : '+' }}</span>
          </div>
          <div class="answer" v-if="openIndex === index">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const dropdowns = ref([
  { dropdown: "En til en vejledning", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Vejledning i klassen/hold", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Karrierevejledning i grupper", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "CV-tjek", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Digitale guides", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
]);

function toggleDropdown(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>


<style scoped>

.dropdown-wrap {
  border: solid 2px #CAE4E3;
  margin-bottom: 20px;
}

.dropdown {
  display: flex;
  justify-content: space-between;
  padding: 25px;
}

.answer {
  padding: 25px;
}

</style>
