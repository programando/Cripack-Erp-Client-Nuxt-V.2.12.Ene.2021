<template>
  <div class="font-rale">
    <div
      class="z-30 flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div
        class="z-30 px-8 py-6 bg-azulBackGroundForm md:py-8 md:px-10 lg:mt-0"
      >
        <!-- label, titulo y descripcion -->
        <div class="flex justify-center text-4xl font-bold text-white">
          <span><img class="h-24" src="/images/logo.png" alt=""/></span>
        </div>

        <div class="flex justify-center text-white">
          <p class="mt-4 text-sm text-center lg:text-base">
            {{ $t('LoginForm.Title') }}
          </p>
        </div>

        <div class="mt-4 ">
          <!-- inputText -->
          <div class="flex items-center justify-center">
            <!-- <label class="w-32 text-white">Email:</label> -->
            <div class="w-full">
              <InputBasic
                type="email"
                placeholder="Dirección electrónica (Email)"
                v-model="formLogin.email"
                :errors="errors.email"
                colorError="white"
                @keyup="clearErrors"
                label="Email" >
              </InputBasic>
            </div>
          </div>
          <!-- inputPassword -->
          <div class="flex items-center justify-center mt-6">
            <div class="w-full">
              <InputBasic
                type="password"
                class=""
                placeholder="Password o contraseña"
                v-model="formLogin.password"
                @keyup="clearErrors"
                label="Password"
              >
              </InputBasic>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-8 mb-8 text-lg font-semibold">
          
          <BtnCallToAction
            @click.prevent="login"
            size="small"
            ref="ButtonLoading"
            variant="success"
            variant-type="normal"
          >
            {{ $t('LoginForm.BtnLoginCaption')}}
          </BtnCallToAction>


          <BtnCallToAction
            @click.prevent="loginAlterno"
            size="small"
            ref="ButtonLoading"
            variant="success"
            variant-type="normal"
          >
            Entrar 
            <span v-if="showBtnAnimate">
               <svg class="h-6 ml-2 text-white cursor-not-allowed svg-icon animate-spin" viewBox="0 0 20 20">
				              <path d="M12.319,5.792L8.836,2.328C8.589,2.08,8.269,2.295,8.269,2.573v1.534C8.115,4.091,7.937,4.084,7.783,4.084c-2.592,0-4.7,2.097-4.7,4.676c0,1.749,0.968,3.337,2.528,4.146c0.352,0.194,0.651-0.257,0.424-0.529c-0.415-0.492-0.643-1.118-0.643-1.762c0-1.514,1.261-2.747,2.787-2.747c0.029,0,0.06,0,0.09,0.002v1.632c0,0.335,0.378,0.435,0.568,0.245l3.483-3.464C12.455,6.147,12.455,5.928,12.319,5.792 M8.938,8.67V7.554c0-0.411-0.528-0.377-0.781-0.377c-1.906,0-3.457,1.542-3.457,3.438c0,0.271,0.033,0.542,0.097,0.805C4.149,10.7,3.775,9.762,3.775,8.76c0-2.197,1.798-3.985,4.008-3.985c0.251,0,0.501,0.023,0.744,0.069c0.212,0.039,0.412-0.124,0.412-0.34v-1.1l2.646,2.633L8.938,8.67z M14.389,7.107c-0.34-0.18-0.662,0.244-0.424,0.529c0.416,0.493,0.644,1.118,0.644,1.762c0,1.515-1.272,2.747-2.798,2.747c-0.029,0-0.061,0-0.089-0.002v-1.631c0-0.354-0.382-0.419-0.558-0.246l-3.482,3.465c-0.136,0.136-0.136,0.355,0,0.49l3.482,3.465c0.189,0.186,0.568,0.096,0.568-0.245v-1.533c0.153,0.016,0.331,0.022,0.484,0.022c2.592,0,4.7-2.098,4.7-4.677C16.917,9.506,15.948,7.917,14.389,7.107 M12.217,15.238c-0.251,0-0.501-0.022-0.743-0.069c-0.212-0.039-0.411,0.125-0.411,0.341v1.101l-2.646-2.634l2.646-2.633v1.116c0,0.174,0.126,0.318,0.295,0.343c0.158,0.024,0.318,0.034,0.486,0.034c1.905,0,3.456-1.542,3.456-3.438c0-0.271-0.032-0.541-0.097-0.804c0.648,0.719,1.022,1.659,1.022,2.66C16.226,13.451,14.428,15.238,12.217,15.238"></path>
			         </svg>
            </span>
            
          </BtnCallToAction>
        </div>

        <div class="flex justify-center text-sm text-white">
          <nuxt-link to="/users/registro">
            <!-- Aun no estoy registrado,<span class="font-semibold">¡Registrarme!</span> -->
              <p v-t="'LoginForm.Register'"></p>    
          </nuxt-link>
        </div>

        <div class="flex justify-center mt-2 text-sm text-white">
          <nuxt-link to="/users/password-change">
            <p v-t="'LoginForm.RememberPassWord'"></p> 
          </nuxt-link>
        </div>
        
      </div>
      <div @click="idioma = !idioma" class="flex items-end justify-end h-96 mr">
        <div class="">
          <div
            v-if="idioma"
            class="z-10 transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-5 hover:scale-110"
          >
            <img
              @click="changeLanguage('es')"
              class="h-7"
              src="/images/colombia.svg"
              alt=""
            />
          </div>

          <div
            v-else
            class="z-10 transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-5 hover:scale-110"
          >
            <img
              @click="changeLanguage('en')"
              class="h-7"
              src="/images/united-states.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelTitle from "@/components/library/LabelTitle";
