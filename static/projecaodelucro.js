function valor_meses(arquivo){
  var labels_meses = Object.keys(arquivo)
  return labels_meses
}

function valor(arquivo){
  var dados_valores = Object.values(arquivo)
  return dados_valores
}

let mesesProjecaodelucro = valor_meses(variavel1)

let valoresProjecaodelucro = valor(variavel1)

console.log(mesesProjecaodelucro)

console.log(valoresProjecaodelucro)


// Código do Gráfico

const ctx = document.getElementById("myChart")

const labels = mesesProjecaodelucro

const data = {
    labels,
    datasets:[{
        backgroundColor: 'rgb(103, 169, 243)',
        borderColor: 'rgb(21, 60, 234)',
        data: valoresProjecaodelucro,
        label: "Projeção de lucro"
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          },
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
    },
  };

  const myChart = new Chart(ctx, config)
