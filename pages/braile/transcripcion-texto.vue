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
      texto: "buenas personas"
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
           console.log( this.cara1 );
          this.simbolosCara1 = res.data[0].simbolos1;
          console.log( this.simbolosCara1 );
        }

       if ( ! res.data[1].cara2 === undefined ){
          this.cara2  = res.data[1].cara2[0];
          this.simbolosCara2 = res.data[1].simbolos2;
        }  

        
        //console.log(this.simbolosCara2);

        this.showBtnAnimation = false;
      });
    }
  }
};
</script>

<style></style>
