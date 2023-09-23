const btn = document.querySelectorAll('.btn');
const input = document.getElementById('pantalla');
const clear = document.querySelector('.clear');
const res = document.querySelector('.res');
const del = document.querySelector('.delete');

clear.addEventListener('click', borrar);
res.addEventListener('click', calcular);
del.addEventListener('click', remove);

console.log(typeof input.value);
btn.forEach((butn) => {
  butn.addEventListener('click', function () {
    input.value += butn.value;
  });
});

function borrar() {
  input.value = '';
}

function calcular() {
  const resultado = eval(input.value);
  input.value = resultado;
}

function remove() {
  let str = input.value.slice(0, -1);
  input.value = str;
}
