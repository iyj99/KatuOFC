/* var variavel1 = {{variavel1|safe}};
var variavel2 = {{variavel2|safe}}; */

var variavel1 = 1;
var variavel2 = 2;
var variavel3 = 3;
var variavel4 = 4;

let variables_array = [
    variavel1,
    variavel2,
    variavel3,
    variavel4
];

let charts_array = document.querySelectorAll('.chart');

variables_array.forEach((variable, index) => {
    if(variable == null){
        charts_array[index].style.display = 'none';
    };
});