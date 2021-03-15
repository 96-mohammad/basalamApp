<template>
  <div id="app">    
    <Header></Header>
    <LetterHead />
    <Vendor></Vendor>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Vendor from './components/Vendor';
import Footer from './components/Footer';
import LetterHead from './components/LetterHead';
export default {
  name: 'App',
  components: {
    Header,
    Vendor,
    Footer,
    LetterHead
  },
}
</script>

<style src="./css/style.css"></style>
<style src="C:\Users\HamidCom\Desktop\files\tmp\app.basalam\src\css\iranstyle.css"></style>