<template>
  <div >
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
                label="Email" 
                colorLabel="white"
                >
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
                colorLabel="white"
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
            colorIcon="white"
            :showBtnAnimation="showBtnAnimation"
          >
            {{ $t('LoginForm.BtnLoginCaption')}}
          </BtnCallToAction>
        </div>

        <div class="flex justify-center text-sm text-white">
          <nuxt-link to="/usuarios/registro">
            <!-- Aun no estoy registrado,<span class="font-semibold">¡Registrarme!</span> -->
              <p v-t="'LoginForm.Register'"></p>    
          </nuxt-link>
        </div>

        <div class="flex justify-center mt-2 text-sm text-white">
          <nuxt-link to="/usuarios/password-change">
            <p v-t="'LoginForm.RememberPassWord'"></p> 
          </nuxt-link>
        </div>
        
      </div>
        <div class="flex items-end justify-end h-96 mr"> 
            <LanguajeChange
              tipoTransicion='derecha'>
            </LanguajeChange>
        </div>
    </div>
  </div>
</template>

<script>
import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import ButtonRegister     from "@/components/library/buttonRegister";
import InputBasic         from "@/components/htmlControls/inputBasic";
import LabelTitle         from "@/components/library/LabelTitle";
import LanguajeChange     from "@/components/htmlControls/languajeChange";
import User               from "@/models/User";

export default {
  name: "LoginForm",
  layout: "blank-layout",
  middleware: ["guest"],
  components: { LabelTitle, InputBasic, BtnCallToAction, ButtonRegister, LanguajeChange },
  data() {
    return {
      errors          : [],
      idioma          : false,
      modal           : true,
      showBtnAnimation: false,
      formLogin: {
        email   : process.env.EMAIL_TEMP,
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
  
    login() {
      this.$cookies.set("logueado", "false");
      this.showBtnAnimation = true;
      User.login(this.formLogin)
        .then(response => {
          this.$cookies.set("User", response.data[0]);
          this.$store.dispatch("User/SetUser", response.data[0]);
          this.$router.push("/clientes/ots-historial");
          this.$cookies.set("logueado", "true");
        })
        .catch(error => {
          if (error.response.status == 422) {
            this.errors = error.response.data.errors;
            this.showBtnAnimation = false;
          }
        });
    },

    clearErrors() {
      this.errors = [];
    },
 
  }
};
</script>
<style scoped>
.mr {
  margin-top: 53px;
  margin-left: -25px;
}

@media screen and (min-width: 768px){
  .mr {
  margin-top: 68px;
  margin-left: -25px;
}

}

@media screen and (min-width: 1200px){
  .mr {
  margin-top: 72px;
  margin-left: -25px;
}

}

</style>
