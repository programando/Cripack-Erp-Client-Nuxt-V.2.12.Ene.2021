<template>
  <div class="font-rale">
    <div
      class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div class="px-8 py-6 bg-azulBackGroundForm md:py-8 md:px-10 lg:mt-0 opacity-90">
        <!-- label, titulo y descripcion -->
        <div class="flex justify-center text-4xl font-bold text-white">
          <span><img class="h-24" src="/images/logo.png" alt=""/></span>
        </div>

     


      <div class="flex justify-center text-white">
        <p class="mt-4 text-sm text-center lg:text-base" v-t="'Login_Title'"> </p>
      </div>

        <div class="mt-4 ">
          <!-- inputText -->
          <div class="flex items-center justify-center">
            <!-- <label class="w-32 text-white">Email:</label> -->
            <div class="w-full">
                <InputBasic type= "email"
                        placeholder="Dirección electrónica (Email)"
                        v-model="formLogin.email" 
                        :errors="errors.email"
                        colorError="white"
                        @keyup="clearErrors"
                        label="Email"
                        >          
                 </InputBasic>
            </div>
          </div>
          <!-- inputPassword -->
          <div class="flex items-center justify-center mt-6">
            <div class="w-full">
                <InputBasic type= "password"
                        class=""
                        placeholder="Password o contraseña"
                        v-model="formLogin.password" 
                        @keyup="clearErrors"
                        label="Password"
                > </InputBasic>
            </div>
          </div>
        </div>


        <div class="flex justify-center mt-8 mb-8 text-lg font-semibold">
           <BtnCallToAction 
                @click.prevent="login" 
                size="small" 
                ref="ButtonLoading" 
                variant="success"
                variant-type="normal">  Ingresar
            </BtnCallToAction>

           <BtnCallToAction 
                @click.prevent="loginAlterno" 
                size="small" 
                ref="ButtonLoading" 
                variant="success"
                variant-type="normal">  Entrar
            </BtnCallToAction>

        </div>


        <div class="flex justify-center text-sm text-white">
          <nuxt-link to="/users/registro">
             <!-- Aun no estoy registrado,<span class="font-semibold">¡Registrarme!</span> -->
             <p v-t="'Login_Register'"></p> 
             
          </nuxt-link>
        </div>

        <div class="flex justify-center mt-2 text-sm text-white">
          <nuxt-link to="/users/password-change">
            <p v-t="'Login_RememberPassword'"></p> 
          </nuxt-link>
          <nuxt-link to="/users/_password-change">
            cambiar contraseña
            >
          </nuxt-link>
        </div>
        <div>
<!--           <div class="flex justify-center mt-2 text-sm text-white">
            <button>Sistema de transcripción Braille</button>
          </div> -->
        </div>

  
          
      </div>
    </div>
  </div>
</template>

<script>
import LabelTitle      from "@/components/library/LabelTitle";
import InputBasic      from "@/components/htmlControls/inputBasic";

import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import ButtonRegister  from "@/components/library/buttonRegister";
import User            from "@/models/User";


export default {
  layout:'index',
  middleware:['guest'],
  components: {    LabelTitle,    InputBasic,     BtnCallToAction, ButtonRegister  },
  data() {
    return {
      modal: true,
      errors: [ ],
      buttonIsDisabled: false,
      formLogin : {
          email:process.env.EMAIL_TEMP,
          password:process.env.EMAIL_PASS_TEMP,
      }
    };
  },
  mounted() {
      User.getCokie();
  },
  computed: {
        loginTitle(){
            return 'mensaje';
        }
  },
  methods: {
        loginAlterno() {
            this.$cookies.set('logueado', 'true')
            let $data =   {
                        "logueado": 1,
                        "idtercero": 299,
                        "email": process.env.EMAIL_TEMP,
                        "uso_web_empresa": 0,
                        "nomtercero": "EMPRESA DE PRUEBA",
                        "identificacion": "123456         ",
                        "nombre_usuario": "",
                        "proveedor": 0,
                        "cliente": 1,
                        "dias_sin_compra": 35
                    };
                  
               this.$cookies.set('User',  $data )
               this.$store.dispatch('User/SetUser', $data );
               this.$router.push('/customers/ots-historial');

        },
        login() {
            this.$cookies.set('logueado', 'false')
            User.login ( this.formLogin)
            .then( response => {
               this.$cookies.set('User', response.data[0])
               this.$store.dispatch('User/SetUser',response.data[0] );
               this.$router.push('/customers/ots-historial');
               this.$cookies.set('logueado', 'true')
            })
            .catch ( error =>{
               if (error.response.status ==422) {
                  this.errors = error.response.data.errors;
                }  
            })
        },

         clearErrors() {
          this.errors = [];
          this.buttonIsDisabled = false;
      },
  },
  
};


</script>