import InputBasic from "@/components/htmlControls/inputBasic";

import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import ButtonRegister from "@/components/library/buttonRegister";
import User from "@/models/User";

export default {
  name: "LoginForm",
  layout: "blank-layout",
  middleware: ["guest"],
  components: { LabelTitle, InputBasic, BtnCallToAction, ButtonRegister },
  data() {
    return {
      idioma: false,
      modal: true,
      errors: [],
      buttonIsDisabled: false,
      showBtnAnimate:false,
      formLogin: {
        email: process.env.EMAIL_TEMP,
        password: process.env.EMAIL_PASS_TEMP
      }
    };
  },
  mounted() {
    User.getCokie();
  },
  computed: {
    loginTitle() {
      return "mensaje";
    }
  },
  methods: {
    loginAlterno() {
      this.$cookies.set("logueado", "true");
      let $data = {
        logueado: 1,
        idtercero: 299,
        email: process.env.EMAIL_TEMP,
        uso_web_empresa: 0,
        nomtercero: "EMPRESA DE PRUEBA",
        identificacion: "123456         ",
        nombre_usuario: "",
        proveedor: 0,
        cliente: 1,
        dias_sin_compra: 35
      };

      this.$cookies.set("User", $data);
      this.$store.dispatch("User/SetUser", $data);
      //this.$router.push("/customers/ots-historial");
      this.showBtnAnimate = true;
    },
    login() {
      this.$cookies.set("logueado", "false");
      User.login(this.formLogin)
        .then(response => {
          this.$cookies.set("User", response.data[0]);
          this.$store.dispatch("User/SetUser", response.data[0]);
          this.$router.push("/customers/ots-historial");
          this.$cookies.set("logueado", "true");
        })
        .catch(error => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
          }
        });
    },

    clearErrors() {
      this.errors = [];
      this.buttonIsDisabled = false;
    },
    changeLanguage(lang) {
      // Change the i18n context object's locale
      // This makes it so the correct locale file is used
      this.$i18n.locale = lang;
    }
  }
};
</script>
<style scoped>
.mr {
  margin-top: 67px;
  margin-left: -30px;
}

@media screen and (min-width: 768px){
  .mr {
  margin-top: 80px;
  margin-left: -30px;
}

}

@media screen and (min-width: 1200px){
  .mr {
  margin-top: 85px;
  margin-left: -25px;
}

}

</style>
