export const a = 1;

export const sumByField = ({ field, list }) => {
  const data = list.reduce((acumulador, current) => ({
    ...acumulador,
    [current[field]]: (acumulador[current[field]] || 0) + 1,
  }), {});

  return Object
    .keys(data)
    .map((atributo) => ({
      name: atributo,
      total: data[atributo],
    }));
};
