<template>
  <section id="jobp">
    <div class="jobportalen">
      <div class="jobportalen-1">
        <h2>Jobportalen</h2>
        <p>
          Gå på jagt i jobportalen eller opret en gratis profil og få din
          jobagent til at sende dig spændende projekter, studiejobs,
          fuldtidsjobs og erhvervsakademiske praktikmuligheder.
        </p>
        <button class="btn-yellow">Læs mere</button>
      </div>
      <div class="jobportalen-2">
        <img src="../assets/img/jobportal.png" alt="" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.jobportalen {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  background-color: #e2f1ee;
}

.jobportalen-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
}

.jobportalen-2 {
  display: flex;
}

.jobportalen img {
  width: 100%;
}

@media screen and (max-width: 700px) {
  .jobportalen {
    display: flex;
    flex-direction: column;
    padding: 15px;
  }

  .jobportalen-1 {
    order: 2;
    margin-top: -20px;
    margin-bottom: -20px;
  }

  .jobportalen-2 {
    order: 1;
  }
}
</style>
