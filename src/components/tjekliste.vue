<script>

</script>

<template>

    <section id="tjekliste-baggrund">
    <h2 class="italic">Karriere tjekliste</h2>

<div class="flex-overordnet">
    <div class="flex-tjekliste">
            <div class="semester-opdeling">
                <p class="italic">1. semester</p>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/check.svg" alt="">
                <p>LinkedIn profil</p>
            </div>
                
            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Praktiksøgning</p>
            </div>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>CV og ansøgning</p>
            </div>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Jobsøgningsstrategi</p>
            </div>
            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Kompetenceafklaring</p>
            </div>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Praktiksamtale</p>
            </div>
            <div  class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Jobsamtalen</p>
            </div>
        </div>

        <div class="semester-opdeling">
                <p class="italic">2. semester</p>

                <div class="checkbox-class">
                <img class="check-img" src="../assets/img/check.svg" alt="">
                <p>LinkedIn profil</p>
            </div>
                
            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/check.svg" alt="">
                <p>Praktiksøgning</p>
            </div>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/check.svg" alt="">
                <p>CV og ansøgning</p>
            </div>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Jobsøgningsstrategi</p>
            </div>
            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Kompetenceafklaring</p>
            </div>

            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Praktiksamtale</p>
            </div>
            <div class="checkbox-class">
                <img class="check-img" src="../assets/img/cross.svg" alt="">
                <p>Jobsamtalen</p>
            </div> 

        </div>

        <div class="flex-tjekliste">
            <div class="semester-opdeling">
                <p class="italic">3. semester</p>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>LinkedIn profil</p>
                </div>
                    
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Praktiksøgning</p>
                </div>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>CV og ansøgning</p>
                </div>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Jobsøgningsstrategi</p>
                </div>
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Kompetenceafklaring</p>
                </div>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Praktiksamtale</p>
                </div>
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/cross.svg" alt="">
                    <p>Jobsamtalen</p>
                </div>

            </div>

            <div class="semester-opdeling">
                <p class="italic">4. semester</p>
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>LinkedIn profil</p>
                </div>
                    
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Praktiksøgning</p>
                </div>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>CV og ansøgning</p>
                </div>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Jobsøgningsstrategi</p>
                </div>
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Kompetenceafklaring</p>
                </div>

                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Praktiksamtale</p>
                </div>
                <div class="checkbox-class">
                    <img class="check-img" src="../assets/img/check.svg" alt="">
                    <p>Jobsamtalen</p>
                </div>
        
            </div> 
        </div>
    </div>
</div>

</section>

</template>

<style scoped>

#tjekliste-baggrund {
    background-image: url("../assets/img/baggrund-tjekliste(2).svg");
    background-repeat: no-repeat;
    background-size: cover;

}

.italic {
    font-style: italic;
}

.checkbox-class {
    display: flex;
}

.flex-tjekliste {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 900px;
}

.semester-opdeling {
    margin: 20px 150px 20px 100px;
    display: flex;
    flex-direction: column;
}

.flex-overordnet {
    display: flex;
    justify-content: center;
}

.check-img {
    margin-right: 6px;
}

</style>