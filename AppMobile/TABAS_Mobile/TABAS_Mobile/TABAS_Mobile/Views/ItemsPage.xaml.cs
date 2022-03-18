using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TABAS_Mobile.Models;
using TABAS_Mobile.ViewModels;
using TABAS_Mobile.Views;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace TABAS_Mobile.Views
{
    public partial class ItemsPage : ContentPage
    {
        ItemsViewModel _viewModel;

        public ItemsPage()
        {
            InitializeComponent();

            BindingContext = _viewModel = new ItemsViewModel();
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();
            _viewModel.OnAppearing();
        }
    }
}