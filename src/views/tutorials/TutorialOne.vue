<template>
  <div>
    <p>Добро пожаловать, {{ name }}!</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores veniam
      obcaecati, placeat at sequi ratione eos aliquid exercitationem numquam.
      Officiis ad facere omnis perferendis in fuga dolores at nisi excepturi.
    </p>
  </div>
  <div class="button-block">
    <VButton>Назад</VButton>
    <VButton>Далее</VButton>
  </div>
</template>

<script setup>
import VButton from "@/components/UI/VButton";

const name = localStorage.getItem("userName");


</script>

<style lang="scss"></style>
