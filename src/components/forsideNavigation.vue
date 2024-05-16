<script setup>

const multimediedesignScroll = () => {
    document.getElementById("multim-scroll").scrollIntoView({ behavior: "smooth"});
}

const sstartScroll = () => {
    document.getElementById("sstart").scrollIntoView({ behavior: "smooth"});
}

const uoScroll = () => {
    document.getElementById("uo-scroll").scrollIntoView({ behavior: "smooth"});
}

const praktikScroll = () => {
    document.getElementById("praktik-scroll").scrollIntoView({ behavior: "smooth"});
}

const kmScroll = () => {
    document.getElementById("kmScroll").scrollIntoView({ behavior: "smooth"});
}

const imScroll = () => {
    document.getElementById("imScroll").scrollIntoView({ behavior: "smooth"});
}

const genvejeScroll = () => {
    document.getElementById("genvejescroll").scrollIntoView({ behavior: "smooth"});
}

</script>

<template>
    <nav>
        <div class="nav-inner">
            <ul>
                <li @click="multimediedesignScroll()">Multimediedesign</li>
                <li @click="sstartScroll()">Studiestart</li>
                <li @click="uoScroll()">Uddannelsens opbygning</li>
                <li @click="praktikScroll()">Praktik</li>
                <li @click="kmScroll()">Karrieremuligheder</li>
                <li @click="imScroll()">Internationale muligheder</li>
                <li @click="genvejeScroll()">Genveje</li>
            </ul>
            
        </div>
    </nav>
</template>

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