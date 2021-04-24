<template>
    <div class="payment__select">        
        <p class="payment__select-p">انتخاب درگاه پرداخت</p>        
        <div class="payment__select-bank">
            <label class="form__select">
                <p class="form__lable">بانک سامان</p>
                <input type="radio" name="radio" checked>
                <span class="checkmark"></span>
            </label> 
            <label class="form__select">
                <p class="form__lable">بانک پاسارگاد</p>
                <input type="radio" name="radio">
                <span class="checkmark"></span>
            </label> 
            <label class="form__select">
                <p class="form__lable">آسان پرداخت</p>
                <input type="radio" name="radio">
                <span class="checkmark"></span>
            </label> 
        </div>        
    </div>
</template>

<script>
export default {
    name: 'PaymentSelectBank',
}
</script>

<style scoped>
.payment__select {
    border-bottom: 1px solid #eee;
    padding: 10px 15px 20px 15px; }  
    .payment__select-p {
        font-size: 14px;
        font-weight: 700;
        color: #3E3E3E; }
    .payment__select-bank {
      margin-top: 10px;
        display: flex;       
        flex-wrap: wrap; }
.form__select { 
  position: relative;
  width: 50%;
  padding: 15px;  
  cursor: pointer; }
.form__lable {
  position: relative;
  font-size: 14px;
  font-weight: 400;
  color: #535353;
  margin: -11px 24px 0 0; } 
.form__select input {
  position: absolute;
  opacity: 0;
  cursor: pointer; }
.checkmark {
  position: absolute;
  top: 4px;
  right: 11px;
  height: 22px;
  width: 22px;
  background-color: #fff;
  border: 1px solid #9d9d9d;
  border-radius: 50%; }
.form__select input:checked ~ .checkmark {
  background-color: #D73856; }
.checkmark:after {
  content: "";
  position: absolute;
  display: none; }
.form__select input:checked ~ .checkmark:after {
  display: block; }
.form__select .checkmark:after {
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white; }
</style>>