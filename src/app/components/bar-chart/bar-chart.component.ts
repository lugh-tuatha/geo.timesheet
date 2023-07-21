import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {
  ngOnInit(){
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', "Jul", "Aug", "sep", "oct", "nov", "dec"],
        datasets: [{
          label: 'Monthly Total Manhours',
          data: [1080, 1029, 1000, 1000, 1022, 1042, 1500],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
