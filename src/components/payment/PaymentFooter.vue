<template>
<div class="payment__final">
    <div class="payment__footer">
        <button class="payment__footer-btn"><a class="payment__footer-link" href="#">پرداخت</a></button>
    </div>
</div>    
</template>

<script>
export default {
    name: 'PaymentFooter',
}
</script>
<style scoped>
.payment__final{ margin-top: 18px; }
.payment__footer {
    position: fixed;
    padding: 10px 0;             
    width: 350px;
    bottom: -3px;
    background-color: #fff;
    text-align: center; }
    .payment__footer-btn {
        width: 90%;
        padding: 11px 18px;
        display: inline-block;
        border-radius: 100px;
        background-color: #DF3856;
        border: none; }
    .payment__footer-link {
        font-size: 16px;
        font-weight: 700; }
</style>