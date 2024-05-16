<script setup>
const kontaktOsScroll = () => {
    document.getElementById("kontaktka").scrollIntoView({ behavior: "smooth"});
}
</script>

<template>

<header>
    <div class="header-div">
        <div class="logo-div">
            <a href=""><img class="logo" src="../assets/img/mitucl-logo-white.png" alt="MitUcl logo"></a>
        </div>
        <div class="nav-wrap">
        <div class="top-nav-wrap">
            <ul class="top-nav">
                <li>GDPR - behandling af persondata</li>
                <li>Krisesituationer på UCL</li>
                <li>mitUCL på mobilen</li>
                <li>Bibliotek</li>
            </ul>
            <button class="search-btn">Søg <img src="../assets/img/search-icon-white.svg" alt="Søge knap"></button>
            <button class="pen-btn">Tilpas valg <img src="../assets/img/pen-icon-green.svg" alt="Tilpas knap"></button>
        </div>
        <div class="buttom-nav-wrap">
            <ul class="buttom-nav">
                <li>Mit campus</li>
                <!--midlertidig løsning ind til karrierevejledning-->
                <router-link to="/karrierevejledning">
                    <li>Studieservice</li>
                </router-link>
                <li>Events & studieliv</li>
                <li>SU</li>
                <li>Specialpædagogisk støtte (SPS)</li>
            </ul>
        </div>
    </div>
</div>
<div class="buttom-nav-list-main">
    <div class="buttom-nav-list-1">
            <p> Forside</p>
            <p>/</p>
            <p>Studieservice</p>
            <p>/</p>
            <p> Karrierevejledning</p>
    </div>
<div class="buttom-nav-list-2">
<div>
    <h1>Karrierevejledning</h1>
</div>
<div>
    <h2>Få råd og vejledning om praktik og karrierevalg.</h2>
</div>
 <div>
    <p @click="kontaktOsScroll"> Kontakt os</p>
</div>
</div>
</div>
           
</header>
</template>

<style scoped>

nav {
    background-color: #00454E;
    padding: 5%;
}

header{
    background-image: url("../assets/img/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 500px;



}

.header-div {
    display: flex;
    justify-content: center;
}

.logo {
    width: 200px;
    margin-top: 40px;
    margin-right: 100px;
}

.nav-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 30px;
}

.top-nav-wrap {
    display: flex;
    align-items: center;
    gap: 50px;
}

.top-nav {
    display: flex;
    gap: 30px;
    font-size: 11px;
    font-weight: lighter;
}

li {
    list-style-type: none;
    color: #fff;
}

.search-btn {
    background-color: #00454E;
    color: #FFFFFF;
    border-radius: 7px;
    border: none;
    padding: 6px 12px;
    gap: 5px;
    display: flex;
    align-items: center;
}

.pen-btn {
    background-color: #E6F1F0;
    color: #00454E;
    border-radius: 7px;
    border: solid 1px #00454E;
    padding: 6px 12px;
    gap: 5px;
    display: flex;
    align-items: center;
}

.buttom-nav-wrap {
    display: flex;
    justify-content: flex-end;
}

.buttom-nav {
    display: flex;
    justify-content: flex-start;
    gap: 30px;   
    font-size: 18px;
    font-weight: bold; 
    padding: 20px;
}


.buttom-nav-list-main{
display: flex;
flex-direction: column;
margin-left: 250px;
gap: 40px;


}

.buttom-nav-list-1{
display: flex;
flex-direction: row;
gap: 20px;
}

.buttom-nav-list-1 p{
color: #fff;


}

.buttom-nav-list-2{
display: flex;
flex-direction: column;
gap: 50px;

}

.buttom-nav-list-2 h1, h2, p{
color: #fff;

}

.buttom-nav-list-2 p{
color: #fff;


}



</style>