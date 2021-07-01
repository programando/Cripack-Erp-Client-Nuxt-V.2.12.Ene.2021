<template>
  <div class="pt-20">
    <div class="mx-40 mt-2 border shadow-2xl">
      <h2
        class="flex justify-center w-full py-2 text-2xl text-black bg-gray-100 "
      >
        Troqueles planos
      </h2>
      <div class="mx-16 mt-4 ">
        <div class="flex items-centerspace-x-2">
          <label class="w-32 mr-4 text-sm">Referencia :</label>
          <InputBasic
            borderColor="extra"
            colorError="red"
            type="text"
            v-model="formData.referencia"
            width="w-full"
          ></InputBasic>
        </div>
        <div class="mt-2 ">
          <div class="grid grid-cols-3">
            <div class="flex items-center">
              <label class="w-32 text-sm ">Tipo de arreglo : </label>
              <OtsTiposArreglos
                width="w-40"
                v-model="formData.id_tp_arreglo"
                colorError="red"
              ></OtsTiposArreglos>
            </div>
            <div class="flex items-center justify-center">
              <label class="w-32 ml-4 text-sm">Sustrato : </label>
              <OtsSustratos
                width="w-40"
                v-model="formData.id_sustrato"
                colorError="red"
              ></OtsSustratos>
            </div>
            <div class="flex items-center justify-end">
              <label class="w-32 ml-4 text-sm">Calibre : </label>
              <OtsCalibre
                width="w-40"
                v-model="formData.id_calibre"
                colorError="red"
              ></OtsCalibre>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-2">
            <div class="flex items-center">
              <label class="w-32 text-sm ">Tiraje :</label>
              <OtsTiraje
                width="w-40"
                v-model="formData.id_tiraje"
                colorError="red"
              ></OtsTiraje>
            </div>
            <div class="flex items-center justify-center">
              <label class="w-32 ml-4 text-sm">Frecuencia :</label>
              <OtsFrecuencia
                width="w-40"
                v-model="formData.id_frecuencia"
                colorError="red"
              ></OtsFrecuencia>
            </div>
            <div class="flex items-center justify-end">
              <label class="w-32 ml-4 text-sm ">Cabida :</label>
              <InputBasic
                borderColor="extra"
                colorError="red"
                type="text"
                v-model="formData.cabida"
                width="w-40"
                border="border"
              ></InputBasic>
            </div>
          </div>
          <div class="grid grid-cols-3 mt-2">
            <div class="flex items-center">
              <label class="w-32 text-sm ">Máquina :</label>
              <OtsMaquina
                width="w-40"
                v-model="formData.id_maquina"
                colorError="red"
              ></OtsMaquina>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 mt-4">
          <div class="flex items-center">
            <div class="flex items-center">
              <label class="-mt-2 text-sm w-28 ">Perforadora :</label>
              <Checkbox v-model="formData.perforadra_1"></Checkbox>
            </div>
            <Checkbox v-model="formData.perforadra_2"></Checkbox>
            <Checkbox v-model="formData.perforadra_3"></Checkbox>
          </div>
          <div class="">
            <div class="flex items-center justify-center">
              <label class="w-32 ml-4 text-sm">Ayuda pega :</label>
              <OtsAyudaPega
                width="w-40"
                v-model="formData.id_ayudapega"
                colorError="red"
              ></OtsAyudaPega>
            </div>
          </div>
          <div class="">
            <div class="flex items-center justify-end">
              <label class="w-32 ml-4 text-sm">Punzones :</label>
              <OtsPunzones
                width="w-40"
                v-model="formData.id_punzon"
                colorError="red"
              ></OtsPunzones>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="flex items-center">
            <div class="flex items-center ">
              <label class="-mt-2 text-sm w-28 ">Corte-Hendido :</label>
              <Checkbox v-model="formData.cortehendido_1"></Checkbox>
            </div>
            <Checkbox v-model="formData.cortehendido_2"></Checkbox>
            <Checkbox v-model="formData.cortehendido_3"></Checkbox>
          </div>
          <div class="flex justify-center text-sm margen-top">
            <label class="w-32 -ml-4 text-sm">Encauche :</label>
            <RadioButton
              label="Si"
              value="1"
              v-model="formData.encauche"
            ></RadioButton>
            <RadioButton
              class="ml-6"
              label="No"
              value="0"
              v-model="formData.encauche"
            ></RadioButton>
          </div>
        </div>

        <div class="flex items-center mt-1 space-x-2">
          <label class="w-32 text-sm ">Archivos:</label>
          <div class="w-full h-40">
            <vueDropzone v-model="formData.filesAdded"> </vueDropzone>
          </div>
        </div>
        <div>
          <div class="flex items-center mt-2 space-x-2">
            <label class="w-32 text-sm ">Observaciones :</label>
            <TextArea
              v-model="formData.observaciones"
              colorError="red"
            ></TextArea>
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
import OrdenesTrabajo from "@/models/OrdenesTrabajo";

import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import Checkbox from "@/components/htmlControls/checkbox";
import InputBasic from "@/components/htmlControls/inputBasic";
import OtsAyudaPega from "@/components/solicitudesOts/ayudaPega.vue";
import OtsCabida from "@/components/solicitudesOts/cabidad.vue";
import OtsCalibre from "@/components/solicitudesOts/calibre.vue";
import OtsFrecuencia from "@/components/solicitudesOts/frecuencia.vue";
import OtsMaquina from "@/components/solicitudesOts/maquina.vue";
import OtsPunzones from "@/components/solicitudesOts/punzones.vue";
import OtsSustratos from "@/components/solicitudesOts/sustrato.vue";
import OtsTiposArreglos from "@/components/solicitudesOts/tipoArreglo.vue";
import OtsTiraje from "@/components/solicitudesOts/tiraje.vue";
import RadioButton from "~/components/htmlControls/radioButton.vue";
import TextArea from "@/components/htmlControls/textArea.vue"
import vSelect from "vue-select";
import vueDropzone from "@/components/vueDropzone";

export default {
  name: "FormTroquelPlano",
  components: {
    BtnCallToAction,
    InputBasic,
    Checkbox,
    vSelect,
    vueDropzone,
    RadioButton,
    OtsTiposArreglos,
    OtsSustratos,
    OtsCalibre,
    OtsTiraje,
    OtsFrecuencia,
    OtsCabida,
    OtsMaquina,
    OtsAyudaPega,
    OtsPunzones,
    TextArea
  },
  data: () => ({
    showBtnAnimation: false,

    formData: {
      cabida: "",
      cortehendido_1: false,
      cortehendido_2: false,
      cortehendido_3: false,
      encauche: "",
      filesAdded: [],
      id_ayudapega: 0,
      id_calibre: 0,
      id_frecuencia: 0,
      id_maquina: 0,
      id_punzon: 0,
      id_sustrato: 0,
      id_tiraje: 0,
      id_tp_arreglo: 0,
      idtecero_vendedor: 0,
      idtercero: 0, // Identificador de cliente
      observaciones: "",
      perforadra_1: false,
      perforadra_2: false,
      perforadra_3: false,
      referencia: ""
    },

    errors: []
  }),

  methods: {
    grabarOdenTrabajo() {
      this.formData.idtercero = this.$cookies.get("User").idtercero;
      this.formData.idtecero_vendedor = this.$cookies.get(
        "User"
      ).idtecero_vendedor;
      OrdenesTrabajo.SolicitudTroquelPlano(this.formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
<style scoped>
.margen-top {
  margin-top: 7px;
}
</style>
