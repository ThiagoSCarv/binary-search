const array = [1, 3, 4, 5, 7, 10];

let ponteiroDoInicio = 0;

let ponteiroDoFinal = array.length - 1;

const alvo = 9;

while (ponteiroDoInicio < ponteiroDoFinal) {
  const soma = array[ponteiroDoInicio] + array[ponteiroDoFinal];

  if (soma === alvo) {
    console.log(soma, alvo);
  }

  if (soma < alvo) {
    ponteiroDoInicio++;
  } else {
    ponteiroDoFinal--;
  }
}
