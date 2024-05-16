<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const dropdowns = ref([
  {
    dropdown: "Om praktikken",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    dropdown: "Jobportalen",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    dropdown: "Praktikfaktaark og praktikportal",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    dropdown: "Ikke gennemført praktik",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    dropdown: "Få hjælp",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
]);

function toggleDropdown(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <section id="praktik-scroll">
    <h2>Praktik</h2>
    <div class="buttom-divider">
      <div class="buttom-divider-width">
        <p>Dit praktikforløb er af 3 måneders varighed.</p>
        <ul>
          <li>Praktikken finder sted på 4. semester.</li>
          <li>Du er selv ansvarlig for at finde en praktikplads.</li>
          <li>Praktikperioden er ulønnet og SU-berettiget</li>
        </ul>
      </div>
      <div class="buttom-divider-width">
        <div class="item-wrap">
          <div class="dropdown-wrap" v-for="(item, index) in dropdowns">
            <div class="dropdown" @click="toggleDropdown(index)">
              <h3>{{ item.dropdown }}</h3>
              <span>{{ openIndex === index ? "-" : "+" }}</span>
            </div>
            <div class="answer" v-if="openIndex === index">
              <p>{{ item.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="buttom-divider">
      <div class="buttom-divider-width">
      <div class="blue-card">
        <h3>Kontakt din praktikkoordinator</h3>
        <div class="card-inner">
          <img
            class="profile-img"
            src="../assets/img/praktikkoordinator.png"
            alt="Prkatik koordinator profil billede"
          />
          <div class="koordinator-info">
            <h4>Karen Malene Andreasen</h4>
            <p>Praktikkordinator</p>
            <div class="list">
              <img src="../assets/img/phone-icon.svg" alt="" />
              <p>22 66 02 86</p>
            </div>
            <div class="list">
              <img src="../assets/img/mail-icon.svg" alt="" />
              <p>kmea@ucl.dk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="buttom-divider-width">
      <h3>To vejledere</h3>
      <p>
        I praktikken har du både en vejleder på dit praktiksted og en vejleder
        fra uddannelsesinstitutionen. De følger og vejleder dig begge to i de 3
        måneder, du er i praktik. Din praktikvejleder på UCL fremgår her på
        siden mens du først får tildelt en vejleder på dit praktiksted, når din
        praktikaftale foreligger.
      </p>
    </div>
    </div>
  </section>
</template>

<style scoped>

.dropdown-wrap {
  margin-top: 5px;
  background-color: #daeced;
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

.card-inner {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.profile-img {
  width: 100px;
  height: 100px;
}
</style>
