<template>      
    <section class="card">      
        <div class="card__header">                            
          <p class="card__header-p">از غرفه:<b>{{ cart.vendor.title }}</b></p>
        </div>
        <div class="card__body">
            <figure class="body__user">
              <img v-if="isPicture" class="body__user-img" :src="cart.vendor.owner.avatar.url" alt="user photo"> 
              <img v-else class="body__user-img" src="@/assets/pic/user-1.jpeg" alt="user photo">   
              <div class="body__user__exp">
                  <figcaption class="body__user__exp-cap">{{ cart.vendor.owner.name }}</figcaption>
                  <div class="body__user__loc">
                      <img class="body__user__loc-icon" src="@/assets/location.svg" alt="location svg">
                      <p class="body__user__loc-p">از {{ cart.vendor.owner.city }}</p>
                  </div>                            
              </div>
            </figure>                               
        </div>       
        <div class="product">      
          <div class="product__food">
              <img class="product__food-img" src="@/assets/pic/meal-1.jpg" alt="product-image">
              <p class="product__food-cap">{{ cart.title }}</p>
              <div class="product__food-box">
                  <p class="product__food-box-off"><s>{{ cart.primaryPrice }}</s></p>
                  <p class="product__food-price">{{ cart.price }}</p>                
                  <img class="card__box__price-pic" src="@/assets/tooman.svg" alt="price-pic">
              </div>                                
          </div>        
          <div class="product__count">
              <div class="product__count__calc">
                  <button @click="decNumber" @mousedown="decSpeedUp" @mouseup="speedStop" class="plus-sign" ><img src="@/assets/negative.svg" alt="negativeSign"></button>                                 
                  <div class="product__count__calc-num">{{ counter }}</div>
                  <button @click="incNumber" @mousedown="incSpeedUp" @mouseup="speedStop" class="minus-sign" ><img src="@/assets/add.svg" alt="addSign"></button>                           
              </div>                        
              <button><img @click="deleteCart(cart._id), backToDefault()" class="product__count__del" src="@/assets/delete.svg" alt="delete-sign"></button>                        
              <div class="product__count__cap">
                  <button class="product__count__cap-p">ذخیره در لیست خرید بعدی</button>                                  
              </div>           
          </div>     
        </div>
        <div class="card__footer">
          <div v-if="showOffBox" class="show__off">
            <p class="card__footer-p">هورا! ارسال از این غرفه برای شما <span class="span-green">رایگان شد.</span></p>         
            <div class="card__footer__off">
              <img src="@/assets/tikcet.svg" alt="tikcet symbole">
              <router-link class="card__footer__off-link" :to="{ name: 'payment', params: { id: $route.params.id }}">ثبت کد تخفیف غرفه</router-link>                           
            </div>
          </div>          
          <p v-else class="card__footer-p card__footer-p-edit">برای ارسال رایگان: <span class="span-black">۴۵۰۰۰ تومان دیگه از این غرفه خرید کنید.</span></p>              
          <div class="card__box card__box-edit">
            <button @click="justThisPrice()" class="btn-red">
              <router-link 
                class="btn-red-link" :to="{ name: 'address', params: { id: $route.params.id }}">ادامه خرید فقط از این غرفه
              </router-link>
            </button>
            <div class="card__box__price">
              <p class="card__box__price-p">جمع مبلغ برای<span class="price-number"> 1 </span>کالا</p>
              <div class="card__box__price-box">                  
                <p class="card__box__price-num">{{ price }}</p> 
                    <img class="card__box__price-pic" src="@/assets/tooman.svg" alt="price pic">
              </div>                                
            </div>
          </div>         
        </div>                      
    </section>      
</template>

