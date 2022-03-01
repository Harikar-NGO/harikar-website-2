g
<template>
  <div class="hero-wrap">
    <div class="hero">
      <h1 class="hero-message animate-top-down">
        <div>Harikar NGO</div>
      </h1>
      <p class="under-hero animate-top-down">
        Harikar NGO is a neutral, non-governmental, non-profit humanitarian
        organization.
      </p>
      <div class="button-list animate-top-down">
        <button class="primary">
          write to us <span><i class="mdi mdi-send"></i></span>
        </button>
      </div>
    </div>
    <picture class="promo-art">
      <img
        src="https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/cover.webp"
        alt="A mother with three young kids"
        width="100%"
        height="auto"
      />
    </picture>
    <div v-if="breakPoints == 'lg'" class="triangle">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
const { breakPoints } = useBreakpoints();
</script>

<style scoped>
.hero-wrap {
  display: grid;
  align-items: center;
  grid-template:
    "hero"
    "image" 10rem;
  background-image: var(--gradient-29);
  overflow-x: hidden;
  position: relative;
}

@media (min-width: 800px) {
  .hero-wrap {
    grid-template: "hero image" / 3fr 2fr;
  }
}

@media (min-width: 1440px) {
  .hero-wrap {
    grid-template: "hero image ." / 3fr 2fr 1fr;
  }
}

.triangle {
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
  fill: var(--gray-0);
  stroke: var(--gray-0);
}

.hero {
  grid-area: hero;
  padding: var(--size-10);
  display: grid;
  place-content: center;
  gap: var(--size-5);
  max-width: 100%;
}

.hero-message {
  display: grid;
  grid-template-columns: max-content;
  line-height: var(--font-lineheight-0);
  color: var(--brand);
  font-size: var(--font-size-fluid-3);
}

.under-hero {
  color: var(--gray-7);
  font-size: var(--font-size-fluid-);
  margin-block-end: var(--size-3);
  font-weight: var(--font-weight-6);
}

.button-list {
  display: flex;
}

@media (prefers-reduced-motion: no-preference) {
  .animate-top-down {
    animation: var(--animation-slide-in-down);
  }
}

@media (prefers-reduced-motion: reduce) {
  .animate-top-down {
    animation: none;
  }
}

button {
  font-size: var(--font-size-fluid-0);
  padding-inline: var(--size-fluid-2);
  padding-block: var(--size-fluid-1);
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  background: var(--brand);
  text-shadow: 0 1px 0 var(--brand);
  color: white;
  text-transform: uppercase;
  display: flex;
  gap: 1rem;
}

button:hover {
  background: var(--gray-2);
  color: var(--brand);
}

.promo-art {
  align-self: stretch;
  grid-area: image;
  max-width: 100%;
}

.promo-art > img {
  block-size: 100%;
  object-fit: cover;
  box-shadow: var(--shadow-3);
}
</style>
