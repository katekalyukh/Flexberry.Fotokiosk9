export default {
  projections: {
    КлиентE: {
      отправНаПочту: {
        __caption__: 'ФИО',
        фИО: {
          __caption__: 'ФИО'
        },
        email: {
          __caption__: 'Email'
        }
      },
      оплата: {
        __caption__: 'Номер заказа',
        сделатьФото: {
          __caption__: '',
          id: {
            __caption__: 'Номер заказа'
          }
        },
        дата: {
          __caption__: 'Дата заказа'
        },
        время: {
          __caption__: 'Время заказа'
        },
        способОпл: {
          __caption__: 'Способ оплаты'
        },
        сумма: {
          __caption__: 'Сумма'
        }
      }
    },
    КлиентL: {
      отправНаПочту: {
        __caption__: 'Данные о клиенте',
        фИО: {
          __caption__: 'ФИО'
        },
        email: {
          __caption__: 'Email'
        }
      },
      оплата: {
        __caption__: 'Заказ',
        сделатьФото: {
          __caption__: '',
          id: {
            __caption__: 'Номер заказа'
          }
        },
        дата: {
          __caption__: 'Дата заказа'
        },
        время: {
          __caption__: 'Время заказа'
        },
        способОпл: {
          __caption__: 'Способ оплаты'
        },
        сумма: {
          __caption__: 'Сумма'
        }
      }
    }
  },
  validations: {
    оплата: {
      __caption__: 'Номер заказа'
    },
    отправНаПочту: {
      __caption__: 'ФИО'
    }
  }
};
