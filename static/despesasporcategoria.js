const ctx = document.getElementById("myChart")

const labels = [
    'A',
    'B',
    'C',
    'D',
    'E',
]

const data = {
    labels,
    datasets:[{
        backgroundColor: 'rgb(103, 169, 243)',
        borderColor: 'rgb(21, 60, 234)',
        data: [500, 321, 301, 400, 532,],
        label: "Despesas por Categoria"
    }]
    
}

const config = {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }
    },
  };

  const myChart = new Chart(ctx, config)