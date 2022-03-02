<template>
  <div class="notification">
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
    <span class="notification--num">5</span>
  </div>
</template>

<script setup></script>

<style scoped>
.notification {
  position: relative;
}

.notification svg > path {
  fill: var(--text2);
}
.notification--bell {
  animation: bell 2.2s linear;
  transform-origin: 50% 0%;
}
.notification--bellClapper {
  animation: bellClapper 2.2s 0.1s linear;
}
.notification--num {
  position: absolute;
  top: 0%;
  left: 70%;
  font-size: var(--font-size-1);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--red-4);
  color: var(--text1);
  text-align: center;
  animation: notification 3.2s ease;
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
