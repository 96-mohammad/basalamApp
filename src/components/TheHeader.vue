<template>
  <div class="header"> 
      <div class="header__box">
          <img class="header__logo" src="@/assets/logo.svg" alt="basalam logo">             
          <h1 class="heading-one">باسلام</h1>                        
          <button><img class="header__box-icon" src="@/assets/bottom-icon.svg" alt="bottom-icon"></button>
      </div>                                
      <nav class="header__nav">
          <button class="btn-black"><a class="header__nav-link" href="#">فروش در باسلام</a></button>
          <div class="header__nav-not">
            <img class="header__nav-not-pic" src="@/assets/portfolio.svg" alt="portfolio">
            <span class="header__nav-not-number">{{ length }}</span>
          </div>
      </nav>  
      <form class="search" method="GET">
        <input class="search__input" type="text" placeholder="جستجو در صدها هزار محصول خانگی و محلی...">
        <button class="search__btn">
          <img class="search__btn-icon" src="@/assets/magnifier.svg" alt="magnifier">             
        </button>
      </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: mapGetters(["length"]) 
}
</script>
<style scoped>
 .header {
  background-color: #fff;
  min-height: 90px;  
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; }   
  .header__box {
    display: flex;
    align-items: center; }
    .header__box-icon {
      margin-right: 3px;
      margin-top: 12px; }
  .header__logo {
    width: 22px;
    height: 24px;
    margin-right: 15px; }
  .header__nav {
    display: flex;
    flex: 0 0 45%;
    align-items: center;
    justify-content: space-evenly; }
    .header__nav-not {
      position: relative;
      display: flex;
      cursor: pointer; }
      .header__nav-not-number {
        height: 17px;
        width: 17px;
        font-size: 11px;
        background-color: #ca0202;
        color: #FFFFFF;
        border-radius: 50%;
        position: absolute;
        top: -2px;
        right: 11px;
        display: flex;
        justify-content: center;
        padding: 1px; }
      .header__nav-not-pic {
        width: 25px;
        height: 25px; }  
  .header__nav-link {
      font-size: 10px; } 
.search {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; }
  .search__input {    
    padding: 8px;
    border-radius: 20px;
    font-size: 10px;
    color: #333;
    width: 95%;
    border: 1px solid #e5e5e5; }
  .search__btn {
      position: absolute;
      left: 22px;
      bottom: 10px; }
    .search__btn-icon {
      width: 15px; }
.btn-black {
  display: inline-block;
  padding: 7px 15px;
  background-color: #3E3E3E;
  border-radius: 100px;
  font-size: 10px;
  border: none; }
</style>
