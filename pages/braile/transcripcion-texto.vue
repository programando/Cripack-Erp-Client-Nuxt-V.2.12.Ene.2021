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
          isUppercase='uppercase'
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

    <div v-if="cara1.cara_1 || cara1.cara_2" class="mt-2">
      <div class="flex justify-center text-center border-2">
        <h2 class="p-4 uppercase">{{cara1.cara_1}}</h2>
        <h2 v-if="cara2" class="p-4 uppercase ">{{cara2.cara_2}}</h2>
      </div>
      <div class="mt-2">
        <div class="ml-3 mr-3">
          <table
            class="bg-white border border-black rounded table-auto"
          >
            <tbody class="">
              <tr class="">
                <td class="w-32 p-10 border border-black">
                  <div>Cara 1</div>
                  <div class="mt-2">MC: 0</div>
                  <div>MF: 3</div>
                </td>
                
                <td v-for="simbolos1 in simbolosCara1" :key="simbolos1.id_registro" class="p-4 border border-black">
                  <div class="text-center uppercase">{{simbolos1.caracter}}</div>
                  <div class="flex space-x-2">
                    <img class="border border-gray-400" :src="simbolos1.path_simbolo_1" alt="">
                    <img class="border border-gray-400" v-if="simbolos1.path_simbolo_2" :src="simbolos1.path_simbolo_2" alt="">
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            class="bg-white border border-black rounded table-auto"
          >
            <tbody class="">
              <tr class="">
                <td class="w-32 p-10 border border-black">
                  <div>Cara 2</div>
                  <div class="mt-2">MC: 0</div>
                  <div>MF: 3</div>
                </td>
                <td v-for="simbolos2 in simbolosCara2" :key="simbolos2.id_registro" class="p-4 border border-black">
                  <div class="text-center uppercase">{{simbolos2.caracter}}</div>
                  <img class="border border-gray-400" :src="simbolos2.path_simbolo_1" alt="">
                   <img class="border border-gray-400" v-if="simbolos2.path_simbolo_2" :src="simbolos2.path_simbolo_2" alt="">
                </td>
              </tr> 
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
      alto: "25",
      ancho: "46",
      idTercero: 0,
      largo: "36",
      texto: "buena5 personas"
    },
    response : [],
    errors: [],
    cara1 : [],
    cara2 : [],
    simbolosCara1: [],
    simbolosCara2: [],
    
  }),
  methods: {
    async sendTextToTranscript() {
      this.showBtnAnimation = true;
      this.formData.idTercero = this.$cookies.get("User").idtercero;
      
      Braile.SendTextToTranscript(this.formData).then(res => {
        //console.log ( typeof (res.data[1].cara1) );
       
        if ( typeof res.data[0].cara1 != 'undefined'){
           this.cara1 = res.data[0].cara1[0] 
           this.simbolosCara1 = res.data[0].simbolos1;
           console.log( this.cara1 );
           console.log( this.simbolosCara1 );
          
        }

       if (res.data[1].cara2){
          this.cara2  = res.data[1].cara2[0];
          this.simbolosCara2 = res.data[1].simbolos2;
           console.log( this.cara2 );
           console.log( this.simbolosCara2 );
        }  
 

        this.showBtnAnimation = false;
      });
    }
  }
};
</script>

<style></style>
