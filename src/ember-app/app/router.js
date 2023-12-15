import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-fotokiosk9-клиент-l');
  this.route('i-i-s-fotokiosk9-клиент-e',
  { path: 'i-i-s-fotokiosk9-клиент-e/:id' });
  this.route('i-i-s-fotokiosk9-клиент-e.new',
  { path: 'i-i-s-fotokiosk9-клиент-e/new' });
  this.route('i-i-s-fotokiosk9-оплата-l');
  this.route('i-i-s-fotokiosk9-оплата-e',
  { path: 'i-i-s-fotokiosk9-оплата-e/:id' });
  this.route('i-i-s-fotokiosk9-оплата-e.new',
  { path: 'i-i-s-fotokiosk9-оплата-e/new' });
  this.route('i-i-s-fotokiosk9-отправ-на-почту-l');
  this.route('i-i-s-fotokiosk9-отправ-на-почту-e',
  { path: 'i-i-s-fotokiosk9-отправ-на-почту-e/:id' });
  this.route('i-i-s-fotokiosk9-отправ-на-почту-e.new',
  { path: 'i-i-s-fotokiosk9-отправ-на-почту-e/new' });
  this.route('i-i-s-fotokiosk9-печать-l');
  this.route('i-i-s-fotokiosk9-печать-e',
  { path: 'i-i-s-fotokiosk9-печать-e/:id' });
  this.route('i-i-s-fotokiosk9-печать-e.new',
  { path: 'i-i-s-fotokiosk9-печать-e/new' });
  this.route('i-i-s-fotokiosk9-сделать-фото-l');
  this.route('i-i-s-fotokiosk9-сделать-фото-e',
  { path: 'i-i-s-fotokiosk9-сделать-фото-e/:id' });
  this.route('i-i-s-fotokiosk9-сделать-фото-e.new',
  { path: 'i-i-s-fotokiosk9-сделать-фото-e/new' });
});

export default Router;
