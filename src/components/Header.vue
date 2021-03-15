<template>
  <div class="header">
      <div class="header__box">
          <img class="header__logo" src="..\assets\logo.svg" alt="basalam logo">             
          <h1 class="heading-one">باسلام</h1>                        
          <img class="header__box-icon" src="..\assets\bottom-icon.svg" alt="bottom-icon"> 
      </div>                                
      <nav class="header__nav">
          <button class="btn-black"><a class="header__nav-link" href="#">فروش در باسلام</a></button>
          <div class="header__nav-not">
             <img class="header__nav-not-pic" src="..\assets\portfolio.svg" alt="portfolio">
            <span class="header__nav-not-number">3</span>
          </div>
      </nav>  
      <form class="search" action="#" method="POST">
        <input class="search__input" type="text" placeholder="جستجو در صدها هزار محصول خانگی و محلی...">
        <button class="search__btn">
             <img class="search__btn-icon" src="..\assets\magnifier.svg" alt="magnifier">             
        </button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Header'  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
