<template>
  <div>
    <div
      class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div
        class="px-8 py-6 mt-6 bg-azulBackGroundForm md:py-8 md:px-10 lg:mt-0 opacity-90"
      >
        <!-- label, titulo y descripcion -->
        <div class="flex items-center justify-center ">
          <div class="px-10 py-6 mt-6 md:py-8 md:px-24 lg:mt-0 ">
            <!-- label, titulo y descripcion -->
            <div class="flex justify-center text-4xl font-bold text-white px-28">
              <span><img class="h-24" src="/images/logo.png" alt=""/></span>
            </div>
            <p class="flex justify-center text-white" v-t="'PasswordChageForm.TitleP1'"></p> 
            <p class="flex justify-center text-white "  v-t="'PasswordChageForm.TitleP2'"> </p>
            <div class="mt-4">
              <!-- inputText -->
              <div class="py-2 mx-20 mt-1">
                
                <div class="items-center w-full">
                  <InputBasic
                      @keyup     = "clearErrors"
                      colorError = "white"
                      icon       = "true"
                      text       = "email..."
                      type       = "text"
                      v-model    = "form.email"
                      width      = "w-full"
                    :errors      = "errors.email"
                  >
                  </InputBasic>

                </div>
                
              </div>
            </div>

            <div class="flex justify-center mt-8 mb-2 font-semibold">
             <BtnCallToAction 
                @click.prevent="resetPassword" 
                size="small" 
                ref="ButtonLoading" 
                variant="success"
                variant-type="normal"
                :showBtnAnimation="showBtnAnimation"
                >   {{ $t('PasswordChageForm.BtnSendEmail')}}
            </BtnCallToAction>
              
            </div>
            
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import InputBasic         from "@/components/htmlControls/inputBasic"
import Messages           from "@/mixins/sweetalert2";
import User               from "@/models/User";

export default {
  layout: 'blank-layout',
  name: 'passwordChange',
  components: { InputBasic, BtnCallToAction },
   mixins: [Messages],
  data :()=>({
        showBtnAnimation:false,
        errors:[],
        form:{ email:''},
  }),

  methods: {
      resetPassword() {
          this.showBtnAnimation = true;
          User.resetPassword ( this.form)
          .then( () =>{     
              this.Message(this.$t('PasswordChageForm.MessageOkTitle') ,this.$t('PasswordChageForm.MessageOkBody'),'success', this.$t('PasswordChageForm.BtnCloseWindow') );
              this.$router.push('/');
          }).catch( error => {
              if (error.response.status ==422) {
                this.errors = error.response.data.errors;
                this.showBtnAnimation = false;
              }
          })
      },
      clearErrors() {
          this.errors = [];
          this.showBtnAnimation = false;
      },
  },  
}
</script>
