<script setup>
const hkvtScroll = () => {
    document.getElementById("hkvt").scrollIntoView({ behavior: "smooth"});
}

const bdkScroll = () => {
    document.getElementById("bdk").scrollIntoView({ behavior: "smooth"});
}

const ktScroll = () => {
    document.getElementById("tjekliste-baggrund").scrollIntoView({ behavior: "smooth"});
}

const hsdsScroll = () => {
    document.getElementById("hsds").scrollIntoView({ behavior: "smooth"});
}

const jobportalScroll = () => {
    document.getElementById("jobp").scrollIntoView({ behavior: "smooth"});
}

const arrangementerScroll = () => {
    document.getElementById("arrang").scrollIntoView({ behavior: "smooth"});
}

const kontaktkScroll = () => {
    document.getElementById("kontaktka").scrollIntoView({ behavior: "smooth"});
}

</script>

<template>
   <nav>
        <div class="nav-inner">
            <ul>
                <li @click="hkvtScroll()">Hvad kan vi tilbyde?</li>
                <li @click="bdkScroll()">Book din vejledning</li>
                <li @click="ktScroll()">Karriere tjekliste</li>
                <li @click="hsdsScroll()">Hvad siger de studerende?</li>
                <li @click="jobportalScroll()">Jobportalen</li>
                <li @click="arrangementerScroll()">Arrangementer</li>
                <li @click="kontaktkScroll()">Kontakt karrierevejledningen</li>
            </ul>
            
        </div>
    </nav>
</template>
    
<script setup>

    
</script>
    
<style scoped>
 
 nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: sticky;
    left: 0px;
    top: 0px;
    padding: 40px;
    box-sizing: border-box;
    background-color: #00454E;
    margin-top: 0;
}

.nav-inner {
    color: white;
    text-wrap: nowrap;
}

ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    font-size: 15px;
    font-weight: bold;
    gap: 70px;
}
  
</style>
    