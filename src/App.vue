<template>
  <router-view />
</template>

<style>
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #cfd3dc;
  background-color: #141414;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  min-height: 100vh;
  background: url(assets/bg.png) center center no-repeat;
  background-size: cover;
}
</style>
