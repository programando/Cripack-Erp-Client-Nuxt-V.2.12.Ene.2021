<template>
  <div
    class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/background.jpg')"
  >
    <div
      class="px-8 py-2 mt-6 bg-azulBackGroundForm md:py-8 md:px-10 lg:mt-0 opacity-90"
    >
      <!-- label, titulo y descripcion -->
      <div class="flex items-center justify-center ">
        <div class="px-8 py-6 mt-6 md:py-2 md:px-10 lg:mt-0 ">
          <!-- label, titulo y descripcion -->
          <div class="flex justify-center text-4xl font-bold text-white">
            <span><img class="h-24" src="/images/logo.png" alt=""/></span>
          </div>
          <p class="text-center text-white w-96" v-t="'PasswordChangeNewForm.Title'">  </p>
          
          <div class="mt-4">
               <InputPassword
                      :text= "$t('PasswordChangeNewForm.PasswordPlaceHolder1')"
                      
                      v-model="formUser.password"
                      :errors="errors.password"
                      colorError="white">
              </InputPassword>
  
               <InputPassword
                      :text= "$t('PasswordChangeNewForm.PasswordPlaceHolder2')"
                      v-model="formUser.password_confirmation" >
              </InputPassword>

            <div class="flex justify-center mt-4 space-x-4">
              <div  class="px-4 py-2 text-white bg-green-600 border-green-600 rounded-md hover:bg-green-700 hover:border-green-700">
                <nuxt-link to="/"> {{$t('PasswordChangeNewForm.BtnGoIndex')}}</nuxt-link>
              </div>
              <BtnCallToAction 
                @click.prevent="updatePassword"
                size="small"
                ref="ButtonLoading"
                variant="success"
                variant-type="normal" >
                {{$t('PasswordChangeNewForm.BtnUpdatePassword')}}
              </BtnCallToAction>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import InputPassword      from  "@/components/htmlControls/inputPassword";
import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import User               from "@/models/User";
export default {
  layout: 'blank-layout',
  components: { InputPassword, BtnCallToAction },
  data: ()=> ({
       formUser :{
            password             : null,
            password_confirmation: null,
            token                : '',
        },
        errors : [],
        errorToken:false,
  }),
  mounted() {  
      this.formUser.token = this.$route.params.password_change; 
    },
  methods:  {
      updatePassword() {
          User.updatePassword( this.formUser)
          .then( response=>{
             console.log( response.data);
          })
          .catch ( error => {
             
             if (error.response.status ==422) {
                  this.errors = error.response.data.errors;
                  if ( this.errors.errorToken != 'null' ){
                    this.errorToken = true;
                  }
             }     
          })

      }
  },
};
</script>
