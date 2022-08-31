<script>
import { Line } from "vue-chartjs";
import DashBoard from "@/models/dashBoard";

export default {
  extends: Line,

  data: () => ({
      ventas : [],
      esteAnio: 0,
  }),

  mounted() {

     

    this.renderChart(
      {
        labels: [
          "ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],
        datasets: [
          {
            label: 2019 ,
            data: [250640222,	304800288,	307491873,	349263648,	326155671,	323795817,	413916288,	314675004,	367341443.4200,	410332214.2300,	493451072.4600,	363261079.2800],
            backgroundColor: "transparent",
            borderColor: "rgba(0,201,80,0.4)",
            pointBackgroundColor: "rgba(0, 0, 0, 1)"
          },
            {
            label: "2020",
            data: [	319449598.3000,	355276935,347584575.2500	,232662470.6500	,299625593.6200,	283608664.1800,	313614189.9200,	396685670.1000,	359149433.4300,	393190795.4100	,471714087.1100,	330308424.8700],
            backgroundColor: "transparent",
            borderColor: "rgba(39,44,107,1)",
            pointBackgroundColor: "rgba(0,201,80,0.4)"
          },

           {
            label: "2021",
            data: [163287004.8000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000,	0.0000],
            backgroundColor: "transparent",
            borderColor: "rgba(255,2,7,0.51)",
            pointBackgroundColor: "rgba(0, 0, 0, 1)"
          }


        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: false,
          text: ""
        },
  

      }
    );
  }
};
</script>