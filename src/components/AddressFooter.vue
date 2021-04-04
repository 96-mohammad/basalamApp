<template>
  <div id="footer">
      {{ reciveData() }}
        <div class="footer__footer">
            <button class="btn-red btn-red-big"><a class="btn-red-big-link">ادامه فرآیند خرید</a></button>
            <div class="footer__price">
                <p class="footer__price-p">مبلغ قابل پرداخت</p>
                <div class="footer__price-box">
                    <p class="footer__price-num">{{ sum }}</p>
                    <img class="footer__price-pic" src="@/assets/tooman.svg" alt="price pic">
                </div>                         
            </div>
        </div>                      
    </div>
</template>

<script>
export default {
    name: 'AddressFooter',
    props: ['vendor'],
    data() {
        return {
            sum: 0
        }
    }, 
    methods: {
        reciveData() {
            this.$root.$on('onLink', data => {
                this.sum = data.sum;
            });
        }
    }
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