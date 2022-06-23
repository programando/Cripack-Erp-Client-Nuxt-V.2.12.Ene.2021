<template>
  <div
      class="absolute z-20 flex items-center justify-center w-full h-screen  py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative px-10 py-2 bg-white border  h-10/12 ">
        <div class="w-full">
          <h2 class="text-2xl font-semibold text-center">
            Informe de cartera
          </h2>
          <p class="text-center text-xs mt-2">Últim. actualizacion: {{ fecha }}</p>
          <button @click="carteraClienteClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>
          <div class="w-full alto-table2">
            <table class="w-full border-t">
                <thead class="w-full border table-sticky">
                  <tr class="w-full bg-white text-azul ">
                    <th class="w-16 md:w-20 text-xs  border px-2 py-1">Tipo</th>
                    <th class="w-20 md:w-24 text-xs  border px-2 py-1">Documento </th>
                    <th class="w-28 md:w-32 text-xs  border px-2 py-1">Fecha </th>
                    <th class="w-16 md:w-20 text-xs  border px-2 py-1">Plazo</th>
                    <th class="w-28 md:w-32 text-xs  border px-2 py-1">Vence </th>
                    <th class="w-8 md:w-20 text-xs  border px-2 py-1">Días</th>
                    <th class="w-24 md:w-28 text-xs  border px-2 py-1">Vr.Factura</th>
                  </tr>
                </thead>
                <tbody class="">
                  <tr v-for="factura in facturas" :key="factura.idregistro"  class="">
                    
                    <td class="w-16 px-4 py-1 text-xs text-left border">{{ factura.tp_doc }}</td>
                    <td class="w-20 px-4 py-1 text-xs text-right border">{{ factura.nro_doc   }}</td>
                    <td class="w-28 px-4 py-1 text-xs border text-azul">{{ factura.fcha_doc}}</td>
                    <td class="w-16 px-4 py-1 text-xs text-right border">{{ factura.plazo   }}</td>
                    <td class="w-28 px-4 py-1 text-xs border text-azul">{{ factura.fcha_vence}}</td>
                    <td v-if="factura.dias_vencida > 0" class="w-8 px-4 py-1 text-xs text-right border">{{ factura.dias_vencida   }}</td>
                    <td v-else class="w-16 px-4 py-1 text-xs text-right border"></td>
                    <td class="w-24 px-4 py-1 text-xs text-right border">{{ factura.valor_cartera |NumeroEntero }}</td>
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
                  <p class="text-azul font-semibold">{{ cartera | NumeroEntero}}</p>
                  <p class="text-azul font-semibold">{{ vencido | NumeroEntero}}</p>
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
  data() {
    return {
      facturas: [],
      fecha: '',
      cartera: 0,
      vencido: 0
    }
  },

  mounted() {
    Terceros.carteraPorCliente(this.$cookies.get("User").identificacion)
    .then( response => {
        this.facturas = response.data
        this.fecha    = response.data[0].update_at
        this.setCartera()
        this.setVencido()  
    })

    
    
  },

  methods: {
    carteraClienteClose() {
          this.$emit('closeCarteraCliente')
        },
    
    setCartera() {
      this.facturas.map((e) => {
        this.cartera = this.cartera + e.valor_cartera
        return this.cartera

      })
    },

    setVencido() {
      this.facturas.map((e) => {
        if (e.dias_vencida >= 0) {
          this.vencido = this.vencido + e.valor_cartera
        }

        return this.vencido
      })
    }
  },

 

  
}
</script>
<style scoped>
  
.alto-table2 {
  height: 500px;
  overflow-y: scroll;
}

.table-sticky {
  position: sticky;
  top: 0;
  background: white;
  
  
}
</style>