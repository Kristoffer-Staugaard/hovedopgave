<script setup>

</script>

<template>
    <section>
<div class="internationalemuligheder-overordnet">
    <div>
        <h2>Internationale<br>muligheder</h2>
    <img src="../assets/img/internationalemuligheder.png" alt="">
    </div>
    <div class="internationalemuligheder-content">
        <h3> 3 muligheder for at rejse ud</h3>
        <p>- En praktikperiode i udlandet</p>
        <p>- Et udlandsophold i forbindelse med et valgfag</p>
        <p>- Et engelsksprogede forløb på UCL</p>
        <div class="internationalemuligheder-button"><p> Rejs ud under studie</p> <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="6.473" height="10.982" viewBox="0 0 6.473 10.982">
  <path id="Icon_material-arrow-back-ios" data-name="Icon material-arrow-back-ios" d="M6.473.982,5.491,0,0,5.491l5.491,5.491L6.473,10,1.963,5.491Z" transform="translate(6.473 10.982) rotate(180)" fill="#FAE76A"/>
</svg>
 </div>
    </div>
</div>
</section>

</template>

<style scoped>
.internationalemuligheder-overordnet {
    display: flex;
    flex-direction: row;
    gap: 50px;

}
.internationalemuligheder-overordnet img{
    width: 500px;
    height: 250px;

}

.internationalemuligheder-content{
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.internationalemuligheder-button{
background-color: #00454E;
color: #FAE76A;
display: flex;
justify-content: center;
align-items: center;
width: 200px;
margin-top: 20px ;
gap: 10px;

}

.internationalemuligheder-button p{
color: #FAE76A;
text-align: center;

}

.arrow{
fill:#FAE76A;
display: flex;
align-items: center;



}

</style>
