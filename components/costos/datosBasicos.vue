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
          <td class="px-2 py-3 border w-60">
            <div class="flex items-center justify-center text-sm text-right">
               <vue-numeric  separator="," v-model="datosBasicos.salarioPromedio"
                    class="w-32 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                    @blur="operaciones"
               ></vue-numeric>
            </div>
          </td>
          <td class="px-2 py-3 border w-60 text-ms">
            <div>{{ datosBasicos.valorHora | NumeroEntero}}</div>
          </td>
          <td class="px-2 py-3 border w-60 ">
            <div class="flex items-center justify-center text-sm">
              <vue-numeric   separator="," v-model="datosBasicos.golpesPromedioHora"
                    class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                    @blur="operaciones"
               ></vue-numeric>

            </div>
          </td>
          <td class="px-2 py-3 text-sm border w-60 ">
            <div class="flex items-center justify-center text-sm">
 
              <vue-numeric   separator="," v-model="datosBasicos.valorPromedioGolpe"
                    class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                    @blur="operaciones"
               ></vue-numeric>

            </div>
          </td>
          <td class="px-2 py-3 border w-60 text-ms">
            <div class="flex items-center justify-center text-sm">
 
              <vue-numeric   separator="," v-model="datosBasicos.valorEncauche"
                    class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                    @blur="operaciones"
               ></vue-numeric>
                             
            </div>
          </td>

          <td class="px-2 py-3 border w-60 text-ms">
            <div class="flex items-center justify-center text-sm">
 

              <vue-numeric    separator="," v-model="datosBasicos.valorContraHendido"
                    class="w-24 px-2 py-1 text-right text-white border bg-azul focus:outline-none"
                    @blur="operaciones"
               ></vue-numeric>

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
            <div class="flex items-center justify-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white border focus:outline-none bg-azul "
                type="text"
                v-model="encauche.tiempoPromedioLabor"
              />
            </div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ encauche.valorLabor | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ encauche.golpesSinRealizar | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-sm text-right border w-60">
            <div>{{ encauche.valorTiempoSinProducir | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ encauche.ValorTotalLabor | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ encauche.cantidadCms | NumeroEntero }}</div>
          </td>
        </tr>
        <tr class="text-gray-700">
          <td class="px-2 py-3 text-sm font-semibold border w-60 ">
            Puesta a punto
          </td>
          <td class="px-2 py-3 border w-60 ">
            <div class="flex items-center justify-center text-sm">
              <input
                @blur="operaciones"
                class="w-24 px-2 py-1 text-right text-white focus:outline-none bg-azul "
                type="text"
                v-model="puestaPunto.tiempoPromedioLabor"
              />
            </div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ puestaPunto.valorLabor | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ puestaPunto.golpesSinRealizar | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-sm text-right border w-60">
            <div>{{ puestaPunto.valorTiempoSinProducir | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ puestaPunto.ValorTotalLabor | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ puestaPunto.cantidadCms | NumeroEntero  }}</div>
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
            <div>{{ totales.d12  | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60">
            <div>{{ totales.e12  | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-sm text-right border w-60">
            <div>{{ totales.f12  | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ totales.g12  | NumeroEntero }}</div>
          </td>
          <td class="px-2 py-3 text-right border w-60 text-ms">
            <div>{{ totales.h12  | NumeroEntero }}</div>
          </td>
        </tr>
      </tbody>
    </table>
    
    
     <!-- ESTE ES UN BOTON DE PRUEBA, DEBE SER ELIMINADO  -->
    <!-- <buton @click="operaciones"> Realizar operaciones </buton>  -->
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'

export default {
  name: "DatosBasicos",
    components: {
    VueNumeric
  },
  data() {
    return {
      price: 0,
      datosBasicos: {
        golpesPromedioHora: '',
        salarioPromedio   : '',
        valorContraHendido: '',
        valorEncauche     : '',
        valorHora         : '',
        valorPromedioGolpe: '',
      },
      encauche: {
        cantidadCms           : '',
        golpesSinRealizar     : '',
        tiempoPromedioLabor   : '',
        valorLabor            : '',
        valorTiempoSinProducir: '',
        ValorTotalLabor       : '',
      },
      puestaPunto: {
        cantidadCms           : '',
        golpesSinRealizar     : '',
        tiempoPromedioLabor   : '',
        valorLabor            : '',
        valorTiempoSinProducir: '',
        ValorTotalLabor       : '',
      },
      totales: {
        c12: '',
        d12: '',
        e12: '',
        f12: '',
        g12: '',
        h12: ''

      }
    };
  },

  mounted() {
    this.operaciones ();
    
  },
 
  methods: {
 
      operaciones () {
          this.datosBasicos.valorHora          = parseFloat( this.datosBasicos.salarioPromedio   ) / 240 * 1.53;
          this.encauche.valorLabor             = parseFloat( this.datosBasicos.valorHora          ) * parseFloat(this.encauche.tiempoPromedioLabor);
          this.encauche.golpesSinRealizar      = parseFloat( this.encauche.tiempoPromedioLabor    ) * parseFloat(this.datosBasicos.golpesPromedioHora);
          this.encauche.valorTiempoSinProducir = parseFloat( this.encauche.golpesSinRealizar      ) * parseFloat(this.datosBasicos.valorPromedioGolpe);
          this.encauche.ValorTotalLabor        = parseFloat( this.encauche.valorTiempoSinProducir ) + parseFloat(this.encauche.valorLabor);
          if ( parseFloat(this.datosBasicos.valorEncauche) > 0 ) {
              this.encauche.cantidadCms = parseFloat(this.encauche.ValorTotalLabor) / parseFloat(this.datosBasicos.valorEncauche);
          }else {
            this.encauche.cantidadCms = 0;
          }

          this.puestaPunto.valorLabor             = parseFloat( this.puestaPunto.tiempoPromedioLabor      ) * parseFloat( this.datosBasicos.valorHora );
          this.puestaPunto.golpesSinRealizar      = parseFloat( this.puestaPunto.tiempoPromedioLabor      ) * parseFloat( this.datosBasicos.golpesPromedioHora );
          this.puestaPunto.valorTiempoSinProducir = parseFloat( this.puestaPunto.golpesSinRealizar        ) * parseFloat( this.datosBasicos.valorPromedioGolpe);
          this.puestaPunto.ValorTotalLabor        = parseFloat( this.puestaPunto.valorTiempoSinProducir   ) + parseFloat(  this.puestaPunto.valorLabor );
          if ( parseFloat( this.datosBasicos.valorContraHendido) > 0 ) {
              this.puestaPunto.cantidadCms = parseFloat( this.puestaPunto.ValorTotalLabor) / parseFloat( this.datosBasicos.valorContraHendido);
          } else {
              this.puestaPunto.cantidadCms = 0;
          }

          this.totales.c12 = parseFloat(this.encauche.tiempoPromedioLabor       ) + parseFloat(this.puestaPunto.tiempoPromedioLabor);
          this.totales.d12 = parseFloat( this.encauche.valorLabor               ) + parseFloat( this.puestaPunto.valorLabor );
          this.totales.e12 = parseFloat( this.encauche.golpesSinRealizar        ) + parseFloat( this.puestaPunto.golpesSinRealizar );
          this.totales.f12 = parseFloat( this.encauche.valorTiempoSinProducir   ) + parseFloat( this.puestaPunto.valorTiempoSinProducir );
          this.totales.g12 = parseFloat( this.encauche.ValorTotalLabor          ) + parseFloat( this.puestaPunto.ValorTotalLabor );
          this.totales.h12 = parseFloat( this.encauche.cantidadCms              ) + parseFloat( this.puestaPunto.cantidadCms );

      }
  }
};
</script>

<style></style>
