<template>
    <div class="jobportalen">
        <div class="jobportalen-1">
              <h2>Jobportalen</h2>
              <p>Gå på jagt i jobportalen eller opret en gratis profil og få din<br> 
                jobagent til at sende dig spændende projekter, studiejobs,<br>  
                fuldtidsjobs og erhvervsakademiske praktikmuligheder.</p>
              <button>Læs mere</button>
        </div>
        <div class="jobportalen-2">
               <img src="../assets/img/video.jpg" alt="">
        </div>
    </div>
</template>
  
<script setup>
  
</script>
  
<style scoped>
.jobportalen{
display: flex;
flex-direction: row;
justify-content: center;
gap: 25px;
background-color: #E2F1EE;
margin-left: 200px;
margin-right: 200px;
height: 300px;
}

.jobportalen-1{
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.jobportalen-1 p{
  color: #1A424B;
  text-align: center;

}

.jobportalen-1 h2{
  color: #1A424B;
  margin-bottom: 25px;
  margin-top: 25px;

}

.jobportalen-2{
  display: flex;
  width: 40%;
}

.jobportalen img{
  height: 300px;
  width: 400px;
}

.jobportalen button{
  background-color: #FCE977;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  color: #1A424B;
  font-weight: bold;
  border: none;
}



 </style>
  