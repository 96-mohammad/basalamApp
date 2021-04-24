<template>
    <div class="payment__off">
        <p class="payment__off-p">اگر کد تخفیف دارید وارد کنید</p>
        <form action="#" class="payment__form" method="post">
            <input class="payment__form-input" type="text" placeholder="کد تخفیف">
            <button class="payment__form-btn">تایید</button>
        </form>
        <div class="payment__toggle">
            <label class="toggle">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
            <p class="payment__toggle-p">استفاده از اعتبار</p>
        </div>       
    </div>
</template>

<script>
export default {
    name: 'PaymentOff',
}
</script>

<style scoped>
.payment__off {
   padding: 10px 15px 25px 15px;
   border-bottom: 1px solid #eee; }
    .payment__off-p {
        font-weight: 400;
        color: #3e3e3e;
        font-size: 14px; }
.payment__form {
    position: relative;
    margin-top: 8px;    
    display: flex;    
    align-items: center; }
    .payment__form-input {        
        padding: 9px;
        border-radius: 8px;
        font-size: 13px;
        color: #333;
        width: 100%;
        border: 1px solid #e5e5e5; }
    .payment__form-btn {
        font-size: 14px;
        font-weight: 700;
        padding: 7px 20px;
        background-color: #eee;
        border-radius: 100px;
        position: absolute;
        left: 3px;
        bottom: 2px; }  
.payment__toggle {
    margin-top: 20px;
    display: flex; }
    .payment__toggle-p {
        align-self: center;
        color: #3e3e3e;
        font-weight: 400;
        font-size: 14px;
        margin-right: 5px; }
.toggle {
    position: relative;
    display: inline-block;
    width: 48px;
    height: 34px; }
    .toggle input { 
        opacity: 0; }
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;  
    transition: .4s; }
    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;  
        transition: .4s; }
input:checked + .slider {
  background-color: #2196F3; }
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3; }
input:checked + .slider:before { 
  transform: translateX(15px); }
.slider.round {
    border-radius: 34px; }
    .slider.round:before {
        border-radius: 50%; } 
</style>>