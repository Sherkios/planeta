<template>
  <app-main></app-main>
</template>

<script>
import AppMain from "@/pages/AppMain.vue";
import changeStyleProperties from "./functions/ChangeStyleProperties";

export default {
  name: "App",
  components: {
    AppMain,
  },
  computed: {
    widthWrapper() {
      const style = window.getComputedStyle(document.documentElement);
      return +style.getPropertyValue("--wrapper-width").replace(/\D/g, "");
    },
    widthWindow() {
      return window.innerWidth;
    },
  },
  mounted() {
    const marginSide = (this.widthWindow - this.widthWrapper) / 2;
    changeStyleProperties({
      "--side-margin-wrapper": marginSide + "px",
    });
  },
};
</script>

<style lang="scss">
#app {
  // overflow-x: hidden;
}
</style>
