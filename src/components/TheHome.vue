<template>
    <div id="home">       
        <LetterHead />        
        <TheCart v-for="cart in cart" :key="cart._id" :cart="cart" /> 
        <EmptyCart />
        <TheFooter />         
    </div>  
</template>

<script>
import { mapGetters } from 'vuex';
import TheCart from './home/TheCart';
import TheFooter from './home/TheFooter';
import LetterHead from './home/LetterHead';
import EmptyCart from './home/EmptyCart';
export default {
    name: 'Home',    
    components: {       
        TheCart,
        TheFooter,
        LetterHead,
        EmptyCart
    },  
    computed: mapGetters(["cart"])           
}
</script>

