<script setup>

</script>

<template>
    <div class="event-box">
        <div id="event-banner">
            <p>Events på mit campus</p>
        </div>
        <div class="event-green-box">
            <img src="../assets/img/arrow-icon.svg" alt="arrow" />
        </div>
    </div>

</template>

<style scoped>
.event-box {
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#event-banner {
    background-image: url("../assets/img/event-billedet.png");
    background-position: center;
    background-repeat: no-repeat;
    height: 182px;
    width: 701px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#event-banner p {
    color: white;
    font-size: 48px;
}



.event-green-box {
    background-color: #66B7B1;
    width: 57px;
    height: 182px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.event-green-box img {
    width: 40%;
    height: 40%;
}


</style>