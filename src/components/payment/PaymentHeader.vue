<template>
    <div class="payment__header">
        <router-link class="payment__header-link" :to="{ name: 'address', params: { id: $route.params.id}}">
            <img class="payment__header-img" src="@/assets/backIcon.svg" alt="backIcon">
        </router-link>
        <p class="payment__header-p">پرداخت</p>                            
    </div>
</template>

<script>
export default {
    name: 'PaymentHeader'
}
</script>

<style scoped>
.payment__header {
    margin-top: 5px;
    padding: 15px;
    display: flex;
    align-items: center; }
    .payment__header-link {
        height: 38px; }
    .payment__header-img {
        width: 40px;
        height: 40px; }
    .payment__header-p {
        font-weight: 400;
        font-size: 14px;
        margin-right: 5px;
        color: #3E3E3E; }
</style>>

