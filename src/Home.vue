<template>
    <div id="home">
        {{ getData() }} 
        
        <LetterHead />
        <Vendor v-for="(v, index) in vendor" :key="index" :vendors="vendor" :v="v" :product="product"/>    
        <Footer :vendors="vendor" :product="product"/>         
    </div>  
</template>

<script>
//import Header from './components/Header';
import Vendor from './components/Vendor';
import Footer from './components/Footer';
import LetterHead from './components/LetterHead';
export default {
    name: 'Home',
    data() {
        return {
            vendor: [],
            product: []
        }
    },
    components: {
        //Header,
        Vendor,
        Footer,
        LetterHead
    },
    methods: {
      getData() {
      const fakeData = require('../data/FakeData.json');     
      this.vendor = fakeData.vendors; 
      this.product = fakeData.products;                
    }
  }, 
}
</script>

