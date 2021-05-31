<template>
  <div class="flex items-center space-x-2">
    <label class="w-32">{{label}}</label>
    <select class="w-48 px-2 py-1 text-gray-700 placeholder-gray-700 bg-white border-2 border-gray-400 outline-none focus:bg-gray-100" v-model="arreglo">
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
