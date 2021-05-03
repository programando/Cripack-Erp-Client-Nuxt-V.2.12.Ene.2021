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

        <LabelTitle
          description="Sistema de información web - WebCross"
          align="center"
          color="white"
        >
        </LabelTitle>
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
                        label="Contraseña"
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

            <ButtonBasic
              text="entrar"
              to="dashboard"
              color="white"
              borderColor="primary"
            ></ButtonBasic>

        </div>


        <div class="flex justify-center text-sm text-white">
          <nuxt-link to="/users/registro">
            Aun no estoy registrado,<span class="font-semibold">¡Registrarme!</span>
          </nuxt-link>
        </div>

        <div class="flex justify-center mt-2 text-sm text-white">
          <nuxt-link to="/users/passwordChange">
            He olvidado mi contraseña,<span class="font-semibold"
              >¡deseo cambiarla!</span
            >
          </nuxt-link>
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
import LabelTitle      from "@/components/library/LabelTitle";
import InputBasic      from "@/components/htmlControls/inputBasic";
import ButtonBasic     from "@/components/library/ButtonBasic";
import BtnCallToAction from "@/components/htmlControls/buttonCallToActionLoading";
import ButtonRegister  from "@/components/library/buttonRegister";
import User            from "@/models/User";


export default {
  middleware:['guest'],
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
          email:'diseno4@graficasmodernas.com',
          password:'1234567',
      }
    };
  },
  mounted() {
      User.getCokie();
  },
  methods: {
        login() {
            this.$cookies.set('logueado', 'false')
            User.login ( this.formLogin)
            .then( response => {
              console.log( response.data[0]);
               this.$cookies.set('User', response.data[0])
               this.$store.dispatch('User/SetUser',response.data[0] );
               this.$router.push('/dashboard');
            })
            .catch ( error =>{
               //
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
