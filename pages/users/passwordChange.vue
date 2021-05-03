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
            <p class="text-white">Enviaremos un correo electronico a la cuenta registrada en nuestro sistema</p> 
             <p class="flex justify-center text-white"> las instrucciones para que cambie los datos de acceso</p>
            <div class="mt-4">
              <!-- inputText -->
              <div class="py-2 mx-20 mt-1">
                
                <div class="items-center ">
                  <InputBasic
                    type="text"
                    text="Cuenta de Correo electronico o email..."
                    width="w-full"
                    colorError="red"
                    icon="true"
                  />
                </div>
                
              </div>
            </div>

            <div class="flex justify-center mt-8 mb-2 font-semibold">
              <button class="px-4 py-2 text-white border rounded-md bg-azulClaro">Enviar Correo</button>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBasic from "@/components/htmlControls/inputBasic"
import ButtonLoad from "@/components/library/ButtonLoad";
export default {
  name: 'contraseña',
  components: {
    InputBasic,
    ButtonLoad
  }
}
</script>

<style>

</style>