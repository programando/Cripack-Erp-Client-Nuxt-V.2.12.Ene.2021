<template>
  <div class="ancho">
    <client-only>
       <VueApexCharts type="bar" height="340" :options="chartOptions" :series="series"></VueApexCharts>
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
  series: [],

      chartOptions: {
            chart: {
              type: "bar",
              height: 300,
              stacked:true,
 
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true
              }
            },
            stroke: {
              width: 1,
              colors: ['#fff']
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
                  return val/1000 + "K"
                }
              }
            },
           fill: {
              opacity: 1
            },
          
        yaxis: {

              labels: {
                formatter: function (val) {
                  return Numeral(val).format("0,0");
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
               console.log (response )
                this.series               = response.data[0];
                const categories = response.data.categories
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
