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
          <div class="px-8 py-6 mt-6 md:py-8 md:px-24 lg:mt-0 ">
            <!-- label, titulo y descripcion -->
            <div class="flex justify-center text-4xl font-bold text-white">
              <span><img class="h-24" src="/images/logo.png" alt=""/></span>
            </div>
        <form @submit.prevent="">
            <div class="mt-4">
              <!-- inputText -->
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white" v-t="'RegisterForm.IdentifyNumber'"></label>
                <div class="w-full col-span-2">
                  <InputBasic
                      @keyup.enter.prevent = 'getDatosContactos'
                      colorError   = "white"
                      text         = "Nit o cédula"
                      type         = "text"
                      v-model      = "formData.identificacion"
                      width        = "w-full"
                    :errors        = "errors.idtercero"
                  />
                </div>
              </div>

              
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white" v-t="'RegisterForm.CompanyName'"></label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="text"
                    width="w-full"
                    disabled="disabled"
                    v-model="nomEmpresa"
                  />
                </div>
              </div>
              
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white" v-t="'RegisterForm.Email'"></label>
                
                <div class="w-full col-span-2">
                  <v-select 
                        class   = "style-chooser"
                        label   = "email"
                        v-model = "emailSelected"
                      :options  = "emailSelectOptions"
                      :reduce   = "emails => emails.email"
                      >
                      </v-select>
                </div>

              </div>

              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white" v-t="'RegisterForm.Password'" ></label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="password"
                    width="w-full"
                    v-model="formData.password"
                    :errors="errors.password"
                    colorError="white"
                  />
                </div>
              </div>

               <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white" v-t="'RegisterForm.PasswordConfirmation'"> </label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="password"
                    width="w-full"
                    v-model="formData.password_confirmation"
                  />
                </div>
              </div>

            </div>


</form>

            <div class="flex justify-center mt-8 mb-2 text-lg font-semibold">
             <BtnCallToAction
                  @click.prevent="grabarRegistro"
                  size="small"
                  variant="success"
                  variant-type="normal"
                  colorIcon="white"
                  :showBtnAnimation="showBtnAnimation"
                >
            {{ $t('RegisterForm.BtnRegisterCaption')}}
          </BtnCallToAction>
            </div>

            
            <nuxt-link to="/"  class="flex items-center justify-center text-white cursor-pointer" >
              <h3 v-t="'RegisterForm.RegisterOk'"></h3>
            </nuxt-link>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import InputBasic         from "@/components/htmlControls/inputBasic";
import Messages           from "@/mixins/sweetalert2";
import User               from   "@/models/User";
import vSelect from 'vue-select'

export default {
      name: "RegisterForm",
      layout: 'blank-layout',
      components: { BtnCallToAction,   InputBasic,vSelect  },
      mixins: [Messages],
      data: ()=> ( {
          formData : {
                email                : '',
                identificacion       : '',
                idtercero            : '',
                password             : '',
                password_confirmation: '',
          }, 
          nomEmpresa :'',
          errors: [],
          showBtnAnimation:false,
          emailSelectOptions: [],
          emailSelected: '',
      }),

      methods: {
          getDatosContactos () {
               this.errors='';
               User.getDataToRegister ( this.formData  )
              .then ( response => {
                   this.formData.idtercero = response.data[0].idtercero;
                   this.nomEmpresa         = response.data[0].nomtercero;
                   this.emailSelectOptions = response.data;
              })
              .catch( error => {
                  this.errors = error.response.data.errors;
              });
          },

          grabarRegistro () {
              this.showBtnAnimation = true;
              this.formData.email   = this.emailSelected;
              User.registroUsuarioWeb ( this.formData)
              .then ( ()=> {
                    this.$router.push('/');
                    this.Message(this.$t('RegisterForm.FinishOkTitle') ,this.$t('RegisterForm.FinishOkBody') ,'success', this.$t('App.CloseWindow') );
                    this.showBtnAnimation = false;  
              })
              .catch ( error => {
                  this.errors = error.response.data.errors;
                  this.showBtnAnimation = false;
              })
          },
      }
};
</script>

<style>
  .style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: white;
    border: none;
    color: #394066;
    text-transform: lowercase;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
</style>
