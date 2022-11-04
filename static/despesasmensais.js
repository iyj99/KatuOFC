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

const ctx1 = document.getElementById("myChart1")

const labels1 = mesesDespesasmensais

const data1 = {
    labels1,
    datasets:[{
        backgroundColor: 'rgb(103, 169, 243)',
        borderColor: 'rgb(21, 60, 234)',
        data: valoresDespesasmensais,
        label: "Despesas Mensais"
    }]
}

const config1 = {
    type: 'line',
    data: data1,
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

  const myChart1 = new Chart(ctx1, config1)
