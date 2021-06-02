<template>
  <div class="flex items-center justify-center h-screen pt-24 mt-0 font-Raleway">
    <div class="flex">

 
      <div class="mt-16 ml-40">
        <div>
          <h2 class="text-3xl text-azul" v-t="'ContactForm.TitleLeftOne'"></h2>
          <p class="mt-1 ml-2 text-azulClaro " v-t="'App.CompanyAddress'"></p>
          <p class="mt-1 ml-2 text-azulClaro" v-t="'App.CompanyCity'"></p>
        </div>
        <div>
        
          <h2 class="mt-10 text-3xl text-azul" v-t="'ContactForm.TitleLeftTwo'"></h2>
          <p class="mt-1 ml-2 text-azulClaro" v-t="'App.CompanyPhone'"></p>
          <p class="mt-1 ml-2 text-azulClaro" v-t="'App.CompanyCellPhone'"> </p>
          <p class="mt-1 ml-2 text-azulClaro" v-t="'App.CompayEmail'"> </p>
        </div>
      </div>
      
      <div class="pl-40">
        <h2 class="text-4xl text-azul" v-t="'ContactForm.TitleRight'"></h2>
        <p class="w-4/6 mt-3 text-azulClaro" v-t="'ContactForm.BodyMessage'">
          
        </p>
        <form @submit.prevent="">
        <div>
          
          <div class="w-4/6 mt-2">
            <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                :text        = "$t('ContactForm.PlaceHolderContac')"
                type        = "text"
                v-model     = "formData.contacto"
                width       = "w-3/6"
              :errors       = "errors.contacto"
            />
          </div>
          
          <div class="w-4/6 mt-2">
            <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                :text        = "$t('ContactForm.PlaceHolderSubject')"
                type        = "text"
                v-model     = "formData.asunto"
                width       = "w-3/6"
              :errors       = "errors.asunto"
             />


          </div>
          <div class="w-4/6 mt-2">
            <InputBasic
                @keydown    = "clearErrors"
                borderColor = "extra"
                colorError  = "red"
                :text        = "$t('ContactForm.PlaceHolderEmail')"
                type        = "email"
                v-model     = "formData.email"
                width       = "w-3/6"
              :errors       = "errors.email"
            />
          </div>
          <div class="mt-2">
            <textarea
              class="w-4/6 px-4 py-2 text-gray-700 placeholder-gray-700 bg-white border-2 border-gray-400 rounded outline-none focus:outline-none focus:bg-gray-100"
              :placeholder = "$t('ContactForm.PlaceHolderMessage')"
              cols        = "47"
              rows        = "3"
              v-model     = "formData.mensaje"
              @keydown    = "clearErrors"
            ></textarea>
            <div v-if="errors.mensaje" class="mt-1 ml-1 text-xs text-left text-red-600 w-96">
            <font-awesome-icon :icon="['fas', 'exclamation-triangle']"/> {{ errors.mensaje }}
        </div>
          </div>
        </div>
        </form>

        <div class="mt-2">
         
          <BtnCallToAction
              @click.prevent  = "sendContacData"
              colorIcon       = "white"
              ref             = "ButtonLoading"
              size            = "small"
              variant         = "success"
              variant-type    = "normal"
            :showBtnAnimation = "showBtnAnimation"
          >
             {{ $t('App.BtnSednData')}}
          </BtnCallToAction>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import InputBasic         from "@/components/htmlControls/inputBasic";
import User               from "@/models/User";
import ClearErrors        from "@/mixins/clearErrors";
import Messages           from "@/mixins/sweetalert2";

export default {
  layout: 'default3',
  name: "ContactoClientes",
  components: {  BtnCallToAction,  InputBasic  },
  mixins: [ClearErrors, Messages],
  data: ()=> ({
      formData : {
          asunto  : '',
          contacto: '',
          email   : '',
          mensaje : '',
      },
      errors :[],
      showBtnAnimation:false
  }),

  methods: {
        sendContacData() {
            this.showBtnAnimation = true;
            User.contactoUsuarioWeb ( this.formData )
            .then ( () =>{
              this.Message(this.$t('ContactForm.MessageOkTitle') ,this.$t('ContactForm.MessageOkBody'),'success', this.$t('App.CloseWindow') );
              this.showBtnAnimation = false;
              this.formData='';
            })
            .catch ( error => {
                this.showBtnAnimation = false;
                this.errors = error.response.data.errors;
            })
        }
  }
};
</script>
