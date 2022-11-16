<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <h2 class="title">{{ article.title }}</h2>
        <p class="desc">{{ article.desc }}</p>
        <p class="meta">
          By {{ article.author }} in {{ article.location }} |
          {{ article.date }} |
          {{ article.language }}
        </p>
        <div class="container">
          <div class="media-scroller snaps-inline">
            <div
              v-for="(photo, index) in articlePhotos"
              :key="index"
              class="media-element"
            >
              <img
                loading="lazy"
                :alt="extractName(photo)"
                :src="photo"
                width="500"
                height="400"
              />
              <p class="media-element__title">
                {{ extractName(photo) }}
              </p>
            </div>
          </div>
        </div>
        <article>
          <ContentRenderer :value="article" />
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
const { path } = useRoute();
const { data: article } = await useAsyncData(`content-${path}`, () =>
  queryContent().where({ _path: path }).findOne()
);

const { data: articleRawPhotos } = await useFetch(
  `https://api.github.com/repos/Harikar-NGO/harikar-website-files/contents/articles/${article.value.slug}`
);
const articlePhotos = articleRawPhotos.value.map((item) => item.download_url);
const extractName = (path) => {
  const arrayFromPath = path.split("/");
  const unEditedName = arrayFromPath[arrayFromPath.length - 1].split(".")[0];
  const name = unEditedName.split("-").join(" ");
  return name;
};

const items = [
  {
    name: "Home",
    link: "/",
    disabled: false,
  },
  {
    name: "Events and Stories",
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
  place-items: center;
}
.content-wrap {
  max-width: 90ch;
  display: flex;
  flex-direction: column;
  gap: var(--size-3);
  place-items: start;
}
@media (min-width: 950px) {
  .main-wrap {
    padding-inline: var(--size-12);
  }
  .breadcrumbs {
    margin-left: var(--size-8);
    margin-top: var(--size-3);
  }
}

.title {
  max-width: var(--size-content-2);
}

.desc {
  max-width: var(--size-content-3);
  font-size: var(--size-5);
}

.meta {
  font-weight: var(--font-weight-6);
}

article > div > p {
  min-width: 95ch;
}

.container {
  grid-area: content;
  overflow-x: hidden;
  max-width: 100%;
}

.media-scroller {
  --_spacer: var(--size-3);
  display: grid;
  grid-auto-flow: column;
  gap: var(--_spacer);
  grid-auto-columns: 10rem;
  padding-block: var(--_spacer);
  overflow-x: auto;
  overscroll-behavior-inline: contain;
}
@media (min-width: 450px) {
  .media-scroller {
    grid-auto-columns: 25rem;
  }
}
.media-element {
  display: grid;
  grid-template-rows: min-content;
  place-content: start;
  border-radius: var(--radius-2);
  box-shadow: var(--shadow-3);
  background-color: transparent;
  transition: all 100ms var(--ease-in-1);
  position: relative;
}

.media-element:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-2);
}

.media-element > img {
  inline-size: 100%;
  aspect-ratio: var(--ratio-landscape);
  object-fit: cover;
  max-width: 100%;
  height: auto;
}

.media-element__title {
  font-size: var(--font-size-0);
  color: var(--text1);
  font-weight: var(--font-weight-6);
  place-self: center;
  padding: var(--size-1);
  width: 100%;
  height: 3rem;
  display: grid;
  place-content: center;
  position: absolute;
  bottom: 0;
  background-color: var(--surface-3);
}

.snaps-inline {
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: var(--_spacer);
}

.snaps-inline > * {
  scroll-snap-align: start;
}
</style>
