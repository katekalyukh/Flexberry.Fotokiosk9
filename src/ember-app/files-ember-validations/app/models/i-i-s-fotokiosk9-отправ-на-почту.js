import {
  defineNamespace,
  defineProjections,
  Model as ОтправНаПочтуMixin
} from '../mixins/regenerated/models/i-i-s-fotokiosk9-отправ-на-почту';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтправНаПочтуMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
