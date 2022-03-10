import { Meteor } from 'meteor/meteor';

import Joi from 'joi';

const validateSchema = (schema) => (params = {}) => {
  const joiSchema = Joi.object(schema);
  const { error, value } = joiSchema.validate(params);

  if (error) {
    throw new Meteor.Error('error_schema', error.message);
  }

  Object.assign(params, value);
};

export default validateSchema;
