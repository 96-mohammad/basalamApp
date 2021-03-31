<template>
    <div id="footer">
        <div class="footer__footer">
            <button class="btn-red btn-red-big"><a class="btn-red-big-link" href="#">ادامه خرید از {{ length }} غرفه</a></button>
            <div class="footer__price">
                <p class="footer__price-p">مبلغ قابل پرداخت <span class="price-number-1">{{ length }}</span> غرفه</p>
                <div class="footer__price-box">
                    <p class="footer__price-num">{{ sum }}</p>
                    <img class="footer__price-pic" src="..\assets\tooman.svg" alt="price pic">
                </div>                         
            </div>
        </div>
    </div>   
</template>

<script>
export default {
    name: 'Footer',
    props: ['vendors'],
    data() {
        return {
            price: [0,0],
            sum: 0,
            length: 0            
        }
    },
    methods: {       
        sumData() {
            this.sum = this.price[0] + this.price[1];          
        },
        decLength() {
            this.length--;
        }
    },
    created() {             
        this.$root.$on('sumData', (data) => {   
            this.price[data.id] = data.sum; 
            this.sumData();  

        });
        this.$root.$on('reduceSum', (data) => {
            this.price[data.id] = data.sum; 
            this.sumData(); 
            if (data.state) {
                this.decLength();
            }                             
        });     
        
        this.price[0] = this.vendors[0].product[0].price + this.vendors[0].product[1].price;
        this.price[1] = this.vendors[0].product[0].price + this.vendors[0].product[1].price;
        this.sum = this.price[0] + this.price[1];
        this.length = this.vendors.length;
    }
}
</script>
<style scoped>
#footer {
    margin-top: 80px;
    width: inherit; }
.footer__footer {
      display: flex;
      position: fixed;
      align-items: center;
      justify-content: space-around;  
      padding: 7px 0;             
      width: inherit;
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