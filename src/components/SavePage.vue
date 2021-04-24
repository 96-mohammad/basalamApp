<template>
    <div class="saving">
        <LetterHead />
        <div class="saving__content">
            <img class="saving__content-pic" src="@/assets/pic/noteBook.png" alt="noteBook">
            <h5>لیست خرید بعدی شما خالی است!</h5>
            <p class="saving__content-p">
                شما می‌توانید محصولاتی که به سبد خرید خود افزوده‌اید و فعلا قصد خرید آن‌ها را ندارید،
                در لیست خرید بعدی قرار داده و هر زمان مایل بودید<br> آن‌ها را به سبد خرید اضافه کرده و خرید آن‌ها را تکمیل کنید.
            </p>
        </div>
    </div>
</template>
<script>
import LetterHead from './home/LetterHead';
export default {    
    name: 'SavePage',
    components: {
        LetterHead
    }
}
</script>
<style scoped>
.saving {
    margin-top: 5px;
    background-color: #fff; }
    .saving__content {
        text-align: center;
        padding: 25px; }
        h5 {
            color: #3e3e3e;
            font-weight: 400; }
        .saving__content-pic {
            height: 150px;
            width: 200px; }
        .saving__content-p {
            margin-top: 10px;
            padding: 4px;
            font-size: 10px;
            font-weight: 300;
            line-height: 21px;
            color: #3e3e3e; }  
</style>

