<template>
  <div
    class="flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
    style="background-image: url('/images/background.jpg')"
  >
    <div
      class="px-8 py-2 mt-6 bg-azulBackGroundForm md:py-8 md:px-10 lg:mt-0 opacity-90"
    >
      <!-- label, titulo y descripcion -->
      <div class="flex items-center justify-center ">
        <div class="px-8 py-6 mt-6 md:py-2 md:px-10 lg:mt-0 ">
          <!-- label, titulo y descripcion -->
          <div class="flex justify-center text-4xl font-bold text-white">
            <span><img class="h-24" src="/images/logo.png" alt=""/></span>
          </div>
          <p class="text-center text-white w-96">
            Por favor registra los nuevos datos de la contraseña con la que ingresastes a nuestro sistema
          </p>
          
          <div class="mt-4">
            <PasswordMeter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PasswordMeter from '@/components/htmlControls/passwordMeter'
export default {
  components: {
    PasswordMeter
  }
};
</script>

<style></style>
