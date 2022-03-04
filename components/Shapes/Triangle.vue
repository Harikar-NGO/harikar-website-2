<template>
  <div class="triangle">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
  </div>
</template>

<style scoped>
.triangle {
  display: none;
}

@media (min-width: 850px) {
  .triangle {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
  }

  .triangle svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 30px;
    /* transform: rotateY(180deg); */
  }

  .triangle .shape-fill {
    fill: var(--surface1);
    stroke: var(--surface1);
  }
}
</style>
