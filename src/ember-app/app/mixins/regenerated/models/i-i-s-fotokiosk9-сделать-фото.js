import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  id: DS.attr('number'),
  категорФото: DS.attr('i-i-s-fotokiosk9-категория'),
  колВоФото: DS.attr('number'),
  цена: DS.attr('number'),
  допНастройки: DS.hasMany('i-i-s-fotokiosk9-доп-настройки', { inverse: 'сделатьФото', async: false })
});

export let ValidationRules = {
  id: {
    descriptionKey: 'models.i-i-s-fotokiosk9-сделать-фото.validations.id.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  категорФото: {
    descriptionKey: 'models.i-i-s-fotokiosk9-сделать-фото.validations.категорФото.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  колВоФото: {
    descriptionKey: 'models.i-i-s-fotokiosk9-сделать-фото.validations.колВоФото.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-fotokiosk9-сделать-фото.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  допНастройки: {
    descriptionKey: 'models.i-i-s-fotokiosk9-сделать-фото.validations.допНастройки.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СделатьФотоE', 'i-i-s-fotokiosk9-сделать-фото', {
    id: attr('Код', { index: 0 }),
    колВоФото: attr('Количество фото', { index: 1 }),
    категорФото: attr('Категория фото', { index: 2 }),
    цена: attr('Цена(руб)', { index: 3 }),
    допНастройки: hasMany('i-i-s-fotokiosk9-доп-настройки', 'Дополнительные настройки', {
      уголок: attr('Уголок', { index: 0 }),
      чБЦвет: attr('Ч б цвет', { index: 1 })
    })
  });

  modelClass.defineProjection('СделатьФотоL', 'i-i-s-fotokiosk9-сделать-фото', {
    id: attr('Код', { index: 0 }),
    колВоФото: attr('Количество фото', { index: 1 }),
    категорФото: attr('Категория фото', { index: 2 }),
    цена: attr('Цена(руб)', { index: 3 }),
    допНастройки: hasMany('i-i-s-fotokiosk9-доп-настройки', 'Дополнительные настройки', {
      уголок: attr('Уголок', { index: 0 }),
      чБЦвет: attr('Ч б цвет', { index: 1 })
    })
  });
};
