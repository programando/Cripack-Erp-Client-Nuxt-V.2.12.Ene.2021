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
            <p class="text-white">Enviaremos un correo electrónico a la cuenta registrada en nuestro sistema</p> 
             <p class="flex justify-center text-white"> con las instrucciones para que modifique los datos de acceso</p>
            <div class="mt-4">
              <!-- inputText -->
              <div class="py-2 mx-20 mt-1">
                
                <div class="items-center ">
                  <InputBasic
                      @keyup     = "clearErrors"
                      colorError = "white"
                      icon       = "true"
                      text       = "Cuenta de Correo electronico o email..."
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
                variant-type="normal">  Enviar correo
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
  name: 'passwordChange',
  components: { InputBasic, BtnCallToAction },
   mixins: [Messages],
  data :()=>({
        errors:[],
        form:{ email:''},
  }),

  methods: {
      resetPassword() {
          User.resetPassword ( this.form)
          .then( () =>{     
              this.Message('Proceso finalizado! En breves segundos recibirás un correo electrónico con las instrucciones para cambiar las credenciales de acceso a nuestro sistema. El token de acceso para cambio de contraseña (incluido en el correo) , tendrá una duración de 15 minutos. No olvides revisar tu bandeja de span en caso de que sea la primera vez que realizas este proceso','success', 'Cerrar mensaje' );
              this.$router.push('/');
          }).catch( error => {
              if (error.response.status ==422) {
                this.errors = error.response.data.errors;
              }
          })
      },
      clearErrors() {
          this.errors = [];
      },
  },  
}
</script>
