<template>
  <div class="font-latos">
    <div class="flex justify-between my-2">
      
    </div>

    <div class="w-full">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full ">
          <thead class="w-full">
            <tr class="text-sm text-gray-600 bg-gray-200 ">
              <th class="px-2 py-2 text-left ">Fecha Terminada</th>
              <th class="px-2 py-2 text-left ">#OT</th>
              <th class="px-2 py-2 text-left ">Referencia</th>
              <th class="px-2 py-2 text-left ">Factura</th>
              <th class="px-2 py-2 text-left ">Vr Venta</th>
            </tr>
          </thead>
          <tbody class="text-gray-600">
            <tr
              v-for="(venta, index) in ventas"
              :key="index"
              class="text-xs border-b border-gray-200 hover:bg-gray-100"
            >
              <td class="px-2 py-2 text-left ">
                {{ venta.fecha }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.ot }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.referencia }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.factura }}
              </td>
              <td class="px-2 py-2 text-left ">
                {{ venta.valor }}
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
      
      ventas: [
        {
          fecha: '06-Apr-2021',
          ot: 80749,
          referencia: 'TC #1015 LABORATORIO AQUA COD 3460599',
          factura: '',
          valor: '$739.098'
        },
        {
          fecha: '06-Apr-2021',
          ot: 80764,
          referencia: 'TQ 134 BELLEZA EXPRESS COD 3414564',
          factura: '',
          valor: '$463.729'
        },
        {
          fecha: '06-Apr-2021',
          ot: 80749,
          referencia: 'TC #1015 LABORATORIO AQUA COD 3460599',
          factura: '',
          valor: '$739.098'
        },
        
      ]
    };
  },

  
};
</script>

<style></style>