<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <div class="content-wrap">
        <div v-for="article in data" :key="article.title">
          <nuxt-link class="link" :to="article._path">
            <ArticleCard
              :title="article.title"
              :img="article.img"
              :desc="article.desc.substr(0, 150) + ' ...'"
              :date="article.date"
            />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArticleCard from "~/components/Cards/Article.vue";

const { data } = await useAsyncData("home", () =>
  queryContent("/events-and-stories").find()
);

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
}
.content-wrap {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(var(--size-14), 1fr));
  grid-template-rows: masonry;
  align-items: start;
  masonry-auto-flow: next;
  gap: var(--size-5);
}

@media (min-width: 950px) {
  .main-wrap {
    padding-inline: var(--size-12);
    gap: var(--size-10);
  }
  .breadcrumbs {
    margin-left: var(--size-8);
    margin-top: var(--size-3);
  }
}

.link {
  text-decoration: none;
}
</style>
