<template>
  <div :class="[setBorderColor, width, setColor]" class="px-4 py-2 rounded-lg">
    <nuxt-link :to="to">
      <p>{{ text }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "ButtonBasic",
  props: {
    text: String,
    to: String,
    borderColor: String,
    width: String,
    color: String
  },
  computed: {
    setBorderColor() {
      switch (this.borderColor) {
        case "primary":
          return "border border-primary";
          break;

        case "secondary":
          return "border border-secondary";
          break;

        case "extra":
          return "border border-extra";
          break;
      }
    },

    setColor() {
      switch (this.color) {
        case "primary":
          return "text-primary";
          break;

        case "secondary":
          return "text-secondary";
          break;

        case "extra":
          return "text-extra";
          break;
        case "white":
          return "text-white";
          break;
      }
    }
  }
};
</script>
<style></style>
