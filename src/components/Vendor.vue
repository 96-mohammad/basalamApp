<template>       
    <section v-if="!isFullDelete" class="card">
      <div class="card__header">                            
        <p class="card__header-p">از غرفه:<b>{{ v.shopName }}</b></p>
      </div>
      <div class="card__body">
          <figure class="body__user">
            <img class="body__user-img" :src="v.userPhoto" alt="user photo">                        
            <div class="body__user__exp">
                <figcaption class="body__user__exp-cap">{{ v.owner }}</figcaption>
                <div class="body__user__loc">
                    <img class="body__user__loc-icon" src="..\assets\location.svg" alt="location svg">
                    <p class="body__user__loc-p">از {{ v.destination }}</p>
                </div>                            
            </div>
          </figure>                               
      </div> 
      <Product v-for="p in this.vendors[0].product" :key="p.id" :p="p" :product="product"
                @calcSum="updateData($event, p.id)" @onDelete="changeState($event, p.id)"
            />       
      <div class="card__footer">
          <p v-if="v.offShow" class="card__footer-p">هورا! ارسال از این غرفه برای شما <span class="span-green">رایگان شد.</span></p>
          <p v-else class="card__footer-p card__footer-p-edit">برای ارسال رایگان: <span class="span-black">۴۵۰۰۰ تومان دیگه از این غرفه خرید کنید.</span></p>                        
          <div class="card__box card__box-edit">
              <button class="btn-red"><a class="btn-red-link" href="#">ادامه خرید فقط از این غرفه</a></button>
              <div class="card__box__price">
                <p class="card__box__price-p">جمع مبلغ برای<span class="price-number"> {{ length }} </span>کالا</p>
                <div class="card__box__price-box">                  
                    <p class="card__box__price-num">{{ sum }}</p> 
                    <img class="card__box__price-pic" src="..\assets\tooman.svg" alt="price pic">
                </div>                                
              </div>
          </div>         
      </div>                  
    </section>            
</template>

<script>
import Product from './Product';
export default {
  name: 'Vendor',
  data() {
    return { 
      product: [...this.vendors[0].product],    
      price: [0,0],
      sum: 0,
      isDelete: false,
      isFullDelete: false,
      length: 0 
    }
  },
  components: {
    Product
  },
  props: ['vendors', 'v'],
  methods: {     
    updateData(sum, id) {        
      this.price[id] = sum;       
      this.sumData();   

      this.$root.$emit('sumData', {
        sum: this.sum,
        id: this.v.id
      });   
    },    
    changeState(state, id) {
      this.isDelete = state.isDelete;
      this.isFullDelete = state.isFullDelete;
      this.length = this.product.length;

      if (this.isDelete) {
        this.price[id] = 0;
        this.sumData(); 
      }   
          
      this.$root.$emit('reduceSum', {
        sum: this.sum,
        id: this.v.id,        
        state: this.isFullDelete
      });
    },
    sumData() {
      this.sum = this.price[0] + this.price[1];      
    },                   
  },   
  created() {
    this.sum = this.product[0].price + this.product[1].price;
    this.price[0] = this.product[0].price;
    this.price[1] = this.product[1].price;
    this.length = this.product.length;
  },  
}
</script>
<style scoped>
.card {    
  background-color: #fff; }
  .card__body { margin-top: 15px; }
  .card__header {
    padding: 20px 15px 0 15px; }
    .card__header-p {
      font-size: 14px;
      color: #3E3E3E; }  
  .card__footer {
    margin-bottom: 5px; }
    .card__footer-p {
      width: 85%;
      margin: 7px auto;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 400;
      padding: 6px;
      background-color: #dff5f1;
      color: #00786c; }
      .card__footer-p-edit {
        background-image: linear-gradient(to left, #dff5f1, #e5e5e5); }      
    .card__footer__off {
      margin: 15px 25px;
      padding: 5px;
      background-color: #eeee;
      border-radius: 100px;
      width: 35%;
      display: flex;
      align-items: center;
      justify-content: center;
      float: left; }
      .card__footer__off-link {
        color: #3e3e3e;
        text-decoration: none;
        font-size: 10px;
        font-weight: 700; }
  .card__box {    
    display: flex;
    align-items: center;
    justify-content: space-around;    
    padding: 10px; }           
    .card__box__price {
      display: flex;
      flex-direction: column;
      color: #535353; }
      .card__box__price-box {
        display: flex;
        align-items: center;
        justify-content: flex-end; }
      .card__box__price-p {
        font-size: 12px;
        font-weight: 400; }
      .card__box__price-num {
        font-size: 12px;
        font-weight: 700;
        align-self: flex-end; 
        padding-left: 3px; } 
.body__user {
  display: flex;
  padding: 0px 15px 15px 15px; }
  .body__user-img {
    margin-left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 100%; }
  .body__user__exp {
    display: flex;
    flex-direction: column; }
    .body__user__exp-cap {
      font-size: 12px;
      font-weight: 400;
      color: #3E3E3E; }
  .body__user__loc {
    display: flex; }
    .body__user__loc-p {
      font-size: 10px;
      font-weight: 400;
      color: #333;
      padding: 5px; }
    .body__user__loc-locn {
      width: 10px;
      height: 13px; } 
.span-black {
  font-weight: 400;
  color: #282828; } 
.span-green {
  font-weight: 700; } 
</style>