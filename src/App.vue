<template>
  <div id="app"> 
    <router-view name="header" />
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'App',  
  methods: mapActions(["fetchData"]),
  async mounted() {
    this.fetchData()
  }   
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
      box-sizing: border-box;
      scroll-behavior: smooth }
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
      max-width: 350px; }  
    .heading-one {
      font-size: 24px;
      font-weight: 400;
      color: #535353;
      margin-right: 5px; }      
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
        padding: 11px 18px; }
        .btn-red-big-link {
          font-size: 14px;
          font-weight: 700; }
</style>
<style src="C:\Users\HamidCom\Desktop\files\tmp\app.basalam\src\css\iranstyle.css"></style>