<template>
    <div id="footer">
        <div class="footer__footer">
            <button @click="sentSumVendor" class="btn-red btn-red-big">
                <router-link class="btn-red-big-link" :to="{ name: 'address', params: { id: $route.params.id } }">ادامه خرید از {{ vendorLength }} غرفه
                </router-link>
            </button>
            <div class="footer__price">
                <p class="footer__price-p">مبلغ قابل پرداخت <span class="price-number-1">{{ vendorLength }}</span> غرفه</p>
                <div class="footer__price-box">
                    <p class="footer__price-num">{{ vendorSum }}</p>
                    <img class="footer__price-pic" src="@/assets/tooman.svg" alt="price pic">
                </div>                         
            </div>
        </div>                      
    </div>   
</template>

<script>
export default {
    name: 'Footer',
    props: ['vendors', 'product'],
    data() {
        return {
            vendorPrice: [0,0],
            vendorSum: 0,
            vendorLength: 0                  
        }
    },
    methods: {       
        updateSum() {
            this.vendorSum = this.vendorPrice[0] + this.vendorPrice[1]       
        },
        decLength() {
            this.vendorLength--
        },
        sentSumVendor() {
            this.$root.$emit('onLink', {
                sum: this.vendorSum               
            });
        },
        insertDefaultData() {
            this.vendorPrice[0] = this.product[0].price + this.product[1].price;
            this.vendorPrice[1] = this.product[2].price;       
            this.vendorSum = this.vendorPrice[0] + this.vendorPrice[1];
            this.vendorLength = this.vendors.length;
        }
    },
    created() {             
        this.$root.$on('sumData', (data) => {   
            this.vendorPrice[data.id] = data.sum; 
            this.updateSum();           
        });
        this.$root.$on('reduceSum', (data) => {
            this.vendorPrice[data.id] = data.sum; 
            this.updateSum(); 
            if (data.state) {
                this.decLength();
            }                             
        });     
        this.insertDefaultData();        
    }
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