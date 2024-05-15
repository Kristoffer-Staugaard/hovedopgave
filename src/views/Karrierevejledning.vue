<script setup>
import headerKarriere from "@/components/headerKarriere.vue";
import arrangementer from "@/components/arrangementer.vue";
import jobportalen from "@/components/jobportalen.vue";
import reviews from "@/components/reviews.vue";
import tjekliste from "@/components/tjekliste.vue";
import shortcut from "@/components/shortcut.vue";
import kontaktUCL from "@/components/kontaktUCL.vue";
import navigation from "@/components/navigation.vue";
</script>

<template>
  <headerKarriere />

  <div class="main-wrap">
    <navigation />

    <div class="content-wrap">
      <shortcut />
      <tjekliste />
      <reviews />
      <jobportalen />
      <arrangementer />
      <kontaktUCL />
    </div>
  </div>
</template>
