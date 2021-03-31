<template>
  <div
    class="px-4 py-1 rounded-lg"
    :class="[width, setVariant, setColor]" 
  >
    <nuxt-link :to="to">
      <p>{{ text }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: "ButtonLoad",
  props: {
    text: String,
    to: String,
    borderColor: String,
    width: String,
    variant: String,
    color: String
  },
  computed: {
    setVariant() {
      switch (this.variant) {
        case "success":
          return "text-white bg-green-600 hover:bg-green-800";
          break;
        case "primary":
          return "text-white bg-primary hover:bg-red-900";
          break;
        case "blue":
          return "text-white bg-azul hover:bg-indigo-700";
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
