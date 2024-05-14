<template>
  <section>
    <div class="jobportalen">
        <div class="jobportalen-1">
              <h2>Jobportalen</h2>
              <p>Gå på jagt i jobportalen eller opret en gratis profil og få din
                jobagent til at sende dig spændende projekter, studiejobs, 
                fuldtidsjobs og erhvervsakademiske praktikmuligheder.</p>
              <button class="btn-yellow">Læs mere</button>
        </div>
        <div class="jobportalen-2">
               <img src="../assets/img/video.jpg" alt="">
        </div>
    </div>
  </section>
</template>
  
<script setup>
  
</script>
  
<style scoped>
.jobportalen{
display: flex;
flex-direction: row;
justify-content: center;
gap: 25px;
background-color: #E2F1EE;
}

.jobportalen-1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5%;
}


.jobportalen-2{
  display: flex;
}

.jobportalen img{
  height: 300px;
  width: 400px;
}


 </style>
  