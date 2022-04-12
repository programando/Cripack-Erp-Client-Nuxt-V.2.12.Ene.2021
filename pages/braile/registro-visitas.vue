<template>
  <div class="relative pt-28">
    <div class="flex justify-center py-10 ">
      <div class="px-4 py-4 border shadow-xl">
        <h2 class="text-2xl font-semibold text-center">Registro de visitas</h2>
        <div class="mx-4 mt-4">
          <div class="flex justify-center space-x-10">
            <div class="">
              <p class="ml-10 text-sm">Código</p>
              <div class="flex space-x-2">
                <button @click="buscarCliente = true">
                  <img class="h-6" src="/images/prismaticos.png" alt="" />
                </button>
                <input
                  class="w-32 px-2 border rounded-sm focus:outline-none"
                  type="text"
                />
              </div>
            </div>
            <div class="">
              <p class="text-sm">Nombre / Razón social</p>
              <input
                class="w-64 px-4 border rounded-sm focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="">
              <p class="text-sm">Ciudad</p>
              <input
                class="px-4 border rounded-sm w-60 focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="">
              <p class="text-sm">Vendedor</p>
              <input
                class="px-4 border rounded-sm w-60 focus:outline-none"
                disabled
                type="text"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <div class="">
              <div class="flex justify-center mt-10 space-x-20">
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Cupo de crédito</p>
                  <input
                    class="w-48 px-4 border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Persona encargada de pagos</p>
                  <input
                    class="w-48 px-4 border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
              </div>
              <div class="flex justify-center mt-4 space-x-20">
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Extra cupo</p>
                  <input
                    class="w-48 px-4 border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Nro. teléfono</p>
                  <input
                    class="w-48 px-4 border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
              </div>
              <div class="flex justify-center mt-4 space-x-20">
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Día límite recepción facturas</p>
                  <input
                    class="w-48 px-4 border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
                <div class="flex space-x-4">
                  <p class="w-64 text-sm">Email</p>
                  <input
                    class="w-48 px-4 border rounded-sm focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div class="w-32 px-4 mt-10">
              <button >
                <img class="h-8 ml-5" src="/images/buscar.png" alt="" />
                <p class="text-sm">Consultar ficha cliente</p>
              </button>
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between mx-32 mt-20">
              <h2 class="text-xl font-semibold">Historial de visitas</h2>
              <button
                @click="registrarVisita = true"
                class="flex items-center space-x-2"
              >
                <img class="h-8 ml-5" src="/images/buscar.png" alt="" />
                <p class="text-sm">Consultar ficha cliente</p>
              </button>
            </div>
            <div class="mx-32 mt-4">
              <table class="w-full">
                <thead class="w-full">
                  <tr class="w-full border text-azul">
                    <th class="w-1/12 text-sm border">Fecha visita</th>
                    <th class="w-2/12 text-sm border">Persona contacto</th>
                    <th class="w-2/12 text-sm border">
                      Motivo Visita
                    </th>
                    <th class="w-2/12 text-sm border">Resultado</th>
                    <th class="w-2/12 text-sm border">
                      Siguiente Paso
                    </th>
                    <th class="w-2/12 text-sm border">Próxima visita</th>
                    <th class="w-2/12 text-sm border">
                      Tipo Visita
                    </th>
                    <th class="w-1/12 text-sm border">
                      Detalles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td
                      class="flex justify-center w-20 text-sm text-right border"
                    >
                      <button>
                        <img class="h-6" src="/images/ver.png" alt="" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td
                      class="flex justify-center w-20 text-sm text-right border"
                    >
                      <button>
                        <img class="h-6" src="/images/ver.png" alt="" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td
                      class="flex justify-center w-20 text-sm text-right border"
                    >
                      <button>
                        <img class="h-6" src="/images/ver.png" alt="" />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td
                      class="flex justify-center w-20 text-sm text-right border"
                    >
                      <button>
                        <img class="h-6" src="/images/ver.png" alt="" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="flex items-center justify-between mx-32 mt-20">
              <h2 class="text-xl font-semibold">Historial de compras</h2>
            </div>
            <div class="mx-32 mt-4">
              <table class="w-full">
                <thead class="w-full">
                  <tr class="w-full border text-azul">
                    <th class="w-1/12 text-sm border">#Ot</th>
                    <th class="w-1/12 text-sm border">Referencia</th>
                    <th class="w-1/12 text-sm border">
                      Estilo
                    </th>
                    <th class="w-1/12 text-sm border">Tipo trabajo</th>
                    <th class="w-1/12 text-sm border">
                      Solicitada
                    </th>
                    <th class="w-1/12 text-sm border">Entregada</th>
                    <th class="w-1/12 text-sm border">
                      Últ.compra
                    </th>
                    <th class="w-1/12 text-sm border">
                      Cant.Tq/Mes
                    </th>
                    <th class="w-1/12 text-sm border">
                      Promo.Últ.Año
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                  </tr>
                  <tr>
                    <td class="px-2 py-2 text-sm border text-azul"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                    <td class="px-4 py-2 text-sm text-right border"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal registrar visita -->
    <div
      v-if="registrarVisita"
      class="absolute z-20 flex justify-center w-full px-20 py-10 mt-4 transition-opacity bg-gray-500 bg-opacity-75 top-10"
    >
      <div class="relative px-10 py-8 bg-white">
        <div>
          <h2 class="text-2xl font-semibold text-center">
            Registro de visitas
          </h2>
          <button @click="registrarVisita = false">
            <img
              class="absolute h-8 top-2 right-3"
              src="/images/close.svg"
              alt=""
            />
          </button>

          <div class="flex justify-center mt-10 space-x-10">
            <div class="">
              <p class="ml-10">Código</p>
              <div class="flex space-x-2">
                <button>
                  <img class="h-6" src="/images/prismaticos.png" alt="" />
                </button>
                <input
                  class="w-32 px-4 border rounded-sm focus:outline-none"
                  type="text"
                  
                />
              </div>
            </div>
            <div class="">
              <p>Nombre / Razón Social</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="">
              <p>Ciudad</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
            <div class="">
              <p>Vendedor</p>
              <input
                class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                disabled
                type="text"
              />
            </div>
          </div>
          <div class="flex ml-10">
            <div class="">
              <div class="flex mt-10 space-x-10">
                <div class="flex space-x-4">
                  <p class="w-36">Fecha de Visita</p>
                  <input class="-ml-4 bg-gray-100 width" type="date" name="" id="" />
                </div>
                <div class="flex space-x-10">
                  <p class="width">Persona que atendió</p>
                  <input
                    class="px-4 bg-gray-100 border rounded-sm width focus:outline-none"
                    disabled
                    type="text"
                  />
                </div>
              </div>
              <div class="flex mt-4 space-x-10">
                <div class="flex space-x-4">
                  <p class="w-36">Tipo de visita</p>
                  <select class="bg-gray-100 width" name="" id=""></select>
                </div>
                <div class="flex space-x-10">
                  <p class="width">Motivo de la visita</p>
                  <select class="bg-gray-100 width" name="" id=""></select>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between mt-10 mx-9">
            <div class="mt-4">
              <h3>Resultado de esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div class="mt-4">
              <h3>Resultado de esta (visita anterior)</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="5"
                disabled
              ></textarea>
            </div>
          </div>
          <div class="flex justify-between space-x-20 mx-9">
            <div class="mt-4">
              <h3>Siguiente paso, en esta visita</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="5"
              ></textarea>
            </div>
            <div class="mt-4">
              <h3>Siguiente paso (visita anterior)</h3>
              <textarea
                class="px-4 py-2 border focus:outline-none"
                name=""
                id=""
                cols="40"
                rows="5"
                disabled
              ></textarea>
            </div>
          </div>
          <div class="flex justify-end mx-10 mt-4">
            <button class="flex items-center space-x-2">
              <img class="w-6" src="/images/save.svg" alt="" />
              <p>Grabar registro de visita</p>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal buscarCliente -->
    <div v-if="buscarCliente">
      <BuscarCliente @click="handleClick" />
    </div>

    
  </div>
</template>

<script>
import BuscarCliente from '@/components/modals/BuscarCliente.vue'
export default {
  name: "registroVisitas",
  components: {
    BuscarCliente
  },
  data() {
    return {
      registrarVisita: false,
      buscarCliente: false
    };
  },

  methods: {
    handleClick() {
      this.buscarCliente = false
    }
  }
};
</script>

<style>
.width {
  width: 258px;
}
</style>
