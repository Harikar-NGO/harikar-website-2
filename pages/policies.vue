<template>
  <div>
    <Breadcrumbs class="breadcrumbs" :items="items" />
    <div class="main-wrap">
      <table>
        <caption>
          Policies are available upon request
        </caption>
        <thead>
          <tr>
            <th scope="col">Policy</th>
            <th scope="col">Version</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in policies.policies" :key="index">
            <td data-label="Policy" scope="row">{{ item.policy }}</td>
            <td data-label="Version" scope="row">{{ item.version }}</td>
            <td data-label="Date" scope="row">{{ item.year }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { data: policies } = await useFetch(
  "https://harikar-reports-api.cyclic.app/v2/policies"
);
const items = [
  {
    name: "home",
    link: "/",
    disabled: false,
  },
  {
    name: "policies",
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

table {
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: var(--size-3);
  margin: 0.5em 0 0.75em;
  caption-side: bottom;
}

table tr {
  background-color: var(--surface2);
  border: var(--border-size-1) solid var(--brand);
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: start;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: var(--border-size-1) solid var(--brand);
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}
</style>
