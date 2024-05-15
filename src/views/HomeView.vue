<script setup>
import { ref } from "vue";
import headerUCL from "../components/headerUCL.vue";
import navigation from "@/components/navigation.vue";
import KVstudiestart from "@/components/KVstudiestart.vue";
import KVUdannelsensOpbygning from "@/components/KVUdannelsensOpbygning.vue";
import KVpraktik from "@/components/KVpraktik.vue";
import KVinternationalemuligheder from "@/components/KVinternationalemuligheder.vue";
import KVmuligheder from "@/components/KVmuligheder.vue";
import KVGenveje from "@/components/KVGenveje.vue";
import KVevent from "@/components/KVevent.vue";
</script>

<template>
  <headerUCL />

  <div class="main-wrap">
    <navigation />
    <div class="content-wrap">
        <KVstudiestart />
        <KVUdannelsensOpbygning />
        <KVpraktik />
        <KVinternationalemuligheder />
        <KVmuligheder />
        <KVGenveje />
        <KVevent />        
    </div>
  </div>
</template>
