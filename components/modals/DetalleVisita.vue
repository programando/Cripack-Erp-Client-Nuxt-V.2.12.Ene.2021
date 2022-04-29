<template>
  <div
      class="absolute z-20 flex items-center justify-center w-full h-screen px-20 py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative px-10 py-8 bg-white ">
        <div>
          <h2 class="text-2xl font-semibold text-center">
            Detalle de Visita
          </h2>
          <div class="flex justify-around mt-10 space-x-10">
            <div class="flex space-x-4">
              <p class="w-40">Fecha</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="flex space-x-4">
              <p class="w-40">Tipo de Visita</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
          </div>
          <div class="flex justify-around mt-10 space-x-10">
            <div class="flex space-x-4">
              <p class="w-40">Persona Contacto</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="flex space-x-4">
              <p class="w-40">Próxima Visita</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
          </div>
          <div class="flex mt-10 space-x-10">
            <div class="flex space-x-4">
              <p class="w-40">Motivo Visita</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            
          </div>
          
          <div class="flex justify-between mt-10 mx-9">
            <div class="mt-4">
              <h3>Resultado de esta visita(visita anterior)</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div class="mt-4">
              <h3>Siguiente paso (visita anterior)</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="5"
                disabled
              ></textarea>
            </div>
          </div>
          
          <div class="flex justify-end mx-10 mt-4">
            <button @click="detalleVisitaClose" class="px-4 py-2 border rounded">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetalleVisita',
  methods: {
    detalleVisitaClose() {
      this.$emit('closeDetalleVisita')
    }
  },
}
</script>

<style>

</style>