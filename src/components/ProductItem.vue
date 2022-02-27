<template>
  <div class="item_product" :id="item.id">
      <div class="item_product__img">
          <img :src="item.img" :alt="item.name">
      </div>
      <div class="item_product__info">
          <p>{{ item.name }}</p>
          <p>{{ item.price }} &#8381;</p>
          <ButtonProduct class="item_product__info__button"/>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.item_product{
    width: 353px;
    height: 418px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    margin: 19px 18.5px;
    position: relative;
    color: #424242;
}
.item_product__img{
    max-width: 100%;
    height: 246px;
    text-align: center;
    overflow: hidden;
}
.item_product__img img{
    max-height: 100%;
}
.item_product__info{
    height: 172px;
    padding-left: 30px;
    padding-top: 20px;
}
.item_product__info p:nth-child(1){
    font-weight: 500;
    font-size: 18px;
}
.item_product__info p:nth-child(2){
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
}
.item_product__info__button{
    margin-top: 34px;
}
</style>