import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISFotokiosk9КлиентLForm from './forms/i-i-s-fotokiosk9-клиент-l';
import IISFotokiosk9ОплатаLForm from './forms/i-i-s-fotokiosk9-оплата-l';
import IISFotokiosk9ОтправНаПочтуLForm from './forms/i-i-s-fotokiosk9-отправ-на-почту-l';
import IISFotokiosk9ПечатьLForm from './forms/i-i-s-fotokiosk9-печать-l';
import IISFotokiosk9СделатьФотоLForm from './forms/i-i-s-fotokiosk9-сделать-фото-l';
import IISFotokiosk9КлиентEForm from './forms/i-i-s-fotokiosk9-клиент-e';
import IISFotokiosk9ОплатаEForm from './forms/i-i-s-fotokiosk9-оплата-e';
import IISFotokiosk9ОтправНаПочтуEForm from './forms/i-i-s-fotokiosk9-отправ-на-почту-e';
import IISFotokiosk9ПечатьEForm from './forms/i-i-s-fotokiosk9-печать-e';
import IISFotokiosk9СделатьФотоEForm from './forms/i-i-s-fotokiosk9-сделать-фото-e';
import IISFotokiosk9ДопНастройкиModel from './models/i-i-s-fotokiosk9-доп-настройки';
import IISFotokiosk9КлиентModel from './models/i-i-s-fotokiosk9-клиент';
import IISFotokiosk9ОплатаModel from './models/i-i-s-fotokiosk9-оплата';
import IISFotokiosk9ОтправНаПочтуModel from './models/i-i-s-fotokiosk9-отправ-на-почту';
import IISFotokiosk9ПечатьModel from './models/i-i-s-fotokiosk9-печать';
import IISFotokiosk9СделатьФотоModel from './models/i-i-s-fotokiosk9-сделать-фото';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-fotokiosk9-доп-настройки': IISFotokiosk9ДопНастройкиModel,
    'i-i-s-fotokiosk9-клиент': IISFotokiosk9КлиентModel,
    'i-i-s-fotokiosk9-оплата': IISFotokiosk9ОплатаModel,
    'i-i-s-fotokiosk9-отправ-на-почту': IISFotokiosk9ОтправНаПочтуModel,
    'i-i-s-fotokiosk9-печать': IISFotokiosk9ПечатьModel,
    'i-i-s-fotokiosk9-сделать-фото': IISFotokiosk9СделатьФотоModel
  },

  'application-name': 'Fotokiosk9',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Fotokiosk9',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Fotokiosk9',
          title: 'Fotokiosk9'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        fotokiosk9: {
          caption: 'Fotokiosk9',
          title: 'Fotokiosk9',
          'i-i-s-fotokiosk9-отправ-на-почту-l': {
            caption: 'Отправ на почту',
            title: ''
          },
          'i-i-s-fotokiosk9-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-fotokiosk9-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-fotokiosk9-печать-l': {
            caption: 'Печать',
            title: ''
          },
          'i-i-s-fotokiosk9-сделать-фото-l': {
            caption: 'Сделать фото',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-fotokiosk9-клиент-l': IISFotokiosk9КлиентLForm,
    'i-i-s-fotokiosk9-оплата-l': IISFotokiosk9ОплатаLForm,
    'i-i-s-fotokiosk9-отправ-на-почту-l': IISFotokiosk9ОтправНаПочтуLForm,
    'i-i-s-fotokiosk9-печать-l': IISFotokiosk9ПечатьLForm,
    'i-i-s-fotokiosk9-сделать-фото-l': IISFotokiosk9СделатьФотоLForm,
    'i-i-s-fotokiosk9-клиент-e': IISFotokiosk9КлиентEForm,
    'i-i-s-fotokiosk9-оплата-e': IISFotokiosk9ОплатаEForm,
    'i-i-s-fotokiosk9-отправ-на-почту-e': IISFotokiosk9ОтправНаПочтуEForm,
    'i-i-s-fotokiosk9-печать-e': IISFotokiosk9ПечатьEForm,
    'i-i-s-fotokiosk9-сделать-фото-e': IISFotokiosk9СделатьФотоEForm
  },

});

export default translations;
