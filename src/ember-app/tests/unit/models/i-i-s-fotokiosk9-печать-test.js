import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk9-печать', 'Unit | Model | i-i-s-fotokiosk9-печать', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-fotokiosk9-доп-настройки',
    'model:i-i-s-fotokiosk9-клиент',
    'model:i-i-s-fotokiosk9-оплата',
    'model:i-i-s-fotokiosk9-отправ-на-почту',
    'model:i-i-s-fotokiosk9-печать',
    'model:i-i-s-fotokiosk9-сделать-фото',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
