<template>
  <div class="pt-24 mx-2 font-Montserrat">
    <div class="mx-10 mt-10">
      <div class="flex flex-wrap">
        <div class="w-full">
          <ul class="flex justify-center pt-3 pb-4 mb-0 space-x-4 list-none">
            <li class="flex-auto mr-2 text-center ">
              <a
                class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                v-on:click="toggleTabs(1)"
                v-bind:class="{
                  'text-azul bg-white': openTab !== 1,
                  'text-white bg-azul': openTab === 1
                }"
              >
                Datos Caja-Máquina
              </a>
            </li>
            <li class="flex-auto mr-2 text-center ">
              <a
                class="block px-5 py-3 text-xs font-bold leading-normal uppercase rounded shadow-lg"
                v-on:click="toggleTabs(2)"
                v-bind:class="{
                  'text-azul bg-white': openTab !== 2,
                  'text-white bg-azul': openTab === 2
                }"
              >
                Datos Caja-Máquina
              </a>
            </li>
          </ul>
          <div
            class="relative w-full min-h-full mb-6 break-words bg-white rounded shadow-lg"
          >
            <div class="py-5 ">
              <div class="">
                <div
                  v-bind:class="{ hidden: openTab !== 1, block: openTab === 1 }"
                  class="flex space-x-4"
                >
                  <table class="w-full">
                    <thead
                      class="items-center w-full text-xl font-semibold border text-azul"
                    >
                      <tr class="w-full py-1">
                        <th colspan="4" class="w-full">Datos Caja-Máquina</th>
                      </tr>
                    </thead>
                    <tbody class="w-full">
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Dimensiones</td>
                        <td class="w-2/12 text-center border ">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Largo"
                          />
                        </td>
                        <td class="w-2/12 text-center border ">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Ancho"
                          />
                        </td>
                        <td class="w-2/12 text-center border ">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Alto"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Estilos</td>
                        <td colspan="3" class="text-center">
                          <select class="w-40 px-2" name="select">
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
                        <td class="w-6/12 px-4 border">Cabida</td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Cabida"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Tiraje</td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Tiraje"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Formato-Máquina</td>
                        <td colspan="3" class="text-center">
                          <select class="w-40 px-2" name="select">
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
                        <td class="w-6/12 px-4 border">Pedidos al año</td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_PedAnio"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">
                          Valor Hora Máquina($)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_VrHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">
                          Relación Valor Producido/ Valor Hora Máquina
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_VrPnHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">
                          Velocidad de Trabajo(golpes/hora)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
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
                        <td class="w-6/12 px-4 border">
                          Contra-Hendido a usar
                        </td>
                        <td colspan="3" class="text-center border ">
                          <select class="w-40 px-2" name="select">
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
                        <td class="w-6/12 px-4 border">
                          Duracion Teórica(filtros)
                        </td>
                        <td colspan="3" class="text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Vida util considerada(%)</td>
                        <td colspan="3" class="text-center">
                          75%
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Cambios requeridos</td>
                        <td colspan="3" class="text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Logintud Grafas(cm)</td>
                        <td colspan="3" class="text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">Despercico Estimado Contra - Hendido</td>
                        <td colspan="3" class="text-center">
                          15%
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">
                          Loong. Contra-Hendido Estimada(cms)
                        </td>
                        <td colspan="3" class="text-center">
                          Formula
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">
                          Relación Valor Producido/ Valor Hora Máquina
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_VrPnHrMaq"
                          />
                        </td>
                      </tr>
                      <tr class="border">
                        <td class="w-6/12 px-4 border">
                          Velocidad de Trabajo(golpes/hora)
                        </td>
                        <td colspan="3" class="text-center">
                          <input
                            class="w-40 px-4 text-right focus:outline-none"
                            type="text"
                            v-model="datos.cajMaq_Velocidad"
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
export default {
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
