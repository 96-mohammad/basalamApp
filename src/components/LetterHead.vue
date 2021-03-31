<template>    
    <div class="letterHead">
        <button class="heading-two active" >سبد خرید</button>
        <button class="heading-two unactive">لیست خرید بعدی</button>
    </div>    
</template>

<script>
export default {
    name: 'LetterHead'
}
</script>

<style scoped>
.letterHead {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    background-color: #fff; }
.active {
  color: #DF3856;
  font-weight: 700; }
  .active::after {
    display: block;
    content: " ";
    height: 2px;
    width: 50%;
    background-color: #DF3856;
    position: absolute;
    top: 40px;
    right: 0; }
.unactive::after {
  display: block;
  content: " ";
  height: 2px;
  width: 50%;
  background-color: #e5e5e5;
  position: absolute;
  top: 40px;
  left: 0; }
</style>