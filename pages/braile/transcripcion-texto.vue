<template>
  <div class="py-24">
    <h2 class="mt-1 text-xl font-semibold text-center">
      Transcripción palabras o frases
    </h2>
    <div class="py-4 mx-4 lg:flex lg:space-x-4 lg:justify-center">
      <div class="px-10 border border-black lg:flex lg:space-x-4 lg:justify-center">
        <div class="">
          <div class="px-10 py-4 w-12/12 lg:w-12/12 ">
            <label class="flex justify-center mb-10 font-semibold text-center"
              >Palabra o frase a transcribir</label
            >
            <div class="flex justify-center">
              <InputBasic
              @keydown    = "clearErrors"
              borderColor = "extra"
              colorError  = "red"
              type        = "text"
              v-model     = "formData.texto"
              width       = "w-96"
              isUppercase = "uppercase"
              ></InputBasic>
            </div>
            

            <p class="mt-6 mb-6 text-center">Dimensiones de la caja ( milímetros )</p>
            <div class="flex justify-center">
              <div class="flex justify-center mt-2 mr-2">
                <label class="w-16">Largo :</label>
                <InputBasic
                  @keydown    = "clearErrors"
                  borderColor = "extra"
                  colorError  = "red"
                  type        = "number"
                  v-model     = "formData.largo"
                  width       = "w-20"
                ></InputBasic>
              </div>
              <div class="flex justify-center mt-2 mr-2">
                <label class="w-16">Ancho :</label>

                <InputBasic
                  @keydown="clearErrors"
                  borderColor="extra"
                  colorError="red"
                  type="number"
                  v-model="formData.ancho"
                  width="w-20"
                ></InputBasic>
              </div>
              <div class="flex justify-center mt-2">
                <label class="w-16">Alto :</label>
                <InputBasic
                  @keydown="clearErrors"
                  borderColor="extra"
                  colorError="red"
                  type="number"
                  v-model="formData.alto"
                  width="w-20"
                ></InputBasic>
              </div>
            </div>  
          </div>
          <div class="flex justify-center  mt-20 mb-2 space-x-4">
            <a @click="sendTextToTranscript ('largo')" class="px-2 text-sm  py-1 text-azul border border-azul hover:text-white hover:bg-azul rounded cursor-pointer">Braille impreso en largo</a>
            <a @click="sendTextToTranscript ('ancho')" class="px-2 text-sm  py-1 text-azul border border-azul hover:text-white hover:bg-azul rounded cursor-pointer">Braille impreso en ancho</a>            
          </div>
        </div>
        <div class="flex justify-center pb-4 mt-10 lg:mt-4">
          <img class="caja-braile" src="/images/caja-braile-2.png" alt="" />
        </div>
      </div>
    </div>
    
    <div v-if="modalBraile" class="absolute z-20 flex items-center justify-center w-full min-h-screen px-20 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10 ">
      <div  class="relative flex justify-center mt-2 ancho-modal">
        <div class="absolute top-4 right-4">
          <button @click="modalBraile = false">
            <img src="/images/close.svg" alt="">
          </button>
        </div>
        <div class="mt-2 ancho-modal">
          <div class="p-6 ml-3 mr-3 bg-white">
              <div class="flex items-center justify-center mt-4">
                <h2 class="text-lg text-center uppercase"> {{formData.texto }} </h2>
              </div>

              <div class="flex justify-center space-x-10 text-sm">
                <p class="px-2 py-1 text-azul">Largo: <span class=" text-azul py-1 px-4 ">{{ formData.largo }}</span></p>
                <p class="px-2 py-1 text-azul">Ancho: <span class=" text-azul py-1 px-4  ">{{ formData.ancho }}</span></p>
                <p class="px-2 py-1 text-azul">Alto: <span class=" text-azul py-1 px-4  ">{{ formData.alto }}</span></p>
                <p class="px-2 py-1 text-azul">Texto impreso en: <span class=" text-azul py-1 px-4  "><strong>{{ formData.imprimirEn | Capitalize}} </strong></span></p>
                
              </div>



              <div class="flex justify-center w-full py-8 text-xs bg-white border border-gray-300">
                  
                  <div class="w-32 px-4 py-7 text-sm border text-bold">Cara 1</div>
                  <div>
                    <div class="px-3 py-1 border w-96">Cantidad máxima de caracteres </div>
                    <div class="px-3 py-1 border w-96">Cantidad máxima de filas </div>
                    <div class="px-3 py-1 border w-96">Cantidad total símbolos del texto </div>
                  </div>
                  <div>
                    <div class="w-20 px-3 py-1 border text-center">{{ MC_Tabla1 }}</div>
                    <div class="w-20 px-3 py-1 border text-center">{{ MF_Tabla1 }}</div>
                    <div class="w-20 px-3 py-1 border text-center">{{ LongTexto }}</div>
                  </div>
              </div>
                  <table v-if="PalabrasTabla1.length" class="w-full px-4 mb-1 text-xs bg-white border border-gray-300 rounded" >
                    <tbody class="w-full">
                      <a name="braile-result" id="braile-result"></a>
                      <tr class="w-full">
                        <td
                          v-for="Palabra in PalabrasTabla1"
                          :key="Palabra.id_registro"
                          class="flex p-4 space-x-2 flex-wrap border border-gray-300"
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
                                class="border border-gray-300 w-12 lg:w-16"
                                :src="caracterBraile.path_simbolo_1"
                                alt=""
                              />
                              <img
                                class="border border-gray-300 w-12 lg:w-16"
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
            <div v-if="PalabrasTabla2.length" class="flex justify-center w-full p-4 text-xs bg-white border border-gray-300">
              <div class="w-32 px-4 py-4 text-sm border text-bold">Cara 2</div>
              <div>
                <div class="px-3 py-1 border w-96">Cantidad máxima de caracteres </div>
                <div class="px-3 py-1 border w-96">Cantidad máxima de filas </div>
              </div>
              <div>
                <div class="w-20 px-3 py-1 border">{{ MC_Tabla2 }}</div>
                <div class="w-20 px-3 py-1 border">{{ MF_Tabla2 }}</div>
              </div>
              </div>
            <table v-if="PalabrasTabla2.length" class="w-full px-4 text-xs bg-white border border-gray-300 rounded" >
              <tbody class="w-full">
                <tr class="w-full">
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
                      <div class="flex flex-wrap space-x-2">
                        <img
                          class="border border-gray-300 w-12 lg:w-16"
                          :src="caracterBraile.path_simbolo_1"
                          alt=""
                        />
                        <img
                          class="border border-gray-300 w-12 lg:w-16"
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
      alto      : "",
      ancho     : "",
      idTercero : 0,
      largo     : "",
      texto     : "",
      imprimirEn: '',
    },
    modalBraile   : false,
    PalabrasTabla1: [],
    PalabrasTabla2: [],
    MC_Tabla1     : "",
    MC_Tabla2     : "",
    MF_Tabla1     : "",
    MF_Tabla2     : "",
    LongTexto     : 0,
  }),
  methods: {
    sendTextToTranscript( tipoImpresion ) {
      this.showBtnAnimation    = true;
      this.formData.idTercero  = this.$cookies.get("User").idtercero;
      this.formData.imprimirEn = tipoImpresion;                        // largo o ancho  
      this.PalabrasTabla1      = [];
      this.PalabrasTabla2      = [];
      Braile.SendTextToTranscript(this.formData).then(response => {
        if ( response.data.result != 'Ok' ){
            this.Message('Error!', 'Las medidas especificadas no permiten la impresión braille.', 'error','Cerrar');
          return ;
        }
        response.data.data.map(item => {
          if (item.cara == "cara1") {
            this.PalabrasTabla1.push(item);
            this.MC_Tabla1 = item.MC;
            this.MF_Tabla1 = item.MF;
            this.LongTexto = item.long_texto;
          }
          if (item.cara == "cara2") {
            this.PalabrasTabla2.push(item);
            this.MC_Tabla2 = item.MC;
            this.MF_Tabla2 = item.MF;
            this.LongTexto = item.long_texto;
          }
          this.modalBraile = true

        });
      });
    
      this.showBtnAnimation = false;
      
    },
 
  }
};
</script>

<style scoped>
.caja-braile {
  height: 400px;
  width: 400px;
}

.oculto {
  height: 550px;
}

.ancho-modal {
  width: 650px;

  
}

@media screen and (min-width: 1020px) {
  .ancho-modal {
    width: auto;
  }
}

@media screen and (min-width: 1420px) {
  .ancho-modal {
    width: auto;
  }
}

</style>
