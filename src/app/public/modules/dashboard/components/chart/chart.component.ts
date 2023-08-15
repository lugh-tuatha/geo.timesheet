import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
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

    new Chart("pie-chart", {
      type: 'pie',
      data: {
        labels: ['Exlar 2023-138', "Paglinawan 2022-116", "Alaba 2022-113"],
        datasets: [{
          label: 'Monthly Total Manhours',
          data: [2.2, 3.5, 9.2 ],
        }]
      }
    });
  }
}
