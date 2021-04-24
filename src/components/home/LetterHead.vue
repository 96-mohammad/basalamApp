<template>    
    <div class="letter__head">        
        <button class="letter__head-btn">
            <router-link class="letter__head-h2" :to="{name: 'home', params: {id: $route.params.id}}" active-class="active" exact>سبد خرید</router-link>
        </button>
        <button class="letter__head-btn">
            <router-link class="letter__head-h2" :to="{name: 'savePage', params: {id: $route.params.id}}" active-class="active">لیست خرید بعدی</router-link>
        </button>       
    </div>    
</template>

<script>
export default {
    name: 'LetterHead'
}
</script>
<style scoped>
.letter__head {    
    margin-top: 4px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;    
    background-color: #fff; }
    .letter__head-btn {
        width: 50%; }
    .letter__head-h2 {
        color: #535353;
        font-size: 12px;
        font-weight: 400; }
.active {
  color: #DF3856;
  font-weight: 700; }  
  .active::after {
      content: " ";
      width: 100%;
      height: 2px;
      background-color: #DF3856;
      display: inline-block; }
</style>