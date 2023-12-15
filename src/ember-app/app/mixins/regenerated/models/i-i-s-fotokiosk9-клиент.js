import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  оплата: DS.belongsTo('i-i-s-fotokiosk9-оплата', { inverse: null, async: false }),
  отправНаПочту: DS.belongsTo('i-i-s-fotokiosk9-отправ-на-почту', { inverse: null, async: false })
});

export let ValidationRules = {
  оплата: {
    descriptionKey: 'models.i-i-s-fotokiosk9-клиент.validations.оплата.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отправНаПочту: {
    descriptionKey: 'models.i-i-s-fotokiosk9-клиент.validations.отправНаПочту.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-fotokiosk9-клиент', {
    отправНаПочту: belongsTo('i-i-s-fotokiosk9-отправ-на-почту', 'ФИО', {
      фИО: attr('ФИО', { index: 0 }),
      email: attr('Email', { index: 1 })
    }, { index: -1, hidden: true }),
    оплата: belongsTo('i-i-s-fotokiosk9-оплата', 'Номер заказа', {
      сделатьФото: belongsTo('i-i-s-fotokiosk9-сделать-фото', '', {
        id: attr('Номер заказа', { index: 2 })
      }, { index: -1, hidden: true }),
      дата: attr('Дата заказа', { index: 3 }),
      время: attr('Время заказа', { index: 4 }),
      способОпл: attr('Способ оплаты', { index: 5 }),
      сумма: attr('Сумма', { index: 6 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-fotokiosk9-клиент', {
    отправНаПочту: belongsTo('i-i-s-fotokiosk9-отправ-на-почту', 'Данные о клиенте', {
      фИО: attr('ФИО', { index: 1 }),
      email: attr('Email', { index: 2 })
    }, { index: 0 }),
    оплата: belongsTo('i-i-s-fotokiosk9-оплата', 'Заказ', {
      сделатьФото: belongsTo('i-i-s-fotokiosk9-сделать-фото', '', {
        id: attr('Номер заказа', { index: 4 })
      }, { index: -1, hidden: true }),
      дата: attr('Дата заказа', { index: 5 }),
      время: attr('Время заказа', { index: 6 }),
      способОпл: attr('Способ оплаты', { index: 7 }),
      сумма: attr('Сумма', { index: 8 })
    }, { index: 3 })
  });
};
