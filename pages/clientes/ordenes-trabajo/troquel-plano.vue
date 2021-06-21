<template>
  <div class="pt-20">
    <div class="mx-40 mt-2 border shadow-2xl">
      <h2
        class="flex justify-center w-full py-2 text-2xl text-black bg-gray-100 "
      >
        Troqueles planos
      </h2>
      <div class="mx-16 mt-4 ">
        <div class="flex items-center space-x-2">
          <label class="w-32 mr-2 text-sm">Referencia :</label>
          <input
            class="w-full px-4 py-1 text-sm placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none text-azul focus:bg-gray-100"
            type="text"
          />
        </div>
        <div class="mt-2 ">
          <div class="grid grid-cols-3">
            <div class="flex items-center">
              <label class="w-32 text-sm ">Tipo de arreglo : </label>
              <OtsTiposArreglos width="w-40" v-model="formData.id_tp_arreglo" ></OtsTiposArreglos>
            </div>
            <div class="flex items-center justify-center">
              <label class="w-32 ml-4 text-sm">Sustrato : </label>
              <OtsSustratos width="w-40" v-model="formData.id_sustrato" ></OtsSustratos>
            </div>
            <div class="flex items-center justify-end">
              <label class="w-32 ml-4 text-sm">Calibre : </label>
              <OtsCalibre width="w-40"></OtsCalibre>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-2">
            <div class="flex items-center">
              <label class="w-32 text-sm ">Tiraje :</label>
              <OtsTiraje width="w-40"></OtsTiraje>
            </div>
            <div class="flex items-center justify-center">
              <label class="w-32 ml-4 text-sm">Frecuencia :</label>
              <OtsFrecuencia width="w-40"></OtsFrecuencia>
            </div>
            <div class="flex items-center justify-end">
              <label class="w-32 ml-4 text-sm ">Cabida :</label>
              <OtsCabida width="w-40"></OtsCabida>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-2">
            <div class="flex items-center">
              <label class="w-32 text-sm ">Máquina :</label>
              <OtsMaquina width="w-40"></OtsMaquina>
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
              <OtsAyudaPega width="w-40"></OtsAyudaPega>
            </div>
          </div>
          <div class="">
            <div class="flex items-center justify-end">
              <label class="w-32 ml-4 text-sm">Punzones :</label>
              <OtsPunzones width="w-40"></OtsPunzones>
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
          <div class="flex justify-center text-sm ">
            <label class="-ml-4 text-sm w-28">Encauche :</label>
            <RadioButton></RadioButton>
          </div>
        </div>
        <div class="flex items-center mt-1 space-x-2">
          <label class="w-32 text-sm ">Archivos:</label>
          <div class="w-full h-40">
            <vueDropzone> </vueDropzone>
          </div>
        </div>
        <div>
          <div class="flex justify-center mt-2 space-x-2 ">
            <label class="w-32 text-sm ">Observaciones :</label>
            <textarea
              class="w-full px-4 py-2 placeholder-gray-700 bg-white border border-gray-300 rounded-md outline-none text-azul focus:outline-none focus:bg-gray-100"
              name="observaciones"
              cols="80"
              rows="2"
            ></textarea>
          </div>
        </div>
        <div class="flex justify-center w-full my-4">
          <BtnCallToAction
            :showBtnAnimation="showBtnAnimation"
            @click.prevent="grabarOdenTrabajo"
            colorIcon="white"
            ref="ButtonLoading"
            size="small"
            variant-type="normal"
            variant="success"
          >
            Enviar solicitud
          </BtnCallToAction>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BtnCallToAction          from "@/components/htmlControls/buttonCallToActionLoading";
  import Checkbox                 from "@/components/htmlControls/checkbox";
  import InputBasic               from "@/components/htmlControls/inputBasic";
  import OtsSustratos             from "@/components/solicitudesOts/sustrato.vue";
  import OtsTiposArreglos            from "@/components/solicitudesOts/tipoArreglo.vue";
  import OtsCalibre            from "@/components/solicitudesOts/calibre.vue";
  import OtsTiraje            from "@/components/solicitudesOts/tiraje.vue";
  import OtsFrecuencia            from "@/components/solicitudesOts/frecuencia.vue";
  import OtsCabida            from "@/components/solicitudesOts/cabidad.vue";
  import OtsMaquina            from "@/components/solicitudesOts/maquina.vue";
  import OtsAyudaPega            from "@/components/solicitudesOts/ayudaPega.vue";
  import OtsPunzones            from "@/components/solicitudesOts/punzones.vue";
  import RadioButton              from "@/components/htmlControls/radioButton";
  import vSelect                  from "vue-select";
  import vueDropzone              from "@/components/vueDropzone";

export default {
  name:'FormTroquelPlano',
  components: { 
    BtnCallToAction,
    InputBasic,
    Checkbox,
    vSelect,
    vueDropzone,
    RadioButton,
    OtsTiposArreglos,OtsSustratos, OtsCalibre, OtsTiraje, OtsFrecuencia, OtsCabida, OtsMaquina, OtsAyudaPega, OtsPunzones
  },
  data: () => ({
    showBtnAnimation: false,
 
    
    formData : {
        id_sustrato : 0,
        id_tp_arreglo:0,
    }
  }),

  methods: {
    grabarOdenTrabajo() {}
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
.vs__selected-options {
  height: 20px;
}
.vue-dropzon {
  height: 20px;
}
.wn-menu-content-list .v-select-select {
  border: none;
}
</style>
