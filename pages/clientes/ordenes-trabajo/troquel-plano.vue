<template>
  <div class="pt-20">
    <div class="mx-20 mt-2 border shadow-md">
      <h2 class="flex justify-center w-full py-2 text-2xl font-semibold border-b ">
        Troqueles planos
      </h2>
      <div class="mx-20 mt-4">
        <div class="mx-20 ">
          <div class="flex items-center space-x-2">
            <label class="w-32 mr-2">Referencia</label>
            <input
              class="w-full px-2 py-2 text-sm text-gray-700 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:bg-gray-100"
              type="text"
            />
          </div>
          <div class="mt-4 ">
            <div class="grid grid-cols-3">
              <div class="flex items-center">
                <label class="w-32">Tipo de arreglo</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-center">
                <label class="w-32">Sustrato</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-end">
                <label class="w-32">Calibre</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
            <div class="grid grid-cols-3 mt-2">
              <div class="flex items-center">
                <label class="w-32">Tiraje</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-center">
                <label class="w-32">Frecuencia</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
              <div class="flex items-center justify-end">
                <label class="w-32">Cabida</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
            <div class="grid grid-cols-3 mt-2">
              <div class="flex items-center">
                <label class="w-32">Máquina</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-10">
            <div class="flex">
              <Checkbox label="Perforadora"></Checkbox>
              <Checkbox></Checkbox>
              
            </div>
            <div class="">
              <div class="flex items-center justify-center">
                <label class="w-32">Ayuda pega</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
            <div class="">
              <div class="flex items-center justify-end">
                <label class="w-32">Punzones</label>
                <v-select class="w-40 " label="Tipo de arreglo"> </v-select>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="flex mt-5">
              <Checkbox label="Corte Hendido"></Checkbox>
              <Checkbox></Checkbox>
              
            </div>
            <div class="flex justify-center">
              <Radio label="Encauche"></Radio>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <label class="w-32">Archivos:</label>
            <div class="w-full ">
              <vueDropzone></vueDropzone>
            </div>
          </div>

          <div>
            <div class="flex mt-4 space-x-2">
              <label class="w-32 ">Observaciones</label>
              <textarea
                class="w-full px-4 py-2 text-gray-700 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:outline-none focus:bg-gray-100"
                name="observaciones"
                cols="80"
                rows="4"
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

<style></style>
