<template>
  <div>
       <div class="body__meal">
            <img class="body__meal-img" src="..\assets\pic\meal-1.jpg" alt="meal image">
            <p class="body__meal-cap">سوسیس آلمانی پنیری</p>
            <div class="body__meal-box">
                <p class="body__meal-box-off"><s>85,000</s></p>
                <input class="body__meal-price" type="text" value="75,000" readonly>
                <img class="card__box__price-pic" src="..\assets\tooman.svg" alt="price pic">
            </div>                                
        </div>
        <div class="body__count">
            <div class="body__count__calc">
                <button class="minus-sign"><img src="..\assets\add.svg" alt="add-sign"></button>                                 
                <div class="body__count__calc-num">1</div>
                <button class="plus-sign"><img src="..\assets\negative.svg" alt="minus-sign"></button>                           
            </div>                        
                <button><img class="body__count__del" src="..\assets\delete.svg" alt="delete-sign"></button>                        
                <div class="body__count__cap">
                    <p class="body__count__cap-p">ذخیره در لیست خرید بعدی</p>
                </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Product',
}
</script>
