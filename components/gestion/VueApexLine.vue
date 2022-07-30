<template>
  <div class="ancho">
    <client-only>
      <VueApexCharts type="line" height="250" :options="chartOptions" :series="series"></VueApexCharts>
    </client-only>
    
  </div>
</template>

<script>
//https://stackoverflow.com/questions/60185404/vue-laravel-apexchart-piechart
import TercerosClientes from "@/models/Terceros";
export default {
  name: "ventasUltimos3Anios",
  props: ['IdTercero'],
 
  data() {
    return {
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
        title: {
          text: "Ventas últimos 3 años",
          align: "left"
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

watch:{
    IdTercero() {
          TercerosClientes.ventasUltimos3Anios(this.IdTercero)
          .then( response => {
              this.series = response.data;
          })      
    }
}

};
</script>

<style scoped>
.ancho {
  min-width: 450px;
}
</style>
