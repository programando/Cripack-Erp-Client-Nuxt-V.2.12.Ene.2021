<template>
  <div>
    <table class="w-full text-azul">
      <thead>
        <tr
          class="relative text-left uppercase border-t border-l text-azul"
        >
          <th class="relative px-2 py-3 mt-10 text-lg border-r w-60 top-10">Datos Básicos</th>
          <th class="px-2 py-3 text-center border-r w-60">Salario Promedio Operario</th>
          <th class="px-2 py-3 text-center border-r w-60">Valor Hora</th>
          <th class="px-2 py-3 text-center border-r w-60">Golpes Promedio Hora</th>
          <th class="px-2 py-3 text-center border-r w-60">Valor Promedio Golpe</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Valor encauche($/cm)</th>
          <th class="px-2 py-3 text-center border-r w-60">Valor Contra-hendido($/cm)</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr class="text-right text-gray-700">
          <td class="px-2 py-3 border-b border-l w-60"></td>
          <td class="px-2 py-3 border w-60 ">
            <div class="flex items-center text-sm text-right">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                type="text"
                v-model="datosBasicos.salarioPromedio"
              />
            </div>
          </td>
          <td class="px-2 py-3 border w-60 text-ms">
            <div>{{ datosBasicos.valorHora }}</div>
          </td>
          <td class="px-2 py-3 border w-60 ">
            <div class="flex items-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                type="text"
                v-model="datosBasicos.golpesPromedioHora"
              />
            </div>
          </td>
          <td class="px-2 py-3 text-sm border w-60 ">
            <div class="flex items-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                type="text"
                v-model="datosBasicos.valorPromedioGolpe"
              />
            </div>
          </td>
          <td class="px-2 py-3 border w-60 text-ms">
            <div class="flex items-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                type="text"
                v-model="datosBasicos.valorEncauche"
              />
            </div>
          </td>

          <td class="px-2 py-3 border w-60 text-ms">
            <div class="flex items-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                type="text"
                v-model="datosBasicos.valorContraHendido"
              />
            </div>
          </td>
        </tr>
        
      </tbody>
    </table>
    <table class="w-full mt-10 ">
      <thead>
        <tr
          class="text-left uppercase border text-azul "
        >
          <th class="px-2 py-3 text-lg text-center border-r w-60 ">Labor</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Tiempo promedio labor</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Valor labor</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Golpes sin realizar</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Valor tiempo sin producir</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Valor total labor</th>
          <th class="px-2 py-3 text-center border-r w-60 ">Cantidad Cms</th>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr class="text-gray-700">
          <td class="px-2 py-3 text-sm font-semibold border w-60">Encauche</td>
          <td class="px-2 py-3 border w-60 ">
            <div class="flex items-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border focus:outline-none bg-azul "
                type="text"
                v-model="encauche.tiempoPromedioLabor"
              />
            </div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ encauche.valorLabor | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ encauche.golpesSinRealizar | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-sm text-right border w-60">
            <div>{{ encauche.valorTiempoSinProducir | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ encauche.ValorTotalLabor | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ encauche.cantidadCms | NumeroDecimal }}</div>
          </td>
        </tr>
        <tr class="text-gray-700">
          <td class="px-2 py-3 text-sm font-semibold border w-60 ">
            Puesta a punto
          </td>
          <td class="px-2 py-3 border w-60 ">
            <div class="flex items-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white focus:outline-none bg-azul "
                type="text"
                v-model="puestaPunto.tiempoPromedioLabor"
              />
            </div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ puestaPunto.valorLabor | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ puestaPunto.golpesSinRealizar | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-sm text-right border w-60">
            <div>{{ puestaPunto.valorTiempoSinProducir | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ puestaPunto.ValorTotalLabor | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ puestaPunto.cantidadCms | NumeroDecimal  }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    <table class="mt-10">
      <tbody class="mt-10 bg-white">
        <tr class="text-gray-700">
          <td class="px-2 py-3 text-sm font-semibold border w-60">Totales</td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ totales.c12 | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ totales.d12  | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ totales.e12  | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-sm text-right border w-60">
            <div>{{ totales.f12  | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ totales.g12  | NumeroDecimal }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ totales.h12  | NumeroDecimal }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    
    
     <!-- ESTE ES UN BOTON DE PRUEBA, DEBE SER ELIMINADO  -->
    <!-- <buton @click="operaciones"> Realizar operaciones </buton>  -->
  </div>
</template>

<script>

export default {
  name: "DatosBasicos",
  data() {
    return {
      datosBasicos: {
        golpesPromedioHora: 0,
        salarioPromedio   : 0,
        valorContraHendido: 0,
        valorEncauche     : 0,
        valorHora         : 0,
        valorPromedioGolpe: 0,
      },
      encauche: {
        cantidadCms           : 0,
        golpesSinRealizar     : 0,
        tiempoPromedioLabor   : 0,
        valorLabor            : 0,
        valorTiempoSinProducir: 0,
        ValorTotalLabor       : 0,
      },
      puestaPunto: {
        cantidadCms           : 0,
        golpesSinRealizar     : 0,
        tiempoPromedioLabor   : 0,
        valorLabor            : 0,
        valorTiempoSinProducir: 0,
        ValorTotalLabor       : 0,
      },
      totales: {
        c12: 0,
        d12: 0,
        e12: 0,
        f12: 0,
        g12: 0,
        h12: 0

      }
    };
  },

  mounted() {
    this.operaciones ();
    
  },
  methods: {
      operaciones () {
          this.datosBasicos.valorHora     =   (this.datosBasicos.salarioPromedio / 240) * 1.53;

          this.encauche.valorLabor     = this.datosBasicos.valorHora * this.encauche.tiempoPromedioLabor;
          this.encauche.golpesSinRealizar = this.encauche.tiempoPromedioLabor * this.datosBasicos.golpesPromedioHora;
          this.encauche.valorTiempoSinProducir = this.encauche.golpesSinRealizar * this.datosBasicos.valorPromedioGolpe;
          this.encauche.ValorTotalLabor = this.encauche.valorTiempoSinProducir + this.encauche.valorLabor;
          this.encauche.cantidadCms = this.encauche.ValorTotalLabor / this.datosBasicos.valorEncauche;


          this.puestaPunto.valorLabor  = this.puestaPunto.tiempoPromedioLabor * this.datosBasicos.valorHora;
          this.puestaPunto.golpesSinRealizar  = this.puestaPunto.tiempoPromedioLabor * this.datosBasicos.golpesPromedioHora;
          this.puestaPunto.valorTiempoSinProducir  = this.puestaPunto.golpesSinRealizar * this.datosBasicos.valorPromedioGolpe;
          this.puestaPunto.ValorTotalLabor  = this.puestaPunto.valorTiempoSinProducir + this.puestaPunto.valorLabor;
          this.puestaPunto.cantidadCms = this.puestaPunto.ValorTotalLabor / this.datosBasicos.valorContraHendido;

          this.totales.c12 = this.encauche.tiempoPromedioLabor + this.puestaPunto.tiempoPromedioLabor;
          this.totales.d12 = this.encauche.valorLabor + this.puestaPunto.valorLabor;
          this.totales.e12 = this.encauche.golpesSinRealizar + this.puestaPunto.golpesSinRealizar;
          this.totales.f12 = this.encauche.valorTiempoSinProducir + this.puestaPunto.valorTiempoSinProducir;
          this.totales.g12 = this.encauche.ValorTotalLabor + this.puestaPunto.ValorTotalLabor;
          this.totales.h12 = this.encauche.cantidadCms + this.puestaPunto.cantidadCms;

      }
  }
};
</script>

<style></style>
