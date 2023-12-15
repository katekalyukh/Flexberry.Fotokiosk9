import {
  defineNamespace,
  defineProjections,
  Model as ПечатьMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk9-печать';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПечатьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
