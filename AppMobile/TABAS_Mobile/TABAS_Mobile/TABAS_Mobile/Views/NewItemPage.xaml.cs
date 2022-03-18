using System;
using System.Collections.Generic;
using System.ComponentModel;
using TABAS_Mobile.Models;
using TABAS_Mobile.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TABAS_Mobile.Views
{
    public partial class NewItemPage : ContentPage
    {
        public Item Item { get; set; }

        public NewItemPage()
        {
            InitializeComponent();
            BindingContext = new NewItemViewModel();
        }
    }
}