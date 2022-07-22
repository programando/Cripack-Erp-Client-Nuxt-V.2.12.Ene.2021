<template>
  <div :class="setBgColor" class="flex items-center p-2 text-white rounded-md">
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
          return "bg-red-400";
          break;
        case "naranja":
          return "bg-yellow-500"
          break
        case "verde":
          return "bg-green-400"
          break
        case "azul":
          return "bg-blue-400"
          break
        default:
          break;
      }
    }
  }
};
</script>

<style></style>
