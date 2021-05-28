<template>
  <div class="font-latos">
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
            <div class="mt-4">
              <!-- inputText -->
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white" v-t="'RegisterForm.IdentifyNumber'"></label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="text"
                    text="Nit o cédula"
                    width="w-full"
                    @blur='getDatosContactos'
                    @keyup.enter='getDatosContactos'
                    v-model ="formData.identificacion"
                    :errors="errors.identificacion"
                    colorError="white"
                  />
                </div>
              </div>

              <!-- inputPassword -->
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
                  
                  <InputBasic
                    type="text"
                    width="w-full"
                  />

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
import InputBasic from "@/components/htmlControls/inputBasic";

import User from   "@/models/User";

export default {
      name: "RegisterForm",
      layout: 'blank-layout',
      components: { BtnCallToAction,   InputBasic  },
      data: ()=> ( {
          formData : {
                email                : '',
                identificacion       : '8903236921',
                idtercero            : 0,
                password             : '',
                password_confirmation: '',
          }, 
          nomEmpresa :'',
          errors: [],
          showBtnAnimation:false,
      }),

      methods: {
          getDatosContactos () {
               this.errors='';
               User.getDataToRegister ( this.formData  )
              .then ( response => {
                   this.formData.idtercero = response.data[0].idtercero;
                   this.nomEmpresa         = response.data[0].nomtercero;
              })
              .catch( error => {
                  this.errors = error.response.data.errors;
              });
          },

          grabarRegistro () {
              this.showBtnAnimation = true;
          },
      }
};
</script>

<style></style>
