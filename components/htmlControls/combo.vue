<template>
  <div class="flex">
    <label class="w-32 font-semibold">{{label}}</label>
    <select class="w-40 px-2 py-1 text-gray-700 placeholder-gray-700 bg-gray-200 border-2 border-gray-400 rounded-md outline-none focus:bg-white" v-model="arreglo">
      <option v-for="(arreglos, index) in tiposArreglos" :key="index">
        {{ arreglos }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "combo",
  props:{
    label: String
  },
  data() {
    return {
      arreglo: "",
      tiposArreglos: ["arreglo1", "arreglo2", "arreglo3"]
    };
  }
};
</script>

<style></style>
