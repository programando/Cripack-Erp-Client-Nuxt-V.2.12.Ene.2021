<template>
  <div class="pt-24 mx-2 font-Montserrat">
    <div class="mt-10 mx-96">
      <div class="items-center w-full text-xl font-semibold border text-azul">
        <div class="flex justify-center w-full py-1 text-lg">
          Datos Caja-Máquina
        </div>
      </div>
      <table class="w-full">
        <tbody class="w-full">
          <tr class="border">
            <td class="w-6/12 px-4 border">Dimensiones</td>
            <td class="w-2/12 text-center border ">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_Largo" />
            </td>
            <td class="w-2/12 text-center border ">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_Ancho" />
            </td>
            <td class="w-2/12 text-center border ">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_Alto" />
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">Estilos</td>
            <td colspan="3" class="text-center">
              <select class="w-40 px-2" name="select">
                <option value="baul">Baul</option>
                <option value="automatico">Automatico</option>
                <option value="cuatroPuntas">Cuatro Puntas</option>
                <option value="seisPuntas" selected>Seis Puntas</option>
              </select>
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">Cabida</td>
            <td colspan="3" class="text-center">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_Cabida">
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">Tiraje</td>
            <td colspan="3" class="text-center">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_Tiraje">
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">Formato-Máquina</td>
            <td colspan="3" class="text-center">
              <select class="w-40 px-2" name="select">
                <option value="formatoMaquina">Formato Máquina</option>
                <option value="medioPliego" selected>Medio Pliego</option>
                <option value="pliego">Pliego</option>
              </select>
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">Pedidos al año</td>
            <td colspan="3" class="text-center">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_PedAnio">
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">Valor Hora Máquina($)</td>
            <td colspan="3" class="text-center">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_VrHrMaq">
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">
              Relación Valor Producido/ Valor Hora Máquina
            </td>
            <td colspan="3" class="text-center">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_VrPnHrMaq">
            </td>
          </tr>
          <tr class="border">
            <td class="w-6/12 px-4 border">
              Velocidad de Trabajo(golpes/hora)
            </td>
            <td colspan="3" class="text-center">
              <input class="w-40 px-4" type="text" v-model="datos.cajMaq_Velocidad">
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  }
};
</script>

<style></style>
