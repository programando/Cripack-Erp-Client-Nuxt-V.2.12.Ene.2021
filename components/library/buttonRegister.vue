<template>
  <div>
    <button @click="toggleModal = !toggleModal">
      Aun no estoy registrado,<span class="font-semibold">¡Registrarme!</span>
    </button>
    <transition
      enter-active-class="duration-300 ease-out"
      enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      enter-to-class="translate-y-0 opacity-100 sm:scale-10"
      leave-active-class="duration-200 ease-in"
      leave-class="translate-y-0 opacity-100 sm:scale-100"
      leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
    >
      <div
        v-if="toggleModal"
        class="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="flex items-end justify-center min-h-screen px-4 text-center sm:block sm:p-0"
        >
          <div
            class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
            aria-hidden="true"
          ></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <transition
            enter-active-class="duration-300 ease-out"
            enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            enter-to-class="translate-y-0 opacity-100 sm:scale-10"
            leave-active-class="duration-200 ease-in"
            leave-class="translate-y-0 opacity-100 sm:scale-100"
            leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-if="toggleModal"
              class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div class="flex items-center justify-center ">
                <div
                  class="px-8 py-6 mt-6 md:py-8 md:px-24 lg:mt-0 opacity-90 fondo"
                >
                  <!-- label, titulo y descripcion -->
                  <div
                    class="flex justify-center text-4xl font-bold text-white"
                  >
                    <span
                      ><img class="h-24" src="/images/logoCripack.png" alt=""
                    /></span>
                  </div>
                  <div class="mt-4">
                    <!-- inputText -->
                    <div class="grid items-center lg:grid-cols-3">
                      <label class="pr-10 text-white">ID/NIT:</label>
                      <div class="w-full col-span-2">
                        <InputBasic
                          type="text"
                          text="Ingrese Nit o cédula"
                          width="w-full"
                        />
                      </div>
                    </div>

                    <!-- inputPassword -->
                    <div class="grid items-center lg:grid-cols-3">
                      <label class="pr-10 text-white">Nombre Empresa:</label>
                      <div class="w-full col-span-2">
                        <InputBasic
                          type="text"
                          text="Nombre de la Empresa"
                          width="w-full"
                        />
                      </div>
                    </div>
                    <div class="grid items-center lg:grid-cols-3">
                      <label class="pr-10 text-white">Email:</label>
                      <div class="w-full col-span-2">
                        <InputBasic
                          type="text"
                          text="Correo electrónico"
                          width="w-full"
                        />
                      </div>
                    </div>
                    <div class="grid items-center lg:grid-cols-3">
                      <label class="pr-10 text-white">Contraseña:</label>
                      <div class="w-full col-span-2">
                        <InputBasic
                          type="password"
                          text="contraseña"
                          width="w-full"
                        />
                      </div>
                    </div>
                    <div class="grid items-center lg:grid-cols-3">
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

                  <div
                    class="flex justify-center mt-8 mb-2 text-lg font-semibold"
                  >
                    <ButtonLoad
                      class="hover:bg-white hover:text-black"
                      text="Registrar Datos"
                      to="/dashboard/"
                      variant="success"
                    />
                  </div>
                  <div 
                    @click="toggleModal = false"
                    class="flex items-center justify-center cursor-pointer">
                    <h3>Ya estoy registrado, <span>¡Ingresar!</span></h3>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ButtonRegister",
  data() {
    return {
      toggleModal: false
    };
  }
};
</script>

<style></style>
