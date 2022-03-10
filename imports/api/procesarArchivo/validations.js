import Joi from 'joi';

const schemaRetornar = {
  file: Joi.object().required(),
  asumirGenero: Joi.boolean().required(),
};

export default schemaRetornar;
