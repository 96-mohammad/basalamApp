<template>
    <div class="payment__product">        
         <div class="payment__product__header">                            
            <p class="payment__product__header-p">از غرفه: <b>{{ cart.vendor.title }}</b></p>
        </div>
        <div class="food">
            <img class="food-img" src="@/assets/pic/meal-1.jpg" alt="food-image">
            <div class="food__detail">
                <p class="food__detail-cap">{{ cart.title }}</p>
                <div class="food__detail__box">
                  <p class="food__detail__box-number">{{ counter }} عدد</p>
                  <p class="food__detail__box-prime"><s>{{ cart.primaryPrice }}</s></p>
                </div>
                <div class="food__detail__price">                
                  <p class="food__detail__price-value">{{ cart.price }}</p>
                  <img class="card__box__price-pic" src="@/assets/tooman.svg" alt="price-pic">
                </div>  
            </div>                                         
        </div>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'PaymentProduct',
  computed: mapGetters(["counter"]),
  props: {
    cart: {
      type: Object,
      required: true
    }
  }, 
}
</script>
<style scoped>
.payment__product {
    padding: 10px 15px }
    .payment__product-p {
      font-weight: 400;
      font-size: 16px;
      color: #3E3E3E; }    
      .payment__product__header-p {
          font-size: 14px;        
          color: #3E3E3E; }
.food {
    padding: 15px 0;
    display: flex;
    border-bottom: 1px solid #eee; }
.food__detail {
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    flex: 1; }
    .food__detail-cap {      
      font-size: 12px;
      font-weight: 400;
      color: #3E3E3E; } 
      .food__detail__box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px; }
        .food__detail__box-prime {
          font-size: 12px;       
          color:#9d9d9d;
          margin-top: 4px; } 
        .food__detail__box-number {
          font-size: 12px;
          font-weight: 400;
          color: #3E3E3E; }
    .food__detail__price {
      display: flex;      
      justify-content: flex-end;
      margin-top: 7px; }
      .food__detail__price-value {  
        width: 20%;
        border: none;  
        font-size: 12px;
        font-weight: 400;
        color: #535353; } 
</style>