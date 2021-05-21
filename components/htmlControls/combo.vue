<template>
  <div>
    <label class="font-semibold">Tipo de Arreglo</label>
    <select class="px-2 py-1 border-2 rounded-md" v-model="arreglo">
      <option v-for="(arreglos, index) in tiposArreglos" :key="index">
        {{ arreglos }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "combo",
  data() {
    return {
      arreglo: "",
      tiposArreglos: ["arreglo1", "arreglo2", "arreglo3"]
    };
  }
};
</script>

<style></style>
