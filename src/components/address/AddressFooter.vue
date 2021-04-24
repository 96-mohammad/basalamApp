<template>
  <div id="footer">      
    <div class="footer__footer">
        <button class="btn-red btn-red-big">
            <router-link class="btn-red-big-link" :to="{ name: 'payment', params: { id: $route.params.id } }">
                ادامه فرآیند خرید
            </router-link>
        </button>
        <div class="footer__price">
            <p class="footer__price-p">مبلغ قابل پرداخت</p>
            <div class="footer__price-box">
                <p class="footer__price-num">{{ total }}</p>
                <img class="footer__price-pic" src="@/assets/tooman.svg" alt="price pic">
            </div>                         
        </div>
        </div>                      
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'AddressFooter', 
    computed: mapGetters(["total"]) 
}
</script>
<style>
    #footer {
        background-color: #fff;
        margin-top: 20px; }
    .footer__footer {
        display: flex;       
        align-items: center;
        justify-content: space-around;  
        padding: 10px 0;             
        width: 350px; }    
    .footer__price {
        display: flex;
        flex-direction: column;
        color: #535353; }
        .footer__price-box {
            display: flex;
            align-items: center;
            justify-content: flex-end; }
    .footer__price-p {
        font-size: 12px;
        font-weight: 400; }
    .footer__price-num {
        font-size: 12px;
        font-weight: 700;
        align-self: flex-end; 
        padding-left: 3px; }
</style>