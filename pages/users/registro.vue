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
                <label class="pr-10 text-white">CC/NIT:</label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="text"
                    text="Ingrese Nit o cédula"
                    width="w-full"
                  />
                </div>
              </div>

              <!-- inputPassword -->
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white">Nombre Empresa:</label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="text"
                    text="Nombre de la Empresa"
                    width="w-full"
                  />
                </div>
              </div>
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white">Email:</label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="text"
                    text="Correo electrónico"
                    width="w-full"
                  />
                </div>
              </div>
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white">Contraseña:</label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="password"
                    text="contraseña"
                    width="w-full"
                  />
                </div>
              </div>
              <div class="grid items-center mt-1 lg:grid-cols-3">
                <label class="pr-10 text-white">Repite Contraseña:</label>
                <div class="w-full col-span-2">
                  <InputBasic
                    type="password"
                    text="contraseña"
                    width="w-full"
                  />
                </div>
              </div>
            </div>

            <div class="flex justify-center mt-8 mb-2 text-lg font-semibold">
              <ButtonLoad
                class="hover:bg-white hover:text-black"
                text="Registrar Datos"
                to="/dashboard/"
                variant="success"
              />
            </div>
            <nuxt-link to="/"
              class="flex items-center justify-center text-white cursor-pointer"
            >
              <h3>Ya estoy registrado, <span>¡Ingresar!</span></h3>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputBasic from "@/components/htmlControls/inputBasic";
import ButtonLoad from "@/components/library/ButtonLoad";
export default {
  layout: 'blank-layout',
  name: "registro",
  components: {
    InputBasic,
    ButtonLoad
  }
};
</script>

<style></style>
