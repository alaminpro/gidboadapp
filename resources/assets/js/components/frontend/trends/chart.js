// CommitChart.js
import {
  Bar
} from 'vue-chartjs';

export default {
  extends: Bar,
  mounted() {
    let url = "todays-trends/tempfuel";
    let vm = this;
    axios.get(url).then(res => {  
      this.labels = res.data[0].labels;
      this.backgroundColor = res.data[0].backgroundColor;
      this.data = res.data[0].data; 
      this.chartRender()
    });
  }, // end mounted 
  data() {
    return { 
      labels: '',
      backgroundColor: '',
      data: '',
    }
  },
  methods: {
    chartRender() {
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: this.labels,
        datasets: [
          { 
            backgroundColor: this.backgroundColor,
            data: this.data
          }
        ]
      }, {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ 
            categoryPercentage: 0.5,
            barPercentage: .5
          }],
          yAxes: [{ 
            ticks: {
              suggestedMin: 50,
              suggestedMax: 20000,
              callback: function (label, index, labels) {
                if (label <= 1000) {
                  return label / 1000;
                } else {
                  return label / 1000 + 'k';
                }
              }
            }
          }],
        },
      }); //end chart render
    }
  }
} // end main export