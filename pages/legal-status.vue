<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <div class="cert">
          <p>GOI NGO license</p>
          <img
            alt="GOI NGO license"
            src="https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/legal/GOI-NGO-license.webp"
            width="500"
            height="auto"
          />
        </div>
        <div class="cert">
          <p>KRI NGO license</p>
          <img
            alt="KRI NGO license"
            src="https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/legal/KRI-NGO-license.webp"
            width="500"
            height="auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    name: "home",
    link: "/",
    disabled: false,
  },
  {
    name: "legal status",
    disabled: true,
  },
];
</script>

<style scoped>
.main-wrap {
  padding-block-start: var(--size-8);
  padding-block-end: var(--size-12);
  padding-inline: var(--size-4);
  display: grid;
  gap: var(--size-8);
  place-content: center;
}

.content-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--size-4);
}

.cert {
  box-shadow: var(--shadow-2);
}

.cert p {
  text-align: center;
  font-size: var(--size-3);
  padding-block: var(--size-2);
  background-color: var(--surface3);
  color: var(--text2);
  font-weight: var(--font-weight-6);
}

@media (min-width: 950px) {
  .main-wrap {
    padding-inline: var(--size-12);
    gap: var(--size-10);
  }
  .content-wrap {
    flex-direction: row;
  }
  .breadcrumbs {
    margin-left: var(--size-8);
    margin-top: var(--size-3);
  }
}
</style>
