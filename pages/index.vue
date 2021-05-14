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
            :showBtnAnimation="showBtnAnimation"
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
            class="z-10 transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-7 hover:scale-110"
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
            class="z-10 transition duration-500 ease-in-out transform cursor-pointer hover:translate-x-7 hover:scale-110"
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
import BtnCallToAction    from "@/components/htmlControls/buttonCallToActionLoading";
import ButtonRegister     from "@/components/library/buttonRegister";
import InputBasic         from "@/components/htmlControls/inputBasic";
import LabelTitle         from "@/components/library/LabelTitle";
import User               from "@/models/User";

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
      showBtnAnimation:false,
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
      this.$router.push("/customers/ots-historial");
       
    },
    login() {
      this.$cookies.set("logueado", "false");
      this.showBtnAnimation = true;
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
            this.showBtnAnimation = false;
          }
        });
    },

    clearErrors() {
      this.errors = [];
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
