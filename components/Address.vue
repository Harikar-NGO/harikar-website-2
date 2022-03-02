<template>
  <div class="main-wrap surface1">
    <div class="section-title">
      <title-left title="Our Office" />
    </div>
    <div class="address">
      <p class="address-title">Head Quarter</p>
      <p class="address-item">
        <span><i class="mdi mdi-phone"></i></span> +964 773 697 1165
      </p>
      <p class="address-item">
        <span><i class="mdi mdi-email"></i></span> info@harikar.org
      </p>
      <p class="address-item">
        <span><i class="mdi mdi-map-marker"></i></span> Australia St, Media
        Quarter, 99448 Duhok, KR-Iraq
      </p>
    </div>
    <div class="content">
      <iframe
        title="Harikar location on a map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5994980935093!2d42.95007621529133!3d36.852066779937935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40088da4b0434497%3A0x9553764be14279fd!2sHarikar%20NGO!5e0!3m2!1sen!2siq!4v1619420826611!5m2!1sen!2siq"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      >
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.main-wrap {
  padding-block: var(--size-10);
  padding-inline: var(--size-4);
  display: grid;
  grid-template:
    "title" 0.2fr
    "address"
    "content" 2fr / 1fr;

  place-items: center;
  grid-row-gap: var(--size-8);
}
@media (min-width: 850px) {
  .main-wrap {
    grid-template:
      "title content" 1fr
      "address content" 3fr / 1fr 2fr;
    padding-block: var(--size-12);
    padding-inline: var(--size-12);
    grid-row-gap: var(--size-11);
  }
}

.title {
  grid-area: section-title;
}

.address {
  grid-area: address;
  display: grid;
  gap: var(--size-3);
  background: var(--surface3);
  padding: var(--size-fluid-2);
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-2);
}

.address-title {
  color: var(--brand);
  font-size: var(--font-size-fluid-1);
  font-weight: var(--font-weight-6);
}

.address-item {
  font-size: var(--font-size-fluid-0);
}

.address-item span {
  color: var(--brand);
}

.content {
  grid-area: content;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
}
@media (min-width: 850px) {
  .content {
    width: 70%;
  }
}
</style>

<script setup>
let expertiseList = ref([
  ["General Protection", "GBV", "Legal Assistance"],
  ["Livelihood", "PSEA Trainings", "WASH"],
  ["Reproductive Health", "Child Protection", "Green Houses"],
  ["Awarness raising", "PSS", "Case managment"],
]);
const flipList = () => {
  let array = expertiseList.value;
  const lastElm = array[array.length - 1];
  array.pop();
  array.unshift(lastElm);

  return array;
};
setInterval(flipList, 2800);
</script>