<script>
import { mapActions, mapGetters } from 'vuex'; 
export default {
  name: 'Vendor',
  data() {
    return {      
      counter: 1,      
      price: this.cart.price,
      id: null,
      int: null,
      showOffBox: false,
      isPicture: null      
    }
  },  
  props: {
    cart: {
      type: Object,
      required: true
    }
  }, 
  computed: mapGetters(["isDelete"]), 
  methods: {  
    //*** Delete Price And Cart ***//
    ...mapActions(["deleteCart"]),
    backToDefault() { this.$store.commit('DELETE_PRICE', this.id) },
    //*** Increase and Decreace Number ***//
    incNumber() {
      this.counter++

      if (this.counter === 2) 
          this.showOffBox = true    

      if (this.counter > this.cart.stock)
        this.counter = this.cart.stock

      this.price = parseInt(this.cart.price) * this.counter      
      //*** Send Data to Store ***//
      this.$store.commit('CALC_VENDOR_VALUE', {
        id: this.id,
        total: this.price
      });
      this.$store.commit('GET_COUNTER', this.counter)
    },
    decNumber() {  
      if (this.counter > 2) {
          this.counter--;
          console.log(this.counter)
          this.price = parseInt(this.cart.price) * this.counter  
               
          //*** Send Data to Store ***//
          this.$store.commit('CALC_VENDOR_VALUE', {
            id: this.id,
            total: this.price
          })
          this.$store.commit('GET_COUNTER', this.counter)
      } else {          
          this.counter = 1 
          this.price = parseInt(this.cart.price) * this.counter
          this.$store.commit('CALC_VENDOR_VALUE', {
            id: this.id,
            total: this.price
          })
          this.showOffBox = false          
      }                 
    },
    //*** Find ID For Product From Cart ID ***//
    setId(cartID, title) {
      //این شرط به این دلیل گذاشته شده است که مشابهت بسیار زیادی بین آیدی این محصول و محصول دیگری وجود دارد
      if (title === "کیک کاکائویی خشمزه") 
        this.id = 2
      else this.id = cartID.slice(3, 7)
    },
    //*** Speed Up in Hold Mouse ***//
    incSpeedUp() {  
      this.int = setInterval(() => {
        this.counter++

        if (this.counter === 2) 
          this.showOffBox = true

        if (this.counter > this.cart.stock)
            this.counter = this.cart.stock

        this.price = parseInt(this.cart.price) * this.counter      
        //*** Send Data to Store ***//
        this.$store.commit('CALC_VENDOR_VALUE', {
            id: this.id,
            total: this.price
        })
        this.$store.commit('GET_COUNTER', this.counter)
      }, 105)     
    },
    decSpeedUp() {  
      if (this.counter > 2) { 
        this.int = setInterval(() => {
          this.counter--

          if (this.counter > this.cart.stock)
            this.counter = this.cart.stock

          this.price = parseInt(this.cart.price) * this.counter      
          //*** Send Data to Store ***//
          this.$store.commit('CALC_VENDOR_VALUE', {
            id: this.id,
            total: this.price
          })
        this.$store.commit('GET_COUNTER', this.counter)
      }, 95)        
      } else {          
          this.counter = 1 
          this.price = parseInt(this.cart.price) * this.counter
          this.$store.commit('CALC_VENDOR_VALUE', {
            id: this.id,
            total: this.price
          })
          this.showOffBox = false          
      }
    },
    speedStop() { clearInterval(this.int) },
    //*** If User Click Cart Button ***//
    justThisPrice() { 
      this.$store.commit('JUST_CART_PRICE', {
        price: this.price,
        id: this.cart._id
      }) 
    },       
  },
  //*** Set Intial Setting ***//
  created() { 
    this.setId(this.cart._id, this.cart.title)
    this.$store.commit('INITIAL_VALUE', {
      price: parseInt(this.cart.price),
      id: this.id
    }); 
    //*** If User Picture Exist ***//
    if (this.cart.vendor.owner.avatar.url !== null) 
      this.isPicture = true
    else this.isPicture = false
  }
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
      margin: 5px 0 0 23px;
      padding: 7px;
      background-color: #eeee;
      border-radius: 100px;      
      display: flex;      
      align-self: flex-end; }
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
.product { margin-top: 5px; }
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
      border: none;  
      font-size: 12px;
      font-weight: 400;
      color: #535353; }
    .product__food-box {
      display: flex;
      flex: 0 0 30%;
      justify-content: space-evenly;
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
      height: 20px;
      transition: all .3s; }
      .product__count__del:hover {
          transform: rotate(-12deg); }
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
.show__off {
  display: flex;
  flex-direction: column; }
</style>