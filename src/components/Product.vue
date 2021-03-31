<template>
  <div id="product" v-if="!isDelete">      
        <div class="product__food">
            <img class="product__food-img" :src="p.productPic" alt="food-image">
            <p class="product__food-cap">{{ p.productName }}</p>
            <div class="product__food-box">
                <p class="product__food-box-off"><s>{{ p.primePrice }}</s></p>
                <input class="product__food-price" type="text" :value="p.price" readonly>
                <img class="card__box__price-pic" src="..\assets\tooman.svg" alt="price-pic">
            </div>                                
        </div>        
        <div class="product__count">
            <div class="product__count__calc">
                <button class="plus-sign" @click="decNumber"><img src="..\assets\add.svg" alt="add-sign"></button>                                 
                <div class="product__count__calc-num">{{ counter }}</div>
                <button class="minus-sign" @click="incNumber"><img src="..\assets\negative.svg" alt="minus-sign"></button>                           
            </div>                        
            <button><img @click="deleteItem" class="product__count__del" src="..\assets\delete.svg" alt="delete-sign"></button>                        
            <div class="product__count__cap">
                <button class="product__count__cap-p">ذخیره در لیست خرید بعدی</button>                   
            </div>
        </div>     
  </div>
</template>
<script>
export default {
    name: 'Product',
    data() {
        return {
            counter: 1,
            sum: 0, 
            isDelete: '',
            isFullDelete: '',                      
        }
    }, 
    methods: {
        incNumber() {
            this.counter++;
            this.sum = this.counter * this.p.price;
            this.$emit('calcSum', this.sum);           
        },
        decNumber() {
            if (this.counter > 1) {
                this.counter--;
                this.sum = this.counter * this.p.price;
                this.$emit('calcSum', this.sum);
            } else this.counter = 1;
        }, 
        deleteItem() {
            this.isDelete = true;            
            this.product.pop();           

            if (this.product.length < 1) {
                this.isFullDelete = true;                
            }           
            this.$emit('onDelete', {
                isDelete: this.isDelete,
                isFullDelete: this.isFullDelete
            });
            this.$root.$emit('onDelete', {
                state: this.isDelete
            });           
        }                   
    }, 
    props: ['p', 'product'],   
}
</script>
<style scoped>
#product { margin-top: 5px; }
.product__food {
  display: flex;
  justify-content: space-around; }
  .product__food-cap {
    align-self: flex-start;
    font-size: 12px;
    font-weight: 400;
    color: #3E3E3E;
    flex: 0 0 30%; }
  .product__food-price {  
    width: 42%;
    border: none;  
    font-size: 12px;
    font-weight: 400;
    color: #535353; }
  .product__food-box {
    display: flex;
    flex: 0 0 26%;
    justify-content: space-around;
    align-items: flex-end; }
    .product__food-box-off {
      font-size: 12px;
      padding-left: 3px;
      color:#9d9d9d; }   
.product__count {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eeee; }
  .product__count__del {
    width: 20px;
    height: 20px; }
  .product__count__calc {
    display: flex;
    align-items: center; }
    .product__count__calc-num {
      padding: 0px 8px;
      border: 1px solid #eeee;
      border-radius: 8px;
      margin: -6px 10px 0 10px }
  .product__count__cap {
    display: flex;
    flex: 0 0 45%;
    justify-content: flex-end; }
    .product__count__cap-p {
      font-size: 10px;
      font-weight: 700;
      color: #7d7d7d;
      border-bottom: 1px dashed #7d7d7d; }
</style>
