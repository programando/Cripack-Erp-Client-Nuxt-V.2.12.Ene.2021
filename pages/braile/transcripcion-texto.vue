<template>
  <div class="py-24">
    <h2 class="mt-1 mb-4 text-xl font-semibold text-center">
      Transcripción palabras o frases
    </h2>
    <div class="flex justify-center ">
      <div class="w-4/12 px-4 py-2 border border-black">
        <label class="flex justify-center mb-2 text-center"
          >Palabra o frase a transcribir</label
        >
        <InputBasic
          @keydown="clearErrors"
          borderColor="extra"
          colorError="red"
          type="text"
          v-model="formData.texto"
          width="w-12/12"
          :errors="errors.texto"
        ></InputBasic>

        <p class="mt-6 mb-6 text-center">Dimensiones de la caja</p>
        <div class="items-center">
          <div class="flex justify-center mt-2">
            <label class="w-20">Largo :</label>
            <InputBasic
              @keydown="clearErrors"
              borderColor="extra"
              colorError="red"
              type="text"
              v-model="formData.largo"
              width="w-2/6"
              :errors="errors.largo"
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
              :errors="errors.ancho"
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
              :errors="errors.alto"
            ></InputBasic>
          </div>
        </div>
        <div class="flex justify-center mt-10">
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
      </div>
    </div>

    <div class="mt-2 border-2">
      <div class="text-center">
        <h2 class="p-4 border-2">Texto transcripción</h2>
      </div>
      <div class="table-container">
        <div class="ml-3 mr-3 tabla-1">
          <table
            class="bg-white border border-separate border-green-900 rounded shadow-md table-auto"
          >
            <tbody>
              <tr>
                <td class="w-24 p-2 border border-blue-800" rowspan="2">
                  {{ formData.texto }}
                </td>

                <td
                  v-for="simbol in simbolos"
                  :key="simbol.id_registro"
                  class="p-2 border border-blue-800"
                >
                  <div
                    class="flex flex-col items-center justify-center img-container"
                  >
                    <div class="px-2">{{ simbol.caracter }}</div>
                    <div class="border-2">
                      <img :src="simbol.path_simbolo_1" alt="" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td
                  v-for="simbol2 in simbolos2"
                  :key="simbol2.id_registro"
                  class="p-2 border border-blue-800"
                >
                  <div
                    class="flex flex-col items-center justify-center img-container"
                  >
                    <div class="px-2">{{ simbol2.caracter }}</div>
                    <div class="border-2">
                      <img :src="simbol2.path_simbolo_1" alt="" />
                    </div>
                  </div>
                </td>
              </tr>

              <!-- <td class="p-2 border border-blue-800">
                  <div
                    class="flex flex-col items-center justify-center img-container"
                  >
                    <div>A</div>
                    <div class="border-2">
                      <img
                        src="@/static/images/carreras/guionBajo.png"
                        alt=""
                      />
                    </div>
                  </div>
                </td> -->

              <!-- <td class="p-2 border border-blue-800">
                  <div
                    class="flex flex-col items-center justify-center img-container"
                  >
                    <div>A</div>
                    <div>
                      <img
                        class="float-left mr-2 border-2"
                        src="@/static/images/carreras/guionBajo.png"
                        alt=""
                      />
                      <img
                        class="border-2"
                        src="@/static/images/carreras/guionBajo.png"
                        alt=""
                      />
                    </div>
                  </div>
                </td> -->

              <!-- <tr>
                <td class="p-2 border border-blue-800">Item 5</td>
                <td class="p-2 border border-blue-800">Item 6</td>
                <td class="p-2 border border-blue-800">Item 7</td>
              </tr> -->
            </tbody>
          </table>
        </div>

        <div class="tabla-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import InputBasic from "@/components/htmlControls/inputBasic";
import ClearErrors from "@/mixins/clearErrors";
import Messages from "@/mixins/sweetalert2";
import Braile from "@/models/Braile";
export default {
  //
  components: { BtnCallToAction, InputBasic },
  mixins: [ClearErrors, Messages],
  data: () => ({
    showBtnAnimation: false,
    formData: {
      alto: "",
      ancho: "",
      idTercero: 0,
      largo: "",
      texto: ""
    },
    errors: [],
    simbolos: [],
    simbolos2: []
  }),
  methods: {
    sendTextToTranscript() {
      this.showBtnAnimation = true;
      this.formData.idTercero = this.$cookies.get("User").idtercero;
      Braile.SendTextToTranscript(this.formData).then(res => {
        let [cara1, cara2] = res.data;
        this.simbolos = cara1;
        this.simbolos2 = cara2;
        console.log(cara1, cara2);
        this.showBtnAnimation = false;
      });
    }
  }
};
</script>

<style></style>
