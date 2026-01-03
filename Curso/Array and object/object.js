let carro = {
  marca: 'Toyota',
  modelo: 'corolla',
  ano: 2024,
  cor: 'Prata',
  airbag: true,
  itens: ['abs', '4 portas', 'vrido elétrico'],
};

// console.log(carro.marca);
// console.log(carro['modelo']);

carro.kilometragem = 150000;

delete carro.airbag;

console.log(carro);
