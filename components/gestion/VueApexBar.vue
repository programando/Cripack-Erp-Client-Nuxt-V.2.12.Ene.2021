<template>
  <div class="ancho">
    <client-only>
       <VueApexCharts type="bar" height="250" :options="chartOptions" :series="series"></VueApexCharts>
    </client-only>
   
  </div>
</template>

<script>

//https://stackoverflow.com/questions/60185404/vue-laravel-apexchart-piechart
export default {
  name: "VueApexBar",

  data() {
    return {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany"
          ]
        }
      }
    };
  }
};
</script>

<style scoped>
.ancho {
  min-width: 250px;
}

</style>
