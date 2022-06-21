<template>
  <div
      class="absolute z-20 flex items-center justify-center w-full h-screen  py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative px-10 py-2 bg-white border ">
        <div class="w-full">
          <h2 class="text-2xl font-semibold text-center">
            Cartera Clientes
          </h2>
          <button @click="carteraClienteClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>
          <div class="w-full">
            <table class="w-full border-t">
                <thead class="w-full border ">
                  <tr class="w-full bg-white text-azul ">
                    <th class="w-28 md:w-32 text-xs lg:text-base border px-2 py-1">Fecha </th>
                    <th class="w-16 md:w-20 text-xs lg:text-base border px-2 py-1">Tipo</th>
                    <th class="w-20 md:w-24 text-xs lg:text-base border px-2 py-1">Documento </th>
                    <th class="w-16 md:w-20 text-xs lg:text-base border px-2 py-1">Plazo</th>
                    <th class="w-16 md:w-20 text-xs lg:text-base border px-2 py-1">Días</th>
                    <th class="w-24 md:w-28 text-xs lg:text-base border px-2 py-1">Vr.Cartera</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="">
                    <td class="w-28 px-4 py-1 text-xs lg:text-base border text-azul">24/08/2021</td>
                    <td class="w-16 px-4 py-1 text-xs lg:text-base text-left border">FE</td>
                    <td class="w-20 px-4 py-1 text-xs lg:text-base text-left border">004535</td>
                    <td class="w-16 px-4 py-1 text-xs lg:text-base text-left border">01</td>
                    <td class="w-16 px-4 py-1 text-xs lg:text-base text-left border">292</td>
                    <td class="w-24 px-4 py-1 text-xs lg:text-base text-left border">450,177</td>
                  </tr>
                </tbody>
              </table>
              <div class="">
                <div class="flex justify-end space-x-20 border py-1 pr-4">
                  <p class="text-azul font-semibold">Cartera</p>
                  <p class="text-azul font-semibold">Vencido</p>
                </div>
                <div class="flex justify-end space-x-12 border py-1 pr-4">
                  <p>Totales</p>
                  <p class="text-azul font-semibold">17,820,007</p>
                  <p class="text-azul font-semibold">13,750,586</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import  Terceros from "@/models/Terceros";

export default {

  name: 'CarteraCliente',


  mounted() {
    Terceros.carteraPorCliente('811003895')
    .then( response => {
        console.log ( response.data);
    })
  },

  methods: {
    carteraClienteClose() {
          this.$emit('closeCarteraCliente')
        },
  },
}
</script>
<style>
  
</style>