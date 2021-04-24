<template>
    <section v-if="isDelete" class="empty">     
      <div class="empty__content">
        <img class="empty__content-pic" src="@/assets/pic/basket.png" alt="basket">
        <h5>سبد خرید شما خالی است!</h5>
        <p class="empty__content-p">
           شاید بتوانید با کمی گشت و گذار بیشتر در وبسایت محصول مورد نظر خود را پیدا کنید. 
        </p>
      </div>
    </section> 
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'EmptyCart',  
  computed: mapGetters(["isDelete"])
}
</script>
<style scoped>
.empty {   
    background-color: #fff;
    min-height: 360px; }
    .empty__content {
        text-align: center;
        padding: 25px; }
        h5 {
            color: #3e3e3e;
            font-weight: 400; }
        .empty__content-pic {
            height: 150px;
            width: 200px; }
        .empty__content-p {
            margin-top: 10px;
            padding: 4px;
            font-size: 10px;
            font-weight: 300;
            line-height: 21px;
            color: #3e3e3e; } 
</style>