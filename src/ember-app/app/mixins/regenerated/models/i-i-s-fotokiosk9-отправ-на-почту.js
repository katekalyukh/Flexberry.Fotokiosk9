import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  фИО: DS.attr('string'),
  сделатьФото: DS.belongsTo('i-i-s-fotokiosk9-сделать-фото', { inverse: null, async: false })
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-fotokiosk9-отправ-на-почту.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-fotokiosk9-отправ-на-почту.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сделатьФото: {
    descriptionKey: 'models.i-i-s-fotokiosk9-отправ-на-почту.validations.сделатьФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтправНаПочтуE', 'i-i-s-fotokiosk9-отправ-на-почту', {
    фИО: attr('ФИО', { index: 0 }),
    email: attr('Email', { index: 1 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk9-сделать-фото', 'Сделанное фото', {
      id: attr('Сделанное фото', { index: 2 }),
      категорФото: attr('Категория фото', { index: 3 }),
      колВоФото: attr('Количество фото', { index: 4 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('ОтправНаПочтуL', 'i-i-s-fotokiosk9-отправ-на-почту', {
    фИО: attr('ФИО', { index: 0 }),
    email: attr('E-mail', { index: 1 }),
    сделатьФото: belongsTo('i-i-s-fotokiosk9-сделать-фото', 'Сделанное фото', {
      id: attr('Сделанное фото', { index: 2 }),
      категорФото: attr('Категория фото', { index: 3 }),
      колВоФото: attr('Количество', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
