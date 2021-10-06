<template>
  <div>
    <table class="w-full ">
      <thead>
        <tr
          class="text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600"
        >
          <th class="w-40 px-4 py-3 ">Datos Basicos</th>
          <th class="w-40 px-4 py-3">Salario Promedio Operario</th>
          <th class="w-40 px-4 py-3">Valor Hora</th>
          <th class="w-40 px-4 py-3">Golpes Promedio Hora</th>
          <th class="w-40 px-4 py-3">Valor Promedio Golpe</th>
          <th class="w-40 px-4 py-3">Valor encauche($/cm)</th>
          <th class="w-40 px-4 py-3">Valor Contra-hendido($/cm)</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr class="text-gray-700">
          <td class="w-40 px-4 py-3 text-sm border "></td>
          <td class="w-40 px-4 py-3 border ">
            <div class="flex items-center text-sm">
              <input
                class="px-2 py-1 border focus:outline-none"
                type="number"
                v-model="datosBasicos.salarioPromedio"
              />
            </div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ datosBasicos.valorHora }}</div>
          </td>
          <td class="w-40 px-4 py-3 text-xs border ">
            <div class="flex items-center text-sm">
              <input
                class="px-2 py-1 border focus:outline-none"
                type="text"
                v-model="datosBasicos.golpesPromedioHora"
              />
            </div>
          </td>
          <td class="w-40 px-4 py-3 text-sm border ">
            <div class="flex items-center text-sm">
              <input
                class="px-2 py-1 border focus:outline-none"
                type="text"
                v-model="datosBasicos.valorPromedioGolpe"
              />
            </div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div class="">
              {{ datosBasicos.valorEncauche }}
            </div>
          </td>

          <td class="w-40 px-4 py-3 border text-ms">
            <div class="">
              {{ datosBasicos.valorContraHendido }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="w-full mt-10 ">
      <thead>
        <tr
          class="text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600"
        >
          <th class="w-40 px-4 py-3">Labor</th>
          <th class="w-40 px-4 py-3">Tiempo promedio labor</th>
          <th class="w-40 px-4 py-3">Valor labor</th>
          <th class="w-40 px-4 py-3">Golpes sin realizar</th>
          <th class="w-40 px-4 py-3">Valor tiempo sin producir</th>
          <th class="w-40 px-4 py-3">Valor total labor</th>
          <th class="w-40 px-4 py-3">Cantidad Cms</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr class="text-gray-700">
          <td class="w-40 px-4 py-3 text-sm font-semibold border">Encauche</td>
          <td class="w-40 px-4 py-3 border ">
            <div class="flex items-center text-sm">
              <input
                class="px-2 py-1 border focus:outline-none"
                type="number"
                v-model="encauche.tiempoPromedioLabor"
              />
            </div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ encauche.valorLabor }}</div>
          </td>
          <td class="w-40 px-4 py-3 text-xs border ">
            <div>{{ encauche.golpesSinRealizar }}</div>
          </td>
          <td class="w-40 px-4 py-3 text-sm border ">
            <div>{{ encauche.valorTiempoSinProducir }}</div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ encauche.ValorTotalLabor }}</div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ encauche.cantidadCms }}</div>
          </td>
        </tr>
        <tr class="text-gray-700">
          <td class="w-40 px-4 py-3 text-sm font-semibold border">
            Puesta a Punto
          </td>
          <td class="w-40 px-4 py-3 border ">
            <div class="flex items-center text-sm">
              <input
                class="px-2 py-1 border focus:outline-none"
                type="number"
                v-model="puestaPunto.tiempoPromedioLabor"
              />
            </div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ puestaPunto.valorLabor }}</div>
          </td>
          <td class="w-40 px-4 py-3 text-xs border ">
            <div>{{ puestaPunto.golpesSinRealizar }}</div>
          </td>
          <td class="w-40 px-4 py-3 text-sm border ">
            <div>{{ puestaPunto.valorTiempoSinProducir }}</div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ puestaPunto.ValorTotalLabor }}</div>
          </td>
          <td class="w-40 px-4 py-3 border text-ms">
            <div>{{ puestaPunto.cantidadCms }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DatosBasicos",
  data() {
    return {
      datosBasicos: {
        salarioPromedio: 1500000,
        valorHora: 0,
        golpesPromedioHora: 500,
        valorPromedioGolpe: 78,
        valorEncauche: 38,
        valorContraHendido: 100
      },
      encauche: {
        tiempoPromedioLabor: 0.8,
        valorLabor: 0,
        golpesSinRealizar: 0,
        valorTiempoSinProducir: 0,
        ValorTotalLabor: 0,
        cantidadCms: 0
      },
      puestaPunto: {
        tiempoPromedioLabor: 9.0,
        valorLabor: 0,
        golpesSinRealizar: 0,
        valorTiempoSinProducir: 0,
        ValorTotalLabor: 0,
        cantidadCms: 0
      }
    };
  },

  mounted() {
    this.datosBasicos.valorHora =
      (this.datosBasicos.salarioPromedio / 240) * 1.53;
  }
};
</script>

<style></style>
