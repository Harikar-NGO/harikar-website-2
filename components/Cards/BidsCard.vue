<template>
  <div class="card">
    <div class="content">
      <p class="eng" lang="eng" dir="ltr">
        Providing rented vehicles with drivers for
      </p>
      <p class="ara" lang="ar" dir="rtl">
        تجهيز السيارات المؤجرة مع السائق لمنظمة هاري
      </p>
      <p class="kurd" lang="ku" dir="rtl">
        چاپکرنا کەرەستێن فێرکاری و زانیاری سنيتبنميستب صثنمتنصمت
      </p>
      <div class="dates">
        <p class="announcement-data">
          <span><strong>Announced at: </strong> </span>24/6/2022
        </p>
        <p class="deadline">
          <span><strong>Deadline: </strong></span>24/7/2022
        </p>
      </div>
    </div>
    <div class="buttons">
      <button class="button">Read more</button>
      <button class="button">Download</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  gap: var(--size-1);
  background-color: var(--surface3);
  border-radius: var(--radius-3);
  box-shadow: var(--shadow-2);
  border-top: var(--border-size-3) solid var(--brand);
}
.content {
  padding-block: var(--size-3);
  padding-inline: var(--size-4);
  display: grid;
  gap: var(--size-2);
}
.buttons {
  display: flex;
  place-content: space-around;
  gap: var(--size-3);
  background-color: var(--surface4);
  padding: 0;
  margin: 0;
  border-radius: 0 0 var(--radius-3) var(--radius-3);
}

.button {
  background-color: transparent;
  padding: var(--size-2);
}

.button:hover {
  color: var(--brand);
}
</style>

<script setup></script>
