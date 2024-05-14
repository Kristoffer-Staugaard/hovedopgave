<template>
    <section>
    <h2>Kontakt Karrievejledning</h2>
    <div class="contact">
        <div class="contact-inner">
            <img src="../assets/img/dennis.png" alt="">
                <h3>Dennis Færch Broch</h3>
                <p>Dimittend- og karrierekonsulent</p>
               <b> <p class="paragraf-kontakt-os">Kontakt os</p> </b>
        </div>
        <div class="contact-inner">
            <img src="../assets/img/morten.png" alt="">
                <h3>Morten Jung Lassen</h3>
                <p>Karrierevejleder</p>
               <b> <p class="paragraf-kontakt-os">Kontakt os</p> </b>
        </div>
     </div>
   </section>
</template>
    
<style>
    
.contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    background-color: #F8CCC4;
    margin: 0 auto;
    padding: 5%;

}   

.contact img{
    height: 200px;
    width: 200px;

}

.paragraf-kontakt-os{
    border-bottom: 2px solid #000;
    border-bottom-style: dotted;
    text-align: center;
}

</style>