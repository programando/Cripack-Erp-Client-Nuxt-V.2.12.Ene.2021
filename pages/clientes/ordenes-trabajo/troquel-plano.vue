<template>
  <div class="py-24">
    <div>
      <h2 class="flex justify-center text-3xl font-semibold">Troquel plano</h2>
      <div class="mx-40 mt-10">
        <div class="mx-20 ">
          <div>
            <InputBasic width="w-full" colorLabel="black" label="Referencia"></InputBasic>
          </div>
          <div class="flex items-center mt-2">
            <label class="font-semibold w-28">Archivos</label>
            <input class="w-3/6 px-4 py-2 mr-4 text-sm text-gray-700 placeholder-gray-700 bg-gray-200 border-2 border-gray-400 rounded outline-none focus:bg-white" type="text">
            <input type="file">
          </div>
          <div class="mt-4 ">
            <div class="grid grid-cols-3">
              <Combo label="Tipo de arreglo"></Combo>
              <Combo label="Sustrato"></Combo>
              <Combo label="Calibre"></Combo>
            </div>
            <div class="grid grid-cols-3 mt-2">
              <Combo label="Tiraje"></Combo>
              <Combo label="Frecuencia"></Combo>
              <Combo label="Cabida"></Combo>
            </div>
            <div class="flex justify-center mt-2">
               <label class="font-semibold w-28">Observaciones</label>
              <textarea class="px-4 py-2 text-gray-700 placeholder-gray-700 bg-gray-200 border border-gray-400 rounded outline-none focus:outline-none focus:bg-white" name="observaciones" cols="80" rows="2"></textarea>
            </div>
          </div>
          <div class="mt-10">
            <div class="flex justify-center">
              <Combo label="Máquina"></Combo>
            </div>
            <div class="flex justify-center">
              <Checkbox label="Perforadora"></Checkbox>
            </div>
            <div class="flex justify-center">
              <Checkbox label="Corte Hendido"></Checkbox>
            </div>
            <div class="flex justify-center">
              <Combo label="Ayuda Pega"></Combo>
            </div>
            <div class="flex justify-center mt-2">
              <Combo label="Punzones"></Combo>
            </div>
            <div class="flex justify-center">
              <Radio label="Encauche"></Radio>
            </div>
          </div>
          <div class="flex justify-center space-x-6">
            <button class="px-2 py-1 text-white bg-green-600 border rounded-md hover:bg-green-700">Grabrar Solicitud</button>
            <button class="px-2 py-1 text-white bg-green-600 border rounded-md hover:bg-green-700">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBasic from "@/components/htmlControls/inputBasic";
import Combo from "@/components/htmlControls/combo"
import Checkbox from "@/components/htmlControls/checkbox"
import Radio from "@/components/htmlControls/radio"
export default {
  components: {
    InputBasic,
    Combo,
    Checkbox,
    Radio
  },
  
};
</script>

<style></style>
