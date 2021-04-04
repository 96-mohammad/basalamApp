<template>
  <div id="address">  
    {{ getData() }}    
    <AddressHeader />
    <AddressForm v-for="(a, index) in address" :key="index" :a="a"/>     
    <AddressFooter :vendors="vendor"/>   
  </div>
</template>

<script>
import AddressHeader from './components/AddressHeader';
import AddressForm from './components/AddressForm';
//import Header from './components/Header';
import AddressFooter from './components/AddressFooter';
export default {
    name: 'SelectAddress',
    data() {
      return {
        address: '',
        vendor: []
      }
    },
    components: {
        AddressHeader,
        AddressForm,
        //Header,
        AddressFooter
    },
    methods: {
      getData() {
      const fakeData = require('../data/FakeData.json');     
      this.address = fakeData.address;   
      this.vendor = fakeData.vendor;             
    }
  }  
}
</script>
<style scoped>
  #address {
    background-color: #fff;
  }
</style>