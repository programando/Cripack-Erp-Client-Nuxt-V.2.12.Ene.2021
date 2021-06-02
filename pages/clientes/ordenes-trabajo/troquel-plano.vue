<template>
  <div class="pt-20">
    <div class="mx-20 mt-2 border shadow-md">
      <h2 class="flex justify-center w-full py-2 text-2xl text-black bg-gray-100 font-Montserrat ">
        Troqueles planos
      </h2>
      <div class="mx-20 mt-4">
        <div class="mx-20 ">
          <div class="flex items-center space-x-2">
            <label class="w-32 mr-2 text-sm">Referencia :</label>
            <input
              class="w-full px-1 py-1 text-sm text-gray-700 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:bg-gray-100"
              type="text"
            />
          </div>
          <div class="mt-2 ">
            <div class="grid grid-cols-3">
              <div class="flex items-center">
                <label class="w-32 text-sm ">Tipo de arreglo : </label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-center">
                <label class="w-32 ml-4 text-sm">Sustrato : </label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-end">
                <label class="w-32 ml-4 text-sm">Calibre : </label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
            <div class="grid grid-cols-3 mt-2">
              <div class="flex items-center">
                <label class="w-32 text-sm ">Tiraje :</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-center">
                <label class="w-32 ml-4 text-sm">Frecuencia :</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-end">
                <label class="w-32 ml-4 text-sm ">Cabida :</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
            <div class="grid grid-cols-3 mt-2">
              <div class="flex items-center">
                <label class="w-32 text-sm ">Máquina :</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <label class="-mt-2 text-sm w-28 ">Perforadora :</label>
                <Checkbox></Checkbox>
              </div>
              <Checkbox></Checkbox>
              <Checkbox></Checkbox>
            </div>
            <div class="">
              <div class="flex items-center justify-center">
                <label class="w-32 ml-4 text-sm">Ayuda pega :</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
            <div class="">
              <div class="flex items-center justify-end">
                <label class="w-32 ml-4 text-sm">Punzones :</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="flex items-center">
              <div class="flex items-center ">
                <label class="-mt-2 text-sm w-28 ">Corte-Hendido :</label>
                <Checkbox></Checkbox>
              </div>
              <Checkbox></Checkbox>
              <Checkbox></Checkbox>
            </div>
            <div class="flex justify-center ml-4 text-sm ">
              
            </div>
          </div>
          <div class="flex items-center mt-1 space-x-2">
            <label class="w-32 text-sm ">Archivos:</label>
            <div class="w-full ">
              <vueDropzone> Algo</vueDropzone>
            </div>
          </div>

          <div>
            <div class="flex justify-center mt-2 space-x-2 ">
              <label class="w-32 text-sm ">Observaciones :</label>
              <textarea
                class="w-full px-4 py-2 text-gray-700 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:outline-none focus:bg-gray-100"
                name="observaciones"
                cols="80"
                rows="2"
              ></textarea>
            </div>
          </div>
          <div class="flex justify-center w-full my-4">
            <button
              class="px-2 py-1 text-white bg-green-600 border rounded-md hover:bg-green-700"
            >
              Enviar Solicitud
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBasic from "@/components/htmlControls/inputBasic";
import Combo from "@/components/htmlControls/combo";
import Checkbox from "@/components/htmlControls/checkbox";
import Radio from "@/components/htmlControls/radio";
import vSelect from "vue-select";
import vueDropzone from "@/components/vueDropzone";

export default {
  components: {
    InputBasic,
    Combo,
    Checkbox,
    Radio,
    vSelect,
    vueDropzone
  }
};
</script>

<style>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: white;
    border: none;
    color: #394066;
    text-transform: lowercase;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
  .vs__selected-options  {
    height: 20px;
  }
  .vue-dropzon {
    height: 20px;
  }
</style>
