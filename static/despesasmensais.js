const ctx = document.getElementById("myChart")

const labels = [
    'Agosto',
    'Setembro',
    'Outubro',
    'Dezembro',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
  
]

const data = {
    labels,
    datasets:[{
        backgroundColor: 'rgb(2, 46, 156)',
        borderColor: 'rgb(21, 60, 234)',
        data: [2013, 2500, 2301, 2400, 2532, 5212, 2900, 3150, 2403, 2000, 4000, 3800],
        label: "Despesas por Mensais"
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