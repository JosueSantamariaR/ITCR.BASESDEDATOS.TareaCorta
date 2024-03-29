﻿using System.Reflection;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Json;
using Xamarin.Forms;
using Xamarin.Forms.Internals;

namespace TABAS_Mobile.ViewModels
{
    /// <summary>
    /// ViewModel for no photos page.
    /// </summary>
    [Preserve(AllMembers = true)]
    [DataContract]
    public class NoPhotosPageViewModel : BaseViewModel
    {
        #region Fields

        private static NoPhotosPageViewModel noPhotosPageViewModel;

        private string imagePath;

        private string header;

        private string content;

        private Command gobackCommand;

        #endregion

        #region Constructor

        /// <summary>
        /// Initializes a new instance for the <see cref="NoPhotosPageViewModel" /> class.
        /// </summary>
        public NoPhotosPageViewModel()
        {
        }

        #endregion

        #region Properties

        /// <summary>
        /// Gets or sets the value of no photos page view model.
        /// </summary>
        public static NoPhotosPageViewModel BindingContext =>
            noPhotosPageViewModel = PopulateData<NoPhotosPageViewModel>("errorAndEmpty.json");

        /// <summary>
        /// Gets or sets the ImagePath.
        /// </summary>
        [DataMember(Name = "noPhotosImagePath")]
        public string ImagePath
        {
            get
            {
                return this.imagePath;
            }

            set
            {
                this.SetProperty(ref this.imagePath, value);
            }
        }

        /// <summary>
        /// Gets or sets the Header.
        /// </summary>
        [DataMember(Name = "noPhotosHeader")]
        public string Header
        {
            get
            {
                return this.header;
            }

            set
            {
                this.SetProperty(ref this.header, value);
            }
        }

        /// <summary>
        /// Gets or sets the Content.
        /// </summary>
        [DataMember(Name = "noPhotosContent")]
        public string Content
        {
            get
            {
                return this.content;
            }

            set
            {
                this.SetProperty(ref this.content, value);
            }
        }

        #endregion

        #region Commands

        /// <summary>
        /// Gets the command that is executed when the Go back button is clicked.
        /// </summary>
        public Command GoBackCommand
        {
            get
            {
                return this.gobackCommand ?? (this.gobackCommand = new Command(this.GoBack));
            }
        }

        #endregion

        #region Methods

        /// <summary>
        /// Populates the data for view model from json file.
        /// </summary>
        /// <typeparam name="T">Type of view model.</typeparam>
        /// <param name="fileName">Json file to fetch data.</param>
        /// <returns>Returns the view model object.</returns>
        private static T PopulateData<T>(string fileName)
        {
            var file = "TABAS_Mobile.Data." + fileName;

            var assembly = typeof(App).GetTypeInfo().Assembly;

            T data;

            using (var stream = assembly.GetManifestResourceStream(file))
            {
                var serializer = new DataContractJsonSerializer(typeof(T));
                data = (T)serializer.ReadObject(stream);
            }

            return data;
        }

        /// <summary>
        /// Invoked when the Go back button is clicked.
        /// </summary>
        /// <param name="obj">The Object</param>
        private void GoBack(object obj)
        {
            // Do something
        }

        #endregion
    }
}
