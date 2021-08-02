console.log(cervejas);
console.log(entregas);

console.log(pedidos);

const mapper = (accumulator, currentValue) => {
  const cerveja = cervejas.find((value) => value.codigo === currentValue.codigoCerveja)
  const entrega = entregas.find((value) => value.pedidoId === currentValue.id)

  const objPedido = {
    id: currentValue.id,
    descrição: cerveja.descricao,
    qnt: currentValue.quantidade,
    veiculoEntrega: entrega.placaVeiculo,
  }

  accumulator.push(objPedido);

  return accumulator;
};

const out = pedidos.reduce(mapper, []);
