using Xamarin.Forms.Internals;
using Xamarin.Forms.Xaml;
using Newtonsoft.Json;
using System.Net.Http;
using TABAS_Mobile.ViewModels;

using System;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Internals;
using Xamarin.Forms.Xaml;
namespace TABAS_Mobile.Views
{
    /// <summary>
    /// Page to login with user name and password
    /// </summary>
    [Preserve(AllMembers = true)]
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SimpleLoginPage
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SimpleLoginPage" /> class.
        /// </summary>
        public SimpleLoginPage()
        {
            this.InitializeComponent();
        }
        static string accept;
        static User usercito;
        public void CallAPIsync()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("//");
            var user = client.GetAsync(EmailEntry.Text).Result;
            if (user.IsSuccessStatusCode)
            {
                var response = user.Content.ReadAsStringAsync().Result;
                usercito = JsonConvert.DeserializeObject<User>(response);
                if (usercito.password == PasswordEntry.Text)
                {
                    accept = "Si";
                }
            }
            else
            {
                accept = "no";
            }
        }
        private void SignUpButton_OnClicked(object sender, EventArgs e)
        {
           
        }
        private async void LoginButtonMain_OnClicked(object sender, EventArgs e)
        {
            
        }
    }
}