<template>
  <div
      class="absolute z-20 centrar px-20 py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75"
    >
      <div class="relative px-10 py-8 bg-white ">
        <div>
          <h2 class="text-2xl font-semibold text-center">
            Detalle de visita
          </h2>
          <div class="flex justify-around mt-10 space-x-10">
            <div class="flex space-x-4">
              <p class="w-40">Fecha</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosVisita.fecha_visita | FechaLarga"
              />
            </div>
            <div class="flex space-x-4">
              <p class="w-40">Tipo de Visita</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosVisita.nom_tipo_visita"
              />
            </div>
          </div>
          <div class="flex justify-around mt-10 space-x-10">
            <div class="flex space-x-4">
              <p class="w-40">Persona de contacto</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosVisita.contacto"
              />
              
            </div>
            <div class="flex space-x-4">
              <p class="w-40">Próxima Visita</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
                :value="datosVisita.fecha_proxvisita | FechaLarga"
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
                :value="datosVisita.nommtvovisita"
              />
            </div>
            
          </div>
          
          <div class="flex justify-between mt-10 mx-9">
            <div class="mt-4">
              <h3>Resultado de esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="4"
                disabled
                :value="datosVisita.resultados"
              ></textarea>
            </div>
            <div class="mt-4">
              <h3>Siguiente paso  </h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="4"
                disabled
                :value="datosVisita.siguiente_paso"
              ></textarea>
            </div>
          </div>
          
          <div class="flex justify-end mx-10 mt-4">
            <button @click="detalleVisitaClose" class="px-4 py-1 border rounded">
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
   props: {
    datosVisita: {
        type: Object, default: () => ({}),
    }
  },


  methods: {
    detalleVisitaClose() {
      this.$emit('closeDetalleVisita')
    }
  },
}
</script>

<style scoped>
.centrar {
  position: absolute;
  width: 1200px;
  left: 50%;
  margin-left: -600px;
  top: 10;
}

</style>