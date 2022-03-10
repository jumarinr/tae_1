import _ from 'lodash';

import axios from 'axios';
import Papa from 'papaparse';

const transformRow = (value, field) => (_.includes(['edad', 'semestre'], field)
  ? _.parseInt(String(value).trim().split(' ')[0])
  : _.deburr(String(value)
    .trim()
    .toLowerCase()));

const obtenerPrimerNombre = (nombre = '') => _.get(nombre.split(' '), '0');

const obtenerNombres = (personas) => {
  const primerosNombres = _.map(personas, (persona) => obtenerPrimerNombre(persona.nombre));

  return _.uniq(primerosNombres);
};

const obtenerGeneros = async (nombres) => {
  const chunks = _.chunk(nombres, 10);

  return chunks.reduce(async(acumulado, nombresActuales) => {
    const { data } = await axios('https://api.genderize.io', {
      params: {
        'name[]': await nombresActuales,
      },
    });

    (await acumulado).push(...data);

    return acumulado;
  }, []);
};

const transformData = (generos) => (persona) => {
  const name = obtenerPrimerNombre(persona.nombre);

  const generoPorPersona = _.find(generos, {
    name,
  });

  return {
    ...persona,
    genero: generoPorPersona.gender || 'No Identificado',
  };
};

const retornarJSON = async({ file, asumirGenero }) => {
  const headers = 'nombre|carrera|edad|semestre|trabaja|pasatiempo\n';
  const fileJSON = Papa.parse(headers + file.content, {
    delimiter: '',
    newline: '',
    header: true,
    transform: transformRow,
  });

  const result = fileJSON.data || [];

  if (asumirGenero) {
    const nombres = obtenerNombres(result);
    const generos = await obtenerGeneros(nombres);

    return result.map(transformData(generos));
  }

  return result;
};

export default retornarJSON;
