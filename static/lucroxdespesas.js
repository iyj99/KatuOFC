function valor(arquivo){
  var dados_valores = Object.values(arquivo)
  return dados_valores
}

let valoresLucroXDespesas = valor(variavel1)
console.log(valoresLucroXDespesas)

//Código do Gráfico

const ctx = document.getElementById("myChart")

const labels = [
  
]

const data = {
    labels: [
        'Lucro',
        'Despesas',
      ],
    datasets:[{
       //  borderColor: 'rgb(255, 99, 132)',
        data: valoresLucroXDespesas,
        backgroundColor: [
            'rgb(28, 113, 209',
            'rgb(241, 32, 32)',
          ],
          hoverOffset: 4,
        label: "Progressão de vendas"
    }]
}

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true
    }
  };

  const myChart = new Chart(ctx, config)
  
  
  
  
  
  
/*
const ctx = document.getElementById("myChart")

const labels = [
  
]

const data = {
    labels: [
        'Lucro',
        'Despesas',
      ],
    datasets:[{
       //  borderColor: 'rgb(255, 99, 132)',
        data: [62.1 , 37.9],
        backgroundColor: [
            'rgb(28, 113, 209',
            'rgb(241, 32, 32)',
          ],
          hoverOffset: 4,
        label: "Progressão de vendas"
    }]
}

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true
    }
  };

  const myChart = new Chart(ctx, config)
  
  */
