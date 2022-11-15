<template>
  <main-menu />
  <footer>&copy; 2022 All Rights Reserved | v1.0.0</footer>
</template>

<script setup>
import MainMenu from "@/components/MainMenu";
</script>

<style>
footer {
  position: relative;
  z-index: 2;
  font-size: 0.6rem;
  width: 100%;
  font-weight: 700;
  text-align: center;
  align-self: flex-end;
  margin-top: 1rem;
  padding-bottom: 2rem;
}
</style>
