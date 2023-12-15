import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.fotokiosk9.caption'),
          title: i18n.t('forms.application.sitemap.fotokiosk9.title'),
          children: [{
            link: 'i-i-s-fotokiosk9-отправ-на-почту-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-отправ-на-почту-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-отправ-на-почту-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-fotokiosk9-оплата-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-оплата-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-fotokiosk9-клиент-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-клиент-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-fotokiosk9-печать-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-печать-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-печать-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-fotokiosk9-сделать-фото-l',
            caption: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-сделать-фото-l.caption'),
            title: i18n.t('forms.application.sitemap.fotokiosk9.i-i-s-fotokiosk9-сделать-фото-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})