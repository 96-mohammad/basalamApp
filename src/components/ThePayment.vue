<template>
    <div class="payment">
        <PaymentHeader />
        <PaymentOff />
        <PaymentSelectBank />   
        <PaymentProduct v-for="cart in cart" :key="cart._id" :cart="cart" />  
        <PaymentFooter />   
    </div>  
</template>

<script>
import PaymentHeader from './payment/PaymentHeader';
import PaymentOff from './payment/PaymentOff';
import PaymentSelectBank from './payment/PaymentSelectBank';
import PaymentProduct from './payment/PaymentProduct';
import PaymentFooter from './payment/PaymentFooter';
import { mapGetters } from 'vuex';
export default {
    name: 'Payment',
    components: {
        PaymentHeader,
        PaymentOff,
        PaymentSelectBank,
        PaymentProduct,
        PaymentFooter        
    },
    computed: mapGetters(["cart"]) 
}
</script>

<style scoped>
    .payment {
        background-color: #fff;
        padding-bottom: 20px;
    }
</style>