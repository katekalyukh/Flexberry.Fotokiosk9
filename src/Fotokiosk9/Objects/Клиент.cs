﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk9
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "ОтправНаПочту.ФИО as \'ФИО\'",
            "ОтправНаПочту.Email as \'Email\'",
            "Оплата.СделатьФото.Id as \'Номер заказа\'",
            "Оплата.Дата as \'Дата заказа\'",
            "Оплата.Время as \'Время заказа\'",
            "Оплата.СпособОпл as \'Способ оплаты\'",
            "Оплата.Сумма as \'Сумма\'"})]
    [View("КлиентL", new string[] {
            "ОтправНаПочту as \'Данные о клиенте\'",
            "ОтправНаПочту.ФИО as \'ФИО\'",
            "ОтправНаПочту.Email as \'Email\'",
            "Оплата as \'Заказ\'",
            "Оплата.СделатьФото.Id as \'Номер заказа\'",
            "Оплата.Дата as \'Дата заказа\'",
            "Оплата.Время as \'Время заказа\'",
            "Оплата.СпособОпл as \'Способ оплаты\'",
            "Оплата.Сумма as \'Сумма\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Fotokiosk9.Оплата fОплата;
        
        private IIS.Fotokiosk9.ОтправНаПочту fОтправНаПочту;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Оплата CustomAttributes)

        // *** End programmer edit section *** (Клиент.Оплата CustomAttributes)
        [PropertyStorage(new string[] {
                "Оплата"})]
        [NotNull()]
        public virtual IIS.Fotokiosk9.Оплата Оплата
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Оплата Get start)

                // *** End programmer edit section *** (Клиент.Оплата Get start)
                IIS.Fotokiosk9.Оплата result = this.fОплата;
                // *** Start programmer edit section *** (Клиент.Оплата Get end)

                // *** End programmer edit section *** (Клиент.Оплата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Оплата Set start)

                // *** End programmer edit section *** (Клиент.Оплата Set start)
                this.fОплата = value;
                // *** Start programmer edit section *** (Клиент.Оплата Set end)

                // *** End programmer edit section *** (Клиент.Оплата Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ОтправНаПочту CustomAttributes)

        // *** End programmer edit section *** (Клиент.ОтправНаПочту CustomAttributes)
        [PropertyStorage(new string[] {
                "ОтправНаПочту"})]
        [NotNull()]
        public virtual IIS.Fotokiosk9.ОтправНаПочту ОтправНаПочту
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Get start)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Get start)
                IIS.Fotokiosk9.ОтправНаПочту result = this.fОтправНаПочту;
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Get end)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Set start)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Set start)
                this.fОтправНаПочту = value;
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Set end)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Fotokiosk9.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Fotokiosk9.Клиент));
                }
            }
        }
    }
}
