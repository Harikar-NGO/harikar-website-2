<template>
  <svg :width="w" :height="h" viewBox="0 0 20 18">
    <!-- Generator: Sketch 52.5 (67469) - http://www.bohemiancoding.com/sketch -->
    <title>send</title>
    <desc>Created with Sketch.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Rounded" transform="translate(-374.000000, -1529.000000)">
        <g id="Content" transform="translate(100.000000, 1428.000000)">
          <g
            id="-Round-/-Content-/-send"
            transform="translate(272.000000, 98.000000)"
          >
            <g>
              <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
              <path
                d="M3.4,20.4 L20.85,12.92 C21.66,12.57 21.66,11.43 20.85,11.08 L3.4,3.6 C2.74,3.31 2.01,3.8 2.01,4.51 L2,9.12 C2,9.62 2.37,10.05 2.87,10.11 L17,12 L2.87,13.88 C2.37,13.95 2,14.38 2,14.88 L2.01,19.49 C2.01,20.2 2.74,20.69 3.4,20.4 Z"
                id="send-icon"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>

<script setup>
 const props = defineProps({
   color: String,
   w: String,
   h: String,
 });
</script>

<style scoped>
#send-icon {
  fill: v-bind(color);
}
</style>
