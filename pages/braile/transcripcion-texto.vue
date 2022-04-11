<template>
  <div class="py-24">
    <h2 class="mt-1 mb-4 text-xl font-semibold text-center">
        Transcripción palabras o frases
    </h2>
    <div class="py-4 mx-10 border border-black lg:flex lg:space-x-4 lg:justify-center">
      <div class="">
        <div class="px-4 py-10 mt-10 w-12/12 lg:w-10/12 lg:mt-14">
          <label class="flex justify-center mb-10 font-semibold text-center"
            >Palabra o frase a transcribir</label
          >
          <InputBasic
            @keydown="clearErrors"
            borderColor="extra"
            colorError="red"
            type="text"
            v-model="formData.texto"
            width="w-12/12"
            isUppercase="uppercase"
          ></InputBasic>

          <p class="mt-6 mb-6 text-center">Dimensiones de la caja</p>
          <div class="flex justify-center">
            <div class="flex justify-center mt-2">
              <label class="w-20">Largo :</label>
              <InputBasic
                @keydown="clearErrors"
                borderColor="extra"
                colorError="red"
                type="text"
                v-model="formData.largo"
                width="w-2/6"
              ></InputBasic>
            </div>
            <div class="flex justify-center mt-2">
              <label class="w-20">Ancho :</label>

              <InputBasic
                @keydown="clearErrors"
                borderColor="extra"
                colorError="red"
                type="text"
                v-model="formData.ancho"
                width="w-2/6"
              ></InputBasic>
            </div>
            <div class="flex justify-center mt-2">
              <label class="w-20">Alto :</label>
              <InputBasic
                @keydown="clearErrors"
                borderColor="extra"
                colorError="red"
                type="text"
                v-model="formData.alto"
                width="w-2/6"
              ></InputBasic>
            </div>
          </div>
          <div class="flex justify-center mt-10 mb-4">
            <BtnCallToAction
              @click.prevent="sendTextToTranscript"
              colorIcon="white"
              ref="ButtonLoading"
              size="small"
              variant="success"
              variant-type="normal"
              :showBtnAnimation="showBtnAnimation"
            >
              Iniciar transcripción
            </BtnCallToAction>
          </div>
          <br />
        </div>
      </div>
      <div class="mt-4">
        <img class="caja-braile" src="/images/Caja-Braile.png" alt="">
      </div>
    </div>

    <div class="flex justify-center mt-2">
      <div class="mt-2">
        <div class="ml-3 mr-3">
          <table
            v-if="PalabrasTabla1.length"
            class="mb-1 bg-white border border-gray-300 rounded table-auto"
          >
            <tbody class="">
              <tr class="">
                <td class="w-32 p-10 text-sm border border-gray-300">
                  <div>Cara 1</div>
                  <div class="mt-2">MC: {{ MC_Tabla1 }}</div>
                  <div>MF: {{ MF_Tabla1 }}</div>
                </td>

                <td
                  v-for="Palabra in PalabrasTabla1"
                  :key="Palabra.id_registro"
                  class="flex p-4 space-x-3 border border-gray-300"
                >
                  <div
                    v-for="caracterBraile in Palabra.simbolos"
                    :key="caracterBraile.id_registro"
                  >
                    <div class="text-center uppercase">
                      {{ caracterBraile.caracter }}
                    </div>
                    <div class="flex space-x-2">
                      <img
                        class="border border-gray-300"
                        :src="caracterBraile.path_simbolo_1"
                        alt=""
                      />
                      <img
                        class="border border-gray-300"
                        v-if="caracterBraile.path_simbolo_2"
                        :src="caracterBraile.path_simbolo_2"
                        alt=""
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <table
            v-if="PalabrasTabla2.length"
            class="bg-white border border-gray-300 rounded table-auto"
          >
            <tbody class="">
              <tr class="">
                <td class="w-32 p-10 text-sm border border-gray-300">
                  <div>Cara 2</div>
                  <div class="mt-2">MC: {{ MC_Tabla2 }}</div>
                  <div>MF: {{ MF_Tabla2 }}</div>
                </td>

                <td
                  v-for="Palabra in PalabrasTabla2"
                  :key="Palabra.id_registro"
                  class="flex p-4 space-x-4 border border-gray-300"
                >
                  <div
                    v-for="caracterBraile in Palabra.simbolos"
                    :key="caracterBraile.id_registro"
                  >
                    <div class="text-center uppercase">
                      {{ caracterBraile.caracter }}
                    </div>
                    <div class="flex space-x-2">
                      <img
                        class="border border-gray-300"
                        :src="caracterBraile.path_simbolo_1"
                        alt=""
                      />
                      <img
                        class="border border-gray-300"
                        v-if="caracterBraile.path_simbolo_2"
                        :src="caracterBraile.path_simbolo_2"
                        alt=""
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Braile from "@/models/Braile";
import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import ClearErrors from "@/mixins/clearErrors";
import InputBasic from "@/components/htmlControls/inputBasic";
import Messages from "@/mixins/sweetalert2";
export default {
  //
  components: { BtnCallToAction, InputBasic },
  mixins: [ClearErrors, Messages],
  data: () => ({
    showBtnAnimation: false,
    formData: {
      alto: "45",
      ancho: "30",
      idTercero: 0,
      largo: "20",
      texto: "BUGA PALMIRA"
    },
    PalabrasTabla1: [],
    PalabrasTabla2: [],
    MC_Tabla1: "",
    MC_Tabla2: "",
    MF_Tabla1: "",
    MF_Tabla2: ""
  }),
  methods: {
    sendTextToTranscript() {
      this.showBtnAnimation = true;
      this.formData.idTercero = this.$cookies.get("User").idtercero;
      this.PalabrasTabla1 = [];
      this.PalabrasTabla2 = [];
      Braile.SendTextToTranscript(this.formData).then(response => {
        response.data.map(item => {
          if (item.cara == "cara1") {
            this.PalabrasTabla1.push(item);
            this.MC_Tabla1 = item.MC;
            this.MF_Tabla1 = item.MF;
          }
          if (item.cara == "cara2") {
            this.PalabrasTabla2.push(item);
            this.MC_Tabla2 = item.MC;
            this.MF_Tabla2 = item.MF;
          }
        });
        console.log(response.data);
      });

      this.showBtnAnimation = false;
    }
  }
};
</script>

<style>
.caja-braile {
  height: 650px;
  width: 600px;
}
</style>
