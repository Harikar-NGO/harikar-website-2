import { computed, onMounted, onUnmounted, ref } from "vue";

export const useBreakpoints = () => {
  if (process.server) {
    let breakPoints = 1;
    return { breakPoints };
  } else {
    let windowWidth = ref(window.innerWidth);

    const onWidthChange = () => (windowWidth.value = window.innerWidth);
    onMounted(() => window.addEventListener("resize", onWidthChange));
    onUnmounted(() => window.removeEventListener("resize", onWidthChange));

    const breakPoints = computed(() => {
      if (windowWidth.value < 480) return "xs";
      if (windowWidth.value >= 480 && windowWidth.value < 850) return "s";
      if (windowWidth.value >= 850 && windowWidth.value < 1200) return "md";
      if (windowWidth.value >= 1200) return "lg";
      return null; // This is an unreachable line, simply to keep eslint happy.
    });

    return { breakPoints };
  }
};
