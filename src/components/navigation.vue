<template>
   <nav>
        <div class="nav-upper">
            <img class="nav-logo" src="" alt="Staugaard Studio logo">
            <div class="nav-collapse-btn">
                <h3>Navigation</h3>
                <img class="nav-arrow" src="" alt="nav indicator">
            </div>
            <div class="nav-collapse">
                <a class="nav-collapse-link" href="#om-mig" id="om-mig-link">Om mig</a>
                <a class="nav-collapse-link" href="#projekter" id="projekter-link">Projekter</a>
                <a class="nav-collapse-link" href="#kontakt" id="kontakt-link">Kontakt</a>
            </div>
        </div>
        <div class="nav-lower">
            <h3 class="hidden-on-tablet">©2022</h3>
            <button class="nav-btn" href="#kontakt" onclick="window.location.href='#kontakt';">KONTAKT</button>
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
    right: 1px;
    padding: 40px 25px 40px 25px;
    border-left: #242325 solid 2px;
    box-sizing: border-box;
}

        .nav-logo {
            margin-bottom: 80px;
        }

        .nav-collapse-btn {
            display: flex;
            margin-bottom: 25px;
        }

            .nav-arrow {
                margin-left: 15px;
            }

        .nav-collapse {
            display: flex;
            flex-direction: column;
        } 
                
            .nav-collapse-link {
                opacity: 45%;
                margin-bottom: 10px;
                transition: color 0.3s, opacity 0.3s;
            }

            /* Add hover effect for the navigation links */
            .nav-collapse-link:hover {
            color: #EF6F6C;
        }
    
            .nav-btn {
                display: flex;
                font-family: 'Satoshi-Variable';
                font-weight: bold;
                font-size: 20px;
                background-color: #242325;
                color: #FFF8F2;
                padding: 12.5px 0;
                border-radius: 50px;
                width: 100%;
                text-align: center;
                display: block;
                margin-top: 25px;
                border-width: 0;
                transition: background-color 0.3s, color 0.3s;
                cursor: pointer;
            }
            
            .nav-btn:hover {
                background-color:#EF6F6C;
            }  
  
</style>
    