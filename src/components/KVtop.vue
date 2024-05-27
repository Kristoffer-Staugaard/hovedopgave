<template>
<nav>
  <div class="breadcrumbs-wrap">
    <div class="breadcrumbs">
    <p>Forside</p>
    <p>/</p>
    <p>Studieservice</p>
    <p>/</p>
    <p>Karrievejledning</p>
    </div>
    <h1>Karrierevejledning</h1>
    <br>
    <h2>Få råd og vejledning om praktik og karrierevalg.</h2>
    <button class="btn-yellow">Kontakt os</button>
  </div>
</nav>


</template>

<style scoped>

.breadcrumbs {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;

}
@media screen and (max-width: 1200px) {
  .breadcrumbs-wrap {
    padding: 0 5%;
  }
}

@media screen and (max-width: 1100px) {

.breadcrumbs-wrap {
  display: none;
}
}
</style>