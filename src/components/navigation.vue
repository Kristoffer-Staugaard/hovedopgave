<template>
   <nav>
        <div class="nav-inner">
            <ul>
                <li>Hvad kan vi tilbyde?</li>
                <li>Book din vejledning</li>
                <li>Karriere tjekliste</li>
                <li>Hvad siger de studerende?</li>
                <li>Jobportalen</li>
                <li>Arrangementer</li>
                <li>Kontakt karrierevejledningen</li>
            </ul>
            
        </div>
    </nav>
</template>
    
<script setup>
    
</script>
    
<style scoped>
 
 nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 1px;
    padding: 40px;
    box-sizing: border-box;
    background-color: #00454E;
    margin-top: 0;
}

.nav-inner {
    color: white;
}

ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    font-size: 15px;
    font-weight: bold;
    gap: 70px;
}
  
</style>
    