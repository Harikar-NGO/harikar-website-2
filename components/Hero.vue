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
  </div>
</template>

<script></script>

<style scoped>
.hero-wrap {
  display: grid;
  align-items: center;
  grid-template:
    "hero"
    "image" 10rem;
  background-image: var(--gradient-29);
  box-shadow: var(--shadow-3);
  overflow-x: hidden;
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

.hero {
  grid-area: hero;
  padding: var(--size-10);
  display: grid;
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
