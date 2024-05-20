<template>

<nav>
    <header>
        <div class="logo-div">
            <a href=""><img class="logo" src="../assets/img/mitucl-logo.png" alt="MitUcl logo"></a>
            <div class="burger-div">
                <button class="burger-search">Søg <img src="../assets/img/search-icon-dark.svg" alt="Søge knap"></button>

                <button class="burgermenu"> <img src="../assets/img/burgermenu-icon.svg" alt=""></button>
            </div>
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
    </header>
</nav>

</template>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const burgerMenu = document.querySelector('.burgermenu');
        const navWrap = document.querySelector('.nav-wrap');

        burgerMenu.addEventListener('click', function() {
            navWrap.classList.toggle('open');
        });
    });
</script>


<style scoped>

nav {
    background-color: #E6F1F0;
    padding: 5% 0;
    width: 100%;
    max-width: 1200px;
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
    gap: 15px;
}

.top-nav-wrap {
    display: flex;
    align-items: center;
    gap: 30px;
}

.top-nav {
    display: flex;
    gap: 30px;
    font-size: 11px;
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
    font-size: 16px;
    font-weight: bold; 
}

.burger-div {
    display: none;
}

@media screen and (max-width: 1200px) { 

header {
    padding: 0 5%;
}

.logo {
    width: 200px;
}

}

@media screen and (max-width: 1100px) { 

    .logo-div {
        background-color: #E6F1F0;
        padding: 3%;
        box-sizing: border-box;
    }

    .nav-wrap {
        flex-direction: column-reverse;
        width: 100%;
        height: 100vh;
        justify-content: flex-end;
        right: -106%;
        position: relative;
        padding: 3%;
        box-sizing: border-box;
    }

    .nav-wrap.open {
    right: 0;
    background-color: #E6F1F0;
}

    .buttom-nav-wrap {
        justify-content: flex-start;
    }

    .buttom-nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    .top-nav-wrap {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        align-items: flex-end;
        justify-content: space-between;
    }

    .top-nav {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    nav {
        padding: 0;
        padding-bottom: 2%;
        position: fixed;
        z-index: 2;
        margin-top: 0;
        background-color: transparent;
    }

    header {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }

    .burgermenu {
        display: flex;
        border-radius: 100%;
        padding: 15px;
        border-style: none;
        background-color: #00454E;
    }

    .logo-div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .burger-div {
        display: flex;
        gap: 20px;
    }

    .burger-search {
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: #FFFFFF;
        border-radius: 50px;
        border-style: none;
        padding: 0 20px;
    }

    .search-btn {
        display: none;
    }
}
</style>