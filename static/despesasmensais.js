function valor_meses(arquivo){
  var labels_meses = Object.keys(arquivo)
  return labels_meses
}

function valor(arquivo){
  var dados_valores = Object.values(arquivo)
  return dados_valores
}

let mesesDespesasmensais = valor_meses(variavel1)

let valoresDespesasmensais = valor(variavel1)

console.log(mesesDespesasmensais)

console.log(valoresDespesasmensais)

//Código do Gráfico

const ctx = document.getElementById("myChart")

const labels = mesesDespesasmensais

const data = {
    labels,
    datasets:[{
        backgroundColor: 'rgb(103, 169, 243)',
        borderColor: 'rgb(21, 60, 234)',
        data: valoresDespesasmensais,
        label: "Despesas Mensais"
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
