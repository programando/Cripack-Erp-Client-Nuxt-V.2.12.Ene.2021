<template>
  <div class="py-24">
      <h2 class="mt-1 mb-4 text-xl font-semibold text-center">Transcripción palabras o frases</h2>
     <div class="flex justify-center ">
       
      <div class="w-4/12 px-4 py-2 border border-black">
        
        <label class="flex justify-center mb-4 text-center">Palabra o frase a transcribir</label>
         <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                type        = "text"
                v-model     = "formData.texto"
                width       = "w-12/12"
              :errors       = "errors.texto"
            ></InputBasic>

        <p class="mt-6 mb-6 text-center">Dimensiones de la caja</p>
        <div class="items-center">
          <div class="flex justify-center mt-2">
            <label class="w-20">Largo :</label>
             <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                type        = "text"
                v-model     = "formData.largo"
                width       = "w-2/6"
              :errors       = "errors.largo"
            ></InputBasic>

          </div>
          <div class="flex justify-center mt-2">
            <label class="w-20">Ancho :</label>
          
             <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                type        = "text"
                v-model     = "formData.ancho"
                width       = "w-2/6"
              :errors       = "errors.ancho"
            ></InputBasic>

          </div>
          <div class="flex justify-center mt-2">
            <label class="w-20">Alto :</label>
            <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                type        = "text"
                v-model     = "formData.alto"
                width       = "w-2/6"
              :errors       = "errors.alto"
            ></InputBasic>
          </div>
        </div>
        <div class="flex justify-center mt-10">
         <BtnCallToAction
              @click.prevent  = "sendTextToTranscript"
              colorIcon       = "white"
              ref             = "ButtonLoading"
              size            = "small"
              variant         = "success"
              variant-type    = "normal"
            :showBtnAnimation = "showBtnAnimation"
          >
             Iniciar transcripción 
          </BtnCallToAction>
        </div>
      </div>
    </div> 

 

  </div>
</template>

<script>
  import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
  import InputBasic         from "@/components/htmlControls/inputBasic";
  import ClearErrors        from "@/mixins/clearErrors";
  import Messages           from "@/mixins/sweetalert2";
  import Braile from "@/models/Braile";
      export default {
        //
        components: { BtnCallToAction, InputBasic },
        mixins: [ClearErrors, Messages],
      data: () => ({
            showBtnAnimation : false,
            formData: {
                idTercero: 0,
                largo    : '',
                ancho    : '',
                alto     : ''
            },
            errors :[],
      }),
      methods: {
          sendTextToTranscript() {
              this.showBtnAnimation = true;
              this.formData.idTercero   = this.$cookies.get("User").idtercero;
              Braile.SendTextToTranscript ( this.formData )
              .then ( res=>{
                  console.log( res );
                  this.showBtnAnimation = false;
              })
          }
      }

}
</script>

<style>

</style>