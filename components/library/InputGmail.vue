<template>
  <div
    class="px-4 py-2 rounded-lg"
    :class="[width, setVariant]" 
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
    variant: String
  },
  computed: {
    setVariant() {
      switch (this.variant) {
        case "success":
          return "text-white bg-green-600 hover:bg-green-800";
          break;
        case "primary":
          return "text-white bg-primary hover:bg-red-900";
        
      }
    },

    

    
  }
};
</script>
<style></style>
