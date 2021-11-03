<template>
  <div class="pt-24 mx-2 font-Montserrat">
    <div class="mx-10 mt-10">
      <div class="flex flex-wrap">
        <div class="w-full">
          <ul class="flex justify-center pt-3 pb-4 mb-0 list-none">
            <li class="flex-auto text-center ">
              <a
                class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-gray-600 bg-white border-b': openTab !== 1,
                  'text-azul bg-white border-l border-t border-r': openTab === 1
                }"
              >
                Datos Caja-Máquina
              </a>
            </li>
            <li class="flex-auto text-center ">
              <a
                class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-gray-600 bg-white border-b': openTab !== 2,
                  'text-azul bg-white border-l border-t border-r': openTab === 2
                }"
              >
                Datos Caja-Máquina
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
                      <tr class="w-full py-1">
                        <th colspan="4" class="w-full">Datos Caja-Máquina</th>
                      </tr>
                    </thead>
                    <tbody class="w-full">
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Dimensiones
                        </td>
                        <td class="w-2/12 text-center border bg-azul">
                          <vue-numeric
                            separator=","
                            class="w-32 px-2 py-1 text-right text-white bg-azul focus:outline-none"
                            v-model="datos.cajMaq_Largo"
                          ></vue-numeric>
                        </td>
                        <td class="w-2/12 text-center border bg-azul">
                          <vue-numeric
                            separator=","
                            class="w-32 px-2 py-1 text-right text-white bg-azul focus:outline-none"
                            v-model="datos.cajMaq_Ancho"
                          ></vue-numeric>
                        </td>
                        <td class="w-2/12 text-center border bg-azul">
                          <vue-numeric
                            separator=","
                            class="w-32 px-2 py-1 text-right text-white bg-azul focus:outline-none"
                            v-model="datos.cajMaq_Alto"
                          ></vue-numeric>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">Estilos</td>
                        <td colspan="3" class="text-center">
                          <select
                            class="w-40 px-2 py-1 text-sm cursor-pointer"
                            name="select"
                          >
                            <option value="baul">Baul</option>
                            <option value="automatico">Automatico</option>
                            <option value="cuatroPuntas">Cuatro Puntas</option>
                            <option value="seisPuntas" selected
                              >Seis Puntas</option
                            >
                          </select>
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">Cabida</td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Cabida"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">Tiraje</td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Tiraje"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Formato-Máquina
                        </td>
                        <td colspan="3" class="text-center">
                          <select
                            class="w-40 px-2 py-1 text-sm cursor-pointer"
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
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_PedAnio"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Valor Hora Máquina($)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_VrHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Relación Valor Producido/ Valor Hora Máquina
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_VrPnHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Velocidad de Trabajo(golpes/hora)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Velocidad"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table class="w-full">
                    <thead
                      class="items-center w-full text-xl font-semibold border text-azul"
                    >
                      <tr class="w-full py-1">
                        <th colspan="4" class="w-full">
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
                            class="w-40 px-2 py-1 text-sm cursor-pointer"
                            name="select"
                          >
                            <option value="baul">Basic</option>
                            <option value="automatico">Dinamic</option>
                            <option value="cuatroPuntas">Prpo RS</option>
                            <option value="seisPuntas" selected
                              >Ultimate</option
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
                          {{ contraHendido.contraHendTiras_VidaUtil }}
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Cambios requeridos
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Logintud Grafas(cm)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Despercico Estimado Contra - Hendido
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          15%
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Loong. Contra-Hendido Estimada(cms)
                        </td>
                        <td colspan="3" class="py-1 text-sm text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Area Caja (cm2)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Duracion Teórica (tiros)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Vida útil considerada (%)
                        </td>

                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Duracion Estimada (tiros)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Pines Pertinax Requeridos por cabida
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 py-1 text-sm border">
                          Pines Totales
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="px-4 text-right cursor-pointer w-28 xl:w-32 focus:outline-none"
                            type="text"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  v-bind:class="{ hidden: openTab !== 2, block: openTab === 2 }"
                >
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
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
      datos: {
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
        contraHendTiras_Duracion: "formula",
        contraHendTiras_VidaUtil: 75,
        contraHendTiras_Cambios: "formula",
        contraHendTiras_LongGrafa: "formula",
        contraHendTiras_Dsprdcio: 15,
        contraHendTiras_LongEstimada: "formula"
      },
      petrinax: {
        contraHendiPrtnax_AreaCaja: "formula",
        contraHendiPrtnax_Duracion: "formula",
        contraHendiPrtnax_VidaUtil: 100,
        contraHendiPrtnax_DuracEstimada: "formula",
        contraHendiPrtnax_PinesRquridos: 6,
        contraHendiPrtnax_PinesTotales: "formula"
      }
    };
  },
  methods: {
    toggleTabs: function(tabNumber) {
      this.openTab = tabNumber;
    }
  }
};
</script>

<style></style>
