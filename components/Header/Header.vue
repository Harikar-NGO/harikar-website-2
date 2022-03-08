<template>
  <header>
    <Menu @openNav="openNav" :isOpen="open" class="menu-button" />
    <a :href="route.name === 'index' ? '#home' : '/#home'" class="logo">
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
          <a
            :href="route.name === 'index' ? item.link : item.xlink"
            @click="closeNav"
            :class="{
              active: route.hash === item.link || route.name === item.name,
            }"
            >{{ item.name }}</a
          >
        </li>
        <li>
          <a
            href="/reports"
            @click="closeNav"
            :class="{
              active: route.name.includes('reports'),
            }"
            >reports</a
          >
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

const open = ref(false);
const openNav = () => {
  open.value = !open.value;
};

const closeNav = () => {
  open.value === true ? (open.value = false) : "";
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
];
</script>

<style scoped>
@import "./header.css";
</style>
