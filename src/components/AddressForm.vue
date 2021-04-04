<template>
    <div class="address__form">
        <div class="form__header">
            <h2 class="form__header-heading">به: {{ a.name }}</h2>
            <img class="form__header-img" src="@/assets/penIcon.svg" alt="penIcon">
        </div>
        <label class="form__select">
            <p class="form__lable">{{ a.fullPath }}</p>
            <input type="radio" name="radio">
            <span class="checkmark"></span>
        </label>                                       
    </div>
</template>

<script>
export default {
  name: 'AddressForm',
  props: ['a']
}
</script>

<style scoped>
.address__form {
  padding: 10px 0;
  background-color: #fff; }
.form__header {
  display: flex;
  justify-content: space-between;
  align-items: center; }
  .form__header-heading {
    font-size: 12px;
    font-weight: 400;
    color: #3E3E3E;
    margin-right: 50px; }
  .form__header-img {
    cursor: pointer;
    width: 27px;
    height: 27px;
    margin-left: 20px; }      
.form__select {
  display: flex;
  position: relative;
  width: 87%;
  padding: 15px;
  margin-top: 10px;
  cursor: pointer;
  border-bottom: 1px solid #eeee; }
.form__lable {
  position: relative;
  font-size: 13px;
  font-weight: 400;
  color: #535353;
  margin: -16px 30px 0 0; } 
.form__select input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0; }
.checkmark {
  position: absolute;
  top: 4px;
  right: 11px;
  height: 22px;
  width: 22px;
  background-color: #eee;
  border-radius: 50%; }
.form__select:hover input ~ .checkmark {
  background-color: #ccc; }
.form__select input:checked ~ .checkmark {
  background-color: #D73856; }
.checkmark:after {
  content: "";
  position: absolute;
  display: none; }
.form__select input:checked ~ .checkmark:after {
  display: block; }
.form__select .checkmark:after {
  top: 7px;
  left: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white; }
</style>