<script setup>
import { ref } from "vue";
import headerUCL from "../components/headerUCL.vue";
import navigation from "@/components/navigation.vue";
import KVstudiestart from "@/components/KVstudiestart.vue";
import KVUdannelsensOpbygning from "@/components/KVUdannelsensOpbygning.vue";
import KVpraktik from @/components/KVpraktik.vue";
</script>

<template>
  <headerUCL />

  <div class="main-wrap">
    <navigation />
    <div class="content-wrap">
        <KVstudiestart />
        <KVUdannelsensOpbygning />
        <KVpraktik />
    </div>
  </div>
</template>
