<template>
  <section>
    <div class="buttom-divider">
      <h1>Multimediedesigner</h1>
    </div>

    <div class="buttom-divider">
      <div>
        <h2>Studiestart</h2>
        <p>
          Velkommen til multimediedesigneruddannelsen hos UCL. Kom godt i gang
          med de 5 links til en god studiestart.
        </p>
      </div>
      <div>
        <h3>Info om studiestart</h3>
        <div class="list">
          <img src="../assets/img/arrow-icon.svg" alt="" />
          <h4>Velkomstbrev</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.buttom-divider {
  display: flex;
  padding-bottom: 40px;
  padding-top: 40px;
  border-bottom: 2px #e6f1f0 solid;
  gap: 40px;
}

.buttom-divider div {
  width: 50%;
}

.list {
    display: flex;
}

.list img {
    margin-right: 10px;
}
</style>
