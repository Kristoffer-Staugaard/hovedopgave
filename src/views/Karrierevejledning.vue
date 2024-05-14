<script setup>
    import headerKarriere from '@/components/headerKarriere.vue';
    import arrangementer from '@/components/arrangementer.vue';
    import jobportalen from '@/components/jobportalen.vue';
    import reviews from '@/components/reviews.vue';
    import tjekliste from '@/components/tjekliste.vue';
    import shortcut from '@/components/shortcut.vue';
    import kontaktUCL from '@/components/kontaktUCL.vue';
</script>

<template>

<headerKarriere />
<shortcut />
<!--kalender-->
<tjekliste />
<reviews />
<jobportalen />
<arrangementer />
<kontaktUCL />
</template>