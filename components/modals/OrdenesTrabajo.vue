<template>
  <div
      class="absolute left-0 z-20 flex items-center justify-center w-full h-screen  py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative mx-4 mt-4 table bg-white p-10 ancho">
        <h2 class="text-center text-azul mb-2 text-lg font-semibold">Órdenes de Trabajo</h2>
        <button @click="ordenesTrabajoClose">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>
        <div class="alto-table2">
          <table class="w-full border-t">
            <thead class="w-full border table-sticky">
              <tr class="w-full bg-white text-azul ">
                <th class="w-2/12 text-xs border table-sticky">Fecha </th>
                <th class="w-2/12 text-xs border table-sticky">Nro.OT</th>
                <th class="w-4/12 text-xs border table-sticky">Referencia</th>
                <th class="w-1/12 text-xs border table-sticky">Estilo</th>
                <th class="w-1/12 text-xs border table-sticky">Cab.</th>
                <th class="w-1/12 text-xs border table-sticky">Cant.</th>
                <th class="w-2/12 text-xs border table-sticky">Entrega</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Ot in OrdenesTrabajo" :key="Ot.idregistro_ot" class="">
                <td class="w-2/12 px-2 py-2 text-xs border text-azul">{{ Ot.fecha_registro | FechaCorta }}</td>
                <td class="w-2/12 px-4 py-2 text-xs text-left border">{{ Ot.numero_ot | NumeroEntero }}</td>
                <td class="w-4/12 px-4 py-2 text-upperxs text-left border  ">{{ Ot.referencia }}</td>
                <td class="w-1/12 px-4 py-2 text-upperxs text-left border  ">{{ Ot.nomestilotrabajo }}</td>
                <td class="w-1/12 px-4 py-2 text-xs text-left border">{{ Ot.cabida }}</td>
                <td class="w-1/12 px-4 py-2 text-xs text-left border">{{ Ot.cantidad }}</td>
                <td class="w-2/12 px-4 py-2 text-xs text-left border">{{ Ot.fecha_entrega_producc | FechaCorta }}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
</template>

<script>
    import TercerosClientes from "@/models/Terceros";

export default {
  name: 'OrdenesTrabajo',
   props: {
          Identificacion : String
  },

  data: () => ({
      OrdenesTrabajo:[]
  }),
  mounted() {
    TercerosClientes.clientesDashBoardOrdenesTrabajo ( this.Identificacion)
    .then ( response => {
       this.OrdenesTrabajo = response.data;
    })
  },
  methods: {
    ordenesTrabajoClose() {
      this.$emit('closeOrdenesTrabajo')
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
      min-width: 850px;
    }

    .alto-table2 {
      max-height: 400px;
      overflow-y: scroll;
    }

    .table-sticky {
    position: sticky;
    top: 0;
    background: white;

    }

</style>
