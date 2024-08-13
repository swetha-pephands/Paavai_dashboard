import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Chart, registerables, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-performence',
  templateUrl: './performence.page.html',
  styleUrls: ['./performence.page.scss'],
})
export class PerformencePage implements AfterViewInit {

  @ViewChild('programsCanvas', { static: false }) private programsCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('eventsCanvas', { static: false }) private eventsCanvas!: ElementRef<HTMLCanvasElement>;

  programsChart: Chart | undefined;
  eventsChart: Chart | undefined;

  constructor() {
    // Register Chart.js components
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.initializeProgramsChart();
    this.initializeEventsChart();
  }

  initializeProgramsChart() {
    if (this.programsCanvas) {
      const ctx = this.programsCanvas.nativeElement.getContext('2d');
      if (ctx) {
        this.programsChart = new Chart(ctx, this.getChartConfig('Programs'));
      }
    }
  }

  initializeEventsChart() {
    if (this.eventsCanvas) {
      const ctx = this.eventsCanvas.nativeElement.getContext('2d');
      if (ctx) {
        this.eventsChart = new Chart(ctx, this.getChartConfig('Events'));
      }
    }
  }

  getChartConfig(chartType: string): ChartConfiguration<'line', number[], string> {
    return {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Data',
          fill: false,
          tension: 0.1,
          backgroundColor: chartType === 'Programs' ? 'rgb(199, 91, 122)' : 'rgb(199, 91, 122)',
          borderColor: chartType === 'Programs' ? '#9e2065' : '#9e2065',
          pointBorderColor: chartType === 'Programs' ? 'rgb(199, 91, 122)' : 'rgb(199, 91, 122)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: chartType === 'Programs' ? 'rgb(199, 91, 122)' : 'rgb(199, 91, 122)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
          spanGaps: false,
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              autoSkip: true,
              maxRotation: 45,
              minRotation: 45
            }
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10
            }
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          }
        }
      }
    };
  }

  updateProgramsChart(type: string) {
    const chartData = this.getProgramsChartData(type);
    if (this.programsChart) {
      this.programsChart.data.labels = chartData.labels;
      this.programsChart.data.datasets[0].data = chartData.data;
      this.programsChart.update();
    }
  }

  updateEventsChart(type: string) {
    const chartData = this.getEventsChartData(type);
    if (this.eventsChart) {
      this.eventsChart.data.labels = chartData.labels;
      this.eventsChart.data.datasets[0].data = chartData.data;
      this.eventsChart.update();
    }
  }

  getProgramsChartData(type: string) {
    switch (type) {
      case 'district':
        return {
          labels: ['Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Erode','Chennai', 'Madurai', 'Coimbatore', 'Trichy', 'Erode'],
          data: [10, 5, 32, 15, 50,10, 5, 32, 15, 50]
        };
      case 'coordinator':
        return {
          labels: ['Chennai', 'Selam', 'Vellur', 'Kadalur'],
          data: [15, 5, 35, 45]
        };
      case 'category':
        return {
          labels: ['Category X', 'Category Y', 'Category Z'],
          data: [5, 10, 0, 30]
        };
      case 'indicator':
        return {
          labels: ['Indicator 1', 'Indicator 2', 'Indicator 3', 'Indicator 4', 'Indicator 5', 'Indicator 6'],
          data: [0, 10, 5, 20, 35, 25]
        };
      default:
        return {
          labels: [],
          data: []
        };
    }
  }

  getEventsChartData(type: string) {
    switch (type) {
      case 'district':
        return {
          labels: ['District A', 'District B', 'District C', 'District D', 'District E'],
          data: [10, 5, 40, 20, 60]
        };
      case 'coordinator':
        return {
          labels: ['Coordinator V','Coordinator W','Coordinator X', 'Coordinator Y', 'Coordinator Z'],
          data: [20, 35, 15, 5, 40]
        };
      case 'category':
        return {
          labels: ['Event V','Event W','Event X', 'Event Y', 'Event Z'],
          data: [15, 5, 10, 30, 10]
        };
      case 'indicator':
        return {
          labels: ['Indicator A', 'Indicator B', 'Indicator C', 'Indicator D', 'Indicator E'],
          data: [10, 20, 5, 40, 50]
        };
      default:
        return {
          labels: [],
          data: []
        };
    }
  }
}
