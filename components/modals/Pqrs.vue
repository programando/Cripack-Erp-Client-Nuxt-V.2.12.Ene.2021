<template>
  <div
      class="absolute left-0 z-20 flex items-center justify-center w-full h-screen  py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative mx-4 mt-4 table bg-white p-10 ancho">
        <button @click="pqrsClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>
        <h2 class="text-center text-azul mb-2 text-lg font-semibold">Pqr's</h2>
        <table class="w-full border-t">
          <thead class="w-full border ">
            <tr class="w-full bg-white text-azul ">
              <th class="w-1/12 text-xs border table-sticky">Fecha </th>
              <th class="w-1/12 text-xs border table-sticky">Nro.OT</th>
              <th class="w-3/12 text-xs border table-sticky">Referencia</th>
              <th class="w-1/12 text-xs border table-sticky">Estilo</th>
              <th class="w-2/12 text-xs border table-sticky">Problema</th>
              <th class="w-2/12 text-xs border table-sticky">Causa</th>
              <th class="w-2/12 text-xs border table-sticky">Plan de Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td class="w-1/12 px-2 py-2 text-xs border text-azul"></td>
              <td class="w-1/12 px-4 py-2 text-xs text-left border"></td>
              <td class="w-3/12 px-4 py-2 text-xs text-left border"></td>
              <td class="w-1/12 px-4 py-2 text-xs text-left border"></td>
              <td class="w-2/12 text-xs text-left border">
                <textarea class="border focus:outline-none px-2" cols="14" rows="3"></textarea>
              </td>
              <td class="w-2/12 text-xs text-left border">
                <textarea class="border focus:outline-none px-2" cols="14" rows="3"></textarea>
              </td>
              <td class="w-2/12 text-xs text-left border">
                <textarea class="border focus:outline-none px-2" cols="14" rows="3"></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>


export default {
  name: 'pqrs',
   props: {


  },


  methods: {
    pqrsClose() {
      this.$emit('closePqrs')
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

.ancho {
  min-width: 900px;
}

</style>
