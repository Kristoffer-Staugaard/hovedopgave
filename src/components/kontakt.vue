<template> 
    <h2>Kontakt Karrievejledning</h2>
    <div class="contact">
        <div>
            <img src="../assets/img/dennis.png" alt="">
                <h3>Dennis Færch Broch</h3>
                <p>Dimittend- og karrierekonsulent</p>
               <b> <p class="paragraf-kontakt-os">Kontakt os</p> </b>
        </div>
        <div>
            <img src="../assets/img/morten.png" alt="">
                <h3>Morten Jung Lassen</h3>
                <p>Karrierevejleder</p>
               <b> <p class="paragraf-kontakt-os">Kontakt os</p> </b>
        </div>

     </div>
   
</template>
    
<style>
h2{
    text-align: center;
    margin: 2%;

}

    
.contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    background-color: #F8CCC4;
    padding: 5%;
    width: 80%;
    margin: 0 auto;

}   

.contact img{
    height: 200px;
    width: 200px;

}

.paragraf-kontakt-os{
    border-bottom: 2px solid #000;
    border-bottom-style: dotted;


}
</style>