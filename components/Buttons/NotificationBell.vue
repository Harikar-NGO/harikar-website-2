<template>
  <div class="notification" @click="dropMenu">
    <svg width="25" height="25" viewbox="0 0 166 197">
      <path
        d="M82.8652955,196.898522 C97.8853137,196.898522 110.154225,184.733014 110.154225,169.792619 L55.4909279,169.792619 C55.4909279,184.733014 67.8452774,196.898522 82.8652955,196.898522 L82.8652955,196.898522 Z"
        class="notification--bellClapper"
      ></path>
      <path
        d="M146.189736,135.093562 L146.189736,82.040478 C146.189736,52.1121695 125.723173,27.9861651 97.4598237,21.2550099 L97.4598237,14.4635396 C97.4598237,6.74321823 90.6498186,0 82.8530327,0 C75.0440643,0 68.2462416,6.74321823 68.2462416,14.4635396 L68.2462416,21.2550099 C39.9707102,27.9861651 19.5163297,52.1121695 19.5163297,82.040478 L19.5163297,135.093562 L0,154.418491 L0,164.080956 L165.706065,164.080956 L165.706065,154.418491 L146.189736,135.093562 Z"
        class="notification--bell"
      ></path>
    </svg>
    <div class="notification--num">5</div>
    <div class="menu" :class="{ dropped: drop }">
      <p class="menu-title">Jobs and Bids</p>
      <div class="menu-items">
        <a href="" class="menu-item">
          <jobsIcon color="var(--text1)" h="22" w="22" />
          <p>Jobs: 0</p>
        </a>
        <a href="" class="menu-item">
          <bidsIcon color="var(--text1)" w="22" h="22" />
          <p>Bids: 0</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import jobsIcon from "../Icons/jobsIcon.vue";
import bidsIcon from "../Icons/BidsIcon.vue";
const drop = ref(false);

const dropMenu = () => {
  drop.value = !drop.value;
};
</script>

<style scoped>
.notification {
  position: relative;
  cursor: pointer;
}

.menu {
  position: absolute;
  left: -5.8rem;
  top: calc(100% + 1.4rem);
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
  justify-items: center;
  background: var(--surface3);
  padding: var(--size-3);
  border-radius: var(--radius-2);
  max-width: 10rem;
  box-shadow: var(--shadow-3);
  transform: translateY(-1em);
  opacity: 0;
  transition: opacity 150ms var(--ease-out-1), transform 150ms var(--ease-out-1);
  pointer-events: none;
}

.dropped {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
  cursor: default;
}

.menu::before {
  position: absolute;
  top: -1em;
  right: 2em;
  content: "";
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 20px solid var(--surface3);
}

.menu-title {
  font-size: var(--font-size-1);
  width: var(--size-content-1);
}

.menu-items {
  display: grid;
  gap: var(--size-2);
}

.menu-item {
  display: flex;
  justify-items: center;
  gap: var(--size-3);
  text-decoration: none;
}

.menu-item > p {
  color: var(--text2);
}

.menu-item > p:hover {
  color: var(--brand);
}

.menu-item > p {
  font-size: var(--font-size-1);
}

.notification svg > path {
  fill: var(--text2);
}
.notification svg > path:hover {
  fill: var(--text1);
}
.notification--bell {
  animation: bell 2.2s linear;
  transform-origin: 50% 0%;
}
.notification--bellClapper {
  animation: bellClapper 1.5s 0.1s linear;
}
.notification--num {
  position: absolute;
  top: 0%;
  left: 70%;
  font-size: var(--font-size-0);
  border-radius: var(--radius-2);
  width: 1.1rem;
  height: 1.1rem;
  background-color: var(--red-4);
  color: var(--text1);
  text-align: center;
  display: grid;
  place-content: center;
  animation: notification 2s ease;
}

@keyframes bell {
  0%,
  25%,
  75%,
  100% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(2deg);
  }
  45% {
    transform: rotate(-2deg);
  }
  55% {
    transform: rotate(1deg);
  }
  60% {
    transform: rotate(-1deg);
  }
}
@keyframes bellClapper {
  0%,
  25%,
  75%,
  100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-0.15em);
  }
  45% {
    transform: translateX(0.15em);
  }
  55% {
    transform: translateX(-0.1em);
  }
  60% {
    transform: translateX(0.1em);
  }
}
@keyframes notification {
  0%,
  25%,
  75%,
  100% {
    opacity: 1;
  }
  30%,
  70% {
    opacity: 0;
  }
}
</style>
