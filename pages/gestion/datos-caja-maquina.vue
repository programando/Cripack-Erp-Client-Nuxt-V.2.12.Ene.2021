<template>
  <div class="pt-24 mx-2">
    <div class="mx-10 mt-10">
      <div class="flex flex-wrap">
        <div class="w-full">
          <ul class="flex justify-center pt-3 pb-4 mb-0 list-none">
            <li class="flex-auto text-center ">
              <a
                class="block px-5 py-3 text-base font-bold leading-normal uppercase rounded cursor-pointer"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-gray-600 bg-white border-b': openTab !== 1,
                  'text-azul bg-white border-l border-t border-r': openTab === 1
                }"
              >
                Datos básicos
              </a>
            </li>
            <li class="flex-auto text-center ">
              <a
                class="block px-5 py-3 text-base font-bold leading-normal uppercase rounded cursor-pointer"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-gray-600 bg-white border-b': openTab !== 2,
                  'text-azul bg-white border-l border-t border-r': openTab === 2
                }"
              >
                Cito vs Pertinax
              </a>
            </li>
          </ul>
          <div class="relative w-full h-full mb-6 break-words bg-white rounded">
            <div class="py-5">
              <div class="">
                <div
                  v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                  class="flex items-start justify-start space-x-2"
                >
                  <table class="w-full h-auto">
                    <thead
                      class="items-center w-full text-xl font-semibold border text-azul"
                    >
                      <tr class="w-full">
                        <th colspan="4" class="w-full py-1 text-base">
                          Caja-Máquina
                        </th>
                      </tr>
                    </thead>
                    <tbody class="w-full">
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Dimensiones
                        </td>
                        <td class="w-2/12 text-center border">
                          <vue-numeric
                            separator=","
                            class="w-full px-2 py-1 text-right focus:outline-none focus:bg-azul focus:text-white"
                            v-model="cajaMaquina.cajMaq_Largo"
                          ></vue-numeric>
                        </td>
                        <td class="w-2/12 text-center border">
                          <vue-numeric
                            separator=","
                            class="w-full px-2 py-1 text-right focus:outline-none focus:bg-azul focus:text-white"
                            v-model="cajaMaquina.cajMaq_Ancho"
                          ></vue-numeric>
                        </td>
                        <td class="w-2/12 text-center border">
                          <vue-numeric
                            separator=","
                            class="w-full px-2 py-1 text-right focus:outline-none focus:bg-azul focus:text-white"
                            v-model="cajaMaquina.cajMaq_Alto"
                          ></vue-numeric>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">Estilos</td>
                        <td colspan="3" class="text-center">
                          <select
                            class="w-48 px-2 py-1 text-sm cursor-pointer focus:bg-azul focus:text-white"
                            name="select"
                          >
                            <option value="baul">Baul</option>
                            <option value="automatico" selected
                              >Automatico</option
                            >
                            <option value="cuatroPuntas">Cuatro Puntas</option>
                            <option value="seisPuntas">Seis Puntas</option>
                          </select>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">Cabida</td>
                        <td colspan="3" class="text-center">
                          <vue-numeric
                            separator=","
                            class="w-full px-2 py-1 text-center focus:outline-none focus:bg-azul focus:text-white"
                            v-model="cajaMaquina.cajMaq_Cabida"
                          ></vue-numeric>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">Tiraje</td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-full px-4 py-1 text-center cursor-pointer focus:outline-none focus:bg-azul focus:text-white"
                            type="text"
                            v-model="cajaMaquina.cajMaq_Tiraje"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Formato-Máquina
                        </td>
                        <td colspan="3" class="text-center">
                          <select
                            class="w-48 px-2 py-1 text-sm cursor-pointer focus:bg-azul focus:text-white"
                            name="select"
                          >
                            <option value="formatoMaquina"
                              >Formato Máquina</option
                            >
                            <option value="medioPliego" selected
                              >Medio Pliego</option
                            >
                            <option value="pliego">Pliego</option>
                          </select>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Pedidos al año
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-full px-4 py-1 text-center cursor-pointer focus:outline-none focus:bg-azul focus:text-white"
                            type="text"
                            v-model="cajaMaquina.cajMaq_PedAnio"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Valor Hora Máquina($)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-full px-4 py-1 text-center cursor-pointer focus:outline-none focus:bg-azul focus:text-white"
                            type="text"
                            v-model="cajaMaquina.cajMaq_VrHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Relación Valor Producido/ Valor Hora Máquina
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-full px-4 py-1 text-center cursor-pointer focus:outline-none focus:bg-azul focus:text-white"
                            type="text"
                            v-model="cajaMaquina.cajMaq_VrPnHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Velocidad de Trabajo(golpes/hora)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-full px-4 py-1 text-center cursor-pointer focus:outline-none focus:bg-azul focus:text-white"
                            type="text"
                            v-model="cajaMaquina.cajMaq_Velocidad"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="w-full">
                    <thead
                      class="items-center w-full text-xl font-semibold border text-azul"
                    >
                      <tr class="w-full">
                        <th colspan="4" class="w-full py-1 text-base">
                          Información Contra-Hendido
                        </th>
                      </tr>
                    </thead>
                    <tbody class="w-full">
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Contra-Hendido a usar
                        </td>
                        <td colspan="3" class="text-center border ">
                          <select
                            class="w-48 px-2 py-1 text-sm cursor-pointer focus:bg-azul focus:text-white"
                            name="select"
                            v-model="contraHendidoSeleccionado"
                            @change="calContraHendidoUsar()"
                          >
                            <option
                              v-for="elemento in contraHendidoUsar"
                              :key="elemento.id"
                              v-bind:value="elemento"
                              >{{ elemento.text }}</option
                            >
                          </select>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Duracion Teórica(filtros)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ contraHendido.contraHendTiras_Duracion }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Vida util considerada(%)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ contraHendido.contraHendTiras_VidaUtil }}%
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Cambios requeridos
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ contraHendido.contraHendTiras_Cambios }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Logintud Grafas(cm)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ contraHendido.contraHendTiras_LongGrafa }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Despercico Estimado Contra - Hendido
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ contraHendido.contraHendTiras_Dsprdcio }}%
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Loong. Contra-Hendido Estimada(cms)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ contraHendido.contraHendTiras_LongEstimada }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Area Caja (cm2)
                        </td>
                        <td colspan="3" class="text-center">
                          {{ petrinax.contraHendiPrtnax_AreaCaja }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Duracion Teórica (tiros)
                        </td>
                        <td colspan="3" class="text-center">
                          {{ petrinax.contraHendiPrtnax_Duracion }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Vida útil considerada (%)
                        </td>
                        <td colspan="3" class="text-center">
                          <vue-numeric
                            separator=","
                            class="w-full px-2 py-1 text-center focus:outline-none focus:bg-azul focus:text-white"
                            v-model="petrinax.contraHendiPrtnax_VidaUtil"
                          ></vue-numeric>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Duracion Estimada (tiros)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ petrinax.contraHendiPrtnax_DuracEstimada }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Pines Pertinax Requeridos por cabida
                        </td>
                        <td colspan="3" class="text-center">
                          <vue-numeric
                            separator=","
                            class="w-full px-2 py-1 text-center focus:outline-none focus:bg-azul focus:text-white"
                            v-model="petrinax.contraHendiPrtnax_PinesRquridos"
                          ></vue-numeric>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Pines Totales
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          {{ petrinax.contraHendiPrtnax_PinesTotales }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                >
                  <div>
                    <table class="w-full">
                      <thead class="w-full">
                        <tr class="w-full border text-azul">
                          <th class="w-1/12 text-sm border">Material</th>
                          <th class="w-1/12 text-sm border">Valor MP($)</th>
                          <th class="w-1/12 text-sm border">
                            Tiempo Arreglo(min)
                          </th>
                          <th class="w-1/12 text-sm border">Cambios/Año</th>
                          <th class="w-1/12 text-sm border">
                            Tiempo Arreglo/Año(min)
                          </th>
                          <th class="w-1/12 text-sm border">Valor MP/Año($)</th>
                          <th class="w-1/12 text-sm border">
                            Tiempo Máquina Inactiva/Año(horas)
                          </th>
                          <th class="w-1/12 text-sm border">
                            Valor Tiempo Máquina Inactiva/Año($)
                          </th>
                          <th class="w-1/12 text-sm border">
                            Valor Total Año($).(MP + Máquina Inactiva)
                          </th>
                          <th class="w-1/12 text-sm border">Ahorro/Año($)</th>
                          <th class="w-1/12 text-sm border">
                            Costo Improductivo Máquina Inactiva/Año($)
                          </th>
                          <th class="w-1/12 text-sm border">
                            Diferencia Costo Improductivo Máquina Inactiva/Año
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="px-2 py-2 text-sm border text-azul">
                            Contra-Hendido
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            67,154
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            19
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            25
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            475
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            1,678,856
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            7.92
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            395,833
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            2,074,690
                          </td>
                          <td
                            rowspan="3"
                            class="px-4 py-2 text-sm text-right border"
                          >
                            259,514
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            791,667
                          </td>
                          <td
                            rowspan="3"
                            class="px-4 py-2 text-sm text-right border"
                          >
                            698,500
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-sm border text-azul">
                            Pertinax
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            174,240
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">4</td>
                          <td class="px-4 py-2 text-sm text-right border">
                            13
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            56
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            2,265,120
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            0.93
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            46,583
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            2,311,703
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            93,167
                          </td>
                        </tr>
                        <tr>
                          <td class="px-2 py-2 text-sm border text-azul">
                            Pines
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">
                            22,500
                          </td>
                          <td class="px-4 py-2 text-sm text-right border"></td>
                          <td class="px-4 py-2 text-sm text-right border">1</td>
                          <td class="px-4 py-2 text-sm text-right border">0</td>
                          <td class="px-4 py-2 text-sm text-right border">
                            22,500
                          </td>
                          <td class="px-4 py-2 text-sm text-right border"></td>
                          <td class="px-4 py-2 text-sm text-right border"></td>
                          <td class="px-4 py-2 text-sm text-right border">
                            22,500
                          </td>
                          <td class="px-4 py-2 text-sm text-right border">0</td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="w-8/12 mt-16">
                      <thead
                        class="items-center w-full text-xl font-semibold border text-azul"
                      >
                        <tr class="w-full py-1">
                          <th colspan="4" class="w-full">
                            Comparacion Valor Platina 1mm v/s Contra-Hendido
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="w-full">
                          <td class="w-3/12 px-2 py-2 border">
                            Valor Platina Medio Pliego:
                          </td>
                          <td class="w-3/12 px-2 py-2 text-center border">
                            315,000
                          </td>
                          <td class="w-6/12 px-2 py-2 border" colspan="2">
                            Este Valor Corresponde a 4.7 pedidos de cito
                            ultimate, es decir que es 0.78 meses, se habria
                            pagado la platina de 1mm. La platina tiene una vida
                            ultil de 24 pedidos, lo que significa 4 meses
                            aproximadamente
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" class="w-3/12 px-2 py-2 border">
                            Inversion requerida al año en platinas:
                          </td>
                          <td
                            colspan="2"
                            class="w-3/12 px-2 py-2 text-lg font-semibold text-center border"
                          >
                            945,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table class="w-8/12 mt-8 border">
                      <tbody>
                        <tr>
                          <td class="w-6/12 px-2 py-2 text-lg border">
                            Golpes desperdiciados al año:
                          </td>
                          <td
                            class="w-6/12 px-2 py-2 text-lg font-semibold text-center border"
                          >
                            34,925
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="flex justify-end -mt-40">
                      <div class="w-2/12 py-10 mr-10 text-center border">
                        <p>506,014</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueNumeric from "vue-numeric";
export default {
  components: { VueNumeric },
  data() {
    return {
      openTab: 1,
      contraHendidoSeleccionado: {},
      contraHendidoUsar: [
        { id: 0, text: "Basic" , seleccionado1: 240000, seleccionado2: 20000},
        { id: 1, text: "Dinamic", seleccionado1: 350000, seleccionado2: 80000},
        { id: 2, text: "ProRS" ,seleccionado1: 447000, seleccionado2: 100000},
        { id: 3, text: "Ultimate", seleccionado1: 800000, seleccionado2: 400000}
      ],
      seleccionado: '',

      cajaMaquina: {
        cajMaq_Largo: 210,
        cajMaq_Ancho: 210,
        cajMaq_Alto: 60,
        cajMaq_Cabida: 1,
        cajMaq_Tiraje: 100.0,
        cajMaq_PedAnio: 72,
        cajMaq_VrHrMaq: 50.0,
        cajMaq_VrPnHrMaq: 2.0,
        cajMaq_Velocidad: 5.0
      },
      contraHendido: {
        contraHendTiras_Duracion: '',
        contraHendTiras_VidaUtil: 75,
        contraHendTiras_Cambios: '',
        contraHendTiras_LongGrafa: '',
        contraHendTiras_Dsprdcio: 15,
        contraHendTiras_LongEstimada: ''
      },
      petrinax: {
        contraHendiPrtnax_AreaCaja: 4.03184,
        contraHendiPrtnax_Duracion: 600.0,
        contraHendiPrtnax_VidaUtil: 100,
        contraHendiPrtnax_DuracEstimada: 1,
        contraHendiPrtnax_PinesRquridos: 6,
        contraHendiPrtnax_PinesTotales: 6
      }
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    },

    calcularFormulas() {
      (this.petrinax.contraHendiPrtnax_DuracEstimada =
        this.petrinax.contraHendiPrtnax_Duracion *
        this.petrinax.contraHendiPrtnax_VidaUtil),
        (this.petrinax.contraHendiPrtnax_PinesTotales =
          this.petrinax.contraHendiPrtnax_PinesRquridos *
          this.cajaMaquina.cajMaq_Cabida),
        (this.contraHendido.contraHendTiras_Cambios = parseInt(
          (this.cajaMaquina.cajMaq_Tiraje * this.cajaMaquina.cajMaq_PedAnio) /
            15.0 +
            1
        ));
      this.contraHendido.contraHendTiras_LongGrafa =
        234 * this.cajaMaquina.cajMaq_Cabida;
      this.contraHendido.contraHendTiras_LongEstimada =
        this.contraHendido.contraHendTiras_LongGrafa *
        (1 + this.contraHendido.contraHendTiras_Dsprdcio);
      
    },

    calContraHendidoUsar(){
      // this.contraHendido.contraHendTiras_Duracion = 0,
      if (this.contraHendidoSeleccionado.id === 0) {
        this.contraHendido.contraHendTiras_Duracion = this.contraHendidoSeleccionado.seleccionado2
      } if (this.contraHendidoSeleccionado.id == 1) {
        this.contraHendido.contraHendTiras_Duracion = this.contraHendidoSeleccionado.seleccionado2
      } if (this.contraHendidoSeleccionado.id == 2) {
        this.contraHendido.contraHendTiras_Duracion = this.contraHendidoSeleccionado.seleccionado2
      } if (this.contraHendidoSeleccionado.id == 3) {
        this.contraHendido.contraHendTiras_Duracion = this.contraHendidoSeleccionado.seleccionado2
      }
       
        

  
    }
  },

  

  mounted() {
    this.calcularFormulas();
  }
};
</script>

<style></style>
