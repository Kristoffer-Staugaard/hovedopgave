<template>

<nav>
    <header>
        <div class="logo-div">
            <a href=""><img class="logo" src="../assets/img/mitucl-logo.png" alt="MitUcl logo"></a>
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
                <li>Studie service</li>
                <li>Events & studieliv</li>
                <li>SU</li>
                <li>Specialpædagogisk støtte (SPS)</li>

            </ul>
        </div>
    </div>
    </header>
</nav>

</template>

<style scoped>

nav {
    background-color: #E6F1F0;
    padding: 5%;
}

header {
    display: flex;
    justify-content: space-between;
}

.logo {
    width: 250px;
}

.nav-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.top-nav-wrap {
    display: flex;
    align-items: center;
    gap: 30px;
}

.top-nav {
    display: flex;
    gap: 30px;
}

li {
    list-style-type: none;
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
    gap: 30px;   
    font-size: 18px;
    font-weight: bold; 
}

</style>