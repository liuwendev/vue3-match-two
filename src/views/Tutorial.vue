<template>
  <div class="tutorial-form">
    <h2>Введите свое имя:</h2>
    <input
      type="text"
      :class="isValid ? '' : 'invalid'"
      placeholder=""
      v-model="userName"
    />
    <div v-if="!isValid" style="color: red;">Поле обязательно для заполнения</div>
    <div class="button-block">
      <VButton @click="backToMenu">Назад</VButton>
      <VButton @click="saveUserName">Далее</VButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import VButton from "@/components/UI/VButton";

let userName = ref("");
let isValid = ref(true);

const router = useRouter();

const saveUserName = () => {
  if (userName.value != "") {
    // save to localStorage
    localStorage.setItem('userName', userName.value);
    
    router.push("/tutorial-one");
    isValid.value = true;
  } else {
    isValid.value = false;
  }
};

const backToMenu = () => {
  router.push("/");
};
</script>

<style lang="scss" scoped>
.tutorial-form {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 24px;
  border-radius: 0.25rem;
  height: 80vh;

  h2 {
    color: #fff;
    margin-top: 0;
  }

  input[type="text"] {
    display: block;
    padding: 8px 16px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #fff;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 1rem;

    ::placeholder {
      color: #212529;
      opacity: 0.4;
    }

    &.invalid {
      border: 2px solid red;
    }
  }

  .button-block {
    display: inline-flex;
    position: absolute;
    bottom: 1rem;
  }
}
</style>
