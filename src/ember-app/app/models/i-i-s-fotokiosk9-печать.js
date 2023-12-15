import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПечатьMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk9-печать';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПечатьMixin, Validations, {
});

defineProjections(Model);

export default Model;
