import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-fotokiosk9-клиент', 'Unit | Serializer | i-i-s-fotokiosk9-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-fotokiosk9-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-fotokiosk9-вид-оплаты',
    'transform:i-i-s-fotokiosk9-категория',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
