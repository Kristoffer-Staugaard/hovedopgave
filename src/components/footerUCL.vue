<template> 
<footer>
<div class="footer-main">
    <div class="footer-1"> 
        <ul>
            <li>Studieservice</li> 
            <li>Events</li>
            <li>Studieliv</li>                  
        </ul>
    </div>
    <div class="footer-2"> 
        <ul>
            <li>Biblotek</li> 
            <li>Tilgængelighedserklæring</li>            
        </ul>
    </div>
    <div class="footer-3"> 
        <ul>
            <li>mitUCL.dk er et website for studerende på UCL.</li> 
            <br>
            <li>UCL Erhvervsakademi og Professionshøjskole udbyder
                43 uddannelser i Odense, Svendborg, Vejle, Fredericia og Jelling. 
                Som studerende kommer du tæt på virkeligheden og vil i fremtiden 
                bidrage til bæredygtig vækst, velfærd og løsninger, der gør en forskel.</li>            
        </ul>
        <div class="footer-image">
        <img src="../assets/img/video.jpg" alt="">
        </div>
    </div>
</div>

<div class="footer-icons">
    <img src="../assets/img/facebook.icon.svg" alt="">
    <img src="../assets/img/instagram-icon.svg" alt="">
    <img src="../assets/img/twitter-icon.svg" alt="">
    <img src="../assets/img/linkedin-icon.svg" alt="">

</div>

<div class="footer-bottom-line">
    <p>© 2024 UCL Erhvervsakademi og Professionshøjskole</p>
</div>
</footer>
</template>

<style scoped>

footer{
    background-color: #1A444D;
   
}
.footer-main{
    color: #fff;
    display: flex;
    flex-direction: row;
    padding: 5%;
}


.footer-1{
    width: 25%;
}

.footer-2{
    width: 25%;
}

.footer-3{
    width: 50%;
}

ul{
    list-style: none;
    padding: 0;
}

.footer-image img{
    height: 300px;
    width: 500px;
    display: flex;
}

.footer-icons{
    display: flex;
    flex-direction: row;
    gap: 25px;
    padding: 5%;
}

.footer-icons img{
    height: 30px;
    width: 30px;
}

.footer-bottom-line{
    background-color: #122F36;
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding: 1%;
    border-top: 1px solid #707070;
}

</style>