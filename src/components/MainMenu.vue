<template>
  <div class="logo"></div>
  <div id="nav">
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link :to="item.link">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const menuItems = [
  {
    link: "/tutorial",
    title: "Новая игра",
  },
  {
    link: "/game",
    title: "Продолжить игру",
  },
  {
    link: "/rules",
    title: "Правила игры",
  },
  {
    link: "/settings",
    title: "Настройки",
  },
  {
    link: "/about",
    title: "Об игре",
  },
];
</script>

<style lang="scss" scoped>
.logo {
  background: url(../assets/logo.png) center center no-repeat;
  background-size: contain;
  width: 200px;
  height: 200px;
  margin: 0 auto;
}

#nav {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  min-height: unset;

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      padding: 8px;
      margin-bottom: 16px;
      border: 1px solid #fff;
      text-align: center;

      a {
        font-size: 2rem;
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
