<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const dropdowns = ref([
  { dropdown: "Fællesdel", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Specialisering", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Undervisning", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Labs til rådighed", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { dropdown: "Studiedokumenter", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
]);

function toggleDropdown(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

</script>

<template>
    <section>
        <h2>Uddannelsens opbygning</h2>
        <div class="buttom-divider">
            <div class="buttom-divider-width">
                <p>Uddannelsen til multimediedesigner varer 2 år og består af 
                en fællesdel og en specialiseringsdel. Sidstnævnte byder på 
                valgfag, praktik og hovedopgave. </p>
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
        </div>
    </section>

    
</template>
<style scoped>

.dropdown-wrap {
  margin-top: 5px;
  background-color: #DAECED;
  width: 350px;
}

.dropdown {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.answer {
  padding: 15px;
}

</style>