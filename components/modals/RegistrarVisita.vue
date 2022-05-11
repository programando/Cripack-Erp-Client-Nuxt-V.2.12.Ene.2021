<template>
  <div
      class="absolute z-20 flex items-center justify-center w-full h-screen px-20 py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative px-10 py-2 bg-white border border-black">
        <div>
          <h2 class="text-2xl font-semibold text-center">
            Registro de visitas
          </h2>
          <button @click="registarVisitaClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>

          <div class="flex justify-center mt-4 space-x-10">
            <div class="">
              <p class="ml-10">Código</p>
              <div class="flex space-x-2">
                <input
                  class="w-32 px-4 border rounded-sm focus:outline-none"
                  type="text"
                />
              </div>
            </div>
            <div class="">
              <p>Nombre / Razón Social</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="">
              <p>Ciudad</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="">
              <p>Vendedor</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
          </div>
          <div class="flex ml-3">
            <div class="">
              <div class="flex mt-4 space-x-10">
                <div class="flex space-x-4">
                  <p class="w-36">Fecha de Visita</p>
                  <input class="-ml-4 bg-gray-100 width" type="date" name="" id="" />
                </div>
                <div class="flex space-x-10">
                  <p class="width">Persona que atendió</p>
                  <input
                    class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
              </div>
              <div class="flex mt-4 space-x-10">
                <div class="flex space-x-4">
                  <p class="w-36">Tipo de visita</p>
                  <select class="bg-gray-100 width" name="" id=""></select>
                </div>
                <div class="flex space-x-10">
                  <p class="width">Motivo de la visita</p>
                  <select class="bg-gray-100 width" name="" id=""></select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-4 mx-9">
            <div class="mt-4">
              <h3>Resultado de esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
              ></textarea>
            </div>
            <div class="mt-4">
              <h3>Resultado de esta (visita anterior)</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
                disabled
              ></textarea>
            </div>
          </div>
          <div class="flex justify-between space-x-20 mx-9">
            <div class="mt-4">
              <h3>Siguiente paso, en esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
              ></textarea>
            </div>
            <div class="mt-4">
              <h3>Siguiente paso (visita anterior)</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="3"
                disabled
              ></textarea>
            </div>
          </div>

          <div class="flex justify-end mx-10 mt-4">
           
           <button @click="registarVisitaClose()" class="px-4 py-1 mr-4 border rounded">
              Cerrar
            </button>         
 
            <button class="flex items-center space-x-2">
              <img class="w-6" src="/images/save.svg" alt="" />
              <p>Grabar registro de visita</p>
            </button>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'RegistarVisita',
         props: {
          datosCliente: {
              type: Object, default: () => ({}),
          }
        },
      methods: {
        registarVisitaClose() {
          this.$emit('closeRegistrarVisita')
        }
      },
    }
</script>

<style>

</style>