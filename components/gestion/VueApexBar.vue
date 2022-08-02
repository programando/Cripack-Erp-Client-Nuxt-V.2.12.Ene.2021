<template>
  <div class="ancho">
    <client-only>
       <VueApexCharts type="bar" height="250" :options="chartOptions" :series="series"></VueApexCharts>
    </client-only>
   
  </div>
</template>

<script>
var Numeral = require("numeral");
//https://stackoverflow.com/questions/60185404/vue-laravel-apexchart-piechart
import TercerosClientes from "@/models/Terceros";
export default {
  name: "productosUltimos3Anios",
  props: ['IdTercero'],
  data() {
    return {
      series: [         
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
            title: {
              text: "Productos últimos 3 años (miles de pesos)",
              align: "left"
            },            
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: [],
              labels: {
                formatter: function (val) {
                  return Numeral(val/1000).format("0,0");
                },
              },
            },
            
      }
    };
  },
 


  watch:{
      IdTercero() {
            TercerosClientes.productosUltimos3Anios(this.IdTercero)
            .then( response => {
                this.series               = response.data;
                const categories = response.data[0].categories
                this.updateAxis(categories);
            })      
      }
  },
  
  methods :{
       updateAxis(data) {
      this.chartOptions = {
        xaxis: {
          categories: data
        }
      };
    }
  }


};
</script>

<style scoped>
.ancho {
  min-width: 450px;
}

</style>
