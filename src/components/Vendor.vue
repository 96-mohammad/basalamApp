<template>
  <section class="card">
    <div class="card__header">                            
      <p class="card__header-p">از غرفه:<b>   محصولات غذایی ولیک</b></p>
    </div>
    <div class="card__body">
        <figure class="body__user">
          <img class="body__user-img" src="..\assets\pic\user-1.jpeg" alt="user photo">                        
          <div class="body__user__exp">
              <figcaption class="body__user__exp-cap">سارا خوش دل</figcaption>
              <div class="body__user__loc">
                  <img class="body__user__loc-icon" src="..\assets\location.svg" alt="location svg">
                  <p class="body__user__loc-p">از بوشهر</p>
              </div>                            
          </div>
        </figure>                               
    </div> 
    <Product></Product>                  
    <div class="card__footer">
        <p class="card__footer-p card__footer-p-edit">برای ارسال رایگان: <span class="span-black">۴۵۰۰۰ تومان دیگه از این غرفه خرید کنید.</span></p>                        
        <div class="card__box card__box-edit">
            <button class="btn-red"><a class="btn-red-link" href="#">ادامه خرید فقط از این غرفه</a></button>
              <div class="card__box__price">
                 <p class="card__box__price-p">جمع مبلغ برای<span class="price-number"> 1 </span>کالا</p>
              <div class="card__box__price-box">
                  <p class="card__box__price-num">75,000</p>
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
  components: {
    Product
  },
}
</script>
