<template>
  <div class="font-latos">
    <div class="flex justify-between my-2">
      <h3 class="mt-4">
        Mostrando registros del 1 al 10 de un total de 150 registros
      </h3>
      <input class="px-2 border focus:outline-none" type="text" v-model="busqueda" placeholder="Buscar" />
    </div>

    <div class="w-full">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full ">
          <thead class="w-full">
            <tr class="text-sm text-gray-600 bg-gray-200 ">
              <th class="px-2 py-2 text-left ">#OT</th>
              <th class="px-2 py-2 text-left ">Solicitud</th>
              <th class="px-2 py-2 text-left ">Terminada</th>
              <th class="px-2 py-2 text-left ">Referencia</th>
              <th class="px-2 py-2 text-left ">Estilo</th>
              <th class="px-2 py-2 text-left ">Cantidad</th>
              <th class="px-2 py-2 text-left ">Cabidad</th>
              <th class="w-20 px-2 py-2 text-left ">Estado</th>
              <th class="px-2 py-2 text-left ">#Factura</th>
              <th class="px-2 py-2 text-left ">#Remisión</th>
              <th class="px-2 py-2 text-left ">#Guia</th>
              <th class="px-2 py-2 text-left ">Fecha Entrega</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr
              v-for="(producto, index) in busquedaFiltrada"
              :key="index"
              class="text-xs border-b border-gray-200 hover:bg-gray-100"
            >
              <td class="px-2 py-2 text-left ">
                {{ producto.ot }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.solicitud }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.terminada }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.referencia }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.estilo }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.cantidad }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.cabidad }}
              </td>
              <td class="w-1 px-2 py-2 text-left">
                {{ producto.estado }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.factura }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.remision }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.guia }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ producto.fecha }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      productos: [
        {
          ot: 70993,
          solicitud: "14-Apr-2021",
          terminada: "14-Apr-2021",
          referencia: "(P) TQ#252 PRODUCTORA DE PLAGUICIDAS COD 3449238",
          estilo: "PLANO PREALISTAMIEN - NUEVO",
          cantidad: 1,
          cabidad: 2,
          estado: "En Proceso",
          factura: "N/A",
          remision: "",
          guia: "",
          fecha: "17-Apr-2021"
        },
        {
          ot: 80993,
          solicitud: "14-Apr-2021",
          terminada: "14-Apr-2021",
          referencia: "PRODUCTORA DE PLAGUICIDAS COD 3449238",
          estilo: "TROPEL PREALISTAMIEN - NUEVO",
          cantidad: 1,
          cabidad: 2,
          estado: "En Proceso",
          factura: "N/A",
          remision: "",
          guia: "",
          fecha: "17-Apr-2021"
        },
        {
          ot: 90993,
          solicitud: "14-Apr-2021",
          terminada: "14-Apr-2021",
          referencia: "TQ#252 PRODUCTORA DE ",
          estilo: "LEVA",
          cantidad: 1,
          cabidad: 2,
          estado: "En Proceso",
          factura: "123133",
          remision: "212223",
          guia: "56657",
          fecha: "17-Apr-2021"
        }
      ],
      
      
    };
  },
  
  computed: {
    busquedaFiltrada(){
      return this.productos.filter(producto => {
        return producto.estilo.toLowerCase().includes(this.busqueda.toLowerCase())
      })
      
    }
  },

  
  
};
</script>

<style></style>
