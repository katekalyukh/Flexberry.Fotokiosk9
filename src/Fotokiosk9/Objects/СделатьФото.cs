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
    /// Сделать фото.
    /// </summary>
    // *** Start programmer edit section *** (СделатьФото CustomAttributes)

    // *** End programmer edit section *** (СделатьФото CustomAttributes)
    [AutoAltered()]
    [Caption("Сделать фото")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СделатьФотоE", new string[] {
            "Id as \'Код\'",
            "КолВоФото as \'Количество фото\'",
            "КатегорФото as \'Категория фото\'",
            "Цена as \'Цена(руб)\'"})]
    [AssociatedDetailViewAttribute("СделатьФотоE", "ДопНастройки", "ДопНастройкиE", true, "", "Дополнительные настройки", true, new string[] {
            ""})]
    [View("СделатьФотоL", new string[] {
            "Id as \'Код\'",
            "КолВоФото as \'Количество фото\'",
            "КатегорФото as \'Категория фото\'",
            "Цена as \'Цена(руб)\'"})]
    [AssociatedDetailViewAttribute("СделатьФотоL", "ДопНастройки", "ДопНастройкиE", false, "", "Дополнительные настройки", true, new string[] {
            ""})]
    public class СделатьФото : ICSSoft.STORMNET.DataObject
    {
        
        private int fКолВоФото;
        
        private IIS.Fotokiosk9.Категория fКатегорФото;
        
        private int fЦена;
        
        private int fId;
        
        private IIS.Fotokiosk9.DetailArrayOfДопНастройки fДопНастройки;
        
        // *** Start programmer edit section *** (СделатьФото CustomMembers)

        // *** End programmer edit section *** (СделатьФото CustomMembers)

        
        /// <summary>
        /// Id.
        /// </summary>
        // *** Start programmer edit section *** (СделатьФото.Id CustomAttributes)

        // *** End programmer edit section *** (СделатьФото.Id CustomAttributes)
        public virtual int Id
        {
            get
            {
                // *** Start programmer edit section *** (СделатьФото.Id Get start)

                // *** End programmer edit section *** (СделатьФото.Id Get start)
                int result = this.fId;
                // *** Start programmer edit section *** (СделатьФото.Id Get end)

                // *** End programmer edit section *** (СделатьФото.Id Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СделатьФото.Id Set start)

                // *** End programmer edit section *** (СделатьФото.Id Set start)
                this.fId = value;
                // *** Start programmer edit section *** (СделатьФото.Id Set end)

                // *** End programmer edit section *** (СделатьФото.Id Set end)
            }
        }
        
        /// <summary>
        /// КатегорФото.
        /// </summary>
        // *** Start programmer edit section *** (СделатьФото.КатегорФото CustomAttributes)

        // *** End programmer edit section *** (СделатьФото.КатегорФото CustomAttributes)
        public virtual IIS.Fotokiosk9.Категория КатегорФото
        {
            get
            {
                // *** Start programmer edit section *** (СделатьФото.КатегорФото Get start)

                // *** End programmer edit section *** (СделатьФото.КатегорФото Get start)
                IIS.Fotokiosk9.Категория result = this.fКатегорФото;
                // *** Start programmer edit section *** (СделатьФото.КатегорФото Get end)

                // *** End programmer edit section *** (СделатьФото.КатегорФото Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СделатьФото.КатегорФото Set start)

                // *** End programmer edit section *** (СделатьФото.КатегорФото Set start)
                this.fКатегорФото = value;
                // *** Start programmer edit section *** (СделатьФото.КатегорФото Set end)

                // *** End programmer edit section *** (СделатьФото.КатегорФото Set end)
            }
        }
        
        /// <summary>
        /// КолВоФото.
        /// </summary>
        // *** Start programmer edit section *** (СделатьФото.КолВоФото CustomAttributes)

        // *** End programmer edit section *** (СделатьФото.КолВоФото CustomAttributes)
        public virtual int КолВоФото
        {
            get
            {
                // *** Start programmer edit section *** (СделатьФото.КолВоФото Get start)

                // *** End programmer edit section *** (СделатьФото.КолВоФото Get start)
                int result = this.fКолВоФото;
                // *** Start programmer edit section *** (СделатьФото.КолВоФото Get end)

                // *** End programmer edit section *** (СделатьФото.КолВоФото Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СделатьФото.КолВоФото Set start)

                // *** End programmer edit section *** (СделатьФото.КолВоФото Set start)
                this.fКолВоФото = value;
                // *** Start programmer edit section *** (СделатьФото.КолВоФото Set end)

                // *** End programmer edit section *** (СделатьФото.КолВоФото Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (СделатьФото.Цена CustomAttributes)

        // *** End programmer edit section *** (СделатьФото.Цена CustomAttributes)
        public virtual int Цена
        {
            get
            {
                // *** Start programmer edit section *** (СделатьФото.Цена Get start)

                // *** End programmer edit section *** (СделатьФото.Цена Get start)
                int result = this.fЦена;
                // *** Start programmer edit section *** (СделатьФото.Цена Get end)

                // *** End programmer edit section *** (СделатьФото.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СделатьФото.Цена Set start)

                // *** End programmer edit section *** (СделатьФото.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (СделатьФото.Цена Set end)

                // *** End programmer edit section *** (СделатьФото.Цена Set end)
            }
        }
        
        /// <summary>
        /// Сделать фото.
        /// </summary>
        // *** Start programmer edit section *** (СделатьФото.ДопНастройки CustomAttributes)

        // *** End programmer edit section *** (СделатьФото.ДопНастройки CustomAttributes)
        public virtual IIS.Fotokiosk9.DetailArrayOfДопНастройки ДопНастройки
        {
            get
            {
                // *** Start programmer edit section *** (СделатьФото.ДопНастройки Get start)

                // *** End programmer edit section *** (СделатьФото.ДопНастройки Get start)
                if ((this.fДопНастройки == null))
                {
                    this.fДопНастройки = new IIS.Fotokiosk9.DetailArrayOfДопНастройки(this);
                }
                IIS.Fotokiosk9.DetailArrayOfДопНастройки result = this.fДопНастройки;
                // *** Start programmer edit section *** (СделатьФото.ДопНастройки Get end)

                // *** End programmer edit section *** (СделатьФото.ДопНастройки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (СделатьФото.ДопНастройки Set start)

                // *** End programmer edit section *** (СделатьФото.ДопНастройки Set start)
                this.fДопНастройки = value;
                // *** Start programmer edit section *** (СделатьФото.ДопНастройки Set end)

                // *** End programmer edit section *** (СделатьФото.ДопНастройки Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СделатьФотоE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СделатьФотоE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СделатьФотоE", typeof(IIS.Fotokiosk9.СделатьФото));
                }
            }
            
            /// <summary>
            /// "СделатьФотоL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СделатьФотоL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СделатьФотоL", typeof(IIS.Fotokiosk9.СделатьФото));
                }
            }
        }
    }
}
