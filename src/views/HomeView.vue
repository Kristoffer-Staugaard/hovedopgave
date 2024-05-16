<script setup>
import { ref } from "vue";
import headerUCL from "../components/headerUCL.vue";
import forsideNavigation from "@/components/forsideNavigation.vue";
import KVstudiestart from "@/components/KVstudiestart.vue";
import KVUdannelsensOpbygning from "@/components/KVUdannelsensOpbygning.vue";
import KVpraktik from "@/components/KVpraktik.vue";
import KVinternationalemuligheder from "@/components/KVinternationalemuligheder.vue";
import KVmuligheder from "@/components/KVmuligheder.vue";
import KVGenveje from "@/components/KVGenveje.vue";
import KVevent from "@/components/KVevent.vue";
import KVai from "@/components/KVai.vue";
</script>

<template>
  <headerUCL />

  <div class="main-wrap">
    <forsideNavigation />
    <div class="content-wrap">
        <KVstudiestart />
        <KVUdannelsensOpbygning />
        <KVpraktik />
        <KVai />
        <KVmuligheder />
        <KVinternationalemuligheder />
        <KVGenveje />
        <KVevent />        
    </div>
  </div>
</template>
