<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: [
          "ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"],
        datasets: [
          {
            label: "2021",
            data: [20,0,30,0,60,70,80],
            backgroundColor: "transparent",
            borderColor: "rgba(100, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(0, 0, 0, 1)"
          },
            {
            label: "2020",
            data: [70, 50, 40, 190, 10, 16, 50],
            backgroundColor: "transparent",
            borderColor: "rgba(180, 16, 88, 0.50)",
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