<template>
  <header>
    <a :href="currentRoute === 'index' ? '#home' : '/#home'" class="logo">
      <img
        alt="Harikar NGO's logo"
        src="/harikar-logo.svg"
        width="40px"
        height="80px"
      />
    </a>
    <button
      @click="openNav()"
      class="btn nav-toggle-btn"
      type="button"
      aria-label="toggle navigation drawer"
    >
      <i v-if="open" class="mdi mdi-backburger" aria-hidden="true"></i>
      <i v-else class="mdi mdi-menu" aria-hidden="true"></i>
    </button>
    <nav v-if="open || breakPoints === 'md' || breakPoints == 'lg'" class="nav">
      <ul class="main-nav">
        <li v-for="item in navItems" :key="item.index">
          <a :href="currentRoute === 'index' ? item.link : item.xlink">{{
            item.name
          }}</a>
        </li>
      </ul>
    </nav>
    <ul class="nav-buttons">
      <li>
        <button
          class="btn nav-button-dark"
          type="button"
          aria-label="toggle dark mode"
        >
          <i class="mdi mdi-theme-light-dark" aria-hidden="true"></i>
        </button>
      </li>
      <li>
        <button
          class="btn nav-button-notify"
          type="button"
          aria-label="show notifications"
        >
          <i class="mdi mdi-bell" aria-hidden="true"></i>
        </button>
      </li>
    </ul>
  </header>
</template>

<script setup>
const route = useRoute();
const currentRoute = ref(route.name);

const { breakPoints } = useBreakpoints();

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
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--size-fluid-1);
  background: var(--gray-0);
  box-shadow: var(--shadow-3);
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--layer-4);
}

.main-nav {
  display: flex;
  flex-direction: row;
  position: static;
  background: transparent;
  box-shadow: none;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--size-fluid-2);
  text-transform: capitalize;
  font-size: var(--font-size-3);
  line-height: var(--font-lineheight-5);
}

.main-nav li a {
  color: var(--gray-7);
  font-weight: var(--font-weight-5);
  text-decoration: none;
}

.active {
  position: relative;
}

.active::before {
  content: "";
  border-bottom: var(--border-size-3) solid var(--brand);
  position: absolute;
  top: 0;
  bottom: -1rem;
  left: 0;
  right: 0;
}

.logo {
  object-fit: contain;
  margin-inline-start: var(--size-11);
  z-index: var(--layer-5);
}

@media (max-width: 850px) {
  .main-nav {
    flex-direction: column;
    position: fixed;
    inset: 0 70% 0 0;
    background: var(--gray-2);
    z-index: var(--layer-4);
    box-shadow: var(--shadow-3);
    padding-block: var(--size-fluid-7);
    padding-inline: var(--size-fluid-5);
    animation: var(--animation-slide-in-right);
  }
}

@media (max-width: 480px) {
  .main-nav {
    inset: 0 40% 0 0;
  }
  .logo {
    margin-inline-start: var(--size-10);
  }
}

.nav-buttons {
  list-style-type: none;
  margin: 0;
  display: flex;
  margin-inline-end: var(--size-4);
}

.btn {
  font-size: var(--font-size-4);
  background: transparent;
}

.btn:hover {
  color: var(--brand);
}
.nav-toggle-btn {
  position: absolute;
  inset: 0 0 0 4%;
  z-index: var(--layer-5);
}
@media (min-width: 850px) {
  .nav-toggle-btn {
    display: none;
  }
}
</style>
