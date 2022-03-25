<template>
  <div class="pt-28">
    <div class="py-10 border shadow-xl mx-28">
      <h2 class="text-2xl font-semibold text-center">Registro de visitas</h2>
      <div class="mx-10 mt-4">
        <div class="flex justify-center space-x-10">
          <div class="">
            <p class="ml-10">Codigo</p>
            <div class="flex space-x-2">
              <button>
                <img class="h-6" src="/images/prismaticos.png" alt="" />
              </button>
              <input
                class="w-40 px-4 border rounded-sm focus:outline-none"
                type="text"
              />
            </div>
          </div>
          <div class="">
            <p>Nombre / Razón Social</p>
            <input
              class="px-4 border rounded-sm w-96 focus:outline-none"
              disabled
              type="text"
            />
          </div>
          <div class="">
            <p>Ciudad</p>
            <input
              class="px-4 border rounded-sm w-80 focus:outline-none"
              disabled
              type="text"
            />
          </div>
          <div class="">
            <p>Vendedor</p>
            <input
              class="px-4 border rounded-sm w-80 focus:outline-none"
              disabled
              type="text"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="">
            <div class="flex justify-center mt-10 space-x-20">
              <div class="flex space-x-10">
                <p class="w-72">Cupo de Credito</p>
                <input
                  class="w-56 px-4 border rounded-sm focus:outline-none"
                  disabled
                  type="text"
                />
              </div>
              <div class="flex space-x-10">
                <p class="w-72">Persona encargada de Pagos</p>
                <input
                  class="w-56 px-4 border rounded-sm focus:outline-none"
                  disabled
                  type="text"
                />
              </div>
            </div>
            <div class="flex justify-center mt-4 space-x-20">
              <div class="flex space-x-10">
                <p class="w-72">Extra Cupo</p>
                <input
                  class="w-56 px-4 border rounded-sm focus:outline-none"
                  disabled
                  type="text"
                />
              </div>
              <div class="flex space-x-10">
                <p class="w-72">Nro. Teléfono</p>
                <input
                  class="w-56 px-4 border rounded-sm focus:outline-none"
                  disabled
                  type="text"
                />
              </div>
            </div>
            <div class="flex justify-center mt-4 space-x-20">
              <div class="flex space-x-10">
                <p class="w-72">Dia limite para recepcion Facturas</p>
                <input
                  class="w-56 px-4 border rounded-sm focus:outline-none"
                  disabled
                  type="text"
                />
              </div>
              <div class="flex space-x-10">
                <p class="w-72">Email</p>
                <input
                  class="w-56 px-4 border rounded-sm focus:outline-none"
                  disabled
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="w-32 px-4 mt-10">
            <button>
              <img class="h-10 ml-5" src="/images/buscar.png" alt="" />
              <p class="text-sm">Consultar ficha cliente</p>
            </button>
          </div>
        </div>
        <div>
          <div class="flex items-center justify-between mx-32 mt-20">
            <h2 class="text-xl font-semibold">Historial de Visitas</h2>
            <button class="flex items-center space-x-2">
              <img class="h-10 ml-5" src="/images/buscar.png" alt="" />
              <p class="text-sm">Consultar ficha cliente</p>
            </button>
          </div>
          <div class="mx-32 mt-4">
            <table class="w-full">
              <thead class="w-full">
                <tr class="w-full border text-azul">
                  <th class="w-1/12 text-sm border">Fecha Visita</th>
                  <th class="w-2/12 text-sm border">Persona Contacto</th>
                  <th class="w-2/12 text-sm border">
                    Motivo Visita
                  </th>
                  <th class="w-2/12 text-sm border">Resultado</th>
                  <th class="w-2/12 text-sm border">
                    Siguiente Paso
                  </th>
                  <th class="w-2/12 text-sm border">Proxima Visita</th>
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
            <h2 class="text-xl font-semibold">Historial de Compras</h2>
          </div>
          <div class="mx-32 mt-4">
            <table class="w-full">
              <thead class="w-full">
                <tr class="w-full border text-azul">
                  <th class="w-1/12 text-sm border">#Ot</th>
                  <th class="w-1/12 text-sm border">Refencia</th>
                  <th class="w-1/12 text-sm border">
                    Estilo
                  </th>
                  <th class="w-1/12 text-sm border">Tipo Trabajo</th>
                  <th class="w-1/12 text-sm border">
                    Solicitada
                  </th>
                  <th class="w-1/12 text-sm border">Entregada</th>
                  <th class="w-1/12 text-sm border">
                    Ult.compra
                  </th>
                  <th class="w-1/12 text-sm border">
                    Cant.Tq/Mes
                  </th>
                  <th class="w-1/12 text-sm border">
                    Promo.Ult.Año
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
</template>

<script>
export default {};
</script>

<style></style>
