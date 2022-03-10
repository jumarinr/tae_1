import { ValidatedMethod } from 'meteor/mdg:validated-method';

import validateSchema from '../utils/validateSchema';
import schemaRetornar from './validations';
import retornarJSON from './retornarJSON';

const retornarJSONMethod = new ValidatedMethod({
  name: 'retornarJSON',
  validate: validateSchema(schemaRetornar),
  run(data) {
    this.unblock();

    return {
      data: Promise.await(retornarJSON(data)),
    };
  },
});

export default retornarJSONMethod;
