<template>
  <div class="ancho">
    <client-only>
      <h2 class="ml-4">Ventas de los ultimos 3 años</h2>
      <div class="flex justify-end">
        <button @click="setType(1)">
          <img class="h-10 mr-4" src="/images/grafico-barras.png" alt="" />
        </button>
        <button @click="setType(2)">
          <img class="h-10 mr-4" src="/images/linea-grafica.png" alt="" />
        </button>
      </div>

      <VueApexCharts
        :type="type"
        height="250"
        :options="chartOptions"
        :series="series"
      ></VueApexCharts>
    </client-only>
  </div>
</template>

<script>
//https://stackoverflow.com/questions/60185404/vue-laravel-apexchart-piechart
import TercerosClientes from "@/models/Terceros";
export default {
  name: "ventasUltimos3Anios",
  props: ["IdTercero"],

  data() {
    return {
      type: "line",
      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5
          }
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
          ]
        }
      }
    };
  },

  watch: {
    IdTercero() {
      TercerosClientes.ventasUltimos3Anios(this.IdTercero).then(response => {
        this.series = response.data;
      });
    }
  },

  methods: {
    setType(id) {
      if (id == 1) {
        return (this.type = "bar");
      } else {
        return (this.type = "line");
      }
    }
  }
};
</script>

<style scoped>
.ancho {
  min-width: 450px;
}
</style>
