<template>
  <header>
    <Menu @openNav="openNav" :isOpen="open" class="menu-button" />
    <a :href="currentRoute === 'index' ? '#home' : '/#home'" class="logo">
      <img
        alt="Harikar NGO's logo"
        src="/harikar-logo.svg"
        width="40"
        height="80"
      />
    </a>
    <nav class="nav">
      <ul class="main-nav" :class="{ opened: open }">
        <li v-for="item in navItems" :key="item.index">
          <a :href="currentRoute === 'index' ? item.link : item.xlink">{{
            item.name
          }}</a>
        </li>
      </ul>
    </nav>
    <ul class="nav-buttons">
      <li>
        <Theme />
      </li>
      <li>
        <Bell />
      </li>
    </ul>
  </header>
</template>

<script setup>
import Menu from "../Buttons/Menu.vue";
import Theme from "../Buttons/ToggleDark.vue";
import Bell from "../Buttons/NotificationBell.vue";

const route = useRoute();
const currentRoute = ref(route.name);

const open = ref(false);
const openNav = () => {
  open.value = !open.value;
};

const navItems = [
  {
    name: "about",
    link: "#about",
    xlink: "/#about",
  },
  {
    name: "projects",
    link: "#projects",
    xlink: "/#projects",
  },
  {
    name: "expertise",
    link: "#expertise",
    xlink: "/#expertise",
  },
  {
    name: "partners",
    link: "#partners",
    xlink: "/#partners",
  },
  {
    name: "reports",
    link: "#reports",
    xlink: "/#reports",
  },
];
</script>

<style scoped>
@import "./header.css";
</style>
