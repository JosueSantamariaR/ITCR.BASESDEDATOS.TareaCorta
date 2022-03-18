using System.ComponentModel;
using TABAS_Mobile.ViewModels;
using Xamarin.Forms;

namespace TABAS_Mobile.Views
{
    public partial class ItemDetailPage : ContentPage
    {
        public ItemDetailPage()
        {
            InitializeComponent();
            BindingContext = new ItemDetailViewModel();
        }
    }
}