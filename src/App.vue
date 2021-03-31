<template>
  <div id="app">
    {{ getData() }}    
    <Header :vendors="vendor"/>
    <LetterHead />
    <Vendor v-for="(v, index) in vendor" :key="index" :v="v" :vendors="vendor"/>    
    <Footer :vendors="vendor"/>
  </div>
</template>

<script>
import Header from './components/Header';
import Vendor from './components/Vendor';
import Footer from './components/Footer';
import LetterHead from './components/LetterHead';
export default {
  name: 'App',
  data() {
    return {        
      vendor: [],             
    }
  },
  components: {
    Header,
    Vendor,
    Footer,
    LetterHead
  },
  methods: {
      getData() {
      const fakeData = require('../data/FakeData.json');     
      this.vendor = fakeData.vendors;                 
    }
  },   
}
</script>
<style>
    *,
    *::after,
    *::before {
      margin: 0;
      box-sizing: inherit;
      padding: 0; }
    *:focus { outline: none; }
    html {
      box-sizing: border-box; }
    body {
      background-color: #e5e5e5; }
    a {
      text-decoration: none;
      color: #fff; }
    button {
      border: none;
      font-family: IRANSans !important;
      cursor: pointer;
      background-color: #fff; }
    #app {
      margin: 0 auto;
      width: 350px; }  
    .heading-one {
      font-size: 24px;
      font-weight: 400;
      color: #535353;
      margin-right: 5px; }
    .heading-two {
      color: #535353;
      font-size: 12px;
      font-weight: 400;
      padding: 10px; }   
    .btn-red {
      display: inline-block;
      padding: 10px 25px;
      border-radius: 100px;
      background-color: #DF3856;
      border: none; }
      .btn-red-link {
        font-size: 12px;
        font-weight: 400; }
      .btn-red-big {
        padding: 15px 20px; }
        .btn-red-big-link {
          font-size: 14px;
          font-weight: 700; }
</style>
<style src="C:\Users\HamidCom\Desktop\files\tmp\app.basalam\src\css\iranstyle.css"></style>