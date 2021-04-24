<template>
  <div class="address">       
    <AddressHeader />
    <AddressForm v-for="(address, index) in 2" :key="index" />     
    <AddressFooter />   
  </div>
</template>

<script>
import AddressHeader from './address/AddressHeader';
import AddressForm from './address/AddressForm';
import AddressFooter from './address/AddressFooter';
export default {
    name: 'SelectAddress',    
    components: {
        AddressHeader,
        AddressForm,        
        AddressFooter
    },     
}
</script>
<style scoped>
  .address {
    background-color: #fff;
  }
</style>