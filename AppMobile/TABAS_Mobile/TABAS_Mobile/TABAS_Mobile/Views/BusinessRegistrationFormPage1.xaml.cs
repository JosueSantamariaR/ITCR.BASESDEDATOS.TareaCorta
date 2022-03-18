using Xamarin.Forms;
using Xamarin.Forms.Internals;
using Xamarin.Forms.Xaml;

namespace TABAS_Mobile.Views
{
    /// <summary>
    /// Page to add business details such as name, email address, and phone number.
    /// </summary>
    [Preserve(AllMembers = true)]
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class BusinessRegistrationFormPage1 : ContentPage
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BusinessRegistrationFormPage1" /> class.
        /// </summary>
        public BusinessRegistrationFormPage1()
        {
            this.InitializeComponent();
        }
    }
}