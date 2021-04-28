<template>
  <div class="font-rale">
    <div
      class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
      style="background-image: url('/images/background.jpg')"
    >
      <div class="px-8 py-6 mt-6 md:py-8 md:px-10 lg:mt-0 opacity-90 fondo">
        <!-- label, titulo y descripcion -->
        <div class="flex justify-center text-4xl font-bold text-white">
          <span><img class="h-24" src="/images/logo.png" alt=""/></span>
        </div>

        <LabelTitle
          description="Ingrese sus datos para ingresar a nuestro sistema"
          align="center"
          color="white"
        >
        </LabelTitle>
        <div class="mt-4">
          <!-- inputText -->
          <div class="grid items-center lg:grid-cols-3">
            <label class="pr-10 text-white">Email:</label>
            <div class="w-full col-span-2">
                <InputBasic type= "email"
                        placeholder="Dirección electrónica (Email)"
                        v-model="formLogin.email" 
                        :errors="errors.email"
                        @keyup="clearErrors">
                 </InputBasic>
            </div>
          </div>
          <!-- inputPassword -->
          <div class="grid items-center lg:grid-cols-3">
            <label class="pr-10 text-white">Contraseña:</label>
            <div class="w-full col-span-2">
                <InputBasic type= "password"
                        class="mt-6"
                        placeholder="Password o contraseña"
                        v-model="formLogin.password" 
                        @keyup="clearErrors"
                > </InputBasic>
            </div>
          </div>
        </div>


        <div class="flex justify-center mt-8 mb-2 text-lg font-semibold">
           <BtnCallToAction 
                @click.prevent="login" 
                size="small" 
                ref="ButtonLoading" 
                variant="success"
                variant-type="normal">  Ingresar
            </BtnCallToAction>
        </div>


        <div class="flex justify-center text-sm text-white">
          <ButtonRegister />
        </div>

        <div class="flex justify-center mt-2 text-sm text-white">
          <button>
            He olvidado mi contraseña,<span class="font-semibold"
              >¡deseo cambiarla!</span
            >
          </button>
        </div>
        <div>
          <div class="flex justify-center mt-2 text-sm text-white">
            <button>Sistema de transcripción Braille</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LabelTitle from "@/components/library/LabelTitle";
import InputBasic from "@/components/htmlControls/inputBasic";
import ButtonBasic from "@/components/library/ButtonBasic";
import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import ButtonRegister from "@/components/library/buttonRegister";

export default {
  components: {
    LabelTitle,
    InputBasic,
    ButtonBasic,
    BtnCallToAction,
    ButtonRegister
  },
  data() {
    return {
      modal: true,
      errors: [ ],
      buttonIsDisabled: false,
      formLogin : {
          email:'jhonjamesmg@hotmail.com',
          password:'cripack',
      }
    };
  },
  mounted() {
     this.$axios.$get('/sanctum/csrf-cookie');
  },
  methods: {
     async login() {
       alert('login');
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.form.email,
          password: this.form.password,
        },
      })
       .then (()=> {          
              this.$router.push('/dashboard')
             })
            .catch( error => {
              if ( error.response.status == 422) {
                this.errors = error.response.data.errors;  
              }
            });

    },

         clearErrors() {
          this.errors = [];
          this.buttonIsDisabled = false;
      },
  },
  
};


</script>
<style>
.fondo {
  background: #16182f;
}
</style>
