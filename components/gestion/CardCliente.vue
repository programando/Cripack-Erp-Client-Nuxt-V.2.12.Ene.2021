<template>
  <div :class="setBgColor" class="flex items-center p-2 text-white rounded-md mt-4">
    <div class="w-48">
      <h2>{{ title }}</h2>
      <p class="text-xs">{{ subTitle }}</p>
      <div class="flex items-center mt-4 space-x-4">
        <p class="">{{ count }}</p>
        <p class="text-xs">{{ status }}</p>
      </div>
    </div>
    <div>
      <img class="h-12" :src="img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardCliente",
  props: {
    title: String,
    subTitle: String,
    count: Number,
    status: String,
    img: String,
    bg: String
  },

  computed: {
    setBgColor() {
      switch (this.bg) {
        case "rojo":
          return "bg-gradient-to-r from-red-500 to-red-200 border border-red-500";
          break;
        case "naranja":
          return "bg-gradient-to-r from-yellow-500 to-yellow-200 border border-yellow-500"
          break
        case "verde":
          return "bg-gradient-to-r from-green-600 to-green-200 border border-green-600"
          break
        case "azul":
          return "bg-gradient-to-r from-blue-500 to-blue-200 border border-blue-500"
          break
        default:
          break;
      }
    }
  }
};
</script>

<style></style>
