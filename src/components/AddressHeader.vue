<template>
    <div class="address__header">
        <div class="address__header__exp">
            <router-link class="address__header__exp-link" :to="{ name: 'home', params: { id: $route.params.id}}">
              <img class="address__header__exp-img" src="@/assets/backIcon.svg" alt="backIcon">
            </router-link>
            <p class="address__header__exp-p">آدرس ارسال</p>                            
        </div>
        <button class="address__header__btn">
            <img src="@/assets/plus.svg" alt="addSign" class="address__header-img">
            <p class="address__header__btn-p">آدرس جدید</p>                            
        </button>
    </div>  
</template>

<script>
export default {
  name: 'AddressHeader',
}
</script>

<style scoped>
.address__header {
    background-color: #fff;
    margin-top: 5px;
    padding: 20px;   
    display: flex;
    justify-content: space-between; }  
    .address__header__exp {
      display: flex;
      align-items: center; }
      .address__header__exp-link {
        height: 38px; }
      .address__header__exp-img {
        width: 40px;
        height: 40px; }
      .address__header__exp-p {
        font-weight: 400;
        font-size: 14px;
        margin-right: 5px;
        color: #3E3E3E; }
  .address__header__btn {
    display: flex;
    align-items: center;
    border: 1px solid #9d9d9d;
    padding: 7px 17px;    
    border-radius: 100px; }
    .address__header__btn-p {
      color: #3E3E3E;
      margin-right: 5px;
      font-size: 13px;
      font-weight: 700; }
</style>>

