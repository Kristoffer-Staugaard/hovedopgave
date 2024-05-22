<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const dropdowns = ref([
  {
    dropdown: "Digital konceptudvikling (1,5 år)",
    answer:
      "Som digital konceptudvikler udvikler du digitale brugeroplevelser på tværs af medier og platforme som fx websites, apps og markedsføringsmateriale. Du er bindeleddet mellem kunder og fagfolk, når programmering og teknik skal oversættes til forståeligt brugeroplevelser.",
  },
  {
    dropdown: "E-handel (1,5 år)",
    answer:
      "Med en professionsbacheloruddannelse i e-handel bliver du specialist i e-handel, digital økonomi og markedsføring samt andre onlinebaserede aktiviteter. Du bliver klædt på til at arbejde med customer experience, data-dreven markedsføring og creative content.",
  },
  {
    dropdown: "Innovation og entrepreneurship (1,5 år)",
    answer:
      "Som færdiguddannet bachelor i Innovation og Entrepreneurship har du mulighed for at starte egen virksomhed eller hjælpe andre virksomheder med at udvikle og omsætte deres forretningsidéer.",
  },
  {
    dropdown: "Webudvikling (1,5 år)",
    answer:
      "Uddannelsen i webudvikling er for dig, der vil arbejde kreativt med kodning og specialisere dig inden for udviklingen af apps, hjemmesider og andre webløsninger.Undervejs på uddannelsen til webudvikling vil du komme til at arbejde med teknologier, der klæder dig på til at kunne indgå i mange typer af jobs.",
  },
]);

function toggleDropdown(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
<section id="imScroll">

<div class="talentprogram-buttom-divider">
    <div class="talentprogram-buttom-divider-width talentprogram-img">
    </div>
    <div class="talentprogram-buttom-divider-width">
      <h2>Talent program</h2>
        <p>UCL’s talentprogram er baseret på mulighederne for, at talentfulde studerende kan opnå anerkendelse for talent som et tillæg til deres eksamensbevis.</p>
        <div class="talentprogram-button"><p> Talentprogram </p> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="6.473" height="10.982" viewBox="0 0 6.473 10.982">
  <path id="Icon_material-arrow-back-ios" data-name="Icon material-arrow-back-ios" d="M6.473.982,5.491,0,0,5.491l5.491,5.491L6.473,10,1.963,5.491Z" transform="translate(6.473 10.982) rotate(180)" fill="#FAE76A"/>
</svg>
 </div>
    </div>
</div>
    </section>
  <section>
    <h3>Byg ovenpå uddannelsen og bliv bachelor</h3>
    <div class="buttom-divider">
      <div class="buttom-divider-width">
        <p>Efter endt uddannelse har du mulighed for at tage en top-up uddannelse, som kan give dig flere karrieremuligheder og specialisere din viden inden for et specifikt område. 

          Til højre finder du dine fremtidige muligheder. Du kan for eksempel vælge at videreuddanne dig inden for:</p>
      </div>
      <div class="buttom-divider-width">
        <div class="item-wrap">
          <div class="dropdown-wrap" v-for="(item, index) in dropdowns">
            <div class="dropdown" @click="toggleDropdown(index)">
              <h3>{{ item.dropdown }}</h3>
              <img src="../assets/img/arrow-down.svg" alt="arrow">
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
  background-color: #fff;
  border: 1px solid #00454E;
  width: 100%;
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


.talentprogram-img {
  background-image: url("../assets/img/talentprogram.png");
  background-size: cover;
  height: 250px;
}

.talentprogram-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.talentprogram-button{
background-color: #00454E;
color: #FAE76A;
display: flex;
justify-content: center;
align-items: center;
width: 200px;
margin-top: 20px ;
gap: 10px;
}

.talentprogram-button p{
color: #FAE76A;
text-align: center;
}

.arrow{
fill:#FAE76A;
display: flex;
align-items: center;
}
</style>
