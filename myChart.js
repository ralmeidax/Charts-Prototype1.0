
//var ctx = document.getElementById('myChart');
var ctx1 = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myBubbleChart');
var ctx3 = document.getElementById('myPieChart');


var myChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Cadeiras', 'Mesas', 'Geladeiras', 'Fornos', 'Televisores'],
        datasets: [{
            label: 'Vendas > R$ Milhões',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
            borderRadius: 5
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins:{
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 14,
                        family: 'Poppins',
                    }
                }
            }
        }
    }
});




var myLineChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Jan-21', 'Fev-21', 'Mar-21', 'Abr-21', 'Mai-21', 'Jun-21'],
        datasets: [{
            label: 'Vendas > R$ Milhões ',
            data: [1200, 1900, 3300, 5000, 2000, 3010],
            cubicInterpolationMode: 'monotone',
            tension: 0.9,
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            backgroundColor:[
                'rgba(255,255,255,1)',
            ],
            borderWidth: 3,
            borderRadius: 5,
            radius:5,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins:{
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 255, 255)',
                    font: {
                        size: 14,
                        family: 'Poppins',
                    }
                }
            }
        }
    }
});

var myPieChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: [
            'Cadeira',
            'Mesas',
            'Geladeiras',
            'Fornos',
            'Televisores'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
             hoverOffset: 2

          }]   
    },
    options: {
        plugins:{
            tooltips: {
                enabled: true
            },
            legend:{
                display: false,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Percentual de Vendas',
                color: 'rgb(255, 255, 255)',
                font:{
                    family: 'Poppins',
                    size: 14
                }
            }
        }
    }
});

