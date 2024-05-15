<template>
    <section>
        <h2>Uddannelsens opbygning</h2>
        <div class="buttom-divider">
            <div class="buttom-divider-width">
                <p>Uddannelsen til multimediedesigner varer 2 år og består af 
                en fællesdel og en specialiseringsdel. Sidstnævnte byder på 
                valgfag, praktik og hovedopgave. </p>
                <div class="item-wrap">
        <div class="dropdown-wrap" v-for="(item, index) in dropdowns" :key="index">
          <div class="dropdown" @click="toggleDropdown(index)">
            <h3>{{ item.dropdown }}</h3>
            <img src="../assets/img/arrow-down.svg" alt="arrow">

          </div>
          <div class="answer" v-if="isOpen(index)">
            <p v-html="item.answer"></p>
        </div>
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
  { dropdown: "Fællesdel", answer: "Uddannelsen til multimediedesigner består af en fælles del og en specialiseringsdel. <br> Fællesdelen er ens for alle uanset hvilken specialering, du vælger. Her lærer du om: <br><ul><li>Brugergrænseflader</li><li>Brugeroplevelse</li><li>Indholdsproduktion</li><li>Forretningsforståelse</li><li>Teknologi</li></ul>"},
  { dropdown: "Specialisering", answer: "På 3. semester skal du specialisere dig i enten Content Produktion eller User Interfaces (UI). <br> <b>Content Produktion</b><br>Du lærer, hvordan du ved hjælp af digitale løsninger kan skabe vedvarende konkurrencefordele for virksomheder.<br>Du får forståelse for målgruppeanalyse, webanalyse og marketingsværktøjer samt færdigheder inden for copywriting, brandfortælling og indholdsproduktion.<br><b>User Interfaces (UI)</b> <br>Du får grundlæggende indsigt i forskellige teknologier og frameworks med fokus på udvikling og optimering af arbejdsgange.<br>Du lærer at udvikle brugergrænseoverflader og deploye løsninger ved hjælp af diverse teknologier samt at forstå bagvedliggende datadrevne teknologier." },
  { dropdown: "Undervisning", answer: "Under hele studiet arbejder du primært i teams og har løbende præsentationer både for holdet og klienter.<br>Undervisningen består af en stor del projektorienteret undervisning, hvor du arbejder med foto, video, design og programmering i teams og selvstændigt.<br><b>Tværfaglige projekter</b>Som studerende vil du arbejde med tværfaglige projekter, der trækker på elementer fra forskellige fag, og du vil skrive en del rapporter, hvor du skal argumenterer teoretisk for dine valg til løsning af givne problemstillinger.<br><b>Din tilgang som studerende</b><br>Som studerende er du selvkørende, og du spiller selv en vigtig rolle i at dygtiggøre dig undervejs på studiet – bl.a. gennem litteratursøgning, praktisk arbejde, projektpræsentationer og peer-feedback.<br>Størstedelen af litteraturen vil være på engelsk, da det også er branchens praksis at anvende engelske begreber.<br>Vi ser gerne, at du er nysgerrig på nye tendenser og ny teknologi.<br>På multimediedesigneruddannelsen taler vi ikke om lektier – du læser for din egen og din kommende arbejdsgivers skyld.<br><b>Programmer</b><br>Du får brug for adgang til en række af Adobes programmer til bl.a. redigering af billeder, video og lyd. Vi arbejder med den nyeste udgave af følgende programmer:<br><br><ul><li>Photoshop</li><li>InDesign</li><li>After effects</li><li>Premiere Pro</li><li>Illustrator</li><li>Lightroom Classic</li><li>Figma</li></ul><br>Du kan købe adgang til “Adobe Creative Cloud All Apps” via Adobes hjemmeside.<br> - <i>Adobes hjemmeside</i><br>Krav til computer på uddannelsen finder du på Adobes webside. Det er anbefalet at vælge en computer med Adobes anbefalede specifikationer. <br><i>- Se specifikationer </i>" },
  { dropdown: "Labs til rådighed", answer: "Uddannelsen råder over moderne lab-faciliteter som fx:<br><b>Medialab</b>, hvor du kan arbejde med greenscreen optagelser, foto, video og audio produktion, samt AR/VR/MR og Motion capture-teknologier. <br><b>Lydstudie</b>, hvor du kan arbejde med audio- og musikproduktioner, eksempelvis podcasts, speak og lign.<br><b>Neurolab</b>, hvor du kan brugerteste digitale og analoge brugergrænseflader og arbejde med forskellige biometriske værktøjer som fx Eyetracker og EEG. <br><b>Fablab</b>, hvor du kan arbejde med tryk, 3D-print og mock-ups." },
  { dropdown: "Studiedokumenter", answer: "Se uddannelsens studieordning, semesterbeskrivelser og øvrige dokumenter.<br> <i>Studiedokumenter på ucl.dk</i>" }
]);

function toggleDropdown(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

function isOpen(index) {
    return openIndex.value === index;
}
</script>

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
  padding: 0px 15px 15px 15px;
}

</style>