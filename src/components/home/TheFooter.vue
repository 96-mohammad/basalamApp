<template>
    <div id="footer">          
        <div class="footer__footer">
            <button class="btn-red btn-red-big">
                <router-link 
                    class="btn-red-big-link" :to="{ name: 'address', params: { id: $route.params.id } }">ادامه خرید از {{ length }} غرفه
                </router-link>
            </button>
            <div class="footer__price">
                <p class="footer__price-p">مبلغ قابل پرداخت <span class="price-number-1">{{ length }}</span> غرفه</p>
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
    name: 'Footer',
    computed: {        
        ...mapGetters(["length", "total"])
    },
     
}
</script>
<style scoped>
    #footer {
        margin-top: 80px; }
    .footer__footer {
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: space-around;  
        padding: 10px 0;             
        width: 350px;
        bottom: -3px;
        background-color: #fff; }    
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