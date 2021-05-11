<template>
  <div class="py-24 mx-2 font-latos">
    <div class="flex justify-between my-2">
      <h3 class="mt-1 text-3xl">
        Estado Órdenes de Producción
      </h3>
      <div class="mt-2"></div>
      <div class="flex items-center">
        <div class="z-10 -mr-8">
          <font-awesome-icon class="" :icon="['fas', 'search']" />
        </div>

        <input
          class="px-10 py-2 border-2 focus:outline-none"
          type="text"
          v-model="busqueda"
          placeholder="Buscar por Nombre"
        />
      </div>
    </div>
    <div class="w-full text-left">
      <div class="bg-white rounded shadow-md ">
        <table class="w-full">
          <thead class="flex w-full margen">
            <tr class="flex w-full text-sm text-gray-600 bg-gray-200">
              <th class="w-1/12 px-2 py-2 text-center">#OT</th>
              <th class="w-3/12 px-2 py-2 text-center">Referencia</th>
              <th class="w-2/12 px-2 py-2 text-center">Estilo</th>
              <th class="w-1/12 px-2 py-2 text-center">Tipo</th>
              <th class="w-3/12 px-2 py-2 text-center"></th>
              <th class="w-2/12 px-2 py-2 text-center">Fecha Confirmada</th>
            </tr>
          </thead>
          <tbody
            class="flex flex-col w-full overflow-y-scroll text-xs text-gray-600 bg-white"
            style="height: 64vh;"
          >
            <tr
              v-for="registro in busquedaFiltrada"
              :key="registro.id"
              class="flex w-full text-xs bg-white border-b border-gray-200 hover:bg-gray-100 tr"
            >
              <td class="w-1/12 px-2 py-2 text-center ">
                {{ registro.ot }}
              </td>

              <td class="w-3/12 px-2 py-2 text-left ">
                {{ registro.referencia }}
              </td>
              <td class="w-2/12 px-2 py-2 text-center ">
                {{ registro.estilo }}
              </td>
              <td class="w-1/12 px-4 py-2 text-center ">
                {{ registro.tipo }}
              </td>
              <td class="flex w-3/12 py-2 text-xs text-center">
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 text-white bg-azul">CREATEOT</div>
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 bg-verde">TRZ</div>
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 bg-verde">CAL</div>
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 bg-amarillo">DBO</div>
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 bg-amarillo">ENCU</div>
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 text-white bg-azul">GRFP</div>
                <div class="flex items-center justify-center w-16 h-6 px-2 py-2 text-white bg-azul">ENCA</div>
              </td>
              <td class="w-2/12 px-2 py-2 text-right ">
                {{ registro.fecha }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-end mt-2">
      <div class="flex space-x-1">
        <p class="mr-2">Convenciones de color utilizadas en las OT's</p>
        <div class="flex items-center justify-center h-6 px-2 py-2 bg-verde">Finalizadas</div>
        <div class="flex items-center justify-center h-6 px-2 py-2 bg-amarillo">Iniciadas</div>
        <div class="flex items-center justify-center h-6 px-2 py-2 text-white bg-azul">Por Iniciar</div>
        <div class="flex items-center justify-center h-6 px-2 py-2 text-white bg-rojo">Suspendidas</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      busqueda: '',
      registros: [
        {
          id: 1,
          ot: 80982,
          referencia: "TQ #252 PRODUCTORA DE PLAGUICIDAS COD 3449238",
          estilo: "TROQUEL PLANO",
          tipo: "NUEVO",
          fecha: ""
        },
        {
          id: 2,
          ot: 80982,
          referencia: "TQ #252 PRODUCTORA DE PLAGUICIDAS COD 3449238",
          estilo: "PLANO PREALISTIAMEN",
          tipo: "NUEVO",
          fecha: ""
        }
      ]
    };
  },
  computed: {
    busquedaFiltrada() {
      return this.registros.filter(registro => {
        return registro.estilo
          .toLowerCase()
          .includes(this.busqueda.toLowerCase());
      });
    }
  }
};
</script>

<style>
.margen {
  padding-right: 16px;
}
</style>
