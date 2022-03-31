<template>
  <div class="main-wrap">
    <div class="left">
      <div class="avatar">
        <img
          alt="Salah Majid's photo"
          src="https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/members/salah.webp"
        />
      </div>
      <div class="name">
        <p>Salah Y. Majid</p>
      </div>
      <div class="title"><p>Executive Director</p></div>
      <div class="info">
        <p>
          Graduate from College of Arts in 1991, Mosul University, Iraq.
          Executive Director of Harikar NGO since 2007. Started with
          humanitarian sectors with Care International Australia in 1992.
          Previous experiences with World Food Programme, with more than 28
          years of experience in development, management, emergency response
          operation, project management, project design and proposal writing.
          Being in the field of promoting and developing humanitarian and civil
          society work since 1992, Salah was granted with Civic Award of the
          Ministry of Civil Society Affairs by the Prime Minister of KRG in
          2008.
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.main-wrap {
  padding-block: var(--size-8);
  padding-inline: var(--size-12);
}

.left {
  display: grid;
  grid-template:
    "avatar info"
    "name info"
    "title info" / 1fr 5 fr;
}

.avatar {
  grid-area: avatar;
}
.name {
  grid-area: name;
}
.title {
  grid-area: title;
}
.info {
  grid-area: info;
}
</style>
